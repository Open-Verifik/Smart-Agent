import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { ImagePreviewDialogComponent } from '../../projects/image-preview-dialog.component';
import type { DocumentType, DocumentTypeField } from '../smart-scan.types';

@Component({
    selector: 'scan-tool-review-step',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './scan-tool-review-step.component.html',
    styleUrls: ['./scan-tool-review-step.component.scss'],
})
export class ScanToolReviewStepComponent {
    private readonly _dialog = inject(MatDialog);

    readonly documentType = input.required<DocumentType>();
    readonly requiresBackSide = input(false);
    readonly frontFields = input<DocumentTypeField[]>([]);
    readonly backFields = input<DocumentTypeField[]>([]);
    readonly flag = input('');
    readonly countryLabel = input('');
    readonly categoryLabel = input('');

    readonly changeDocument = output<void>();
    readonly proceed = output<void>();
    readonly changeFields = output<void>();
    readonly connectCheck = output<void>();

    linkedFeature(): { name: string; url: string } | null {
        const feature = this.documentType().appFeature;
        if (!feature || typeof feature === 'string' || !feature.name) return null;
        return { name: feature.name, url: feature.url || '' };
    }

    /**
     * Opens the sample photo full screen so it can be zoomed.
     */
    openImagePreview(imageSrc: string | undefined, title?: string): void {
        if (!imageSrc) return;
        this._dialog.open(ImagePreviewDialogComponent, {
            data: { imageSrc, title },
            panelClass: 'image-preview-dialog-panel',
            width: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
        });
    }
}
