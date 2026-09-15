import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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

type PhoneGateway = 'whatsapp' | 'sms' | 'both' | 'none';

/** Map checkbox channels to the `phoneGateway` enum the API accepts. */
const phoneGatewayFromChannels = (whatsapp: boolean, sms: boolean): PhoneGateway => {
    if (whatsapp && sms) return 'both';
    if (whatsapp) return 'whatsapp';
    if (sms) return 'sms';
    return 'none';
};

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
 * Phone channels are checkboxes mapped to API `phoneGateway`: whatsapp | sms | both | none.
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
export class SetupSignUpFormComponent implements OnInit {
    @ViewChild('countryCodeSearchInput') countryCodeSearchInput?: ElementRef<HTMLInputElement>;

    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() formType: 'business' | 'personal' = 'personal';
    @Input() loading = false;
    @Input() saving = false;
    @Input() subForm = false;
    @Input() stepFormControlName: 'legalRepresentative' | '' = '';

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);

    ngOnInit(): void {
        for (const key of ['phoneGateway', 'emailGateway']) {
            this.formGroup
                ?.get(key)
                ?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
                .subscribe(() => this._cdr.markForCheck());
        }
    }

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

    get phoneWhatsappChecked(): boolean {
        const gateway = this.formGroup?.get('phoneGateway')?.value;
        return gateway === 'whatsapp' || gateway === 'both';
    }

    get phoneSmsChecked(): boolean {
        const gateway = this.formGroup?.get('phoneGateway')?.value;
        return gateway === 'sms' || gateway === 'both';
    }

    get phoneDoNotValidateChecked(): boolean {
        return this.formGroup?.get('phoneGateway')?.value === 'none';
    }

    /**
     * WhatsApp / SMS / Do not validate → `whatsapp` | `sms` | `both` | `none`.
     * Selecting Do not validate clears the other two.
     */
    onPhoneChannelChange(channel: 'whatsapp' | 'sms' | 'none', checked: boolean): void {
        const ctrl = this.formGroup?.get('phoneGateway');
        if (!ctrl) return;
        if (channel === 'none') {
            if (checked) ctrl.setValue('none');
            this.formGroup.markAsDirty();
            this._cdr.markForCheck();
            return;
        }
        ctrl.setValue(
            phoneGatewayFromChannels(
                channel === 'whatsapp' ? checked : this.phoneWhatsappChecked,
                channel === 'sms' ? checked : this.phoneSmsChecked
            )
        );
        this.formGroup.markAsDirty();
        this._cdr.markForCheck();
    }

    get emailOtpChecked(): boolean {
        return this.formGroup?.get('emailGateway')?.value === 'mailgun';
    }

    get emailDoNotValidateChecked(): boolean {
        return this.formGroup?.get('emailGateway')?.value === 'none';
    }

    /**
     * Validate with OTP / Do not validate → `mailgun` | `none`.
     * Selecting Do not validate clears OTP, and vice versa.
     */
    onEmailChannelChange(channel: 'mailgun' | 'none', checked: boolean): void {
        const ctrl = this.formGroup?.get('emailGateway');
        if (!ctrl) return;
        if (channel === 'none') {
            if (checked) ctrl.setValue('none');
            this.formGroup.markAsDirty();
            this._cdr.markForCheck();
            return;
        }
        ctrl.setValue(checked ? 'mailgun' : 'none');
        this.formGroup.markAsDirty();
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
