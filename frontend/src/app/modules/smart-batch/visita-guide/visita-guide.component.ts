import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, computed, DestroyRef, effect, inject, OnDestroy, OnInit, QueryList, signal, untracked, ViewChild, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { firstValueFrom, interval, Subscription } from 'rxjs';
import { BatchBrowserRunnerService } from '../batch-browser-runner.service';
import { ReportBuilderPreviewDataService } from '../report-builder-preview-data.service';
import { ReportInlineTextChange, ReportOverlayId, ReportPreviewComponent } from '../report-preview/report-preview.component';
import { ColorHexFieldComponent } from '../color-hex-field.component';
import { getBatchSkippedStepsFromInput } from '../batch-required-fields.util';
import { filterFeaturesForCountry, getCountryFlag } from '../smart-batch-country.util';
import {
    collectRequiredParamFields,
    featureParamChips,
    FeatureParamChip,
    humanizeParamField,
    matchesRequiredParamFilters,
    paramEnumChipClass,
    paramFieldLabelKey,
    requiredParamChipClass,
} from '../endpoint-param-highlight.util';
import { featureGroup, FeatureGroupId } from '../feature-group.util';
import { AppFeature, BatchConfiguration, SmartBatch, SmartBatchService } from '../smart-batch.service';
import { ReportCellPart, ReportKeyOverride, ReportRowLineStyle, ReportSection, ReportSectionFrame, ReportSheetImage, ReportTextRole, ReportTextRoleStyle, SmartReportService, SmartReportTemplate } from '../smart-report.service';
import {
    applyVisibleKeyReorder,
    collectLayoutSheetItems,
    collectScalarParams,
    isHiddenParamKey,
    layoutParamGroups,
    setHiddenParamKey,
    sortByKeyOrder,
    valueAtDataPath,
    humanizeParamKey,
    type LayoutParamGroup,
    type LayoutSheetItem,
} from '../report-param-entries.util';
import { REPORT_FONT_STACKS, REPORT_TEXT_ALIGNS, ReportTextAlign } from '../report-fonts.util';
import { resolveTextRole } from '../report-text-role.util';
import {
    clampRowLineMark,
    clampRowLineWidth,
    defaultRowLineMark,
    ROW_LINE_MARK_MAX,
    ROW_LINE_MARK_MIN,
    ROW_LINE_WIDTH_MAX,
    ROW_LINE_WIDTH_MIN,
} from '../report-row-line.util';
import { getStepDisplayFields } from '../step-result-presenters/registry';
import { buildRowDataForResolution } from '../template-match.util';
import { VisitaGuidePipelineService } from './visita-guide-pipeline.service';
import { getAppFeatureCatalogCopy } from '../../postman/postman-endpoint-copy.util';
import { visitaEndpointTooltipDetails } from './visita-guide-endpoint-tooltip.util';
import { GuideTemplateChoice, VisitaGuideStateService } from './visita-guide-state.service';
import {
    availableCountries,
    GUIDE_ENTITIES,
    GUIDE_INTENTS,
    GuideEntity,
    GuideIntent,
    GuideMode,
    GuideStepId,
    pipelineName,
    STEP_TITLE_KEYS,
} from './visita-guide.catalog';

const POLL_MS = 2500;
const LAYOUT_HISTORY_LIMIT = 40;
const LAYOUT_HISTORY_DEBOUNCE_MS = 400;

type LayoutDesignSnapshot = {
    sections: ReportSection[];
    reportTitle: string;
    primaryColor: string;
    pageBackgroundColor: string;
    logoDataUrl: string | null;
    logoX: number;
    logoY: number;
    logoWidth: number;
    logoHeight: number;
    logoRotation: number;
    sheetImages: ReportSheetImage[];
    legend: string;
    watermarkEnabled: boolean;
    watermarkType: 'text' | 'logo';
    watermarkText: string;
    watermarkOpacity: number;
    watermarkPattern: 'single' | 'repeated';
    watermarkX: number;
    watermarkY: number;
    watermarkWidth: number;
    watermarkHeight: number;
    watermarkRotation: number;
    showPageNumbers: boolean;
};

type GuideResultCard = {
    sequence: number;
    label: string;
    code?: string;
    hasData: boolean;
    error: string | null;
    skipMessage: string | null;
    status: 'ok' | 'failed' | 'skipped' | 'empty';
    fields: { label: string; value: unknown }[];
};

