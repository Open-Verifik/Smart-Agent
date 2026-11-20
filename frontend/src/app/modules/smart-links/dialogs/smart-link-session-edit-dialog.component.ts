import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

import { SmartLinksService } from '../smart-links.service';
import type {
    SmartLinkCompletionMode,
    SmartLinkSessionDetail,
    SmartLinkSessionRecord,
    SmartLinkUpdateSessionPayload,
} from '../smart-links.types';

export interface SmartLinkSessionEditDialogData {
    session: SmartLinkSessionRecord;
}

@Component({
    selector: 'smart-link-session-edit-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './smart-link-session-edit-dialog.component.html',
})
export class SmartLinkSessionEditDialogComponent {
    data = inject<SmartLinkSessionEditDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<SmartLinkSessionEditDialogComponent, SmartLinkSessionDetail | undefined>);
    private _service = inject(SmartLinksService);

    readonly isCompleted = this.data.session.state === 'COMPLETED';
    readonly canToggleReactivate =
        this.data.session.state === 'REVOKED' || this.data.session.state === 'EXPIRED';

    email = this.data.session.prefill?.email || '';
    phone = this.data.session.prefill?.phone || '';
    countryCode = this.data.session.prefill?.countryCode || '';
    fullName = this.data.session.prefill?.fullName || '';
    requireDocument = Boolean(this.data.session.requireDocument);
    completionMode: SmartLinkCompletionMode = this.data.session.completionMode || 'receipt';
    redirectUrlOverride = this.data.session.redirectUrlOverride || '';
    callbackWebhookUrl = this.data.session.callbackWebhookUrl || '';
    maxUses = this.data.session.maxUses ?? 1;
    externalRefId = this.data.session.externalRefId || '';
    notes = this.data.session.notes || '';
    extendMinutes: number | null = null;
    nextState: 'keep' | 'CREATED' | 'REVOKED' = 'keep';

    saving = signal(false);
    errorMessage = signal<string | null>(null);

    setExtendMinutes(mins: number): void {
        this.extendMinutes = this.extendMinutes === mins ? null : mins;
    }

    save(): void {
        if (this.saving()) return;
        this.saving.set(true);
        this.errorMessage.set(null);

        const payload: SmartLinkUpdateSessionPayload = {
            externalRefId: this.externalRefId.trim(),
            notes: this.notes.trim(),
        };

        if (!this.isCompleted) {
            payload.email = this.email.trim();
            payload.phone = this.phone.trim();
            payload.countryCode = this.countryCode.trim();
            payload.fullName = this.fullName.trim();
            payload.requireDocument = Boolean(this.requireDocument);
            payload.completionMode = this.completionMode;
            payload.redirectUrlOverride = this.redirectUrlOverride.trim();
            payload.callbackWebhookUrl = this.callbackWebhookUrl.trim();
            payload.maxUses = Math.max(0, Math.min(1000, Number(this.maxUses ?? 1)));
            if (this.extendMinutes) {
                payload.extendMinutes = this.extendMinutes;
            }
            if (this.nextState === 'CREATED' || this.nextState === 'REVOKED') {
                payload.state = this.nextState;
            }
        }

        this._service.updateSession(this.data.session._id, payload).subscribe({
            next: (updated) => {
                this.saving.set(false);
                this._dialogRef.close(updated);
            },
            error: (err) => {
                this.saving.set(false);
                this.errorMessage.set(err?.error?.message || 'Unable to update verification link');
            },
        });
    }

    close(): void {
        this._dialogRef.close();
    }
}
