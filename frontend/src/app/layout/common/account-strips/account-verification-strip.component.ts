import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { AccountEnvironmentService } from '../../../core/account/account-environment.service';

/**
 * Full-width strip shown above the header when `canRecharge === false`.
 * Prompts the user to complete company verification to unlock production access.
 */
@Component({
    selector: 'account-verification-strip',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    template: `
        @if (env.showVerifyStrip()) {
            <div
                class="flex w-full items-center justify-between gap-3 bg-gradient-to-r from-verifikBrand-700 to-verifikBrand-600 px-4 py-2 dark:from-verifikBrand-800 dark:to-verifikBrand-700"
                role="alert"
            >
                <div class="flex min-w-0 items-center gap-2">
                    <mat-icon class="shrink-0 text-white" style="font-size:18px;width:18px;height:18px">verified</mat-icon>
                    <span class="truncate text-sm font-medium text-white">
                        {{ 'accountEnv.verifyStrip.text' | transloco }}
                    </span>
                </div>
                <button
                    mat-flat-button
                    type="button"
                    class="!shrink-0 !rounded-lg !bg-white !text-verifikBrand-800 !text-xs !font-semibold hover:!bg-verifikBrand-50 dark:!text-verifikBrand-900"
                    [disabled]="env.verifyCompanyLoading()"
                    (click)="env.startCompanyVerification()"
                >
                    @if (env.verifyCompanyLoading()) {
                        <mat-spinner diameter="16" class="mr-1 inline-block align-middle"></mat-spinner>
                    }
                    {{ 'accountEnv.verifyStrip.cta' | transloco }}
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
export class AccountVerificationStripComponent {
    readonly env = inject(AccountEnvironmentService);
}
