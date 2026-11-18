import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    DestroyRef,
    effect,
    inject,
    OnInit,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { FleetNavComponent } from '../fleet-nav.component';
import { FleetChannelIconComponent } from '../watch-rules/fleet-channel-icon.component';
import {
    FleetAlert,
    FleetAlertStatus,
    FleetAsset,
    FleetChannel,
    FleetSeverity,
    FleetWatchRule,
    SmartFleetService,
} from '../smart-fleet.service';

const ALERT_TYPE_KEY_OVERRIDES: Record<string, string> = {
    fine_amount_changed: 'smartFleet.alerts.type_comparendo_amount_changed',
};

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
        MatSnackBarModule,
        FleetNavComponent,
        FleetChannelIconComponent,
    ],
    templateUrl: './fleet-alerts.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetAlertsComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);
    private _destroyRef = inject(DestroyRef);

    private _lastSandboxRevision = 0;
    private _copyTimer: ReturnType<typeof setTimeout> | null = null;

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
    readonly skeletonRows = [1, 2, 3, 4];

    status = signal<FleetAlertStatus>('open');
    severity = signal<FleetSeverity | null>(null);

    selected = signal<Set<string>>(new Set());
    expandedAlertId = signal<string | null>(null);
    copiedAlertId = signal<string | null>(null);
    isAcknowledging = signal(false);
    isExporting = signal(false);

    openTotalKpi = computed(() => {
        const dashboardTotal = this._fleetService.dashboard()?.alerts?.openTotal;

        if (typeof dashboardTotal === 'number') return dashboardTotal;

        if (this.status() === 'open' && !this.severity()) return this.total();

        return this.alerts().filter((alert) => !alert.acknowledgedAt && !alert.resolvedAt).length;
    });

    criticalKpi = computed(() => {
        const dashboardCritical = this._fleetService.dashboard()?.alerts?.severity?.open?.critical;

        if (typeof dashboardCritical === 'number') return dashboardCritical;

        return this.alerts().filter(
            (alert) => alert.severity === 'critical' && !alert.acknowledgedAt && !alert.resolvedAt
        ).length;
    });

    warningKpi = computed(() => {
        const dashboardWarning = this._fleetService.dashboard()?.alerts?.severity?.open?.warning;

        if (typeof dashboardWarning === 'number') return dashboardWarning;

        return this.alerts().filter(
            (alert) => alert.severity === 'warning' && !alert.acknowledgedAt && !alert.resolvedAt
        ).length;
    });

    webhookDispatchedKpi = computed(() =>
        this.alerts().reduce(
            (count, alert) =>
                count +
                (alert.deliveries?.filter(
                    (delivery) => delivery.channel === 'webhook' && delivery.status === 'sent'
                ).length ?? 0),
            0
        )
    );

    selectedCount = computed(() => this.selected().size);
    hasSelection = computed(() => this.selectedCount() > 0);

    allSelected = computed(() => {
        const alerts = this.alerts();

        return alerts.length > 0 && alerts.every((alert) => this.selected().has(alert._id!));
    });

    constructor() {
        this._destroyRef.onDestroy(() => {
            if (this._copyTimer) clearTimeout(this._copyTimer);
        });

        effect(() => {
            const revision = this._fleetService.sandboxRevision();

            if (revision > 0 && revision !== this._lastSandboxRevision) {
                this._lastSandboxRevision = revision;
                this.expandedAlertId.set(null);
                this.loadPage(1);
                this._fleetService.getDashboard().subscribe({ error: () => undefined });
            }
        });
    }

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                this._fleetService.ensureDashboard();
                this.loadPage(1);
            },
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
                next: () => {
                    const expandedId = this.expandedAlertId();

                    if (expandedId && !this.alerts().some((alert) => alert._id === expandedId)) {
                        this.expandedAlertId.set(null);
                    }
                },
                error: (err) => this._reportFailure('smartFleet.alerts.loadFailed', err),
            });
    }

    showAllOpen(): void {
        this.status.set('open');
        this.severity.set(null);
        this.loadPage(1);
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

    toggleExpand(alert: FleetAlert): void {
        const id = alert._id ?? null;

        if (!id) return;

        this.expandedAlertId.set(this.expandedAlertId() === id ? null : id);
    }

    isExpanded(alert: FleetAlert): boolean {
        return Boolean(alert._id && this.expandedAlertId() === alert._id);
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
                this._fleetService.getDashboard().subscribe({ error: () => undefined });
            },
            error: (err) => {
                this.isAcknowledging.set(false);
                this._reportFailure('smartFleet.alerts.acknowledgeFailed', err);
            },
        });
    }

    acknowledge(alert: FleetAlert): void {
        this._fleetService.acknowledgeAlert(alert._id!).subscribe({
            next: () => {
                this.loadPage(this.page());
                this._fleetService.getDashboard().subscribe({ error: () => undefined });
            },
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

    isDriverAlert(alert: FleetAlert): boolean {
        const asset = alert.asset as FleetAsset | string | undefined;

        if (asset && typeof asset !== 'string' && asset.type === 'driver') return true;

        return (
            alert.type === 'license_expiring' ||
            alert.type === 'license_expired' ||
            alert.type === 'new_driver_fine' ||
            alert.type === 'driver_fine_amount_changed'
        );
    }

    assetLabel(alert: FleetAlert): string {
        const asset = alert.asset as FleetAsset | string | undefined;

        if (!asset || typeof asset === 'string') return '-';

        if (asset.type === 'driver') {
            const doc = asset.ownerDocumentNumber
                ? `${asset.ownerDocumentType || 'ID'} ${asset.ownerDocumentNumber}`.trim()
                : '';

            return asset.nickname || doc || '-';
        }

        return asset.plate || asset.vin || asset.nickname || '-';
    }

    assetId(alert: FleetAlert): string | null {
        const asset = alert.asset as FleetAsset | string | undefined;

        if (!asset) return null;

        return typeof asset === 'string' ? asset : (asset._id ?? null);
    }

    alertTitle(alert: FleetAlert): string {
        const key = ALERT_TYPE_KEY_OVERRIDES[alert.type] ?? `smartFleet.alerts.type_${alert.type}`;
        const translated = this._transloco.translate(key);

        return translated && translated !== key ? translated : alert.title;
    }

    ruleLabel(alert: FleetAlert): string {
        const rule = alert.watchRule as FleetWatchRule | string | undefined;

        if (!rule) return '-';

        if (typeof rule === 'string') return rule;

        return rule.name || this._transloco.translate(`smartFleet.checkType.${rule.checkType}`);
    }

    alertWebhookJson(alert: FleetAlert): string {
        const asset = alert.asset as FleetAsset | string | undefined;
        const serializedAsset =
            asset && typeof asset === 'object'
                ? {
                      id: asset._id ?? null,
                      type: asset.type ?? 'vehicle',
                      plate: asset.plate ?? null,
                      vin: asset.vin ?? null,
                      ownerDocumentType: asset.ownerDocumentType ?? null,
                      ownerDocumentNumber: asset.ownerDocumentNumber ?? null,
                      nickname: asset.nickname ?? null,
                      group: asset.group ?? null,
                      country: asset.country ?? null,
                  }
                : (asset ?? null);

        const body = {
            id: alert._id ?? null,
            event: `fleet_alert_${alert.type}`,
            severity: alert.severity,
            detectedAt: alert.detectedAt ?? null,
            sourceValue: alert.sourceValue ?? null,
            asset: serializedAsset,
            payload: alert.payload ?? {},
            deliveries: alert.deliveries ?? [],
        };

        return JSON.stringify(body, null, 2);
    }

    async copyAlertJson(alert: FleetAlert): Promise<void> {
        const json = this.alertWebhookJson(alert);

        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(json);
            } else {
                const textarea = document.createElement('textarea');

                textarea.value = json;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            if (alert._id) {
                this.copiedAlertId.set(alert._id);

                if (this._copyTimer) clearTimeout(this._copyTimer);

                this._copyTimer = setTimeout(() => {
                    this.copiedAlertId.set(null);
                }, 2000);
            }

            this._snackBar.open(
                this._transloco.translate('smartFleet.alerts.inspectCopied'),
                undefined,
                { duration: 2500 }
            );
        } catch (err) {
            console.error('[SmartFleet] copy alert JSON failed', err);
        }
    }

    statusIcon(status: FleetAlertStatus): string {
        switch (status) {
            case 'open':
                return 'notifications';
            case 'acknowledged':
                return 'done';
            case 'resolved':
                return 'task_alt';
            default:
                return 'inbox';
        }
    }

    severityIcon(severity: string): string {
        switch (severity) {
            case 'critical':
                return 'error';
            case 'warning':
                return 'warning_amber';
            default:
                return 'info';
        }
    }

    alertIcon(type: string): string {
        if (type.startsWith('soat')) return 'verified_user';
        if (type.startsWith('rtm')) return 'build';
        if (type === 'license_expiring' || type === 'license_expired') return 'badge';
        if (
            type === 'new_comparendo' ||
            type === 'fine_amount_changed' ||
            type === 'comparendo_amount_changed' ||
            type === 'new_driver_fine' ||
            type === 'driver_fine_amount_changed'
        ) {
            return 'gavel';
        }
        if (type === 'ownership_changed') return 'badge';
        if (type === 'new_claim') return 'car_crash';
        if (type === 'check_failed') return 'cloud_off';

        return 'notifications';
    }

    checkLabelKey(type: string): string {
        if (type.startsWith('soat')) return 'smartFleet.checkType.soat';
        if (type.startsWith('rtm')) return 'smartFleet.checkType.rtm';
        if (type === 'license_expiring' || type === 'license_expired') {
            return 'smartFleet.checkType.driver_license';
        }
        if (
            type === 'new_comparendo' ||
            type === 'fine_amount_changed' ||
            type === 'comparendo_amount_changed'
        ) {
            return 'smartFleet.checkType.comparendos';
        }
        if (type === 'new_driver_fine' || type === 'driver_fine_amount_changed') {
            return 'smartFleet.checkType.driver_fines';
        }
        if (type === 'ownership_changed') return 'smartFleet.checkType.ownership';
        if (type === 'new_claim') return 'smartFleet.checkType.claims';
        if (type === 'check_failed') return 'smartFleet.alerts.checkFailed';

        return 'smartFleet.checkType.custom';
    }

    deliveryTone(status: string): string {
        switch (status) {
            case 'sent':
                return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200';
            case 'failed':
                return 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-200';
            case 'skipped':
                return 'bg-stone-100 text-stone-400 dark:bg-gray-800 dark:text-stone-500';
            default:
                return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
        }
    }

    deliveryLabel(channel: FleetChannel, status: string): string {
        const name = this._transloco.translate('smartFleet.channel.' + channel);
        const state = this._transloco.translate('smartFleet.alerts.delivery.' + status);

        return `${name}: ${state}`;
    }

    severityClasses(severity: string): string {
        switch (severity) {
            case 'critical':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
            case 'warning':
                return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
            default:
                return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300';
        }
    }

    formatDate(value?: string | null): string {
        if (!value) return '-';

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
