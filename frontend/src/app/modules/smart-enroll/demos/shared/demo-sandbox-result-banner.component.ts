import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';

/**
 * Result-level notice when sandbox fixtures are serving biometric demos.
 */
@Component({
    selector: 'app-demo-sandbox-result-banner',
    standalone: true,
    imports: [TranslocoModule],
    template: `
        @if (env.showSandboxStrip()) {
            <div
                class="mb-6 rounded-xl border border-amber-300/70 bg-amber-400/15 px-4 py-3 text-left dark:border-amber-700/40 dark:bg-amber-900/25"
                role="status"
            >
                <p class="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-200">
                    {{ 'smartEnrollDemos.common.sandboxResultBadge' | transloco }}
                </p>
                <p class="mt-1 text-sm font-semibold text-amber-950 dark:text-amber-100">
                    {{ 'smartEnrollDemos.common.sandboxResultTitle' | transloco }}
                </p>
                <p class="mt-1 text-xs leading-5 text-amber-900/80 dark:text-amber-200/80">
                    {{ 'smartEnrollDemos.common.sandboxResultBody' | transloco }}
                </p>
            </div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSandboxResultBannerComponent {
    readonly env = inject(AccountEnvironmentService);
}
