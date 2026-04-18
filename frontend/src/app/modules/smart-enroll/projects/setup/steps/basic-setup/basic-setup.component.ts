import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
        MatAutocompleteModule,
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
    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);

    countries: CountryOption[] = this._countryService.countries;
    ipCountries: CountryOption[] = this._countryService.ipCountries;

    /** Filter text for allowed-country autocomplete (OnPush + form control). */
    readonly allowedCountryFilterCtrl = new FormControl('', { nonNullable: true });

    dataProtectionCountrySearch = '';

    constructor() {
        this.allowedCountryFilterCtrl.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._cdr.markForCheck());
    }

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
        const term = this.allowedCountryFilterCtrl.value.trim().toLowerCase();
        const selected = new Set(this.allowedCountries);
        return this.ipCountries.filter((c) => {
            if (selected.has(c.country)) return false;
            const label = this._transloco.translate(c.name).toLowerCase();
            const code = (c.code || '').toLowerCase();
            const countryKey = (c.country || '').toLowerCase();
            if (!term) return true;
            return label.includes(term) || code.includes(term) || countryKey.includes(term);
        });
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

    onAllowedCountryPicked(event: MatAutocompleteSelectedEvent): void {
        const code = event.option.value as string;
        const option = this.ipCountries.find((c) => c.country === code);
        this.allowedCountryFilterCtrl.setValue('', { emitEvent: false });
        this._cdr.markForCheck();
        if (option) this.addCountry(option);
    }

    removeCountry(country: string): void {
        const values = new Set(this.allowedCountries);
        values.delete(country);
        this.form.get('allowedCountries')?.setValue(Array.from(values));
    }

    countryLabel(country: string): string {
        if (country === 'All') {
            return this._transloco.translate('country_name.world');
        }
        const found = this.countries.find((c) => c.country === country);
        return found ? this._transloco.translate(found.name) : country;
    }
}
