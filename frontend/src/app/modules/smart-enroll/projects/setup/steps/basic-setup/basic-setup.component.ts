import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { CountryOption, CountryService } from 'app/core/services/country.service';

/**
 * Step 0 — Basic project setup.
 * Mirrors verifik-client-panel `SmartEnrollBasicSetupComponent`: project name,
 * allowed-country chips, contact / data-protection block.
 */
@Component({
    selector: 'setup-basic-setup',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './basic-setup.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupBasicSetupComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _countryService = inject(CountryService);
    private _transloco = inject(TranslocoService);

    countries: CountryOption[] = this._countryService.countries;
    ipCountries: CountryOption[] = this._countryService.ipCountries;

    allowedCountriesSearch = '';
    dataProtectionCountrySearch = '';

    readonly MAX_NAME_LENGTH = 60;

    get nameLength(): number {
        return this.form?.get('name')?.value?.length || 0;
    }

    get nameLengthStatus(): 'safe' | 'warning' | 'danger' {
        const length = this.nameLength;
        if (length > this.MAX_NAME_LENGTH) return 'danger';
        if (length > this.MAX_NAME_LENGTH * 0.8) return 'warning';
        return 'safe';
    }

    get filteredAllowedCountries(): CountryOption[] {
        const term = this.allowedCountriesSearch.toLowerCase();
        return this.ipCountries.filter((c) => this._transloco.translate(c.name).toLowerCase().includes(term));
    }

    get filteredDataProtectionCountries(): CountryOption[] {
        const term = this.dataProtectionCountrySearch.toLowerCase();
        return this.countries.filter(
            (c) => c.country.toLowerCase() !== 'all' && this._transloco.translate(c.name).toLowerCase().includes(term)
        );
    }

    get allowedCountries(): string[] {
        return (this.form?.get('allowedCountries')?.value as string[]) || [];
    }

    addCountry(country: CountryOption): void {
        const values = new Set(this.allowedCountries);
        if (country.country === 'All') {
            this.form.get('allowedCountries')?.setValue(['All']);
            return;
        }
        if (values.has('All')) values.delete('All');
        values.add(country.country);
        this.form.get('allowedCountries')?.setValue(Array.from(values));
    }

    removeCountry(country: string): void {
        const values = new Set(this.allowedCountries);
        values.delete(country);
        this.form.get('allowedCountries')?.setValue(Array.from(values));
    }

    countryLabel(country: string): string {
        const found = this.countries.find((c) => c.country === country);
        return found ? this._transloco.translate(found.name) : country;
    }
}
