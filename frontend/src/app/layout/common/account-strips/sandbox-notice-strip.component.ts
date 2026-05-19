import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { AccountEnvironmentService } from '../../../core/account/account-environment.service';

/**
 * Thin amber strip shown below the header when `sandboxMode === true`.
 * Persistent — no dismiss control by design.
 */
@Component({
    selector: 'sandbox-notice-strip',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, TranslocoModule],
    template: `
        @if (env.showSandboxStrip()) {
            <div
                class="flex w-full items-center gap-2 border-b border-amber-300/60 bg-amber-400/15 px-4 py-2 dark:border-amber-700/40 dark:bg-amber-900/25"
                role="status"
            >
                <mat-icon class="shrink-0 text-amber-700 dark:text-amber-300" style="font-size:16px;width:16px;height:16px">science</mat-icon>
                <span class="text-xs font-medium text-amber-800 dark:text-amber-200">
                    {{ 'accountEnv.sandboxStrip.text' | transloco }}
                </span>
                <button
                    mat-button
                    type="button"
                    class="!h-auto !min-h-0 !p-0 !text-xs !font-semibold !text-amber-900 underline dark:!text-amber-300"
                    (click)="env.openSandboxInfoModal()"
                >
                    {{ 'accountEnv.sandboxStrip.readMore' | transloco }}
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: contents;
            }
        `,
    ],
})
export class SandboxNoticeStripComponent {
    readonly env = inject(AccountEnvironmentService);
}
