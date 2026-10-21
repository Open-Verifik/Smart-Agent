import {
  DEFAULT_PHONE_COUNTRY_CODE,
  DocumentVerificationTypeListComponent,
  PHONE_COUNTRY_CODES,
  SetupFormFactory,
  SetupService,
  buildCountryCheckSections,
  criminalCheckDocs,
  criminalCheckDocsUrl,
  isCountryCheckSelected,
  toggleCountryCheck
} from "./chunk-Q3KIBA73.js";
import {
  DIAL_CODES,
  PROJECT_NAME_PREFIXES,
  SetupUserInterfaceComponent,
  luminanceOkForWhiteText,
  randomAddressLine,
  randomChoice,
  randomChoiceCity,
  randomDigits,
  randomHexColor,
  randomPersonName,
  randomPostalCode,
  randomTokenHex,
  resolveAllowedCountries,
  resolveDevSampleRedirectOrigin,
  slugFromToken
} from "./chunk-VPRFL56J.js";
import {
  ADDRESS_PATTERN,
  CITY_NAME_PATTERN,
  PERSON_NAME_PATTERN,
  STRICT_URL_PATTERN,
  SetupBasicSetupComponent
} from "./chunk-N6B7SQGP.js";
import {
  MatChipsModule
} from "./chunk-ZMUEI3JR.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-7VQT7ZMZ.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-QLWSC7E3.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-P7M6LMVE.js";
import "./chunk-3HXCOQA4.js";
import "./chunk-FJ4CXUS4.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-YJBIUVPR.js";
import {
  FuseConfirmationService
} from "./chunk-KFR5LC4M.js";
import "./chunk-6FS3LBOZ.js";
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
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-2HNEWPD3.js";
import "./chunk-4J4GSXOK.js";
import {
  CountryService
} from "./chunk-4U26N45P.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-RM2644J3.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-HWNQWMK7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-M5KDIZH5.js";
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
  FormArray,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  Input,
  JsonPipe,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  Subject,
  ViewChild,
  catchError,
  inject,
  of,
  setClassMetadata,
  signal,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/projects/setup/breadcrumbs/breadcrumbs.component.ts
var _c0 = (a0, a1) => ({ current: a0, total: a1 });
var _c1 = (a0, a1, a2, a3) => ({ "bg-stone-900 text-white dark:bg-white dark:text-stone-900": a0, "text-stone-500": a1, "hover:bg-stone-100 dark:hover:bg-gray-800": a2, "opacity-50 cursor-not-allowed": a3 });
var _c2 = (a0, a1) => ({ "bg-white/20 text-white dark:bg-stone-900/15 dark:text-stone-900": a0, "bg-stone-100 text-stone-500 dark:bg-gray-800": a1 });
function SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 9);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_9_r2 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_9_r2 + 1, " ");
  }
}
function SetupBreadcrumbsComponent_ng_container_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function SetupBreadcrumbsComponent_ng_container_0_For_4_Template_button_click_0_listener() {
      const \u0275$index_9_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onStepClick(\u0275$index_9_r2));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275template(2, SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_2_Template, 2, 0, "mat-icon", 9)(3, SetupBreadcrumbsComponent_ng_container_0_For_4_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_9_r2 = ctx.$index;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.canNavigate || !ctx_r2.canNavigateToStep(\u0275$index_9_r2))("ngClass", \u0275\u0275pureFunction4(5, _c1, \u0275$index_9_r2 === ctx_r2.stepIndex, \u0275$index_9_r2 !== ctx_r2.stepIndex, \u0275$index_9_r2 !== ctx_r2.stepIndex && ctx_r2.canNavigate && ctx_r2.canNavigateToStep(\u0275$index_9_r2), !ctx_r2.canNavigate || !ctx_r2.canNavigateToStep(\u0275$index_9_r2)));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c2, \u0275$index_9_r2 === ctx_r2.stepIndex, \u0275$index_9_r2 !== ctx_r2.stepIndex));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isStepValid && ctx_r2.isStepValid(\u0275$index_9_r2) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5(step_r4), " ");
  }
}
function SetupBreadcrumbsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275repeaterCreate(3, SetupBreadcrumbsComponent_ng_container_0_For_4_Template, 5, 13, "button", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
    \u0275\u0275element(7, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.steps);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", (ctx_r2.stepIndex + 1) / ctx_r2.steps.length * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.steps.steps_count", \u0275\u0275pureFunction2(3, _c0, ctx_r2.stepIndex + 1, ctx_r2.steps.length)));
  }
}
var SetupBreadcrumbsComponent = class _SetupBreadcrumbsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._setup = inject(SetupService);
    this._router = inject(Router);
    this._unsub$ = new Subject();
    this.projectId = "";
    this.stepIndex = 0;
    this.steps = [];
    this.steps = this._setup.initialSteps;
    this._initSubscribers();
  }
  ngAfterViewInit() {
    if (this.form)
      this._initFormSubscribers();
  }
  ngOnChanges(changes) {
    if (changes["form"] && this.form)
      this._initFormSubscribers();
  }
  ngOnDestroy() {
    this._unsub$.next();
    this._unsub$.complete();
  }
  get canNavigate() {
    return !this.loading && !this.saving;
  }
  canNavigateToStep(target) {
    if (target === this.stepIndex)
      return true;
    if (target === 0)
      return true;
    if (target > this.stepIndex)
      return this.isStepValid?.(this.stepIndex) ?? false;
    return this._areAllPreviousStepsValid(target);
  }
  onStepClick(target) {
    if (!this.canNavigate || target === this.stepIndex)
      return;
    if (!this._areAllPreviousStepsValid(target))
      return;
    this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", target]);
  }
  _areAllPreviousStepsValid(target) {
    if (target === 0)
      return true;
    for (let i = 0; i < target; i++) {
      if (!this.isStepValid?.(i))
        return false;
    }
    return true;
  }
  _initFormSubscribers() {
    this._setSteps(this.form.get("target")?.value);
    this.form.get("target")?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe((target) => this._setSteps(target));
    setTimeout(() => this._cdr.markForCheck(), 0);
  }
  _initSubscribers() {
    this._setup.stepIndex$.pipe(takeUntil(this._unsub$)).subscribe((step) => {
      this.stepIndex = step;
      this._cdr.markForCheck();
    });
    this._setup.projectId$.pipe(takeUntil(this._unsub$)).subscribe((projectId) => {
      this.projectId = projectId;
      this._cdr.markForCheck();
    });
  }
  _setSteps(target) {
    if (!target)
      this.steps = this._setup.initialSteps;
    else if (target === "business")
      this.steps = this._setup.businessSteps;
    else
      this.steps = this._setup.personalSteps;
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function SetupBreadcrumbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupBreadcrumbsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupBreadcrumbsComponent, selectors: [["setup-breadcrumbs"]], inputs: { form: "form", loading: "loading", saving: "saving", isStepValid: "isStepValid" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "w-full", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "flex", "flex-1", "items-center", "gap-1", "overflow-x-auto"], ["type", "button", 1, "flex", "shrink-0", "items-center", "gap-1.5", "whitespace-nowrap", "rounded-full", "px-3", "py-1.5", "text-xs", "font-semibold", "tracking-tight", "transition-colors", 3, "disabled", "ngClass"], [1, "flex", "shrink-0", "items-center", "gap-3", "rounded-full", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-700", "dark:text-stone-300"], [1, "relative", "h-1.5", "w-32", "overflow-hidden", "rounded-full", "bg-stone-200", "dark:bg-gray-800"], [1, "absolute", "left-0", "top-0", "h-full", "bg-stone-900", "transition-all", "duration-300", "dark:bg-white"], ["type", "button", 1, "flex", "shrink-0", "items-center", "gap-1.5", "whitespace-nowrap", "rounded-full", "px-3", "py-1.5", "text-xs", "font-semibold", "tracking-tight", "transition-colors", 3, "click", "disabled", "ngClass"], [1, "grid", "h-5", "w-5", "place-items-center", "rounded-full", "text-[10px]", "font-bold", 3, "ngClass"], [1, "!h-3", "!w-3", "!text-base"]], template: function SetupBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupBreadcrumbsComponent_ng_container_0_Template, 10, 6, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgClass, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupBreadcrumbsComponent, [{
    type: Component,
    args: [{ selector: "setup-breadcrumbs", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="flex w-full flex-wrap items-center justify-between gap-3">\r
        <div class="flex flex-1 items-center gap-1 overflow-x-auto">\r
            @for (step of steps; track step; let i = $index) {\r
                <button\r
                    type="button"\r
                    [disabled]="!canNavigate || !canNavigateToStep(i)"\r
                    (click)="onStepClick(i)"\r
                    [ngClass]="{\r
                        'bg-stone-900 text-white dark:bg-white dark:text-stone-900': i === stepIndex,\r
                        'text-stone-500': i !== stepIndex,\r
                        'hover:bg-stone-100 dark:hover:bg-gray-800': i !== stepIndex && canNavigate && canNavigateToStep(i),\r
                        'opacity-50 cursor-not-allowed': !canNavigate || !canNavigateToStep(i)\r
                    }"\r
                    class="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold tracking-tight transition-colors"\r
                >\r
                    <span\r
                        [ngClass]="{\r
                            'bg-white/20 text-white dark:bg-stone-900/15 dark:text-stone-900': i === stepIndex,\r
                            'bg-stone-100 text-stone-500 dark:bg-gray-800': i !== stepIndex\r
                        }"\r
                        class="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold"\r
                    >\r
                        @if (isStepValid && isStepValid(i)) {\r
                            <mat-icon class="!h-3 !w-3 !text-base">check</mat-icon>\r
                        } @else {\r
                            {{ i + 1 }}\r
                        }\r
                    </span>\r
                    {{ t(step) }}\r
                </button>\r
            }\r
        </div>\r
\r
        <div\r
            class="flex shrink-0 items-center gap-3 rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 dark:border-gray-700 dark:text-stone-300"\r
        >\r
            <div class="relative h-1.5 w-32 overflow-hidden rounded-full bg-stone-200 dark:bg-gray-800">\r
                <div\r
                    class="absolute left-0 top-0 h-full bg-stone-900 transition-all duration-300 dark:bg-white"\r
                    [style.width.%]="((stepIndex + 1) / steps.length) * 100"\r
                ></div>\r
            </div>\r
            <span>{{ t('smartEnrollProjects.setup.steps.steps_count', { current: stepIndex + 1, total: steps.length }) }}</span>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/setup/breadcrumbs/breadcrumbs.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=breadcrumbs.component.css.map */\n"] }]
  }], () => [], { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], isStepValid: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupBreadcrumbsComponent, { className: "SetupBreadcrumbsComponent", filePath: "src/app/modules/smart-enroll/projects/setup/breadcrumbs/breadcrumbs.component.ts", lineNumber: 34 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-sign-up/preview-sign-up.component.ts
function PreviewSignUpComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 16);
    \u0275\u0275text(2, "LOGO");
    \u0275\u0275elementEnd()();
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18)(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.titleStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.create_an_account"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.are_you_registered"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.buttonStyle["background-color"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.sign_in_here"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.titleStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.legal_representative_welcome"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.legal_representative_description"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full flex flex-col space-y-4" : "w-full inline-flex items-start space-x-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["firstName"].label));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["lastName"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["fullName"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_0_Template, 7, 7, "div", 10)(1, PreviewSignUpComponent_ng_container_0_Conditional_9_Conditional_1_Template, 3, 3, "div", 9);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 23);
    \u0275\u0275element(4, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.formGroup.get("fullNameStyle")) == null ? null : tmp_5_0.value) === "separate" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r0.formGroup.get("fullNameStyle")) == null ? null : tmp_6_0.value) === "together" ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smart_enroll.sign_up_form.name_hint_text"));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 28)(2, "div", 27);
    \u0275\u0275text(3, "CC");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_ng_container_4_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const iconCaretDown_r3 = \u0275\u0275reference(24);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full flex flex-col space-y-4" : "w-full inline-flex items-start space-x-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", iconCaretDown_r3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["businessIdNumber"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, PreviewSignUpComponent_ng_container_0_Conditional_10_Conditional_3_Template, 8, 7, "div", 10);
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["businessName"].label));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r0.formGroup.get("businessBasicInfoStyle")) == null ? null : tmp_7_0.value) === "name_number" ? 3 : -1);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["email"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_12_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 28)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PreviewSignUpComponent_ng_container_0_Conditional_12_ng_container_4_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const iconCaretDown_r3 = \u0275\u0275reference(24);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full flex flex-col space-y-4" : "w-full inline-flex items-start space-x-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx_r0.formGroup.get("countryCode")) == null ? null : tmp_7_0.value) || ctx_r0.defaultPhoneCountryCode, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", iconCaretDown_r3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["phone"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["gender"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["dateOfBirth"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["age"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_1_Template, 3, 3, "div", 26)(2, PreviewSignUpComponent_ng_container_0_Conditional_14_Conditional_2_Template, 3, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("dateOfBirth") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("age") ? 2 : -1);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 30)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 26)(9, "div", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26)(12, "div", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["addressLine1"].label));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["addressLine2"].label));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "flex flex-col gap-4" : "flex flex-row gap-2");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["city"].label));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.placeholderColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["state"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["postalCode"].label));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_17_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PreviewSignUpComponent_ng_container_0_Conditional_17_ng_container_3_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const iconCaretDown_r3 = \u0275\u0275reference(24);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r0.previewFields["country"].label));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", iconCaretDown_r3);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.buttonStyle["background-color"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.terms_and_conditions"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smart_enroll.sign_up_form.and"));
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.buttonStyle["background-color"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.sign_up_form.privacy_policies"), " ");
  }
}
function PreviewSignUpComponent_ng_container_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 31);
    \u0275\u0275template(2, PreviewSignUpComponent_ng_container_0_Conditional_18_ng_container_2_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_6_Template, 2, 3, "span", 34)(7, PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_7_Template, 2, 3, "span", 35)(8, PreviewSignUpComponent_ng_container_0_Conditional_18_Conditional_8_Template, 2, 3, "span", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const iconCheck_r4 = \u0275\u0275reference(22);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", iconCheck_r4);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.textStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smart_enroll.sign_up_form.i_accept"));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r0.formGroup.get("showTermsAndConditions")) == null ? null : tmp_8_0.value) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r0.formGroup.get("showPrivacyNotice")) == null ? null : tmp_9_0.value) && ((tmp_9_0 = ctx_r0.formGroup.get("showTermsAndConditions")) == null ? null : tmp_9_0.value) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r0.formGroup.get("showPrivacyNotice")) == null ? null : tmp_10_0.value) ? 8 : -1);
  }
}
function PreviewSignUpComponent_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "path", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r0.buttonStyle["background-color"]);
  }
}
function PreviewSignUpComponent_ng_container_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 42);
    \u0275\u0275element(1, "path", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r0.buttonStyle["background-color"]);
  }
}
function PreviewSignUpComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, PreviewSignUpComponent_ng_container_0_Conditional_4_Template, 1, 1, "img", 6)(5, PreviewSignUpComponent_ng_container_0_Conditional_5_Template, 3, 0, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PreviewSignUpComponent_ng_container_0_Conditional_6_Template, 7, 9)(7, PreviewSignUpComponent_ng_container_0_Conditional_7_Template, 4, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, PreviewSignUpComponent_ng_container_0_Conditional_9_Template, 7, 5)(10, PreviewSignUpComponent_ng_container_0_Conditional_10_Template, 4, 4)(11, PreviewSignUpComponent_ng_container_0_Conditional_11_Template, 3, 3, "div", 9)(12, PreviewSignUpComponent_ng_container_0_Conditional_12_Template, 8, 8, "div", 10)(13, PreviewSignUpComponent_ng_container_0_Conditional_13_Template, 3, 3, "div", 9)(14, PreviewSignUpComponent_ng_container_0_Conditional_14_Template, 3, 2, "div", 11)(15, PreviewSignUpComponent_ng_container_0_Conditional_15_Template, 14, 13, "div", 12)(16, PreviewSignUpComponent_ng_container_0_Conditional_16_Template, 3, 3, "div", 9)(17, PreviewSignUpComponent_ng_container_0_Conditional_17_Template, 4, 4, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, PreviewSignUpComponent_ng_container_0_Conditional_18_Template, 9, 7, "div", 14);
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, PreviewSignUpComponent_ng_container_0_ng_template_21_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, PreviewSignUpComponent_ng_container_0_ng_template_23_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_16_0;
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.backgroundColor || ctx_r0.defaultBranding.backgroundColor);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.branding.logo ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isLegalRepresentativePreview ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.formType === "personal" && ((tmp_7_0 = ctx_r0.formGroup.get("fullName")) == null ? null : tmp_7_0.value) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formType === "business" && ((tmp_8_0 = ctx_r0.formGroup.get("businessBasicInfo")) == null ? null : tmp_8_0.value) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r0.formGroup.get("email")) == null ? null : tmp_9_0.value) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r0.formGroup.get("phone")) == null ? null : tmp_10_0.value) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("gender") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("dateOfBirth") || ctx_r0.hasAdditionalField("age") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showAddress ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("postalCode") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasAdditionalField("country") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = ctx_r0.formGroup.get("showTermsAndConditions")) == null ? null : tmp_16_0.value) || ((tmp_16_0 = ctx_r0.formGroup.get("showPrivacyNotice")) == null ? null : tmp_16_0.value) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.buttonStyle);
    \u0275\u0275property("ngClass", ctx_r0.deviceType === "mobile" ? "w-full h-12 rounded-xl" : "w-full h-14 rounded-2xl");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.continue"), " ");
  }
}
var PreviewSignUpComponent = class _PreviewSignUpComponent {
  constructor() {
    this.formType = "personal";
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultPhoneCountryCode = DEFAULT_PHONE_COUNTRY_CODE;
    this.defaultBranding = this._setup.defaultBranding;
    this.previewFields = {
      addressLine1: { label: "smart_enroll.sign_up_form.address_line_1" },
      addressLine2: { label: "smart_enroll.sign_up_form.address_line_2" },
      age: { label: "smart_enroll.sign_up_form.age" },
      businessIdNumber: { label: "smart_enroll.sign_up_form.business_id_number" },
      businessName: { label: "smart_enroll.sign_up_form.business_name" },
      city: { label: "smart_enroll.sign_up_form.city" },
      country: { label: "smart_enroll.sign_up_form.country" },
      dateOfBirth: { label: "smart_enroll.sign_up_form.date_of_birth" },
      email: { label: "smart_enroll.sign_up_form.email" },
      firstName: { label: "smart_enroll.sign_up_form.first_name" },
      fullName: { label: "smart_enroll.sign_up_form.full_name" },
      gender: { label: "smart_enroll.sign_up_form.gender" },
      lastName: { label: "smart_enroll.sign_up_form.last_name" },
      phone: { label: "smart_enroll.sign_up_form.phone_number" },
      postalCode: { label: "smart_enroll.sign_up_form.postal_code" },
      state: { label: "smart_enroll.sign_up_form.state" }
    };
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"]) {
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
    }
  }
  get isLegalRepresentativePreview() {
    return this.formType === "personal" && this.form?.get("target")?.value === "business";
  }
  get buttonStyle() {
    return {
      "background-color": this.branding.buttonColor || this.defaultBranding.buttonColor,
      color: this.branding.buttonTextColor || this.defaultBranding.buttonTextColor
    };
  }
  get textStyle() {
    return { color: this.branding.textColor || this.defaultBranding.textColor };
  }
  get titleStyle() {
    return { color: this.branding.titleColor || this.defaultBranding.titleColor };
  }
  get placeholderColor() {
    return this.branding.textColor || "#94a3b8";
  }
  get showAddress() {
    if (!this.formGroup)
      return false;
    if (this.formType === "personal") {
      return !!this.formGroup.get("allowAdditionalFields")?.value && this.formGroup.get("additionalFields")?.value?.includes("address") === true;
    }
    return !!this.formGroup.get("address")?.value;
  }
  additionalFields() {
    return this.formGroup?.get("additionalFields")?.value || [];
  }
  hasAdditionalField(name) {
    return !!this.formGroup?.get("allowAdditionalFields")?.value && this.additionalFields().includes(name);
  }
  static {
    this.\u0275fac = function PreviewSignUpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewSignUpComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewSignUpComponent, selectors: [["preview-sign-up"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", formType: "formType", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [["iconCheck", ""], ["iconCaretDown", ""], [4, "transloco"], [1, "m-auto", "w-full", "max-w-128", "space-y-8"], [1, "w-full", "flex", "flex-col", "items-center", "space-y-4"], [1, "flex", "items-center", "justify-center"], ["alt", "Logo", 1, "max-w-16", "max-h-16", "object-contain", 3, "src"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-400"], [1, "w-full", "flex", "flex-col", "items-start", "space-y-4"], [1, "w-full", "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center"], [3, "ngClass"], [1, "w-full", "inline-flex", "items-start", "space-x-2"], [1, "w-full", "flex", "flex-col", "gap-4"], [1, "w-full", "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "justify-between", "items-center"], [1, "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["type", "button", 1, "flex", "items-center", "justify-center", "text-base", "font-medium", 3, "ngClass"], [1, "text-xs", "font-semibold"], [1, "text-3xl", "font-semibold", "leading-10"], [1, "inline-flex", "items-start", "gap-2"], [1, "text-base", "font-medium", "leading-tight"], [1, "text-base", "font-medium", "leading-tight", "underline"], [1, "text-base", "font-medium", "leading-tight", "text-center"], [1, "self-stretch", "p-3", "bg-stone-100", "rounded-2xl", "flex", "items-center", "justify-center", "gap-2"], ["width", "20", "height", "20", "viewBox", "0 0 24 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z", "fill", "#58647D"], [1, "flex-1", "text-sm", "font-medium"], [1, "flex-1", "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center"], [1, "text-base", "font-medium"], [1, "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center", "gap-3", "min-w-[6rem]"], [4, "ngTemplateOutlet"], [1, "h-14", "p-4", "bg-white", "rounded-md", "border", "border-stone-300", "flex", "items-center"], [1, "inline-flex", "items-center", "space-x-2"], [1, "text-base"], [1, "font-semibold"], [1, "font-semibold", "underline", "ml-1", 3, "color"], [1, "font-semibold", "mx-1", 3, "style"], [1, "font-semibold", "underline", 3, "color"], [1, "font-semibold", "underline", "ml-1"], [1, "font-semibold", "mx-1"], [1, "font-semibold", "underline"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.5837 5.99969L7.99706 8.58635L5.41039 5.99969C5.15039 5.73969 4.73039 5.73969 4.47039 5.99969C4.21039 6.25969 4.21039 6.67969 4.47039 6.93969L7.53039 9.99969C7.79039 10.2597 8.21039 10.2597 8.47039 9.99969L11.5304 6.93969C11.7904 6.67969 11.7904 6.25969 11.5304 5.99969C11.2704 5.74635 10.8437 5.73969 10.5837 5.99969Z"]], template: function PreviewSignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewSignUpComponent_ng_container_0_Template, 25, 18, "ng-container", 2);
      }
    }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewSignUpComponent, [{
    type: Component,
    args: [{ selector: "preview-sign-up", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div\r
        class="m-auto w-full max-w-128 space-y-8"\r
        [style.background-color]="branding.backgroundColor || defaultBranding.backgroundColor"\r
    >\r
        <!-- Header -->\r
        <div class="w-full flex flex-col items-center space-y-4">\r
            <div class="flex items-center justify-center">\r
                @if (branding.logo) {\r
                    <img class="max-w-16 max-h-16 object-contain" [src]="branding.logo" alt="Logo" />\r
                } @else {\r
                    <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-stone-100 text-stone-400">\r
                        <span class="text-xs font-semibold">LOGO</span>\r
                    </div>\r
                }\r
            </div>\r
\r
            @if (!isLegalRepresentativePreview) {\r
                <div class="text-3xl font-semibold leading-10" [style]="titleStyle">\r
                    {{ t('smart_enroll.sign_up_form.create_an_account') }}\r
                </div>\r
                <div class="inline-flex items-start gap-2">\r
                    <div class="text-base font-medium leading-tight" [style]="textStyle">\r
                        {{ t('smart_enroll.sign_up_form.are_you_registered') }}\r
                    </div>\r
                    <div class="text-base font-medium leading-tight underline" [style.color]="buttonStyle['background-color']">\r
                        {{ t('smart_enroll.sign_up_form.sign_in_here') }}\r
                    </div>\r
                </div>\r
            } @else {\r
                <div class="text-3xl font-semibold leading-10" [style]="titleStyle">\r
                    {{ t('smart_enroll.sign_up_form.legal_representative_welcome') }}\r
                </div>\r
                <div class="text-base font-medium leading-tight text-center" [style]="textStyle">\r
                    {{ t('smart_enroll.sign_up_form.legal_representative_description') }}\r
                </div>\r
            }\r
        </div>\r
\r
        <!-- Form -->\r
        <div class="w-full flex flex-col items-start space-y-4">\r
            <!-- Personal: Full name (separate / together) -->\r
            @if (formType === 'personal' && formGroup.get('fullName')?.value) {\r
                @if (formGroup.get('fullNameStyle')?.value === 'separate') {\r
                    <div [ngClass]="deviceType === 'mobile' ? 'w-full flex flex-col space-y-4' : 'w-full inline-flex items-start space-x-2'">\r
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                            <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['firstName'].label) }}</div>\r
                        </div>\r
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                            <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['lastName'].label) }}</div>\r
                        </div>\r
                    </div>\r
                }\r
                @if (formGroup.get('fullNameStyle')?.value === 'together') {\r
                    <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                        <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['fullName'].label) }}</div>\r
                    </div>\r
                }\r
\r
                <div class="self-stretch p-3 bg-stone-100 rounded-2xl flex items-center justify-center gap-2">\r
                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z" fill="#58647D"/>\r
                    </svg>\r
                    <div class="flex-1 text-sm font-medium" [style]="textStyle">{{ t('smart_enroll.sign_up_form.name_hint_text') }}</div>\r
                </div>\r
            }\r
\r
            <!-- Business basic info -->\r
            @if (formType === 'business' && formGroup.get('businessBasicInfo')?.value) {\r
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['businessName'].label) }}</div>\r
                </div>\r
                @if (formGroup.get('businessBasicInfoStyle')?.value === 'name_number') {\r
                    <div [ngClass]="deviceType === 'mobile' ? 'w-full flex flex-col space-y-4' : 'w-full inline-flex items-start space-x-2'">\r
                        <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center gap-3 min-w-[6rem]">\r
                            <div class="text-base font-medium" [style]="textStyle">CC</div>\r
                            <ng-container *ngTemplateOutlet="iconCaretDown"></ng-container>\r
                        </div>\r
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['businessIdNumber'].label) }}</div>\r
                        </div>\r
                    </div>\r
                }\r
            }\r
\r
            <!-- Email -->\r
            @if (formGroup.get('email')?.value) {\r
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['email'].label) }}</div>\r
                </div>\r
            }\r
\r
            <!-- Phone -->\r
            @if (formGroup.get('phone')?.value) {\r
                <div [ngClass]="deviceType === 'mobile' ? 'w-full flex flex-col space-y-4' : 'w-full inline-flex items-start space-x-2'">\r
                    <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center gap-3 min-w-[6rem]">\r
                        <div class="text-base font-medium" [style]="textStyle">\r
                            {{ formGroup.get('countryCode')?.value || defaultPhoneCountryCode }}\r
                        </div>\r
                        <ng-container *ngTemplateOutlet="iconCaretDown"></ng-container>\r
                    </div>\r
                    <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                        <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['phone'].label) }}</div>\r
                    </div>\r
                </div>\r
            }\r
\r
            <!-- Gender -->\r
            @if (hasAdditionalField('gender')) {\r
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                    <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['gender'].label) }}</div>\r
                </div>\r
            }\r
\r
            <!-- Date of birth and/or age -->\r
            @if (hasAdditionalField('dateOfBirth') || hasAdditionalField('age')) {\r
                <div class="w-full inline-flex items-start space-x-2">\r
                    @if (hasAdditionalField('dateOfBirth')) {\r
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['dateOfBirth'].label) }}</div>\r
                        </div>\r
                    }\r
                    @if (hasAdditionalField('age')) {\r
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['age'].label) }}</div>\r
                        </div>\r
                    }\r
                </div>\r
            }\r
\r
            <!-- Address -->\r
            @if (showAddress) {\r
                <div class="w-full flex flex-col gap-4">\r
                    <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                        <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['addressLine1'].label) }}</div>\r
                    </div>\r
                    <div class="h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                        <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['addressLine2'].label) }}</div>\r
                    </div>\r
                    <div [ngClass]="deviceType === 'mobile' ? 'flex flex-col gap-4' : 'flex flex-row gap-2'">\r
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['city'].label) }}</div>\r
                        </div>\r
                        <div class="flex-1 h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                            <div class="text-base font-medium" [style.color]="placeholderColor">{{ t(previewFields['state'].label) }}</div>\r
                        </div>\r
                    </div>\r
                </div>\r
            }\r
\r
            <!-- Postal code -->\r
            @if (hasAdditionalField('postalCode')) {\r
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex items-center">\r
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['postalCode'].label) }}</div>\r
                </div>\r
            }\r
\r
            <!-- Country -->\r
            @if (hasAdditionalField('country')) {\r
                <div class="w-full h-14 p-4 bg-white rounded-md border border-stone-300 flex justify-between items-center">\r
                    <div class="text-base font-medium" [style]="textStyle">{{ t(previewFields['country'].label) }}</div>\r
                    <ng-container *ngTemplateOutlet="iconCaretDown"></ng-container>\r
                </div>\r
            }\r
        </div>\r
\r
        <!-- Terms / Privacy -->\r
        @if (formGroup.get('showTermsAndConditions')?.value || formGroup.get('showPrivacyNotice')?.value) {\r
            <div class="w-full flex flex-col items-center justify-center space-y-2">\r
                <div class="inline-flex items-center space-x-2">\r
                    <ng-container *ngTemplateOutlet="iconCheck"></ng-container>\r
                    <div class="text-base">\r
                        <span class="font-semibold" [style]="textStyle">{{ t('smart_enroll.sign_up_form.i_accept') }}</span>\r
                        @if (formGroup.get('showTermsAndConditions')?.value) {\r
                            <span class="font-semibold underline ml-1" [style.color]="buttonStyle['background-color']">\r
                                {{ t('smart_enroll.sign_up_form.terms_and_conditions') }}\r
                            </span>\r
                        }\r
                        @if (formGroup.get('showPrivacyNotice')?.value && formGroup.get('showTermsAndConditions')?.value) {\r
                            <span class="font-semibold mx-1" [style]="textStyle">{{ t('smart_enroll.sign_up_form.and') }}</span>\r
                        }\r
                        @if (formGroup.get('showPrivacyNotice')?.value) {\r
                            <span class="font-semibold underline" [style.color]="buttonStyle['background-color']">\r
                                {{ t('smart_enroll.sign_up_form.privacy_policies') }}\r
                            </span>\r
                        }\r
                    </div>\r
                </div>\r
            </div>\r
        }\r
\r
        <!-- Continue button -->\r
        <button\r
            type="button"\r
            [style]="buttonStyle"\r
            [ngClass]="deviceType === 'mobile' ? 'w-full h-12 rounded-xl' : 'w-full h-14 rounded-2xl'"\r
            class="flex items-center justify-center text-base font-medium"\r
        >\r
            {{ t('smart_enroll.continue') }}\r
        </button>\r
    </div>\r
\r
    <ng-template #iconCheck>\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z"\r
                [attr.fill]="buttonStyle['background-color']"/>\r
        </svg>\r
    </ng-template>\r
