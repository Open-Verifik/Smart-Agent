import { CdkDragDrop, CdkDragEnd, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, NgZone, computed, DestroyRef, effect, inject, OnDestroy, OnInit, QueryList, signal, untracked, ViewChild, ViewChildren } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { catchError, firstValueFrom, interval, of, Subscription } from 'rxjs';
import { BatchBrowserRunnerService } from '../batch-browser-runner.service';
import { ReportBuilderPreviewDataService } from '../report-builder-preview-data.service';
import { SignaturePadDialogComponent } from '../report-builder/signature-pad-dialog/signature-pad-dialog.component';
import { SendSampleModalComponent } from '../report-builder/send-sample-modal/send-sample-modal.component';
import { LayoutTextDialogComponent, LayoutTextDialogData } from '../report-builder/layout-text-dialog/layout-text-dialog.component';
import { HEADER_LOGO_DEFAULT_HEIGHT, HEADER_LOGO_DEFAULT_WIDTH, HEADER_LOGO_MAX_HEIGHT, HEADER_LOGO_MIN_HEIGHT, fitHeaderLogoSize } from '../header-logos.util';
import { isReportPageAnchor, ReportInlineTextChange, ReportOverlayId, ReportPreviewComponent, reportPaperSizePx } from '../report-preview/report-preview.component';
import { ColorHexFieldComponent } from '../color-hex-field.component';
import { EndpointChainBoardComponent } from './endpoint-chain-board.component';
import {
    endpointNodes,
    flattenFlowGraph,
    FlowGraph,
    graphFromLinearChain,
    hydrateFlowGraph,
    parseFlowGraph,
    usedFeatureIds,
} from '../endpoint-flow-graph.util';
import { getBatchSkippedStepsFromInput } from '../batch-required-fields.util';
import { compareFeaturesForSelectedCountry, countryFlagImageUrl, filterFeaturesForCountries, filterFeaturesForCountry, getCountryFlag, isWorldCountry } from '../smart-batch-country.util';
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
import { featureGroup, featureGroupIcon, FeatureGroupId, isSmartBatchCatalogFeature } from '../feature-group.util';
import { AppFeature, BatchConfiguration, SmartBatch, SmartBatchService } from '../smart-batch.service';
import { ReportCellPart, ReportHeaderLogo, ReportKeyOverride, ReportRowLineStyle, ReportSection, ReportSectionFrame, ReportShapeKind, ReportSheetImage, ReportTextRole, ReportTextRoleStyle, SmartReport, SmartReportService, SmartReportTemplate, cloneReportValue } from '../smart-report.service';
import {
    applyVisibleKeyReorder,
    collectLayoutSheetItems,
    collectObjectTables,
    tableColumnPath,
    isHiddenParamKey,
    layoutParamGroups,
    LAYOUT_HOST_SECTION_TYPES,
    relativeLayoutItemKey,
    remapLayoutOverrideKey,
    setHiddenParamKey,
    sortByKeyOrder,
    valueAtDataPath,
    joinReportDataPath,
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
import { htmlMatchesPrintMarkers, uniquePrintMarkers } from '../report-print-html.util';
import { buildRowDataForResolution } from '../template-match.util';
import {
    featureIdsFromConfiguration,
    featuresFromConfiguration,
    serializeVisitaFlow,
    VisitaGuidePipelineService,
} from './visita-guide-pipeline.service';
import { getAppFeatureCatalogCopy } from '../../postman/postman-endpoint-copy.util';
import { visitaEndpointTooltipDetails } from './visita-guide-endpoint-tooltip.util';
import { GuideTemplateChoice, VisitaGuideStateService } from './visita-guide-state.service';
import {
    clearScratchDraft,
    draftIsScratch,
    draftMatchesSession,
    readScratchDraft,
    writeScratchDraft,
} from './visita-guide-scratch-draft';
import {
    clearFlowDraft,
    readFlowDraft,
    readStoredFlow,
    writeFlowDraft,
    writeStoredFlow,
} from './visita-guide-flow-draft';
import { parseGuideUrl, serializeGuideUrl } from './visita-guide-url';
import {
    availableCountries,
    countryNameForIso,
    countriesFromEndpointFeatures,
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

const LAYOUT_SHAPE_TOOLS: {
    kind: ReportShapeKind;
    icon: string;
    labelKey: string;
    width: number;
    height: number;
}[] = [
    { kind: 'rectangle', icon: 'rectangle', labelKey: 'visitaGuide.layoutAddRectangle', width: 180, height: 96 },
    { kind: 'square', icon: 'square', labelKey: 'visitaGuide.layoutAddSquare', width: 96, height: 96 },
    { kind: 'circle', icon: 'circle', labelKey: 'visitaGuide.layoutAddCircle', width: 96, height: 96 },
    { kind: 'star', icon: 'star', labelKey: 'visitaGuide.layoutAddStar', width: 96, height: 96 },
    { kind: 'triangle', icon: 'change_history', labelKey: 'visitaGuide.layoutAddTriangle', width: 96, height: 96 },
    { kind: 'diamond', icon: 'diamond', labelKey: 'visitaGuide.layoutAddDiamond', width: 88, height: 96 },
    { kind: 'bullet', icon: 'fiber_manual_record', labelKey: 'visitaGuide.layoutAddBullet', width: 16, height: 16 },
];

type LayoutDesignSnapshot = {
    sections: ReportSection[];
    reportTitle: string;
    primaryColor: string;
    identityColor: string;
    pageBackgroundColor: string;
    logoDataUrl: string | null;
    logoX: number;
    logoY: number;
    logoWidth: number;
    logoHeight: number;
    logoRotation: number;
    sheetImages: ReportSheetImage[];
    headerLogos: ReportHeaderLogo[];
    legend: string;
    legendPosition: 'left' | 'center' | 'right';
    termsAndConditions: string;
    termsPosition: 'left' | 'center' | 'right';
    watermarkEnabled: boolean;
    watermarkType: 'text' | 'logo';
    watermarkLogo: string | null;
    watermarkText: string;
    watermarkOpacity: number;
    watermarkPattern: 'single' | 'repeated';
    watermarkX: number;
    watermarkY: number;
    watermarkWidth: number;
    watermarkHeight: number;
    watermarkRotation: number;
    showPageNumbers: boolean;
    pageNumberPosition:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right';
    pageSize: 'A4' | 'Letter' | 'Legal';
    orientation: 'portrait' | 'landscape';
    pdfEngine: 'puppeteer' | 'pdfkit';
    securityEnabled: boolean;
    securityPassword: string;
    signatureEnabled: boolean;
    signatureImage: string | null;
    signatureX: number;
    signatureY: number;
    signatureWidth: number;
    signatureHeight: number;
    signaturePage?: number;
};

const isEmptyResultPayload = (payload: unknown): boolean => {
    if (payload == null) return true;
    if (Array.isArray(payload)) return payload.length === 0;
    if (typeof payload !== 'object') return false;
    return Object.keys(payload as object).length === 0;
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
        EndpointChainBoardComponent,
    ],
    templateUrl: './visita-guide.component.html',
    styles: [
        `
            .layout-format-more {
                display: grid;
                grid-template-rows: 0fr;
                grid-template-columns: 0fr;
                min-width: 0;
                transition:
                    grid-template-rows 300ms cubic-bezier(0.22, 1, 0.36, 1),
                    grid-template-columns 0s linear 300ms;
            }
            .layout-format-more.is-open {
                grid-template-rows: 1fr;
                grid-template-columns: 1fr;
                transition:
                    grid-template-rows 300ms cubic-bezier(0.22, 1, 0.36, 1),
                    grid-template-columns 0s linear 0s;
            }
            .layout-format-more-clip {
                min-width: 0;
                min-height: 0;
                overflow: hidden;
            }
            @media (prefers-reduced-motion: reduce) {
                .layout-format-more,
                .layout-format-more.is-open {
                    transition: none;
                }
            }
        `,
    ],
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
    private readonly _activeLang = toSignal(this._transloco.langChanges$, {
        initialValue: this._transloco.getActiveLang(),
    });
    private _snack = inject(MatSnackBar);
    private _browserRunner = inject(BatchBrowserRunnerService);
    private _previewBridge = inject(ReportBuilderPreviewDataService);
    private _dialog = inject(MatDialog);
    private _destroyRef = inject(DestroyRef);
    private _host = inject(ElementRef<HTMLElement>);
    private _cdr = inject(ChangeDetectorRef);
    @ViewChildren(ReportPreviewComponent) private _previews!: QueryList<ReportPreviewComponent>;
    @ViewChild('layoutEditorPreview') private _layoutEditorPreview?: ReportPreviewComponent;
    @ViewChild('layoutInsertImageInput') private _layoutInsertImageInput?: ElementRef<HTMLInputElement>;
    @ViewChild('layoutEditorPanel') private _layoutEditorPanel?: ElementRef<HTMLElement>;
    @ViewChild('layoutDocumentBackdrop') private _layoutDocumentBackdrop?: ElementRef<HTMLElement>;
    @ViewChild('layoutEditorScroll') private _layoutEditorScroll?: ElementRef<HTMLElement>;
    @ViewChild('layoutContextMenuEl') private _layoutContextMenuEl?: ElementRef<HTMLElement>;
    @ViewChild('layoutFormatBarEl') private _layoutFormatBarEl?: ElementRef<HTMLElement>;
    @ViewChild('countrySearchInput') private _countrySearchInput?: ElementRef<HTMLInputElement>;

    readonly intents = GUIDE_INTENTS;
    readonly entityOptions = GUIDE_ENTITIES;
    readonly countries = availableCountries();

    step = this._state.step;
    isWorking = signal(false);
    isGenerating = signal(false);
    retryingSequences = signal<number[]>([]);
    isRetryingAnyResult = computed(() => this.retryingSequences().length > 0);
    templates = this._reports.templates;

    private _pollSub: Subscription | null = null;
    private _alive = true;
    private _guideUrlReady = false;
    private _pendingFeatureIds: string[] = [];
    private _pendingVisitaFlow: FlowGraph | null = null;
    private _flowPersistTail: Promise<void> = Promise.resolve();
    private readonly _guideUrlEffect = effect(() => {
        const step = this.step();
        const intent = this.intent();
        const countries = this.countryIsos();
        const entities = this.entities();
        const mode = this.mode();
        const configId = this._state.configId();
        const batchId = this._state.batchId();
        const templateChoice = this.templateChoice();
        const templateId = templateChoice === 'scratch' ? null : this.selectedTemplate()?._id ?? null;
        const features = this.selectedFeatures().map((feature) => feature._id).filter(Boolean);
        untracked(() => this._writeGuideUrl({
            step,
            intent,
            countries,
            entities,
            mode,
            configId,
            batchId,
            templateId,
            templateChoice,
            features,
        }));
    });
    private readonly _flowDraftEffect = effect(() => {
        const graph = this._state.flowGraph();
        const inputValues = this._state.inputValues();
        const features = this._state.selectedFeatures();
        untracked(() => {
            if (!this._guideUrlReady) return;
            if (!endpointNodes(graph).length) {
                if (!features.length && !this._pendingFeatureIds.length) clearFlowDraft();
                return;
            }
            writeFlowDraft({ graph, inputValues, configId: this._state.configId() });
        });
    });

    intent = this._state.intent;
    entities = this._state.entities;
    countryIsos = this._state.countryIsos;
    mode = this._state.mode;
    executor = this._state.executor;
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
    identityColor = this._state.identityColor;
    pageBackgroundColor = this._state.pageBackgroundColor;
    logoDataUrl = this._state.logoDataUrl;
    logoX = this._state.logoX;
    logoY = this._state.logoY;
    logoWidth = this._state.logoWidth;
    logoHeight = this._state.logoHeight;
    logoRotation = this._state.logoRotation;
    sheetImages = this._state.sheetImages;
    headerLogos = this._state.headerLogos;
    readonly headerLogoAligns: ReportHeaderLogo['align'][] = ['left', 'center', 'right'];
    readonly headerLogoMinHeight = HEADER_LOGO_MIN_HEIGHT;
    readonly headerLogoMaxHeight = HEADER_LOGO_MAX_HEIGHT;
    legend = this._state.legend;
    legendPosition = this._state.legendPosition;
    termsAndConditions = this._state.termsAndConditions;
    termsPosition = this._state.termsPosition;
    watermarkEnabled = this._state.watermarkEnabled;
    watermarkType = this._state.watermarkType;
    watermarkLogo = this._state.watermarkLogo;
    watermarkText = this._state.watermarkText;
    watermarkOpacity = this._state.watermarkOpacity;
    watermarkPattern = this._state.watermarkPattern;
    watermarkX = this._state.watermarkX;
    watermarkY = this._state.watermarkY;
    watermarkWidth = this._state.watermarkWidth;
    watermarkHeight = this._state.watermarkHeight;
    watermarkRotation = this._state.watermarkRotation;
    showPageNumbers = this._state.showPageNumbers;
    pageNumberPosition = this._state.pageNumberPosition;
    pageSize = this._state.pageSize;
    orientation = this._state.orientation;
    pdfEngine = this._state.pdfEngine;
    securityEnabled = this._state.securityEnabled;
    securityPassword = this._state.securityPassword;
    signatureEnabled = this._state.signatureEnabled;
    signatureImage = this._state.signatureImage;
    signatureX = this._state.signatureX;
    signatureY = this._state.signatureY;
    signatureWidth = this._state.signatureWidth;
    signatureHeight = this._state.signatureHeight;
    signaturePage = this._state.signaturePage;
    /** A signature still parked at the old default (bottom of page 1) gets centered once. */
    private _signatureAnchored = false;
    private readonly _revealSignatureEffect = effect(() => {
        const image = this.signatureImage();
        const enabled = this.signatureEnabled();
        const x = this.signatureX();
        const y = this.signatureY();
        const pageSize = this.pageSize();
        const orientation = this.orientation();
        if (this._signatureAnchored || !enabled || !image) return;
        const paper = reportPaperSizePx(pageSize, orientation);
        const offSheet = y < 0 || x < 0 || y + 8 >= paper.height || x + 8 >= paper.width;
        const parkedAtDefault = x === 48 && y === 720;
        if (!offSheet && !parkedAtDefault) {
            this._signatureAnchored = true;
            untracked(() => this._scrollSignatureIntoView());
            return;
        }
        untracked(() => {
            this._signatureAnchored = true;
            this._centerSignatureOnSheet(0);
        });
    });
    showPdfPassword = signal(false);
    consultError = this._state.consultError;
    visibleSteps = this._state.visibleSteps;
    isMixed = this._state.isMixed;
    selectedFeatures = this._state.selectedFeatures;
    flowGraph = this._state.flowGraph;
    endpointSearchQuery = this._state.endpointSearchQuery;
    requiredParamFilters = this._state.requiredParamFilters;

    availableFeatures = signal<AppFeature[]>([]);
    isLoadingFeatures = signal(false);
    featuresError = signal<string | null>(null);
    countrySearchQuery = signal('');
    countrySort = signal<'sources' | 'alpha'>('sources');
    selectedLayoutSectionId = signal<string | null>(null);
    /** Compact format bar, fixed beside the selection. `opensUp` grows Más opciones above it. */
    layoutFormatAnchor = signal<{ x: number; y: number; opensUp: boolean; room: number } | null>(null);
    layoutFormatExpanded = signal(false);
    layoutShapesOpen = signal(false);

    toggleLayoutShapesMenu(event: Event): void {
        event.stopPropagation();
        this.layoutShapesOpen.update((open) => !open);
    }
    readonly layoutFormatAligns: ReportTextAlign[] = ['left', 'center', 'right'];
    selectedLayoutOverlay = signal<ReportOverlayId | null>(null);
    selectedLayoutCellKey = signal<string | null>(null);
    selectedLayoutCellPart = signal<ReportCellPart>('cell');
    layoutEditorKind = signal<'page' | 'block' | 'overlay' | null>(null);
    readonly layoutShapeTools = LAYOUT_SHAPE_TOOLS;
    layoutEditorFocused = signal(false);
    layoutEditorDrag = signal({ x: 0, y: 0 });
    private readonly _liftEditorEffect = effect(() => {
        const onLayout = this.step() === 'layout';
        const visible = onLayout && this.layoutEditorKind() === 'page' && !this.layoutEditorSuppressed();
        if (!onLayout) {
            untracked(() => {
                if (this.layoutEditorKind()) this.layoutEditorKind.set(null);
                this.layoutEditorFocused.set(false);
                if (this.layoutContextMenu()) this.layoutContextMenu.set(null);
            });
        }
        queueMicrotask(() => this._syncLayoutEditorPortal(visible));
    });
    layoutEditorSuppressed = signal(false);
    private _layoutEditorHideCount = 0;
    documentZoom = signal(1);
    documentHover = signal<'paper' | 'page' | null>(null);
    private _documentViewportAbort: AbortController | null = null;
    private readonly _documentViewportEffect = effect(() => {
        this.step();
        untracked(() => queueMicrotask(() => this._bindDocumentViewports()));
    });
    private _layoutFocusTimer: ReturnType<typeof setTimeout> | null = null;
    private readonly _zone = inject(NgZone);
    private _formatBarFrame: number | null = null;
    private _formatBarLoopOn = false;
    private _formatBarOffset = { x: 0, y: 0 };
    private _formatBarDrag: {
        pointerId: number;
        originX: number;
        originY: number;
        offsetX: number;
        offsetY: number;
    } | null = null;
    private readonly _formatBarWatch = effect(() => {
        const active = this.step() === 'layout' && this.selectedLayoutShowsFormatBar();
        untracked(() => {
            if (active) this._ensureFormatBarLoop();
            else this._stopFormatBarLoop();
        });
    });
    private _formatSelectionToken = '';
    private readonly _collapseFormatMenu = effect(() => {
        // Label and value of the same item share the dragged spot. A different item starts over.
        const titleFocus =
            !this.selectedLayoutCellKey() && this.selectedLayoutCellPart() === 'title' ? 'title' : '';
        const token = [
            this.selectedLayoutSectionId() ?? '',
            this.selectedLayoutCellKey() ?? '',
            titleFocus,
            this.selectedLayoutOverlay() ?? '',
        ].join('|');
        untracked(() => {
            if (token === this._formatSelectionToken) return;
            const hadSelection = this._formatSelectionToken.length > 0;
            this._formatSelectionToken = token;
            if (hadSelection) {
                this.layoutFormatExpanded.set(false);
                this._formatBarOffset = { x: 0, y: 0 };
            }
        });
    });
    private _layoutRevealToken = 0;
    private _followCellPart = false;
    private _followCellPartTimer: ReturnType<typeof setTimeout> | null = null;
    layoutContextMenu = signal<{
        x: number;
        y: number;
        originX: number;
        originY: number;
        maxHeight?: number;
        sectionId?: string;
        overlay?: ReportOverlayId;
        cellKey?: string;
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
    private _layoutSavedFingerprint = '';
    private readonly _layoutHistoryEffect = effect(() => {
        const inStudio = this.step() === 'layout' || this.step() === 'generate';
        const snapshot = inStudio ? this._layoutDesignSnapshot() : null;
        untracked(() => {
            if (!inStudio || !snapshot) {
                if (!inStudio) this._resetLayoutHistory();
                return;
            }
            if (this.step() === 'layout') this._queueLayoutHistory(snapshot);
            if (!this._layoutHistoryApplying) this._persistLayoutDraft(snapshot);
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
    readonly footerAligns = ['left', 'center', 'right'] as const;

    footerAlignKey(align: 'left' | 'center' | 'right'): string {
        if (align === 'center') return 'visitaGuide.layoutAlignCenter';
        if (align === 'right') return 'visitaGuide.layoutAlignRight';
        return 'visitaGuide.layoutAlignLeft';
    }
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
    hasCountries = computed(() => this.countryIsos().length > 0);
    countryNames = computed(() =>
        this.countryIsos().map((iso) => countryNameForIso(iso)).filter(Boolean)
    );
    countryLabel = computed(() => {
        const names = this.countryNames();
        if (!names.length) return '';
        if (names.length === 1) return names[0];
        if (names.length === 2) return `${names[0]}, ${names[1]}`;
        return `${names[0]} +${names.length - 1}`;
    });
    countryFlag = computed(() =>
        this.countryIsos()
            .slice(0, 3)
            .map((iso) => getCountryFlag(countryNameForIso(iso) || iso))
            .join(' ')
    );

    countryFilteredFeatures = computed(() => {
        const selected = this.countryNames();
        if (!selected.length) return [];
        return filterFeaturesForCountries(this.availableFeatures(), selected).filter(isSmartBatchCatalogFeature);
    });

    countryTiles = computed(() => {
        const query = this.countrySearchQuery().trim().toLowerCase();
        const catalog = this.availableFeatures().filter(isSmartBatchCatalogFeature);
        return countriesFromEndpointFeatures(catalog)
            .map((country) => ({
                ...country,
                count: this._sourceCountForCountry(country.iso),
            }))
            .filter((country) => country.count > 0)
            .filter((country) => !query || country.name.toLowerCase().includes(query))
            .sort((left, right) => {
                if (this.countrySort() === 'alpha') {
                    return left.name.localeCompare(right.name, undefined, { sensitivity: 'base' });
                }
                const bySources = right.count - left.count;
                if (bySources !== 0) return bySources;
                return left.name.localeCompare(right.name, undefined, { sensitivity: 'base' });
            });
    });

    private readonly _prepareCountryStep = effect(() => {
        if (this.step() !== 'country') return;
        untracked(() => {
            this.ensureFeaturesLoaded();
            setTimeout(() => this._countrySearchInput?.nativeElement.focus(), 0);
        });
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
            const blob = `${this.featureDisplayName(feature)} ${feature.name ?? ''} ${feature.code ?? ''} ${feature.url ?? ''} ${feature.description ?? ''}`.toLowerCase();
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
        for (const bucket of buckets) {
            bucket.items.sort(compareFeaturesForSelectedCountry);
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
    isReportStudio = computed(() => this.step() === 'layout' || this.step() === 'generate');
    isEndpointsStep = computed(() => this.step() === 'endpoints');
    readonly reportStudioSteps = [
        { key: 'prepare' as const, labelKey: 'smartReport.stepPrepare' },
        { key: 'preview' as const, labelKey: 'smartReport.stepPreview' },
        { key: 'deliver' as const, labelKey: 'smartReport.stepDeliver' },
    ];
    reportStudioStep = signal<'prepare' | 'preview' | 'deliver'>('prepare');
    isSendingSample = signal(false);
    isLoadingDeliveries = signal(false);
    deliveries = signal<SmartReport[]>([]);
    reportStudioTemplateId = computed(() => this.selectedTemplate()?._id ?? null);
    deliveryHistory = computed(() =>
        this.deliveries()
            .flatMap((report) =>
                (report.emailHistory ?? []).map((entry) => ({
                    ...entry,
                    reportName: report.name || '',
                    reportStatus: report.status,
                }))
            )
            .sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime())
    );
    isFillViewportStep = computed(() => this.step() === 'country' || this.step() === 'endpoints');

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
            country: this.countryNames()[0] || 'Colombia',
            sections: [],
            primaryColor: this.primaryColor(),
            identityColor: this.identityColor() || '#000000',
            logo: this.logoDataUrl(),
            pageSize: this.pageSize(),
            orientation: this.orientation(),
        };
        return {
            ...base,
            name: this.reportTitle() || base.name,
            primaryColor: this.primaryColor() || base.primaryColor,
            identityColor: this.identityColor() || base.identityColor || '#000000',
            pageBackgroundColor: this.pageBackgroundColor() || '#ffffff',
            pageSize: this.pageSize(),
            orientation: this.orientation(),
            pdfEngine: this.pdfEngine(),
            security: this._securityPayload(),
            signature: this._signaturePayload(),
            logo: this.headerLogos().length ? '' : this.logoDataUrl() || base.logo,
            legend: this.legend(),
            legendPosition: this.legendPosition(),
            termsAndConditions: this.termsAndConditions(),
            termsPosition: this.termsPosition(),
            showPageNumbers: this.showPageNumbers(),
            pageNumberPosition: this.pageNumberPosition(),
            watermark: this._watermarkPayload(),
            logoSettings: {
                enabled: this.headerLogos().length ? false : Boolean(this.logoDataUrl()),
                x: this.logoX(),
                y: this.logoY(),
                width: this.logoWidth(),
                height: this.logoHeight(),
                rotation: this.logoRotation(),
                autoFitContent: true,
            },
            sheetImages: this.sheetImages(),
            headerLogos: this.headerLogos(),
            sections: useLayout ? layout : this._sectionsForPreview(base),
        };
    });

    overlayLogoUrl = computed(() => (this.headerLogos().length ? null : this.logoDataUrl()));
    overlayLogoEnabled = computed(() => !this.headerLogos().length && Boolean(this.logoDataUrl()));

    previewRecordIndex = signal(0);

    previewRecords = computed(() => {
        const batch = this.batch();
        const rows = batch?.rows ?? [];
        const steps = this.configuration()?.steps;
        const batchName = batch?.name || this.reportTitle() || '';
        if (rows.length) {
            return rows.map((row) => ({
                batchName,
                rowIndex: row.rowIndex,
                ...buildRowDataForResolution(row, {
                    steps,
                    batchName,
                    errors: row.errors,
                }),
            }));
        }
        const sample = this.selectedTemplate()?.sampleData;
        if (sample) {
            return [
                {
                    batchName: sample.batchName || this.reportTitle() || '',
                    rowIndex: sample.rowIndex ?? 0,
                    inputData: sample.inputData ?? {},
                    results: sample.results ?? {},
                    errors: sample.errors,
                    report: sample.report,
                },
            ];
        }
        return [{ inputData: {}, results: {}, rowIndex: 0 }];
    });

    previewData = computed(() => {
        const all = this.previewRecords();
        const idx = Math.min(Math.max(0, this.previewRecordIndex()), Math.max(0, all.length - 1));
        return all[idx] ?? { inputData: {}, results: {}, rowIndex: 0 };
    });

    goToPreviewRecord(index: number): void {
        const max = this.previewRecords().length - 1;
        this.previewRecordIndex.set(Math.min(Math.max(0, index), Math.max(0, max)));
    }

    resultCards = computed((): GuideResultCard[] => {
        const config = this.configuration();
        const rows = this.batch()?.rows ?? [];
        const row =
            rows.find((item) => item.rowIndex === this.previewData().rowIndex) ?? rows[0];
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
                        ? this.featureDisplayName(feature)
                        : selected
                          ? this.featureDisplayName(selected)
                          : `Paso ${step.sequence}`;
                const payload = results[step.sequence] ?? results[String(step.sequence)];
                const error = row.errors?.find((item) => Number(item.step) === Number(step.sequence));
                const skip = skipped.find((item) => Number(item.sequence) === Number(step.sequence));
                const hasData = !isEmptyResultPayload(payload);
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
                        ? this.featureDisplayName(feature)
                        : selected
                          ? this.featureDisplayName(selected)
                          : `Paso ${step.sequence}`;
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
            label: this.featureDisplayName(feature),
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
                this.ensureFeaturesLoaded();
                this._reports.getTemplates().subscribe();
                this._resumeFromUrl();
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
        this._documentViewportAbort?.abort();
        this._stopFormatBarLoop();
        this._stopPoll();
        this._browserRunner.stop();
        this._syncLayoutEditorPortal(false);
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

    isCountrySelected(iso: string): boolean {
        return this.countryIsos().includes(iso);
    }

    toggleCountry(iso: string): void {
        const current = this.countryIsos();
        const next = current.includes(iso) ? current.filter((item) => item !== iso) : [...current, iso];
        if (next.join(',') !== current.join(',')) {
            this._state.selectedFeatures.set([]);
            this._state.requiredParamFilters.set([]);
            this._state.endpointSearchQuery.set('');
        }
        this._state.countryIsos.set(next);
    }

    selectAllVisibleCountries(): void {
        const next = this.countryTiles().map((country) => country.iso);
        this._state.countryIsos.set(next);
        this._state.selectedFeatures.set([]);
        this._state.requiredParamFilters.set([]);
        this._state.endpointSearchQuery.set('');
    }

    clearCountrySelection(): void {
        this._state.countryIsos.set([]);
        this._state.selectedFeatures.set([]);
        this._state.requiredParamFilters.set([]);
    }

    confirmCountries(): void {
        if (!this.countryIsos().length) {
            this._snack.open(this._transloco.translate('visitaGuide.pickCountry'), undefined, {
                duration: 2500,
            });
            return;
        }
        this.countrySearchQuery.set('');
        this.goNext();
    }

    openCountryStep(): void {
        if (!this.visibleSteps().includes('country')) return;
        this.countrySearchQuery.set('');
        this.step.set('country');
    }

    onCountrySearchKeydown(event: KeyboardEvent): void {
        if (event.key !== 'Enter') return;
        const first = this.countryTiles()[0];
        if (!first) return;
        event.preventDefault();
        this.toggleCountry(first.iso);
    }

    lookupKey(): string {
        const entity = this.entities()[0];
        if (entity === 'vehicle') return 'visitaGuide.lookupVehicle';
        if (entity === 'company') return 'visitaGuide.lookupCompany';
        return 'visitaGuide.lookupPerson';
    }

    countryTileClass(iso: string, count: number | null): string {
        if (this.isCountrySelected(iso)) {
            return 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400 dark:border-emerald-400 dark:bg-emerald-950 dark:ring-emerald-500';
        }
        if (count === 0) {
            return 'border-stone-200 bg-white opacity-60 hover:border-stone-400 hover:opacity-100 dark:border-gray-800 dark:bg-gray-900/70';
        }
        return 'border-stone-200 bg-white hover:border-stone-950 dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-white';
    }

    selectMode(mode: GuideMode): void {
        this._state.mode.set(mode);
        this.goNext();
    }

    selectGuideExecutor(executor: 'queue' | 'browser'): void {
        this._state.executor.set(executor);
    }

    guideExecutorCardClass(selected: boolean): string {
        const base = 'flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition';
        if (selected) {
            return `${base} border-stone-950 bg-stone-950 text-white dark:border-white dark:bg-white/10`;
        }
        return `${base} border-stone-200 bg-white text-stone-950 hover:border-stone-950 dark:border-gray-800 dark:bg-gray-900/70 dark:text-white dark:hover:border-white`;
    }

    goNext(): void {
        if (this.isRetryingAnyResult() && (this.step() === 'results' || this.step() === 'include')) {
            return;
        }
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

        if (next === 'country' || next === 'endpoints') void this.ensureFeaturesLoaded();

        if (this.step() === 'endpoints' && !this.selectedFeatures().length) {
            this._snack.open(this._transloco.translate('visitaGuide.pickEndpoints'), undefined, {
                duration: 2500,
            });
            return;
        }

        if (this.step() === 'endpoints') {
            void this._continueAfterEndpoints(next);
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
        if (next === 'layout') this.reportStudioStep.set('prepare');
        if (next === 'generate') this.reportStudioStep.set('preview');
    }

    goToReportStudioStep(step: 'prepare' | 'preview' | 'deliver'): void {
        this.reportStudioStep.set(step);
        if (step === 'prepare') {
            this.enterLayout();
            this.step.set('layout');
            return;
        }
        this.step.set('generate');
        if (step === 'deliver') this._loadReportDeliveries();
    }

    private _loadReportDeliveries(): void {
        const id = this.reportStudioTemplateId();
        if (!id) {
            this.deliveries.set([]);
            return;
        }
        this.isLoadingDeliveries.set(true);
        this._reports
            .getReportsByTemplate(id)
            .pipe(
                catchError(() => of([] as SmartReport[])),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe((reports) => {
                this.deliveries.set(reports);
                this.isLoadingDeliveries.set(false);
            });
    }

    deliveryStatusClasses(status: string): string {
        const palette: Record<string, string> = {
            sent: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
            delivered: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
            generated: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300',
            generating: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
            pending: 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300',
            failed: 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300',
            bounced: 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300',
        };
        return palette[status] || palette.pending;
    }

    sendReportSample(): void {
        if (!this.reportStudioTemplateId()) {
            this._snack.open(this._transloco.translate('smartReport.saveTemplateFirst'), undefined, {
                duration: 3500,
            });
            return;
        }
        const lang = this._transloco.getActiveLang() === 'es' ? 'es' : 'en';
        const defaultSubject = `Sample Report: ${this.reportTitle() || 'Template Preview'}`;
        const dialogRef = this._dialog.open(SendSampleModalComponent, {
            panelClass: 'send-sample-dialog',
            maxWidth: '560px',
            width: '95vw',
            disableClose: false,
            autoFocus: true,
            data: { defaultSubject, isSample: true },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (!result?.recipients?.length) return;
            const performSend = () => {
                this.isSendingSample.set(true);
                const id = this.reportStudioTemplateId();
                if (!id) {
                    this.isSendingSample.set(false);
                    return;
                }
                void (async () => {
                    const printHtml = await this._printHtmlForCurrentRecord();
                    this._reports
                        .sendTemplateSample(id, {
                            recipients: result.recipients,
                            subject: result.subject,
                            language: lang,
                            sampleData: this.previewData(),
                            ...(printHtml ? { printHtml } : {}),
                        })
                    .subscribe({
                        next: (res) => {
                            this._snack.open(
                                this._transloco.translate(
                                    res.success
                                        ? 'smartReport.samplePdfSentSuccess'
                                        : 'smartReport.failedToSendSamplePdf'
                                ),
                                undefined,
                                { duration: 3500 }
                            );
                            this.isSendingSample.set(false);
                            this._loadReportDeliveries();
                        },
                        error: () => {
                            this._snack.open(
                                this._transloco.translate('smartReport.failedToSendSamplePdf'),
                                undefined,
                                { duration: 4000 }
                            );
                            this.isSendingSample.set(false);
                        },
                    });
                })();
            };
            void this.saveLayoutTemplate().then((saved) => {
                if (saved) performSend();
            });
        });
    }

    goBack(): void {
        if (!this.canGoBack()) return;
        if (this.isReportStudio() && this.reportStudioStep() !== 'prepare') {
            this.goToReportStudioStep(this.reportStudioStep() === 'deliver' ? 'preview' : 'prepare');
            return;
        }
        if (this._state.editingSavedLayout() && this.step() === 'layout') {
            const configId = this._state.configId();
            const batchId = this._state.batchId();
            this._state.editingSavedLayout.set(false);
            if (configId && batchId) {
                void this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report']);
                return;
            }
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
        void this._startOver();
    }

    private async _startOver(): Promise<void> {
        if (this.isReportStudio()) {
            await this._persistGuideToSmartBatch();
        }
        this._stopPoll();
        this._browserRunner.stop();
        this._pendingFeatureIds = [];
        this._pendingVisitaFlow = null;
        this._state.resetAll();
        clearScratchDraft();
        clearFlowDraft();
        void this._router.navigate(['/smart-batch'], { queryParams: {}, replaceUrl: true });
    }

    continueToReport(): void {
        if (this.isRetryingAnyResult()) return;
        this._state.wantsReport.set(true);
        this._state.applyDeductions();
        this._refreshTemplates();
        this.step.set('template');
    }

    enterLayout(): void {
        this.ensureIncludeItems();
        this.reportStudioStep.set('prepare');
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
        const target = event.target as HTMLElement | null;
        if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;
        if (this.layoutEditorSuppressed()) return;
        if (event.key === 'Delete') {
            event.preventDefault();
            this.deleteSelectedLayoutTarget();
            return;
        }
        if (!(event.ctrlKey || event.metaKey)) return;
        const key = event.key.toLowerCase();
        if (key === 'z' && !event.shiftKey) {
            event.preventDefault();
            this.undoLayout();
            return;
        }
        if (key === 'y' || (key === 'z' && event.shiftKey)) {
            event.preventDefault();
            this.redoLayout();
            return;
        }
        if (key === 'd') {
            if (!this.selectedLayoutCellKey() && this.selectedLayoutCellPart() === 'title') return;
            if (this.selectedLayoutCellKey()) {
                event.preventDefault();
                this.copySelectedLayoutItem();
                return;
            }
            if (!this.canCopySelectedLayout()) return;
            event.preventDefault();
            this.copySelectedLayoutSection();
        }
    }

    isLayoutPageAnchor(section: ReportSection): boolean {
        return isReportPageAnchor(section);
    }

    onLayoutSectionClick = (section: ReportSection): void => {
        if (isReportPageAnchor(section)) return;
        this.selectedLayoutOverlay.set(null);
        this.selectedLayoutSectionId.set(section.id);
        this.layoutSections.update((list) => this._bringSectionsToFront(list, [section.id]));
        const part = this.selectedLayoutCellPart();
        const control =
            this._followCellPart && this.selectedLayoutCellKey() && (part === 'label' || part === 'value')
                ? part
                : 'block';
        this._focusLayoutEditor(section, control);
    };

    onLayoutInlineText = (event: ReportInlineTextChange): void => {
        const section = this.layoutSections().find((item) => item.id === event.sectionId);
        if (!section) return;
        this.selectedLayoutSectionId.set(event.sectionId);
        this.selectedLayoutOverlay.set(null);
        if ((event.kind === 'cellLabel' || event.kind === 'cellValue') && event.key) {
            this.selectedLayoutCellKey.set(event.key.split('#')[0]);
            this.selectedLayoutCellPart.set(event.kind === 'cellLabel' ? 'label' : 'value');
            this._writeLayoutKeyOverride(
                event.key,
                event.kind === 'cellLabel' ? { label: event.value } : { value: event.value }
            );
            this._focusLayoutEditor(section, event.kind === 'cellLabel' ? 'label' : 'value');
            return;
        }
        if (event.kind === 'itemTitle') {
            this._patchSelectedLayout({ itemTitle: event.value });
            this._focusLayoutEditor(section, 'block');
            return;
        }
        if (event.kind === 'itemTemplate') {
            this._patchSelectedLayout({ itemTemplate: event.value });
            this._focusLayoutEditor(section, 'block');
            return;
        }
        this.selectedLayoutCellKey.set(null);
        this.selectedLayoutCellPart.set('cell');
        if (event.kind === 'body') {
            this.setSelectedLayoutBody(event.value);
        } else {
            this.setSelectedLayoutLabel(event.value);
        }
        this._focusLayoutEditor(section, 'block');
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
        this.layoutSections.update((list) => this._bringSectionsToFront(list, [event.section.id]));
        this._followCellPart = event.part === 'label' || event.part === 'value';
        if (this._followCellPartTimer) clearTimeout(this._followCellPartTimer);
        this._followCellPartTimer = setTimeout(() => {
            this._followCellPart = false;
        }, 0);
        this._focusLayoutEditor(
            event.section,
            event.part === 'label' || event.part === 'value' ? event.part : event.key ? 'cell' : 'block'
        );
    };

    onLayoutSectionRotation(event: { id: string; rotation: number }): void {
        this.layoutSections.update((list) =>
            list.map((section) =>
                section.id === event.id
                    ? { ...section, style: { ...(section.style ?? {}), rotation: event.rotation } }
                    : section
            )
        );
    }

    setSelectedLayoutRotation(value: string | number): void {
        const rotation = Number(value);
        if (!Number.isFinite(rotation)) return;
        this._patchSelectedLayoutStyle({ rotation: Math.max(-180, Math.min(180, Math.round(rotation))) });
    }

    onLayoutSectionFrames(updates: { id: string; frame: ReportSectionFrame }[]): void {
        const next = new Map(updates.map((item) => [item.id, item.frame]));
        this.layoutSections.update((list) => {
            const mapped = list.map((section) =>
                next.has(section.id) ? { ...section, frame: next.get(section.id) } : section
            );
            return updates.length === 1 ? this._bringSectionsToFront(mapped, [updates[0].id]) : mapped;
        });
    }

    onLayoutSectionFrame(event: { id: string; frame: ReportSectionFrame }): void {
        this.layoutSections.update((list) =>
            this._bringSectionsToFront(
                list.map((section) => (section.id === event.id ? { ...section, frame: event.frame } : section)),
                [event.id]
            )
        );
    }

    /** Reordering the list changes who is in front. The block stays at its coordinate. */
    onLayoutStackDrop(event: CdkDragDrop<ReportSection[]>): void {
        if (event.previousIndex === event.currentIndex) return;
        const stack = this.layoutStack();
        const reordered = [...stack];
        moveItemInArray(reordered, event.previousIndex, event.currentIndex);
        const zById = new Map(reordered.map((section, index) => [section.id, 40 + reordered.length - index]));
        this.layoutSections.update((list) =>
            list.map((section) => {
                const zIndex = zById.get(section.id);
                return zIndex == null ? section : { ...section, style: { ...(section.style ?? {}), zIndex } };
            })
        );
    }

    /** Front of the pile first. Position stays on each block's own x/y. */
    layoutStack(): ReportSection[] {
        return this.layoutSections()
            .filter((section) => !isReportPageAnchor(section))
            .slice()
            .sort(
                (left, right) =>
                    this._stackZ(right) - this._stackZ(left) || (left.order ?? 0) - (right.order ?? 0)
            );
    }

    private _stackZ(section: ReportSection): number {
        const stored = Number(section.style?.zIndex);
        if (Number.isFinite(stored) && stored > 0) return stored;
        return 40;
    }

    /** Append a block in front of the pile. Coordinates stay on the frame. */
    private _placeLayoutSection(section: ReportSection): void {
        this.layoutSections.update((list) =>
            this._bringSectionsToFront(
                [...list.filter((item) => item.id !== section.id), { ...section, order: list.length }],
                [section.id]
            )
        );
    }

    private _bringSectionsToFront(list: ReportSection[], ids: string[]): ReportSection[] {
        if (!ids.length) return list;
        const moved = new Set(ids);
        const maxZ = list.reduce((highest, section) => Math.max(highest, this._stackZ(section)), 0);
        return list.map((section) =>
            moved.has(section.id)
                ? {
                      ...section,
                      style: { ...(section.style ?? {}), zIndex: maxZ + 1 + ids.indexOf(section.id) },
                  }
                : section
        );
    }

    /** Keep reserved blank sheets; only drop trailing pages that have no blocks. */
    private _compactLayoutPages(list: ReportSection[]): ReportSection[] {
        return list;
    }

    /** New consulta blocks land in the middle of the current sheet. */
    private _centerFrame(width: number, height: number, page = 0): ReportSectionFrame {
        const preview = this._layoutEditorPreview;
        const pageWidth = preview?.pageWidthPx() ?? (this.orientation() === 'landscape' ? 297 : 210) * 3.7795275591;
        const pageHeight = preview?.pageHeightPx() ?? (this.orientation() === 'landscape' ? 210 : 297) * 3.7795275591;
        return {
            page,
            x: Math.max(0, Math.round((pageWidth - width) / 2)),
            y: Math.max(0, Math.round((pageHeight - height) / 2)),
            width,
            height,
        };
    }

    private _showFrameOnSheet(frame: ReportSectionFrame): void {
        const page = frame.page ?? 0;
        queueMicrotask(() => {
            requestAnimationFrame(() => {
                this._layoutEditorPreview?.pageHost(page)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
            });
        });
    }

    /** Keep a new block on the sheet it was placed on, above the footer. */
    private _fitFrameOnSheet(frame: ReportSectionFrame): ReportSectionFrame {
        if (this._layoutEditorPreview) {
            return this._layoutEditorPreview.fitFrameOnSheet(frame);
        }
        const pageHeight =
            (this.orientation() === 'landscape' ? 210 : 297) * 3.7795275591;
        const limit = pageHeight - 32 - 80;
        const height = Number(frame.height) || 0;
        const y = Number(frame.y) || 0;
        if (height > 0 && y + height > limit) {
            return { ...frame, y: Math.max(0, limit - height) };
        }
        return frame;
    }

    /** New blocks open in the middle of the sheet, not under the previous one. */
    private _nextNearbyFrame(height: number, width = 700): ReportSectionFrame {
        const page = this.selectedLayoutSection()?.frame?.page ?? 0;
        return this._centerFrame(width, height, page);
    }

    private _consumePendingContentFrame(height: number, width = 700): ReportSectionFrame {
        const pending = this._pendingContentPoint;
        this._pendingContentPoint = null;
        if (!pending) return this._nextNearbyFrame(height, width);
        return this._fitFrameOnSheet({
            page: pending.page,
            x: pending.x,
            y: pending.y,
            width,
            height,
        });
    }

    onLayoutOverlaySelect(id: ReportOverlayId): void {
        this.selectedLayoutSectionId.set(null);
        this.selectedLayoutCellKey.set(null);
        this.selectedLayoutOverlay.set(id);
        if (this.selectedLayoutUsesCompactOverlayBar()) {
            if (this.layoutEditorKind() === 'page') this.layoutEditorKind.set(null);
            return;
        }
        this.layoutEditorDrag.set({ x: 0, y: 0 });
        this.layoutEditorKind.set('page');
        const control = id === 'watermark' ? 'watermark' : 'overlay';
        this._revealLayoutControls(control);
    }

    clearLayoutSelection(): void {
        this.selectedLayoutSectionId.set(null);
        this.selectedLayoutOverlay.set(null);
        this.selectedLayoutCellKey.set(null);
    }

    openLayoutPageEditor(event?: Event): void {
        event?.stopPropagation();
        const open = () => {
            this.clearLayoutSelection();
            this.layoutEditorDrag.set({ x: 0, y: 0 });
            this.layoutEditorKind.set('page');
            this._revealLayoutControls('page');
        };
        if (this.step() !== 'layout') {
            this.goToReportStudioStep('prepare');
            setTimeout(open);
            return;
        }
        open();
    }

    closeLayoutEditor(): void {
        this.layoutEditorKind.set(null);
        this.layoutEditorFocused.set(false);
    }

    /** Keep the color and text panel above the sheet, the sidebar, and the header. */
    private _liftLayoutEditorPanel(): void {
        if (this.step() !== 'layout') {
            this._syncLayoutEditorPortal(false);
            return;
        }
        const backdrop = this._layoutDocumentBackdrop?.nativeElement;
        if (this.layoutEditorKind() === 'page') {
            if (backdrop && backdrop.parentElement !== document.body) document.body.appendChild(backdrop);
        } else {
            backdrop?.remove();
            document.querySelectorAll('body > .visita-document-backdrop').forEach((node) => node.remove());
        }
        const el = this._layoutEditorPanel?.nativeElement;
        if (el && el.parentElement !== document.body) {
            document.body.appendChild(el);
        }
        this._raiseAppOverlay();
    }

    /**
     * The panel is moved onto document.body. Leaving the layout step destroys
     * its view from the original parent, so the node would stay on screen.
     */
    private _syncLayoutEditorPortal(visible: boolean): void {
        if (visible) {
            this._liftLayoutEditorPanel();
            return;
        }
        this._layoutDocumentBackdrop?.nativeElement.remove();
        this._layoutEditorPanel?.nativeElement.remove();
        document.querySelectorAll('body > .visita-document-backdrop, body > .visita-layout-editor').forEach((node) => node.remove());
        if (this.step() === 'layout') return;
        this._layoutContextMenuEl?.nativeElement.remove();
        this._layoutFormatBarEl?.nativeElement.remove();
        document.querySelectorAll('body > .visita-layout-context-menu, body > .visita-layout-format-bar').forEach((node) => node.remove());
    }

    private _raiseAppOverlay(): void {
        const overlay = document.querySelector('.cdk-overlay-container') as HTMLElement | null;
        if (overlay) overlay.style.zIndex = '1000002';
    }

    onLayoutEditorDragEnded(event: CdkDragEnd): void {
        const { x, y } = event.source.getFreeDragPosition();
        this.layoutEditorDrag.set({ x, y });
    }

    onSheetDragChange(active: boolean): void {
        this._setLayoutEditorSuppressed(active);
    }

    onLayoutPaletteDragStart(): void {
        this._setLayoutEditorSuppressed(true);
    }

    onLayoutPaletteDragEnd(): void {
        this._setLayoutEditorSuppressed(false);
    }

    private _setLayoutEditorSuppressed(hidden: boolean): void {
        if (hidden) {
            this._layoutEditorHideCount += 1;
            this.layoutEditorSuppressed.set(true);
            this.closeLayoutContextMenu();
            return;
        }
        this._layoutEditorHideCount = Math.max(0, this._layoutEditorHideCount - 1);
        if (!this._layoutEditorHideCount) this.layoutEditorSuppressed.set(false);
    }

    /** Text and drawing blocks use the compact bar. The old floating card stays closed. */
    private _focusLayoutEditor(_section: ReportSection, _control: 'block' | 'cell' | 'label' | 'value'): void {
        if (this.layoutEditorKind() === 'block' || this.layoutEditorKind() === 'overlay') {
            this.layoutEditorKind.set(null);
        }
    }

    /** Entering the sheet selects a block without opening the full color panel. */
    private _preferCompactFormatBar(): void {
        const id = this.selectedLayoutSectionId();
        const section = this.layoutSections().find((item) => item.id === id) ?? null;
        if (!section) {
            if (this.selectedLayoutUsesCompactOverlayBar()) {
                if (this.layoutEditorKind() === 'page') this.layoutEditorKind.set(null);
                return;
            }
            this.layoutEditorKind.set(this.layoutSections().some((item) => !isReportPageAnchor(item)) ? null : 'page');
            return;
        }
        if (this.layoutEditorKind() !== 'page') this.layoutEditorKind.set(null);
    }

    private _formatRoles(): ReportTextRole[] {
        const roles = this.selectedLayoutTextRoles();
        return roles.length ? roles : ['title'];
    }

    layoutFormatAlign(): ReportTextAlign {
        return this.layoutRoleAlign(this._formatRoles()[0]);
    }

    setLayoutFormatAlign(align: ReportTextAlign): void {
        for (const role of this._formatRoles()) this.setLayoutRoleAlign(role, align);
    }

    layoutFormatBold(): boolean {
        return this._formatRoles().every((role) => this.layoutRoleIsBold(role));
    }

    toggleLayoutFormatBold(): void {
        const next = !this.layoutFormatBold();
        for (const role of this._formatRoles()) this.setLayoutRoleBold(role, next);
    }

    layoutFormatItalic(): boolean {
        return this._formatRoles().every((role) => this.layoutRoleIsItalic(role));
    }

    toggleLayoutFormatItalic(): void {
        const next = !this.layoutFormatItalic();
        for (const role of this._formatRoles()) this.setLayoutRoleItalic(role, next);
    }

    layoutFormatUnderline(): boolean {
        return this._formatRoles().every((role) => this.layoutRoleIsUnderline(role));
    }

    toggleLayoutFormatUnderline(): void {
        const next = !this.layoutFormatUnderline();
        for (const role of this._formatRoles()) this.setLayoutRoleUnderline(role, next);
    }

    layoutFormatSize(): number {
        return this.layoutRoleFontSize(this._formatRoles()[0]);
    }

    nudgeLayoutFormatSize(delta: number): void {
        for (const role of this._formatRoles()) {
            this.setLayoutRoleFontSize(role, this.layoutRoleFontSize(role) + delta);
        }
    }

    toggleLayoutFormatMore(): void {
        this.layoutFormatExpanded.update((open) => !open);
        if (!this.layoutFormatExpanded()) this._formatBarOffset = { x: 0, y: 0 };
    }

    onFormatBarDragStart(event: PointerEvent): void {
        if (!this.layoutFormatExpanded()) return;
        event.preventDefault();
        event.stopPropagation();
        this._formatBarDrag = {
            pointerId: event.pointerId,
            originX: event.clientX,
            originY: event.clientY,
            offsetX: this._formatBarOffset.x,
            offsetY: this._formatBarOffset.y,
        };
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    }

    onFormatBarDragMove(event: PointerEvent): void {
        const drag = this._formatBarDrag;
        if (!drag || event.pointerId !== drag.pointerId) return;
        this._formatBarOffset = {
            x: drag.offsetX + event.clientX - drag.originX,
            y: drag.offsetY + event.clientY - drag.originY,
        };
    }

    onFormatBarDragEnd(event: PointerEvent): void {
        if (!this._formatBarDrag || event.pointerId !== this._formatBarDrag.pointerId) return;
        this._formatBarDrag = null;
    }

    onLayoutFormatPointerDown(event: PointerEvent): void {
        event.stopPropagation();
        this.closeLayoutContextMenu();
    }

    private _ensureFormatBarLoop(): void {
        if (this._formatBarLoopOn) return;
        this._formatBarLoopOn = true;
        this._zone.runOutsideAngular(() => {
            const tick = (): void => {
                if (!this._formatBarLoopOn) return;
                this._formatBarFrame = requestAnimationFrame(tick);
                const next = this._measureFormatAnchor();
                const prev = this.layoutFormatAnchor();
                const same =
                    (!next && !prev) ||
                    Boolean(
                        next &&
                            prev &&
                            next.opensUp === prev.opensUp &&
                            Math.abs(next.room - prev.room) < 1 &&
                            Math.abs(next.x - prev.x) < 0.5 &&
                            Math.abs(next.y - prev.y) < 0.5
                    );
                if (same) return;
                this._zone.run(() => {
                    if (!next) this._detachFormatBar();
                    this.layoutFormatAnchor.set(next);
                });
            };
            this._formatBarFrame = requestAnimationFrame(tick);
        });
    }

    private _stopFormatBarLoop(): void {
        this._formatBarLoopOn = false;
        if (this._formatBarFrame != null) cancelAnimationFrame(this._formatBarFrame);
        this._formatBarFrame = null;
        this._detachFormatBar();
        if (this.layoutFormatExpanded()) this.layoutFormatExpanded.set(false);
        this._formatBarOffset = { x: 0, y: 0 };
        this._formatBarDrag = null;
        if (this.layoutFormatAnchor() !== null) this.layoutFormatAnchor.set(null);
    }

    private _detachFormatBar(): void {
        this._layoutFormatBarEl?.nativeElement.remove();
        document.querySelectorAll('body > .visita-layout-format-bar').forEach((node) => node.remove());
    }

    private _measureFormatAnchor(): { x: number; y: number; opensUp: boolean; room: number } | null {
        const preview = this._layoutEditorPreview;
        if (!preview || this.step() !== 'layout' || !this.selectedLayoutShowsFormatBar()) return null;
        if (preview.draggingSectionId()) return null;
        const overlay = this.selectedLayoutOverlay();
        const rect = this.selectedLayoutUsesCompactOverlayBar()
            ? preview.overlayAnchorRect(overlay)
            : (() => {
                  const section = this.selectedLayoutSection();
                  return section
                      ? preview.anchorRect(section.id, this.selectedLayoutCellKey(), this.selectedLayoutCellPart())
                      : null;
              })();
        if (!rect || rect.width < 2 || rect.height < 2) return null;
        const el = this._layoutFormatBarEl?.nativeElement;
        if (el && el.parentElement !== document.body) document.body.appendChild(el);
        const row = el?.querySelector('[data-format-toolbar]') as HTMLElement | null;
        const toolbarWidth = row?.offsetWidth || el?.offsetWidth || 300;
        const toolbarHeight = row?.offsetHeight || 40;
        const barWidth = Math.max(toolbarWidth, el?.offsetWidth || 0);
        let x = rect.left + rect.width / 2 - toolbarWidth / 2;
        x = Math.min(Math.max(8, x), Math.max(8, window.innerWidth - barWidth - 8));
        const margin = 8;
        let toolbarY = rect.bottom + margin;
        if (toolbarY + toolbarHeight > window.innerHeight - margin) {
            toolbarY = Math.max(margin, rect.top - toolbarHeight - margin);
        }
        const roomBelow = Math.max(0, window.innerHeight - margin - (toolbarY + toolbarHeight));
        const roomAbove = Math.max(0, toolbarY - margin);
        const panel = el?.querySelector('[data-format-more-body]') as HTMLElement | null;
        const panelHeight = panel?.scrollHeight || panel?.offsetHeight || 0;
        const opensUp = panelHeight > roomBelow + 12 && roomAbove > roomBelow;
        const room = Math.min(352, Math.max(96, Math.floor((opensUp ? roomAbove : roomBelow) - 12)));
        const fullHeight = el?.offsetHeight || toolbarHeight;
        const fullWidth = el?.offsetWidth || barWidth;
        let y = opensUp ? Math.max(margin, toolbarY - Math.max(0, fullHeight - toolbarHeight)) : toolbarY;
        x += this._formatBarOffset.x;
        y += this._formatBarOffset.y;
        x = Math.min(Math.max(margin, x), Math.max(margin, window.innerWidth - fullWidth - margin));
        y = Math.min(Math.max(margin, y), Math.max(margin, window.innerHeight - fullHeight - margin));
        return { x, y, opensUp, room };
    }

    private _revealLayoutControls(control: string): void {
        this.layoutEditorFocused.set(true);
        if (this._layoutFocusTimer) clearTimeout(this._layoutFocusTimer);
        this._layoutFocusTimer = setTimeout(() => this.layoutEditorFocused.set(false), 1200);
        const token = ++this._layoutRevealToken;
        const place = (attempt: number) => {
            if (token !== this._layoutRevealToken) return;
            const root = this._layoutEditorPanel?.nativeElement;
            const scroller = this._layoutEditorScroll?.nativeElement;
            if (!root || !scroller) return;
            const target = root.querySelector(`[data-layout-control="${control}"]`) as HTMLElement | null;
            if (!target || !scroller.contains(target)) {
                if (attempt < 4) requestAnimationFrame(() => place(attempt + 1));
                return;
            }
            const next =
                scroller.scrollTop + target.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 8;
            scroller.scrollTop = Math.max(0, next);
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        };
        queueMicrotask(() => requestAnimationFrame(() => place(0)));
    }

    onLayoutSectionContextMenu(event: { section: ReportSection; x: number; y: number }): void {
        this._openLayoutContextMenu(event.x, event.y, { sectionId: event.section.id });
    }

    onLayoutCellContextMenu(event: { section: ReportSection; key: string; x: number; y: number }): void {
        this.selectedLayoutSectionId.set(event.section.id);
        this.selectedLayoutCellKey.set(event.key);
        this.selectedLayoutCellPart.set('cell');
        this._focusLayoutEditor(event.section, 'cell');
        this._openLayoutContextMenu(event.x, event.y, { sectionId: event.section.id, cellKey: event.key });
    }

    onLayoutCellPlace(event: {
        section: ReportSection;
        key: string;
        clientX: number;
        clientY: number;
        extract: boolean;
    }): void {
        const point = this._layoutEditorPreview?.canonicalPointAt(event.clientX, event.clientY) ?? null;
        this._placeLayoutItem(event.section, event.key, {
            extract: event.extract,
            point,
            clientX: event.clientX,
            clientY: event.clientY,
        });
    }

    onLayoutOverlayContextMenu(event: { overlay: ReportOverlayId; x: number; y: number }): void {
        this._openLayoutContextMenu(event.x, event.y, { overlay: event.overlay });
    }

    onLayoutPaperContextMenu(event: { x: number; y: number }): void {
        this._openLayoutContextMenu(event.x, event.y, {});
    }

    onLayoutCanvasContextMenu(event: MouseEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest('report-preview') || target?.closest('.visita-layout-context-menu')) return;
        event.preventDefault();
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

    insertLayoutShapeFromMenu(kind: ReportShapeKind): void {
        this._pendingContentPoint = this._pointFromContextMenu();
        this.closeLayoutContextMenu();
        this.addShapeBlock(kind);
    }

    private _pointFromContextMenu(): { x: number; y: number; page: number } | null {
        const menu = this.layoutContextMenu();
        if (!menu) return null;
        return (
            this._layoutEditorPreview?.canonicalPointAt(menu.originX, menu.originY) ?? {
                x: 48,
                y: 48,
                page: 0,
            }
        );
    }

    canCopyLayoutContextTarget(): boolean {
        return Boolean(this._layoutContextSection());
    }

    canCopySelectedLayout(): boolean {
        return Boolean(this.selectedLayoutSection());
    }

    copyLayoutContextTarget(): void {
        const menu = this.layoutContextMenu();
        const source = this._layoutContextSection();
        if (!source) {
            this.closeLayoutContextMenu();
            return;
        }
        if (menu?.cellKey) {
            this._placeLayoutItem(source, menu.cellKey, { extract: false });
        } else {
            this._duplicateLayoutSection(source);
        }
        this.closeLayoutContextMenu();
    }

    extractLayoutContextItem(): void {
        const menu = this.layoutContextMenu();
        const source = this._layoutContextSection();
        if (!source || !menu?.cellKey) {
            this.closeLayoutContextMenu();
            return;
        }
        this._placeLayoutItem(source, menu.cellKey, { extract: true });
        this.closeLayoutContextMenu();
    }

    copySelectedLayoutItem(): void {
        const source = this.selectedLayoutSection();
        const key = this.selectedLayoutCellKey();
        if (!source || !key) return;
        this._placeLayoutItem(source, key, { extract: false });
    }

    extractSelectedLayoutItem(): void {
        const source = this.selectedLayoutSection();
        const key = this.selectedLayoutCellKey();
        if (!source || !key) return;
        this._placeLayoutItem(source, key, { extract: true });
    }

    private _placeLayoutItem(
        source: ReportSection,
        key: string,
        options: {
            extract: boolean;
            point?: { x: number; y: number; page: number } | null;
            clientX?: number;
            clientY?: number;
        }
    ): void {
        if (
            options.clientX != null &&
            options.clientY != null &&
            this._reparentLayoutItem(source, key, options)
        ) {
            return;
        }
        const dataPath = joinReportDataPath(source.dataPath, key);
        if (!dataPath) return;
        const override = source.keyOverrides?.[key];
        const label = override?.label || this._layoutItemLabel(source, key);
        const isTable =
            collectLayoutSheetItems(valueAtDataPath(this.previewData(), source.dataPath), { hiddenKeys: [] }).find(
                (item) => item.key === key
            )?.kind === 'table';
        const origin = source.frame;
        const point = options.point;
        const lastField = [...this.layoutSections()]
            .reverse()
            .find((section) => section.type === 'field' && section.frame)?.frame;
        const itemWidth = isTable ? Math.max(360, origin?.width ?? 420) : 220;
        const itemHeight = isTable ? 180 : 56;
        const stacked = lastField
            ? {
                  page: lastField.page ?? origin?.page ?? 0,
                  x: lastField.x ?? (origin?.x ?? 32) + Math.min(240, (origin?.width ?? 200) * 0.45),
                  y: (lastField.y ?? 0) + (lastField.height ?? 56) + 12,
                  width: itemWidth,
                  height: itemHeight,
              }
            : {
                  page: origin?.page ?? 0,
                  x: (origin?.x ?? 32) + Math.min(240, (origin?.width ?? 200) * 0.45),
                  y: (origin?.y ?? 32) + 28,
                  width: itemWidth,
                  height: itemHeight,
              };
        const frame: ReportSectionFrame = this._fitFrameOnSheet(
            point
                ? { page: point.page, x: point.x, y: point.y, width: itemWidth, height: itemHeight }
                : stacked
        );
        const topZ = Math.max(0, ...this.layoutSections().map((section) => Number(section.style?.zIndex) || 0));
        const field: ReportSection = {
            id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            type: isTable ? 'dataTable' : 'field',
            ...(isTable ? { maxRows: 200 } : {}),
            order: this.layoutSections().length,
            label,
            dataPath,
            showRowLines: override?.showRowLine ?? source.showRowLines,
            rowLineStyle: override?.rowLineStyle ?? source.rowLineStyle,
            rowLineColor: override?.rowLineColor ?? source.rowLineColor,
            rowLineWidth: override?.rowLineWidth ?? source.rowLineWidth,
            rowLineMark: override?.rowLineMark ?? source.rowLineMark,
            style: {
                zIndex: topZ + 1,
                backgroundColor: override?.backgroundColor ?? source.style?.backgroundColor,
                borderWidth: override?.borderWidth ?? source.style?.borderWidth,
                borderColor: override?.borderColor ?? source.style?.borderColor,
                borderRadius: override?.borderRadius ?? source.style?.borderRadius,
                fontFamily: source.style?.fontFamily,
                fontSize: source.style?.fontSize,
                color: source.style?.color,
                labelColor: source.style?.labelColor,
                valueColor: source.style?.valueColor,
                labelStyle: {
                    ...(source.style?.labelStyle ?? {}),
                    ...(override?.labelStyle ?? {}),
                },
                valueStyle: {
                    ...(source.style?.valueStyle ?? {}),
                    ...(override?.valueStyle ?? {}),
                },
            },
        };
        field.frame = frame;
        this.layoutSections.update((list) => {
            const next = list.map((section) => {
                if (!options.extract || section.id !== source.id) return section;
                return { ...section, hiddenKeys: setHiddenParamKey(section.hiddenKeys, key, false) };
            });
            return [...next, field].map((section, order) => ({ ...section, order }));
        });
        this.selectedLayoutSectionId.set(field.id);
        this.selectedLayoutCellKey.set(null);
        this.selectedLayoutCellPart.set('cell');
        this._focusLayoutEditor(field, 'block');
    }

    private _reparentLayoutItem(
        source: ReportSection,
        key: string,
        options: { extract: boolean; clientX?: number; clientY?: number }
    ): boolean {
        if (options.clientX == null || options.clientY == null) return false;
        const targetId = this._layoutEditorPreview?.sectionIdAt(options.clientX, options.clientY);
        if (!targetId) return false;
        if (targetId === source.id) return true;
        const target = this.layoutSections().find((section) => section.id === targetId);
        if (!target || !LAYOUT_HOST_SECTION_TYPES.has(target.type)) return false;
        const destKey = relativeLayoutItemKey(source.dataPath, target.dataPath, key);
        if (!destKey) return false;
        const override = source.keyOverrides?.[key];
        this.layoutSections.update((list) =>
            list.map((section) => {
                if (section.id === source.id) {
                    if (!options.extract) return section;
                    return { ...section, hiddenKeys: setHiddenParamKey(section.hiddenKeys, key, false) };
                }
                if (section.id !== target.id) return section;
                const keyOverrides = { ...(section.keyOverrides ?? {}) };
                if (override) {
                    keyOverrides[destKey] = { ...override };
                }
                for (const [storedKey, value] of Object.entries(source.keyOverrides ?? {})) {
                    const nextKey = remapLayoutOverrideKey(storedKey, key, destKey);
                    if (nextKey !== storedKey) keyOverrides[nextKey] = value;
                }
                const visible = collectLayoutSheetItems(valueAtDataPath(this.previewData(), section.dataPath), {
                    hiddenKeys: setHiddenParamKey(section.hiddenKeys, destKey, true),
                    keyOrder: section.keyOrder,
                }).map((item) => item.key);
                if (!visible.includes(destKey)) visible.push(destKey);
                else {
                    const from = visible.indexOf(destKey);
                    visible.splice(from, 1);
                    visible.push(destKey);
                }
                const allKeys = collectLayoutSheetItems(valueAtDataPath(this.previewData(), section.dataPath), {
                    hiddenKeys: [],
                }).map((item) => item.key);
                const seed = sortByKeyOrder(allKeys, section.keyOrder, (itemKey) => itemKey);
                return {
                    ...section,
                    hiddenKeys: setHiddenParamKey(section.hiddenKeys, destKey, true),
                    keyOrder: applyVisibleKeyReorder(seed, visible),
                    keyOverrides,
                };
            })
        );
        this.selectedLayoutSectionId.set(target.id);
        this.selectedLayoutCellKey.set(destKey);
        this.selectedLayoutCellPart.set('cell');
        this._focusLayoutEditor(target, 'cell');
        return true;
    }

    private _layoutItemLabel(source: ReportSection, key: string): string {
        const items = collectLayoutSheetItems(valueAtDataPath(this.previewData(), source.dataPath), {
            hiddenKeys: [],
        });
        return items.find((item) => item.key === key)?.label || humanizeParamKey(key);
    }

    copySelectedLayoutSection(): void {
        const source = this.selectedLayoutSection();
        if (!source) return;
        this._duplicateLayoutSection(source);
    }

    private _duplicateLayoutSection(source: ReportSection): void {
        const copy = JSON.parse(JSON.stringify(source)) as ReportSection;
        const prefix =
            source.type === 'header'
                ? 'titulo'
                : source.type === 'text'
                  ? 'texto'
                  : source.type === 'divider'
                    ? 'linea'
                    : source.type === 'shape'
                      ? 'forma'
                      : 'bloque';
        copy.id = `${prefix}-copia-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        if (copy.frame) {
            copy.frame = this._fitFrameOnSheet({
                ...copy.frame,
                x: (copy.frame.x ?? 0) + 16,
                y: (copy.frame.y ?? 0) + 16,
            });
        }
        const topZ = Math.max(
            0,
            ...this.layoutSections().map((section) => Number(section.style?.zIndex) || 0)
        );
        copy.style = { ...(copy.style ?? {}), zIndex: topZ + 1 };
        this.layoutSections.update((list) => {
            const index = list.findIndex((section) => section.id === source.id);
            const next = [...list];
            next.splice(index < 0 ? next.length : index + 1, 0, copy);
            return next.map((section, order) => ({ ...section, order }));
        });
        this.selectedLayoutSectionId.set(copy.id);
        this._focusLayoutEditor(copy, 'block');
    }

    private _layoutContextSection(): ReportSection | null {
        const id = this.layoutContextMenu()?.sectionId;
        if (!id) return null;
        return this.layoutSections().find((section) => section.id === id) ?? null;
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

    deleteSelectedLayoutTarget(): void {
        const overlay = this.selectedLayoutOverlay();
        if (overlay === 'logo') {
            this.clearLogo();
            this.selectedLayoutOverlay.set(null);
            this.layoutEditorKind.set(null);
            return;
        }
        if (overlay === 'watermark') {
            this.setWatermarkEnabled(false);
            this.selectedLayoutOverlay.set(null);
            this.layoutEditorKind.set(null);
            return;
        }
        if (overlay === 'signature') {
            this.clearSignature();
            this.selectedLayoutOverlay.set(null);
            this.layoutEditorKind.set(null);
            return;
        }
        if (overlay?.startsWith('img:')) {
            this.clearSheetImage(overlay.slice(4));
            this.layoutEditorKind.set(null);
            return;
        }
        if (this.selectedLayoutSection()) {
            if (!this.selectedLayoutCellKey() && this.selectedLayoutCellPart() === 'title') return;
            this.removeSelectedLayoutSection();
        }
    }

    deleteLayoutContextTarget(): void {
        const menu = this.layoutContextMenu();
        if (!menu) return;
        if (menu.cellKey && menu.sectionId) {
            this.selectedLayoutSectionId.set(menu.sectionId);
            this.selectedLayoutCellKey.set(menu.cellKey);
            this.setLayoutParamVisible(menu.cellKey, false);
        } else if (menu.sectionId) {
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
        } else if (menu.overlay === 'signature') {
            this.clearSignature();
            this.selectedLayoutOverlay.set(null);
            this.layoutEditorKind.set(null);
        } else if (menu.overlay?.startsWith('hdr:')) {
            this.removeHeaderLogo(menu.overlay.slice(4));
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

    @HostListener('window:beforeunload', ['$event'])
    onBeforeUnload(event: BeforeUnloadEvent): void {
        if (!this.isReportStudio()) return;
        this._persistLayoutDraft(this._layoutDesignSnapshot());
        if (!this._layoutLooksUnsaved()) return;
        event.preventDefault();
        event.returnValue = this._transloco.translate('visitaGuide.layoutUnsavedLeave');
    }

    private _layoutDesignSnapshot(): LayoutDesignSnapshot {
        return {
            sections: cloneReportValue(this.layoutSections()),
            reportTitle: this.reportTitle(),
            primaryColor: this.primaryColor(),
            identityColor: this.identityColor(),
            pageBackgroundColor: this.pageBackgroundColor(),
            logoDataUrl: this.logoDataUrl(),
            logoX: this.logoX(),
            logoY: this.logoY(),
            logoWidth: this.logoWidth(),
            logoHeight: this.logoHeight(),
            logoRotation: this.logoRotation(),
            sheetImages: cloneReportValue(this.sheetImages()),
            headerLogos: cloneReportValue(this.headerLogos()),
            legend: this.legend(),
            legendPosition: this.legendPosition(),
            termsAndConditions: this.termsAndConditions(),
            termsPosition: this.termsPosition(),
            watermarkEnabled: this.watermarkEnabled(),
            watermarkType: this.watermarkType(),
            watermarkLogo: this.watermarkLogo(),
            watermarkText: this.watermarkText(),
            watermarkOpacity: this.watermarkOpacity(),
            watermarkPattern: this.watermarkPattern(),
            watermarkX: this.watermarkX(),
            watermarkY: this.watermarkY(),
            watermarkWidth: this.watermarkWidth(),
            watermarkHeight: this.watermarkHeight(),
            watermarkRotation: this.watermarkRotation(),
            showPageNumbers: this.showPageNumbers(),
            pageNumberPosition: this.pageNumberPosition(),
            pageSize: this.pageSize(),
            orientation: this.orientation(),
            pdfEngine: this.pdfEngine(),
            securityEnabled: this.securityEnabled(),
            securityPassword: this.securityPassword(),
            signatureEnabled: this.signatureEnabled(),
            signatureImage: this.signatureImage(),
            signatureX: this.signatureX(),
            signatureY: this.signatureY(),
            signatureWidth: this.signatureWidth(),
            signatureHeight: this.signatureHeight(),
            signaturePage: this.signaturePage(),
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
            cloneReportValue(snapshot.sections ?? []).map((section, index) => ({ ...section, order: index }))
        );
        this._state.reportTitle.set(snapshot.reportTitle);
        this._state.primaryColor.set(snapshot.primaryColor);
        this._state.identityColor.set(snapshot.identityColor || '#000000');
        this._state.pageBackgroundColor.set(snapshot.pageBackgroundColor);
        this._state.logoDataUrl.set(snapshot.logoDataUrl);
        this._state.logoX.set(snapshot.logoX);
        this._state.logoY.set(snapshot.logoY);
        this._state.logoWidth.set(snapshot.logoWidth);
        this._state.logoHeight.set(snapshot.logoHeight);
        this._state.logoRotation.set(snapshot.logoRotation);
        this._state.sheetImages.set(cloneReportValue(snapshot.sheetImages ?? []));
        this._state.headerLogos.set(cloneReportValue(snapshot.headerLogos ?? []));
        this._state.legend.set(snapshot.legend);
        this._state.legendPosition.set(snapshot.legendPosition ?? 'left');
        this._state.termsAndConditions.set(snapshot.termsAndConditions ?? '');
        this._state.termsPosition.set(snapshot.termsPosition ?? 'left');
        this._state.watermarkEnabled.set(snapshot.watermarkEnabled);
        this._state.watermarkType.set(snapshot.watermarkType);
        this._state.watermarkLogo.set(snapshot.watermarkLogo ?? null);
        this._state.watermarkText.set(snapshot.watermarkText);
        this._state.watermarkOpacity.set(snapshot.watermarkOpacity);
        this._state.watermarkPattern.set(snapshot.watermarkPattern);
        this._state.watermarkX.set(snapshot.watermarkX);
        this._state.watermarkY.set(snapshot.watermarkY);
        this._state.watermarkWidth.set(snapshot.watermarkWidth);
        this._state.watermarkHeight.set(snapshot.watermarkHeight);
        this._state.watermarkRotation.set(snapshot.watermarkRotation);
        this._state.showPageNumbers.set(snapshot.showPageNumbers);
        this._state.pageNumberPosition.set(snapshot.pageNumberPosition ?? 'bottom-center');
        this._state.pageSize.set(snapshot.pageSize ?? 'A4');
        this._state.orientation.set(snapshot.orientation ?? 'portrait');
        this._state.pdfEngine.set(snapshot.pdfEngine ?? 'puppeteer');
        this._state.securityEnabled.set(Boolean(snapshot.securityEnabled));
        this._state.securityPassword.set(snapshot.securityPassword ?? '');
        this._state.signatureEnabled.set(Boolean(snapshot.signatureEnabled));
        this._state.signatureImage.set(snapshot.signatureImage ?? null);
        this._state.signatureX.set(snapshot.signatureX ?? 48);
        this._state.signatureY.set(snapshot.signatureY ?? 720);
        this._state.signatureWidth.set(snapshot.signatureWidth ?? 160);
        this._state.signatureHeight.set(snapshot.signatureHeight ?? 64);
        this._state.signaturePage.set(snapshot.signaturePage ?? 0);
        this._signatureAnchored = true;
        queueMicrotask(() => {
            this._layoutHistoryApplying = false;
        });
    }

    private _persistLayoutDraft(snapshot: LayoutDesignSnapshot): void {
        const choice = this.templateChoice();
        const templateId = choice === 'scratch' ? null : this.selectedTemplate()?._id ?? null;
        writeScratchDraft({ ...snapshot, templateId, templateChoice: choice });
    }

    private _markLayoutClean(): void {
        this._layoutSavedFingerprint = JSON.stringify(this._layoutDesignSnapshot());
    }

    private _layoutLooksUnsaved(): boolean {
        if (!this.layoutSections().length && !this.reportTitle()) return false;
        const current = JSON.stringify(this._layoutDesignSnapshot());
        return current !== this._layoutSavedFingerprint;
    }

    private _restoreLayoutDraftIfAny(): boolean {
        const draft = readScratchDraft();
        const templateId = this.selectedTemplate()?._id ?? null;
        const choice = this.templateChoice();
        if (!draftMatchesSession(draft, templateId, choice)) return false;
        this._applyLayoutSnapshot(JSON.stringify(draft));
        this._markLayoutClean();
        return true;
    }

    private _openLayoutContextMenu(
        x: number,
        y: number,
        target: { sectionId?: string; overlay?: ReportOverlayId; cellKey?: string }
    ): void {
        this.layoutContextMenu.set({
            x,
            y,
            originX: x,
            originY: y,
            ...target,
        });
        queueMicrotask(() => requestAnimationFrame(() => this._fitLayoutContextMenu()));
    }

    private _fitLayoutContextMenu(): void {
        const menu = this.layoutContextMenu();
        const el = this._layoutContextMenuEl?.nativeElement;
        if (!menu || !el) return;
        if (el.parentElement !== document.body) {
            document.body.appendChild(el);
        }
        const pad = 8;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const maxHeight = Math.max(120, vh - pad * 2);
        el.style.maxHeight = `${maxHeight}px`;
        const rect = el.getBoundingClientRect();
        const width = rect.width;
        const height = Math.min(rect.height, maxHeight);
        let nextX = menu.originX;
        let nextY = menu.originY;
        if (nextX + width > vw - pad) nextX = menu.originX - width;
        if (nextY + height > vh - pad) nextY = menu.originY - height;
        nextX = Math.min(Math.max(pad, nextX), Math.max(pad, vw - width - pad));
        nextY = Math.min(Math.max(pad, nextY), Math.max(pad, vh - height - pad));
        if (menu.x === nextX && menu.y === nextY && menu.maxHeight === maxHeight) return;
        this.layoutContextMenu.set({ ...menu, x: nextX, y: nextY, maxHeight });
    }

    layoutEditorTitleKey(): string {
        const kind = this.layoutEditorKind();
        if (kind === 'block') return 'visitaGuide.layoutPanelBlock';
        if (kind === 'overlay') return 'visitaGuide.layoutBrand';
        return 'smartReport.documentSettings';
    }

    onLayoutBlankClick(event: MouseEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest('report-preview')) return;
        if (target?.closest('.visita-layout-editor')) return;
        this.dismissLayoutSurfaceEditor();
    }

    /** The document menu opens only from Hoja y marca. A blank click just leaves the block. */
    dismissLayoutSurfaceEditor(): void {
        if (this.layoutEditorKind() === 'page') return;
        this.clearLayoutSelection();
        this.closeLayoutEditor();
    }

    onLayoutCanvasDrop(event: CdkDragDrop<unknown>): void {
        const payload = event.item.data as GuideResultCard | ReportSection | undefined;
        if (!payload) return;
        if ('sequence' in payload && typeof payload.sequence === 'number' && 'status' in payload) {
            this.addCardToLayout(payload);
        }
    }

    addCardToLayout(card: GuideResultCard): void {
        const section: ReportSection = {
            ...this._sectionFromCard(card),
            order: this.layoutSections().length,
            frame: this._centerFrame(620, 420),
        };
        this.layoutSections.update((list) => this._bringSectionsToFront([...list, section], [section.id]));
        this.selectedLayoutSectionId.set(section.id);
        this._focusLayoutEditor(section, 'block');
        if (section.frame) this._showFrameOnSheet(section.frame);
    }

    addAllCardsToLayout(): void {
        const fresh: ReportSection[] = [];
        for (const card of this.layoutSourceCards()) {
            const path = `results.${card.sequence}`;
            if (this.layoutSections().some((section) => section.dataPath === path)) continue;
            fresh.push({
                ...this._sectionFromCard(card),
                order: this.layoutSections().length + fresh.length,
                frame: this._centerFrame(620, 420),
            });
        }
        if (!fresh.length) return;
        this.layoutSections.update((list) =>
            this._bringSectionsToFront(
                [...list, ...fresh],
                fresh.map((section) => section.id)
            )
        );
        const top = fresh[fresh.length - 1];
        this.selectedLayoutSectionId.set(top.id);
        this._focusLayoutEditor(top, 'block');
        if (top.frame) this._showFrameOnSheet(top.frame);
    }

    /** New reports start with one consult block; the rest are added by hand. */
    seedDefaultLayout(): void {
        if (this.layoutSections().length) return;
        const card = this.layoutSourceCards()[0];
        if (!card) return;
        this.addCardToLayout(card);
    }

    useVisitaLayout(): void {
        const sections = this.clonedTemplate()?.sections ?? [];
        if (!sections.length) {
            this.layoutSections.set([]);
            this._state.templateChoice.set('visita');
            this.seedDefaultLayout();
            this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
            this._preferCompactFormatBar();
            return;
        }
        this.layoutSections.set(cloneReportValue(sections).map((section, index) => ({ ...section, order: index })));
        this._state.templateChoice.set('visita');
        this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
        this._preferCompactFormatBar();
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

    setLayoutIdentityColor(value: string): void {
        this._state.identityColor.set(value || '#000000');
    }

    setLayoutPageBackground(value: string): void {
        this._state.pageBackgroundColor.set(value);
    }

    setLegend(value: string): void {
        this._state.legend.set(value);
    }

    setLegendPosition(value: 'left' | 'center' | 'right'): void {
        this._state.legendPosition.set(value);
    }

    setTermsAndConditions(value: string): void {
        this._state.termsAndConditions.set(value);
    }

    setTermsPosition(value: 'left' | 'center' | 'right'): void {
        this._state.termsPosition.set(value);
    }

    openFooterTextDialog(): void {
        this._openLayoutTextDialog(
            {
                titleKey: 'visitaGuide.layoutEditFooter',
                placeholderKey: 'visitaGuide.layoutCompanyPlaceholder',
                value: this.legend(),
                maxLength: 2000,
            },
            (value) => this.setLegend(value)
        );
    }

    openTermsTextDialog(): void {
        this._openLayoutTextDialog(
            {
                titleKey: 'visitaGuide.layoutEditTerms',
                placeholderKey: 'visitaGuide.layoutTermsPlaceholder',
                value: this.termsAndConditions(),
                maxLength: 4000,
            },
            (value) => this.setTermsAndConditions(value)
        );
    }

    private _openLayoutTextDialog(
        data: LayoutTextDialogData,
        apply: (value: string) => void
    ): void {
        this._raiseAppOverlay();
        const dialogRef = this._dialog.open(LayoutTextDialogComponent, {
            width: '640px',
            maxWidth: '95vw',
            disableClose: true,
            autoFocus: true,
            data,
        });
        this._raiseAppOverlay();
        dialogRef.afterClosed().subscribe((result) => {
            if (typeof result === 'string') apply(result);
        });
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

    onWatermarkLogoSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file || !this._acceptLayoutImageFile(file)) return;
        const reader = new FileReader();
        reader.onload = () => {
            const src = String(reader.result ?? '');
            if (src) this._state.watermarkLogo.set(src);
        };
        reader.readAsDataURL(file);
    }

    clearWatermarkLogo(): void {
        this._state.watermarkLogo.set(null);
    }

    private _acceptLayoutImageFile(file: File): boolean {
        if (file.size <= 512_000) return true;
        this._snack.open(this._transloco.translate('visitaGuide.layoutImageTooLarge'), undefined, {
            duration: 3500,
        });
        return false;
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

    pageNumberAlign(): 'left' | 'center' | 'right' {
        if (this.pageNumberPosition().includes('left')) return 'left';
        if (this.pageNumberPosition().includes('right')) return 'right';
        return 'center';
    }

    pageNumberBand(): 'top' | 'bottom' {
        return this.pageNumberPosition().startsWith('top') ? 'top' : 'bottom';
    }

    setPageNumberAlign(align: 'left' | 'center' | 'right'): void {
        this._state.pageNumberPosition.set(
            `${this.pageNumberBand()}-${align}` as NonNullable<SmartReportTemplate['pageNumberPosition']>
        );
    }

    setPageNumberBand(band: 'top' | 'bottom'): void {
        this._state.pageNumberPosition.set(
            `${band}-${this.pageNumberAlign()}` as NonNullable<SmartReportTemplate['pageNumberPosition']>
        );
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
        this._placeWatermarkBox(pos.x, pos.y, this.watermarkWidth(), this.watermarkHeight());
    }

    onLayoutWatermarkSizeChange(size: { width: number; height: number }): void {
        this._placeWatermarkBox(this.watermarkX(), this.watermarkY(), size.width, size.height);
    }

    onLayoutWatermarkRotationChange(rotation: number): void {
        this._state.watermarkRotation.set(Math.round(rotation));
    }

    setPageSize(value: string): void {
        if (value !== 'A4' && value !== 'Letter' && value !== 'Legal') return;
        const previous = { pageSize: this.pageSize(), orientation: this.orientation() };
        this._state.pageSize.set(value);
        this._scaleLayoutToPaper(previous, { pageSize: value, orientation: this.orientation() });
    }

    setOrientation(value: 'portrait' | 'landscape'): void {
        const previous = { pageSize: this.pageSize(), orientation: this.orientation() };
        this._state.orientation.set(value);
        this._scaleLayoutToPaper(previous, { pageSize: this.pageSize(), orientation: value });
    }

    /** Keep blocks and overlays in the same relative place when paper changes. */
    private _scaleLayoutToPaper(
        from: { pageSize: string; orientation: 'portrait' | 'landscape' },
        to: { pageSize: string; orientation: 'portrait' | 'landscape' }
    ): void {
        const previous = reportPaperSizePx(from.pageSize, from.orientation);
        const next = reportPaperSizePx(to.pageSize, to.orientation);
        if (!previous.width || !previous.height || !next.width || !next.height) return;
        const scaleX = next.width / previous.width;
        const scaleY = next.height / previous.height;
        if (Math.abs(scaleX - 1) < 0.0001 && Math.abs(scaleY - 1) < 0.0001) return;

        const scale = (value: number, factor: number) => Math.round(value * factor);
        this.layoutSections.update((list) =>
            list.map((section) =>
                section.frame
                    ? {
                          ...section,
                          frame: {
                              ...section.frame,
                              x: scale(section.frame.x ?? 0, scaleX),
                              y: scale(section.frame.y ?? 0, scaleY),
                              width: scale(section.frame.width ?? 0, scaleX),
                              height: scale(section.frame.height ?? 0, scaleY),
                          },
                      }
                    : section
            )
        );
        this._state.logoX.set(scale(this.logoX(), scaleX));
        this._state.logoY.set(scale(this.logoY(), scaleY));
        this._state.logoWidth.set(scale(this.logoWidth(), scaleX));
        this._state.logoHeight.set(scale(this.logoHeight(), scaleY));
        this._state.watermarkX.set(scale(this.watermarkX(), scaleX));
        this._state.watermarkY.set(scale(this.watermarkY(), scaleY));
        this._state.watermarkWidth.set(scale(this.watermarkWidth(), scaleX));
        this._state.watermarkHeight.set(scale(this.watermarkHeight(), scaleY));
        this._state.signatureX.set(scale(this.signatureX(), scaleX));
        this._state.signatureY.set(scale(this.signatureY(), scaleY));
        this._state.signatureWidth.set(scale(this.signatureWidth(), scaleX));
        this._state.signatureHeight.set(scale(this.signatureHeight(), scaleY));
        this._state.sheetImages.set(
            this.sheetImages().map((image) => ({
                ...image,
                x: scale(image.x ?? 0, scaleX),
                y: scale(image.y ?? 0, scaleY),
                width: scale(image.width ?? 0, scaleX),
                height: scale(image.height ?? 0, scaleY),
            }))
        );
    }

    setPdfEngine(value: string): void {
        if (value === 'puppeteer' || value === 'pdfkit') this._state.pdfEngine.set(value);
    }

    setSecurityEnabled(enabled: boolean): void {
        this._state.securityEnabled.set(enabled);
        if (!enabled) this._state.securityPassword.set('');
    }

    setSecurityPassword(value: string): void {
        this._state.securityPassword.set(value);
    }

    setSignatureEnabled(enabled: boolean): void {
        this._state.signatureEnabled.set(enabled);
        if (enabled && !this.signatureImage()) {
            this.openSignatureDialog();
        }
        if (!enabled) this.selectedLayoutOverlay.set(null);
    }

    setSignatureWidth(value: string | number): void {
        const width = Number(value);
        if (!Number.isFinite(width)) return;
        this._state.signatureWidth.set(Math.max(24, Math.round(width)));
    }

    setSignatureHeight(value: string | number): void {
        const height = Number(value);
        if (!Number.isFinite(height)) return;
        this._state.signatureHeight.set(Math.max(16, Math.round(height)));
    }

    onLayoutSignaturePositionChange(pos: { x: number; y: number; page?: number }): void {
        this._signatureAnchored = true;
        this._state.signatureX.set(Math.max(0, Math.round(pos.x)));
        this._state.signatureY.set(Math.max(0, Math.round(pos.y)));
        if (pos.page != null && Number.isFinite(pos.page)) {
            this._state.signaturePage.set(Math.max(0, Math.round(pos.page)));
        }
    }

    onLayoutSignatureSizeChange(size: { width: number; height: number }): void {
        this._state.signatureWidth.set(Math.max(24, Math.round(size.width)));
        this._state.signatureHeight.set(Math.max(16, Math.round(size.height)));
    }

    clearSignature(): void {
        this._signatureAnchored = false;
        this._state.signatureImage.set(null);
        this._state.signatureEnabled.set(false);
        this._state.signaturePage.set(0);
        this.selectedLayoutOverlay.set(null);
    }

    /** Puts a new signature in the middle of the sheet so it is visible immediately. */
    private _centerSignatureOnSheet(page = 0): void {
        const paper = reportPaperSizePx(this.pageSize(), this.orientation());
        const width = this.signatureWidth();
        const height = this.signatureHeight();
        this._signatureAnchored = true;
        this._state.signaturePage.set(Math.max(0, page));
        this._state.signatureX.set(Math.max(24, Math.round((paper.width - width) / 2)));
        this._state.signatureY.set(Math.max(24, Math.round((paper.height - height) / 2)));
        this._scrollSignatureIntoView();
    }

    private _scrollSignatureIntoView(): void {
        requestAnimationFrame(() =>
            requestAnimationFrame(() => {
                const host = this._layoutEditorPreview?.pageHost(this.signaturePage());
                const box = host?.querySelector('[data-overlay-id="signature"]') as HTMLElement | null;
                box?.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
            })
        );
    }

    openSignatureDialog(): void {
        this._raiseAppOverlay();
        const dialogRef = this._dialog.open(SignaturePadDialogComponent, {
            width: '520px',
            disableClose: true,
            autoFocus: false,
        });
        this._raiseAppOverlay();
        dialogRef
            .afterClosed()
            .subscribe((result) => {
                if (!result) {
                    if (!this.signatureImage()) this._state.signatureEnabled.set(false);
                    return;
                }
                this._state.signatureImage.set(String(result));
                this._state.signatureEnabled.set(true);
                this._centerSignatureOnSheet(0);
            });
    }

    setWatermarkRotation(value: string | number): void {
        const rotation = Number(value);
        if (!Number.isFinite(rotation)) return;
        this._state.watermarkRotation.set(Math.round(rotation));
    }

    clearLogo(): void {
        this._setHeaderLogos([]);
    }

    documentExploreHintKey(): string {
        if (this.documentHover() === 'paper') return 'visitaGuide.layoutExplorePaper';
        if (this.documentHover() === 'page') return 'visitaGuide.layoutExplorePage';
        return 'visitaGuide.layoutExploreHint';
    }

    documentZoomLabel(): string {
        return `${Math.round(this.documentZoom() * 100)}%`;
    }

    nudgeDocumentZoom(delta: number): void {
        this.documentZoom.set(Math.min(2, Math.max(0.5, Math.round((this.documentZoom() + delta) * 10) / 10)));
    }

    resetDocumentZoom(): void {
        this.documentZoom.set(1);
    }

    onDocumentViewportMove(event: MouseEvent): void {
        this.documentHover.set(this._eventOverPaper(event) ? 'paper' : 'page');
    }

    onDocumentViewportLeave(): void {
        this.documentHover.set(null);
    }

    onDocumentViewportWheel(event: WheelEvent): void {
        if (!this._eventOverPaper(event)) {
            this.documentHover.set('page');
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.documentHover.set('paper');
        if (event.ctrlKey || event.metaKey) {
            this.nudgeDocumentZoom(event.deltaY > 0 ? -0.1 : 0.1);
            return;
        }
        const viewport = event.currentTarget as HTMLElement | null;
        if (!viewport) return;
        viewport.scrollTop += event.deltaY;
        viewport.scrollLeft += event.deltaX;
    }

    private _eventOverPaper(event: Event): boolean {
        const target = event.target;
        return target instanceof Element && Boolean(target.closest('[data-report-page]'));
    }

    private _bindDocumentViewports(): void {
        this._documentViewportAbort?.abort();
        const abort = new AbortController();
        this._documentViewportAbort = abort;
        const root = this._host.nativeElement as HTMLElement;
        root.querySelectorAll('[data-document-viewport]').forEach((node) => {
            node.addEventListener('wheel', (event) => this.onDocumentViewportWheel(event as WheelEvent), {
                passive: false,
                signal: abort.signal,
            });
        });
    }

    addPageSheet(afterPage?: number): void {
        const lastPage = this._layoutPageCount() - 1;
        const insertAt = afterPage == null ? lastPage + 1 : afterPage + 1;
        const marker: ReportSection = {
            id: `hoja-${Date.now()}`,
            type: 'spacer',
            order: this.layoutSections().length,
            label: '',
            frame: { page: insertAt, x: 0, y: 0, width: 1, height: 1 },
            style: { padding: '0' },
        };
        this.layoutSections.update((list) => [
            ...list.map((section) =>
                section.frame && (section.frame.page ?? 0) >= insertAt
                    ? { ...section, frame: { ...section.frame, page: (section.frame.page ?? 0) + 1 } }
                    : section
            ),
            marker,
        ]);
        this._pendingContentPoint = { page: insertAt, x: 32, y: 32 };
        this.clearLayoutSelection();
        this.layoutEditorKind.set('page');
        queueMicrotask(() => {
            requestAnimationFrame(() => {
                this._layoutEditorPreview?.pageHost(insertAt)?.scrollIntoView({ block: 'start', behavior: 'smooth' });
            });
        });
    }

    insertLayoutPageFromMenu(): void {
        const page = this._pointFromContextMenu()?.page;
        this.closeLayoutContextMenu();
        this.addPageSheet(page);
    }

    canRemoveLastPageSheet(): boolean {
        const last = this._layoutPageCount() - 1;
        return last > 0 && !this._pageHasLayoutContent(last);
    }

    removeLastPageSheet(): void {
        if (!this.canRemoveLastPageSheet()) return;
        const last = this._layoutPageCount() - 1;
        this.layoutSections.update((list) =>
            list
                .filter((section) => (section.frame?.page ?? 0) !== last)
                .map((section, order) => ({ ...section, order }))
        );
        this._state.sheetImages.update((list) => list.filter((image) => (image.page ?? 0) !== last));
        if (this._pendingContentPoint?.page === last) this._pendingContentPoint = null;
        if (this._pendingSheetImagePoint?.page === last) this._pendingSheetImagePoint = null;
        this.clearLayoutSelection();
        this.layoutEditorKind.set('page');
        this.closeLayoutContextMenu();
    }

    private _pageHasLayoutContent(pageIndex: number): boolean {
        const hasBlock = this.layoutSections().some(
            (section) => !isReportPageAnchor(section) && (section.frame?.page ?? 0) === pageIndex
        );
        if (hasBlock) return true;
        return this.sheetImages().some((image) => (image.page ?? 0) === pageIndex);
    }

    private _layoutPageCount(): number {
        const fromFrames = this.layoutSections().reduce(
            (highest, section) => Math.max(highest, (section.frame?.page ?? 0) + 1),
            1
        );
        return Math.max(fromFrames, this._layoutEditorPreview?.visiblePages().length ?? 1);
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
        this._placeLayoutSection(section);
        this.selectedLayoutSectionId.set(section.id);
        this._focusLayoutEditor(section, 'block');
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
        this._placeLayoutSection(section);
        this.selectedLayoutSectionId.set(section.id);
        this._focusLayoutEditor(section, 'block');
    }

    addDividerBlock(): void {
        const section: ReportSection = {
            id: `linea-${Date.now()}`,
            type: 'divider',
            order: this.layoutSections().length,
            style: { color: this.primaryColor() },
            frame: this._consumePendingContentFrame(16),
        };
        this._placeLayoutSection(section);
        this.selectedLayoutSectionId.set(section.id);
        this._focusLayoutEditor(section, 'block');
    }

    addShapeBlock(kind: ReportShapeKind): void {
        const tool = LAYOUT_SHAPE_TOOLS.find((item) => item.kind === kind) ?? LAYOUT_SHAPE_TOOLS[0];
        const section: ReportSection = {
            id: `forma-${kind}-${Date.now()}`,
            type: 'shape',
            order: this.layoutSections().length,
            label: this._transloco.translate(tool.labelKey),
            shape: kind,
            staticContent: kind,
            style: { color: this.primaryColor() },
            frame: this._consumePendingContentFrame(tool.height, tool.width),
        };
        this._placeLayoutSection(section);
        this.selectedLayoutSectionId.set(section.id);
        this._focusLayoutEditor(section, 'block');
    }

    setSelectedLayoutShape(kind: ReportShapeKind): void {
        const id = this.selectedLayoutSectionId();
        if (!id) return;
        const tool = LAYOUT_SHAPE_TOOLS.find((item) => item.kind === kind);
        this.layoutSections.update((list) =>
            list.map((section) =>
                section.id === id
                    ? {
                          ...section,
                          shape: kind,
                          staticContent: kind,
                          label: tool ? this._transloco.translate(tool.labelKey) : section.label,
                      }
                    : section
            )
        );
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
        return Boolean(type) && type !== 'spacer' && type !== 'image' && type !== 'divider' && type !== 'shape';
    }

    selectedLayoutShowsFormatBar(): boolean {
        if (this.selectedLayoutUsesCompactOverlayBar()) return true;
        const section = this.selectedLayoutSection();
        return Boolean(section) && !isReportPageAnchor(section);
    }

    selectedLayoutUsesCompactOverlayBar(): boolean {
        const id = this.selectedLayoutOverlay();
        return Boolean(
            id &&
                (id === 'signature' ||
                    id === 'logo' ||
                    id === 'watermark' ||
                    id.startsWith('hdr:') ||
                    id.startsWith('img:'))
        );
    }

    layoutPaperWidth(): number {
        return this._layoutPaperPx().width;
    }

    layoutPaperHeight(): number {
        return this._layoutPaperPx().height;
    }

    nudgeWatermarkSize(delta: number): void {
        this._placeWatermarkBox(
            this.watermarkX(),
            this.watermarkY(),
            this.watermarkWidth() + delta,
            this.watermarkHeight() + Math.round(delta * 0.45)
        );
    }

    setWatermarkBoxWidth(value: string | number): void {
        const width = Number(value);
        if (!Number.isFinite(width)) return;
        this._placeWatermarkBox(this.watermarkX(), this.watermarkY(), width, this.watermarkHeight());
    }

    setWatermarkBoxHeight(value: string | number): void {
        const height = Number(value);
        if (!Number.isFinite(height)) return;
        this._placeWatermarkBox(this.watermarkX(), this.watermarkY(), this.watermarkWidth(), height);
    }

    /** Stretch the stamp across the sheet width and keep its vertical place. */
    fitWatermarkToPageWidth(): void {
        const page = this._layoutPaperPx();
        this._state.watermarkX.set(0);
        this._state.watermarkWidth.set(page.width);
        this._placeWatermarkBox(0, this.watermarkY(), page.width, this.watermarkHeight());
    }

    /** Cover the whole sheet. */
    fitWatermarkToSheet(): void {
        const page = this._layoutPaperPx();
        this._state.watermarkX.set(0);
        this._state.watermarkY.set(0);
        this._state.watermarkWidth.set(page.width);
        this._state.watermarkHeight.set(page.height);
    }

    private _layoutPaperPx(): { width: number; height: number } {
        const preview = this._layoutEditorPreview;
        const landscape = this.orientation() === 'landscape';
        return {
            width: Math.round(preview?.pageWidthPx() ?? (landscape ? 297 : 210) * 3.7795275591),
            height: Math.round(preview?.pageHeightPx() ?? (landscape ? 210 : 297) * 3.7795275591),
        };
    }

    /** Keep the stamp on the sheet. Growing past an edge slides it until it can cover the page. */
    private _placeWatermarkBox(x: number, y: number, width: number, height: number): void {
        const page = this._layoutPaperPx();
        const nextWidth = Math.min(page.width, Math.max(40, Math.round(width)));
        const nextHeight = Math.min(page.height, Math.max(24, Math.round(height)));
        const nextX = Math.min(Math.max(0, Math.round(x)), Math.max(0, page.width - nextWidth));
        const nextY = Math.min(Math.max(0, Math.round(y)), Math.max(0, page.height - nextHeight));
        this._state.watermarkX.set(nextX);
        this._state.watermarkY.set(nextY);
        this._state.watermarkWidth.set(nextWidth);
        this._state.watermarkHeight.set(nextHeight);
    }

    selectedLayoutHeaderLogo(): ReportHeaderLogo | null {
        const overlay = this.selectedLayoutOverlay();
        if (!overlay?.startsWith('hdr:')) return null;
        return this.headerLogos().find((logo) => logo.id === overlay.slice(4)) ?? null;
    }

    nudgeSelectedHeaderLogoSize(delta: number): void {
        const logo = this.selectedLayoutHeaderLogo();
        if (!logo) return;
        this.setHeaderLogoHeight(logo.id, logo.height + delta);
    }

    nudgeSignatureSize(delta: number): void {
        this.setSignatureWidth(this.signatureWidth() + delta);
        this.setSignatureHeight(this.signatureHeight() + Math.round(delta * 0.4));
    }

    nudgeSelectedSheetImageRotation(delta: number): void {
        const image = this.selectedSheetImage();
        if (!image) return;
        this.setSelectedSheetImageRotation((image.rotation || 0) + delta);
    }

    layoutShapePickerHex(): string {
        const color = this.selectedLayoutSection()?.style?.color || this.primaryColor();
        const hex = color.startsWith('#') ? color : `#${color}`;
        return hex.length >= 7 ? hex.slice(0, 7) : '#111827';
    }

    onLayoutShapeFillPicker(event: Event): void {
        this.setSelectedLayoutColor((event.target as HTMLInputElement).value);
    }

    nudgeSelectedLayoutRotation(delta: number): void {
        const current = Number(this.selectedLayoutSection()?.style?.rotation) || 0;
        this.setSelectedLayoutRotation(current + delta);
    }

    selectedLayoutTextRoles(): ReportTextRole[] {
        if (!this.selectedLayoutShowsTypography()) return [];
        const cellKey = this.selectedLayoutCellKey();
        if (!cellKey && this.selectedLayoutCellPart() === 'title') return ['title'];
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
        if (this._selectionIsTableText()) {
            if (role === 'label') return 'visitaGuide.layoutTableHeaders';
            if (role === 'value') return 'visitaGuide.layoutTableItems';
        }
        if (role === 'label') return 'visitaGuide.layoutTextLabels';
        if (role === 'value') return 'visitaGuide.layoutTextValues';
        const type = this.selectedLayoutSection()?.type;
        return type === 'text' ? 'visitaGuide.layoutTextBody' : 'visitaGuide.layoutTextTitle';
    }

    private _selectionIsTableText(): boolean {
        const key = this.selectedLayoutCellKey();
        if (!key) return false;
        return collectObjectTables(this.layoutSourceValue(), { hideColumns: false }).some(
            (table) =>
                table.key === key ||
                table.columns.some((column) => tableColumnPath(table.key, column.key) === key)
        );
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

    layoutRoleIsUnderline(role: ReportTextRole): boolean {
        return this._layoutRole(role).textDecoration === 'underline';
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

    setLayoutRoleUnderline(role: ReportTextRole, enabled: boolean): void {
        this._patchSelectedLayoutRole(role, { textDecoration: enabled ? 'underline' : 'none' });
    }

    setLayoutRoleColor(role: ReportTextRole, value: string): void {
        this._patchSelectedLayoutRole(role, { color: value });
    }

    private _patchSelectedLayoutRole(role: ReportTextRole, patch: ReportTextRoleStyle): void {
        const section = this.selectedLayoutSection();
        if (!section) return;
        const cellKey = this.selectedLayoutCellKey();
        if (cellKey) {
            if (role === 'title') return;
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

    private _writeLayoutKeyOverride(key: string, patch: Partial<ReportKeyOverride>): void {
        const section = this.selectedLayoutSection();
        if (!section || !key) return;
        const current = section.keyOverrides?.[key] ?? {};
        this._patchSelectedLayout({
            keyOverrides: {
                ...(section.keyOverrides ?? {}),
                [key]: { ...current, ...patch },
            },
        });
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
        return override || option?.label || humanizeParamKey(key);
    }

    setSelectedLayoutCellLabel(value: string): void {
        this._patchSelectedKeyOverride({ label: value });
    }

    setSelectedLayoutCellBackground(value: string): void {
        this._patchSelectedKeyOverride({ backgroundColor: value });
    }

    selectedLayoutCellIsTable(): boolean {
        const key = this.selectedLayoutCellKey();
        if (!key) return false;
        return this.selectedLayoutTableColumns().length > 0;
    }

    selectedLayoutCellColor(): string {
        const custom = this.selectedLayoutCellOverride()?.backgroundColor;
        if (custom) return custom;
        return this.selectedLayoutCellIsTable() ? '#fffbeb' : '#fafaf9';
    }

    selectedLayoutTableBadge(): boolean {
        return this.selectedLayoutCellOverride()?.showTableBadge !== false;
    }

    setSelectedLayoutTableBadge(visible: boolean): void {
        if (visible) {
            this._patchSelectedKeyOverride({}, ['showTableBadge']);
            return;
        }
        this._patchSelectedKeyOverride({ showTableBadge: false });
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

    selectLayoutSheetItem(key: string): void {
        this.selectedLayoutCellKey.set(key);
        this.selectedLayoutCellPart.set('cell');
        const section = this.selectedLayoutSection();
        if (section) this._focusLayoutEditor(section, 'cell');
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

    setSelectedLayoutPadding(value: string | number): void {
        const padding = Number(value);
        if (!Number.isFinite(padding)) return;
        this._patchSelectedLayoutStyle({ padding: String(Math.max(4, Math.min(240, Math.round(padding)))) });
    }

    setSelectedLayoutBorderEnabled(enabled: boolean): void {
        if (!enabled) {
            this._patchSelectedLayoutStyle({ borderWidth: 0 });
            return;
        }
        const current = this.selectedLayoutSection()?.style;
        const isShape = this.selectedLayoutSection()?.type === 'shape';
        this._patchSelectedLayoutStyle({
            borderWidth: current?.borderWidth && current.borderWidth > 0 ? current.borderWidth : 1,
            borderColor: current?.borderColor || (isShape ? '#111827' : '#d6d3d1'),
            ...(isShape
                ? {}
                : {
                      borderRadius:
                          current?.borderRadius && current.borderRadius > 0 ? current.borderRadius : 8,
                  }),
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

    /** Whole-block chrome (not a cell, not the title alone). */
    selectedLayoutEditsWholeBlock(): boolean {
        return (
            Boolean(this.selectedLayoutSection()) &&
            !this.selectedLayoutCellKey() &&
            this.selectedLayoutCellPart() !== 'title'
        );
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

    selectedLayoutTableColumns(): { key: string; label: string; visible: boolean }[] {
        const tableKey = this.selectedLayoutCellKey();
        if (!tableKey) return [];
        const section = this.selectedLayoutSection();
        const table = collectObjectTables(this.layoutSourceValue(), {
            keyOrder: section?.keyOrder,
            hideColumns: false,
        }).find((item) => item.key === tableKey);
        if (!table) return [];
        return table.columns.map((column) => {
            const key = tableColumnPath(table.key, column.key);
            return { key, label: column.label, visible: this.isLayoutParamVisible(key) };
        });
    }

    moveSelectedLayoutTableColumn(columnKey: string, delta: -1 | 1): void {
        const columns = this.selectedLayoutTableColumns();
        const from = columns.findIndex((column) => column.key === columnKey);
        const to = from + delta;
        if (from < 0 || to < 0 || to >= columns.length) return;
        const order = columns.map((column) => column.key);
        const [moved] = order.splice(from, 1);
        order.splice(to, 0, moved);
        const section = this.selectedLayoutSection();
        if (!section) return;
        const current = section.keyOrder?.length
            ? [...section.keyOrder]
            : collectLayoutSheetItems(this.layoutSourceValue(), { hiddenKeys: [] }).map((item) => item.key);
        const columnSet = new Set(columns.map((column) => column.key));
        const without = current.filter((key) => !columnSet.has(key));
        const tableAt = without.indexOf(this.selectedLayoutCellKey() || '');
        without.splice(tableAt >= 0 ? tableAt + 1 : without.length, 0, ...order);
        this._patchSelectedLayout({ keyOrder: without });
    }

    layoutParamOptions(): { key: string; label: string }[] {
        const value = this.layoutSourceValue();
        return collectLayoutSheetItems(value).map((item) => ({
            key: item.key,
            label: item.label,
        }));
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
            textDecoration: style.textDecoration,
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
            rotation: style.rotation,
            zIndex: style.zIndex,
            variant: style.variant,
            variantRules: style.variantRules ? cloneReportValue(style.variantRules) : undefined,
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

    async saveLayoutTemplate(): Promise<boolean> {
        this.isSavingLayout.set(true);
        try {
            const saved = await this._persistGuideToSmartBatch();
            if (!saved) throw new Error('template');
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

    private async _persistGuideToSmartBatch(): Promise<boolean> {
        try {
            await this._ensureLinkedConfiguration();
            const template = await this._persistWorkingTemplate();
            if (!template && this.isReportStudio()) return false;
            await this._syncConfigurationExtras(template?._id ?? null);
            this._markLayoutClean();
            this._persistLayoutDraft(this._layoutDesignSnapshot());
            return true;
        } catch {
            return false;
        }
    }

    private async _ensureLinkedConfiguration(): Promise<void> {
        const features = this.selectedFeatures();
        const existing = this._state.configId();
        if (!existing && !features.length) return;
        const entities = this.entities().length ? this.entities() : (['citizen'] as GuideEntity[]);
        const resolved = await this._pipeline.resolve(
            entities,
            this.countryIsos()[0] ?? 'co',
            this.reportTitle() || pipelineName(entities),
            features,
            this.executor() === 'browser' ? 'browser' : 'queue',
            this._state.flowGraph(),
            existing
        );
        this._state.configId.set(resolved.configId);
        this._state.configuration.set(resolved.configuration);
        if (resolved.configId && endpointNodes(this._state.flowGraph()).length) {
            writeStoredFlow(resolved.configId, this._state.flowGraph());
        }
        if (resolved.template && !this.selectedTemplate()) {
            this._state.clonedTemplate.set(resolved.template);
            this._state.selectedTemplate.set(resolved.template);
        }
    }

    private async _syncConfigurationExtras(templateId: string | null): Promise<void> {
        const configId = this._state.configId();
        if (!configId) return;
        const graph = this._state.flowGraph();
        const patch: Partial<BatchConfiguration> = {
            executor: this.executor() === 'browser' ? 'browser' : 'queue',
        };
        if (templateId) patch.preferredReportTemplate = templateId;
        if (endpointNodes(graph).length) patch.visitaFlow = serializeVisitaFlow(graph);
        let updated;
        try {
            updated = await firstValueFrom(this._batch.updateConfiguration(configId, patch));
        } catch {
            const { visitaFlow: _ignored, ...rest } = patch;
            updated = await firstValueFrom(this._batch.updateConfiguration(configId, rest));
        }
        this._state.configuration.set({
            ...(this._state.configuration() ?? updated.data),
            ...updated.data,
        });
        if (endpointNodes(graph).length) writeStoredFlow(configId, graph);
    }

    async saveLayoutAndGenerate(): Promise<void> {
        const saved = await this.saveLayoutTemplate();
        if (!saved) return;
        if (this.mode() === 'batch') {
            this._continueBatchUpload();
            return;
        }
        this.reportStudioStep.set('preview');
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
        if (this.isRetryingAnyResult()) return;
        this._state.includeItems.update((items) =>
            items.map((item) =>
                item.sequence === sequence ? { ...item, included: !item.included } : item
            )
        );
    }

    dropInclude(event: CdkDragDrop<unknown>): void {
        if (this.isRetryingAnyResult()) return;
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
        this._preferCompactFormatBar();
        writeScratchDraft(this._layoutDesignSnapshot());
        this.enterLayout();
        this.step.set('layout');
    }

    isTemplateSelected(template: SmartReportTemplate): boolean {
        return Boolean(template._id && this.selectedTemplate()?._id === template._id);
    }

    async openDesigner(blank: boolean): Promise<void> {
        this._bridgePreviewData();
        if (blank) {
            this.pickScratch();
            return;
        }
        this.enterLayout();
        this.step.set('layout');
    }

    openMoldEditor(): void {
        void this.openDesigner(false);
    }

    openFullReport(): void {
        if (this.isRetryingAnyResult()) return;
        const configId = this._state.configId();
        const batchId = this._state.batchId();
        if (!configId || !batchId) return;
        void this._router.navigate(['/smart-batch', configId, 'batch', batchId, 'report']);
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
            if (!this._acceptLayoutImageFile(file)) return;
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
        this.onCompanyLogosSelected(event, 'header');
    }

    headerBandLogos(): ReportHeaderLogo[] {
        return this.headerLogos().filter((logo) => logo.band !== 'footer');
    }

    footerBandLogos(): ReportHeaderLogo[] {
        return this.headerLogos().filter((logo) => logo.band === 'footer');
    }

    onCompanyLogosSelected(event: Event, band: 'header' | 'footer'): void {
        const input = event.target as HTMLInputElement;
        const files = Array.from(input.files ?? []);
        input.value = '';
        const inBand = band === 'footer' ? this.footerBandLogos() : this.headerBandLogos();
        const room = Math.max(0, 8 - inBand.length);
        files.slice(0, room).forEach((file) => {
            if (!this._acceptLayoutImageFile(file)) return;
            const reader = new FileReader();
            reader.onload = () => {
                const src = String(reader.result ?? '');
                if (!src) return;
                const siblings = band === 'footer' ? this.footerBandLogos() : this.headerBandLogos();
                const align = (['left', 'center', 'right'] as const)[siblings.length % 3];
                this._setHeaderLogos([
                    ...this.headerLogos(),
                    {
                        id: `hdr-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                        src,
                        align,
                        band,
                        width: HEADER_LOGO_DEFAULT_WIDTH,
                        height: HEADER_LOGO_DEFAULT_HEIGHT,
                    },
                ]);
            };
            reader.readAsDataURL(file);
        });
    }

    setHeaderLogoAlign(id: string, align: ReportHeaderLogo['align']): void {
        this._setHeaderLogos(this.headerLogos().map((logo) => (logo.id === id ? { ...logo, align } : logo)));
    }

    setHeaderLogoHeight(id: string, value: string | number): void {
        const logo = this.headerLogos().find((item) => item.id === id);
        if (!logo) return;
        const size = fitHeaderLogoSize(logo.width, logo.height, Number(value));
        this._setHeaderLogos(this.headerLogos().map((item) => (item.id === id ? { ...item, ...size } : item)));
    }

    setHeaderLogoSize(size: { id: string; width: number; height: number }): void {
        const fitted = fitHeaderLogoSize(size.width, size.height);
        this._setHeaderLogos(
            this.headerLogos().map((item) => (item.id === size.id ? { ...item, width: fitted.width, height: fitted.height } : item))
        );
    }

    headerLogoAlignKey(align: ReportHeaderLogo['align']): string {
        if (align === 'center') return 'visitaGuide.layoutHeaderCenter';
        if (align === 'right') return 'visitaGuide.layoutHeaderRight';
        return 'visitaGuide.layoutHeaderLeft';
    }

    removeHeaderLogo(id: string): void {
        this._setHeaderLogos(this.headerLogos().filter((logo) => logo.id !== id));
        if (this.selectedLayoutOverlay() === `hdr:${id}`) {
            this.selectedLayoutOverlay.set(null);
            this.layoutEditorKind.set(null);
        }
    }

    private _setHeaderLogos(list: ReportHeaderLogo[]): void {
        this._state.headerLogos.set(list);
    }

    private _headerLogosFromTemplate(template: SmartReportTemplate): ReportHeaderLogo[] {
        const stored = Array.isArray(template.headerLogos) ? template.headerLogos.filter((logo) => logo?.src) : [];
        if (stored.length) {
            return stored.map((logo) => ({
                id: logo.id || `hdr-${Math.random().toString(36).slice(2, 7)}`,
                src: logo.src,
                align: logo.align === 'center' || logo.align === 'right' ? logo.align : 'left',
                band: logo.band === 'footer' ? 'footer' : 'header',
                width: logo.width || HEADER_LOGO_DEFAULT_WIDTH,
                height: logo.height || HEADER_LOGO_DEFAULT_HEIGHT,
            }));
        }
        if (!template.logo || template.logoSettings?.enabled) return [];
        return [
            {
                id: 'company-logo',
                src: template.logo,
                align: 'left',
                band: 'header',
                width: Math.min(220, template.logoSettings?.width || HEADER_LOGO_DEFAULT_WIDTH),
                height: Math.min(56, template.logoSettings?.height || HEADER_LOGO_DEFAULT_HEIGHT),
            },
        ];
    }

    setFieldValue(key: string, value: string): void {
        this._state.setInputValue(key, value);
    }

    fieldValue(key: string): string {
        return this.inputValues()[key] ?? '';
    }

    async generatePdf(_printHtmlOverride?: string | null): Promise<void> {
        this.isGenerating.set(true);
        try {
            const template = await this._persistWorkingTemplate();
            if (!template?._id) throw new Error('template');
            const engine = this.pdfEngine() === 'pdfkit' ? 'pdfkit' : 'puppeteer';
            const batchId = this._state.batchId();
            const rowIndex = Number(this.previewData()['rowIndex']);
            if (batchId) {
                const report = await firstValueFrom(
                    this._reports.createReport({
                        template: template._id,
                        smartBatch: batchId,
                        name: this.reportTitle() || template.name,
                    })
                );
                const result = await firstValueFrom(
                    this._reports.generateReport(report._id!, {
                        engine,
                        ...(Number.isFinite(rowIndex) ? { rowIndex } : {}),
                    })
                );
                if (!result.pdf?.buffer) throw new Error('pdf');
                const dataUrl = `data:application/pdf;base64,${result.pdf.buffer}`;
                this._state.pdfDataUrl.set(dataUrl);
                this.downloadDataUrl(dataUrl, `${this.fileBaseName()}.pdf`);
                this._snack.open(this._transloco.translate('visitaGuide.pdfReady'), undefined, {
                    duration: 3000,
                });
                return;
            }
            const blob = await firstValueFrom(
                this._reports.downloadTemplateSample(template._id, {
                    sampleData: this.previewData(),
                })
            );
            const url = URL.createObjectURL(blob);
            this._state.pdfDataUrl.set(url);
            this.downloadDataUrl(url, `${this.fileBaseName()}.pdf`);
            this._snack.open(this._transloco.translate('visitaGuide.pdfReady'), undefined, {
                duration: 3000,
            });
        } catch {
            this._snack.open(this._transloco.translate('visitaGuide.pdfFailed'), undefined, {
                duration: 4000,
            });
        } finally {
            this.isGenerating.set(false);
        }
    }

    private async _printHtmlForCurrentRecord(): Promise<string | undefined> {
        const records = this.previewRecords();
        if (records.length <= 1) return (await this._waitForEditorPrintHtml()) ?? undefined;
        const current = this.previewData();
        return (
            (await this._waitForRecordPrintHtml(current, records)) ??
            (await this._waitForEditorPrintHtml()) ??
            undefined
        );
    }

    private async _waitForEditorPrintHtml(): Promise<string | null> {
        for (let attempt = 0; attempt < 12; attempt++) {
            await new Promise<void>((resolve) => {
                requestAnimationFrame(() => resolve());
                setTimeout(() => resolve(), 50);
            });
            const html = this._editorPrintHtml();
            if (html?.includes('<html')) return html;
        }
        return this._editorPrintHtml();
    }

    private async _waitForRecordPrintHtml(
        record: Record<string, any>,
        records: Record<string, any>[]
    ): Promise<string | undefined> {
        const others = records.filter((item) => item !== record);
        const markers = uniquePrintMarkers(record, others);
        const rowIndex = Number(record['rowIndex']);
        for (let attempt = 0; attempt < 80; attempt++) {
            await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
            this._cdr.detectChanges();
            const html = this._capturePrintHtml();
            if (html && htmlMatchesPrintMarkers(html, markers, Number.isFinite(rowIndex) ? rowIndex : undefined)) {
                return html;
            }
        }
        return undefined;
    }

    private _capturePrintHtml(): string | null {
        const visible = this._visiblePreview();
        const printCapture = this._previews?.toArray().find((item) => item.printCapture());
        return visible?.exportPrintHtml() ?? printCapture?.exportPrintHtml() ?? null;
    }

    private _visiblePreview(): ReportPreviewComponent | undefined {
        const previews = this._previews?.toArray() ?? [];
        if (this.step() === 'generate') {
            return (
                previews.find((item) => !item.printCapture() && !item.reorderable()) ??
                previews.find((item) => !item.printCapture())
            );
        }
        return previews.find((item) => item.reorderable());
    }

    private _editorPrintHtml(): string | null {
        const printCapture = this._previews?.toArray().find((item) => item.printCapture());
        return (
            printCapture?.exportPrintHtml() ??
            this._visiblePreview()?.exportPrintHtml() ??
            this._previews?.toArray().at(-1)?.exportPrintHtml() ??
            null
        );
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

    flagSrcFor(iso: string): string | null {
        return countryFlagImageUrl(iso);
    }

    isWorldFeature(feature: AppFeature): boolean {
        return isWorldCountry(feature.country);
    }

    private _sourceCountForCountry(iso: string): number {
        return filterFeaturesForCountry(this.availableFeatures(), countryNameForIso(iso)).filter(
            isSmartBatchCatalogFeature
        ).length;
    }

    canRetryResult(card: GuideResultCard): boolean {
        return card.status === 'failed' || card.status === 'empty' || card.status === 'skipped';
    }

    isRetryingResult(sequence: number): boolean {
        return this.retryingSequences().includes(sequence);
    }

    async retryResultCard(card: GuideResultCard): Promise<void> {
        const batch = this.batch();
        const config = this.configuration();
        const batchId = batch?._id;
        if (!batchId || !config || this.isRetryingResult(card.sequence)) return;

        this.retryingSequences.update((list) => [...list, card.sequence]);
        try {
            const executor = batch.executor ?? config.executor;
            if (executor === 'queue' || (executor === 'featureRunner' && batch.run)) {
                const res = await firstValueFrom(
                    this._batch.retrySmartBatchSteps(batchId, {
                        rowIndex: 0,
                        sequences: [card.sequence],
                    })
                );
                this._state.batch.set(res.data.batch);
                this._startPoll(batchId);
                return;
            }

            await this._browserRunner.retryRowSteps(
                batch,
                config.steps ?? [],
                0,
                [card.sequence],
                (next) => this._state.batch.set(next)
            );
        } catch {
            this._snack.open(this._transloco.translate('visitaGuide.retryEndpointFailed'), undefined, {
                duration: 3500,
            });
        } finally {
            if (this._pollSub) return;
            this.retryingSequences.update((list) => list.filter((sequence) => sequence !== card.sequence));
        }
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

    setEndpointChain(chain: AppFeature[]): void {
        this._state.selectedFeatures.set(chain);
    }

    setFlowGraph(graph: FlowGraph): void {
        this._state.flowGraph.set(graph);
    }

    private _persistEndpointFlowToSmartBatch(): Promise<void> {
        this._flowPersistTail = this._flowPersistTail
            .catch(() => undefined)
            .then(() => this._writeEndpointFlowNow());
        return this._flowPersistTail;
    }

    private async _writeEndpointFlowNow(): Promise<void> {
        if (!this.entities().length || !this.selectedFeatures().length) return;
        if (!endpointNodes(this._state.flowGraph()).length) return;
        await this._ensureLinkedConfiguration();
        const id = this._state.configId();
        const graph = this._state.flowGraph();
        if (id && endpointNodes(graph).length) writeStoredFlow(id, graph);
    }

    private async _continueAfterEndpoints(next: GuideStepId): Promise<void> {
        try {
            await this._persistEndpointFlowToSmartBatch();
        } catch {
            /* consult can still create the configuration */
        }
        this.step.set(next);
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

    featureIcon(feature: AppFeature): string {
        return featureGroupIcon(feature);
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

    featureDisplayName(feature: AppFeature): string {
        this._activeLang();
        const catalog = getAppFeatureCatalogCopy(this._transloco, feature.code);
        if (catalog.title) return catalog.title;
        const lang = (this._activeLang() ?? this._transloco.getActiveLang()).split('-')[0].toLowerCase();
        if (lang === 'es' && feature.nameES?.trim()) return feature.nameES.trim();
        return (feature.name || feature.code || '').trim();
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
            {
                ...getAppFeatureCatalogCopy(this._transloco, feature.code),
                title: this.featureDisplayName(feature),
            }
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
                this._applyPendingFeatureIds();
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
        const sections = cloneReportValue(template.sections ?? []).filter((section) => {
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
            name: (this.reportTitle() || draft.name || '').slice(0, 150),
            description: draft.description,
            primaryColor: this.primaryColor() || draft.primaryColor,
            identityColor: this.identityColor() || draft.identityColor || '#000000',
            pageBackgroundColor: this.pageBackgroundColor() || '#ffffff',
            logo: this.headerLogos().length ? '' : this.logoDataUrl() || draft.logo || '',
            header: draft.header,
            footer: draft.footer,
            legend: (this.legend() || '').slice(0, 2000),
            legendPosition: this.legendPosition(),
            termsAndConditions: (this.termsAndConditions() || '').slice(0, 4000),
            termsPosition: this.termsPosition(),
            showPageNumbers: this.showPageNumbers(),
            pageNumberPosition: this.pageNumberPosition(),
            watermark: this._watermarkPayload(),
            logoSettings: {
                enabled: this.headerLogos().length ? false : Boolean(this.logoDataUrl()),
                x: this.logoX(),
                y: this.logoY(),
                width: this.logoWidth(),
                height: this.logoHeight(),
                rotation: this.logoRotation(),
                autoFitContent: draft.logoSettings?.autoFitContent ?? true,
            },
            sheetImages: cloneReportValue(this.sheetImages()),
            headerLogos: cloneReportValue(this.headerLogos()),
            sections: cloneReportValue(this.layoutSections()),
            pageSize: this.pageSize(),
            orientation: this.orientation(),
            margins: draft.margins,
            bodyTopPadding: draft.bodyTopPadding,
            pdfEngine: this.pdfEngine(),
            security: this._securityPayload(),
            signature: this._signaturePayload(),
            sampleData: this.previewData(),
            batchConfiguration: configId ?? draft.batchConfiguration,
            category: this.entities().length === 1 ? this.entities()[0] : draft.category,
        };

        const isSystemTemplate = draft.type === 'System';
        if (draft._id && !isSystemTemplate) {
            const updated = await firstValueFrom(this._reports.updateTemplate(draft._id, payload));
            this._state.selectedTemplate.set(updated);
            clearScratchDraft();
            return updated;
        }

        const created = await firstValueFrom(
            this._reports.createTemplate({
                ...payload,
                type: 'client',
                country: this.countryNames()[0] || draft.country,
            })
        );
        this._state.selectedTemplate.set(created);
        if (created?._id) clearScratchDraft();
        this._state.clonedTemplate.set(created);
        this._state.templateChoice.set('mine');
        return created;
    }

    private _refreshTemplates(): void {
        this._reports.getTemplates().subscribe();
    }

    private _applyPickedTemplate(template: SmartReportTemplate, choice: GuideTemplateChoice): void {
        clearScratchDraft();
        this._state.templateChoice.set(choice);
        this._state.selectedTemplate.set(template);
        this.hydrateCustomize(template, true);
        if (this.mode() === 'batch') return;
        this.layoutSections.set(
            cloneReportValue(template.sections ?? []).map((section, index) => ({ ...section, order: index }))
        );
        this.seedDefaultLayout();
        this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
        this._preferCompactFormatBar();
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
        this._state.identityColor.set('#000000');
        this._state.pageBackgroundColor.set('#ffffff');
        this._state.logoDataUrl.set(null);
        this._state.logoX.set(32);
        this._state.logoY.set(32);
        this._state.logoWidth.set(160);
        this._state.logoHeight.set(60);
        this._state.logoRotation.set(0);
        this._state.sheetImages.set([]);
        this._state.headerLogos.set([]);
        this._state.legend.set('');
        this._state.legendPosition.set('left');
        this._state.termsAndConditions.set('');
        this._state.termsPosition.set('left');
        this._state.watermarkEnabled.set(false);
        this._state.watermarkType.set('text');
        this._state.watermarkLogo.set(null);
        this._state.watermarkText.set('');
        this._state.watermarkOpacity.set(0.08);
        this._state.watermarkPattern.set('single');
        this._state.watermarkX.set(250);
        this._state.watermarkY.set(420);
        this._state.watermarkWidth.set(280);
        this._state.watermarkHeight.set(160);
        this._state.watermarkRotation.set(-15);
        this._state.showPageNumbers.set(true);
        this._state.pageNumberPosition.set('bottom-center');
        this._state.pageSize.set('A4');
        this._state.orientation.set('portrait');
        this._state.pdfEngine.set('puppeteer');
        this._state.securityEnabled.set(false);
        this._state.securityPassword.set('');
        this._state.signatureEnabled.set(false);
        this._state.signatureImage.set(null);
        this._state.signatureX.set(48);
        this._state.signatureY.set(720);
        this._state.signatureWidth.set(160);
        this._state.signatureHeight.set(64);
        this._state.signaturePage.set(0);
        this._signatureAnchored = false;
    }

    private _securityPayload(): NonNullable<SmartReportTemplate['security']> {
        const password = this.securityPassword();
        return {
            enabled: this.securityEnabled(),
            ...(password && password !== '******' ? { password } : {}),
        };
    }

    private _watermarkPayload(): NonNullable<SmartReportTemplate['watermark']> {
        return {
            enabled: this.watermarkEnabled(),
            type: this.watermarkType(),
            logo: this.watermarkLogo() || '',
            text: (this.watermarkText() || this.reportTitle() || 'CONFIDENTIAL').slice(0, 100),
            opacity: this.watermarkOpacity(),
            pattern: this.watermarkPattern(),
            x: this.watermarkX(),
            y: this.watermarkY(),
            width: this.watermarkWidth(),
            height: this.watermarkHeight(),
            rotation: this.watermarkRotation(),
        };
    }

    private _signaturePayload(): NonNullable<SmartReportTemplate['signature']> {
        return {
            enabled: this.signatureEnabled() && Boolean(this.signatureImage()),
            image: this.signatureImage() || '',
            x: this.signatureX(),
            y: this.signatureY(),
            width: this.signatureWidth(),
            height: this.signatureHeight(),
            page: Math.max(0, this.signaturePage()),
        };
    }

    private hydrateCustomize(template: SmartReportTemplate, force = false): void {
        if (force || !this.reportTitle()) this._state.reportTitle.set(template.name);
        if (force || template.primaryColor) this._state.primaryColor.set(template.primaryColor || '#0f172a');
        if (force || template.identityColor) this._state.identityColor.set(template.identityColor || '#000000');
        if (force || template.pageBackgroundColor) {
            this._state.pageBackgroundColor.set(template.pageBackgroundColor || '#ffffff');
        }
        if (force || template.logo) this._state.logoDataUrl.set(template.logo || null);
        const headerLogos = this._headerLogosFromTemplate(template);
        this._state.headerLogos.set(headerLogos);
        this._state.sheetImages.set(cloneReportValue(Array.isArray(template.sheetImages) ? template.sheetImages : []));
        if (force || template.legend) this._state.legend.set(template.legend || '');
        if (force || template.legendPosition) {
            this._state.legendPosition.set(template.legendPosition ?? 'left');
        }
        if (force || template.termsAndConditions) {
            this._state.termsAndConditions.set(template.termsAndConditions || '');
        }
        if (force || template.termsPosition) {
            this._state.termsPosition.set(template.termsPosition ?? 'left');
        }
        if (force || typeof template.showPageNumbers === 'boolean') {
            this._state.showPageNumbers.set(template.showPageNumbers ?? true);
        }
        if (force || template.pageNumberPosition) {
            this._state.pageNumberPosition.set(template.pageNumberPosition ?? 'bottom-center');
        }
        if (force || template.pageSize) {
            this._state.pageSize.set(template.pageSize ?? 'A4');
        }
        if (force || template.orientation) {
            this._state.orientation.set(template.orientation ?? 'portrait');
        }
        if (force || template.pdfEngine) {
            this._state.pdfEngine.set(template.pdfEngine ?? 'puppeteer');
        }
        if (force || template.security) {
            this._state.securityEnabled.set(Boolean(template.security?.enabled));
            this._state.securityPassword.set(template.security?.enabled ? '******' : '');
        }
        if (force && !template.security) {
            this._state.securityEnabled.set(false);
            this._state.securityPassword.set('');
        }
        if (force || template.signature) {
            this._state.signatureEnabled.set(Boolean(template.signature?.enabled && template.signature?.image));
            this._state.signatureImage.set(template.signature?.image || null);
            this._state.signatureX.set(template.signature?.x ?? 48);
            this._state.signatureY.set(template.signature?.y ?? 720);
            this._state.signatureWidth.set(template.signature?.width ?? 160);
            this._state.signatureHeight.set(template.signature?.height ?? 64);
            this._state.signaturePage.set(template.signature?.page ?? 0);
            this._signatureAnchored = true;
        }
        if (force && !template.signature) {
            this._state.signatureEnabled.set(false);
            this._state.signatureImage.set(null);
            this._state.signatureX.set(48);
            this._state.signatureY.set(720);
            this._state.signatureWidth.set(160);
            this._state.signatureHeight.set(64);
            this._state.signaturePage.set(0);
        }
        if (force || template.watermark) {
            this._state.watermarkEnabled.set(Boolean(template.watermark?.enabled));
            this._state.watermarkType.set(template.watermark?.type === 'logo' ? 'logo' : 'text');
            const headerSrcs = new Set(headerLogos.map((logo) => logo.src));
            const dedicated = template.watermark?.logo?.trim() || '';
            const workspaceLogo = template.logo && !headerSrcs.has(template.logo) ? template.logo : '';
            this._state.watermarkLogo.set(
                dedicated || (template.watermark?.type === 'logo' ? workspaceLogo : '') || null
            );
            this._state.watermarkText.set(template.watermark?.text || '');
            this._state.watermarkOpacity.set(template.watermark?.opacity ?? 0.08);
            this._state.watermarkPattern.set(
                template.watermark?.pattern === 'repeated' ? 'repeated' : 'single'
            );
            this._state.watermarkX.set(typeof template.watermark?.x === 'number' ? template.watermark.x : 250);
            this._state.watermarkY.set(typeof template.watermark?.y === 'number' ? template.watermark.y : 420);
            this._state.watermarkWidth.set(
                typeof template.watermark?.width === 'number' ? template.watermark.width : 280
            );
            this._state.watermarkHeight.set(
                typeof template.watermark?.height === 'number' ? template.watermark.height : 160
            );
            this._state.watermarkRotation.set(
                typeof template.watermark?.rotation === 'number' ? template.watermark.rotation : -15
            );
        }
        if (force && !template.watermark) {
            this._state.watermarkEnabled.set(false);
            this._state.watermarkLogo.set(null);
            this._state.watermarkType.set('text');
            this._state.watermarkText.set('');
            this._state.watermarkOpacity.set(0.08);
            this._state.watermarkPattern.set('single');
            this._state.watermarkX.set(250);
            this._state.watermarkY.set(420);
            this._state.watermarkWidth.set(280);
            this._state.watermarkHeight.set(160);
            this._state.watermarkRotation.set(-15);
        }
        if (force || template.logoSettings) {
            this._state.logoX.set(typeof template.logoSettings?.x === 'number' ? template.logoSettings.x : 32);
            this._state.logoY.set(typeof template.logoSettings?.y === 'number' ? template.logoSettings.y : 32);
            this._state.logoWidth.set(
                typeof template.logoSettings?.width === 'number' ? template.logoSettings.width : 160
            );
            this._state.logoHeight.set(
                typeof template.logoSettings?.height === 'number' ? template.logoSettings.height : 60
            );
            this._state.logoRotation.set(
                typeof template.logoSettings?.rotation === 'number' ? template.logoSettings.rotation : 0
            );
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
            await this._persistEndpointFlowToSmartBatch();
            const resolved = await this._pipeline.resolve(
                this.entities(),
                this.countryIsos()[0] ?? 'co',
                pipelineName(this.entities()),
                this.selectedFeatures(),
                this.executor() === 'browser' ? 'browser' : 'queue',
                this._state.flowGraph(),
                this._state.configId()
            );
            if (!this._alive) return;

            this._state.configId.set(resolved.configId);
            this._state.configuration.set(resolved.configuration);
            if (resolved.template) {
                this._state.clonedTemplate.set(resolved.template);
                this._state.selectedTemplate.set(resolved.template);
                this.hydrateCustomize(resolved.template);
            }

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
                        this.retryingSequences.set([]);
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

    private _resumeFromUrl(): void {
        const parsed = parseGuideUrl(this._route.snapshot.queryParamMap);
        this._pendingFeatureIds = parsed.features;

        if (
            parsed.templateChoice !== 'scratch' &&
            parsed.templateId &&
            (parsed.step === 'layout' || parsed.step === 'generate' || parsed.step === null)
        ) {
            this._openSavedTemplateInLayout(parsed.templateId, parsed.configId, parsed.step ?? 'layout');
            this._guideUrlReady = true;
            return;
        }

        if (parsed.intent && !this._state.intent()) {
            this._state.intent.set(parsed.intent);
            this._state.wantsReport.set(parsed.intent === 'report' || parsed.intent === 'template');
        }
        if (parsed.countries.length) this._state.countryIsos.set(parsed.countries);
        if (parsed.entities.length) this._state.entities.set(parsed.entities);
        if (parsed.mode) this._state.mode.set(parsed.mode);
        this._state.applyDeductions();

        if (parsed.configId) {
            this._state.configId.set(parsed.configId);
            this._batch.getConfiguration(parsed.configId).subscribe({
                next: (res) => this._hydrateFromConfiguration(res.data),
            });
        }
        if (parsed.batchId) {
            this._state.batchId.set(parsed.batchId);
            this._batch.getSmartBatch(parsed.batchId).subscribe({
                next: (res) => {
                    this._state.batch.set(res.data);
                    if (this.templateChoice() === 'scratch') {
                        this.ensureIncludeItems();
                        this.seedDefaultLayout();
                    }
                },
            });
        }

        if (parsed.templateChoice === 'scratch') {
            if (parsed.configId) this._state.editingSavedLayout.set(true);
            this._state.intent.set('template');
            this._state.wantsReport.set(true);
            this._resumeScratchTemplate();
        }

        if (parsed.step && this.visibleSteps().includes(parsed.step)) {
            if (parsed.step === 'layout' && parsed.templateChoice !== 'scratch') this.enterLayout();
            if (parsed.step === 'include') this.ensureIncludeItems();
            if (parsed.step === 'template') this._refreshTemplates();
            this._state.step.set(parsed.step);
            if (parsed.step === 'layout' || parsed.step === 'generate') {
                this._restoreLayoutDraftIfAny();
                if (parsed.step === 'generate') this.reportStudioStep.set('preview');
            }
        }

        this._applyPendingFeatureIds();
        this._guideUrlReady = true;
    }

    private _resumeScratchTemplate(): void {
        if (this._state.configId()) this._state.editingSavedLayout.set(true);
        this._state.templateChoice.set('scratch');
        this._state.selectedTemplate.set(null);
        const draft = readScratchDraft();
        if (draftIsScratch(draft)) {
            this._applyLayoutSnapshot(JSON.stringify(draft));
            this._markLayoutClean();
        } else {
            this._resetLayoutBranding();
            this.layoutSections.set([]);
            this.seedDefaultLayout();
        }
        this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
        this._preferCompactFormatBar();
        this.enterLayout();
    }

    private _applyPendingFeatureIds(): void {
        const ids = new Set(this._pendingFeatureIds);
        if (!ids.size || !this.availableFeatures().length) return;
        const catalog = this.availableFeatures();
        const selected = catalog.filter((feature) => ids.has(feature._id));
        if (selected.length) this._state.selectedFeatures.set(selected);
        this._restoreConsultationFlow(selected.length ? selected : catalog);
        this._pendingFeatureIds = [];
    }

    private _hydrateFromConfiguration(config: BatchConfiguration): void {
        const id = config._id ?? config.id ?? null;
        if (id) this._state.configId.set(id);
        this._state.configuration.set(config);
        if (config.executor === 'browser' || config.executor === 'queue') {
            this._state.executor.set(config.executor);
        }
        const draft = readFlowDraft();
        const savedFlow =
            parseFlowGraph(config.visitaFlow) ??
            readStoredFlow(id) ??
            (draft?.configId === id ? draft.graph : null);
        if (savedFlow) this._pendingVisitaFlow = savedFlow;
        const populated = featuresFromConfiguration(config);
        const ids = featureIdsFromConfiguration(config);
        if (populated.length) {
            this._state.selectedFeatures.set(populated);
            this._restoreConsultationFlow(populated);
            return;
        }
        if (ids.length) {
            this._pendingFeatureIds = ids;
            this._applyPendingFeatureIds();
        }
    }

    private _restoreConsultationFlow(features: AppFeature[]): void {
        const catalog = this.availableFeatures().length ? this.availableFeatures() : features;
        if (this._pendingVisitaFlow) {
            this._state.flowGraph.set(hydrateFlowGraph(this._pendingVisitaFlow, catalog));
            this._pendingVisitaFlow = null;
            const ordered = flattenFlowGraph(this._state.flowGraph());
            if (ordered.length) this._state.selectedFeatures.set(ordered);
            return;
        }
        const draft = readFlowDraft();
        const draftIds = draft ? usedFeatureIds(draft.graph) : [];
        const ids = new Set(features.map((feature) => feature._id).filter(Boolean));
        const draftMatches = draftIds.length === ids.size && draftIds.every((id) => ids.has(id));
        if (draft && draftMatches) {
            const graph = hydrateFlowGraph(draft.graph, catalog);
            this._state.flowGraph.set(graph);
            this._state.selectedFeatures.set(flattenFlowGraph(graph));
            if (draft.inputValues && Object.keys(draft.inputValues).length) {
                this._state.inputValues.set(draft.inputValues);
            }
            return;
        }
        if (!endpointNodes(this._state.flowGraph()).length && features.length) {
            this._state.flowGraph.set(graphFromLinearChain(features));
        }
    }

    private _writeGuideUrl(state: ReturnType<typeof parseGuideUrl>): void {
        if (!this._guideUrlReady) return;
        const path = this._router.url.split('?')[0];
        if (path !== '/smart-batch' && path !== '/smart-batch/') return;
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: serializeGuideUrl(state),
            replaceUrl: true,
        });
    }

    private _openSavedTemplateInLayout(
        templateId: string,
        configId: string | null,
        step: 'layout' | 'generate' | 'intent' | string = 'layout'
    ): void {
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
                        next: (res) => this._hydrateFromConfiguration(res.data),
                    });
                }

                this.hydrateCustomize(template, true);
                if (!this._restoreLayoutDraftIfAny()) {
                    this.layoutSections.set(
                        cloneReportValue(template.sections ?? []).map((section, index) => ({ ...section, order: index }))
                    );
                    this._markLayoutClean();
                }
                this.selectedLayoutSectionId.set(this.layoutSections()[0]?.id ?? null);
                this._preferCompactFormatBar();
                this.enterLayout();
                this._state.step.set(step === 'generate' ? 'generate' : 'layout');
                if (step === 'generate') this.reportStudioStep.set('preview');
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
