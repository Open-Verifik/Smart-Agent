import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { TranslocoModule } from '@jsverse/transloco';

export const HUMAN_AUTHN_TOLERANCES = ['SOFT', 'REGULAR', 'HARDENED', 'REGULAR_HARD', 'REGULAR_SOFT'] as const;
export const HUMAN_AUTHN_PUBLIC_DATA_KEYS = ['fullName', 'email', 'phone', 'documentNumber'] as const;
type HumanAuthnPublicDataKey = (typeof HUMAN_AUTHN_PUBLIC_DATA_KEYS)[number];

const PUBLIC_DATA_SOURCES: Record<HumanAuthnPublicDataKey, 'signup' | 'documents'> = {
    fullName: 'signup',
    email: 'signup',
    phone: 'signup',
    documentNumber: 'documents',
};

@Component({
    selector: 'human-authn-mode-step',
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
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        TranslocoModule,
    ],
    templateUrl: './human-authn-step.component.html',
    styleUrl: './human-authn-step.component.scss',
})
export class HumanAuthnModeStepComponent {
    @Input() form!: FormGroup;

    readonly tolerances = HUMAN_AUTHN_TOLERANCES;
    hideVerifierKey = true;

    get humanAuthnGroup(): FormGroup {
        return this.form.get('projectFlow.humanAuthn') as FormGroup;
    }

    get requireLiveness(): boolean {
        return this.humanAuthnGroup?.get('mode')?.value === 'active_user';
    }

    get livenessEnabled(): boolean {
        return this.requireLiveness || !!this.humanAuthnGroup?.get('livenessAtCreation')?.value;
    }

    get documentEnabled(): boolean {
        return this.form.get('projectFlow.steps.document')?.value !== 'skip';
    }

    get compareMinScoreDisplayValue(): string {
        return `${Math.floor((this.humanAuthnGroup?.get('compareMinScore')?.value || 0) * 100)}%`;
    }

    get publicDataOptions(): Array<{ key: HumanAuthnPublicDataKey; available: boolean; source: 'signup' | 'documents' }> {
        const availableKeys = this.availablePublicDataKeys();
        return HUMAN_AUTHN_PUBLIC_DATA_KEYS.map((key) => ({
            key,
            available: availableKeys.includes(key),
            source: PUBLIC_DATA_SOURCES[key],
        }));
    }

    get selectedPublicDataCount(): number {
        return this.availablePublicDataKeys().filter((key) => this.isPublicKeySelected(key)).length;
    }

    availablePublicDataKeys(): HumanAuthnPublicDataKey[] {
        const keys: HumanAuthnPublicDataKey[] = [];
        if (this.form.get('projectFlow.signUpForm.fullName')?.value) keys.push('fullName');
        if (this.form.get('projectFlow.signUpForm.email')?.value) keys.push('email');
        if (this.form.get('projectFlow.signUpForm.phone')?.value) keys.push('phone');
        if (this.documentEnabled) keys.push('documentNumber');
        return keys;
    }

    isPublicKeySelected(key: string): boolean {
        return (this.humanAuthnGroup?.get('publicDataKeys')?.value || []).includes(key);
    }

    onRequireLivenessChange(event: MatSlideToggleChange): void {
        this.humanAuthnGroup.get('mode')?.setValue(event.checked ? 'active_user' : 'standard');
        this.humanAuthnGroup.get('mode')?.markAsDirty();
        this.humanAuthnGroup.get('tolerance')?.setValue(event.checked ? 'HARDENED' : 'REGULAR');
        this.humanAuthnGroup.get('tolerance')?.markAsDirty();
    }

    togglePublicKey(key: string, checked: boolean): void {
        const control = this.humanAuthnGroup.get('publicDataKeys');
        const current = [...(control?.value || [])];
        const next = checked ? [...new Set([...current, key])] : current.filter((item) => item !== key);
        control?.setValue(next);
        control?.markAsDirty();
    }
}
