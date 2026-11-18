import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, effect, ElementRef, inject, OnInit, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    FleetCountryChoice,
    getFleetCountryFlag,
    getFleetCountryPlaceholders,
    mergeFleetCountries,
} from '../fleet-country.util';
import { FleetNavComponent } from '../fleet-nav.component';
import { FleetDialogBackdropTracker, syncModalDialog } from '../fleet-modal-dialog.util';
import {
    FleetAlert,
    FleetAlertDelivery,
    FleetAsset,
    FleetCheckType,
    FleetSnapshot,
    FleetSavedReport,
    FleetWatchRule,
    savedReportsOf,
    SmartFleetService,
} from '../smart-fleet.service';
import { SmartReportService } from 'app/modules/smart-batch/smart-report.service';
import { firstValueFrom } from 'rxjs';
import { fleetReportFileName, pdfBlobFromResponse } from './fleet-vehicle-report.util';

type DetailTab = 'report' | 'pdfs' | 'timeline' | 'alerts' | 'rules' | 'inspect';
type DispatchStatus = 'compliant' | 'expiring' | 'grounded' | 'unchecked';

/** One rendered row of a snapshot's normalized payload. */
interface ReportRow {
    labelKey: string;
    value: string;
    variant: 'ok' | 'warning' | 'critical' | 'neutral';
}

/** A per-check section of the asset report, built from the newest snapshot. */
interface ReportSection {
    checkType: FleetCheckType | string;
    observedAt?: string;
    isSuccessful: boolean;
    error?: string | null;
    rows: ReportRow[];
    listTitle?: string;
    list?: Record<string, unknown>[];
}

interface FieldDef {
    keys: string[];
    labelKey: string;
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const DRIVER_DOCUMENT_TYPES = ['CC', 'CE', 'PA', 'PPT'] as const;
const CO_DOCUMENT_TYPES = ['CC', 'NIT', 'CE', 'TI', 'PA', 'RC'] as const;
const DRIVER_LICENSE_CATEGORIES = ['A2', 'B1', 'B2', 'C1', 'C2', 'C3'] as const;

const ALERT_TYPE_KEY_OVERRIDES: Record<string, string> = {
    fine_amount_changed: 'smartFleet.alerts.type_comparendo_amount_changed',
};

const OK_THRESHOLD_STATUSES: Record<string, string[]> = {
    soat: ['VIGENTE'],
    rtm: ['APROBADA', 'VIGENTE'],
    driver_license: ['ACTIVA', 'VIGENTE'],
};

const CRITICAL_STATUS_VALUES = new Set([
    'VENCIDO',
    'VENCIDA',
    'NO VIGENTE',
    'SUSPENDIDA',
    'SUSPENDIDO',
    'CANCELADA',
    'INACTIVA',
    'RECHAZADA',
]);

const OK_STATUS_VALUES = new Set(['VIGENTE', 'APROBADA', 'ACTIVA', 'ACTIVO']);

/**
 * Fields worth showing per check type, in display order. Supports both flattened fields
 * and `normalized.current.*` structures returned by the backend normalizers.
 */
const FIELD_MAP: Record<string, FieldDef[]> = {
    soat: [
        { keys: ['policyNumber', 'id'], labelKey: 'smartFleet.field.policyNumber' },
        { keys: ['insurer', 'issuer'], labelKey: 'smartFleet.field.insurer' },
        { keys: ['issuedAt'], labelKey: 'smartFleet.field.issuedAt' },
        { keys: ['expiresAt'], labelKey: 'smartFleet.field.expiresAt' },
        { keys: ['status'], labelKey: 'smartFleet.field.status' },
    ],
    rtm: [
        { keys: ['certificateNumber', 'id'], labelKey: 'smartFleet.field.certificateNumber' },
        { keys: ['facility', 'issuer'], labelKey: 'smartFleet.field.facility' },
        { keys: ['issuedAt'], labelKey: 'smartFleet.field.issuedAt' },
        { keys: ['expiresAt'], labelKey: 'smartFleet.field.expiresAt' },
        { keys: ['status'], labelKey: 'smartFleet.field.status' },
    ],
    comparendos: [
        { keys: ['total', 'count'], labelKey: 'smartFleet.field.ticketCount' },
        { keys: ['totalAmount'], labelKey: 'smartFleet.field.totalAmount' },
    ],
    ownership: [
        { keys: ['ownerCount'], labelKey: 'smartFleet.field.ownerCount' },
        { keys: ['primaryOwner'], labelKey: 'smartFleet.field.primaryOwner' },
    ],
    claims: [{ keys: ['total', 'count'], labelKey: 'smartFleet.field.claimCount' }],
    driver_license: [
        { keys: ['fullName'], labelKey: 'smartFleet.field.fullName' },
        { keys: ['driverStatus'], labelKey: 'smartFleet.field.driverStatus' },
        { keys: ['documentNumber', 'id'], labelKey: 'smartFleet.drivers.documentNumber' },
        { keys: ['category'], labelKey: 'smartFleet.field.category' },
        { keys: ['issuedAt'], labelKey: 'smartFleet.field.issuedAt' },
        { keys: ['expiresAt'], labelKey: 'smartFleet.field.expiresAt' },
        { keys: ['status'], labelKey: 'smartFleet.field.status' },
        { keys: ['restrictions'], labelKey: 'smartFleet.field.restrictions' },
    ],
    driver_fines: [
        { keys: ['total', 'count'], labelKey: 'smartFleet.field.ticketCount' },
        { keys: ['totalAmount'], labelKey: 'smartFleet.field.totalAmount' },
    ],
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
        FleetNavComponent,
    ],
    templateUrl: './fleet-asset-detail.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetAssetDetailComponent implements OnInit, AfterViewInit {
    private _fleetService = inject(SmartFleetService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);
    private _reports = inject(SmartReportService);
    private _lastSandboxRevision = 0;
    private _viewReady = signal(false);
    private _editBackdrop = new FleetDialogBackdropTracker();

