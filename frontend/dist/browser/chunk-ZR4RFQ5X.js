import {
  CountryService
} from "./chunk-ENWXGLEW.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-DT4JVZCC.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-FWBWCXY5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  UpperCasePipe,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-enroll/shared/nationality-select.component.ts
var _c0 = ["searchInput"];
var _forTrack0 = ($index, $item) => $item.code;
function NationalitySelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, country_r2.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, country_r2.code));
  }
}
function NationalitySelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r2.value, " ");
  }
}
function NationalitySelectComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.value);
  }
}
function NationalitySelectComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const country_r4 = ctx.$implicit;
    \u0275\u0275property("value", country_r4.code.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, country_r4.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, country_r4.code));
  }
}
function NationalitySelectComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.personForm.nationalityNoMatches"));
  }
}
function NationalitySelectComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.personForm.nationalityInvalid"));
  }
}
var isCatalogNationality = (value, countries) => {
  const raw = `${value ?? ""}`.trim().toLowerCase();
  if (!raw)
    return true;
  return countries.some((country) => country.code === raw && country.country !== "World" && country.code !== "world");
};
var normalizeNationalityCode = (value) => {
  const raw = `${value ?? ""}`.trim();
  if (!raw)
    return "";
  return /^[a-z]{2}$/i.test(raw) ? raw.toUpperCase() : raw;
};
var nationalityDisplayName = (value, countries, translate, notSet) => {
  const raw = value.trim().toLowerCase();
  if (!raw)
    return notSet;
  const match = countries.find((country) => country.code === raw && country.country !== "World");
  return match ? translate(match.name) : value.trim();
};
var _fold = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
var NationalitySelectComponent = class _NationalitySelectComponent {
  constructor() {
    this._countries = inject(CountryService);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.inputId = input("nationality");
    this.variant = input("demo");
    this.value = "";
    this.query = "";
    this.disabled = false;
    this.countries = this._countries.countries.filter((country) => country.country !== "World" && country.code !== "world");
    this._onChange = () => void 0;
    this._onTouched = () => void 0;
    this._onValidatorChange = () => void 0;
    this._transloco.langChanges$.pipe(takeUntilDestroyed()).subscribe(() => this._cdr.markForCheck());
  }
  get selected() {
    const code = this.value.trim().toLowerCase();
    if (!code)
      return void 0;
    return this.countries.find((country) => country.code === code);
  }
  get showLegacy() {
    if (!this.value || this.selected)
      return false;
    const query = _fold(this.query.trim());
    return !query || _fold(this.value).includes(query);
  }
  get showError() {
    return !!this.value.trim() && !this.selected;
  }
  get visibleCountries() {
    const query = _fold(this.query.trim());
    return this.countries.filter((country) => {
      if (!query)
        return true;
      const name = _fold(this._transloco.translate(country.name));
      return name.includes(query) || country.code.includes(query);
    }).sort((left, right) => this._transloco.translate(left.name).localeCompare(this._transloco.translate(right.name)));
  }
  writeValue(value) {
    const raw = `${value ?? ""}`.trim();
    const match = this.countries.find((country) => country.code === raw.toLowerCase());
    this.value = match ? match.code.toUpperCase() : raw;
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
  validate() {
    return isCatalogNationality(this.value, this.countries) ? null : { nationalityUnknown: true };
  }
  registerOnValidatorChange(fn) {
    this._onValidatorChange = fn;
  }
  select(code) {
    this.value = code;
    this._onChange(code);
    this._onValidatorChange();
    this._cdr.markForCheck();
  }
  onQuery(event) {
    this.query = event.target.value;
    this._cdr.markForCheck();
  }
  onSearchKeydown(event) {
    event.stopPropagation();
  }
  onOpened(open) {
    if (open) {
      setTimeout(() => this.searchInput?.nativeElement.focus());
      return;
    }
    this.query = "";
    this._onTouched();
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function NationalitySelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NationalitySelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NationalitySelectComponent, selectors: [["app-nationality-select"]], viewQuery: function NationalitySelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, inputs: { inputId: [1, "inputId"], variant: [1, "variant"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NationalitySelectComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _NationalitySelectComponent),
        multi: true
      }
    ])], decls: 16, vars: 22, consts: [["searchInput", ""], [1, "nationality-select"], ["panelClass", "nationality-select-panel", "disableOptionCentering", "", 3, "selectionChange", "openedChange", "id", "disabled", "value", "placeholder"], [1, "nationality-select__value"], [1, "nationality-select__search-wrap", 3, "mousedown", "click"], ["type", "text", "autocomplete", "off", 1, "nationality-select__search", 3, "input", "keydown", "value", "placeholder"], [3, "value"], ["disabled", ""], [1, "nationality-select__error"], [1, "nationality-select__code"]], template: function NationalitySelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-select", 2);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275listener("selectionChange", function NationalitySelectComponent_Template_mat_select_selectionChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.select($event.value));
        })("openedChange", function NationalitySelectComponent_Template_mat_select_openedChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOpened($event));
        });
        \u0275\u0275elementStart(3, "mat-select-trigger");
        \u0275\u0275template(4, NationalitySelectComponent_Conditional_4_Template, 6, 6, "span", 3)(5, NationalitySelectComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275listener("mousedown", function NationalitySelectComponent_Template_div_mousedown_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        })("click", function NationalitySelectComponent_Template_div_click_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275elementStart(7, "input", 5, 0);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275listener("input", function NationalitySelectComponent_Template_input_input_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onQuery($event));
        })("keydown", function NationalitySelectComponent_Template_input_keydown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearchKeydown($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, NationalitySelectComponent_Conditional_11_Template, 2, 2, "mat-option", 6);
        \u0275\u0275repeaterCreate(12, NationalitySelectComponent_For_13_Template, 7, 7, "mat-option", 6, _forTrack0);
        \u0275\u0275template(14, NationalitySelectComponent_Conditional_14_Template, 3, 3, "mat-option", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, NationalitySelectComponent_Conditional_15_Template, 3, 3, "p", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_8_0;
        \u0275\u0275classProp("nationality-select--dialog", ctx.variant() === "dialog")("nationality-select--invalid", ctx.showError);
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx.inputId())("disabled", ctx.disabled)("value", ctx.value || null)("placeholder", \u0275\u0275pipeBind1(2, 16, "smartEnrollDemos.personForm.nationalityPlaceholder"));
        \u0275\u0275attribute("aria-invalid", ctx.showError);
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_8_0 = ctx.selected) ? 4 : ctx.value ? 5 : -1, tmp_8_0);
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.query)("placeholder", \u0275\u0275pipeBind1(9, 18, "smartEnrollDemos.personForm.nationalitySearch"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 20, "smartEnrollDemos.personForm.nationalitySearch"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.showLegacy ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.visibleCountries);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.visibleCountries.length && !ctx.showLegacy ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showError ? 15 : -1);
      }
    }, dependencies: [CommonModule, UpperCasePipe, MatSelectModule, MatSelect, MatSelectTrigger, MatOption, TranslocoModule, TranslocoPipe], styles: ["/* src/app/modules/smart-enroll/shared/nationality-select.component.scss */\napp-nationality-select {\n  display: block;\n}\n.nationality-select .mat-mdc-select {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 2.75rem;\n  padding: 0 0.85rem;\n  border: 1px solid rgb(var(--color-outline-variant)/0.45);\n  border-radius: 0.5rem;\n  background: rgb(var(--color-surface-container-low));\n  color: rgb(var(--color-on-surface));\n  font-size: 0.875rem;\n}\n.nationality-select .mat-mdc-select-trigger {\n  width: 100%;\n}\n.nationality-select .mat-mdc-select-placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.7);\n}\n.nationality-select--dialog .mat-mdc-select {\n  border-color: #e7e5e4;\n  border-radius: 0.75rem;\n  background: rgba(250, 250, 249, 0.8);\n  color: #1c1917;\n}\n.nationality-select--dialog .mat-mdc-select-placeholder {\n  color: #a8a29e;\n}\n.dark .nationality-select--dialog .mat-mdc-select {\n  border-color: #374151;\n  background: rgba(3, 7, 18, 0.5);\n  color: #f5f5f4;\n}\n.dark .nationality-select--dialog .mat-mdc-select-placeholder {\n  color: #78716c;\n}\n.nationality-select--invalid .mat-mdc-select {\n  border-color: #b91c1c;\n}\n.nationality-select__value {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.nationality-select__code {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.04em;\n}\n.nationality-select__error {\n  margin: 0.35rem 0 0;\n  color: #b91c1c;\n  font-size: 0.75rem;\n}\n.dark .nationality-select__error {\n  color: #fca5a5;\n}\n.nationality-select-panel .nationality-select__search-wrap {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding: 0.5rem;\n  background: #fff;\n}\n.nationality-select-panel .nationality-select__search {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.5rem;\n  background: #fafaf9;\n  padding: 0.45rem 0.7rem;\n  color: #1c1917;\n  font-size: 0.875rem;\n  outline: none;\n}\n.nationality-select-panel .nationality-select__search:focus {\n  border-color: #2642ff;\n}\n.dark .nationality-select-panel.mat-mdc-select-panel {\n  background: #1e293b;\n  color: #f8fafc;\n}\n.dark .nationality-select-panel .mat-mdc-option {\n  background: transparent;\n  color: #f8fafc;\n}\n.dark .nationality-select-panel .mat-mdc-option:hover,\n.dark .nationality-select-panel .mat-mdc-option.mdc-list-item--selected {\n  background: #334155;\n}\n.dark .nationality-select-panel .nationality-select__search-wrap {\n  background: #1e293b;\n}\n.dark .nationality-select-panel .nationality-select__search {\n  border-color: #334155;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.dark .nationality-select__code {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=nationality-select.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NationalitySelectComponent, [{
    type: Component,
    args: [{ selector: "app-nationality-select", standalone: true, imports: [CommonModule, MatSelectModule, TranslocoModule], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NationalitySelectComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => NationalitySelectComponent),
        multi: true
      }
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="nationality-select" [class.nationality-select--dialog]="variant() === 'dialog'" [class.nationality-select--invalid]="showError">\r
    <mat-select\r
        panelClass="nationality-select-panel"\r
        disableOptionCentering\r
        [id]="inputId()"\r
        [disabled]="disabled"\r
        [value]="value || null"\r
        [placeholder]="'smartEnrollDemos.personForm.nationalityPlaceholder' | transloco"\r
        [attr.aria-invalid]="showError"\r
        (selectionChange)="select($event.value)"\r
        (openedChange)="onOpened($event)"\r
    >\r
        <mat-select-trigger>\r
            @if (selected; as country) {\r
                <span class="nationality-select__value">\r
                    {{ country.name | transloco }}\r
                    <span class="nationality-select__code">{{ country.code | uppercase }}</span>\r
                </span>\r
            } @else if (value) {\r
                {{ value }}\r
            }\r
        </mat-select-trigger>\r
\r
        <div class="nationality-select__search-wrap" (mousedown)="$event.stopPropagation()" (click)="$event.stopPropagation()">\r
            <input\r
                #searchInput\r
                type="text"\r
                class="nationality-select__search"\r
                autocomplete="off"\r
                [value]="query"\r
                [placeholder]="'smartEnrollDemos.personForm.nationalitySearch' | transloco"\r
                [attr.aria-label]="'smartEnrollDemos.personForm.nationalitySearch' | transloco"\r
                (input)="onQuery($event)"\r
                (keydown)="onSearchKeydown($event)"\r
            />\r
        </div>\r
\r
        @if (showLegacy) {\r
            <mat-option [value]="value">{{ value }}</mat-option>\r
        }\r
\r
        @for (country of visibleCountries; track country.code) {\r
            <mat-option [value]="country.code.toUpperCase()">\r
                <span class="nationality-select__value">\r
                    {{ country.name | transloco }}\r
                    <span class="nationality-select__code">{{ country.code | uppercase }}</span>\r
                </span>\r
            </mat-option>\r
        }\r
\r
        @if (!visibleCountries.length && !showLegacy) {\r
            <mat-option disabled>{{ 'smartEnrollDemos.personForm.nationalityNoMatches' | transloco }}</mat-option>\r
        }\r
    </mat-select>\r
\r
    @if (showError) {\r
        <p class="nationality-select__error">{{ 'smartEnrollDemos.personForm.nationalityInvalid' | transloco }}</p>\r
    }\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/shared/nationality-select.component.scss */\napp-nationality-select {\n  display: block;\n}\n.nationality-select .mat-mdc-select {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 2.75rem;\n  padding: 0 0.85rem;\n  border: 1px solid rgb(var(--color-outline-variant)/0.45);\n  border-radius: 0.5rem;\n  background: rgb(var(--color-surface-container-low));\n  color: rgb(var(--color-on-surface));\n  font-size: 0.875rem;\n}\n.nationality-select .mat-mdc-select-trigger {\n  width: 100%;\n}\n.nationality-select .mat-mdc-select-placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.7);\n}\n.nationality-select--dialog .mat-mdc-select {\n  border-color: #e7e5e4;\n  border-radius: 0.75rem;\n  background: rgba(250, 250, 249, 0.8);\n  color: #1c1917;\n}\n.nationality-select--dialog .mat-mdc-select-placeholder {\n  color: #a8a29e;\n}\n.dark .nationality-select--dialog .mat-mdc-select {\n  border-color: #374151;\n  background: rgba(3, 7, 18, 0.5);\n  color: #f5f5f4;\n}\n.dark .nationality-select--dialog .mat-mdc-select-placeholder {\n  color: #78716c;\n}\n.nationality-select--invalid .mat-mdc-select {\n  border-color: #b91c1c;\n}\n.nationality-select__value {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.nationality-select__code {\n  color: #78716c;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.04em;\n}\n.nationality-select__error {\n  margin: 0.35rem 0 0;\n  color: #b91c1c;\n  font-size: 0.75rem;\n}\n.dark .nationality-select__error {\n  color: #fca5a5;\n}\n.nationality-select-panel .nationality-select__search-wrap {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  padding: 0.5rem;\n  background: #fff;\n}\n.nationality-select-panel .nationality-select__search {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid #e7e5e4;\n  border-radius: 0.5rem;\n  background: #fafaf9;\n  padding: 0.45rem 0.7rem;\n  color: #1c1917;\n  font-size: 0.875rem;\n  outline: none;\n}\n.nationality-select-panel .nationality-select__search:focus {\n  border-color: #2642ff;\n}\n.dark .nationality-select-panel.mat-mdc-select-panel {\n  background: #1e293b;\n  color: #f8fafc;\n}\n.dark .nationality-select-panel .mat-mdc-option {\n  background: transparent;\n  color: #f8fafc;\n}\n.dark .nationality-select-panel .mat-mdc-option:hover,\n.dark .nationality-select-panel .mat-mdc-option.mdc-list-item--selected {\n  background: #334155;\n}\n.dark .nationality-select-panel .nationality-select__search-wrap {\n  background: #1e293b;\n}\n.dark .nationality-select-panel .nationality-select__search {\n  border-color: #334155;\n  background: #0f172a;\n  color: #f8fafc;\n}\n.dark .nationality-select__code {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=nationality-select.component.css.map */\n"] }]
  }], () => [], { searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NationalitySelectComponent, { className: "NationalitySelectComponent", filePath: "src/app/modules/smart-enroll/shared/nationality-select.component.ts", lineNumber: 94 });
})();

export {
  isCatalogNationality,
  normalizeNationalityCode,
  nationalityDisplayName,
  NationalitySelectComponent
};
//# sourceMappingURL=chunk-ZR4RFQ5X.js.map