\r
    <ng-template #iconCaretDown>\r
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
            <path d="M10.5837 5.99969L7.99706 8.58635L5.41039 5.99969C5.15039 5.73969 4.73039 5.73969 4.47039 5.99969C4.21039 6.25969 4.21039 6.67969 4.47039 6.93969L7.53039 9.99969C7.79039 10.2597 8.21039 10.2597 8.47039 9.99969L11.5304 6.93969C11.7904 6.67969 11.7904 6.25969 11.5304 5.99969C11.2704 5.74635 10.8437 5.73969 10.5837 5.99969Z"\r
                [attr.fill]="buttonStyle['background-color']"/>\r
        </svg>\r
    </ng-template>\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], formType: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewSignUpComponent, { className: "PreviewSignUpComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-sign-up/preview-sign-up.component.ts", lineNumber: 33 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-document-scan/preview-document-scan.component.ts
function PreviewDocumentScanComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275element(7, "img", 4)(8, "img", 5);
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 7)(11, "g", 8)(12, "mask", 9);
    \u0275\u0275element(13, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "path", 11)(15, "path", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(16, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 14);
    \u0275\u0275element(19, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.branding.titleColor || ctx_r1.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.documents.preview.scan_document"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.documents.preview.follow_the_instructions"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cameraClasses() + " relative rounded-3xl overflow-hidden");
    \u0275\u0275advance(11);
    \u0275\u0275classMap((ctx_r1.deviceType === "mobile" ? "w-full" : "w-96") + " p-3 bg-white rounded-2xl border border-stone-300 flex items-start gap-3");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.documents.preview.frame_hint_text"), " ");
  }
}
var PreviewDocumentScanComponent = class _PreviewDocumentScanComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  cameraClasses() {
    return this.deviceType === "mobile" ? "w-full h-48" : "w-96 h-64";
  }
  static {
    this.\u0275fac = function PreviewDocumentScanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewDocumentScanComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewDocumentScanComponent, selectors: [["preview-document-scan"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [1, "text-center", "text-sm", "font-medium"], ["src", "images/ui/placeholders/blurry-street.jpg", "alt", "", 1, "w-full", "h-full", "absolute", "inset-0", "rounded-3xl", "object-cover"], ["src", "images/ui/placeholders/drivers-license.png", "alt", "", 1, "w-64", "h-56", "absolute", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "rounded-xl", "object-contain"], [1, "absolute", "-left-96", "-top-32", "pointer-events-none"], ["width", "812", "height", "517", "viewBox", "0 0 812 517", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.85"], ["id", "path-1-inside-1_7948_63544", "fill", "white"], ["d", "M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z"], ["d", "M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z", "fill", "white"], ["d", "M1365.5 747V748H1366.5V747H1365.5ZM-554.5 747H-555.5V748H-554.5V747ZM-554.5 -225V-226H-555.5V-225H-554.5ZM1365.5 -225H1366.5V-226H1365.5V-225ZM24.5 0V-1V0ZM24.5 517V518V517ZM787.5 517V518V517ZM787.5 0V-1V0ZM1365.5 747V746H-554.5V747V748H1365.5V747ZM-554.5 747H-553.5V-225H-554.5H-555.5V747H-554.5ZM-554.5 -225V-224H1365.5V-225V-226H-554.5V-225ZM1365.5 -225H1364.5V747H1365.5H1366.5V-225H1365.5ZM24.5 0V-1C10.6929 -1 -0.5 10.1929 -0.5 24H0.5H1.5C1.5 11.2975 11.7974 1 24.5 1V0ZM0.5 24H-0.5V493H0.5H1.5V24H0.5ZM0.5 493H-0.5C-0.5 506.807 10.6929 518 24.5 518V517V516C11.7975 516 1.5 505.703 1.5 493H0.5ZM24.5 517V518H787.5V517V516H24.5V517ZM787.5 517V518C801.307 518 812.5 506.807 812.5 493H811.5H810.5C810.5 505.703 800.203 516 787.5 516V517ZM811.5 493H812.5V24H811.5H810.5V493H811.5ZM811.5 24H812.5C812.5 10.1929 801.307 -1 787.5 -1V0V1C800.203 1 810.5 11.2975 810.5 24H811.5ZM787.5 0V-1H24.5V0V1H787.5V0Z", "fill", "#C4C6D0", "mask", "url(#path-1-inside-1_7948_63544)"], [1, "w-full", "h-full", "absolute", "inset-0", "rounded-3xl", "border-4", "border-green-500", "pointer-events-none"], ["width", "20", "height", "20", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z", "fill", "#1E293B"], [1, "flex-1", "text-sm", "font-medium", "leading-tight"]], template: function PreviewDocumentScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewDocumentScanComponent_ng_container_0_Template, 22, 13, "ng-container", 0);
      }
    }, dependencies: [CommonModule, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewDocumentScanComponent, [{
    type: Component,
    args: [{ selector: "preview-document-scan", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="w-full flex flex-col items-center gap-6">\r
        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">\r
            {{ t('smart_enroll.documents.preview.scan_document') }}\r
        </div>\r
        <div class="text-center text-sm font-medium" [style.color]="branding.textColor || defaultBranding.textColor">\r
            {{ t('smart_enroll.documents.preview.follow_the_instructions') }}\r
        </div>\r
\r
        <div [class]="cameraClasses() + ' relative rounded-3xl overflow-hidden'">\r
            <img\r
                src="images/ui/placeholders/blurry-street.jpg"\r
                alt=""\r
                class="w-full h-full absolute inset-0 rounded-3xl object-cover"\r
            />\r
\r
            <img\r
                src="images/ui/placeholders/drivers-license.png"\r
                alt=""\r
                class="w-64 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl object-contain"\r
            />\r
\r
            <div class="absolute -left-96 -top-32 pointer-events-none">\r
                <svg width="812" height="517" viewBox="0 0 812 517" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                    <g opacity="0.85">\r
                        <mask id="path-1-inside-1_7948_63544" fill="white">\r
                            <path d="M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z"/>\r
                        </mask>\r
                        <path\r
                            d="M1365.5 747H-554.5V-225H1365.5V747ZM24.5 0C11.2452 0 0.5 10.7452 0.5 24V493C0.5 506.255 11.2452 517 24.5 517H787.5C800.755 517 811.5 506.255 811.5 493V24C811.5 10.7452 800.755 0 787.5 0H24.5Z"\r
                            fill="white"\r
                        />\r
                        <path\r
                            d="M1365.5 747V748H1366.5V747H1365.5ZM-554.5 747H-555.5V748H-554.5V747ZM-554.5 -225V-226H-555.5V-225H-554.5ZM1365.5 -225H1366.5V-226H1365.5V-225ZM24.5 0V-1V0ZM24.5 517V518V517ZM787.5 517V518V517ZM787.5 0V-1V0ZM1365.5 747V746H-554.5V747V748H1365.5V747ZM-554.5 747H-553.5V-225H-554.5H-555.5V747H-554.5ZM-554.5 -225V-224H1365.5V-225V-226H-554.5V-225ZM1365.5 -225H1364.5V747H1365.5H1366.5V-225H1365.5ZM24.5 0V-1C10.6929 -1 -0.5 10.1929 -0.5 24H0.5H1.5C1.5 11.2975 11.7974 1 24.5 1V0ZM0.5 24H-0.5V493H0.5H1.5V24H0.5ZM0.5 493H-0.5C-0.5 506.807 10.6929 518 24.5 518V517V516C11.7975 516 1.5 505.703 1.5 493H0.5ZM24.5 517V518H787.5V517V516H24.5V517ZM787.5 517V518C801.307 518 812.5 506.807 812.5 493H811.5H810.5C810.5 505.703 800.203 516 787.5 516V517ZM811.5 493H812.5V24H811.5H810.5V493H811.5ZM811.5 24H812.5C812.5 10.1929 801.307 -1 787.5 -1V0V1C800.203 1 810.5 11.2975 810.5 24H811.5ZM787.5 0V-1H24.5V0V1H787.5V0Z"\r
                            fill="#C4C6D0"\r
                            mask="url(#path-1-inside-1_7948_63544)"\r
                        />\r
                    </g>\r
                </svg>\r
            </div>\r
\r
            <div class="w-full h-full absolute inset-0 rounded-3xl border-4 border-green-500 pointer-events-none"></div>\r
        </div>\r
\r
        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-96') + ' p-3 bg-white rounded-2xl border border-stone-300 flex items-start gap-3'">\r
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z" fill="#1E293B"/>\r
            </svg>\r
            <div class="flex-1 text-sm font-medium leading-tight" [style.color]="branding.textColor || defaultBranding.textColor">\r
                {{ t('smart_enroll.documents.preview.frame_hint_text') }}\r
            </div>\r
        </div>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewDocumentScanComponent, { className: "PreviewDocumentScanComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-document-scan/preview-document-scan.component.ts", lineNumber: 24 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-document-upload/preview-document-upload.component.ts
function PreviewDocumentUploadComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function PreviewDocumentUploadComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function PreviewDocumentUploadComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, PreviewDocumentUploadComponent_ng_container_0_Conditional_2_Template, 1, 1, "img", 2)(3, PreviewDocumentUploadComponent_ng_container_0_Conditional_3_Template, 2, 0, ":svg:svg", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 6);
    \u0275\u0275element(10, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275text(14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 10);
    \u0275\u0275element(16, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 10);
    \u0275\u0275element(19, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "div", 15);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 16);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.branding.logo ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.branding.titleColor || ctx_r0.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.upload_document"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r0.deviceType === "mobile" ? "w-full" : "w-80") + " text-center text-sm font-medium");
    \u0275\u0275styleProp("color", ctx_r0.branding.textColor || ctx_r0.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.collect_images"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r0.branding.textColor || ctx_r0.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.drag_and_drop"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.search_file_in_my_device"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("fill", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r0.branding.textColor || ctx_r0.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.allow_formats"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r0.deviceType === "mobile" ? "w-full flex-col gap-3" : "w-full flex-row gap-4") + " flex");
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.skip"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.continue"), " ");
  }
}
var PreviewDocumentUploadComponent = class _PreviewDocumentUploadComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  static {
    this.\u0275fac = function PreviewDocumentUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewDocumentUploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewDocumentUploadComponent, selectors: [["preview-document-upload"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], ["alt", "Logo", 1, "max-w-16", "max-h-16", "object-contain", 3, "src"], ["width", "64", "height", "58", "viewBox", "0 0 64 58", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [1, "w-full", "h-44", "rounded-2xl", "border-2", "border-dashed", "border-stone-300", "bg-stone-50", "flex", "flex-col", "items-center", "justify-center", "gap-2"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.3334 21.7275H18.6667C19.4001 21.7275 20.0001 21.1275 20.0001 20.3942V13.7275H22.1201C23.3067 13.7275 23.9067 12.2875 23.0667 11.4475L16.9467 5.3275C16.4267 4.8075 15.5867 4.8075 15.0667 5.3275L8.94675 11.4475C8.10675 12.2875 8.69341 13.7275 9.88008 13.7275H12.0001V20.3942C12.0001 21.1275 12.6001 21.7275 13.3334 21.7275ZM8.00008 24.3942H24.0001C24.7334 24.3942 25.3334 24.9942 25.3334 25.7275C25.3334 26.4608 24.7334 27.0608 24.0001 27.0608H8.00008C7.26675 27.0608 6.66675 26.4608 6.66675 25.7275C6.66675 24.9942 7.26675 24.3942 8.00008 24.3942Z", "fill", "#A0A9C0"], [1, "text-center", "text-base", "font-semibold"], ["type", "button", 1, "w-full", "h-12", "rounded-2xl", "flex", "items-center", "justify-center", "gap-2", "text-sm", "font-medium"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19.41 7.41L14.58 2.58C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.41ZM14.8 15H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V15H9.21C8.76 15 8.54 14.46 8.86 14.15L11.66 11.36C11.86 11.17 12.17 11.17 12.37 11.36L15.16 14.15C15.46 14.46 15.24 15 14.8 15ZM14 9C13.45 9 13 8.55 13 8V3.5L18.5 9H14Z"], [1, "w-full", "flex", "justify-center", "items-center", "gap-3"], ["d", "M14.59 2.59C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.59 2.59ZM15 18H9C8.45 18 8 17.55 8 17C8 16.45 8.45 16 9 16H15C15.55 16 16 16.45 16 17C16 17.55 15.55 18 15 18ZM15 14H9C8.45 14 8 13.55 8 13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14ZM13 8V3.5L18.5 9H14C13.45 9 13 8.55 13 8Z", "fill", "#1E293B"], [1, "text-center", "text-xs", "font-medium"], [1, "flex-1", "h-12", "rounded-2xl", "border", "flex", "items-center", "justify-center", "text-sm", "font-medium"], [1, "flex-1", "h-12", "rounded-2xl", "flex", "items-center", "justify-center", "text-sm", "font-medium"], ["d", "M63.8545 2.89986C63.8545 2.89986 56.0607 -0.105614 49.6043 6.77961C44.4703 2.88972 37.9733 0.572266 31.028 0.572266C24.2109 0.572266 17.4968 2.93281 12.1353 7.13566C6.85901 11.2739 3.04339 17.1885 1.39215 23.6822C-1.00721 33.1105 0.948861 44.7637 8.67028 51.2688C16.3142 57.7092 26.5227 58.9041 34.8792 54.6075C40.0971 51.9251 43.5735 47.7666 45.9577 42.4513C49.0887 35.471 52.5855 27.429 55.7152 20.4487C58.2873 25.8527 58.3762 32.0069 57.2584 37.2842C56.142 42.5602 53.232 47.4422 49.1191 50.9419C48.5069 51.4626 47.854 51.9707 47.4565 52.6676C46.4619 54.406 48.3812 56.4587 50.0756 55.1371C50.8364 54.5441 51.6138 53.8688 52.339 53.1199C58.0726 47.574 61.7523 39.7917 61.7523 31.1947C61.7523 25.7818 60.2967 20.5133 57.8199 16.1052C61.21 8.65867 63.857 2.8986 63.857 2.8986M18.4075 42.5172C13.3306 42.8162 8.31463 40.021 5.94702 35.5331C4.87626 33.5045 4.33516 31.1959 4.44058 28.9025C4.687 23.5429 6.81963 18.3542 10.2123 14.2135C13.5097 10.1893 17.9921 7.16987 22.9598 5.60631C23.9518 5.29461 24.9629 5.03867 25.9854 4.84481C27.6518 4.52804 29.3475 4.37092 31.0445 4.37092C37.5313 4.37092 43.3779 6.60476 47.4412 9.88138C46.674 11.0091 45.9043 12.1355 45.1333 13.2619C43.3157 15.9177 41.4917 18.5696 39.6601 21.2153C37.5161 24.3107 35.3631 27.3998 33.1847 30.4712C30.196 34.6829 27.6239 39.6067 22.5775 41.6365C21.2705 42.1624 19.8123 42.4348 18.4087 42.5172H18.4075Z", "fill", "#010333"]], template: function PreviewDocumentUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewDocumentUploadComponent_ng_container_0_Template, 27, 33, "ng-container", 0);
      }
    }, dependencies: [CommonModule, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewDocumentUploadComponent, [{
    type: Component,
    args: [{ selector: "preview-document-upload", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="w-full flex flex-col items-center gap-6">\r
        @if (branding.logo) {\r
            <img class="max-w-16 max-h-16 object-contain" [src]="branding.logo" alt="Logo" />\r
        } @else {\r
            <svg width="64" height="58" viewBox="0 0 64 58" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M63.8545 2.89986C63.8545 2.89986 56.0607 -0.105614 49.6043 6.77961C44.4703 2.88972 37.9733 0.572266 31.028 0.572266C24.2109 0.572266 17.4968 2.93281 12.1353 7.13566C6.85901 11.2739 3.04339 17.1885 1.39215 23.6822C-1.00721 33.1105 0.948861 44.7637 8.67028 51.2688C16.3142 57.7092 26.5227 58.9041 34.8792 54.6075C40.0971 51.9251 43.5735 47.7666 45.9577 42.4513C49.0887 35.471 52.5855 27.429 55.7152 20.4487C58.2873 25.8527 58.3762 32.0069 57.2584 37.2842C56.142 42.5602 53.232 47.4422 49.1191 50.9419C48.5069 51.4626 47.854 51.9707 47.4565 52.6676C46.4619 54.406 48.3812 56.4587 50.0756 55.1371C50.8364 54.5441 51.6138 53.8688 52.339 53.1199C58.0726 47.574 61.7523 39.7917 61.7523 31.1947C61.7523 25.7818 60.2967 20.5133 57.8199 16.1052C61.21 8.65867 63.857 2.8986 63.857 2.8986M18.4075 42.5172C13.3306 42.8162 8.31463 40.021 5.94702 35.5331C4.87626 33.5045 4.33516 31.1959 4.44058 28.9025C4.687 23.5429 6.81963 18.3542 10.2123 14.2135C13.5097 10.1893 17.9921 7.16987 22.9598 5.60631C23.9518 5.29461 24.9629 5.03867 25.9854 4.84481C27.6518 4.52804 29.3475 4.37092 31.0445 4.37092C37.5313 4.37092 43.3779 6.60476 47.4412 9.88138C46.674 11.0091 45.9043 12.1355 45.1333 13.2619C43.3157 15.9177 41.4917 18.5696 39.6601 21.2153C37.5161 24.3107 35.3631 27.3998 33.1847 30.4712C30.196 34.6829 27.6239 39.6067 22.5775 41.6365C21.2705 42.1624 19.8123 42.4348 18.4087 42.5172H18.4075Z" fill="#010333"/>\r
            </svg>\r
        }\r
\r
        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">\r
            {{ t('smart_enroll.documents.preview.upload_document') }}\r
        </div>\r
\r
        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-80') + ' text-center text-sm font-medium'" [style.color]="branding.textColor || defaultBranding.textColor">\r
            {{ t('smart_enroll.documents.preview.collect_images') }}\r
        </div>\r
\r
        <div class="w-full h-44 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 flex flex-col items-center justify-center gap-2">\r
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M13.3334 21.7275H18.6667C19.4001 21.7275 20.0001 21.1275 20.0001 20.3942V13.7275H22.1201C23.3067 13.7275 23.9067 12.2875 23.0667 11.4475L16.9467 5.3275C16.4267 4.8075 15.5867 4.8075 15.0667 5.3275L8.94675 11.4475C8.10675 12.2875 8.69341 13.7275 9.88008 13.7275H12.0001V20.3942C12.0001 21.1275 12.6001 21.7275 13.3334 21.7275ZM8.00008 24.3942H24.0001C24.7334 24.3942 25.3334 24.9942 25.3334 25.7275C25.3334 26.4608 24.7334 27.0608 24.0001 27.0608H8.00008C7.26675 27.0608 6.66675 26.4608 6.66675 25.7275C6.66675 24.9942 7.26675 24.3942 8.00008 24.3942Z" fill="#A0A9C0"/>\r
            </svg>\r
            <div class="text-center text-base font-semibold" [style.color]="branding.textColor || defaultBranding.textColor">\r
                {{ t('smart_enroll.documents.preview.drag_and_drop') }}\r
            </div>\r
        </div>\r
\r
        <button\r
            type="button"\r
            class="w-full h-12 rounded-2xl flex items-center justify-center gap-2 text-sm font-medium"\r
            [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"\r
            [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"\r
        >\r
            {{ t('smart_enroll.documents.preview.search_file_in_my_device') }}\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M19.41 7.41L14.58 2.58C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.41ZM14.8 15H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V15H9.21C8.76 15 8.54 14.46 8.86 14.15L11.66 11.36C11.86 11.17 12.17 11.17 12.37 11.36L15.16 14.15C15.46 14.46 15.24 15 14.8 15ZM14 9C13.45 9 13 8.55 13 8V3.5L18.5 9H14Z" [attr.fill]="branding.buttonTextColor || defaultBranding.buttonTextColor"/>\r
            </svg>\r
        </button>\r
\r
        <div class="w-full flex justify-center items-center gap-3">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M14.59 2.59C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.59 2.59ZM15 18H9C8.45 18 8 17.55 8 17C8 16.45 8.45 16 9 16H15C15.55 16 16 16.45 16 17C16 17.55 15.55 18 15 18ZM15 14H9C8.45 14 8 13.55 8 13C8 12.45 8.45 12 9 12H15C15.55 12 16 12.45 16 13C16 13.55 15.55 14 15 14ZM13 8V3.5L18.5 9H14C13.45 9 13 8.55 13 8Z" fill="#1E293B"/>\r
            </svg>\r
            <div class="text-center text-xs font-medium" [style.color]="branding.textColor || defaultBranding.textColor">\r
                {{ t('smart_enroll.documents.preview.allow_formats') }}\r
            </div>\r
        </div>\r
\r
        <div [class]="(deviceType === 'mobile' ? 'w-full flex-col gap-3' : 'w-full flex-row gap-4') + ' flex'">\r
            <div class="flex-1 h-12 rounded-2xl border flex items-center justify-center text-sm font-medium" [style.border-color]="branding.buttonColor || defaultBranding.buttonColor" [style.color]="branding.buttonColor || defaultBranding.buttonColor">\r
                {{ t('smart_enroll.documents.preview.skip') }}\r
            </div>\r
            <div class="flex-1 h-12 rounded-2xl flex items-center justify-center text-sm font-medium" [style.background-color]="branding.buttonColor || defaultBranding.buttonColor" [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor">\r
                {{ t('smart_enroll.documents.preview.continue') }}\r
            </div>\r
        </div>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewDocumentUploadComponent, { className: "PreviewDocumentUploadComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-document-upload/preview-document-upload.component.ts", lineNumber: 24 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-document-result/preview-document-result.component.ts
function PreviewDocumentResultComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function PreviewDocumentResultComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 5);
    \u0275\u0275text(1, "badge");
    \u0275\u0275elementEnd();
  }
}
function PreviewDocumentResultComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275template(4, PreviewDocumentResultComponent_ng_container_0_Conditional_4_Template, 1, 1, "img", 4)(5, PreviewDocumentResultComponent_ng_container_0_Conditional_5_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "h2", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 14);
    \u0275\u0275text(19, "Laura");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24, "Walteros");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 12)(26, "span", 13);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 14);
    \u0275\u0275text(29, "15 ABR 2004");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 12)(31, "span", 13);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 14);
    \u0275\u0275text(34, "1234567890");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "span", 13);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 14);
    \u0275\u0275text(39, "16 AGO 2024");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 9)(41, "h2", 10);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 11)(44, "div", 12)(45, "span", 13);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 14);
    \u0275\u0275text(48, "HH:MM del DD/MM/AA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 12)(50, "span", 13);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 14);
    \u0275\u0275text(53, "Web");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 15)(55, "span", 13);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 14);
    \u0275\u0275text(58, "Samsung");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 16)(60, "button", 17);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 18);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.branding.logo ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.information_extracted"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.please_confirm_information"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.extracted_information"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.first_name"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.last_name"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.date_of_birth"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.id_number"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.date_of_issue"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.process_information"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.created_at"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.platform"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smart_enroll.documents.preview.device"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.go_back"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.branding.buttonColor || ctx_r0.defaultBranding.buttonColor)("color", ctx_r0.branding.buttonTextColor || ctx_r0.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smart_enroll.documents.preview.continue"), " ");
  }
}
var PreviewDocumentResultComponent = class _PreviewDocumentResultComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  static {
    this.\u0275fac = function PreviewDocumentResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewDocumentResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewDocumentResultComponent, selectors: [["preview-document-result"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "max-w-[440px]", "bg-white", "rounded-3xl", "shadow-xl", "border", "border-stone-100", "overflow-hidden", "mx-auto"], [1, "flex", "flex-col", "items-center", "pt-10", "pb-6", "px-8"], [1, "w-16", "h-16", "rounded-2xl", "overflow-hidden", "mb-4", "flex", "items-center", "justify-center"], ["alt", "Logo", 1, "w-full", "h-full", "object-contain", 3, "src"], [1, "!h-8", "!w-8", "text-white"], [1, "text-2xl", "font-bold", "text-stone-900", "text-center", "mb-2"], [1, "text-sm", "text-stone-500", "text-center", "max-w-sm"], [1, "px-8", "pb-6", "space-y-6"], [1, "space-y-3"], [1, "text-xs", "font-semibold", "text-stone-900", "uppercase", "tracking-wide"], [1, "space-y-1"], [1, "flex", "items-center", "justify-between", "py-2", "border-b", "border-stone-100"], [1, "text-sm", "text-stone-500", "font-medium"], [1, "text-sm", "text-stone-900", "font-semibold"], [1, "flex", "items-center", "justify-between", "py-2"], [1, "px-8", "pb-8", "flex", "gap-3"], [1, "flex-1", "h-12", "rounded-xl", "border-2", "border-stone-200", "text-stone-700", "font-medium", "text-sm"], [1, "flex-1", "h-12", "rounded-xl", "font-medium", "text-sm", "shadow-md"]], template: function PreviewDocumentResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewDocumentResultComponent_ng_container_0_Template, 64, 21, "ng-container", 0);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewDocumentResultComponent, [{
    type: Component,
    args: [{ selector: "preview-document-result", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="w-full max-w-[440px] bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden mx-auto">\r
        <div class="flex flex-col items-center pt-10 pb-6 px-8">\r
            <div class="w-16 h-16 rounded-2xl overflow-hidden mb-4 flex items-center justify-center" [style.background-color]="branding.buttonColor || defaultBranding.buttonColor">\r
                @if (branding.logo) {\r
                    <img class="w-full h-full object-contain" [src]="branding.logo" alt="Logo" />\r
                } @else {\r
                    <mat-icon class="!h-8 !w-8 text-white">badge</mat-icon>\r
                }\r
            </div>\r
            <h1 class="text-2xl font-bold text-stone-900 text-center mb-2">\r
                {{ t('smart_enroll.documents.preview.information_extracted') }}\r
            </h1>\r
            <p class="text-sm text-stone-500 text-center max-w-sm">\r
                {{ t('smart_enroll.documents.preview.please_confirm_information') }}\r
            </p>\r
        </div>\r
\r
        <div class="px-8 pb-6 space-y-6">\r
            <div class="space-y-3">\r
                <h2 class="text-xs font-semibold text-stone-900 uppercase tracking-wide">\r
                    {{ t('smart_enroll.documents.preview.extracted_information') }}\r
                </h2>\r
                <div class="space-y-1">\r
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.first_name') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">Laura</span>\r
                    </div>\r
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.last_name') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">Walteros</span>\r
                    </div>\r
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.date_of_birth') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">15 ABR 2004</span>\r
                    </div>\r
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.id_number') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">1234567890</span>\r
                    </div>\r
                    <div class="flex items-center justify-between py-2">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.date_of_issue') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">16 AGO 2024</span>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="space-y-3">\r
                <h2 class="text-xs font-semibold text-stone-900 uppercase tracking-wide">\r
                    {{ t('smart_enroll.documents.preview.process_information') }}\r
                </h2>\r
                <div class="space-y-1">\r
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.created_at') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">HH:MM del DD/MM/AA</span>\r
                    </div>\r
                    <div class="flex items-center justify-between py-2 border-b border-stone-100">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.platform') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">Web</span>\r
                    </div>\r
                    <div class="flex items-center justify-between py-2">\r
                        <span class="text-sm text-stone-500 font-medium">{{ t('smart_enroll.documents.preview.device') }}</span>\r
                        <span class="text-sm text-stone-900 font-semibold">Samsung</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="px-8 pb-8 flex gap-3">\r
            <button class="flex-1 h-12 rounded-xl border-2 border-stone-200 text-stone-700 font-medium text-sm">\r
                {{ t('smart_enroll.documents.preview.go_back') }}\r
            </button>\r
            <button\r
                class="flex-1 h-12 rounded-xl font-medium text-sm shadow-md"\r
                [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"\r
                [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"\r
            >\r
                {{ t('smart_enroll.documents.preview.continue') }}\r
            </button>\r
        </div>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewDocumentResultComponent, { className: "PreviewDocumentResultComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-document-result/preview-document-result.component.ts", lineNumber: 25 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-liveness/preview-liveness.component.ts
function PreviewLivenessComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "img", 4);
    \u0275\u0275elementStart(8, "button", 5)(9, "mat-icon", 6);
    \u0275\u0275text(10, "cameraswitch");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 7);
    \u0275\u0275element(13, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.branding.titleColor || ctx_r1.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.biometric_registration"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r1.deviceType === "mobile" ? "w-full" : "w-80") + " text-center text-sm font-medium");
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.biometric_registration_description"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cameraSizeClass() + " relative rounded-full overflow-hidden border-8 border-emerald-500 flex items-center justify-center");
    \u0275\u0275styleProp("background-image", "url(images/ui/placeholders/blurry-street.jpg)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor)("color", ctx_r1.branding.buttonTextColor || ctx_r1.defaultBranding.buttonTextColor);
    \u0275\u0275attribute("aria-label", t_r1("smart_enroll.liveness.preview.flip"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap((ctx_r1.deviceType === "mobile" ? "w-full" : "w-96") + " p-4 bg-white rounded-2xl border border-stone-300 flex items-start gap-3");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.instructions"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor)("color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.skip"), " ");
  }
}
var PreviewLivenessComponent = class _PreviewLivenessComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  cameraSizeClass() {
    return this.deviceType === "mobile" ? "w-64 h-64" : "w-80 h-80";
  }
  static {
    this.\u0275fac = function PreviewLivenessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewLivenessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewLivenessComponent, selectors: [["preview-liveness"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [2, "background-size", "cover", "background-position", "center"], ["src", "images/ui/placeholders/face.png", "alt", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover"], ["type", "button", 1, "absolute", "bottom-3", "left-1/2", "-translate-x-1/2", "h-12", "w-12", "rounded-full", "flex", "items-center", "justify-center"], [1, "!h-5", "!w-5"], ["width", "20", "height", "20", "viewBox", "0 0 32 32", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z", "fill", "#1E293B"], [1, "flex-1", "text-sm", "font-medium"], [1, "w-full", "max-w-md", "h-12", "rounded-2xl", "border", "flex", "items-center", "justify-center", "text-sm", "font-medium"]], template: function PreviewLivenessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewLivenessComponent_ng_container_0_Template, 18, 27, "ng-container", 0);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewLivenessComponent, [{
    type: Component,
    args: [{ selector: "preview-liveness", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="w-full flex flex-col items-center gap-6">\r
        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">\r
            {{ t('smart_enroll.liveness.preview.biometric_registration') }}\r
        </div>\r
        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-80') + ' text-center text-sm font-medium'" [style.color]="branding.textColor || defaultBranding.textColor">\r
            {{ t('smart_enroll.liveness.preview.biometric_registration_description') }}\r
        </div>\r
\r
        <div [class]="cameraSizeClass() + ' relative rounded-full overflow-hidden border-8 border-emerald-500 flex items-center justify-center'" [style.background-image]="'url(images/ui/placeholders/blurry-street.jpg)'" style="background-size: cover; background-position: center;">\r
            <img\r
                src="images/ui/placeholders/face.png"\r
                alt=""\r
                class="absolute inset-0 h-full w-full object-cover"\r
            />\r
            <button\r
                type="button"\r
                class="absolute bottom-3 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full flex items-center justify-center"\r
                [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"\r
                [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"\r
                [attr.aria-label]="t('smart_enroll.liveness.preview.flip')"\r
            >\r
                <mat-icon class="!h-5 !w-5">cameraswitch</mat-icon>\r
            </button>\r
        </div>\r
\r
        <div [class]="(deviceType === 'mobile' ? 'w-full' : 'w-96') + ' p-4 bg-white rounded-2xl border border-stone-300 flex items-start gap-3'">\r
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M16.0002 8.65398L26.0402 26.0007H5.96016L16.0002 8.65398ZM16.0002 3.33398L1.3335 28.6673H30.6668L16.0002 3.33398ZM17.3335 22.0007H14.6668V24.6673H17.3335V22.0007ZM17.3335 14.0007H14.6668V19.334H17.3335V14.0007Z" fill="#1E293B"/>\r
            </svg>\r
            <div class="flex-1 text-sm font-medium" [style.color]="branding.textColor || defaultBranding.textColor">\r
                {{ t('smart_enroll.liveness.preview.instructions') }}\r
            </div>\r
        </div>\r
\r
        <div class="w-full max-w-md h-12 rounded-2xl border flex items-center justify-center text-sm font-medium" [style.border-color]="branding.buttonColor || defaultBranding.buttonColor" [style.color]="branding.buttonColor || defaultBranding.buttonColor">\r
            {{ t('smart_enroll.liveness.preview.skip') }}\r
        </div>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewLivenessComponent, { className: "PreviewLivenessComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-liveness/preview-liveness.component.ts", lineNumber: 25 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/preview-liveness-result/preview-liveness-result.component.ts
function PreviewLivenessResultComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "mat-icon", 6);
    \u0275\u0275text(7, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-icon", 11);
    \u0275\u0275text(15, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "span", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-icon", 11);
    \u0275\u0275text(20, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 12);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-image", "url(images/ui/placeholders/blurry-street.jpg)");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r1.branding.titleColor || ctx_r1.defaultBranding.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.successful_outcome"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.face_registered"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.branding.textColor || ctx_r1.defaultBranding.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.id_registered"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r1.branding.buttonColor || ctx_r1.defaultBranding.buttonColor)("color", ctx_r1.branding.buttonTextColor || ctx_r1.defaultBranding.buttonTextColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smart_enroll.liveness.preview.continue_to_platform"), " ");
  }
}
var PreviewLivenessResultComponent = class _PreviewLivenessResultComponent {
  constructor() {
    this.deviceType = "desktop";
    this._setup = inject(SetupService);
    this.defaultBranding = this._setup.defaultBranding;
  }
  ngOnInit() {
    this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  ngOnChanges(changes) {
    if (changes["branding"])
      this.branding = __spreadValues(__spreadValues({}, this.defaultBranding), this.branding || {});
  }
  static {
    this.\u0275fac = function PreviewLivenessResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviewLivenessResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewLivenessResultComponent, selectors: [["preview-liveness-result"]], inputs: { branding: "branding", form: "form", formGroup: "formGroup", deviceType: "deviceType" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "w-full", "flex", "flex-col", "items-center", "gap-6"], [1, "relative"], [1, "relative", "w-36", "h-36", "rounded-full", "overflow-hidden", "flex", "items-center", "justify-center", 2, "background-size", "cover", "background-position", "center"], ["src", "images/ui/placeholders/face.png", "alt", "", 1, "absolute", "inset-0", "h-full", "w-full", "object-cover"], [1, "absolute", "bg-white", "rounded-full", "bottom-0", "right-0", "h-12", "w-12", "flex", "items-center", "justify-center", "shadow-md", "z-10"], [1, "!h-9", "!w-9", "text-emerald-500"], [1, "text-center", "text-3xl", "font-semibold", "leading-10"], [1, "w-full", "max-w-md", "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "justify-between", "pb-3", "border-b", "border-stone-300"], [1, "text-base", "font-semibold"], [1, "!h-5", "!w-5", "text-emerald-500"], ["type", "button", 1, "w-full", "max-w-md", "h-14", "rounded-2xl", "flex", "items-center", "justify-center", "text-base", "font-medium"]], template: function PreviewLivenessResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PreviewLivenessResultComponent_ng_container_0_Template, 23, 16, "ng-container", 0);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewLivenessResultComponent, [{
    type: Component,
    args: [{ selector: "preview-liveness-result", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="w-full flex flex-col items-center gap-6">\r
        <div class="relative">\r
            <div class="relative w-36 h-36 rounded-full overflow-hidden flex items-center justify-center" [style.background-image]="'url(images/ui/placeholders/blurry-street.jpg)'" style="background-size: cover; background-position: center;">\r
                <img\r
                    src="images/ui/placeholders/face.png"\r
                    alt=""\r
                    class="absolute inset-0 h-full w-full object-cover"\r
                />\r
            </div>\r
            <div class="absolute bg-white rounded-full bottom-0 right-0 h-12 w-12 flex items-center justify-center shadow-md z-10">\r
                <mat-icon class="!h-9 !w-9 text-emerald-500">check_circle</mat-icon>\r
            </div>\r
        </div>\r
\r
        <div class="text-center text-3xl font-semibold leading-10" [style.color]="branding.titleColor || defaultBranding.titleColor">\r
            {{ t('smart_enroll.liveness.preview.successful_outcome') }}\r
        </div>\r
\r
        <div class="w-full max-w-md flex flex-col gap-3">\r
            <div class="flex items-center justify-between pb-3 border-b border-stone-300">\r
                <span class="text-base font-semibold" [style.color]="branding.textColor || defaultBranding.textColor">\r
                    {{ t('smart_enroll.liveness.preview.face_registered') }}\r
                </span>\r
                <mat-icon class="!h-5 !w-5 text-emerald-500">check_circle</mat-icon>\r
            </div>\r
            <div class="flex items-center justify-between pb-3 border-b border-stone-300">\r
                <span class="text-base font-semibold" [style.color]="branding.textColor || defaultBranding.textColor">\r
                    {{ t('smart_enroll.liveness.preview.id_registered') }}\r
                </span>\r
                <mat-icon class="!h-5 !w-5 text-emerald-500">check_circle</mat-icon>\r
            </div>\r
        </div>\r
\r
        <button\r
            type="button"\r
            class="w-full max-w-md h-14 rounded-2xl flex items-center justify-center text-base font-medium"\r
            [style.background-color]="branding.buttonColor || defaultBranding.buttonColor"\r
            [style.color]="branding.buttonTextColor || defaultBranding.buttonTextColor"\r
        >\r
            {{ t('smart_enroll.liveness.preview.continue_to_platform') }}\r
        </button>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], deviceType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewLivenessResultComponent, { className: "PreviewLivenessResultComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/preview-liveness-result/preview-liveness-result.component.ts", lineNumber: 25 });
})();

// src/app/modules/smart-enroll/projects/setup/preview/smart-enroll-preview.component.ts
function SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 16);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previousView());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextView());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smart_enroll.preview.previous"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r4("smart_enroll.preview.next"));
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-sign-up", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("formType", ctx_r1.formType)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Conditional_0_Template, 1, 5, "preview-sign-up", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-document-scan", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Conditional_0_Template, 1, 4, "preview-document-scan", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-document-upload", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Conditional_0_Template, 1, 4, "preview-document-upload", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-document-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Conditional_0_Template, 1, 4, "preview-document-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-liveness", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Conditional_0_Template, 1, 4, "preview-liveness", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preview-liveness-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("branding", ctx_r1.effectiveBranding)("form", ctx_r1.form)("formGroup", ctx_r1.subFormGroup)("deviceType", ctx_r1.deviceType);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Conditional_0_Template, 1, 4, "preview-liveness-result", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.subFormGroup ? 0 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, SmartEnrollPreviewComponent_ng_container_0_div_22_ng_container_1_Template, 7, 2, "ng-container", 15);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275template(3, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_3_Template, 1, 1)(4, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_4_Template, 1, 1)(5, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_5_Template, 1, 1)(6, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_6_Template, 1, 1)(7, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_7_Template, 1, 1)(8, SmartEnrollPreviewComponent_ng_container_0_div_22_Case_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.effectiveBranding.backgroundColor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.view.length > 1);
    \u0275\u0275advance();
    \u0275\u0275classMap("flex flex-1 flex-col items-center justify-start py-8 px-4 " + ctx_r1.contentDeviceClasses());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.currentView) === "signup" ? 3 : tmp_6_0 === "document-scan" ? 4 : tmp_6_0 === "document-upload" ? 5 : tmp_6_0 === "document-result" ? 6 : tmp_6_0 === "liveness" ? 7 : tmp_6_0 === "liveness-result" ? 8 : -1);
  }
}
function SmartEnrollPreviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon", 5);
    \u0275\u0275text(6, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeviceType("desktop"));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 10);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeviceType("tablet"));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 10);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeviceType("mobile"));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function SmartEnrollPreviewComponent_ng_container_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFullscreen());
    });
    \u0275\u0275elementStart(20, "mat-icon", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, SmartEnrollPreviewComponent_ng_container_0_div_22_Template, 9, 6, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("rounded-2xl", !ctx_r1.isFullscreen)("h-full", !ctx_r1.isFullscreen)("fixed", ctx_r1.isFullscreen)("inset-0", ctx_r1.isFullscreen)("z-50", ctx_r1.isFullscreen)("rounded-none", ctx_r1.isFullscreen);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "desktop")("text-stone-900", ctx_r1.deviceType === "desktop")("dark:bg-gray-800", ctx_r1.deviceType === "desktop")("dark:text-white", ctx_r1.deviceType === "desktop")("text-stone-500", ctx_r1.deviceType !== "desktop");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.desktop"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "tablet")("text-stone-900", ctx_r1.deviceType === "tablet")("dark:bg-gray-800", ctx_r1.deviceType === "tablet")("dark:text-white", ctx_r1.deviceType === "tablet")("text-stone-500", ctx_r1.deviceType !== "tablet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.tablet"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.deviceType === "mobile")("text-stone-900", ctx_r1.deviceType === "mobile")("dark:bg-gray-800", ctx_r1.deviceType === "mobile")("dark:text-white", ctx_r1.deviceType === "mobile")("text-stone-500", ctx_r1.deviceType !== "mobile");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smart_enroll.preview.mobile"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smart_enroll.preview.fullscreen"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isFullscreen ? "close_fullscreen" : "open_in_full", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.view.length);
  }
}
var SmartEnrollPreviewComponent = class _SmartEnrollPreviewComponent {
  constructor() {
    this.branding = null;
    this.view = ["signup"];
    this._setup = inject(SetupService);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.currentView = "signup";
    this.currentViewIndex = 0;
    this.deviceType = "tablet";
    this.isFullscreen = false;
    this.stepIndex = 0;
  }
  ngOnInit() {
    this.currentView = this.view[0] ?? "signup";
    this._setup.stepIndex$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((step) => {
      this.stepIndex = step;
      this.currentViewIndex = 0;
      this.currentView = this.view[0] ?? this.currentView;
      this._cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const change = changes["view"];
    if (!change)
      return;
    const prev = change.previousValue || [];
    const curr = change.currentValue || [];
    const sameContent = prev.length === curr.length && prev.every((v, i) => v === curr[i]);
    if (sameContent)
      return;
    this.currentViewIndex = 0;
    this.currentView = curr[0] ?? "signup";
    this._cdr.markForCheck();
  }
  /** Effective branding object: caller value layered over service defaults. */
  get effectiveBranding() {
    return __spreadValues(__spreadValues({}, this._setup.defaultBranding), this.branding || {});
  }
  /** FormGroup for the sub-view bound to the current step. */
  get subFormGroup() {
    switch (this.currentView) {
      case "signup":
        return this.stepIndex === 3 ? this.form?.get("projectFlow.representatives.information") : this.form?.get("projectFlow.signUpForm");
      case "document-scan":
      case "document-upload":
      case "document-result":
        return this.stepIndex === 3 ? this.form?.get("projectFlow.representatives.documents") : this.form?.get("projectFlow.documents");
      case "liveness":
      case "liveness-result":
        return this.stepIndex === 3 ? this.form?.get("projectFlow.representatives.liveness") : this.form?.get("projectFlow.liveness");
      default:
        return null;
    }
  }
  /** `personal` for representative sub-flow, otherwise the project's target. */
  get formType() {
    if (this.stepIndex === 3)
      return "personal";
    const t = this.form?.get("target")?.value;
    return t === "business" ? "business" : "personal";
  }
  nextView() {
    if (!this.view.length)
      return;
    this.currentViewIndex = (this.currentViewIndex + 1) % this.view.length;
    this.currentView = this.view[this.currentViewIndex];
    this._cdr.markForCheck();
  }
  previousView() {
    if (!this.view.length)
      return;
    this.currentViewIndex = (this.currentViewIndex - 1 + this.view.length) % this.view.length;
    this.currentView = this.view[this.currentViewIndex];
    this._cdr.markForCheck();
  }
  setDeviceType(device) {
    this.deviceType = device;
    this._cdr.markForCheck();
  }
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    document.body.style.overflow = this.isFullscreen ? "hidden" : "";
    this._cdr.markForCheck();
  }
  /** Tailwind classes for the inner content's max-width based on the device toggle. */
  contentDeviceClasses() {
    switch (this.deviceType) {
      case "mobile":
        return "max-w-80 w-full mx-auto";
      case "tablet":
        return "max-w-160 w-full mx-auto";
      case "desktop":
      default:
        return "w-full";
    }
  }
  static {
    this.\u0275fac = function SmartEnrollPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartEnrollPreviewComponent, selectors: [["smart-enroll-preview"]], inputs: { branding: "branding", form: "form", view: "view" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "w-full", "flex-col", "overflow-hidden", "border", "border-stone-200", "bg-white", "dark:border-gray-700", "dark:bg-gray-900"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "p-4", "md:p-5"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "bg-stone-100", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], [1, "!h-5", "!w-5"], [1, "flex", "flex-col"], [1, "m-0", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "m-0", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-center", "gap-1"], ["type", "button", 1, "rounded-full", "px-3", "py-1.5", "text-xs", "font-medium", "transition-colors", 3, "click"], ["type", "button", 1, "ml-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-stone-100", "transition-colors", "hover:bg-stone-200", "dark:bg-gray-800", "dark:hover:bg-gray-700", 3, "click"], [1, "!h-4", "!w-4", "text-stone-700", "dark:text-stone-200"], ["class", "relative flex flex-1 flex-col items-stretch overflow-auto border-t border-stone-200 dark:border-gray-700", 3, "background-color", 4, "ngIf"], [1, "relative", "flex", "flex-1", "flex-col", "items-stretch", "overflow-auto", "border-t", "border-stone-200", "dark:border-gray-700"], [4, "ngIf"], ["type", "button", 1, "absolute", "left-0", "top-0", "bottom-0", "z-10", "flex", "items-center", "justify-center", "px-2", "text-stone-700", "opacity-40", "transition-opacity", "hover:bg-stone-900/5", "hover:opacity-100", 3, "click"], ["type", "button", 1, "absolute", "right-0", "top-0", "bottom-0", "z-10", "flex", "items-center", "justify-center", "px-2", "text-stone-700", "opacity-40", "transition-opacity", "hover:bg-stone-900/5", "hover:opacity-100", 3, "click"], [3, "branding", "form", "formGroup", "formType", "deviceType"], [3, "branding", "form", "formGroup", "deviceType"]], template: function SmartEnrollPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SmartEnrollPreviewComponent_ng_container_0_Template, 23, 50, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoDirective,
      PreviewSignUpComponent,
      PreviewDocumentScanComponent,
      PreviewDocumentUploadComponent,
      PreviewDocumentResultComponent,
      PreviewLivenessComponent,
      PreviewLivenessResultComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollPreviewComponent, [{
    type: Component,
    args: [{ selector: "smart-enroll-preview", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule,
      PreviewSignUpComponent,
      PreviewDocumentScanComponent,
      PreviewDocumentUploadComponent,
      PreviewDocumentResultComponent,
      PreviewLivenessComponent,
      PreviewLivenessResultComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div\r
        class="flex w-full flex-col overflow-hidden border border-stone-200 bg-white dark:border-gray-700 dark:bg-gray-900"\r
        [class.rounded-2xl]="!isFullscreen"\r
        [class.h-full]="!isFullscreen"\r
        [class.fixed]="isFullscreen"\r
        [class.inset-0]="isFullscreen"\r
        [class.z-50]="isFullscreen"\r
        [class.rounded-none]="isFullscreen"\r
    >\r
        <!-- Header toolbar -->\r
        <div class="flex flex-wrap items-center justify-between gap-3 p-4 md:p-5">\r
            <div class="flex items-center gap-3">\r
                <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-200">\r
                    <mat-icon class="!h-5 !w-5">visibility</mat-icon>\r
                </div>\r
                <div class="flex flex-col">\r
                    <p class="m-0 text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ t('smart_enroll.preview.title') }}\r
                    </p>\r
                    <p class="m-0 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smart_enroll.preview.subtitle') }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            <div class="flex items-center gap-1">\r
                <button\r
                    type="button"\r
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"\r
                    [class.bg-stone-100]="deviceType === 'desktop'"\r
                    [class.text-stone-900]="deviceType === 'desktop'"\r
                    [class.dark:bg-gray-800]="deviceType === 'desktop'"\r
                    [class.dark:text-white]="deviceType === 'desktop'"\r
                    [class.text-stone-500]="deviceType !== 'desktop'"\r
                    (click)="setDeviceType('desktop')"\r
                >\r
                    {{ t('smart_enroll.preview.desktop') }}\r
                </button>\r
                <button\r
                    type="button"\r
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"\r
                    [class.bg-stone-100]="deviceType === 'tablet'"\r
                    [class.text-stone-900]="deviceType === 'tablet'"\r
                    [class.dark:bg-gray-800]="deviceType === 'tablet'"\r
                    [class.dark:text-white]="deviceType === 'tablet'"\r
                    [class.text-stone-500]="deviceType !== 'tablet'"\r
                    (click)="setDeviceType('tablet')"\r
                >\r
                    {{ t('smart_enroll.preview.tablet') }}\r
                </button>\r
                <button\r
                    type="button"\r
                    class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"\r
                    [class.bg-stone-100]="deviceType === 'mobile'"\r
                    [class.text-stone-900]="deviceType === 'mobile'"\r
                    [class.dark:bg-gray-800]="deviceType === 'mobile'"\r
                    [class.dark:text-white]="deviceType === 'mobile'"\r
                    [class.text-stone-500]="deviceType !== 'mobile'"\r
                    (click)="setDeviceType('mobile')"\r
                >\r
                    {{ t('smart_enroll.preview.mobile') }}\r
                </button>\r
                <button\r
                    type="button"\r
                    class="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 transition-colors hover:bg-stone-200 dark:bg-gray-800 dark:hover:bg-gray-700"\r
                    (click)="toggleFullscreen()"\r
                    [attr.aria-label]="t('smart_enroll.preview.fullscreen')"\r
                >\r
                    <mat-icon class="!h-4 !w-4 text-stone-700 dark:text-stone-200">\r
                        {{ isFullscreen ? 'close_fullscreen' : 'open_in_full' }}\r
                    </mat-icon>\r
                </button>\r
            </div>\r
        </div>\r
\r
        <!-- Preview canvas -->\r
        <div\r
            class="relative flex flex-1 flex-col items-stretch overflow-auto border-t border-stone-200 dark:border-gray-700"\r
            *ngIf="view.length"\r
            [style.background-color]="effectiveBranding.backgroundColor"\r
        >\r
            <!-- Side chevrons -->\r
            <ng-container *ngIf="view.length > 1">\r
                <button\r
                    type="button"\r
                    class="absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center px-2 text-stone-700 opacity-40 transition-opacity hover:bg-stone-900/5 hover:opacity-100"\r
                    (click)="previousView()"\r
                    [attr.aria-label]="t('smart_enroll.preview.previous')"\r
                >\r
                    <mat-icon>arrow_back</mat-icon>\r
                </button>\r
                <button\r
                    type="button"\r
                    class="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center px-2 text-stone-700 opacity-40 transition-opacity hover:bg-stone-900/5 hover:opacity-100"\r
                    (click)="nextView()"\r
                    [attr.aria-label]="t('smart_enroll.preview.next')"\r
                >\r
                    <mat-icon>arrow_forward</mat-icon>\r
                </button>\r
            </ng-container>\r
\r
            <div [class]="'flex flex-1 flex-col items-center justify-start py-8 px-4 ' + contentDeviceClasses()">\r
                @switch (currentView) {\r
                    @case ('signup') {\r
                        @if (subFormGroup) {\r
                            <preview-sign-up\r
                                [branding]="effectiveBranding"\r
                                [form]="form"\r
                                [formGroup]="subFormGroup"\r
                                [formType]="formType"\r
                                [deviceType]="deviceType"\r
                            ></preview-sign-up>\r
                        }\r
                    }\r
                    @case ('document-scan') {\r
                        @if (subFormGroup) {\r
                            <preview-document-scan\r
                                [branding]="effectiveBranding"\r
                                [form]="form"\r
                                [formGroup]="subFormGroup"\r
                                [deviceType]="deviceType"\r
                            ></preview-document-scan>\r
                        }\r
                    }\r
                    @case ('document-upload') {\r
                        @if (subFormGroup) {\r
                            <preview-document-upload\r
                                [branding]="effectiveBranding"\r
                                [form]="form"\r
                                [formGroup]="subFormGroup"\r
                                [deviceType]="deviceType"\r
                            ></preview-document-upload>\r
                        }\r
                    }\r
                    @case ('document-result') {\r
                        @if (subFormGroup) {\r
                            <preview-document-result\r
                                [branding]="effectiveBranding"\r
                                [form]="form"\r
                                [formGroup]="subFormGroup"\r
                                [deviceType]="deviceType"\r
                            ></preview-document-result>\r
                        }\r
                    }\r
                    @case ('liveness') {\r
                        @if (subFormGroup) {\r
                            <preview-liveness\r
                                [branding]="effectiveBranding"\r
                                [form]="form"\r
                                [formGroup]="subFormGroup"\r
                                [deviceType]="deviceType"\r
                            ></preview-liveness>\r
                        }\r
                    }\r
                    @case ('liveness-result') {\r
                        @if (subFormGroup) {\r
                            <preview-liveness-result\r
                                [branding]="effectiveBranding"\r
                                [form]="form"\r
                                [formGroup]="subFormGroup"\r
                                [deviceType]="deviceType"\r
                            ></preview-liveness-result>\r
                        }\r
                    }\r
                }\r
            </div>\r
        </div>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { branding: [{
    type: Input
  }], form: [{
    type: Input
  }], view: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartEnrollPreviewComponent, { className: "SmartEnrollPreviewComponent", filePath: "src/app/modules/smart-enroll/projects/setup/preview/smart-enroll-preview.component.ts", lineNumber: 58 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.ts
var _c02 = ["localApiDialog"];
var _c12 = ["checkDetailsDialog"];
var _c22 = (a0) => ({ number: a0 });
var _c3 = (a0, a1) => ({ countries: a0, documents: a1 });
var _c4 = (a0) => ({ attempts: a0 });
var _c5 = (a0, a1) => ({ methods: a0, attempts: a1 });
var _c6 = (a0) => ({ count: a0 });
var _c7 = () => ({ number: 1 });
var _c8 = () => ["skip", "optional", "mandatory"];
var _c9 = (a0) => ({ country: a0 });
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.country;
var _forTrack2 = ($index, $item) => $item._id;
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 21)(1, "span", 22)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("value", value_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2(value_r1 === "mandatory" ? "smartEnrollProjects.setup.documents.required" : "smartEnrollProjects.setup.documents." + value_r1), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.requirementHelp." + value_r1));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 19);
    \u0275\u0275repeaterCreate(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_14_For_2_Template, 6, 3, "mat-button-toggle", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("hideSingleSelectionIndicator", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c8));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 23)(2, "mat-icon");
    \u0275\u0275text(3, "domain_verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "mat-slide-toggle", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.business.toggle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.businessToggleHelp"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8)(1, "span", 10);
    \u0275\u0275text(2, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "section", 18)(4, "header", 12)(5, "div")(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_14_Template, 3, 2, "mat-button-toggle-group", 19)(15, SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Conditional_15_Template, 10, 2, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.stepFormGroup);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction0(6, _c7)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBusinessVerification ? t_r2("smartEnrollProjects.setup.documents.business.title") : t_r2("smartEnrollProjects.setup.documents.journey.requirementTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBusinessVerification ? t_r2("smartEnrollProjects.setup.documents.business.subtitle") : t_r2("smartEnrollProjects.setup.documents.journey.requirementSubtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.requirement." + ctx_r2.requirementValue), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isBusinessVerification ? 14 : 15);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon");
    \u0275\u0275text(2, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.enableToConfigure"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.atLeastOne"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.duplicateCountries"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.allMustBeValid"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.errors.emptyCountry"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_4_Template, 2, 1, "span")(5, SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_5_Template, 2, 1, "span")(6, SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_6_Template, 2, 1, "span")(7, SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("atLeastOneDocumentVerificationTypeRequired") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("duplicateCountriesNotAllowed") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("allDocumentVerificationTypesMustBeValid") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.includes("emptyCountryValuesNotAllowed") ? 7 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "document-verification-type-list", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r2.form)("documentTypes", ctx_r2.documentTypesFormArray)("target", ctx_r2.target);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_1_Template, 8, 4, "div", 25)(2, SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Conditional_2_Template, 1, 3, "document-verification-type-list", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesErrorKeys.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentTypesFormArray ? 2 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon");
    \u0275\u0275text(2, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.enableToConfigure"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 36);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_For_8_Template_button_click_0_listener() {
      const method_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleVerificationMethod(method_r5.value));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_For_8_Conditional_5_Template, 2, 0, "mat-icon", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("method-option--selected", ctx_r2.isVerificationMethodSelected(method_r5.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(method_r5.labelKey));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isVerificationMethodSelected(method_r5.value) ? 5 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.method.required"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 29)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275repeaterCreate(7, SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_For_8_Template, 6, 5, "button", 33, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_Conditional_9_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const methodsCtrl_r6 = \u0275\u0275readContextLet(29);
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.method.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.method.help"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.verificationMethods);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((methodsCtrl_r6 == null ? null : methodsCtrl_r6.dirty) && (methodsCtrl_r6 == null ? null : methodsCtrl_r6.errors == null ? null : methodsCtrl_r6.errors["required"]) ? 9 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("value", n_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r7 === 1 ? t_r2("smartEnrollProjects.setup.documents.attempts.one") : t_r2("smartEnrollProjects.setup.documents.attempts.many", \u0275\u0275pureFunction1(2, _c6, n_r7)), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Conditional_1_Template, 10, 3, "div", 27);
    \u0275\u0275elementStart(2, "div", 28)(3, "div", 29)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 30)(9, "mat-label");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 31);
    \u0275\u0275repeaterCreate(12, SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_For_13_Template, 2, 4, "mat-option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isBusinessVerification ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.attempts.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.attempts.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.attempts.limit"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.attemptOptions);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon");
    \u0275\u0275text(2, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.enableToConfigure"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.requiresVerification"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 52)(1, "mat-checkbox", 53);
    \u0275\u0275listener("change", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template_mat_checkbox_change_1_listener() {
      const check_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r2.toggleCriminalEndpoint(check_r9.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 54)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template_button_click_7_listener($event) {
      const check_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r2.openCheckDetails($event, check_r9));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const check_r9 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(7).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("check-card--selected", ctx_r2.isEndpointSelected(check_r9.value));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEndpointSelected(check_r9.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2(check_r9.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(check_r9.descriptionKey));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", t_r2("smartEnrollProjects.setup.documents.screening.aboutTooltip"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2(check_r9.sourceKey), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275repeaterCreate(1, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_9_For_2_Template, 9, 7, "label", 49, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r10.checks);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "mat-icon");
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.noCountryChecks"));
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 44)(1, "header", 47)(2, "div")(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_9_Template, 3, 0, "div", 48)(10, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Conditional_10_Template, 5, 1, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.countryChecks"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r10.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.countryDescription", \u0275\u0275pureFunction1(4, _c9, section_r10.country)));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r10.checks.length ? 9 : 10);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 52)(1, "mat-checkbox", 53);
    \u0275\u0275listener("change", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_22_Template_mat_checkbox_change_1_listener() {
      const check_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.toggleCriminalEndpoint(check_r12.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 54)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_22_Template_button_click_7_listener($event) {
      const check_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.openCheckDetails($event, check_r12));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const check_r12 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("check-card--selected", ctx_r2.isEndpointSelected(check_r12.value));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isEndpointSelected(check_r12.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2(check_r12.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(check_r12.descriptionKey));
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", t_r2("smartEnrollProjects.setup.documents.screening.aboutTooltip"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2(check_r12.sourceKey), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div")(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_10_Template, 11, 6, "section", 44, _forTrack1);
    \u0275\u0275elementStart(11, "section", 45)(12, "span", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "header", 47)(15, "div")(16, "h5");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 48);
    \u0275\u0275repeaterCreate(21, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_For_22_Template, 9, 7, "label", 49, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.catalogEyebrow"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.catalogTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.catalogDescription"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.countryCheckSections);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.globalChecks"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.internationalTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.internationalDescription"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.internationalChecks);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_0_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(1, "div", 38)(2, "label", 39);
    \u0275\u0275element(3, "mat-checkbox", 40);
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "label", 39);
    \u0275\u0275element(12, "mat-checkbox", 41);
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span")(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Conditional_20_Template, 23, 6, "div", 42);
  }
  if (rf & 2) {
    let tmp_13_0;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["screeningRequiresVerification"]) ? 0 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.informationVerification"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.informationVerificationDescription"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.criminalHistory"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.criminalHistoryDescription"));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_13_0 = ctx_r2.formGroup.get("criminalHistoryVerification")) == null ? null : tmp_13_0.value) ? 20 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 20)(2, "div", 23)(3, "mat-icon");
    \u0275\u0275text(4, "manage_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "mat-slide-toggle", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Conditional_11_Template, 21, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.screening.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_9_0 = ctx_r2.formGroup.get("screening")) == null ? null : tmp_9_0.value) ? 11 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6)(3, "mat-icon");
    \u0275\u0275text(4, "badge");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ol", 7);
    \u0275\u0275template(11, SetupDocumentsComponent_ng_container_0_div_1_Conditional_11_Template, 16, 7, "li", 8);
    \u0275\u0275elementContainerStart(12, 9);
    \u0275\u0275elementStart(13, "li", 8)(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "section", 11)(17, "header", 12)(18, "div")(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, SetupDocumentsComponent_ng_container_0_div_1_Conditional_27_Template, 5, 1, "div", 15)(28, SetupDocumentsComponent_ng_container_0_div_1_Conditional_28_Template, 3, 2, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(29);
    \u0275\u0275elementStart(30, "li", 8)(31, "span", 10);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "section", 11)(34, "header", 12)(35, "div")(36, "span", 13);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h3");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "span", 14);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, SetupDocumentsComponent_ng_container_0_div_1_Conditional_44_Template, 5, 1, "div", 15)(45, SetupDocumentsComponent_ng_container_0_div_1_Conditional_45_Template, 14, 4, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "li", 8)(47, "span", 10);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "section", 11)(50, "header", 12)(51, "div")(52, "span", 13);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "h3");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "span", 14);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, SetupDocumentsComponent_ng_container_0_div_1_Conditional_60_Template, 5, 1, "div", 15)(61, SetupDocumentsComponent_ng_container_0_div_1_Conditional_61_Template, 12, 3, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_29_0;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showRequirementStage && ctx_r2.stepFormGroup ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.formGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.stageNumber(2));
    \u0275\u0275advance();
    \u0275\u0275classProp("documents-panel--error", !ctx_r2.isNotRequired && ctx_r2.documentTypesErrorKeys.length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction1(29, _c22, ctx_r2.stageNumber(2))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.types.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.documentSummary", \u0275\u0275pureFunction2(31, _c3, ctx_r2.configuredCountriesCount, ctx_r2.selectedDocumentsCount)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isNotRequired ? 27 : 28);
    \u0275\u0275advance(2);
    const methodsCtrl_r13 = \u0275\u0275storeLet(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.get("verificationMethods"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.stageNumber(3));
    \u0275\u0275advance();
    \u0275\u0275classProp("documents-panel--error", !ctx_r2.isNotRequired && !ctx_r2.isBusinessVerification && (methodsCtrl_r13 == null ? null : methodsCtrl_r13.dirty) && (methodsCtrl_r13 == null ? null : methodsCtrl_r13.errors == null ? null : methodsCtrl_r13.errors["required"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction1(34, _c22, ctx_r2.stageNumber(3))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.collectionTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.collectionHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBusinessVerification ? t_r2("smartEnrollProjects.setup.documents.journey.attemptSummary", \u0275\u0275pureFunction1(36, _c4, ctx_r2.attemptLimit)) : t_r2("smartEnrollProjects.setup.documents.journey.collectionSummary", \u0275\u0275pureFunction2(38, _c5, ctx_r2.verificationMethodsValue.length, ctx_r2.attemptLimit)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isNotRequired ? 44 : 45);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.stageNumber(4));
    \u0275\u0275advance();
    \u0275\u0275classProp("documents-panel--error", !ctx_r2.isNotRequired && (ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["screeningRequiresVerification"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.journey.stage", \u0275\u0275pureFunction1(41, _c22, ctx_r2.stageNumber(4))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.screeningTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.journey.screeningHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.formGroup == null ? null : (tmp_29_0 = ctx_r2.formGroup.get("screening")) == null ? null : tmp_29_0.value) ? t_r2("smartEnrollProjects.setup.documents.journey.screeningSummary", \u0275\u0275pureFunction1(43, _c6, ctx_r2.screeningChecksCount)) : t_r2("smartEnrollProjects.setup.documents.journey.screeningOff"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isNotRequired ? 60 : 61);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 61)(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 62)(11, "p", 63);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 64)(14, "a", 65);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 66);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.selectedCheck.sourceKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.selectedCheck.titleKey));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r2(ctx_r2.selectedCheck.aboutKey));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.docsUrl(ctx_r2.selectedCheck), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.readDocs"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r2.postmanUrl(ctx_r2.selectedCheck), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.screening.tryInPostman"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_ng_template_2_Conditional_0_Template, 18, 7, "div", 56);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.selectedCheck ? 0 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "mat-progress-spinner", 72);
    \u0275\u0275elementStart(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.localApi.loading"));
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.localApi.empty"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_For_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r14.description);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_For_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "mat-icon", 86);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.localApi.compatible"));
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "mat-icon", 81);
    \u0275\u0275text(4, " public ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 83);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_For_11_Conditional_9_Template, 2, 1, "p", 84)(10, SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_For_11_Conditional_10_Template, 5, 1, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r14 = ctx.$implicit;
    \u0275\u0275property("ngClass", feature_r14.highlight ? "border-blue-300 bg-blue-50 dark:border-blue-800" : "border-stone-200 dark:border-gray-700");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", feature_r14.highlight ? "text-blue-600" : "text-stone-500");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r14.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", feature_r14.highlight ? "bg-blue-600 text-white" : "bg-stone-200 text-stone-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r14.country, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r14.description ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r14.highlight ? 10 : -1);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75)(4, "mat-icon", 76);
    \u0275\u0275text(5, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_Conditional_8_Template, 2, 1, "p", 73);
    \u0275\u0275elementStart(9, "div", 77);
    \u0275\u0275repeaterCreate(10, SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_For_11_Template, 11, 7, "div", 78, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.localApi.description"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.setup.documents.localApi.highlightNote"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.localApiFeatures.length ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.localApiFeatures);
  }
}
function SetupDocumentsComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 67)(2, "h2", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 61)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 62);
    \u0275\u0275template(8, SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_8_Template, 4, 1, "div", 68)(9, SetupDocumentsComponent_ng_container_0_ng_template_4_Conditional_9_Template, 12, 3, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 70)(11, "button", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.localApi.title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.loadingFeatures ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.setup.documents.localApi.close"), " ");
  }
}
function SetupDocumentsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupDocumentsComponent_ng_container_0_div_1_Template, 62, 45, "div", 3)(2, SetupDocumentsComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, SetupDocumentsComponent_ng_container_0_ng_template_4_Template, 13, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFormReady);
  }
}
var SetupDocumentsComponent = class _SetupDocumentsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "document";
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._dialog = inject(MatDialog);
    this._confirm = inject(FuseConfirmationService);
    this._setup = inject(SetupService);
    this._transloco = inject(TranslocoService);
    this.internationalChecks = [
      this._checkOption("world_api_interpol", "interpol"),
      this._checkOption("world_api_fbi", "fbi"),
      this._checkOption("world_api_dea", "dea"),
      this._checkOption("world_api_europol", "europol"),
      this._checkOption("world_api_ofac", "ofac"),
      this._checkOption("world_api_onu", "un")
    ];
    this.colombiaSources = [
      this._checkOption("colombia_api_inpec", "colombia.inpec"),
      this._checkOption("colombia_api_identity_lookup_procuraduria", "colombia.procuraduria"),
      this._checkOption("colombia_api_police_rnmc", "colombia.rnmc"),
      this._checkOption("colombia_special_api_police_identity_lookup", "colombia.police")
    ];
    this._legacyColombiaSources = ["colombia_api_inpec", "colombia_api_identity_lookup_procuraduria"];
    this.attemptOptions = [1, 2, 3, 4, 5];
    this.verificationMethods = [
      { value: "upload", labelKey: "smartEnrollProjects.setup.documents.method.upload", icon: "file_upload" },
      { value: "scan", labelKey: "smartEnrollProjects.setup.documents.method.scan", icon: "photo_camera" }
    ];
    this.localApiFeatures = [];
    this.loadingFeatures = false;
    this.selectedCheck = null;
    this._previousDocumentStepValue = null;
  }
  ngOnInit() {
    this.documentTypesFormArray?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._cdr.markForCheck();
    });
    if (!this.isFormReady)
      return;
    this._initDocumentStepSubscription();
  }
  get countryCheckSections() {
    const countries = this.documentTypesFormArray?.controls.map((control) => String(control.get("country")?.value || "").trim()).filter(Boolean) || [];
    return buildCountryCheckSections(countries, { colombia: this.colombiaSources });
  }
  get documentTypesFormArray() {
    return this.formGroup?.get("documentTypes") || null;
  }
  get stepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get target() {
    return this.stepFormControlName === "legalRepresentative" ? "personal" : this.form?.get("target")?.value || "personal";
  }
  get isNotRequired() {
    if (this.stepFormControlName === "businessVerification") {
      return !this.stepFormGroup?.get("businessVerification")?.value;
    }
    if (this.stepFormControlName === "legalRepresentative") {
      return this.stepFormGroup?.get("legalRepresentative")?.value === "skip";
    }
    return this.stepFormGroup?.get("document")?.value === "skip";
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.formGroup && !!this.stepFormGroup && !!this.documentTypesFormArray;
  }
  get showRequirementStage() {
    return this.stepFormControlName !== "legalRepresentative";
  }
  get isBusinessVerification() {
    return this.stepFormControlName === "businessVerification";
  }
  get requirementValue() {
    if (this.isBusinessVerification) {
      return this.stepFormGroup?.get("businessVerification")?.value ? "mandatory" : "skip";
    }
    return this.stepFormGroup?.get(this.stepFormControlName)?.value || "skip";
  }
  get configuredCountriesCount() {
    return this.documentTypesFormArray?.controls.filter((control) => !!control.get("country")?.value).length || 0;
  }
  get selectedDocumentsCount() {
    return this.documentTypesFormArray?.controls.reduce((total, documentControl) => {
      const configurations = documentControl.get("configurations");
      if (!configurations)
        return total;
      return total + configurations.controls.reduce((configurationTotal, configuration) => {
        const templates = configuration.get("documentTemplates");
        return configurationTotal + (templates?.controls.filter((template) => !!template.get("promptTemplate")?.value).length || 0);
      }, 0);
    }, 0) || 0;
  }
  get attemptLimit() {
    return Number(this.formGroup?.get("attemptLimit")?.value || 1);
  }
  get screeningChecksCount() {
    return ["informationVerification", "criminalHistoryVerification"].filter((key) => !!this.formGroup?.get(key)?.value).length;
  }
  get verificationMethodsValue() {
    return this.formGroup?.get("verificationMethods")?.value || [];
  }
  get criminalEndpointsValue() {
    return this.formGroup?.get("criminalHistoryVerificationEndpoints")?.value || [];
  }
  /** Validator key names currently attached to the `documentTypes` FormArray. */
  get documentTypesErrorKeys() {
    const errs = this.documentTypesFormArray?.errors;
    if (!errs)
      return [];
    return Object.keys(errs).filter((k) => errs[k] === true);
  }
  stageNumber(defaultStage) {
    return this.showRequirementStage ? defaultStage : defaultStage - 1;
  }
  isVerificationMethodSelected(method) {
    return this.verificationMethodsValue.includes(method);
  }
  toggleVerificationMethod(method) {
    const ctrl = this.formGroup?.get("verificationMethods");
    if (!ctrl)
      return;
    const current = this.verificationMethodsValue;
    const next = current.includes(method) ? current.filter((m) => m !== method) : [...current, method];
    ctrl.setValue(next);
    ctrl.markAsDirty();
    ctrl.markAsTouched();
    this._cdr.markForCheck();
  }
  isEndpointSelected(endpoint) {
    const current = this.criminalEndpointsValue;
    const colombiaCodes = this.colombiaSources.map((source) => source.value);
    if (!colombiaCodes.includes(endpoint))
      return current.includes(endpoint);
    return isCountryCheckSelected(current, endpoint, colombiaCodes, this._legacyColombiaSources);
  }
  toggleCriminalEndpoint(endpoint) {
    const colombiaCodes = this.colombiaSources.map((source) => source.value);
    if (colombiaCodes.includes(endpoint)) {
      this._toggleColombiaSource(endpoint, colombiaCodes);
      return;
    }
    const ctrl = this.formGroup?.get("criminalHistoryVerificationEndpoints");
    if (!ctrl)
      return;
    const current = this.criminalEndpointsValue;
    const next = current.includes(endpoint) ? current.filter((code) => code !== endpoint) : [...current, endpoint];
    ctrl.setValue(next);
    ctrl.markAsDirty();
    this._cdr.markForCheck();
  }
  /**
   * A saved `local_api` with no Colombia codes displays as INPEC and Procuraduría.
   * The first edit stores the explicit codes and drops `local_api`.
   */
  _toggleColombiaSource(endpoint, colombiaCodes) {
    const ctrl = this.formGroup?.get("criminalHistoryVerificationEndpoints");
    if (!ctrl)
      return;
    const current = this.criminalEndpointsValue;
    ctrl.setValue(toggleCountryCheck(current, endpoint, colombiaCodes, this._legacyColombiaSources));
    ctrl.markAsDirty();
    this._cdr.markForCheck();
  }
  openCheckDetails(event, check) {
    event.preventDefault();
    event.stopPropagation();
    this.selectedCheck = check;
    if (!this.checkDetailsDialog)
      return;
    this._dialog.open(this.checkDetailsDialog, { width: "560px", maxHeight: "90vh", autoFocus: false });
  }
  docsUrl(check) {
    return criminalCheckDocsUrl(check.docs, this._transloco.getActiveLang());
  }
  postmanUrl(check) {
    return `/postman?code=${encodeURIComponent(check.value)}`;
  }
  _checkOption(value, key) {
    const baseKey = `smartEnrollProjects.setup.documents.screening.checks.${key}`;
    return {
      value,
      titleKey: `${baseKey}.title`,
      descriptionKey: `${baseKey}.description`,
      sourceKey: `${baseKey}.source`,
      aboutKey: `${baseKey}.about`,
      docs: criminalCheckDocs[value]
    };
  }
  openLocalApiModal(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.localApiDialog)
      return;
    this._fetchBackgroundCheckFeatures();
    this._dialog.open(this.localApiDialog, { width: "640px", maxHeight: "90vh", autoFocus: false });
  }
  _initDocumentStepSubscription() {
    if (this.stepFormControlName !== "document")
      return;
    const documentControl = this.stepFormGroup?.get("document");
    if (!documentControl)
      return;
    this._previousDocumentStepValue = documentControl.value;
    documentControl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value) => {
      if (value === "skip" && this._previousDocumentStepValue !== "skip") {
        this._confirmSkipDocumentVerification(documentControl);
        return;
      }
      this._previousDocumentStepValue = value;
    });
  }
  _confirmSkipDocumentVerification(documentControl) {
    const t = (key) => this._transloco.translate(key) ?? key;
    const ref = this._confirm.open({
      title: t("smartEnrollProjects.setup.documents.confirm_skip_title"),
      message: t("smartEnrollProjects.setup.documents.confirm_skip_message"),
      actions: {
        confirm: {
          show: true,
          label: t("smartEnrollProjects.setup.documents.confirm_skip_yes"),
          color: "warn"
        },
        cancel: { show: true, label: t("smartEnrollProjects.setup.documents.confirm_skip_back") }
      }
    });
    ref.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        this._previousDocumentStepValue = "skip";
      } else {
        documentControl?.setValue(this._previousDocumentStepValue, { emitEvent: false });
      }
      this._cdr.markForCheck();
    });
  }
  _fetchBackgroundCheckFeatures() {
    const cacheKey = "backgroundCheckEndpoints";
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        this.localApiFeatures = JSON.parse(cached);
        this._processLocalApiFeatures();
        this._cdr.markForCheck();
        return;
      }
    } catch {
    }
    this.loadingFeatures = true;
    this._cdr.markForCheck();
    this._setup.getAppFeatures({ where_baseCategory: "background_check" }).subscribe({
      next: (response) => {
        this.localApiFeatures = response?.data || [];
        try {
          localStorage.setItem(cacheKey, JSON.stringify(this.localApiFeatures));
        } catch {
        }
        this._processLocalApiFeatures();
        this.loadingFeatures = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loadingFeatures = false;
        this._cdr.markForCheck();
      }
    });
  }
  _processLocalApiFeatures() {
    const selected = this.documentTypesFormArray?.value?.map((doc) => doc?.country) || [];
    this.localApiFeatures = this.localApiFeatures.map((f) => __spreadProps(__spreadValues({}, f), { highlight: selected.includes(f.country) })).sort((a, b) => (a.country || "").localeCompare(b.country || ""));
  }
  static {
    this.\u0275fac = function SetupDocumentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupDocumentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupDocumentsComponent, selectors: [["setup-documents"]], viewQuery: function SetupDocumentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.localApiDialog = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkDetailsDialog = _t.first);
      }
    }, inputs: { form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, decls: 1, vars: 0, consts: [["checkDetailsDialog", ""], ["localApiDialog", ""], [4, "transloco"], ["class", "documents-journey", 4, "ngIf"], [1, "documents-journey"], [1, "documents-intro"], [1, "documents-intro__icon"], [1, "documents-timeline"], [1, "documents-stage"], [3, "formGroup"], ["aria-hidden", "true", 1, "documents-stage__marker"], [1, "documents-panel"], [1, "documents-panel__header"], [1, "documents-panel__eyebrow"], [1, "documents-panel__status"], [1, "disabled-stage"], [1, "documents-panel__body"], [1, "documents-panel__body", "collection-policy"], [1, "documents-panel", 3, "formGroup"], ["formControlName", "document", 1, "requirement-options", 3, "hideSingleSelectionIndicator"], [1, "setting-row"], [3, "value"], [1, "requirement-option"], [1, "setting-row__copy"], ["formControlName", "businessVerification"], [1, "validation-summary"], [1, "document-editor", 3, "form", "documentTypes", "target"], [1, "policy-section"], [1, "policy-section", "policy-section--attempts"], [1, "policy-section__copy"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["formControlName", "attemptLimit", "required", ""], [1, "method-options"], ["type", "button", 1, "method-option", 3, "method-option--selected"], [1, "field-error"], ["type", "button", 1, "method-option", 3, "click"], [1, "method-option__check"], ["formControlName", "screening"], [1, "screening-options"], [1, "screening-option"], ["formControlName", "informationVerification"], ["formControlName", "criminalHistoryVerification"], [1, "criminal-check-catalog"], [1, "criminal-check-catalog__intro"], [1, "check-scope"], [1, "check-scope", "check-scope--international"], [1, "check-scope__badge", "check-scope__badge--floating"], [1, "check-scope__header"], [1, "check-card-grid"], [1, "check-card", 3, "check-card--selected"], [1, "check-scope__badge"], [1, "check-scope__empty"], [1, "check-card"], [3, "change", "checked"], [1, "check-card__copy"], ["type", "button", "matTooltipPosition", "above", 1, "check-card__source", 3, "click", "matTooltip"], [1, "flex", "max-h-[90vh]", "flex-col", "overflow-hidden", "rounded-lg", "bg-white", "dark:bg-gray-900"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200", "bg-stone-50", "p-5", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "flex", "min-w-0", "flex-col", "items-start", "gap-2"], [1, "check-card__source"], [1, "m-0", "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "flex-1", "overflow-y-auto", "p-5"], [1, "m-0", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "justify-end", "gap-2", "border-t", "border-stone-200", "p-4", "dark:border-gray-700"], ["mat-stroked-button", "", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["mat-flat-button", "", "color", "primary", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "flex", "items-center", "justify-between", "gap-4", "border-b", "border-stone-200", "bg-stone-50", "p-5", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-3", "py-10"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "justify-end", "gap-2", "border-t", "border-stone-200", "p-4", "dark:border-gray-700"], ["mat-flat-button", "", "color", "primary", "mat-dialog-close", "", 1, "rounded-xl"], ["mode", "indeterminate", "diameter", "36"], [1, "text-sm", "text-stone-500"], [1, "m-0", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "flex", "items-center", "gap-2", "rounded-lg", "border", "border-blue-200", "bg-blue-50", "p-3", "text-sm", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "!h-4", "!w-4"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-col", "gap-2", "rounded-xl", "border", "p-4", "transition-shadow", "hover:shadow-sm", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-2"], [1, "!h-5", "!w-5", 3, "ngClass"], [1, "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "rounded-full", "px-2", "py-0.5", "text-[11px]", "font-bold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "m-0", "text-xs", "text-stone-600", "dark:text-stone-300"], [1, "flex", "items-center", "gap-1", "text-[11px]", "font-semibold", "text-emerald-700", "dark:text-emerald-400"], [1, "!h-3.5", "!w-3.5"]], template: function SetupDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupDocumentsComponent_ng_container_0_Template, 6, 1, "ng-container", 2);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatCheckboxModule,
      MatCheckbox,
      MatChipsModule,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRadioModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoDirective,
      DocumentVerificationTypeListComponent
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.documents-journey[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  width: min(100%, 58rem);\n}\n.documents-intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid rgba(214, 211, 209, 0.8);\n  border-radius: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(245, 245, 244, 0.72));\n}\n.documents-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 46rem;\n  margin: 0.3rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.documents-intro__icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #1c1917;\n  color: white;\n}\n.documents-intro__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.documents-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.documents-timeline[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 1.15rem;\n  bottom: 1.15rem;\n  left: 1.15rem;\n  width: 1px;\n  background: linear-gradient(#292524, #d6d3d1);\n  content: "";\n}\n.documents-stage[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 2.3rem minmax(0, 1fr);\n  gap: 1rem;\n}\n.documents-stage__marker[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  border: 4px solid #fafaf9;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.documents-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid rgba(214, 211, 209, 0.9);\n  border-radius: 1.25rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 12px 30px rgba(28, 25, 23, 0.035);\n}\n.documents-panel--error[_ngcontent-%COMP%] {\n  border-color: #f87171;\n}\n.documents-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem 1.5rem 1.25rem;\n  border-bottom: 1px solid #f5f5f4;\n}\n.documents-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 39rem;\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.76rem;\n  line-height: 1.5;\n}\n.documents-panel__eyebrow[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.documents-panel__status[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #57534e;\n  font-size: 0.68rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.documents-panel__body[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.requirement-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: auto;\n  margin: 1.25rem 1.5rem 1.5rem;\n  border: 0;\n}\n.requirement-options[_ngcontent-%COMP%]     .mat-button-toggle {\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-checked {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-label-content {\n  width: 100%;\n  padding: 0.9rem 1rem;\n  line-height: normal;\n  white-space: normal;\n}\n.requirement-option[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 3.2rem;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n  text-align: left;\n}\n.requirement-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.8rem;\n  font-weight: 650;\n}\n.requirement-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.35;\n}\n.setting-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n}\n.setting-row__copy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.setting-row__copy[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  color: #78716c;\n}\n.setting-row__copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.disabled-stage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n  padding: 0.9rem 1rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.disabled-stage[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #a8a29e;\n  font-size: 1rem;\n}\n.validation-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n  padding: 0.8rem 0.9rem;\n  border-radius: 0.75rem;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 0.72rem;\n}\n.validation-summary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.validation-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.document-editor[_ngcontent-%COMP%] {\n  display: block;\n}\n  .document-editor [id^=doc-country-] {\n  border-radius: 0.9rem !important;\n  background: #fafaf9 !important;\n  box-shadow: none;\n}\n  .document-editor [id^=doc-country-] > div:first-child {\n  align-items: center;\n}\n  .document-editor [id^=doc-country-] [mat-stroked-button] {\n  min-height: 2.2rem;\n}\n  .document-editor > div > button[mat-stroked-button] {\n  margin-top: 0.25rem;\n  border-style: dashed;\n}\n.collection-policy[_ngcontent-%COMP%], \n.policy-section[_ngcontent-%COMP%], \n.policy-section__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.collection-policy[_ngcontent-%COMP%] {\n  gap: 1.25rem;\n}\n.policy-section[_ngcontent-%COMP%] {\n  gap: 0.8rem;\n}\n.policy-section[_ngcontent-%COMP%]    + .policy-section[_ngcontent-%COMP%] {\n  padding-top: 1.25rem;\n  border-top: 1px solid #f5f5f4;\n}\n.policy-section__copy[_ngcontent-%COMP%] {\n  gap: 0.2rem;\n}\n.policy-section__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.policy-section__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.policy-section--attempts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(12rem, 15rem);\n  align-items: center;\n  gap: 1.5rem;\n}\n.policy-section--attempts[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.method-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.method-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-height: 3.6rem;\n  padding: 0.8rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #57534e;\n  text-align: left;\n  transition:\n    border-color 160ms ease,\n    background-color 160ms ease,\n    transform 160ms ease;\n}\n.method-option[_ngcontent-%COMP%]:hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.method-option[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.method-option--selected[_ngcontent-%COMP%] {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n  color: #292524;\n  font-weight: 650;\n}\n.method-option__check[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #166534 !important;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dc2626;\n  font-size: 0.72rem;\n}\n.screening-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.screening-option[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 0.65rem;\n  min-height: 5rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.screening-option[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  color: #78716c;\n}\n.screening-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.screening-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.screening-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.criminal-check-catalog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding: 1rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 0.15rem 0.2rem 0.25rem;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 0.64rem;\n  font-weight: 750;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.18rem 0 0;\n  color: #1c1917;\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 31rem;\n  margin: 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.5;\n  text-align: right;\n}\n.check-scope[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.check-scope--international[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 0.35rem;\n  border-color: #dbeafe;\n  background: #f8fbff;\n}\n.check-scope__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(10rem, 0.7fr) minmax(14rem, 1.3fr);\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 0.85rem;\n}\n.check-scope__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.check-scope__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n.check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.check-scope__badge[_ngcontent-%COMP%], \n.check-card__source[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  border-radius: 999px;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.045em;\n  text-transform: uppercase;\n}\n.check-scope__badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.48rem;\n  background: #e7e5e4;\n  color: #57534e;\n}\n.check-scope--international[_ngcontent-%COMP%]    > .check-scope__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: 1;\n  transform: translateY(-50%);\n  white-space: nowrap;\n  border: 1px solid #bfdbfe;\n  background: #f8fbff;\n  color: #1d4ed8;\n}\n.check-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n.check-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.65rem;\n  min-height: 7rem;\n  padding: 0.8rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.78rem;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.check-card[_ngcontent-%COMP%]:hover {\n  border-color: #a8a29e;\n  box-shadow: 0 5px 16px rgba(28, 25, 23, 0.06);\n  transform: translateY(-1px);\n}\n.check-card--selected[_ngcontent-%COMP%] {\n  border-color: #93c5fd;\n  box-shadow: inset 0 0 0 1px #bfdbfe;\n}\n.check-card__copy[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n}\n.check-card__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #292524;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.check-card__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.check-card__source[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 0.22rem 0.43rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\nbutton.check-card__source[_ngcontent-%COMP%] {\n  border: 0;\n  font-family: inherit;\n  line-height: 1.2;\n  cursor: pointer;\n}\nbutton.check-card__source[_ngcontent-%COMP%]:hover, \nbutton.check-card__source[_ngcontent-%COMP%]:focus-visible {\n  background: #dbeafe;\n  outline: 2px solid #93c5fd;\n  outline-offset: 2px;\n}\n.check-scope__empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border-radius: 0.65rem;\n  background: #f5f5f4;\n  color: #78716c;\n  font-size: 0.7rem;\n}\n.check-scope__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.dark[_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .documents-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel[_ngcontent-%COMP%] {\n  border-color: #374151;\n  background: #111827;\n}\n.dark[_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .requirement-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .setting-row__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .policy-section__copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .documents-stage__marker[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-stage__marker[_ngcontent-%COMP%] {\n  border-color: #030712;\n  background: #f3f4f6;\n  color: #111827;\n}\n.dark[_nghost-%COMP%]   .documents-timeline[_ngcontent-%COMP%]::before, .dark   [_nghost-%COMP%]   .documents-timeline[_ngcontent-%COMP%]::before {\n  background: linear-gradient(#f3f4f6, #374151);\n}\n.dark[_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__header[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .policy-section[_ngcontent-%COMP%]    + .policy-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .policy-section[_ngcontent-%COMP%]    + .policy-section[_ngcontent-%COMP%] {\n  border-color: #1f2937;\n}\n.dark[_nghost-%COMP%]   .documents-panel__status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .documents-panel__status[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .disabled-stage[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .disabled-stage[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .method-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .method-option[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .screening-option[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .criminal-check-catalog[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .criminal-check-catalog[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle, .dark   [_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle {\n  border-color: #374151;\n  background: #1f2937;\n  color: #d1d5db;\n}\n.dark[_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-checked, .dark   [_nghost-%COMP%]   .requirement-options[_ngcontent-%COMP%]     .mat-button-toggle-checked, \n.dark[_nghost-%COMP%]   .method-option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .method-option--selected[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  background: #374151;\n  box-shadow: inset 0 0 0 1px #d1d5db;\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .check-scope--international[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope--international[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background: #111827;\n}\n.dark[_nghost-%COMP%]   .check-card--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card--selected[_ngcontent-%COMP%] {\n  border-color: #60a5fa;\n  box-shadow: inset 0 0 0 1px #1d4ed8;\n}\n.dark[_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .check-scope__badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__badge[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .check-scope__empty[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__empty[_ngcontent-%COMP%] {\n  background: #374151;\n  color: #d1d5db;\n}\n.dark[_nghost-%COMP%]   .check-scope__badge--floating[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-scope__badge--floating[_ngcontent-%COMP%] {\n  border-color: #1d4ed8;\n  background: #111827;\n  color: #bfdbfe;\n}\n.dark[_nghost-%COMP%]   .check-card__source[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .check-card__source[_ngcontent-%COMP%] {\n  background: #1e3a8a;\n  color: #dbeafe;\n}\n.dark[_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:hover, \n.dark[_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:focus-visible, .dark   [_nghost-%COMP%]   button.check-card__source[_ngcontent-%COMP%]:focus-visible {\n  background: #1d4ed8;\n  outline-color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .validation-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .validation-summary[_ngcontent-%COMP%] {\n  background: rgba(127, 29, 29, 0.35);\n  color: #fecaca;\n}\n.dark[_nghost-%COMP%]     .document-editor [id^=doc-country-], .dark   [_nghost-%COMP%]     .document-editor [id^=doc-country-] {\n  border-color: #374151 !important;\n  background: #1f2937 !important;\n}\n@media (max-width: 720px) {\n  .documents-intro[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .documents-timeline[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .documents-stage[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .documents-stage__marker[_ngcontent-%COMP%] {\n    margin: 0 0 -0.7rem 1rem;\n  }\n  .documents-panel__header[_ngcontent-%COMP%] {\n    padding-top: 1.7rem;\n  }\n  .requirement-options[_ngcontent-%COMP%], \n   .method-options[_ngcontent-%COMP%], \n   .screening-options[_ngcontent-%COMP%], \n   .check-card-grid[_ngcontent-%COMP%], \n   .check-scope__header[_ngcontent-%COMP%], \n   .policy-section--attempts[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .criminal-check-catalog__intro[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .criminal-check-catalog__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .check-scope__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .documents-panel__header[_ngcontent-%COMP%], \n   .setting-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=documents.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupDocumentsComponent, [{
    type: Component,
    args: [{ selector: "setup-documents", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTooltipModule,
      TranslocoModule,
      DocumentVerificationTypeListComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div *ngIf="isFormReady" class="documents-journey">\r
        <div class="documents-intro">\r
            <span class="documents-intro__icon"><mat-icon>badge</mat-icon></span>\r
            <div>\r
                <h2>{{ t('smartEnrollProjects.setup.documents.journey.title') }}</h2>\r
                <p>{{ t('smartEnrollProjects.setup.documents.journey.subtitle') }}</p>\r
            </div>\r
        </div>\r
\r
        <ol class="documents-timeline">\r
            @if (showRequirementStage && stepFormGroup) {\r
                <li class="documents-stage">\r
                    <span class="documents-stage__marker" aria-hidden="true">1</span>\r
                    <section class="documents-panel" [formGroup]="stepFormGroup">\r
                        <header class="documents-panel__header">\r
                            <div>\r
                                <span class="documents-panel__eyebrow">\r
                                    {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: 1 }) }}\r
                                </span>\r
                                <h3>\r
                                    {{\r
                                        isBusinessVerification\r
                                            ? t('smartEnrollProjects.setup.documents.business.title')\r
                                            : t('smartEnrollProjects.setup.documents.journey.requirementTitle')\r
                                    }}\r
                                </h3>\r
                                <p>\r
                                    {{\r
                                        isBusinessVerification\r
                                            ? t('smartEnrollProjects.setup.documents.business.subtitle')\r
                                            : t('smartEnrollProjects.setup.documents.journey.requirementSubtitle')\r
                                    }}\r
                                </p>\r
                            </div>\r
                            <span class="documents-panel__status">\r
                                {{ t('smartEnrollProjects.setup.documents.journey.requirement.' + requirementValue) }}\r
                            </span>\r
                        </header>\r
\r
                        @if (!isBusinessVerification) {\r
                            <mat-button-toggle-group\r
                                formControlName="document"\r
                                class="requirement-options"\r
                                [hideSingleSelectionIndicator]="true"\r
                            >\r
                                @for (value of ['skip', 'optional', 'mandatory']; track value) {\r
                                    <mat-button-toggle [value]="value">\r
                                        <span class="requirement-option">\r
                                            <strong>\r
                                                {{\r
                                                    t(\r
                                                        value === 'mandatory'\r
                                                            ? 'smartEnrollProjects.setup.documents.required'\r
                                                            : 'smartEnrollProjects.setup.documents.' + value\r
                                                    )\r
                                                }}\r
                                            </strong>\r
                                            <small>{{ t('smartEnrollProjects.setup.documents.journey.requirementHelp.' + value) }}</small>\r
                                        </span>\r
                                    </mat-button-toggle>\r
                                }\r
                            </mat-button-toggle-group>\r
                        } @else {\r
                            <div class="setting-row">\r
                                <div class="setting-row__copy">\r
                                    <mat-icon>domain_verification</mat-icon>\r
                                    <div>\r
                                        <strong>{{ t('smartEnrollProjects.setup.documents.business.toggle') }}</strong>\r
                                        <span>{{ t('smartEnrollProjects.setup.documents.journey.businessToggleHelp') }}</span>\r
                                    </div>\r
                                </div>\r
                                <mat-slide-toggle formControlName="businessVerification"></mat-slide-toggle>\r
                            </div>\r
                        }\r
                    </section>\r
                </li>\r
            }\r
\r
            <ng-container [formGroup]="formGroup">\r
                <li class="documents-stage">\r
                    <span class="documents-stage__marker" aria-hidden="true">{{ stageNumber(2) }}</span>\r
                    <section class="documents-panel" [class.documents-panel--error]="!isNotRequired && documentTypesErrorKeys.length">\r
                        <header class="documents-panel__header">\r
                            <div>\r
                                <span class="documents-panel__eyebrow">\r
                                    {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: stageNumber(2) }) }}\r
                                </span>\r
                                <h3>{{ t('smartEnrollProjects.setup.documents.types.title') }}</h3>\r
                                <p>{{ t('smartEnrollProjects.setup.documents.types.subtitle') }}</p>\r
                            </div>\r
                            <span class="documents-panel__status">\r
                                {{\r
                                    t('smartEnrollProjects.setup.documents.journey.documentSummary', {\r
                                        countries: configuredCountriesCount,\r
                                        documents: selectedDocumentsCount,\r
                                    })\r
                                }}\r
                            </span>\r
                        </header>\r
