import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    ViewChild,
    ViewEncapsulation,
    forwardRef,
    inject,
    input,
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CountryOption, CountryService } from 'app/core/services/country.service';

/**
 * Empty is allowed. A value is valid only when it matches a catalog ISO code.
 * @param {string | null | undefined} value
 * @param {CountryOption[]} countries
 * @returns {boolean}
 */
export const isCatalogNationality = (value: string | null | undefined, countries: CountryOption[]): boolean => {
    const raw = `${value ?? ''}`.trim().toLowerCase();
    if (!raw) return true;

    return countries.some((country) => country.code === raw && country.country !== 'World' && country.code !== 'world');
};

/**
 * Known codes become uppercase ISO-2. Anything else is left unchanged.
 * @param {string | null | undefined} value
 * @returns {string}
 */
export const normalizeNationalityCode = (value: string | null | undefined): string => {
    const raw = `${value ?? ''}`.trim();
    if (!raw) return '';

    return /^[a-z]{2}$/i.test(raw) ? raw.toUpperCase() : raw;
};

/**
 * Label for the enrollment chip: translated country name, the raw value, or the empty label.
 * @param {string} value
 * @param {CountryOption[]} countries
 * @param {(key: string) => string} translate
 * @param {string} notSet
 * @returns {string}
 */
export const nationalityDisplayName = (
    value: string,
    countries: CountryOption[],
    translate: (key: string) => string,
    notSet: string,
): string => {
    const raw = value.trim().toLowerCase();
    if (!raw) return notSet;

    const match = countries.find((country) => country.code === raw && country.country !== 'World');
    return match ? translate(match.name) : value.trim();
};

const _fold = (value: string): string => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

@Component({
    selector: 'app-nationality-select',
    standalone: true,
    imports: [CommonModule, MatSelectModule, TranslocoModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NationalitySelectComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => NationalitySelectComponent),
            multi: true,
        },
    ],
    templateUrl: './nationality-select.component.html',
    styleUrl: './nationality-select.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NationalitySelectComponent implements ControlValueAccessor, Validator {
    private _countries = inject(CountryService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

    inputId = input('nationality');
    variant = input<'demo' | 'dialog'>('demo');

    value = '';
    query = '';
    disabled = false;

    readonly countries = this._countries.countries.filter((country) => country.country !== 'World' && country.code !== 'world');

    private _onChange: (value: string) => void = () => undefined;
    private _onTouched: () => void = () => undefined;
    private _onValidatorChange: () => void = () => undefined;

    constructor() {
        this._transloco.langChanges$.pipe(takeUntilDestroyed()).subscribe(() => this._cdr.markForCheck());
    }

    get selected(): CountryOption | undefined {
        const code = this.value.trim().toLowerCase();
        if (!code) return undefined;

        return this.countries.find((country) => country.code === code);
    }

    get showLegacy(): boolean {
        if (!this.value || this.selected) return false;

        const query = _fold(this.query.trim());
        return !query || _fold(this.value).includes(query);
    }

    get showError(): boolean {
        return !!this.value.trim() && !this.selected;
    }

    get visibleCountries(): CountryOption[] {
        const query = _fold(this.query.trim());

        return this.countries
            .filter((country) => {
                if (!query) return true;

                const name = _fold(this._transloco.translate(country.name));
                return name.includes(query) || country.code.includes(query);
            })
            .sort((left, right) => this._transloco.translate(left.name).localeCompare(this._transloco.translate(right.name)));
    }

    writeValue(value: string | null): void {
        const raw = `${value ?? ''}`.trim();
        const match = this.countries.find((country) => country.code === raw.toLowerCase());
        this.value = match ? match.code.toUpperCase() : raw;
        this._cdr.markForCheck();
    }

    registerOnChange(fn: (value: string) => void): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this._cdr.markForCheck();
    }

    validate(): ValidationErrors | null {
        return isCatalogNationality(this.value, this.countries) ? null : { nationalityUnknown: true };
    }

    registerOnValidatorChange(fn: () => void): void {
        this._onValidatorChange = fn;
    }

    select(code: string): void {
        this.value = code;
        this._onChange(code);
        this._onValidatorChange();
        this._cdr.markForCheck();
    }

    onQuery(event: Event): void {
        this.query = (event.target as HTMLInputElement).value;
        this._cdr.markForCheck();
    }

    onSearchKeydown(event: KeyboardEvent): void {
        event.stopPropagation();
    }

    onOpened(open: boolean): void {
        if (open) {
            setTimeout(() => this.searchInput?.nativeElement.focus());
            return;
        }

        this.query = '';
        this._onTouched();
        this._cdr.markForCheck();
    }
}
