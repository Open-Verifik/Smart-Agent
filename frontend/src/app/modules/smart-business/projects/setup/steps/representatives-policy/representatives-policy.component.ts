import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { TranslocoModule } from '@jsverse/transloco';
import {
    calibrateArcFaceCompareThreshold,
    DEFAULT_ARCFACE_COMPARE_MIN_SCORE,
    FACE_COMPARE_THRESHOLD_PRESETS,
} from 'app/modules/smart-enroll/projects/app-registration-record.utils';

let nextRepSliderId = 0;

@Component({
    selector: 'representatives-policy',
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
        MatSliderModule,
        TranslocoModule,
    ],
    templateUrl: './representatives-policy.component.html',
    styleUrl: '../_kyb-journey.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepresentativesPolicyComponent implements OnInit, OnChanges {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    readonly compareThresholdPresets = FACE_COMPARE_THRESHOLD_PRESETS;
    readonly compareSliderId = `kyb-rep-compare-min-${nextRepSliderId++}`;
    readonly compareHelpId = `${this.compareSliderId}-help`;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _subBound = false;

    ngOnInit(): void {
        this._bindChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['form']) {
            this._subBound = false;
            this._bindChanges();
        }
    }

    private _bindChanges(): void {
        if (this._subBound || !this.repsPolicyGroup) return;
        this._subBound = true;
        this.repsPolicyGroup.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._cdr.markForCheck());
    }

    get repsPolicyGroup(): FormGroup {
        return this.form.get('projectFlow.representativesPolicy') as FormGroup;
    }

    get minReps(): number {
        return Number(this.repsPolicyGroup?.get('minRepresentatives')?.value || 1);
    }

    get maxReps(): number {
        return Number(this.repsPolicyGroup?.get('maxRepresentatives')?.value || 5);
    }

    get uboThreshold(): number {
        return Number(this.repsPolicyGroup?.get('uboOwnershipThreshold')?.value || 25);
    }

    get enabledKycChecksCount(): number {
        return (
            (this.repsPolicyGroup?.get('requireDocumentScan')?.value ? 1 : 0) +
            (this.repsPolicyGroup?.get('requireLiveness')?.value ? 1 : 0)
        );
    }

    get livenessMinScoreDisplay(): string {
        return `${Math.round((Number(this.repsPolicyGroup?.get('livenessMinScore')?.value) || 0.65) * 100)}%`;
    }

    get compareMinScoreUnitValue(): number {
        const raw = this.repsPolicyGroup?.get('compareMinScore')?.value;
        return Math.round(calibrateArcFaceCompareThreshold(raw, DEFAULT_ARCFACE_COMPARE_MIN_SCORE) * 100) / 100;
    }

    get compareMinScoreDisplay(): string {
        return `${Math.round(this.compareMinScoreUnitValue * 100)}%`;
    }

    get compareMinScoreProgressPercent(): number {
        return Math.max(0, Math.min(100, ((this.compareMinScoreUnitValue - 0.6) / 0.35) * 100));
    }

    isComparePresetActive(presetValue: number): boolean {
        return Math.abs(this.compareMinScoreUnitValue - presetValue) < 0.005;
    }

    setCompareMinScorePreset(value: number): void {
        const ctrl = this.repsPolicyGroup?.get('compareMinScore');
        if (!ctrl) return;
        ctrl.setValue(value);
        ctrl.markAsDirty();
        ctrl.markAsTouched();
        this._cdr.markForCheck();
    }
}