    @ViewChild('editAssetDialog') private _editAssetDialog?: ElementRef<HTMLDialogElement>;

    assetId = signal<string>('');
    asset = signal<FleetAsset | null>(null);
    snapshots = signal<FleetSnapshot[]>([]);
    alerts = signal<FleetAlert[]>([]);
    rules = signal<FleetWatchRule[]>([]);

    isLoading = signal(false);
    isChecking = signal(false);
    isSaving = signal(false);
    showEditForm = signal(false);
    editDraft = signal<FleetAsset>({ country: 'co', type: 'vehicle', ownerDocumentType: 'CC' });
    countryOptions = signal<FleetCountryChoice[]>(mergeFleetCountries([{ code: 'co', available: true }]));

    readonly coDocumentTypes = CO_DOCUMENT_TYPES;
    readonly driverDocumentTypes = DRIVER_DOCUMENT_TYPES;
    readonly driverLicenseCategories = DRIVER_LICENSE_CATEGORIES;

    readonly allTabs: DetailTab[] = ['report', 'pdfs', 'timeline', 'alerts', 'rules', 'inspect'];
    activeTab = signal<DetailTab>('report');

    isDriver = computed(() => this.asset()?.type === 'driver');

    visibleTabs = computed<DetailTab[]>(() =>
        this.isDriver() ? ['report', 'timeline', 'alerts', 'rules', 'inspect'] : this.allTabs
    );

    driverDocLabel = computed(() => {
        const current = this.asset();

        if (!current?.ownerDocumentNumber) return '-';

        return `${current.ownerDocumentType || 'ID'} ${current.ownerDocumentNumber}`.trim();
    });

    licenseCategory = computed(() => {
        const current = this.asset();
        const metaCat = current?.metadata?.['licenseCategory'];

        if (typeof metaCat === 'string' && metaCat.trim()) return metaCat.trim().toUpperCase();

        const stateCat = current?.lastKnownState?.['driver_license']?.['category'];

        return typeof stateCat === 'string' && stateCat.trim() ? stateCat.trim().toUpperCase() : null;
    });

    assignedPlate = computed(() => {
        const raw = this.asset()?.metadata?.['assignedPlate'];

        return typeof raw === 'string' && raw.trim() ? raw.trim().toUpperCase() : null;
    });

    headerTitle = computed(() => {
        const current = this.asset();

        if (!current) return '-';

        if (current.type === 'driver') {
            return current.nickname?.trim() || this.driverDocLabel();
        }

        return current.plate || current.vin || '-';
    });