@Component({
    selector: 'visita-guide',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        DragDropModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        TranslocoModule,
        ReportPreviewComponent,
        ColorHexFieldComponent,
    ],
    templateUrl: './visita-guide.component.html',
})
export class VisitaGuideComponent implements OnInit, OnDestroy {
    private _state = inject(VisitaGuideStateService);
    private _batch = inject(SmartBatchService);
    private _reports = inject(SmartReportService);
    private _pipeline = inject(VisitaGuidePipelineService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snack = inject(MatSnackBar);
    private _browserRunner = inject(BatchBrowserRunnerService);
    private _previewBridge = inject(ReportBuilderPreviewDataService);
    private _destroyRef = inject(DestroyRef);
    @ViewChildren(ReportPreviewComponent) private _previews!: QueryList<ReportPreviewComponent>;
    @ViewChild('layoutEditorPreview') private _layoutEditorPreview?: ReportPreviewComponent;
    @ViewChild('layoutInsertImageInput') private _layoutInsertImageInput?: ElementRef<HTMLInputElement>;
    @ViewChild('layoutEditorPanel') private _layoutEditorPanel?: ElementRef<HTMLElement>;
    @ViewChild('layoutEditorScroll') private _layoutEditorScroll?: ElementRef<HTMLElement>;

    readonly intents = GUIDE_INTENTS;
    readonly entityOptions = GUIDE_ENTITIES;
    readonly countries = availableCountries();

    step = this._state.step;
    isWorking = signal(false);
    isGenerating = signal(false);
    templates = this._reports.templates;

    private _pollSub: Subscription | null = null;
    private _alive = true;

    intent = this._state.intent;
    entities = this._state.entities;
    countryIso = this._state.countryIso;
    mode = this._state.mode;
    inputValues = this._state.inputValues;
    inputFields = this._state.inputFields;
    wantsReport = this._state.wantsReport;
    batch = this._state.batch;
    configuration = this._state.configuration;
    includeItems = this._state.includeItems;
    layoutSections = this._state.layoutSections;
    templateChoice = this._state.templateChoice;
    selectedTemplate = this._state.selectedTemplate;
    clonedTemplate = this._state.clonedTemplate;
    reportTitle = this._state.reportTitle;
    primaryColor = this._state.primaryColor;
    pageBackgroundColor = this._state.pageBackgroundColor;
    logoDataUrl = this._state.logoDataUrl;
    logoX = this._state.logoX;
    logoY = this._state.logoY;
    logoWidth = this._state.logoWidth;
    logoHeight = this._state.logoHeight;
    logoRotation = this._state.logoRotation;
    sheetImages = this._state.sheetImages;
    legend = this._state.legend;
    watermarkEnabled = this._state.watermarkEnabled;
    watermarkType = this._state.watermarkType;
    watermarkText = this._state.watermarkText;
    watermarkOpacity = this._state.watermarkOpacity;
    watermarkPattern = this._state.watermarkPattern;
    watermarkX = this._state.watermarkX;
    watermarkY = this._state.watermarkY;
    watermarkWidth = this._state.watermarkWidth;
    watermarkHeight = this._state.watermarkHeight;
    watermarkRotation = this._state.watermarkRotation;
    showPageNumbers = this._state.showPageNumbers;
    consultError = this._state.consultError;
    visibleSteps = this._state.visibleSteps;
    isMixed = this._state.isMixed;
    selectedFeatures = this._state.selectedFeatures;
    endpointSearchQuery = this._state.endpointSearchQuery;
    requiredParamFilters = this._state.requiredParamFilters;

    availableFeatures = signal<AppFeature[]>([]);
    isLoadingFeatures = signal(false);
    featuresError = signal<string | null>(null);
    selectedLayoutSectionId = signal<string | null>(null);
    selectedLayoutOverlay = signal<ReportOverlayId | null>(null);
    selectedLayoutCellKey = signal<string | null>(null);
    selectedLayoutCellPart = signal<ReportCellPart>('cell');
    layoutEditorKind = signal<'page' | 'block' | 'overlay' | null>(null);
    layoutEditorFocused = signal(false);
    private _layoutFocusTimer: ReturnType<typeof setTimeout> | null = null;
    layoutContextMenu = signal<{
        x: number;
        y: number;
        sectionId?: string;
        overlay?: ReportOverlayId;
    } | null>(null);
    private _pendingSheetImagePoint: { x: number; y: number; page: number } | null = null;
    private _pendingContentPoint: { x: number; y: number; page: number } | null = null;
    isSavingLayout = signal(false);
    templateSearchQuery = signal('');
    canUndoLayout = signal(false);
    canRedoLayout = signal(false);
    private _layoutHistory: string[] = [];
    private _layoutHistoryIndex = -1;
    private _layoutHistoryApplying = false;
    private _layoutHistoryTimer: ReturnType<typeof setTimeout> | null = null;
    private _layoutHistoryPending: string | null = null;
    private readonly _layoutHistoryEffect = effect(() => {
        const onLayout = this.step() === 'layout';
        const snapshot = onLayout ? this._layoutDesignSnapshot() : null;
        untracked(() => {
            if (!onLayout || !snapshot) {
                this._resetLayoutHistory();
                return;
            }
            this._queueLayoutHistory(snapshot);
        });
    });
    hoveredEndpoint = signal<AppFeature | null>(null);
    endpointHoverVisible = signal(false);
    endpointHoverLeft = signal(0);
    endpointHoverTop = signal(0);
    endpointHoverFlipX = signal(false);
    endpointHoverFlipY = signal(false);
    private _endpointHoverHide: ReturnType<typeof setTimeout> | null = null;
    private _endpointHoverShow: ReturnType<typeof setTimeout> | null = null;
    private _endpointHoverArmed = false;
    readonly layoutTextAligns = REPORT_TEXT_ALIGNS;
    readonly reportFonts = REPORT_FONT_STACKS;
    readonly layoutRowLineStyles: ReportRowLineStyle[] = ['solid', 'dotted', 'dashed'];
    readonly layoutRowLineWidthMin = ROW_LINE_WIDTH_MIN;
    readonly layoutRowLineWidthMax = ROW_LINE_WIDTH_MAX;
    readonly layoutRowLineMarkMin = ROW_LINE_MARK_MIN;
    readonly layoutRowLineMarkMax = ROW_LINE_MARK_MAX;

    allowsMultiEntity = computed(() => this.intent() === 'report' || this.intent() === 'template');

    stepIndex = computed(() => Math.max(0, this.visibleSteps().indexOf(this.step())));
    stepCount = computed(() => Math.max(this.visibleSteps().length, 1));
    currentTitleKey = computed(() => STEP_TITLE_KEYS[this.step()]);
    canGoBack = computed(
        () =>
            this._state.editingSavedLayout() ||
            (this.step() !== 'intent' && this.step() !== 'consult')
    );
    countryFlag = computed(() => getCountryFlag(this.countryIso() ?? 'Colombia'));

    countryFilteredFeatures = computed(() => {
        const iso = this.countryIso() ?? 'co';
        const countryName = iso.toLowerCase() === 'co' ? 'Colombia' : iso;
        return filterFeaturesForCountry(this.availableFeatures(), countryName);
    });

    visibleEndpointFeatures = computed(() => {
        const selected = new Set(this.entities());
        const query = this.endpointSearchQuery().trim().toLowerCase();
        const paramFilters = this.requiredParamFilters();
        return this.countryFilteredFeatures().filter((feature) => {
            const group = featureGroup(feature);
            if (group !== 'other' && !selected.has(group)) return false;
            if (group === 'other' && selected.size) return false;
            if (!matchesRequiredParamFilters(feature, paramFilters)) return false;
            if (!query) return true;
            const blob = `${feature.name ?? ''} ${feature.code ?? ''} ${feature.url ?? ''} ${feature.description ?? ''}`.toLowerCase();
            return blob.includes(query);
        });
    });

    availableRequiredParamFilters = computed(() => {
        const selected = new Set(this.entities());
        const catalog = this.countryFilteredFeatures().filter((feature) => {
            const group = featureGroup(feature);
            if (group !== 'other' && !selected.has(group)) return false;
            if (group === 'other' && selected.size) return false;
            return true;
        });
        return collectRequiredParamFields(catalog);
    });

    groupedEndpointFeatures = computed(() => {
        const buckets: { id: FeatureGroupId; items: AppFeature[] }[] = [
            { id: 'citizen', items: [] },
            { id: 'vehicle', items: [] },
            { id: 'company', items: [] },
            { id: 'other', items: [] },
        ];
        for (const feature of this.visibleEndpointFeatures()) {
            const group = buckets.find((item) => item.id === featureGroup(feature));
            group?.items.push(feature);
        }
        return buckets.filter((bucket) => bucket.items.length > 0);
    });

    visitaTemplates = computed(() => this.systemTemplates());

    systemTemplates = computed(() => {
        const selected = new Set(this.entities());
        return this._sortedTemplates(
            this.templates().filter((template) => template.type === 'System'),
            selected
        );
    });

    myTemplates = computed(() => {
        const selected = new Set(this.entities());
        return this._sortedTemplates(
            this.templates().filter((template) => template.type !== 'System'),
            selected
        );
    });

    visibleSystemTemplates = computed(() =>
        this.systemTemplates().filter((template) => this._templateMatchesSearch(template))
    );

    visibleMyTemplates = computed(() =>
        this.myTemplates().filter((template) => this._templateMatchesSearch(template))
    );

    templateMatchesConsult(template: SmartReportTemplate): boolean {
        const category = template.category;
        return Boolean(category && this.entities().includes(category));
    }

    isWideStep = computed(
        () =>
            this.step() === 'layout' ||
            this.step() === 'template' ||
            this.step() === 'generate' ||
            this.step() === 'endpoints'
    );
    isLayoutStep = computed(() => this.step() === 'layout');

    selectedLayoutSection = computed(() => {
        const id = this.selectedLayoutSectionId();
        if (!id) return null;
        return this.layoutSections().find((section) => section.id === id) ?? null;
    });

    previewTemplate = computed((): SmartReportTemplate | null => {
        const template =
            this.templateChoice() === 'scratch' && !this.selectedTemplate()
                ? null
                : this.selectedTemplate();
        const layout = this.layoutSections();
        const useLayout = this.step() === 'layout' || this.step() === 'generate' || layout.length > 0;
        if (!template && !useLayout) return null;
        const base = template ?? {
            name: this.reportTitle() || pipelineName(this.entities()),
            type: 'client' as const,
            country: this.countryIso() === 'co' ? 'Colombia' : 'Colombia',
            sections: [],
            primaryColor: this.primaryColor(),
            logo: this.logoDataUrl(),
            pageSize: 'A4' as const,
            orientation: 'portrait' as const,
        };
        return {
            ...base,
            name: this.reportTitle() || base.name,
            primaryColor: this.primaryColor() || base.primaryColor,
            pageBackgroundColor: this.pageBackgroundColor() || '#ffffff',
            logo: this.logoDataUrl() || base.logo,
            legend: this.legend(),
            showPageNumbers: this.showPageNumbers(),
            pageNumberPosition: 'bottom-center',
            watermark: {
                enabled: this.watermarkEnabled(),
                type: this.watermarkType(),
                text: this.watermarkText() || this.reportTitle() || 'CONFIDENTIAL',
                opacity: this.watermarkOpacity(),
                pattern: this.watermarkPattern(),
                x: this.watermarkX(),
                y: this.watermarkY(),
                width: this.watermarkWidth(),
                height: this.watermarkHeight(),
                rotation: this.watermarkRotation(),
            },
            logoSettings: {
                enabled: Boolean(this.logoDataUrl()),
                x: this.logoX(),
                y: this.logoY(),
                width: this.logoWidth(),
                height: this.logoHeight(),
                rotation: this.logoRotation(),
                autoFitContent: true,
            },
            sheetImages: this.sheetImages(),
            sections: useLayout ? layout : this._sectionsForPreview(base),
        };
    });

    previewData = computed(() => {
        const row = this.batch()?.rows?.[0];
        if (row) {
            return buildRowDataForResolution(row, {
                steps: this.configuration()?.steps,
                errors: row.errors,
            });
        }
        const sample = this.selectedTemplate()?.sampleData;
        if (sample) {
            return {
                batchName: sample.batchName || this.reportTitle() || '',
                rowIndex: sample.rowIndex ?? 0,
                inputData: sample.inputData ?? {},
                results: sample.results ?? {},
                errors: sample.errors,
                report: sample.report,
            };
        }
        return { inputData: {}, results: {} };
    });

    resultCards = computed((): GuideResultCard[] => {
        const config = this.configuration();
        const row = this.batch()?.rows?.[0];
        if (!config || !row) return [];
        const results = (row.results ?? {}) as Record<string | number, unknown>;
        const skipped = getBatchSkippedStepsFromInput(row.inputData as Record<string, unknown>);
        return [...(config.steps ?? [])]
            .filter((step) => step.enabled !== false)
            .sort((a, b) => a.sequence - b.sequence)
            .map((step) => {
                const feature = step.appFeature as AppFeature | string;
                const selected =
                    typeof feature === 'string'
                        ? this.selectedFeatures().find((item) => item._id === feature)
                        : null;
                const code =
                    typeof feature === 'object' ? feature.code : selected?.code;
                const name =
                    typeof feature === 'object'
                        ? feature.name
                        : selected?.name ?? `Paso ${step.sequence}`;
                const payload = results[step.sequence] ?? results[String(step.sequence)];
                const error = row.errors?.find((item) => Number(item.step) === Number(step.sequence));
                const skip = skipped.find((item) => Number(item.sequence) === Number(step.sequence));
                const hasData = payload != null;
                const fields = hasData
                    ? getStepDisplayFields({ featureCode: code }, payload).slice(0, 8)
                    : [];
                let status: 'ok' | 'failed' | 'skipped' | 'empty' = 'empty';
                if (skip) status = 'skipped';
                else if (error) status = 'failed';
                else if (hasData) status = 'ok';
                return {
                    sequence: step.sequence,
                    label: name,
                    code,
                    hasData,
                    error: error?.message ?? null,
                    skipMessage: skip
                        ? `${skip.value} (${skip.field})`
                        : null,
                    status,
                    fields,
                };
            });
    });

    layoutSourceCards = computed((): GuideResultCard[] => {
        const fromResults = this.resultCards();
        if (fromResults.length) return fromResults;

        const steps = [...(this.configuration()?.steps ?? [])]
            .filter((step) => step.enabled !== false)
            .sort((a, b) => a.sequence - b.sequence);
        if (steps.length) {
            return steps.map((step) => {
                const feature = step.appFeature as AppFeature | string;
                const selected =
                    typeof feature === 'string'
                        ? this.selectedFeatures().find((item) => item._id === feature)
                        : null;
                const name =
                    typeof feature === 'object'
                        ? feature.name
                        : selected?.name ?? `Paso ${step.sequence}`;
                const code = typeof feature === 'object' ? feature.code : selected?.code;
                return {
                    sequence: step.sequence,
                    label: name,
                    code,
                    hasData: false,
                    error: null,
                    skipMessage: null,
                    status: 'empty' as const,
                    fields: [],
                };
            });
        }

        return this.selectedFeatures().map((feature, index) => ({
            sequence: index + 1,
            label: feature.name,
            code: feature.code,
            hasData: false,
            error: null,
            skipMessage: null,
            status: 'empty' as const,
            fields: [],
        }));
    });

    resultSummary = computed(() => {
        const cards = this.resultCards();
        return {
            total: cards.length,
            ok: cards.filter((card) => card.status === 'ok').length,
            failed: cards.filter((card) => card.status === 'failed').length,
            skipped: cards.filter((card) => card.status === 'skipped').length,
            empty: cards.filter((card) => card.status === 'empty').length,
        };
    });

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                this._alive = true;
                this._state.applyDeductions();
                this._reports.getTemplates().subscribe();
                this._resumeFromDesigner();
            },
            panelClass: 'auth-required-dialog',
        });
    }

    ngOnDestroy(): void {
        this._alive = false;
        if (this._endpointHoverHide) clearTimeout(this._endpointHoverHide);
        if (this._endpointHoverShow) clearTimeout(this._endpointHoverShow);
        if (this._layoutHistoryTimer) clearTimeout(this._layoutHistoryTimer);
        if (this._layoutFocusTimer) clearTimeout(this._layoutFocusTimer);
        this._stopPoll();
        this._browserRunner.stop();
    }

    selectIntent(intent: GuideIntent): void {
        if (intent === 'template') {
            this._state.intent.set('template');
            this._state.wantsReport.set(true);
            this._state.applyDeductions();
            this.goNext();
            return;
        }
        if (intent === 'other') {
            this._state.resetAll();
            void this._router.navigate(['/smart-batch', 'workspace']);
            return;
        }
        this._state.intent.set(intent);
        this._state.wantsReport.set(intent === 'report');
        this._state.applyDeductions();
        this.goNext();
    }

    toggleEntity(entity: GuideEntity): void {
        if (!this.allowsMultiEntity()) {
            this._state.entities.set([entity]);
            this._state.selectedFeatures.set([]);
            this._state.requiredParamFilters.set([]);
            this._state.applyDeductions();
            this.goNext();
            return;
        }
        this._state.toggleEntity(entity);
    }

    isEntitySelected(entity: GuideEntity): boolean {
        return this.entities().includes(entity);
    }

    confirmEntities(): void {
        if (!this.entities().length) {
            this._snack.open(this._transloco.translate('visitaGuide.pickEntity'), undefined, {
                duration: 2500,
            });
            return;
        }
        this._state.applyDeductions();
        this.goNext();
    }

    selectCountry(iso: string): void {
        this._state.countryIso.set(iso);
        this.goNext();
    }

    selectMode(mode: GuideMode): void {
        this._state.mode.set(mode);
        this.goNext();
    }

    goNext(): void {
        this._state.applyDeductions();
        const steps = this.visibleSteps();
        const current = steps.indexOf(this.step());
        const next = steps[current + 1];
        if (!next) return;

        if (this.step() === 'input' && !this._hasRequiredInputs()) {
            this._snack.open(this._transloco.translate('visitaGuide.inputRequired'), undefined, {
                duration: 2500,
            });
            return;
        }

        if (next === 'endpoints') void this.ensureFeaturesLoaded();

        if (this.step() === 'endpoints' && !this.selectedFeatures().length) {
            this._snack.open(this._transloco.translate('visitaGuide.pickEndpoints'), undefined, {
                duration: 2500,
            });
            return;
        }

        if (next === 'consult') {
            this.step.set('consult');
            void this.runConsult();
            return;
        }

        if (this.step() === 'results' && !this.wantsReport()) {
            this._state.wantsReport.set(true);
            this._state.applyDeductions();
            this._refreshTemplates();
            this.step.set('template');
            return;
        }

        if (this.step() === 'template' && !this.templateChoice()) {
            this._snack.open(this._transloco.translate('visitaGuide.pickTemplate'), undefined, {
                duration: 2500,
            });
            return;
        }

        if (this.step() === 'template' && this.mode() === 'batch') {
            void this._finishBatchTemplatePick();
            return;
        }

        if (next === 'template') this._refreshTemplates();
        if (next === 'layout') this.enterLayout();
        if (next === 'include') this.ensureIncludeItems();
        this.step.set(next);
    }

    goBack(): void {
        if (!this.canGoBack()) return;
        if (this._state.editingSavedLayout() && this.step() === 'layout') {
            this._state.editingSavedLayout.set(false);
            void this._router.navigate(['/smart-batch', 'workspace'], {
                queryParams: { tab: 'templates' },
            });
            return;
        }
        const steps = this.visibleSteps();
        const current = steps.indexOf(this.step());
        const previous = steps[Math.max(0, current - 1)];
        this.step.set(previous === 'consult' ? (this.mode() === 'batch' ? 'mode' : 'input') : previous);
    }

    startOver(): void {
        this._stopPoll();
        this._browserRunner.stop();
        this._state.resetAll();
    }

    continueToReport(): void {
        this._state.wantsReport.set(true);
        this._state.applyDeductions();
        this._refreshTemplates();
        this.step.set('template');
    }

    enterLayout(): void {
        this.ensureIncludeItems();
        if (!this.reportTitle()) {
            this._state.reportTitle.set(pipelineName(this.entities()));
        }
    }

    undoLayout(): void {
        this._flushLayoutHistory();
        if (this._layoutHistoryIndex <= 0) return;
        this._layoutHistoryIndex -= 1;
        this._applyLayoutSnapshot(this._layoutHistory[this._layoutHistoryIndex]);
        this._syncLayoutHistoryFlags();
    }

    redoLayout(): void {
        this._flushLayoutHistory();
        if (this._layoutHistoryIndex >= this._layoutHistory.length - 1) return;
        this._layoutHistoryIndex += 1;
        this._applyLayoutSnapshot(this._layoutHistory[this._layoutHistoryIndex]);
        this._syncLayoutHistoryFlags();
    }

    @HostListener('document:keydown', ['$event'])
    onLayoutHistoryKey(event: KeyboardEvent): void {
        if (this.step() !== 'layout') return;
        if (!(event.ctrlKey || event.metaKey)) return;
        const target = event.target as HTMLElement | null;
        if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;
        const key = event.key.toLowerCase();
        if (key === 'z' && !event.shiftKey) {
            event.preventDefault();
            this.undoLayout();
            return;
        }
        if (key === 'y' || (key === 'z' && event.shiftKey)) {
            event.preventDefault();
            this.redoLayout();
        }
    }

    onLayoutSectionClick = (section: ReportSection): void => {
        this.selectedLayoutOverlay.set(null);
        this.selectedLayoutSectionId.set(section.id);
        this.layoutEditorKind.set('block');
        this._revealLayoutControls('block');
    };

    onLayoutInlineText = (event: ReportInlineTextChange): void => {
        const section = this.layoutSections().find((item) => item.id === event.sectionId);
        if (!section) return;
        this.selectedLayoutSectionId.set(event.sectionId);
        this.selectedLayoutOverlay.set(null);
        if (event.kind === 'cellLabel' && event.key) {
            this.selectedLayoutCellKey.set(event.key);
            this.selectedLayoutCellPart.set('label');
            this.layoutEditorKind.set('block');
            this.setSelectedLayoutCellLabel(event.value);
            this._revealLayoutControls('cell');
            return;
        }
        this.selectedLayoutCellKey.set(null);
        this.selectedLayoutCellPart.set('cell');
        this.layoutEditorKind.set('block');
        if (event.kind === 'body') {
            this.setSelectedLayoutBody(event.value);
        } else {
            this.setSelectedLayoutLabel(event.value);
        }
        this._revealLayoutControls('block');
    };

    onLayoutCellSelect = (event: {
        section: ReportSection;
        key: string | null;
        part: ReportCellPart;
    }): void => {
        this.selectedLayoutOverlay.set(null);
        this.selectedLayoutSectionId.set(event.section.id);
        this.selectedLayoutCellKey.set(event.key);
        this.selectedLayoutCellPart.set(event.part);
        this.layoutEditorKind.set('block');
        this._revealLayoutControls(event.key ? 'cell' : 'block');
    };

    onLayoutSectionReorder(event: { fromId: string; toIndex: number }): void {
        const list = [...this.layoutSections()];
        const from = list.findIndex((section) => section.id === event.fromId);
        if (from < 0 || from === event.toIndex) return;
        if (event.toIndex < 0 || event.toIndex >= list.length) return;
        moveItemInArray(list, from, event.toIndex);
        this.layoutSections.set(list.map((section, order) => ({ ...section, order })));
        this.selectedLayoutSectionId.set(event.fromId);
        this.layoutEditorKind.set('block');
    }

    onLayoutSectionFrames(updates: { id: string; frame: ReportSectionFrame }[]): void {
        const next = new Map(updates.map((item) => [item.id, item.frame]));
        this.layoutSections.update((list) =>
            this._compactLayoutPages(
                list.map((section) => (next.has(section.id) ? { ...section, frame: next.get(section.id) } : section))
            )
        );
    }

    onLayoutSectionFrame(event: { id: string; frame: ReportSectionFrame }): void {
        this.layoutSections.update((list) =>
            this._compactLayoutPages(
                list.map((section) => (section.id === event.id ? { ...section, frame: event.frame } : section))
            )
        );
    }

    /** Drop empty sheets and shift leftover blocks onto the first remaining page. */
    private _compactLayoutPages(list: ReportSection[]): ReportSection[] {
        const used = [
            ...new Set(list.flatMap((section) => (section.frame ? [section.frame.page ?? 0] : []))),
        ].sort((a, b) => a - b);
        if (!used.length) return list;
        const remap = new Map(used.map((page, index) => [page, index]));
        const needsRemap = used.some((page, index) => page !== index);
        if (!needsRemap) return list;
        return list.map((section) =>
            section.frame
                ? { ...section, frame: { ...section.frame, page: remap.get(section.frame.page ?? 0) ?? 0 } }
                : section
        );
    }

    private _sortLayoutByFrame(list: ReportSection[]): ReportSection[] {
        if (!list.some((section) => section.frame)) {
            return list.map((section, order) => ({ ...section, order }));
        }
        return [...list]
            .sort((left, right) => {
                const page = (left.frame?.page ?? 0) - (right.frame?.page ?? 0);
                if (page !== 0) return page;
                const top = (left.frame?.y ?? 0) - (right.frame?.y ?? 0);
                if (top !== 0) return top;
                return (left.frame?.x ?? 0) - (right.frame?.x ?? 0);
            })
            .map((section, order) => ({ ...section, order }));
    }

    private _nextLayoutFrame(): ReportSectionFrame | undefined {
        const framed = this.layoutSections().filter((section) => section.frame);
        if (!framed.length) return undefined;
        const last = framed.reduce((current, section) => {
            const currentRank = (current.frame?.page ?? 0) * 10000 + (current.frame?.y ?? 0);
            const nextRank = (section.frame?.page ?? 0) * 10000 + (section.frame?.y ?? 0);
            return nextRank >= currentRank ? section : current;
        });
        return {
            page: last.frame?.page ?? 0,
            x: 0,
            y: (last.frame?.y ?? 0) + (last.frame?.height ?? 180) + 16,
            width: last.frame?.width ?? 700,
            height: last.frame?.height ?? 180,
        };
    }

    /**
     * Title / text / divider drop next to the current selection (or last
     * inserted content block), not below a tall endpoint card.
     */
    private _nextNearbyFrame(height: number): ReportSectionFrame {
        const selected = this.selectedLayoutSection()?.frame;
        const lastContent = [...this.layoutSections()]
            .reverse()
            .find((section) => section.frame && ['header', 'text', 'divider'].includes(section.type))
            ?.frame;
        const origin = selected ?? lastContent ?? this.layoutSections().find((section) => section.frame)?.frame;
        return {
            page: origin?.page ?? 0,
            x: origin?.x ?? 0,
            y: (origin?.y ?? 32) + 24,
            width: origin?.width ?? 700,
            height,
        };
    }

    private _consumePendingContentFrame(height: number): ReportSectionFrame {
        const pending = this._pendingContentPoint;
        this._pendingContentPoint = null;
        if (!pending) return this._nextNearbyFrame(height);
        return {
            page: pending.page,
            x: pending.x,
            y: pending.y,
            width: 700,
            height,
        };
    }

    onLayoutOverlaySelect(id: ReportOverlayId): void {
        this.selectedLayoutSectionId.set(null);
        this.selectedLayoutCellKey.set(null);
        this.selectedLayoutOverlay.set(id);
        this.layoutEditorKind.set('overlay');
        this._revealLayoutControls('overlay');
    };

    clearLayoutSelection(): void {
        this.selectedLayoutSectionId.set(null);
        this.selectedLayoutOverlay.set(null);
        this.selectedLayoutCellKey.set(null);
    }

    openLayoutPageEditor(event?: Event): void {
        event?.stopPropagation();
        this.clearLayoutSelection();
        this.layoutEditorKind.set('page');
        this._revealLayoutControls('page');
    }

    closeLayoutEditor(): void {
        this.layoutEditorKind.set(null);
        this.layoutEditorFocused.set(false);
    }

    private _revealLayoutControls(control: 'page' | 'block' | 'cell' | 'overlay'): void {
        this.layoutEditorFocused.set(true);
        if (this._layoutFocusTimer) clearTimeout(this._layoutFocusTimer);
        this._layoutFocusTimer = setTimeout(() => this.layoutEditorFocused.set(false), 1200);
        queueMicrotask(() => {
            requestAnimationFrame(() => {
                const root = this._layoutEditorPanel?.nativeElement;
                if (!root) return;
                const target =
                    (root.querySelector(`[data-layout-control="${control}"]`) as HTMLElement | null) ?? root;
                target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                const field = target.querySelector<HTMLElement>(
                    'input:not([type="file"]):not([type="checkbox"]):not([type="range"]), textarea, select'
                );
                field?.focus({ preventScroll: true });
            });
        });
    }

    onLayoutSectionContextMenu(event: { section: ReportSection; x: number; y: number }): void {
        this._openLayoutContextMenu(event.x, event.y, { sectionId: event.section.id });
    }

    onLayoutOverlayContextMenu(event: { overlay: ReportOverlayId; x: number; y: number }): void {
        this._openLayoutContextMenu(event.x, event.y, { overlay: event.overlay });
    }

    onLayoutPaperContextMenu(event: { x: number; y: number }): void {
        this.openLayoutPageEditor();
        this._openLayoutContextMenu(event.x, event.y, {});
    }

    onLayoutCanvasContextMenu(event: MouseEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest('report-preview') || target?.closest('.visita-layout-context-menu')) return;
        event.preventDefault();
        this.openLayoutPageEditor();
        this._openLayoutContextMenu(event.clientX, event.clientY, {});
    }

    canInsertLayoutImage(): boolean {
        return this.sheetImages().length < 12;
    }

    insertLayoutImageFromMenu(): void {
        if (!this.canInsertLayoutImage()) {
            this.closeLayoutContextMenu();
            return;
        }
        this._pendingSheetImagePoint = this._pointFromContextMenu();
        this.closeLayoutContextMenu();
        this._layoutInsertImageInput?.nativeElement.click();
    }

    insertLayoutTitleFromMenu(): void {
        this._pendingContentPoint = this._pointFromContextMenu();
        this.closeLayoutContextMenu();
        this.addTitleBlock();
    }

    insertLayoutTextFromMenu(): void {
        this._pendingContentPoint = this._pointFromContextMenu();
        this.closeLayoutContextMenu();
        this.addTextBlock();
    }

    insertLayoutDividerFromMenu(): void {
        this._pendingContentPoint = this._pointFromContextMenu();
        this.closeLayoutContextMenu();
        this.addDividerBlock();
    }

    private _pointFromContextMenu(): { x: number; y: number; page: number } | null {
        const menu = this.layoutContextMenu();
        if (!menu) return null;
        return this._layoutEditorPreview?.canonicalPointAt(menu.x, menu.y) ?? { x: 48, y: 48, page: 0 };
    }

    onLayoutLayerContextMenu(section: ReportSection, event: MouseEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.onLayoutSectionClick(section);
        this._openLayoutContextMenu(event.clientX, event.clientY, { sectionId: section.id });
    }

    closeLayoutContextMenu(): void {
        this.layoutContextMenu.set(null);
    }

    deleteLayoutContextTarget(): void {
        const menu = this.layoutContextMenu();
        if (!menu) return;
        if (menu.sectionId) {
            this.selectedLayoutSectionId.set(menu.sectionId);
            this.removeSelectedLayoutSection();
        } else if (menu.overlay === 'logo') {
            this.clearLogo();
            this.selectedLayoutOverlay.set(null);
            this.layoutEditorKind.set(null);
        } else if (menu.overlay === 'watermark') {
            this.setWatermarkEnabled(false);
            this.selectedLayoutOverlay.set(null);
            this.layoutEditorKind.set(null);
        } else if (menu.overlay?.startsWith('img:')) {
            this.clearSheetImage(menu.overlay.slice(4));
            this.layoutEditorKind.set(null);
        }
        this.closeLayoutContextMenu();
    }

    @HostListener('document:pointerdown', ['$event'])
    onDocumentPointerDown(event: PointerEvent): void {
        if (!this.layoutContextMenu()) return;
        if (event.button === 2) return;
        const target = event.target as HTMLElement | null;
        if (target?.closest('.visita-layout-context-menu')) return;
        this.closeLayoutContextMenu();
    }

    @HostListener('document:pointermove', ['$event'])
    onDocumentPointerMove(event: PointerEvent): void {
        if (!this._endpointHoverArmed) return;
        this._armEndpointHover(event);
    }

    @HostListener('document:keydown.escape')
    onDocumentEscape(): void {
        this.closeLayoutContextMenu();
    }

    private _layoutDesignSnapshot(): LayoutDesignSnapshot {
        return {
            sections: this.layoutSections(),
            reportTitle: this.reportTitle(),
            primaryColor: this.primaryColor(),
            pageBackgroundColor: this.pageBackgroundColor(),
            logoDataUrl: this.logoDataUrl(),
            logoX: this.logoX(),
            logoY: this.logoY(),
            logoWidth: this.logoWidth(),
            logoHeight: this.logoHeight(),
            logoRotation: this.logoRotation(),
            sheetImages: this.sheetImages(),
            legend: this.legend(),
            watermarkEnabled: this.watermarkEnabled(),
            watermarkType: this.watermarkType(),
            watermarkText: this.watermarkText(),
            watermarkOpacity: this.watermarkOpacity(),
            watermarkPattern: this.watermarkPattern(),
            watermarkX: this.watermarkX(),
            watermarkY: this.watermarkY(),
            watermarkWidth: this.watermarkWidth(),
            watermarkHeight: this.watermarkHeight(),
            watermarkRotation: this.watermarkRotation(),
            showPageNumbers: this.showPageNumbers(),
        };
    }

    private _queueLayoutHistory(snapshot: LayoutDesignSnapshot): void {
        if (this._layoutHistoryApplying) return;
        const json = JSON.stringify(snapshot);
        if (this._layoutHistory.length === 0) {
            this._layoutHistory = [json];
            this._layoutHistoryIndex = 0;
            this._syncLayoutHistoryFlags();
            return;
        }
        if (json === this._layoutHistory[this._layoutHistoryIndex]) return;
        this._layoutHistoryPending = json;
        if (this._layoutHistoryTimer) clearTimeout(this._layoutHistoryTimer);
        this._layoutHistoryTimer = setTimeout(() => {
            this._layoutHistoryTimer = null;
            this._flushLayoutHistory();
        }, LAYOUT_HISTORY_DEBOUNCE_MS);
    }

    private _flushLayoutHistory(): void {
        if (this._layoutHistoryTimer) {
            clearTimeout(this._layoutHistoryTimer);
            this._layoutHistoryTimer = null;
        }
        const json = this._layoutHistoryPending;
        this._layoutHistoryPending = null;
        if (!json || json === this._layoutHistory[this._layoutHistoryIndex]) return;
        this._layoutHistory = this._layoutHistory.slice(0, this._layoutHistoryIndex + 1);
        this._layoutHistory.push(json);
        if (this._layoutHistory.length > LAYOUT_HISTORY_LIMIT) {
            this._layoutHistory.shift();
        }
        this._layoutHistoryIndex = this._layoutHistory.length - 1;
        this._syncLayoutHistoryFlags();
    }

    private _resetLayoutHistory(): void {
        if (this._layoutHistoryTimer) {
            clearTimeout(this._layoutHistoryTimer);
            this._layoutHistoryTimer = null;
        }
        this._layoutHistoryPending = null;
        this._layoutHistory = [];
        this._layoutHistoryIndex = -1;
        this.canUndoLayout.set(false);
        this.canRedoLayout.set(false);
    }

    private _syncLayoutHistoryFlags(): void {
        this.canUndoLayout.set(this._layoutHistoryIndex > 0);
        this.canRedoLayout.set(this._layoutHistoryIndex >= 0 && this._layoutHistoryIndex < this._layoutHistory.length - 1);
    }

    private _applyLayoutSnapshot(json: string): void {
        const snapshot = JSON.parse(json) as LayoutDesignSnapshot;
        this._layoutHistoryApplying = true;
        this.layoutSections.set(
            (snapshot.sections ?? []).map((section, index) => ({ ...section, order: index }))
        );
        this._state.reportTitle.set(snapshot.reportTitle);
        this._state.primaryColor.set(snapshot.primaryColor);
        this._state.pageBackgroundColor.set(snapshot.pageBackgroundColor);
        this._state.logoDataUrl.set(snapshot.logoDataUrl);
        this._state.logoX.set(snapshot.logoX);
        this._state.logoY.set(snapshot.logoY);
        this._state.logoWidth.set(snapshot.logoWidth);
        this._state.logoHeight.set(snapshot.logoHeight);
        this._state.logoRotation.set(snapshot.logoRotation);
        this._state.sheetImages.set(snapshot.sheetImages ?? []);
        this._state.legend.set(snapshot.legend);
        this._state.watermarkEnabled.set(snapshot.watermarkEnabled);
        this._state.watermarkType.set(snapshot.watermarkType);
        this._state.watermarkText.set(snapshot.watermarkText);
        this._state.watermarkOpacity.set(snapshot.watermarkOpacity);
        this._state.watermarkPattern.set(snapshot.watermarkPattern);
        this._state.watermarkX.set(snapshot.watermarkX);
        this._state.watermarkY.set(snapshot.watermarkY);
        this._state.watermarkWidth.set(snapshot.watermarkWidth);
        this._state.watermarkHeight.set(snapshot.watermarkHeight);
        this._state.watermarkRotation.set(snapshot.watermarkRotation);
        this._state.showPageNumbers.set(snapshot.showPageNumbers);
        queueMicrotask(() => {
            this._layoutHistoryApplying = false;
        });
    }

    private _openLayoutContextMenu(
        x: number,
        y: number,
        target: { sectionId?: string; overlay?: ReportOverlayId }
    ): void {
        const width = 220;
        const height = 220;
        this.layoutContextMenu.set({
            x: Math.min(Math.max(8, x), Math.max(8, window.innerWidth - width - 8)),
            y: Math.min(Math.max(8, y), Math.max(8, window.innerHeight - height - 8)),
            ...target,
        });
    }

    layoutEditorTitleKey(): string {
        const kind = this.layoutEditorKind();
        if (kind === 'block') return 'visitaGuide.layoutPanelBlock';
        if (kind === 'overlay') return 'visitaGuide.layoutBrand';
        return 'visitaGuide.layoutEditorPage';
    }

    onLayoutBlankClick(event: MouseEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest('report-preview')) return;
        if (target?.closest('.visita-layout-editor')) return;
        this.openLayoutPageEditor();
    }

    onLayoutCanvasDrop(event: CdkDragDrop<unknown>): void {
        const payload = event.item.data as GuideResultCard | ReportSection | undefined;
        if (!payload) return;
        if ('sequence' in payload && typeof payload.sequence === 'number' && 'status' in payload) {
            this.addCardToLayout(payload);
            return;
        }
        if ('id' in payload && event.previousContainer === event.container) {
            this.onLayoutReorder(event);
        }
    }

    onLayoutReorder(event: CdkDragDrop<unknown>): void {
        const list = [...this.layoutSections()];
        moveItemInArray(list, event.previousIndex, event.currentIndex);
        this.layoutSections.set(list.map((section, index) => ({ ...section, order: index })));
    }

    addCardToLayout(card: GuideResultCard): void {
        const path = `results.${card.sequence}`;
        if (this.layoutSections().some((section) => section.dataPath === path)) {
            this._snack.open(this._transloco.translate('visitaGuide.layoutAlreadyAdded'), undefined, {
                duration: 2000,
            });
            return;
        }
        const section = { ...this._sectionFromCard(card), order: 0, frame: this._nextLayoutFrame() };
        this.layoutSections.update((list) => [...list, { ...section, order: list.length }]);
        this.selectedLayoutSectionId.set(section.id);
        this.layoutEditorKind.set('block');
        this._revealLayoutControls('block');
    }

    addAllCardsToLayout(): void {
        for (const card of this.layoutSourceCards()) {
            const path = `results.${card.sequence}`;
            if (this.layoutSections().some((section) => section.dataPath === path)) continue;
            this.layoutSections.update((list) => [
                ...list,
                { ...this._sectionFromCard(card), order: list.length, frame: this._nextLayoutFrame() },
            ]);
        }
    }

    /** New reports start with a single endpoint; the rest are dragged in by hand. */
    seedDefaultLayout(): void {
        if (this.layoutSections().length) return;
        const card = this.layoutSourceCards()[0];
        if (!card) return;
        this.addCardToLayout(card);
    }

    useVisitaLayout(): void {
        const sections = this.clonedTemplate()?.sections ?? [];
        if (!sections.length) {
            this.seedDefaultLayout();
            return;
        }
        this.layoutSections.set(sections.map((section, index) => ({ ...section, order: index })));
        this._state.templateChoice.set('visita');
        this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
        this.layoutEditorKind.set(this.layoutSections()[0] ? 'block' : 'page');
    }

    isCardOnLayout(sequence: number): boolean {
        return this.layoutSections().some((section) => section.dataPath === `results.${sequence}`);
    }

    setLayoutTitle(value: string): void {
        this._state.reportTitle.set(value);
    }

    setLayoutPrimaryColor(value: string): void {
        this._state.primaryColor.set(value);
    }

    setLayoutPageBackground(value: string): void {
        this._state.pageBackgroundColor.set(value);
    }

    setLegend(value: string): void {
        this._state.legend.set(value);
    }

    setWatermarkEnabled(enabled: boolean): void {
        this._state.watermarkEnabled.set(enabled);
        if (enabled && !this.watermarkText()) {
            this._state.watermarkText.set(this.reportTitle() || 'CONFIDENTIAL');
        }
    }

    setWatermarkText(value: string): void {
        this._state.watermarkText.set(value);
    }

    setWatermarkType(type: 'text' | 'logo'): void {
        this._state.watermarkType.set(type);
        if (type === 'logo') {
            this._state.watermarkPattern.set('single');
        }
    }

    setWatermarkPattern(pattern: 'single' | 'repeated'): void {
        this._state.watermarkPattern.set(pattern);
    }

    setWatermarkOpacity(value: string | number): void {
        const opacity = Number(value);
        if (!Number.isFinite(opacity)) return;
        this._state.watermarkOpacity.set(Math.min(0.4, Math.max(0.04, opacity)));
    }

    setShowPageNumbers(enabled: boolean): void {
        this._state.showPageNumbers.set(enabled);
    }

    onLayoutLogoPositionChange(pos: { x: number; y: number }): void {
        this._state.logoX.set(Math.max(0, Math.round(pos.x)));
        this._state.logoY.set(Math.max(0, Math.round(pos.y)));
    }

    onLayoutLogoSizeChange(size: { width: number; height: number }): void {
        this._state.logoWidth.set(Math.max(24, Math.round(size.width)));
        this._state.logoHeight.set(Math.max(16, Math.round(size.height)));
    }

    onLayoutLogoRotationChange(rotation: number): void {
        this._state.logoRotation.set(Math.round(rotation));
    }

    setLogoRotation(value: string | number): void {
        const rotation = Number(value);
        if (!Number.isFinite(rotation)) return;
        this._state.logoRotation.set(Math.round(rotation));
    }

    onLayoutWatermarkPositionChange(pos: { x: number; y: number }): void {
        this._state.watermarkX.set(Math.max(0, Math.round(pos.x)));
        this._state.watermarkY.set(Math.max(0, Math.round(pos.y)));
    }

    onLayoutWatermarkSizeChange(size: { width: number; height: number }): void {
        this._state.watermarkWidth.set(Math.max(40, Math.round(size.width)));
        this._state.watermarkHeight.set(Math.max(24, Math.round(size.height)));
    }

    onLayoutWatermarkRotationChange(rotation: number): void {
        this._state.watermarkRotation.set(Math.round(rotation));
    }

    setWatermarkRotation(value: string | number): void {
        const rotation = Number(value);
        if (!Number.isFinite(rotation)) return;
        this._state.watermarkRotation.set(Math.round(rotation));
    }

    clearLogo(): void {
        this._state.logoDataUrl.set(null);
    }

    addTitleBlock(): void {
        const title = this.reportTitle() || pipelineName(this.entities());
        const section: ReportSection = {
            id: `titulo-${Date.now()}`,
            type: 'header',
            order: 0,
            label: title,
            staticContent: title,
            style: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: this.primaryColor() },
            frame: this._consumePendingContentFrame(48),
        };
        this.layoutSections.update((list) => [
            section,
            ...list.map((item, index) => ({ ...item, order: index + 1 })),
        ]);
        this.selectedLayoutSectionId.set(section.id);
        this.layoutEditorKind.set('block');
        this._revealLayoutControls('block');
    }

    addTextBlock(): void {
        const section: ReportSection = {
            id: `texto-${Date.now()}`,
            type: 'text',
            order: this.layoutSections().length,
            label: this._transloco.translate('visitaGuide.layoutTextBlock'),
            staticContent: this._transloco.translate('visitaGuide.layoutTextPlaceholder'),
            style: { fontSize: 12, textAlign: 'left' },
            frame: this._consumePendingContentFrame(72),
        };
        this.layoutSections.update((list) => [...list, section]);
        this.selectedLayoutSectionId.set(section.id);
        this.layoutEditorKind.set('block');
        this._revealLayoutControls('block');
    }

    addDividerBlock(): void {
        const section: ReportSection = {
            id: `linea-${Date.now()}`,
            type: 'divider',
            order: this.layoutSections().length,
            style: { color: this.primaryColor() },
            frame: this._consumePendingContentFrame(16),
        };
        this.layoutSections.update((list) => [...list, section]);
        this.selectedLayoutSectionId.set(section.id);
        this.layoutEditorKind.set('block');
        this._revealLayoutControls('block');
    }

    setSelectedLayoutLabel(value: string): void {
        const id = this.selectedLayoutSectionId();
        if (!id) return;
        this.layoutSections.update((list) =>
            list.map((section) =>
                section.id === id
                    ? {
                          ...section,
                          label: value,
                          staticContent:
                              section.type === 'header' || section.type === 'text' ? value : section.staticContent,
                      }
                    : section
            )
        );
    }

    setSelectedLayoutBody(value: string): void {
        const id = this.selectedLayoutSectionId();
        if (!id) return;
        this.layoutSections.update((list) =>
            list.map((section) => (section.id === id ? { ...section, staticContent: value } : section))
        );
    }

    setSelectedLayoutColor(value: string): void {
        this._patchSelectedLayoutStyle({ color: value });
    }

    selectedLayoutShowsTypography(): boolean {
        const type = this.selectedLayoutSection()?.type;
        return Boolean(type) && type !== 'spacer' && type !== 'image' && type !== 'divider';
    }

    selectedLayoutTextRoles(): ReportTextRole[] {
        if (!this.selectedLayoutShowsTypography()) return [];
        const cellKey = this.selectedLayoutCellKey();
        if (cellKey) {
            const part = this.selectedLayoutCellPart();
            if (part === 'label') return ['label'];
            if (part === 'value') return ['value'];
            return ['label', 'value'];
        }
        if (this.selectedLayoutShowsParams()) return ['title', 'label', 'value'];
        return ['title'];
    }

    layoutRoleTitleKey(role: ReportTextRole): string {
        if (role === 'label') return 'visitaGuide.layoutTextLabels';
        if (role === 'value') return 'visitaGuide.layoutTextValues';
        const type = this.selectedLayoutSection()?.type;
        return type === 'text' ? 'visitaGuide.layoutTextBody' : 'visitaGuide.layoutTextTitle';
    }

    layoutRolePanelClass(role: ReportTextRole): string {
        if (role === 'label') {
            return 'mt-3 rounded-xl border border-lime-300 bg-lime-50 p-3 dark:border-lime-800 dark:bg-lime-950/40';
        }
        if (role === 'value') {
            return 'mt-3 rounded-xl border border-orange-300 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-950/40';
        }
        return 'mt-3 rounded-xl border border-cyan-300 bg-cyan-50 p-3 dark:border-cyan-800 dark:bg-cyan-950/40';
    }

    layoutRoleHeadingClass(role: ReportTextRole): string {
        if (role === 'label') return 'text-[11px] font-semibold uppercase tracking-wider text-lime-800 dark:text-lime-300';
        if (role === 'value') return 'text-[11px] font-semibold uppercase tracking-wider text-orange-800 dark:text-orange-300';
        return 'text-[11px] font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300';
    }

    private _layoutRole(role: ReportTextRole) {
        const section = this.selectedLayoutSection();
        const key = role === 'title' ? undefined : this.selectedLayoutCellKey() ?? undefined;
        if (!section) {
            return resolveTextRole(
                { id: '', type: 'text', order: 0 },
                role,
                this.primaryColor(),
                key
            );
        }
        return resolveTextRole(section, role, this.primaryColor(), key);
    }

    layoutRoleFontFamily(role: ReportTextRole): string {
        return this._layoutRole(role).fontFamily;
    }

    layoutRoleFontSize(role: ReportTextRole): number {
        return this._layoutRole(role).fontSize;
    }

    layoutRoleAlign(role: ReportTextRole): ReportTextAlign {
        return this._layoutRole(role).textAlign;
    }

    layoutRoleIsBold(role: ReportTextRole): boolean {
        return this._layoutRole(role).fontWeight === 'bold';
    }

    layoutRoleIsItalic(role: ReportTextRole): boolean {
        return this._layoutRole(role).fontStyle === 'italic';
    }

    layoutRoleColor(role: ReportTextRole): string {
        return this._layoutRole(role).color;
    }

    setLayoutRoleFontFamily(role: ReportTextRole, value: string): void {
        this._patchSelectedLayoutRole(role, { fontFamily: value });
    }

    setLayoutRoleFontSize(role: ReportTextRole, value: string | number): void {
        const size = Number(value);
        if (!Number.isFinite(size)) return;
        this._patchSelectedLayoutRole(role, { fontSize: Math.max(8, Math.min(72, Math.round(size))) });
    }

    setLayoutRoleAlign(role: ReportTextRole, align: ReportTextAlign): void {
        this._patchSelectedLayoutRole(role, { textAlign: align });
    }

    setLayoutRoleBold(role: ReportTextRole, enabled: boolean): void {
        this._patchSelectedLayoutRole(role, { fontWeight: enabled ? 'bold' : 'normal' });
    }

    setLayoutRoleItalic(role: ReportTextRole, enabled: boolean): void {
        this._patchSelectedLayoutRole(role, { fontStyle: enabled ? 'italic' : 'normal' });
    }

    setLayoutRoleColor(role: ReportTextRole, value: string): void {
        this._patchSelectedLayoutRole(role, { color: value });
    }

    private _patchSelectedLayoutRole(role: ReportTextRole, patch: ReportTextRoleStyle): void {
        const section = this.selectedLayoutSection();
        if (!section) return;
        const cellKey = this.selectedLayoutCellKey();
        if (cellKey && role !== 'title') {
            const styleKey = role === 'label' ? 'labelStyle' : 'valueStyle';
            const current = section.keyOverrides?.[cellKey]?.[styleKey] ?? {};
            this._patchSelectedKeyOverride({ [styleKey]: { ...current, ...patch } });
            return;
        }
        const key = role === 'title' ? 'titleStyle' : role === 'label' ? 'labelStyle' : 'valueStyle';
        const current = section.style?.[key] ?? {};
        const next = { ...current, ...patch };
        const mirrored =
            role === 'title'
                ? { ...patch }
                : patch.color
                  ? role === 'label'
                      ? { labelColor: patch.color }
                      : { valueColor: patch.color }
                  : {};
        this._patchSelectedLayoutStyle({ [key]: next, ...mirrored });
    }

    private _patchSelectedKeyOverride(patch: Partial<ReportKeyOverride>, unset: (keyof ReportKeyOverride)[] = []): void {
        const section = this.selectedLayoutSection();
        const key = this.selectedLayoutCellKey();
        if (!section || !key) return;
        const current = { ...(section.keyOverrides?.[key] ?? {}) };
        const next: ReportKeyOverride = { ...current, ...patch };
        for (const field of unset) delete next[field];
        this._patchSelectedLayout({
            keyOverrides: {
                ...(section.keyOverrides ?? {}),
                [key]: next,
            },
        });
    }

    selectedLayoutCellOverride(): ReportKeyOverride | null {
        const key = this.selectedLayoutCellKey();
        if (!key) return null;
        return this.selectedLayoutSection()?.keyOverrides?.[key] ?? {};
    }

    selectedLayoutCellTitle(): string {
        const key = this.selectedLayoutCellKey();
        if (!key) return '';
        const override = this.selectedLayoutSection()?.keyOverrides?.[key]?.label;
        const option = this.layoutParamOptions().find((item) => item.key === key);
        return override || option?.label || key;
    }

    setSelectedLayoutCellLabel(value: string): void {
        this._patchSelectedKeyOverride({ label: value });
    }

    setSelectedLayoutCellBackground(value: string): void {
        this._patchSelectedKeyOverride({ backgroundColor: value });
    }

    selectedLayoutCellHasBorder(): boolean {
        return Number(this.selectedLayoutCellOverride()?.borderWidth ?? 0) > 0;
    }

    setSelectedLayoutCellBorderEnabled(enabled: boolean): void {
        if (!enabled) {
            this._patchSelectedKeyOverride({ borderWidth: 0 });
            return;
        }
        const current = this.selectedLayoutCellOverride();
        this._patchSelectedKeyOverride({
            borderWidth: current?.borderWidth && current.borderWidth > 0 ? current.borderWidth : 1,
            borderColor: current?.borderColor || '#d6d3d1',
            borderRadius: current?.borderRadius && current.borderRadius > 0 ? current.borderRadius : 8,
        });
    }

    setSelectedLayoutCellBorderColor(value: string): void {
        this._patchSelectedKeyOverride({ borderColor: value });
    }

    setSelectedLayoutCellBorderWidth(value: string | number): void {
        const width = Number(value);
        if (!Number.isFinite(width)) return;
        this._patchSelectedKeyOverride({ borderWidth: Math.max(1, Math.min(12, Math.round(width))) });
    }

    selectedLayoutCellBorderRadius(): number {
        const explicit = Number(this.selectedLayoutCellOverride()?.borderRadius);
        if (Number.isFinite(explicit) && explicit >= 0) return explicit;
        return this.selectedLayoutCellHasBorder() ? 8 : 0;
    }

    setSelectedLayoutCellBorderRadius(value: string | number): void {
        const radius = Number(value);
        if (!Number.isFinite(radius)) return;
        this._patchSelectedKeyOverride({ borderRadius: Math.max(0, Math.min(48, Math.round(radius))) });
    }

    selectedLayoutCellRowLineMode(): 'inherit' | 'none' | ReportRowLineStyle {
        const override = this.selectedLayoutCellOverride();
        if (override?.showRowLine === false) return 'none';
        if (override?.showRowLine === true) {
            const style = override.rowLineStyle;
            return style === 'dotted' || style === 'dashed' ? style : 'solid';
        }
        return 'inherit';
    }

    setSelectedLayoutCellRowLineMode(mode: 'inherit' | 'none' | ReportRowLineStyle): void {
        if (mode === 'inherit') {
            this._patchSelectedKeyOverride({}, ['showRowLine', 'rowLineStyle', 'rowLineColor', 'rowLineWidth', 'rowLineMark']);
            return;
        }
        if (mode === 'none') {
            this._patchSelectedKeyOverride({ showRowLine: false }, ['rowLineStyle', 'rowLineColor', 'rowLineWidth', 'rowLineMark']);
            return;
        }
        this._patchSelectedKeyOverride({
            showRowLine: true,
            rowLineStyle: mode,
            rowLineColor: this.selectedLayoutCellRowLineColor(),
            rowLineWidth: this.selectedLayoutCellRowLineWidth(),
            rowLineMark: this.selectedLayoutCellRowLineMark(),
        });
    }

    selectedLayoutCellRowLineColor(): string {
        return (
            this.selectedLayoutCellOverride()?.rowLineColor ||
            this.selectedLayoutSection()?.rowLineColor ||
            '#d6d3d1'
        );
    }

    setSelectedLayoutCellRowLineColor(value: string): void {
        const mode = this.selectedLayoutCellRowLineMode();
        this._patchSelectedKeyOverride({
            showRowLine: mode === 'none' ? false : true,
            rowLineStyle: mode === 'inherit' || mode === 'none' ? this.selectedLayoutRowLineStyle() : mode,
            rowLineColor: value,
        });
    }

    selectedLayoutCellEffectiveRowLineStyle(): ReportRowLineStyle {
        const mode = this.selectedLayoutCellRowLineMode();
        if (mode === 'dotted' || mode === 'dashed' || mode === 'solid') return mode;
        return this.selectedLayoutRowLineStyle();
    }

    selectedLayoutCellRowLineWidth(): number {
        return clampRowLineWidth(
            this.selectedLayoutCellOverride()?.rowLineWidth ?? this.selectedLayoutSection()?.rowLineWidth
        );
    }

    setSelectedLayoutCellRowLineWidth(value: string | number): void {
        const mode = this.selectedLayoutCellRowLineMode();
        this._patchSelectedKeyOverride({
            rowLineWidth: clampRowLineWidth(value),
            ...(mode === 'inherit' || mode === 'none'
                ? {}
                : { showRowLine: true, rowLineStyle: mode }),
        });
    }

    selectedLayoutCellRowLineMark(): number {
        const style = this.selectedLayoutCellEffectiveRowLineStyle();
        return clampRowLineMark(
            this.selectedLayoutCellOverride()?.rowLineMark ?? this.selectedLayoutSection()?.rowLineMark,
            style,
            defaultRowLineMark(style)
        );
    }

    setSelectedLayoutCellRowLineMark(value: string | number): void {
        const mode = this.selectedLayoutCellRowLineMode();
        const style = this.selectedLayoutCellEffectiveRowLineStyle();
        this._patchSelectedKeyOverride({
            rowLineMark: clampRowLineMark(value, style),
            ...(mode === 'inherit' || mode === 'none'
                ? {}
                : { showRowLine: true, rowLineStyle: mode }),
        });
    }

    clearSelectedLayoutCell(): void {
        this.selectedLayoutCellKey.set(null);
        this.selectedLayoutCellPart.set('cell');
    }

    removeSelectedLayoutCell(): void {
        const key = this.selectedLayoutCellKey();
        if (!key) return;
        this.setLayoutParamVisible(key, false);
        this.clearSelectedLayoutCell();
    }

    addLayoutParam(key: string): void {
        this.setLayoutParamVisible(key, true);
        this.selectedLayoutCellKey.set(key);
        this.selectedLayoutCellPart.set('cell');
    }

    layoutHiddenParamOptions(): LayoutSheetItem[] {
        const section = this.selectedLayoutSection();
        return collectLayoutSheetItems(this.layoutSourceValue(), {
            keyOrder: section?.keyOrder,
        }).filter((item) => !this.isLayoutParamVisible(item.key));
    }

    setSelectedLayoutBackground(value: string): void {
        this._patchSelectedLayoutStyle({ backgroundColor: value });
    }

    setSelectedLayoutBorderEnabled(enabled: boolean): void {
        if (!enabled) {
            this._patchSelectedLayoutStyle({ borderWidth: 0 });
            return;
        }
        const current = this.selectedLayoutSection()?.style;
        this._patchSelectedLayoutStyle({
            borderWidth: current?.borderWidth && current.borderWidth > 0 ? current.borderWidth : 1,
            borderColor: current?.borderColor || '#d6d3d1',
            borderRadius: current?.borderRadius && current.borderRadius > 0 ? current.borderRadius : 8,
        });
    }

    setSelectedLayoutBorderColor(value: string): void {
        this._patchSelectedLayoutStyle({ borderColor: value });
    }

    setSelectedLayoutBorderWidth(value: string | number): void {
        const width = Number(value);
        if (!Number.isFinite(width)) return;
        this._patchSelectedLayoutStyle({ borderWidth: Math.max(1, Math.min(12, Math.round(width))) });
    }

    setSelectedLayoutBorderRadius(value: string | number): void {
        const radius = Number(value);
        if (!Number.isFinite(radius)) return;
        this._patchSelectedLayoutStyle({ borderRadius: Math.max(0, Math.min(48, Math.round(radius))) });
    }

    selectedLayoutHasBorder(): boolean {
        return Number(this.selectedLayoutSection()?.style?.borderWidth ?? 0) > 0;
    }

    selectedLayoutShowsParams(): boolean {
        const type = this.selectedLayoutSection()?.type;
        return type === 'keyValueGrid' || type === 'table' || type === 'card' || type === 'field' || type === 'dataTable';
    }

    selectedLayoutShowsRowLines(): boolean {
        return this.selectedLayoutSection()?.showRowLines !== false;
    }

    setSelectedLayoutShowRowLines(enabled: boolean): void {
        this._patchSelectedLayout({
            showRowLines: enabled,
            rowLineStyle: this.selectedLayoutRowLineStyle(),
            rowLineColor: this.selectedLayoutRowLineColor(),
        });
    }

    selectedLayoutRowLineStyle(): ReportRowLineStyle {
        const style = this.selectedLayoutSection()?.rowLineStyle;
        return style === 'dotted' || style === 'dashed' ? style : 'solid';
    }

    setSelectedLayoutRowLineStyle(style: ReportRowLineStyle): void {
        this._patchSelectedLayout({ showRowLines: true, rowLineStyle: style });
    }

    selectedLayoutRowLineColor(): string {
        return this.selectedLayoutSection()?.rowLineColor || '#d6d3d1';
    }

    setSelectedLayoutRowLineColor(value: string): void {
        this._patchSelectedLayout({ showRowLines: true, rowLineColor: value });
    }

    selectedLayoutRowLineWidth(): number {
        return clampRowLineWidth(this.selectedLayoutSection()?.rowLineWidth);
    }

    setSelectedLayoutRowLineWidth(value: string | number): void {
        this._patchSelectedLayout({ showRowLines: true, rowLineWidth: clampRowLineWidth(value) });
    }

    selectedLayoutRowLineMark(): number {
        const style = this.selectedLayoutRowLineStyle();
        return clampRowLineMark(this.selectedLayoutSection()?.rowLineMark, style, defaultRowLineMark(style));
    }

    setSelectedLayoutRowLineMark(value: string | number): void {
        this._patchSelectedLayout({
            showRowLines: true,
            rowLineMark: clampRowLineMark(value, this.selectedLayoutRowLineStyle()),
        });
    }

    layoutRowLineStyleKey(style: ReportRowLineStyle): string {
        if (style === 'dotted') return 'visitaGuide.layoutRowLineDotted';
        if (style === 'dashed') return 'visitaGuide.layoutRowLineDashed';
        return 'visitaGuide.layoutRowLineSolid';
    }

    setSelectedLayoutLabelColor(value: string): void {
        this._patchSelectedLayoutStyle({ labelColor: value });
    }

    setSelectedLayoutValueColor(value: string): void {
        this._patchSelectedLayoutStyle({ valueColor: value });
    }

    layoutParamLabel(key: string): string {
        return this.layoutParamOptions().find((item) => item.key === key)?.label || humanizeParamKey(key);
    }

    layoutSourceValue(): unknown {
        const section = this.selectedLayoutSection();
        if (!section?.dataPath) return null;
        return valueAtDataPath(this.previewData(), section.dataPath);
    }

    layoutParamGroups(): LayoutParamGroup[] {
        return layoutParamGroups(this.layoutSourceValue());
    }

    layoutOrderedItems(): LayoutSheetItem[] {
        const section = this.selectedLayoutSection();
        return collectLayoutSheetItems(this.layoutSourceValue(), {
            hiddenKeys: section?.hiddenKeys,
            keyOrder: section?.keyOrder,
        });
    }

    layoutParamOptions(): { key: string; label: string }[] {
        const value = this.layoutSourceValue();
        const groups = layoutParamGroups(value);
        const scalars = collectScalarParams(value, { skipObjectArrays: true, maxItems: 250 }).map((entry) => ({
            key: entry.key,
            label: entry.label,
        }));
        const tables = groups
            .filter((group) => group.kind === 'table')
            .map((group) => ({ key: group.key, label: group.label }));
        return [...tables, ...scalars];
    }

    isLayoutParamVisible(key: string): boolean {
        return !isHiddenParamKey(key, this.selectedLayoutSection()?.hiddenKeys);
    }

    setLayoutParamVisible(key: string, visible: boolean): void {
        const section = this.selectedLayoutSection();
        if (!section) return;
        this._patchSelectedLayout({ hiddenKeys: setHiddenParamKey(section.hiddenKeys, key, visible) });
        if (!visible && this.selectedLayoutCellKey() && !this.isLayoutParamVisible(this.selectedLayoutCellKey()!)) {
            this.clearSelectedLayoutCell();
        }
    }

    onLayoutParamDrop(event: CdkDragDrop<LayoutSheetItem[]>): void {
        if (event.previousIndex === event.currentIndex) return;
        const visible = this.layoutOrderedItems().map((item) => item.key);
        moveItemInArray(visible, event.previousIndex, event.currentIndex);
        this._setLayoutKeyOrderFromVisible(visible);
    }

    moveSelectedLayoutParam(delta: -1 | 1): void {
        const key = this.selectedLayoutCellKey();
        if (!key) return;
        const visible = this.layoutOrderedItems().map((item) => item.key);
        const from = visible.indexOf(key);
        const to = from + delta;
        if (from < 0 || to < 0 || to >= visible.length) return;
        moveItemInArray(visible, from, to);
        this._setLayoutKeyOrderFromVisible(visible);
    }

    canMoveSelectedLayoutParam(delta: -1 | 1): boolean {
        const key = this.selectedLayoutCellKey();
        if (!key) return false;
        const visible = this.layoutOrderedItems().map((item) => item.key);
        const from = visible.indexOf(key);
        const to = from + delta;
        return from >= 0 && to >= 0 && to < visible.length;
    }

    private _setLayoutKeyOrderFromVisible(visibleOrdered: string[]): void {
        const section = this.selectedLayoutSection();
        if (!section) return;
        const allKeys = collectLayoutSheetItems(this.layoutSourceValue(), { hiddenKeys: [] }).map((item) => item.key);
        const seed = sortByKeyOrder(allKeys, section.keyOrder, (key) => key);
        this._patchSelectedLayout({ keyOrder: applyVisibleKeyReorder(seed, visibleOrdered) });
    }

    canApplyLayoutStyleToAll(): boolean {
        return this.layoutSections().length > 1 && Boolean(this.selectedLayoutSection());
    }

    applySelectedLayoutStyleToAll(): void {
        const source = this.selectedLayoutSection();
        if (!source || this.layoutSections().length < 2) return;

        const snapshot = this._layoutStyleSnapshot(source);
        const showRowLines = source.showRowLines !== false;
        const rowLineStyle = source.rowLineStyle;
        const rowLineColor = source.rowLineColor;
        const rowLineWidth = source.rowLineWidth;
        const rowLineMark = source.rowLineMark;
        const columnsPerRow = source.columnsPerRow;

        this.layoutSections.update((list) =>
            list.map((section) => {
                if (section.id === source.id) return section;

                const style = { ...(section.style ?? {}) };
                for (const key of Object.keys(snapshot) as (keyof typeof snapshot)[]) {
                    const value = snapshot[key];
                    if (value === undefined) delete style[key];
                    else (style as Record<string, unknown>)[key] = value;
                }

                return {
                    ...section,
                    showRowLines,
                    rowLineStyle,
                    rowLineColor,
                    rowLineWidth,
                    rowLineMark,
                    columnsPerRow:
                        source.type === 'keyValueGrid' && section.type === 'keyValueGrid'
                            ? columnsPerRow
                            : section.columnsPerRow,
                    style,
                };
            })
        );

        this._snack.open(this._transloco.translate('visitaGuide.layoutStyleAppliedToAll'), undefined, {
            duration: 2500,
        });
    }

    private _layoutStyleSnapshot(section: ReportSection): NonNullable<ReportSection['style']> {
        const style = section.style ?? {};
        return {
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            fontStyle: style.fontStyle,
            fontFamily: style.fontFamily,
            textAlign: style.textAlign,
            color: style.color,
            labelColor: style.labelColor,
            valueColor: style.valueColor,
            titleStyle: style.titleStyle ? { ...style.titleStyle } : undefined,
            labelStyle: style.labelStyle ? { ...style.labelStyle } : undefined,
            valueStyle: style.valueStyle ? { ...style.valueStyle } : undefined,
            backgroundColor: style.backgroundColor,
            padding: style.padding,
            borderWidth: style.borderWidth,
            borderColor: style.borderColor,
            borderRadius: style.borderRadius,
            variant: style.variant,
        };
    }

    removeSelectedLayoutSection(): void {
        const id = this.selectedLayoutSectionId();
        if (!id) return;
        this.layoutSections.update((list) =>
            this._compactLayoutPages(
                list.filter((section) => section.id !== id).map((section, index) => ({ ...section, order: index }))
            )
        );
        this.selectedLayoutSectionId.set(null);
        this.layoutEditorKind.set(null);
    }

    moveSelectedLayout(offset: number): void {
        const id = this.selectedLayoutSectionId();
        if (!id) return;
        const list = [...this.layoutSections()];
        const index = list.findIndex((section) => section.id === id);
        const next = index + offset;
        if (index < 0 || next < 0 || next >= list.length) return;
        moveItemInArray(list, index, next);
        this.layoutSections.set(list.map((section, order) => ({ ...section, order })));
    }

    async saveLayoutTemplate(): Promise<boolean> {
        this.isSavingLayout.set(true);
        try {
            if (!this.layoutSections().length) this.seedDefaultLayout();
            const template = await this._persistWorkingTemplate();
            if (!template) throw new Error('template');
            this._snack.open(this._transloco.translate('visitaGuide.layoutSaved'), undefined, {
                duration: 2500,
            });
            this._refreshTemplates();
            return true;
        } catch {
            this._snack.open(this._transloco.translate('visitaGuide.layoutSaveFailed'), undefined, {
                duration: 3500,
            });
            return false;
        } finally {
            this.isSavingLayout.set(false);
        }
    }

    async saveLayoutAndGenerate(): Promise<void> {
        if (!this.layoutSections().length) this.seedDefaultLayout();
        const saved = await this.saveLayoutTemplate();
        if (!saved) return;
        if (this.mode() === 'batch') {
            this._continueBatchUpload();
            return;
        }
        this.step.set('generate');
    }

    private _continueBatchUpload(): void {
        const configId = this._state.configId();
        if (!configId) {
            this._snack.open(this._transloco.translate('visitaGuide.consultFailed'), undefined, {
                duration: 3500,
            });
            return;
        }
        void this._router.navigate(['/smart-batch', configId, 'batch', 'new'], {
            queryParams: { from: 'guide' },
        });
    }

    private _patchSelectedLayout(patch: Partial<ReportSection>): void {
        const id = this.selectedLayoutSectionId();
        if (!id) return;
        this.layoutSections.update((list) =>
            list.map((section) => (section.id === id ? { ...section, ...patch } : section))
        );
    }

    private _patchSelectedLayoutStyle(patch: NonNullable<ReportSection['style']>): void {
        const id = this.selectedLayoutSectionId();
        if (!id) return;
        this.layoutSections.update((list) =>
            list.map((section) =>
                section.id === id
                    ? { ...section, style: { ...(section.style ?? {}), ...patch } }
                    : section
            )
        );
    }

    private _sectionFromCard(card: GuideResultCard): ReportSection {
        return {
            id: `consulta-${card.sequence}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            type: 'keyValueGrid',
            order: 0,
            dataPath: `results.${card.sequence}`,
            label: card.label,
            columnsPerRow: 2,
            showWhenEmpty: true,
            emptyMessage:
                card.error ||
                this._transloco.translate(
                    card.status === 'skipped'
                        ? 'visitaGuide.resultStatusSkipped'
                        : 'visitaGuide.resultStatusEmpty'
                ),
        };
    }

    toggleInclude(sequence: number): void {
        this._state.includeItems.update((items) =>
            items.map((item) =>
                item.sequence === sequence ? { ...item, included: !item.included } : item
            )
        );
    }

    dropInclude(event: CdkDragDrop<unknown>): void {
        const items = [...this.includeItems()];
        moveItemInArray(items, event.previousIndex, event.currentIndex);
        this._state.includeItems.set(items);
    }

    pickVisitaTemplate(): void {
        const template = this.clonedTemplate() ?? this.systemTemplates()[0] ?? null;
        if (!template) {
            this.pickScratch();
            return;
        }
        this._applyPickedTemplate(template, 'visita');
        this._afterTemplatePicked();
    }

    pickSystemTemplate(template: SmartReportTemplate): void {
        this._applyPickedTemplate(template, 'visita');
        this._afterTemplatePicked();
    }

    pickMyTemplate(template: SmartReportTemplate): void {
        this._applyPickedTemplate(template, 'mine');
        this._afterTemplatePicked();
    }

    pickScratch(): void {
        if (this.mode() === 'batch') {
            this._snack.open(this._transloco.translate('visitaGuide.templateBatchCreateHint'), undefined, {
                duration: 4500,
            });
            return;
        }
        this._state.templateChoice.set('scratch');
        this._state.selectedTemplate.set(null);
        this._resetLayoutBranding();
        this.layoutSections.set([]);
        this.seedDefaultLayout();
        this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
        this.layoutEditorKind.set(this.layoutSections()[0] ? 'block' : 'page');
        this.enterLayout();
        this.step.set('layout');
    }

    isTemplateSelected(template: SmartReportTemplate): boolean {
        return Boolean(template._id && this.selectedTemplate()?._id === template._id);
    }

    async openDesigner(blank: boolean): Promise<void> {
        this._bridgePreviewData();
        const configId = this._state.configId();
        const queryParams = { from: 'guide' };

        if (!blank) {
            let template = this.selectedTemplate() ?? this.clonedTemplate();
            if (template?.type === 'System' && template.sections?.length) {
                template = await firstValueFrom(
                    this._reports.createTemplate({
                        name: this.reportTitle() || template.name,
                        description: template.description,
                        type: 'client',
                        country: template.country,
                        batchConfiguration: configId ?? undefined,
                        sections: template.sections,
                        logo: template.logo,
                        primaryColor: template.primaryColor,
                        header: template.header,
                        footer: template.footer,
                        pageSize: template.pageSize ?? 'A4',
                        orientation: template.orientation ?? 'portrait',
                        pdfEngine: template.pdfEngine ?? 'puppeteer',
                    })
                );
                this._state.selectedTemplate.set(template);
                this._state.clonedTemplate.set(template);
            }
            const templateId = template?._id;
            if (configId && templateId && template?.type !== 'System') {
                void this._router.navigate(['/smart-batch', configId, 'report-builder', templateId], {
                    queryParams,
                });
                return;
            }
            if (templateId && template?.type !== 'System') {
                void this._router.navigate(['/smart-batch', 'report-builder', templateId], {
                    queryParams,
                });
                return;
            }
        }

        if (configId) {
            void this._router.navigate(['/smart-batch', configId, 'report-builder'], { queryParams });
            return;
        }
        void this._router.navigate(['/smart-batch', 'report-builder'], { queryParams });
    }

    openMoldEditor(): void {
        void this.openDesigner(false);
    }

    openFullReport(): void {
        const configId = this._state.configId();
        const batchId = this._state.batchId();
        if (!configId || !batchId) return;
        void this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report'], {
            queryParams: { rowIndex: '0' },
        });
    }

    onLayoutSheetImageChange(image: ReportSheetImage): void {
        this._state.sheetImages.update((list) =>
            list.map((item) => (item.id === image.id ? { ...item, ...image } : item))
        );
    }

    onSheetImagesSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const files = Array.from(input.files ?? []);
        input.value = '';
        const remaining = Math.max(0, 12 - this.sheetImages().length);
        const origin = this._pendingSheetImagePoint;
        this._pendingSheetImagePoint = null;
        files.slice(0, remaining).forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = () => {
                const src = String(reader.result ?? '');
                if (!src) return;
                const offset = origin ? index : this.sheetImages().length;
                this._state.sheetImages.update((list) => [
                    ...list,
                    {
                        id: `img-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                        src,
                        x: (origin?.x ?? 48) + offset * 24,
                        y: (origin?.y ?? 48) + offset * 24,
                        width: 160,
                        height: 80,
                        rotation: 0,
                        page: origin?.page ?? 0,
                    },
                ]);
            };
            reader.readAsDataURL(file);
        });
    }

    clearSheetImage(id: string): void {
        this._state.sheetImages.update((list) => list.filter((item) => item.id !== id));
        if (this.selectedLayoutOverlay() === `img:${id}`) this.selectedLayoutOverlay.set(null);
    }

    selectedSheetImage(): ReportSheetImage | null {
        const overlay = this.selectedLayoutOverlay();
        if (!overlay?.startsWith('img:')) return null;
        const id = overlay.slice(4);
        return this.sheetImages().find((item) => item.id === id) ?? null;
    }

    imageOverlayId(id: string): ReportOverlayId {
        return `img:${id}`;
    }

    setSelectedSheetImageRotation(value: string | number): void {
        const image = this.selectedSheetImage();
        if (!image) return;
        const rotation = Number(value);
        if (!Number.isFinite(rotation)) return;
        this.onLayoutSheetImageChange({ ...image, rotation: Math.round(rotation) });
    }

    onLogoSelected(event: Event): void {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => this._state.logoDataUrl.set(String(reader.result ?? ''));
        reader.readAsDataURL(file);
    }

    setFieldValue(key: string, value: string): void {
        this._state.setInputValue(key, value);
    }

    fieldValue(key: string): string {
        return this.inputValues()[key] ?? '';
    }

    async generatePdf(printHtmlOverride?: string | null): Promise<void> {
        this.isGenerating.set(true);
        try {
            if (!this.layoutSections().length) this.seedDefaultLayout();
            const template = await this._persistWorkingTemplate();
            if (!template?._id) throw new Error('template');
            await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
            await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
            const sample = this.previewData();
            const printHtml = printHtmlOverride ?? this._editorPrintHtml();
            const blob = await firstValueFrom(
                this._reports.downloadTemplateSample(template._id, {
                    sampleData: sample,
                    ...(printHtml ? { printHtml } : {}),
                })
            );
            const url = URL.createObjectURL(blob);
            this._state.pdfDataUrl.set(url);
            this.downloadDataUrl(url, `${this.fileBaseName()}.pdf`);
            this._snack.open(this._transloco.translate('visitaGuide.pdfReady'), undefined, {
                duration: 3000,
            });
        } catch {
            const batchId = this._state.batchId();
            const template = this.selectedTemplate();
            if (batchId && template?._id) {
                try {
                    const printHtml = printHtmlOverride ?? this._editorPrintHtml();
                    const report = await firstValueFrom(
                        this._reports.createReport({
                            template: template._id,
                            smartBatch: batchId,
                            name: this.reportTitle() || template.name,
                        })
                    );
                    const result = await firstValueFrom(
                        this._reports.generateReport(report._id!, {
                            rowIndex: 0,
                            ...(printHtml ? { printHtml } : {}),
                        })
                    );
                    if (result.pdf?.buffer) {
                        const dataUrl = `data:application/pdf;base64,${result.pdf.buffer}`;
                        this._state.pdfDataUrl.set(dataUrl);
                        this.downloadDataUrl(dataUrl, `${this.fileBaseName()}.pdf`);
                        this._snack.open(this._transloco.translate('visitaGuide.pdfReady'), undefined, {
                            duration: 3000,
                        });
                        return;
                    }
                } catch {
                    /* fall through */
                }
            }
            this._snack.open(this._transloco.translate('visitaGuide.pdfFailed'), undefined, {
                duration: 4000,
            });
        } finally {
            this.isGenerating.set(false);
        }
    }

    private _editorPrintHtml(): string | null {
        const previews = this._previews?.toArray() ?? [];
        const printSource = previews.find((item) => item.printCapture());
        if (printSource) return printSource.exportPrintHtml();
        const preview =
            this.step() === 'generate'
                ? previews.find((item) => !item.reorderable()) ?? previews[previews.length - 1]
                : previews.find((item) => item.reorderable()) ?? previews[previews.length - 1];
        return preview?.exportPrintHtml() ?? null;
    }

    downloadJson(): void {
        const payload = {
            input: this._state.buildRow(),
            rows: this.batch()?.rows ?? [],
            included: this.includeItems().filter((item) => item.included),
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        this.downloadDataUrl(url, `${this.fileBaseName()}.json`);
        URL.revokeObjectURL(url);
    }

    entityTitleKeys(): string[] {
        return this.entities()
            .map((entity) => this.entityOptions.find((item) => item.id === entity)?.titleKey)
            .filter((key): key is string => Boolean(key));
    }

    flagFor(iso: string): string {
        return getCountryFlag(iso);
    }

    resultStatusKey(status: 'ok' | 'failed' | 'skipped' | 'empty'): string {
        const keys = {
            ok: 'visitaGuide.resultStatusOk',
            failed: 'visitaGuide.resultStatusFailed',
            skipped: 'visitaGuide.resultStatusSkipped',
            empty: 'visitaGuide.resultStatusEmpty',
        };
        return keys[status];
    }

    includeCardStatus(sequence: number): 'ok' | 'failed' | 'skipped' | 'empty' | null {
        return this.resultCards().find((card) => card.sequence === sequence)?.status ?? null;
    }

    resultsAllHintLabel(): string {
        const summary = this.resultSummary();
        return this._transloco.translate('visitaGuide.resultsAllHint', {
            count: summary.total,
            ok: summary.ok,
            failed: summary.failed,
        });
    }

    confirmEndpoints(): void {
        this.goNext();
    }

    selectedEndpointsLabel(): string {
        return this._transloco.translate('visitaGuide.endpointsSelected', {
            count: this.selectedFeatures().length,
        });
    }

    toggleFeature(feature: AppFeature): void {
        const current = this.selectedFeatures();
        if (current.some((item) => item._id === feature._id)) {
            this._state.selectedFeatures.set(current.filter((item) => item._id !== feature._id));
            return;
        }
        this._state.selectedFeatures.set([...current, feature]);
    }

    removeFeatureFromCart(feature: AppFeature): void {
        this._state.selectedFeatures.set(this.selectedFeatures().filter((item) => item._id !== feature._id));
    }

    dropEndpointOnCart(event: CdkDragDrop<AppFeature[]>): void {
        if (event.previousContainer === event.container) {
            const list = [...this.selectedFeatures()];
            moveItemInArray(list, event.previousIndex, event.currentIndex);
            this._state.selectedFeatures.set(list);
            return;
        }
        const feature = event.item.data as AppFeature | undefined;
        if (!feature?._id || this.isFeatureSelected(feature)) return;
        const list = [...this.selectedFeatures()];
        const index = Math.min(Math.max(0, event.currentIndex), list.length);
        list.splice(index, 0, feature);
        this._state.selectedFeatures.set(list);
    }

    dropEndpointOnCatalog(event: CdkDragDrop<AppFeature[]>): void {
        if (event.previousContainer === event.container) return;
        const feature = event.item.data as AppFeature | undefined;
        if (!feature?._id) return;
        this.removeFeatureFromCart(feature);
    }

    isFeatureSelected(feature: AppFeature): boolean {
        return this.selectedFeatures().some((item) => item._id === feature._id);
    }

    toggleRequiredParamFilter(field: string): void {
        const current = this.requiredParamFilters();
        this._state.requiredParamFilters.set(
            current.includes(field) ? current.filter((item) => item !== field) : [...current, field]
        );
    }

    isRequiredParamFilterActive(field: string): boolean {
        return this.requiredParamFilters().includes(field);
    }

    clearRequiredParamFilters(): void {
        this._state.requiredParamFilters.set([]);
    }

    paramFilterLabelKey(field: string): string {
        return paramFieldLabelKey(field);
    }

    paramFilterLabelParams(field: string): { field: string } {
        return { field: humanizeParamField(field) };
    }

    featureGroupLabelKey(group: FeatureGroupId): string {
        const keys: Record<FeatureGroupId, string> = {
            citizen: 'visitaGuide.entityPerson',
            vehicle: 'visitaGuide.entityVehicle',
            company: 'visitaGuide.entityCompany',
            other: 'createBatchConfig.groupOther',
        };
        return keys[group];
    }

    featureParamFields(feature: AppFeature): FeatureParamChip[] {
        return featureParamChips(feature);
    }

    paramChipClass(required: boolean): string {
        return requiredParamChipClass(required);
    }

    paramEnumClass(): string {
        return paramEnumChipClass;
    }

    endpointHoverDetails(feature: AppFeature) {
        return visitaEndpointTooltipDetails(
            feature,
            (key, params) => this._transloco.translate(key, params),
            getAppFeatureCatalogCopy(this._transloco, feature.code)
        );
    }

    hoveredEndpointDetails() {
        const feature = this.hoveredEndpoint();
        return feature ? this.endpointHoverDetails(feature) : null;
    }

    onEndpointCardEnter(feature: AppFeature, event: MouseEvent): void {
        if (this._endpointHoverHide) {
            clearTimeout(this._endpointHoverHide);
            this._endpointHoverHide = null;
        }
        this._endpointHoverArmed = true;
        this.hoveredEndpoint.set(feature);
        this._armEndpointHover(event);
    }

    onEndpointCardMove(feature: AppFeature, event: MouseEvent): void {
        if (this.hoveredEndpoint()?._id !== feature._id) this.hoveredEndpoint.set(feature);
        this._endpointHoverArmed = true;
        this._armEndpointHover(event);
    }

    /** Show the tooltip only while the cursor is still; any move hides it and restarts the wait. */
    private _armEndpointHover(event: MouseEvent | PointerEvent): void {
        this._placeEndpointHover(event);
        this.endpointHoverVisible.set(false);
        if (this._endpointHoverShow) clearTimeout(this._endpointHoverShow);
        this._endpointHoverShow = setTimeout(() => {
            this.endpointHoverVisible.set(true);
            this._endpointHoverShow = null;
        }, 420);
    }

    private _placeEndpointHover(event: MouseEvent): void {
        const pad = 10;
        const offset = 16;
        const maxW = Math.min(384, window.innerWidth - 32);
        const tipH = 140;
        const flipX = event.clientX + offset + maxW > window.innerWidth - pad;
        const flipY = event.clientY + offset + tipH > window.innerHeight - pad;
        this.endpointHoverFlipX.set(flipX);
        this.endpointHoverFlipY.set(flipY);
        this.endpointHoverLeft.set(flipX ? event.clientX - offset : event.clientX + offset);
        this.endpointHoverTop.set(flipY ? event.clientY - offset : event.clientY + offset);
    }

    onEndpointCardLeave(): void {
        this._endpointHoverArmed = false;
        if (this._endpointHoverShow) {
            clearTimeout(this._endpointHoverShow);
            this._endpointHoverShow = null;
        }
        this.endpointHoverVisible.set(false);
        if (this._endpointHoverHide) clearTimeout(this._endpointHoverHide);
        this._endpointHoverHide = setTimeout(() => {
            this.hoveredEndpoint.set(null);
            this._endpointHoverHide = null;
        }, 280);
    }

    selectVisibleEndpoints(): void {
        const visible = this.visibleEndpointFeatures();
        const current = this.selectedFeatures();
        const seen = new Set(current.map((item) => item._id));
        const merged = [...current];
        for (const feature of visible) {
            if (seen.has(feature._id)) continue;
            seen.add(feature._id);
            merged.push(feature);
        }
        this._state.selectedFeatures.set(merged);
    }

    clearEndpointSelection(): void {
        this._state.selectedFeatures.set([]);
    }

    ensureFeaturesLoaded(): void {
        if (this.availableFeatures().length || this.isLoadingFeatures()) return;
        this.isLoadingFeatures.set(true);
        this.featuresError.set(null);
        this._batch.getAvailableFeatures().subscribe({
            next: (res) => {
                this.availableFeatures.set(res.data || []);
                this.isLoadingFeatures.set(false);
            },
            error: () => {
                this.isLoadingFeatures.set(false);
                this.featuresError.set(this._transloco.translate('visitaGuide.endpointsLoadFailed'));
            },
        });
    }

    private _sectionsForPreview(template: SmartReportTemplate): ReportSection[] {
        const cards = this.layoutSourceCards();
        const includedItems = this.includeItems().length
            ? this.includeItems().filter((item) => item.included)
            : cards.map((card) => ({
                  sequence: card.sequence,
                  label: card.label,
                  included: true,
              }));
        const includedSet = new Set(includedItems.map((item) => item.sequence));
        const sections = (template.sections ?? []).filter((section) => {
            const path = section.dataPath ?? '';
            const match = path.match(/results\.(\d+)/);
            if (!match) return true;
            return includedSet.size === 0 || includedSet.has(Number(match[1]));
        });
        const bySeq = new Map<number, ReportSection[]>();
        const rest: ReportSection[] = [];
        for (const section of sections) {
            const match = section.dataPath?.match(/results\.(\d+)/);
            if (!match) {
                rest.push(section);
                continue;
            }
            const seq = Number(match[1]);
            bySeq.set(seq, [...(bySeq.get(seq) ?? []), section]);
        }
        const cardBySeq = new Map(cards.map((card) => [card.sequence, card]));
        for (const item of includedItems) {
            if (bySeq.has(item.sequence)) continue;
            const card = cardBySeq.get(item.sequence);
            const emptyMessage =
                card?.error ||
                (card?.status === 'skipped'
                    ? this._transloco.translate('visitaGuide.resultStatusSkipped')
                    : this._transloco.translate('visitaGuide.resultStatusEmpty'));
            bySeq.set(item.sequence, [
                {
                    id: `visita-step-${item.sequence}`,
                    type: 'keyValueGrid',
                    order: item.sequence,
                    dataPath: `results.${item.sequence}`,
                    label: item.label,
                    showWhenEmpty: true,
                    emptyMessage,
                },
            ]);
        }
        if (!includedItems.length) return [...rest, ...sections];
        return [...rest, ...includedItems.flatMap((item) => bySeq.get(item.sequence) ?? [])];
    }

    private async _persistWorkingTemplate(): Promise<SmartReportTemplate | null> {
        const draft = this.previewTemplate();
        if (!draft) return null;
        const configId = this._state.configId();
        const payload: Partial<SmartReportTemplate> = {
            name: this.reportTitle() || draft.name,
            primaryColor: this.primaryColor() || draft.primaryColor,
            pageBackgroundColor: this.pageBackgroundColor() || '#ffffff',
            logo: this.logoDataUrl() || draft.logo,
            legend: this.legend(),
            showPageNumbers: this.showPageNumbers(),
            pageNumberPosition: 'bottom-center',
            watermark: {
                enabled: this.watermarkEnabled(),
                type: this.watermarkType(),
                text: this.watermarkText() || this.reportTitle() || 'CONFIDENTIAL',
                opacity: this.watermarkOpacity(),
                pattern: this.watermarkPattern(),
                x: this.watermarkX(),
                y: this.watermarkY(),
                width: this.watermarkWidth(),
                height: this.watermarkHeight(),
                rotation: this.watermarkRotation(),
            },
            logoSettings: {
                enabled: Boolean(this.logoDataUrl()),
                x: this.logoX(),
                y: this.logoY(),
                width: this.logoWidth(),
                height: this.logoHeight(),
                rotation: this.logoRotation(),
                autoFitContent: true,
            },
            sheetImages: this.sheetImages(),
            sections: JSON.parse(JSON.stringify(this._sortLayoutByFrame(this.layoutSections()))),
            signature: draft.signature,
            sampleData: this.previewData(),
            batchConfiguration: configId ?? draft.batchConfiguration,
            category: this.entities().length === 1 ? this.entities()[0] : draft.category,
        };

        const isSystemTemplate = draft.type === 'System';
        if (draft._id && !isSystemTemplate) {
            const updated = await firstValueFrom(this._reports.updateTemplate(draft._id, payload));
            this._state.selectedTemplate.set(updated);
            if (configId && updated._id) {
                await firstValueFrom(
                    this._batch.updateConfiguration(configId, { preferredReportTemplate: updated._id })
                );
            }
            return updated;
        }

        const created = await firstValueFrom(
            this._reports.createTemplate({
                ...payload,
                type: 'client',
                country: this.countryIso() === 'co' ? 'Colombia' : draft.country,
                pageSize: draft.pageSize ?? 'A4',
                orientation: draft.orientation ?? 'portrait',
                pdfEngine: draft.pdfEngine ?? 'puppeteer',
            })
        );
        this._state.selectedTemplate.set(created);
        this._state.clonedTemplate.set(created);
        this._state.templateChoice.set('mine');
        if (configId && created._id) {
            await firstValueFrom(
                this._batch.updateConfiguration(configId, { preferredReportTemplate: created._id })
            );
        }
        return created;
    }

    private _refreshTemplates(): void {
        this._reports.getTemplates().subscribe();
    }

    private _applyPickedTemplate(template: SmartReportTemplate, choice: GuideTemplateChoice): void {
        this._state.templateChoice.set(choice);
        this._state.selectedTemplate.set(template);
        this.hydrateCustomize(template, true);
        if (this.mode() === 'batch') return;
        this.layoutSections.set(
            (template.sections ?? []).map((section, index) => ({ ...section, order: index }))
        );
        this.seedDefaultLayout();
        this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
        this.layoutEditorKind.set(this.layoutSections()[0] ? 'block' : 'page');
        this.enterLayout();
    }

    private _afterTemplatePicked(): void {
        if (this.mode() === 'batch') {
            void this._finishBatchTemplatePick();
            return;
        }
        this.goNext();
    }

    private async _finishBatchTemplatePick(): Promise<void> {
        const template = this.selectedTemplate();
        const configId = this._state.configId();
        if (!template?._id || !configId) {
            this._snack.open(this._transloco.translate('visitaGuide.pickTemplate'), undefined, {
                duration: 2500,
            });
            return;
        }
        try {
            await firstValueFrom(
                this._batch.updateConfiguration(configId, { preferredReportTemplate: template._id })
            );
        } catch {
            this._snack.open(this._transloco.translate('visitaGuide.layoutSaveFailed'), undefined, {
                duration: 3500,
            });
            return;
        }
        this._continueBatchUpload();
    }

    private _sortedTemplates(
        templates: SmartReportTemplate[],
        selected: Set<GuideEntity>
    ): SmartReportTemplate[] {
        return templates.slice().sort((a, b) => {
            const aMatch = a.category && selected.has(a.category) ? 0 : 1;
            const bMatch = b.category && selected.has(b.category) ? 0 : 1;
            if (aMatch !== bMatch) return aMatch - bMatch;
            return (a.name || '').localeCompare(b.name || '');
        });
    }

    private _templateMatchesSearch(template: SmartReportTemplate): boolean {
        const query = this.templateSearchQuery().trim().toLowerCase();
        if (!query) return true;
        const blob = `${template.name ?? ''} ${template.description ?? ''} ${template.category ?? ''}`.toLowerCase();
        return blob.includes(query);
    }

    private _resetLayoutBranding(): void {
        this._state.reportTitle.set(pipelineName(this.entities()));
        this._state.primaryColor.set('#0f172a');
        this._state.pageBackgroundColor.set('#ffffff');
        this._state.logoDataUrl.set(null);
        this._state.logoX.set(32);
        this._state.logoY.set(32);
        this._state.logoWidth.set(160);
        this._state.logoHeight.set(60);
        this._state.logoRotation.set(0);
        this._state.sheetImages.set([]);
        this._state.legend.set('');
        this._state.watermarkEnabled.set(false);
        this._state.watermarkType.set('text');
        this._state.watermarkText.set('');
        this._state.watermarkOpacity.set(0.08);
        this._state.watermarkPattern.set('single');
        this._state.watermarkX.set(250);
        this._state.watermarkY.set(420);
        this._state.watermarkWidth.set(280);
        this._state.watermarkHeight.set(160);
        this._state.watermarkRotation.set(-15);
        this._state.showPageNumbers.set(true);
    }

    private hydrateCustomize(template: SmartReportTemplate, force = false): void {
        if (force || !this.reportTitle()) this._state.reportTitle.set(template.name);
        if (force || template.primaryColor) this._state.primaryColor.set(template.primaryColor || '#0f172a');
        if (force || template.pageBackgroundColor) {
            this._state.pageBackgroundColor.set(template.pageBackgroundColor || '#ffffff');
        }
        if (force || template.logo) this._state.logoDataUrl.set(template.logo || null);
        this._state.sheetImages.set(Array.isArray(template.sheetImages) ? template.sheetImages : []);
        if (force || template.legend) this._state.legend.set(template.legend || '');
        if (force || typeof template.showPageNumbers === 'boolean') {
            this._state.showPageNumbers.set(template.showPageNumbers ?? true);
        }
        if (template.watermark) {
            this._state.watermarkEnabled.set(Boolean(template.watermark.enabled));
            this._state.watermarkType.set(template.watermark.type === 'logo' ? 'logo' : 'text');
            this._state.watermarkText.set(template.watermark.text || '');
            this._state.watermarkOpacity.set(template.watermark.opacity ?? 0.08);
            this._state.watermarkPattern.set(
                template.watermark.pattern === 'repeated' ? 'repeated' : 'single'
            );
            if (typeof template.watermark.x === 'number') this._state.watermarkX.set(template.watermark.x);
            if (typeof template.watermark.y === 'number') this._state.watermarkY.set(template.watermark.y);
            if (typeof template.watermark.width === 'number') {
                this._state.watermarkWidth.set(template.watermark.width);
            }
            if (typeof template.watermark.height === 'number') {
                this._state.watermarkHeight.set(template.watermark.height);
            }
            if (typeof template.watermark.rotation === 'number') {
                this._state.watermarkRotation.set(template.watermark.rotation);
            }
        }
        if (force && !template.watermark) {
            this._state.watermarkEnabled.set(false);
        }
        if (template.logoSettings) {
            if (typeof template.logoSettings.x === 'number') this._state.logoX.set(template.logoSettings.x);
            if (typeof template.logoSettings.y === 'number') this._state.logoY.set(template.logoSettings.y);
            if (typeof template.logoSettings.width === 'number') {
                this._state.logoWidth.set(template.logoSettings.width);
            }
            if (typeof template.logoSettings.height === 'number') {
                this._state.logoHeight.set(template.logoSettings.height);
            }
            if (typeof template.logoSettings.rotation === 'number') {
                this._state.logoRotation.set(template.logoSettings.rotation);
            }
        }
    }

    private ensureIncludeItems(): void {
        const cards = this.layoutSourceCards();
        const current = this.includeItems();
        const same =
            current.length === cards.length &&
            current.every((item, index) => item.sequence === cards[index]?.sequence);
        if (same) return;
        const previous = new Map(current.map((item) => [item.sequence, item.included]));
        this._state.includeItems.set(
            cards.map((card) => ({
                sequence: card.sequence,
                label: card.label,
                featureCode: card.code,
                included: previous.get(card.sequence) ?? true,
            }))
        );
    }

    private _hasRequiredInputs(): boolean {
        return this.inputFields()
            .filter((field) => field.required)
            .every((field) => (this.inputValues()[field.key] ?? '').trim().length > 0);
    }

    private async runConsult(): Promise<void> {
        this.isWorking.set(true);
        this._state.consultError.set(null);

        try {
            const resolved = await this._pipeline.resolve(
                this.entities(),
                this.countryIso() ?? 'co',
                pipelineName(this.entities()),
                this.selectedFeatures()
            );
            if (!this._alive) return;

            this._state.configId.set(resolved.configId);
            this._state.configuration.set(resolved.configuration);
            this._state.clonedTemplate.set(resolved.template);
            this._state.selectedTemplate.set(resolved.template);
            if (resolved.template) this.hydrateCustomize(resolved.template);

            if (this.mode() === 'batch') {
                this.isWorking.set(false);
                if (
                    this.intent() === 'report' ||
                    this.intent() === 'template' ||
                    this.wantsReport()
                ) {
                    this._refreshTemplates();
                    this.step.set('template');
                    return;
                }
                void this._router.navigate(['/smart-batch', resolved.configId, 'batch', 'new'], {
                    queryParams: { from: 'guide' },
                });
                return;
            }

            const row = this._state.buildRow();
            if (!Object.keys(row).length) throw new Error('empty row');

            const created = await firstValueFrom(
                this._batch.createSmartBatch({
                    batchConfiguration: resolved.configId,
                    name: `${pipelineName(this.entities())} — ${new Date().toISOString().slice(0, 16)}`,
                    rows: [row],
                })
            );
            const batchId = created.data._id;
            if (!batchId) throw new Error('missing batch');
            this._state.batchId.set(batchId);
            this._state.batch.set(created.data);

            const started = await firstValueFrom(this._batch.startSmartBatch(batchId));
            this._state.batch.set(started.data);
            if (!this._alive) return;
            this.maybeStartBrowserRunner(started.data, resolved.configuration);
            this._startPoll(batchId);
        } catch {
            this.isWorking.set(false);
            this._state.consultError.set(this._transloco.translate('visitaGuide.consultFailed'));
            this.step.set(this.mode() === 'batch' ? 'mode' : 'input');
        }
    }

    private maybeStartBrowserRunner(batch: SmartBatch, config: BatchConfiguration): void {
        const executor = batch.executor ?? config.executor;
        if (executor !== 'browser') return;
        void this._browserRunner.runBatch(
            batch,
            config.steps ?? [],
            (next) => this._state.batch.set(next),
            () => this._state.consultError.set(this._transloco.translate('visitaGuide.consultFailed'))
        );
    }

    private _startPoll(batchId: string): void {
        this._stopPoll();
        const tick = () => {
            this._batch.getSmartBatch(batchId).subscribe({
                next: (res) => {
                    this._state.batch.set(res.data);
                    const status = res.data.status;
                    if (status === 'completed' || status === 'failed' || status === 'cancelled') {
                        this._stopPoll();
                        this.isWorking.set(false);
                        this.ensureIncludeItems();
                        this.step.set('results');
                    }
                },
            });
        };
        tick();
        this._pollSub = interval(POLL_MS)
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => tick());
    }

    private _stopPoll(): void {
        this._pollSub?.unsubscribe();
        this._pollSub = null;
    }

    private _resumeFromDesigner(): void {
        const start = this._route.snapshot.queryParamMap.get('start');
        if (start === 'report' && !this._state.intent()) {
            this.selectIntent('report');
            return;
        }

        const templateId = this._route.snapshot.queryParamMap.get('templateId');
        if (templateId) {
            this._openSavedTemplateInLayout(
                templateId,
                this._route.snapshot.queryParamMap.get('configId')
            );
            return;
        }

        const resumeRaw = this._route.snapshot.queryParamMap.get('resume');
        const mapped: GuideStepId | null =
            resumeRaw === 'preview' ||
            resumeRaw === 'customize' ||
            resumeRaw === 'include' ||
            resumeRaw === 'template'
                ? 'layout'
                : (resumeRaw as GuideStepId | null);
        if (mapped && this.visibleSteps().includes(mapped)) {
            this._state.step.set(mapped);
        }
    }

    private _openSavedTemplateInLayout(templateId: string, configId: string | null): void {
        this._reports.getTemplate(templateId).subscribe({
            next: (template) => {
                this._state.editingSavedLayout.set(true);
                this._state.intent.set('template');
                this._state.wantsReport.set(true);
                this._state.mode.set('single');
                this._state.templateChoice.set('mine');
                this._state.selectedTemplate.set(template);
                this._state.clonedTemplate.set(template);
                const entity = template.category;
                if (entity === 'citizen' || entity === 'company' || entity === 'vehicle') {
                    this._state.entities.set([entity]);
                } else if (!this.entities().length) {
                    this._state.entities.set(['citizen']);
                }
                this._state.applyDeductions();

                const linkedConfig =
                    configId ||
                    (typeof template.batchConfiguration === 'string'
                        ? template.batchConfiguration
                        : template.batchConfiguration?._id ?? null);
                if (linkedConfig) {
                    this._state.configId.set(linkedConfig);
                    this._batch.getConfiguration(linkedConfig).subscribe({
                        next: (res) => this._state.configuration.set(res.data),
                    });
                }

                this.hydrateCustomize(template, true);
                this.layoutSections.set(
                    (template.sections ?? []).map((section, index) => ({ ...section, order: index }))
                );
                this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
                this.layoutEditorKind.set(this.layoutSections()[0] ? 'block' : 'page');
                this.enterLayout();
                this._state.step.set('layout');
            },
        });
    }

    private _bridgePreviewData(): void {
        const row = this.batch()?.rows?.[0];
        if (!row) return;
        const data = buildRowDataForResolution(row, {
            steps: this.configuration()?.steps,
            errors: row.errors,
        });
        this._previewBridge.setPendingPreviewData({
            inputData: data.inputData,
            results: data.results,
            errors: row.errors,
            report: data.report,
        });
    }

    private fileBaseName(): string {
        return (this.reportTitle() || pipelineName(this.entities()) || 'visita-report')
            .replace(/[^\w\-]+/g, '-')
            .slice(0, 60);
    }

    private downloadDataUrl(url: string, filename: string): void {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        anchor.click();
    }
}
