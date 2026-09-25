import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    signal,
    ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    catchError,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    forkJoin,
    map,
    of,
    Subject,
    switchMap,
} from 'rxjs';
import { buildHelperDataPaths } from '../helper-data.util';
import { ReportBuilderPreviewDataService } from '../report-builder-preview-data.service';
import {
    applyVisibleKeyReorder,
    collectLayoutSheetItems,
    isHiddenParamKey,
    setHiddenParamKey,
    sortByKeyOrder,
    valueAtDataPath,
    type LayoutSheetItem,
} from '../report-param-entries.util';
import { REPORT_FONT_STACKS, REPORT_TEXT_ALIGNS } from '../report-fonts.util';
import { ReportInlineTextChange, ReportOverlayId, ReportPreviewComponent } from '../report-preview/report-preview.component';
import {
    BatchConfiguration,
    BatchStep,
    SmartBatch,
    SmartBatchRow,
    SmartBatchService,
} from '../smart-batch.service';
import {
    DataNode,
    ReportConditionOperator,
    ReportSection,
    ReportSectionFrame,
    ReportSectionType,
    ReportShapeKind,
    REPORT_SHAPE_KINDS,
    ReportStyleVariant,
    SampleReportData,
    SmartReport,
    SmartReportService,
    SmartReportTemplate,
} from '../smart-report.service';
import { buildRowDataForResolution } from '../template-match.util';
import { SendSampleModalComponent } from './send-sample-modal/send-sample-modal.component';
import { SignaturePadDialogComponent } from './signature-pad-dialog/signature-pad-dialog.component';

/**
 * Minimum allowed X / Y (in canonical 96 DPI px) for absolutely-positioned
 * overlays on the report paper (workspace logo, signature). Mirrors the
 * backend's `OVERLAY_SAFETY_INSET` (12 px) plus the default Puppeteer page
 * margin (40 px) so the overlay always sits inside the printable area and
 * the preview matches the generated PDF pixel-for-pixel.
 *
 * If the page margins are ever made user-configurable, recompute as
 * `pageMargin + safetyInset` from the same source.
 */
const OVERLAY_MIN_X = 52;
const OVERLAY_MIN_Y = 52;

const DATA_PALETTE_WIDTH_KEY = 'smartReport.dataPaletteWidth';
const DATA_PALETTE_MIN_WIDTH = 200;
const DATA_PALETTE_MAX_WIDTH = 480;

/** Keep the field list wide enough to grab, and narrow enough to leave the paper. */
const clampDataPaletteWidth = (width: number): number =>
    Math.min(DATA_PALETTE_MAX_WIDTH, Math.max(DATA_PALETTE_MIN_WIDTH, Math.round(width)));

/** Last width the user dragged the field list to, or the default. */
const readDataPaletteWidth = (): number => {
    try {
        const stored = Number(localStorage.getItem(DATA_PALETTE_WIDTH_KEY));
        if (!Number.isFinite(stored)) return DATA_PALETTE_MIN_WIDTH;

        return clampDataPaletteWidth(stored);
    } catch {
        return DATA_PALETTE_MIN_WIDTH;
    }
};

/** Remember the field-list width for the next visit. */
const writeDataPaletteWidth = (width: number): void => {
    try {
        localStorage.setItem(DATA_PALETTE_WIDTH_KEY, String(clampDataPaletteWidth(width)));
    } catch {
        // Private mode can reject storage; the width still applies for this visit.
    }
};

/** Document number and name baked into the builder's old Colombia placeholder. */
const FIXTURE_DOCUMENT_NUMBER = '1032386359';
const FIXTURE_FULL_NAME = 'JOHN DOE SMITH';

/**
 * The placeholder sample that used to ship with a new template.
 * A saved template can still carry it; it must not hide a real batch row.
 */
const isColombiaFixtureSample = (
    data: SampleReportData | Record<string, any> | null | undefined
): boolean => {
    if (!data) return false;

    const input = (data.inputData ?? {}) as Record<string, unknown>;
    const results = (data.results ?? {}) as Record<string, Record<string, unknown> | undefined>;
    const first = results['1'] ?? {};
    const documentNumber = String(input['documentNumber'] ?? first['documentNumber'] ?? '');
    const fullName = String(input['fullName'] ?? first['fullName'] ?? '');

    return documentNumber === FIXTURE_DOCUMENT_NUMBER && fullName === FIXTURE_FULL_NAME;
};

/** True when the payload has something the palette can list. */
const sampleHasValues = (data: SampleReportData | Record<string, any>): boolean => {
    const inputSize = data.inputData ? Object.keys(data.inputData).length : 0;
    const resultSize = data.results ? Object.keys(data.results).length : 0;

    return inputSize > 0 || resultSize > 0;
};

/** Normalize a handed-off or saved sample into the preview signal shape. */
const previewFromSample = (data: SampleReportData): Record<string, any> => ({
    batchName: data.batchName ?? '',
    rowIndex: data.rowIndex ?? 0,
    inputData: data.inputData ?? {},
    results: data.results ?? {},
    errors: data.errors ?? [],
    report: data.report,
});

/** Prefer the requested row, otherwise the first row that already has step results. */
const rowForPreview = (rows: SmartBatchRow[], rowIndex: number | null): SmartBatchRow | null => {
    if (rowIndex != null) {
        return rows.find((row) => row.rowIndex === rowIndex) ?? null;
    }

    return (
        rows.find((row) => row.results && Object.keys(row.results).length > 0) ?? rows[0] ?? null
    );
};

/** Build the preview object the paper and the field list both read. */
const previewFromRow = (
    row: SmartBatchRow,
    batchName: string | undefined,
    steps: BatchStep[]
): Record<string, any> => {
    const resolved = buildRowDataForResolution(row, {
        steps,
        batchName,
        errors: row.errors,
    });

    return previewFromSample({
        batchName,
        rowIndex: row.rowIndex,
        inputData: resolved['inputData'],
        results: resolved['results'],
        errors: row.errors,
        report: resolved['report'],
    });
};

/** First query value, when the router hands a string or a list. */
const queryText = (value: string | string[] | undefined): string | null => {
    const text = Array.isArray(value) ? value[0] : value;

    return text ? text : null;
};

/** `rowIndex` query param, or null when it is missing or not a number. */
const queryRowIndex = (value: string | string[] | undefined): number | null => {
    const text = queryText(value);
    if (text == null) return null;

    const parsed = Number.parseInt(text, 10);

    return Number.isNaN(parsed) ? null : parsed;
};

