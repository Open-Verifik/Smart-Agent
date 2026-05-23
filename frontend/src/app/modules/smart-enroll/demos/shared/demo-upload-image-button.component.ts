import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-demo-upload-image-button',
    standalone: true,
    templateUrl: './demo-upload-image-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoUploadImageButtonComponent {
    @Input() id = '';
    @Input() primaryText = '';
    @Input() secondaryText = '';
    @Input() icon = 'upload_file';
    @Input() className = '';
    @Input() accept = 'image/*';
    @Input() multiple = false;
    @Input() disabled = false;
    @Input() loading = false;
    /** When true, wraps a native file input (reliable gallery pick on mobile/desktop). */
    @Input() useNativeInput = false;

    @Output() clicked = new EventEmitter<void>();
    @Output() fileSelected = new EventEmitter<Event>();

    onNativeFileChange(event: Event): void {
        this.fileSelected.emit(event);
    }
}
