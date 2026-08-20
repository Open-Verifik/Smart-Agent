import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export interface CaptureRequirementsDialogData {
    /** Canonical liveness reason to call out first, when opened from a specific failed attempt. */
    reason?: string | null;
    /** Achieved liveness score as a percentage, when the frame was scored. */
    scorePercent?: number | null;
    /** Liveness threshold configured on the project flow, as a percentage. */
    thresholdPercent?: number | null;
}

/** A capture rule, paired with the reasons that indicate it was broken. */
interface RequirementRow {
    key: string;
    reasons: string[];
}

/**
 * The engine rejects a frame on quality grounds before scoring it, so each reason maps back to
 * one of these rules. Keeping the mapping here lets the dialog highlight the rule that a given
 * attempt actually broke instead of listing all of them with equal weight.
 */
const REQUIREMENTS: RequirementRow[] = [
    { key: 'singleFace', reasons: ['multiple_faces_detected', 'no_face_detected'] },
    { key: 'unobstructed', reasons: ['face_occluded'] },
    { key: 'faceBox', reasons: ['face_too_far'] },
    { key: 'padding', reasons: ['face_close_to_border', 'face_not_centered', 'face_too_close'] },
    { key: 'pupils', reasons: ['face_too_far'] },
    { key: 'rotation', reasons: ['face_rotation_too_large'] },
    { key: 'lighting', reasons: ['poor_lighting'] },
    { key: 'lens', reasons: [] },
];

@Component({
    selector: 'capture-requirements-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    templateUrl: './capture-requirements-dialog.component.html',
    styleUrls: ['./capture-requirements-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaptureRequirementsDialogComponent {
    readonly data = inject<CaptureRequirementsDialogData>(MAT_DIALOG_DATA);
    private readonly _dialogRef = inject(MatDialogRef<CaptureRequirementsDialogComponent>);

    readonly requirements = REQUIREMENTS;

    /** True when the attempt failed on capture quality, so a specific rule can be highlighted. */
    readonly hasReason = computed(() => Boolean(this.data.reason) && this.data.reason !== 'liveness_error');

    /** True when the frame was usable and scored, so the score comparison is meaningful. */
    readonly isScoreFailure = computed(() => this.data.reason === 'liveness_failed' && this.data.scorePercent != null);

    isHighlighted(requirement: RequirementRow): boolean {
        return this.data.reason != null && requirement.reasons.includes(this.data.reason);
    }

    close(): void {
        this._dialogRef.close();
    }
}
