import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';

/**
 * Header lifebuoy that opens the messages hub on the support tab.
 * Hidden below the lg breakpoint; the profile menu keeps Support on smaller screens.
 */
@Component({
    selector: 'support-nav-button',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatTooltipModule, TranslocoModule],
    template: `
        <button
            class="hidden lg:inline-flex"
            mat-icon-button
            type="button"
            [matTooltip]="'userMenu.support' | transloco"
            [attr.aria-label]="'userMenu.support' | transloco"
            (click)="openSupport()"
        >
            <mat-icon [svgIcon]="'heroicons_outline:lifebuoy'"></mat-icon>
        </button>
    `,
    styles: [
        `
            :host {
                display: contents;
            }
        `,
    ],
})
export class SupportNavButtonComponent {
    private readonly _quickChatService = inject(QuickChatService);

    openSupport(): void {
        this._quickChatService.requestOpenPanel({ tab: 'tickets' });
    }
}
