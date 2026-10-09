import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable, tap } from 'rxjs';
import type { ReportCustomFont } from './report-fonts.util';
import type { ReportValueRule } from './report-value-rules.util';

export type ReportSectionType =
    | 'header'
    | 'text'
    | 'table'
    | 'field'
    | 'image'
    | 'divider'
    | 'spacer'
    | 'shape'
    | 'dataTable'
    | 'card'
    | 'badge'
    | 'keyValueGrid'
    | 'repeater'
    | 'reportBlocks';

export const REPORT_SHAPE_KINDS = [
    'rectangle',
    'square',
    'circle',
    'star',
    'triangle',
    'diamond',
    'bullet',
    'icon',
] as const;

export type ReportShapeKind = (typeof REPORT_SHAPE_KINDS)[number];

export type ReportConditionOperator =
    | 'equals'
    | 'notEquals'
    | 'exists'
    | 'notExists'
    | 'contains'
    | 'in'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'isEmpty'
    | 'notEmpty';

export type ReportStyleVariant = 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'primary';

export type ReportTextRole = 'title' | 'label' | 'value';
export type ReportCellPart = 'cell' | 'label' | 'value' | 'title';
export type ReportRowLineStyle = 'solid' | 'dotted' | 'dashed';

export interface ReportSectionFrame {
    x: number;
    y: number;
    width?: number;
    height?: number;
    page?: number;
}

export interface ReportSheetImage {
    id: string;
    src: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation?: number;
    page?: number;
    /** Paint order on the sheet. Higher stays in front. */
    zIndex?: number;
}

/** Company logo repeated in the header or footer of every page. */
export type ReportHeaderLogoAlign = 'left' | 'center' | 'right';
export type ReportLogoBand = 'header' | 'footer';

export interface ReportHeaderLogo {
    id: string;
    src: string;
    align: ReportHeaderLogoAlign;
    /** Omitted logos stay in the header. */
    band?: ReportLogoBand;
    width: number;
    height: number;
}

export interface ReportTextRoleStyle {
    fontSize?: number;
    fontWeight?: 'normal' | 'bold';
    fontStyle?: 'normal' | 'italic';
    textDecoration?: 'none' | 'underline';
    fontFamily?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    color?: string;
}

/** Per-parameter cell inside a keyValueGrid / card / table. */
export interface ReportKeyOverride {
    label?: string;
    /** Shown instead of the consulted value when the sheet text was rewritten. */
    value?: string;
    backgroundColor?: string;
    /** Table chip. Omitted means visible. */
    showTableBadge?: boolean;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    /** When set, this cell ignores the block-level row-line toggle. */
    showRowLine?: boolean;
    rowLineStyle?: ReportRowLineStyle;
    rowLineColor?: string;
    /** Line thickness in px. */
    rowLineWidth?: number;
    /** Dot or dash length in px. */
    rowLineMark?: number;
    labelStyle?: ReportTextRoleStyle;
    valueStyle?: ReportTextRoleStyle;
    /** Conditional formatting for this value; replaces the block-wide `valueRules`. */
    rules?: ReportValueRule[];
}

export interface ReportSectionCondition {
    field: string;
    operator: ReportConditionOperator;
    value?: any;
}

export interface ReportSection {
    id: string;
    type: ReportSectionType;
    order: number;
    dataPath?: string;
    label?: string;
    staticContent?: string;
    /** Decorative shape when `type` is `shape`. */
    shape?: ReportShapeKind;
    /** Cleaned standalone `<svg>` when `shape` is `icon`. */
    iconSvg?: string;
    /** Where the icon came from, e.g. `mat_solid:directions_car` or `mdi:car`. */
    iconName?: string;
    /** Multicolor icons keep their own colors instead of `style.color`. */
    iconKeepColors?: boolean;

    /** dataTable: explicit columns; derived from the row keys when omitted. */
    columns?: { key: string; label?: string }[];
    maxColumns?: number;
    maxRows?: number;

