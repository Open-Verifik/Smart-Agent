import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

import { PHONE_COUNTRY_CODES } from 'app/core/constants/phone-country-codes.constant';

/**
 * Step 1 — Sign-up form fields.
 * Mirrors verifik-client-panel `SmartEnrollSignUpFormComponent` controls
 * (target, full name, contact toggles, gateways, legal toggles).
 */
@Component({
    selector: 'setup-sign-up-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
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
    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() formType: 'business' | 'personal' = 'personal';
    @Input() loading = false;
    @Input() saving = false;
    @Input() subForm = false;
    @Input() stepFormControlName: 'legalRepresentative' | '' = '';

    readonly phoneCountryCodes = PHONE_COUNTRY_CODES;

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
}
