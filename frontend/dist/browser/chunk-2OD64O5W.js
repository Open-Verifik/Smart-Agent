import {
  MatChipsModule
} from "./chunk-YEP6AUSV.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-O6FC6GSO.js";
import {
  CountryService
} from "./chunk-ENWXGLEW.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-DT4JVZCC.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DMXREZDX.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-QUFOCOZK.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-HVUVGZ2L.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-PJFCLQ64.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
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
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-FWBWCXY5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  Input,
  Optional,
  Self,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
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
} from "./chunk-YWP2Y7QK.js";

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
      this._setAllowedCountries(["All"]);
      return;
    }
    if (values.has("All"))
      values.delete("All");
    values.add(country.country);
    this._setAllowedCountries(Array.from(values));
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
    this._setAllowedCountries(Array.from(values));
  }
  /** `setValue` updates the list without marking the form dirty, so Continue would skip the save. */
  _setAllowedCountries(countries) {
    const control = this.form?.get("allowedCountries");
    control?.setValue(countries);
    control?.markAsDirty();
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

// src/app/modules/smart-access/projects/setup/leave-dialog/smart-access-leave-dialog.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function SmartAccessLeaveDialogComponent_ng_container_0_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("recommended")));
  }
}
function SmartAccessLeaveDialogComponent_ng_container_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SmartAccessLeaveDialogComponent_ng_container_0_For_14_Template_button_click_0_listener() {
      const choice_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.select(choice_r3.id));
    });
    \u0275\u0275elementStart(1, "span", 20)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 21)(5, "span", 22)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SmartAccessLeaveDialogComponent_ng_container_0_For_14_Conditional_8_Template, 2, 1, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 24)(12, "span")(13, "mat-icon");
    \u0275\u0275text(14, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span")(17, "mat-icon");
    \u0275\u0275text(18, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "mat-icon");
    \u0275\u0275text(22, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "mat-icon", 25);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const choice_r3 = ctx.$implicit;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("leave-option--selected", ctx_r3.selected() === choice_r3.id);
    \u0275\u0275attribute("aria-checked", ctx_r3.selected() === choice_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(choice_r3.icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("options." + choice_r3.id + ".title")));
    \u0275\u0275advance();
    \u0275\u0275conditional(choice_r3.recommended ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r3.key("options." + choice_r3.id + ".body")), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r3.key("options." + choice_r3.id + ".benefit1")), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r3.key("options." + choice_r3.id + ".benefit2")), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r3.key("options." + choice_r3.id + ".benefit3")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selected() === choice_r3.id ? "check_circle" : "radio_button_unchecked", " ");
  }
}
function SmartAccessLeaveDialogComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "section", 3)(4, "div", 4)(5, "span");
    \u0275\u0275text(6, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 5);
    \u0275\u0275repeaterCreate(13, SmartAccessLeaveDialogComponent_ng_container_0_For_14_Template, 26, 11, "button", 6, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "aside", 7)(16, "div", 8)(17, "span");
    \u0275\u0275text(18, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "h3");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "div", 10)(26, "mat-icon");
    \u0275\u0275text(27, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "span", 11)(31, "mat-icon");
    \u0275\u0275text(32, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 12)(34, "mat-icon");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 11)(39, "mat-icon");
    \u0275\u0275text(40, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 13)(42, "mat-icon");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 14)(47, "span", 15);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h4");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 16)(54, "mat-icon");
    \u0275\u0275text(55, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "footer", 17)(59, "button", 18);
    \u0275\u0275listener("click", function SmartAccessLeaveDialogComponent_ng_container_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirm());
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("chooseTitle")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("chooseHelp")));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r5(ctx_r3.key("chooseTitle")));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.choices);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("howTitle")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("howHelp")));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("flowEntered")));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.selected() === "save" ? "save" : ctx_r3.selected() === "discard" ? "logout" : "undo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("options." + ctx_r3.selected() + ".title")));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.outcomeIcon(ctx_r3.selected()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("options." + ctx_r3.selected() + ".flowOutcome")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("selectedPath")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("options." + ctx_r3.selected() + ".howTitle")));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("options." + ctx_r3.selected() + ".howBody")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5(ctx_r3.key("options." + ctx_r3.selected() + ".result")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5(ctx_r3.key("options." + ctx_r3.selected() + ".title")), " ");
  }
}
var SmartAccessLeaveDialogComponent = class _SmartAccessLeaveDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this.i18nPrefix = this._data?.i18nPrefix || "smartAccessProjects.setup.leave";
    this.choices = [
      { id: "save", icon: "save", recommended: true },
      { id: "discard", icon: "logout", recommended: false },
      { id: "cancel", icon: "undo", recommended: false }
    ];
    this.selected = signal("save");
  }
  key(path) {
    return `${this.i18nPrefix}.${path}`;
  }
  select(id) {
    this.selected.set(id);
  }
  outcomeIcon(id) {
    if (id === "save")
      return "inventory_2";
    if (id === "discard")
      return "delete_outline";
    return "edit";
  }
  confirm() {
    this._dialogRef.close(this.selected());
  }
  static {
    this.\u0275fac = function SmartAccessLeaveDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartAccessLeaveDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartAccessLeaveDialogComponent, selectors: [["smart-access-leave-dialog"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "leave-dialog"], [1, "leave-decision"], [1, "leave-choices"], [1, "section-heading"], ["role", "radiogroup", 1, "leave-options"], ["type", "button", "role", "radio", 1, "leave-option", 3, "leave-option--selected"], ["aria-live", "polite", 1, "leave-explainer"], [1, "section-heading", "section-heading--light"], [1, "leave-flow"], [1, "leave-flow__node"], [1, "leave-flow__line"], [1, "leave-flow__node", "leave-flow__node--mid"], [1, "leave-flow__node", "leave-flow__node--outcome"], [1, "leave-result"], [1, "leave-result__label"], [1, "leave-result__note"], [1, "leave-footer"], ["mat-flat-button", "", "type", "button", 1, "leave-footer__confirm", 3, "click"], ["type", "button", "role", "radio", 1, "leave-option", 3, "click"], [1, "leave-option__icon"], [1, "leave-option__content"], [1, "leave-option__title"], [1, "leave-option__body"], [1, "leave-option__benefits"], [1, "leave-option__check"]], template: function SmartAccessLeaveDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SmartAccessLeaveDialogComponent_ng_container_0_Template, 61, 15, "ng-container", 0);
      }
    }, dependencies: [MatDialogModule, MatButtonModule, MatButton, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], styles: ["/* src/app/modules/smart-access/projects/setup/leave-dialog/smart-access-leave-dialog.component.scss */\n.smart-access-leave-dialog-panel.cdk-overlay-pane {\n  max-width: min(920px, 96vw) !important;\n}\n.smart-access-leave-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1.5rem;\n}\n.smart-access-leave-dialog-panel .mat-mdc-dialog-surface {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1.5rem !important;\n  background: #fff !important;\n  max-height: min(92vh, 860px);\n}\n.leave-dialog {\n  display: flex;\n  max-height: min(92vh, 860px);\n  flex-direction: column;\n  overflow: auto;\n  background: #fff;\n}\n.leave-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(16rem, 0.92fr);\n  min-height: 0;\n}\n.leave-choices,\n.leave-explainer {\n  padding: 1.35rem 1.35rem 1.15rem;\n}\n.leave-explainer {\n  background: #1c1917;\n  color: #fff;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: #fff;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: #fff;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.leave-options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.leave-option {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 0.85rem;\n  width: 100%;\n  padding: 0.95rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n  color: #292524;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    background-color 160ms ease;\n}\n.leave-option:hover {\n  border-color: #a8a29e;\n  background: #fff;\n}\n.leave-option:focus-visible {\n  outline: 3px solid rgba(59, 130, 246, 0.35);\n  outline-offset: 2px;\n}\n.leave-option--selected {\n  border-color: #292524;\n  background: #fff;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.leave-option__icon {\n  display: grid;\n  width: 2.4rem;\n  height: 2.4rem;\n  place-items: center;\n  border-radius: 0.75rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.leave-option__icon mat-icon {\n  width: 1.2rem;\n  height: 1.2rem;\n  font-size: 1.2rem;\n}\n.leave-option--selected .leave-option__icon {\n  background: #292524;\n  color: #fff;\n}\n.leave-option__content,\n.leave-option__benefits,\n.leave-option__benefits span,\n.leave-option__title {\n  display: flex;\n}\n.leave-option__content,\n.leave-option__benefits {\n  flex-direction: column;\n}\n.leave-option__title {\n  align-items: center;\n  gap: 0.5rem;\n}\n.leave-option__title strong {\n  font-size: 0.88rem;\n  font-weight: 680;\n}\n.leave-option__title small {\n  padding: 0.18rem 0.42rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.leave-option__body {\n  margin-top: 0.3rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.leave-option__benefits {\n  gap: 0.25rem;\n  margin-top: 0.65rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.leave-option__benefits span {\n  align-items: center;\n  gap: 0.35rem;\n}\n.leave-option__benefits mat-icon {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n}\n.leave-option__check {\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #a8a29e;\n  font-size: 1.2rem;\n}\n.leave-option--selected .leave-option__check {\n  color: #166534;\n}\n.leave-flow {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  gap: 0.35rem;\n  margin: 1.15rem 0 1.25rem;\n}\n.leave-flow__node {\n  display: flex;\n  min-width: 0;\n  min-height: 4.6rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.5rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  text-align: center;\n}\n.leave-flow__node mat-icon {\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #d6d3d1;\n  font-size: 1.15rem;\n}\n.leave-flow__node span {\n  color: #d6d3d1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.leave-flow__node--mid {\n  border-color: #57534e;\n  background: #44403c;\n}\n.leave-flow__node--outcome {\n  border-color: #a8a29e;\n  background: #fff;\n}\n.leave-flow__node--outcome mat-icon,\n.leave-flow__node--outcome span {\n  color: #1c1917;\n}\n.leave-flow__line {\n  color: #78716c;\n}\n.leave-flow__line mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.leave-result {\n  padding-top: 1rem;\n  border-top: 1px solid #44403c;\n}\n.leave-result h4 {\n  margin: 0.35rem 0 0;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.leave-result > p {\n  margin: 0.5rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.leave-result__label {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.leave-result__note {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.75rem;\n  background: #292524;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.leave-result__note mat-icon {\n  flex: 0 0 auto;\n  width: 1rem;\n  height: 1rem;\n  color: #d6d3d1;\n  font-size: 1rem;\n}\n.leave-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.85rem 1.35rem 1.1rem;\n  border-top: 1px solid #e7e5e4;\n  background: #fff;\n}\n.leave-footer__confirm.mat-mdc-unelevated-button {\n  border-radius: 999px !important;\n  background-color: #292524 !important;\n  color: #fff !important;\n}\n@media (max-width: 800px) {\n  .leave-decision {\n    grid-template-columns: 1fr;\n  }\n  .leave-flow {\n    grid-template-columns: 1fr;\n    justify-items: center;\n  }\n  .leave-flow__line {\n    transform: rotate(90deg);\n  }\n}\n/*# sourceMappingURL=smart-access-leave-dialog.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartAccessLeaveDialogComponent, [{
    type: Component,
    args: [{ selector: "smart-access-leave-dialog", standalone: true, imports: [MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], encapsulation: ViewEncapsulation.None, template: `<ng-container *transloco="let t">\r
    <div class="leave-dialog">\r
        <div class="leave-decision">\r
            <section class="leave-choices">\r
                <div class="section-heading">\r
                    <span>01</span>\r
                    <div>\r
                        <h3>{{ t(key('chooseTitle')) }}</h3>\r
                        <p>{{ t(key('chooseHelp')) }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="leave-options" role="radiogroup" [attr.aria-label]="t(key('chooseTitle'))">\r
                    @for (choice of choices; track choice.id) {\r
                        <button\r
                            type="button"\r
                            role="radio"\r
                            class="leave-option"\r
                            [class.leave-option--selected]="selected() === choice.id"\r
                            [attr.aria-checked]="selected() === choice.id"\r
                            (click)="select(choice.id)"\r
                        >\r
                            <span class="leave-option__icon">\r
                                <mat-icon>{{ choice.icon }}</mat-icon>\r
                            </span>\r
                            <span class="leave-option__content">\r
                                <span class="leave-option__title">\r
                                    <strong>{{ t(key('options.' + choice.id + '.title')) }}</strong>\r
                                    @if (choice.recommended) {\r
                                        <small>{{ t(key('recommended')) }}</small>\r
                                    }\r
                                </span>\r
                                <span class="leave-option__body">\r
                                    {{ t(key('options.' + choice.id + '.body')) }}\r
                                </span>\r
                                <span class="leave-option__benefits">\r
                                    <span>\r
                                        <mat-icon>check</mat-icon>\r
                                        {{ t(key('options.' + choice.id + '.benefit1')) }}\r
                                    </span>\r
                                    <span>\r
                                        <mat-icon>check</mat-icon>\r
                                        {{ t(key('options.' + choice.id + '.benefit2')) }}\r
                                    </span>\r
                                    <span>\r
                                        <mat-icon>check</mat-icon>\r
                                        {{ t(key('options.' + choice.id + '.benefit3')) }}\r
                                    </span>\r
                                </span>\r
                            </span>\r
                            <mat-icon class="leave-option__check">\r
                                {{ selected() === choice.id ? 'check_circle' : 'radio_button_unchecked' }}\r
                            </mat-icon>\r
                        </button>\r
                    }\r
                </div>\r
            </section>\r
\r
            <aside class="leave-explainer" aria-live="polite">\r
                <div class="section-heading section-heading--light">\r
                    <span>02</span>\r
                    <div>\r
                        <h3>{{ t(key('howTitle')) }}</h3>\r
                        <p>{{ t(key('howHelp')) }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="leave-flow">\r
                    <div class="leave-flow__node">\r
                        <mat-icon>edit_note</mat-icon>\r
                        <span>{{ t(key('flowEntered')) }}</span>\r
                    </div>\r
                    <span class="leave-flow__line"><mat-icon>arrow_forward</mat-icon></span>\r
                    <div class="leave-flow__node leave-flow__node--mid">\r
                        <mat-icon>{{ selected() === 'save' ? 'save' : selected() === 'discard' ? 'logout' : 'undo' }}</mat-icon>\r
                        <span>{{ t(key('options.' + selected() + '.title')) }}</span>\r
                    </div>\r
                    <span class="leave-flow__line"><mat-icon>arrow_forward</mat-icon></span>\r
                    <div class="leave-flow__node leave-flow__node--outcome">\r
                        <mat-icon>{{ outcomeIcon(selected()) }}</mat-icon>\r
                        <span>{{ t(key('options.' + selected() + '.flowOutcome')) }}</span>\r
                    </div>\r
                </div>\r
\r
                <div class="leave-result">\r
                    <span class="leave-result__label">{{ t(key('selectedPath')) }}</span>\r
                    <h4>{{ t(key('options.' + selected() + '.howTitle')) }}</h4>\r
                    <p>{{ t(key('options.' + selected() + '.howBody')) }}</p>\r
                    <div class="leave-result__note">\r
                        <mat-icon>info</mat-icon>\r
                        <span>{{ t(key('options.' + selected() + '.result')) }}</span>\r
                    </div>\r
                </div>\r
            </aside>\r
        </div>\r
\r
        <footer class="leave-footer">\r
            <button mat-flat-button type="button" class="leave-footer__confirm" (click)="confirm()">\r
                {{ t(key('options.' + selected() + '.title')) }}\r
            </button>\r
        </footer>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-access/projects/setup/leave-dialog/smart-access-leave-dialog.component.scss */\n.smart-access-leave-dialog-panel.cdk-overlay-pane {\n  max-width: min(920px, 96vw) !important;\n}\n.smart-access-leave-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1.5rem;\n}\n.smart-access-leave-dialog-panel .mat-mdc-dialog-surface {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1.5rem !important;\n  background: #fff !important;\n  max-height: min(92vh, 860px);\n}\n.leave-dialog {\n  display: flex;\n  max-height: min(92vh, 860px);\n  flex-direction: column;\n  overflow: auto;\n  background: #fff;\n}\n.leave-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(16rem, 0.92fr);\n  min-height: 0;\n}\n.leave-choices,\n.leave-explainer {\n  padding: 1.35rem 1.35rem 1.15rem;\n}\n.leave-explainer {\n  background: #1c1917;\n  color: #fff;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n  margin-bottom: 1rem;\n}\n.section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.section-heading h3 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n  letter-spacing: -0.015em;\n}\n.section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.section-heading--light > span {\n  background: #fff;\n  color: #1c1917;\n}\n.section-heading--light h3 {\n  color: #fff;\n}\n.section-heading--light p {\n  color: #a8a29e;\n}\n.leave-options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.leave-option {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 0.85rem;\n  width: 100%;\n  padding: 0.95rem 1rem;\n  border: 1px solid #e7e5e4;\n  border-radius: 1rem;\n  background: #fafaf9;\n  color: #292524;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    background-color 160ms ease;\n}\n.leave-option:hover {\n  border-color: #a8a29e;\n  background: #fff;\n}\n.leave-option:focus-visible {\n  outline: 3px solid rgba(59, 130, 246, 0.35);\n  outline-offset: 2px;\n}\n.leave-option--selected {\n  border-color: #292524;\n  background: #fff;\n  box-shadow: inset 0 0 0 1px #292524, 0 8px 22px rgba(28, 25, 23, 0.06);\n}\n.leave-option__icon {\n  display: grid;\n  width: 2.4rem;\n  height: 2.4rem;\n  place-items: center;\n  border-radius: 0.75rem;\n  background: #e7e5e4;\n  color: #44403c;\n}\n.leave-option__icon mat-icon {\n  width: 1.2rem;\n  height: 1.2rem;\n  font-size: 1.2rem;\n}\n.leave-option--selected .leave-option__icon {\n  background: #292524;\n  color: #fff;\n}\n.leave-option__content,\n.leave-option__benefits,\n.leave-option__benefits span,\n.leave-option__title {\n  display: flex;\n}\n.leave-option__content,\n.leave-option__benefits {\n  flex-direction: column;\n}\n.leave-option__title {\n  align-items: center;\n  gap: 0.5rem;\n}\n.leave-option__title strong {\n  font-size: 0.88rem;\n  font-weight: 680;\n}\n.leave-option__title small {\n  padding: 0.18rem 0.42rem;\n  border-radius: 999px;\n  background: #e7e5e4;\n  color: #57534e;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.leave-option__body {\n  margin-top: 0.3rem;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.leave-option__benefits {\n  gap: 0.25rem;\n  margin-top: 0.65rem;\n  color: #57534e;\n  font-size: 0.66rem;\n}\n.leave-option__benefits span {\n  align-items: center;\n  gap: 0.35rem;\n}\n.leave-option__benefits mat-icon {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #166534;\n  font-size: 0.85rem;\n}\n.leave-option__check {\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #a8a29e;\n  font-size: 1.2rem;\n}\n.leave-option--selected .leave-option__check {\n  color: #166534;\n}\n.leave-flow {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr auto 1fr;\n  align-items: center;\n  gap: 0.35rem;\n  margin: 1.15rem 0 1.25rem;\n}\n.leave-flow__node {\n  display: flex;\n  min-width: 0;\n  min-height: 4.6rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.5rem;\n  border: 1px solid #44403c;\n  border-radius: 0.8rem;\n  background: #292524;\n  text-align: center;\n}\n.leave-flow__node mat-icon {\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #d6d3d1;\n  font-size: 1.15rem;\n}\n.leave-flow__node span {\n  color: #d6d3d1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.leave-flow__node--mid {\n  border-color: #57534e;\n  background: #44403c;\n}\n.leave-flow__node--outcome {\n  border-color: #a8a29e;\n  background: #fff;\n}\n.leave-flow__node--outcome mat-icon,\n.leave-flow__node--outcome span {\n  color: #1c1917;\n}\n.leave-flow__line {\n  color: #78716c;\n}\n.leave-flow__line mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.leave-result {\n  padding-top: 1rem;\n  border-top: 1px solid #44403c;\n}\n.leave-result h4 {\n  margin: 0.35rem 0 0;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 650;\n}\n.leave-result > p {\n  margin: 0.5rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.55;\n}\n.leave-result__label {\n  color: #78716c;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.leave-result__note {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin-top: 0.9rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.75rem;\n  background: #292524;\n  color: #d6d3d1;\n  font-size: 0.68rem;\n  line-height: 1.45;\n}\n.leave-result__note mat-icon {\n  flex: 0 0 auto;\n  width: 1rem;\n  height: 1rem;\n  color: #d6d3d1;\n  font-size: 1rem;\n}\n.leave-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.85rem 1.35rem 1.1rem;\n  border-top: 1px solid #e7e5e4;\n  background: #fff;\n}\n.leave-footer__confirm.mat-mdc-unelevated-button {\n  border-radius: 999px !important;\n  background-color: #292524 !important;\n  color: #fff !important;\n}\n@media (max-width: 800px) {\n  .leave-decision {\n    grid-template-columns: 1fr;\n  }\n  .leave-flow {\n    grid-template-columns: 1fr;\n    justify-items: center;\n  }\n  .leave-flow__line {\n    transform: rotate(90deg);\n  }\n}\n/*# sourceMappingURL=smart-access-leave-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartAccessLeaveDialogComponent, { className: "SmartAccessLeaveDialogComponent", filePath: "src/app/modules/smart-access/projects/setup/leave-dialog/smart-access-leave-dialog.component.ts", lineNumber: 23 });
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
  SwatchPickerComponent,
  SmartAccessLeaveDialogComponent
};
//# sourceMappingURL=chunk-2OD64O5W.js.map