    /** keyValueGrid */
    columnsPerRow?: number;
    /** Keys to omit from keyValueGrid / table / card parameter lists. */
    hiddenKeys?: string[];
    /** Display order of parameter and nested-table keys inside the block. */
    keyOrder?: string[];
    /** Row separators between parameters. Default true. */
    showRowLines?: boolean;
    /** Separator look. Default solid. */
    rowLineStyle?: ReportRowLineStyle;
    /** Separator color. Independent from cell/block background. */
    rowLineColor?: string;
    /** Separator thickness in px. Default 3. */
    rowLineWidth?: number;
    /** Dot or dash length in px. */
    rowLineMark?: number;
    /** Independent label, value, and cell chrome per parameter key. */
    keyOverrides?: Record<string, ReportKeyOverride>;
    /**
     * Conditional formatting for every value in the block without its own rules.
     * On shapes and icons the rules test `ruleField` and recolor the shape.
     */
    valueRules?: ReportValueRule[];
    /** Full data path a shape's `valueRules` read, e.g. `results.2.soat.0.estado`. */
    ruleField?: string;

    /** repeater: `{field}` placeholders resolved against each array item. */
    itemTitle?: string;
    itemTemplate?: string;

    /** reportBlocks: restrict to specific composed blocks, all when omitted. */
    blockIds?: string[];
    showDisplayRows?: boolean;

    showWhenEmpty?: boolean;
    emptyMessage?: string;

    /** Free placement on the sheet (canonical 96 DPI px from the page content origin). */
    frame?: ReportSectionFrame;

    style?: {
        fontSize?: number;
        fontWeight?: 'normal' | 'bold';
        fontStyle?: 'normal' | 'italic';
        textDecoration?: 'none' | 'underline';
        fontFamily?: string;
        textAlign?: 'left' | 'center' | 'right' | 'justify';
        color?: string;
        labelColor?: string;
        valueColor?: string;
        /** Independent typography for the block title. */
        titleStyle?: ReportTextRoleStyle;
        /** Independent typography for parameter labels. */
        labelStyle?: ReportTextRoleStyle;
        /** Independent typography for parameter values. */
        valueStyle?: ReportTextRoleStyle;
        backgroundColor?: string;
        padding?: string;
        borderWidth?: number;
        borderColor?: string;
        borderRadius?: number;
        rotation?: number;
        /** Paint order on the sheet; higher stays on top when blocks overlap. */
        zIndex?: number;
        variant?: ReportStyleVariant;
        /** Data-driven appearance, first matching rule wins. */
        variantRules?: (ReportSectionCondition & { variant: ReportStyleVariant })[];
    };
    condition?: ReportSectionCondition;
}

export interface BatchConfigurationRef {
    _id?: string;
    id?: string;
    name?: string;
}

export interface SmartReportTemplate {
    _id?: string;
    name: string;
    description?: string;
    type?: 'client' | 'System';
    systemKey?: string;
    country?: string;
    category?: 'citizen' | 'company' | 'vehicle';
    tier?: 'essential' | 'comprehensive';
    nameKey?: string;
    descriptionKey?: string;
    clonedFromSystemKey?: string;
    presetSteps?: { appFeatureCode: string; sequence: number }[];
    batchConfiguration?: string | BatchConfigurationRef;
    client?: string;

    // Branding
    logo?: string;
    primaryColor?: string;
    /** Library swatch only. Does not change report design. Default black. */
    identityColor?: string;
    pageBackgroundColor?: string;
    header?: ReportSection;
    footer?: ReportSection;
    legend?: string;
    legendPosition?: 'left' | 'center' | 'right';
    termsAndConditions?: string;
    termsPosition?: 'left' | 'center' | 'right';

    // Report sections
    sections: ReportSection[];

    // Page settings
    pageSize?: 'A4' | 'Letter' | 'Legal';
    orientation?: 'portrait' | 'landscape';
    margins?: { top: number; right: number; bottom: number; left: number };

    // PDF engine
    pdfEngine?: 'pdfkit' | 'puppeteer';

    // Page numbering
    showPageNumbers?: boolean;
    pageNumberPosition?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right';

    // Watermark
    watermark?: {
        enabled: boolean;
        type: 'logo' | 'text';
        /** Image used only as the watermark. Independent of header and footer logos. */
        logo?: string;
        text?: string;
        opacity?: number;
        pattern?: 'single' | 'repeated';
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        rotation?: number;
    };

    // Security
    security?: {
        enabled: boolean;
        password?: string;
    };

    // Signature
    signature?: {
        enabled: boolean;
        image?: string;
        x: number;
        y: number;
        width: number;
        height: number;
        /** 0-based sheet. Omitted signatures stay on the first page. */
        page?: number;
    };

    // Workspace logo position & size (drag & drop overlay, parallel to signature)
    logoSettings?: {
        enabled: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        rotation?: number;
        /** When true and overlay is enabled, content auto-pushes below the logo. */
        autoFitContent?: boolean;
    };

