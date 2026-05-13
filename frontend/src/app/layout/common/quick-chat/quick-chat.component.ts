import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { DOCUMENT, NgClass } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    OnDestroy,
    Renderer2,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { SupportTicketChatPanelComponent } from 'app/modules/support-tickets/support-ticket-chat-panel/support-ticket-chat-panel.component';

@Component({
    selector: 'quick-chat',
    templateUrl: './quick-chat.component.html',
    styleUrls: ['./quick-chat.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs: 'quickChat',
    imports: [NgClass, MatIconModule, MatButtonModule, TranslocoModule, SupportTicketChatPanelComponent],
})
export class QuickChatComponent implements AfterViewInit, OnDestroy {
    @ViewChild('ticketPanel') ticketPanel?: SupportTicketChatPanelComponent;

    opened = false;
    expanded = false;

    private _mutationObserver: MutationObserver;
    private readonly _scrollStrategy: ScrollStrategy;
    private _overlay: HTMLElement;

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _elementRef: ElementRef,
        private _renderer2: Renderer2,
        private _scrollStrategyOptions: ScrollStrategyOptions,
    ) {
        this._scrollStrategy = this._scrollStrategyOptions.block();
    }

    @HostBinding('class')
    get hostClasses(): Record<string, boolean> {
        return {
            'quick-chat-opened': this.opened,
            'quick-chat-expanded': this.expanded,
        };
    }

    ngAfterViewInit(): void {
        // Fix for Firefox when overlay blocks scroll on html (Fuse layout).
        this._mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                const mutationTarget = mutation.target as HTMLElement;
                if (mutation.attributeName === 'class') {
                    if (mutationTarget.classList.contains('cdk-global-scrollblock')) {
                        const top = parseInt(mutationTarget.style.top, 10);
                        this._renderer2.setStyle(
                            this._elementRef.nativeElement,
                            'margin-top',
                            `${Math.abs(top)}px`,
                        );
                    } else {
                        this._renderer2.setStyle(
                            this._elementRef.nativeElement,
                            'margin-top',
                            null,
                        );
                    }
                }
            });
        });
        this._mutationObserver.observe(this._document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }

    ngOnDestroy(): void {
        this._mutationObserver?.disconnect();
    }

    open(): void {
        if (this.opened) return;
        this._toggleOpened(true);
    }

    close(): void {
        if (!this.opened) return;
        this.expanded = false;
        this._toggleOpened(false);
    }

    toggle(): void {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    toggleExpanded(): void {
        this.expanded = !this.expanded;
    }

    private _toggleOpened(open: boolean): void {
        this.opened = open;

        if (open) {
            this._showOverlay();
            setTimeout(() => this.ticketPanel?.refreshIfNeeded(), 0);
        } else {
            this._hideOverlay();
        }
    }

    private _showOverlay(): void {
        this._hideOverlay();

        this._overlay = this._renderer2.createElement('div');
        if (!this._overlay) return;

        this._overlay.classList.add('quick-chat-overlay');
        this._renderer2.appendChild(
            this._elementRef.nativeElement.parentElement,
            this._overlay,
        );

        this._scrollStrategy.enable();

        this._overlay.addEventListener('click', () => {
            this.close();
        });
    }

    private _hideOverlay(): void {
        if (!this._overlay) return;

        this._overlay.parentNode?.removeChild(this._overlay);
        this._overlay = null;
        this._scrollStrategy.disable();
    }
}
