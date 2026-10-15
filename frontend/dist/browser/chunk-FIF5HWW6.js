import {
  MatChipsModule
} from "./chunk-UGO33WM5.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-BMJYCS3E.js";
import {
  CountryService
} from "./chunk-QDHC3TI3.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-DW2XB3R4.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WXNXCCYE.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-GG23NHUM.js";
import {
  MatButtonModule
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MaxLengthValidator,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-VENEX45A.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  Input,
  Optional,
  Self,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-I5BUD46C.js";

// src/app/shared/validators/validation-patterns.ts
var STRICT_URL_PATTERN = /^https?:\/\/(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?|localhost|(?:\d{1,3}\.){3}\d{1,3})(?::\d+)?(?:\/[^\s]*)?$/i;
var PERSON_NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,100}$/;
var CITY_NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,80}$/;
var ADDRESS_PATTERN = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s.,#-]{5,120}$/;

// src/app/modules/smart-enroll/projects/setup/steps/basic-setup/basic-setup.component.ts
var _forTrack0 = ($index, $item) => $item.code;
var _forTrack1 = ($index, $item) => $item.country;
function SetupBasicSetupComponent_ng_container_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    \u0275\u0275property("value", lang_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r2.label);
  }
}
function SetupBasicSetupComponent_ng_container_0_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function SetupBasicSetupComponent_ng_container_0_Conditional_35_For_2_Template_button_click_2_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.removeCountry(c_r4));
    });
    \u0275\u0275elementStart(3, "mat-icon", 32);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.countryLabel(c_r4), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("smartEnrollProjects.setup.basicSetup.allowed.remove"));
  }
}
function SetupBasicSetupComponent_ng_container_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, SetupBasicSetupComponent_ng_container_0_Conditional_35_For_2_Template, 5, 2, "span", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.allowedCountries);
  }
}
function SetupBasicSetupComponent_ng_container_0_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", c_r7.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6(c_r7.name));
  }
}
function SetupBasicSetupComponent_ng_container_0_For_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", c_r8.country);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6(c_r8.name));
  }
}
function SetupBasicSetupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 2)(2, "section", 3)(3, "header", 4)(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "mat-form-field", 8)(10, "mat-label");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 9);
    \u0275\u0275elementStart(13, "mat-hint", 10)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "mat-form-field", 8)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 8)(21, "mat-label");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 12);
    \u0275\u0275repeaterCreate(24, SetupBasicSetupComponent_ng_container_0_For_25_Template, 2, 2, "mat-option", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-hint");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "section", 3)(29, "header", 4)(30, "h2", 5);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 6);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 14);
    \u0275\u0275template(35, SetupBasicSetupComponent_ng_container_0_Conditional_35_Template, 3, 0, "div", 15);
    \u0275\u0275elementStart(36, "mat-form-field", 8)(37, "mat-label");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 16);
    \u0275\u0275elementStart(40, "mat-autocomplete", 17, 0);
    \u0275\u0275listener("optionSelected", function SetupBasicSetupComponent_ng_container_0_Template_mat_autocomplete_optionSelected_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onAllowedCountryPicked($event));
    });
    \u0275\u0275repeaterCreate(42, SetupBasicSetupComponent_ng_container_0_For_43_Template, 2, 2, "mat-option", 13, _forTrack1);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "section", 3)(45, "header", 4)(46, "h2", 5);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 6);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 18)(51, "mat-form-field", 8)(52, "mat-label");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-form-field", 8)(56, "mat-label");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "section", 21)(60, "header", 4)(61, "h2", 5);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 6);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 18)(66, "mat-form-field", 8)(67, "mat-label");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-form-field", 8)(71, "mat-label");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-form-field", 24)(75, "mat-label");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "mat-form-field", 24)(79, "mat-label");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-form-field", 8)(83, "mat-label");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "mat-form-field", 8)(87, "mat-label");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "mat-form-field", 24)(91, "mat-label");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "mat-select", 29);
    \u0275\u0275repeaterCreate(94, SetupBasicSetupComponent_ng_container_0_For_95_Template, 2, 2, "mat-option", 13, _forTrack1);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const allowedCountriesAuto_r9 = \u0275\u0275reference(41);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r4.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.identity.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.identity.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.identity.name"));
    \u0275\u0275advance();
    \u0275\u0275property("maxlength", ctx_r4.MAX_NAME_LENGTH + 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-amber-700", ctx_r4.nameLengthStatus === "warning")("text-red-700", ctx_r4.nameLengthStatus === "danger")("dark:text-amber-300", ctx_r4.nameLengthStatus === "warning")("dark:text-red-300", ctx_r4.nameLengthStatus === "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r4.nameLength, "/", ctx_r4.MAX_NAME_LENGTH, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.identity.contactEmail"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.identity.defaultLanguage"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.defaultLanguages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.identity.defaultLanguageHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.allowed.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.allowed.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.allowedCountries.length ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.allowed.add"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r4.allowedCountryFilterCtrl)("placeholder", t_r6("smartEnrollProjects.setup.basicSetup.allowed.search"))("matAutocomplete", allowedCountriesAuto_r9);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.filteredAllowedCountries);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.compliance.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.compliance.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.compliance.privacyUrl"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.compliance.termsUrl"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.dpo.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollProjects.setup.basicSetup.dpo.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.dpo.name"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.dpo.email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.dpo.address"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.dpo.address2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.dpo.city"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.dpo.postalCode"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("smartEnrollProjects.setup.basicSetup.dpo.country"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.filteredDataProtectionCountries);
  }
}
var PROJECT_DEFAULT_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Espa\xF1ol" },
  { code: "br", label: "Portugu\xEAs" },
  { code: "fr", label: "Fran\xE7ais" },
  { code: "ja", label: "\u65E5\u672C\u8A9E" },
  { code: "kr", label: "\uD55C\uAD6D\uC5B4" },
  { code: "cn", label: "\u4E2D\u6587" }
];
var SetupBasicSetupComponent = class _SetupBasicSetupComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._countryService = inject(CountryService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this.countries = this._countryService.countries;
    this.ipCountries = this._countryService.ipCountries;
    this.defaultLanguages = PROJECT_DEFAULT_LANGUAGES;
    this.allowedCountryFilterCtrl = new FormControl("", { nonNullable: true });
    this.dataProtectionCountrySearch = "";
    this.MAX_NAME_LENGTH = 60;
    this.allowedCountryFilterCtrl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
  }
  get nameLength() {
    return this.form?.get("name")?.value?.length || 0;
  }
  get nameLengthStatus() {
    const length = this.nameLength;
    if (length > this.MAX_NAME_LENGTH)
      return "danger";
    if (length > this.MAX_NAME_LENGTH * 0.8)
      return "warning";
    return "safe";
  }
  get filteredAllowedCountries() {
    const term = this.allowedCountryFilterCtrl.value.trim().toLowerCase();
    const selected = new Set(this.allowedCountries);
    return this.ipCountries.filter((c) => {
      if (selected.has(c.country))
        return false;
      const label = this._transloco.translate(c.name).toLowerCase();
      const code = (c.code || "").toLowerCase();
      const countryKey = (c.country || "").toLowerCase();
      if (!term)
        return true;
      return label.includes(term) || code.includes(term) || countryKey.includes(term);
    });
  }
  get filteredDataProtectionCountries() {
    const term = this.dataProtectionCountrySearch.toLowerCase();
    return this.countries.filter((c) => c.country.toLowerCase() !== "all" && this._transloco.translate(c.name).toLowerCase().includes(term));
  }
  get allowedCountries() {
    return this.form?.get("allowedCountries")?.value || [];
  }
  addCountry(country) {
    const values = new Set(this.allowedCountries);
    if (country.country === "All") {
      this.form.get("allowedCountries")?.setValue(["All"]);
      return;
    }
    if (values.has("All"))
      values.delete("All");
    values.add(country.country);
    this.form.get("allowedCountries")?.setValue(Array.from(values));
  }
  onAllowedCountryPicked(event) {
    const code = event.option.value;
    const option = this.ipCountries.find((c) => c.country === code);
    this.allowedCountryFilterCtrl.setValue("", { emitEvent: false });
    this._cdr.markForCheck();
    if (option)
      this.addCountry(option);
  }
  removeCountry(country) {
    const values = new Set(this.allowedCountries);
    values.delete(country);
    this.form.get("allowedCountries")?.setValue(Array.from(values));
  }
  countryLabel(country) {
    if (country === "All") {
      return this._transloco.translate("country_name.world");
    }
    const found = this.countries.find((c) => c.country === country);
    return found ? this._transloco.translate(found.name) : country;
  }
  static {
    this.\u0275fac = function SetupBasicSetupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupBasicSetupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupBasicSetupComponent, selectors: [["setup-basic-setup"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [["allowedCountriesAuto", "matAutocomplete"], [4, "transloco"], [1, "flex", "flex-col", "gap-6", 3, "formGroup"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-4"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "name", "autocomplete", "off", 3, "maxlength"], ["align", "end"], ["matInput", "", "formControlName", "contactEmail", "type", "email", "autocomplete", "email"], ["formControlName", "defaultLanguage"], [3, "value"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-wrap", "gap-2"], ["matInput", "", "type", "text", "autocomplete", "off", 3, "formControl", "placeholder", "matAutocomplete"], [3, "optionSelected"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["matInput", "", "formControlName", "privacyUrl", "type", "url", "placeholder", "https://"], ["matInput", "", "formControlName", "termsAndConditionsUrl", "type", "url", "placeholder", "https://"], ["formGroupName", "dataProtection", 1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "email", "type", "email"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "md:col-span-2"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "address2"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "postalCode"], ["formControlName", "country"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-stone-100", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], ["type", "button", 1, "rounded-full", "p-0.5", "hover:bg-stone-200", "dark:hover:bg-gray-700", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-base"]], template: function SetupBasicSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupBasicSetupComponent_ng_container_0_Template, 96, 38, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatButtonModule,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatChipsModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      TranslocoModule,
      TranslocoDirective
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupBasicSetupComponent, [{
    type: Component,
    args: [{ selector: "setup-basic-setup", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatChipsModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <form [formGroup]="form" class="flex flex-col gap-6">\r
        <section\r
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
        >\r
            <header class="mb-4">\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.identity.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.identity.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <div class="flex flex-col gap-4">\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.identity.name') }}</mat-label>\r
                    <input matInput formControlName="name" [maxlength]="MAX_NAME_LENGTH + 1" autocomplete="off" />\r
                    <mat-hint align="end">\r
                        <span\r
                            [class.text-amber-700]="nameLengthStatus === 'warning'"\r
                            [class.text-red-700]="nameLengthStatus === 'danger'"\r
                            [class.dark:text-amber-300]="nameLengthStatus === 'warning'"\r
                            [class.dark:text-red-300]="nameLengthStatus === 'danger'"\r
                        >\r
                            {{ nameLength }}/{{ MAX_NAME_LENGTH }}\r
                        </span>\r
                    </mat-hint>\r
                </mat-form-field>\r
\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.identity.contactEmail') }}</mat-label>\r
                    <input matInput formControlName="contactEmail" type="email" autocomplete="email" />\r
                </mat-form-field>\r
\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.identity.defaultLanguage') }}</mat-label>\r
                    <mat-select formControlName="defaultLanguage">\r
                        @for (lang of defaultLanguages; track lang.code) {\r
                            <mat-option [value]="lang.code">{{ lang.label }}</mat-option>\r
                        }\r
                    </mat-select>\r
                    <mat-hint>{{ t('smartEnrollProjects.setup.basicSetup.identity.defaultLanguageHint') }}</mat-hint>\r
                </mat-form-field>\r
            </div>\r
        </section>\r
\r
        <section\r
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
        >\r
            <header class="mb-4">\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.allowed.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.allowed.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <div class="flex flex-col gap-3">\r
                @if (allowedCountries.length) {\r
                    <div class="flex flex-wrap gap-2">\r
                        @for (c of allowedCountries; track c) {\r
                            <span\r
                                class="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-gray-800 dark:text-stone-200"\r
                            >\r
                                {{ countryLabel(c) }}\r
                                <button\r
                                    type="button"\r
                                    class="rounded-full p-0.5 hover:bg-stone-200 dark:hover:bg-gray-700"\r
                                    (click)="removeCountry(c)"\r
                                    [attr.aria-label]="t('smartEnrollProjects.setup.basicSetup.allowed.remove')"\r
                                >\r
                                    <mat-icon class="!h-3.5 !w-3.5 !text-base">close</mat-icon>\r
                                </button>\r
                            </span>\r
                        }\r
                    </div>\r
                }\r
\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.allowed.add') }}</mat-label>\r
                    <input\r
                        matInput\r
                        type="text"\r
                        autocomplete="off"\r
                        [formControl]="allowedCountryFilterCtrl"\r
                        [placeholder]="t('smartEnrollProjects.setup.basicSetup.allowed.search')"\r
                        [matAutocomplete]="allowedCountriesAuto"\r
                    />\r
                    <mat-autocomplete\r
                        #allowedCountriesAuto="matAutocomplete"\r
                        (optionSelected)="onAllowedCountryPicked($event)"\r
                    >\r
                        @for (c of filteredAllowedCountries; track c.country) {\r
                            <mat-option [value]="c.country">{{ t(c.name) }}</mat-option>\r
                        }\r
                    </mat-autocomplete>\r
                </mat-form-field>\r
            </div>\r
        </section>\r
\r
        <section\r
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
        >\r
            <header class="mb-4">\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.compliance.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.compliance.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.privacyUrl') }}</mat-label>\r
                    <input matInput formControlName="privacyUrl" type="url" placeholder="https://" />\r
                </mat-form-field>\r
\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.compliance.termsUrl') }}</mat-label>\r
                    <input matInput formControlName="termsAndConditionsUrl" type="url" placeholder="https://" />\r
                </mat-form-field>\r
            </div>\r
        </section>\r
\r
        <section\r
            formGroupName="dataProtection"\r
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
        >\r
            <header class="mb-4">\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.dpo.title') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.basicSetup.dpo.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.name') }}</mat-label>\r
                    <input matInput formControlName="name" />\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.email') }}</mat-label>\r
                    <input matInput formControlName="email" type="email" />\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="md:col-span-2">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.address') }}</mat-label>\r
                    <input matInput formControlName="address" />\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="md:col-span-2">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.address2') }}</mat-label>\r
                    <input matInput formControlName="address2" />\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.city') }}</mat-label>\r
                    <input matInput formControlName="city" />\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.postalCode') }}</mat-label>\r
                    <input matInput formControlName="postalCode" />\r
                </mat-form-field>\r
                <mat-form-field appearance="outline" subscriptSizing="dynamic" class="md:col-span-2">\r
                    <mat-label>{{ t('smartEnrollProjects.setup.basicSetup.dpo.country') }}</mat-label>\r
                    <mat-select formControlName="country">\r
                        @for (c of filteredDataProtectionCountries; track c.country) {\r
                            <mat-option [value]="c.country">{{ t(c.name) }}</mat-option>\r
                        }\r
                    </mat-select>\r
                </mat-form-field>\r
            </div>\r
        </section>\r
    </form>\r
</ng-container>\r
` }]
  }], () => [], { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupBasicSetupComponent, { className: "SetupBasicSetupComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/basic-setup/basic-setup.component.ts", lineNumber: 57 });
})();

// src/app/shared/swatch-picker/swatch-picker.component.ts
function SwatchPickerComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SwatchPickerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 8);
    \u0275\u0275text(1);
    \u0275\u0275template(2, SwatchPickerComponent_Conditional_2_Conditional_2_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-stone-700", !ctx_r0.hasError)("dark:text-stone-200", !ctx_r0.hasError)("text-red-600", ctx_r0.hasError);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.required ? 2 : -1);
  }
}
function SwatchPickerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.selectedColor);
  }
}
function SwatchPickerComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 13);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.iconContrastColor(color_r3));
  }
}
function SwatchPickerComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SwatchPickerComponent_For_8_Template_button_click_0_listener() {
      const color_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSwatchSelect(color_r3));
    });
    \u0275\u0275template(1, SwatchPickerComponent_For_8_Conditional_1_Template, 2, 2, "mat-icon", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", color_r3)("border-color", ctx_r0.isSwatchSelected(color_r3) ? "#1F2937" : "rgba(0,0,0,0.08)");
    \u0275\u0275classProp("scale-110", ctx_r0.isSwatchSelected(color_r3))("ring-2", ctx_r0.isSwatchSelected(color_r3))("ring-offset-2", ctx_r0.isSwatchSelected(color_r3))("ring-stone-900", ctx_r0.isSwatchSelected(color_r3));
    \u0275\u0275property("disabled", ctx_r0.disabled);
    \u0275\u0275attribute("aria-label", color_r3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSwatchSelected(color_r3) ? 1 : -1);
  }
}
function SwatchPickerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 16);
    \u0275\u0275listener("input", function SwatchPickerComponent_Conditional_9_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCustomColorChange($event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r0.customColor)("border-color", ctx_r0.isCustomSelected ? "#1F2937" : "rgba(0,0,0,0.08)");
    \u0275\u0275classProp("scale-110", ctx_r0.isCustomSelected)("ring-2", ctx_r0.isCustomSelected)("ring-offset-2", ctx_r0.isCustomSelected)("ring-stone-900", ctx_r0.isCustomSelected);
    \u0275\u0275attribute("aria-label", "Custom color");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.iconContrastColor(ctx_r0.customColor));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.customColor || "#ffffff")("disabled", ctx_r0.disabled);
  }
}
var SwatchPickerComponent = class _SwatchPickerComponent {
  constructor(ngControl) {
    this.ngControl = ngControl;
    this.label = "";
    this.colors = ["#2563eb"];
    this.custom = true;
    this.required = false;
    this.disabled = false;
    this._cdr = inject(ChangeDetectorRef);
    this.selectedColor = "";
    this.customColor = "#ffffff";
    this.isCustomSelected = false;
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    if (this.ngControl)
      this.ngControl.valueAccessor = this;
  }
  ngOnInit() {
    if (this.ngControl)
      this.control = this.ngControl.control || void 0;
  }
  onSwatchSelect(color) {
    if (this.disabled)
      return;
    this.selectedColor = color;
    this.isCustomSelected = false;
    this._onChange(color);
    this._onTouched();
    this._cdr.markForCheck();
  }
  onCustomColorChange(value) {
    if (this.disabled)
      return;
    const color = value || this.customColor;
    this.customColor = color;
    this.selectedColor = color;
    this.isCustomSelected = true;
    this._onChange(color);
    this._onTouched();
    this._cdr.markForCheck();
  }
  isSwatchSelected(color) {
    return this.selectedColor === color && !this.isCustomSelected;
  }
  get hasError() {
    return !!(this.control && this.control.invalid && this.control.touched);
  }
  /** Compute icon color (white on dark backgrounds, dark on light). */
  iconContrastColor(hex) {
    const value = (hex || "").replace("#", "");
    if (value.length !== 6)
      return "#1F2937";
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5 ? "#FFFFFF" : "#1F2937";
  }
  writeValue(value) {
    if (!value) {
      this.selectedColor = "";
      this.isCustomSelected = false;
    } else {
      this.selectedColor = value;
      if (this.colors.includes(value)) {
        this.isCustomSelected = false;
      } else {
        this.customColor = value;
        this.isCustomSelected = true;
      }
    }
    this._cdr.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function SwatchPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwatchPickerComponent)(\u0275\u0275directiveInject(NgControl, 10));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwatchPickerComponent, selectors: [["swatch-picker"]], inputs: { label: "label", colors: "colors", custom: "custom", required: "required", disabled: "disabled" }, decls: 10, vars: 14, consts: [[1, "flex", "w-full", "flex-col", "gap-3", "rounded-xl", "border", "bg-white", "px-4", "py-3", "dark:bg-gray-900/40"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "text-sm", "font-semibold", "tracking-tight", 3, "text-stone-700", "dark:text-stone-200", "text-red-600"], [1, "inline-flex", "items-center", "gap-1.5", "font-mono", "text-[11px]", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "inline-block", "h-3", "w-3", "rounded-full", "border", 2, "border-color", "rgba(0, 0, 0, 0.12)", 3, "background-color"], [1, "grid", "grid-cols-7", "gap-2"], ["type", "button", 1, "relative", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105", 3, "background-color", "border-color", "scale-110", "ring-2", "ring-offset-2", "ring-stone-900", "disabled"], [1, "relative", "flex", "h-9", "w-9", "cursor-pointer", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105", 3, "background-color", "border-color", "scale-110", "ring-2", "ring-offset-2", "ring-stone-900"], [1, "text-sm", "font-semibold", "tracking-tight"], [1, "ml-0.5", "text-red-500"], [1, "inline-block", "h-3", "w-3", "rounded-full", "border", 2, "border-color", "rgba(0, 0, 0, 0.12)"], ["type", "button", 1, "relative", "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105", 3, "click", "disabled"], [1, "!h-3", "!w-3", "!text-[14px]", 3, "color"], [1, "!h-3", "!w-3", "!text-[14px]"], [1, "relative", "flex", "h-9", "w-9", "cursor-pointer", "items-center", "justify-center", "rounded-full", "border-2", "transition-transform", "hover:scale-105"], [1, "!h-3.5", "!w-3.5", "!text-[14px]"], ["type", "color", 1, "absolute", "inset-0", "h-full", "w-full", "cursor-pointer", "opacity-0", 3, "input", "value", "disabled"]], template: function SwatchPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, SwatchPickerComponent_Conditional_2_Template, 3, 8, "label", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275template(4, SwatchPickerComponent_Conditional_4_Template, 1, 2, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275repeaterCreate(7, SwatchPickerComponent_For_8_Template, 2, 15, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275template(9, SwatchPickerComponent_Conditional_9_Template, 4, 17, "label", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-stone-200", !ctx.hasError)("dark:border-gray-700", !ctx.hasError)("border-red-400", ctx.hasError);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.label ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selectedColor ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedColor || "\u2014", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-50", ctx.disabled)("cursor-not-allowed", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.colors);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.custom ? 9 : -1);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwatchPickerComponent, [{
    type: Component,
    args: [{ selector: "swatch-picker", standalone: true, imports: [CommonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div\r
    class="flex w-full flex-col gap-3 rounded-xl border bg-white px-4 py-3 dark:bg-gray-900/40"\r
    [class.border-stone-200]="!hasError"\r
    [class.dark:border-gray-700]="!hasError"\r
    [class.border-red-400]="hasError"\r
>\r
    <div class="flex items-center justify-between gap-3">\r
        @if (label) {\r
            <label\r
                class="text-sm font-semibold tracking-tight"\r
                [class.text-stone-700]="!hasError"\r
                [class.dark:text-stone-200]="!hasError"\r
                [class.text-red-600]="hasError"\r
            >\r
                {{ label }}@if (required) {<span class="ml-0.5 text-red-500">*</span>}\r
            </label>\r
        }\r
        <span\r
            class="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400"\r
        >\r
            @if (selectedColor) {\r
                <span\r
                    class="inline-block h-3 w-3 rounded-full border"\r
                    [style.background-color]="selectedColor"\r
                    style="border-color: rgba(0, 0, 0, 0.12)"\r
                ></span>\r
            }\r
            {{ selectedColor || '\u2014' }}\r
        </span>\r
    </div>\r
\r
    <div\r
        class="grid grid-cols-7 gap-2"\r
        [class.opacity-50]="disabled"\r
        [class.cursor-not-allowed]="disabled"\r
    >\r
        @for (color of colors; track color) {\r
            <button\r
                type="button"\r
                class="relative flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform hover:scale-105"\r
                [style.background-color]="color"\r
                [style.border-color]="isSwatchSelected(color) ? '#1F2937' : 'rgba(0,0,0,0.08)'"\r
                [class.scale-110]="isSwatchSelected(color)"\r
                [class.ring-2]="isSwatchSelected(color)"\r
                [class.ring-offset-2]="isSwatchSelected(color)"\r
                [class.ring-stone-900]="isSwatchSelected(color)"\r
                [disabled]="disabled"\r
                [attr.aria-label]="color"\r
                (click)="onSwatchSelect(color)"\r
            >\r
                @if (isSwatchSelected(color)) {\r
                    <mat-icon class="!h-3 !w-3 !text-[14px]" [style.color]="iconContrastColor(color)">check</mat-icon>\r
                }\r
            </button>\r
        }\r
\r
        @if (custom) {\r
            <label\r
                class="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 transition-transform hover:scale-105"\r
                [style.background-color]="customColor"\r
                [style.border-color]="isCustomSelected ? '#1F2937' : 'rgba(0,0,0,0.08)'"\r
                [class.scale-110]="isCustomSelected"\r
                [class.ring-2]="isCustomSelected"\r
                [class.ring-offset-2]="isCustomSelected"\r
                [class.ring-stone-900]="isCustomSelected"\r
                [attr.aria-label]="'Custom color'"\r
            >\r
                <mat-icon class="!h-3.5 !w-3.5 !text-[14px]" [style.color]="iconContrastColor(customColor)">edit</mat-icon>\r
                <input\r
                    type="color"\r
                    class="absolute inset-0 h-full w-full cursor-pointer opacity-0"\r
                    [value]="customColor || '#ffffff'"\r
                    [disabled]="disabled"\r
                    (input)="onCustomColorChange($any($event.target).value)"\r
                />\r
            </label>\r
        }\r
    </div>\r
</div>\r
` }]
  }], () => [{ type: NgControl, decorators: [{
    type: Optional
  }, {
    type: Self
  }] }], { label: [{
    type: Input
  }], colors: [{
    type: Input
  }], custom: [{
    type: Input
  }], required: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwatchPickerComponent, { className: "SwatchPickerComponent", filePath: "src/app/shared/swatch-picker/swatch-picker.component.ts", lineNumber: 33 });
})();

export {
  STRICT_URL_PATTERN,
  PERSON_NAME_PATTERN,
  CITY_NAME_PATTERN,
  ADDRESS_PATTERN,
  PROJECT_DEFAULT_LANGUAGES,
  SetupBasicSetupComponent,
  SwatchPickerComponent
};
//# sourceMappingURL=chunk-FIF5HWW6.js.map
