import { CommonModule } from '@angular/common';
import {
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { PHONE_COUNTRY_CODES, PhoneCountryCodeOption } from 'app/core/constants/phone-country-codes.constant';

type PhoneGateway = 'whatsapp' | 'sms' | 'both' | 'none';
type NameStyle = 'separate' | 'together';

/** Map the WhatsApp and SMS choices to the gateway the API accepts. */
const phoneGatewayFromChannels = (whatsapp: boolean, sms: boolean): PhoneGateway => {
    if (whatsapp && sms) return 'both';
    if (whatsapp) return 'whatsapp';
    if (sms) return 'sms';
    return 'none';
};

const ADDITIONAL_FIELDS = [
    { value: 'gender', labelKey: 'humanAuthnProjects.setup.signup.fieldGender' },
    { value: 'country', labelKey: 'humanAuthnProjects.setup.signup.fieldCountry' },
    { value: 'dateOfBirth', labelKey: 'humanAuthnProjects.setup.signup.fieldDateOfBirth' },
    { value: 'address', labelKey: 'humanAuthnProjects.setup.signup.fieldAddress' },
    { value: 'age', labelKey: 'humanAuthnProjects.setup.signup.fieldAge' },
    { value: 'postalCode', labelKey: 'humanAuthnProjects.setup.signup.fieldPostalCode' },
] as const;

/**
 * HumanAuthn sign-up step. Name is always collected. Phone, email, extras, and legal links are optional.
 */
@Component({
    selector: 'human-authn-signup-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './signup-step.component.html',
    styleUrl: './signup-step.component.scss',
})
export class HumanAuthnSignupStepComponent implements OnInit {
    @Input() form!: FormGroup;
    @ViewChild('countryCodeSearchInput') countryCodeSearchInput?: ElementRef<HTMLInputElement>;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _transloco = inject(TranslocoService);

    readonly additionalFields = ADDITIONAL_FIELDS;
    readonly allPhoneCountryCodes: PhoneCountryCodeOption[] = PHONE_COUNTRY_CODES;

    filteredPhoneCountryCodes: PhoneCountryCodeOption[] = PHONE_COUNTRY_CODES;
    countryCodeSearchTerm = '';

    ngOnInit(): void {
        this.signUp?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
        this._transloco.langChanges$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
    }

    get signUp(): FormGroup | null {
        return (this.form?.get('projectFlow.signUpForm') as FormGroup) || null;
    }

    get nameStyle(): NameStyle {
        return this.signUp?.get('fullNameStyle')?.value === 'separate' ? 'separate' : 'together';
    }

    get phoneOn(): boolean {
        return !!this.signUp?.get('phone')?.value;
    }

    get emailOn(): boolean {
        return !!this.signUp?.get('email')?.value;
    }

    get extrasOn(): boolean {
        return !!this.signUp?.get('allowAdditionalFields')?.value;
    }

    get termsOn(): boolean {
        return !!this.signUp?.get('showTermsAndConditions')?.value;
    }

    get privacyOn(): boolean {
        return !!this.signUp?.get('showPrivacyNotice')?.value;
    }

    get phoneGateway(): PhoneGateway {
        return this.signUp?.get('phoneGateway')?.value || 'none';
    }

    get phoneWhatsappChecked(): boolean {
        return this.phoneGateway === 'whatsapp' || this.phoneGateway === 'both';
    }

    get phoneSmsChecked(): boolean {
        return this.phoneGateway === 'sms' || this.phoneGateway === 'both';
    }

    get emailVerified(): boolean {
        return this.signUp?.get('emailGateway')?.value === 'mailgun';
    }

    get countryCode(): string {
        return this.signUp?.get('countryCode')?.value || '';
    }

    get selectedCountryName(): string {
        return this.allPhoneCountryCodes.find((country) => country.code === this.countryCode)?.name || '';
    }

    get termsUrl(): string {
        return `${this.form?.get('termsAndConditionsUrl')?.value || ''}`.trim();
    }

    get privacyUrl(): string {
        return `${this.form?.get('privacyUrl')?.value || ''}`.trim();
    }

    get selectedExtras(): { value: string; labelKey: string }[] {
        const values = this.signUp?.get('additionalFields')?.value;
        if (!Array.isArray(values)) return [];
        return this.additionalFields.filter((field) => values.includes(field.value));
    }

    get collectedSummary(): string {
        const parts = [this._transloco.translate('humanAuthnProjects.setup.signup.summaryName')];
        if (this.phoneOn) parts.push(this._transloco.translate('humanAuthnProjects.setup.signup.summaryPhone'));
        if (this.emailOn) parts.push(this._transloco.translate('humanAuthnProjects.setup.signup.summaryEmail'));
        if (this.extrasOn && this.selectedExtras.length) {
            parts.push(
                this._transloco.translate('humanAuthnProjects.setup.signup.summaryExtras', { count: this.selectedExtras.length })
            );
        }
        return parts.join(' · ');
    }

    get phoneChannelKey(): string {
        if (this.phoneGateway === 'both') return 'humanAuthnProjects.setup.signup.channelBothLabel';
        if (this.phoneGateway === 'whatsapp') return 'humanAuthnProjects.setup.signup.channelWhatsapp';
        if (this.phoneGateway === 'sms') return 'humanAuthnProjects.setup.signup.channelSms';
        return '';
    }

    setNameStyle(style: NameStyle): void {
        this.signUp?.get('fullNameStyle')?.setValue(style);
        this.signUp?.markAsDirty();
    }

    /**
     * WhatsApp and SMS can both be on. Choosing "no code" clears them.
     * @param channel
     * @param checked
     */
    onPhoneChannelChange(channel: 'whatsapp' | 'sms' | 'none', checked: boolean): void {
        const control = this.signUp?.get('phoneGateway');
        if (!control) return;
        if (channel === 'none') {
            if (checked) control.setValue('none');
        } else {
            control.setValue(
                phoneGatewayFromChannels(
                    channel === 'whatsapp' ? checked : this.phoneWhatsappChecked,
                    channel === 'sms' ? checked : this.phoneSmsChecked
                )
            );
        }
        this.signUp?.markAsDirty();
        this._cdr.markForCheck();
    }

    setEmailVerified(verified: boolean): void {
        this.signUp?.get('emailGateway')?.setValue(verified ? 'mailgun' : 'none');
        this.signUp?.markAsDirty();
    }

    additionalFieldChecked(value: string): boolean {
        return this.selectedExtras.some((field) => field.value === value);
    }

    toggleAdditionalField(value: string, checked: boolean): void {
        const control = this.signUp?.get('additionalFields');
        if (!control) return;
        const current = [...((control.value as string[]) || [])];
        if (checked && !current.includes(value)) current.push(value);
        if (!checked) {
            const index = current.indexOf(value);
            if (index >= 0) current.splice(index, 1);
        }
        control.setValue(current);
        this.signUp?.markAsDirty();
        this._cdr.markForCheck();
    }

    onCountryCodeSearchChange(searchTerm: string): void {
        this.countryCodeSearchTerm = searchTerm;
        const term = searchTerm.toLowerCase().trim();
        this.filteredPhoneCountryCodes = term
            ? this.allPhoneCountryCodes.filter(
                  (country) => country.code.toLowerCase().includes(term) || country.name.toLowerCase().includes(term)
              )
            : this.allPhoneCountryCodes;
        this._cdr.markForCheck();
    }

    onCountryCodeSelectOpened(): void {
        this.countryCodeSearchTerm = '';
        this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
        this._cdr.markForCheck();
        setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 100);
    }

    clearCountryCodeSearch(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        this.onCountryCodeSearchChange('');
        setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 0);
    }
}
