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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';
import {
    calibrateArcFaceCompareThreshold,
    DEFAULT_ARCFACE_COMPARE_MIN_SCORE,
    FACE_COMPARE_THRESHOLD_PRESETS,
} from 'app/modules/smart-enroll/projects/app-registration-record.utils';

let nextHumanAuthnSliderId = 0;

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
        TranslocoModule,
    ],
    templateUrl: './human-authn-step.component.html',
    styleUrls: ['../../../../../shared/setup-journey/_setup-journey.scss', './human-authn-step.component.scss'],
})
export class HumanAuthnModeStepComponent {
    @Input() form!: FormGroup;

    readonly tolerances = HUMAN_AUTHN_TOLERANCES;
    readonly compareThresholdPresets = FACE_COMPARE_THRESHOLD_PRESETS;
    readonly compareSliderId = `human-authn-compare-min-${nextHumanAuthnSliderId++}`;
    readonly compareHelpId = `${this.compareSliderId}-help`;
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

    get compareMinScoreUnitValue(): number {
        const raw = this.humanAuthnGroup?.get('compareMinScore')?.value;
        return Math.round(calibrateArcFaceCompareThreshold(raw, DEFAULT_ARCFACE_COMPARE_MIN_SCORE) * 100) / 100;
    }

    get compareMinScoreDisplayValue(): string {
        return `${Math.round(this.compareMinScoreUnitValue * 100)}%`;
    }

    get compareMinScoreProgressPercent(): number {
        return Math.max(0, Math.min(100, ((this.compareMinScoreUnitValue - 0.6) / 0.15) * 100));
    }

    isComparePresetActive(presetValue: number): boolean {
        return Math.abs(this.compareMinScoreUnitValue - presetValue) < 0.005;
    }

    setCompareMinScorePreset(value: number): void {
        const ctrl = this.humanAuthnGroup?.get('compareMinScore');
        if (!ctrl) return;
        ctrl.setValue(value);
        ctrl.markAsDirty();
        ctrl.markAsTouched();
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

    selectAccessMode(active: boolean): void {
        this.humanAuthnGroup.get('mode')?.setValue(active ? 'active_user' : 'standard');
        this.humanAuthnGroup.get('mode')?.markAsDirty();
        this.humanAuthnGroup.get('tolerance')?.setValue(active ? 'HARDENED' : 'REGULAR');
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
