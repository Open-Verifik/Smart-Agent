import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    ViewChild,
    inject,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

import {
    DEFAULT_PHONE_COUNTRY_CODE,
    PHONE_COUNTRY_CODES,
    PhoneCountryCodeOption,
} from 'app/core/constants/phone-country-codes.constant';

/** Optional personal sign-up fields (v3 `signUpForm.additionalFields`). */
const ADDITIONAL_FIELD_OPTIONS = [
    { value: 'gender', labelKey: 'smartEnrollProjects.setup.signupForm.additionalFields.gender' },
    { value: 'country', labelKey: 'smartEnrollProjects.setup.signupForm.additionalFields.country' },
    { value: 'dateOfBirth', labelKey: 'smartEnrollProjects.setup.signupForm.additionalFields.dateOfBirth' },
    { value: 'address', labelKey: 'smartEnrollProjects.setup.signupForm.additionalFields.address' },
    { value: 'age', labelKey: 'smartEnrollProjects.setup.signupForm.additionalFields.age' },
    { value: 'postalCode', labelKey: 'smartEnrollProjects.setup.signupForm.additionalFields.postalCode' },
] as const;

/**
 * Step 1 — Sign-up form fields.
 * Logic mirrors verifik-client-panel `SmartEnrollSignUpFormComponent` 1:1.
 */
@Component({
    selector: 'setup-sign-up-form',
    standalone: true,
    imports: [
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
        TranslocoModule,
    ],
    templateUrl: './sign-up-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupSignUpFormComponent {
    @ViewChild('countryCodeSearchInput') countryCodeSearchInput?: ElementRef<HTMLInputElement>;

    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() formType: 'business' | 'personal' = 'personal';
    @Input() loading = false;
    @Input() saving = false;
    @Input() subForm = false;
    @Input() stepFormControlName: 'legalRepresentative' | '' = '';

    private _cdr = inject(ChangeDetectorRef);

    readonly defaultPhoneCountryCode = DEFAULT_PHONE_COUNTRY_CODE;
    readonly allPhoneCountryCodes: PhoneCountryCodeOption[] = PHONE_COUNTRY_CODES;
    readonly additionalFieldOptions = ADDITIONAL_FIELD_OPTIONS;

    filteredPhoneCountryCodes: PhoneCountryCodeOption[] = PHONE_COUNTRY_CODES;
    countryCodeSearchTerm = '';

    /** Mirrors client-panel: `!loading && !!formGroup`. */
    get isFormReady(): boolean {
        return !this.loading && !!this.formGroup;
    }

    get isNotRequired(): boolean {
        if (this.stepFormControlName === 'legalRepresentative') {
            return this.stepFormGroup?.get('legalRepresentative')?.value === 'skip';
        }
        return false;
    }

    get stepFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.steps') as FormGroup) || null;
    }

    get selectedCountryName(): string {
        const code = this.formGroup?.get('countryCode')?.value;
        if (!code) return '';
        return this.allPhoneCountryCodes.find((c) => c.code === code)?.name || '';
    }

    trackByPhoneCountryCode(_index: number, country: PhoneCountryCodeOption): string {
        return country?.code;
    }

    onCountryCodeSearchChange(searchTerm: string): void {
        this.countryCodeSearchTerm = searchTerm;
        this._filterPhoneCountryCodes();
        this._cdr.markForCheck();
    }

    clearCountryCodeSearch(event?: Event): void {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.countryCodeSearchTerm = '';
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
        this._cdr.detectChanges();
        setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 0);
    }

    onCountryCodeSelectOpened(): void {
        this.countryCodeSearchTerm = '';
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
        this._cdr.markForCheck();
        setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 100);
    }

    onCountryCodeSelectClosed(): void {
        this.countryCodeSearchTerm = '';
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
        this._cdr.markForCheck();
    }

    additionalFieldChecked(value: string): boolean {
        const v = this.formGroup?.get('additionalFields')?.value as string[] | undefined;
        return Array.isArray(v) && v.includes(value);
    }

    toggleAdditionalField(value: string, checked: boolean): void {
        const ctrl = this.formGroup?.get('additionalFields');
        if (!ctrl) return;
        const cur = [...((ctrl.value as string[]) || [])];
        if (checked && !cur.includes(value)) cur.push(value);
        if (!checked) {
            const i = cur.indexOf(value);
            if (i >= 0) cur.splice(i, 1);
        }
        ctrl.setValue(cur);
        this._cdr.markForCheck();
    }

    private _filterPhoneCountryCodes(): void {
        if (!this.countryCodeSearchTerm.trim()) {
            this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
            return;
        }
        const term = this.countryCodeSearchTerm.toLowerCase().trim();
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes.filter(
            (c) => c.code.toLowerCase().includes(term) || c.name.toLowerCase().includes(term)
        );
    }
}
