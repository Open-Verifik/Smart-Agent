import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    FleetAsset,
    FleetAvailableCheck,
    FleetChannel,
    FleetCheckEndpointPath,
    FleetCheckType,
    FleetFrequency,
    FleetRuleEstimate,
    FleetWatchRule,
    FleetWatchRuleSchedule,
    SmartFleetService,
} from '../smart-fleet.service';

/** Public docs for fleet_alert_* webhook events. */
export const FLEET_WEBHOOK_DOCS_URL = 'https://docs.verifik.co/resources/smart-fleet-webhooks';

interface RuleDraft {
    scope: 'fleet' | 'group' | 'asset';
    asset?: string;
    group?: string;
    checkType?: FleetCheckType;
    frequency: FleetFrequency;
    intervalDays?: number;
    thresholdDays?: number;
    channels: FleetChannel[];
    emailRecipients: string;
    webhookUrl?: string;
}

const EMPTY_DRAFT: RuleDraft = {
    scope: 'fleet',
    frequency: 'weekly',
    intervalDays: 3,
    channels: ['email', 'inApp'],
    emailRecipients: '',
};

const FREQUENCY_DAYS: Record<Exclude<FleetFrequency, 'custom'>, number> = {
    daily: 1,
    weekly: 7,
    biweekly: 14,
    monthly: 30,
};

const MS_PER_DAY = 24 * 60 * 60 * 1000;