    /** Extra logos/images placed freely on the sheet (canonical 96 DPI px). */
    sheetImages?: ReportSheetImage[];

    /** Fonts loaded for this template (Google Fonts, remote URL or uploaded file). */
    customFonts?: ReportCustomFont[];

    /** Company logos locked to the header band and repeated on every page. */
    headerLogos?: ReportHeaderLogo[];

    /** Extra top padding (canonical 96 DPI px) added to the section content area. */
    bodyTopPadding?: number;

    /** Sample data for Helper Data panel and preview (persisted from report viewer) */
    sampleData?: SampleReportData;

    /**
     * Cached page-one render, sent only by the list endpoint. Absent when the
     * template has no sample data to render, in which case the card falls back to
     * its icon.
     */
    thumbnail?: {
        image?: string;
        hash?: string;
        generatedAt?: string;
    };

    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

const SYSTEM_TEMPLATE_FIELDS = [
    'type',
    'systemKey',
    'country',
    'category',
    'tier',
    'nameKey',
    'descriptionKey',
    'presetSteps',
] as const;

/** Drop fields the template API rejects on write. */
export const sanitizeTemplateForApi = (
    template: Partial<SmartReportTemplate>,
    mode: 'create' | 'update' = 'create'
): Partial<SmartReportTemplate> => {
    const payload = JSON.parse(JSON.stringify(template)) as Partial<SmartReportTemplate> & {
        __v?: unknown;
    };

    delete payload._id;
    delete payload.client;
    delete payload.thumbnail;
    delete payload.createdAt;
    delete payload.updatedAt;
    delete payload.clonedFromSystemKey;
    delete payload.__v;

    const batchRef = payload.batchConfiguration;
    if (batchRef && typeof batchRef === 'object') {
        const id = (batchRef as BatchConfigurationRef)._id ?? (batchRef as BatchConfigurationRef).id;
        if (typeof id === 'string' && id) {
            payload.batchConfiguration = id;
        } else {
            delete payload.batchConfiguration;
        }
    }

    if (mode === 'update' && payload.logo === '') {
        payload.logo = '';
    } else if (typeof payload.logo !== 'string' || !payload.logo) {
        delete payload.logo;
    }

    if (mode === 'update') {
        for (const key of SYSTEM_TEMPLATE_FIELDS) {
            delete payload[key];
        }
    }

    return payload;
};

export const cloneReportValue = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

export interface SmartReport {
    _id?: string;
    template: string | SmartReportTemplate;
    smartBatch: string;
    client: string;
    name?: string;
    status: 'pending' | 'generating' | 'generated' | 'failed' | 'sent';

    // PDF storage
    pdfUrl?: string;
    pdfSize?: number;
    pdfEngine?: 'pdfkit' | 'puppeteer';

    // Data snapshot
    dataSnapshot?: any;
    htmlSnapshot?: string;

    // Email tracking
    emailHistory?: {
        sentAt: Date;
        recipients: string[];
        subject: string;
        status: 'sent' | 'failed' | 'delivered' | 'opened' | 'bounced';
        messageId?: string;
    }[];

    generatedAt?: string;
    createdAt?: string;
    updatedAt?: string;
}

/** How the backend classified a node in the sample payload. */
export type DataNodeShape =
    | 'scalar'
    | 'status'
    | 'objectList'
    | 'scalarList'
    | 'flatObject'
    | 'nested'
    | 'blocks'
    | 'empty';

/**
 * One node of the sample payload, described by the backend.
 *
 * `suggestion` is a ready-to-insert section, which is what lets a user drop a data
 * node onto the page without typing a `dataPath` or naming columns by hand.
 */
export interface DataNode {
    path: string;
    key: string;
    label: string;
    shape: DataNodeShape;
    semantic?: 'plain' | 'status' | 'date' | 'amount' | 'boolean';
    sectionType: ReportSectionType;
    alternatives: ReportSectionType[];
    sample: string;
    count?: number;
    columns?: { key: string; label?: string }[];
    blockIds?: string[];
    suggestion: Partial<ReportSection> & { type: ReportSectionType };
    children?: DataNode[];
}

export interface DataIntrospection {
    nodes: DataNode[];
    batch: DataNode[];
    count: number;
    truncated: boolean;
}

export interface SampleReportData {
    batchName?: string;
    rowIndex?: number;
    inputData?: Record<string, any>;
    results?: Record<string, any>;
    errors?: { step: number; message: string; code: string }[];
    /** Pre-composed Colombia vehicle report (optional; built at runtime when omitted). */
    report?: Record<string, any>;
    /** Batch steps so the PDF composer can match each result to its feature, same as Smart Batch. */
    steps?: { sequence: number; enabled?: boolean; featureCode?: string; appFeature?: { code?: string } }[];
}

@Injectable({
    providedIn: 'root',
})
export class SmartReportService {
    templates = signal<SmartReportTemplate[]>([]);
    reports = signal<SmartReport[]>([]);
    isLoading = signal(false);