\r
                        @if (isNotRequired) {\r
                            <div class="disabled-stage">\r
                                <mat-icon>lock_outline</mat-icon>\r
                                <span>{{ t('smartEnrollProjects.setup.documents.journey.enableToConfigure') }}</span>\r
                            </div>\r
                        } @else {\r
                            <div class="documents-panel__body">\r
                                @if (documentTypesErrorKeys.length) {\r
                                    <div class="validation-summary">\r
                                        <mat-icon>error_outline</mat-icon>\r
                                        <div>\r
                                            @if (documentTypesErrorKeys.includes('atLeastOneDocumentVerificationTypeRequired')) {\r
                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.atLeastOne') }}</span>\r
                                            }\r
                                            @if (documentTypesErrorKeys.includes('duplicateCountriesNotAllowed')) {\r
                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.duplicateCountries') }}</span>\r
                                            }\r
                                            @if (documentTypesErrorKeys.includes('allDocumentVerificationTypesMustBeValid')) {\r
                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.allMustBeValid') }}</span>\r
                                            }\r
                                            @if (documentTypesErrorKeys.includes('emptyCountryValuesNotAllowed')) {\r
                                                <span>{{ t('smartEnrollProjects.setup.documents.types.errors.emptyCountry') }}</span>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                }\r
                                @if (documentTypesFormArray) {\r
                                    <document-verification-type-list\r
                                        class="document-editor"\r
                                        [form]="form"\r
                                        [documentTypes]="documentTypesFormArray"\r
                                        [target]="target"\r
                                    ></document-verification-type-list>\r
                                }\r
                            </div>\r
                        }\r
                    </section>\r
                </li>\r
\r
                @let methodsCtrl = formGroup?.get('verificationMethods');\r
                <li class="documents-stage">\r
                    <span class="documents-stage__marker" aria-hidden="true">{{ stageNumber(3) }}</span>\r
                    <section\r
                        class="documents-panel"\r
                        [class.documents-panel--error]="!isNotRequired && !isBusinessVerification && methodsCtrl?.dirty && methodsCtrl?.errors?.['required']"\r
                    >\r
                        <header class="documents-panel__header">\r
                            <div>\r
                                <span class="documents-panel__eyebrow">\r
                                    {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: stageNumber(3) }) }}\r
                                </span>\r
                                <h3>{{ t('smartEnrollProjects.setup.documents.journey.collectionTitle') }}</h3>\r
                                <p>{{ t('smartEnrollProjects.setup.documents.journey.collectionHelp') }}</p>\r
                            </div>\r
                            <span class="documents-panel__status">\r
                                {{\r
                                    isBusinessVerification\r
                                        ? t('smartEnrollProjects.setup.documents.journey.attemptSummary', { attempts: attemptLimit })\r
                                        : t('smartEnrollProjects.setup.documents.journey.collectionSummary', {\r
                                              methods: verificationMethodsValue.length,\r
                                              attempts: attemptLimit,\r
                                          })\r
                                }}\r
                            </span>\r
                        </header>\r
