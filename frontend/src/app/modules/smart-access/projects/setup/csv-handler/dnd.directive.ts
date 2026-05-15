import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[saWhitelistDnd]',
    standalone: true,
})
export class WhitelistDndDirective {
    @HostBinding('class.fileover') fileOver = false;
    @Output() fileDropped = new EventEmitter<FileList>();

    @HostListener('dragover', ['$event'])
    onDragOver(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    }

    @HostListener('drop', ['$event'])
    onDrop(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        const files = evt.dataTransfer?.files;
        if (files?.length) this.fileDropped.emit(files);
    }
}
