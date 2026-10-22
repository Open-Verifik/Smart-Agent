import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, NgZone, OnDestroy, signal, ViewChild } from '@angular/core';
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
export class ImagePreviewDialogComponent implements AfterViewInit, OnDestroy {
    @ViewChild('viewport') private _viewport?: ElementRef<HTMLElement>;

    readonly data = inject<ImagePreviewDialogData>(MAT_DIALOG_DATA);
    private readonly _dialogRef = inject(MatDialogRef<ImagePreviewDialogComponent>);
    private readonly _zone = inject(NgZone);

    readonly zoom = signal(1);
    private _drag: { x: number; y: number } | null = null;

    readonly minZoom = 0.5;
    readonly maxZoom = 4;
    private readonly _step = 0.25;

    ngAfterViewInit(): void {
        this._viewport?.nativeElement.addEventListener('wheel', this._onWheel, { passive: false });
    }

    ngOnDestroy(): void {
        this._viewport?.nativeElement.removeEventListener('wheel', this._onWheel);
    }

    close(): void {
        this._dialogRef.close();
    }

    /**
     * Scroll-wheel zooms the photo. Dragging the photo moves it when it is larger than the screen.
     */
    onPointerDown(event: PointerEvent): void {
        if (event.button !== 0) return;
        const viewport = event.currentTarget as HTMLElement;
        this._drag = { x: event.clientX, y: event.clientY };
        viewport.setPointerCapture(event.pointerId);
    }

    onPointerMove(event: PointerEvent): void {
        if (!this._drag) return;
        const viewport = event.currentTarget as HTMLElement;
        viewport.scrollLeft -= event.clientX - this._drag.x;
        viewport.scrollTop -= event.clientY - this._drag.y;
        this._drag = { x: event.clientX, y: event.clientY };
    }

    onPointerUp(): void {
        this._drag = null;
    }

    private _onWheel = (event: WheelEvent): void => {
        event.preventDefault();
        this._zone.run(() => {
            if (event.deltaY < 0) this.zoomIn();
            else if (event.deltaY > 0) this.zoomOut();
        });
    };

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