\r
                        @if (isNotRequired) {\r
                            <div class="disabled-stage">\r
                                <mat-icon>lock_outline</mat-icon>\r
                                <span>{{ t('smartEnrollProjects.setup.documents.journey.enableToConfigure') }}</span>\r
                            </div>\r
                        } @else {\r
                            <div class="documents-panel__body collection-policy">\r
                                @if (!isBusinessVerification) {\r
                                    <div class="policy-section">\r
                                        <div class="policy-section__copy">\r
                                            <strong>{{ t('smartEnrollProjects.setup.documents.method.title') }}</strong>\r
                                            <span>{{ t('smartEnrollProjects.setup.documents.method.help') }}</span>\r
                                        </div>\r
                                        <div class="method-options">\r
                                            @for (method of verificationMethods; track method.value) {\r
                                                <button\r
                                                    type="button"\r
                                                    class="method-option"\r
                                                    [class.method-option--selected]="isVerificationMethodSelected(method.value)"\r
                                                    (click)="toggleVerificationMethod(method.value)"\r
                                                >\r
                                                    <mat-icon>{{ method.icon }}</mat-icon>\r
                                                    <span>{{ t(method.labelKey) }}</span>\r
                                                    @if (isVerificationMethodSelected(method.value)) {\r
                                                        <mat-icon class="method-option__check">check_circle</mat-icon>\r
                                                    }\r
                                                </button>\r
                                            }\r
                                        </div>\r
                                        @if (methodsCtrl?.dirty && methodsCtrl?.errors?.['required']) {\r
                                            <p class="field-error">{{ t('smartEnrollProjects.setup.documents.method.required') }}</p>\r
                                        }\r
                                    </div>\r
                                }\r
\r
                                <div class="policy-section policy-section--attempts">\r
                                    <div class="policy-section__copy">\r
                                        <strong>{{ t('smartEnrollProjects.setup.documents.attempts.title') }}</strong>\r
                                        <span>{{ t('smartEnrollProjects.setup.documents.attempts.subtitle') }}</span>\r
                                    </div>\r
                                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                                        <mat-label>{{ t('smartEnrollProjects.setup.documents.attempts.limit') }}</mat-label>\r
                                        <mat-select formControlName="attemptLimit" required>\r
                                            @for (n of attemptOptions; track n) {\r
                                                <mat-option [value]="n">\r
                                                    {{\r
                                                        n === 1\r
                                                            ? t('smartEnrollProjects.setup.documents.attempts.one')\r
                                                            : t('smartEnrollProjects.setup.documents.attempts.many', { count: n })\r
                                                    }}\r
                                                </mat-option>\r
                                            }\r
                                        </mat-select>\r
                                    </mat-form-field>\r
                                </div>\r
                            </div>\r
                        }\r
                    </section>\r
                </li>\r
\r
                <li class="documents-stage">\r
                    <span class="documents-stage__marker" aria-hidden="true">{{ stageNumber(4) }}</span>\r
                    <section\r
                        class="documents-panel"\r
                        [class.documents-panel--error]="!isNotRequired && formGroup?.errors?.['screeningRequiresVerification']"\r
                    >\r
                        <header class="documents-panel__header">\r
                            <div>\r
                                <span class="documents-panel__eyebrow">\r
                                    {{ t('smartEnrollProjects.setup.documents.journey.stage', { number: stageNumber(4) }) }}\r
                                </span>\r
                                <h3>{{ t('smartEnrollProjects.setup.documents.journey.screeningTitle') }}</h3>\r
                                <p>{{ t('smartEnrollProjects.setup.documents.journey.screeningHelp') }}</p>\r
                            </div>\r
                            <span class="documents-panel__status">\r
                                {{\r
                                    formGroup?.get('screening')?.value\r
                                        ? t('smartEnrollProjects.setup.documents.journey.screeningSummary', { count: screeningChecksCount })\r
                                        : t('smartEnrollProjects.setup.documents.journey.screeningOff')\r
                                }}\r
                            </span>\r
                        </header>\r
\r
                        @if (isNotRequired) {\r
                            <div class="disabled-stage">\r
                                <mat-icon>lock_outline</mat-icon>\r
                                <span>{{ t('smartEnrollProjects.setup.documents.journey.enableToConfigure') }}</span>\r
                            </div>\r
                        } @else {\r
                            <div class="documents-panel__body">\r
                                <div class="setting-row">\r
                                    <div class="setting-row__copy">\r
                                        <mat-icon>manage_search</mat-icon>\r
                                        <div>\r
                                            <strong>{{ t('smartEnrollProjects.setup.documents.screening.title') }}</strong>\r
                                            <span>{{ t('smartEnrollProjects.setup.documents.screening.subtitle') }}</span>\r
                                        </div>\r
                                    </div>\r
                                    <mat-slide-toggle formControlName="screening"></mat-slide-toggle>\r
                                </div>\r
\r
                                @if (formGroup?.get('screening')?.value) {\r
                                    @if (formGroup?.errors?.['screeningRequiresVerification']) {\r
                                        <p class="field-error">{{ t('smartEnrollProjects.setup.documents.screening.requiresVerification') }}</p>\r
                                    }\r
\r
                                    <div class="screening-options">\r
                                        <label class="screening-option">\r
                                            <mat-checkbox formControlName="informationVerification"></mat-checkbox>\r
                                            <mat-icon>account_balance</mat-icon>\r
                                            <span>\r
                                                <strong>{{ t('smartEnrollProjects.setup.documents.screening.informationVerification') }}</strong>\r
                                                <small>{{ t('smartEnrollProjects.setup.documents.screening.informationVerificationDescription') }}</small>\r
                                            </span>\r
                                        </label>\r
\r
                                        <label class="screening-option">\r
                                            <mat-checkbox formControlName="criminalHistoryVerification"></mat-checkbox>\r
                                            <mat-icon>security</mat-icon>\r
                                            <span>\r
                                                <strong>{{ t('smartEnrollProjects.setup.documents.screening.criminalHistory') }}</strong>\r
                                                <small>{{ t('smartEnrollProjects.setup.documents.screening.criminalHistoryDescription') }}</small>\r
                                            </span>\r
                                        </label>\r
                                    </div>\r
\r
                                    @if (formGroup?.get('criminalHistoryVerification')?.value) {\r
                                        <div class="criminal-check-catalog">\r
                                            <div class="criminal-check-catalog__intro">\r
                                                <div>\r
                                                    <span>{{ t('smartEnrollProjects.setup.documents.screening.catalogEyebrow') }}</span>\r
                                                    <h4>{{ t('smartEnrollProjects.setup.documents.screening.catalogTitle') }}</h4>\r
                                                </div>\r
                                                <p>{{ t('smartEnrollProjects.setup.documents.screening.catalogDescription') }}</p>\r
                                            </div>\r
\r
                                            @for (section of countryCheckSections; track section.country) {\r
                                                <section class="check-scope">\r
                                                    <header class="check-scope__header">\r
                                                        <div>\r
                                                            <span class="check-scope__badge">\r
                                                                {{ t('smartEnrollProjects.setup.documents.screening.countryChecks') }}\r
                                                            </span>\r
                                                            <h5>{{ section.country }}</h5>\r
                                                        </div>\r
                                                        <p>{{ t('smartEnrollProjects.setup.documents.screening.countryDescription', { country: section.country }) }}</p>\r
                                                    </header>\r
\r
                                                    @if (section.checks.length) {\r
                                                        <div class="check-card-grid">\r
                                                            @for (check of section.checks; track check.value) {\r
                                                                <label class="check-card" [class.check-card--selected]="isEndpointSelected(check.value)">\r
                                                                    <mat-checkbox\r
                                                                        [checked]="isEndpointSelected(check.value)"\r
                                                                        (change)="toggleCriminalEndpoint(check.value)"\r
                                                                    ></mat-checkbox>\r
                                                                    <span class="check-card__copy">\r
                                                                        <strong>{{ t(check.titleKey) }}</strong>\r
                                                                        <small>{{ t(check.descriptionKey) }}</small>\r
                                                                        <button\r
                                                                            type="button"\r
                                                                            class="check-card__source"\r
                                                                            [matTooltip]="t('smartEnrollProjects.setup.documents.screening.aboutTooltip')"\r
                                                                            matTooltipPosition="above"\r
                                                                            (click)="openCheckDetails($event, check)"\r
                                                                        >\r
                                                                            {{ t(check.sourceKey) }}\r
                                                                        </button>\r
                                                                    </span>\r
                                                                </label>\r
                                                            }\r
                                                        </div>\r
                                                    } @else {\r
                                                        <div class="check-scope__empty">\r
                                                            <mat-icon>info_outline</mat-icon>\r
                                                            <span>{{ t('smartEnrollProjects.setup.documents.screening.noCountryChecks') }}</span>\r
                                                        </div>\r
                                                    }\r
                                                </section>\r
                                            }\r
\r
                                            <section class="check-scope check-scope--international">\r
                                                <span class="check-scope__badge check-scope__badge--floating">\r
                                                    {{ t('smartEnrollProjects.setup.documents.screening.globalChecks') }}\r
                                                </span>\r
                                                <header class="check-scope__header">\r
                                                    <div>\r
                                                        <h5>{{ t('smartEnrollProjects.setup.documents.screening.internationalTitle') }}</h5>\r
                                                    </div>\r
                                                    <p>{{ t('smartEnrollProjects.setup.documents.screening.internationalDescription') }}</p>\r
                                                </header>\r
                                                <div class="check-card-grid">\r
                                                    @for (check of internationalChecks; track check.value) {\r
                                                        <label class="check-card" [class.check-card--selected]="isEndpointSelected(check.value)">\r
                                                            <mat-checkbox\r
                                                                [checked]="isEndpointSelected(check.value)"\r
                                                                (change)="toggleCriminalEndpoint(check.value)"\r
                                                            ></mat-checkbox>\r
                                                            <span class="check-card__copy">\r
                                                                <strong>{{ t(check.titleKey) }}</strong>\r
                                                                <small>{{ t(check.descriptionKey) }}</small>\r
                                                                <button\r
                                                                    type="button"\r
                                                                    class="check-card__source"\r
                                                                    [matTooltip]="t('smartEnrollProjects.setup.documents.screening.aboutTooltip')"\r
                                                                    matTooltipPosition="above"\r
                                                                    (click)="openCheckDetails($event, check)"\r
                                                                >\r
                                                                    {{ t(check.sourceKey) }}\r
                                                                </button>\r
                                                            </span>\r
                                                        </label>\r
                                                    }\r
                                                </div>\r
                                            </section>\r
                                        </div>\r
                                    }\r
                                }\r
                            </div>\r
                        }\r
                    </section>\r
                </li>\r
            </ng-container>\r
        </ol>\r
    </div>\r
\r
    <ng-template #checkDetailsDialog>\r
        @if (selectedCheck) {\r
            <div class="flex max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-900">\r
                <div class="flex items-start justify-between gap-4 border-b border-stone-200 bg-stone-50 p-5 dark:border-gray-700 dark:bg-gray-900/60">\r
                    <div class="flex min-w-0 flex-col items-start gap-2">\r
                        <span class="check-card__source">{{ t(selectedCheck.sourceKey) }}</span>\r
                        <h2 class="m-0 text-lg font-semibold text-stone-900 dark:text-white">{{ t(selectedCheck.titleKey) }}</h2>\r
                    </div>\r
                    <button mat-icon-button mat-dialog-close>\r
                        <mat-icon>close</mat-icon>\r
                    </button>\r
                </div>\r
                <div class="flex-1 overflow-y-auto p-5">\r
                    <p class="m-0 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{{ t(selectedCheck.aboutKey) }}</p>\r
                </div>\r
                <div class="flex flex-wrap justify-end gap-2 border-t border-stone-200 p-4 dark:border-gray-700">\r
                    <a mat-stroked-button [href]="docsUrl(selectedCheck)" target="_blank" rel="noopener noreferrer">\r
                        {{ t('smartEnrollProjects.setup.documents.screening.readDocs') }}\r
                    </a>\r
                    <a mat-flat-button color="primary" [href]="postmanUrl(selectedCheck)" target="_blank" rel="noopener noreferrer">\r
                        {{ t('smartEnrollProjects.setup.documents.screening.tryInPostman') }}\r
                    </a>\r
                </div>\r
            </div>\r
        }\r
    </ng-template>\r
\r
    <!-- Local background-check feature modal -->\r
    <ng-template #localApiDialog>\r
        <div class="flex max-h-[90vh] flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-900">\r
            <div class="flex items-center justify-between gap-4 border-b border-stone-200 bg-stone-50 p-5 dark:border-gray-700 dark:bg-gray-900/60">\r
                <h2 class="m-0 text-lg font-semibold text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.documents.localApi.title') }}\r
                </h2>\r
                <button mat-icon-button mat-dialog-close>\r
                    <mat-icon>close</mat-icon>\r
                </button>\r
            </div>\r