    constructor(private _httpClient: HttpClient) {}

    // ============================================
    // TEMPLATE METHODS
    // ============================================

    getTemplates(configId?: string): Observable<SmartReportTemplate[]> {
        this.isLoading.set(true);
        let params: Record<string, string> = {};
        if (configId) {
            params = { batchConfiguration: configId };
        }
        return this._httpClient
            .get<{
                data: SmartReportTemplate[];
            }>(`${environment.apiUrl}/v2/smart-report-templates`, { params })
            .pipe(
                map((res) => res.data),
                tap({
                    next: (templates) => {
                        this.templates.set(templates);
                        this.isLoading.set(false);
                    },
                    error: () => this.isLoading.set(false),
                })
            );
    }

    getTemplate(id: string): Observable<SmartReportTemplate> {
        return this._httpClient
            .get<{
                data: SmartReportTemplate;
            }>(`${environment.apiUrl}/v2/smart-report-templates/${id}`)
            .pipe(map((res) => res.data));
    }

    createTemplate(template: Partial<SmartReportTemplate>): Observable<SmartReportTemplate> {
        return this._httpClient
            .post<{
                data: SmartReportTemplate;
            }>(`${environment.apiUrl}/v2/smart-report-templates`, sanitizeTemplateForApi(template, 'create'))
            .pipe(
                map((res) => res.data),
                tap((newTemplate) => {
                    this.templates.update((list) => [newTemplate, ...list]);
                })
            );
    }

    updateTemplate(
        id: string,
        template: Partial<SmartReportTemplate>
    ): Observable<SmartReportTemplate> {
        return this._httpClient
            .put<{
                data: SmartReportTemplate;
            }>(`${environment.apiUrl}/v2/smart-report-templates/${id}`, sanitizeTemplateForApi(template, 'update'))
            .pipe(
                map((res) => res.data),
                tap((updated) => {
                    this.templates.update((list) => list.map((t) => (t._id === id ? updated : t)));
                })
            );
    }

    deleteTemplate(id: string): Observable<any> {
        return this._httpClient
            .delete(`${environment.apiUrl}/v2/smart-report-templates/${id}`)
            .pipe(
                tap(() => {
                    this.templates.update((list) => list.filter((t) => t._id !== id));
                })
            );
    }

    generateLayout(options: {
        prompt: string;
        previewData: any;
        mode: 'create' | 'edit' | 'append';
        currentSections?: ReportSection[];
        selectedSection?: ReportSection | null;
    }): Observable<any> {
        return this._httpClient
            .post<{
                data: any;
            }>(`${environment.apiUrl}/v2/smart-report-templates/generate-layout`, options)
            .pipe(map((res) => res.data));
    }

    /**
     * Render the live preview through the same code path that produces the PDF.
     *
     * The template travels in the body so an unsaved draft can be previewed, and
     * the response is raw HTML for an iframe rather than a section view model.
     */
    previewHtml(
        template: Partial<SmartReportTemplate>,
        sampleData: SampleReportData
    ): Observable<string> {
        return this._httpClient
            .post<{
                data: { html: string };
            }>(`${environment.apiUrl}/v2/smart-report-templates/preview-html`, {
                ...sanitizeTemplateForApi(template, 'create'),
                sampleData,
            })
            .pipe(map((res) => res.data.html));
    }

    /**
     * Describe a sample payload so the builder can offer a data palette instead of
     * asking the user to type dot paths.
     */
    introspect(sampleData: SampleReportData): Observable<DataIntrospection> {
        return this._httpClient
            .post<{
                data: DataIntrospection;
            }>(`${environment.apiUrl}/v2/smart-report-templates/introspect`, { sampleData })
            .pipe(map((res) => res.data));
    }

