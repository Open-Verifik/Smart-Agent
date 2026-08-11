import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    FleetAlert,
    FleetAlertStatus,
    FleetAsset,
    FleetSeverity,
    SmartFleetService,
} from '../smart-fleet.service';

@Component({
    selector: 'fleet-alerts',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    templateUrl: './fleet-alerts.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetAlertsComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);

    alerts = this._fleetService.alerts;
    isLoading = this._fleetService.isLoadingAlerts;

    private _pagination = this._fleetService.alertsPage;
    page = computed(() => this._pagination().page);
    pages = computed(() => this._pagination().pages);
    total = computed(() => this._pagination().total);
    rangeStart = computed(() => {
        const state = this._pagination();

        return state.total === 0 ? 0 : (state.page - 1) * state.perPage + 1;
    });
    rangeEnd = computed(() => {
        const state = this._pagination();

        return Math.min(state.page * state.perPage, state.total);
    });
    canGoPrevious = computed(() => this.page() > 1 && !this.isLoading());
    canGoNext = computed(() => this.page() < this.pages() && !this.isLoading());

    readonly statuses: FleetAlertStatus[] = ['open', 'acknowledged', 'resolved', 'all'];
    readonly severities: FleetSeverity[] = ['critical', 'warning', 'info'];

    status = signal<FleetAlertStatus>('open');
    severity = signal<FleetSeverity | null>(null);

    selected = signal<Set<string>>(new Set());
    isAcknowledging = signal(false);
    isExporting = signal(false);

    selectedCount = computed(() => this.selected().size);
    hasSelection = computed(() => this.selectedCount() > 0);

    allSelected = computed(() => {
        const alerts = this.alerts();

        return alerts.length > 0 && alerts.every((alert) => this.selected().has(alert._id!));
    });

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this.loadPage(1),
            panelClass: 'auth-required-dialog',
        });
    }

    loadPage(page: number): void {
        this.selected.set(new Set());

        this._fleetService
            .getAlerts({
                page,
                status: this.status(),
                ...(this.severity() ? { severity: this.severity()! } : {}),
            })
            .subscribe({
                error: (err) => this._reportFailure('smartFleet.alerts.loadFailed', err),
            });
    }

    setStatus(status: FleetAlertStatus): void {
        this.status.set(status);
        this.loadPage(1);
    }

    setSeverity(severity: FleetSeverity | null): void {
        this.severity.set(this.severity() === severity ? null : severity);
        this.loadPage(1);
    }

    previousPage(): void {
        if (this.canGoPrevious()) this.loadPage(this.page() - 1);
    }

    nextPage(): void {
        if (this.canGoNext()) this.loadPage(this.page() + 1);
    }

    toggleSelection(alert: FleetAlert): void {
        this.selected.update((current) => {
            const next = new Set(current);

            if (next.has(alert._id!)) next.delete(alert._id!);
            else next.add(alert._id!);

            return next;
        });
    }

    isSelected(alert: FleetAlert): boolean {
        return this.selected().has(alert._id!);
    }

    toggleSelectAll(): void {
        if (this.allSelected()) {
            this.selected.set(new Set());

            return;
        }

        this.selected.set(new Set(this.alerts().map((alert) => alert._id!)));
    }

    acknowledgeSelected(): void {
        if (!this.hasSelection() || this.isAcknowledging()) return;

        this.isAcknowledging.set(true);

        this._fleetService.acknowledgeAlerts([...this.selected()]).subscribe({
            next: (response) => {
                this.isAcknowledging.set(false);
                this._snackBar.open(
                    this._transloco.translate('smartFleet.alerts.acknowledgedCount', {
                        count: response.data.acknowledged,
                    }),
                    undefined,
                    { duration: 3000 }
                );
                this.loadPage(this.page());
            },
            error: (err) => {
                this.isAcknowledging.set(false);
                this._reportFailure('smartFleet.alerts.acknowledgeFailed', err);
            },
        });
    }

    acknowledge(alert: FleetAlert): void {
        this._fleetService.acknowledgeAlert(alert._id!).subscribe({
            next: () => this.loadPage(this.page()),
            error: (err) => this._reportFailure('smartFleet.alerts.acknowledgeFailed', err),
        });
    }

    /** Exported server-side so the file matches what the backend considers an alert. */
    export(format: 'csv' | 'xlsx' | 'jsonl'): void {
        this.isExporting.set(true);

        this._fleetService
            .exportAlerts({
                format,
                ...(this.severity() ? { severity: this.severity()! } : {}),
            })
            .subscribe({
                next: (blob) => {
                    this.isExporting.set(false);

                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');

                    link.href = url;
                    link.download = `fleet-alerts.${format}`;
                    link.click();

                    URL.revokeObjectURL(url);
                },
                error: (err) => {
                    this.isExporting.set(false);
                    this._reportFailure('smartFleet.alerts.exportFailed', err);
                },
            });
    }

    assetLabel(alert: FleetAlert): string {
        const asset = alert.asset as FleetAsset | string | undefined;

        if (!asset || typeof asset === 'string') return '—';

        return asset.plate || asset.vin || asset.nickname || '—';
    }

    assetId(alert: FleetAlert): string | null {
        const asset = alert.asset as FleetAsset | string | undefined;

        if (!asset) return null;

        return typeof asset === 'string' ? asset : (asset._id ?? null);
    }

    severityClasses(severity: string): string {
        switch (severity) {
            case 'critical':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
            case 'warning':
                return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
            default:
                return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300';
        }
    }

    deliverySummary(alert: FleetAlert): string {
        if (!alert.deliveries?.length) return '—';

        return alert.deliveries.map((delivery) => `${delivery.channel}: ${delivery.status}`).join(', ');
    }

    formatDate(value?: string | null): string {
        if (!value) return '—';

        return new Date(value).toLocaleString();
    }

    private _reportFailure(key: string, error: unknown): void {
        const detail = (error as { error?: { message?: string } })?.error;
        const message = this._transloco.translate(key);

        console.error('[SmartFleet]', key, error);

        this._snackBar.open(
            detail?.message ? `${message}: ${detail.message}` : message,
            this._transloco.translate('smartFleet.dismiss'),
            { duration: 6000 }
        );
    }
}