\r
            <div class="flex-1 overflow-y-auto p-5">\r
                @if (loadingFeatures) {\r
                    <div class="flex flex-col items-center justify-center gap-3 py-10">\r
                        <mat-progress-spinner mode="indeterminate" diameter="36"></mat-progress-spinner>\r
                        <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.setup.documents.localApi.loading') }}</span>\r
                    </div>\r
                } @else {\r
                    <div class="flex flex-col gap-4">\r
                        <p class="m-0 text-sm text-stone-600 dark:text-stone-300">\r
                            {{ t('smartEnrollProjects.setup.documents.localApi.description') }}\r
                        </p>\r
                        <div\r
                            class="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200"\r
                        >\r
                            <mat-icon class="!h-4 !w-4">lightbulb</mat-icon>\r
                            <span>{{ t('smartEnrollProjects.setup.documents.localApi.highlightNote') }}</span>\r
                        </div>\r
\r
                        @if (!localApiFeatures.length) {\r
                            <p class="text-sm text-stone-500">\r
                                {{ t('smartEnrollProjects.setup.documents.localApi.empty') }}\r
                            </p>\r
                        }\r
\r
                        <div class="flex flex-col gap-3">\r
                            @for (feature of localApiFeatures; track feature._id) {\r
                                <div\r
                                    class="flex flex-col gap-2 rounded-xl border p-4 transition-shadow hover:shadow-sm"\r
                                    [ngClass]="feature.highlight\r
                                        ? 'border-blue-300 bg-blue-50 dark:border-blue-800'\r
                                        : 'border-stone-200 dark:border-gray-700'"\r
                                >\r
                                    <div class="flex items-center justify-between gap-3">\r
                                        <div class="flex items-center gap-2">\r
                                            <mat-icon\r
                                                class="!h-5 !w-5"\r
                                                [ngClass]="feature.highlight ? 'text-blue-600' : 'text-stone-500'"\r
                                            >\r
                                                public\r
                                            </mat-icon>\r
                                            <span class="text-sm font-semibold text-stone-800 dark:text-stone-100">{{ feature.name }}</span>\r
                                        </div>\r
                                        <span\r
                                            class="rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide"\r
                                            [ngClass]="feature.highlight ? 'bg-blue-600 text-white' : 'bg-stone-200 text-stone-600'"\r
                                        >\r
                                            {{ feature.country }}\r
                                        </span>\r
                                    </div>\r
                                    @if (feature.description) {\r
                                        <p class="m-0 text-xs text-stone-600 dark:text-stone-300">{{ feature.description }}</p>\r
                                    }\r
                                    @if (feature.highlight) {\r
                                        <div class="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">\r
                                            <mat-icon class="!h-3.5 !w-3.5">check_circle</mat-icon>\r
                                            <span>{{ t('smartEnrollProjects.setup.documents.localApi.compatible') }}</span>\r
                                        </div>\r
                                    }\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
                }\r
            </div>\r
\r
            <div class="flex justify-end gap-2 border-t border-stone-200 p-4 dark:border-gray-700">\r
                <button mat-flat-button color="primary" mat-dialog-close class="rounded-xl">\r
                    {{ t('smartEnrollProjects.setup.documents.localApi.close') }}\r
                </button>\r
            </div>\r
        </div>\r
    </ng-template>\r
</ng-container>\r
`, styles: ['/* src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.scss */\n:host {\n  display: block;\n}\n.documents-journey {\n  margin-inline: auto;\n  width: min(100%, 58rem);\n}\n.documents-intro {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid rgba(214, 211, 209, 0.8);\n  border-radius: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(245, 245, 244, 0.72));\n}\n.documents-intro h2 {\n  margin: 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-intro p {\n  max-width: 46rem;\n  margin: 0.3rem 0 0;\n  color: #78716c;\n  font-size: 0.78rem;\n  line-height: 1.55;\n}\n.documents-intro__icon {\n  display: grid;\n  flex: 0 0 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  place-items: center;\n  border-radius: 0.8rem;\n  background: #1c1917;\n  color: white;\n}\n.documents-intro__icon mat-icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.documents-timeline {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.documents-timeline::before {\n  position: absolute;\n  top: 1.15rem;\n  bottom: 1.15rem;\n  left: 1.15rem;\n  width: 1px;\n  background: linear-gradient(#292524, #d6d3d1);\n  content: "";\n}\n.documents-stage {\n  position: relative;\n  display: grid;\n  grid-template-columns: 2.3rem minmax(0, 1fr);\n  gap: 1rem;\n}\n.documents-stage__marker {\n  z-index: 1;\n  display: grid;\n  width: 2.3rem;\n  height: 2.3rem;\n  place-items: center;\n  border: 4px solid #fafaf9;\n  border-radius: 999px;\n  background: #292524;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.documents-panel {\n  overflow: hidden;\n  border: 1px solid rgba(214, 211, 209, 0.9);\n  border-radius: 1.25rem;\n  background: white;\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.03), 0 12px 30px rgba(28, 25, 23, 0.035);\n}\n.documents-panel--error {\n  border-color: #f87171;\n}\n.documents-panel__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.4rem 1.5rem 1.25rem;\n  border-bottom: 1px solid #f5f5f4;\n}\n.documents-panel__header h3 {\n  margin: 0.15rem 0 0;\n  color: #1c1917;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.015em;\n}\n.documents-panel__header p {\n  max-width: 39rem;\n  margin: 0.35rem 0 0;\n  color: #78716c;\n  font-size: 0.76rem;\n  line-height: 1.5;\n}\n.documents-panel__eyebrow {\n  color: #a8a29e;\n  font-size: 0.64rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.documents-panel__status {\n  flex: 0 0 auto;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  background: #f5f5f4;\n  color: #57534e;\n  font-size: 0.68rem;\n  font-weight: 650;\n  white-space: nowrap;\n}\n.documents-panel__body {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n.requirement-options {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  width: auto;\n  margin: 1.25rem 1.5rem 1.5rem;\n  border: 0;\n}\n.requirement-options ::ng-deep .mat-button-toggle {\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.requirement-options ::ng-deep .mat-button-toggle-checked {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n}\n.requirement-options ::ng-deep .mat-button-toggle-label-content {\n  width: 100%;\n  padding: 0.9rem 1rem;\n  line-height: normal;\n  white-space: normal;\n}\n.requirement-option {\n  display: flex;\n  min-height: 3.2rem;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n  text-align: left;\n}\n.requirement-option strong {\n  color: #292524;\n  font-size: 0.8rem;\n  font-weight: 650;\n}\n.requirement-option small {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.35;\n}\n.setting-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n}\n.setting-row__copy {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.setting-row__copy > mat-icon {\n  margin-top: 0.1rem;\n  color: #78716c;\n}\n.setting-row__copy div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.setting-row__copy strong {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.setting-row__copy span {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.disabled-stage {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  margin: 1.25rem 1.5rem 1.5rem;\n  padding: 0.9rem 1rem;\n  border: 1px dashed #d6d3d1;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #78716c;\n  font-size: 0.72rem;\n}\n.disabled-stage mat-icon {\n  width: 1rem;\n  height: 1rem;\n  color: #a8a29e;\n  font-size: 1rem;\n}\n.validation-summary {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n  padding: 0.8rem 0.9rem;\n  border-radius: 0.75rem;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 0.72rem;\n}\n.validation-summary mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.validation-summary div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.document-editor {\n  display: block;\n}\n::ng-deep .document-editor [id^=doc-country-] {\n  border-radius: 0.9rem !important;\n  background: #fafaf9 !important;\n  box-shadow: none;\n}\n::ng-deep .document-editor [id^=doc-country-] > div:first-child {\n  align-items: center;\n}\n::ng-deep .document-editor [id^=doc-country-] [mat-stroked-button] {\n  min-height: 2.2rem;\n}\n::ng-deep .document-editor > div > button[mat-stroked-button] {\n  margin-top: 0.25rem;\n  border-style: dashed;\n}\n.collection-policy,\n.policy-section,\n.policy-section__copy {\n  display: flex;\n  flex-direction: column;\n}\n.collection-policy {\n  gap: 1.25rem;\n}\n.policy-section {\n  gap: 0.8rem;\n}\n.policy-section + .policy-section {\n  padding-top: 1.25rem;\n  border-top: 1px solid #f5f5f4;\n}\n.policy-section__copy {\n  gap: 0.2rem;\n}\n.policy-section__copy strong {\n  color: #292524;\n  font-size: 0.84rem;\n  font-weight: 650;\n}\n.policy-section__copy span {\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.policy-section--attempts {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(12rem, 15rem);\n  align-items: center;\n  gap: 1.5rem;\n}\n.policy-section--attempts mat-form-field {\n  width: 100%;\n}\n.method-options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.method-option {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-height: 3.6rem;\n  padding: 0.8rem 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.85rem;\n  background: #fafaf9;\n  color: #57534e;\n  text-align: left;\n  transition:\n    border-color 160ms ease,\n    background-color 160ms ease,\n    transform 160ms ease;\n}\n.method-option:hover {\n  border-color: #a8a29e;\n  background: white;\n  transform: translateY(-1px);\n}\n.method-option > mat-icon {\n  color: #78716c;\n}\n.method-option--selected {\n  border-color: #292524;\n  background: #f5f5f4;\n  box-shadow: inset 0 0 0 1px #292524;\n  color: #292524;\n  font-weight: 650;\n}\n.method-option__check {\n  margin-left: auto;\n  color: #166534 !important;\n}\n.field-error {\n  margin: 0;\n  color: #dc2626;\n  font-size: 0.72rem;\n}\n.screening-options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.screening-option {\n  display: grid;\n  grid-template-columns: auto auto minmax(0, 1fr);\n  align-items: flex-start;\n  gap: 0.65rem;\n  min-height: 5rem;\n  padding: 0.9rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fafaf9;\n}\n.screening-option > mat-icon {\n  margin-top: 0.2rem;\n  color: #78716c;\n}\n.screening-option > span {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.screening-option strong {\n  color: #292524;\n  font-size: 0.78rem;\n  font-weight: 650;\n}\n.screening-option small {\n  color: #78716c;\n  font-size: 0.66rem;\n  line-height: 1.4;\n}\n.criminal-check-catalog {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding: 1rem;\n  border: 1px solid #d6d3d1;\n  border-radius: 1rem;\n  background: #fafaf9;\n}\n.criminal-check-catalog__intro {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 0.15rem 0.2rem 0.25rem;\n}\n.criminal-check-catalog__intro > div {\n  flex: 0 0 auto;\n}\n.criminal-check-catalog__intro span {\n  color: #2563eb;\n  font-size: 0.64rem;\n  font-weight: 750;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.criminal-check-catalog__intro h4 {\n  margin: 0.18rem 0 0;\n  color: #1c1917;\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.criminal-check-catalog__intro p {\n  max-width: 31rem;\n  margin: 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.5;\n  text-align: right;\n}\n.check-scope {\n  padding: 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.9rem;\n  background: #fff;\n}\n.check-scope--international {\n  position: relative;\n  margin-top: 0.35rem;\n  border-color: #dbeafe;\n  background: #f8fbff;\n}\n.check-scope__header {\n  display: grid;\n  grid-template-columns: minmax(10rem, 0.7fr) minmax(14rem, 1.3fr);\n  gap: 1rem;\n  align-items: end;\n  margin-bottom: 0.85rem;\n}\n.check-scope__header > div {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.check-scope__header h5 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n.check-scope__header p {\n  margin: 0;\n  color: #78716c;\n  font-size: 0.68rem;\n  line-height: 1.45;\n  text-align: right;\n}\n.check-scope__badge,\n.check-card__source {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  border-radius: 999px;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.045em;\n  text-transform: uppercase;\n}\n.check-scope__badge {\n  padding: 0.25rem 0.48rem;\n  background: #e7e5e4;\n  color: #57534e;\n}\n.check-scope--international > .check-scope__badge {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: 1;\n  transform: translateY(-50%);\n  white-space: nowrap;\n  border: 1px solid #bfdbfe;\n  background: #f8fbff;\n  color: #1d4ed8;\n}\n.check-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n.check-card {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 0.65rem;\n  min-height: 7rem;\n  padding: 0.8rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.78rem;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.check-card:hover {\n  border-color: #a8a29e;\n  box-shadow: 0 5px 16px rgba(28, 25, 23, 0.06);\n  transform: translateY(-1px);\n}\n.check-card--selected {\n  border-color: #93c5fd;\n  box-shadow: inset 0 0 0 1px #bfdbfe;\n}\n.check-card__copy {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.3rem;\n}\n.check-card__copy strong {\n  color: #292524;\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.check-card__copy small {\n  color: #78716c;\n  font-size: 0.65rem;\n  line-height: 1.45;\n}\n.check-card__source {\n  margin-top: auto;\n  padding: 0.22rem 0.43rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\nbutton.check-card__source {\n  border: 0;\n  font-family: inherit;\n  line-height: 1.2;\n  cursor: pointer;\n}\nbutton.check-card__source:hover,\nbutton.check-card__source:focus-visible {\n  background: #dbeafe;\n  outline: 2px solid #93c5fd;\n  outline-offset: 2px;\n}\n.check-scope__empty {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border-radius: 0.65rem;\n  background: #f5f5f4;\n  color: #78716c;\n  font-size: 0.7rem;\n}\n.check-scope__empty mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n:host-context(.dark) .documents-intro,\n:host-context(.dark) .documents-panel {\n  border-color: #374151;\n  background: #111827;\n}\n:host-context(.dark) .documents-intro h2,\n:host-context(.dark) .documents-panel__header h3,\n:host-context(.dark) .requirement-option strong,\n:host-context(.dark) .setting-row__copy strong,\n:host-context(.dark) .policy-section__copy strong,\n:host-context(.dark) .screening-option strong {\n  color: #f9fafb;\n}\n:host-context(.dark) .documents-intro p,\n:host-context(.dark) .documents-panel__header p,\n:host-context(.dark) .requirement-option small,\n:host-context(.dark) .setting-row__copy span,\n:host-context(.dark) .policy-section__copy span,\n:host-context(.dark) .screening-option small {\n  color: #9ca3af;\n}\n:host-context(.dark) .documents-stage__marker {\n  border-color: #030712;\n  background: #f3f4f6;\n  color: #111827;\n}\n:host-context(.dark) .documents-timeline::before {\n  background: linear-gradient(#f3f4f6, #374151);\n}\n:host-context(.dark) .documents-panel__header,\n:host-context(.dark) .policy-section + .policy-section {\n  border-color: #1f2937;\n}\n:host-context(.dark) .documents-panel__status,\n:host-context(.dark) .disabled-stage,\n:host-context(.dark) .method-option,\n:host-context(.dark) .screening-option,\n:host-context(.dark) .criminal-check-catalog,\n:host-context(.dark) .check-scope,\n:host-context(.dark) .requirement-options ::ng-deep .mat-button-toggle {\n  border-color: #374151;\n  background: #1f2937;\n  color: #d1d5db;\n}\n:host-context(.dark) .requirement-options ::ng-deep .mat-button-toggle-checked,\n:host-context(.dark) .method-option--selected {\n  border-color: #d1d5db;\n  background: #374151;\n  box-shadow: inset 0 0 0 1px #d1d5db;\n  color: #f9fafb;\n}\n:host-context(.dark) .check-scope--international,\n:host-context(.dark) .check-card {\n  border-color: #4b5563;\n  background: #111827;\n}\n:host-context(.dark) .check-card--selected {\n  border-color: #60a5fa;\n  box-shadow: inset 0 0 0 1px #1d4ed8;\n}\n:host-context(.dark) .criminal-check-catalog__intro h4,\n:host-context(.dark) .check-scope__header h5,\n:host-context(.dark) .check-card__copy strong {\n  color: #f9fafb;\n}\n:host-context(.dark) .criminal-check-catalog__intro p,\n:host-context(.dark) .check-scope__header p,\n:host-context(.dark) .check-card__copy small {\n  color: #9ca3af;\n}\n:host-context(.dark) .check-scope__badge,\n:host-context(.dark) .check-scope__empty {\n  background: #374151;\n  color: #d1d5db;\n}\n:host-context(.dark) .check-scope__badge--floating {\n  border-color: #1d4ed8;\n  background: #111827;\n  color: #bfdbfe;\n}\n:host-context(.dark) .check-card__source {\n  background: #1e3a8a;\n  color: #dbeafe;\n}\n:host-context(.dark) button.check-card__source:hover,\n:host-context(.dark) button.check-card__source:focus-visible {\n  background: #1d4ed8;\n  outline-color: #93c5fd;\n}\n:host-context(.dark) .validation-summary {\n  background: rgba(127, 29, 29, 0.35);\n  color: #fecaca;\n}\n:host-context(.dark) ::ng-deep .document-editor [id^=doc-country-] {\n  border-color: #374151 !important;\n  background: #1f2937 !important;\n}\n@media (max-width: 720px) {\n  .documents-intro {\n    margin-bottom: 1.5rem;\n  }\n  .documents-timeline::before {\n    display: none;\n  }\n  .documents-stage {\n    display: block;\n  }\n  .documents-stage__marker {\n    margin: 0 0 -0.7rem 1rem;\n  }\n  .documents-panel__header {\n    padding-top: 1.7rem;\n  }\n  .requirement-options,\n  .method-options,\n  .screening-options,\n  .check-card-grid,\n  .check-scope__header,\n  .policy-section--attempts {\n    grid-template-columns: 1fr;\n  }\n  .criminal-check-catalog__intro {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .criminal-check-catalog__intro p {\n    text-align: left;\n  }\n  .check-scope__header p {\n    text-align: left;\n  }\n  .documents-panel__header,\n  .setting-row {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=documents.component.css.map */\n'] }]
  }], null, { form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }], localApiDialog: [{
    type: ViewChild,
    args: ["localApiDialog"]
  }], checkDetailsDialog: [{
    type: ViewChild,
    args: ["checkDetailsDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupDocumentsComponent, { className: "SetupDocumentsComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/documents/documents.component.ts", lineNumber: 89 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/integrations/integrations.component.ts
var _c03 = (a0) => ({ url: a0 });
var _forTrack02 = ($index, $item) => $item._id;
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon", 17);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const redirectCtrl_r2 = \u0275\u0275readContextLet(1);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (redirectCtrl_r2 == null ? null : redirectCtrl_r2.invalid) && (redirectCtrl_r2 == null ? null : redirectCtrl_r2.touched) ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200" : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200");
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", t_r3("smartEnrollProjects.setup.integrations.redirect.exampleUrl", \u0275\u0275pureFunction1(2, _c03, ctx_r3.exampleRedirectUrl)), \u0275\u0275sanitizeHtml);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.required"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.invalid"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275template(1, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_1_Template, 1, 1)(2, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const redirectCtrl_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275conditional((redirectCtrl_r2 == null ? null : redirectCtrl_r2.hasError("required")) ? 1 : (redirectCtrl_r2 == null ? null : redirectCtrl_r2.hasError("pattern")) ? 2 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r5 = ctx.$implicit;
    \u0275\u0275property("value", w_r5._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r5.name || w_r5._id);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 17);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openWebhookSettings());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.noWebhooksMessage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.createWebhook"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.apiUrlRequired"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.invalidUrl"), " ");
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275template(1, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_1_Template, 1, 1)(2, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const apiUrlCtrl_r8 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance();
    \u0275\u0275conditional((apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.hasError("required")) ? 1 : (apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.hasError("pattern")) ? 2 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 39);
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-form-field", 6)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_5_Template, 3, 1, "p", 30);
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "mat-form-field", 32)(10, "mat-label");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 33)(13, "mat-option", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "mat-form-field", 36)(18, "mat-label");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.callTestApi());
    });
    \u0275\u0275template(22, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Conditional_22_Template, 1, 0, "mat-spinner", 39);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 40)(25, "div", 41)(26, "p", 42);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "pre", 43);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 41)(32, "p", 42);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(34);
    \u0275\u0275elementStart(35, "pre", 44);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "json");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    \u0275\u0275nextContext();
    const apiUrlCtrl_r8 = \u0275\u0275readContextLet(3);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.apiUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.invalid) && (apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.touched) ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.testApiDescription"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.testType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.testValue"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(apiUrlCtrl_r8 == null ? null : apiUrlCtrl_r8.value) || !(ctx_r3.integrationsFormGroup == null ? null : (tmp_14_0 = ctx_r3.integrationsFormGroup.get("apiTestType")) == null ? null : tmp_14_0.value) || !(ctx_r3.integrationsFormGroup == null ? null : (tmp_14_0 = ctx_r3.integrationsFormGroup.get("apiTestValue")) == null ? null : tmp_14_0.value) || ctx_r3.sendingTestApi);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.sendingTestApi ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.test"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.expectedResponse"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 15, ctx_r3.expectedResponse));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.receivedResponse"), " ");
    const hasError_r9 = (ctx_r3.receivedResponse == null ? null : ctx_r3.receivedResponse.error) || (ctx_r3.receivedResponse == null ? null : ctx_r3.receivedResponse.ok) === false;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", hasError_r9 ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200" : "border-stone-200 bg-stone-100 text-stone-800 dark:border-gray-700 dark:bg-gray-800 dark:text-stone-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 17, ctx_r3.receivedResponse));
  }
}
function SetupIntegrationsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275declareLet(1)(2)(3);
    \u0275\u0275elementStart(4, "section", 3)(5, "header")(6, "h2", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_14_Template, 4, 4, "div", 8)(15, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_15_Template, 3, 1, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "section", 10)(17, "header")(18, "h2", 4);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 5);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 11)(23, "mat-form-field", 12)(24, "mat-label");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-select", 13)(27, "mat-option", 14);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, SetupIntegrationsComponent_ng_container_0_div_1_For_30_Template, 2, 2, "mat-option", 14, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_31_Template, 1, 0, "mat-spinner", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 16);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.refreshWebhooks());
    });
    \u0275\u0275elementStart(33, "mat-icon", 17);
    \u0275\u0275text(34, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 18);
    \u0275\u0275listener("click", function SetupIntegrationsComponent_ng_container_0_div_1_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openWebhookSettings());
    });
    \u0275\u0275elementStart(37, "mat-icon", 17);
    \u0275\u0275text(38, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_40_Template, 7, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "section", 3)(42, "header")(43, "h2", 4);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 5);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-radio-group", 20)(48, "mat-radio-button", 21);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-radio-button", 22);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 23)(53, "mat-icon", 17);
    \u0275\u0275text(54, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, SetupIntegrationsComponent_ng_container_0_div_1_Conditional_56_Template, 38, 19, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    const redirectCtrl_r10 = \u0275\u0275storeLet(ctx_r3.integrationsFormGroup == null ? null : ctx_r3.integrationsFormGroup.get("redirectUrl"));
    const sourceCtrl_r11 = ctx_r3.integrationsFormGroup == null ? null : ctx_r3.integrationsFormGroup.get("source");
    \u0275\u0275advance(2);
    \u0275\u0275storeLet(ctx_r3.integrationsFormGroup == null ? null : ctx_r3.integrationsFormGroup.get("apiUrl"));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !((redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched)))("dark:border-gray-700", !((redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched)))("border-red-500", (redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched));
    \u0275\u0275property("formGroup", ctx_r3.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.redirect.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.redirect.url"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((redirectCtrl_r10 == null ? null : redirectCtrl_r10.value) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((redirectCtrl_r10 == null ? null : redirectCtrl_r10.invalid) && (redirectCtrl_r10 == null ? null : redirectCtrl_r10.touched) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.webhook.select"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.webhook.none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.webhooks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.refreshingWebhooks ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.refreshingWebhooks);
    \u0275\u0275advance();
    \u0275\u0275classProp("animate-spin", ctx_r3.refreshingWebhooks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.refresh"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.webhook.manage"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.refreshingWebhooks && ctx_r3.webhooks.length === 0 ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(sourceCtrl_r11 == null ? null : sourceCtrl_r11.errors))("dark:border-gray-700", !(sourceCtrl_r11 == null ? null : sourceCtrl_r11.errors))("border-red-500", sourceCtrl_r11 == null ? null : sourceCtrl_r11.errors);
    \u0275\u0275property("formGroup", ctx_r3.integrationsFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.integrations.source.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.none"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.integrations.source.api"));
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", t_r3("smartEnrollProjects.setup.integrations.source.help"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional((sourceCtrl_r11 == null ? null : sourceCtrl_r11.value) === "API" ? 56 : -1);
  }
}
function SetupIntegrationsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupIntegrationsComponent_ng_container_0_div_1_Template, 57, 40, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isFormReady);
  }
}
var SetupIntegrationsComponent = class _SetupIntegrationsComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._setup = inject(SetupService);
    this._transloco = inject(TranslocoService);
    this.receivedResponse = {};
    this.refreshingWebhooks = false;
    this.sendingTestApi = false;
    this.webhooks = [];
    this.expectedResponse = {
      countryCode: "+57",
      name: "Mark",
      phone: "1234567890"
    };
  }
  ngOnInit() {
    this._requestWebhooks();
  }
  get exampleRedirectUrl() {
    return `${this.form?.get("projectFlow.integrations.redirectUrl")?.value || ""}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;
  }
  get integrationsFormGroup() {
    return this.form?.get("projectFlow.integrations") || null;
  }
  get isFormReady() {
    return !this.loading && !!this.integrationsFormGroup;
  }
  _requestWebhooks() {
    if (this.refreshingWebhooks)
      return;
    this.refreshingWebhooks = true;
    this.integrationsFormGroup?.get("webhook")?.disable();
    this._setup.listWebhooks().subscribe({
      next: (response) => {
        this.webhooks = response.data || [];
        this.refreshingWebhooks = false;
        if (this.webhooks.length)
          this.integrationsFormGroup?.get("webhook")?.enable();
        else
          this.integrationsFormGroup?.get("webhook")?.setValue(null);
        this._cdr.markForCheck();
      },
      error: () => {
        this.refreshingWebhooks = false;
        if (this.webhooks.length)
          this.integrationsFormGroup?.get("webhook")?.enable();
        else
          this.integrationsFormGroup?.get("webhook")?.setValue(null);
        this._cdr.markForCheck();
      }
    });
  }
  callTestApi() {
    if (this.sendingTestApi)
      return;
    const apiTestType = this.integrationsFormGroup?.get("apiTestType")?.value;
    const apiTestValue = this.integrationsFormGroup?.get("apiTestValue")?.value;
    const apiUrl = this.integrationsFormGroup?.get("apiUrl")?.value;
    if (!apiTestType || !apiTestValue) {
      this._snack.open(this._transloco.translate("smartEnrollProjects.setup.integrations.source.missingTestInputs"), this._transloco.translate("close"), { duration: 3e3 });
      return;
    }
    if (!apiUrl || !STRICT_URL_PATTERN.test(apiUrl)) {
      this._snack.open(this._transloco.translate("smartEnrollProjects.setup.integrations.source.invalidTestUrl"), this._transloco.translate("close"), { duration: 3e3 });
      return;
    }
    this.sendingTestApi = true;
    this.integrationsFormGroup?.get("apiTestType")?.disable();
    this.integrationsFormGroup?.get("apiTestValue")?.disable();
    this.integrationsFormGroup?.get("apiUrl")?.disable();
    this._setup.testApi(apiUrl, apiTestType, apiTestValue).subscribe({
      next: (response) => {
        this.receivedResponse = response?.data || response || {};
        this.sendingTestApi = false;
        this.integrationsFormGroup?.get("apiTestType")?.enable();
        this.integrationsFormGroup?.get("apiTestValue")?.enable();
        this.integrationsFormGroup?.get("apiUrl")?.enable();
        this._cdr.markForCheck();
      },
      error: (error) => {
        this.sendingTestApi = false;
        this.integrationsFormGroup?.get("apiTestType")?.enable();
        this.integrationsFormGroup?.get("apiTestValue")?.enable();
        this.integrationsFormGroup?.get("apiUrl")?.enable();
        this.receivedResponse = {
          error: error?.error?.message,
          name: error?.name || "",
          ok: false,
          status: error?.status || 0,
          statusText: error?.statusText || ""
        };
        this._cdr.markForCheck();
      }
    });
  }
  refreshWebhooks() {
    this._requestWebhooks();
  }
  openWebhookSettings() {
    window.open("/smart-monitor/webhooks", "_blank");
  }
  static {
    this.\u0275fac = function SetupIntegrationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupIntegrationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupIntegrationsComponent, selectors: [["setup-integrations"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40", 3, "formGroup"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "type", "url", "formControlName", "redirectUrl", "placeholder", "https://", "required", ""], [1, "flex", "items-start", "gap-2", "rounded-xl", "border", "p-3", "text-sm", 3, "ngClass"], [1, "text-sm", "text-red-600", "dark:text-red-400"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "flex", "flex-wrap", "items-start", "gap-3"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[18rem]", "flex-1"], ["formControlName", "webhook"], [3, "value"], ["matSuffix", "", "diameter", "16"], ["mat-stroked-button", "", "type", "button", 1, "!h-14", "rounded-xl", 3, "click", "disabled"], [1, "!h-4", "!w-4"], ["mat-stroked-button", "", "type", "button", 1, "!h-14", "rounded-xl", 3, "click"], [1, "flex", "items-start", "gap-2", "rounded-xl", "border", "border-blue-200", "bg-blue-50", "p-3", "text-sm", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], ["formControlName", "source", 1, "flex", "flex-wrap", "gap-4"], ["value", "NONE"], ["value", "API"], [1, "flex", "items-start", "gap-2", "rounded-xl", "bg-stone-100", "p-3", "text-xs", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "flex-1", 3, "innerHTML"], [1, "flex", "flex-col", "gap-4"], [1, "break-all", 3, "innerHTML"], [1, "flex-1"], ["type", "button", 1, "ml-1", "font-semibold", "underline", "underline-offset-2", "hover:text-blue-800", "dark:hover:text-blue-100", 3, "click"], ["matInput", "", "type", "url", "formControlName", "apiUrl", "placeholder", "https://", "required", ""], [1, "-mt-2", "text-sm", "text-red-600", "dark:text-red-400"], [1, "m-0", "text-xs", "text-stone-500", "dark:text-stone-400"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[10rem]", "flex-1"], ["formControlName", "apiTestType"], ["value", "email"], ["value", "phone"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[14rem]", "flex-1"], ["matInput", "", "formControlName", "apiTestValue"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!h-14", "rounded-xl", 3, "click", "disabled"], ["diameter", "16", 1, "mr-2", "inline-block"], [1, "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [1, "flex", "flex-col", "gap-2"], [1, "m-0", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "overflow-auto", "rounded-xl", "bg-stone-100", "px-3", "py-2", "text-xs", "text-stone-800", "dark:bg-gray-800", "dark:text-stone-100"], [1, "overflow-auto", "rounded-xl", "border", "px-3", "py-2", "text-xs", 3, "ngClass"]], template: function SetupIntegrationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupIntegrationsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      JsonPipe,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupIntegrationsComponent, [{
    type: Component,
    args: [{ selector: "setup-integrations", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatSelectModule,
      MatSnackBarModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">\r
        @let redirectCtrl = integrationsFormGroup?.get('redirectUrl');\r
        @let sourceCtrl = integrationsFormGroup?.get('source');\r
        @let apiUrlCtrl = integrationsFormGroup?.get('apiUrl');\r
\r
        <!-- 1. Redirect URL -->\r
        <section\r
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
            [class.border-stone-200]="!(redirectCtrl?.invalid && redirectCtrl?.touched)"\r
            [class.dark:border-gray-700]="!(redirectCtrl?.invalid && redirectCtrl?.touched)"\r
            [class.border-red-500]="redirectCtrl?.invalid && redirectCtrl?.touched"\r
            [formGroup]="integrationsFormGroup!"\r
        >\r
            <header>\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.integrations.redirect.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.integrations.redirect.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                <mat-label>{{ t('smartEnrollProjects.setup.integrations.redirect.url') }}</mat-label>\r
                <input matInput type="url" formControlName="redirectUrl" placeholder="https://" required />\r
            </mat-form-field>\r
\r
            @if (redirectCtrl?.value) {\r
                <div\r
                    class="flex items-start gap-2 rounded-xl border p-3 text-sm"\r
                    [ngClass]="\r
                        (redirectCtrl?.invalid && redirectCtrl?.touched)\r
                            ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200'\r
                            : 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200'\r
                    "\r
                >\r
                    <mat-icon class="!h-4 !w-4">info</mat-icon>\r
                    <span\r
                        class="break-all"\r
                        [innerHTML]="t('smartEnrollProjects.setup.integrations.redirect.exampleUrl', { url: exampleRedirectUrl })"\r
                    ></span>\r
                </div>\r
            }\r
\r
            @if (redirectCtrl?.invalid && redirectCtrl?.touched) {\r
                <p class="text-sm text-red-600 dark:text-red-400">\r
                    @if (redirectCtrl?.hasError('required')) {\r
                        {{ t('smartEnrollProjects.setup.integrations.redirect.required') }}\r
                    } @else if (redirectCtrl?.hasError('pattern')) {\r
                        {{ t('smartEnrollProjects.setup.integrations.redirect.invalid') }}\r
                    }\r
                </p>\r
            }\r
        </section>\r
\r
        <!-- 2. Webhook -->\r
        <section\r
            class="flex flex-col gap-4 rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
            [formGroup]="integrationsFormGroup!"\r
        >\r
            <header>\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.integrations.webhook.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.integrations.webhook.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <div class="flex flex-wrap items-start gap-3">\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[18rem] flex-1">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.integrations.webhook.select') }}</mat-label>\r
                    <mat-select formControlName="webhook">\r
                        <mat-option [value]="null">{{ t('smartEnrollProjects.setup.integrations.webhook.none') }}</mat-option>\r
                        @for (w of webhooks; track w._id) {\r
                            <mat-option [value]="w._id">{{ w.name || w._id }}</mat-option>\r
                        }\r
                    </mat-select>\r
                    @if (refreshingWebhooks) {\r
                        <mat-spinner matSuffix diameter="16"></mat-spinner>\r
                    }\r
                </mat-form-field>\r
\r
                <button\r
                    mat-stroked-button\r
                    type="button"\r
                    class="!h-14 rounded-xl"\r
                    (click)="refreshWebhooks()"\r
                    [disabled]="refreshingWebhooks"\r
                >\r
                    <mat-icon class="!h-4 !w-4" [class.animate-spin]="refreshingWebhooks">refresh</mat-icon>\r
                    {{ t('smartEnrollProjects.setup.integrations.webhook.refresh') }}\r
                </button>\r
                <button\r
                    mat-stroked-button\r
                    type="button"\r
                    class="!h-14 rounded-xl"\r
                    (click)="openWebhookSettings()"\r
                >\r
                    <mat-icon class="!h-4 !w-4">open_in_new</mat-icon>\r
                    {{ t('smartEnrollProjects.setup.integrations.webhook.manage') }}\r
                </button>\r
            </div>\r
\r
            @if (!refreshingWebhooks && webhooks.length === 0) {\r
                <div\r
                    class="flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200"\r
                >\r
                    <mat-icon class="!h-4 !w-4">info</mat-icon>\r
                    <span class="flex-1">\r
                        {{ t('smartEnrollProjects.setup.integrations.webhook.noWebhooksMessage') }}\r
                        <button\r
                            type="button"\r
                            class="ml-1 font-semibold underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-100"\r
                            (click)="openWebhookSettings()"\r
                        >\r
                            {{ t('smartEnrollProjects.setup.integrations.webhook.createWebhook') }}\r
                        </button>\r
                    </span>\r
                </div>\r
            }\r
        </section>\r
\r
        <!-- 3. Source (allow / deny list) -->\r
        <section\r
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
            [class.border-stone-200]="!sourceCtrl?.errors"\r
            [class.dark:border-gray-700]="!sourceCtrl?.errors"\r
            [class.border-red-500]="sourceCtrl?.errors"\r
            [formGroup]="integrationsFormGroup!"\r
        >\r
            <header>\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.integrations.source.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.integrations.source.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <mat-radio-group formControlName="source" class="flex flex-wrap gap-4">\r
                <mat-radio-button value="NONE">{{ t('smartEnrollProjects.setup.integrations.source.none') }}</mat-radio-button>\r
                <mat-radio-button value="API">{{ t('smartEnrollProjects.setup.integrations.source.api') }}</mat-radio-button>\r
            </mat-radio-group>\r
\r
            <div\r
                class="flex items-start gap-2 rounded-xl bg-stone-100 p-3 text-xs text-stone-600 dark:bg-gray-800 dark:text-stone-300"\r
            >\r
                <mat-icon class="!h-4 !w-4">info</mat-icon>\r
                <span class="flex-1" [innerHTML]="t('smartEnrollProjects.setup.integrations.source.help')"></span>\r
            </div>\r
\r
            @if (sourceCtrl?.value === 'API') {\r
                <div class="flex flex-col gap-4">\r
                    <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                        <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.apiUrl') }}</mat-label>\r
                        <input matInput type="url" formControlName="apiUrl" placeholder="https://" required />\r
                    </mat-form-field>\r
                    @if (apiUrlCtrl?.invalid && apiUrlCtrl?.touched) {\r
                        <p class="-mt-2 text-sm text-red-600 dark:text-red-400">\r
                            @if (apiUrlCtrl?.hasError('required')) {\r
                                {{ t('smartEnrollProjects.setup.integrations.source.apiUrlRequired') }}\r
                            } @else if (apiUrlCtrl?.hasError('pattern')) {\r
                                {{ t('smartEnrollProjects.setup.integrations.source.invalidUrl') }}\r
                            }\r
                        </p>\r
                    }\r
\r
                    <p class="m-0 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.integrations.source.testApiDescription') }}\r
                    </p>\r
\r
                    <div class="flex flex-wrap items-start gap-3">\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[10rem] flex-1">\r
                            <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.testType') }}</mat-label>\r
                            <mat-select formControlName="apiTestType">\r
                                <mat-option value="email">{{ t('smartEnrollProjects.setup.integrations.source.email') }}</mat-option>\r
                                <mat-option value="phone">{{ t('smartEnrollProjects.setup.integrations.source.phone') }}</mat-option>\r
                            </mat-select>\r
                        </mat-form-field>\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[14rem] flex-1">\r
                            <mat-label>{{ t('smartEnrollProjects.setup.integrations.source.testValue') }}</mat-label>\r
                            <input matInput formControlName="apiTestValue" />\r
                        </mat-form-field>\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="button"\r
                            class="!h-14 rounded-xl"\r
                            [disabled]="\r
                                !apiUrlCtrl?.value ||\r
                                !integrationsFormGroup?.get('apiTestType')?.value ||\r
                                !integrationsFormGroup?.get('apiTestValue')?.value ||\r
                                sendingTestApi\r
                            "\r
                            (click)="callTestApi()"\r
                        >\r
                            @if (sendingTestApi) {\r
                                <mat-spinner diameter="16" class="mr-2 inline-block"></mat-spinner>\r
                            }\r
                            {{ t('smartEnrollProjects.setup.integrations.source.test') }}\r
                        </button>\r
                    </div>\r
\r
                    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">\r
                        <div class="flex flex-col gap-2">\r
                            <p class="m-0 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.setup.integrations.source.expectedResponse') }}\r
                            </p>\r
                            <pre\r
                                class="overflow-auto rounded-xl bg-stone-100 px-3 py-2 text-xs text-stone-800 dark:bg-gray-800 dark:text-stone-100"\r
                            >{{ expectedResponse | json }}</pre>\r
                        </div>\r
                        <div class="flex flex-col gap-2">\r
                            <p class="m-0 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.setup.integrations.source.receivedResponse') }}\r
                            </p>\r
                            @let hasError = (receivedResponse?.error || receivedResponse?.ok === false);\r
                            <pre\r
                                class="overflow-auto rounded-xl border px-3 py-2 text-xs"\r
                                [ngClass]="\r
                                    hasError\r
                                        ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200'\r
                                        : 'border-stone-200 bg-stone-100 text-stone-800 dark:border-gray-700 dark:bg-gray-800 dark:text-stone-100'\r
                                "\r
                            >{{ receivedResponse | json }}</pre>\r
                        </div>\r
                    </div>\r
                </div>\r
            }\r
        </section>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupIntegrationsComponent, { className: "SetupIntegrationsComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/integrations/integrations.component.ts", lineNumber: 40 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/liveness/liveness.component.ts
var _c04 = () => [1, 2, 3, 4, 5];
var _c13 = (a0) => ({ count: a0 });
function SetupLivenessComponent_ng_container_0_div_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "header", 24)(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-button-toggle-group", 25)(7, "mat-button-toggle", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-button-toggle", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.livenessStepFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r1.stepFormControlName)("hideSingleSelectionIndicator", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.skip"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.requirementHelp"), " ");
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon", 30);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.liveness.thresholds.searchWarn"));
  }
}
function SetupLivenessComponent_ng_container_0_div_1_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r3 === 1 ? t_r1("smartEnrollProjects.setup.documents.attempts.one") : t_r1("smartEnrollProjects.setup.documents.attempts.many", \u0275\u0275pureFunction1(2, _c13, n_r3)), " ");
  }
}
function SetupLivenessComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, SetupLivenessComponent_ng_container_0_div_1_Conditional_1_Template, 15, 9, "section", 3);
    \u0275\u0275elementContainerStart(2, 4);
    \u0275\u0275elementStart(3, "section", 5)(4, "header")(5, "h2", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-slider", 11);
    \u0275\u0275element(15, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "section", 5)(19, "header")(20, "h2", 6);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 7);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 8)(25, "span", 9);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 10);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-slider", 14);
    \u0275\u0275element(30, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 13);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "section", 5)(34, "header")(35, "h2", 6);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 7);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 8)(40, "span", 9);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 10);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-slider", 16);
    \u0275\u0275element(45, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, SetupLivenessComponent_ng_container_0_div_1_Conditional_46_Template, 5, 1, "div", 18);
    \u0275\u0275elementStart(47, "p", 13);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "section", 19)(50, "header", 20)(51, "div")(52, "h2", 6);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 7);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "mat-form-field", 21)(57, "mat-label");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-select", 22);
    \u0275\u0275repeaterCreate(60, SetupLivenessComponent_ng_container_0_div_1_For_61_Template, 2, 4, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.subForm && ctx_r1.livenessStepFormGroup ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.livenessFormGroup);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_5_0 = ctx_r1.livenessFormGroup.get("minScore")) == null ? null : tmp_5_0.errors))("dark:border-gray-700", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_6_0 = ctx_r1.livenessFormGroup.get("minScore")) == null ? null : tmp_6_0.errors))("border-red-500", !ctx_r1.isNotRequired && (ctx_r1.livenessFormGroup == null ? null : (tmp_7_0 = ctx_r1.livenessFormGroup.get("minScore")) == null ? null : tmp_7_0.errors))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.minScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.minScoreSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.minScoreDisplayValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.actualScore"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.minScoreHelp"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_15_0 = ctx_r1.livenessFormGroup.get("compareMinScore")) == null ? null : tmp_15_0.errors))("dark:border-gray-700", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_16_0 = ctx_r1.livenessFormGroup.get("compareMinScore")) == null ? null : tmp_16_0.errors))("border-red-500", !ctx_r1.isNotRequired && (ctx_r1.livenessFormGroup == null ? null : (tmp_17_0 = ctx_r1.livenessFormGroup.get("compareMinScore")) == null ? null : tmp_17_0.errors))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.compareMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.compareMinScoreSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.compareMinScoreDisplayValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.actualScore"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.compareMinScoreHelp"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_25_0 = ctx_r1.livenessFormGroup.get("searchMinScore")) == null ? null : tmp_25_0.errors))("dark:border-gray-700", ctx_r1.isNotRequired || !(ctx_r1.livenessFormGroup == null ? null : (tmp_26_0 = ctx_r1.livenessFormGroup.get("searchMinScore")) == null ? null : tmp_26_0.errors))("border-red-500", !ctx_r1.isNotRequired && (ctx_r1.livenessFormGroup == null ? null : (tmp_27_0 = ctx_r1.livenessFormGroup.get("searchMinScore")) == null ? null : tmp_27_0.errors))("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMinScoreSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.searchMinScoreDisplayValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.actualScore"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isSearchMinScoreWarn ? 46 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.liveness.thresholds.searchMinScoreHelp"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r1.isNotRequired)("pointer-events-none", ctx_r1.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.documents.attempts.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.documents.attempts.limit"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(55, _c04));
  }
}
function SetupLivenessComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupLivenessComponent_ng_container_0_div_1_Template, 62, 56, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormReady);
  }
}
var SetupLivenessComponent = class _SetupLivenessComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "liveness";
    this._kycEnsured = false;
  }
  ngOnInit() {
    if (this.isFormReady)
      this._ensureKycTypeControl();
  }
  ngOnChanges(changes) {
    if ((changes["form"] || changes["formGroup"] || changes["loading"]) && this.isFormReady) {
      if (changes["form"] || changes["formGroup"])
        this._kycEnsured = false;
      this._ensureKycTypeControl();
    }
  }
  _ensureKycTypeControl() {
    if (this._kycEnsured)
      return;
    const grp = this.livenessFormGroup;
    if (!grp)
      return;
    this._kycEnsured = true;
    let ctrl = grp.get("kycType");
    if (!ctrl) {
      grp.addControl("kycType", new FormControl("traditional"));
      return;
    }
    if (ctrl.value !== "traditional")
      ctrl.setValue("traditional", { emitEvent: false });
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.livenessFormGroup && !!this.livenessStepFormGroup;
  }
  get livenessFormGroup() {
    return this.formGroup || null;
  }
  get livenessStepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get livenessStepValue() {
    const v = this.livenessStepFormGroup?.get(this.stepFormControlName)?.value;
    return v != null && v !== "" ? String(v) : null;
  }
  get isLivenessEnabled() {
    return this.livenessStepValue !== null && this.livenessStepValue !== "skip";
  }
  get isNotRequired() {
    return this.livenessStepValue === "skip";
  }
  get isSearchMinScoreWarn() {
    const v = this.livenessFormGroup?.get("searchMinScore")?.value;
    return v != null && v < 0.8;
  }
  get minScoreDisplayValue() {
    return `${Math.floor((this.livenessFormGroup?.get("minScore")?.value || 0) * 100)}%`;
  }
  get searchMinScoreDisplayValue() {
    return `${Math.floor((this.livenessFormGroup?.get("searchMinScore")?.value || 0) * 100)}%`;
  }
  get compareMinScoreDisplayValue() {
    return `${Math.floor((this.livenessFormGroup?.get("compareMinScore")?.value || 0) * 100)}%`;
  }
  get selectedKycType() {
    return this.livenessFormGroup?.get("kycType")?.value || null;
  }
  get isTraditionalKyc() {
    return this.selectedKycType === "traditional";
  }
  get isZeroKnowledgeKyc() {
    return this.selectedKycType === "zero_knowledge";
  }
  static {
    this.\u0275fac = function SetupLivenessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupLivenessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupLivenessComponent, selectors: [["setup-liveness"]], inputs: { form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [3, "formGroup"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-end", "justify-center", "gap-2"], [1, "text-4xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "pb-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["min", "0.52", "max", "0.9", "step", "0.01", "discrete", "", 1, "!w-full"], ["matSliderThumb", "", "formControlName", "minScore"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], ["min", "0.65", "max", "0.95", "step", "0.01", "discrete", "", 1, "!w-full"], ["matSliderThumb", "", "formControlName", "compareMinScore"], ["min", "0.81", "max", "0.95", "step", "0.01", "discrete", "", 1, "!w-full"], ["matSliderThumb", "", "formControlName", "searchMinScore"], [1, "flex", "items-start", "gap-2", "rounded-xl", "border", "border-amber-200", "bg-amber-50", "p-3", "text-sm", "text-amber-800", "dark:border-amber-900", "dark:bg-amber-950/40", "dark:text-amber-200"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-4"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-[12rem]"], ["formControlName", "attemptLimit", "required", ""], [3, "value"], [1, "mb-4"], [1, "!rounded-xl", 3, "formControlName", "hideSingleSelectionIndicator"], ["value", "skip"], ["value", "optional"], ["value", "mandatory"], [1, "mt-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "!h-4", "!w-4"]], template: function SetupLivenessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupLivenessComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupLivenessComponent, [{
    type: Component,
    args: [{ selector: "setup-liveness", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSliderModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">\r
        <!-- 1. Step requirement (hidden when used as a representative sub-form) -->\r
        @if (!subForm && livenessStepFormGroup) {\r
            <section\r
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                [formGroup]="livenessStepFormGroup"\r
            >\r
                <header class="mb-4">\r
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ t('smartEnrollProjects.setup.liveness.title') }}\r
                    </h2>\r
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.liveness.subtitle') }}\r
                    </p>\r
                </header>\r
                <mat-button-toggle-group\r
                    [formControlName]="stepFormControlName"\r
                    class="!rounded-xl"\r
                    [hideSingleSelectionIndicator]="true"\r
                >\r
                    <mat-button-toggle value="skip">{{ t('smartEnrollProjects.setup.documents.skip') }}</mat-button-toggle>\r
                    <mat-button-toggle value="optional">{{ t('smartEnrollProjects.setup.documents.optional') }}</mat-button-toggle>\r
                    <mat-button-toggle value="mandatory">{{ t('smartEnrollProjects.setup.documents.required') }}</mat-button-toggle>\r
                </mat-button-toggle-group>\r
                <p class="mt-3 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.liveness.requirementHelp') }}\r
                </p>\r
            </section>\r
        }\r
\r
        <ng-container [formGroup]="livenessFormGroup!">\r
            <!-- 3. Liveness score -->\r
            <section\r
                class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
                [class.border-stone-200]="isNotRequired || !livenessFormGroup?.get('minScore')?.errors"\r
                [class.dark:border-gray-700]="isNotRequired || !livenessFormGroup?.get('minScore')?.errors"\r
                [class.border-red-500]="!isNotRequired && livenessFormGroup?.get('minScore')?.errors"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header>\r
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.minScore') }}\r
                    </h2>\r
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.minScoreSubtitle') }}\r
                    </p>\r
                </header>\r
\r
                <div class="flex items-end justify-center gap-2">\r
                    <span class="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ minScoreDisplayValue }}\r
                    </span>\r
                    <span class="pb-1 text-sm text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.liveness.actualScore') }}\r
                    </span>\r
                </div>\r
\r
                <mat-slider min="0.52" max="0.9" step="0.01" discrete class="!w-full">\r
                    <input matSliderThumb formControlName="minScore" />\r
                </mat-slider>\r
\r
                <p class="text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.liveness.thresholds.minScoreHelp') }}\r
                </p>\r
            </section>\r
\r
            <!-- 4. Compare score -->\r
            <section\r
                class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
                [class.border-stone-200]="isNotRequired || !livenessFormGroup?.get('compareMinScore')?.errors"\r
                [class.dark:border-gray-700]="isNotRequired || !livenessFormGroup?.get('compareMinScore')?.errors"\r
                [class.border-red-500]="!isNotRequired && livenessFormGroup?.get('compareMinScore')?.errors"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header>\r
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScore') }}\r
                    </h2>\r
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScoreSubtitle') }}\r
                    </p>\r
                </header>\r
\r
                <div class="flex items-end justify-center gap-2">\r
                    <span class="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ compareMinScoreDisplayValue }}\r
                    </span>\r
                    <span class="pb-1 text-sm text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.liveness.actualScore') }}\r
                    </span>\r
                </div>\r
\r
                <mat-slider min="0.65" max="0.95" step="0.01" discrete class="!w-full">\r
                    <input matSliderThumb formControlName="compareMinScore" />\r
                </mat-slider>\r
\r
                <p class="text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScoreHelp') }}\r
                </p>\r
            </section>\r
\r
            <!-- 5. Search score -->\r
            <section\r
                class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
                [class.border-stone-200]="isNotRequired || !livenessFormGroup?.get('searchMinScore')?.errors"\r
                [class.dark:border-gray-700]="isNotRequired || !livenessFormGroup?.get('searchMinScore')?.errors"\r
                [class.border-red-500]="!isNotRequired && livenessFormGroup?.get('searchMinScore')?.errors"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header>\r
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScore') }}\r
                    </h2>\r
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScoreSubtitle') }}\r
                    </p>\r
                </header>\r
\r
                <div class="flex items-end justify-center gap-2">\r
                    <span class="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ searchMinScoreDisplayValue }}\r
                    </span>\r
                    <span class="pb-1 text-sm text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.liveness.actualScore') }}\r
                    </span>\r
                </div>\r
\r
                <mat-slider min="0.81" max="0.95" step="0.01" discrete class="!w-full">\r
                    <input matSliderThumb formControlName="searchMinScore" />\r
                </mat-slider>\r
\r
                @if (isSearchMinScoreWarn) {\r
                    <div\r
                        class="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200"\r
                    >\r
                        <mat-icon class="!h-4 !w-4">warning</mat-icon>\r
                        <span>{{ t('smartEnrollProjects.setup.liveness.thresholds.searchWarn') }}</span>\r
                    </div>\r
                }\r
\r
                <p class="text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScoreHelp') }}\r
                </p>\r
            </section>\r
\r
            <!-- 6. Attempt limit -->\r
            <section\r
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header class="mb-4 flex items-start justify-between gap-4">\r
                    <div>\r
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                            {{ t('smartEnrollProjects.setup.documents.attempts.title') }}\r
                        </h2>\r
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.setup.documents.attempts.subtitle') }}\r
                        </p>\r
                    </div>\r
                    <mat-form-field appearance="outline" subscriptSizing="dynamic" class="min-w-[12rem]">\r
                        <mat-label>{{ t('smartEnrollProjects.setup.documents.attempts.limit') }}</mat-label>\r
                        <mat-select formControlName="attemptLimit" required>\r
                            @for (n of [1, 2, 3, 4, 5]; track n) {\r
                                <mat-option [value]="n">\r
                                    {{\r
                                        n === 1\r
                                            ? t('smartEnrollProjects.setup.documents.attempts.one')\r
                                            : t('smartEnrollProjects.setup.documents.attempts.many', { count: n })\r
                                    }}\r
                                </mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
                </header>\r
            </section>\r
        </ng-container>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupLivenessComponent, { className: "SetupLivenessComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/liveness/liveness.component.ts", lineNumber: 35 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/sign-up-form/sign-up-form.component.ts
var _c05 = ["countryCodeSearchInput"];
var _forTrack03 = ($index, $item) => $item.value;
function SetupSignUpFormComponent_ng_container_0_form_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "header", 6)(2, "h2", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-button-toggle-group", 9)(7, "mat-button-toggle", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("hideSingleSelectionIndicator", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.personal"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.target.business"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 14)(1, "mat-radio-button", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.fullName.separate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.fullName.together"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 15)(1, "mat-radio-button", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-button", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.nameNumber"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.nameOnly"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_button_23_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.clearCountryCodeSearch($event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 44);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 42)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.name);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 21)(2, "mat-checkbox", 32);
    \u0275\u0275listener("change", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_mat_checkbox_change_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onPhoneChannelChange("whatsapp", $event.checked));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-checkbox", 32);
    \u0275\u0275listener("change", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_mat_checkbox_change_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onPhoneChannelChange("sms", $event.checked));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-checkbox", 32);
    \u0275\u0275listener("change", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_mat_checkbox_change_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onPhoneChannelChange("none", $event.checked));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "label", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 34)(12, "mat-select", 35);
    \u0275\u0275listener("openedChange", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_mat_select_openedChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView($event ? ctx_r2.onCountryCodeSelectOpened() : ctx_r2.onCountryCodeSelectClosed());
    });
    \u0275\u0275elementStart(13, "mat-select-trigger")(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 38);
    \u0275\u0275listener("click", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_div_click_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("keydown", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_div_keydown_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("mousedown", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_div_mousedown_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(19, "mat-icon", 39);
    \u0275\u0275text(20, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 40, 0);
    \u0275\u0275listener("click", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_input_click_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("input", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onCountryCodeSearchChange($event.target.value));
    })("keydown", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template_input_keydown_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_button_23_Template, 3, 0, "button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_For_25_Template, 5, 3, "mat-option", 42, \u0275\u0275componentInstance().trackByPhoneCountryCode, true);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.phoneWhatsappChecked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.whatsapp"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.phoneSmsChecked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.sms"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.phoneDoNotValidateChecked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.doNotValidate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.countryCode"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formGroup == null ? null : (tmp_13_0 = ctx_r2.formGroup.get("countryCode")) == null ? null : tmp_13_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedCountryName);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", t_r1("smartEnrollProjects.setup.signupForm.phone.searchCountry"))("value", ctx_r2.countryCodeSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.countryCodeSearchTerm);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredPhoneCountryCodes);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.atLeastOneContactMethod"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-checkbox", 32);
    \u0275\u0275listener("change", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_27_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onEmailChannelChange("mailgun", $event.checked));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 32);
    \u0275\u0275listener("change", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_27_Template_mat_checkbox_change_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onEmailChannelChange("none", $event.checked));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.emailOtpChecked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.mailgun"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.emailDoNotValidateChecked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.doNotValidate"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 32);
    \u0275\u0275listener("change", function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_For_2_Template_mat_checkbox_change_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.toggleAdditionalField(opt_r8.value, $event.checked));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const t_r1 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r2.additionalFieldChecked(opt_r8.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1(opt_r8.labelKey), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.additionalFields.error"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275repeaterCreate(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_For_2_Template, 2, 2, "mat-checkbox", 47, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Conditional_3_Template, 2, 1, "p", 48);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.additionalFieldOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_7_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["additionalFieldsRequired"]) ? 3 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "header", 16)(2, "div")(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-slide-toggle", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Conditional_8_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_12_0;
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : (tmp_5_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["additionalFieldsRequired"]))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : (tmp_6_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["additionalFieldsRequired"]))("border-red-500", ctx_r2.formGroup == null ? null : (tmp_7_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["additionalFieldsRequired"])("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.additionalFields.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.additionalFields.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_12_0 = ctx_r2.formGroup.get("allowAdditionalFields")) == null ? null : tmp_12_0.value) ? 8 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "header", 25)(2, "div")(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "mat-slide-toggle", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.addressTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.business.addressSubtitle"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlRequired"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlInvalid"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_1_Template, 1, 1)(2, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const tcu_r9 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(tcu_r9.hasError("required") ? 1 : tcu_r9.hasError("pattern") ? 2 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 50)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 51);
    \u0275\u0275template(4, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Conditional_4_Template, 3, 1, "mat-error");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tcu_r9 = \u0275\u0275readContextLet(0);
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.basicSetup.compliance.termsUrl"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", tcu_r9);
    \u0275\u0275advance();
    \u0275\u0275conditional(tcu_r9.touched && tcu_r9.invalid ? 4 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Conditional_1_Template, 5, 3, "mat-form-field", 50);
  }
  if (rf & 2) {
    const tcu_r10 = \u0275\u0275storeLet(\u0275\u0275nextContext(4).form.get("termsAndConditionsUrl"));
    \u0275\u0275advance();
    \u0275\u0275conditional(tcu_r10 ? 1 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlRequired"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.urlInvalid"), " ");
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_1_Template, 1, 1)(2, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const pu_r11 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(pu_r11.hasError("required") ? 1 : pu_r11.hasError("pattern") ? 2 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 50)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 51);
    \u0275\u0275template(4, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Conditional_4_Template, 3, 1, "mat-error");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const pu_r11 = \u0275\u0275readContextLet(0);
    const t_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("smartEnrollProjects.setup.basicSetup.compliance.privacyUrl"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", pu_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(pu_r11.touched && pu_r11.invalid ? 4 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Conditional_1_Template, 5, 3, "mat-form-field", 50);
  }
  if (rf & 2) {
    const pu_r12 = \u0275\u0275storeLet(\u0275\u0275nextContext(4).form.get("privacyUrl"));
    \u0275\u0275advance();
    \u0275\u0275conditional(pu_r12 ? 1 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 12);
    \u0275\u0275elementStart(1, "section", 13)(2, "header", 6)(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_7_Template, 5, 2, "mat-radio-group", 14)(8, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_8_Template, 5, 2, "mat-radio-group", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "section", 13)(10, "header", 16)(11, "div")(12, "h2", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 8);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "mat-slide-toggle", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_17_Template, 26, 12, "div", 18)(18, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_18_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "section", 13)(20, "header", 16)(21, "div")(22, "h2", 7);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 8);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "mat-slide-toggle", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_27_Template, 5, 4, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_28_Template, 9, 13, "section", 22)(29, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_29_Template, 8, 6, "section", 23);
    \u0275\u0275elementStart(30, "section", 24)(31, "header", 25)(32, "div")(33, "h2", 7);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "mat-slide-toggle", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_36_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "section", 24)(38, "header", 25)(39, "div")(40, "h2", 7);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "mat-slide-toggle", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Conditional_43_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_13_0;
    let tmp_21_0;
    let tmp_30_0;
    let tmp_36_0;
    let tmp_40_0;
    const t_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.formGroup);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : (tmp_5_0 = ctx_r2.formGroup.get("fullName")) == null ? null : tmp_5_0.errors))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : (tmp_6_0 = ctx_r2.formGroup.get("fullName")) == null ? null : tmp_6_0.errors))("border-red-500", ctx_r2.formGroup == null ? null : (tmp_7_0 = ctx_r2.formGroup.get("fullName")) == null ? null : tmp_7_0.errors)("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.business.title") : t_r1("smartEnrollProjects.setup.signupForm.fullName.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.business.subtitle") : t_r1("smartEnrollProjects.setup.signupForm.fullName.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "personal" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "business" && (ctx_r2.formGroup == null ? null : (tmp_13_0 = ctx_r2.formGroup.get("businessBasicInfo")) == null ? null : tmp_13_0.value) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("border-red-500", ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"])("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.phone.businessTitle") : t_r1("smartEnrollProjects.setup.signupForm.phone.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.phone.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_21_0 = ctx_r2.formGroup.get("phone")) == null ? null : tmp_21_0.value) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-200", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("dark:border-gray-700", !(ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"]))("border-red-500", ctx_r2.formGroup == null ? null : ctx_r2.formGroup.errors == null ? null : ctx_r2.formGroup.errors["atLeastOneContactMethodRequired"])("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formType === "business" ? t_r1("smartEnrollProjects.setup.signupForm.email.businessTitle") : t_r1("smartEnrollProjects.setup.signupForm.email.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.email.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_30_0 = ctx_r2.formGroup.get("email")) == null ? null : tmp_30_0.value) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "personal" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.formType === "business" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.terms"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_36_0 = ctx_r2.formGroup.get("showTermsAndConditions")) == null ? null : tmp_36_0.value) ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.isNotRequired)("pointer-events-none", ctx_r2.isNotRequired);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r1("smartEnrollProjects.setup.signupForm.legal.privacy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r2.formGroup == null ? null : (tmp_40_0 = ctx_r2.formGroup.get("showPrivacyNotice")) == null ? null : tmp_40_0.value) ? 43 : -1);
  }
}
function SetupSignUpFormComponent_ng_container_0_form_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_Conditional_1_Template, 11, 5, "section", 4)(2, SetupSignUpFormComponent_ng_container_0_form_1_ng_container_2_Template, 44, 56, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.subForm ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.formType);
  }
}
function SetupSignUpFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupSignUpFormComponent_ng_container_0_form_1_Template, 3, 3, "form", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFormReady);
  }
}
var phoneGatewayFromChannels = (whatsapp, sms) => {
  if (whatsapp && sms)
    return "both";
  if (whatsapp)
    return "whatsapp";
  if (sms)
    return "sms";
  return "none";
};
var ADDITIONAL_FIELD_OPTIONS = [
  { value: "gender", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.gender" },
  { value: "country", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.country" },
  { value: "dateOfBirth", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.dateOfBirth" },
  { value: "address", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.address" },
  { value: "age", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.age" },
  { value: "postalCode", labelKey: "smartEnrollProjects.setup.signupForm.additionalFields.postalCode" }
];
var SetupSignUpFormComponent = class _SetupSignUpFormComponent {
  constructor() {
    this.formType = "personal";
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.stepFormControlName = "";
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.defaultPhoneCountryCode = DEFAULT_PHONE_COUNTRY_CODE;
    this.allPhoneCountryCodes = PHONE_COUNTRY_CODES;
    this.additionalFieldOptions = ADDITIONAL_FIELD_OPTIONS;
    this.filteredPhoneCountryCodes = PHONE_COUNTRY_CODES;
    this.countryCodeSearchTerm = "";
  }
  ngOnInit() {
    for (const key of ["phoneGateway", "emailGateway"]) {
      this.formGroup?.get(key)?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    }
  }
  /** Mirrors client-panel: `!loading && !!formGroup`. */
  get isFormReady() {
    return !this.loading && !!this.formGroup;
  }
  get isNotRequired() {
    if (this.stepFormControlName === "legalRepresentative") {
      return this.stepFormGroup?.get("legalRepresentative")?.value === "skip";
    }
    return false;
  }
  get stepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get selectedCountryName() {
    const code = this.formGroup?.get("countryCode")?.value;
    if (!code)
      return "";
    return this.allPhoneCountryCodes.find((c) => c.code === code)?.name || "";
  }
  trackByPhoneCountryCode(_index, country) {
    return country?.code;
  }
  onCountryCodeSearchChange(searchTerm) {
    this.countryCodeSearchTerm = searchTerm;
    this._filterPhoneCountryCodes();
    this._cdr.markForCheck();
  }
  clearCountryCodeSearch(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.detectChanges();
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 0);
  }
  onCountryCodeSelectOpened() {
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.markForCheck();
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 100);
  }
  onCountryCodeSelectClosed() {
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.markForCheck();
  }
  get phoneWhatsappChecked() {
    const gateway = this.formGroup?.get("phoneGateway")?.value;
    return gateway === "whatsapp" || gateway === "both";
  }
  get phoneSmsChecked() {
    const gateway = this.formGroup?.get("phoneGateway")?.value;
    return gateway === "sms" || gateway === "both";
  }
  get phoneDoNotValidateChecked() {
    return this.formGroup?.get("phoneGateway")?.value === "none";
  }
  /**
   * WhatsApp / SMS / Do not validate → `whatsapp` | `sms` | `both` | `none`.
   * Selecting Do not validate clears the other two.
   */
  onPhoneChannelChange(channel, checked) {
    const ctrl = this.formGroup?.get("phoneGateway");
    if (!ctrl)
      return;
    if (channel === "none") {
      if (checked)
        ctrl.setValue("none");
      this.formGroup.markAsDirty();
      this._cdr.markForCheck();
      return;
    }
    ctrl.setValue(phoneGatewayFromChannels(channel === "whatsapp" ? checked : this.phoneWhatsappChecked, channel === "sms" ? checked : this.phoneSmsChecked));
    this.formGroup.markAsDirty();
    this._cdr.markForCheck();
  }
  get emailOtpChecked() {
    return this.formGroup?.get("emailGateway")?.value === "mailgun";
  }
  get emailDoNotValidateChecked() {
    return this.formGroup?.get("emailGateway")?.value === "none";
  }
  /**
   * Validate with OTP / Do not validate → `mailgun` | `none`.
   * Selecting Do not validate clears OTP, and vice versa.
   */
  onEmailChannelChange(channel, checked) {
    const ctrl = this.formGroup?.get("emailGateway");
    if (!ctrl)
      return;
    if (channel === "none") {
      if (checked)
        ctrl.setValue("none");
      this.formGroup.markAsDirty();
      this._cdr.markForCheck();
      return;
    }
    ctrl.setValue(checked ? "mailgun" : "none");
    this.formGroup.markAsDirty();
    this._cdr.markForCheck();
  }
  additionalFieldChecked(value) {
    const v = this.formGroup?.get("additionalFields")?.value;
    return Array.isArray(v) && v.includes(value);
  }
  toggleAdditionalField(value, checked) {
    const ctrl = this.formGroup?.get("additionalFields");
    if (!ctrl)
      return;
    const cur = [...ctrl.value || []];
    if (checked && !cur.includes(value))
      cur.push(value);
    if (!checked) {
      const i = cur.indexOf(value);
      if (i >= 0)
        cur.splice(i, 1);
    }
    ctrl.setValue(cur);
    this._cdr.markForCheck();
  }
  _filterPhoneCountryCodes() {
    if (!this.countryCodeSearchTerm.trim()) {
      this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
      return;
    }
    const term = this.countryCodeSearchTerm.toLowerCase().trim();
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes.filter((c) => c.code.toLowerCase().includes(term) || c.name.toLowerCase().includes(term));
  }
  static {
    this.\u0275fac = function SetupSignUpFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupSignUpFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupSignUpFormComponent, selectors: [["setup-sign-up-form"]], viewQuery: function SetupSignUpFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.countryCodeSearchInput = _t.first);
      }
    }, inputs: { form: "form", formGroup: "formGroup", formType: "formType", loading: "loading", saving: "saving", subForm: "subForm", stepFormControlName: "stepFormControlName" }, decls: 1, vars: 0, consts: [["countryCodeSearchInput", ""], [4, "transloco"], ["class", "flex w-full flex-col gap-6", 3, "formGroup", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [3, "formGroup", 4, "ngIf"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["formControlName", "target", 1, "!rounded-xl", 3, "hideSingleSelectionIndicator"], ["value", "personal"], ["value", "business", "disabled", ""], [3, "formGroup"], [1, "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40"], ["formControlName", "fullNameStyle", 1, "flex", "flex-wrap", "gap-4"], ["formControlName", "businessBasicInfoStyle", 1, "flex", "flex-wrap", "gap-4"], [1, "mb-4", "flex", "items-start", "justify-between", "gap-4"], ["formControlName", "phone"], [1, "flex", "flex-col", "gap-4"], [1, "mt-3", "text-sm", "text-red-600", "dark:text-red-400"], ["formControlName", "email"], [1, "flex", "flex-col", "gap-2"], [1, "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40", 3, "border-stone-200", "dark:border-gray-700", "border-red-500", "opacity-50", "pointer-events-none"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "opacity-50", "pointer-events-none"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "items-start", "justify-between", "gap-4"], ["formControlName", "showTermsAndConditions"], ["formControlName", "showPrivacyNotice"], ["value", "separate"], ["value", "together"], ["value", "name_number"], ["value", "name"], [3, "change", "checked"], [1, "text-xs", "font-medium", "text-stone-600", "dark:text-stone-300"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "max-w-md"], ["formControlName", "countryCode", "panelClass", "country-code-search-panel", 3, "openedChange"], [1, "font-semibold"], [1, "ml-2", "text-stone-500"], [1, "sticky", "top-0", "z-10", "flex", "items-center", "gap-2", "bg-white", "px-3", "py-2", "dark:bg-gray-900", 3, "click", "keydown", "mousedown"], [1, "!h-4", "!w-4", "text-stone-400"], ["type", "text", 1, "w-full", "bg-transparent", "text-sm", "outline-none", "placeholder:text-stone-400", 3, "click", "input", "keydown", "placeholder", "value"], ["mat-icon-button", "", "type", "button", "class", "!h-6 !w-6 !min-w-0", 3, "click", 4, "ngIf"], [3, "value"], ["mat-icon-button", "", "type", "button", 1, "!h-6", "!w-6", "!min-w-0", 3, "click"], [1, "!h-4", "!w-4"], ["formControlName", "allowAdditionalFields"], [1, "grid", "grid-cols-1", "gap-2", "sm:grid-cols-2"], [3, "checked"], [1, "mt-2", "text-sm", "text-red-600", "dark:text-red-400"], ["formControlName", "address"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "max-w-2xl"], ["matInput", "", "type", "url", "placeholder", "https://", "autocomplete", "off", 3, "formControl"]], template: function SetupSignUpFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupSignUpFormComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, MatButtonModule, MatIconButton, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatCheckboxModule, MatCheckbox, MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, MatRadioModule, MatRadioGroup, MatRadioButton, MatSelectModule, MatSelect, MatSelectTrigger, MatOption, MatSlideToggleModule, MatSlideToggle, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupSignUpFormComponent, [{
    type: Component,
    args: [{ selector: "setup-sign-up-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSlideToggleModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <form [formGroup]="form" *ngIf="isFormReady" class="flex w-full flex-col gap-6">\r
        <!-- Target picker (top-level only, hidden inside representatives sub-form) -->\r
        @if (!subForm) {\r
            <section\r
                class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
            >\r
                <header class="mb-4">\r
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{ t('smartEnrollProjects.setup.signupForm.target.title') }}\r
                    </h2>\r
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.setup.signupForm.target.subtitle') }}\r
                    </p>\r
                </header>\r
                <mat-button-toggle-group\r
                    formControlName="target"\r
                    class="!rounded-xl"\r
                    [hideSingleSelectionIndicator]="true"\r
                >\r
                    <mat-button-toggle value="personal">\r
                        {{ t('smartEnrollProjects.setup.signupForm.target.personal') }}\r
                    </mat-button-toggle>\r
                    <mat-button-toggle value="business" disabled>\r
                        {{ t('smartEnrollProjects.setup.signupForm.target.business') }}\r
                    </mat-button-toggle>\r
                </mat-button-toggle-group>\r
            </section>\r
        }\r
\r
        <ng-container *ngIf="formType" [formGroup]="formGroup">\r
            <!-- 1. Full name (personal) / Business basic info (business) -->\r
            <section\r
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
                [class.border-stone-200]="!formGroup?.get('fullName')?.errors"\r
                [class.dark:border-gray-700]="!formGroup?.get('fullName')?.errors"\r
                [class.border-red-500]="formGroup?.get('fullName')?.errors"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header class="mb-4">\r
                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                        {{\r
                            formType === 'business'\r
                                ? t('smartEnrollProjects.setup.signupForm.business.title')\r
                                : t('smartEnrollProjects.setup.signupForm.fullName.title')\r
                        }}\r
                    </h2>\r
                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                        {{\r
                            formType === 'business'\r
                                ? t('smartEnrollProjects.setup.signupForm.business.subtitle')\r
                                : t('smartEnrollProjects.setup.signupForm.fullName.subtitle')\r
                        }}\r
                    </p>\r
                </header>\r
\r
                @if (formType === 'personal') {\r
                    <mat-radio-group formControlName="fullNameStyle" class="flex flex-wrap gap-4">\r
                        <mat-radio-button value="separate">\r
                            {{ t('smartEnrollProjects.setup.signupForm.fullName.separate') }}\r
                        </mat-radio-button>\r
                        <mat-radio-button value="together">\r
                            {{ t('smartEnrollProjects.setup.signupForm.fullName.together') }}\r
                        </mat-radio-button>\r
                    </mat-radio-group>\r
                }\r
\r
                @if (formType === 'business' && formGroup?.get('businessBasicInfo')?.value) {\r
                    <mat-radio-group formControlName="businessBasicInfoStyle" class="flex flex-wrap gap-4">\r
                        <mat-radio-button value="name_number">\r
                            {{ t('smartEnrollProjects.setup.signupForm.business.nameNumber') }}\r
                        </mat-radio-button>\r
                        <mat-radio-button value="name">\r
                            {{ t('smartEnrollProjects.setup.signupForm.business.nameOnly') }}\r
                        </mat-radio-button>\r
                    </mat-radio-group>\r
                }\r
            </section>\r
\r
            <!-- 2. Phone -->\r
            <section\r
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
                [class.border-stone-200]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"\r
                [class.dark:border-gray-700]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"\r
                [class.border-red-500]="formGroup?.errors?.['atLeastOneContactMethodRequired']"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header class="mb-4 flex items-start justify-between gap-4">\r
                    <div>\r
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                            {{\r
                                formType === 'business'\r
                                    ? t('smartEnrollProjects.setup.signupForm.phone.businessTitle')\r
                                    : t('smartEnrollProjects.setup.signupForm.phone.title')\r
                            }}\r
                        </h2>\r
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.setup.signupForm.phone.subtitle') }}\r
                        </p>\r
                    </div>\r
                    <mat-slide-toggle formControlName="phone"></mat-slide-toggle>\r
                </header>\r
\r
                @if (formGroup?.get('phone')?.value) {\r
                    <div class="flex flex-col gap-4">\r
                        <div class="flex flex-col gap-2">\r
                            <mat-checkbox\r
                                [checked]="phoneWhatsappChecked"\r
                                (change)="onPhoneChannelChange('whatsapp', $event.checked)"\r
                            >\r
                                {{ t('smartEnrollProjects.setup.signupForm.phone.whatsapp') }}\r
                            </mat-checkbox>\r
                            <mat-checkbox\r
                                [checked]="phoneSmsChecked"\r
                                (change)="onPhoneChannelChange('sms', $event.checked)"\r
                            >\r
                                {{ t('smartEnrollProjects.setup.signupForm.phone.sms') }}\r
                            </mat-checkbox>\r
                            <mat-checkbox\r
                                [checked]="phoneDoNotValidateChecked"\r
                                (change)="onPhoneChannelChange('none', $event.checked)"\r
                            >\r
                                {{ t('smartEnrollProjects.setup.signupForm.phone.doNotValidate') }}\r
                            </mat-checkbox>\r
                        </div>\r
\r
                        <div class="flex flex-col gap-2">\r
                            <label class="text-xs font-medium text-stone-600 dark:text-stone-300">\r
                                {{ t('smartEnrollProjects.setup.signupForm.phone.countryCode') }}\r
                            </label>\r
                            <mat-form-field appearance="outline" subscriptSizing="dynamic" class="max-w-md">\r
                                <mat-select\r
                                    formControlName="countryCode"\r
                                    panelClass="country-code-search-panel"\r
                                    (openedChange)="$event ? onCountryCodeSelectOpened() : onCountryCodeSelectClosed()"\r
                                >\r
                                    <mat-select-trigger>\r
                                        <span class="font-semibold">{{ formGroup?.get('countryCode')?.value }}</span>\r
                                        <span class="ml-2 text-stone-500">{{ selectedCountryName }}</span>\r
                                    </mat-select-trigger>\r
\r
                                    <!-- Search row, kept inside the panel like client-panel -->\r
                                    <div\r
                                        class="sticky top-0 z-10 flex items-center gap-2 bg-white px-3 py-2 dark:bg-gray-900"\r
                                        (click)="$event.stopPropagation()"\r
                                        (keydown)="$event.stopPropagation()"\r
                                        (mousedown)="$event.stopPropagation()"\r
                                    >\r
                                        <mat-icon class="!h-4 !w-4 text-stone-400">search</mat-icon>\r
                                        <input\r
                                            #countryCodeSearchInput\r
                                            type="text"\r
                                            class="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"\r
                                            [placeholder]="t('smartEnrollProjects.setup.signupForm.phone.searchCountry')"\r
                                            [value]="countryCodeSearchTerm"\r
                                            (click)="$event.stopPropagation()"\r
                                            (input)="onCountryCodeSearchChange($any($event.target).value)"\r
                                            (keydown)="$event.stopPropagation()"\r
                                        />\r
                                        <button\r
                                            *ngIf="countryCodeSearchTerm"\r
                                            mat-icon-button\r
                                            type="button"\r
                                            class="!h-6 !w-6 !min-w-0"\r
                                            (click)="clearCountryCodeSearch($event)"\r
                                        >\r
                                            <mat-icon class="!h-4 !w-4">close</mat-icon>\r
                                        </button>\r
                                    </div>\r
\r
                                    @for (c of filteredPhoneCountryCodes; track trackByPhoneCountryCode($index, c)) {\r
                                        <mat-option [value]="c.code">\r
                                            <span class="font-semibold">{{ c.code }}</span>\r
                                            <span class="ml-2 text-stone-500">{{ c.name }}</span>\r
                                        </mat-option>\r
                                    }\r
                                </mat-select>\r
                            </mat-form-field>\r
                        </div>\r
                    </div>\r
                }\r
\r
                @if (formGroup?.errors?.['atLeastOneContactMethodRequired']) {\r
                    <p class="mt-3 text-sm text-red-600 dark:text-red-400">\r
                        {{ t('smartEnrollProjects.setup.signupForm.atLeastOneContactMethod') }}\r
                    </p>\r
                }\r
            </section>\r
\r
            <!-- 3. Email -->\r
            <section\r
                class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
                [class.border-stone-200]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"\r
                [class.dark:border-gray-700]="!formGroup?.errors?.['atLeastOneContactMethodRequired']"\r
                [class.border-red-500]="formGroup?.errors?.['atLeastOneContactMethodRequired']"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header class="mb-4 flex items-start justify-between gap-4">\r
                    <div>\r
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                            {{\r
                                formType === 'business'\r
                                    ? t('smartEnrollProjects.setup.signupForm.email.businessTitle')\r
                                    : t('smartEnrollProjects.setup.signupForm.email.title')\r
                            }}\r
                        </h2>\r
                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.setup.signupForm.email.subtitle') }}\r
                        </p>\r
                    </div>\r
                    <mat-slide-toggle formControlName="email"></mat-slide-toggle>\r
                </header>\r
\r
                @if (formGroup?.get('email')?.value) {\r
                    <div class="flex flex-col gap-2">\r
                        <mat-checkbox\r
                            [checked]="emailOtpChecked"\r
                            (change)="onEmailChannelChange('mailgun', $event.checked)"\r
                        >\r
                            {{ t('smartEnrollProjects.setup.signupForm.email.mailgun') }}\r
                        </mat-checkbox>\r
                        <mat-checkbox\r
                            [checked]="emailDoNotValidateChecked"\r
                            (change)="onEmailChannelChange('none', $event.checked)"\r
                        >\r
                            {{ t('smartEnrollProjects.setup.signupForm.email.doNotValidate') }}\r
                        </mat-checkbox>\r
                    </div>\r
                }\r
            </section>\r
\r
            <!-- 4. Additional fields (personal only) -->\r
            @if (formType === 'personal') {\r
                <section\r
                    class="rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
                    [class.border-stone-200]="!formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']"\r
                    [class.dark:border-gray-700]="!formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']"\r
                    [class.border-red-500]="formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']"\r
                    [class.opacity-50]="isNotRequired"\r
                    [class.pointer-events-none]="isNotRequired"\r
                >\r
                    <header class="mb-4 flex items-start justify-between gap-4">\r
                        <div>\r
                            <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                {{ t('smartEnrollProjects.setup.signupForm.additionalFields.title') }}\r
                            </h2>\r
                            <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.setup.signupForm.additionalFields.subtitle') }}\r
                            </p>\r
                        </div>\r
                        <mat-slide-toggle formControlName="allowAdditionalFields"></mat-slide-toggle>\r
                    </header>\r
\r
                    @if (formGroup?.get('allowAdditionalFields')?.value) {\r
                        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">\r
                            @for (opt of additionalFieldOptions; track opt.value) {\r
                                <mat-checkbox\r
                                    [checked]="additionalFieldChecked(opt.value)"\r
                                    (change)="toggleAdditionalField(opt.value, $event.checked)"\r
                                >\r
                                    {{ t(opt.labelKey) }}\r
                                </mat-checkbox>\r
                            }\r
                        </div>\r
                        @if (formGroup?.get('allowAdditionalFields')?.errors?.['additionalFieldsRequired']) {\r
                            <p class="mt-2 text-sm text-red-600 dark:text-red-400">\r
                                {{ t('smartEnrollProjects.setup.signupForm.additionalFields.error') }}\r
                            </p>\r
                        }\r
                    }\r
                </section>\r
            }\r
\r
            <!-- 5. Business address (business only) -->\r
            @if (formType === 'business') {\r
                <section\r
                    class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                    [class.opacity-50]="isNotRequired"\r
                    [class.pointer-events-none]="isNotRequired"\r
                >\r
                    <header class="flex items-start justify-between gap-4">\r
                        <div>\r
                            <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                {{ t('smartEnrollProjects.setup.signupForm.business.addressTitle') }}\r
                            </h2>\r
                            <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.setup.signupForm.business.addressSubtitle') }}\r
                            </p>\r
                        </div>\r
                        <mat-slide-toggle formControlName="address"></mat-slide-toggle>\r
                    </header>\r
                </section>\r
            }\r
\r
            <!-- 6. Terms & conditions -->\r
            <section\r
                class="flex flex-col gap-4 rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header class="flex items-start justify-between gap-4">\r
                    <div>\r
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                            {{ t('smartEnrollProjects.setup.signupForm.legal.terms') }}\r
                        </h2>\r
                    </div>\r
                    <mat-slide-toggle formControlName="showTermsAndConditions"></mat-slide-toggle>\r
                </header>\r
                @if (formGroup?.get('showTermsAndConditions')?.value) {\r
                    @let tcu = form.get('termsAndConditionsUrl');\r
                    @if (tcu) {\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="w-full max-w-2xl">\r
                            <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.termsUrl') }}</mat-label>\r
                            <input\r
                                matInput\r
                                type="url"\r
                                placeholder="https://"\r
                                autocomplete="off"\r
                                [formControl]="$any(tcu)"\r
                            />\r
                            @if (tcu.touched && tcu.invalid) {\r
                                <mat-error>\r
                                    @if (tcu.hasError('required')) {\r
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlRequired') }}\r
                                    } @else if (tcu.hasError('pattern')) {\r
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlInvalid') }}\r
                                    }\r
                                </mat-error>\r
                            }\r
                        </mat-form-field>\r
                    }\r
                }\r
            </section>\r
\r
            <!-- 7. Privacy notice -->\r
            <section\r
                class="flex flex-col gap-4 rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                [class.opacity-50]="isNotRequired"\r
                [class.pointer-events-none]="isNotRequired"\r
            >\r
                <header class="flex items-start justify-between gap-4">\r
                    <div>\r
                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                            {{ t('smartEnrollProjects.setup.signupForm.legal.privacy') }}\r
                        </h2>\r
                    </div>\r
                    <mat-slide-toggle formControlName="showPrivacyNotice"></mat-slide-toggle>\r
                </header>\r
                @if (formGroup?.get('showPrivacyNotice')?.value) {\r
                    @let pu = form.get('privacyUrl');\r
                    @if (pu) {\r
                        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="w-full max-w-2xl">\r
                            <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.privacyUrl') }}</mat-label>\r
                            <input\r
                                matInput\r
                                type="url"\r
                                placeholder="https://"\r
                                autocomplete="off"\r
                                [formControl]="$any(pu)"\r
                            />\r
                            @if (pu.touched && pu.invalid) {\r
                                <mat-error>\r
                                    @if (pu.hasError('required')) {\r
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlRequired') }}\r
                                    } @else if (pu.hasError('pattern')) {\r
                                        {{ t('smartEnrollProjects.setup.signupForm.legal.urlInvalid') }}\r
                                    }\r
                                </mat-error>\r
                            }\r
                        </mat-form-field>\r
                    }\r
                }\r
            </section>\r
        </ng-container>\r
    </form>\r
</ng-container>\r
` }]
  }], null, { countryCodeSearchInput: [{
    type: ViewChild,
    args: ["countryCodeSearchInput"]
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], formType: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupSignUpFormComponent, { className: "SetupSignUpFormComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/sign-up-form/sign-up-form.component.ts", lineNumber: 76 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/representatives/representatives.component.ts
function SetupRepresentativesComponent_ng_container_0_div_1_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = ctx.$implicit;
    \u0275\u0275property("value", n_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r2);
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    \u0275\u0275property("value", n_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r3);
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Case_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-sign-up-form", 22);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r3.form)("formGroup", ctx_r3.informationFormGroup)("formType", "personal")("loading", ctx_r3.loading)("saving", ctx_r3.saving)("subForm", true)("stepFormControlName", "legalRepresentative");
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Case_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-documents", 23);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r3.form)("formGroup", ctx_r3.documentsFormGroup)("loading", ctx_r3.loading)("saving", ctx_r3.saving)("subForm", true)("stepFormControlName", "legalRepresentative");
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Case_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-liveness", 23);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r3.form)("formGroup", ctx_r3.livenessFormGroup)("loading", ctx_r3.loading)("saving", ctx_r3.saving)("subForm", true)("stepFormControlName", "legalRepresentative");
  }
}
function SetupRepresentativesComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "header", 4)(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-button-toggle-group", 7)(8, "mat-button-toggle", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-button-toggle", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-button-toggle", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "section", 3)(15, "header", 4)(16, "h2", 5);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 6);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 11)(21, "mat-form-field", 12)(22, "mat-label");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 13);
    \u0275\u0275repeaterCreate(25, SetupRepresentativesComponent_ng_container_0_div_1_For_26_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 12)(28, "mat-label");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 15);
    \u0275\u0275repeaterCreate(31, SetupRepresentativesComponent_ng_container_0_div_1_For_32_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 12)(34, "mat-label");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-select", 16)(37, "mat-option", 17);
    \u0275\u0275text(38, "WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 18);
    \u0275\u0275text(40, "SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-option", 19);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 20)(44, "button", 21);
    \u0275\u0275listener("click", function SetupRepresentativesComponent_ng_container_0_div_1_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pageIndex = 0);
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 21);
    \u0275\u0275listener("click", function SetupRepresentativesComponent_ng_container_0_div_1_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pageIndex = 1);
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 21);
    \u0275\u0275listener("click", function SetupRepresentativesComponent_ng_container_0_div_1_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.pageIndex = 2);
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, SetupRepresentativesComponent_ng_container_0_div_1_Case_50_Template, 1, 7, "setup-sign-up-form", 22)(51, SetupRepresentativesComponent_ng_container_0_div_1_Case_51_Template, 1, 6, "setup-documents", 23)(52, SetupRepresentativesComponent_ng_container_0_div_1_Case_52_Template, 1, 6, "setup-liveness", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_38_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.stepFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("hideSingleSelectionIndicator", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.documents.skip"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.documents.optional"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.documents.required"));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275property("formGroup", ctx_r3.representativesFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.counts.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.counts.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.representatives.counts.min"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.representativeCounts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.representatives.counts.max"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.representativeCounts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.representatives.counts.notification"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r5("smartEnrollProjects.setup.signupForm.email.title"));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r3.isNotRequired)("pointer-events-none", ctx_r3.isNotRequired);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-900", ctx_r3.pageIndex === 0)("text-white", ctx_r3.pageIndex === 0)("dark:bg-white", ctx_r3.pageIndex === 0)("dark:text-stone-900", ctx_r3.pageIndex === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.tabs.information"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-900", ctx_r3.pageIndex === 1)("text-white", ctx_r3.pageIndex === 1)("dark:bg-white", ctx_r3.pageIndex === 1)("dark:text-stone-900", ctx_r3.pageIndex === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.tabs.documents"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-900", ctx_r3.pageIndex === 2)("text-white", ctx_r3.pageIndex === 2)("dark:bg-white", ctx_r3.pageIndex === 2)("dark:text-stone-900", ctx_r3.pageIndex === 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r5("smartEnrollProjects.setup.representatives.tabs.liveness"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_38_0 = ctx_r3.pageIndex) === 0 ? 50 : tmp_38_0 === 1 ? 51 : tmp_38_0 === 2 ? 52 : -1);
  }
}
function SetupRepresentativesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupRepresentativesComponent_ng_container_0_div_1_Template, 53, 50, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isFormReady);
  }
}
var SetupRepresentativesComponent = class _SetupRepresentativesComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this.pageIndex = 0;
    this.representativeCounts = Array.from({ length: 10 }, (_, i) => i + 1);
  }
  get representativesFormGroup() {
    return this.form?.get("projectFlow.representatives") || null;
  }
  get documentsFormGroup() {
    return this.representativesFormGroup?.get("documents") || null;
  }
  get informationFormGroup() {
    return this.representativesFormGroup?.get("information") || null;
  }
  get livenessFormGroup() {
    return this.representativesFormGroup?.get("liveness") || null;
  }
  get stepFormGroup() {
    return this.form?.get("projectFlow.steps") || null;
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.representativesFormGroup && !!this.livenessFormGroup && !!this.documentsFormGroup && !!this.informationFormGroup;
  }
  get isNotRequired() {
    return this.stepFormGroup?.get("legalRepresentative")?.value === "skip";
  }
  static {
    this.\u0275fac = function SetupRepresentativesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupRepresentativesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupRepresentativesComponent, selectors: [["setup-representatives"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["formControlName", "legalRepresentative", 1, "!rounded-xl", 3, "hideSingleSelectionIndicator"], ["value", "skip"], ["value", "optional"], ["value", "mandatory"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-3"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["formControlName", "minRepresentatives"], [3, "value"], ["formControlName", "maxRepresentatives"], ["formControlName", "notificationType"], ["value", "whatsapp"], ["value", "sms"], ["value", "email"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "rounded-full", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "font-semibold", "text-stone-700", "dark:border-gray-700", "dark:text-stone-200", 3, "click"], [3, "form", "formGroup", "formType", "loading", "saving", "subForm", "stepFormControlName"], [3, "form", "formGroup", "loading", "saving", "subForm", "stepFormControlName"]], template: function SetupRepresentativesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupRepresentativesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslocoModule,
      TranslocoDirective,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupSignUpFormComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupRepresentativesComponent, [{
    type: Component,
    args: [{ selector: "setup-representatives", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      TranslocoModule,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupSignUpFormComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">\r
        <section\r
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
            [formGroup]="stepFormGroup!"\r
        >\r
            <header class="mb-4">\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.representatives.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.representatives.subtitle') }}\r
                </p>\r
            </header>\r
            <mat-button-toggle-group\r
                formControlName="legalRepresentative"\r
                class="!rounded-xl"\r
                [hideSingleSelectionIndicator]="true"\r
            >\r
                <mat-button-toggle value="skip">{{ t('smartEnrollProjects.setup.documents.skip') }}</mat-button-toggle>\r
                <mat-button-toggle value="optional">{{ t('smartEnrollProjects.setup.documents.optional') }}</mat-button-toggle>\r
                <mat-button-toggle value="mandatory">{{ t('smartEnrollProjects.setup.documents.required') }}</mat-button-toggle>\r
            </mat-button-toggle-group>\r
        </section>\r
\r
        <section\r
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
            [formGroup]="representativesFormGroup!"\r
            [class.opacity-50]="isNotRequired"\r
            [class.pointer-events-none]="isNotRequired"\r
        >\r
            <header class="mb-4">\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.representatives.counts.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.representatives.counts.subtitle') }}\r
                </p>\r
            </header>\r
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.representatives.counts.min') }}</mat-label>\r
                    <mat-select formControlName="minRepresentatives">\r
                        @for (n of representativeCounts; track n) {\r
                            <mat-option [value]="n">{{ n }}</mat-option>\r
                        }\r
                    </mat-select>\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.representatives.counts.max') }}</mat-label>\r
                    <mat-select formControlName="maxRepresentatives">\r
                        @for (n of representativeCounts; track n) {\r
                            <mat-option [value]="n">{{ n }}</mat-option>\r
                        }\r
                    </mat-select>\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.representatives.counts.notification') }}</mat-label>\r
                    <mat-select formControlName="notificationType">\r
                        <mat-option value="whatsapp">WhatsApp</mat-option>\r
                        <mat-option value="sms">SMS</mat-option>\r
                        <mat-option value="email">{{ t('smartEnrollProjects.setup.signupForm.email.title') }}</mat-option>\r
                    </mat-select>\r
                </mat-form-field>\r
            </div>\r
        </section>\r
\r
        <div\r
            class="flex flex-wrap gap-2"\r
            [class.opacity-50]="isNotRequired"\r
            [class.pointer-events-none]="isNotRequired"\r
        >\r
            <button\r
                type="button"\r
                (click)="pageIndex = 0"\r
                [class.bg-stone-900]="pageIndex === 0"\r
                [class.text-white]="pageIndex === 0"\r
                [class.dark:bg-white]="pageIndex === 0"\r
                [class.dark:text-stone-900]="pageIndex === 0"\r
                class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:border-gray-700 dark:text-stone-200"\r
            >\r
                {{ t('smartEnrollProjects.setup.representatives.tabs.information') }}\r
            </button>\r
            <button\r
                type="button"\r
                (click)="pageIndex = 1"\r
                [class.bg-stone-900]="pageIndex === 1"\r
                [class.text-white]="pageIndex === 1"\r
                [class.dark:bg-white]="pageIndex === 1"\r
                [class.dark:text-stone-900]="pageIndex === 1"\r
                class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:border-gray-700 dark:text-stone-200"\r
            >\r
                {{ t('smartEnrollProjects.setup.representatives.tabs.documents') }}\r
            </button>\r
            <button\r
                type="button"\r
                (click)="pageIndex = 2"\r
                [class.bg-stone-900]="pageIndex === 2"\r
                [class.text-white]="pageIndex === 2"\r
                [class.dark:bg-white]="pageIndex === 2"\r
                [class.dark:text-stone-900]="pageIndex === 2"\r
                class="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:border-gray-700 dark:text-stone-200"\r
            >\r
                {{ t('smartEnrollProjects.setup.representatives.tabs.liveness') }}\r
            </button>\r
        </div>\r
\r
        @switch (pageIndex) {\r
            @case (0) {\r
                <setup-sign-up-form\r
                    [form]="form"\r
                    [formGroup]="informationFormGroup!"\r
                    [formType]="'personal'"\r
                    [loading]="loading"\r
                    [saving]="saving"\r
                    [subForm]="true"\r
                    [stepFormControlName]="'legalRepresentative'"\r
                ></setup-sign-up-form>\r
            }\r
            @case (1) {\r
                <setup-documents\r
                    [form]="form"\r
                    [formGroup]="documentsFormGroup!"\r
                    [loading]="loading"\r
                    [saving]="saving"\r
                    [subForm]="true"\r
                    [stepFormControlName]="'legalRepresentative'"\r
                ></setup-documents>\r
            }\r
            @case (2) {\r
                <setup-liveness\r
                    [form]="form"\r
                    [formGroup]="livenessFormGroup!"\r
                    [loading]="loading"\r
                    [saving]="saving"\r
                    [subForm]="true"\r
                    [stepFormControlName]="'legalRepresentative'"\r
                ></setup-liveness>\r
            }\r
        }\r
    </div>\r
</ng-container>\r
` }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupRepresentativesComponent, { className: "SetupRepresentativesComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/representatives/representatives.component.ts", lineNumber: 43 });
})();

// src/app/modules/smart-enroll/projects/setup/steps/setup-step-stub.component.ts
var SetupStepStubComponent = class _SetupStepStubComponent {
  constructor() {
    this.titleKey = "smartEnrollProjects.setup.stub.title";
    this.form = null;
    this.formGroup = null;
    this.loading = false;
    this.saving = false;
    this.subForm = false;
    this.formType = "personal";
    this.stepFormControlName = "";
  }
  static {
    this.\u0275fac = function SetupStepStubComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupStepStubComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupStepStubComponent, selectors: [["setup-step-stub"]], inputs: { titleKey: "titleKey", form: "form", formGroup: "formGroup", loading: "loading", saving: "saving", subForm: "subForm", formType: "formType", stepFormControlName: "stepFormControlName" }, decls: 7, vars: 6, consts: [[1, "rounded-2xl", "border", "border-dashed", "border-stone-300/80", "bg-white", "px-6", "py-12", "text-center", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "text-sm", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "mt-2", "text-xs", "text-stone-500", "dark:text-stone-400"]], template: function SetupStepStubComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, ctx.titleKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "smartEnrollProjects.setup.stub.placeholder"), " ");
      }
    }, dependencies: [CommonModule, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupStepStubComponent, [{
    type: Component,
    args: [{
      selector: "setup-step-stub",
      standalone: true,
      imports: [CommonModule, TranslocoModule],
      template: `
        <div
            class="rounded-2xl border border-dashed border-stone-300/80 bg-white px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-900/40"
        >
            <p class="text-sm font-medium text-stone-600 dark:text-stone-300">
                {{ titleKey | transloco }}
            </p>
            <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">
                {{ 'smartEnrollProjects.setup.stub.placeholder' | transloco }}
            </p>
        </div>
    `
    }]
  }], null, { titleKey: [{
    type: Input
  }], form: [{
    type: Input
  }], formGroup: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }], subForm: [{
    type: Input
  }], formType: [{
    type: Input
  }], stepFormControlName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupStepStubComponent, { className: "SetupStepStubComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/setup-step-stub.component.ts", lineNumber: 27 });
})();

