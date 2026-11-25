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
import { StaffPermissionService } from '../../../core/permissions';

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
                    [disabled]="toggleDisabled"
                    [matTooltip]="toggleTooltip"
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
    private readonly _permissions = inject(StaffPermissionService);

    get canManageKeys(): boolean {
        return this._permissions.can('apiKeys', 'manageKeys');
    }

    get toggleDisabled(): boolean {
        return this.env.productionToggleDisabled() || !this.canManageKeys;
    }

    get toggleTooltip(): string {
        if (!this.canManageKeys) {
            return this._transloco.translate('staffRbac.tooltips.toggleEnvironmentLocked');
        }
        if (this.env.productionToggleDisabled() && !this.env.sandboxToggleLoading()) {
            return this._transloco.translate('accountEnv.toggle.tooltipDisabled');
        }
        return '';
    }

    onToggle(change: MatSlideToggleChange): void {
        if (!this.canManageKeys) {
            return;
        }
        this.env.toggleProductionMode(change.checked);
    }
}
