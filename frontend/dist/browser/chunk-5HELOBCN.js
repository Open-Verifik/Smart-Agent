import {
  SmartScanService
} from "./chunk-T477ZOJL.js";
import {
  formatCatalogPrice
} from "./chunk-YSIFJH6G.js";
import {
  docsPageUrl
} from "./chunk-Z6YVHGZ4.js";
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
  MatLabel
} from "./chunk-QUFOCOZK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  InjectionToken,
  Location,
  NgTemplateOutlet,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YWP2Y7QK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard.token.ts
var DOCUMENT_TYPE_WIZARD = new InjectionToken("DOCUMENT_TYPE_WIZARD");

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-details.component.ts
function DocumentTypeWizardDetailsComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "smartScan.categories." + item_r1));
  }
}
function DocumentTypeWizardDetailsComponent_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "smartScan.wizard." + ctx_r2.copyKey + "." + note_r2));
  }
}
var DocumentTypeWizardDetailsComponent = class _DocumentTypeWizardDetailsComponent {
  constructor() {
    this.wizard = inject(DOCUMENT_TYPE_WIZARD);
    this.copyKey = "details";
    this.notes = ["noteCountry", "noteCode", "noteCategory"];
  }
  static {
    this.\u0275fac = function DocumentTypeWizardDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypeWizardDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypeWizardDetailsComponent, selectors: [["document-type-wizard-details"]], decls: 129, vars: 78, consts: [[1, "wizard-screen"], [1, "wizard-hero"], [1, "wizard-hero__eyebrow"], [1, "wizard-hero__choice"], [1, "wizard-decision"], [1, "wizard-form"], [1, "section-heading"], [1, "field-card"], [1, "field-card__icon"], [1, "field-card__content"], [1, "field-card__title"], [1, "field-card__body"], [1, "input-stack"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", 3, "ngModelChange", "ngModel"], [1, "input-grid"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "wizard-explainer"], [1, "section-heading", "section-heading--light"], [1, "explainer-notes"], [1, "wizard-facts"], [1, "fact-icon", "fact-icon--code"], [1, "fact-icon", "fact-icon--country"], [1, "fact-icon", "fact-icon--private"]], template: function DocumentTypeWizardDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 3)(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "strong");
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 4)(19, "section", 5)(20, "div", 6)(21, "span");
        \u0275\u0275text(22, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "h3");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "article", 7)(31, "span", 8)(32, "mat-icon");
        \u0275\u0275text(33, "badge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 9)(35, "span", 10)(36, "strong");
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "small");
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "span", 11);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 12)(46, "mat-form-field", 13)(47, "mat-label");
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardDetailsComponent_Template_input_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.wizard.name, $event) || (ctx.wizard.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "mat-form-field", 13)(52, "mat-label");
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "input", 14);
        \u0275\u0275listener("ngModelChange", function DocumentTypeWizardDetailsComponent_Template_input_ngModelChange_55_listener($event) {
          return ctx.wizard.onCodeInput($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(56, "article", 7)(57, "span", 8)(58, "mat-icon");
        \u0275\u0275text(59, "category");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 9)(61, "span", 10)(62, "strong");
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "span", 11);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 15)(69, "mat-form-field", 13)(70, "mat-label");
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "mat-select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardDetailsComponent_Template_mat_select_ngModelChange_73_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.wizard.category, $event) || (ctx.wizard.category = $event);
          return $event;
        });
        \u0275\u0275repeaterCreate(74, DocumentTypeWizardDetailsComponent_For_75_Template, 3, 4, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "mat-form-field", 13)(77, "mat-label");
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardDetailsComponent_Template_input_ngModelChange_80_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.wizard.version, $event) || (ctx.wizard.version = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(81, "aside", 18)(82, "div", 19)(83, "span");
        \u0275\u0275text(84, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div")(86, "h3");
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p");
        \u0275\u0275text(90);
        \u0275\u0275pipe(91, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 20);
        \u0275\u0275repeaterCreate(93, DocumentTypeWizardDetailsComponent_For_94_Template, 6, 3, "article", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "section", 21)(96, "article")(97, "span", 22)(98, "mat-icon");
        \u0275\u0275text(99, "tag");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div")(101, "strong");
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p");
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "article")(108, "span", 23)(109, "mat-icon");
        \u0275\u0275text(110, "public");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div")(112, "strong");
        \u0275\u0275text(113);
        \u0275\u0275pipe(114, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "p");
        \u0275\u0275text(116);
        \u0275\u0275pipe(117, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "article")(119, "span", 24)(120, "mat-icon");
        \u0275\u0275text(121, "lock");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div")(123, "strong");
        \u0275\u0275text(124);
        \u0275\u0275pipe(125, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "p");
        \u0275\u0275text(127);
        \u0275\u0275pipe(128, "transloco");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 32, "smartScan.wizard." + ctx.copyKey + ".eyebrow"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 34, "smartScan.wizard." + ctx.copyKey + ".title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 36, "smartScan.wizard." + ctx.copyKey + ".subtitle"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 38, "smartScan.wizard." + ctx.copyKey + ".choiceLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.wizard.countryLabel);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 40, "smartScan.wizard.details.sectionTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 42, "smartScan.wizard.details.sectionHelp"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("field-card--ready", ctx.wizard.identityReady);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 44, "smartScan.wizard.details.identityTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 46, "smartScan.wizard.details.required"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 48, "smartScan.wizard.details.identityBody"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 50, "smartScan.wizard.name"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.wizard.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 52, "smartScan.wizard.code"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.wizard.code);
        \u0275\u0275advance();
        \u0275\u0275classProp("field-card--ready", !!ctx.wizard.category);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 54, "smartScan.wizard.details.classificationTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 56, "smartScan.wizard.details.classificationBody"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 58, "smartScan.wizard.category"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.wizard.category);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.wizard.categories);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 60, "smartScan.wizard.version"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.wizard.version);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 62, "smartScan.wizard." + ctx.copyKey + ".explainTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 64, "smartScan.wizard." + ctx.copyKey + ".explainHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.notes);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 66, "smartScan.wizard.details.factCodeTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 68, "smartScan.wizard.details.factCodeBody"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 70, "smartScan.wizard.details.factCountryTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 72, "smartScan.wizard.details.factCountryBody"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(125, 74, "smartScan.wizard.details.factPrivateTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 76, "smartScan.wizard.details.factPrivateBody"));
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatFormFieldModule, MatFormField, MatLabel, MatIconModule, MatIcon, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, TranslocoModule, TranslocoPipe], styles: ["\n\n.wizard-error[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.wizard-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form[_ngcontent-%COMP%], \n.wizard-explainer[_ngcontent-%COMP%], \n.wizard-samples[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box[_ngcontent-%COMP%]    + .field-box[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n.field-box__heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.field-row__key[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack[_ngcontent-%COMP%], \n.input-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop[_ngcontent-%COMP%]:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-drop__preview[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.sample-frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.try-extract__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.explainer-notes[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n.dark[_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision[_ngcontent-%COMP%], \n   .wizard-facts[_ngcontent-%COMP%], \n   .input-grid[_ngcontent-%COMP%], \n   .side-choices[_ngcontent-%COMP%], \n   .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=document-type-wizard-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypeWizardDetailsComponent, [{
    type: Component,
    args: [{ selector: "document-type-wizard-details", standalone: true, imports: [FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, TranslocoModule], template: `<div class="wizard-screen">\r
    <header class="wizard-hero">\r
        <div>\r
            <span class="wizard-hero__eyebrow">{{ 'smartScan.wizard.' + copyKey + '.eyebrow' | transloco }}</span>\r
            <h2>{{ 'smartScan.wizard.' + copyKey + '.title' | transloco }}</h2>\r
            <p>{{ 'smartScan.wizard.' + copyKey + '.subtitle' | transloco }}</p>\r
        </div>\r
        <div class="wizard-hero__choice">\r
            <span>{{ 'smartScan.wizard.' + copyKey + '.choiceLabel' | transloco }}</span>\r
            <strong>{{ wizard.countryLabel }}</strong>\r
        </div>\r
    </header>\r
\r
    <div class="wizard-decision">\r
        <section class="wizard-form">\r
            <div class="section-heading">\r
                <span>01</span>\r
                <div>\r
                    <h3>{{ 'smartScan.wizard.details.sectionTitle' | transloco }}</h3>\r
                    <p>{{ 'smartScan.wizard.details.sectionHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            <article class="field-card" [class.field-card--ready]="wizard.identityReady">\r
                <span class="field-card__icon"><mat-icon>badge</mat-icon></span>\r
                <div class="field-card__content">\r
                    <span class="field-card__title">\r
                        <strong>{{ 'smartScan.wizard.details.identityTitle' | transloco }}</strong>\r
                        <small>{{ 'smartScan.wizard.details.required' | transloco }}</small>\r
                    </span>\r
                    <span class="field-card__body">{{ 'smartScan.wizard.details.identityBody' | transloco }}</span>\r
                    <div class="input-stack">\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                            <mat-label>{{ 'smartScan.wizard.name' | transloco }}</mat-label>\r
                            <input matInput [(ngModel)]="wizard.name" />\r
                        </mat-form-field>\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                            <mat-label>{{ 'smartScan.wizard.code' | transloco }}</mat-label>\r
                            <input matInput [ngModel]="wizard.code" (ngModelChange)="wizard.onCodeInput($event)" />\r
                        </mat-form-field>\r
                    </div>\r
                </div>\r
            </article>\r
            <article class="field-card" [class.field-card--ready]="!!wizard.category">\r
                <span class="field-card__icon"><mat-icon>category</mat-icon></span>\r
                <div class="field-card__content">\r
                    <span class="field-card__title">\r
                        <strong>{{ 'smartScan.wizard.details.classificationTitle' | transloco }}</strong>\r
                    </span>\r
                    <span class="field-card__body">{{ 'smartScan.wizard.details.classificationBody' | transloco }}</span>\r
                    <div class="input-grid">\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                            <mat-label>{{ 'smartScan.wizard.category' | transloco }}</mat-label>\r
                            <mat-select [(ngModel)]="wizard.category">\r
                                @for (item of wizard.categories; track item) {\r
                                    <mat-option [value]="item">{{ 'smartScan.categories.' + item | transloco }}</mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                            <mat-label>{{ 'smartScan.wizard.version' | transloco }}</mat-label>\r
                            <input matInput [(ngModel)]="wizard.version" />\r
                        </mat-form-field>\r
                    </div>\r
                </div>\r
            </article>\r
        </section>\r
\r
        <aside class="wizard-explainer">\r
            <div class="section-heading section-heading--light">\r
                <span>02</span>\r
                <div>\r
                    <h3>{{ 'smartScan.wizard.' + copyKey + '.explainTitle' | transloco }}</h3>\r
                    <p>{{ 'smartScan.wizard.' + copyKey + '.explainHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            <div class="explainer-notes">\r
                @for (note of notes; track note) {\r
                    <article>\r
                        <mat-icon>info</mat-icon>\r
                        <p>{{ 'smartScan.wizard.' + copyKey + '.' + note | transloco }}</p>\r
                    </article>\r
                }\r
            </div>\r
        </aside>\r
    </div>\r
\r
    <section class="wizard-facts">\r
        <article>\r
            <span class="fact-icon fact-icon--code"><mat-icon>tag</mat-icon></span>\r
            <div>\r
                <strong>{{ 'smartScan.wizard.details.factCodeTitle' | transloco }}</strong>\r
                <p>{{ 'smartScan.wizard.details.factCodeBody' | transloco }}</p>\r
            </div>\r
        </article>\r
        <article>\r
            <span class="fact-icon fact-icon--country"><mat-icon>public</mat-icon></span>\r
            <div>\r
                <strong>{{ 'smartScan.wizard.details.factCountryTitle' | transloco }}</strong>\r
                <p>{{ 'smartScan.wizard.details.factCountryBody' | transloco }}</p>\r
            </div>\r
        </article>\r
        <article>\r
            <span class="fact-icon fact-icon--private"><mat-icon>lock</mat-icon></span>\r
            <div>\r
                <strong>{{ 'smartScan.wizard.details.factPrivateTitle' | transloco }}</strong>\r
                <p>{{ 'smartScan.wizard.details.factPrivateBody' | transloco }}</p>\r
            </div>\r
        </article>\r
    </section>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-details.component.scss */\n.wizard-error {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero h2 {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero p {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice span {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice strong {\n  font-size: 0.95rem;\n}\n.wizard-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form,\n.wizard-explainer,\n.wizard-samples {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading > span {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading h3 {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading p {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light > span {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box + .field-box {\n  margin-top: 0.85rem;\n}\n.field-box__heading {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row strong {\n  font-size: 0.88rem;\n}\n.field-row__key {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title strong {\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack,\n.input-grid {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice strong {\n  font-size: 0.92rem;\n}\n.side-choice span {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop input {\n  display: none;\n}\n.image-drop__preview {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples {\n  background: #fff;\n}\n.sample-frame {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract {\n  justify-self: start;\n}\n.try-extract__hint {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list h3 {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list article {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list strong {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list span {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name span {\n  color: #b91c1c;\n}\n.explainer-notes {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes article {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes p {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts article {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts strong {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts p {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n:host-context(.dark) .wizard-hero p,\n:host-context(.dark) .wizard-hero__choice span,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-card__title small,\n:host-context(.dark) .side-choice span,\n:host-context(.dark) .wizard-facts p {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-hero__choice,\n:host-context(.dark) .wizard-decision,\n:host-context(.dark) .field-card,\n:host-context(.dark) .field-box,\n:host-context(.dark) .field-row,\n:host-context(.dark) .side-choice,\n:host-context(.dark) .wizard-facts article {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .field-box__heading,\n:host-context(.dark) .field-row__key,\n:host-context(.dark) .field-row__type {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-explainer {\n  background: #020617;\n}\n:host-context(.dark) .wizard-samples {\n  background: #1e293b;\n}\n:host-context(.dark) .sample-frame,\n:host-context(.dark) .extraction-list article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .try-extract__hint,\n:host-context(.dark) .extraction-list strong {\n  color: #94a3b8;\n}\n:host-context(.dark) .section-heading > span,\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .fact-icon,\n:host-context(.dark) .image-drop {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready,\n:host-context(.dark) .field-row--ready,\n:host-context(.dark) .side-choice--ready {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .explainer-notes p {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision,\n  .wizard-facts,\n  .input-grid,\n  .side-choices,\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=document-type-wizard-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypeWizardDetailsComponent, { className: "DocumentTypeWizardDetailsComponent", filePath: "src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-details.component.ts", lineNumber: 17 });
})();

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-fields.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0, a1) => ({ $implicit: a0, index: a1 });
var _forTrack0 = ($index, $item) => $item.key;
function DocumentTypeWizardFieldsComponent_For_36_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DocumentTypeWizardFieldsComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocumentTypeWizardFieldsComponent_For_36_ng_container_0_Template, 1, 0, "ng-container", 19);
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    \u0275\u0275nextContext();
    const fieldEditor_r4 = \u0275\u0275reference(55);
    \u0275\u0275property("ngTemplateOutlet", fieldEditor_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c1, field_r2, $index_r3));
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_40_For_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_40_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocumentTypeWizardFieldsComponent_Conditional_40_For_5_ng_container_0_Template, 1, 0, "ng-container", 19);
  }
  if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    \u0275\u0275nextContext(2);
    const fieldEditor_r4 = \u0275\u0275reference(55);
    \u0275\u0275property("ngTemplateOutlet", fieldEditor_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c1, field_r6, $index_r7));
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 8)(1, "h4", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DocumentTypeWizardFieldsComponent_Conditional_40_For_5_Template, 1, 5, "ng-container", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function DocumentTypeWizardFieldsComponent_Conditional_40_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.wizard.addField(1));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartScan.wizard.backPage"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r7.wizard.backFields);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartScan.wizard.addField"), " ");
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r7.wizard.frontImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r7.wizard.backImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartScan.wizard.fieldsStep.tryExtract"), " ");
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r7.wizard.extractionError);
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_52_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.value);
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DocumentTypeWizardFieldsComponent_Conditional_52_For_5_Template, 5, 2, "article", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartScan.wizard.fieldsStep.extractionResult"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r7.wizard.extractionRows);
  }
}
function DocumentTypeWizardFieldsComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.wizard.fieldsStep.extractionEmpty"));
  }
}
function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const field_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.wizard.moveField(field_r12, field_r12.page === 1 ? 0 : 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, field_r12.page === 1 ? "smartScan.wizard.moveToFront" : "smartScan.wizard.moveToBack"), " ");
  }
}
function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r13 = ctx.$implicit;
    \u0275\u0275property("value", type_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r13);
  }
}
function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 22)(1, "span", 23)(2, "mat-icon");
    \u0275\u0275text(3, "data_object");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "span", 25)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 26);
    \u0275\u0275template(9, DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Conditional_9_Template, 3, 3, "button", 27);
    \u0275\u0275elementStart(10, "button", 28);
    \u0275\u0275listener("click", function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const field_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.wizard.removeField(field_r12));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 29)(14, "mat-form-field", 30)(15, "mat-label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const field_r12 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r12.name, $event) || (field_r12.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 30)(20, "mat-label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const field_r12 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r12.mapKey, $event) || (field_r12.mapKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 30)(25, "mat-label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Template_mat_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const field_r12 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r12.type, $event) || (field_r12.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(29, DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_For_30_Template, 2, 2, "mat-option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext();
    const field_r12 = ctx_r13.$implicit;
    const index_r15 = ctx_r13.index;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275classProp("field-card--ready", !!(field_r12.name.trim() && field_r12.mapKey.trim()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r7.wizard.fieldLabel(field_r12, index_r15));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r7.wizard.requiresBackSide ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "smartScan.wizard.remove"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "smartScan.wizard.fieldName"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", field_r12.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "smartScan.wizard.mapKey"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", field_r12.mapKey);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 17, "smartScan.wizard.fieldType"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", field_r12.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r7.wizard.fieldTypes);
  }
}
function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const field_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.wizard.toggleField(field_r12));
    });
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext();
    const field_r12 = ctx_r13.$implicit;
    const index_r15 = ctx_r13.index;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275classProp("field-row--ready", !!(field_r12.name.trim() && field_r12.mapKey.trim()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r7.wizard.fieldLabel(field_r12, index_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r12.mapKey);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r12.type);
  }
}
function DocumentTypeWizardFieldsComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_0_Template, 31, 19, "article", 20)(1, DocumentTypeWizardFieldsComponent_ng_template_54_Conditional_1_Template, 7, 5, "button", 21);
  }
  if (rf & 2) {
    const field_r12 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r7.wizard.expandedField === field_r12 ? 0 : 1);
  }
}
var DocumentTypeWizardFieldsComponent = class _DocumentTypeWizardFieldsComponent {
  constructor() {
    this.wizard = inject(DOCUMENT_TYPE_WIZARD);
    this.copyKey = "fieldsStep";
  }
  static {
    this.\u0275fac = function DocumentTypeWizardFieldsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypeWizardFieldsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypeWizardFieldsComponent, selectors: [["document-type-wizard-fields"]], decls: 56, vars: 40, consts: [["fieldEditor", ""], [1, "wizard-screen"], [1, "wizard-hero"], [1, "wizard-hero__eyebrow"], [1, "wizard-hero__choice"], [1, "wizard-decision"], [1, "wizard-form"], [1, "section-heading"], [1, "field-box"], [1, "field-box__heading"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "wizard-samples"], [1, "sample-frame"], ["alt", "", 1, "image-drop__preview", 3, "src"], ["mat-stroked-button", "", "type", "button", 1, "try-extract", 3, "click", "disabled"], ["diameter", "18"], [1, "try-extract__hint"], [1, "wizard-error"], [1, "extraction-list"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "field-card", 3, "field-card--ready"], ["type", "button", 1, "field-row", 3, "field-row--ready"], [1, "field-card"], [1, "field-card__icon"], [1, "field-card__content"], [1, "field-card__title"], [1, "field-card__actions"], ["type", "button", 1, "text-button"], ["type", "button", 1, "text-button", 3, "click"], [1, "input-grid"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], ["type", "button", 1, "field-row", 3, "click"], [1, "field-row__key"], [1, "field-row__type"]], template: function DocumentTypeWizardFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div")(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 4)(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "strong");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 5)(20, "section", 6)(21, "div", 7)(22, "span");
        \u0275\u0275text(23, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div")(25, "h3");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "section", 8)(32, "h4", 9);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(35, DocumentTypeWizardFieldsComponent_For_36_Template, 1, 5, "ng-container", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(37, "button", 10);
        \u0275\u0275listener("click", function DocumentTypeWizardFieldsComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.wizard.addField(0));
        });
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, DocumentTypeWizardFieldsComponent_Conditional_40_Template, 9, 6, "section", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "aside", 11)(42, "div", 12);
        \u0275\u0275template(43, DocumentTypeWizardFieldsComponent_Conditional_43_Template, 1, 1, "img", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, DocumentTypeWizardFieldsComponent_Conditional_44_Template, 2, 1, "div", 12);
        \u0275\u0275elementStart(45, "button", 14);
        \u0275\u0275listener("click", function DocumentTypeWizardFieldsComponent_Template_button_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.wizard.tryExtraction());
        });
        \u0275\u0275template(46, DocumentTypeWizardFieldsComponent_Conditional_46_Template, 1, 0, "mat-spinner", 15)(47, DocumentTypeWizardFieldsComponent_Conditional_47_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 16);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, DocumentTypeWizardFieldsComponent_Conditional_51_Template, 2, 1, "p", 17)(52, DocumentTypeWizardFieldsComponent_Conditional_52_Template, 6, 3, "div", 18)(53, DocumentTypeWizardFieldsComponent_Conditional_53_Template, 3, 3, "p", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(54, DocumentTypeWizardFieldsComponent_ng_template_54_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 17, "smartScan.wizard." + ctx.copyKey + ".eyebrow"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 19, "smartScan.wizard." + ctx.copyKey + ".title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 21, "smartScan.wizard." + ctx.copyKey + ".subtitle"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 23, "smartScan.wizard." + ctx.copyKey + ".choiceLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 25, "smartScan.wizard.fieldsStep.choice", \u0275\u0275pureFunction1(38, _c0, ctx.wizard.filledFieldCount)));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 28, "smartScan.wizard.fieldsStep.sectionTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 30, "smartScan.wizard.fieldsStep.sectionHelp"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 32, "smartScan.wizard.frontPage"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.wizard.frontFields);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 34, "smartScan.wizard.addField"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.wizard.requiresBackSide ? 40 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.wizard.frontImage ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.wizard.requiresBackSide && ctx.wizard.backImage ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.wizard.canTryExtraction());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.wizard.extracting ? 46 : 47);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 36, "smartScan.wizard.fieldsStep.tryExtractHint"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.wizard.extractionError ? 51 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.wizard.extractionRows.length ? 52 : ctx.wizard.extractionAttempted && !ctx.wizard.extracting && !ctx.wizard.extractionError ? 53 : -1);
      }
    }, dependencies: [
      NgTemplateOutlet,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n.wizard-error[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.wizard-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form[_ngcontent-%COMP%], \n.wizard-explainer[_ngcontent-%COMP%], \n.wizard-samples[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box[_ngcontent-%COMP%]    + .field-box[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n.field-box__heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.field-row__key[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack[_ngcontent-%COMP%], \n.input-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop[_ngcontent-%COMP%]:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-drop__preview[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.sample-frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.try-extract__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.explainer-notes[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n.dark[_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision[_ngcontent-%COMP%], \n   .wizard-facts[_ngcontent-%COMP%], \n   .input-grid[_ngcontent-%COMP%], \n   .side-choices[_ngcontent-%COMP%], \n   .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=document-type-wizard-fields.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypeWizardFieldsComponent, [{
    type: Component,
    args: [{ selector: "document-type-wizard-fields", standalone: true, imports: [
      NgTemplateOutlet,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      TranslocoModule
    ], template: `<div class="wizard-screen">\r
    <header class="wizard-hero">\r
        <div>\r
            <span class="wizard-hero__eyebrow">{{ 'smartScan.wizard.' + copyKey + '.eyebrow' | transloco }}</span>\r
            <h2>{{ 'smartScan.wizard.' + copyKey + '.title' | transloco }}</h2>\r
            <p>{{ 'smartScan.wizard.' + copyKey + '.subtitle' | transloco }}</p>\r
        </div>\r
        <div class="wizard-hero__choice">\r
            <span>{{ 'smartScan.wizard.' + copyKey + '.choiceLabel' | transloco }}</span>\r
            <strong>{{ 'smartScan.wizard.fieldsStep.choice' | transloco: { count: wizard.filledFieldCount } }}</strong>\r
        </div>\r
    </header>\r
\r
    <div class="wizard-decision">\r
        <section class="wizard-form">\r
            <div class="section-heading">\r
                <span>01</span>\r
                <div>\r
                    <h3>{{ 'smartScan.wizard.fieldsStep.sectionTitle' | transloco }}</h3>\r
                    <p>{{ 'smartScan.wizard.fieldsStep.sectionHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            <section class="field-box">\r
                <h4 class="field-box__heading">{{ 'smartScan.wizard.frontPage' | transloco }}</h4>\r
                @for (field of wizard.frontFields; track field) {\r
                    <ng-container *ngTemplateOutlet="fieldEditor; context: { $implicit: field, index: $index }" />\r
                }\r
                <button mat-stroked-button type="button" (click)="wizard.addField(0)">\r
                    {{ 'smartScan.wizard.addField' | transloco }}\r
                </button>\r
            </section>\r
            @if (wizard.requiresBackSide) {\r
                <section class="field-box">\r
                    <h4 class="field-box__heading">{{ 'smartScan.wizard.backPage' | transloco }}</h4>\r
                    @for (field of wizard.backFields; track field) {\r
                        <ng-container *ngTemplateOutlet="fieldEditor; context: { $implicit: field, index: $index }" />\r
                    }\r
                    <button mat-stroked-button type="button" (click)="wizard.addField(1)">\r
                        {{ 'smartScan.wizard.addField' | transloco }}\r
                    </button>\r
                </section>\r
            }\r
        </section>\r
\r
        <aside class="wizard-samples">\r
            <div class="sample-frame">\r
                @if (wizard.frontImage) {\r
                    <img class="image-drop__preview" [src]="wizard.frontImage" alt="" />\r
                }\r
            </div>\r
            @if (wizard.requiresBackSide && wizard.backImage) {\r
                <div class="sample-frame">\r
                    <img class="image-drop__preview" [src]="wizard.backImage" alt="" />\r
                </div>\r
            }\r
            <button mat-stroked-button type="button" class="try-extract" [disabled]="!wizard.canTryExtraction()" (click)="wizard.tryExtraction()">\r
                @if (wizard.extracting) {\r
                    <mat-spinner diameter="18"></mat-spinner>\r
                } @else {\r
                    {{ 'smartScan.wizard.fieldsStep.tryExtract' | transloco }}\r
                }\r
            </button>\r
            <p class="try-extract__hint">{{ 'smartScan.wizard.fieldsStep.tryExtractHint' | transloco }}</p>\r
            @if (wizard.extractionError) {\r
                <p class="wizard-error">{{ wizard.extractionError }}</p>\r
            }\r
            @if (wizard.extractionRows.length) {\r
                <div class="extraction-list">\r
                    <h3>{{ 'smartScan.wizard.fieldsStep.extractionResult' | transloco }}</h3>\r
                    @for (row of wizard.extractionRows; track row.key) {\r
                        <article>\r
                            <strong>{{ row.key }}</strong>\r
                            <span>{{ row.value }}</span>\r
                        </article>\r
                    }\r
                </div>\r
            } @else if (wizard.extractionAttempted && !wizard.extracting && !wizard.extractionError) {\r
                <p class="try-extract__hint">{{ 'smartScan.wizard.fieldsStep.extractionEmpty' | transloco }}</p>\r
            }\r
        </aside>\r
    </div>\r
</div>\r
\r
<ng-template #fieldEditor let-field let-index="index">\r
    @if (wizard.expandedField === field) {\r
        <article class="field-card" [class.field-card--ready]="!!(field.name.trim() && field.mapKey.trim())">\r
            <span class="field-card__icon"><mat-icon>data_object</mat-icon></span>\r
            <div class="field-card__content">\r
                <span class="field-card__title">\r
                    <strong>{{ wizard.fieldLabel(field, index) }}</strong>\r
                    <span class="field-card__actions">\r
                        @if (wizard.requiresBackSide) {\r
                            <button type="button" class="text-button" (click)="wizard.moveField(field, field.page === 1 ? 0 : 1)">\r
                                {{ (field.page === 1 ? 'smartScan.wizard.moveToFront' : 'smartScan.wizard.moveToBack') | transloco }}\r
                            </button>\r
                        }\r
                        <button type="button" class="text-button" (click)="wizard.removeField(field)">\r
                            {{ 'smartScan.wizard.remove' | transloco }}\r
                        </button>\r
                    </span>\r
                </span>\r
                <div class="input-grid">\r
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                        <mat-label>{{ 'smartScan.wizard.fieldName' | transloco }}</mat-label>\r
                        <input matInput [(ngModel)]="field.name" />\r
                    </mat-form-field>\r
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                        <mat-label>{{ 'smartScan.wizard.mapKey' | transloco }}</mat-label>\r
                        <input matInput [(ngModel)]="field.mapKey" />\r
                    </mat-form-field>\r
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                        <mat-label>{{ 'smartScan.wizard.fieldType' | transloco }}</mat-label>\r
                        <mat-select [(ngModel)]="field.type">\r
                            @for (type of wizard.fieldTypes; track type) {\r
                                <mat-option [value]="type">{{ type }}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
                </div>\r
            </div>\r
        </article>\r
    } @else {\r
        <button type="button" class="field-row" [class.field-row--ready]="!!(field.name.trim() && field.mapKey.trim())" (click)="wizard.toggleField(field)">\r
            <strong>{{ wizard.fieldLabel(field, index) }}</strong>\r
            <span class="field-row__key">{{ field.mapKey }}</span>\r
            <span class="field-row__type">{{ field.type }}</span>\r
        </button>\r
    }\r
</ng-template>\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-fields.component.scss */\n.wizard-error {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero h2 {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero p {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice span {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice strong {\n  font-size: 0.95rem;\n}\n.wizard-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form,\n.wizard-explainer,\n.wizard-samples {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading > span {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading h3 {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading p {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light > span {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box + .field-box {\n  margin-top: 0.85rem;\n}\n.field-box__heading {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row strong {\n  font-size: 0.88rem;\n}\n.field-row__key {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title strong {\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack,\n.input-grid {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice strong {\n  font-size: 0.92rem;\n}\n.side-choice span {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop input {\n  display: none;\n}\n.image-drop__preview {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples {\n  background: #fff;\n}\n.sample-frame {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract {\n  justify-self: start;\n}\n.try-extract__hint {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list h3 {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list article {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list strong {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list span {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name span {\n  color: #b91c1c;\n}\n.explainer-notes {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes article {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes p {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts article {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts strong {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts p {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n:host-context(.dark) .wizard-hero p,\n:host-context(.dark) .wizard-hero__choice span,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-card__title small,\n:host-context(.dark) .side-choice span,\n:host-context(.dark) .wizard-facts p {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-hero__choice,\n:host-context(.dark) .wizard-decision,\n:host-context(.dark) .field-card,\n:host-context(.dark) .field-box,\n:host-context(.dark) .field-row,\n:host-context(.dark) .side-choice,\n:host-context(.dark) .wizard-facts article {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .field-box__heading,\n:host-context(.dark) .field-row__key,\n:host-context(.dark) .field-row__type {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-explainer {\n  background: #020617;\n}\n:host-context(.dark) .wizard-samples {\n  background: #1e293b;\n}\n:host-context(.dark) .sample-frame,\n:host-context(.dark) .extraction-list article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .try-extract__hint,\n:host-context(.dark) .extraction-list strong {\n  color: #94a3b8;\n}\n:host-context(.dark) .section-heading > span,\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .fact-icon,\n:host-context(.dark) .image-drop {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready,\n:host-context(.dark) .field-row--ready,\n:host-context(.dark) .side-choice--ready {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .explainer-notes p {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision,\n  .wizard-facts,\n  .input-grid,\n  .side-choices,\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=document-type-wizard-fields.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypeWizardFieldsComponent, { className: "DocumentTypeWizardFieldsComponent", filePath: "src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-fields.component.ts", lineNumber: 30 });
})();

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-sides.component.ts
function DocumentTypeWizardSidesComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.wizard.frontImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardSidesComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "upload");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardSidesComponent_Conditional_66_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.wizard.backImage, \u0275\u0275sanitizeUrl);
  }
}
function DocumentTypeWizardSidesComponent_Conditional_66_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "upload");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardSidesComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 9)(1, "span", 10)(2, "mat-icon");
    \u0275\u0275text(3, "flip");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 11)(5, "span", 12)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 13);
    \u0275\u0275template(13, DocumentTypeWizardSidesComponent_Conditional_66_Conditional_13_Template, 1, 1, "img", 14)(14, DocumentTypeWizardSidesComponent_Conditional_66_Conditional_14_Template, 2, 0, "mat-icon");
    \u0275\u0275elementStart(15, "input", 15);
    \u0275\u0275listener("change", function DocumentTypeWizardSidesComponent_Conditional_66_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.wizard.onImageSelected($event, "back"));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("field-card--ready", !!ctx_r0.wizard.backImage);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "smartScan.wizard.backImage"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "smartScan.wizard.details.required"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.wizard.backImage ? 13 : 14);
  }
}
function DocumentTypeWizardSidesComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "smartScan.wizard." + ctx_r0.copyKey + "." + note_r3));
  }
}
var DocumentTypeWizardSidesComponent = class _DocumentTypeWizardSidesComponent {
  constructor() {
    this.wizard = inject(DOCUMENT_TYPE_WIZARD);
    this.copyKey = "sidesStep";
    this.notes = ["noteFront", "noteBack", "noteImages"];
  }
  static {
    this.\u0275fac = function DocumentTypeWizardSidesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypeWizardSidesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypeWizardSidesComponent, selectors: [["document-type-wizard-sides"]], decls: 81, vars: 53, consts: [[1, "wizard-screen"], [1, "wizard-hero"], [1, "wizard-hero__eyebrow"], [1, "wizard-hero__choice"], [1, "wizard-decision"], [1, "wizard-form"], [1, "section-heading"], [1, "side-choices"], ["type", "button", 1, "side-choice", 3, "click"], [1, "field-card"], [1, "field-card__icon"], [1, "field-card__content"], [1, "field-card__title"], [1, "image-drop"], ["alt", "", 1, "image-drop__preview", 3, "src"], ["type", "file", "accept", "image/*", 3, "change"], [1, "field-card", 3, "field-card--ready"], [1, "wizard-explainer"], [1, "section-heading", "section-heading--light"], [1, "explainer-notes"]], template: function DocumentTypeWizardSidesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 3)(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "strong");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 4)(20, "section", 5)(21, "div", 6)(22, "span");
        \u0275\u0275text(23, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div")(25, "h3");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 7)(32, "button", 8);
        \u0275\u0275listener("click", function DocumentTypeWizardSidesComponent_Template_button_click_32_listener() {
          return ctx.wizard.onRequiresBackSideChange(false);
        });
        \u0275\u0275elementStart(33, "mat-icon");
        \u0275\u0275text(34, "crop_portrait");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "strong");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "button", 8);
        \u0275\u0275listener("click", function DocumentTypeWizardSidesComponent_Template_button_click_41_listener() {
          return ctx.wizard.onRequiresBackSideChange(true);
        });
        \u0275\u0275elementStart(42, "mat-icon");
        \u0275\u0275text(43, "flip");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "strong");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span");
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "article", 9)(51, "span", 10)(52, "mat-icon");
        \u0275\u0275text(53, "image");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 11)(55, "span", 12)(56, "strong");
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "small");
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "label", 13);
        \u0275\u0275template(63, DocumentTypeWizardSidesComponent_Conditional_63_Template, 1, 1, "img", 14)(64, DocumentTypeWizardSidesComponent_Conditional_64_Template, 2, 0, "mat-icon");
        \u0275\u0275elementStart(65, "input", 15);
        \u0275\u0275listener("change", function DocumentTypeWizardSidesComponent_Template_input_change_65_listener($event) {
          return ctx.wizard.onImageSelected($event, "front");
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(66, DocumentTypeWizardSidesComponent_Conditional_66_Template, 16, 9, "article", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "aside", 17)(68, "div", 18)(69, "span");
        \u0275\u0275text(70, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div")(72, "h3");
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p");
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 19);
        \u0275\u0275repeaterCreate(79, DocumentTypeWizardSidesComponent_For_80_Template, 6, 3, "article", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 23, "smartScan.wizard." + ctx.copyKey + ".eyebrow"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 25, "smartScan.wizard." + ctx.copyKey + ".title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 27, "smartScan.wizard." + ctx.copyKey + ".subtitle"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 29, "smartScan.wizard." + ctx.copyKey + ".choiceLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 31, ctx.wizard.requiresBackSide ? "smartScan.wizard.bothSides" : "smartScan.wizard.frontOnly"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 33, "smartScan.wizard.sidesStep.sectionTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 35, "smartScan.wizard.sidesStep.sectionHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("side-choice--ready", !ctx.wizard.requiresBackSide);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 37, "smartScan.wizard.frontOnly"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 39, "smartScan.wizard.sidesStep.frontBody"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("side-choice--ready", ctx.wizard.requiresBackSide);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 41, "smartScan.wizard.bothSides"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 43, "smartScan.wizard.sidesStep.backBody"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("field-card--ready", !!ctx.wizard.frontImage);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 45, "smartScan.wizard.frontImage"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 47, "smartScan.wizard.details.required"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.wizard.frontImage ? 63 : 64);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.wizard.requiresBackSide ? 66 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 49, "smartScan.wizard." + ctx.copyKey + ".explainTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 51, "smartScan.wizard." + ctx.copyKey + ".explainHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.notes);
      }
    }, dependencies: [MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n.wizard-error[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.wizard-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form[_ngcontent-%COMP%], \n.wizard-explainer[_ngcontent-%COMP%], \n.wizard-samples[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box[_ngcontent-%COMP%]    + .field-box[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n.field-box__heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.field-row__key[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack[_ngcontent-%COMP%], \n.input-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop[_ngcontent-%COMP%]:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-drop__preview[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.sample-frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.try-extract__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.explainer-notes[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n.dark[_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision[_ngcontent-%COMP%], \n   .wizard-facts[_ngcontent-%COMP%], \n   .input-grid[_ngcontent-%COMP%], \n   .side-choices[_ngcontent-%COMP%], \n   .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=document-type-wizard-sides.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypeWizardSidesComponent, [{
    type: Component,
    args: [{ selector: "document-type-wizard-sides", standalone: true, imports: [MatIconModule, TranslocoModule], template: `<div class="wizard-screen">\r
    <header class="wizard-hero">\r
        <div>\r
            <span class="wizard-hero__eyebrow">{{ 'smartScan.wizard.' + copyKey + '.eyebrow' | transloco }}</span>\r
            <h2>{{ 'smartScan.wizard.' + copyKey + '.title' | transloco }}</h2>\r
            <p>{{ 'smartScan.wizard.' + copyKey + '.subtitle' | transloco }}</p>\r
        </div>\r
        <div class="wizard-hero__choice">\r
            <span>{{ 'smartScan.wizard.' + copyKey + '.choiceLabel' | transloco }}</span>\r
            <strong>{{\r
                (wizard.requiresBackSide ? 'smartScan.wizard.bothSides' : 'smartScan.wizard.frontOnly') | transloco\r
            }}</strong>\r
        </div>\r
    </header>\r
\r
    <div class="wizard-decision">\r
        <section class="wizard-form">\r
            <div class="section-heading">\r
                <span>01</span>\r
                <div>\r
                    <h3>{{ 'smartScan.wizard.sidesStep.sectionTitle' | transloco }}</h3>\r
                    <p>{{ 'smartScan.wizard.sidesStep.sectionHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            <div class="side-choices">\r
                <button\r
                    type="button"\r
                    class="side-choice"\r
                    [class.side-choice--ready]="!wizard.requiresBackSide"\r
                    (click)="wizard.onRequiresBackSideChange(false)"\r
                >\r
                    <mat-icon>crop_portrait</mat-icon>\r
                    <strong>{{ 'smartScan.wizard.frontOnly' | transloco }}</strong>\r
                    <span>{{ 'smartScan.wizard.sidesStep.frontBody' | transloco }}</span>\r
                </button>\r
                <button\r
                    type="button"\r
                    class="side-choice"\r
                    [class.side-choice--ready]="wizard.requiresBackSide"\r
                    (click)="wizard.onRequiresBackSideChange(true)"\r
                >\r
                    <mat-icon>flip</mat-icon>\r
                    <strong>{{ 'smartScan.wizard.bothSides' | transloco }}</strong>\r
                    <span>{{ 'smartScan.wizard.sidesStep.backBody' | transloco }}</span>\r
                </button>\r
            </div>\r
            <article class="field-card" [class.field-card--ready]="!!wizard.frontImage">\r
                <span class="field-card__icon"><mat-icon>image</mat-icon></span>\r
                <div class="field-card__content">\r
                    <span class="field-card__title">\r
                        <strong>{{ 'smartScan.wizard.frontImage' | transloco }}</strong>\r
                        <small>{{ 'smartScan.wizard.details.required' | transloco }}</small>\r
                    </span>\r
                    <label class="image-drop">\r
                        @if (wizard.frontImage) {\r
                            <img class="image-drop__preview" [src]="wizard.frontImage" alt="" />\r
                        } @else {\r
                            <mat-icon>upload</mat-icon>\r
                        }\r
                        <input type="file" accept="image/*" (change)="wizard.onImageSelected($event, 'front')" />\r
                    </label>\r
                </div>\r
            </article>\r
            @if (wizard.requiresBackSide) {\r
                <article class="field-card" [class.field-card--ready]="!!wizard.backImage">\r
                    <span class="field-card__icon"><mat-icon>flip</mat-icon></span>\r
                    <div class="field-card__content">\r
                        <span class="field-card__title">\r
                            <strong>{{ 'smartScan.wizard.backImage' | transloco }}</strong>\r
                            <small>{{ 'smartScan.wizard.details.required' | transloco }}</small>\r
                        </span>\r
                        <label class="image-drop">\r
                            @if (wizard.backImage) {\r
                                <img class="image-drop__preview" [src]="wizard.backImage" alt="" />\r
                            } @else {\r
                                <mat-icon>upload</mat-icon>\r
                            }\r
                            <input type="file" accept="image/*" (change)="wizard.onImageSelected($event, 'back')" />\r
                        </label>\r
                    </div>\r
                </article>\r
            }\r
        </section>\r
\r
        <aside class="wizard-explainer">\r
            <div class="section-heading section-heading--light">\r
                <span>02</span>\r
                <div>\r
                    <h3>{{ 'smartScan.wizard.' + copyKey + '.explainTitle' | transloco }}</h3>\r
                    <p>{{ 'smartScan.wizard.' + copyKey + '.explainHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            <div class="explainer-notes">\r
                @for (note of notes; track note) {\r
                    <article>\r
                        <mat-icon>info</mat-icon>\r
                        <p>{{ 'smartScan.wizard.' + copyKey + '.' + note | transloco }}</p>\r
                    </article>\r
                }\r
            </div>\r
        </aside>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-sides.component.scss */\n.wizard-error {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero h2 {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero p {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice span {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice strong {\n  font-size: 0.95rem;\n}\n.wizard-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form,\n.wizard-explainer,\n.wizard-samples {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading > span {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading h3 {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading p {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light > span {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box + .field-box {\n  margin-top: 0.85rem;\n}\n.field-box__heading {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row strong {\n  font-size: 0.88rem;\n}\n.field-row__key {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title strong {\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack,\n.input-grid {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice strong {\n  font-size: 0.92rem;\n}\n.side-choice span {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop input {\n  display: none;\n}\n.image-drop__preview {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples {\n  background: #fff;\n}\n.sample-frame {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract {\n  justify-self: start;\n}\n.try-extract__hint {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list h3 {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list article {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list strong {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list span {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name span {\n  color: #b91c1c;\n}\n.explainer-notes {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes article {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes p {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts article {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts strong {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts p {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n:host-context(.dark) .wizard-hero p,\n:host-context(.dark) .wizard-hero__choice span,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-card__title small,\n:host-context(.dark) .side-choice span,\n:host-context(.dark) .wizard-facts p {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-hero__choice,\n:host-context(.dark) .wizard-decision,\n:host-context(.dark) .field-card,\n:host-context(.dark) .field-box,\n:host-context(.dark) .field-row,\n:host-context(.dark) .side-choice,\n:host-context(.dark) .wizard-facts article {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .field-box__heading,\n:host-context(.dark) .field-row__key,\n:host-context(.dark) .field-row__type {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-explainer {\n  background: #020617;\n}\n:host-context(.dark) .wizard-samples {\n  background: #1e293b;\n}\n:host-context(.dark) .sample-frame,\n:host-context(.dark) .extraction-list article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .try-extract__hint,\n:host-context(.dark) .extraction-list strong {\n  color: #94a3b8;\n}\n:host-context(.dark) .section-heading > span,\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .fact-icon,\n:host-context(.dark) .image-drop {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready,\n:host-context(.dark) .field-row--ready,\n:host-context(.dark) .side-choice--ready {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .explainer-notes p {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision,\n  .wizard-facts,\n  .input-grid,\n  .side-choices,\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n:host {\n  display: block;\n}\n/*# sourceMappingURL=document-type-wizard-sides.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypeWizardSidesComponent, { className: "DocumentTypeWizardSidesComponent", filePath: "src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-sides.component.ts", lineNumber: 13 });
})();

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/endpoint-docs-paths.json
var endpoint_docs_paths_default = {
  "api/clients": "api/accounts/create-account",
  "api/clients/{id}": "api/accounts/delete-account",
  "api/clients/auth": "api/accounts/authenticate",
  "api/clients/sync": "api/accounts/update-account",
  "api/clients/sync/password": "api/accounts/change-password",
  "api/licenses": "api/licenses/create-license",
  "api/licenses/{licenseid}": "api/licenses/delete-license",
  "api/licenses/my-license": "api/licenses/get-my-license",
  "api/tags/decrypt": "api/tags/decrypt-tag",
  "api/tags/lease": "api/tags/lease-tag",
  "api/tags/lease-offline": "api/tags/lease-offline",
  "api/tags/lease-recovery": "api/tags/lease-recovery",
  "api/tags/preview": "api/tags/preview-tag",
  "api/tags/preview-zelfproof": "api/tags/preview-zelfproof",
  "api/tags/search": "api/tags/search-tag",
  "api/tags/search-by-domain": "api/tags/search-by-domain",
  "api/zelf-proof/decrypt": "functions/decrypt-zelfproof",
  "api/zelf-proof/encrypt": "functions/create-qr-zelfproof",
  "v2/app-logins": "resources/app-logins/list-all-app-logins",
  "v2/app-logins/{id}": "resources/app-logins/retrieve-an-app-login",
  "v2/app-registrations": "resources/app-registrations/create-an-app-registration",
  "v2/app-registrations/{id}": "resources/app-registrations/retrieve-an-app-registration",
  "v2/app-registrations/{id}/resend-link": "resources/app-registrations/resend-an-app-registration-link",
  "v2/app-registrations/{id}/sync": "resources/app-registrations/sync-app-registration-status",
  "v2/ar/buenos-aires/technical-inspection": "vehicle-validation/argentina/buenos-aires-technical-inspection",
  "v2/ar/buenos-aires/traffic-infractions": "vehicle-validation/argentina/buenos-aires-traffic-infractions",
  "v2/ar/cedula": "identity-validation/argentina",
  "v2/ar/cedula/extra": "identity/argentina-extra",
  "v2/ar/company": "business-validation/argentina",
  "v2/ar/dnrec/antecedentes": "background-check/argentina-certificate-verify",
  "v2/ar/rto": "vehicle-validation/argentina/rto",
  "v2/ar/vehicle": "vehicle-validation/argentina",
  "v2/auth/session": "authentication/renew-your-token-jwt",
  "v2/biometric-validations/app-login": "resources/app-logins/create-an-app-login-biometric-validation",
  "v2/biometric-validations/app-registration": "resources/app-registrations/create-an-app-registration-biometric-validation",
  "v2/biometric-validations/validate": "resources/app-logins/validate-an-app-login-biometric-validation",
  "v2/bo/cedula": "identity/bolivia",
  "v2/bo/company": "business-validation/bolivia",
  "v2/bo/vehicle": "vehicle-validation/bolivia",
  "v2/bo/vehicle-soat": "transit/bolivia/vehicle-soat",
  "v2/bo/votacion": "identity/bolivia/votacion",
  "v2/br/background-check": "background-check/brazil",
  "v2/br/cedula": "identity/brazil",
  "v2/br/company": "business-validation/brazil",
  "v2/br/vehicle": "vehicle-validation/brazil",
  "v2/ca/british-columbia/driver-license": "identity/canada",
  "v2/ca/company": "business-validation/canada",
  "v2/ca/ontario/driver-license": "driver-validation/ontario-driver-license",
  "v2/ca/ontario/plate": "vehicle-validation/canada/ontario-plate",
  "v2/check-lists": "check-list/create-a-check-list",
  "v2/check-lists/{id}": "check-list/delete-a-check-list",
  "v2/cl/cedula": "identity/chile",
  "v2/cl/company": "business-validation/chilean",
  "v2/cl/driver-license": "driver-validation/chile-driver-license",
  "v2/cl/registro-civil/certificado": "background-check/chile-certificate-verify",
  "v2/cl/taxpayer": "identity/chile-taxpayer",
  "v2/cl/transport-vehicle": "vehicle-validation/chile/transport-vehicle",
  "v2/cl/validate/documents": "identity/chile-validate-documents",
  "v2/cl/vehicle": "vehicle-validation/chile",
  "v2/cl/vehicle-soap": "vehicle-validation/chile/vehicle-soap",
  "v2/cl/vehicle-soap-plate": "vehicle-validation/chile/vehicle-soap-plate",
  "v2/cl/vehicle-stolen": "vehicle-validation/chile/vehicle-stolen",
  "v2/clients/me": "accounts/clients/account-information",
  "v2/co/adres": "legal/colombia-adres",
  "v2/co/afiliaciones": "legal/verify-colombian-affiliations",
  "v2/co/bogota/taxi-drivers/card/{controlcardnumber}": "vehicle-validation/colombia/bogota-taxi-drivers-by-control-card",
  "v2/co/bogota/taxi-drivers/plate": "vehicle-validation/colombia/bogota-taxi-drivers-by-plate",
  "v2/co/bogota/vehicle/accidentality": "vehicle-validation/colombia/bogota-vehicle-accidentality",
  "v2/co/bogota/vehicle/fines": "vehicle-validation/colombia/bogota-vehicle-fines",
  "v2/co/bogota/vehicle/tax": "vehicle-validation/colombia/bogota-taxes",
  "v2/co/cedula": "identity-validation/colombia/colombian-citizen",
  "v2/co/cedula/by-name": "identity-validation/colombia/colombian-citizen-by-name",
  "v2/co/cedula/extra": "identity-validation/colombia/colombian-citizen-with-extra-data",
  "v2/co/cedula/premium": "identity-validation/colombia/colombian-cedula-premium",
  "v2/co/cedula/registraduria": "identity/colombia-cedula-registraduria",
  "v2/co/cedula/rethus": "legal/colombia-rethus",
  "v2/co/company/dian": "business-validation/colombia-dian-verification",
  "v2/co/company/dian/invoicer": "business-validation/colombia-legal-invoicer-verification",
  "v2/co/contracts": "background-check/colombia-public-contracts",
  "v2/co/contraloria/certificado": "background-check/colombia-comptroller-certificate",
  "v2/co/copnia": "legal/colombia-copnia",
  "v2/co/copnia/matricula": "legal/colombia-copnia-license",
  "v2/co/deudoresmorosos": "finance/delinquent-debtors",
  "v2/co/fasecolda/sinister": "vehicle-validation/colombia/fasecolda-sinister-verification",
  "v2/co/fasecolda/values-by-code": "vehicle-validation/colombia/fasecolda-vehicle-by-code",
  "v2/co/fasecolda/values-by-plate": "vehicle-validation/colombia/fasecolda-values-by-plate",
  "v2/co/foreigner-id/ce": "identity/colombia-ce",
  "v2/co/foreigner-id/pep": "identity-validation/colombia/special-stay-permit-pep",
  "v2/co/foreigner-id/ppt": "identity/colombia-ppt",
  "v2/co/inpec": "background-check/colombia-inpec",
  "v2/co/medellin/vehicle/fines": "vehicle-validation/colombia/medellin-vehicle-fines",
  "v2/co/policia/consultar": "background-check/colombia-police-record-check",
  "v2/co/policia/rnmc": "background-check/colombia-police-compliance-corrective-measures",
  "v2/co/policia/rnmc/premium": "background-check/colombia-police-compliance-corrective-measures-premium",
  "v2/co/politically-exposed-persons": "identity-validation/colombia/colombian-politically-exposed-persons",
  "v2/co/procuraduria": "identity/colombia-procuraduria",
  "v2/co/procuraduria/antecedentes": "background-check/colombia-disciplinary-records-attorneys-office",
  "v2/co/rama/abogados": "legal/lawyer-verification",
  "v2/co/rama/certificado/vigencia": "legal/certificate-of-validity-for-legal-professionals",
  "v2/co/rama/juzgado/expedientes": "legal/colombia-judicial-records",
  "v2/co/rama/proceso": "legal/retrieve-details-of-a-legal-process-by-number",
  "v2/co/rama/procesos": "legal/colombian-legal-processes",
  "v2/co/registraduria/certificado": "identity/colombia-registraduria-certificate",
  "v2/co/registraduria/matrimonio": "identity/colombia-registraduria-matrimonio",
  "v2/co/registraduria/serial": "identity/colombia-registraduria-serial",
  "v2/co/registraduria/votacion": "legal/voting",
  "v2/co/rues": "business-validation/colombia-rues-v2",
  "v2/co/rues/complete": "business-validation/colombia-rues-complete-v2",
  "v2/co/rui": "background-check/colombia-rui",
  "v2/co/runt/conductor": "vehicle-validation/colombia/driver-s-license",
  "v2/co/runt/propietarios": "vehicle-validation/colombia/runt-vehicle-owners",
  "v2/co/runt/vehicle-by-plate": "vehicle-validation/colombia/runt-vehicle-by-plate",
  "v2/co/runt/vehicle-by-plate-only": "vehicle-validation/colombia/runt-vehicle-by-plate-only",
  "v2/co/runt/vehicle-by-plate-simplified": "vehicle-validation/colombia/runt-vehicle-by-plate-simplified",
  "v2/co/runt/vehicle-by-vin": "vehicle-validation/colombia/runt-vehicle-by-vin",
  "v2/co/runt/vehiculo": "vehicle-validation/colombia/runt-vehicle-soat-rtm",
  "v2/co/sena/certificados": "certificates/sena-certificates",
  "v2/co/sibga/valuation": "vehicle-validation/colombia/sibga-vehicle-valuation",
  "v2/co/sigep/name": "legal/sigep-public-servant-by-name",
  "v2/co/sigep/number": "legal/sigep-public-servant-by-number",
  "v2/co/simit/acuerdos": "vehicle-validation/colombia/simit-agreements",
  "v2/co/simit/comparendo": "vehicle-validation/colombia/simit-comparendo-details",
  "v2/co/simit/comparendos": "vehicle-validation/colombia/simit-fines",
  "v2/co/simit/consultar": "vehicle-validation/colombia/general-query-of-simit-by-identification-document",
  "v2/co/simit/consultar/placa": "vehicle-validation/colombia/general-query-of-simit-by-license-plate",
  "v2/co/simit/resoluciones": "vehicle-validation/colombia/simit-resolutions",
  "v2/co/simit/suspensiones": "vehicle-validation/colombia/simit-suspensiones",
  "v2/co/sisconmp/trainings": "vehicle-validation/colombia/sisconmp-trainings",
  "v2/co/situacion-militar": "identity/colombia-situacion-militar",
  "v2/co/vehiculo/pico-y-placa": "vehicle-validation/colombia/bogota-pico-y-placa",
  "v2/cr/cedula": "identity/costa-rica",
  "v2/cr/company": "business-validation/costa-rica",
  "v2/cr/vehicle": "vehicle-validation/costa-rica",
  "v2/cr/votacion": "identity/costa-rica/votacion",
  "v2/dea": "background-check/dea-background-check",
  "v2/do/cedula": "identity/dominican-republic",
  "v2/document-validations/app-registration": "resources/app-registrations/create-an-app-registration-document-validation",
  "v2/ec/cedula": "identity-validation/ecuador",
  "v2/ec/vehiculo/placa": "vehicle-validation/ecuador/vehicle-by-plate",
  "v2/ec/vehiculo/placa/multas": "vehicle-validation/ecuador",
  "v2/email-validations": "resources/email-validations/create-an-email-validation",
  "v2/email-validations/{id}": "resources/app-registrations/validate-an-app-registration-email-validation",
  "v2/email-validations/{id}/validate": "resources/email-validations/validate-an-email-validation",
  "v2/email-validations/app-registration": "resources/app-registrations/create-an-app-registration-email-validation",
  "v2/es/cedula": "identity-validation/spain-citizen",
  "v2/es/company": "business-validation/spain",
  "v2/es/vehicle": "vehicle-validation/spain",
  "v2/europol": "background-check/europol-background-check",
  "v2/face-recognition/collections": "resources/collections/create-a-collection",
  "v2/face-recognition/collections/{id}": "resources/collections/delete-a-collection",
  "v2/face-recognition/compare": "biometrics/compare",
  "v2/face-recognition/compare-live": "biometrics/compare-live",
  "v2/face-recognition/compare-with-liveness": "biometrics/compare-with-liveness",
  "v2/face-recognition/detect": "verifik-biometrics-apis/liveness/face-detection",
  "v2/face-recognition/liveness": "biometrics/liveness",
  "v2/face-recognition/liveness-score": "biometrics/liveness-score",
  "v2/face-recognition/persons": "resources/persons/create-a-person",
  "v2/face-recognition/persons/{id}": "resources/persons/delete-a-person",
  "v2/face-recognition/persons/lookup": "resources/persons/lookup-a-person",
  "v2/face-recognition/persons/search-live-face": "resources/persons/create-a-person-with-liveness",
  "v2/face-recognition/search": "biometrics/search",
  "v2/face-recognition/search-active-user": "biometrics/search-active-user",
  "v2/face-recognition/search-live-face": "biometrics/search-live-face",
  "v2/face-recognition/search/crops": "biometrics/search-crops",
  "v2/face-recognition/verify": "biometrics/verify-face",
  "v2/fbi": "background-check/fbi-background-check",
  "v2/gt/cedula": "identity-validation/guatemala",
  "v2/gt/cedula/extra": "identity/guatemala-extra",
  "v2/hn/cedula": "identity/honduras",
  "v2/hn/votacion": "identity/honduras/votacion",
  "v2/human-id/decrypt": "biometrics/zero-knowledge-face-proofs-decrypt",
  "v2/human-id/encrypt": "biometrics/zero-knowledge-face-proofs-encrypt",
  "v2/human-id/encrypt-qr-code": "biometrics/zero-knowledge-face-proofs-encrypt-qr-code",
  "v2/human-id/preview": "biometrics/zero-knowledge-face-proofs-preview",
  "v2/in/epic": "legal/epic-eci",
  "v2/in/epic/votacion": "legal/voting-eci-epic",
  "v2/interpol": "background-check/interpol-background-check",
  "v2/ip-lookup": "identity/ip-lookup",
  "v2/look-ups/phone": "identity/phone-lookup",
  "v2/mx/cedula-profesional": "identity/mexico-cedula-profesional",
  "v2/mx/company": "business-validation/mexican-companies",
  "v2/mx/curp": "identity/mexico",
  "v2/mx/health-worker": "identity/mexico-health-worker",
  "v2/mx/ine": "identity/mexico-ine",
  "v2/mx/ine/ocr": "identity/mexico-ine-ocr",
  "v2/mx/siged/certificado": "identity/mexico-siged-certificado",
  "v2/mx/vehiculo/placa": "vehicle-validation/mexico",
  "v2/ocr/scan-prompt": "ocr-engines/scan-prompt",
  "v2/ocr/scan-prompt/template/:id": "ocr-engines/scan-prompt/delete-a-scan-prompt-template",
  "v2/ocr/scan-prompt/templates": "ocr-engines/scan-prompt/list-of-scan-prompt-templates",
  "v2/ofac": "background-check/ofac-background-check",
  "v2/onu": "background-check/onu-background-check",
  "v2/pa/cedula": "identity/panama",
  "v2/pa/company": "business-validation/panama",
  "v2/passport/us/entries": "background-check/united-states-passport-entries",
  "v2/pe/driver-license": "driver-validation/peru-driver-license",
  "v2/pe/foreigner-id/ce": "identity-validation/peru/peruvian-foreigner-resident",
  "v2/pe/vehiculo/placa": "vehicle-validation/peru/peruvian-vehicle",
  "v2/pe/vehiculo/soat": "vehicle-validation/peru/peruvian-vehicle-insurance",
  "v2/phone-validations": "resources/app-registrations/validate-an-app-registration-phone-validation",
  "v2/phone-validations/{id}": "resources/phone-validations/retrieve-a-phone-validation",
  "v2/phone-validations/app-registration": "resources/app-registrations/create-an-app-registration-phone-validation",
  "v2/phone-validations/manual": "resources/phone-validations/create-a-manual-phone-validation",
  "v2/project-flows": "resources/project-flows/create-a-project-flow/smart-enroll-project-flow",
  "v2/projects/email-login": "accounts/authentication/api-key-access-via-email",
  "v2/projects/phone-login": "authentication/api-key-access-via-phone",
  "v2/py/cic": "identity/paraguay",
  "v2/py/company": "business-validation/paraguay",
  "v2/py/vehicle": "vehicle-validation/paraguay",
  "v2/sv/dui": "identity/el-salvador",
  "v2/usa/company": "business-validation/united-states",
  "v2/usa/florida/driver-license": "driver-validation/florida-driver-license",
  "v2/usa/kansas/driver-license": "driver-validation/kansas-driver-license",
  "v2/usa/ssn": "identity-validation/united-states/ssn-verification-social-security-number",
  "v2/usa/vehicle": "vehicle-validation/united-states",
  "v2/usa/vehicle-by-vin": "vehicle-validation/united-states/vehicle-by-vin",
  "v2/usage": "resources/usage/usage",
  "v2/uy/cedula": "identity-validation/uruguay-citizen",
  "v2/ve/cedula": "identity-validation/venezuela",
  "v2/ve/foreigner-id": "identity/venezuela-foreigner-id",
  "v3/ar/vehicle": "vehicle-validation/argentina/vehicle-v3",
  "v3/cl/vehicle": "vehicle-validation/chile/vehicle-technical-review",
  "v3/co/ministerio-de-trabajo/certificados": "certificates/colombia-ministerio-trabajo-certificados-v3",
  "v3/co/rues": "business-validation/colombia-rues-v3",
  "v3/co/rues-complete": "business-validation/colombia-rues-business-information",
  "v3/co/runt/conductor": "vehicle-validation/colombia/runt-drivers-license-basic",
  "v3/ec/company": "business-validation/ecuador",
  "v3/ocr/scan-studio": "ocr-engines/scan-studio",
  "v3/pe/cedula": "identity-validation/peru/peru-citizen",
  "v3/pe/cedula/extra": "identity-validation/peru/v3-peruvian-citizen",
  "v3/pe/company": "business-validation/peru",
  "v3/project-flows/{id}": "resources/project-flows/project-flows-delete",
  "v3/projects": "api/projects/projects-create",
  "v3/projects/{id}": "resources/projects/projects-delete"
};

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/endpoint-docs-url.ts
var PATHS = endpoint_docs_paths_default;
var normalizeEndpointUrl = (url) => {
  const trimmed = url.trim();
  const path = trimmed.startsWith("http") ? safePathname(trimmed) : trimmed;
  return path.replace(/^\/+/, "").replace(/\/+$/, "");
};
var safePathname = (url) => {
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
};
var docsPathForEndpoint = (url) => {
  if (!url?.trim())
    return null;
  const key = normalizeEndpointUrl(url);
  return PATHS[key] || null;
};
var endpointDocsUrl = (url, lang) => {
  const path = docsPathForEndpoint(url);
  if (!path)
    return null;
  const prefix = lang === "es" ? "/verifik-es" : "";
  return docsPageUrl(`${prefix}/${path}`);
};
var postmanUrlForFeature = (code) => `/postman?code=${encodeURIComponent(code)}`;

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-smart-check.component.ts
var _c02 = (a0) => ({ cost: a0 });
var _c12 = (a0) => ({ value: a0 });
var _c2 = (a0) => ({ field: a0 });
var _forTrack02 = ($index, $item) => $item._id;
var _forTrack1 = ($index, $item) => $item.field;
function DocumentTypeWizardSmartCheckComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 7);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "span", 13)(2, "mat-icon");
    \u0275\u0275text(3, "travel_explore");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "span", 15)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 1, "smartScan.wizard.noSmartCheck"));
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r4.url);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Conditional_17_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartScan.wizard.openDocs"), " \u2197 ");
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 20)(1, "button", 21);
    \u0275\u0275listener("click", function DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Template_button_click_1_listener() {
      const feature_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickFeature(feature_r4._id));
    });
    \u0275\u0275elementStart(2, "span", 13)(3, "mat-icon");
    \u0275\u0275text(4, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 14)(6, "span", 15)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Conditional_9_Template, 2, 1, "span", 22);
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 24)(14, "a", 25);
    \u0275\u0275listener("click", function DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Template_a_click_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Conditional_17_Template, 3, 4, "a", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const feature_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("field-card--ready", ctx_r1.wizard.selectedFeatureId === feature_r4._id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(feature_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r4.url ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 8, "smartScan.wizard.endpointCost", \u0275\u0275pureFunction1(13, _c02, ctx_r1.featureCost(feature_r4))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.postmanUrl(feature_r4), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "smartScan.wizard.openPostman"), " \u2197 ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.docsUrl(feature_r4)) ? 17 : -1, tmp_17_0);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "button", 18);
    \u0275\u0275listener("click", function DocumentTypeWizardSmartCheckComponent_Conditional_33_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickFeature(""));
    });
    \u0275\u0275elementStart(5, "span", 13)(6, "mat-icon");
    \u0275\u0275text(7, "crop_portrait");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 14)(9, "span", 15)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275repeaterCreate(13, DocumentTypeWizardSmartCheckComponent_Conditional_33_For_14_Template, 18, 15, "article", 19, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "smartScan.wizard.smartCheckHint"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("field-card--ready", !ctx_r1.wizard.selectedFeatureId);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "smartScan.wizard.skipSmartCheck"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.wizard.features);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r7.url);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("href", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "smartScan.wizard.openDocs"), " \u2197 ");
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Conditional_19_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEndpointList($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.wizard.changeEndpoint"), " ");
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 27)(1, "div", 28)(2, "span", 13)(3, "mat-icon");
    \u0275\u0275text(4, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "span", 15)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Conditional_9_Template, 2, 1, "span", 22);
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 24)(14, "a", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Conditional_17_Template, 3, 4, "a", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 29);
    \u0275\u0275template(19, DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Conditional_19_Template, 3, 3, "button", 30);
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Template_button_click_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearEndpoint($event));
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const feature_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(feature_r7.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r7.url ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 8, "smartScan.wizard.endpointCost", \u0275\u0275pureFunction1(15, _c02, ctx_r1.featureCost(feature_r7))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.postmanUrl(feature_r7), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "smartScan.wizard.openPostman"), " \u2197 ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.docsUrl(feature_r7)) ? 17 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.wizard.features.length > 1 ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 13, "smartScan.wizard.skipSmartCheck"), " ");
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DocumentTypeWizardSmartCheckComponent_Conditional_34_Conditional_0_Template, 23, 17);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.wizard.selectedFeature) ? 0 : -1, tmp_1_0);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    \u0275\u0275property("value", "literal:" + value_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "smartScan.wizard.sendLiteral", \u0275\u0275pureFunction1(5, _c12, value_r11)), " ");
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r12 = ctx.$implicit;
    \u0275\u0275property("value", key_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r12);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p", 34);
    \u0275\u0275text(2);
    \u0275\u0275template(3, DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 35)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_Template_mat_select_ngModelChange_8_listener($event) {
      const dependency_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.wizard.fieldMap[dependency_r10.field], $event) || (ctx_r1.wizard.fieldMap[dependency_r10.field] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "mat-option", 37);
    \u0275\u0275text(10, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_For_12_Template, 3, 7, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(13, DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_For_14_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dependency_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", dependency_r10.field, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(dependency_r10.required ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "smartScan.wizard.mapDependency"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.wizard.fieldMap[dependency_r10.field]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.wizard.dependencyEnums(dependency_r10));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.wizard.mapKeys);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "span", 13)(2, "mat-icon");
    \u0275\u0275text(3, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "span", 15)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, DocumentTypeWizardSmartCheckComponent_Conditional_35_For_10_Template, 15, 6, "div", 33, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 1, "smartScan.wizard.mapDependency"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.wizard.featureDependencies(ctx_r1.wizard.selectedFeature));
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_47_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r13.method || "GET");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r13.url);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const source_r14 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', source_r14.value, '"');
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const source_r14 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "smartScan.wizard.fromField", \u0275\u0275pureFunction1(4, _c2, source_r14.value)));
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.wizard.unmappedRequired"));
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_4_Template, 2, 1, "span", 44)(5, DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_5_Template, 3, 6, "span")(6, DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_6_Template, 3, 3, "span", 45)(7, DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Conditional_7_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dependency_r15 = ctx.$implicit;
    const source_r16 = \u0275\u0275storeLet(\u0275\u0275nextContext(2).dependencySource(dependency_r15.field));
    \u0275\u0275advance();
    \u0275\u0275classProp("call-preview__row--warn", source_r16.kind === "missing" && dependency_r15.required);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dependency_r15.field);
    \u0275\u0275advance();
    \u0275\u0275conditional(source_r16.kind === "literal" ? 4 : source_r16.kind === "field" ? 5 : dependency_r15.required ? 6 : 7);
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 39)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DocumentTypeWizardSmartCheckComponent_Conditional_47_Conditional_7_Template, 5, 2, "p", 40);
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275repeaterCreate(9, DocumentTypeWizardSmartCheckComponent_Conditional_47_For_10_Template, 8, 5, "div", 42, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "article")(13, "mat-icon");
    \u0275\u0275text(14, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const feature_r13 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 4, "smartScan.wizard.endpointCost", \u0275\u0275pureFunction1(9, _c02, ctx_r1.featureCost(feature_r13))));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(feature_r13.url ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.wizard.featureDependencies(feature_r13));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 7, "smartScan.wizard." + ctx_r1.copyKey + ".noteSkip"));
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "smartScan.wizard." + ctx_r1.copyKey + "." + note_r17));
  }
}
function DocumentTypeWizardSmartCheckComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, DocumentTypeWizardSmartCheckComponent_Conditional_48_For_2_Template, 6, 3, "article", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.notes);
  }
}
var DocumentTypeWizardSmartCheckComponent = class _DocumentTypeWizardSmartCheckComponent {
  constructor() {
    this._transloco = inject(TranslocoService);
    this.wizard = inject(DOCUMENT_TYPE_WIZARD);
    this.copyKey = "smartCheckStep";
    this.notes = ["noteOptional", "noteMap", "noteSkip"];
    this.browsingEndpoints = false;
  }
  get showAllEndpoints() {
    return !this.wizard.selectedFeature || this.browsingEndpoints;
  }
  pickFeature(featureId) {
    this.wizard.onFeatureChange(featureId);
    this.browsingEndpoints = false;
  }
  openEndpointList(event) {
    event.stopPropagation();
    this.browsingEndpoints = true;
  }
  clearEndpoint(event) {
    event.stopPropagation();
    this.wizard.onFeatureChange("");
    this.browsingEndpoints = false;
  }
  featureCost(feature) {
    return formatCatalogPrice(feature.price);
  }
  postmanUrl(feature) {
    return postmanUrlForFeature(feature.code);
  }
  /**
   * Docs page for this endpoint, or null when the catalog has no matching page.
   */
  docsUrl(feature) {
    return endpointDocsUrl(feature.url, this._transloco.getActiveLang());
  }
  /**
   * What the scan will pass for one dependency in the right-hand call preview.
   */
  dependencySource(field) {
    const chosen = this.wizard.fieldMap[field] || "";
    if (chosen.startsWith("literal:")) {
      return { kind: "literal", value: chosen.slice("literal:".length) };
    }
    if (chosen) {
      return { kind: "field", value: chosen };
    }
    return { kind: "missing", value: "" };
  }
  static {
    this.\u0275fac = function DocumentTypeWizardSmartCheckComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypeWizardSmartCheckComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypeWizardSmartCheckComponent, selectors: [["document-type-wizard-smart-check"]], decls: 49, vars: 30, consts: [[1, "wizard-screen"], [1, "wizard-hero"], [1, "wizard-hero__eyebrow"], [1, "wizard-hero__choice"], [1, "wizard-decision"], [1, "wizard-form"], [1, "section-heading"], ["mode", "indeterminate", "diameter", "36"], [1, "field-card"], [1, "wizard-explainer"], [1, "section-heading", "section-heading--light"], [1, "call-preview"], [1, "explainer-notes"], [1, "field-card__icon"], [1, "field-card__content"], [1, "field-card__title"], [1, "field-card__body"], [1, "endpoint-cards"], ["type", "button", 1, "field-card", "endpoint-card", 3, "click"], [1, "field-card", "endpoint-card", 3, "field-card--ready"], [1, "field-card", "endpoint-card"], ["type", "button", 1, "endpoint-card__hit", 3, "click"], [1, "endpoint-card__url"], [1, "endpoint-card__cost"], [1, "endpoint-card__links"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-button", 3, "click", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-button", 3, "href"], [1, "field-card", "endpoint-card", "field-card--ready"], [1, "endpoint-card__hit", "endpoint-card__hit--static"], [1, "endpoint-switch"], ["mat-stroked-button", "", "type", "button"], ["type", "button", 1, "text-button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "input-grid"], [1, "dependency-name"], ["appearance", "outline", "subscriptSizing", "dynamic"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "call-preview__head"], [1, "call-preview__route"], [1, "call-preview__params"], [1, "call-preview__row", 3, "call-preview__row--warn"], [1, "call-preview__row"], [1, "call-preview__pill"], [1, "call-preview__warn"]], template: function DocumentTypeWizardSmartCheckComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 3)(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "strong");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 4)(20, "section", 5)(21, "div", 6)(22, "span");
        \u0275\u0275text(23, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div")(25, "h3");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(31, DocumentTypeWizardSmartCheckComponent_Conditional_31_Template, 1, 0, "mat-progress-spinner", 7)(32, DocumentTypeWizardSmartCheckComponent_Conditional_32_Template, 9, 3, "article", 8)(33, DocumentTypeWizardSmartCheckComponent_Conditional_33_Template, 15, 8)(34, DocumentTypeWizardSmartCheckComponent_Conditional_34_Template, 1, 1)(35, DocumentTypeWizardSmartCheckComponent_Conditional_35_Template, 11, 3, "article", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "aside", 9)(37, "div", 10)(38, "span");
        \u0275\u0275text(39, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div")(41, "h3");
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(47, DocumentTypeWizardSmartCheckComponent_Conditional_47_Template, 18, 11, "div", 11)(48, DocumentTypeWizardSmartCheckComponent_Conditional_48_Template, 3, 0, "div", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_11_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "smartScan.wizard." + ctx.copyKey + ".eyebrow"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "smartScan.wizard." + ctx.copyKey + ".title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "smartScan.wizard." + ctx.copyKey + ".subtitle"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, "smartScan.wizard." + ctx.copyKey + ".choiceLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((ctx.wizard.selectedFeature == null ? null : ctx.wizard.selectedFeature.name) || \u0275\u0275pipeBind1(18, 20, "smartScan.wizard.skipSmartCheck"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, "smartScan.wizard.smartCheckStep.sectionTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 24, "smartScan.wizard.smartCheckStep.sectionHelp"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.wizard.featuresLoading ? 31 : !ctx.wizard.features.length ? 32 : ctx.showAllEndpoints ? 33 : 34);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.wizard.selectedFeature ? 35 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 26, ctx.wizard.selectedFeature ? "smartScan.wizard.callPreviewTitle" : "smartScan.wizard." + ctx.copyKey + ".explainTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 28, "smartScan.wizard." + ctx.copyKey + ".explainHelp"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_11_0 = ctx.wizard.selectedFeature) ? 47 : 48, tmp_11_0);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, MatButtonModule, MatButton, MatFormFieldModule, MatFormField, MatLabel, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, TranslocoModule, TranslocoPipe], styles: ["\n\n.wizard-error[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.wizard-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form[_ngcontent-%COMP%], \n.wizard-explainer[_ngcontent-%COMP%], \n.wizard-samples[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box[_ngcontent-%COMP%]    + .field-box[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n.field-box__heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.field-row__key[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack[_ngcontent-%COMP%], \n.input-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop[_ngcontent-%COMP%]:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-drop__preview[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.sample-frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.try-extract__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.explainer-notes[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n.dark[_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision[_ngcontent-%COMP%], \n   .wizard-facts[_ngcontent-%COMP%], \n   .input-grid[_ngcontent-%COMP%], \n   .side-choices[_ngcontent-%COMP%], \n   .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.endpoint-cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.endpoint-card[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n  padding: 0;\n  overflow: hidden;\n}\nbutton.endpoint-card[_ngcontent-%COMP%], \n.endpoint-card__hit[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  width: 100%;\n  padding: 0.95rem;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\nbutton.endpoint-card[_ngcontent-%COMP%] {\n  border: 1px solid #e7e5e4;\n  background: #fff;\n}\n.endpoint-card__hit[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n}\n.endpoint-card__hit--static[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.endpoint-card__url[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  word-break: break-all;\n}\n.endpoint-card__cost[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.endpoint-card__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 0 0.95rem 0.9rem 4.05rem;\n}\n.endpoint-card__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.endpoint-switch[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.85rem;\n}\n.endpoint-switch[_ngcontent-%COMP%]   .text-button[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.call-preview[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n}\n.call-preview__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.call-preview__head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.call-preview__head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.call-preview__route[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #292524;\n  border-radius: 0.7rem;\n  background: #0c0a09;\n  font-size: 0.75rem;\n}\n.call-preview__route[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.1rem 0.4rem;\n  border-radius: 0.35rem;\n  background: #292524;\n  font-weight: 700;\n}\n.call-preview__route[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #e7e5e4;\n  word-break: break-all;\n}\n.call-preview__params[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.call-preview__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #292524;\n  border-radius: 0.7rem;\n  background: #292524;\n  font-size: 0.78rem;\n}\n.call-preview__row[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #fafaf9;\n}\n.call-preview__row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d6d3d1;\n}\n.call-preview__row--warn[_ngcontent-%COMP%] {\n  border-color: #b45309;\n}\n.call-preview__pill[_ngcontent-%COMP%] {\n  padding: 0.1rem 0.45rem;\n  border-radius: 999px;\n  background: #1c1917;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n}\n.call-preview__warn[_ngcontent-%COMP%] {\n  color: #fbbf24 !important;\n}\n.dark[_nghost-%COMP%]   button.endpoint-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   button.endpoint-card[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .endpoint-card__url[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .endpoint-card__url[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .text-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .text-button[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=document-type-wizard-smart-check.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypeWizardSmartCheckComponent, [{
    type: Component,
    args: [{ selector: "document-type-wizard-smart-check", standalone: true, imports: [
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      TranslocoModule
    ], template: `<div class="wizard-screen">\r
    <header class="wizard-hero">\r
        <div>\r
            <span class="wizard-hero__eyebrow">{{ 'smartScan.wizard.' + copyKey + '.eyebrow' | transloco }}</span>\r
            <h2>{{ 'smartScan.wizard.' + copyKey + '.title' | transloco }}</h2>\r
            <p>{{ 'smartScan.wizard.' + copyKey + '.subtitle' | transloco }}</p>\r
        </div>\r
        <div class="wizard-hero__choice">\r
            <span>{{ 'smartScan.wizard.' + copyKey + '.choiceLabel' | transloco }}</span>\r
            <strong>{{ wizard.selectedFeature?.name || ('smartScan.wizard.skipSmartCheck' | transloco) }}</strong>\r
        </div>\r
    </header>\r
\r
    <div class="wizard-decision">\r
        <section class="wizard-form">\r
            <div class="section-heading">\r
                <span>01</span>\r
                <div>\r
                    <h3>{{ 'smartScan.wizard.smartCheckStep.sectionTitle' | transloco }}</h3>\r
                    <p>{{ 'smartScan.wizard.smartCheckStep.sectionHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            @if (wizard.featuresLoading) {\r
                <mat-progress-spinner mode="indeterminate" diameter="36"></mat-progress-spinner>\r
            } @else if (!wizard.features.length) {\r
                <article class="field-card">\r
                    <span class="field-card__icon"><mat-icon>travel_explore</mat-icon></span>\r
                    <div class="field-card__content">\r
                        <span class="field-card__title">\r
                            <strong>{{ 'smartScan.wizard.noSmartCheck' | transloco }}</strong>\r
                        </span>\r
                    </div>\r
                </article>\r
            } @else if (showAllEndpoints) {\r
                <p class="field-card__body">{{ 'smartScan.wizard.smartCheckHint' | transloco }}</p>\r
                <div class="endpoint-cards">\r
                    <button\r
                        type="button"\r
                        class="field-card endpoint-card"\r
                        [class.field-card--ready]="!wizard.selectedFeatureId"\r
                        (click)="pickFeature('')"\r
                    >\r
                        <span class="field-card__icon"><mat-icon>crop_portrait</mat-icon></span>\r
                        <span class="field-card__content">\r
                            <span class="field-card__title">\r
                                <strong>{{ 'smartScan.wizard.skipSmartCheck' | transloco }}</strong>\r
                            </span>\r
                        </span>\r
                    </button>\r
                    @for (feature of wizard.features; track feature._id) {\r
                        <article class="field-card endpoint-card" [class.field-card--ready]="wizard.selectedFeatureId === feature._id">\r
                            <button type="button" class="endpoint-card__hit" (click)="pickFeature(feature._id)">\r
                                <span class="field-card__icon"><mat-icon>verified</mat-icon></span>\r
                                <span class="field-card__content">\r
                                    <span class="field-card__title">\r
                                        <strong>{{ feature.name }}</strong>\r
                                    </span>\r
                                    @if (feature.url) {\r
                                        <span class="endpoint-card__url">{{ feature.url }}</span>\r
                                    }\r
                                    <span class="endpoint-card__cost">\r
                                        {{ 'smartScan.wizard.endpointCost' | transloco: { cost: featureCost(feature) } }}\r
                                    </span>\r
                                </span>\r
                            </button>\r
                            <div class="endpoint-card__links">\r
                                <a\r
                                    class="text-button"\r
                                    [href]="postmanUrl(feature)"\r
                                    target="_blank"\r
                                    rel="noopener noreferrer"\r
                                    (click)="$event.stopPropagation()"\r
                                >\r
                                    {{ 'smartScan.wizard.openPostman' | transloco }} \u2197\r
                                </a>\r
                                @if (docsUrl(feature); as docs) {\r
                                    <a\r
                                        class="text-button"\r
                                        [href]="docs"\r
                                        target="_blank"\r
                                        rel="noopener noreferrer"\r
                                        (click)="$event.stopPropagation()"\r
                                    >\r
                                        {{ 'smartScan.wizard.openDocs' | transloco }} \u2197\r
                                    </a>\r
                                }\r
                            </div>\r
                        </article>\r
                    }\r
                </div>\r
            } @else {\r
                @if (wizard.selectedFeature; as feature) {\r
                    <article class="field-card endpoint-card field-card--ready">\r
                        <div class="endpoint-card__hit endpoint-card__hit--static">\r
                            <span class="field-card__icon"><mat-icon>verified</mat-icon></span>\r
                            <div class="field-card__content">\r
                                <span class="field-card__title">\r
                                    <strong>{{ feature.name }}</strong>\r
                                </span>\r
                                @if (feature.url) {\r
                                    <span class="endpoint-card__url">{{ feature.url }}</span>\r
                                }\r
                                <span class="endpoint-card__cost">\r
                                    {{ 'smartScan.wizard.endpointCost' | transloco: { cost: featureCost(feature) } }}\r
                                </span>\r
                            </div>\r
                        </div>\r
                        <div class="endpoint-card__links">\r
                            <a class="text-button" [href]="postmanUrl(feature)" target="_blank" rel="noopener noreferrer">\r
                                {{ 'smartScan.wizard.openPostman' | transloco }} \u2197\r
                            </a>\r
                            @if (docsUrl(feature); as docs) {\r
                                <a class="text-button" [href]="docs" target="_blank" rel="noopener noreferrer">\r
                                    {{ 'smartScan.wizard.openDocs' | transloco }} \u2197\r
                                </a>\r
                            }\r
                        </div>\r
                    </article>\r
                    <div class="endpoint-switch">\r
                        @if (wizard.features.length > 1) {\r
                            <button mat-stroked-button type="button" (click)="openEndpointList($event)">\r
                                {{ 'smartScan.wizard.changeEndpoint' | transloco }}\r
                            </button>\r
                        }\r
                        <button type="button" class="text-button" (click)="clearEndpoint($event)">\r
                            {{ 'smartScan.wizard.skipSmartCheck' | transloco }}\r
                        </button>\r
                    </div>\r
                }\r
            }\r
\r
            @if (wizard.selectedFeature) {\r
                <article class="field-card">\r
                    <span class="field-card__icon"><mat-icon>account_tree</mat-icon></span>\r
                    <div class="field-card__content">\r
                        <span class="field-card__title">\r
                            <strong>{{ 'smartScan.wizard.mapDependency' | transloco }}</strong>\r
                        </span>\r
                        @for (dependency of wizard.featureDependencies(wizard.selectedFeature); track dependency.field) {\r
                            <div class="input-grid">\r
                                <p class="dependency-name">\r
                                    {{ dependency.field }}\r
                                    @if (dependency.required) {\r
                                        <span>*</span>\r
                                    }\r
                                </p>\r
                                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                    <mat-label>{{ 'smartScan.wizard.mapDependency' | transloco }}</mat-label>\r
                                    <mat-select [(ngModel)]="wizard.fieldMap[dependency.field]">\r
                                        <mat-option value="">\u2014</mat-option>\r
                                        @for (value of wizard.dependencyEnums(dependency); track value) {\r
                                            <mat-option [value]="'literal:' + value">\r
                                                {{ 'smartScan.wizard.sendLiteral' | transloco: { value: value } }}\r
                                            </mat-option>\r
                                        }\r
                                        @for (key of wizard.mapKeys; track key) {\r
                                            <mat-option [value]="key">{{ key }}</mat-option>\r
                                        }\r
                                    </mat-select>\r
                                </mat-form-field>\r
                            </div>\r
                        }\r
                    </div>\r
                </article>\r
            }\r
        </section>\r
\r
        <aside class="wizard-explainer">\r
            <div class="section-heading section-heading--light">\r
                <span>02</span>\r
                <div>\r
                    <h3>\r
                        {{\r
                            (wizard.selectedFeature\r
                                ? 'smartScan.wizard.callPreviewTitle'\r
                                : 'smartScan.wizard.' + copyKey + '.explainTitle') | transloco\r
                        }}\r
                    </h3>\r
                    <p>{{ 'smartScan.wizard.' + copyKey + '.explainHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            @if (wizard.selectedFeature; as feature) {\r
                <div class="call-preview">\r
                    <div class="call-preview__head">\r
                        <strong>{{ feature.name }}</strong>\r
                        <span>{{ 'smartScan.wizard.endpointCost' | transloco: { cost: featureCost(feature) } }}</span>\r
                    </div>\r
                    @if (feature.url) {\r
                        <p class="call-preview__route">\r
                            <span>{{ feature.method || 'GET' }}</span>\r
                            <code>{{ feature.url }}</code>\r
                        </p>\r
                    }\r
                    <div class="call-preview__params">\r
                        @for (dependency of wizard.featureDependencies(feature); track dependency.field) {\r
                            @let source = dependencySource(dependency.field);\r
                            <div class="call-preview__row" [class.call-preview__row--warn]="source.kind === 'missing' && dependency.required">\r
                                <code>{{ dependency.field }}</code>\r
                                @if (source.kind === 'literal') {\r
                                    <span class="call-preview__pill">"{{ source.value }}"</span>\r
                                } @else if (source.kind === 'field') {\r
                                    <span>{{ 'smartScan.wizard.fromField' | transloco: { field: source.value } }}</span>\r
                                } @else if (dependency.required) {\r
                                    <span class="call-preview__warn">{{ 'smartScan.wizard.unmappedRequired' | transloco }}</span>\r
                                } @else {\r
                                    <span>\u2014</span>\r
                                }\r
                            </div>\r
                        }\r
                    </div>\r
                    <div class="explainer-notes">\r
                        <article>\r
                            <mat-icon>info</mat-icon>\r
                            <p>{{ 'smartScan.wizard.' + copyKey + '.noteSkip' | transloco }}</p>\r
                        </article>\r
                    </div>\r
                </div>\r
            } @else {\r
                <div class="explainer-notes">\r
                    @for (note of notes; track note) {\r
                        <article>\r
                            <mat-icon>info</mat-icon>\r
                            <p>{{ 'smartScan.wizard.' + copyKey + '.' + note | transloco }}</p>\r
                        </article>\r
                    }\r
                </div>\r
            }\r
        </aside>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-smart-check.component.scss */\n.wizard-error {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero h2 {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero p {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice span {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice strong {\n  font-size: 0.95rem;\n}\n.wizard-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form,\n.wizard-explainer,\n.wizard-samples {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading > span {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading h3 {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading p {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light > span {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box + .field-box {\n  margin-top: 0.85rem;\n}\n.field-box__heading {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row strong {\n  font-size: 0.88rem;\n}\n.field-row__key {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title strong {\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack,\n.input-grid {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice strong {\n  font-size: 0.92rem;\n}\n.side-choice span {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop input {\n  display: none;\n}\n.image-drop__preview {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples {\n  background: #fff;\n}\n.sample-frame {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract {\n  justify-self: start;\n}\n.try-extract__hint {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list h3 {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list article {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list strong {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list span {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name span {\n  color: #b91c1c;\n}\n.explainer-notes {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes article {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes p {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts article {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts strong {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts p {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n:host-context(.dark) .wizard-hero p,\n:host-context(.dark) .wizard-hero__choice span,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-card__title small,\n:host-context(.dark) .side-choice span,\n:host-context(.dark) .wizard-facts p {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-hero__choice,\n:host-context(.dark) .wizard-decision,\n:host-context(.dark) .field-card,\n:host-context(.dark) .field-box,\n:host-context(.dark) .field-row,\n:host-context(.dark) .side-choice,\n:host-context(.dark) .wizard-facts article {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .field-box__heading,\n:host-context(.dark) .field-row__key,\n:host-context(.dark) .field-row__type {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-explainer {\n  background: #020617;\n}\n:host-context(.dark) .wizard-samples {\n  background: #1e293b;\n}\n:host-context(.dark) .sample-frame,\n:host-context(.dark) .extraction-list article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .try-extract__hint,\n:host-context(.dark) .extraction-list strong {\n  color: #94a3b8;\n}\n:host-context(.dark) .section-heading > span,\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .fact-icon,\n:host-context(.dark) .image-drop {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready,\n:host-context(.dark) .field-row--ready,\n:host-context(.dark) .side-choice--ready {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .explainer-notes p {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision,\n  .wizard-facts,\n  .input-grid,\n  .side-choices,\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n:host {\n  display: block;\n}\n.endpoint-cards {\n  display: grid;\n  gap: 0.75rem;\n}\n.endpoint-card {\n  grid-template-columns: minmax(0, 1fr);\n  padding: 0;\n  overflow: hidden;\n}\nbutton.endpoint-card,\n.endpoint-card__hit {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  width: 100%;\n  padding: 0.95rem;\n  color: inherit;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\nbutton.endpoint-card {\n  border: 1px solid #e7e5e4;\n  background: #fff;\n}\n.endpoint-card__hit {\n  border: 0;\n  background: transparent;\n}\n.endpoint-card__hit--static {\n  cursor: default;\n}\n.endpoint-card__url {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  word-break: break-all;\n}\n.endpoint-card__cost {\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.endpoint-card__links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 0 0.95rem 0.9rem 4.05rem;\n}\n.endpoint-card__links a {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.endpoint-switch {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.85rem;\n}\n.endpoint-switch .text-button {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.call-preview {\n  display: grid;\n  gap: 0.85rem;\n}\n.call-preview__head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.call-preview__head strong {\n  font-size: 0.92rem;\n}\n.call-preview__head span {\n  color: #a8a29e;\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.call-preview__route {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #292524;\n  border-radius: 0.7rem;\n  background: #0c0a09;\n  font-size: 0.75rem;\n}\n.call-preview__route span {\n  padding: 0.1rem 0.4rem;\n  border-radius: 0.35rem;\n  background: #292524;\n  font-weight: 700;\n}\n.call-preview__route code {\n  color: #e7e5e4;\n  word-break: break-all;\n}\n.call-preview__params {\n  display: grid;\n  gap: 0.45rem;\n}\n.call-preview__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #292524;\n  border-radius: 0.7rem;\n  background: #292524;\n  font-size: 0.78rem;\n}\n.call-preview__row code {\n  color: #fafaf9;\n}\n.call-preview__row span {\n  color: #d6d3d1;\n}\n.call-preview__row--warn {\n  border-color: #b45309;\n}\n.call-preview__pill {\n  padding: 0.1rem 0.45rem;\n  border-radius: 999px;\n  background: #1c1917;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n}\n.call-preview__warn {\n  color: #fbbf24 !important;\n}\n:host-context(.dark) button.endpoint-card {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .endpoint-card__url,\n:host-context(.dark) .text-button {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=document-type-wizard-smart-check.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypeWizardSmartCheckComponent, { className: "DocumentTypeWizardSmartCheckComponent", filePath: "src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard-smart-check.component.ts", lineNumber: 29 });
})();

// src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard.component.ts
var _c03 = (a0) => ({ country: a0 });
var _c13 = () => ({});
function DocumentTypeWizardComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_For_22_Template_button_click_0_listener() {
      const \u0275$index_34_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToStep(\u0275$index_34_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_34_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("wizard-pill--current", ctx_r2.isStepCurrent(\u0275$index_34_r2));
    \u0275\u0275property("disabled", ctx_r2.saving || ctx_r2.loading || !ctx_r2.openedAsEdit && \u0275$index_34_r2 > ctx_r2.stepIndex);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "smartScan.wizard.steps." + step_r4), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-progress-spinner", 12);
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-type-wizard-details");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-type-wizard-sides");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-type-wizard-fields");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-type-wizard-smart-check");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 17);
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedFeatureId ? \u0275\u0275pipeBind1(1, 1, "smartScan.wizard.finish") : \u0275\u0275pipeBind1(2, 3, "smartScan.wizard.skip"), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartScan.wizard.next"), " ");
  }
}
function DocumentTypeWizardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, DocumentTypeWizardComponent_Conditional_25_Conditional_0_Template, 2, 1, "p", 13)(1, DocumentTypeWizardComponent_Conditional_25_Case_1_Template, 1, 0, "document-type-wizard-details")(2, DocumentTypeWizardComponent_Conditional_25_Case_2_Template, 1, 0, "document-type-wizard-sides")(3, DocumentTypeWizardComponent_Conditional_25_Case_3_Template, 1, 0, "document-type-wizard-fields")(4, DocumentTypeWizardComponent_Conditional_25_Case_4_Template, 1, 0, "document-type-wizard-smart-check");
    \u0275\u0275elementStart(5, "div", 14)(6, "button", 15);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousStep());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 16);
    \u0275\u0275listener("click", function DocumentTypeWizardComponent_Conditional_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextStep());
    });
    \u0275\u0275template(10, DocumentTypeWizardComponent_Conditional_25_Conditional_10_Template, 1, 0, "mat-progress-spinner", 17)(11, DocumentTypeWizardComponent_Conditional_25_Conditional_11_Template, 3, 5)(12, DocumentTypeWizardComponent_Conditional_25_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.errorMessage ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.steps[ctx_r2.stepIndex]) === "details" ? 1 : tmp_2_0 === "sides" ? 2 : tmp_2_0 === "fields" ? 3 : tmp_2_0 === "smartCheck" ? 4 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "smartScan.wizard.back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.canGoNext());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving ? 10 : ctx_r2.stepIndex === ctx_r2.steps.length - 1 ? 11 : 12);
  }
}
var DocumentTypeWizardComponent = class _DocumentTypeWizardComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._location = inject(Location);
    this._scanService = inject(SmartScanService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.urlRewritten = false;
    this.steps = ["details", "sides", "fields", "smartCheck"];
    this.categories = [
      "government_id",
      "passport",
      "license",
      "criminal",
      "bank_document",
      "tax_document",
      "business_document",
      "draft"
    ];
    this.fieldTypes = ["string", "number", "date", "boolean"];
    this.country = "";
    this.stepIndex = 0;
    this.saving = false;
    this.loading = false;
    this.openedAsEdit = false;
    this.errorMessage = "";
    this.name = "";
    this.code = "";
    this.category = "government_id";
    this.version = "";
    this.requiresBackSide = true;
    this.frontImage = "";
    this.backImage = "";
    this.fields = [this.emptyField(0)];
    this.expandedField = null;
    this.documentTypeId = "";
    this.defaultTemplateId = "";
    this.features = [];
    this.featuresLoading = false;
    this.selectedFeatureId = "";
    this.fieldMap = {};
    this.extracting = false;
    this.extractionAttempted = false;
    this.extractionError = "";
    this.extractionRows = [];
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get("id");
    if (id) {
      this.openedAsEdit = true;
      this.documentTypeId = id;
      this.bindStepToUrl();
      this.loadForEdit(id);
      return;
    }
    const forkId = this._route.snapshot.queryParamMap.get("fork");
    if (forkId) {
      this.bindStepToUrl();
      this.loadFork(forkId);
      return;
    }
    this.country = this._route.snapshot.queryParamMap.get("country") || "";
    if (!this.country) {
      this._router.navigate(["/smart-enroll/smart-scan/new"]);
      return;
    }
    this.bindStepToUrl();
  }
  get selectedFeature() {
    return this.features.find((feature) => feature._id === this.selectedFeatureId);
  }
  get mapKeys() {
    const keys = this.fields.map((field) => field.mapKey);
    return [...new Set(keys.map((key) => key.trim()).filter(Boolean))];
  }
  isStepCurrent(index) {
    return this.stepIndex === index;
  }
  goToStep(index) {
    if (this.saving || this.loading || index < 0 || index >= this.steps.length || index === this.stepIndex)
      return;
    if (!this.openedAsEdit && index > this.stepIndex)
      return;
    if (index < this.stepIndex) {
      this.moveToStep(index);
      return;
    }
    if (this.stepIndex <= 2) {
      if (!this.canGoNext())
        return;
      if (index > this.stepIndex + 1 && !this.canSaveProgress())
        return;
      this.persistProgress(index);
      return;
    }
    this.moveToStep(index);
  }
  canTryExtraction() {
    if (this.saving || this.extracting || !this.frontImage)
      return false;
    return !this.requiresBackSide || Boolean(this.backImage);
  }
  tryExtraction() {
    if (!this.canTryExtraction())
      return;
    this.extractionError = "";
    this.runExtraction();
  }
  get countryLabel() {
    const normalized = this.country.trim().toLowerCase().replace(/[\s-]+/g, "_");
    const key = `smartScan.countries.${normalized}`;
    const translated = this._transloco.translate(key);
    if (translated === key) {
      return this.country.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
    }
    return translated;
  }
  get identityReady() {
    return Boolean(this.name.trim() && this.code.trim());
  }
  get filledFieldCount() {
    return this.fields.filter((field) => field.name.trim() && field.mapKey.trim()).length;
  }
  canGoNext() {
    if (this.saving || this.loading)
      return false;
    if (this.stepIndex === 0)
      return Boolean(this.name.trim() && this.code.trim() && this.category);
    if (this.stepIndex === 1) {
      if (!this.frontImage)
        return false;
      return !this.requiresBackSide || Boolean(this.backImage);
    }
    if (this.stepIndex === 2)
      return this.fields.some((field) => field.name.trim() && field.mapKey.trim());
    return true;
  }
  previousStep() {
    if (this.stepIndex === 0) {
      this.backToScan();
      return;
    }
    this.writeStep(this.stepIndex - 1);
  }
  nextStep() {
    if (!this.canGoNext())
      return;
    this.errorMessage = "";
    if (this.stepIndex <= 2) {
      this.persistProgress(this.stepIndex + 1);
      return;
    }
    if (this.stepIndex === this.steps.length - 1) {
      this.finish();
    }
  }
  backToScan() {
    const queryParams = {};
    if (this.country)
      queryParams["country"] = this.country;
    if (this.documentTypeId && this.code.trim())
      queryParams["documentType"] = this.code.trim();
    this._router.navigate(["/smart-enroll/smart-scan/new"], { queryParams });
  }
  loadFork(id) {
    this.loading = true;
    this._scanService.getDocumentType(id).subscribe({
      next: (response) => {
        const documentType = response?.data;
        if (!documentType || documentType.client) {
          if (documentType?.client) {
            this._router.navigate(["/smart-enroll/smart-scan/document-type", documentType._id]);
            return;
          }
          this.backToScan();
          return;
        }
        this.prefillFromSystem(documentType);
      },
      error: () => this.backToScan()
    });
  }
  prefillFromSystem(documentType) {
    this.applyLoadedType(documentType);
    this.documentTypeId = "";
    this._scanService.getPromptTemplates(documentType._id).subscribe({
      next: (response) => {
        const rows = Array.isArray(response.data) ? response.data : [];
        const template = rows[0];
        if (template?.fields?.length)
          this.fields = this.copyFields(template.fields);
        this.requiresBackSide = template?.requiresBackSide ?? Boolean(documentType.backImage);
        this.openOwnedCopyOrStay(documentType.code);
      },
      error: () => this.openOwnedCopyOrStay(documentType.code)
    });
  }
  openOwnedCopyOrStay(code) {
    this._scanService.getDocumentTypes(this.country, true).subscribe({
      next: () => {
        const owned = this._scanService.documentTypes().find((type) => type.code === code && type.client);
        if (owned) {
          this._router.navigate(["/smart-enroll/smart-scan/document-type", owned._id]);
          return;
        }
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  onCodeInput(value) {
    this.code = value.toUpperCase().replace(/[^A-Z0-9_]/g, "");
  }
  onRequiresBackSideChange(bothSides) {
    this.requiresBackSide = bothSides;
    if (!bothSides) {
      this.backImage = "";
      this.fields.forEach((field) => {
        if (field.page === 1)
          field.page = 0;
      });
    }
  }
  onImageSelected(event, side) {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("image/"))
      return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (side === "front")
        this.frontImage = result;
      else
        this.backImage = result;
      this._cdr.markForCheck();
    };
    reader.readAsDataURL(file);
  }
  get frontFields() {
    return this.fields.filter((field) => field.page !== 1);
  }
  get backFields() {
    return this.fields.filter((field) => field.page === 1);
  }
  /**
   * Adds a field on the given side and opens it for editing.
   */
  addField(page) {
    const field = this.emptyField(page);
    this.fields.push(field);
    this.expandedField = field;
  }
  /**
   * Opens one field and closes whichever field was open.
   */
  toggleField(field) {
    this.expandedField = this.expandedField === field ? null : field;
  }
  /**
   * Moves a field between the front and back boxes.
   */
  moveField(field, page) {
    field.page = page;
  }
  removeField(field) {
    if (this.fields.length === 1)
      return;
    const index = this.fields.indexOf(field);
    if (index < 0)
      return;
    this.fields.splice(index, 1);
    if (this.expandedField === field)
      this.expandedField = null;
  }
  fieldLabel(field, index) {
    const name = field.name.trim();
    if (name)
      return name;
    const title = this._transloco.translate("smartScan.wizard.fieldsStep.fieldTitle");
    return `${title} ${index + 1}`;
  }
  onFeatureChange(featureId) {
    this.selectedFeatureId = featureId;
    this.fieldMap = {};
    for (const dependency of this.featureDependencies(this.selectedFeature)) {
      const fixed = this.dependencyEnums(dependency);
      if (fixed.length === 1) {
        this.fieldMap[dependency.field] = `literal:${fixed[0]}`;
        continue;
      }
      const match = this.mapKeys.find((key) => key === dependency.field);
      if (match)
        this.fieldMap[dependency.field] = match;
    }
  }
  /**
   * Values the endpoint accepts as a constant, such as CCPA for documentType.
   */
  dependencyEnums(dependency) {
    if (!Array.isArray(dependency.enum))
      return [];
    return dependency.enum.map((value) => String(value).trim()).filter(Boolean);
  }
  /**
   * Dependencies the catalog actually returned as a list.
   */
  featureDependencies(feature) {
    if (!feature || !Array.isArray(feature.dependencies))
      return [];
    return feature.dependencies;
  }
  persistProgress(nextIndex) {
    if (this.documentTypeId) {
      this.updateOwnedDocumentType(nextIndex);
      return;
    }
    this.createDocumentType(nextIndex);
  }
  createDocumentType(nextIndex) {
    this.saving = true;
    this._scanService.createDocumentType({
      name: this.name.trim(),
      code: this.code.trim(),
      category: this.category,
      country: this.country,
      version: this.version.trim() || void 0,
      fields: this.cleanFields(this.fields),
      frontImage: this.frontImage,
      backImage: this.requiresBackSide ? this.backImage : "",
      requiresBackSide: this.requiresBackSide
    }).subscribe({
      next: (response) => {
        this.documentTypeId = response.data?._id || "";
        this.defaultTemplateId = response.data?.promptTemplate?._id || "";
        this.adoptSavedImages(response.data);
        this.rememberDocumentUrl();
        this.afterOwnedSave(nextIndex);
      },
      error: (err) => {
        const message = err?.error?.message || err?.message || "";
        if (String(message).includes("code_already_exists")) {
          this.saving = false;
          this.openOwnedCopyOrStay(this.code.trim());
          return;
        }
        this.fail(err);
      }
    });
  }
  loadFeatures() {
    this.featuresLoading = true;
    this._scanService.getSmartCheckFeatures(this.country).subscribe({
      next: (response) => {
        const rows = Array.isArray(response.data) ? response.data : [];
        const country = this.country.trim().toLowerCase();
        this.features = rows.filter((feature) => !country || (feature.country || "").trim().toLowerCase() === country).sort((left, right) => this.featureRank(left) - this.featureRank(right) || left.name.localeCompare(right.name));
        this.applyLiteralDefaults();
        this.featuresLoading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.features = [];
        this.featuresLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  finish() {
    if (!this.selectedFeatureId) {
      this.backToScan();
      return;
    }
    const smartCheckFieldMap = (this.selectedFeature?.dependencies || []).map((dependency) => this.fieldMapRow(dependency.field)).filter((row) => row.mapKey || row.literal);
    this.saving = true;
    this._scanService.updateDocumentType(this.documentTypeId, {
      appFeature: this.selectedFeatureId,
      smartCheckFieldMap
    }).subscribe({
      next: () => this.backToScan(),
      error: (err) => this.fail(err)
    });
  }
  fail(err) {
    this.saving = false;
    this.errorMessage = err?.error?.message || err?.message || this._transloco.translate("smartScan.wizard.saveError");
    this._cdr.markForCheck();
  }
  cleanFields(fields) {
    return fields.filter((field) => field.name.trim() && field.mapKey.trim()).map((field) => ({
      name: field.name.trim(),
      type: field.type || "string",
      mapKey: field.mapKey.trim(),
      page: this.requiresBackSide ? field.page : 0
    }));
  }
  emptyField(page) {
    return { name: "", type: "string", mapKey: "", page };
  }
  loadForEdit(id) {
    this.loading = true;
    this._scanService.getDocumentType(id).subscribe({
      next: (response) => {
        const documentType = response?.data;
        if (!documentType?.client) {
          this.backToScan();
          return;
        }
        this.applyLoadedType(documentType);
        this.loadOwnedTemplates(id, documentType.name);
      },
      error: () => this.backToScan()
    });
  }
  applyLoadedType(documentType) {
    this.country = documentType.country || "";
    this.name = documentType.name || "";
    this.code = documentType.code || "";
    this.category = documentType.category || "government_id";
    this.version = documentType.version || "";
    this.frontImage = documentType.frontImage || "";
    this.backImage = documentType.backImage || "";
    this.requiresBackSide = Boolean(documentType.backImage);
    this.fields = this.copyFields(documentType.fields);
    this.selectedFeatureId = this.featureId(documentType.appFeature);
    this.fieldMap = {};
    for (const row of documentType.smartCheckFieldMap || []) {
      if (!row.dependencyField)
        continue;
      if (row.literal)
        this.fieldMap[row.dependencyField] = `literal:${row.literal}`;
      else if (row.mapKey)
        this.fieldMap[row.dependencyField] = row.mapKey;
    }
    if (this.steps[this.stepIndex] === "smartCheck")
      this.loadFeatures();
  }
  loadOwnedTemplates(documentTypeId, documentName) {
    this._scanService.getPromptTemplates(documentTypeId).subscribe({
      next: (response) => {
        const rows = Array.isArray(response.data) ? response.data : [];
        this.splitTemplates(rows, documentName);
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  splitTemplates(rows, documentName) {
    const named = rows.find((row) => row.name === documentName) || rows[0];
    this.defaultTemplateId = named?._id || "";
  }
  updateOwnedDocumentType(nextIndex = 3) {
    this.saving = true;
    const fields = this.cleanFields(this.fields);
    this._scanService.updateDocumentType(this.documentTypeId, {
      name: this.name.trim(),
      code: this.code.trim(),
      category: this.category,
      country: this.country,
      version: this.version.trim() || null,
      fields,
      frontImage: this.frontImage,
      backImage: this.requiresBackSide ? this.backImage : ""
    }).subscribe({
      next: (response) => {
        this.adoptSavedImages(response.data);
        this.syncDefaultTemplate(fields, nextIndex);
      },
      error: (err) => this.fail(err)
    });
  }
  syncDefaultTemplate(fields, nextIndex) {
    if (!this.defaultTemplateId) {
      this.afterOwnedSave(nextIndex);
      return;
    }
    this._scanService.updatePromptTemplate(this.defaultTemplateId, {
      active: true,
      country: this.country,
      description: this.name.trim(),
      documentCategory: this.category,
      fields,
      format: "json",
      name: this.name.trim(),
      requiresBackSide: this.requiresBackSide
    }).subscribe({
      next: () => this.afterOwnedSave(nextIndex),
      error: (err) => this.fail(err)
    });
  }
  afterOwnedSave(nextIndex) {
    this.saving = false;
    this.rememberDocumentUrl();
    if (nextIndex !== this.stepIndex)
      this.moveToStep(nextIndex);
    this._cdr.markForCheck();
  }
  rememberDocumentUrl() {
    if (!this.documentTypeId)
      return;
    const url = this.documentUrl(this.steps[this.stepIndex]);
    this._location.replaceState(url);
    this.openedAsEdit = true;
    if (!this._route.snapshot.paramMap.get("id"))
      this.urlRewritten = true;
  }
  documentUrl(step) {
    return this._router.serializeUrl(this._router.createUrlTree(["/smart-enroll/smart-scan/document-type", this.documentTypeId], {
      queryParams: { step }
    }));
  }
  adoptSavedImages(documentType) {
    if (!documentType?.frontImage && !documentType?.backImage)
      return;
    if (documentType.frontImage)
      this.frontImage = documentType.frontImage;
    this.backImage = documentType.backImage || "";
  }
  runExtraction() {
    if (!this.frontImage)
      return;
    this.extracting = true;
    this.extractionError = "";
    this._scanService.identifyDocumentFields(this.frontImage, this.requiresBackSide ? this.backImage : void 0).subscribe({
      next: (response) => {
        const rows = Array.isArray(response?.data) ? response.data : [];
        const fields = this.toDocumentFields(rows);
        if (fields.length)
          this.fields = fields;
        this.extractionRows = fields.map((field) => ({ key: field.mapKey, value: field.name }));
        this.extractionAttempted = true;
        this.extracting = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.extracting = false;
        this.extractionError = err?.error?.message || err?.message || this._transloco.translate("smartScan.wizard.fieldsStep.extractionError");
        this._cdr.markForCheck();
      }
    });
  }
  toDocumentFields(rows) {
    const fields = rows.filter((field) => field?.name?.trim() && field?.mapKey?.trim()).map((field) => ({
      name: field.name.trim(),
      mapKey: field.mapKey.trim(),
      type: this.normalizeFieldType(field.type),
      page: this.requiresBackSide && (Number(field.page) === 1 || Number(field.page) === 2) ? 1 : 0
    }));
    return fields;
  }
  normalizeFieldType(type) {
    const normalized = (type || "").toLowerCase();
    if (normalized === "string" || normalized === "number" || normalized === "date" || normalized === "boolean") {
      return normalized;
    }
    return "string";
  }
  canSaveProgress() {
    if (!this.name.trim() || !this.code.trim() || !this.category || !this.frontImage)
      return false;
    if (this.requiresBackSide && !this.backImage)
      return false;
    return this.fields.some((field) => field.name.trim() && field.mapKey.trim());
  }
  moveToStep(index) {
    this.writeStep(index);
  }
  /**
   * Keeps the visible step aligned with ?step=, including browser back and forward.
   * Reading the param never saves the document.
   */
  bindStepToUrl() {
    this._route.queryParamMap.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((params) => {
      if (this.urlRewritten)
        return;
      this.syncStepFromParam(params.get("step"));
    });
    const locationSub = this._location.subscribe(() => {
      if (!this.urlRewritten)
        return;
      const index = this.stepIndexFromParam(this.stepFromLocation());
      this.applyStep(index ?? 0);
    });
    this._destroyRef.onDestroy(() => locationSub.unsubscribe());
  }
  syncStepFromParam(step) {
    const index = this.stepIndexFromParam(step);
    if (index == null) {
      this.writeStep(0, { replaceUrl: true });
      return;
    }
    this.applyStep(index);
  }
  stepIndexFromParam(step) {
    if (!step)
      return null;
    const index = this.steps.indexOf(step);
    if (!this.canOpenStep(index))
      return null;
    return index;
  }
  canOpenStep(index) {
    if (index < 0 || index >= this.steps.length)
      return false;
    if (this._route.snapshot.paramMap.get("id") || this.documentTypeId)
      return true;
    return index === 0;
  }
  stepFromLocation() {
    const path = this._location.path();
    const query = path.includes("?") ? path.slice(path.indexOf("?") + 1) : "";
    return new URLSearchParams(query).get("step");
  }
  writeStep(index, options) {
    if (!this.canOpenStep(index))
      return;
    const step = this.steps[index];
    if (this.urlRewritten && this.documentTypeId) {
      const url = this.documentUrl(step);
      const current = this._location.path().split("#")[0];
      if (current !== url) {
        if (options?.replaceUrl)
          this._location.replaceState(url);
        else
          this._location.go(url);
      }
      this.applyStep(index);
      return;
    }
    if (this._route.snapshot.queryParamMap.get("step") === step) {
      this.applyStep(index);
      return;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { step },
      queryParamsHandling: "merge",
      replaceUrl: options?.replaceUrl ?? false
    });
  }
  applyStep(index) {
    if (index === this.stepIndex)
      return;
    this.stepIndex = index;
    this.errorMessage = "";
    if (this.steps[index] === "smartCheck" && this.country)
      this.loadFeatures();
    this._cdr.markForCheck();
  }
  copyFields(fields) {
    if (!fields?.length)
      return [this.emptyField(0)];
    return fields.map((field) => ({
      name: field.name,
      type: field.type || "string",
      mapKey: field.mapKey || "",
      page: field.page || 0
    }));
  }
  featureId(value) {
    if (!value)
      return "";
    if (typeof value === "string")
      return value;
    return value._id || "";
  }
  /**
   * A dependency with one accepted code, such as CCPA, is sent as that code unless the user chose a field.
   */
  applyLiteralDefaults() {
    for (const dependency of this.featureDependencies(this.selectedFeature)) {
      if (this.fieldMap[dependency.field])
        continue;
      const fixed = this.dependencyEnums(dependency);
      if (fixed.length !== 1)
        continue;
      this.fieldMap[dependency.field] = `literal:${fixed[0]}`;
    }
  }
  fieldMapRow(field) {
    const chosen = this.fieldMap[field] || "";
    if (chosen.startsWith("literal:")) {
      return { dependencyField: field, mapKey: "", literal: chosen.slice("literal:".length) };
    }
    return { dependencyField: field, mapKey: chosen, literal: "" };
  }
  /**
   * Identity checks and endpoints that already name this document code come first.
   * Every other endpoint for the country stays in the list.
   */
  featureRank(feature) {
    const code = this.code.trim().toUpperCase();
    const dependencies = this.featureDependencies(feature);
    const enums = dependencies.flatMap((dependency) => this.dependencyEnums(dependency).map((value) => value.toUpperCase()));
    if (code && enums.includes(code))
      return 0;
    const identity = feature.baseCategory === "identity" || dependencies.some((dependency) => dependency.field === "documentNumber" || dependency.field === "documentType");
    return identity ? 1 : 2;
  }
  static {
    this.\u0275fac = function DocumentTypeWizardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypeWizardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypeWizardComponent, selectors: [["document-type-wizard"]], features: [\u0275\u0275ProvidersFeature([{ provide: DOCUMENT_TYPE_WIZARD, useExisting: _DocumentTypeWizardComponent }])], decls: 26, vars: 18, consts: [[1, "wizard-page"], [1, "wizard-header"], [1, "wizard-header__inner"], [1, "wizard-crumb"], ["routerLink", "/smart-enroll/smart-scan/new", 3, "queryParams"], [1, "wizard-header__title"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "wizard-pills"], ["type", "button", 1, "wizard-pill", 3, "wizard-pill--current", "disabled"], [1, "wizard-main"], [1, "wizard-loading"], ["type", "button", 1, "wizard-pill", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "36"], [1, "wizard-error"], [1, "wizard-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "wizard-next", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "18"]], template: function DocumentTypeWizardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "button", 6);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275listener("click", function DocumentTypeWizardComponent_Template_button_click_13_listener() {
          return ctx.previousStep();
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "h1");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "nav", 7);
        \u0275\u0275repeaterCreate(21, DocumentTypeWizardComponent_For_22_Template, 3, 6, "button", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "main", 9);
        \u0275\u0275template(24, DocumentTypeWizardComponent_Conditional_24_Template, 2, 0, "div", 10)(25, DocumentTypeWizardComponent_Conditional_25_Template, 13, 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("queryParams", ctx.country ? \u0275\u0275pureFunction1(15, _c03, ctx.country) : \u0275\u0275pureFunction0(17, _c13));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartScan.wizard.breadcrumbScan"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, ctx.openedAsEdit ? "smartScan.wizard.editTitle" : "smartScan.wizard.title"));
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 11, "smartScan.wizard.back"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, ctx.openedAsEdit ? "smartScan.wizard.editTitle" : "smartScan.wizard.title"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading ? 25 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe,
      DocumentTypeWizardDetailsComponent,
      DocumentTypeWizardSidesComponent,
      DocumentTypeWizardFieldsComponent,
      DocumentTypeWizardSmartCheckComponent
    ], styles: ["\n\n.wizard-error[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.wizard-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form[_ngcontent-%COMP%], \n.wizard-explainer[_ngcontent-%COMP%], \n.wizard-samples[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a8a29e;\n}\n.field-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box[_ngcontent-%COMP%]    + .field-box[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n.field-box__heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.field-row__key[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack[_ngcontent-%COMP%], \n.input-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop[_ngcontent-%COMP%]:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.image-drop__preview[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.sample-frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.try-extract__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.explainer-notes[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n.dark[_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__body[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-hero__choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-decision[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-facts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-box__heading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__key[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row__type[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-samples[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-frame[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #0f172a;\n}\n.dark[_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .try-extract__hint[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .extraction-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card__icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .fact-icon[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .image-drop[_ngcontent-%COMP%] {\n  background: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading--light[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n.dark[_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-card--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .field-row--ready[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .side-choice--ready[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .explainer-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision[_ngcontent-%COMP%], \n   .wizard-facts[_ngcontent-%COMP%], \n   .input-grid[_ngcontent-%COMP%], \n   .side-choices[_ngcontent-%COMP%], \n   .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n}\n.wizard-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: #fafaf9;\n  color: #1c1917;\n}\n.wizard-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e7e5e4;\n  background: rgba(255, 255, 255, 0.92);\n}\n.wizard-header__inner[_ngcontent-%COMP%], \n.wizard-main[_ngcontent-%COMP%] {\n  width: min(100%, 76rem);\n  margin: 0 auto;\n  padding: 1.25rem 1.5rem 0;\n}\n.wizard-crumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  color: #78716c;\n  font-size: 0.75rem;\n}\n.wizard-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.wizard-header__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.75rem;\n}\n.wizard-header__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n.wizard-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin: 1rem 0 1.1rem;\n}\n.wizard-pill[_ngcontent-%COMP%] {\n  border: 1px solid #e7e5e4;\n  background: #fff;\n  color: #57534e;\n  border-radius: 999px;\n  padding: 0.35rem 0.8rem;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.wizard-pill--current[_ngcontent-%COMP%] {\n  border-color: #1c1917;\n  background: #1c1917;\n  color: #fff;\n}\n.wizard-pill[_ngcontent-%COMP%]:disabled:not(.wizard-pill--current) {\n  opacity: 0.4;\n  cursor: default;\n}\n.wizard-main[_ngcontent-%COMP%] {\n  padding-bottom: 2.5rem;\n}\n.wizard-loading[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 16rem;\n}\n.wizard-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.75rem;\n}\n.wizard-next.mat-mdc-unelevated-button[_ngcontent-%COMP%] {\n  --mdc-protected-button-container-color: #1c1917;\n  --mdc-protected-button-label-text-color: #fff;\n}\n[_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: #d6d3d1;\n  color: #44403c;\n  --mdc-protected-button-disabled-label-text-color: #44403c;\n  --fuse-text-disabled: #44403c;\n  --fuse-text-disabled-rgb:\n    68,\n    64,\n    60;\n}\n.dark[_nghost-%COMP%]   .wizard-page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-page[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .wizard-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-header[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: rgba(15, 23, 42, 0.92);\n}\n.dark[_nghost-%COMP%]   .wizard-crumb[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-crumb[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark[_nghost-%COMP%]   .wizard-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-pill[_ngcontent-%COMP%] {\n  border-color: #334155;\n  background: #1e293b;\n  color: #cbd5e1;\n}\n.dark[_nghost-%COMP%]   .wizard-pill--current[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-pill--current[_ngcontent-%COMP%] {\n  border-color: #f8fafc;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button[_ngcontent-%COMP%] {\n  --mdc-protected-button-container-color: #f8fafc;\n  --mdc-protected-button-label-text-color: #0f172a;\n}\n.dark[_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled[_ngcontent-%COMP%] {\n  background-color: #334155;\n  color: #e2e8f0;\n  --mdc-protected-button-disabled-label-text-color: #e2e8f0;\n  --fuse-text-disabled: #e2e8f0;\n  --fuse-text-disabled-rgb:\n    226,\n    232,\n    240;\n}\n/*# sourceMappingURL=document-type-wizard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypeWizardComponent, [{
    type: Component,
    args: [{ selector: "document-type-wizard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      DocumentTypeWizardDetailsComponent,
      DocumentTypeWizardSidesComponent,
      DocumentTypeWizardFieldsComponent,
      DocumentTypeWizardSmartCheckComponent
    ], providers: [{ provide: DOCUMENT_TYPE_WIZARD, useExisting: DocumentTypeWizardComponent }], template: `<div class="wizard-page">\r
    <header class="wizard-header">\r
        <div class="wizard-header__inner">\r
            <div class="wizard-crumb">\r
                <a routerLink="/smart-enroll/smart-scan/new" [queryParams]="country ? { country: country } : {}">\r
                    {{ 'smartScan.wizard.breadcrumbScan' | transloco }}\r
                </a>\r
                <span>/</span>\r
                <span>{{ (openedAsEdit ? 'smartScan.wizard.editTitle' : 'smartScan.wizard.title') | transloco }}</span>\r
            </div>\r
            <div class="wizard-header__title">\r
                <button mat-icon-button type="button" (click)="previousStep()" [attr.aria-label]="'smartScan.wizard.back' | transloco">\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <h1>{{ (openedAsEdit ? 'smartScan.wizard.editTitle' : 'smartScan.wizard.title') | transloco }}</h1>\r
            </div>\r
            <nav class="wizard-pills">\r
                @for (step of steps; track step; let i = $index) {\r
                    <button\r
                        type="button"\r
                        class="wizard-pill"\r
                        [class.wizard-pill--current]="isStepCurrent(i)"\r
                        [disabled]="saving || loading || (!openedAsEdit && i > stepIndex)"\r
                        (click)="goToStep(i)"\r
                    >\r
                        {{ 'smartScan.wizard.steps.' + step | transloco }}\r
                    </button>\r
                }\r
            </nav>\r
        </div>\r
    </header>\r
\r
    <main class="wizard-main">\r
        @if (loading) {\r
            <div class="wizard-loading">\r
                <mat-progress-spinner mode="indeterminate" diameter="36"></mat-progress-spinner>\r
            </div>\r
        }\r
        @if (!loading) {\r
            @if (errorMessage) {\r
                <p class="wizard-error">{{ errorMessage }}</p>\r
            }\r
\r
            @switch (steps[stepIndex]) {\r
                @case ('details') {\r
                    <document-type-wizard-details />\r
                }\r
                @case ('sides') {\r
                    <document-type-wizard-sides />\r
                }\r
                @case ('fields') {\r
                    <document-type-wizard-fields />\r
                }\r
                @case ('smartCheck') {\r
                    <document-type-wizard-smart-check />\r
                }\r
            }\r
\r
            <div class="wizard-actions">\r
                <button mat-stroked-button type="button" (click)="previousStep()">\r
                    {{ 'smartScan.wizard.back' | transloco }}\r
                </button>\r
                <button mat-flat-button color="primary" class="wizard-next" type="button" [disabled]="!canGoNext()" (click)="nextStep()">\r
                    @if (saving) {\r
                        <mat-progress-spinner mode="indeterminate" diameter="18"></mat-progress-spinner>\r
                    } @else if (stepIndex === steps.length - 1) {\r
                        {{ selectedFeatureId ? ('smartScan.wizard.finish' | transloco) : ('smartScan.wizard.skip' | transloco) }}\r
                    } @else {\r
                        {{ 'smartScan.wizard.next' | transloco }}\r
                    }\r
                </button>\r
            </div>\r
        }\r
    </main>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard.component.scss */\n.wizard-error {\n  margin: 1rem 0 0;\n  color: #b91c1c;\n  font-size: 0.875rem;\n}\n.wizard-screen {\n  display: grid;\n  gap: 1.25rem;\n  padding-top: 1.5rem;\n}\n.wizard-hero {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.wizard-hero__eyebrow {\n  color: #78716c;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.wizard-hero h2 {\n  margin: 0.35rem 0 0;\n  font-size: clamp(1.75rem, 3vw, 2.55rem);\n  font-weight: 600;\n  letter-spacing: -0.03em;\n  line-height: 1.05;\n}\n.wizard-hero p {\n  max-width: 40rem;\n  margin: 0.55rem 0 0;\n  color: #78716c;\n  font-size: 0.95rem;\n}\n.wizard-hero__choice {\n  display: grid;\n  gap: 0.15rem;\n  min-width: 9rem;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.wizard-hero__choice span {\n  color: #78716c;\n  font-size: 0.68rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.wizard-hero__choice strong {\n  font-size: 0.95rem;\n}\n.wizard-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);\n  overflow: hidden;\n  border: 1px solid #d6d3d1;\n  border-radius: 1.5rem;\n  background: #fff;\n}\n.wizard-form,\n.wizard-explainer,\n.wizard-samples {\n  display: grid;\n  align-content: start;\n  gap: 0.9rem;\n  padding: 1.25rem;\n}\n.wizard-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.section-heading {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.section-heading > span {\n  display: grid;\n  place-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #44403c;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.section-heading h3 {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.section-heading p {\n  margin: 0.15rem 0 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.section-heading--light > span {\n  background: #292524;\n  color: #fafaf9;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.field-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.85rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n}\n.field-card--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__icon {\n  display: grid;\n  place-items: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 0.7rem;\n  background: #f5f5f4;\n  color: #44403c;\n}\n.field-card__content {\n  display: grid;\n  gap: 0.55rem;\n  min-width: 0;\n}\n.field-box {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.95rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1.15rem;\n  background: #fff;\n}\n.field-box + .field-box {\n  margin-top: 0.85rem;\n}\n.field-box__heading {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #78716c;\n}\n.field-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: center;\n  width: 100%;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.field-row strong {\n  font-size: 0.88rem;\n}\n.field-row__key {\n  overflow: hidden;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.75rem;\n  color: #78716c;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.field-row__type {\n  font-size: 0.72rem;\n  color: #a8a29e;\n}\n.field-row--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.field-card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.field-card__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-card__title strong {\n  font-size: 0.92rem;\n}\n.field-card__title small {\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.field-card__body {\n  color: #78716c;\n  font-size: 0.82rem;\n}\n.input-stack,\n.input-grid {\n  display: grid;\n  gap: 0.65rem;\n}\n.input-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: center;\n}\n.side-choices {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.side-choice {\n  display: grid;\n  gap: 0.25rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.side-choice strong {\n  font-size: 0.92rem;\n}\n.side-choice span {\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.side-choice--ready {\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.image-drop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 10rem;\n  overflow: hidden;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n  cursor: pointer;\n}\n.image-drop:not(:has(img)) {\n  width: min(100%, 28rem);\n  aspect-ratio: 1.586/1;\n}\n.image-drop input {\n  display: none;\n}\n.image-drop__preview {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 24rem;\n  object-fit: contain;\n}\n.wizard-samples {\n  background: #fff;\n}\n.sample-frame {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 8rem;\n  overflow: hidden;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.8rem;\n  background: #f5f5f4;\n}\n.try-extract {\n  justify-self: start;\n}\n.try-extract__hint {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.8rem;\n}\n.extraction-list {\n  display: grid;\n  gap: 0.45rem;\n}\n.extraction-list h3 {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.extraction-list article {\n  display: grid;\n  gap: 0.1rem;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.7rem;\n}\n.extraction-list strong {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.extraction-list span {\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.text-button {\n  border: 0;\n  background: transparent;\n  color: #78716c;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.dependency-name {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.dependency-name span {\n  color: #b91c1c;\n}\n.explainer-notes {\n  display: grid;\n  gap: 0.75rem;\n}\n.explainer-notes article {\n  display: flex;\n  gap: 0.55rem;\n  align-items: flex-start;\n}\n.explainer-notes p {\n  margin: 0;\n  color: #d6d3d1;\n  font-size: 0.84rem;\n  line-height: 1.45;\n}\n.explainer-notes mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: #a8a29e;\n}\n.wizard-facts {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.wizard-facts article {\n  display: flex;\n  gap: 0.7rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fff;\n}\n.wizard-facts strong {\n  display: block;\n  font-size: 0.86rem;\n}\n.wizard-facts p {\n  margin: 0.2rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n}\n.fact-icon {\n  display: grid;\n  place-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.6rem;\n  background: #f5f5f4;\n}\n:host-context(.dark) .wizard-hero p,\n:host-context(.dark) .wizard-hero__choice span,\n:host-context(.dark) .section-heading p,\n:host-context(.dark) .field-card__body,\n:host-context(.dark) .field-card__title small,\n:host-context(.dark) .side-choice span,\n:host-context(.dark) .wizard-facts p {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-hero__choice,\n:host-context(.dark) .wizard-decision,\n:host-context(.dark) .field-card,\n:host-context(.dark) .field-box,\n:host-context(.dark) .field-row,\n:host-context(.dark) .side-choice,\n:host-context(.dark) .wizard-facts article {\n  border-color: #334155;\n  background: #1e293b;\n}\n:host-context(.dark) .field-box__heading,\n:host-context(.dark) .field-row__key,\n:host-context(.dark) .field-row__type {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-explainer {\n  background: #020617;\n}\n:host-context(.dark) .wizard-samples {\n  background: #1e293b;\n}\n:host-context(.dark) .sample-frame,\n:host-context(.dark) .extraction-list article {\n  border-color: #334155;\n  background: #0f172a;\n}\n:host-context(.dark) .try-extract__hint,\n:host-context(.dark) .extraction-list strong {\n  color: #94a3b8;\n}\n:host-context(.dark) .section-heading > span,\n:host-context(.dark) .field-card__icon,\n:host-context(.dark) .fact-icon,\n:host-context(.dark) .image-drop {\n  background: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .section-heading--light > span {\n  background: #1e293b;\n}\n:host-context(.dark) .field-card--ready,\n:host-context(.dark) .field-row--ready,\n:host-context(.dark) .side-choice--ready {\n  box-shadow: inset 0 0 0 1px #e2e8f0;\n}\n:host-context(.dark) .explainer-notes p {\n  color: #cbd5e1;\n}\n@media (max-width: 980px) {\n  .wizard-decision,\n  .wizard-facts,\n  .input-grid,\n  .side-choices,\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n  .wizard-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n:host {\n  display: block;\n  min-height: 100%;\n}\n.wizard-page {\n  min-height: 100%;\n  background: #fafaf9;\n  color: #1c1917;\n}\n.wizard-header {\n  border-bottom: 1px solid #e7e5e4;\n  background: rgba(255, 255, 255, 0.92);\n}\n.wizard-header__inner,\n.wizard-main {\n  width: min(100%, 76rem);\n  margin: 0 auto;\n  padding: 1.25rem 1.5rem 0;\n}\n.wizard-crumb {\n  display: flex;\n  gap: 0.4rem;\n  color: #78716c;\n  font-size: 0.75rem;\n}\n.wizard-crumb a {\n  color: inherit;\n  text-decoration: none;\n}\n.wizard-header__title {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.75rem;\n}\n.wizard-header__title h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: -0.02em;\n}\n.wizard-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin: 1rem 0 1.1rem;\n}\n.wizard-pill {\n  border: 1px solid #e7e5e4;\n  background: #fff;\n  color: #57534e;\n  border-radius: 999px;\n  padding: 0.35rem 0.8rem;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.wizard-pill--current {\n  border-color: #1c1917;\n  background: #1c1917;\n  color: #fff;\n}\n.wizard-pill:disabled:not(.wizard-pill--current) {\n  opacity: 0.4;\n  cursor: default;\n}\n.wizard-main {\n  padding-bottom: 2.5rem;\n}\n.wizard-loading {\n  display: grid;\n  place-items: center;\n  min-height: 16rem;\n}\n.wizard-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.75rem;\n}\n.wizard-next.mat-mdc-unelevated-button {\n  --mdc-protected-button-container-color: #1c1917;\n  --mdc-protected-button-label-text-color: #fff;\n}\n:host .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled {\n  opacity: 1;\n  background-color: #d6d3d1;\n  color: #44403c;\n  --mdc-protected-button-disabled-label-text-color: #44403c;\n  --fuse-text-disabled: #44403c;\n  --fuse-text-disabled-rgb:\n    68,\n    64,\n    60;\n}\n:host-context(.dark) .wizard-page {\n  background: #0f172a;\n  color: #e2e8f0;\n}\n:host-context(.dark) .wizard-header {\n  border-color: #334155;\n  background: rgba(15, 23, 42, 0.92);\n}\n:host-context(.dark) .wizard-crumb {\n  color: #94a3b8;\n}\n:host-context(.dark) .wizard-pill {\n  border-color: #334155;\n  background: #1e293b;\n  color: #cbd5e1;\n}\n:host-context(.dark) .wizard-pill--current {\n  border-color: #f8fafc;\n  background: #f8fafc;\n  color: #0f172a;\n}\n:host-context(.dark) .wizard-next.mat-mdc-unelevated-button {\n  --mdc-protected-button-container-color: #f8fafc;\n  --mdc-protected-button-label-text-color: #0f172a;\n}\n:host-context(.dark) .wizard-next.mat-mdc-unelevated-button.mat-mdc-button-disabled {\n  background-color: #334155;\n  color: #e2e8f0;\n  --mdc-protected-button-disabled-label-text-color: #e2e8f0;\n  --fuse-text-disabled: #e2e8f0;\n  --fuse-text-disabled-rgb:\n    226,\n    232,\n    240;\n}\n/*# sourceMappingURL=document-type-wizard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypeWizardComponent, { className: "DocumentTypeWizardComponent", filePath: "src/app/modules/smart-enroll/smart-scan/document-type-wizard/document-type-wizard.component.ts", lineNumber: 36 });
})();
export {
  DocumentTypeWizardComponent
};
//# sourceMappingURL=chunk-5HELOBCN.js.map