// src/app/modules/smart-enroll/projects/setup/smart-enroll-setup-dev-sample.util.ts
function patchSmartEnrollSetupDevSample(form, options) {
  const origin = resolveDevSampleRedirectOrigin(options?.redirectOrigin);
  const token = randomTokenHex(6);
  const slug = slugFromToken(token);
  const allowedCountries = resolveAllowedCountries(options?.allowedCountryPool?.length ? [...options.allowedCountryPool] : void 0);
  const contactLocal = `contact.${slug}`;
  const officerLocal = `dpo.${slug}`;
  const nameSuffix = slug.slice(0, 10);
  const btn = randomHexColor();
  const buttonTextColor = luminanceOkForWhiteText(btn) ? "#ffffff" : "#0f172a";
  form.patchValue({
    name: `${randomChoice(PROJECT_NAME_PREFIXES)} enroll ${nameSuffix}`,
    allowedCountries,
    contactEmail: `${contactLocal}@example.com`,
    privacyUrl: `https://example.com/privacy-policy-${slug}`,
    termsAndConditionsUrl: `https://example.com/terms-${slug}`,
    target: "personal",
    dataProtection: {
      name: randomPersonName(),
      email: `${officerLocal}@example.com`,
      address: randomAddressLine(),
      address2: `Suite ${100 + Number(randomDigits(2))}`,
      city: randomChoiceCity(),
      postalCode: randomPostalCode(),
      country: randomChoice(allowedCountries)
    },
    branding: {
      logo: `https://picsum.photos/seed/${slug}/240/240`,
      imageBackgroundColor: "#ffffff",
      image: "",
      titleColor: randomHexColor(),
      textColor: randomHexColor(),
      backgroundColor: "#ffffff",
      buttonColor: btn,
      buttonTextColor
    },
    projectFlow: {
      steps: {
        document: "skip",
        liveness: "skip",
        legalRepresentative: "skip",
        businessVerification: false
      },
      signUpForm: {
        email: true,
        phone: false,
        emailGateway: "mailgun",
        countryCode: randomChoice(DIAL_CODES)
      },
      integrations: {
        source: "NONE",
        strategy: "none",
        redirectUrl: `${origin}/smart-enroll/dev-r/${slug}`,
        apiUrl: "",
        apiTestType: "email",
        apiTestValue: "",
        webhook: null
      },
      documents: {
        verificationMethods: ["scan"]
      }
    }
  });
}

