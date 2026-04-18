import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export interface ImagePreviewDialogData {
    imageSrc: SafeUrl | string;
    title?: string;
}

@Component({
    selector: 'image-preview-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    templateUrl: './image-preview-dialog.component.html',
    styleUrls: ['./image-preview-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePreviewDialogComponent {
    readonly data = inject<ImagePreviewDialogData>(MAT_DIALOG_DATA);
    private readonly _dialogRef = inject(MatDialogRef<ImagePreviewDialogComponent>);

    readonly zoom = signal(1);

    readonly minZoom = 0.5;
    readonly maxZoom = 4;
    private readonly _step = 0.25;

    close(): void {
        this._dialogRef.close();
    }

    zoomIn(): void {
        this.zoom.update((z) => Math.min(this.maxZoom, Math.round((z + this._step) * 100) / 100));
    }

    zoomOut(): void {
        this.zoom.update((z) => Math.max(this.minZoom, Math.round((z - this._step) * 100) / 100));
    }

    resetZoom(): void {
        this.zoom.set(1);
    }
}
