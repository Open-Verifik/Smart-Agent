import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

import { DEFAULT_PHONE_COUNTRY_CODE } from 'app/core/constants/phone-country-codes.constant';

import { SetupService } from '../../setup.service';
import { Branding } from '../../setup.types';

type FieldDescriptor = { label: string };

/**
 * Mock customer-facing signup form, themed live by the wizard's `branding`
 * and toggled live by the wizard's `signUpForm` group. Mirrors the client-panel
 * `SmartEnrollPreviewSignUpComponent` 1:1.
 */
@Component({
    selector: 'preview-sign-up',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './preview-sign-up.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewSignUpComponent implements OnInit, OnChanges {
    @Input() branding!: Branding;
    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() formType: 'business' | 'personal' = 'personal';
    @Input() deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';

    private _setup = inject(SetupService);

    readonly defaultPhoneCountryCode = DEFAULT_PHONE_COUNTRY_CODE;
    readonly defaultBranding: Branding = this._setup.defaultBranding;

    /** Mock field labels (use Smart-Agent i18n keys). Mirrors client-panel `previewFields`. */
    readonly previewFields: Record<string, FieldDescriptor> = {
        addressLine1: { label: 'smart_enroll.sign_up_form.address_line_1' },
        addressLine2: { label: 'smart_enroll.sign_up_form.address_line_2' },
        age: { label: 'smart_enroll.sign_up_form.age' },
        businessIdNumber: { label: 'smart_enroll.sign_up_form.business_id_number' },
        businessName: { label: 'smart_enroll.sign_up_form.business_name' },
        city: { label: 'smart_enroll.sign_up_form.city' },
        country: { label: 'smart_enroll.sign_up_form.country' },
        dateOfBirth: { label: 'smart_enroll.sign_up_form.date_of_birth' },
        email: { label: 'smart_enroll.sign_up_form.email' },
        firstName: { label: 'smart_enroll.sign_up_form.first_name' },
        fullName: { label: 'smart_enroll.sign_up_form.full_name' },
        gender: { label: 'smart_enroll.sign_up_form.gender' },
        lastName: { label: 'smart_enroll.sign_up_form.last_name' },
        phone: { label: 'smart_enroll.sign_up_form.phone_number' },
        postalCode: { label: 'smart_enroll.sign_up_form.postal_code' },
        state: { label: 'smart_enroll.sign_up_form.state' },
    };

    ngOnInit(): void {
        this.branding = { ...this.defaultBranding, ...(this.branding || {}) } as Branding;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['branding']) {
            this.branding = { ...this.defaultBranding, ...(this.branding || {}) } as Branding;
        }
    }

    get isLegalRepresentativePreview(): boolean {
        return this.formType === 'personal' && this.form?.get('target')?.value === 'business';
    }

    get buttonStyle(): { 'background-color': string; color: string } {
        return {
            'background-color': this.branding.buttonColor || (this.defaultBranding.buttonColor as string),
            color: this.branding.buttonTextColor || (this.defaultBranding.buttonTextColor as string),
        };
    }

    get textStyle(): { color: string } {
        return { color: this.branding.textColor || (this.defaultBranding.textColor as string) };
    }

    get titleStyle(): { color: string } {
        return { color: this.branding.titleColor || (this.defaultBranding.titleColor as string) };
    }

    get placeholderColor(): string {
        return this.branding.textColor || '#94a3b8';
    }

    get showAddress(): boolean {
        if (!this.formGroup) return false;
        if (this.formType === 'personal') {
            return !!this.formGroup.get('allowAdditionalFields')?.value
                && (this.formGroup.get('additionalFields')?.value as string[] | undefined)?.includes('address') === true;
        }
        return !!this.formGroup.get('address')?.value;
    }

    additionalFields(): string[] {
        return (this.formGroup?.get('additionalFields')?.value as string[]) || [];
    }

    hasAdditionalField(name: string): boolean {
        return !!this.formGroup?.get('allowAdditionalFields')?.value && this.additionalFields().includes(name);
    }
}
