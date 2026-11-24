import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    computed,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    signal,
    viewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoDirective, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { take } from 'rxjs';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { DemoRelatedDocsSectionComponent } from '../smart-enroll/demos/shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../smart-enroll/demos/shared/demo-related-docs-section.types';
import { batchStepFeatureId, batchStepLabel, orderedBatchSteps } from './batch-config-steps.util';
import { getPresetStepCount } from './batch-required-fields.util';
import {
    getSmartBatchRoutePrefix,
    PreviewRunTarget,
    resolveBatchConfigReference,
    resolvePreviewRunTarget,
    toEntityIdString,
} from './preview-run-target.util';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { ReportTemplateThumbComponent } from './report-template-thumb.component';
import { normalizeReportThemeId } from './report-theme/report-theme.model';
import { getCountryFlag as flagForCountry } from './smart-batch-country.util';
import { SmartBatchInputModeService } from './smart-batch-input-mode.service';
import { AppFeature, BatchConfiguration, SmartBatchExecutor, SmartBatchService } from './smart-batch.service';
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
        DemoRelatedDocsSectionComponent,
    ],
    templateUrl: './smart-batch.component.html',
    styleUrl: './smart-batch.component.scss',
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
    private _sanitizer = inject(DomSanitizer);
    private _cdr = inject(ChangeDetectorRef);

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
    availableFeatures = signal<AppFeature[]>([]);
    isCloningPreset = signal(false);
    isModeDialogOpen = signal(false);
    previewDialogRef = viewChild<ElementRef<HTMLDialogElement>>('previewDialog');
    previewTemplate = signal<SmartReportTemplate | null>(null);
    previewSourceConfig = signal<BatchConfiguration | null>(null);
    previewLoading = signal(false);
    previewHtmlDoc = signal<SafeHtml | null>(null);
    previewRunMode = signal<'single' | 'batch' | null>(null);
    previewRunError = signal<string | null>(null);
    previewData = computed<Record<string, any>>(() => this._sampleFromTemplate(this.previewTemplate()));
    previewRunTarget = computed<PreviewRunTarget | null>(() => {
        const template = this.previewTemplate();
        if (!template) return null;
        return resolvePreviewRunTarget({
            template,
            sourceConfig: this.previewSourceConfig(),
            configurations: this.configurations(),
        });
    });
    previewCountry = computed<string | undefined>(
        () => this.previewSourceConfig()?.country ?? this.previewTemplate()?.country
    );
    private _previewGen = 0;
    private _previewPointerDownOutside = false;

    relatedDocs(): DemoRelatedDocItem[] {
        return [
            {
                badge: 'GUIDE',
                badgeMuted: true,
                title: this._transloco.translate('smartBatchLanding.relatedDocs.overviewTitle'),
                description: this._transloco.translate('smartBatchLanding.relatedDocs.overviewDesc'),
                href: 'https://docs.verifik.co/services/identity-validation',
            },
            {
                badge: 'GUIDE',
                badgeMuted: true,
                title: this._transloco.translate('smartBatchLanding.relatedDocs.backgroundTitle'),
                description: this._transloco.translate('smartBatchLanding.relatedDocs.backgroundDesc'),
                href: 'https://docs.verifik.co/services/background-check',
            },
            {
                badge: 'GUIDE',
                badgeMuted: true,
                title: this._transloco.translate('smartBatchLanding.relatedDocs.vehicleTitle'),
                description: this._transloco.translate('smartBatchLanding.relatedDocs.vehicleDesc'),
                href: 'https://docs.verifik.co/services/vehicle-validation',
            },
            {
                badge: 'GUIDE',
                badgeMuted: true,
                title: this._transloco.translate('smartBatchLanding.relatedDocs.businessTitle'),
                description: this._transloco.translate('smartBatchLanding.relatedDocs.businessDesc'),
                href: 'https://docs.verifik.co/services/business-validation',
            },
            {
                badge: 'POST',
                title: this._transloco.translate('smartBatchLanding.relatedDocs.webhooksTitle'),
                description: this._transloco.translate('smartBatchLanding.relatedDocs.webhooksDesc'),
                href: 'https://docs.verifik.co/resources/webhooks',
            },
            {
                badge: 'GET',
                title: this._transloco.translate('smartBatchLanding.relatedDocs.appFeaturesTitle'),
                description: this._transloco.translate('smartBatchLanding.relatedDocs.appFeaturesDesc'),
                href: 'https://docs.verifik.co/resources/app-features',
            },
        ];
    }

    systemTemplates = computed(() =>
        this.templates().filter((t) => t.type === 'System').sort((a, b) => {
            const aThemed = normalizeReportThemeId(a.reportTheme) ? 0 : 1;
            const bThemed = normalizeReportThemeId(b.reportTheme) ? 0 : 1;
            if (aThemed !== bThemed) return aThemed - bThemed;
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
                const defaultTab = this._route.snapshot.data['defaultTab'] as 'configurations' | 'templates' | undefined;
                const tab = this._route.snapshot.queryParamMap.get('tab');
                if (tab === 'templates' || (!tab && defaultTab === 'templates')) {
                    this.activeTab.set('templates');
                }
                this._route.queryParamMap.subscribe((params) => {
                    const queryTab = params.get('tab');
                    if (queryTab === 'templates') {
                        this.activeTab.set('templates');
                    } else if (queryTab === 'configurations') {
                        this.activeTab.set('configurations');
                    } else if (defaultTab) {
                        this.activeTab.set(defaultTab);
                    } else {
                        this.activeTab.set('configurations');
                    }
                });
                this._loadLandingData();
            },
            panelClass: 'auth-required-dialog',
        });
    }

    ngOnDestroy(): void {
        this._closePreviewDialogImmediate();
    }

    openTemplatePreview(
        template: SmartReportTemplate,
        sourceConfig: BatchConfiguration | null = null
    ): void {
        const gen = ++this._previewGen;
        this.previewTemplate.set(template);
        this.previewSourceConfig.set(sourceConfig);
        this.previewRunMode.set(null);
        this.previewRunError.set(null);
        this.previewHtmlDoc.set(null);
        this.previewLoading.set(true);
        this._cdr.detectChanges();
        this._openPreviewDialogElement();

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
        if (this.previewRunMode()) return;
        this._closePreviewDialogImmediate();
    }

    onPreviewDialogCancel(event: Event): void {
        if (this.previewRunMode()) {
            event.preventDefault();
        }
    }

    onPreviewDialogClose(): void {
        const dialog = this.previewDialogRef()?.nativeElement;
        if (dialog) {
            dialog.returnValue = '';
            if (dialog.open) return;
        }
        this._previewPointerDownOutside = false;
        if (this.previewTemplate()) {
            this._resetPreviewState();
        }
    }

    onPreviewDialogPointerDown(event: PointerEvent): void {
        if (this._supportsNativeClosedBy() || this.previewRunMode()) {
            this._previewPointerDownOutside = false;
            return;
        }
        const dialog = this.previewDialogRef()?.nativeElement;
        this._previewPointerDownOutside = dialog ? this._isPointerOutsideDialog(event, dialog) : false;
    }

    onPreviewDialogPointerUp(event: PointerEvent): void {
        if (this._supportsNativeClosedBy() || this.previewRunMode()) {
            this._previewPointerDownOutside = false;
            return;
        }
        const dialog = this.previewDialogRef()?.nativeElement;
        const shouldClose =
            this._previewPointerDownOutside && Boolean(dialog && this._isPointerOutsideDialog(event, dialog));
        this._previewPointerDownOutside = false;
        if (shouldClose && dialog?.open) {
            dialog.close();
        }
    }

    runFromPreview(mode: 'single' | 'batch', event: Event): void {
        event.stopPropagation();
        if (this.previewRunMode() || this.isCloningPreset()) return;

        const target = this.previewRunTarget();
        if (!target) return;

        this.previewRunError.set(null);

        if (target.kind === 'config') {
            this._closePreviewDialogImmediate();
            this._navigateForMode(target.configId, mode);
            return;
        }

        if (target.kind !== 'systemPreset') return;

        const runGen = this._previewGen;
        this.previewRunMode.set(mode);
        this._smartBatchService.cloneSystemPreset(target.systemKey).subscribe({
            next: (res) => {
                if (runGen !== this._previewGen) return;
                const configId = res.data.batchConfiguration._id ?? res.data.batchConfiguration.id;
                if (!configId) {
                    this.previewRunMode.set(null);
                    this.previewRunError.set(
                        this._transloco.translate('smartBatchSystemPresets.cloneFailed')
                    );
                    return;
                }

                this._smartBatchService.getConfigurations().subscribe();
                this._smartReportService.getTemplates().subscribe();

                this._closePreviewDialogImmediate();

                if (res.data.reused) {
                    this._snackBar.open(
                        this._transloco.translate('smartBatchSystemPresets.reusedExisting'),
                        undefined,
                        { duration: 3500 }
                    );
                }

                this._navigateForMode(configId, mode);
            },
            error: (err) => {
                if (runGen !== this._previewGen) return;
                this.previewRunMode.set(null);
                console.error('[SmartBatch] cloneSystemPreset from preview error', err);
                this.previewRunError.set(
                    this._transloco.translate('smartBatchSystemPresets.cloneFailed')
                );
            },
        });
    }

    editPreviewTemplate(template: SmartReportTemplate, event: Event): void {
        event.stopPropagation();
        if (this.previewRunMode() || this.isCloningPreset()) return;
        if (template.type === 'System') {
            this.editSystemTemplateCopy(template, event);
            return;
        }
        this._closePreviewDialogImmediate();
        this.openTemplateEditor(template, event);
    }

    getPreviewSingleIcon(template: SmartReportTemplate): string {
        const icons: Record<string, string> = {
            citizen: 'person_search',
            company: 'business',
            vehicle: 'directions_car',
        };
        if (template.category && icons[template.category]) {
            return icons[template.category];
        }
        const key = template.clonedFromSystemKey ?? template.systemKey ?? '';
        if (key.includes('.vehicle.')) return 'directions_car';
        if (key.includes('.company.')) return 'business';
        return 'person_search';
    }

    private _openPreviewDialogElement(): void {
        const dialog = this.previewDialogRef()?.nativeElement;
        if (!dialog || dialog.open) return;
        dialog.returnValue = '';
        if (typeof dialog.showModal === 'function') {
            dialog.showModal();
        }
    }

    private _closePreviewDialogImmediate(): void {
        const dialog = this.previewDialogRef()?.nativeElement;
        this._previewPointerDownOutside = false;
        this._resetPreviewState();
        if (dialog?.open) {
            dialog.returnValue = '';
            dialog.close();
        }
    }

    private _resetPreviewState(): void {
        this._previewGen += 1;
        this.previewTemplate.set(null);
        this.previewSourceConfig.set(null);
        this.previewHtmlDoc.set(null);
        this.previewLoading.set(false);
        this.previewRunMode.set(null);
        this.previewRunError.set(null);
    }

    private _supportsNativeClosedBy(): boolean {
        return typeof HTMLDialogElement !== 'undefined' && 'closedBy' in HTMLDialogElement.prototype;
    }

    private _isPointerOutsideDialog(event: PointerEvent, dialog: HTMLDialogElement): boolean {
        const rect = dialog.getBoundingClientRect();
        return (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        );
    }

    private _showPreview(template: SmartReportTemplate, gen: number): void {
        if (gen !== this._previewGen) return;
        this.previewTemplate.set(template);
        this.previewHtmlDoc.set(null);
        if (normalizeReportThemeId(template.reportTheme)) {
            this._smartReportService
                .previewHtml(template, template.sampleData ?? {}, { preview: true })
                .pipe(take(1))
                .subscribe({
                    next: (html) => {
                        if (gen !== this._previewGen) return;
                        this.previewHtmlDoc.set(this._sanitizer.bypassSecurityTrustHtml(html));
                        this.previewLoading.set(false);
                    },
                    error: () => {
                        if (gen !== this._previewGen) return;
                        this.previewLoading.set(false);
                    },
                });
            return;
        }
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
        this._smartBatchService.getAvailableFeatures().subscribe({
            next: (res) => this.availableFeatures.set(res.data ?? []),
            error: (err) => console.error('[SmartBatch] getAvailableFeatures error', err),
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
        this._router.navigate(['/smart-reports', 'builder', 'country'], { queryParams: { intent: 'report' } });
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

    workspaceConfigEndpointLabels(card: WorkspaceConfigCard): string[] {
        const catalog = this.availableFeatures();
        const isEs = (this._transloco.getActiveLang() || '').toLowerCase().startsWith('es');

        if (card.kind === 'fromTemplate') {
            const presetSteps = [...(card.template.presetSteps ?? [])].sort(
                (a, b) => (a.sequence ?? 0) - (b.sequence ?? 0)
            );
            return presetSteps.map((s, idx) => {
                const match = catalog.find((f) => f.code === s.appFeatureCode || f._id === s.appFeatureCode);
                if (match) {
                    return (isEs ? match.nameES || match.name : match.name || match.nameES) || match.code;
                }
                return s.appFeatureCode ? s.appFeatureCode.replace(/_/g, ' ') : `Step ${idx + 1}`;
            });
        }

        const steps = orderedBatchSteps(card.config.steps);
        return steps.map((step) => {
            const featureObj = typeof step.appFeature === 'object' ? step.appFeature : null;
            if (featureObj) {
                return (
                    (isEs ? featureObj.nameES || featureObj.name : featureObj.name || featureObj.nameES) ||
                    featureObj.code ||
                    batchStepLabel(step)
                );
            }
            const id = batchStepFeatureId(step);
            const match = id ? catalog.find((f) => f._id === id || f.code === id) : undefined;
            if (match) {
                return (isEs ? match.nameES || match.name : match.name || match.nameES) || match.code;
            }
            return batchStepLabel(step);
        });
    }

    workspaceConfigLinkedTemplate(card: WorkspaceConfigCard): SmartReportTemplate | null {
        if (card.kind === 'fromTemplate') {
            return card.template;
        }
        const configId = this._toConfigIdString(card.config._id ?? card.config.id);
        const preferredId = this._toConfigIdString(card.config.preferredReportTemplate);
        const allTemplates = this.templates();

        if (preferredId) {
            const byPreferred = allTemplates.find((t) => this._toConfigIdString(t._id) === preferredId);
            if (byPreferred) return byPreferred;
        }
        if (configId) {
            const byConfig = allTemplates.find(
                (t) => t.type !== 'System' && this.resolveBatchConfigRef(t.batchConfiguration).id === configId
            );
            if (byConfig) return byConfig;
        }
        return null;
    }

    openConfigTemplatePreview(card: WorkspaceConfigCard, event: Event): void {
        event.stopPropagation();
        const tpl = this.workspaceConfigLinkedTemplate(card);
        if (!tpl) return;
        this.openTemplatePreview(tpl, card.kind === 'owned' ? card.config : null);
    }

    openConfigTemplateEditor(card: WorkspaceConfigCard, event: Event): void {
        event.stopPropagation();
        const tpl = this.workspaceConfigLinkedTemplate(card);
        if (!tpl) return;
        if (tpl.type === 'System') {
            this.editSystemTemplateCopy(tpl, event);
            return;
        }
        this.openTemplateEditor(tpl, event);
    }

    createTemplateForConfig(card: WorkspaceConfigCard, event: Event): void {
        event.stopPropagation();
        if (card.kind === 'fromTemplate') {
            this.editSystemTemplateCopy(card.template, event);
            return;
        }
        void this._router.navigate(['/smart-batch', 'guide', 'layout'], {
            queryParams: {
                configId: card.id,
                intent: 'template',
                templateChoice: 'scratch',
            },
        });
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
        const prefix = getSmartBatchRoutePrefix(this._router.url);
        if (mode === 'single') {
            this._router.navigate([prefix, configId, 'quick-validate']);
            return;
        }

        this._router.navigate([prefix, configId, 'batch', 'new']);
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
                templateChoice: 'mine',
                ...(configId ? { configId } : {}),
            },
        });
    }

    resolveBatchConfigRef(
        ref: string | BatchConfiguration | BatchConfigurationRef | null | undefined
    ): { id: string | null; name: string | null } {
        const { id, name } = resolveBatchConfigReference(ref, this.configurations());
        return { id, name };
    }

    getConfigName(
        configRef: string | BatchConfiguration | BatchConfigurationRef | null | undefined
    ): string {
        const resolved = this.resolveBatchConfigRef(configRef);
        return resolved.name ?? resolved.id ?? '';
    }

    private _toConfigIdString(value: unknown): string | null {
        return toEntityIdString(value);
    }

    templateTitle(template: SmartReportTemplate): string {
        if (template.type !== 'System' && template.name?.trim()) return template.name.trim();
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
