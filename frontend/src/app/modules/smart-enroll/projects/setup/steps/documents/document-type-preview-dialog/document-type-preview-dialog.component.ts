import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export interface DocumentTypePreviewData {
    name: string;
    code?: string;
    country?: string;
    frontImage?: string;
    backImage?: string;
}

/**
 * Modal preview of a `DocumentType` showing front and back reference images.
 * Used from the documents-step catalog to help users decide which document
 * types to accept.
 */
@Component({
    selector: 'document-type-preview-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    templateUrl: './document-type-preview-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentTypePreviewDialogComponent {
    readonly data = inject<DocumentTypePreviewData>(MAT_DIALOG_DATA);

    get headerTitle(): string {
        const code = this.data?.code ? this.data.code.toUpperCase() : '';
        return code ? `${code} – ${this.data?.name || ''}` : this.data?.name || '';
    }
}
