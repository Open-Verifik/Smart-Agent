import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SmartEnrollProjectsService } from './smart-enroll-projects.service';
import type { AppRegistrationDetail } from './smart-enroll-projects.types';

export interface EnrollResendLinkDialogData {
    record: AppRegistrationDetail;
}

export interface EnrollResendLinkDialogResult {
    success: boolean;
    emailSent: boolean;
}

@Component({
    standalone: true,
    selector: 'enroll-resend-link-dialog',
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './enroll-resend-link-dialog.component.html',
})
export class EnrollResendLinkDialogComponent {
    data = inject<EnrollResendLinkDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<EnrollResendLinkDialogComponent>);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _snackBar = inject(MatSnackBar);
    private _clipboard = inject(Clipboard);
    private _transloco = inject(TranslocoService);

    loading = signal(false);
    generatedLink = signal<string>('');
    showLink = signal(false);

    get recipientName(): string {
        const info = (this.data.record?.informationValidation ?? {}) as Record<string, unknown>;
        const full = typeof info['fullName'] === 'string' ? (info['fullName'] as string) : '';
        if (full) return full;
        const first = typeof info['firstName'] === 'string' ? (info['firstName'] as string) : '';
        const last = typeof info['lastName'] === 'string' ? (info['lastName'] as string) : '';
        return `${first} ${last}`.trim();
    }

    get recipientEmail(): string {
        const info = (this.data.record?.informationValidation ?? {}) as Record<string, unknown>;
        return typeof info['email'] === 'string' ? (info['email'] as string) : '';
    }

    copyLink(): void {
        if (this.loading() || !this.data.record?._id) return;
        this.loading.set(true);
        this._projectsService.resendAppRegistrationLink(this.data.record._id, false).subscribe({
            next: (response) => {
                const link = response?.data?.link ?? '';
                this.generatedLink.set(link);
                this.showLink.set(true);
                const success = link ? this._clipboard.copy(link) : false;
                this.loading.set(false);
                if (success) {
                    this._dialogRef.close({ success: true, emailSent: false });
                    return;
                }
                this._snackBar.open(
                    this._transloco.translate('smartEnrollProjects.recordDetail.resendErrorGeneric'),
                    'OK',
                    { duration: 3000 }
                );
            },
            error: (error) => {
                this.loading.set(false);
                const message =
                    error?.error?.message ??
                    this._transloco.translate('smartEnrollProjects.recordDetail.resendErrorGeneric');
                this._snackBar.open(message, 'OK', { duration: 3000 });
            },
        });
    }

    sendEmail(): void {
        if (this.loading() || !this.data.record?._id) return;
        if (!this.recipientEmail) {
            this._snackBar.open(
                this._transloco.translate('smartEnrollProjects.recordDetail.resendNoEmail'),
                'OK',
                { duration: 3000 }
            );
            return;
        }
        this.loading.set(true);
        this._projectsService.resendAppRegistrationLink(this.data.record._id, true).subscribe({
            next: () => {
                this.loading.set(false);
                this._dialogRef.close({ success: true, emailSent: true });
            },
            error: (error) => {
                this.loading.set(false);
                const message =
                    error?.error?.message ??
                    this._transloco.translate('smartEnrollProjects.recordDetail.resendErrorGeneric');
                this._snackBar.open(message, 'OK', { duration: 3000 });
            },
        });
    }

    close(): void {
        this._dialogRef.close();
    }
}
