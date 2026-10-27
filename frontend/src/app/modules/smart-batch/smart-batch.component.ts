import { CommonModule } from '@angular/common';
import { Component, computed, HostListener, inject, OnDestroy, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoDirective, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { take } from 'rxjs';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { getPresetStepCount } from './batch-required-fields.util';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { ReportTemplateThumbComponent } from './report-template-thumb.component';
import { getCountryFlag as flagForCountry } from './smart-batch-country.util';
import { SmartBatchInputModeService } from './smart-batch-input-mode.service';
import { BatchConfiguration, SmartBatchExecutor, SmartBatchService } from './smart-batch.service';
import { BatchConfigurationRef, SampleReportData, SmartReportService, SmartReportTemplate, templateLayerZ } from './smart-report.service';
import { SmartTemplateTransferService, TemplateImportError } from './smart-template-transfer.service';

type WorkspaceConfigCard =
    | { kind: 'owned'; id: string; config: BatchConfiguration }
    | { kind: 'fromTemplate'; id: string; template: SmartReportTemplate };

@Component({
    selector: 'smart-batch',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoDirective,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        ReportPreviewComponent,
        ReportTemplateThumbComponent,
    ],
    templateUrl: './smart-batch.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SmartBatchComponent implements OnInit, OnDestroy {
    private _smartBatchService = inject(SmartBatchService);
    private _smartReportService = inject(SmartReportService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _transloco = inject(TranslocoService);
    private _authGate = inject(AuthRequiredGateService);
    private _inputModeService = inject(SmartBatchInputModeService);
    private _snackBar = inject(MatSnackBar);
    private _confirm = inject(FuseConfirmationService);
    private _transfer = inject(SmartTemplateTransferService);

    exportingTemplateId = signal<string | null>(null);
    isImportingTemplate = signal(false);

    configurations = this._smartBatchService.configurations;
    isLoading = this._smartBatchService.isLoading;

    private _configPagination = this._smartBatchService.configurationsPage;
    configPage = computed(() => this._configPagination().page);
    configPages = computed(() => this._configPagination().pages);
    configTotal = computed(() => this._configPagination().total);
    configRangeStart = computed(() => {
        const state = this._configPagination();
        return state.total === 0 ? 0 : (state.page - 1) * state.perPage + 1;
    });
    configRangeEnd = computed(() => {
        const state = this._configPagination();
        return Math.min(state.page * state.perPage, state.total);
    });
    canGoPreviousConfigPage = computed(() => this.configPage() > 1 && !this.isLoading());
    canGoNextConfigPage = computed(() => this.configPage() < this.configPages() && !this.isLoading());

    activeTab = signal<'configurations' | 'templates'>('configurations');
    templates = this._smartReportService.templates;
    isLoadingTemplates = this._smartReportService.isLoading;
    isCloningPreset = signal(false);
    isModeDialogOpen = signal(false);
    previewTemplate = signal<SmartReportTemplate | null>(null);
    previewLoading = signal(false);
    previewData = computed<Record<string, any>>(() => this._sampleFromTemplate(this.previewTemplate()));
    private _previewGen = 0;

    systemTemplates = computed(() =>
        this.templates().filter((t) => t.type === 'System').sort((a, b) => {
            const cat = (a.category ?? '').localeCompare(b.category ?? '');
            if (cat !== 0) return cat;
            return (a.tier ?? '').localeCompare(b.tier ?? '');
        })
    );

    clientTemplates = computed(() =>
        this.templates().filter((t) => t.type !== 'System')
    );

    /** System templates that still need a client Smart Batch (not cloned yet). */
    private _pendingTemplateBatches = computed(() => {
        const clonedKeys = new Set(
            this.clientTemplates()
                .map((template) => template.clonedFromSystemKey)
                .filter((key): key is string => Boolean(key))
        );
        return this.systemTemplates().filter(
            (template) =>
                this.isSystemPresetAvailable(template) &&
                Boolean(template.systemKey) &&
                !clonedKeys.has(template.systemKey as string)
        );
    });

    /** Own configs plus Smart Batches that come with system templates, in one list. */
    workspaceConfigs = computed((): WorkspaceConfigCard[] => {
        const fromTemplates = this._pendingTemplateBatches().map((template) => ({
            kind: 'fromTemplate' as const,
            id: template.systemKey || template._id || template.name,
            template,
        }));
        const owned = this.configurations()
            .map((config) => ({
                kind: 'owned' as const,
                id: config._id ?? config.id ?? '',
                config,
            }))
            .filter((card) => card.id);
        return [...fromTemplates, ...owned];
    });

    ngOnInit() {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                const tab = this._route.snapshot.queryParamMap.get('tab');
                if (tab === 'templates') {
                    this.activeTab.set('templates');
                }
                this._route.queryParamMap.subscribe((params) => {
                    const queryTab = params.get('tab');
                    this.activeTab.set(queryTab === 'templates' ? 'templates' : 'configurations');
                });
                this._loadLandingData();
            },
            panelClass: 'auth-required-dialog',
        });
    }

    ngOnDestroy(): void {
        this.closeTemplatePreview();
    }

    @HostListener('document:keydown.escape')
    onEscapePreview(): void {
        if (this.previewTemplate()) this.closeTemplatePreview();
    }

    openTemplatePreview(template: SmartReportTemplate): void {
        const gen = ++this._previewGen;
        this.previewTemplate.set(template);
        this.previewLoading.set(true);

        const id = template._id;
        if (!id) {
            this._showPreview(template, gen);
            return;
        }

        this._smartReportService.getTemplate(id).subscribe({
            next: (full) => this._showPreview(full ?? template, gen),
            error: () => this._showPreview(template, gen),
        });
    }

    closeTemplatePreview(): void {
        this._previewGen += 1;
        this.previewTemplate.set(null);
        this.previewLoading.set(false);
    }

    private _showPreview(template: SmartReportTemplate, gen: number): void {
        if (gen !== this._previewGen) return;
        this.previewTemplate.set(template);
        this.previewLoading.set(false);
    }

    previewLayerZ(template: SmartReportTemplate): Record<string, number> {
        return templateLayerZ(template);
    }

    private _sampleFromTemplate(template: SmartReportTemplate | null): Record<string, any> {
        const sample: SampleReportData = template?.sampleData ?? {};
        return {
            batchName: sample.batchName || template?.name || '',
            rowIndex: sample.rowIndex ?? 0,
            inputData: sample.inputData ?? {},
            results: sample.results ?? {},
            errors: sample.errors,
            report: sample.report,
        };
    }

    private _loadLandingData(): void {
        this._smartBatchService.getConfigurations().subscribe({
            error: (err) => console.error('[SmartBatch] getConfigurations error', err),
        });
        this._smartReportService.getTemplates().subscribe({
            error: (err) => console.error('[SmartBatch] getTemplates error', err),
        });
    }

    setActiveTab(tab: 'configurations' | 'templates') {
        this.activeTab.set(tab);
        const current = this._route.snapshot.queryParamMap.get('tab');
        const wanted = tab === 'templates' ? 'templates' : null;
        if ((current || null) === wanted) return;
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { tab: wanted },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }

    previousConfigPage() {
        if (!this.canGoPreviousConfigPage()) return;
        this._loadConfigPage(this.configPage() - 1);
    }

    nextConfigPage() {
        if (!this.canGoNextConfigPage()) return;
        this._loadConfigPage(this.configPage() + 1);
    }

    private _loadConfigPage(page: number): void {
        this._smartBatchService.getConfigurations({ page }).subscribe({
            error: (err) => console.error('[SmartBatch] getConfigurations error', err),
        });
    }

    createConfiguration() {
        this._router.navigate(['/smart-batch/create'], { queryParams: { from: 'guide' } });
    }

    createBlankTemplate(): void {
        this._router.navigate(['/smart-batch', 'guide', 'country'], { queryParams: { intent: 'report' } });
    }

    useSystemTemplate(template: SmartReportTemplate, event: Event) {
        event.stopPropagation();
        if (!template.systemKey) return;

        this._openUseTemplateDialog(template, (mode) => {
            this._cloneAndNavigate(template.systemKey!, mode);
        });
    }

    /** System templates stay read-only. This clones one and opens that copy in the editor. */
    editSystemTemplateCopy(template: SmartReportTemplate, event: Event): void {
        event.stopPropagation();
        const systemKey = template.systemKey;
        if (!systemKey || !this.isSystemPresetAvailable(template) || this.isCloningPreset()) return;

        this.closeTemplatePreview();
        this.isCloningPreset.set(true);
        this._smartBatchService.cloneSystemPreset(systemKey).subscribe({
            next: (res) => {
                this.isCloningPreset.set(false);
                const configId = res.data.batchConfiguration._id ?? res.data.batchConfiguration.id;
                const templateId = res.data.template?._id ?? '';
                if (!templateId) {
                    this._snackBar.open(
                        this._transloco.translate('smartBatchSystemPresets.cloneFailed'),
                        undefined,
                        { duration: 4000 }
                    );
                    return;
                }

                this._smartBatchService.getConfigurations().subscribe();
                this._smartReportService.getTemplates().subscribe();

                if (res.data.reused) {
                    this._snackBar.open(
                        this._transloco.translate('smartBatchSystemPresets.openingCopy'),
                        undefined,
                        { duration: 3500 }
                    );
                }

                void this._router.navigate(['/smart-batch', 'guide', 'layout'], {
                    queryParams: {
                        templateId,
                        intent: 'template',
                        templateChoice: 'mine',
                        ...(configId ? { configId } : {}),
                    },
                });
            },
            error: (err) => {
                this.isCloningPreset.set(false);
                console.error('[SmartBatch] cloneSystemPreset for edit error', err);
                this._snackBar.open(
                    this._transloco.translate('smartBatchSystemPresets.cloneFailed'),
                    undefined,
                    { duration: 4000 }
                );
            },
        });
    }

    openWorkspaceConfig(card: WorkspaceConfigCard): void {
        if (card.kind === 'fromTemplate') {
            if (!card.template.systemKey) return;
            this._cloneAndNavigate(card.template.systemKey, 'dashboard');
            return;
        }
        this.openDashboard(card.id);
    }

    workspaceConfigName(card: WorkspaceConfigCard): string {
        return card.kind === 'fromTemplate' ? this.templateTitle(card.template) : card.config.name;
    }

    workspaceConfigDescription(card: WorkspaceConfigCard): string {
        if (card.kind === 'fromTemplate') {
            return this.templateDescription(card.template);
        }
        return card.config.description ?? '';
    }

    workspaceConfigCountry(card: WorkspaceConfigCard): string | undefined {
        return card.kind === 'fromTemplate' ? card.template.country : card.config.country;
    }

    workspaceConfigSteps(card: WorkspaceConfigCard): number {
        return card.kind === 'fromTemplate' ? this.getStepCount(card.template) : card.config.steps.length;
    }

    workspaceConfigInput(card: WorkspaceConfigCard): string {
        return card.kind === 'fromTemplate' ? 'csv' : card.config.inputFormat;
    }

    workspaceConfigOutput(card: WorkspaceConfigCard): string {
        return card.kind === 'fromTemplate' ? 'xlsx' : card.config.outputFormat;
    }

    workspaceConfigStrategy(card: WorkspaceConfigCard): string {
        return card.kind === 'fromTemplate' ? 'sequential' : card.config.mergeStrategy;
    }

    workspaceConfigExecutor(card: WorkspaceConfigCard): SmartBatchExecutor | undefined {
        return card.kind === 'fromTemplate' ? 'featureRunner' : card.config.executor;
    }

    workspaceConfigActive(card: WorkspaceConfigCard): boolean {
        return card.kind === 'fromTemplate' ? true : card.config.isActive !== false;
    }

    useClientTemplate(template: SmartReportTemplate, event: Event) {
        event.stopPropagation();

        const configId = this.resolveBatchConfigRef(template.batchConfiguration).id;
        if (!configId) {
            this._snackBar.open(
                this._transloco.translate('smartBatchSystemPresets.unlinkedTemplate'),
                undefined,
                { duration: 4000 }
            );
            return;
        }

        this._openUseTemplateDialog(template, (mode) => {
            this._navigateForMode(configId, mode);
        });
    }

    private _openUseTemplateDialog(
        template: SmartReportTemplate,
        onMode: (mode: 'single' | 'batch') => void
    ): void {
        if (this.isCloningPreset() || this.isModeDialogOpen()) return;

        this.isModeDialogOpen.set(true);

        this._inputModeService
            .openModeDialog({ template, context: 'useTemplate' })
            .pipe(take(1))
            .subscribe((mode) => {
                this.isModeDialogOpen.set(false);
                if (!mode) return;
                onMode(mode);
            });
    }

    private _navigateForMode(configId: string, mode: 'single' | 'batch'): void {
        if (mode === 'single') {
            this._router.navigate(['/smart-batch', configId, 'quick-validate']);
            return;
        }

        this._router.navigate(['/smart-batch', configId, 'batch', 'new']);
    }

    private _cloneAndNavigate(systemKey: string, mode: 'single' | 'batch' | 'dashboard'): void {
        if (this.isCloningPreset()) return;

        this.isCloningPreset.set(true);
        this._smartBatchService.cloneSystemPreset(systemKey).subscribe({
            next: (res) => {
                this.isCloningPreset.set(false);
                const configId = res.data.batchConfiguration._id ?? res.data.batchConfiguration.id;
                if (!configId) return;

                if (res.data.reused) {
                    this._snackBar.open(
                        this._transloco.translate('smartBatchSystemPresets.reusedExisting'),
                        undefined,
                        { duration: 3500 }
                    );
                }

                this._smartBatchService.getConfigurations().subscribe();
                this._smartReportService.getTemplates().subscribe();

                if (mode === 'dashboard') {
                    this.openDashboard(configId);
                    return;
                }

                this._navigateForMode(configId, mode);
            },
            error: (err) => {
                this.isCloningPreset.set(false);
                console.error('[SmartBatch] cloneSystemPreset error', err);
                this._snackBar.open(
                    this._transloco.translate('smartBatchSystemPresets.cloneFailed'),
                    undefined,
                    { duration: 4000 }
                );
            },
        });
    }

    deleteConfiguration(id: string, event: Event) {
        event.stopPropagation();

        this._openDeleteDialog('smartBatchLanding.deleteConfigConfirmation').subscribe((result) => {
            if (result !== 'confirmed') return;

            this._smartBatchService.deleteConfiguration(id).subscribe(() => {
                const page = this.configurations().length === 0 ? Math.max(1, this.configPage() - 1) : this.configPage();
                this._loadConfigPage(page);
            });
        });
    }

    deleteTemplate(id: string, event: Event) {
        event.stopPropagation();

        this._openDeleteDialog('smartBatchLanding.deleteConfirmation').subscribe((result) => {
            if (result !== 'confirmed') return;

            this._smartReportService.deleteTemplate(id).subscribe();
        });
    }

    async exportTemplate(template: SmartReportTemplate, event: Event): Promise<void> {
        event.stopPropagation();
        const id = template._id;
        if (!id || this.exportingTemplateId()) return;

        this.exportingTemplateId.set(id);

        try {
            this._transfer.downloadExport(await this._transfer.buildExport(id));
            this._snackBar.open(this._transloco.translate('smartBatchLanding.exportDone'), undefined, { duration: 3000 });
        } catch (error) {
            console.error('[SmartBatch] template export error', error);
            this._snackBar.open(this._transloco.translate('smartBatchLanding.exportFailed'), undefined, { duration: 4000 });
        } finally {
            this.exportingTemplateId.set(null);
        }
    }

    async importTemplate(event: Event): Promise<void> {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file || this.isImportingTemplate()) return;

        this.isImportingTemplate.set(true);

        try {
            const data = await this._transfer.readImportFile(file);
            const result = await this._transfer.importFile(data, {
                templateNames: this.templates().map((item) => item.name ?? ''),
                configurationNames: this.configurations().map((item) => item.name ?? ''),
                suffix: this._transloco.translate('smartBatchLanding.importSuffix'),
            });

            this._smartBatchService.getConfigurations({ page: this.configPage() }).subscribe();
            this._smartReportService.getTemplates().subscribe();
            this.setActiveTab('templates');

            const messageKey = result.securityDisabled ? 'smartBatchLanding.importDoneNoPassword' : 'smartBatchLanding.importDone';
            this._snackBar.open(
                this._transloco.translate(messageKey, { name: result.template.name }),
                undefined,
                { duration: result.securityDisabled ? 7000 : 4000 }
            );
        } catch (error) {
            console.error('[SmartBatch] template import error', error);
            const code = error instanceof TemplateImportError ? error.code : 'createFailed';
            const codes = error instanceof TemplateImportError ? error.detail.join(', ') : '';
            this._snackBar.open(
                this._transloco.translate(`smartBatchLanding.importError_${code}`, { codes }),
                undefined,
                { duration: 7000 }
            );
        } finally {
            this.isImportingTemplate.set(false);
        }
    }

    private _openDeleteDialog(messageKey: string) {
        return this._confirm
            .open({
                title: this._transloco.translate('smartBatchLanding.deleteTitle'),
                message: this._transloco.translate(messageKey),
                actions: {
                    confirm: { label: this._transloco.translate('smartBatchLanding.deleteConfirm') },
                    cancel: { label: this._transloco.translate('smartBatchLanding.deleteCancel') },
                },
            })
            .afterClosed();
    }

    openTemplateEditor(template: SmartReportTemplate, event: Event) {
        event.stopPropagation();
        if (template.type === 'System') return;

        const templateId = template._id ?? '';
        if (!templateId) return;

        const configId = this.resolveBatchConfigRef(template.batchConfiguration).id;
        void this._router.navigate(['/smart-batch', 'guide', 'layout'], {
            queryParams: {
                templateId,
                intent: 'template',
                ...(configId ? { configId } : {}),
            },
        });
    }

    resolveBatchConfigRef(
        ref: string | BatchConfiguration | BatchConfigurationRef | null | undefined
    ): { id: string | null; name: string | null } {
        if (!ref) {
            return { id: null, name: null };
        }

        const id = this._toConfigIdString(typeof ref === 'string' ? ref : (ref._id ?? ref.id));
        if (!id) {
            return { id: null, name: null };
        }

        const populatedName = typeof ref === 'object' ? ref.name ?? null : null;
        const config = this.configurations().find((c) => this._toConfigIdString(c._id ?? c.id) === id);

        return {
            id,
            name: populatedName ?? config?.name ?? null,
        };
    }

    getConfigName(
        configRef: string | BatchConfiguration | BatchConfigurationRef | null | undefined
    ): string {
        const resolved = this.resolveBatchConfigRef(configRef);
        return resolved.name ?? resolved.id ?? '';
    }

    private _toConfigIdString(value: unknown): string | null {
        if (value == null) {
            return null;
        }

        if (typeof value === 'string') {
            return value;
        }

        if (typeof value === 'object') {
            const record = value as { _id?: unknown; id?: unknown; toString?: () => string };
            const nestedId = record._id ?? record.id;

            if (nestedId != null && nestedId !== value) {
                return this._toConfigIdString(nestedId);
            }

            if (typeof record.toString === 'function') {
                const asString = record.toString();
                if (asString && asString !== '[object Object]') {
                    return asString;
                }
            }
        }

        return null;
    }

    templateTitle(template: SmartReportTemplate): string {
        if (template.nameKey) {
            return this._transloco.translate(template.nameKey);
        }
        return template.name;
    }

    templateDescription(template: SmartReportTemplate): string {
        if (template.descriptionKey) {
            return this._transloco.translate(template.descriptionKey);
        }
        return template.description ?? '';
    }

    getStepCount(template: SmartReportTemplate): number {
        return getPresetStepCount(template);
    }

    getCategoryIcon(category?: string): string {
        const map: Record<string, string> = {
            citizen: 'person',
            company: 'business',
            vehicle: 'directions_car',
        };
        return map[category ?? ''] ?? 'description';
    }

    getTierLabel(tier?: string): string {
        if (tier === 'comprehensive') {
            return this._transloco.translate('smartBatchSystemPresets.comprehensive');
        }
        return this._transloco.translate('smartBatchSystemPresets.essential');
    }

    executorBadgeKey(executor?: SmartBatchExecutor): string {
        if (executor === 'queue') return 'createBatchConfig.runModeAsync';
        return 'createBatchConfig.runModeSync';
    }

    executorBadgeClasses(executor?: SmartBatchExecutor): string {
        if (executor === 'queue') {
            return 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300';
        }
        return 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/30 dark:text-indigo-300';
    }

    editConfiguration(id: string, event: Event) {
        event.stopPropagation();
        this._router.navigate(['/smart-batch/edit', id]);
    }

    openDashboard(id: string) {
        if (!id) return;
        this._router.navigateByUrl(`/smart-batch/${id}`);
    }

    getCategoryLabel(category?: string): string {
        const map: Record<string, string> = {
            citizen: this._transloco.translate('smartBatchSystemPresets.citizen'),
            company: this._transloco.translate('smartBatchSystemPresets.company'),
            vehicle: this._transloco.translate('smartBatchSystemPresets.vehicle'),
        };
        return map[category ?? ''] ?? category ?? '';
    }

    getCountryFlag(country?: string): string {
        return flagForCountry(country);
    }

    isSystemPresetAvailable(template: SmartReportTemplate): boolean {
        return Boolean(template.systemKey) && this.getStepCount(template) > 0;
    }
}
