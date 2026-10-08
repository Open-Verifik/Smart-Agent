import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { BatchBrowserRunnerService } from 'app/modules/smart-batch/batch-browser-runner.service';
import { BatchStep, SmartBatch, SmartBatchService } from 'app/modules/smart-batch/smart-batch.service';
import { SmartReportService, SmartReportTemplate } from 'app/modules/smart-batch/smart-report.service';
import { ReportBuilderPreviewDataService } from 'app/modules/smart-batch/report-builder-preview-data.service';
import { buildFleetVehicleSample, fleetReportFileName, pdfBlobFromResponse } from './fleet-vehicle-report.util';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    FleetCountryChoice,
    getFleetCountryFlag,
    getFleetCountryPlaceholders,
    mergeFleetCountries,
} from '../fleet-country.util';
import { FleetNavComponent } from '../fleet-nav.component';
import { FleetGroupsBoardComponent } from './fleet-groups-board.component';
import { FleetVehicleIconComponent } from './fleet-vehicle-icon.component';
import {
    FleetAsset,
    FleetAvailableCheck,
    FleetSnapshot,
    SmartFleetService,
} from '../smart-fleet.service';

/** Column order for the import template, matching what the server-side parser expects. */
const IMPORT_HEADERS = ['plate', 'vin', 'nickname', 'group', 'documentType', 'documentNumber'];

type IdentifierMode = 'plate' | 'plateOnly' | 'vin';

/** Document types accepted by the Colombia vehicle lookup. CC is cédula. */
const CO_DOCUMENT_TYPES = ['CC', 'CE', 'TI', 'PA', 'RC'] as const;

const DEFAULT_DRAFT = (): FleetAsset => ({
    country: 'co',
    type: 'vehicle',
    ownerDocumentType: 'CC',
});

