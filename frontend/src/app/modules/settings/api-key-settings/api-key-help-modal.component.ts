import { CommonModule, DOCUMENT } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export interface ApiKeyHelpModalContent {
    icon: string;
    title: string;
    intro: string;
    points: string[];
    codeExample?: string;
    note?: string;
    docsUrl?: string;
    docsLabel?: string;
}

@Component({
    selector: 'app-api-key-help-modal',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    templateUrl: './api-key-help-modal.component.html',
})
export class ApiKeyHelpModalComponent implements OnChanges, OnDestroy {
    @Input() isOpen = false;
    @Input() content: ApiKeyHelpModalContent | null = null;

    @Output() close = new EventEmitter<void>();

    private _appendedToBody = false;
    private _originalParent: Node | null = null;
    private _originalNextSibling: Node | null = null;
    private _previousBodyOverflow = '';

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _elementRef: ElementRef<HTMLElement>
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if ('isOpen' in changes || 'content' in changes) {
            this._syncBodyAttachment();
        }
    }

    ngOnDestroy(): void {
        this._detachFromBody();
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (this.isOpen) {
            this.onClose();
        }
    }

    onBackdropClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.onClose();
        }
    }

    onClose(): void {
        this.close.emit();
    }

    private _syncBodyAttachment(): void {
        if (this.isOpen && this.content) {
            this._attachToBody();
            return;
        }

        this._detachFromBody();
    }

    private _attachToBody(): void {
        if (this._appendedToBody) {
            return;
        }

        const element = this._elementRef.nativeElement;
        this._originalParent = element.parentNode;
        this._originalNextSibling = element.nextSibling;
        this._previousBodyOverflow = this._document.body.style.overflow;
        this._document.body.style.overflow = 'hidden';
        this._document.body.appendChild(element);
        this._appendedToBody = true;
    }

    private _detachFromBody(): void {
        if (!this._appendedToBody) {
            return;
        }

        const element = this._elementRef.nativeElement;

        if (this._originalParent) {
            if (this._originalNextSibling) {
                this._originalParent.insertBefore(element, this._originalNextSibling);
            } else {
                this._originalParent.appendChild(element);
            }
        }

        this._document.body.style.overflow = this._previousBodyOverflow;
        this._appendedToBody = false;
        this._originalParent = null;
        this._originalNextSibling = null;
        this._previousBodyOverflow = '';
    }
}