// src/app/modules/smart-enroll/projects/setup/setup.types.ts
var isProject = (project) => {
  return !!project && typeof project === "object" && "_id" in project;
};

// src/app/modules/smart-enroll/projects/setup/setup-host.component.ts
var _c06 = (a0) => ["/smart-enroll/projects", a0];
function SetupHostComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.project_description"), " ");
  }
}
function SetupHostComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewProject());
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon", 24);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.canNavigate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.see_live_project"));
  }
}
function SetupHostComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-breadcrumbs", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.form)("isStepValid", ctx_r1.isFormValidForStep)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementEnd();
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 39);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_30_Case_2_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.fillDevSampleWizard());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.dev_quick_fill_hint"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canNavigate);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.dev_quick_fill"), " ");
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupHostComponent_ng_container_0_Conditional_30_Case_2_Conditional_0_Template, 5, 3, "div", 37);
    \u0275\u0275element(1, "setup-basic-setup", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.devQuickFillEnabled && ctx_r1.projectId === "new" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-sign-up-form", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.signUpFormGroup())("formType", ctx_r1.currentTarget)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-documents", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.documentsFormGroup())("stepFormControlName", ctx_r1.documentsStepFormControlName())("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-representatives", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-liveness", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("form", ctx_r1.form)("formGroup", ctx_r1.livenessFormGroup())("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_0_Template, 1, 3, "setup-representatives", 29)(1, SetupHostComponent_ng_container_0_Conditional_30_Case_5_Conditional_1_Template, 1, 4, "setup-liveness", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.currentTarget === "business" ? 0 : 1);
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-integrations", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-user-interface", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "setup-step-stub", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("titleKey", ctx_r1.steps[ctx_r1.stepIndex] || "smartEnrollProjects.setup.stub.title")("form", ctx_r1.form)("loading", ctx_r1.loading())("saving", ctx_r1.saving());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 35);
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 36);
    \u0275\u0275element(1, "smart-enroll-preview", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("branding", ctx_r1.brandingValue())("form", ctx_r1.form)("view", ctx_r1.previewViews());
  }
}
function SetupHostComponent_ng_container_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 26);
    \u0275\u0275template(2, SetupHostComponent_ng_container_0_Conditional_30_Case_2_Template, 2, 4)(3, SetupHostComponent_ng_container_0_Conditional_30_Case_3_Template, 1, 5, "setup-sign-up-form", 27)(4, SetupHostComponent_ng_container_0_Conditional_30_Case_4_Template, 1, 5, "setup-documents", 28)(5, SetupHostComponent_ng_container_0_Conditional_30_Case_5_Template, 2, 1)(6, SetupHostComponent_ng_container_0_Conditional_30_Case_6_Template, 1, 3, "setup-integrations", 29)(7, SetupHostComponent_ng_container_0_Conditional_30_Case_7_Template, 1, 3, "setup-user-interface", 29)(8, SetupHostComponent_ng_container_0_Conditional_30_Case_8_Template, 1, 4, "setup-step-stub", 30);
    \u0275\u0275elementStart(9, "div", 31)(10, "button", 32);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_30_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275elementStart(11, "mat-icon", 33);
    \u0275\u0275text(12, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 34);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Conditional_30_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275template(15, SetupHostComponent_ng_container_0_Conditional_30_Conditional_15_Template, 1, 0, "mat-spinner", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, SetupHostComponent_ng_container_0_Conditional_30_Conditional_17_Template, 2, 3, "aside", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.stepIndex) === 0 ? 2 : tmp_3_0 === 1 ? 3 : tmp_3_0 === 2 ? 4 : tmp_3_0 === 3 ? 5 : tmp_3_0 === 4 ? 6 : tmp_3_0 === 5 ? 7 : 8);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.canNavigate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.go_back"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canNavigate || !ctx_r1.isFormValidForStep(ctx_r1.stepIndex));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.continue"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewViews().length > 0 ? 17 : -1);
  }
}
function SetupHostComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 6);
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-icon", 6);
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "mat-icon", 6);
    \u0275\u0275elementStart(14, "span", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "button", 12);
    \u0275\u0275listener("click", function SetupHostComponent_ng_container_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.returnToProjects());
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 13)(22, "h1", 14);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SetupHostComponent_ng_container_0_Conditional_24_Template, 2, 1, "p", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SetupHostComponent_ng_container_0_Conditional_25_Template, 5, 2, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, SetupHostComponent_ng_container_0_Conditional_26_Template, 1, 4, "setup-breadcrumbs", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "main", 18)(28, "div", 19);
    \u0275\u0275template(29, SetupHostComponent_ng_container_0_Conditional_29_Template, 2, 0, "div", 20)(30, SetupHostComponent_ng_container_0_Conditional_30_Template, 18, 7, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c06, ctx_r1.projectId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.project == null ? null : ctx_r1.project.name) || ctx_r1.projectId, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.setup.title"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.backToList"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.projectId === "new" ? t_r3("smartEnrollProjects.setup.new_project") : ctx_r1.project == null ? null : ctx_r1.project.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.projectId === "new" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.project == null ? null : ctx_r1.project.projectFlows == null ? null : ctx_r1.project.projectFlows[0] == null ? null : ctx_r1.project.projectFlows[0].status) === "active" && ctx_r1.projectId !== "new" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form ? 26 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 29 : ctx_r1.form ? 30 : -1);
  }
}
var V3_SIGNUP_FORM_KEYS_PERSONAL = [
  "additionalFields",
  "allowAdditionalFields",
  "countryCode",
  "email",
  "emailGateway",
  "fullName",
  "fullNameStyle",
  "phone",
  "phoneGateway",
  "showPrivacyNotice",
  "showTermsAndConditions"
];
var V3_SIGNUP_FORM_KEYS_BUSINESS = [
  "address",
  "businessBasicInfo",
  "businessBasicInfoStyle",
  "countryCode",
  "email",
  "emailGateway",
  "phone",
  "phoneGateway",
  "showPrivacyNotice",
  "showTermsAndConditions"
];
var SetupHostComponent = class _SetupHostComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._formBuilder = inject(FormBuilder);
    this._setup = inject(SetupService);
    this._factory = inject(SetupFormFactory);
    this._cdr = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._confirm = inject(FuseConfirmationService);
    this._countryService = inject(CountryService);
    this._unsub$ = new Subject();
    this._DEBUG = false;
    this.formKeys = {};
    this.isPreviewExpanded = false;
    this.loading = signal(true);
    this.saving = signal(false);
    this.project = {};
    this.projectId = "";
    this.stepIndex = 0;
    this.devQuickFillEnabled = !environment.production;
    this._preventCsvSource = (control) => {
      if (control.value === "CSV")
        return { csvNotSupported: true };
      return null;
    };
    this.isFormValidForStep = (stepIndex) => {
      if (!this.form)
        return false;
      const keys = this.formKeys?.[stepIndex];
      if (!keys)
        return false;
      const isSkippableStep = keys[0].includes("projectFlow.steps") && this.form.get(keys[0])?.value === "skip";
      if (isSkippableStep)
        return true;
      const allValid = keys.every((key) => {
        if (this._DEBUG && this.form.get(key)?.invalid) {
          console.log(key, this.form.get(key)?.invalid, this.form.get(key)?.errors, this.form.get(key)?.value);
        }
        return !this.form.get(key)?.invalid;
      });
      if (!allValid)
        return false;
      if (stepIndex === 1) {
        const signUpFormGroup = this.form.get("projectFlow.signUpForm");
        if (signUpFormGroup && signUpFormGroup.invalid)
          return false;
      }
      return true;
    };
    const id = this._route.snapshot.params["projectId"] || "new";
    const step = this._route.snapshot.params["step"] || 0;
    if (id)
      this._setup.projectId = id;
    this._setup.stepIndex = Number(step) || 0;
    this.formKeys = this._setup.defaultFormKeys;
  }
  ngOnInit() {
    this._initSubscribers();
  }
  ngOnDestroy() {
    this._unsub$.next();
    this._unsub$.complete();
  }
  get canNavigate() {
    return !this.loading() && !this.saving();
  }
  get steps() {
    if (this.form?.get("target")?.value === "business")
      return this._setup.businessSteps;
    return this._setup.personalSteps;
  }
  _initSubscribers() {
    this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
      const id = params["projectId"] || "new";
      const step = params["step"] || 0;
      if (id)
        this._setup.projectId = id;
      this._setup.stepIndex = Number(step) || 0;
    });
    this._setup.projectId$.pipe(takeUntil(this._unsub$)).subscribe((id) => this.projectId = id);
    this._setup.stepIndex$.pipe(takeUntil(this._unsub$)).subscribe((step) => {
      this.form?.get("currentStep")?.setValue(this.stepIndex + 1);
      this.stepIndex = step;
      this._cdr.markForCheck();
    });
    this._setup.project$.pipe(takeUntil(this._unsub$)).subscribe((project) => {
      this.project = !project ? this._setup.getDefaultProject() : project;
      this._initForm();
    });
    if (this.projectId && this.projectId !== "new") {
      this._loadProject(this.projectId);
    } else {
      this._setup.project = this._setup.getDefaultProject();
    }
  }
  _loadProject(id) {
    this.loading.set(true);
    this._setup.requestProject(id, { populates: ["projectFlows"], projectFlowType: "onboarding" }).subscribe({
      next: (res) => {
        const project = res?.data ?? null;
        if (project) {
          project.target = project.target || project.projectFlows?.[0]?.target || "";
          this._setup.project = project;
        } else {
          this._setup.project = this._setup.getDefaultProject();
        }
      },
      error: () => {
        this._snack.open(this._t("smartEnrollProjects.setup.api_error"), this._t("close"), { duration: 3e3 });
        this._setup.project = this._setup.getDefaultProject();
      }
    });
  }
  _initForm() {
    const project = isProject(this.project) ? this.project : this._setup.getDefaultProject();
    this.form = this._initProjectForm(project);
    this._updateFormValidationKeys(project?.target || "personal");
    this._initFormChangeSubscriptions();
    const targetValue = this.form.get("target")?.value;
    const currentBusinessVerificationStepValue = this.form.get("projectFlow.steps.businessVerification")?.value;
    const currentDocumentStepValue = this.form.get("projectFlow.steps.document")?.value;
    const currentLivenessStepValue = this.form.get("projectFlow.steps.liveness")?.value;
    const currentIntegrationsSourceValue = this.form.get("projectFlow.integrations.source")?.value;
    const currentLegalRepresentativeStepValue = this.form.get("projectFlow.steps.legalRepresentative")?.value;
    const documentBusinessStepValue = targetValue === "business" ? currentBusinessVerificationStepValue : currentDocumentStepValue;
    this._toggleBusinessControls(currentBusinessVerificationStepValue);
    this._toggleDocumentControls(documentBusinessStepValue);
    this._toggleIntegrationsControls(currentIntegrationsSourceValue);
    this._toggleLegalRepresentativeControls(currentLegalRepresentativeStepValue);
    this._toggleLivenessControls(currentLivenessStepValue);
    if (this.form.get("version")?.value !== 3 || this.form.get("projectFlow.version")?.value !== 3) {
      this.form.get("version")?.setValue(3);
      this.form.get("projectFlow.version")?.setValue(3);
      this.form.get("version")?.markAsDirty();
      this.form.get("version")?.markAsTouched();
      this.form.get("projectFlow.version")?.markAsDirty();
      this.form.get("projectFlow.version")?.markAsTouched();
    }
    setTimeout(() => {
      this._cdr.markForCheck();
      this._triggerFormValidation();
    }, 0);
    this.loading.set(false);
    this._cdr.markForCheck();
  }
  _initFormChangeSubscriptions() {
    this._createFormSubscription("target", (target) => {
      this.form.get("projectFlow.target")?.setValue(target);
      this._updateFormValidationKeys(target);
    });
    this._createFormSubscription("projectFlow.signUpForm.additionalFields", () => {
      this.form.get("projectFlow.signUpForm.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.signUpForm.allowAdditionalFields", () => {
      this.form.get("projectFlow.signUpForm.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.signUpForm.email", () => {
      this.form.get("projectFlow.signUpForm")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.signUpForm.phone", () => {
      this.form.get("projectFlow.signUpForm")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.representatives.information.allowAdditionalFields", () => {
      this.form.get("projectFlow.representatives.information.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.representatives.information.additionalFields", () => {
      this.form.get("projectFlow.representatives.information.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    });
    this._createFormSubscription("projectFlow.representatives.minRepresentatives", (minValue) => {
      const max = this.form.get("projectFlow.representatives.maxRepresentatives")?.value;
      if (!max)
        return;
      if (minValue <= max)
        return;
      this.form.get("projectFlow.representatives.maxRepresentatives")?.setValue(minValue);
      this.form.get("projectFlow.representatives.minRepresentatives")?.setValue(max);
    });
    this._createFormSubscription("projectFlow.representatives.maxRepresentatives", (maxValue) => {
      const min = this.form.get("projectFlow.representatives.minRepresentatives")?.value;
      if (!min)
        return;
      if (maxValue >= min)
        return;
      this.form.get("projectFlow.representatives.minRepresentatives")?.setValue(maxValue);
      this.form.get("projectFlow.representatives.maxRepresentatives")?.setValue(min);
    });
    this._createFormSubscription("projectFlow.steps.document", (v) => this._toggleDocumentControls(v));
    this._createFormSubscription("projectFlow.steps.businessVerification", (v) => this._toggleBusinessControls(v));
    this._createFormSubscription("projectFlow.steps.legalRepresentative", (v) => this._toggleLegalRepresentativeControls(v));
    this._createFormSubscription("projectFlow.steps.liveness", (v) => this._toggleLivenessControls(v));
    this._createFormSubscription("projectFlow.integrations.source", (v) => this._toggleIntegrationsControls(v));
  }
  _createFormSubscription(path, callback) {
    this.form.get(path)?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe((value) => {
      callback(value);
      setTimeout(() => this._cdr.markForCheck(), 0);
    });
  }
  _initProjectForm(project) {
    const defaultBranding = this._setup.defaultBranding;
    return this._formBuilder.group({
      allowedCountries: [project?.allowedCountries || [], [Validators.required]],
      contactEmail: [
        project?.contactEmail || "",
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
      ],
      currentStep: [project?.currentStep || 0],
      defaultLanguage: [project?.defaultLanguage || "en", [Validators.required]],
      lastStep: [project?.lastStep || 0],
      name: [project?.name || "", [Validators.required, Validators.maxLength(60)]],
      privacyUrl: [project?.privacyUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
      target: [project?.target || "personal", [Validators.required]],
      termsAndConditionsUrl: [project?.termsAndConditionsUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
      projectFlow: this._initProjectFlowForm(project?.target || "personal", project?.projectFlows?.[0] || {}),
      version: [project?.version ?? 3, [Validators.required]],
      branding: this._formBuilder.group({
        backgroundColor: [project?.branding?.backgroundColor || defaultBranding.backgroundColor, [Validators.required]],
        buttonColor: [project?.branding?.buttonColor || defaultBranding.buttonColor, [Validators.required]],
        buttonTextColor: [project?.branding?.buttonTextColor || defaultBranding.buttonTextColor, [Validators.required]],
        image: [project?.branding?.image || defaultBranding.image],
        imageBackgroundColor: [project?.branding?.imageBackgroundColor || defaultBranding.imageBackgroundColor, [Validators.required]],
        logo: [project?.branding?.logo || defaultBranding.logo, [Validators.required]],
        textColor: [project?.branding?.textColor || defaultBranding.textColor, [Validators.required]],
        titleColor: [project?.branding?.titleColor || defaultBranding.titleColor]
      }),
      dataProtection: this._formBuilder.group({
        address: [project?.dataProtection?.address || "", [Validators.required, Validators.pattern(ADDRESS_PATTERN)]],
        address2: [project?.dataProtection?.address2 || ""],
        city: [project?.dataProtection?.city || "", [Validators.required, Validators.pattern(CITY_NAME_PATTERN)]],
        country: [project?.dataProtection?.country || "", [Validators.required]],
        email: [
          project?.dataProtection?.email || "",
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
        ],
        name: [project?.dataProtection?.name || "", [Validators.required, Validators.pattern(PERSON_NAME_PATTERN)]],
        postalCode: [project?.dataProtection?.postalCode || "", [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-]{3,12}$/)]]
      })
    });
  }
  /**
   * Normalize `documents.verificationMethods` to v3/runtime values.
   *
   * The biometrics SDK and runtime only understand `"upload" | "scan"`.
   * Older data may contain `SCAN_AGENT` / `SCAN_STUDIO` / `SCAN_PROMPT` /
   * `SCAN_ZERO` which must be mapped to `scan`.
   */
  _normalizeVerificationMethods(raw) {
    if (!Array.isArray(raw))
      return [];
    const out = /* @__PURE__ */ new Set();
    for (const v of raw) {
      if (typeof v !== "string")
        continue;
      if (v === "upload")
        out.add("upload");
      else if (v === "scan" || v.startsWith("SCAN_"))
        out.add("scan");
    }
    return Array.from(out);
  }
  _initProjectFlowForm(target, currentData) {
    const rawBizStyle = currentData?.signUpForm?.businessBasicInfoStyle;
    const businessBasicInfoStyleNormalized = rawBizStyle === "name_number" ? "name_number" : rawBizStyle === "name" || rawBizStyle === "separate" ? "name" : "name_number";
    return this._formBuilder.group({
      _id: [currentData?._id || ""],
      status: [currentData?.status || "draft"],
      target: [target, [Validators.required]],
      type: ["onboarding", [Validators.required]],
      version: [currentData?.version ?? 3, [Validators.required]],
      business: this._formBuilder.group({
        attemptLimit: [currentData?.business?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
        criminalHistoryVerification: [currentData?.business?.criminalHistoryVerification || false],
        criminalHistoryVerificationEndpoints: [currentData?.business?.criminalHistoryVerificationEndpoints || []],
        documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.business?.documentTypes || [], "business"),
        informationVerification: [currentData?.business?.informationVerification || false],
        screening: [currentData?.business?.screening || false]
      }, { validators: SetupFormFactory.validators.documentsScreening() }),
      documents: this._formBuilder.group({
        attemptLimit: [currentData?.documents?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
        criminalHistoryVerification: [currentData?.documents?.criminalHistoryVerification || false],
        criminalHistoryVerificationEndpoints: [currentData?.documents?.criminalHistoryVerificationEndpoints || []],
        documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.documents?.documentTypes || [], "personal"),
        informationVerification: [currentData?.documents?.informationVerification || false],
        screening: [currentData?.documents?.screening || false],
        verificationMethods: [
          this._normalizeVerificationMethods(currentData?.documents?.verificationMethods),
          [Validators.required]
        ]
      }, { validators: SetupFormFactory.validators.documentsScreening() }),
      integrations: this._formBuilder.group({
        apiTestType: [currentData?.integrations?.apiTestType || "email"],
        apiTestValue: [currentData?.integrations?.apiTestValue || ""],
        apiUrl: [currentData?.integrations?.apiUrl || "", [Validators.pattern(STRICT_URL_PATTERN)]],
        redirectUrl: [currentData?.integrations?.redirectUrl || "", [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
        source: [currentData?.integrations?.source || "NONE", [Validators.required, this._preventCsvSource]],
        strategy: [currentData?.integrations?.strategy || "none"],
        webhook: [currentData?.integrations?.webhook || null]
      }),
      liveness: this._formBuilder.group({
        attemptLimit: [currentData?.liveness?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
        minScore: [currentData?.liveness?.minScore || 0.65, [Validators.min(0.52), Validators.max(0.9)]],
        compareMinScore: [currentData?.liveness?.compareMinScore || 0.85, [Validators.min(0.65), Validators.max(0.95)]],
        searchMinScore: [currentData?.liveness?.searchMinScore || 0.85, [Validators.min(0.81), Validators.max(0.95)]],
        searchMode: [currentData?.liveness?.searchMode || "FAST"],
        kycType: ["traditional"]
      }),
      representatives: this._formBuilder.group({
        maxRepresentatives: [
          currentData?.representatives?.maxRepresentatives || 3,
          [Validators.required, Validators.min(1), Validators.max(10)]
        ],
        minRepresentatives: [
          currentData?.representatives?.minRepresentatives || 1,
          [Validators.required, Validators.min(1), Validators.max(10)]
        ],
        notificationType: [currentData?.representatives?.notificationType || "whatsapp", [Validators.required]],
        documents: this._formBuilder.group({
          attemptLimit: [currentData?.representatives?.documents?.attemptLimit || 3, [Validators.min(1), Validators.max(5)]],
          criminalHistoryVerification: [currentData?.representatives?.documents?.criminalHistoryVerification || false],
          criminalHistoryVerificationEndpoints: [currentData?.representatives?.documents?.criminalHistoryVerificationEndpoints || []],
          documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.representatives?.documents?.documentTypes || [], "personal"),
          informationVerification: [currentData?.representatives?.documents?.informationVerification || false],
          screening: [currentData?.representatives?.documents?.screening || false],
          verificationMethods: [
            this._normalizeVerificationMethods(currentData?.representatives?.documents?.verificationMethods),
            [Validators.required]
          ]
        }, { validators: SetupFormFactory.validators.documentsScreening() }),
        information: this._formBuilder.group({
          additionalFields: [currentData?.representatives?.information?.additionalFields || []],
          allowAdditionalFields: [
            currentData?.representatives?.information?.allowAdditionalFields || false,
            [SetupFormFactory.validators.additionalFields()]
          ],
          countryCode: [currentData?.representatives?.information?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
          email: [currentData?.representatives?.information?.email || false],
          emailGateway: [currentData?.representatives?.information?.emailGateway || "none"],
          fullName: [true, [Validators.requiredTrue]],
          fullNameStyle: [currentData?.representatives?.information?.fullNameStyle || "separate", [Validators.required]],
          phone: [currentData?.representatives?.information?.phone || false],
          phoneGateway: [currentData?.representatives?.information?.phoneGateway || "whatsapp"],
          showPrivacyNotice: [currentData?.representatives?.information?.showPrivacyNotice || true],
          showTermsAndConditions: [currentData?.representatives?.information?.showTermsAndConditions || true]
        }),
        liveness: this._formBuilder.group({
          attemptLimit: [
            currentData?.representatives?.liveness?.attemptLimit || 3,
            [Validators.required, Validators.min(1), Validators.max(5)]
          ],
          minScore: [currentData?.liveness?.minScore || 0.65, [Validators.min(0.52), Validators.max(0.9)]],
          compareMinScore: [currentData?.representatives?.liveness?.compareMinScore || 0.85, [Validators.min(0.65), Validators.max(0.95)]],
          searchMinScore: [currentData?.representatives?.liveness?.searchMinScore || 0.85, [Validators.min(0.81), Validators.max(0.95)]],
          searchMode: [currentData?.representatives?.liveness?.searchMode || "FAST"],
          kycType: ["traditional"]
        })
      }),
      signUpForm: this._formBuilder.group({
        additionalFields: [currentData?.signUpForm?.additionalFields || []],
        address: [currentData?.signUpForm?.address || false],
        allowAdditionalFields: [
          currentData?.signUpForm?.allowAdditionalFields || false,
          [SetupFormFactory.validators.additionalFields()]
        ],
        countryCode: [currentData?.signUpForm?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
        email: [currentData?.signUpForm?.email || false],
        emailGateway: [currentData?.signUpForm?.emailGateway || "mailgun"],
        businessBasicInfo: [currentData?.signUpForm?.businessBasicInfo || true, [Validators.requiredTrue]],
        businessBasicInfoStyle: [businessBasicInfoStyleNormalized, [Validators.required]],
        fullName: [true, [Validators.requiredTrue]],
        fullNameStyle: [currentData?.signUpForm?.fullNameStyle || "separate", [Validators.required]],
        phone: [currentData?.signUpForm?.phone || false],
        phoneGateway: [currentData?.signUpForm?.phoneGateway || "both"],
        showPrivacyNotice: [currentData?.signUpForm?.showPrivacyNotice || true],
        showTermsAndConditions: [currentData?.signUpForm?.showTermsAndConditions || true]
      }, { validators: SetupFormFactory.validators.atLeastOneContactMethod() }),
      steps: this._formBuilder.group({
        businessVerification: [currentData?.steps?.businessVerification || false],
        document: [
          currentData?.steps?.document || "mandatory",
          [Validators.required, SetupFormFactory.validators.requiredIfDocumentStep()]
        ],
        legalRepresentative: [currentData?.steps?.legalRepresentative || "skip", [Validators.required]],
        liveness: [currentData?.steps?.liveness || "skip", [Validators.required]]
      })
    });
  }
  _pickV3SignUpFormPayload(signUpForm, target) {
    const keys = target === "business" ? V3_SIGNUP_FORM_KEYS_BUSINESS : V3_SIGNUP_FORM_KEYS_PERSONAL;
    const out = {};
    for (const k of keys) {
      if (signUpForm != null && k in signUpForm && signUpForm[k] !== void 0) {
        out[k] = signUpForm[k];
      }
    }
    return out;
  }
  /**
   * Trim the form value down to only the slice relevant to the current step before
   * sending to the v3 backend (mirrors verifik-client-panel ProjectSmartEnrollComponent).
   */
  _prepareProjectFlowData(data) {
    const _a = data, { dataProtection, branding, projectFlow: projectFlowData } = _a, restProject = __objRest(_a, ["dataProtection", "branding", "projectFlow"]);
    const _b = projectFlowData, { steps, business, documents, liveness, signUpForm, representatives, integrations } = _b, restProjectFlow = __objRest(_b, ["steps", "business", "documents", "liveness", "signUpForm", "representatives", "integrations"]);
    const formData = restProject;
    if (this.stepIndex === 0) {
      formData.dataProtection = dataProtection;
      return formData;
    }
    if (this.stepIndex === 1) {
      const target = data.target || projectFlowData?.target || "personal";
      const signUpFormV3 = this._pickV3SignUpFormPayload(signUpForm, target);
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { signUpForm: signUpFormV3 });
    } else if (this.stepIndex === 2) {
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { steps });
      if (data.projectFlow.target === "business") {
        formData.projectFlow.business = !steps.businessVerification ? {} : business;
      } else {
        formData.projectFlow.documents = steps.document === "skip" ? {} : documents;
      }
    } else if (this.stepIndex === 3) {
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { steps });
      if (data.projectFlow.target === "business") {
        formData.projectFlow.representatives = steps.legalRepresentative === "skip" ? void 0 : representatives;
      } else {
        const livenessFormGroup = this.form.get("projectFlow.liveness");
        const livenessRawValue = livenessFormGroup?.getRawValue ? livenessFormGroup.getRawValue() : liveness;
        if (steps.liveness === "skip") {
          formData.projectFlow.liveness = {
            kycType: "traditional"
          };
        } else {
          formData.projectFlow.liveness = __spreadProps(__spreadValues({}, livenessRawValue), {
            kycType: "traditional"
          });
        }
      }
    } else if (this.stepIndex === 4) {
      formData.projectFlow = __spreadProps(__spreadValues({}, restProjectFlow), { integrations });
    } else if (this.stepIndex === 5) {
      formData.branding = branding;
    }
    return formData;
  }
  // ---------------------------------------------------------------------------
  // Toggle helpers — copied verbatim
  // ---------------------------------------------------------------------------
  _toggleBusinessControls(businessVerificationStep) {
    const businessFormGroup = this.form.get("projectFlow.business");
    if (!businessFormGroup)
      return;
    const shouldDisable = !businessVerificationStep;
    this._toggleDocumentGroupControls(businessFormGroup, shouldDisable);
    if (!shouldDisable) {
      this._refreshDocumentTypesValidatorsAfterGroupEnable(businessFormGroup);
    }
  }
  _toggleDocumentControls(documentStep) {
    const documentsFormGroup = this.form.get("projectFlow.documents");
    if (!documentsFormGroup)
      return;
    const shouldSkip = documentStep === "skip";
    this._toggleDocumentGroupControls(documentsFormGroup, shouldSkip);
    if (!shouldSkip) {
      this._refreshDocumentTypesValidatorsAfterGroupEnable(documentsFormGroup);
    }
  }
  _toggleLivenessControls(livenessStep) {
    const livenessFormGroup = this.form.get("projectFlow.liveness");
    if (!livenessFormGroup)
      return;
    this._toggleLivenessGroupControls(livenessFormGroup, livenessStep === "skip");
  }
  _toggleDocumentGroupControls(formGroup, shouldDisable) {
    const map = {
      attemptLimit: [Validators.required, Validators.min(1), Validators.max(5)],
      documentTypes: [SetupFormFactory.validators.documentVerificationTypes()],
      screening: [],
      verificationMethods: [Validators.required]
    };
    Object.keys(map).forEach((key) => {
      const control = formGroup.get(key);
      if (!control)
        return;
      if (shouldDisable) {
        control.clearValidators();
        control.updateValueAndValidity();
        control.disable();
      } else {
        control.enable();
        control.setValidators(map[key]);
        control.updateValueAndValidity();
      }
    });
    if (shouldDisable) {
      formGroup.clearValidators();
      formGroup.updateValueAndValidity();
      formGroup.disable();
    } else {
      formGroup.enable();
      formGroup.setValidators([SetupFormFactory.validators.documentsScreening()]);
      formGroup.updateValueAndValidity();
    }
  }
  _toggleIntegrationsControls(source) {
    if (!source)
      return;
    const strategyControl = this.form.get("projectFlow.integrations.strategy");
    const apiTestTypeControl = this.form.get("projectFlow.integrations.apiTestType");
    const apiTestValueControl = this.form.get("projectFlow.integrations.apiTestValue");
    const apiUrlControl = this.form.get("projectFlow.integrations.apiUrl");
    if (source !== "NONE") {
      strategyControl?.setValue("blacklist");
      if (source === "API") {
        apiTestTypeControl?.setValidators([Validators.required]);
        apiTestValueControl?.setValidators([Validators.required]);
        apiUrlControl?.setValidators([Validators.required, Validators.pattern(STRICT_URL_PATTERN)]);
      } else {
        apiTestTypeControl?.clearValidators();
        apiTestValueControl?.clearValidators();
        apiUrlControl?.clearValidators();
      }
    } else {
      strategyControl?.setValue("none");
      apiTestTypeControl?.clearValidators();
      apiTestValueControl?.clearValidators();
      apiUrlControl?.clearValidators();
    }
    apiUrlControl?.updateValueAndValidity();
    apiTestValueControl?.updateValueAndValidity();
    apiTestTypeControl?.updateValueAndValidity();
    strategyControl?.updateValueAndValidity();
  }
  _toggleLegalRepresentativeControls(value) {
    const representativesGroup = this.form.get("projectFlow.representatives");
    if (!representativesGroup)
      return;
    const map = {
      documents: [SetupFormFactory.validators.documentsScreening()],
      information: [],
      liveness: [],
      "documents.attemptLimit": [Validators.required],
      "documents.documentTypes": [SetupFormFactory.validators.documentVerificationTypes()],
      "documents.screening": [],
      "documents.verificationMethods": [Validators.required],
      "information.additionalFields": [],
      "information.allowAdditionalFields": [SetupFormFactory.validators.additionalFields()],
      "information.email": [],
      "information.emailGateway": [],
      "information.fullName": [Validators.required],
      "information.fullNameStyle": [Validators.required],
      "information.phone": [],
      "information.phoneGateway": [],
      "information.showPrivacyNotice": [],
      "information.showTermsAndConditions": [],
      "liveness.attemptLimit": [Validators.required],
      "liveness.minScore": [Validators.required, Validators.min(0.52), Validators.max(0.9)],
      "liveness.compareMinScore": [Validators.required, Validators.min(0.65), Validators.max(0.95)],
      "liveness.searchMinScore": [Validators.required, Validators.min(0.81), Validators.max(0.95)],
      "liveness.searchMode": [Validators.required]
    };
    Object.keys(map).forEach((key) => {
      const control = representativesGroup.get(key);
      if (!control)
        return;
      if (value === "skip") {
        control.clearValidators();
        control.updateValueAndValidity();
        control.disable();
      } else {
        control.enable();
        control.setValidators(map[key]);
        control.updateValueAndValidity();
      }
    });
    if (value === "skip") {
      representativesGroup.updateValueAndValidity();
      representativesGroup.disable();
    } else {
      representativesGroup.enable();
      representativesGroup.updateValueAndValidity();
    }
    if (value !== "skip") {
      this._refreshDocumentTypesValidatorsAfterGroupEnable(representativesGroup.get("documents"));
    }
  }
  /**
   * After `documentTypes` is re-enabled from a skipped/disabled branch, inactive categories keep
   * template validators attached at creation time unless we strip them explicitly.
   */
  _refreshDocumentTypesValidatorsAfterGroupEnable(container) {
    if (!container)
      return;
    const group = container;
    const documentTypesCtrl = group.get("documentTypes");
    if (!documentTypesCtrl?.length)
      return;
    this._factory.updateValidatorsForActiveState(documentTypesCtrl);
  }
  _toggleLivenessGroupControls(livenessGroup, shouldDisable) {
    const map = {
      attemptLimit: [Validators.required],
      minScore: [Validators.required, Validators.min(0.52), Validators.max(0.9)],
      compareMinScore: [Validators.required, Validators.min(0.65), Validators.max(0.95)],
      searchMinScore: [Validators.required, Validators.min(0.81), Validators.max(0.95)],
      searchMode: [Validators.required]
    };
    Object.keys(map).forEach((key) => {
      const control = livenessGroup.get(key);
      if (!control)
        return;
      if (shouldDisable) {
        control.clearValidators();
        control.updateValueAndValidity();
        control.disable();
      } else {
        control.enable();
        control.setValidators(map[key]);
        control.updateValueAndValidity();
      }
    });
    const kycTypeControl = livenessGroup.get("kycType");
    kycTypeControl?.setValue("traditional", { emitEvent: false });
    kycTypeControl?.enable({ emitEvent: false });
    if (shouldDisable) {
      livenessGroup.clearValidators();
      livenessGroup.updateValueAndValidity();
      livenessGroup.disable();
    } else {
      livenessGroup.enable();
      livenessGroup.setValidators([Validators.required]);
      livenessGroup.updateValueAndValidity();
    }
  }
  _triggerFormValidation() {
    this.form.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.signUpForm.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.signUpForm.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.representatives.information.allowAdditionalFields")?.updateValueAndValidity({ emitEvent: false });
    this.form.get("projectFlow.representatives.information.additionalFields")?.updateValueAndValidity({ emitEvent: false });
    const documentsArray = this.form.get("projectFlow.documents.documentTypes");
    const businessArray = this.form.get("projectFlow.business.documentTypes");
    const representativesArray = this.form.get("projectFlow.representatives.documents.documentTypes");
    if (documentsArray)
      this._factory.updateValidatorsForActiveState(documentsArray);
    if (businessArray)
      this._factory.updateValidatorsForActiveState(businessArray);
    if (representativesArray)
      this._factory.updateValidatorsForActiveState(representativesArray);
  }
  _markControlTreeState(control, state) {
    if (state === "dirty") {
      control.markAsDirty({ onlySelf: true });
    } else {
      control.markAsTouched({ onlySelf: true });
    }
    if (control instanceof FormGroup) {
      Object.values(control.controls).forEach((c) => this._markControlTreeState(c, state));
      return;
    }
    if (control instanceof FormArray) {
      control.controls.forEach((c) => this._markControlTreeState(c, state));
    }
  }
  _updateFormValidationKeys(target) {
    if (target === "business")
      this.formKeys = this._setup.businessTargetFormKeys;
    else if (target === "personal")
      this.formKeys = this._setup.personalTargetFormKeys;
    else
      this.formKeys = this._setup.defaultFormKeys;
  }
  confirmNavigation() {
    return this._confirm.open({
      title: this._t("smartEnrollProjects.setup.unsaved_changes"),
      message: this._t("smartEnrollProjects.setup.unsaved_changes_message"),
      actions: {
        confirm: { show: true, label: this._t("smartEnrollProjects.setup.exit_without_saving") },
        cancel: { show: true, label: this._t("cancel") }
      }
    });
  }
  nextStep() {
    if (!this.isFormValidForStep(this.stepIndex))
      return;
    if (this.stepIndex === 2) {
      const target = this.form.get("target")?.value;
      const documentStepValue = target === "business" ? this.form.get("projectFlow.steps.businessVerification")?.value : this.form.get("projectFlow.steps.document")?.value;
      const isDocumentSkipped = target === "business" ? !documentStepValue : documentStepValue === "skip";
      if (isDocumentSkipped) {
        this._showDocumentVerificationConfirmationBeforeNext();
        return;
      }
    }
    const isLast = this.stepIndex === this.steps.length - 1;
    if (isLast) {
      this._router.navigate(["/smart-enroll/projects", this.projectId]);
    } else {
      this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", this.stepIndex + 1]);
    }
  }
  previousStep() {
    if (this.stepIndex === 0) {
      this.returnToProjects();
      return;
    }
    this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", this.stepIndex - 1]);
  }
  saveProject() {
    if (this.saving() || !this.isFormValidForStep(this.stepIndex))
      return of();
    this.saving.set(true);
    const formValue = this.form.getRawValue ? this.form.getRawValue() : this.form.value;
    const preparedData = __spreadProps(__spreadValues({}, this._prepareProjectFlowData(formValue)), {
      projectFlowType: "onboarding"
    });
    const observable = this.project?._id ? this._setup.updateProject(this.project._id, preparedData) : this._setup.createProject(preparedData);
    return observable.pipe(catchError((err) => throwError(() => err)));
  }
  previewProject() {
    if (this.projectId === "new")
      return;
    if (!Object.keys(this.formKeys).every((idx) => this.isFormValidForStep(Number(idx)))) {
      this._snack.open(this._t("smartEnrollProjects.setup.setup_invalid"), this._t("close"), { duration: 3e3 });
      return;
    }
    const origin = window.location.origin;
    const baseUrl = environment.production && environment.kycBaseUrl ? environment.kycBaseUrl : environment.sandBoxKYCBaseUrl || environment.kycBaseUrl || `${origin}`;
    const url = `${baseUrl}/sign-up/${this.projectId}`;
    window.open(url, "_blank");
  }
  returnToProjects() {
    this._router.navigate(["/smart-enroll/projects"]);
  }
  /**
   * Applies {@link patchSmartEnrollSetupDevSample} and re-syncs validators (documents/liveness skipped).
   */
  fillDevSampleWizard() {
    if (!this.devQuickFillEnabled || this.projectId !== "new" || !this.form)
      return;
    if (this.loading() || this.saving())
      return;
    const allowedCountryPool = this._countryService.ipCountries.map((c) => c.country).filter((c) => c !== "All");
    patchSmartEnrollSetupDevSample(this.form, { redirectOrigin: environment.thisUrl, allowedCountryPool });
    const biz = this.form.get("projectFlow.steps.businessVerification")?.value;
    const documentStep = this.form.get("projectFlow.steps.document")?.value;
    const livenessStep = this.form.get("projectFlow.steps.liveness")?.value;
    const legalRep = this.form.get("projectFlow.steps.legalRepresentative")?.value;
    const intSource = this.form.get("projectFlow.integrations.source")?.value;
    this._updateFormValidationKeys(String(this.form.get("target")?.value || "personal"));
    this._toggleBusinessControls(biz);
    this._toggleDocumentControls(documentStep);
    this._toggleLivenessControls(livenessStep);
    this._toggleLegalRepresentativeControls(legalRep);
    this._toggleIntegrationsControls(intSource);
    this._markControlTreeState(this.form, "dirty");
    this._markControlTreeState(this.form, "touched");
    this._triggerFormValidation();
    this._snack.open(this._t("smartEnrollProjects.setup.dev_quick_fill_applied"), this._t("close"), { duration: 3500 });
    this._cdr.markForCheck();
  }
  updateProjectId(newProjectId) {
    this.projectId = newProjectId;
    if (this.project)
      this.project._id = newProjectId;
    this._setup.projectId = newProjectId;
  }
  closePreview() {
    this.isPreviewExpanded = false;
  }
  togglePreview() {
    this.isPreviewExpanded = !this.isPreviewExpanded;
  }
  /** Allow the host template to read the current target without poking the form group. */
  get currentTarget() {
    return this.form?.get("target")?.value || "personal";
  }
  /** FormGroup for the sign-up form step (mirrors the sub-tree the child expects). */
  signUpFormGroup() {
    return this.form.get("projectFlow.signUpForm");
  }
  /** FormGroup for the documents step (personal target → documents, business → business). */
  documentsFormGroup() {
    const path = this.currentTarget === "business" ? "projectFlow.business" : "projectFlow.documents";
    return this.form.get(path);
  }
  /** Step control name passed to the documents step. */
  documentsStepFormControlName() {
    return this.currentTarget === "business" ? "businessVerification" : "document";
  }
  /** FormGroup for the liveness step (only used by personal target on step 3). */
  livenessFormGroup() {
    return this.form.get("projectFlow.liveness");
  }
  /** Live branding value for the preview pane. */
  brandingValue() {
    return this.form?.get("branding")?.value;
  }
  /** Preview views to render for the current step (empty array hides the pane). */
  previewViews() {
    const map = this.currentTarget === "business" ? this._setup.businessPreviewViews : this._setup.personalPreviewViews;
    return map[this.stepIndex] ?? [];
  }
  _showDocumentVerificationConfirmationBeforeNext() {
    const dialogRef = this._confirm.open({
      title: this._t("smartEnrollProjects.setup.documents.confirm_skip_title"),
      message: this._t("smartEnrollProjects.setup.documents.confirm_skip_message"),
      actions: {
        confirm: {
          show: true,
          label: this._t("smartEnrollProjects.setup.documents.confirm_skip_yes"),
          color: "warn"
        },
        cancel: { show: true, label: this._t("smartEnrollProjects.setup.documents.confirm_skip_back") }
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        const isLast = this.stepIndex === this.steps.length - 1;
        if (isLast) {
          this._router.navigate(["/smart-enroll/projects", this.projectId]);
        } else {
          this._router.navigate(["/smart-enroll/projects", this.projectId, "setup", this.stepIndex + 1]);
        }
      }
    });
  }
  _t(key, params) {
    return this._transloco.translate(key, params) ?? key;
  }
  static {
    this.\u0275fac = function SetupHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupHostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupHostComponent, selectors: [["setup-host"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-5xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "disabled"], [3, "form", "isStepValid", "loading", "saving"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-7xl"], [1, "flex", "flex-1", "items-center", "justify-center", "py-20"], [1, "grid", "grid-cols-1", "gap-6", "xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)]"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click", "disabled"], [1, "mr-1"], [1, "!h-4", "!w-4"], ["diameter", "40"], [1, "flex", "flex-col", "gap-6"], [3, "form", "formGroup", "formType", "loading", "saving"], [3, "form", "formGroup", "stepFormControlName", "loading", "saving"], [3, "form", "loading", "saving"], [3, "titleKey", "form", "loading", "saving"], [1, "flex", "items-center", "justify-between", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click", "disabled"], [1, "mr-1", "!h-4", "!w-4"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "min-w-32", "rounded-xl", 3, "click", "disabled"], ["diameter", "18", 1, "mr-2", "inline-block"], [1, "xl:sticky", "xl:top-6", "xl:self-start", "xl:max-h-[calc(100vh-3rem)]"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "rounded-2xl", "border", "border-amber-200/80", "bg-amber-50/90", "px-4", "py-3", "text-sm", "dark:border-amber-900/50", "dark:bg-amber-950/40"], [1, "text-amber-900", "dark:text-amber-100/95"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", "border-amber-400/70", "text-amber-950", "dark:border-amber-700", "dark:text-amber-50", 3, "click", "disabled"], [3, "form", "formGroup", "loading", "saving"], [3, "branding", "form", "view"]], template: function SetupHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupHostComponent_ng_container_0_Template, 31, 12, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      NgControlStatusGroup,
      FormGroupDirective,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective,
      SetupBreadcrumbsComponent,
      SetupStepStubComponent,
      SetupBasicSetupComponent,
      SetupSignUpFormComponent,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupRepresentativesComponent,
      SetupIntegrationsComponent,
      SetupUserInterfaceComponent,
      SmartEnrollPreviewComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=setup-host.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupHostComponent, [{
    type: Component,
    args: [{ selector: "setup-host", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      TranslocoModule,
      SetupBreadcrumbsComponent,
      SetupStepStubComponent,
      SetupBasicSetupComponent,
      SetupSignUpFormComponent,
      SetupDocumentsComponent,
      SetupLivenessComponent,
      SetupRepresentativesComponent,
      SetupIntegrationsComponent,
      SetupUserInterfaceComponent,
      SmartEnrollPreviewComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
        <header\r
            class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
        >\r
            <div class="mx-auto flex w-full max-w-5xl flex-col gap-5">\r
                <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                    <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">\r
                        Verifik\r
                    </a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <a\r
                        routerLink="/smart-enroll/projects"\r
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >\r
                        {{ t('smartEnrollProjects.title') }}\r
                    </a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <a\r
                        [routerLink]="['/smart-enroll/projects', projectId]"\r
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >\r
                        {{ project?.name || projectId }}\r
                    </a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t('smartEnrollProjects.setup.title') }}</span>\r
                </div>\r
\r
                <div class="flex flex-wrap items-start justify-between gap-3">\r
                    <div class="flex min-w-0 items-start gap-3">\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            (click)="returnToProjects()"\r
                            class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                            [attr.aria-label]="t('smartEnrollProjects.backToList')"\r
                        >\r
                            <mat-icon>arrow_back</mat-icon>\r
                        </button>\r
                        <div class="min-w-0">\r
                            <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">\r
                                {{ projectId === 'new' ? t('smartEnrollProjects.setup.new_project') : project?.name }}\r
                            </h1>\r
                            @if (projectId === 'new') {\r
                                <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollProjects.setup.project_description') }}\r
                                </p>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                    @if (project?.projectFlows?.[0]?.status === 'active' && projectId !== 'new') {\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="button"\r
                            class="shrink-0 rounded-xl"\r
                            [disabled]="!canNavigate"\r
                            (click)="previewProject()"\r
                        >\r
                            <span class="mr-1">{{ t('smartEnrollProjects.setup.see_live_project') }}</span>\r
                            <mat-icon class="!h-4 !w-4">open_in_new</mat-icon>\r
                        </button>\r
                    }\r
                </div>\r
\r
                @if (form) {\r
                    <setup-breadcrumbs\r
                        [form]="form"\r
                        [isStepValid]="isFormValidForStep"\r
                        [loading]="loading()"\r
                        [saving]="saving()"\r
                    ></setup-breadcrumbs>\r
                }\r
            </div>\r
        </header>\r
\r
        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
            <div class="mx-auto w-full max-w-7xl">\r
                @if (loading()) {\r
                    <div class="flex flex-1 items-center justify-center py-20">\r
                        <mat-spinner diameter="40"></mat-spinner>\r
                    </div>\r
                } @else if (form) {\r
                    <div class="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">\r
                        <div class="flex flex-col gap-6">\r
                        @switch (stepIndex) {\r
                            @case (0) {\r
                                @if (devQuickFillEnabled && projectId === 'new') {\r
                                    <div class="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm dark:border-amber-900/50 dark:bg-amber-950/40">\r
                                        <span class="text-amber-900 dark:text-amber-100/95">\r
                                            {{ t('smartEnrollProjects.setup.dev_quick_fill_hint') }}\r
                                        </span>\r
                                        <button\r
                                            mat-stroked-button\r
                                            type="button"\r
                                            class="shrink-0 rounded-xl border-amber-400/70 text-amber-950 dark:border-amber-700 dark:text-amber-50"\r
                                            [disabled]="!canNavigate"\r
                                            (click)="fillDevSampleWizard()"\r
                                        >\r
                                            {{ t('smartEnrollProjects.setup.dev_quick_fill') }}\r
                                        </button>\r
                                    </div>\r
                                }\r
                                <setup-basic-setup\r
                                    [form]="form"\r
                                    [loading]="loading()"\r
                                    [saving]="saving()"\r
                                ></setup-basic-setup>\r
                            }\r
                            @case (1) {\r
                                <setup-sign-up-form\r
                                    [form]="form"\r
                                    [formGroup]="signUpFormGroup()"\r
                                    [formType]="currentTarget"\r
                                    [loading]="loading()"\r
                                    [saving]="saving()"\r
                                ></setup-sign-up-form>\r
                            }\r
                            @case (2) {\r
                                <setup-documents\r
                                    [form]="form"\r
                                    [formGroup]="documentsFormGroup()"\r
                                    [stepFormControlName]="documentsStepFormControlName()"\r
                                    [loading]="loading()"\r
                                    [saving]="saving()"\r
                                ></setup-documents>\r
                            }\r
                            @case (3) {\r
                                @if (currentTarget === 'business') {\r
                                    <setup-representatives\r
                                        [form]="form"\r
                                        [loading]="loading()"\r
                                        [saving]="saving()"\r
                                    ></setup-representatives>\r
                                } @else {\r
                                    <setup-liveness\r
                                        [form]="form"\r
                                        [formGroup]="livenessFormGroup()"\r
                                        [loading]="loading()"\r
                                        [saving]="saving()"\r
                                    ></setup-liveness>\r
                                }\r
                            }\r
                            @case (4) {\r
                                <setup-integrations\r
                                    [form]="form"\r
                                    [loading]="loading()"\r
                                    [saving]="saving()"\r
                                ></setup-integrations>\r
                            }\r
                            @case (5) {\r
                                <setup-user-interface\r
                                    [form]="form"\r
                                    [loading]="loading()"\r
                                    [saving]="saving()"\r
                                ></setup-user-interface>\r
                            }\r
                            @default {\r
                                <setup-step-stub\r
                                    [titleKey]="(steps[stepIndex] || 'smartEnrollProjects.setup.stub.title')"\r
                                    [form]="form"\r
                                    [loading]="loading()"\r
                                    [saving]="saving()"\r
                                ></setup-step-stub>\r
                            }\r
                        }\r
\r
                        <div class="flex items-center justify-between gap-3">\r
                            <button\r
                                mat-stroked-button\r
                                type="button"\r
                                (click)="previousStep()"\r
                                [disabled]="!canNavigate"\r
                                class="rounded-xl"\r
                            >\r
                                <mat-icon class="mr-1 !h-4 !w-4">arrow_back</mat-icon>\r
                                {{ t('smartEnrollProjects.setup.go_back') }}\r
                            </button>\r
                            <button\r
                                mat-flat-button\r
                                color="primary"\r
                                type="button"\r
                                (click)="nextStep()"\r
                                [disabled]="!canNavigate || !isFormValidForStep(stepIndex)"\r
                                class="min-w-32 rounded-xl"\r
                            >\r
                                @if (saving()) {\r
                                    <mat-spinner diameter="18" class="mr-2 inline-block"></mat-spinner>\r
                                }\r
                                {{ t('smartEnrollProjects.setup.continue') }}\r
                            </button>\r
                        </div>\r
                        </div>\r
\r
                        @if (previewViews().length > 0) {\r
                            <aside class="xl:sticky xl:top-6 xl:self-start xl:max-h-[calc(100vh-3rem)]">\r
                                <smart-enroll-preview\r
                                    [branding]="brandingValue()"\r
                                    [form]="form"\r
                                    [view]="previewViews()"\r
                                ></smart-enroll-preview>\r
                            </aside>\r
                        }\r
                    </div>\r
                }\r
            </div>\r
        </main>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/setup/setup-host.component.scss */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=setup-host.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupHostComponent, { className: "SetupHostComponent", filePath: "src/app/modules/smart-enroll/projects/setup/setup-host.component.ts", lineNumber: 125 });
})();
export {
  SetupHostComponent
};
//# sourceMappingURL=chunk-LJVO2S6M.js.map