@Component({
    selector: 'fleet-assets',
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
        FleetNavComponent,
        FleetGroupsBoardComponent,
        FleetVehicleIconComponent,
    ],
    templateUrl: './fleet-assets.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .fleet-report-menu.mat-mdc-menu-panel {
                max-width: 22rem;
                overflow: hidden;
            }

            .fleet-report-menu-title {
                padding: 12px 16px 8px;
                font-size: 13px;
                font-weight: 600;
                line-height: 1.35;
                white-space: normal;
            }

            .fleet-report-menu-list {
                max-height: 16rem;
                overflow-y: auto;
            }
        `,
    ],
})
export class FleetAssetsComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);
    private _confirm = inject(FuseConfirmationService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _reports = inject(SmartReportService);
    private _batches = inject(SmartBatchService);
    private _browserRunner = inject(BatchBrowserRunnerService);
    private _previewData = inject(ReportBuilderPreviewDataService);

    @ViewChild(FleetGroupsBoardComponent) private _groupsBoard?: FleetGroupsBoardComponent;

    assets = this._fleetService.assets;
    isLoading = this._fleetService.isLoadingAssets;

    private _pagination = this._fleetService.assetsPage;
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

    search = signal('');
    isCreating = signal(false);
    isImporting = signal(false);
    checkingAssetId = signal<string | null>(null);

    showCreateForm = signal(false);
    /** Vehicle whose row menu is assigning a group. */
    groupTarget = signal<FleetAsset | null>(null);
    /** Vehicle whose report menu is open. */
    reportTarget = signal<FleetAsset | null>(null);
    reportTemplates = signal<SmartReportTemplate[]>([]);
    reportingAssetId = signal<string | null>(null);
    /** Report ready to download, keyed by vehicle. Nothing is saved to disk until the user asks. */
    readyReports = signal<Record<string, { reportId: string; templateName?: string }>>({});
    /** When set, the shared form updates this asset instead of creating. */
    editingAssetId = signal<string | null>(null);
    draft = signal<FleetAsset>(DEFAULT_DRAFT());
    identifierMode = signal<IdentifierMode>('plate');
    readonly documentTypes = CO_DOCUMENT_TYPES;
    availableChecks = signal<FleetAvailableCheck[]>([]);

    /** Live + Coming soon countries for the create/import selectors. */
    countryOptions = signal<FleetCountryChoice[]>(mergeFleetCountries([]));
    importCountry = signal('co');

    importRejections = signal<{ rowIndex: number; plate?: string; reason: string }[]>([]);

    draftPlaceholders = computed(() => getFleetCountryPlaceholders(this.draft().country));

    formTitleKey = computed(() =>
        this.editingAssetId() ? 'smartFleet.assets.editAsset' : 'smartFleet.assets.addAsset'
    );

    /**
     * Which monitoring checks the current draft identifiers unlock, with the endpoint
     * that would be called for SOAT/RTM (plate+docs vs VIN).
     */
    unlockedChecks = computed(() => {
        const draft = this.draft();
        const hasPlatePath = Boolean(
            draft.plate?.trim() &&
                draft.ownerDocumentType?.trim() &&
                draft.ownerDocumentNumber?.trim()
        );
        const hasVinPath = Boolean(draft.vin?.trim() && draft.vin!.trim().length >= 5);

        return this.availableChecks().map((check) => {
            const plateReady = Boolean(check.endpoints?.byPlate) && hasPlatePath;
            const vinReady = Boolean(check.endpoints?.byVin) && hasVinPath;
            const simpleReady =
                !check.endpoints?.byPlate &&
                !check.endpoints?.byVin &&
                (check.requires || []).every((field) => {
                    if (field === 'plate') return Boolean(draft.plate?.trim());

                    if (field === 'vin') return hasVinPath;

                    return false;
                });

            const ready = plateReady || vinReady || simpleReady;
            const path = plateReady
                ? check.endpoints?.byPlate
                : vinReady
                  ? check.endpoints?.byVin
                  : check.endpoints?.byPlate || check.endpoints?.byVin || null;

            const request = path?.url
                ? `${(path.method || 'GET').toUpperCase()} ${path.url}`
                : check.url
                  ? `${(check.method || 'GET').toUpperCase()} ${check.url}`
                  : check.featureCode;

            return {
                checkType: check.checkType,
                ready,
                request,
                pathKind: plateReady ? 'plate' : vinReady ? 'vin' : null,
                conditionKey: check.condition?.summaryKey,
            };
        });
    });

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                this._loadCountries();
                this._loadAvailableChecks();
                this._loadReportTemplates();
                this.loadPage(1);

                if (this._route.snapshot.queryParamMap.get('add') === '1') {
                    this.editingAssetId.set(null);
                    this.identifierMode.set('plate');
                    this.draft.set(DEFAULT_DRAFT());
                    this.showCreateForm.set(true);
                }
            },
            panelClass: 'auth-required-dialog',
        });
    }

    private _loadAvailableChecks(): void {
        this._fleetService.getAvailableChecks('co').subscribe({
            next: (response) => this.availableChecks.set(response.data?.checks ?? []),
            error: (err) => console.error('[SmartFleet] getAvailableChecks error', err),
        });
    }

    private _loadReportTemplates(): void {
        this._reports.getTemplates().subscribe({
            next: (templates) => {
                const rank = (template: SmartReportTemplate) => (template.category === 'vehicle' ? 0 : 1);

                this.reportTemplates.set(
                    [...(templates ?? [])].sort(
                        (left, right) => rank(left) - rank(right) || left.name.localeCompare(right.name)
                    )
                );
            },
            error: (err) => console.error('[SmartFleet] getTemplates error', err),
        });
    }

    async generateVehicleReport(template: SmartReportTemplate): Promise<void> {
        const asset = this.reportTarget();

        if (!asset?._id || !template._id || this.reportingAssetId()) return;

        this.reportingAssetId.set(asset._id);
        const notice = this._snackBar.open(this._transloco.translate('smartFleet.assets.reportWorking'));

        try {
            const full = await firstValueFrom(this._reports.getTemplate(template._id));
            const configId = this._configIdOf(full);

            if (!configId) {
                this._snackBar.open(this._transloco.translate('smartFleet.assets.reportNeedsBatch'), undefined, {
                    duration: 4000,
                });
                return;
            }

            const configuration = await firstValueFrom(this._batches.getConfiguration(configId));
            const config = configuration.data;
            const steps = (config?.steps || []).filter((step) => step.enabled !== false);
            const batchName = (asset.nickname || asset.plate || asset.vin || 'Vehículo').slice(0, 150);
            const created = await firstValueFrom(
                this._batches.createSmartBatch({
                    batchConfiguration: configId,
                    name: batchName,
                    rows: [{ inputData: this._batchInputFor(asset, steps) }],
                })
            );
            const batchId = created.data?._id;

            if (!batchId) throw new Error('batch');

            const estimate = await firstValueFrom(this._batches.getBatchEstimate(batchId));

            if (estimate.data?.sufficientCredits === false) {
                this._snackBar.open(this._transloco.translate('smartFleet.assets.reportNeedsCredits'), undefined, {
                    duration: 4000,
                });
                return;
            }

            const started = await firstValueFrom(this._batches.startSmartBatch(batchId));
            const batch = started.data?.rows?.length
                ? started.data
                : (await firstValueFrom(this._batches.getSmartBatch(batchId))).data;
            const status =
                config?.executor === 'queue' ? await this._pollBatch(batchId) : await this._runBatchInBrowser(batch, steps);

            if (status === 'failed') {
                throw new Error(this._transloco.translate('smartFleet.assets.reportNoData'));
            }

            const report = await firstValueFrom(
                this._reports.createReport({
                    template: template._id,
                    smartBatch: batchId,
                    name: batchName,
                })
            );
            if (!report._id) throw new Error('pdf');

            this.readyReports.update((current) => ({
                ...current,
                [asset._id!]: { reportId: report._id!, templateName: template.name },
            }));
            this._snackBar.open(this._transloco.translate('smartFleet.assets.reportPrepared'), undefined, {
                duration: 3000,
            });
        } catch (err) {
            console.error('[SmartFleet] generate report error', err);
            const detail = await this._reportErrorDetail(err);

            this._snackBar.open(detail || this._transloco.translate('smartFleet.assets.reportFailed'), undefined, {
                duration: 4000,
            });
        } finally {
            notice.dismiss();
            this.reportingAssetId.set(null);
        }
    }

    readyReport(asset: FleetAsset): { reportId: string; templateName?: string } | null {
        if (!asset._id) return null;

        return this.readyReports()[asset._id] ?? null;
    }

    async downloadVehicleReport(asset: FleetAsset): Promise<void> {
        const ready = this.readyReport(asset);

        if (!ready || this.reportingAssetId()) return;

        try {
            const pdf = await pdfBlobFromResponse(
                await firstValueFrom(this._reports.downloadReport(ready.reportId, 0))
            );

            if (!pdf) throw new Error('pdf');

            const url = URL.createObjectURL(pdf);
            const anchor = document.createElement('a');

            anchor.href = url;
            anchor.download = fleetReportFileName(asset, ready.templateName);
            anchor.click();
            setTimeout(() => URL.revokeObjectURL(url), 2000);
        } catch (err) {
            console.error('[SmartFleet] download report error', err);
            const detail = await this._reportErrorDetail(err);

            this._snackBar.open(detail || this._transloco.translate('smartFleet.assets.reportFailed'), undefined, {
                duration: 4000,
            });
        }
    }

    async createReportTemplate(): Promise<void> {
        const asset = this.reportTarget();

        if (!asset) return;

        let sample = buildFleetVehicleSample(asset, []);

        if (asset._id) {
            try {
                sample = await this._sampleFor(asset);
            } catch (err) {
                console.error('[SmartFleet] report sample error', err);
            }
        }

        this._previewData.setPendingPreviewData(sample);
        void this._router.navigate(['/smart-batch'], {
            queryParams: {
                step: 'layout',
                intent: 'template',
                templateChoice: 'scratch',
                entities: 'vehicle',
                country: (asset.country || 'co').toLowerCase(),
                mode: 'single',
            },
        });
    }

    private async _reportErrorDetail(err: unknown): Promise<string> {
        if (err instanceof Error && err.message && err.message !== 'pdf' && !err.message.startsWith('Http failure')) {
            return err.message;
        }

        const body = (err as { error?: unknown })?.error;

        if (body instanceof Blob) {
            try {
                const parsed = JSON.parse(await body.text()) as { message?: string };

                return parsed.message || '';
            } catch {
                return '';
            }
        }

        return '';
    }

    private _configIdOf(template: SmartReportTemplate): string | null {
        const linked = template.batchConfiguration;

        if (!linked) return null;

        return typeof linked === 'string' ? linked : linked._id || linked.id || null;
    }

    /** Same plate column the external page resolves from the template's Smart Batch. */
    private _plateFieldFor(steps: BatchStep[]): string {
        const ordered = [...steps].sort((left, right) => left.sequence - right.sequence);

        for (const step of ordered) {
            const feature = typeof step.appFeature === 'object' ? step.appFeature : null;

            for (const dependency of feature?.dependencies || []) {
                if (dependency.field && this._isPlateField(dependency.field)) return dependency.field;
            }

            const mapping = step.inputFieldMapping;

            if (!mapping || typeof mapping !== 'object') continue;

            for (const key of Object.keys(mapping as Record<string, unknown>)) {
                if (this._isPlateField(key)) return key;
            }
        }

        return 'plate';
    }

    private _isPlateField(field: string): boolean {
        const token = field.replace(/[^a-z0-9]/gi, '').toLowerCase();

        return /^(plate|placa|licenseplate|vehicleplate)$/.test(token) || token.includes('placa') || token.endsWith('plate');
    }

    /** One row, like the page: the plate field, plus document or VIN when this vehicle has them. */
    private _batchInputFor(asset: FleetAsset, steps: BatchStep[]): Record<string, string> {
        const plateField = this._plateFieldFor(steps);
        const input: Record<string, string> = {};

        if (asset.plate) {
            input[plateField] = asset.plate;
            if (plateField !== 'plate') input.plate = asset.plate;
        }

        if (asset.ownerDocumentType) input.documentType = asset.ownerDocumentType;
        if (asset.ownerDocumentNumber) input.documentNumber = asset.ownerDocumentNumber;
        if (asset.vin) input.vin = asset.vin;

        return input;
    }

    /** Queue executor: the server runs the steps. Same wait as the page. */
    private async _pollBatch(batchId: string): Promise<string> {
        const started = Date.now();

        while (Date.now() - started < 180_000) {
            const progress = await firstValueFrom(this._batches.getBatchProgress(batchId));
            const status = progress.data?.status;

            if (
                status === 'completed' ||
                status === 'failed' ||
                status === 'cancelled' ||
                progress.data?.pendingRows === 0
            ) {
                return status || 'failed';
            }

            await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        throw new Error(this._transloco.translate('smartFleet.assets.reportStillRunning'));
    }

    /** Browser executor: this tab calls each feature, then writes the row. */
    private async _runBatchInBrowser(batch: SmartBatch, steps: BatchStep[]): Promise<string> {
        let latest = batch;

        await this._browserRunner.runBatch(batch, steps, (next) => {
            latest = next;
        });

        const rows = latest.rows || [];
        const failed = rows.filter((row) => row.status === 'failed').length;

        if (!rows.length || failed === rows.length) return 'failed';

        return failed ? 'partial' : 'completed';
    }

    private async _sampleFor(asset: FleetAsset, steps: BatchStep[] = []) {
        const response = await firstValueFrom(
            this._fleetService.getAssetTimeline(asset._id!, { limit: 40, includeRaw: true })
        );

        return buildFleetVehicleSample(asset, this._snapshotsOf(response.data), steps);
    }

    private _snapshotsOf(
        data: FleetSnapshot[] | { snapshots?: FleetSnapshot[] } | undefined
    ): FleetSnapshot[] {
        if (Array.isArray(data)) return data;

        return data?.snapshots ?? [];
    }

    private _loadCountries(): void {
        this._fleetService.getCountries().subscribe({
            next: (response) => {
                const supported = response.data?.countries ?? [];

                this.countryOptions.set(mergeFleetCountries(supported));
            },
            error: () => {
                // Offline / error: still show Colombia + roadmap so the form stays usable.
                this.countryOptions.set(mergeFleetCountries([{ code: 'co', available: true }]));
            },
        });
    }

    getCountryFlag(country?: string | null): string {
        return getFleetCountryFlag(country);
    }

    countryLabel(code: string): string {
        return this._transloco.translate(`smartFleet.countries.${code}`);
    }

    /** Select option text: flag + name, with Coming soon for roadmap rows. */
    countryOptionLabel(option: FleetCountryChoice): string {
        const base = `${this.getCountryFlag(option.code)} ${this.countryLabel(option.code)}`;

        if (option.available) return base;

        return `${base} — ${this._transloco.translate('smartFleet.assets.comingSoon')}`;
    }

    loadPage(page: number): void {
        this._fleetService.getAssets({ page, search: this.search() || undefined }).subscribe({
            error: (err) => this._reportFailure('smartFleet.assets.loadFailed', err),
        });
    }

    previousPage(): void {
        if (this.canGoPrevious()) this.loadPage(this.page() - 1);
    }

    nextPage(): void {
        if (this.canGoNext()) this.loadPage(this.page() + 1);
    }

    applySearch(): void {
        this.loadPage(1);
    }

    toggleCreateForm(): void {
        if (this.showCreateForm()) {
            this._closeForm();

            return;
        }

        this.editingAssetId.set(null);
        this.identifierMode.set('plate');
        this.draft.set(DEFAULT_DRAFT());
        this.showCreateForm.set(true);
    }

    setIdentifierMode(mode: IdentifierMode): void {
        this.identifierMode.set(mode);

        // Drop the unused identifier instead of sending an empty string.
        // The API rejects "" with "vin is not allowed to be empty".
        this.draft.update((draft) => {
            if (mode === 'vin') {
                const {
                    plate: _plate,
                    ownerDocumentType: _ownerDocumentType,
                    ownerDocumentNumber: _ownerDocumentNumber,
                    ...rest
                } = draft;

                return rest;
            }

            const { vin: _vin, ...withoutVin } = draft;

            if (mode === 'plateOnly') {
                const {
                    ownerDocumentType: _ownerDocumentType,
                    ownerDocumentNumber: _ownerDocumentNumber,
                    ...rest
                } = withoutVin;

                return rest;
            }

            return {
                ...withoutVin,
                ownerDocumentType: withoutVin.ownerDocumentType || 'CC',
            };
        });
    }

    /** Open the shared form populated from an existing vehicle. */
    startEdit(asset: FleetAsset): void {
        const mode: IdentifierMode = asset.vin && !asset.plate
            ? 'vin'
            : asset.plate && !asset.ownerDocumentNumber
              ? 'plateOnly'
              : 'plate';

        this.editingAssetId.set(asset._id!);
        this.identifierMode.set(mode);
        this.draft.set({
            country: asset.country || 'co',
            type: asset.type || 'vehicle',
            plate: asset.plate || '',
            vin: asset.vin || '',
            nickname: asset.nickname || '',
            group: asset.group || '',
            ownerDocumentType: asset.ownerDocumentType || '',
            ownerDocumentNumber: asset.ownerDocumentNumber || '',
            notes: asset.notes || '',
        });
        this.showCreateForm.set(true);

        // Bring the form into view when editing from a lower row.
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    private _closeForm(): void {
        this.showCreateForm.set(false);
        this.editingAssetId.set(null);
        this.identifierMode.set('plate');
        this.draft.set(DEFAULT_DRAFT());
    }

    updateDraft(field: keyof FleetAsset, value: string): void {
        this.draft.update((draft) => ({ ...draft, [field]: value }));
    }

    /** Groups created on this page, plus the vehicle's current group if it is not listed yet. */
    groupOptions(): string[] {
        const names = new Set(this._groupsBoard?.groupNames() ?? []);
        const current = this.draft().group?.trim();

        if (current) names.add(current);

        return [...names].sort((left, right) => left.localeCompare(right));
    }

    setDraftGroup(value: string): void {
        const name = value.trim();

        this.draft.update((draft) => ({
            ...draft,
            group: name || (this.editingAssetId() ? null : undefined),
        }));
    }

    setDraftCountry(code: string): void {
        const option = this.countryOptions().find((entry) => entry.code === code);

        if (!option?.available) return;

        this.updateDraft('country', code);
    }

    setImportCountry(code: string): void {
        const option = this.countryOptions().find((entry) => entry.code === code);

        if (!option?.available) return;

        this.importCountry.set(code);
    }

    canSubmitDraft = computed(() => {
        const draft = this.draft();
        const country = (draft.country || 'co').toLowerCase();

        if (country !== 'co') {
            return Boolean(draft.plate?.trim() || draft.vin?.trim());
        }

        const plate = draft.plate?.trim() || '';
        const vin = draft.vin?.trim() || '';
        const hasPlateOnly = this.identifierMode() === 'plateOnly' && plate.length >= 4;
        const hasPlatePath =
            this.identifierMode() === 'plate' &&
            plate.length >= 4 &&
            Boolean(draft.ownerDocumentType?.trim()) &&
            Boolean(draft.ownerDocumentNumber?.trim());
        const hasVinPath = this.identifierMode() === 'vin' && vin.length >= 5;

        return hasPlateOnly || hasPlatePath || hasVinPath;
    });

    saveAsset(): void {
        if (!this.canSubmitDraft() || this.isCreating()) return;

        const editingId = this.editingAssetId();
        const draft = this.draft();

        this.isCreating.set(true);

        const request$ = editingId
            ? this._fleetService.updateAsset(editingId, {
                  country: draft.country,
                  plate: draft.plate,
                  vin: draft.vin,
                  nickname: draft.nickname,
                  group: draft.group,
                  ownerDocumentType: draft.ownerDocumentType,
                  ownerDocumentNumber: draft.ownerDocumentNumber,
                  notes: draft.notes,
              })
            : this._fleetService.createAsset(draft);

        request$.subscribe({
            next: () => {
                this.isCreating.set(false);
                this._closeForm();
                this._snackBar.open(
                    this._transloco.translate(
                        editingId ? 'smartFleet.assets.updated' : 'smartFleet.assets.created'
                    ),
                    undefined,
                    { duration: 3000 }
                );
                this.loadPage(editingId ? this.page() : 1);
                this._groupsBoard?.reload();
            },
            error: (err) => {
                this.isCreating.set(false);
                this._reportFailure(
                    editingId ? 'smartFleet.assets.updateFailed' : 'smartFleet.assets.createFailed',
                    err
                );
            },
        });
    }

    async deleteAsset(asset: FleetAsset): Promise<void> {
        const confirmed = await firstValueFrom(
            this._confirm
                .open({
                    title: this._transloco.translate('smartFleet.assets.deleteTitle'),
                    message: this._transloco.translate('smartFleet.assets.deleteConfirmation', {
                        plate: asset.plate || asset.vin || '',
                    }),
                    actions: {
                        confirm: {
                            label: this._transloco.translate('smartFleet.assets.deleteConfirm'),
                        },
                        cancel: { label: this._transloco.translate('smartFleet.cancel') },
                    },
                })
                .afterClosed()
        );

        if (confirmed !== 'confirmed') return;

        this._fleetService.deleteAsset(asset._id!).subscribe({
            next: () => {
                this._snackBar.open(this._transloco.translate('smartFleet.assets.deleted'), undefined, {
                    duration: 3000,
                });
                this.loadPage(this.page());
                this._groupsBoard?.reload();
            },
            error: (err) => this._reportFailure('smartFleet.assets.deleteFailed', err),
        });
    }

    toggleActive(asset: FleetAsset): void {
        this._fleetService.updateAsset(asset._id!, { isActive: !asset.isActive }).subscribe({
            next: () => this.loadPage(this.page()),
            error: (err) => this._reportFailure('smartFleet.assets.updateFailed', err),
        });
    }

    /**
     * Run the asset's checks immediately. The server answers with a reason instead of an
     * error when there is nothing to run or nothing to pay with, so surface that verbatim.
     */
    checkNow(asset: FleetAsset): void {
        this.checkingAssetId.set(asset._id!);

        this._fleetService.checkAssetNow(asset._id!).subscribe({
            next: (response) => {
                this.checkingAssetId.set(null);

                const types = response.data?.checkTypes?.length ?? 0;
                const message = response.data?.settled
                    ? this._transloco.translate('smartFleet.assets.checkCompleted', { count: types })
                    : this._skipMessage(response.data?.reason);

                this._snackBar.open(message, undefined, { duration: 5000 });
                this.loadPage(this.page());
            },
            error: (err) => {
                this.checkingAssetId.set(null);

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

                if (key) {
                    this._snackBar.open(
                        this._transloco.translate(`smartFleet.assets.checkSkipped.${key}`),
                        this._transloco.translate('smartFleet.dismiss'),
                        { duration: 7000 }
                    );

                    return;
                }

                this._reportFailure('smartFleet.assets.checkFailed', err);
            },
        });
    }

    /**
     * The server returns a reason string rather than an error when a check cannot run, so
     * only the reasons we have copy for are translated; anything else is shown as-is.
     */
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

    /** Reuses the server-side ingest, so the browser only has to read the file as text. */
    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];

        if (!file) return;

        const extension = file.name.split('.').pop()?.toLowerCase();
        const format = extension === 'xlsx' ? 'xlsx' : extension === 'jsonl' ? 'jsonl' : 'csv';

        const reader = new FileReader();

        reader.onload = () => {
            const content = String(reader.result ?? '');

            this.isImporting.set(true);
            this.importRejections.set([]);

            this._fleetService
                .importAssets({ content, format, country: this.importCountry() })
                .subscribe({
                next: (response) => {
                    this.isImporting.set(false);
                    this.importRejections.set(response.data.rejected ?? []);
                    this._snackBar.open(
                        this._transloco.translate('smartFleet.assets.imported', {
                            imported: response.data.imported,
                            total: response.data.totalRows,
                        }),
                        undefined,
                        { duration: 5000 }
                    );
                    this.loadPage(1);
                    this._groupsBoard?.reload();
                },
                error: (err) => {
                    this.isImporting.set(false);
                    this._reportFailure('smartFleet.assets.importFailed', err);
                },
            });
        };

        // XLSX is binary, so hand the server base64 and let it decode.
        if (format === 'xlsx') reader.readAsDataURL(file);
        else reader.readAsText(file);

        input.value = '';
    }

    downloadTemplate(): void {
        const placeholders = getFleetCountryPlaceholders(this.importCountry());
        const sample = [
            placeholders.plate,
            '',
            'Truck 1',
            'north',
            placeholders.documentType,
            '1032386359',
        ].join(',');
        const csv = `${IMPORT_HEADERS.join(',')}\r\n${sample}`;
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = url;
        link.download = 'fleet-assets-template.csv';
        link.click();

        URL.revokeObjectURL(url);
    }

    openAsset(asset: FleetAsset): void {
        this._router.navigate(['/smart-fleet/assets', asset._id]);
    }

    assignGroup(group: string | null): void {
        const asset = this.groupTarget();

        if (!asset?._id || (asset.group || null) === group) return;

        this._fleetService.updateAsset(asset._id, { group }).subscribe({
            next: () => {
                this._snackBar.open(
                    this._transloco.translate('smartFleet.assets.groupAssigned'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadPage(this.page());
                this._groupsBoard?.reload();
            },
            error: (err) => this._reportFailure('smartFleet.groups.moveFailed', err),
        });
    }

    editRules(asset: FleetAsset): void {
        if (!asset._id) return;

        this._router.navigate(['/smart-fleet/watch-rules'], {
            queryParams: { asset: asset._id },
        });
    }

    alertBadgeClasses(asset: FleetAsset): string {
        if (asset.alertCounts?.critical)
            return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';

        if (asset.alertCounts?.warning)
            return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';

        return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
    }

    openAlertCount(asset: FleetAsset): number {
        const counts = asset.alertCounts;

        return (counts?.critical ?? 0) + (counts?.warning ?? 0) + (counts?.info ?? 0);
    }

    formatDate(value?: string | null): string {
        if (!value) return '—';

        return new Date(value).toLocaleString();
    }

    private _reportFailure(key: string, error: unknown): void {
        const detail = (error as { error?: { message?: string; code?: string } })?.error;
        const code = detail?.code || '';
        const message =
            code.includes('fleet_asset_owner_docs_or_vin_required') ||
            String(detail?.message || '').includes('fleet_asset_owner_docs_or_vin_required')
                ? this._transloco.translate('smartFleet.assets.ownerDocsOrVinRequired')
                : this._transloco.translate(key);

        console.error('[SmartFleet]', key, error);

        this._snackBar.open(
            detail?.message && !code.includes('fleet_asset_owner_docs_or_vin_required')
                ? `${message}: ${detail.message}`
                : message,
            this._transloco.translate('smartFleet.dismiss'),
            { duration: 6000 }
        );
    }
}
