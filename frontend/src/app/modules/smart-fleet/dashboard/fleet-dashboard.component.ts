import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { FleetSeverity, SmartFleetService } from '../smart-fleet.service';

@Component({
    selector: 'fleet-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './fleet-dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetDashboardComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _authGate = inject(AuthRequiredGateService);

    dashboard = this._fleetService.dashboard;
    isLoading = this._fleetService.isLoadingDashboard;

    horizonDays = signal(60);

    assets = computed(() => this.dashboard()?.assets ?? null);
    alerts = computed(() => this.dashboard()?.alerts ?? null);
    runway = computed(() => this.dashboard()?.runway ?? null);
    spend = computed(() => this.dashboard()?.spend ?? null);
    projected = computed(() => this.dashboard()?.projectedMonthlyCredits ?? null);
    plan = computed(() => this.dashboard()?.plan ?? null);

    expiring = computed(() => this.dashboard()?.expiringSoon.entries ?? []);

    /** Assets in use as a percentage of the plan limit, for the capacity bar. */
    assetUsagePercent = computed(() => {
        const assets = this.assets();

        if (!assets?.limit) return 0;

        return Math.min(100, Math.round((assets.active / assets.limit) * 100));
    });

    isNearAssetLimit = computed(() => this.assetUsagePercent() >= 80);

    /**
     * The credit balance, not the subscription, is what silently stops monitoring, so the
     * dashboard leads with runway whenever it is short.
     */
    isRunwayLow = computed(() => {
        const runway = this.runway();

        return runway?.daysOfRunway !== null && (runway?.daysOfRunway ?? 999) <= 7;
    });

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this.reload(),
            panelClass: 'auth-required-dialog',
        });
    }

    reload(): void {
        this._fleetService.getDashboard({ horizonDays: this.horizonDays() }).subscribe({
            error: (err) => console.error('[SmartFleet] getDashboard error', err),
        });
    }

    setHorizon(days: number): void {
        this.horizonDays.set(days);
        this.reload();
    }

    severityClasses(severity: FleetSeverity | string): string {
        switch (severity) {
            case 'critical':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
            case 'warning':
                return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
            default:
                return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300';
        }
    }

    expiryClasses(daysRemaining: number): string {
        if (daysRemaining < 0) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';

        if (daysRemaining <= 15)
            return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';

        return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
    }

    formatDate(value?: string | null): string {
        if (!value) return '—';

        return new Date(value).toLocaleDateString();
    }
}
