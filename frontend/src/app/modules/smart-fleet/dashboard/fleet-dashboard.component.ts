import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { firstValueFrom } from 'rxjs';
import { assetCoverages } from '../assets/fleet-coverage.util';
import { FleetNavComponent } from '../fleet-nav.component';
import {
    FleetAsset,
    FleetExpiryEntry,
    FleetReadinessSummary,
    FleetSeverity,
    FleetWatchRule,
    SmartFleetService,
} from '../smart-fleet.service';

const DRIVER_CHECK_TYPES = new Set(['driver_license', 'driver_fines']);
const VEHICLE_CHECK_TYPES = new Set(['soat', 'rtm', 'comparendos', 'ownership', 'claims']);

const DISPATCH_GATE_EVENT_META: readonly {
    type: string;
    checkType: string;
}[] = [
    { type: 'soat_expired', checkType: 'soat' },
    { type: 'rtm_expired', checkType: 'rtm' },
    { type: 'license_expired', checkType: 'driver_license' },
    { type: 'new_comparendo', checkType: 'comparendos' },
];

const CREDIT_FORMATTER = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
});

export interface DispatchGateEventRow {
    type: string;
    checkType: string;
    openCount: number;
    monitored: boolean;
}

@Component({
    selector: 'fleet-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        RouterModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        FleetNavComponent,
    ],
    templateUrl: './fleet-dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            fleet-dashboard {
                display: block;
            }

            fleet-dashboard .mat-mdc-progress-spinner {
                --mdc-circular-progress-active-indicator-color: currentColor;
            }

            fleet-dashboard .fleet-readiness-body {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.25rem;
            }

            @supports not (container-type: inline-size) {
                @media (min-width: 640px) {
                    fleet-dashboard .fleet-readiness-body {
                        display: grid;
                        grid-template-columns: auto minmax(0, 1fr);
                        align-items: center;
                        gap: 1.5rem;
                    }
                }
            }

            @container (min-width: 520px) {
                fleet-dashboard .fleet-readiness-body {
                    display: grid;
                    grid-template-columns: auto minmax(0, 1fr);
                    align-items: center;
                    gap: 1.5rem;
                }
            }

            @media (prefers-reduced-motion: no-preference) {
                fleet-dashboard .fleet-readiness-ring__progress {
                    transition:
                        stroke-dashoffset 680ms cubic-bezier(0.16, 1, 0.3, 1),
                        color 240ms ease;
                }
            }

            fleet-dashboard .fleet-table-region {
                max-block-size: min(440px, 65vh);
            }

            fleet-dashboard .fleet-table-region tbody tr:hover .fleet-sticky-cell {
                background-color: var(--fleet-surface-muted);
            }

            @container (width < 560px) {
                fleet-dashboard .fleet-table-region {
                    max-block-size: none;
                }

                fleet-dashboard .fleet-table-region table,
                fleet-dashboard .fleet-table-region tbody,
                fleet-dashboard .fleet-table-region tr,
                fleet-dashboard .fleet-table-region th,
                fleet-dashboard .fleet-table-region td {
                    display: block;
                    width: 100%;
                }

                fleet-dashboard .fleet-table-region thead {
                    display: none;
                }

                fleet-dashboard .fleet-table-region tbody {
                    padding: 0.75rem;
                }

                fleet-dashboard .fleet-table-region tbody tr {
                    margin-block-end: 0.75rem;
                    overflow: hidden;
                    border: 1px solid var(--fleet-border);
                    border-radius: 0.75rem;
                    background-color: var(--fleet-surface);
                }

                fleet-dashboard .fleet-table-region tbody tr:last-child {
                    margin-block-end: 0;
                }

                fleet-dashboard .fleet-table-region tbody th[scope='row'] {
                    position: sticky;
                    inset-block-start: 0;
                    inset-inline-start: auto;
                    z-index: 2;
                    border-block-end: 1px solid var(--fleet-border);
                    background-color: var(--fleet-surface-muted);
                    padding: 0.625rem 0.875rem;
                }

                fleet-dashboard .fleet-table-region tbody td {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.75rem;
                    padding: 0.5rem 0.875rem;
                    text-align: right;
                }

                fleet-dashboard .fleet-table-region tbody td::before {
                    content: attr(data-label);
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: var(--fleet-text-muted);
                    text-align: left;
                }
            }
        `,
    ],
})
export class FleetDashboardComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _authGate = inject(AuthRequiredGateService);
    private _env = inject(AccountEnvironmentService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    private _authenticated = signal(false);
    private _lastSandboxRevision = 0;

    readonly ringRadius = 56;
    readonly ringCircumference = 2 * Math.PI * this.ringRadius;
    readonly horizonOptions = [30, 60, 90] as const;

    dashboard = this._fleetService.dashboard;
    isLoading = this._fleetService.isLoadingDashboard;

    horizonDays = signal(60);
    isSeedingDemo = signal(false);

    /** Active assets and active watch rules fetched for rule-gap and readiness fallback. */
    activeAssets = signal<FleetAsset[] | null>(null);
    activeRules = signal<FleetWatchRule[]>([]);
    uncoveredAssets = signal<FleetAsset[] | null>(null);

    assets = computed(() => this.dashboard()?.assets ?? null);
    alerts = computed(() => this.dashboard()?.alerts ?? null);
    runway = computed(() => this.dashboard()?.runway ?? null);
    spend = computed(() => this.dashboard()?.spend ?? null);
    projected = computed(() => this.dashboard()?.projectedMonthlyCredits ?? null);
    plan = computed(() => this.dashboard()?.plan ?? null);
    expiring = computed(() => this.dashboard()?.expiringSoon?.entries ?? []);

    isSandboxMode = computed(
        () => Boolean(this.dashboard()?.sandboxMode) || this._env.isSandboxModeActive()
    );

    showSandboxDemoCta = computed(
        () => Boolean(this.dashboard()) && this.isSandboxMode() && (this.dashboard()?.assets?.active ?? 0) < 4
    );

    readiness = computed<FleetReadinessSummary>(() => {
        const data = this.dashboard();

        if (data?.readiness) {
            const summary = data.readiness;

            return {
                compliant: summary.compliant ?? 0,
                expiringSoon: summary.expiringSoon ?? 0,
                grounded: summary.grounded ?? 0,
                unchecked: summary.unchecked ?? 0,
                scorePercent:
                    summary.scorePercent !== null && summary.scorePercent !== undefined
                        ? Math.round(summary.scorePercent)
                        : null,
                vehiclesActive: summary.vehiclesActive ?? 0,
                driversActive: summary.driversActive ?? 0,
            };
        }

        const loadedAssets = this.activeAssets();

        if (loadedAssets !== null) {
            return this._computeReadinessFromAssets(loadedAssets);
        }

        return this._computeReadinessFromDashboard(data);
    });

    ringDashOffset = computed(() => {
        const score = this.readiness().scorePercent;

        if (score === null) return this.ringCircumference;

        const clamped = Math.max(0, Math.min(100, score));

        return this.ringCircumference * (1 - clamped / 100);
    });

    ringToneClass = computed(() => {
        const score = this.readiness().scorePercent;

        if (score === null) return 'text-stone-300 dark:text-gray-700';
        if (score >= 80) return 'text-emerald-600 dark:text-emerald-400';
        if (score >= 50) return 'text-amber-600 dark:text-amber-400';

        return 'text-red-600 dark:text-red-400';
    });

    /** Assets in use as a percentage of the plan limit, for the capacity bar. */
    assetUsagePercent = computed(() => {
        const assets = this.assets();

        if (!assets?.limit) return 0;

        return Math.min(100, Math.round((assets.active / assets.limit) * 100));
    });

    isNearAssetLimit = computed(() => this.assetUsagePercent() >= 80);

    hasRunwayBurn = computed(() => {
        const runway = this.runway();

        if (!runway) return false;

        return (runway.dailyCredits ?? 0) > 0 && runway.daysOfRunway !== null && runway.daysOfRunway !== undefined;
    });

    roundedRunwayDays = computed(() => {
        const days = this.runway()?.daysOfRunway;

        if (days === null || days === undefined || Number.isNaN(days)) return null;

        return Math.max(0, Math.round(days));
    });

    isRunwayCapped = computed(() => {
        const days = this.runway()?.daysOfRunway;

        return days !== null && days !== undefined && days > 365;
    });

    isRunwayLow = computed(() => {
        if (this.isSandboxMode()) return false;

        const days = this.runway()?.daysOfRunway;

        return days !== null && days !== undefined && days <= 7;
    });

    /** Expired, or expiring within the next 7 days. */
    dueThisWeek = computed(() => this.expiring().filter((entry) => entry.daysRemaining <= 7));

    expiredCount = computed(() => this.expiring().filter((entry) => entry.daysRemaining < 0).length);

    /** Credits the next month of monitoring needs beyond the current balance. */
    creditShortfall = computed(() => {
        if (this.isSandboxMode()) return 0;

        const runway = this.runway();
        const projected = this.projected()?.totalCredits ?? 0;

        if (!runway || !projected) return 0;

        const diff = projected - runway.balance;

        return diff > 0.005 ? Math.round(diff * 100) / 100 : 0;
    });

    formattedProjectedMonthly = computed(() => this.formatCredits(this.projected()?.totalCredits ?? 0));

    formattedSpendCredits = computed(() => this.formatCredits(this.spend()?.totalCredits ?? 0));

    hasWebhookGate = computed(() =>
        this.activeRules().some(
            (rule) => Boolean(rule.webhookUrl?.trim()) || (rule.channels ?? []).includes('webhook')
        )
    );

    dispatchGateEvents = computed<DispatchGateEventRow[]>(() => {
        const byType = new Map(
            (this.alerts()?.byType ?? []).map((item) => [item.type, item.count] as const)
        );
        const monitoredChecks = new Set(this.activeRules().map((rule) => rule.checkType));

        return DISPATCH_GATE_EVENT_META.map((item) => ({
            type: item.type,
            checkType: item.checkType,
            openCount: byType.get(item.type) ?? 0,
            monitored: monitoredChecks.has(item.checkType as FleetWatchRule['checkType']),
        }));
    });

    constructor() {
        effect(() => {
            const revision = this._fleetService.sandboxRevision();

            if (revision > 0 && revision !== this._lastSandboxRevision) {
                this._lastSandboxRevision = revision;

                if (this._authenticated()) {
                    this.reload();
                    void this._loadCoverage();
                }
            }
        });
    }

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                this._authenticated.set(true);
                this._lastSandboxRevision = this._fleetService.sandboxRevision();
                this.reload();
                void this._loadCoverage();
            },
            panelClass: 'auth-required-dialog',
        });
    }

    async loadSandboxDemo(): Promise<void> {
        if (this.isSeedingDemo()) return;

        this.isSeedingDemo.set(true);

        try {
            await firstValueFrom(this._fleetService.seedSandboxDemo());
            this._lastSandboxRevision = this._fleetService.sandboxRevision();

            await Promise.all([
                firstValueFrom(this._fleetService.getDashboard({ horizonDays: this.horizonDays() })),
                this._loadCoverage(),
            ]);

            this._snackBar.open(
                this._transloco.translate('smartFleet.sandbox.seedSuccess'),
                undefined,
                { duration: 3500 }
            );
        } catch (err) {
            console.error('[SmartFleet] seedSandboxDemo error', err);
            this._snackBar.open(
                this._transloco.translate('smartFleet.sandbox.seedError'),
                undefined,
                { duration: 4000 }
            );
        } finally {
            this.isSeedingDemo.set(false);
        }
    }

    uncoveredLabel(): string {
        const assets = this.uncoveredAssets() ?? [];
        const names = assets.slice(0, 3).map((asset) => {
            if (asset.type === 'driver') {
                return asset.nickname || asset.ownerDocumentNumber || '-';
            }

            return asset.plate || asset.vin || asset.nickname || '-';
        });

        return assets.length > 3 ? `${names.join(', ')} +${assets.length - 3}` : names.join(', ');
    }

    scrollToExpiring(): void {
        document.getElementById('fleet-expiring')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    reload(): void {
        this._fleetService.getDashboard({ horizonDays: this.horizonDays() }).subscribe({
            error: (err) => console.error('[SmartFleet] getDashboard error', err),
        });
    }

    setHorizon(days: number): void {
        if (this.horizonDays() === days) return;

        this.horizonDays.set(days);
        this.reload();
    }

    entryIcon(entry: FleetExpiryEntry): string {
        return entry.type === 'driver' ||
            entry.checkType === 'driver_license' ||
            entry.checkType === 'driver_fines'
            ? 'badge'
            : 'directions_car';
    }

    entryIdentifier(entry: FleetExpiryEntry): string {
        return entry.identifier || entry.plate || entry.ownerDocumentNumber || '-';
    }

    severityClasses(severity: FleetSeverity | string): string {
        switch (severity) {
            case 'critical':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
            case 'warning':
                return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
            default:
                return 'bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-300';
        }
    }

    expiryClasses(daysRemaining: number): string {
        if (daysRemaining < 0) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';

        if (daysRemaining <= 30)
            return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';

        return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
    }

    formatCredits(value?: number | null): string {
        if (value === null || value === undefined || Number.isNaN(value)) return '0';

        return CREDIT_FORMATTER.format(value);
    }

    formatDate(value?: string | null): string {
        if (!value) return '-';

        const date = new Date(value);

        return Number.isNaN(date.getTime()) ? '-' : date.toLocaleDateString();
    }

    private async _loadCoverage(): Promise<void> {
        try {
            const [assets, rules] = await Promise.all([
                this._fleetService.findAllAssets({ isActive: true }),
                firstValueFrom(this._fleetService.listWatchRules()),
            ]);

            this.activeAssets.set(assets);

            const active = (rules.data ?? []).filter(
                (rule) => rule.isActive !== false && !rule.unassigned
            );
            this.activeRules.set(active);

            const assetIdOf = (rule: FleetWatchRule) =>
                typeof rule.asset === 'string' ? rule.asset : rule.asset?._id || null;

            const fleetWideRules = active.filter((rule) => !assetIdOf(rule) && !rule.group);
            const fleetCoversVehicles = fleetWideRules.some(
                (rule) => VEHICLE_CHECK_TYPES.has(rule.checkType) || rule.checkType === 'custom'
            );
            const fleetCoversDrivers = fleetWideRules.some(
                (rule) => DRIVER_CHECK_TYPES.has(rule.checkType) || rule.checkType === 'custom'
            );

            const byAsset = new Set(active.map(assetIdOf).filter(Boolean));
            const byGroup = new Set(active.map((rule) => rule.group).filter(Boolean));

            this.uncoveredAssets.set(
                assets.filter((asset) => {
                    const isDriver = asset.type === 'driver';
                    const coveredByFleet = isDriver ? fleetCoversDrivers : fleetCoversVehicles;

                    if (coveredByFleet) return false;
                    if (asset._id && byAsset.has(asset._id)) return false;
                    if (asset.group && byGroup.has(asset.group)) return false;

                    return true;
                })
            );
        } catch (err) {
            console.error('[SmartFleet] coverage summary error', err);
            this.uncoveredAssets.set(null);
        }
    }

    private _computeReadinessFromAssets(assets: FleetAsset[]): FleetReadinessSummary {
        let compliant = 0;
        let expiringSoon = 0;
        let grounded = 0;
        let unchecked = 0;
        let vehiclesActive = 0;
        let driversActive = 0;

        for (const asset of assets) {
            if (asset.type === 'driver') {
                driversActive += 1;
            } else {
                vehiclesActive += 1;
            }

            const chips = assetCoverages(asset);
            const isGrounded =
                (asset.alertCounts?.critical ?? 0) > 0 ||
                chips.some((chip) => chip.tone === 'expired');
            const isExpiringSoon =
                (asset.alertCounts?.warning ?? 0) > 0 ||
                chips.some((chip) => chip.tone === 'due');
            const hasExtraDelta =
                asset.type !== 'driver' &&
                Boolean(
                    asset.lastKnownState?.['ownership']?.checkedAt ||
                        asset.lastKnownState?.['claims']?.checkedAt
                );

            if (!isGrounded && !isExpiringSoon && !hasExtraDelta && chips.every((chip) => chip.tone === 'unknown')) {
                unchecked += 1;
            } else if (isGrounded) {
                grounded += 1;
            } else if (isExpiringSoon) {
                expiringSoon += 1;
            } else {
                compliant += 1;
            }
        }

        const total = assets.length;
        const checked = compliant + expiringSoon + grounded;
        const scorePercent =
            total > 0 && checked > 0 ? Math.round(((compliant + expiringSoon) / total) * 100) : null;

        return {
            compliant,
            expiringSoon,
            grounded,
            unchecked,
            scorePercent,
            vehiclesActive,
            driversActive,
        };
    }

    private _computeReadinessFromDashboard(
        data: ReturnType<typeof this.dashboard>
    ): FleetReadinessSummary {
        const total = data?.assets?.active ?? 0;
        const entries = data?.expiringSoon?.entries ?? [];
        const groundedIds = new Set<string>();
        const expiringIds = new Set<string>();
        const seenDrivers = new Set<string>();

        for (const entry of entries) {
            if (
                entry.asset &&
                (entry.type === 'driver' ||
                    entry.checkType === 'driver_license' ||
                    entry.checkType === 'driver_fines')
            ) {
                seenDrivers.add(entry.asset);
            }

            if (!entry.asset) continue;

            if (entry.daysRemaining < 0) {
                groundedIds.add(entry.asset);
            } else if (entry.daysRemaining <= 30) {
                expiringIds.add(entry.asset);
            }
        }

        for (const id of groundedIds) {
            expiringIds.delete(id);
        }

        const grounded = Math.min(total, groundedIds.size);
        const expiringSoon = Math.min(Math.max(0, total - grounded), expiringIds.size);
        const remaining = Math.max(0, total - grounded - expiringSoon);
        const hasAnyChecks =
            (data?.spend?.totalChecks ?? 0) > 0 ||
            entries.length > 0 ||
            (data?.alerts?.openTotal ?? 0) > 0;
        const compliant = hasAnyChecks ? remaining : 0;
        const unchecked = hasAnyChecks ? 0 : remaining;
        const checked = compliant + expiringSoon + grounded;
        const scorePercent =
            total > 0 && checked > 0 ? Math.round(((compliant + expiringSoon) / total) * 100) : null;
        const driversActive = Math.min(total, seenDrivers.size);

        return {
            compliant,
            expiringSoon,
            grounded,
            unchecked,
            scorePercent,
            vehiclesActive: Math.max(0, total - driversActive),
            driversActive,
        };
    }
}
