import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    FleetCountryChoice,
    getFleetCountryFlag,
    getFleetCountryPlaceholders,
    mergeFleetCountries,
} from '../fleet-country.util';
import {
    FleetAsset,
    FleetAvailableCheck,
    SmartFleetService,
} from '../smart-fleet.service';

/** Column order for the import template, matching what the server-side parser expects. */
const IMPORT_HEADERS = ['plate', 'vin', 'nickname', 'group', 'documentType', 'documentNumber'];

type IdentifierMode = 'plate' | 'vin';

const DEFAULT_DRAFT = (): FleetAsset => ({ country: 'co', type: 'vehicle' });

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
    ],
    templateUrl: './fleet-assets.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetAssetsComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);
    private _confirm = inject(FuseConfirmationService);
    private _router = inject(Router);

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
    /** When set, the shared form updates this asset instead of creating. */
    editingAssetId = signal<string | null>(null);
    draft = signal<FleetAsset>(DEFAULT_DRAFT());
    identifierMode = signal<IdentifierMode>('plate');
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
                this.loadPage(1);
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

        if (mode === 'plate') {
            this.updateDraft('vin', '');
        } else {
            this.draft.update((draft) => ({
                ...draft,
                plate: '',
                ownerDocumentType: '',
                ownerDocumentNumber: '',
            }));
        }
    }

    /** Open the shared form populated from an existing vehicle. */
    startEdit(asset: FleetAsset): void {
        const mode: IdentifierMode =
            asset.vin && !asset.ownerDocumentNumber ? 'vin' : 'plate';

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
        const hasPlatePath =
            plate.length >= 4 &&
            Boolean(draft.ownerDocumentType?.trim()) &&
            Boolean(draft.ownerDocumentNumber?.trim());
        const hasVinPath = vin.length >= 5;

        return hasPlatePath || hasVinPath;
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
