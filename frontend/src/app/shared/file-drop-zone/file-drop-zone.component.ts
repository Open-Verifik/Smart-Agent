import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { Attachment, AttachmentService, AttachmentSource } from 'app/core/services/attachment.service';

/**
 * Single-file drop zone that uploads to the backend via {@link AttachmentService}
 * and emits `(attachmentUploaded)` with the resulting record.
 *
 * Mirrors the surface of the verifik-client-panel `file-drop-zone` (single-file
 * mode only — multi-file is intentionally out of scope).
 */
@Component({
    selector: 'file-drop-zone',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    templateUrl: './file-drop-zone.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDropZoneComponent {
    @Input() accept = '*';
    @Input() maxFileSize = 10 * 1024 * 1024;
    @Input() expirationDays = 0;
    @Input() source: AttachmentSource = 'project';
    @Input() disabled = false;

    @Output() attachmentUploaded = new EventEmitter<{ attachment: Attachment }>();
    @Output() fileError = new EventEmitter<{ file: File; error: string }>();
    @Output() uploadError = new EventEmitter<{ error: string }>();
    @Output() fileRemoved = new EventEmitter<void>();

    private _attachments = inject(AttachmentService);
    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);

    isDragOver = false;
    isUploading = false;
    errorMessage = '';

    onDragOver(event: DragEvent): void {
        if (this.disabled || this.isUploading) return;
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = true;
        this._cdr.markForCheck();
    }

    onDragLeave(event: DragEvent): void {
        if (this.disabled || this.isUploading) return;
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
        this._cdr.markForCheck();
    }

    onDrop(event: DragEvent): void {
        if (this.disabled || this.isUploading) return;
        event.preventDefault();
        event.stopPropagation();
        this.isDragOver = false;
        const file = event.dataTransfer?.files?.[0];
        if (file) this._handleFile(file);
        this._cdr.markForCheck();
    }

    onFileInputChange(event: Event): void {
        if (this.disabled || this.isUploading) return;
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) this._handleFile(file);
        input.value = '';
    }

    openFileExplorer(): void {
        if (this.disabled || this.isUploading) return;
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = this.accept;
        input.style.display = 'none';
        input.addEventListener('change', (event) => this.onFileInputChange(event));
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
    }

    formatAccepts(): string {
        return this.accept
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean)
            .join(', ');
    }

    formatFileSize(bytes: number): string {
        if (!bytes) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    }

    formatMaxFileSize(): string {
        return this.formatFileSize(this.maxFileSize);
    }

    private _handleFile(file: File): void {
        this.errorMessage = '';

        if (file.size > this.maxFileSize) {
            const error = this._transloco.translate('smartEnrollProjects.setup.ui.images.tooLarge', {
                maxSize: this.formatMaxFileSize(),
            });
            this.errorMessage = error;
            this.fileError.emit({ file, error });
            this._cdr.markForCheck();
            return;
        }

        if (!this._isFileTypeAccepted(file)) {
            const error = this._transloco.translate('smartEnrollProjects.setup.ui.images.notAccepted');
            this.errorMessage = error;
            this.fileError.emit({ file, error });
            this._cdr.markForCheck();
            return;
        }

        this.isUploading = true;
        this._cdr.markForCheck();

        this._attachments
            .uploadAttachment(file, { source: this.source, expirationDays: this.expirationDays })
            .subscribe({
                next: (response) => {
                    this.isUploading = false;
                    this.attachmentUploaded.emit({ attachment: response.data });
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.isUploading = false;
                    const error = err?.error?.message || this._transloco.translate('smartEnrollProjects.setup.ui.images.uploadFailed');
                    this.errorMessage = error;
                    this.uploadError.emit({ error });
                    this._cdr.markForCheck();
                },
            });
    }

    private _isFileTypeAccepted(file: File): boolean {
        if (this.accept === '*' || !this.accept) return true;
        const types = this.accept.split(',').map((t) => t.trim());
        return types.some((type) => {
            if (type.startsWith('.')) return file.name.toLowerCase().endsWith(type.toLowerCase());
            if (type.includes('/')) return file.type === type || file.type.startsWith(type.split('/')[0] + '/');
            return false;
        });
    }
}