    dispatchStatus = computed<DispatchStatus>(() => {
        const current = this.asset();

        if (!current) return 'unchecked';

        const type = current.type === 'driver' ? 'driver' : 'vehicle';
        const state = current.lastKnownState ?? {};
        const thresholdChecks = type === 'driver' ? ['driver_license'] : ['soat', 'rtm'];
        const deltaChecks = type === 'driver' ? ['driver_fines'] : ['comparendos', 'ownership', 'claims'];

        let hasThresholdSignal = false;
        let isGrounded = (current.alertCounts?.critical ?? 0) > 0;
        let isExpiring = (current.alertCounts?.warning ?? 0) > 0;

        for (const checkType of thresholdChecks) {
            const entry = state[checkType];

            if (!entry || typeof entry !== 'object') continue;

            const status = typeof entry.status === 'string' ? entry.status.trim().toUpperCase() : null;
            const okList = OK_THRESHOLD_STATUSES[checkType];
            const hasExpiry = Boolean(entry.expiresAt);

            if (hasExpiry || status) hasThresholdSignal = true;

            if (status && okList && !okList.includes(status)) {
                isGrounded = true;
                continue;
            }

            if (!hasExpiry) continue;

            const timestamp = new Date(String(entry.expiresAt)).getTime();

            if (Number.isNaN(timestamp)) continue;

            const days = Math.floor((timestamp - Date.now()) / MS_PER_DAY);

            if (days < 0) {
                isGrounded = true;
            } else if (days <= 30) {
                isExpiring = true;
            }
        }

        if (type === 'driver' && (state['driver_fines']?.count ?? 0) > 0) isExpiring = true;
        if (type === 'vehicle' && (state['comparendos']?.count ?? 0) > 0) isExpiring = true;

        const hasDeltaSignal = deltaChecks.some((checkType) => Boolean(state[checkType]?.checkedAt));

        if (!hasThresholdSignal && !hasDeltaSignal && !isGrounded && !isExpiring) {
            return 'unchecked';
        }

        if (isGrounded) return 'grounded';
        if (isExpiring) return 'expiring';

        return 'compliant';
    });

    savedReports = computed(() => savedReportsOf(this.asset()));
    downloadingReport = signal<string | null>(null);

    editPlaceholders = computed(() => getFleetCountryPlaceholders(this.editDraft().country));

    canSaveEdit = computed(() => {
        const draft = this.editDraft();

        if (draft.type === 'driver') {
            return Boolean(
                draft.ownerDocumentType?.trim() &&
                    draft.ownerDocumentNumber?.trim() &&
                    draft.nickname?.trim()
            );
        }

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
                        return this._transloco.translate('smartFleet.rules.customFrequencySummary', {
                            days: rule.intervalDays,
                        });
                    }

                    return this._transloco.translate(`smartFleet.frequency.${rule.frequency || 'weekly'}`);
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
                type: this.asset()?.type || 'vehicle',
                plate: this.asset()?.plate,
                ownerDocumentType: this.asset()?.ownerDocumentType,
                ownerDocumentNumber: this.asset()?.ownerDocumentNumber,
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

    constructor() {
        effect(() => {
            const revision = this._fleetService.sandboxRevision();

            if (revision > 0 && revision !== this._lastSandboxRevision) {
                this._lastSandboxRevision = revision;

                if (this.assetId()) {
                    this._load();
                }
            }
        });

        effect(() => {
            const ready = this._viewReady();
            const open = Boolean(this.showEditForm() && this.asset());

            if (!ready) return;

            syncModalDialog(this._editAssetDialog?.nativeElement, open);
        });
    }

    ngAfterViewInit(): void {
        this._viewReady.set(true);
    }

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id') ?? '';

        this.assetId.set(id);
        this._loadCountries();
        this._load();

        if (this._route.snapshot.queryParamMap.get('edit') === '1') {
            this.showEditForm.set(true);
        }
    }

    setActiveTab(tab: DetailTab): void {
        this.activeTab.set(tab);
    }

