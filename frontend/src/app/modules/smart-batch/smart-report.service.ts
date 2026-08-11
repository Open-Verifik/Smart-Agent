import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable, tap } from 'rxjs';

export type ReportSectionType =
    | 'header'
    | 'text'
    | 'table'
    | 'field'
    | 'image'
    | 'divider'
    | 'spacer'
    | 'dataTable'
    | 'card'
    | 'badge'
    | 'keyValueGrid'
    | 'repeater'
    | 'reportBlocks';

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

    /** dataTable: explicit columns; derived from the row keys when omitted. */
    columns?: { key: string; label?: string }[];
    maxColumns?: number;
    maxRows?: number;

    /** keyValueGrid */
    columnsPerRow?: number;

    /** repeater: `{field}` placeholders resolved against each array item. */
    itemTitle?: string;
    itemTemplate?: string;

    /** reportBlocks: restrict to specific composed blocks, all when omitted. */
    blockIds?: string[];
    showDisplayRows?: boolean;

    showWhenEmpty?: boolean;
    emptyMessage?: string;

    style?: {
        fontSize?: number;
        fontWeight?: 'normal' | 'bold';
        textAlign?: 'left' | 'center' | 'right';
        color?: string;
        backgroundColor?: string;
        padding?: string;
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
    header?: ReportSection;
    footer?: ReportSection;
    legend?: string;

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
        text?: string;
        opacity?: number;
        pattern?: 'single' | 'repeated';
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
    };

    // Workspace logo position & size (drag & drop overlay, parallel to signature)
    logoSettings?: {
        enabled: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
        /** When true and overlay is enabled, content auto-pushes below the logo. */
        autoFitContent?: boolean;
    };

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
            }>(`${environment.apiUrl}/v2/smart-report-templates`, template)
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
            }>(`${environment.apiUrl}/v2/smart-report-templates/${id}`, template)
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
                ...template,
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
        body: { sampleData: SampleReportData }
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
        options?: { engine?: 'pdfkit' | 'puppeteer'; rowIndex?: number }
    ): Observable<{ data: SmartReport; pdf: { buffer: string; size: number } }> {
        const body: { engine?: string; rowIndex?: number } = {};
        if (options?.engine) body.engine = options.engine;
        if (options?.rowIndex != null) body.rowIndex = options.rowIndex;
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
        options: { recipients: string[]; subject?: string; language?: 'en' | 'es' }
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
    downloadReport(id: string): Observable<Blob> {
        return this._httpClient.get(`${environment.apiUrl}/v2/smart-reports/${id}/download`, {
            responseType: 'blob',
        });
    }
}
