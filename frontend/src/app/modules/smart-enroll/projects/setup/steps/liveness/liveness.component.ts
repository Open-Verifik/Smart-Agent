import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { TranslocoModule } from '@jsverse/transloco';

/**
 * Step 3 — Liveness scoring + KYC type.
 * Mirrors verifik-client-panel `SmartEnrollLivenessComponent`.
 */
@Component({
    selector: 'setup-liveness',
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
        MatSliderModule,
        TranslocoModule,
    ],
    templateUrl: './liveness.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupLivenessComponent implements OnInit, OnChanges {
    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;
    @Input() subForm = false;
    @Input() stepFormControlName: 'liveness' | 'legalRepresentative' = 'liveness';

    private _kycEnsured = false;

    ngOnInit(): void {
        if (this.isFormReady) this._ensureKycTypeControl();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ((changes['form'] || changes['formGroup'] || changes['loading']) && this.isFormReady) {
            if (changes['form'] || changes['formGroup']) this._kycEnsured = false;
            this._ensureKycTypeControl();
        }
    }

    private _ensureKycTypeControl(): void {
        if (this._kycEnsured) return;
        const grp = this.livenessFormGroup;
        if (!grp) return;
        this._kycEnsured = true;

        let ctrl = grp.get('kycType') as FormControl | null;
        if (!ctrl) {
            grp.addControl('kycType', new FormControl('traditional'));
            return;
        }
        if (!ctrl.value) ctrl.setValue('traditional', { emitEvent: false });
    }

    get isFormReady(): boolean {
        return !this.loading && !!this.form && !!this.livenessFormGroup && !!this.livenessStepFormGroup;
    }

    get livenessFormGroup(): FormGroup | null {
        return (this.formGroup as FormGroup) || null;
    }

    get livenessStepFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.steps') as FormGroup) || null;
    }

    get livenessStepValue(): string | null {
        const v = this.livenessStepFormGroup?.get(this.stepFormControlName)?.value;
        return v != null && v !== '' ? String(v) : null;
    }

    get isLivenessEnabled(): boolean {
        return this.livenessStepValue !== null && this.livenessStepValue !== 'skip';
    }

    get isNotRequired(): boolean {
        return this.livenessStepValue === 'skip';
    }

    get isSearchMinScoreWarn(): boolean {
        const v = this.livenessFormGroup?.get('searchMinScore')?.value;
        return v != null && v < 0.8;
    }

    get minScoreDisplayValue(): string {
        return `${Math.floor((this.livenessFormGroup?.get('minScore')?.value || 0) * 100)}%`;
    }
    get searchMinScoreDisplayValue(): string {
        return `${Math.floor((this.livenessFormGroup?.get('searchMinScore')?.value || 0) * 100)}%`;
    }
    get compareMinScoreDisplayValue(): string {
        return `${Math.floor((this.livenessFormGroup?.get('compareMinScore')?.value || 0) * 100)}%`;
    }

    get selectedKycType(): string | null {
        return this.livenessFormGroup?.get('kycType')?.value || null;
    }
    get isTraditionalKyc(): boolean {
        return this.selectedKycType === 'traditional';
    }
    get isZeroKnowledgeKyc(): boolean {
        return this.selectedKycType === 'zero_knowledge';
    }
}
