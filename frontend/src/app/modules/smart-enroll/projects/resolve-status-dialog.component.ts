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
import type { AppRegistrationDetail, ResolvableAppRegistrationStatus } from './smart-enroll-projects.types';

export interface ResolveStatusDialogData {
    record: AppRegistrationDetail;
    /** Pre-highlighted option when opened from one of the primary triage buttons */
    preselected?: ResolvableAppRegistrationStatus;
}

export interface ResolveStatusDialogResult {
    success: boolean;
    record?: AppRegistrationDetail;
    status?: ResolvableAppRegistrationStatus;
}

interface ResolveOption {
    value: ResolvableAppRegistrationStatus;
    icon: string;
    colorClass: string;
    titleKey: string;
    descriptionKey: string;
}

const RESOLVE_OPTIONS: ResolveOption[] = [
    {
        value: 'COMPLETED',
        icon: 'check_circle',
        colorClass: 'resolve-option--ok',
        titleKey: 'smartEnrollProjects.recordDetail.resolveDialog.optionCompletedTitle',
        descriptionKey: 'smartEnrollProjects.recordDetail.resolveDialog.optionCompletedDescription',
    },
    {
        value: 'COMPLETED_WITHOUT_KYC',
        icon: 'warning',
        colorClass: 'resolve-option--warn',
        titleKey: 'smartEnrollProjects.recordDetail.resolveDialog.optionCompletedNoKycTitle',
        descriptionKey: 'smartEnrollProjects.recordDetail.resolveDialog.optionCompletedNoKycDescription',
    },
    {
        value: 'FAILED',
        icon: 'cancel',
        colorClass: 'resolve-option--error',
        titleKey: 'smartEnrollProjects.recordDetail.resolveDialog.optionFailedTitle',
        descriptionKey: 'smartEnrollProjects.recordDetail.resolveDialog.optionFailedDescription',
    },
];

@Component({
    standalone: true,
    selector: 'resolve-status-dialog',
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './resolve-status-dialog.component.html',
    styleUrls: ['./resolve-status-dialog.component.scss'],
})
export class ResolveStatusDialogComponent {
    data = inject<ResolveStatusDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<ResolveStatusDialogComponent>);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _transloco = inject(TranslocoService);

    readonly options = RESOLVE_OPTIONS;

    selected = signal<ResolvableAppRegistrationStatus | null>(this.data.preselected ?? null);
    note = signal('');
    loading = signal(false);
    errorMessage = signal<string | null>(null);

    get isCorrectionMode(): boolean {
        return !this.data.preselected;
    }

    /** Best-effort preview of the webhook type this override will fire, for transparency. */
    webhookTypePreview(): string {
        const status = this.selected();
        if (!status) return '';
        const flowType = this.data.record?.projectFlow?.type || 'onboarding';
        return `${flowType}_app_registration_${status.toLowerCase()}`;
    }

    select(option: ResolvableAppRegistrationStatus): void {
        if (this.loading()) return;
        this.selected.set(option);
        this.errorMessage.set(null);
    }

    setNote(value: string): void {
        this.note.set(value);
    }

    confirm(): void {
        const status = this.selected();
        const id = this.data.record?._id;
        if (!status || !id || this.loading()) return;

        this.loading.set(true);
        this.errorMessage.set(null);

        this._projectsService
            .overrideAppRegistrationStatus(id, status, this.note().trim() || undefined)
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
                next: (response) => {
                    this._dialogRef.close({ success: true, record: response?.data, status } as ResolveStatusDialogResult);
                },
                error: (error) => {
                    const message =
                        error?.error?.message ??
                        this._transloco.translate('smartEnrollProjects.recordDetail.resolveDialog.genericError');
                    this.errorMessage.set(message);
                },
            });
    }

    close(): void {
        if (this.loading()) return;
        this._dialogRef.close({ success: false } as ResolveStatusDialogResult);
    }
}