    sendTemplateSample(
        id: string,
        options: {
            recipients: string[];
            subject?: string;
            language?: 'en' | 'es';
            sampleData: SampleReportData;
            printHtml?: string;
        }
    ): Observable<{ success: boolean; message: string; messageId?: string; error?: string }> {
        return this._httpClient.post<{
            success: boolean;
            message: string;
            messageId?: string;
            error?: string;
        }>(`${environment.apiUrl}/v2/smart-report-templates/${id}/send-sample`, options);
    }

    /**
     * Generate the same Puppeteer sample PDF as `sendTemplateSample` but receive
     * the file directly (no email) so the user can preview it locally.
     */
    downloadTemplateSample(
        id: string,
        body: { sampleData: SampleReportData; printHtml?: string }
    ): Observable<Blob> {
        return this._httpClient.post(
            `${environment.apiUrl}/v2/smart-report-templates/${id}/download-sample`,
            body,
            { responseType: 'blob' }
        );
    }

    // ============================================
    // REPORT METHODS
    // ============================================

    getReports(batchId?: string): Observable<SmartReport[]> {
        let params = {};
        if (batchId) {
            params = { smartBatch: batchId };
        }
        return this._httpClient
            .get<{ data: SmartReport[] }>(`${environment.apiUrl}/v2/smart-reports`, { params })
            .pipe(
                map((res) => res.data),
                tap((reports) => this.reports.set(reports))
            );
    }

    /**
     * Reports generated from a template, newest first.
     *
     * Unlike `getReports`, this does not replace the shared `reports` signal: the
     * builder's Deliver step asks about one template while a batch view may be
     * showing another batch's reports.
     */
    getReportsByTemplate(templateId: string): Observable<SmartReport[]> {
        return this._httpClient
            .get<{ data: SmartReport[] }>(`${environment.apiUrl}/v2/smart-reports`, {
                params: { template: templateId, sort: '-createdAt' },
            })
            .pipe(map((res) => res.data ?? []));
    }

    getReport(id: string): Observable<SmartReport> {
        return this._httpClient
            .get<{ data: SmartReport }>(`${environment.apiUrl}/v2/smart-reports/${id}`)
            .pipe(map((res) => res.data));
    }

    createReport(report: {
        template: string;
        smartBatch: string;
        name?: string;
    }): Observable<SmartReport> {
        return this._httpClient
            .post<{ data: SmartReport }>(`${environment.apiUrl}/v2/smart-reports`, report)
            .pipe(
                map((res) => res.data),
                tap((newReport) => {
                    this.reports.update((list) => [newReport, ...list]);
                })
            );
    }

    generateReport(
        id: string,
        options?: { engine?: 'pdfkit' | 'puppeteer'; rowIndex?: number; printHtml?: string }
    ): Observable<{ data: SmartReport; pdf: { buffer: string; size: number } }> {
        const body: { engine?: string; rowIndex?: number; printHtml?: string } = {};
        if (options?.engine) body.engine = options.engine;
        if (options?.rowIndex != null) body.rowIndex = options.rowIndex;
        if (options?.printHtml) body.printHtml = options.printHtml;
        return this._httpClient.post<{
            data: SmartReport;
            pdf: { buffer: string; size: number };
        }>(
            `${environment.apiUrl}/v2/smart-reports/${id}/generate`,
            Object.keys(body).length ? body : {}
        );
    }

    sendReportEmail(
        id: string,
        options: {
            recipients: string[];
            subject?: string;
            language?: 'en' | 'es';
            rowIndex?: number;
            sendAll?: boolean;
            engine?: 'pdfkit' | 'puppeteer';
            printHtml?: string;
            pdfBase64?: string;
            pdfFiles?: { filename: string; pdfBase64: string }[];
        }
    ): Observable<{ success: boolean; messageId?: string; error?: string }> {
        return this._httpClient.post<{
            success: boolean;
            messageId?: string;
            error?: string;
        }>(`${environment.apiUrl}/v2/smart-reports/${id}/send-email`, options);
    }

    getReportDownloadUrl(id: string): string {
        return `${environment.apiUrl}/v2/smart-reports/${id}/download`;
    }

    /**
     * Download report PDF as blob (includes auth header).
     * Use this instead of getReportDownloadUrl + window.open for protected endpoints.
     */
    downloadReport(id: string, rowIndex?: number): Observable<Blob> {
        return this._httpClient.get(`${environment.apiUrl}/v2/smart-reports/${id}/download`, {
            responseType: 'blob',
            ...(rowIndex != null ? { params: { rowIndex: String(rowIndex) } } : {}),
        });
    }
}