    onTabKeydown(event: KeyboardEvent): void {
        const tabs = this.visibleTabs();
        const currentIndex = tabs.indexOf(this.activeTab());

        if (currentIndex === -1) return;

        let nextIndex = -1;

        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = tabs.length - 1;

        if (nextIndex === -1) return;

        event.preventDefault();
        const nextTab = tabs[nextIndex];
        this.setActiveTab(nextTab);

        if (typeof document !== 'undefined') {
            const el = document.getElementById(`fleet-detail-tab-${nextTab}`);

            el?.focus();
            el?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
    }

    dispatchBadgeClasses(status: DispatchStatus): string {
        switch (status) {
            case 'compliant':
                return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
            case 'expiring':
                return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
            case 'grounded':
                return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300';
            default:
                return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
        }
    }

    dispatchBadgeIcon(status: DispatchStatus): string {
        switch (status) {
            case 'compliant':
                return 'verified';
            case 'expiring':
                return 'schedule';
            case 'grounded':
                return 'block';
            default:
                return 'hourglass_empty';
        }
    }

    dispatchBadgeKey(status: DispatchStatus): string {
        switch (status) {
            case 'compliant':
                return 'smartFleet.assets.statusCompliant';
            case 'expiring':
                return 'smartFleet.dashboard.readinessExpiringSoon';
            case 'grounded':
                return 'smartFleet.assets.statusGrounded';
            default:
                return 'smartFleet.dashboard.readinessNoData';
        }
    }

    driverDocTypeLabel(type: string): string {
        if (type === 'PPT') return 'PPT';

        return this._transloco.translate(`smartFleet.assets.docType.${type}`);
    }

    alertTitle(alert: FleetAlert): string {
        const key = ALERT_TYPE_KEY_OVERRIDES[alert.type] ?? `smartFleet.alerts.type_${alert.type}`;
        const translated = this._transloco.translate(key);

        return translated && translated !== key ? translated : alert.title;
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

        return `${base} - ${this._transloco.translate('smartFleet.assets.comingSoon')}`;
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
            ownerDocumentType: current.ownerDocumentType || (current.type === 'driver' ? 'CC' : ''),
            ownerDocumentNumber: current.ownerDocumentNumber || '',
            notes: current.notes || '',
            metadata: { ...(current.metadata ?? {}) },
        });
        this.showEditForm.set(true);
    }

    cancelEdit(): void {
        this.showEditForm.set(false);
    }

    onEditDialogNativeClose(): void {
        if (this.showEditForm()) {
            this.showEditForm.set(false);
        }
    }

    onEditDialogPointerDown(event: PointerEvent): void {
        this._editBackdrop.onPointerDown(event, this._editAssetDialog?.nativeElement);
    }

    onEditDialogPointerUp(event: PointerEvent): void {
        if (this._editBackdrop.shouldDismissOnPointerUp(event, this._editAssetDialog?.nativeElement)) {
            this.cancelEdit();
        }
    }

    updateEditDraft(field: keyof FleetAsset, value: string): void {
        this.editDraft.update((draft) => ({ ...draft, [field]: value }));
    }

    editMetadataString(key: string): string {
        const val = this.editDraft().metadata?.[key];

        return typeof val === 'string' ? val : '';
    }

    updateEditMetadata(key: string, value: string): void {
        this.editDraft.update((draft) => {
            const nextMeta = { ...(draft.metadata ?? {}) };
            const trimmed = value.trim();

            if (trimmed) nextMeta[key] = key === 'assignedPlate' ? trimmed.toUpperCase() : trimmed;
            else delete nextMeta[key];

            return { ...draft, metadata: nextMeta };
        });
    }

    setEditCountry(code: string): void {
        const option = this.countryOptions().find((entry) => entry.code === code);

        if (!option?.available) return;

        this.updateEditDraft('country', code);
    }

    saveEdit(event?: Event): void {
        if (event?.currentTarget instanceof HTMLFormElement && !event.currentTarget.checkValidity()) {
            event.currentTarget.reportValidity();
            return;
        }

        if (!this.canSaveEdit() || this.isSaving()) return;

        const draft = this.editDraft();
        const isDriver = draft.type === 'driver';

        this.isSaving.set(true);

        const payload: Partial<FleetAsset> = isDriver
            ? {
                  country: draft.country,
                  nickname: draft.nickname,
                  group: draft.group || null,
                  ownerDocumentType: draft.ownerDocumentType,
                  ownerDocumentNumber: draft.ownerDocumentNumber,
                  notes: draft.notes,
                  metadata: draft.metadata,
              }
            : {
                  country: draft.country,
                  plate: draft.plate,
                  vin: draft.vin,
                  nickname: draft.nickname,
                  group: draft.group || null,
                  ownerDocumentType: draft.ownerDocumentType,
                  ownerDocumentNumber: draft.ownerDocumentNumber,
                  notes: draft.notes,
              };

        this._fleetService.updateAsset(this.assetId(), payload).subscribe({
            next: (response) => {
                this.isSaving.set(false);
                this.showEditForm.set(false);
                this.asset.set(response.data);
                this._snackBar.open(
                    this._transloco.translate(
                        isDriver ? 'smartFleet.drivers.updated' : 'smartFleet.assets.updated'
                    ),
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

                if (String(code).includes('fleet_plan_required')) {
                    this._snackBar
                        .open(
                            this._transloco.translate('smartFleet.assets.checkSkipped.fleet_plan_required'),
                            this._transloco.translate('smartFleet.assets.viewPlans'),
                            { duration: 8000 }
                        )
                        .onAction()
                        .subscribe(() => void this._router.navigate(['/smart-fleet/plans']));
                    return;
                }

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

    reportKey(report: FleetSavedReport): string {
        return `${report.reportId}:${report.rowIndex}`;
    }

    async downloadSavedReport(report: FleetSavedReport): Promise<void> {
        const asset = this.asset();

        if (!asset || this.downloadingReport()) return;

        this.downloadingReport.set(this.reportKey(report));

        try {
            const pdf = await pdfBlobFromResponse(
                await firstValueFrom(this._reports.downloadReport(report.reportId, report.rowIndex))
            );

            if (!pdf) throw new Error('pdf');

            const url = URL.createObjectURL(pdf);
            const anchor = document.createElement('a');

            anchor.href = url;
            anchor.download = fleetReportFileName(asset, report.templateName);
            anchor.click();
            setTimeout(() => URL.revokeObjectURL(url), 2000);
        } catch (err) {
            console.error('[SmartFleet] download saved report error', err);
            this._snackBar.open(this._transloco.translate('smartFleet.assets.reportFailed'), undefined, {
                duration: 4000,
            });
        } finally {
            this.downloadingReport.set(null);
        }
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
                return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
            default:
                return 'bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-300';
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
        if (!value) return '-';

        const date = new Date(value);

        return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString();
    }

    deliverySummary(alert: FleetAlert): string {
        if (!alert.deliveries?.length) {
            return this._transloco.translate('smartFleet.detail.noDeliveries');
        }

        return alert.deliveries.map((delivery) => `${delivery.channel}: ${delivery.status}`).join(', ');
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
                return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
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

        if (value === null || value === undefined) return '-';

        if (typeof value === 'object') return JSON.stringify(value);

        return String(value);
    }

    snapshotSummary(snapshot: FleetSnapshot): string {
        if (snapshot.isSuccessful === false) return '';

        const normalized = (snapshot.normalized ?? {}) as Record<string, unknown>;
        const current =
            normalized['current'] && typeof normalized['current'] === 'object'
                ? (normalized['current'] as Record<string, unknown>)
                : null;

        if (
            snapshot.checkType === 'driver_license' ||
            snapshot.checkType === 'soat' ||
            snapshot.checkType === 'rtm'
        ) {
            const parts: string[] = [];
            const category = normalized['category'] ?? current?.['category'];
            const status = normalized['status'] ?? current?.['status'];
            const expiresAt = normalized['expiresAt'] ?? current?.['expiresAt'];

            if (category) parts.push(String(category));
            if (status) parts.push(String(status));
            if (expiresAt) {
                const date = new Date(String(expiresAt));

                parts.push(Number.isNaN(date.getTime()) ? String(expiresAt) : date.toLocaleDateString());
            }

            return parts.join(' · ');
        }

        if (snapshot.checkType === 'comparendos' || snapshot.checkType === 'driver_fines') {
            const count = Number(normalized['total'] ?? normalized['count'] ?? 0);
            const totalAmount = Number(normalized['totalAmount'] ?? 0);

            if (count === 0) return this._transloco.translate('smartFleet.assets.finesClearChip');

            const finesLabel = this._transloco.translate('smartFleet.assets.finesChip', { count });

            return totalAmount > 0 ? `${finesLabel} · ${totalAmount.toLocaleString()}` : finesLabel;
        }

        return '';
    }

    private _load(): void {
        this.isLoading.set(true);

        this._fleetService.getAsset(this.assetId()).subscribe({
            next: (response) => {
                this.asset.set(response.data);
                this.isLoading.set(false);

                if (response.data?.type === 'driver' && this.activeTab() === 'pdfs') {
                    this.activeTab.set('report');
                }

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
                const snapshots = Array.isArray(payload) ? payload : (payload?.snapshots ?? []);

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
        const assetId = typeof rule.asset === 'string' ? rule.asset : rule.asset?._id || null;

        if (assetId) return this._transloco.translate('smartFleet.rules.scopeAsset');

        if (rule.group) return rule.group;

        return this._transloco.translate('smartFleet.rules.scopeFleet');
    }

    snapshotErrorText(snapshot: FleetSnapshot): string | null {
        const error = snapshot.error;

        if (!error) return null;

        return typeof error === 'string' ? error : error.message || null;
    }

    private _loadAlerts(): void {
        this._fleetService.getAlerts({ asset: this.assetId(), status: 'all', perPage: 50 }).subscribe({
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

    private _variantForField(key: string, value: unknown, checkType: string): ReportRow['variant'] {
        if (key === 'expiresAt') return this._variantForExpiry(value);

        if (key === 'status' || key === 'driverStatus') {
            const upper = String(value).trim().toUpperCase();

            if (CRITICAL_STATUS_VALUES.has(upper)) return 'critical';
            if (OK_STATUS_VALUES.has(upper)) return 'ok';
        }

        if (
            (checkType === 'comparendos' || checkType === 'driver_fines') &&
            (key === 'total' || key === 'count' || key === 'totalAmount')
        ) {
            return Number(value) > 0 ? 'warning' : 'ok';
        }

        return 'neutral';
    }

    private _formatFieldValue(key: string, value: unknown): string {
        if (typeof value === 'object') return JSON.stringify(value);

        if (key === 'issuedAt' || key === 'expiresAt') {
            const date = new Date(String(value));

            if (!Number.isNaN(date.getTime())) return date.toLocaleDateString();
        }

        if (key === 'totalAmount' && typeof value === 'number') {
            return value.toLocaleString();
        }

        return String(value);
    }

    private _buildSection(snapshot: FleetSnapshot): ReportSection {
        const normalized = (snapshot.normalized ?? {}) as Record<string, unknown>;
        const current =
            normalized['current'] && typeof normalized['current'] === 'object'
                ? (normalized['current'] as Record<string, unknown>)
                : null;
        const fields = FIELD_MAP[snapshot.checkType] ?? [];

        const rows: ReportRow[] = [];

        for (const field of fields) {
            let matchedKey = field.keys[0];
            let value: unknown;

            for (const candidateKey of field.keys) {
                const candidate = normalized[candidateKey] ?? current?.[candidateKey];

                if (candidate !== null && candidate !== undefined && candidate !== '') {
                    matchedKey = candidateKey;
                    value = candidate;
                    break;
                }
            }

            if (value === undefined && snapshot.checkType === 'ownership') {
                const owners = Array.isArray(normalized['owners'])
                    ? (normalized['owners'] as Record<string, unknown>[])
                    : [];

                if (matchedKey === 'ownerCount' && owners.length) value = owners.length;
                if (matchedKey === 'primaryOwner' && owners[0]?.['fullName']) value = owners[0]['fullName'];
            }

            if (value === null || value === undefined || value === '') continue;

            rows.push({
                labelKey: field.labelKey,
                value: this._formatFieldValue(matchedKey, value),
                variant: this._variantForField(matchedKey, value, snapshot.checkType),
            });
        }

        const listKey = ['comparendos', 'owners', 'claims', 'items'].find(
            (key) => Array.isArray(normalized[key]) && (normalized[key] as unknown[]).length > 0
        );

        return {
            checkType: snapshot.checkType,
            observedAt: snapshot.observedAt,
            isSuccessful: snapshot.isSuccessful !== false,
            error: this.snapshotErrorText(snapshot),
            rows,
            listTitle: listKey,
            list: listKey ? (normalized[listKey] as Record<string, unknown>[]) : undefined,
        };
    }
}
