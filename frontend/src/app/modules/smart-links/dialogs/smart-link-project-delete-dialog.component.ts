import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { SmartLinksService } from '../smart-links.service';
import type { SmartLinkProject } from '../smart-links.types';

export interface SmartLinkProjectDeleteDialogData {
    project: SmartLinkProject;
}

@Component({
    selector: 'smart-link-project-delete-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    templateUrl: './smart-link-project-delete-dialog.component.html',
    styleUrls: ['../smart-links.shared.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkProjectDeleteDialogComponent {
    data = inject<SmartLinkProjectDeleteDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(
        MatDialogRef<SmartLinkProjectDeleteDialogComponent, { deleted: boolean } | undefined>
    );
    private _service = inject(SmartLinksService);
    private _transloco = inject(TranslocoService);

    deleting = signal(false);
    errorMessage = signal<string | null>(null);

    confirmDelete(): void {
        const id = this.data.project?._id;
        if (!id || this.deleting()) return;

        this.deleting.set(true);
        this.errorMessage.set(null);

        this._service.deleteSmartLinkProject(id).subscribe({
            next: () => {
                this.deleting.set(false);
                this._dialogRef.close({ deleted: true });
            },
            error: (err) => {
                this.deleting.set(false);
                this.errorMessage.set(
                    err?.error?.message || this._transloco.translate('smartLinks.dialogs.deleteHubError')
                );
            },
        });
    }

    close(): void {
        this._dialogRef.close();
    }
}
