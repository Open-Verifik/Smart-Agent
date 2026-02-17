import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable, tap } from 'rxjs';

// ============================================
// INTERFACES
// ============================================

export interface ReportSection {
    id: string;
    type: 'header' | 'text' | 'table' | 'field' | 'image' | 'divider' | 'spacer';
    order: number;
    dataPath?: string;
    label?: string;
    staticContent?: string;
    style?: {
        fontSize?: number;
        fontWeight?: 'normal' | 'bold';
        textAlign?: 'left' | 'center' | 'right';
        color?: string;
        backgroundColor?: string;
        padding?: string;
    };
    condition?: {
        field: string;
        operator: 'equals' | 'notEquals' | 'exists' | 'notExists';
        value?: any;
    };
}

export interface SmartReportTemplate {
    _id?: string;
    name: string;
    description?: string;
    batchConfiguration?: string;
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

    /** Sample data for Helper Data panel and preview (persisted from report viewer) */
    sampleData?: SampleReportData;

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

export interface SampleReportData {
    batchName?: string;
    rowIndex?: number;
    inputData?: Record<string, any>;
    results?: Record<string, any>;
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
        let params = {};
        if (configId) {
            params = { batchConfiguration: configId };
        }
        return this._httpClient
            .get<{
                data: SmartReportTemplate[];
            }>(`${environment.apiUrl}/v2/smart-report-templates`, { params })
            .pipe(
                map((res) => res.data),
                tap((templates) => this.templates.set(templates))
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
