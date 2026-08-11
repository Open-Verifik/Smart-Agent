import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    FleetCountryChoice,
    getFleetCountryFlag,
    getFleetCountryPlaceholders,
    mergeFleetCountries,
} from '../fleet-country.util';
import {
    FleetAlert,
    FleetAlertDelivery,
    FleetAsset,
    FleetCheckType,
    FleetSnapshot,
    FleetWatchRule,
    SmartFleetService,
} from '../smart-fleet.service';

type DetailTab = 'report' | 'timeline' | 'alerts' | 'rules' | 'inspect';

/** One rendered row of a snapshot's normalized payload. */
interface ReportRow {
    label: string;
    value: string;
    variant: 'ok' | 'warning' | 'critical' | 'neutral';
}

/** A per-check section of the vehicle report, built from the newest snapshot. */
interface ReportSection {
    checkType: FleetCheckType | string;
    observedAt?: string;
    isSuccessful: boolean;
    error?: string | null;
    rows: ReportRow[];
    listTitle?: string;
    list?: Record<string, unknown>[];
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Fields worth showing per check type, in display order. Anything not listed is dropped
 * rather than dumped, which is what kept the old report readable.
 */
const FIELD_MAP: Record<string, { key: string; label: string }[]> = {
    soat: [
        { key: 'policyNumber', label: 'policyNumber' },
        { key: 'insurer', label: 'insurer' },
        { key: 'issuedAt', label: 'issuedAt' },
        { key: 'expiresAt', label: 'expiresAt' },
        { key: 'status', label: 'status' },
    ],
    rtm: [
        { key: 'certificateNumber', label: 'certificateNumber' },
        { key: 'facility', label: 'facility' },
        { key: 'issuedAt', label: 'issuedAt' },
        { key: 'expiresAt', label: 'expiresAt' },
        { key: 'status', label: 'status' },
    ],
    comparendos: [
        { key: 'total', label: 'ticketCount' },
        { key: 'totalAmount', label: 'totalAmount' },
    ],
    ownership: [
        { key: 'ownerCount', label: 'ownerCount' },
        { key: 'primaryOwner', label: 'primaryOwner' },
    ],
    claims: [{ key: 'total', label: 'claimCount' }],
};

@Component({
    selector: 'fleet-asset-detail',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    templateUrl: './fleet-asset-detail.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetAssetDetailComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _route = inject(ActivatedRoute);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);

    assetId = signal<string>('');
    asset = signal<FleetAsset | null>(null);
    snapshots = signal<FleetSnapshot[]>([]);
    alerts = signal<FleetAlert[]>([]);
    rules = signal<FleetWatchRule[]>([]);

    isLoading = signal(false);
    isChecking = signal(false);
    isSaving = signal(false);
    showEditForm = signal(false);
    editDraft = signal<FleetAsset>({ country: 'co', type: 'vehicle' });
    countryOptions = signal<FleetCountryChoice[]>(mergeFleetCountries([{ code: 'co', available: true }]));

    readonly tabs: DetailTab[] = ['report', 'timeline', 'alerts', 'rules', 'inspect'];
    activeTab = signal<DetailTab>('report');

    editPlaceholders = computed(() => getFleetCountryPlaceholders(this.editDraft().country));

    canSaveEdit = computed(() => {
        const draft = this.editDraft();

        return Boolean(draft.plate?.trim() || draft.vin?.trim());
    });

    /**
     * Newest snapshot per check type, composed into report sections. Deliberately derived
     * from the same normalized shape the backend diffs and the PDF renders, so preview and
     * document cannot drift.
     */
    report = computed<ReportSection[]>(() => {
        const newest = new Map<string, FleetSnapshot>();

        for (const snapshot of this.snapshots()) {
            if (!newest.has(snapshot.checkType)) newest.set(snapshot.checkType, snapshot);
        }

        return [...newest.values()].map((snapshot) => this._buildSection(snapshot));
    });

    openAlerts = computed(() => this.alerts().filter((alert) => !alert.acknowledgedAt));

    activeRules = computed(() => this.rules().filter((rule) => rule.isActive !== false));

    /** Short human hint for why the next check exists (active rule frequencies). */
    scheduleHint = computed(() => {
        const active = this.activeRules();

        if (!active.length) {
            return this._transloco.translate('smartFleet.detail.scheduleNoRules');
        }

        const labels = [
            ...new Set(
                active.map((rule) => {
                    if (rule.frequency === 'custom' && rule.intervalDays) {
                        return this._transloco.translate(
                            'smartFleet.rules.customFrequencySummary',
                            { days: rule.intervalDays }
                        );
                    }

                    return this._transloco.translate(
                        `smartFleet.frequency.${rule.frequency || 'weekly'}`
                    );
                })
            ),
        ];

        return this._transloco.translate('smartFleet.detail.scheduleHint', {
            frequencies: labels.join(', '),
            count: active.length,
        });
    });

    inspectPayload = computed(() => {
        const newestByType: Record<string, FleetSnapshot> = {};

        for (const snapshot of this.snapshots()) {
            if (!newestByType[snapshot.checkType]) newestByType[snapshot.checkType] = snapshot;
        }

        return {
            asset: {
                id: this.asset()?._id,
                plate: this.asset()?.plate,
                country: this.asset()?.country,
                nextCheckAt: this.asset()?.nextCheckAt,
                lastCheckedAt: this.asset()?.lastCheckedAt,
                lastKnownState: this.asset()?.lastKnownState ?? {},
            },
            rules: this.rules().map((rule) => ({
                id: rule._id,
                checkType: rule.checkType,
                featureCode: rule.featureCode,
                frequency: rule.frequency,
                channels: rule.channels,
                isActive: rule.isActive,
                thresholdDays: rule.thresholdDays,
                webhookUrl: rule.webhookUrl,
            })),
            newestSnapshots: Object.fromEntries(
                Object.entries(newestByType).map(([checkType, snapshot]) => [
                    checkType,
                    {
                        featureCode: snapshot.featureCode,
                        fingerprint: snapshot.fingerprint,
                        creditsSpent: snapshot.creditsSpent,
                        observedAt: snapshot.observedAt,
                        isSuccessful: snapshot.isSuccessful,
                        error: snapshot.error,
                        normalized: snapshot.normalized,
                    },
                ])
            ),
        };
    });

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id') ?? '';

        this.assetId.set(id);
        this._loadCountries();
        this._load();

        if (this._route.snapshot.queryParamMap.get('edit') === '1') {
            // Wait for asset load; openEdit is also safe to call after _load fills asset.
            this.showEditForm.set(true);
        }
    }

    setActiveTab(tab: DetailTab): void {
        this.activeTab.set(tab);
    }

    getCountryFlag(country?: string | null): string {
        return getFleetCountryFlag(country);
    }

    countryLabel(code?: string | null): string {
        return this._transloco.translate(`smartFleet.countries.${code || 'co'}`);
    }

    countryOptionLabel(option: FleetCountryChoice): string {
        const base = `${this.getCountryFlag(option.code)} ${this.countryLabel(option.code)}`;

        if (option.available) return base;

        return `${base} — ${this._transloco.translate('smartFleet.assets.comingSoon')}`;
    }

    openEdit(): void {
        const current = this.asset();

        if (!current) return;

        this.editDraft.set({
            country: current.country || 'co',
            type: current.type || 'vehicle',
            plate: current.plate || '',
            vin: current.vin || '',
            nickname: current.nickname || '',
            group: current.group || '',
            ownerDocumentType: current.ownerDocumentType || '',
            ownerDocumentNumber: current.ownerDocumentNumber || '',
            notes: current.notes || '',
        });
        this.showEditForm.set(true);
    }

    cancelEdit(): void {
        this.showEditForm.set(false);
    }

    updateEditDraft(field: keyof FleetAsset, value: string): void {
        this.editDraft.update((draft) => ({ ...draft, [field]: value }));
    }

    setEditCountry(code: string): void {
        const option = this.countryOptions().find((entry) => entry.code === code);

        if (!option?.available) return;

        this.updateEditDraft('country', code);
    }

    saveEdit(): void {
        if (!this.canSaveEdit() || this.isSaving()) return;

        const draft = this.editDraft();

        this.isSaving.set(true);

        this._fleetService
            .updateAsset(this.assetId(), {
                country: draft.country,
                plate: draft.plate,
                vin: draft.vin,
                nickname: draft.nickname,
                group: draft.group,
                ownerDocumentType: draft.ownerDocumentType,
                ownerDocumentNumber: draft.ownerDocumentNumber,
                notes: draft.notes,
            })
            .subscribe({
                next: (response) => {
                    this.isSaving.set(false);
                    this.showEditForm.set(false);
                    this.asset.set(response.data);
                    this._snackBar.open(
                        this._transloco.translate('smartFleet.assets.updated'),
                        undefined,
                        { duration: 3000 }
                    );
                },
                error: (err) => {
                    this.isSaving.set(false);
                    console.error('[SmartFleet] updateAsset error', err);
                    this._snackBar.open(
                        this._transloco.translate('smartFleet.assets.updateFailed'),
                        undefined,
                        { duration: 5000 }
                    );
                },
            });
    }

    private _loadCountries(): void {
        this._fleetService.getCountries().subscribe({
            next: (response) => {
                this.countryOptions.set(mergeFleetCountries(response.data?.countries ?? []));
            },
            error: () => {
                this.countryOptions.set(mergeFleetCountries([{ code: 'co', available: true }]));
            },
        });
    }

    checkNow(): void {
        this.isChecking.set(true);

        this._fleetService.checkAssetNow(this.assetId()).subscribe({
            next: (response) => {
                this.isChecking.set(false);

                const types = response.data?.checkTypes?.length ?? 0;
                const message = response.data?.settled
                    ? this._transloco.translate('smartFleet.assets.checkCompleted', { count: types })
                    : this._transloco.translate('smartFleet.assets.checkQueued');

                this._snackBar.open(message, undefined, { duration: 5000 });
                this._load();
                this.activeTab.set('report');
            },
            error: (err) => {
                this.isChecking.set(false);
                console.error('[SmartFleet] checkNow error', err);

                const detail = (err as { error?: { message?: string; code?: string } })?.error;
                const code = detail?.message || detail?.code || '';
                const known = [
                    'no_active_rules',
                    'no_due_rules',
                    'insufficient_credits',
                    'client_inactive',
                    'missing_identifiers',
                ];
                const key = known.find((entry) => String(code).includes(entry));

                this._snackBar.open(
                    key
                        ? this._transloco.translate(`smartFleet.assets.checkSkipped.${key}`)
                        : this._transloco.translate('smartFleet.assets.checkFailed'),
                    this._transloco.translate('smartFleet.dismiss'),
                    { duration: 7000 }
                );
            },
        });
    }

    acknowledge(alert: FleetAlert): void {
        this._fleetService.acknowledgeAlert(alert._id!).subscribe({
            next: () => this._loadAlerts(),
            error: (err) => console.error('[SmartFleet] acknowledge error', err),
        });
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

    rowClasses(variant: ReportRow['variant']): string {
        switch (variant) {
            case 'critical':
                return 'text-red-600 dark:text-red-400';
            case 'warning':
                return 'text-amber-600 dark:text-amber-400';
            case 'ok':
                return 'text-emerald-600 dark:text-emerald-400';
            default:
                return 'text-stone-900 dark:text-white';
        }
    }

    formatDate(value?: string | null): string {
        if (!value) return '—';

        return new Date(value).toLocaleString();
    }

    deliverySummary(alert: FleetAlert): string {
        if (!alert.deliveries?.length) {
            return this._transloco.translate('smartFleet.detail.noDeliveries');
        }

        return alert.deliveries
            .map((delivery) => `${delivery.channel}: ${delivery.status}`)
            .join(', ');
    }

    deliveryClasses(delivery: FleetAlertDelivery): string {
        switch (delivery.status) {
            case 'sent':
                return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
            case 'failed':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
            case 'skipped':
                return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
            default:
                return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
        }
    }

    createRuleLink(): string[] {
        return ['/smart-fleet/watch-rules'];
    }

    createRuleQuery(): Record<string, string> {
        return { asset: this.assetId(), create: '1' };
    }

    editRuleQuery(rule: FleetWatchRule): Record<string, string> {
        return { edit: rule._id! };
    }

    inspectJson(): string {
        return JSON.stringify(this.inspectPayload(), null, 2);
    }

    copyInspect(): void {
        void navigator.clipboard?.writeText(this.inspectJson()).then(() => {
            this._snackBar.open(this._transloco.translate('smartFleet.detail.inspectCopied'), undefined, {
                duration: 2000,
            });
        });
    }

    listColumns(rows?: Record<string, unknown>[]): string[] {
        if (!rows?.length) return [];

        return Object.keys(rows[0]).slice(0, 5);
    }

    cell(row: Record<string, unknown>, column: string): string {
        const value = row[column];

        if (value === null || value === undefined) return '—';

        if (typeof value === 'object') return JSON.stringify(value);

        return String(value);
    }

    private _load(): void {
        this.isLoading.set(true);

        this._fleetService.getAsset(this.assetId()).subscribe({
            next: (response) => {
                this.asset.set(response.data);
                this.isLoading.set(false);

                if (this.showEditForm() && response.data) {
                    this.openEdit();
                }
            },
            error: (err) => {
                this.isLoading.set(false);
                console.error('[SmartFleet] getAsset error', err);
            },
        });

        this._fleetService.getAssetTimeline(this.assetId(), { limit: 60 }).subscribe({
            next: (response) => {
                const payload = response.data;
                const snapshots = Array.isArray(payload)
                    ? payload
                    : (payload?.snapshots ?? []);

                this.snapshots.set(snapshots);
            },
            error: (err) => console.error('[SmartFleet] getAssetTimeline error', err),
        });

        this._loadAlerts();
        this._loadRules();
    }

    private _loadRules(): void {
        this._fleetService.getApplicableRules(this.assetId()).subscribe({
            next: (response) => this.rules.set(response.data?.rules ?? []),
            error: (err) => console.error('[SmartFleet] getApplicableRules error', err),
        });
    }

    ruleScopeLabel(rule: FleetWatchRule): string {
        const assetId =
            typeof rule.asset === 'string' ? rule.asset : rule.asset?._id || null;

        if (assetId) return this._transloco.translate('smartFleet.rules.scopeAsset');

        if (rule.group) return rule.group;

        return this._transloco.translate('smartFleet.rules.scopeFleet');
    }

    private _loadAlerts(): void {
        this._fleetService
            .getAlerts({ asset: this.assetId(), status: 'all', perPage: 50 })
            .subscribe({
                next: (response) => this.alerts.set(response.data ?? []),
                error: (err) => console.error('[SmartFleet] getAlerts error', err),
            });
    }

    /**
     * Style variants are data-driven: an expired document renders red and a valid one
     * green, rather than every field looking the same.
     */
    private _variantForExpiry(value: unknown): ReportRow['variant'] {
        const timestamp = new Date(String(value)).getTime();

        if (Number.isNaN(timestamp)) return 'neutral';

        const days = Math.floor((timestamp - Date.now()) / MS_PER_DAY);

        if (days < 0) return 'critical';

        if (days <= 30) return 'warning';

        return 'ok';
    }

    private _buildSection(snapshot: FleetSnapshot): ReportSection {
        const normalized = (snapshot.normalized ?? {}) as Record<string, unknown>;
        const fields = FIELD_MAP[snapshot.checkType] ?? [];

        const rows: ReportRow[] = [];

        for (const field of fields) {
            const value = normalized[field.key];

            if (value === null || value === undefined || value === '') continue;

            rows.push({
                label: field.label,
                value: typeof value === 'object' ? JSON.stringify(value) : String(value),
                variant: field.key === 'expiresAt' ? this._variantForExpiry(value) : 'neutral',
            });
        }

        // The array payloads (tickets, owners, claims) are what the old renderer refused to
        // draw, so they get a real table here.
        const listKey = ['comparendos', 'owners', 'claims', 'items'].find((key) =>
            Array.isArray(normalized[key])
        );

        return {
            checkType: snapshot.checkType,
            observedAt: snapshot.observedAt,
            isSuccessful: snapshot.isSuccessful !== false,
            error: snapshot.error,
            rows,
            listTitle: listKey,
            list: listKey ? (normalized[listKey] as Record<string, unknown>[]) : undefined,
        };
    }
}
