import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import type {
    EmailTemplateDesign,
    HtmlSlotStatus,
    OtpEmailTemplateForm,
} from './otp-email-template.types';

export interface ContentHtmlError {
    code: string;
    token?: string;
}

export interface OtpEmailPreviewResponse {
    html: string;
    subject: string;
    language: string;
    htmlSlotStatus?: HtmlSlotStatus;
    htmlErrors?: ContentHtmlError[];
}

export interface OtpEmailTemplateSettingsPayload {
    emailTemplates: Record<string, OtpEmailTemplateForm>;
    emailTemplateDesign: EmailTemplateDesign;
}

@Injectable({ providedIn: 'root' })
export class ProjectFlowOtpEmailService {
    private _http = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    private authHeaders(): HttpHeaders {
        const token = localStorage.getItem('accessToken') || '';
        return new HttpHeaders({ Authorization: `Bearer ${token}` });
    }

    getPreview(
        flowId: string,
        language: string,
        emailTemplate?: OtpEmailTemplateForm,
        emailTemplateDesign?: EmailTemplateDesign
    ): Observable<{ data: OtpEmailPreviewResponse }> {
        const params: Record<string, string> = { language };
        if (emailTemplate) {
            params['emailTemplate'] = JSON.stringify(emailTemplate);
        }
        if (emailTemplateDesign) {
            params['emailTemplateDesign'] = emailTemplateDesign;
        }

        return this._http.get<{ data: OtpEmailPreviewResponse }>(
            `${this.apiUrl}/v2/project-flows/${flowId}/email-preview`,
            { params, headers: this.authHeaders() }
        );
    }

    sendTestEmail(
        flowId: string,
        payload: {
            email: string;
            language?: string;
            emailTemplate?: OtpEmailTemplateForm;
            emailTemplateDesign?: EmailTemplateDesign;
        }
    ): Observable<{ data: { sent: boolean } }> {
        return this._http.post<{ data: { sent: boolean } }>(
            `${this.apiUrl}/v2/project-flows/${flowId}/test-email`,
            payload,
            { headers: this.authHeaders() }
        );
    }

    updateEmailTemplateSettings(
        flowId: string,
        payload: OtpEmailTemplateSettingsPayload
    ): Observable<{ data: unknown }> {
        return this._http.put<{ data: unknown }>(
            `${this.apiUrl}/v2/project-flows/${flowId}`,
            payload,
            { headers: this.authHeaders() }
        );
    }
}
