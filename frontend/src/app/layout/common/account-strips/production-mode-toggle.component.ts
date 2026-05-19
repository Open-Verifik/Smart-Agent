import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AccountEnvironmentService } from '../../../core/account/account-environment.service';

/**
 * Compact Production / Sandbox toggle for the app shell header.
 * Only rendered when the user is authenticated (canRecharge check lives in service).
 */
@Component({
    selector: 'production-mode-toggle',
    standalone: true,
    imports: [MatProgressSpinnerModule, MatSlideToggleModule, MatTooltipModule, TranslocoModule],
    template: `
        @if (env.isAuthenticated()) {
            <div class="flex items-center gap-2 pl-1 pr-2">
                @if (env.sandboxToggleLoading()) {
                    <mat-spinner diameter="16"></mat-spinner>
                }
                <span
                    class="hidden text-xs font-semibold uppercase tracking-wide sm:inline"
                    [class.text-emerald-700]="env.productionModeOn()"
                    [class.dark:text-emerald-300]="env.productionModeOn()"
                    [class.text-amber-700]="!env.productionModeOn()"
                    [class.dark:text-amber-300]="!env.productionModeOn()"
                >
                    {{
                        env.productionModeOn()
                            ? ('accountEnv.toggle.productionLabel' | transloco)
                            : ('accountEnv.toggle.sandboxLabel' | transloco)
                    }}
                </span>
                <mat-slide-toggle
                    [checked]="env.productionModeOn()"
                    [disabled]="env.productionToggleDisabled()"
                    [matTooltip]="
                        env.productionToggleDisabled() && !env.sandboxToggleLoading()
                            ? ('accountEnv.toggle.tooltipDisabled' | transloco)
                            : ''
                    "
                    [aria-label]="'accountEnv.toggle.aria' | transloco"
                    (change)="onToggle($event)"
                ></mat-slide-toggle>
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
export class ProductionModeToggleComponent {
    readonly env = inject(AccountEnvironmentService);
    private _transloco = inject(TranslocoService);

    onToggle(change: MatSlideToggleChange): void {
        this.env.toggleProductionMode(change.checked);
    }
}
