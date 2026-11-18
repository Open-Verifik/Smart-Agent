import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    inject,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DemoRasterImageComponent } from './demo-raster-image.component';
import { DemoScannerShellComponent } from './demo-scanner-shell.component';
import { FaceGuidedCameraComponent } from './face-guided-camera.component';

export type CaptureMethod = 'upload' | 'camera';

@Component({
    selector: 'app-demo-capture-panel',
    standalone: true,
    imports: [
        NgClass,
        TranslocoModule,
        DemoRasterImageComponent,
        DemoScannerShellComponent,
        FaceGuidedCameraComponent,
    ],
    templateUrl: './demo-capture-panel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCapturePanelComponent {
    @Input() fileInputId = 'demo-capture-file';
    @Input() stepBadge = '01';
    @Input() title = '';
    @Input() subtitle = '';
    @Input() required = false;
    @Input() uploadTitle = '';
    @Input() uploadHint = '';
    @Input() uploadButtonLabel = '';
    @Input() cameraFooterText = '';
    @Input() previewUrl: string | null = null;
    @Input() previewAlt = '';
    @Input() highlighted = false;
    @Input() disabled = false;
    @Input() remountKey: string | number = 1;
    @Input() hideCameraExplainer = false;
    @Input() captureMode: CaptureMethod = 'upload';
    @Input() multiple = false;
    @Input() multiPreviews: readonly string[] = [];

    @Output() captureModeChange = new EventEmitter<CaptureMethod>();
    @Output() filePicked = new EventEmitter<File>();
    @Output() filesPicked = new EventEmitter<File[]>();
    @Output() captured = new EventEmitter<{ dataUrl: string; base64: string }>();
    @Output() captureError = new EventEmitter<string>();
    @Output() cleared = new EventEmitter<void>();
    @Output() multiPreviewRemoved = new EventEmitter<number>();

    isDragging = false;

    private _cdr = inject(ChangeDetectorRef);

    setMode(mode: CaptureMethod): void {
        if (this.captureMode === mode) return;
        this.captureMode = mode;
        this.captureModeChange.emit(mode);
        this._cdr.markForCheck();
    }

    onInputChanged(event: Event): void {
        const input = event.target as HTMLInputElement;
        const files = Array.from(input.files ?? []);
        if (!files.length) return;
        if (this.multiple) {
            this.filesPicked.emit(files);
        } else {
            this.filePicked.emit(files[0]);
        }
        input.value = '';
    }

    onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        if (!this.disabled && !this.isDragging) {
            this.isDragging = true;
            this._cdr.markForCheck();
        }
    }

    onDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        if (this.isDragging) {
            this.isDragging = false;
            this._cdr.markForCheck();
        }
    }

    onFileDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
        if (this.disabled) {
            this._cdr.markForCheck();
            return;
        }
        const imageFiles = Array.from(event.dataTransfer?.files ?? []).filter((f) => f.type.startsWith('image/'));
        if (imageFiles.length) {
            if (this.multiple) {
                this.filesPicked.emit(imageFiles);
            } else {
                this.filePicked.emit(imageFiles[0]);
            }
        }
        this._cdr.markForCheck();
    }
}
