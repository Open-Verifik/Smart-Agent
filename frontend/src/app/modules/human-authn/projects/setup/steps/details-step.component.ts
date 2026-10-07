import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CountryOption, CountryService } from 'app/core/services/country.service';
import { PROJECT_DEFAULT_LANGUAGES } from 'app/modules/smart-enroll/projects/setup/steps/basic-setup/basic-setup.component';

/**
 * HumanAuthn project details. Name, countries, compliance URLs, and the data protection officer.
 */
@Component({
    selector: 'human-authn-details-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './details-step.component.html',
    styleUrl: './details-step.component.scss',
})
export class HumanAuthnDetailsStepComponent implements OnInit {
    @Input() form!: FormGroup;

    private _countries = inject(CountryService);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);

    readonly MAX_NAME_LENGTH = 60;
    readonly defaultLanguages = PROJECT_DEFAULT_LANGUAGES;
    readonly allowedCountryFilterCtrl = new FormControl('', { nonNullable: true });

    ngOnInit(): void {
        this.form?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
        this.allowedCountryFilterCtrl.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._cdr.markForCheck());
        this._transloco.langChanges$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    }

    get projectName(): string {
        return `${this.form?.get('name')?.value || ''}`.trim();
    }

    get nameLength(): number {
        return this.form?.get('name')?.value?.length || 0;
    }

    get nameLengthStatus(): 'safe' | 'warning' | 'danger' {
        if (this.nameLength > this.MAX_NAME_LENGTH) return 'danger';
        if (this.nameLength > this.MAX_NAME_LENGTH * 0.8) return 'warning';
        return 'safe';
    }

    get allowedCountries(): string[] {
        return (this.form?.get('allowedCountries')?.value as string[]) || [];
    }

    get allowsWorld(): boolean {
        return this.allowedCountries.includes('All');
    }

    get languageLabel(): string {
        const code = this.form?.get('defaultLanguage')?.value;
        return this.defaultLanguages.find((language) => language.code === code)?.label || code || '';
    }

    get privacyUrl(): string {
        return this._urlValue('privacyUrl');
    }

    get termsUrl(): string {
        return this._urlValue('termsAndConditionsUrl');
    }

    get privacySet(): boolean {
        return this._urlReady('privacyUrl');
    }

    get termsSet(): boolean {
        return this._urlReady('termsAndConditionsUrl');
    }

    get officerName(): string {
        return `${this.form?.get('dataProtection.name')?.value || ''}`.trim();
    }

    get officerEmail(): string {
        return `${this.form?.get('dataProtection.email')?.value || ''}`.trim();
    }

    get filteredAllowedCountries(): CountryOption[] {
        const term = this.allowedCountryFilterCtrl.value.trim().toLowerCase();
        const selected = new Set(this.allowedCountries);
        return this._countries.ipCountries.filter((country) => {
            if (selected.has(country.country)) return false;
            const label = this._transloco.translate(country.name).toLowerCase();
            const code = (country.code || '').toLowerCase();
            const key = (country.country || '').toLowerCase();
            if (!term) return true;
            return label.includes(term) || code.includes(term) || key.includes(term);
        });
    }

    get officerCountries(): CountryOption[] {
        return this._countries.countries.filter((country) => country.country.toLowerCase() !== 'all');
    }

    showError(path: string): boolean {
        const control = this.form?.get(path);
        return !!control && control.invalid && (control.touched || control.dirty);
    }

    countryLabel(country: string): string {
        if (country === 'All') return this._transloco.translate('country_name.world');
        const found = this._countries.countries.find((option) => option.country === country);
        return found ? this._transloco.translate(found.name) : country;
    }

    onAllowedCountryPicked(event: MatAutocompleteSelectedEvent): void {
        const code = event.option.value as string;
        const option = this._countries.ipCountries.find((country) => country.country === code);
        this.allowedCountryFilterCtrl.setValue('', { emitEvent: false });
        if (option) this._addCountry(option);
        this._cdr.markForCheck();
    }

    removeCountry(country: string): void {
        const values = new Set(this.allowedCountries);
        values.delete(country);
        this._setCountries(Array.from(values));
    }

    private _addCountry(country: CountryOption): void {
        if (country.country === 'All') {
            this._setCountries(['All']);
            return;
        }
        const values = new Set(this.allowedCountries);
        values.delete('All');
        values.add(country.country);
        this._setCountries(Array.from(values));
    }

    private _setCountries(countries: string[]): void {
        const control = this.form?.get('allowedCountries');
        control?.setValue(countries);
        control?.markAsDirty();
    }

    private _urlValue(path: string): string {
        const control = this.form?.get(path);
        const value = `${control?.value || ''}`.trim();
        return value && !control?.invalid ? value : '';
    }

    private _urlReady(path: string): boolean {
        return !!this._urlValue(path);
    }
}
