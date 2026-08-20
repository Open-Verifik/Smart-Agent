import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { finalize } from 'rxjs';
import { FaceCropService } from '../demos/services/face-crop.service';
import { SmartEnrollProjectsService } from './smart-enroll-projects.service';

export interface DocumentFaceDialogData {
    appRegistrationId: string;
    /** Stored scan of the front of the document */
    frontUrl: string | null;
    /** Stored scan of the back, tried when the front holds no portrait */
    backUrl: string | null;
}

export interface DocumentFaceDialogResult {
    success: boolean;
}

type DialogState = 'detecting' | 'ready' | 'noFace' | 'unreadable';

/**
 * Crops the portrait out of a stored document scan and re-runs the face compare with it.
 *
 * The compare needs the face printed on the document, and cropping it is the onboarding client's
 * job — a client integrating the API directly can skip it, leaving a complete registration with no
 * compare and no way to finish it. This does that crop in the reviewer's browser, with the same
 * detection the SDK runs, so the panel can finish the record instead of the API guessing for it.
 */
@Component({
    standalone: true,
    selector: 'document-face-dialog',
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    templateUrl: './document-face-dialog.component.html',
    styleUrls: ['./resolve-status-dialog.component.scss'],
})
export class DocumentFaceDialogComponent implements OnInit {
    data = inject<DocumentFaceDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<DocumentFaceDialogComponent>);
    private _faceCrop = inject(FaceCropService);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _transloco = inject(TranslocoService);

    state = signal<DialogState>('detecting');
    /** Side the portrait was found on, so the reviewer knows what they are looking at */
    source = signal<'front' | 'back' | null>(null);
    cropPreview = signal<string | null>(null);
    submitting = signal(false);
    errorMessage = signal<string | null>(null);

    private _cropBase64: string | null = null;

    ngOnInit(): void {
        void this.detect();
    }

    async detect(): Promise<void> {
        this.state.set('detecting');
        this.errorMessage.set(null);

        const sides: Array<{ side: 'front' | 'back'; url: string }> = [
            ...(this.data.frontUrl ? [{ side: 'front' as const, url: this.data.frontUrl }] : []),
            ...(this.data.backUrl ? [{ side: 'back' as const, url: this.data.backUrl }] : []),
        ];

        if (!sides.length) {
            this.state.set('unreadable');
            return;
        }

        for (const { side, url } of sides) {
            const crop = await this._cropOrNull(url);

            if (!crop) continue;

            this._cropBase64 = crop;
            this.cropPreview.set(`data:image/jpeg;base64,${crop}`);
            this.source.set(side);
            this.state.set('ready');

            return;
        }

        this.state.set('noFace');
    }

    confirm(): void {
        if (!this._cropBase64 || this.submitting()) return;

        this.submitting.set(true);
        this.errorMessage.set(null);

        this._projectsService
            .rerunCompare(this.data.appRegistrationId, this._cropBase64)
            .pipe(finalize(() => this.submitting.set(false)))
            .subscribe({
                next: () => this._dialogRef.close({ success: true } as DocumentFaceDialogResult),
                error: (error) => {
                    const message =
                        error?.error?.message ??
                        this._transloco.translate('smartEnrollProjects.recordDetail.documentFaceDialog.rerunError');
                    this.errorMessage.set(message);
                },
            });
    }

    close(): void {
        if (this.submitting()) return;
        this._dialogRef.close({ success: false } as DocumentFaceDialogResult);
    }

    /**
     * Detection failure and a scan that cannot be read at all are the same outcome here: this side
     * has no portrait to offer, so move on to the next one.
     */
    private async _cropOrNull(url: string): Promise<string | null> {
        try {
            return await this._faceCrop.cropLargestFaceFromUrl(url);
        } catch {
            return null;
        }
    }
}
