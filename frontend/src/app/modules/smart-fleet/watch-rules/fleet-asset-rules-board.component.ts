import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import {
    FleetAsset,
    FleetAvailableCheck,
    FleetChannel,
    FleetCheckEndpointPath,
    FleetFrequency,
    FleetSnapshot,
    FleetWatchRule,
    SmartFleetService,
    fleetAssetSupportsCheck,
    parseFleetPhones,
} from '../smart-fleet.service';
import { FleetChannelIconComponent, fleetChannelTone } from './fleet-channel-icon.component';

interface MonitorCard {
    ruleId?: string;
    check: FleetAvailableCheck;
    frequency: FleetFrequency;
    intervalDays: number;
    thresholdDays: number | null;
    channels: FleetChannel[];
    emailRecipients: string;
    webhookUrl: string;
    smsRecipients: string;
    whatsappRecipients: string;
    /** Library rules can stay blank and be assigned to a compatible vehicle later. */
    assignAssetId: string;
}

interface RuleTestView {
    checkType: string;
    tone: 'ok' | 'warn' | 'error';
    message: string;
    rows: { label: string; value: string }[];
}

@Component({
    selector: 'fleet-asset-rules-board',
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
        FleetChannelIconComponent,
    ],
    templateUrl: './fleet-asset-rules-board.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetAssetRulesBoardComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);

    private _assetId = '';

    @Input()
    set assetId(value: string) {
        if (!value || value === this._assetId) return;

        this._assetId = value;
        this._load();
    }

    get assetId(): string {
        return this._assetId;
    }

    private _groupName = '';

    @Input()
    set groupName(value: string) {
        if (!value || value === this._groupName) return;

        this._groupName = value;
        this._load();
    }

    get groupName(): string {
        return this._groupName;
    }

    /** Rules saved with no vehicle, so they can be assigned afterwards. */
    @Input() library = false;

    ngOnInit(): void {
        if (!this._assetId && !this._groupName) this._load();
    }

    asset = signal<FleetAsset | null>(null);
    /** Vehicles currently in the group this rule covers. */
    covered = signal<FleetAsset[]>([]);
    /** Vehicles a test can run against when the rule is not tied to one asset. */
    testPool = signal<FleetAsset[]>([]);
    testAssetId = signal('');
    testingCheck = signal<string | null>(null);
    testResult = signal<RuleTestView | null>(null);
    /** Group or fleet rules that already apply to the open vehicle. */
    inherited = signal<FleetWatchRule[]>([]);
    checks = signal<FleetAvailableCheck[]>([]);
    monitored = signal<MonitorCard[]>([]);
    pendingDelete = signal<string[]>([]);
    isLoading = signal(true);
    isSaving = signal(false);

    readonly frequencies: FleetFrequency[] = ['daily', 'weekly', 'biweekly', 'monthly', 'custom'];
    readonly channelOptions: FleetChannel[] = ['email', 'webhook', 'inApp', 'sms', 'whatsapp'];

    channelTone(channel: FleetChannel, selected: boolean): string {
        return selected ? 'bg-white/20 text-white' : fleetChannelTone(channel);
    }

    available = computed(() => {
        const used = new Set(this.monitored().map((card) => card.check.checkType));

        return this.checks().filter((check) => !used.has(check.checkType));
    });

    canSave = computed(() => {
        if (this.isSaving() || this.isLoading()) return false;

        if (!this.monitored().length && !this.pendingDelete().length) return false;

        return this.monitored().every((card) => this._cardIsValid(card));
    });

    mode(): 'asset' | 'group' | 'fleet' | 'library' {
        if (this.library) return 'library';

        if (this.assetId) return 'asset';

        if (this.groupName) return 'group';

        return 'fleet';
    }

    linkedGroup(): string | null {
        if (this.groupName) return this.groupName;

        return this.asset()?.group || null;
    }

    plateLabel(): string {
        const asset = this.asset();

        return asset?.plate || asset?.vin || '—';
    }

    endpointLabel(check: FleetAvailableCheck): string {
        const path = this._pathForAsset(check);

        if (path?.url) return `${(path.method || 'GET').toUpperCase()} ${path.url}`;

        if (check.url) return `${(check.method || 'GET').toUpperCase()} ${check.url}`;

        return check.featureCode;
    }

    vehiclesFor(check: FleetAvailableCheck): FleetAsset[] {
        return this.testPool().filter((asset) => fleetAssetSupportsCheck(check, asset));
    }

    setAssignAsset(card: MonitorCard, assetId: string): void {
        this._patch(card, { assignAssetId: assetId || '' });
    }

    blockedReason(check: FleetAvailableCheck): string {
        const asset = this.asset();
        const plateOnly = Boolean(asset?.plate?.trim()) && !asset?.ownerDocumentNumber?.trim() && !asset?.vin?.trim();
        const needsDocument = (check.requiresByPlate || check.endpoints?.byPlate?.requires || []).includes(
            'ownerDocumentNumber'
        );

        if (plateOnly && needsDocument) {
            return this._transloco.translate('smartFleet.rules.notReadyPlateOnly');
        }

        return this._transloco.translate('smartFleet.rules.notReady');
    }

    isReady(check: FleetAvailableCheck): boolean {
        if (!this.assetId) return true;

        const asset = this.asset();

        if (!asset) return false;

        return fleetAssetSupportsCheck(check, asset);
    }

    addCheck(check: FleetAvailableCheck): void {
        if (!check?.checkType || !this.isReady(check)) return;

        if (this.monitored().some((card) => card.check.checkType === check.checkType)) return;

        this.monitored.update((cards) => [...cards, this._cardFromCheck(check)]);
    }

    removeCard(card: MonitorCard): void {
        if (card.ruleId) {
            this.pendingDelete.update((ids) =>
                ids.includes(card.ruleId!) ? ids : [...ids, card.ruleId!]
            );
        }

        this.monitored.update((cards) => cards.filter((entry) => entry !== card));
    }

    setFrequency(card: MonitorCard, frequency: FleetFrequency): void {
        this._patch(card, { frequency });
    }

    setIntervalDays(card: MonitorCard, value: number): void {
        this._patch(card, { intervalDays: Number(value) });
    }

    setThresholdDays(card: MonitorCard, value: number): void {
        this._patch(card, { thresholdDays: Number(value) });
    }

    toggleChannel(card: MonitorCard, channel: FleetChannel): void {
        const channels = card.channels.includes(channel)
            ? card.channels.filter((entry) => entry !== channel)
            : [...card.channels, channel];

        this._patch(card, { channels });
    }

    setEmail(card: MonitorCard, value: string): void {
        this._patch(card, { emailRecipients: value });
    }

    setWebhook(card: MonitorCard, value: string): void {
        this._patch(card, { webhookUrl: value });
    }

    setSms(card: MonitorCard, value: string): void {
        this._patch(card, { smsRecipients: value });
    }

    setWhatsapp(card: MonitorCard, value: string): void {
        this._patch(card, { whatsappRecipients: value });
    }

    canTest(card: MonitorCard): boolean {
        return (
            this._cardIsValid(card) &&
            !this.testingCheck() &&
            !this.isSaving() &&
            Boolean(this._testVehicle()?._id)
        );
    }

    /**
     * Persist this card, then run the vehicle's checks now. The server only executes
     * saved rules, so the test writes this one before calling check-now.
     */
    test(card: MonitorCard): void {
        const vehicle = this._testVehicle();

        if (!vehicle?._id || !this.canTest(card)) return;

        if (!fleetAssetSupportsCheck(card.check, vehicle)) {
            this.testResult.set({
                checkType: card.check.checkType,
                tone: 'warn',
                message: this._transloco.translate('smartFleet.rules.notReadyPlateOnly'),
                rows: [],
            });

            return;
        }

        this.testingCheck.set(card.check.checkType);
        this.testResult.set(null);

        const request$ = card.ruleId
            ? this._fleetService.updateWatchRule(card.ruleId, this._payload(card))
            : this._fleetService.createWatchRule(this._payload(card));

        request$
            .pipe(
                switchMap((saved) => {
                    const id = saved.data?._id;

                    if (id && card.ruleId !== id) {
                        card.ruleId = id;
                        this.monitored.update((cards) => [...cards]);
                    }

                    return this._fleetService.checkAssetNow(vehicle._id!);
                }),
                switchMap((check) =>
                    this._fleetService
                        .getAssetTimeline(vehicle._id!, { checkType: card.check.checkType, limit: 1 })
                        .pipe(
                            map((timeline) => ({ check, snapshot: this._firstSnapshot(timeline) })),
                            catchError(() => of({ check, snapshot: null as FleetSnapshot | null }))
                        )
                )
            )
            .subscribe({
                next: ({ check, snapshot }) => {
                    this.testingCheck.set(null);
                    this._presentTest(card, vehicle, check.data, snapshot);
                },
                error: (err) => {
                    this.testingCheck.set(null);
                    console.error('[SmartFleet] test rule error', err);
                    this.testResult.set({
                        checkType: card.check.checkType,
                        tone: 'error',
                        message: this._testErrorMessage(err),
                        rows: [],
                    });
                },
            });
    }

    save(): void {
        if (!this.canSave()) return;

        const creates = this.monitored()
            .filter((card) => !card.ruleId)
            .map((card) => this._fleetService.createWatchRule(this._payload(card)));
        const updates = this.monitored()
            .filter((card) => card.ruleId)
            .map((card) => this._fleetService.updateWatchRule(card.ruleId!, this._payload(card)));
        const deletes = this.pendingDelete().map((id) => this._fleetService.deleteWatchRule(id));
        const requests = [...creates, ...updates, ...deletes];

        if (!requests.length) return;

        this.isSaving.set(true);

        forkJoin(requests.length ? requests : [of(null)]).subscribe({
            next: () => {
                this.isSaving.set(false);
                this._snackBar.open(this._transloco.translate('smartFleet.rules.boardSaved'), undefined, {
                    duration: 3000,
                });
                this._load();
            },
            error: (err) => {
                this.isSaving.set(false);
                console.error('[SmartFleet] save asset rules error', err);
                this._snackBar.open(this._transloco.translate('smartFleet.rules.boardFailed'), undefined, {
                    duration: 5000,
                });
            },
        });
    }

    private _load(): void {
        this.isLoading.set(true);

        const rulesRequest = this.assetId
            ? this._fleetService.listWatchRules({ asset: this.assetId })
            : this.groupName
              ? this._fleetService.listWatchRules({ group: this.groupName })
              : this._fleetService.listWatchRules();

        forkJoin({
            asset: this.assetId ? this._fleetService.getAsset(this.assetId) : of(null),
            checks: this._fleetService.getAvailableChecks('co'),
            rules: rulesRequest,
            fleet: this.mode() === 'asset' ? of(null) : this._fleetService.listAssets(),
        }).subscribe({
            next: ({ asset, checks, rules, fleet }) => {
                const catalog = checks.data?.checks ?? [];
                const current = asset?.data ?? null;

                this.asset.set(current);
                this.checks.set(catalog);
                this.pendingDelete.set([]);
                this.monitored.set(
                    (rules.data ?? [])
                        .filter((rule) => this._ruleMatchesScope(rule))
                        .map((rule) => this._cardFromRule(rule, catalog))
                );
                const pool = this.assetId
                    ? []
                    : (fleet?.data ?? []).filter((entry) =>
                          this.groupName ? entry.group === this.groupName : true
                      );

                this.testPool.set(pool);
                this.covered.set(this.groupName ? pool : []);

                if (!pool.some((entry) => entry._id === this.testAssetId())) {
                    this.testAssetId.set(pool[0]?._id ?? '');
                }
                this.inherited.set([]);
                this.isLoading.set(false);

                const inheritedGroup = !this.groupName ? current?.group : null;

                if (inheritedGroup) this._loadInherited(inheritedGroup);
            },
            error: (err) => {
                this.isLoading.set(false);
                console.error('[SmartFleet] load asset rules error', err);
                this._snackBar.open(this._transloco.translate('smartFleet.rules.boardFailed'), undefined, {
                    duration: 5000,
                });
            },
        });
    }

    private _loadInherited(group: string): void {
        this._fleetService.listWatchRules({ group }).subscribe({
            next: (response) => {
                this.inherited.set(
                    (response.data ?? []).filter((rule) => {
                        const asset = rule.asset;
                        const hasAsset = Boolean(asset && (typeof asset === 'string' ? asset : asset._id));

                        return !hasAsset && rule.group === group;
                    })
                );
            },
            error: (err) => console.error('[SmartFleet] inherited group rules error', err),
        });
    }

    private _ruleMatchesScope(rule: FleetWatchRule): boolean {
        if (rule.unassigned) return this.library;

        if (this.library) return false;

        if (this.assetId) return this._ruleBelongsToAsset(rule);

        const asset = rule.asset;
        const hasAsset = Boolean(asset && (typeof asset === 'string' ? asset : asset._id));

        if (hasAsset) return false;

        if (this.groupName) return rule.group === this.groupName;

        return !rule.group;
    }

    private _ruleBelongsToAsset(rule: FleetWatchRule): boolean {
        const asset = rule.asset;

        if (!asset) return false;

        if (typeof asset === 'string') return asset === this.assetId;

        return asset._id === this.assetId;
    }

    private _cardFromCheck(check: FleetAvailableCheck): MonitorCard {
        return {
            check,
            frequency: 'weekly',
            intervalDays: 7,
            thresholdDays: check.defaultThresholdDays,
            channels: ['inApp'],
            emailRecipients: '',
            webhookUrl: '',
            smsRecipients: '',
            whatsappRecipients: '',
            assignAssetId: '',
        };
    }

    private _cardFromRule(rule: FleetWatchRule, catalog: FleetAvailableCheck[]): MonitorCard {
        const check = catalog.find((entry) => entry.checkType === rule.checkType) ?? {
            checkType: rule.checkType,
            featureCode: rule.featureCode || rule.checkType,
            kind: rule.kind || 'delta',
            defaultThresholdDays: rule.thresholdDays ?? null,
            defaultSeverity: rule.severity || 'info',
        };

        return {
            ruleId: rule._id,
            check,
            frequency: rule.frequency || 'weekly',
            intervalDays: rule.intervalDays || 7,
            thresholdDays: rule.thresholdDays ?? check.defaultThresholdDays,
            channels: [...(rule.channels || ['inApp'])],
            emailRecipients: (rule.emailRecipients || []).join(', '),
            webhookUrl: rule.webhookUrl || '',
            smsRecipients: (rule.smsRecipients || []).join(', '),
            whatsappRecipients: (rule.whatsappRecipients || []).join(', '),
            assignAssetId: '',
        };
    }

    private _payload(card: MonitorCard): FleetWatchRule {
        const assignedId = this.mode() === 'library' ? card.assignAssetId : '';

        return {
            checkType: card.check.checkType,
            frequency: card.frequency,
            channels: card.channels,
            asset: this.mode() === 'asset' ? this.assetId : assignedId || null,
            group: this.mode() === 'group' ? this.groupName : null,
            unassigned: this.mode() === 'library' && !assignedId,
            intervalDays: card.frequency === 'custom' ? Number(card.intervalDays) : null,
            ...(card.check.kind === 'threshold' && card.thresholdDays !== null
                ? { thresholdDays: Number(card.thresholdDays) }
                : {}),
            emailRecipients: card.channels.includes('email')
                ? card.emailRecipients
                      .split(',')
                      .map((value) => value.trim())
                      .filter(Boolean)
                : [],
            webhookUrl: card.channels.includes('webhook') ? card.webhookUrl.trim() || null : null,
            smsRecipients: card.channels.includes('sms') ? parseFleetPhones(card.smsRecipients) : [],
            whatsappRecipients: card.channels.includes('whatsapp')
                ? parseFleetPhones(card.whatsappRecipients)
                : [],
        };
    }

    private _testVehicle(): FleetAsset | null {
        if (this.assetId) return this.asset();

        return this.testPool().find((entry) => entry._id === this.testAssetId()) ?? null;
    }

    private _presentTest(
        card: MonitorCard,
        vehicle: FleetAsset,
        check: { settled?: boolean; reason?: string | null; checkTypes?: string[] } | undefined,
        snapshot: FleetSnapshot | null
    ): void {
        const plate = vehicle.plate || vehicle.vin || '—';
        const rows = this._snapshotRows(snapshot);
        const failed = snapshot?.isSuccessful === false;
        const settled = Boolean(check?.settled);
        const recent = check?.reason === 'no_due_rules' && rows.length > 0;

        if (failed) {
            this.testResult.set({
                checkType: card.check.checkType,
                tone: 'error',
                message:
                    (typeof snapshot?.error === 'string' ? snapshot.error : snapshot?.error?.message) ||
                    this._transloco.translate('smartFleet.rules.testFailed'),
                rows,
            });

            return;
        }

        if (settled || recent) {
            this.testResult.set({
                checkType: card.check.checkType,
                tone: settled ? 'ok' : 'warn',
                message: this._transloco.translate(settled ? 'smartFleet.rules.testOk' : 'smartFleet.rules.testRecent', {
                    plate,
                }),
                rows,
            });

            return;
        }

        this.testResult.set({
            checkType: card.check.checkType,
            tone: 'warn',
            message: this._skipMessage(check?.reason),
            rows,
        });
    }

    private _firstSnapshot(timeline: {
        data: FleetSnapshot[] | { snapshots?: FleetSnapshot[] };
    }): FleetSnapshot | null {
        const payload = timeline.data;

        if (Array.isArray(payload)) return payload[0] ?? null;

        return payload?.snapshots?.[0] ?? null;
    }

    private _snapshotRows(snapshot: FleetSnapshot | null): { label: string; value: string }[] {
        const normalized = snapshot?.normalized ?? {};
        const rows: { label: string; value: string }[] = [];

        for (const [label, value] of Object.entries(normalized)) {
            if (rows.length >= 5) break;

            if (value === null || value === undefined || value === '') continue;

            if (typeof value === 'object') continue;

            rows.push({ label, value: String(value) });
        }

        return rows;
    }

    private _skipMessage(reason?: string | null): string {
        if (!reason) return this._transloco.translate('smartFleet.assets.checkQueued');

        const known = [
            'no_active_rules',
            'no_due_rules',
            'insufficient_credits',
            'client_inactive',
            'missing_identifiers',
        ];

        return known.includes(reason)
            ? this._transloco.translate(`smartFleet.assets.checkSkipped.${reason}`)
            : reason;
    }

    private _testErrorMessage(err: unknown): string {
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

        return key
            ? this._transloco.translate(`smartFleet.assets.checkSkipped.${key}`)
            : this._transloco.translate('smartFleet.rules.testFailed');
    }

    private _cardIsValid(card: MonitorCard): boolean {
        if (!card.channels.length) return false;

        if (card.frequency === 'custom') {
            const days = Number(card.intervalDays);

            if (!Number.isFinite(days) || days < 1 || days > 90) return false;
        }

        if (card.channels.includes('email') && !card.emailRecipients.trim()) return false;

        if (card.channels.includes('webhook') && !card.webhookUrl.trim()) return false;

        if (card.channels.includes('sms') && card.smsRecipients.trim() && !parseFleetPhones(card.smsRecipients).length) {
            return false;
        }

        if (
            card.channels.includes('whatsapp') &&
            card.whatsappRecipients.trim() &&
            !parseFleetPhones(card.whatsappRecipients).length
        ) {
            return false;
        }

        return true;
    }

    private _patch(card: MonitorCard, patch: Partial<MonitorCard>): void {
        Object.assign(card, patch);
        this.monitored.update((cards) => [...cards]);
    }

    private _pathForAsset(check: FleetAvailableCheck): FleetCheckEndpointPath | null {
        const asset = this.asset();
        const hasPlate = Boolean(
            asset?.plate?.trim() &&
                asset?.ownerDocumentType?.trim() &&
                asset?.ownerDocumentNumber?.trim()
        );

        if (hasPlate && check.endpoints?.byPlate) return check.endpoints.byPlate;

        if (asset?.vin?.trim() && check.endpoints?.byVin) return check.endpoints.byVin;

        return check.endpoints?.byPlate || check.endpoints?.byVin || null;
    }
}
