import { ChangeDetectionStrategy, Component, DestroyRef, ViewEncapsulation, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { COUNTRY_CENTROIDS, countryName } from 'app/core/usage/country-geo';
import { UsageApiService } from 'app/core/usage/usage-api.service';

const CODE_PATTERN = /^[A-Za-z0-9_.-]+$/;

export interface CostCenterDialogData {
    id?: string;
    name: string;
    code: string;
    country: string;
}

export type CostCenterDialogResult = 'created' | 'updated';

interface CountryOption {
    code: string;
    name: string;
}

/**
 * Strip accents so "esp" matches España.
 * @param {string} value
 * @returns {string}
 */
const _fold = (value: string): string => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/**
 * Countries for the default-country field, in the active language.
 * @param {string} lang
 * @returns {CountryOption[]}
 */
const _countries = (lang: string): CountryOption[] =>
    Object.keys(COUNTRY_CENTROIDS)
        .map((code) => ({ code, name: countryName(code, lang) }))
        .sort((left, right) => left.name.localeCompare(right.name));

/**
 * An exact ISO code shows the full list. Anything else filters by name or code.
 * @param {CountryOption[]} countries
 * @param {string} value
 * @returns {CountryOption[]}
 */
const _filterCountries = (countries: CountryOption[], value: string): CountryOption[] => {
    const query = _fold((value || '').trim());
    if (!query || /^[a-z]{2}$/.test(query)) return countries;

    return countries.filter((country) => _fold(country.name).includes(query) || country.code.toLowerCase().includes(query));
};

/**
 * Create or edit a cost center. The aside explains why a global operation would add one.
 */
@Component({
    selector: 'app-cost-center-dialog',
    standalone: true,
    imports: [ReactiveFormsModule, MatAutocompleteModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, TranslocoModule],
    templateUrl: './cost-center-dialog.component.html',
    styleUrl: './cost-center-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostCenterDialogComponent {
    private readonly _dialogRef = inject(MatDialogRef<CostCenterDialogComponent, CostCenterDialogResult>);
    private readonly _data = inject<CostCenterDialogData | null>(MAT_DIALOG_DATA, { optional: true });
    private readonly _api = inject(UsageApiService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _destroyRef = inject(DestroyRef);
    private readonly _fb = inject(FormBuilder);

    readonly saving = signal(false);
    readonly errorKey = signal<string | null>(null);
    readonly editing = Boolean(this._data?.id);
    readonly countries = _countries(this._transloco.getActiveLang() || 'en');
    readonly filteredCountries = signal<CountryOption[]>(this.countries);

    readonly form = this._fb.nonNullable.group({
        name: [this._data?.name || '', [Validators.required, Validators.maxLength(120)]],
        code: [this._data?.code || '', [Validators.required, Validators.maxLength(60), Validators.pattern(CODE_PATTERN)]],
        country: [this._data?.country || '', [Validators.required, Validators.pattern(/^[A-Z]{2}$/)]],
    });

    constructor() {
        this.form.controls.country.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
            this.filteredCountries.set(_filterCountries(this.countries, value));
        });
    }

    /**
     * Show "Spain (ES)" while the control keeps the ISO code.
     * @param {string} value
     * @returns {string}
     */
    displayCountry = (value: string): string => {
        const match = this.countries.find((country) => country.code === value);
        return match ? `${match.name} (${match.code})` : value || '';
    };

    /**
     * Select the current label so the next keystroke starts a search.
     * @param {FocusEvent} event
     */
    onCountryFocus = (event: FocusEvent): void => {
        (event.target as HTMLInputElement).select();
        this.filteredCountries.set(this.countries);
    };

    /**
     * Accept a typed ISO code or an exact country name after the option click settles.
     */
    onCountryBlur = (): void => {
        setTimeout(() => this._commitCountry(), 200);
    };

    /**
     * Store the ISO code when the typed text is a code or a full country name.
     */
    private _commitCountry = (): void => {
        const raw = (this.form.controls.country.value || '').trim();
        if (/^[A-Z]{2}$/.test(raw)) return;

        const folded = _fold(raw);
        const match = this.countries.find((country) => country.code.toLowerCase() === raw.toLowerCase() || _fold(country.name) === folded);
        if (match) {
            this.form.controls.country.setValue(match.code);
            return;
        }

        if (raw) this.form.controls.country.markAsTouched();
    };

    /**
     * Persist the center and close with created or updated.
     */
    save = (): void => {
        if (this.form.invalid || this.saving()) {
            this.form.markAllAsTouched();
            return;
        }

        const input = { ...this.form.getRawValue(), code: this.form.getRawValue().code.trim() };
        const id = this._data?.id;
        const request$ = id ? this._api.updateCostCenter(id, input) : this._api.createCostCenter(input);

        this.saving.set(true);
        this.errorKey.set(null);
        request$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
            next: () => this._dialogRef.close(id ? 'updated' : 'created'),
            error: (error: HttpErrorResponse) => {
                this.saving.set(false);
                this.errorKey.set(error?.error?.message === 'cost_center_code_taken' ? 'settings.costCenters.codeTaken' : 'settings.costCenters.saveError');
            },
        });
    };
}
