import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { docsPageUrl } from 'app/core/docs/verifik-docs-urls';

export const SMARTENROLL_RESUME_DOCS_PATH = '/smartenroll/resume';
export const SMARTENROLL_RESUME_DOCS_URL = docsPageUrl(SMARTENROLL_RESUME_DOCS_PATH);

@Component({
    selector: 'enroll-resume-help-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    templateUrl: './enroll-resume-help-dialog.component.html',
    styleUrls: ['./enroll-resume-help-dialog.component.scss'],
})
export class EnrollResumeHelpDialogComponent {
    private _dialogRef = inject(MatDialogRef<EnrollResumeHelpDialogComponent>);
    readonly docsUrl = SMARTENROLL_RESUME_DOCS_URL;

    close(): void {
        this._dialogRef.close();
    }
}
