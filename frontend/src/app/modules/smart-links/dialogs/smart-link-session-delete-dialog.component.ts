import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';

import { SmartLinksService } from '../smart-links.service';
import type { SmartLinkSessionRecord } from '../smart-links.types';

export interface SmartLinkSessionDeleteDialogData {
    mode: 'single' | 'bulk';
    session?: SmartLinkSessionRecord;
    projectId?: string;
    sessionIds?: string[];
    skippedCompletedCount?: number;
}

@Component({
    selector: 'smart-link-session-delete-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    templateUrl: './smart-link-session-delete-dialog.component.html',
})
export class SmartLinkSessionDeleteDialogComponent {
    data = inject<SmartLinkSessionDeleteDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(
        MatDialogRef<
            SmartLinkSessionDeleteDialogComponent,
            { deleted: boolean; deletedCount?: number; skippedCompleted?: number } | undefined
        >
    );
    private _service = inject(SmartLinksService);

    deleting = signal(false);
    errorMessage = signal<string | null>(null);

    confirmDelete(): void {
        if (this.deleting()) return;
        this.deleting.set(true);
        this.errorMessage.set(null);

        if (this.data.mode === 'bulk' && this.data.projectId && this.data.sessionIds?.length) {
            this._service.bulkDeleteSessions(this.data.projectId, this.data.sessionIds).subscribe({
                next: (res) => {
                    this.deleting.set(false);
                    this._dialogRef.close({
                        deleted: true,
                        deletedCount: res.deletedCount,
                        skippedCompleted: res.skippedCompleted,
                    });
                },
                error: (err) => {
                    this.deleting.set(false);
                    this.errorMessage.set(err?.error?.message || 'Unable to delete selected links');
                },
            });
            return;
        }

        if (!this.data.session?._id) {
            this.deleting.set(false);
            return;
        }

        this._service.deleteSession(this.data.session._id).subscribe({
            next: () => {
                this.deleting.set(false);
                this._dialogRef.close({ deleted: true, deletedCount: 1, skippedCompleted: 0 });
            },
            error: (err) => {
                this.deleting.set(false);
                this.errorMessage.set(err?.error?.message || 'Unable to delete link');
            },
        });
    }

    close(): void {
        this._dialogRef.close();
    }
}
