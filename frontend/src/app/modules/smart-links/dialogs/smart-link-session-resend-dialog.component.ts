import { Clipboard } from '@angular/cdk/clipboard';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { SmartLinksService } from '../smart-links.service';
import type { SmartLinkResendResult, SmartLinkSessionRecord } from '../smart-links.types';

export interface SmartLinkSessionResendDialogData {
    session: SmartLinkSessionRecord;
}

@Component({
    selector: 'smart-link-session-resend-dialog',
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
        TranslocoModule,
    ],
    templateUrl: './smart-link-session-resend-dialog.component.html',
})
export class SmartLinkSessionResendDialogComponent {
    data = inject<SmartLinkSessionResendDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(
        MatDialogRef<SmartLinkSessionResendDialogComponent, SmartLinkResendResult | undefined>
    );
    private _service = inject(SmartLinksService);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    channel: 'email' | 'whatsapp' | 'sms' = this.data.session.prefill?.phone && !this.data.session.prefill?.email
        ? 'whatsapp'
        : 'email';
    recipient = this.channel === 'email'
        ? this.data.session.prefill?.email || ''
        : this.data.session.prefill?.phone || '';
    recipientName = this.data.session.prefill?.fullName || '';
    countryCode = this.data.session.prefill?.countryCode || '+1';
    extendMinutes = 60;

    loading = signal(false);
    errorMessage = signal<string | null>(null);
    reissued = signal<SmartLinkResendResult | null>(null);

    onChannelChange(next: 'email' | 'whatsapp' | 'sms'): void {
        this.channel = next;
        if (next === 'email') {
            this.recipient = this.data.session.prefill?.email || '';
        } else {
            this.recipient = this.data.session.prefill?.phone || '';
        }
    }

    reissueAndCopy(): void {
        if (this.loading()) return;
        this.loading.set(true);
        this.errorMessage.set(null);

        this._service
            .resendSession(this.data.session._id, {
                send: false,
                extendMinutes: Number(this.extendMinutes) || 60,
                rotateToken: true,
            })
            .subscribe({
                next: (res) => {
                    this.loading.set(false);
                    this.reissued.set(res);
                    if (res.url) {
                        this._clipboard.copy(res.url);
                        this._snack.open(this._transloco.translate('smartLinks.actions.copied'), undefined, {
                            duration: 2000,
                        });
                    }
                },
                error: (err) => {
                    this.loading.set(false);
                    this.errorMessage.set(err?.error?.message || 'Unable to reissue verification link');
                },
            });
    }

    sendToRecipient(): void {
        const cleanRecipient = this.recipient.trim();
        if (!cleanRecipient || this.loading()) return;

        this.loading.set(true);
        this.errorMessage.set(null);

        this._service
            .resendSession(this.data.session._id, {
                send: true,
                channel: this.channel,
                recipient: cleanRecipient,
                countryCode: this.channel === 'email' ? undefined : this.countryCode.trim(),
                recipientName: this.recipientName.trim() || undefined,
                extendMinutes: Number(this.extendMinutes) || 60,
                rotateToken: true,
            })
            .subscribe({
                next: (res) => {
                    this.loading.set(false);
                    this.reissued.set(res);
                    this._snack.open(
                        this._transloco.translate('smartLinks.dialogs.resendSentToast'),
                        undefined,
                        { duration: 2500 }
                    );
                },
                error: (err) => {
                    this.loading.set(false);
                    this.errorMessage.set(err?.error?.message || 'Unable to send verification link');
                },
            });
    }

    copyReissuedUrl(): void {
        const url = this.reissued()?.url;
        if (!url) return;
        this._clipboard.copy(url);
        this._snack.open(this._transloco.translate('smartLinks.actions.copied'), undefined, { duration: 1800 });
    }

    close(): void {
        this._dialogRef.close(this.reissued() || undefined);
    }
}