@Component({
    selector: 'fleet-watch-rules',
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
    templateUrl: './fleet-watch-rules.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetWatchRulesComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);
    private _confirm = inject(FuseConfirmationService);
    private _route = inject(ActivatedRoute);

    rules = this._fleetService.watchRules;
    isLoading = this._fleetService.isLoadingRules;

    availableChecks = signal<FleetAvailableCheck[]>([]);
    assets = signal<FleetAsset[]>([]);
    groups = computed(() => {
        const names = new Set<string>();

        for (const asset of this.assets()) {
            if (asset.group) names.add(asset.group);
        }

        return [...names].sort();
    });

    readonly frequencies: FleetFrequency[] = [
        'daily',
        'weekly',
        'biweekly',
        'monthly',
        'custom',
    ];
    readonly channelOptions: FleetChannel[] = ['email', 'webhook', 'inApp'];
    readonly scopes: RuleDraft['scope'][] = ['fleet', 'group', 'asset'];
    readonly webhookDocsUrl = FLEET_WEBHOOK_DOCS_URL;

    showForm = signal(false);
    isSaving = signal(false);
    /** When set, Save updates this rule instead of creating a new one. */
    editingRuleId = signal<string | null>(null);
    draft = signal<RuleDraft>({ ...EMPTY_DRAFT });

    estimate = signal<FleetRuleEstimate | null>(null);
    isEstimating = signal(false);

    detailRule = signal<FleetWatchRule | null>(null);
    schedule = signal<FleetWatchRuleSchedule | null>(null);
    isLoadingSchedule = signal(false);

    selectedCheck = computed(() =>
        this.availableChecks().find((check) => check.checkType === this.draft().checkType)
    );

    /** When the rule targets one vehicle, which dual-path endpoint that vehicle unlocks. */
    selectedAssetResolvedPath = computed<'plate' | 'vin' | null>(() => {
        const draft = this.draft();

        if (draft.scope !== 'asset' || !draft.asset) return null;

        const asset = this.assets().find((entry) => entry._id === draft.asset);

        if (!asset) return null;

        const hasPlatePath = Boolean(
            asset.plate?.trim() &&
                asset.ownerDocumentType?.trim() &&
                asset.ownerDocumentNumber?.trim()
        );

        if (hasPlatePath) return 'plate';

        if (asset.vin?.trim()) return 'vin';

        return null;
    });

    /** A threshold rule needs a lead time; a delta rule has nothing to threshold on. */
    needsThreshold = computed(() => this.selectedCheck()?.kind === 'threshold');

    thresholdLabelKey = computed(() => {
        const checkType = this.selectedCheck()?.checkType;

        if (checkType === 'soat') return 'smartFleet.rules.thresholdDaysSoat';

        if (checkType === 'rtm') return 'smartFleet.rules.thresholdDaysRtm';

        return 'smartFleet.rules.thresholdDays';
    });

    formTitleKey = computed(() =>
        this.editingRuleId() ? 'smartFleet.rules.editRule' : 'smartFleet.rules.addRule'
    );

    canSave = computed(() => {
        const draft = this.draft();

        if (!draft.checkType) return false;

        if (draft.scope === 'asset' && !draft.asset) return false;

        if (draft.scope === 'group' && !draft.group) return false;

        if (draft.frequency === 'custom') {
            const days = Number(draft.intervalDays);

            if (!Number.isFinite(days) || days < 1 || days > 90) return false;
        }

        return true;
    });

    /** Live cron-style preview while editing frequency (anchor = now). */
    draftNextRuns = computed(() => {
        const draft = this.draft();
        const presetDays =
            draft.frequency === 'custom' ? null : FREQUENCY_DAYS[draft.frequency];
        const days =
            draft.frequency === 'custom'
                ? Math.max(1, Number(draft.intervalDays) || 7)
                : (presetDays ?? 7);
        const intervalMs = days * MS_PER_DAY;
        const anchor = Date.now();

        return Array.from({ length: 10 }, (_, index) => ({
            index: index + 1,
            at: new Date(anchor + index * intervalMs),
        }));
    });

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._load(),
            panelClass: 'auth-required-dialog',
        });
    }

    toggleForm(): void {
        this.closeDetail();
        this.showForm.update((open) => !open);

        if (!this.showForm()) {
            this._resetForm();
        }
    }

    openDetail(rule: FleetWatchRule): void {
        this.showForm.set(false);
        this._resetForm();
        this.detailRule.set(rule);
        this.schedule.set(null);
        this.isLoadingSchedule.set(true);

        this._fleetService.getWatchRuleSchedule(rule._id!).subscribe({
            next: (response) => {
                this.schedule.set(response.data ?? null);
                this.isLoadingSchedule.set(false);
            },
            error: (err) => {
                this.isLoadingSchedule.set(false);
                console.error('[SmartFleet] getWatchRuleSchedule error', err);
                this._snackBar.open(
                    this._transloco.translate('smartFleet.rules.scheduleFailed'),
                    undefined,
                    { duration: 5000 }
                );
            },
        });
    }

    closeDetail(): void {
        this.detailRule.set(null);
        this.schedule.set(null);
        this.isLoadingSchedule.set(false);
    }

    editFromDetail(): void {
        const rule = this.detailRule();

        if (!rule) return;

        this.closeDetail();
        this.startEdit(rule);
    }

    intervalLabel(intervalMs?: number): string {
        if (!intervalMs) return '—';

        const hours = Math.round(intervalMs / (60 * 60 * 1000));

        if (hours < 48) {
            return this._transloco.translate('smartFleet.rules.intervalHours', { hours });
        }

        const days = Math.round(hours / 24);

        return this._transloco.translate('smartFleet.rules.intervalDays', { days });
    }

    private _resetForm(): void {
        this.draft.set({ ...EMPTY_DRAFT });
        this.editingRuleId.set(null);
        this.estimate.set(null);
    }

    setScope(scope: RuleDraft['scope']): void {
        this.draft.update((draft) => ({ ...draft, scope, asset: undefined, group: undefined }));
        this._refreshEstimate();
    }

    selectCheck(checkType: FleetCheckType): void {
        const definition = this.availableChecks().find((check) => check.checkType === checkType);

        this.draft.update((draft) => ({
            ...draft,
            checkType,
            thresholdDays: definition?.defaultThresholdDays ?? undefined,
        }));

        this._refreshEstimate();
    }

    setFrequency(frequency: FleetFrequency): void {
        this.draft.update((draft) => ({
            ...draft,
            frequency,
            intervalDays:
                frequency === 'custom' ? draft.intervalDays || 3 : draft.intervalDays,
        }));
        this._refreshEstimate();
    }

    setField<K extends keyof RuleDraft>(field: K, value: RuleDraft[K]): void {
        this.draft.update((draft) => ({ ...draft, [field]: value }));

        if (field === 'asset' || field === 'group' || field === 'intervalDays') {
            this._refreshEstimate();
        }
    }

    apiRequestLabel(check?: FleetAvailableCheck | null): string {
        if (!check?.url) return check?.featureCode || '—';

        return `${(check.method || 'GET').toUpperCase()} ${check.url}`;
    }

    endpointPathLabel(path?: FleetCheckEndpointPath | null): string {
        if (!path?.url) return path?.featureCode || '—';

        return `${(path.method || 'GET').toUpperCase()} ${path.url}`;
    }

    endpointLabelForFeature(featureCode?: string): string {
        if (!featureCode) return '—';

        const check = this.availableChecks().find((entry) => entry.featureCode === featureCode);
        const label = this.apiRequestLabel(check);

        return label === '—' ? featureCode : label;
    }

    sharedCheckLabels(types?: FleetCheckType[]): string {
        if (!types?.length) return '';

        return types
            .map((type) => this._transloco.translate(`smartFleet.checkType.${type}`))
            .join(', ');
    }

    frequencyLabel(rule: { frequency?: FleetFrequency; intervalDays?: number | null }): string {
        const frequency = rule.frequency || 'weekly';
        const base = this._transloco.translate(`smartFleet.frequency.${frequency}`);

        if (frequency === 'custom' && rule.intervalDays) {
            return this._transloco.translate('smartFleet.rules.customFrequencySummary', {
                days: rule.intervalDays,
            });
        }

        return base;
    }

    toggleChannel(channel: FleetChannel): void {
        this.draft.update((draft) => ({
            ...draft,
            channels: draft.channels.includes(channel)
                ? draft.channels.filter((entry) => entry !== channel)
                : [...draft.channels, channel],
        }));
    }

    isChannelSelected(channel: FleetChannel): boolean {
        return this.draft().channels.includes(channel);
    }

    startEdit(rule: FleetWatchRule, event?: Event): void {
        event?.stopPropagation();
        this.closeDetail();

        const assetId =
            typeof rule.asset === 'string' ? rule.asset : rule.asset?._id || undefined;

        this.editingRuleId.set(rule._id!);
        this.draft.set({
            scope: assetId ? 'asset' : rule.group ? 'group' : 'fleet',
            asset: assetId,
            group: rule.group || undefined,
            checkType: rule.checkType,
            frequency: rule.frequency || 'weekly',
            intervalDays: rule.intervalDays || 3,
            thresholdDays: rule.thresholdDays,
            channels: [...(rule.channels || ['email', 'inApp'])],
            emailRecipients: (rule.emailRecipients || []).join(', '),
            webhookUrl: rule.webhookUrl || undefined,
        });
        this.showForm.set(true);
        this._refreshEstimate();
    }

    save(): void {
        if (!this.canSave() || this.isSaving()) return;

        const draft = this.draft();
        const editingId = this.editingRuleId();
        const detailId = this.detailRule()?._id;

        this.isSaving.set(true);

        const rule: FleetWatchRule = {
            checkType: draft.checkType!,
            frequency: draft.frequency,
            channels: draft.channels,
            asset: draft.scope === 'asset' ? draft.asset : null,
            group: draft.scope === 'group' ? draft.group : null,
            intervalDays: draft.frequency === 'custom' ? Number(draft.intervalDays) : null,
            ...(this.needsThreshold() && draft.thresholdDays !== undefined
                ? { thresholdDays: Number(draft.thresholdDays) }
                : {}),
            webhookUrl: draft.webhookUrl || null,
            emailRecipients: draft.emailRecipients
                ? draft.emailRecipients
                      .split(',')
                      .map((value) => value.trim())
                      .filter(Boolean)
                : [],
        };

        const request$ = editingId
            ? this._fleetService.updateWatchRule(editingId, rule)
            : this._fleetService.createWatchRule(rule);

        request$.subscribe({
            next: (response) => {
                this.isSaving.set(false);
                this.showForm.set(false);
                this._resetForm();
                this._snackBar.open(
                    this._transloco.translate(
                        editingId ? 'smartFleet.rules.updated' : 'smartFleet.rules.created'
                    ),
                    undefined,
                    { duration: 3000 }
                );
                this._loadRules(() => {
                    const savedId = editingId || response.data?._id;

                    if (detailId && savedId && detailId === savedId) {
                        const refreshed = this.rules().find((entry) => entry._id === savedId);

                        if (refreshed) this.openDetail(refreshed);
                    }
                });
            },
            error: (err) => {
                this.isSaving.set(false);
                this._reportFailure(
                    editingId ? 'smartFleet.rules.updateFailed' : 'smartFleet.rules.createFailed',
                    err
                );
            },
        });
    }

    toggleRule(rule: FleetWatchRule, event?: Event): void {
        event?.stopPropagation();

        this._fleetService.updateWatchRule(rule._id!, { isActive: !rule.isActive }).subscribe({
            next: () => {
                this._loadRules();

                if (this.detailRule()?._id === rule._id) {
                    this.openDetail({ ...rule, isActive: !rule.isActive });
                }
            },
            error: (err) => this._reportFailure('smartFleet.rules.updateFailed', err),
        });
    }

    async deleteRule(rule: FleetWatchRule, event?: Event): Promise<void> {
        event?.stopPropagation();

        const confirmed = await firstValueFrom(
            this._confirm
                .open({
                    title: this._transloco.translate('smartFleet.rules.deleteTitle'),
                    message: this._transloco.translate('smartFleet.rules.deleteConfirmation', {
                        name: rule.name || rule.checkType,
                    }),
                    actions: {
                        confirm: {
                            label: this._transloco.translate('smartFleet.rules.deleteConfirm'),
                        },
                        cancel: { label: this._transloco.translate('smartFleet.cancel') },
                    },
                })
                .afterClosed()
        );

        if (confirmed !== 'confirmed') return;

        this._fleetService.deleteWatchRule(rule._id!).subscribe({
            next: () => {
                if (this.detailRule()?._id === rule._id) this.closeDetail();

                this._loadRules();
            },
            error: (err) => this._reportFailure('smartFleet.rules.deleteFailed', err),
        });
    }

    scopeLabel(rule: FleetWatchRule): string {
        if (rule.asset) {
            const asset = typeof rule.asset === 'string' ? null : rule.asset;

            return asset?.plate || this._transloco.translate('smartFleet.rules.scopeAsset');
        }

        if (rule.group) return rule.group;

        return this._transloco.translate('smartFleet.rules.scopeFleet');
    }

    private _load(): void {
        this._loadRules(() => this._applyQueryParams());

        this._fleetService.getAvailableChecks('co').subscribe({
            next: (response) => this.availableChecks.set(response.data?.checks ?? []),
            error: (err) => console.error('[SmartFleet] getAvailableChecks error', err),
        });

        this._fleetService.getAssets({ perPage: 200, isActive: true }).subscribe({
            next: (response) => this.assets.set(response.data ?? []),
            error: (err) => console.error('[SmartFleet] getAssets error', err),
        });
    }

    /**
     * Deep-links from the vehicle detail page: create scoped to an asset, or open edit.
     */
    private _applyQueryParams(): void {
        const params = this._route.snapshot.queryParamMap;
        const editId = params.get('edit');
        const assetId = params.get('asset');
        const create = params.get('create');

        if (editId) {
            const rule = this.rules().find((entry) => entry._id === editId);

            if (rule) {
                this.startEdit(rule);

                return;
            }
        }

        if (create === '1' || assetId) {
            this.editingRuleId.set(null);
            this.draft.set({
                ...EMPTY_DRAFT,
                scope: assetId ? 'asset' : 'fleet',
                asset: assetId || undefined,
            });
            this.showForm.set(true);
            this._refreshEstimate();
        }
    }

    private _loadRules(onLoaded?: () => void): void {
        this._fleetService.getWatchRules().subscribe({
            next: () => onLoaded?.(),
            error: (err) => this._reportFailure('smartFleet.rules.loadFailed', err),
        });
    }

    /**
     * Live cost preview. Per-vehicle daily checks add up fast, and bill shock is the fastest
     * way to lose a monitoring subscription, so the number is shown before the rule is saved.
     */
    private _refreshEstimate(): void {
        const draft = this.draft();

        if (!draft.checkType) {
            this.estimate.set(null);

            return;
        }

        this.isEstimating.set(true);

        this._fleetService
            .estimateWatchRule({
                checkType: draft.checkType,
                frequency: draft.frequency,
                ...(draft.frequency === 'custom' && draft.intervalDays
                    ? { intervalDays: Number(draft.intervalDays) }
                    : {}),
                ...(draft.scope === 'asset' && draft.asset ? { asset: draft.asset } : {}),
                ...(draft.scope === 'group' && draft.group ? { group: draft.group } : {}),
            })
            .subscribe({
                next: (response) => {
                    this.estimate.set(response.data);
                    this.isEstimating.set(false);
                },
                error: (err) => {
                    this.isEstimating.set(false);
                    console.error('[SmartFleet] estimateWatchRule error', err);
                },
            });
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
