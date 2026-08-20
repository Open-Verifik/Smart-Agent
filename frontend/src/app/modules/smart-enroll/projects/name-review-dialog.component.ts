import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { finalize } from 'rxjs';
import { SmartEnrollProjectsService } from './smart-enroll-projects.service';

export type NameReviewDecision = 'match' | 'mismatch';

export interface NameReviewDialogData {
    documentValidationId: string;
    /** Names read off the scanned document */
    documentName: string | null;
    /** Names the person typed into the enrollment form */
    formName: string | null;
    /** Detected document type code, e.g. PA_CRP */
    documentType: string | null;
    country: string | null;
    /** Backend reason the automatic lookup did not produce a score */
    skipReason: string | null;
    preselected?: NameReviewDecision;
}

export interface NameReviewDialogResult {
    success: boolean;
    decision?: NameReviewDecision;
}

interface NameReviewOption {
    value: NameReviewDecision;
    icon: string;
    colorClass: string;
    titleKey: string;
    descriptionKey: string;
}

const NAME_REVIEW_OPTIONS: NameReviewOption[] = [
    {
        value: 'match',
        icon: 'check_circle',
        colorClass: 'resolve-option--ok',
        titleKey: 'smartEnrollProjects.recordDetail.nameReviewDialog.optionMatchTitle',
        descriptionKey: 'smartEnrollProjects.recordDetail.nameReviewDialog.optionMatchDescription',
    },
    {
        value: 'mismatch',
        icon: 'cancel',
        colorClass: 'resolve-option--error',
        titleKey: 'smartEnrollProjects.recordDetail.nameReviewDialog.optionMismatchTitle',
        descriptionKey: 'smartEnrollProjects.recordDetail.nameReviewDialog.optionMismatchDescription',
    },
];

@Component({
    standalone: true,
    selector: 'name-review-dialog',
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './name-review-dialog.component.html',
    styleUrls: ['./resolve-status-dialog.component.scss'],
})
export class NameReviewDialogComponent {
    data = inject<NameReviewDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<NameReviewDialogComponent>);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _transloco = inject(TranslocoService);

    readonly options = NAME_REVIEW_OPTIONS;

    selected = signal<NameReviewDecision | null>(this.data.preselected ?? null);
    note = signal('');
    loading = signal(false);
    errorMessage = signal<string | null>(null);

    select(option: NameReviewDecision): void {
        if (this.loading()) return;
        this.selected.set(option);
        this.errorMessage.set(null);
    }

    setNote(value: string): void {
        this.note.set(value);
    }

    confirm(): void {
        const decision = this.selected();
        const id = this.data.documentValidationId;
        if (!decision || !id || this.loading()) return;

        this.loading.set(true);
        this.errorMessage.set(null);

        this._projectsService
            .reviewDocumentNames(id, decision, this.note().trim() || undefined)
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
                next: () => {
                    this._dialogRef.close({ success: true, decision } as NameReviewDialogResult);
                },
                error: (error) => {
                    const message =
                        error?.error?.message ??
                        this._transloco.translate('smartEnrollProjects.recordDetail.nameReviewDialog.genericError');
                    this.errorMessage.set(message);
                },
            });
    }

    close(): void {
        if (this.loading()) return;
        this._dialogRef.close({ success: false } as NameReviewDialogResult);
    }
}