@Component({
    selector: 'report-builder',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        DragDropModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        TranslocoModule,
        ReportPreviewComponent,
    ],
    templateUrl: './report-builder.component.html',
    animations: [fuseAnimations],
})
export class ReportBuilderComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb = inject(FormBuilder);
    private _snack = inject(MatSnackBar);
    private _reportService = inject(SmartReportService);
    private _dialog = inject(MatDialog);
    private _previewDataService = inject(ReportBuilderPreviewDataService);
    private _transloco = inject(TranslocoService);
    private _batchService = inject(SmartBatchService);
    private _sanitizer = inject(DomSanitizer);
    private _destroyRef = inject(DestroyRef);
    @ViewChild('samplePreview') private _samplePreview?: ReportPreviewComponent;
    @ViewChild('templateNameInput') private _templateNameInput?: ElementRef<HTMLInputElement>;

    configId = signal<string | null>(null);
    templateId = signal<string | null>(null);
    /** Optional batch configuration link persisted with the template. */
    linkedConfigId = signal<string | null>(null);
    configurations = this._batchService.configurations;

    template = signal<SmartReportTemplate | null>(null);
    // State
    isLoading = signal<boolean>(false);
    isSaving = signal<boolean>(false);
    isSendingSample = signal(false);
    isDownloadingSample = signal(false);
    isGeneratingAI = signal(false);
    aiMode = signal<'create' | 'edit' | 'append'>('create');

    // Logo
    logoUrl = signal<string | null>(null);
    activeTab = signal<'design' | 'data'>('design');
    showPassword = false;

    /**
     * Page, block, or overlay inspector. Null leaves the paper clear.
     * Document settings and the block form both live in this one panel.
     */
    inspectorKind = signal<'page' | 'block' | 'overlay' | null>(null);

    /** Layer order stays available, but it is not on screen until asked for. */
    showLayers = signal(false);

    /** The AI prompt sits behind one row so the paper is the first thing on Prepare. */
    showAi = signal(false);

    /** Page size, engine, and security stay in the inspector, closed until asked. */
    showAdvancedDocument = signal(false);

    /** Right-click or the Add button. Coordinates are viewport pixels. */
    insertMenu = signal<{ x: number; y: number } | null>(null);

    readonly quickInsertTypes: ReportSectionType[] = ['text', 'field', 'image', 'divider'];

    readonly moreInsertTypes: ReportSectionType[] = [
        'header',
        'badge',
        'keyValueGrid',
        'dataTable',
        'repeater',
        'reportBlocks',
        'card',
        'spacer',
    ];

    readonly shapeTools: { kind: ReportShapeKind; icon: string; width: number; height: number }[] = [
        { kind: 'rectangle', icon: 'rectangle', width: 180, height: 96 },
        { kind: 'square', icon: 'square', width: 96, height: 96 },
        { kind: 'circle', icon: 'circle', width: 96, height: 96 },
        { kind: 'star', icon: 'star', width: 96, height: 96 },
        { kind: 'triangle', icon: 'change_history', width: 96, height: 96 },
        { kind: 'diamond', icon: 'diamond', width: 88, height: 96 },
        { kind: 'bullet', icon: 'fiber_manual_record', width: 16, height: 16 },
    ];

    /**
     * Where the author is in the document's life: build it, check it, send it.
     *
     * The three actions were previously all present at once — a rail, a canvas and
     * two send buttons in the top bar — which gave no sense of what to do next.
     */
    builderStep = signal<'prepare' | 'preview' | 'deliver'>('prepare');

    readonly builderSteps = [
        { key: 'prepare', labelKey: 'smartReport.stepPrepare', icon: 'edit_document' },
        { key: 'preview', labelKey: 'smartReport.stepPreview', icon: 'visibility' },
        { key: 'deliver', labelKey: 'smartReport.stepDeliver', icon: 'send' },
    ] as const;

    /** Documents already produced from this template, newest first. */
    deliveries = signal<SmartReport[]>([]);
    isLoadingDeliveries = signal(false);

    /** Data palette, described by the backend from the current sample payload. */
    dataNodes = signal<DataNode[]>([]);
    batchNodes = signal<DataNode[]>([]);
    isIntrospecting = signal(false);

    /** Paths of expanded palette branches. Roots start open. */
    expandedPaths = signal<Set<string>>(new Set(['results', 'inputData']));

    /** Width of the field list. Drag the right edge; the last width is kept. */
    dataPaletteWidth = signal(readDataPaletteWidth());

    /** Drop list id the canvas exposes, so palette drags can target it. */
    readonly canvasDropListId = 'report-canvas-drop';
    readonly dataDropListId = 'report-data-drop';
    readonly insertDropListId = 'report-insert-drop';

    /**
     * Whether the raw dataPath input is shown for the selected block.
     *
     * Typing dot notation was the largest source of broken reports, so it is now an
     * escape hatch behind a disclosure rather than the primary way to bind a block.
     */
    showAdvancedPath = signal(false);

    /**
     * `edit` is the Angular canvas: selectable blocks and draggable overlays.
     * `exact` is the real document, rendered by the same server code that makes the
     * PDF, so the two can never drift on typography or page breaks.
     */
    previewMode = signal<'edit' | 'exact'>('edit');
    exactPreviewUrl = signal<SafeResourceUrl | null>(null);
    isRenderingExact = signal(false);
    exactPreviewError = signal<string | null>(null);

    /** Latest object URL, revoked when replaced so blobs do not accumulate. */
    private _exactPreviewObjectUrl: string | null = null;
    private readonly _exactPreviewRequest$ = new Subject<void>();

    sections = signal<ReportSection[]>([]);
    selectedSection = signal<ReportSection | null>(null);
    selectedOverlay = signal<ReportOverlayId | null>(null);
    readonly reportFonts = REPORT_FONT_STACKS;
    readonly textAlignOptions = REPORT_TEXT_ALIGNS;

    /** Keep selected section in sync when sections array changes. */
    currentSelectedSection = computed(() => {
        const sel = this.selectedSection();
        if (!sel) return null;
        return this.sections().find((s) => s.id === sel.id) ?? null;
    });

    templateForm: FormGroup;

    /**
     * Every section type the renderer supports.
     *
     * `table` stays for templates that already use it but is not offered as a new
     * block: it cannot render arrays, which is exactly what `dataTable` fixed.
     */
    sectionTypes: {
        type: ReportSectionType;
        labelKey: string;
        icon: string;
        group: 'content' | 'data' | 'layout';
        legacy?: boolean;
    }[] = [
        { type: 'header', labelKey: 'smartReport.sectionHeader', icon: 'title', group: 'content' },
        { type: 'text', labelKey: 'smartReport.sectionText', icon: 'notes', group: 'content' },
        { type: 'image', labelKey: 'smartReport.sectionImage', icon: 'image', group: 'content' },
        { type: 'field', labelKey: 'smartReport.sectionField', icon: 'data_object', group: 'data' },
        {
            type: 'badge',
            labelKey: 'smartReport.sectionBadge',
            icon: 'label_important',
            group: 'data',
        },
        {
            type: 'keyValueGrid',
            labelKey: 'smartReport.sectionKeyValueGrid',
            icon: 'grid_view',
            group: 'data',
        },
        {
            type: 'dataTable',
            labelKey: 'smartReport.sectionDataTable',
            icon: 'table_rows',
            group: 'data',
        },
        { type: 'repeater', labelKey: 'smartReport.sectionRepeater', icon: 'repeat', group: 'data' },
        {
            type: 'reportBlocks',
            labelKey: 'smartReport.sectionReportBlocks',
            icon: 'dashboard_customize',
            group: 'data',
        },
        { type: 'card', labelKey: 'smartReport.sectionCard', icon: 'crop_square', group: 'layout' },
        {
            type: 'divider',
            labelKey: 'smartReport.sectionDivider',
            icon: 'horizontal_rule',
            group: 'layout',
        },
        {
            type: 'shape',
            labelKey: 'smartReport.sectionShape',
            icon: 'category',
            group: 'layout',
        },
        {
            type: 'spacer',
            labelKey: 'smartReport.sectionSpacer',
            icon: 'space_bar',
            group: 'layout',
        },
        {
            type: 'table',
            labelKey: 'smartReport.sectionTable',
            icon: 'table_chart',
            group: 'data',
            legacy: true,
        },
    ];

    readonly shapeKinds = REPORT_SHAPE_KINDS;

    /** Palette groups, in the order they appear in the "Add sections" panel. */
    readonly sectionGroups: { key: 'content' | 'data' | 'layout'; labelKey: string }[] = [
        { key: 'data', labelKey: 'smartReport.groupData' },
        { key: 'content', labelKey: 'smartReport.groupContent' },
        { key: 'layout', labelKey: 'smartReport.groupLayout' },
    ];

    readonly styleVariants: ReportStyleVariant[] = [
        'neutral',
        'success',
        'warning',
        'danger',
        'info',
        'primary',
    ];

    readonly conditionOperators: ReportConditionOperator[] = [
        'equals',
        'notEquals',
        'exists',
        'notExists',
        'contains',
        'in',
        'gt',
        'gte',
        'lt',
        'lte',
        'isEmpty',
        'notEmpty',
    ];

    /** Types whose editor exposes a `dataPath`. */
    private readonly _dataBoundTypes: ReportSectionType[] = [
        'field',
        'table',
        'dataTable',
        'keyValueGrid',
        'badge',
        'card',
        'repeater',
        'reportBlocks',
    ];

    /**
     * Payload painted on the paper and listed under Tus datos.
     * Starts empty so a real batch row can replace it without flashing the old sample.
     */
    previewData = signal<Record<string, any>>({
        batchName: '',
        rowIndex: 0,
        inputData: {},
        results: {},
    });

    constructor() {
        // Sections, logo and sample data live in signals rather than the form, so they
        // need their own trigger to keep the exact preview current.
        effect(() => {
            this.sections();
            this.logoUrl();
            this.previewData();

            if (this.previewMode() === 'exact') this._exactPreviewRequest$.next();
        });

        // The palette describes whatever sample payload is loaded, so it has to be
        // rebuilt when a template's own sample data replaces the placeholder.
        effect(() => {
            this.previewData();

            this._loadIntrospection();
        });

        this.templateForm = this._fb.group({
            name: ['', [Validators.required, Validators.maxLength(150)]],
            description: ['', Validators.maxLength(500)],
            primaryColor: ['#4F46E5'],
            pageBackgroundColor: ['#ffffff'],
            pageSize: ['A4'],
            orientation: ['portrait'],
            pdfEngine: ['puppeteer'],
            legend: [''],
            showPageNumbers: [false],
            pageNumberPosition: ['bottom-center'],
            watermarkEnabled: [false],
            watermarkType: ['text'],
            watermarkText: ['CONFIDENTIAL'],
            watermarkOpacity: [0.08],
            watermarkPattern: ['single'],
            watermarkX: [250],
            watermarkY: [420],
            watermarkWidth: [280],
            watermarkHeight: [160],
            watermarkRotation: [-15],
            securityEnabled: [false],
            securityPassword: [''],
            // Signature
            signatureEnabled: [false],
            signatureImage: [null],
            signatureX: [0],
            signatureY: [0],
            signatureWidth: [100],
            signatureHeight: [50],
            // Workspace logo (drag & resize overlay)
            // Visibility is implicit: a logo image (logoUrl) is the only switch.
            // Default position is clamped to the safe printable-area inset so
            // it lands neatly inside the page margins (matches the PDF output).
            logoX: [OVERLAY_MIN_X],
            logoY: [OVERLAY_MIN_Y],
            logoWidth: [160],
            logoHeight: [60],
            logoRotation: [0],
            logoAutoFitContent: [false],
            // Section content top padding (canonical px)
            bodyTopPadding: [0],
        });
    }

    ngOnInit(): void {
        this._applyPreviewDataFromRouterState();
        this._batchService
            .getConfigurations()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._prefillTemplateName());
        this._watchExactPreview();

        combineLatest([this._route.params, this._route.queryParams])
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(([params, query]) => {
                const routeConfigId = params['configId'] ?? null;

                this.configId.set(routeConfigId);
                this.templateId.set(params['templateId'] ?? null);

                if (routeConfigId) {
                    this.linkedConfigId.set(routeConfigId);
                    this._loadRecordPreview(
                        routeConfigId,
                        queryText(query['batchId']),
                        queryRowIndex(query['rowIndex'])
                    );
                }

                if (this.templateId()) {
                    this._loadTemplate();

                    return;
                }

                this._initDefaultSections();
                this._prefillTemplateName();
            });
    }

    ngOnDestroy(): void {
        this._releaseExactPreviewUrl();
    }

    /**
     * Drag the field list's right edge. Wider reveals the full name and sample.
     */
    startPaletteResize(event: PointerEvent): void {
        event.preventDefault();
        event.stopPropagation();

        const handle = event.currentTarget;
        if (handle instanceof HTMLElement) handle.setPointerCapture(event.pointerId);

        this._paletteResize = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startWidth: this.dataPaletteWidth(),
        };
    }

    /** Follow the pointer while the edge is held. */
    onPaletteResizeMove(event: PointerEvent): void {
        const resize = this._paletteResize;
        if (!resize || event.pointerId !== resize.pointerId) return;

        const next = resize.startWidth + (event.clientX - resize.startX);
        this.dataPaletteWidth.set(clampDataPaletteWidth(next));
    }

    /** Store the width once the drag ends. */
    onPaletteResizeEnd(event: PointerEvent): void {
        const resize = this._paletteResize;
        if (!resize || event.pointerId !== resize.pointerId) return;

        this._paletteResize = null;
        writeDataPaletteWidth(this.dataPaletteWidth());
    }

    // ============================================
    // DATA PALETTE
    // ============================================

    /**
     * Ask the backend to describe the sample payload.
     *
     * Introspection runs server-side so path resolution, column derivation and the
     * shape-to-section-type mapping stay in one place: any path the palette offers is
     * guaranteed to resolve when the document is rendered.
     */
    private _loadIntrospection(): void {
        const sample = this.previewData();
        const token = ++this._introspectionToken;

        if (!sampleHasValues(sample)) {
            this.dataNodes.set([]);
            this.batchNodes.set([]);
            this.isIntrospecting.set(false);

            return;
        }

        this.isIntrospecting.set(true);

        this._reportService
            .introspect(sample)
            .pipe(
                catchError(() => of(null)),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe((introspection) => {
                if (token !== this._introspectionToken) return;

                this.isIntrospecting.set(false);

                if (!introspection) return;

                this.dataNodes.set(introspection.nodes);
                this.batchNodes.set(introspection.batch);
            });
    }

    isExpanded(path: string): boolean {
        return this.expandedPaths().has(path);
    }

    toggleNode(path: string): void {
        this.expandedPaths.update((paths) => {
            const next = new Set(paths);

            next.has(path) ? next.delete(path) : next.add(path);

            return next;
        });
    }

    /** Icon for a node's recommended block, reusing the palette's own mapping. */
    nodeIcon(node: DataNode): string {
        return this.getSectionIcon(node.sectionType);
    }

    /**
     * Add the block the backend recommended for a data node.
     *
     * This is the interaction that replaces hand-typed dot notation: label, path and
     * columns all arrive pre-filled in `node.suggestion`.
     */
    addNodeSection(node: DataNode, index?: number): void {
        this.addSuggestedSection(node.suggestion, index);
    }

    // ============================================
    // PREPARE / PREVIEW / DELIVER
    // ============================================

    /**
     * Move to a step, bringing along what that step needs.
     *
     * Preview implies the server-rendered document, because checking a structural
     * outline for typography and page breaks is exactly the mistake the exact mode
     * exists to prevent.
     */
    goToStep(step: 'prepare' | 'preview' | 'deliver'): void {
        this.builderStep.set(step);

        if (step === 'preview') {
            this.setPreviewMode('exact');

            return;
        }

        if (step === 'prepare') {
            this.setPreviewMode('edit');

            return;
        }

        this._loadDeliveries();
    }

    /**
     * Documents already produced from this template.
     *
     * Read from `SmartReport`, so the step shows the same status lifecycle and
     * `emailHistory` that the batch flow writes rather than a second record of
     * what was sent.
     */
    private _loadDeliveries(): void {
        const id = this.templateId();

        if (!id) return;

        this.isLoadingDeliveries.set(true);

        this._reportService
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

    /** Every delivery recorded against this template, newest first. */
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

    /** Tailwind classes for a report or delivery status chip. */
    statusClasses(status: string): string {
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

    // ============================================
    // EXACT PREVIEW (server-rendered)
    // ============================================

    setPreviewMode(mode: 'edit' | 'exact'): void {
        // Preview step always means the printed document; the Edit/Exact toggle is
        // only meaningful while authoring on Prepare.
        if (this.builderStep() === 'preview' && mode !== 'exact') return;

        this.previewMode.set(mode);

        if (mode === 'exact') this._exactPreviewRequest$.next();
    }

    /**
     * Keep the exact preview in step with the draft.
     *
     * Debounced so typing does not fire a request per keystroke, and compared by
     * payload so a change that does not affect the document costs nothing. Requests
     * only run while the exact tab is open.
     */
    private _watchExactPreview(): void {
        this.templateForm.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
            if (this.previewMode() === 'exact') this._exactPreviewRequest$.next();
        });

        this._exactPreviewRequest$
            .pipe(
                debounceTime(400),
                map(() => JSON.stringify(this._buildTemplatePayload())),
                distinctUntilChanged(),
                switchMap((serialized) => {
                    this.isRenderingExact.set(true);
                    this.exactPreviewError.set(null);

                    return this._reportService
                        .previewHtml(JSON.parse(serialized), this.previewData())
                        .pipe(catchError(() => of(null)));
                }),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe((html) => {
                this.isRenderingExact.set(false);

                if (html === null) {
                    this.exactPreviewError.set(
                        this._transloco.translate('smartReport.previewFailed')
                    );

                    return;
                }

                this._setExactPreviewHtml(html);
            });
    }

    /**
     * Publish rendered HTML to the iframe through a blob URL.
     *
     * A blob URL plus the template's `sandbox` attribute puts the document in an
     * opaque origin with scripts disabled, so report content cannot reach the app.
     */
    private _setExactPreviewHtml(html: string): void {
        this._releaseExactPreviewUrl();

        const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));

        this._exactPreviewObjectUrl = url;
        this.exactPreviewUrl.set(this._sanitizer.bypassSecurityTrustResourceUrl(url));
    }

    private _releaseExactPreviewUrl(): void {
        if (!this._exactPreviewObjectUrl) return;

        URL.revokeObjectURL(this._exactPreviewObjectUrl);
        this._exactPreviewObjectUrl = null;
    }

    /**
     * True once a real row is on the paper.
     * Template sample data must not replace it.
     */
    private _hasPreviewDataFromNavigation = false;

    /** Drops a late introspection response after a newer sample was requested. */
    private _introspectionToken = 0;

    /** Drops a late batch response after a newer config or row was requested. */
    private _recordPreviewRequest = 0;

    /** Active drag of the field-list edge, if one is in progress. */
    private _paletteResize: { pointerId: number; startX: number; startWidth: number } | null = null;

    /** Title last written automatically, so a later batch name can replace it. */
    private _autoTemplateName: string | null = null;

    /**
     * Use the row handed off with navigation.
     * The in-memory bridge is checked first, then the current navigation, then
     * `history.state`, which is still there after `getCurrentNavigation()` is null.
     */
    private _applyPreviewDataFromRouterState(): void {
        const data = this._previewDataFromNavigation();
        if (!data || !sampleHasValues(data)) return;

        this.previewData.set(previewFromSample(data));
        this._hasPreviewDataFromNavigation = true;
        this._prefillTemplateName();
    }

    /**
     * Record payload carried into this screen, if one was.
     */
    private _previewDataFromNavigation(): SampleReportData | null {
        const pending = this._previewDataService.consumePendingPreviewData();
        if (pending) return pending;

        const navigation = this._router.getCurrentNavigation() ?? this._router.lastSuccessfulNavigation;
        const navigationState = navigation?.extras?.state as
            | { previewData?: SampleReportData }
            | undefined;
        if (navigationState?.previewData) return navigationState.previewData;

        const historyState = history.state as { previewData?: SampleReportData } | null;

        return historyState?.previewData ?? null;
    }

    /**
     * When navigation did not carry a row, load the batch this screen was opened for.
     * `batchId` picks that batch; otherwise the newest batch of the configuration is used.
     */
    private _loadRecordPreview(
        configId: string,
        batchId: string | null,
        rowIndex: number | null
    ): void {
        if (this._hasPreviewDataFromNavigation) return;

        const request = ++this._recordPreviewRequest;
        const batch$ = batchId
            ? this._batchService.getSmartBatch(batchId).pipe(map((res) => res.data))
            : this._batchService.getSmartBatches(configId, { page: 1, perPage: 1 }).pipe(
                  switchMap((list) => {
                      const latestId = list.data?.[0]?._id;
                      if (!latestId) return of(null);

                      return this._batchService.getSmartBatch(latestId).pipe(map((res) => res.data));
                  })
              );

        forkJoin({
            batch: batch$,
            configuration: this._batchService.getConfiguration(configId).pipe(
                map((res) => res.data),
                catchError(() => of(null))
            ),
        })
            .pipe(
                catchError(() => of(null)),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe((result) => {
                if (request !== this._recordPreviewRequest) return;
                if (!this._hasPreviewDataFromNavigation && result?.batch) {
                    this._applyBatchRow(result.batch, result.configuration?.steps ?? [], rowIndex);
                }

                this._prefillTemplateName(result?.configuration?.name);
            });
    }

    /**
     * Paint one batch row and keep a saved sample from replacing it.
     */
    private _applyBatchRow(batch: SmartBatch, steps: BatchStep[], rowIndex: number | null): void {
        const row = rowForPreview(batch.rows ?? [], rowIndex);
        if (!row) return;

        const preview = previewFromRow(row, batch.name, steps);
        if (!sampleHasValues(preview)) return;

        this.previewData.set(preview);
        this._hasPreviewDataFromNavigation = true;
        this._prefillTemplateName(batch.name);
    }

    /**
     * A new template can be saved as soon as it has a name.
     * Use the batch name, then the configuration name, and only while the title is still empty.
     */
    private _prefillTemplateName(configName?: string): void {
        if (this.templateId()) return;

        const control = this.templateForm.get('name');
        if (!control || control.dirty) return;

        const current = String(control.value ?? '').trim();
        if (current && current !== this._autoTemplateName) return;

        const batchName = String(this.previewData()?.['batchName'] ?? '').trim();
        const suggested = batchName || configName?.trim() || this._linkedConfigurationName();
        if (!suggested || suggested === current) return;

        this._autoTemplateName = suggested;
        control.setValue(suggested);
    }

    /** Name of the batch configuration this builder was opened from. */
    private _linkedConfigurationName(): string {
        const linkedId = this.linkedConfigId();
        if (!linkedId) return '';

        const match = this.configurations().find((item) => (item._id || item.id) === linkedId);

        return match?.name?.trim() ?? '';
    }

    /** True once save was attempted and the title is still empty. */
    nameMissing(): boolean {
        const control = this.templateForm.get('name');

        return Boolean(control?.invalid && control.touched);
    }

    // ============================================
    // DATA LOADING
    // ============================================

    private _loadTemplate(): void {
        const id = this.templateId();
        if (!id) return;

        this.isLoading.set(true);
        this._reportService.getTemplate(id).subscribe({
            next: (template) => {
                if (!template) {
                    this.isLoading.set(false);
                    this._snack.open(
                        this._transloco.translate('smartReport.failedToLoadTemplate'),
                        this._transloco.translate('smartReport.close'),
                        { duration: 4000 }
                    );
                    const configId = this.configId();
                    if (configId) {
                        this._router.navigate(['/smart-batch', configId]);
                    } else {
                        this._router.navigate(['/smart-batch/workspace']);
                    }
                    return;
                }

                this.template.set(template);
                this.sections.set(template.sections || []);
                if (!this.linkedConfigId() && template.batchConfiguration) {
                    const linkedId = this._resolveBatchConfigId(template.batchConfiguration);
                    if (linkedId) {
                        this.linkedConfigId.set(linkedId);
                    }
                }
                if (
                    !this._hasPreviewDataFromNavigation &&
                    template.sampleData &&
                    !isColombiaFixtureSample(template.sampleData) &&
                    sampleHasValues(template.sampleData)
                ) {
                    this.previewData.set(previewFromSample(template.sampleData));
                }
                this.templateForm.patchValue({
                    name: template.name,
                    description: template.description,
                    primaryColor: template.primaryColor || '#4F46E5',
                    pageBackgroundColor: template.pageBackgroundColor || '#ffffff',
                    pageSize: template.pageSize || 'A4',
                    orientation: template.orientation || 'portrait',
                    pdfEngine: template.pdfEngine || 'puppeteer',
                    legend: template.legend || '',
                    showPageNumbers: template.showPageNumbers || false,
                    pageNumberPosition: template.pageNumberPosition || 'bottom-center',
                    watermarkEnabled: template.watermark?.enabled || false,
                    watermarkType: template.watermark?.type || 'text',
                    watermarkText: template.watermark?.text || 'CONFIDENTIAL',
                    watermarkOpacity: template.watermark?.opacity ?? 0.08,
                    watermarkPattern: template.watermark?.pattern || 'single',
                    watermarkX: template.watermark?.x ?? 250,
                    watermarkY: template.watermark?.y ?? 420,
                    watermarkWidth: template.watermark?.width ?? 280,
                    watermarkHeight: template.watermark?.height ?? 160,
                    watermarkRotation: template.watermark?.rotation ?? -15,
                    securityEnabled: template.security?.enabled || false,
                    // If enabled, assume password exists and mask it. If not, empty.
                    securityPassword: template.security?.enabled ? '******' : '',
                    // Signature - clamp X/Y to the safe printable-area inset
                    // so legacy templates render in the preview exactly where
                    // the PDF will place them.
                    signatureEnabled: template.signature?.enabled || false,
                    signatureImage: template.signature?.image || null,
                    signatureX: Math.max(OVERLAY_MIN_X, template.signature?.x || 0),
                    signatureY: Math.max(OVERLAY_MIN_Y, template.signature?.y || 0),
                    signatureWidth: template.signature?.width || 100,
                    signatureHeight: template.signature?.height || 50,
                    // Workspace logo overlay (visibility derived from logoUrl).
                    // Same clamp as signature for WYSIWYG with the PDF.
                    logoX: template.logoSettings?.x ?? 32,
                    logoY: template.logoSettings?.y ?? 32,
                    logoWidth: template.logoSettings?.width ?? 160,
                    logoHeight: template.logoSettings?.height ?? 60,
                    logoRotation: template.logoSettings?.rotation ?? 0,
                    logoAutoFitContent: template.logoSettings?.autoFitContent ?? false,
                    // Section content top padding
                    bodyTopPadding: template.bodyTopPadding ?? 0,
                });
                this.logoUrl.set(template.logo || null);
                this.isLoading.set(false);
            },
            error: (err) => {
                console.error('Failed to load template:', err);
                this.isLoading.set(false);
                this._snack.open(
                    this._transloco.translate('smartReport.failedToLoadTemplate'),
                    this._transloco.translate('smartReport.close'),
                    { duration: 4000 }
                );
            },
        });
    }

    private _initDefaultSections(): void {
        this.sections.set([
            {
                id: this._generateId(),
                type: 'header',
                order: 0,
                label: 'Verification Report',
                staticContent: 'Verification Report',
                style: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
            },
            {
                id: this._generateId(),
                type: 'divider',
                order: 1,
                style: { color: '#4F46E5' },
            },
            {
                id: this._generateId(),
                type: 'field',
                order: 2,
                label: 'Document Number',
                dataPath: 'results.1.documentNumber',
            },
            {
                id: this._generateId(),
                type: 'field',
                order: 3,
                label: 'Full Name',
                dataPath: 'results.1.fullName',
            },
        ]);
    }

    // ============================================
    // DRAG & DROP
    // ============================================

    /**
     * Reorder the layer list, or bind a dropped data node at the drop position.
     *
     * A drag that starts in another container is a palette drag, so the drop index
     * becomes the new block's order instead of moving an existing one.
     */
    onDrop(event: CdkDragDrop<ReportSection[]>): void {
        if (event.previousContainer !== event.container) {
            this._bindDroppedItem(event.item.data, event.currentIndex);

            return;
        }

        const current = [...this.sections()];
        moveItemInArray(current, event.previousIndex, event.currentIndex);
        current.forEach((s, i) => (s.order = i));
        this.sections.set(current);
    }

    /** A node or pill dropped on the page itself lands at the end of the document. */
    onCanvasDrop(event: CdkDragDrop<unknown>): void {
        if (event.previousContainer === event.container) return;

        this._bindDroppedItem(event.item.data);
    }

    /** Drag a block to a new place in the stack. */
    onSectionReorder(event: { fromId: string; toIndex: number }): void {
        const list = [...this.sections()];
        const from = list.findIndex((section) => section.id === event.fromId);
        if (from < 0 || from === event.toIndex) return;
        if (event.toIndex < 0 || event.toIndex >= list.length) return;
        moveItemInArray(list, from, event.toIndex);
        this.sections.set(list.map((section, order) => ({ ...section, order })));
        const moved = this.sections().find((section) => section.id === event.fromId);
        if (moved) this.selectSection(moved);
    }

    /** Free-position drag on the paper. The preview emits one frame per moved block. */
    onSectionFrames(updates: { id: string; frame: ReportSectionFrame }[]): void {
        const next = new Map(updates.map((item) => [item.id, item.frame]));
        this.sections.update((list) =>
            list.map((section) => (next.has(section.id) ? { ...section, frame: next.get(section.id) } : section))
        );
    }

    onSectionFrame(event: { id: string; frame: ReportSectionFrame }): void {
        this.sections.update((list) =>
            list.map((section) => (section.id === event.id ? { ...section, frame: event.frame } : section))
        );
    }

    onSectionRotation(event: { id: string; rotation: number }): void {
        this.sections.update((list) =>
            list.map((section) =>
                section.id === event.id
                    ? { ...section, style: { ...(section.style ?? {}), rotation: event.rotation } }
                    : section
            )
        );
    }

    /**
     * @param item Drag payload: a `DataNode` from the field list, a section type
     * from the pill row, or a shape tool.
     */
    private _bindDroppedItem(item: unknown, index?: number): void {
        if (this._isShapeDrop(item)) {
            this.addShape(item.shape);
            return;
        }

        if (typeof item === 'string') {
            this.addSection(item as ReportSectionType, index);
            return;
        }

        const node = item as DataNode | null;
        if (node?.suggestion) this.addSuggestedSection(node.suggestion, index);
    }

    private _isShapeDrop(item: unknown): item is { type: 'shape'; shape: ReportShapeKind } {
        if (!item || typeof item !== 'object') return false;
        const drop = item as { type?: string; shape?: string };
        return drop.type === 'shape' && this.shapeTools.some((tool) => tool.kind === drop.shape);
    }

    // ============================================
    // SECTION MANAGEMENT
    // ============================================

    generateLayoutWithAI(prompt: string): void {
        const p = prompt.trim();
        if (!p) return;

        const mode = this.aiMode();
        const selected = this.currentSelectedSection();
        if (mode === 'edit' && !selected) {
            this._snack.open('Please select a section to edit first.', 'Close', { duration: 3000 });
            return;
        }

        this.isGeneratingAI.set(true);
        this._reportService
            .generateLayout({
                prompt: p,
                previewData: this.previewData(),
                mode,
                currentSections: this.sections(),
                selectedSection: selected,
            })
            .subscribe({
                next: (result) => {
                    if (mode === 'edit') {
                        if (result && typeof result === 'object' && result.id) {
                            this.sections.update((list) =>
                                list.map((s) => (s.id === result.id ? result : s))
                            );
                            this.selectSection(result);
                            this.templateForm.markAsDirty();
                            this._snack.open(
                                this._transloco.translate('smartReport.sectionEditedSuccess') || 'Section updated successfully via AI',
                                'Close',
                                { duration: 3000 }
                            );
                        } else {
                            this._snack.open(
                                this._transloco.translate('smartReport.layoutGeneratedFailed'),
                                'Close',
                                { duration: 4000 }
                            );
                        }
                    } else if (mode === 'append') {
                        if (Array.isArray(result) && result.length > 0) {
                            this.sections.update((list) => [...list, ...result]);
                            this.selectSection(result[0]);
                            this.templateForm.markAsDirty();
                            this._snack.open(
                                this._transloco.translate('smartReport.sectionsAppendedSuccess') || 'New sections appended successfully',
                                'Close',
                                { duration: 3000 }
                            );
                        } else {
                            this._snack.open(
                                this._transloco.translate('smartReport.layoutGeneratedEmpty'),
                                'Close',
                                { duration: 4000 }
                            );
                        }
                    } else {
                        // mode === 'create'
                        if (Array.isArray(result) && result.length > 0) {
                            this.sections.set(result);
                            this.selectSection(result[0]);
                            this.templateForm.markAsDirty();
                            this._snack.open(
                                this._transloco.translate('smartReport.layoutGeneratedSuccess'),
                                'Close',
                                { duration: 3000 }
                            );
                        } else {
                            this._snack.open(
                                this._transloco.translate('smartReport.layoutGeneratedEmpty'),
                                'Close',
                                { duration: 4000 }
                            );
                        }
                    }
                    this.isGeneratingAI.set(false);
                },
                error: (err) => {
                    console.error('Failed to generate layout via AI:', err);
                    this._snack.open(
                        this._transloco.translate('smartReport.layoutGeneratedFailed'),
                        'Close',
                        { duration: 4000 }
                    );
                    this.isGeneratingAI.set(false);
                },
            });
    }

    /** Starting properties for a freshly added block of each type. */
    private _collectDataNodes(skipUsed: boolean): DataNode[] {
        const used = new Set(
            this.sections()
                .map((section) => section.dataPath)
                .filter((path): path is string => !!path)
        );
        const nodes: DataNode[] = [];
        const walk = (list: DataNode[]): void => {
            list.forEach((node) => {
                const children = node.children ?? [];
                if (node.shape === 'nested' && children.length) {
                    walk(children);
                    return;
                }
                if (node.shape === 'empty' || !node.suggestion || !node.path) return;
                const path = node.suggestion.dataPath ?? node.path;
                const alreadyUsed = used.has(path) || used.has(node.path);
                if (!skipUsed || !alreadyUsed) nodes.push(node);
                if (
                    children.length &&
                    node.shape !== 'flatObject' &&
                    node.shape !== 'objectList' &&
                    node.shape !== 'blocks'
                ) {
                    walk(children);
                }
            });
        };
        walk(this.dataNodes());
        walk(this.batchNodes());
        return nodes;
    }

    private _findDataNode(path: string): DataNode | null {
        const walk = (list: DataNode[]): DataNode | null => {
            for (const node of list) {
                if (node.path === path) return node;
                if (node.children?.length) {
                    const found = walk(node.children);
                    if (found) return found;
                }
            }
            return null;
        };
        return walk(this.dataNodes()) ?? walk(this.batchNodes());
    }

    private _styleSnapshot(section: ReportSection): NonNullable<ReportSection['style']> {
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
            rotation: style.rotation,
        };
    }

    private _sectionDefaults(type: ReportSectionType): Partial<ReportSection> {
        const defaults: Partial<Record<ReportSectionType, Partial<ReportSection>>> = {
            header: {
                staticContent: 'Section Title',
                style: { fontSize: 18, fontWeight: 'bold', textAlign: 'left' },
            },
            text: { staticContent: 'Enter your text here...', style: { fontSize: 12 } },
            field: { label: 'New Field', dataPath: '' },
            table: { label: 'Data Table', dataPath: 'results.1' },
            image: { staticContent: '', style: { textAlign: 'center' } },
            divider: {
                style: { color: this.templateForm.get('primaryColor')?.value || '#4F46E5' },
            },
            shape: {
                shape: 'rectangle',
                staticContent: 'rectangle',
                style: { color: this.templateForm.get('primaryColor')?.value || '#4F46E5' },
            },
            spacer: { style: { padding: '16' } },
            dataTable: { label: 'Records', dataPath: '', columns: [], maxRows: 20 },
            keyValueGrid: { label: 'Details', dataPath: '', columnsPerRow: 2 },
            badge: { label: 'Status', dataPath: '', style: { variant: 'neutral', variantRules: [] } },
            card: { label: 'Card title', staticContent: '', dataPath: '' },
            repeater: { label: 'Items', dataPath: '', itemTitle: '', maxRows: 10 },
            reportBlocks: { dataPath: 'report', blockIds: [], showDisplayRows: true },
        };

        return defaults[type] ?? {};
    }

    addSection(type: ReportSectionType, index?: number): void {
        this.addSuggestedSection({ type, ...this._sectionDefaults(type) }, index);
    }

    /**
     * Insert a section already bound to a data node.
     *
     * The backend's introspection picked the type and pre-filled the label, path and
     * columns, so this is the path that avoids hand-typed dot notation entirely.
     * @param suggestion Partial section from `DataNode.suggestion`.
     * @param index Optional drop position; appended when omitted.
     */
    addSuggestedSection(suggestion: Partial<ReportSection>, index?: number): void {
        const type = (suggestion.type ?? 'field') as ReportSectionType;
        const newSection: ReportSection = {
            ...suggestion,
            id: this._generateId(),
            type,
            order: 0,
        };

        if (!newSection.frame && type !== 'shape' && type !== 'image') {
            const placed = this._samplePreview?.frameBelowContent(type);
            if (placed) newSection.frame = placed;
        }

        this.sections.update((list) => {
            const next = [...list];
            next.splice(index ?? next.length, 0, newSection);

            return next.map((section, position) => ({ ...section, order: position }));
        });

        this.selectSection(newSection);
    }

    /**
     * Write a numeric section field, clearing it when the input is emptied so the
     * renderer falls back to its own default instead of receiving 0.
     */
    updateSectionNumber(
        id: string,
        key: 'maxRows' | 'maxColumns' | 'columnsPerRow',
        raw: string
    ): void {
        const parsed = parseInt(raw, 10);

        this.updateSection(id, {
            [key]: Number.isFinite(parsed) && parsed > 0 ? parsed : undefined,
        } as Partial<ReportSection>);
    }

    showsParamControls(type: ReportSectionType | undefined): boolean {
        return type === 'keyValueGrid' || type === 'table' || type === 'card';
    }

    sectionParamOptions(section: ReportSection): LayoutSheetItem[] {
        return collectLayoutSheetItems(valueAtDataPath(this.previewData(), section.dataPath), {
            hiddenKeys: section.hiddenKeys,
            keyOrder: section.keyOrder,
        });
    }

    isSectionParamVisible(section: ReportSection, key: string): boolean {
        return !isHiddenParamKey(key, section.hiddenKeys);
    }

    setSectionParamVisible(section: ReportSection, key: string, visible: boolean): void {
        this.updateSection(section.id, { hiddenKeys: setHiddenParamKey(section.hiddenKeys, key, visible) });
    }

    onSectionParamDrop(section: ReportSection, event: CdkDragDrop<LayoutSheetItem[]>): void {
        if (event.previousIndex === event.currentIndex) return;
        const visible = this.sectionParamOptions(section).map((item) => item.key);
        moveItemInArray(visible, event.previousIndex, event.currentIndex);
        const allKeys = collectLayoutSheetItems(valueAtDataPath(this.previewData(), section.dataPath), {
            hiddenKeys: [],
        }).map((item) => item.key);
        const seed = sortByKeyOrder(allKeys, section.keyOrder, (key) => key);
        this.updateSection(section.id, { keyOrder: applyVisibleKeyReorder(seed, visible) });
    }

    setShowRowLines(section: ReportSection, enabled: boolean): void {
        this.updateSection(section.id, { showRowLines: enabled });
    }

    sectionTypesForGroup(group: 'content' | 'data' | 'layout'): typeof this.sectionTypes {
        return this.sectionTypes.filter((entry) => entry.group === group && !entry.legacy);
    }

    /** Whether the selected section's editor should show the data path field. */
    isDataBound(type: ReportSectionType | undefined): boolean {
        return !!type && this._dataBoundTypes.includes(type);
    }

    // ============================================
    // DATA TABLE COLUMNS
    // ============================================

    addColumn(): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        this.updateSection(section.id, {
            columns: [...(section.columns ?? []), { key: '', label: '' }],
        });
    }

    updateColumn(index: number, patch: { key?: string; label?: string }): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        const columns = [...(section.columns ?? [])];
        columns[index] = { ...columns[index], ...patch };

        this.updateSection(section.id, { columns });
    }

    removeColumn(index: number): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        this.updateSection(section.id, {
            columns: (section.columns ?? []).filter((_, position) => position !== index),
        });
    }

    /** Columns are optional: with none declared the renderer derives them. */
    clearColumns(): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        this.updateSection(section.id, { columns: [] });
    }

    // ============================================
    // VARIANT RULES (data-driven colour)
    // ============================================

    addVariantRule(): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        const rules = [...(section.style?.variantRules ?? [])];
        rules.push({
            field: section.dataPath || '',
            operator: 'equals',
            value: '',
            variant: 'success',
        });

        this.updateSectionStyle('variantRules', rules);
    }

    updateVariantRule(
        index: number,
        patch: Partial<{
            field: string;
            operator: ReportConditionOperator;
            value: any;
            variant: ReportStyleVariant;
        }>
    ): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        const rules = [...(section.style?.variantRules ?? [])];
        rules[index] = { ...rules[index], ...patch };

        this.updateSectionStyle('variantRules', rules);
    }

    removeVariantRule(index: number): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        this.updateSectionStyle(
            'variantRules',
            (section.style?.variantRules ?? []).filter((_, position) => position !== index)
        );
    }

    /** Operators that compare against a value, as opposed to testing presence. */
    operatorNeedsValue(operator: ReportConditionOperator | undefined): boolean {
        return !!operator && !['exists', 'notExists', 'isEmpty', 'notEmpty'].includes(operator);
    }

    // ============================================
    // REPORT BLOCK IDS
    // ============================================

    /** Comma-separated in the editor; an empty list means "render every block". */
    updateBlockIds(raw: string): void {
        const section = this.currentSelectedSection();
        if (!section) return;

        this.updateSection(section.id, {
            blockIds: raw
                .split(',')
                .map((entry) => entry.trim())
                .filter(Boolean),
        });
    }

    selectSection(section: ReportSection): void {
        this.selectedOverlay.set(null);
        this.selectedSection.set({ ...section });
        this.inspectorKind.set('block');
        this.showAdvancedPath.set(false);
    }

    onPreviewOverlaySelect(id: ReportOverlayId): void {
        this.selectedSection.set(null);
        this.selectedOverlay.set(id);
        this.inspectorKind.set('overlay');
        this.closeInsertMenu();
    }

    /** Clicking empty paper opens page setup. Closing the panel is a separate action. */
    onPreviewBackgroundClick(): void {
        this.selectedSection.set(null);
        this.selectedOverlay.set(null);
        this.inspectorKind.set('page');
        this.closeInsertMenu();
    }

    openPageInspector(): void {
        this.selectedSection.set(null);
        this.selectedOverlay.set(null);
        this.inspectorKind.set('page');
    }

    closeInspector(): void {
        this.inspectorKind.set(null);
        this.selectedSection.set(null);
        this.selectedOverlay.set(null);
    }

    /**
     * Page mode shows every document control. An overlay shows only its own
     * controls, so clicking the logo does not reopen the whole settings form.
     */
    showsDocumentGroup(group: 'page' | 'logo' | 'watermark' | 'signature'): boolean {
        const kind = this.inspectorKind();
        if (kind === 'page') return true;
        if (kind !== 'overlay') return false;
        const overlay = this.selectedOverlay();
        if (overlay === 'logo' || overlay === 'watermark' || overlay === 'signature') {
            return group === overlay;
        }
        return group === 'page';
    }

    inspectorTitleKey(): string {
        if (this.inspectorKind() !== 'overlay') return 'smartReport.documentSettings';
        const overlay = this.selectedOverlay();
        if (overlay === 'logo') return 'smartReport.workspaceLogo';
        if (overlay === 'watermark') return 'smartReport.watermark';
        if (overlay === 'signature') return 'smartReport.signature';
        return 'smartReport.documentSettings';
    }

    openInsertMenu(origin?: { x: number; y: number }): void {
        const width = 256;
        const x = Math.max(8, Math.min(origin?.x ?? 32, window.innerWidth - width - 8));
        const y = Math.max(8, Math.min(origin?.y ?? 88, window.innerHeight - 160));
        this.insertMenu.set({ x, y });
    }

    openInsertMenuFromClick(event: MouseEvent): void {
        const rect = (event.currentTarget as HTMLElement | null)?.getBoundingClientRect();
        this.openInsertMenu(rect ? { x: rect.left, y: rect.bottom + 8 } : undefined);
    }

    closeInsertMenu(): void {
        this.insertMenu.set(null);
    }

    onPaperContextMenu(event: { x: number; y: number }): void {
        this.openInsertMenu(event);
    }

    onSectionContextMenu(event: { section: ReportSection; x: number; y: number }): void {
        this.selectSection(event.section);
        this.openInsertMenu({ x: event.x, y: event.y });
    }

    insertSection(type: ReportSectionType): void {
        this.addSection(type);
        this.closeInsertMenu();
    }

    addShape(kind: ReportShapeKind): void {
        const tool = this.shapeTools.find((item) => item.kind === kind);
        this.addSuggestedSection({
            type: 'shape',
            shape: kind,
            staticContent: kind,
            frame: {
                x: 64,
                y: 64,
                width: tool?.width ?? 96,
                height: tool?.height ?? 96,
            },
            style: { color: this.templateForm.get('primaryColor')?.value || '#4F46E5' },
        });
        this.closeInsertMenu();
    }

    /**
     * Separate blocks that sit on top of each other, so the printed report shows
     * every field instead of one covering another.
     */
    fixOverlaps(): void {
        const moved = this._samplePreview?.resolveOverlaps() ?? 0;
        const key = moved ? 'smartReport.overlapsFixed' : 'smartReport.noOverlaps';

        this._snack.open(this._transloco.translate(key, { count: moved }), undefined, { duration: 2500 });
    }

    /**
     * One section per sample or batch path that is not already on the page.
     * Nested groups are walked; a table or grid stands in for its own children.
     */
    addFieldsFromSample(): void {
        const nodes = this.insertableNodes();
        if (!nodes.length) {
            this._snack.open(this._transloco.translate('smartReport.noNewFields'), undefined, { duration: 2500 });
            return;
        }

        let lastId = '';
        this.sections.update((list) => {
            const next = [...list];
            nodes.forEach((node) => {
                lastId = this._generateId();
                next.push({
                    ...node.suggestion,
                    id: lastId,
                    type: (node.suggestion.type ?? 'field') as ReportSectionType,
                    order: 0,
                });
            });
            return next.map((section, position) => ({ ...section, order: position }));
        });

        const added = this.sections().find((section) => section.id === lastId);
        if (added) this.selectSection(added);
        this.closeInsertMenu();
    }

    bindSectionToPath(sectionId: string, path: string): void {
        if (!path) return;
        const node = this._findDataNode(path);
        if (!node) {
            this.updateSection(sectionId, { dataPath: path });
            return;
        }
        this.updateSection(sectionId, {
            dataPath: node.suggestion.dataPath ?? node.path,
            label: node.label,
            columns: node.suggestion.columns,
            columnsPerRow: node.suggestion.columnsPerRow,
        });
    }

    canApplyStyleToSimilar(): boolean {
        const selected = this.currentSelectedSection();
        if (!selected) return false;
        return this.sections().some((section) => section.id !== selected.id && section.type === selected.type);
    }

    /** Copy typography, color, padding, and border onto other blocks of the same type. */
    applyStyleToSimilar(): void {
        const source = this.currentSelectedSection();
        if (!source) return;
        const snapshot = this._styleSnapshot(source);
        this.sections.update((list) =>
            list.map((section) => {
                if (section.id === source.id || section.type !== source.type) return section;
                const style = { ...(section.style ?? {}) };
                (Object.keys(snapshot) as (keyof typeof snapshot)[]).forEach((key) => {
                    const value = snapshot[key];
                    if (value === undefined) delete style[key];
                    else (style as Record<string, unknown>)[key] = value;
                });
                return { ...section, style };
            })
        );
        this._snack.open(this._transloco.translate('smartReport.styleApplied'), undefined, { duration: 2500 });
    }

    onCanvasBlankClick(event: MouseEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest('report-preview, .report-inspector, .report-insert-menu')) return;
        this.closeInspector();
        this.closeInsertMenu();
    }

    /**
     * The human label introspection gave a path, for showing a binding as
     * "Owner name" rather than `results.1.propietario.nombre`.
     *
     * Falls back to the last path segment so a hand-typed path still reads as words.
     */
    dataLabelFor(path: string): string {
        const labels = this._nodeLabels();

        if (labels.has(path)) return labels.get(path)!;

        const leaf = path.split('.').pop() || path;

        return this._humanize(leaf);
    }

    /** Flatten the introspection tree into path to label, memoised per payload. */
    private _nodeLabels = computed(() => {
        const labels = new Map<string, string>();

        const walk = (nodes: DataNode[]): void =>
            nodes.forEach((node) => {
                labels.set(node.path, node.label);

                if (node.children?.length) walk(node.children);
            });

        walk(this.dataNodes());
        walk(this.batchNodes());

        return labels;
    });

    /** `numeroPoliza` reads as "Numero poliza"; introspection labels are preferred. */
    private _humanize(key: string): string {
        const spaced = key
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/[_-]+/g, ' ')
            .trim();

        return spaced.charAt(0).toUpperCase() + spaced.slice(1);
    }

    updateSection(id: string, updates: Partial<ReportSection>): void {
        this.sections.update((list) => list.map((s) => (s.id === id ? { ...s, ...updates } : s)));
        const sel = this.selectedSection();
        if (sel?.id === id) {
            this.selectedSection.set({ ...sel, ...updates });
        }
    }

    deleteSection(id: string): void {
        this.sections.update((list) => {
            const filtered = list.filter((s) => s.id !== id);
            filtered.forEach((s, i) => (s.order = i));
            return filtered;
        });
        if (this.selectedSection()?.id === id) {
            this.closeInspector();
        }
    }

    duplicateSection(section: ReportSection): void {
        const newSection: ReportSection = {
            ...section,
            id: this._generateId(),
            order: this.sections().length,
            label: section.label ? section.label + ' (copy)' : undefined,
        };
        this.sections.update((list) => [...list, newSection]);
    }

    // ============================================
    // STYLE HELPERS
    // ============================================

    updateSectionStyle(key: string, value: any): void {
        const section = this.currentSelectedSection();
        if (!section) return;
        this.updateSection(section.id, {
            style: { ...section.style, [key]: value },
        });
    }

    updateTextAlign(align: string): void {
        this.updateSectionStyle('textAlign', align);
    }

    updateFontSize(fontSize: number): void {
        this.updateSectionStyle('fontSize', fontSize);
    }

    updateFontWeight(weight: string): void {
        this.updateSectionStyle('fontWeight', weight);
    }

    updateFontStyle(style: 'normal' | 'italic'): void {
        this.updateSectionStyle('fontStyle', style);
    }

    updateFontFamily(family: string): void {
        this.updateSectionStyle('fontFamily', family);
    }

    fontFamilyIndex(section: ReportSection): number {
        const family = section.style?.fontFamily;
        const index = REPORT_FONT_STACKS.findIndex((font) => font.value === family);
        return index >= 0 ? index : 0;
    }

    updateFontFamilyByIndex(raw: string): void {
        const index = Number(raw);
        const font = REPORT_FONT_STACKS[index];
        if (font) this.updateFontFamily(font.value);
    }

    updateStyleColor(color: string): void {
        this.updateSectionStyle('color', color);
    }

    updateBgColor(color: string): void {
        this.updateSectionStyle('backgroundColor', color);
    }

    // ============================================
    // SAVE
    // ============================================

    /**
     * Collapse the flat form controls into the nested template shape the API takes.
     *
     * Shared by save and the server-rendered preview, so what you preview is exactly
     * what gets persisted and printed.
     */
    private _buildTemplatePayload(): Partial<SmartReportTemplate> {
        const formVal = this.templateForm.value;

        const templateData: Partial<SmartReportTemplate> = {
            ...formVal,
            sections: this.sections(),
            batchConfiguration: this.linkedConfigId() || undefined,
            sampleData: this.previewData(),
            logo: this.logoUrl() || undefined,
            watermark: {
                enabled: formVal.watermarkEnabled ?? false,
                type: formVal.watermarkType || 'text',
                text: formVal.watermarkText || 'CONFIDENTIAL',
                opacity: formVal.watermarkOpacity ?? 0.08,
                pattern: formVal.watermarkPattern || 'single',
                x: formVal.watermarkX ?? 250,
                y: formVal.watermarkY ?? 420,
                width: formVal.watermarkWidth ?? 280,
                height: formVal.watermarkHeight ?? 160,
                rotation: formVal.watermarkRotation ?? -15,
            },
            security: {
                enabled: formVal.securityEnabled ?? false,
                password: formVal.securityPassword || '',
            },
            signature: {
                enabled: formVal.signatureEnabled ?? false,
                image: formVal.signatureImage || '',
                x: formVal.signatureX || 0,
                y: formVal.signatureY || 0,
                width: formVal.signatureWidth || 100,
                height: formVal.signatureHeight || 50,
            },
            logoSettings: {
                // Visibility tracks whether a logo image is present.
                enabled: !!this.logoUrl(),
                x: formVal.logoX ?? 32,
                y: formVal.logoY ?? 32,
                width: formVal.logoWidth ?? 160,
                height: formVal.logoHeight ?? 60,
                rotation: formVal.logoRotation ?? 0,
                autoFitContent: formVal.logoAutoFitContent ?? false,
            },
            bodyTopPadding: formVal.bodyTopPadding ?? 0,
        };

        // Remove the flat controls that were folded into the nested groups above.
        const flatKeys = [
            'watermarkEnabled',
            'watermarkType',
            'watermarkText',
            'watermarkOpacity',
            'watermarkPattern',
            'watermarkX',
            'watermarkY',
            'watermarkWidth',
            'watermarkHeight',
            'watermarkRotation',
            'securityEnabled',
            'securityPassword',
            'signatureEnabled',
            'signatureImage',
            'signatureX',
            'signatureY',
            'signatureWidth',
            'signatureHeight',
            'logoX',
            'logoY',
            'logoWidth',
            'logoHeight',
            'logoRotation',
            'logoAutoFitContent',
        ];

        for (const key of flatKeys) delete (templateData as any)[key];

        return templateData;
    }

    save(onSuccess?: () => void): void {
        if (this.templateForm.invalid) {
            this.templateForm.markAllAsTouched();
            this._templateNameInput?.nativeElement.focus();
            this._snack.open(
                this._transloco.translate('smartReport.nameTheTemplate'),
                this._transloco.translate('smartReport.close'),
                { duration: 3000 }
            );
            return;
        }

        this.isSaving.set(true);

        const templateData = this._buildTemplatePayload();

        const id = this.templateId();

        if (id) {
            this._reportService.updateTemplate(id, templateData).subscribe({
                next: () => {
                    this._snack.open('Template saved!', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                    if (onSuccess) onSuccess();
                },
                error: (err) => {
                    console.error('Save failed:', err);
                    this._snack.open('Failed to save template', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                },
            });
        } else {
            this._reportService.createTemplate(templateData).subscribe({
                next: (created) => {
                    this._snack.open('Template created!', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                    if (onSuccess) onSuccess();
                    const linkedId = this.linkedConfigId();
                    const fromGuide = this._route.snapshot.queryParamMap.get('from') === 'guide';
                    const queryParams = fromGuide
                        ? { from: 'guide' }
                        : undefined;
                    if (linkedId) {
                        this._router.navigate(
                            ['/smart-batch', linkedId, 'report-builder', created._id],
                            { queryParams }
                        );
                    } else {
                        this._router.navigate(['/smart-batch', 'report-builder', created._id], {
                            queryParams,
                        });
                    }
                },
                error: (err) => {
                    console.error('Create failed:', err);
                    this._snack.open('Failed to create template', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                },
            });
        }
    }

    sendSample(): void {
        const id = this.templateId();
        if (!id) {
            this._snack.open(this._transloco.translate('smartReport.saveTemplateFirst'), 'Close', {
                duration: 3500,
            });
            return;
        }

        const defaultSubject = `Sample Report: ${this.templateForm.get('name')?.value || 'Template Preview'}`;
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
                const id = this.templateId(); // Get ID again in case it was just created
                if (!id) return;

                this._reportService
                    .sendTemplateSample(id, {
                        recipients: result.recipients,
                        subject: result.subject,
                        language: 'en',
                        sampleData: this.previewData(),
                    })
                    .subscribe({
                        next: (res) => {
                            if (res.success) {
                                this._snack.open(
                                    this._transloco.translate('smartReport.samplePdfSentSuccess'),
                                    'Close',
                                    {
                                        duration: 3500,
                                    }
                                );
                            } else {
                                this._snack.open(
                                    res.error ||
                                        this._transloco.translate(
                                            'smartReport.failedToSendSamplePdf'
                                        ),
                                    'Close',
                                    {
                                        duration: 4000,
                                    }
                                );
                            }
                            this.isSendingSample.set(false);
                        },
                        error: (err) => {
                            console.error('Send sample failed:', err);
                            this._snack.open(
                                this._transloco.translate('smartReport.failedToSendSamplePdf'),
                                'Close',
                                {
                                    duration: 4000,
                                }
                            );
                            this.isSendingSample.set(false);
                        },
                    });
            };

            if (this.templateForm.dirty) {
                this.save(() => performSend());
            } else {
                performSend();
            }
        });
    }

    /**
     * Download a sample PDF for the current template using the same Puppeteer
     * pipeline as the email flow, so the user can inspect output without going
     * through their inbox. Mirrors `sendSample`'s save-if-dirty behaviour.
     */
    downloadSamplePdf(): void {
        if (!this.templateId()) {
            this._snack.open(this._transloco.translate('smartReport.saveTemplateFirst'), 'Close', {
                duration: 3500,
            });
            return;
        }

        const performDownload = (): void => {
            const id = this.templateId();
            if (!id) return;

            this.isDownloadingSample.set(true);
            const printHtml = this._samplePreview?.exportPrintHtml();
            this._reportService
                .downloadTemplateSample(id, {
                    sampleData: this.previewData(),
                    ...(printHtml ? { printHtml } : {}),
                })
                .subscribe({
                    next: async (blob) => {
                        let pdfBlob = blob;

                        const hasPdfMagic = await this._isPdfBlob(blob);
                        if (!hasPdfMagic) {
                            const recovered = await this._blobFromJsonBytes(blob);
                            if (!recovered) {
                                const errorMsg = await this._parseBlobError(blob);
                                this._snack.open(
                                    errorMsg ||
                                        this._transloco.translate('smartReport.invalidPdfReceived'),
                                    'Close',
                                    { duration: 4000 }
                                );
                                this.isDownloadingSample.set(false);
                                return;
                            }
                            pdfBlob = recovered;
                        }

                        const safeName = (this.templateForm.get('name')?.value || 'template')
                            .toString()
                            .replace(/[^a-z0-9-_]+/gi, '_')
                            .slice(0, 60);
                        const url = URL.createObjectURL(pdfBlob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `SmartReport_TemplateSample_${safeName || id}.pdf`;
                        a.click();
                        URL.revokeObjectURL(url);

                        this._snack.open(
                            this._transloco.translate('smartReport.pdfDownloaded'),
                            'Close',
                            { duration: 2000 }
                        );
                        this.isDownloadingSample.set(false);
                    },
                    error: (err) => {
                        console.error('Download sample failed:', err);
                        this._snack.open(
                            this._transloco.translate('smartReport.failedToDownloadPdf'),
                            'Close',
                            { duration: 4000 }
                        );
                        this.isDownloadingSample.set(false);
                    },
                });
        };

        if (this.templateForm.dirty) {
            this.save(() => performDownload());
        } else {
            performDownload();
        }
    }

    /** True when the first 4 bytes of the blob are the PDF magic header (%PDF). */
    private async _isPdfBlob(blob: Blob): Promise<boolean> {
        const slice = blob.slice(0, 5);
        const buf = await slice.arrayBuffer();
        const bytes = new Uint8Array(buf);
        return bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46;
    }

    /**
     * Some backends serialize a Buffer as a JSON object of `{0:37,1:80,...}`.
     * Reconstruct a real PDF Blob when that happens; return null if the bytes
     * don't actually start with the PDF magic header.
     */
    private async _blobFromJsonBytes(blob: Blob): Promise<Blob | null> {
        try {
            const text = await blob.text();
            const parsed = JSON.parse(text) as Record<string, number>;
            const keys = Object.keys(parsed).filter((k) => /^\d+$/.test(k));
            if (keys.length === 0) return null;
            keys.sort((a, b) => Number(a) - Number(b));
            const bytes = new Uint8Array(keys.length);
            keys.forEach((k, i) => (bytes[i] = parsed[k] & 0xff));
            if (bytes[0] !== 0x25 || bytes[1] !== 0x50 || bytes[2] !== 0x44 || bytes[3] !== 0x46) {
                return null;
            }
            return new Blob([bytes], { type: 'application/pdf' });
        } catch {
            return null;
        }
    }

    private async _parseBlobError(blob: Blob): Promise<string> {
        try {
            const text = await blob.text();
            const parsed = JSON.parse(text) as Record<string, unknown>;
            if (typeof parsed.error === 'string') return parsed.error;
            if (typeof parsed.message === 'string') return parsed.message;
            return text.slice(0, 80);
        } catch {
            return blob.type === 'application/json' || blob.type === 'text/plain'
                ? 'Server returned an error'
                : 'Invalid PDF content';
        }
    }

    // ============================================
    // NAVIGATION
    // ============================================

    goBack(): void {
        if (this._route.snapshot.queryParamMap.get('from') === 'guide') {
            this._router.navigate(['/smart-batch'], {
                queryParams: this.templateId()
                    ? { resume: 'layout', templateId: this.templateId() }
                    : {},
            });
            return;
        }

        const configId = this.configId() ?? this.linkedConfigId();
        if (configId) {
            this._router.navigate(['/smart-batch', configId]);
        } else {
            this._router.navigate(['/smart-batch/workspace'], { queryParams: { tab: 'templates' } });
        }
    }

    setLinkedConfigId(value: string | null): void {
        this.linkedConfigId.set(value || null);
    }

    getConfigOptionLabel(config: BatchConfiguration): string {
        const id = config._id ?? config.id ?? '';
        const format = `${(config.inputFormat || '').toUpperCase()} → ${(config.outputFormat || '').toUpperCase()}`;
        const steps = config.steps?.length ?? 0;
        const suffix = id.length > 6 ? ` · …${id.slice(-6)}` : '';
        return `${config.name} · ${format} · ${steps} ${this._transloco.translate('smartBatchLanding.steps').toLowerCase()}${suffix}`;
    }

    private _resolveBatchConfigId(
        ref: string | BatchConfiguration | { _id?: string; id?: string } | null | undefined
    ): string | null {
        if (!ref) return null;
        if (typeof ref === 'string') return ref;
        return ref._id ?? ref.id ?? null;
    }

    getSectionIcon(type: string): string {
        return this.sectionTypes.find((t) => t.type === type)?.icon || 'help';
    }

    shapeLabelKey(kind: ReportShapeKind): string {
        return `visitaGuide.layoutAdd${kind.charAt(0).toUpperCase()}${kind.slice(1)}`;
    }

    getSectionLabel(type: string): string {
        const labelKey = this.sectionTypes.find((t) => t.type === type)?.labelKey;
        return labelKey ? this._transloco.translate(labelKey) : type;
    }

    /** Wrapper for ReportPreviewComponent section click (preserves this context) */
    onPreviewSectionClick = (section: ReportSection): void => {
        this.selectSection(section);
    };

    onPreviewInlineText(event: ReportInlineTextChange): void {
        const section = this.sections().find((item) => item.id === event.sectionId);
        if (!section) return;
        this.selectSection(section);
        if (event.kind === 'cellLabel' && event.key) {
            this.updateSection(section.id, {
                keyOverrides: {
                    ...(section.keyOverrides ?? {}),
                    [event.key]: {
                        ...(section.keyOverrides?.[event.key] ?? {}),
                        label: event.value,
                    },
                },
            });
            return;
        }
        if (event.kind === 'body') {
            this.updateSection(section.id, { staticContent: event.value });
            return;
        }
        const updates: Partial<ReportSection> = { label: event.value };
        if (section.type === 'header' || section.type === 'text') {
            updates.staticContent = event.value;
        }
        this.updateSection(section.id, updates);
    };

    /** Flattened data paths for the helper panel (only leaf paths for fields) */
    helperDataPaths = computed(() => buildHelperDataPaths(this.previewData()));

    /** Sample and batch paths that are not already placed on the page. */
    insertableNodes = computed(() => this._collectDataNodes(true));

    /** Every bindable path, including ones already used by another block. */
    bindableNodes = computed(() => this._collectDataNodes(false));

    /**
     * Effective content top padding shown next to the slider readout.
     *
     * Mirrors the "explicit wins" logic in ReportPreviewComponent:
     * - When `bodyTopPadding` > 0, the slider value is used directly.
     * - When 0 and auto-fit is on with a logo, the auto-fit offset is used.
     * - Otherwise 0.
     */
    getEffectiveContentPaddingTop(): number {
        const v = this.templateForm.value;
        const base = Number(v.bodyTopPadding) || 0;
        if (base > 0) return base;
        if (this.logoUrl() && v.logoAutoFitContent) {
            return (Number(v.logoY) || 0) + (Number(v.logoHeight) || 0) + 16;
        }
        return 0;
    }

    copyPathToClipboard(path: string): void {
        navigator.clipboard.writeText(path).then(
            () =>
                this._snack.open(
                    `${this._transloco.translate('smartReport.copied')}: ${path}`,
                    'Close',
                    { duration: 2000 }
                ),
            () =>
                this._snack.open(this._transloco.translate('smartReport.failedToCopy'), 'Close', {
                    duration: 2000,
                })
        );
    }

    // ============================================
    // LOGO HELPERS
    // ============================================

    onLogoUpload(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        // Validate file size (max 500KB for base64 storage)
        if (file.size > 512_000) {
            this._snack.open('Logo file must be less than 500KB', 'Close', { duration: 3500 });
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            this.logoUrl.set(reader.result as string);
            this.templateForm.markAsDirty();
        };
        reader.readAsDataURL(file);
    }

    removeLogo(): void {
        this.logoUrl.set(null);
        this.templateForm.markAsDirty();
    }

    onLogoPositionChange(pos: { x: number; y: number }): void {
        this.templateForm.patchValue({
            logoX: Math.max(0, Math.round(pos.x)),
            logoY: Math.max(0, Math.round(pos.y)),
        });
        this.templateForm.markAsDirty();
    }

    onLogoSizeChange(size: { width: number; height: number }): void {
        this.templateForm.patchValue({
            logoWidth: Math.round(size.width),
            logoHeight: Math.round(size.height),
        });
        this.templateForm.markAsDirty();
    }

    onLogoRotationChange(rotation: number): void {
        this.templateForm.patchValue({ logoRotation: Math.round(rotation) });
        this.templateForm.markAsDirty();
    }

    onWatermarkPositionChange(pos: { x: number; y: number }): void {
        this.templateForm.patchValue({
            watermarkX: Math.max(0, Math.round(pos.x)),
            watermarkY: Math.max(0, Math.round(pos.y)),
        });
        this.templateForm.markAsDirty();
    }

    onWatermarkSizeChange(size: { width: number; height: number }): void {
        this.templateForm.patchValue({
            watermarkWidth: Math.round(size.width),
            watermarkHeight: Math.round(size.height),
        });
        this.templateForm.markAsDirty();
    }

    onWatermarkRotationChange(rotation: number): void {
        this.templateForm.patchValue({ watermarkRotation: Math.round(rotation) });
        this.templateForm.markAsDirty();
    }

    onWatermarkTypeChange(type: 'text' | 'logo'): void {
        this.templateForm.patchValue({
            watermarkType: type,
            ...(type === 'logo' ? { watermarkPattern: 'single' } : {}),
        });
        this.templateForm.markAsDirty();
    }

    // ============================================
    // SIGNATURE METHODS
    // ============================================

    onSignaturePositionChange(pos: { x: number; y: number }): void {
        // Clamp to the same safe printable-area inset used for the logo so
        // the preview matches the generated PDF exactly.
        this.templateForm.patchValue({
            signatureX: Math.max(OVERLAY_MIN_X, Math.round(pos.x)),
            signatureY: Math.max(OVERLAY_MIN_Y, Math.round(pos.y)),
        });
        this.templateForm.markAsDirty();
    }

    onSignatureSizeChange(size: { width: number; height: number }): void {
        this.templateForm.patchValue({
            signatureWidth: Math.round(size.width),
            signatureHeight: Math.round(size.height),
        });
        this.templateForm.markAsDirty();
    }

    openSignatureDialog(): void {
        this._dialog
            .open(SignaturePadDialogComponent, {
                width: '640px',
                disableClose: true,
                autoFocus: false,
            })
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.templateForm.patchValue({
                        signatureImage: result,
                        signatureEnabled: true,
                    });
                    this.templateForm.markAsDirty();
                }
            });
    }

    // ============================================
    // PRIVATE HELPERS
    // ============================================

    private _generateId(): string {
        return 'section_' + Math.random().toString(36).substring(2, 11);
    }
}
