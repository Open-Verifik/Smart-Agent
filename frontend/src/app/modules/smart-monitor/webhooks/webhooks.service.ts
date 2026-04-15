import { Injectable, inject } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

/**
 * Outgoing webhooks API (parity with verifik-client-panel WebhooksService).
 */
@Injectable({ providedIn: 'root' })
export class WebhooksService {
    private _http = inject(HttpWrapperService);

    private get baseUrl(): string {
        return environment.apiUrl;
    }

    get(params: Record<string, unknown> = {}): Observable<any> {
        const q = {
            ...params,
            populates: ['projectFlow.project'],
            populateSelects: '{"project":"name","projectFlow":"project name type"}',
        };
        return this._http.sendRequest('get', `${this.baseUrl}/v2/webhooks`, q);
    }

    getDetails(id: string, projectFlow?: string): Observable<any> {
        const params: Record<string, unknown> = {
            eventStatistics: 30,
            populates: ['projectFlow.project'],
            populateSelects: '{"project":"name","projectFlow":"project name type"}',
        };
        if (projectFlow) {
            params.projectFlow = projectFlow;
        }
        return this._http.sendRequest('get', `${this.baseUrl}/v2/webhooks/${id}`, params);
    }

    getEvents(query: Record<string, unknown>, page = 0, perPage = 10): Observable<any> {
        const params: Record<string, unknown> = {
            ...query,
            where_status: 'sent',
            sort: '-createdAt',
            populates: ['projectFlow.project'],
            populateSelects: '{ "projectFlow": "project", "project": "name" }',
        };
        if (!params.page || !params.perPage) {
            params.page = page;
            params.perPage = perPage;
        }
        return this._http.sendRequest('get', `${this.baseUrl}/v2/webhook-events`, params);
    }

    getEventById(id: string): Observable<any> {
        const params = {
            allSameEvents: true,
            where__id: id,
            where_status: 'sent',
            populates: ['projectFlow.project'],
        };
        return this._http.sendRequest('get', `${this.baseUrl}/v2/webhook-events/${id}`, params);
    }

    resendWebhookEvent(id: string): Observable<any> {
        return this._http.sendRequest('put', `${this.baseUrl}/v2/webhook-events/${id}/resend`, {
            allSameEvents: true,
        });
    }

    create(body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/webhooks`, body);
    }

    getProjectFlows(): Observable<any> {
        const params = {
            where_status: 'active',
            in_type: ['onboarding', 'login', 'smartlink'],
            sort: '-type name',
            populates: ['project', 'webhook'],
            populateSelects: '{"project":"name branding.logo", "webhook":"name"}',
        };
        return this._http.sendRequest('get', `${this.baseUrl}/v2/project-flows`, params);
    }

    activeWebhook(webhookId: string, isActive: boolean): Observable<any> {
        return this._http.sendRequest('put', `${this.baseUrl}/v2/webhooks/${webhookId}`, { isActive });
    }

    update(webhookId: string, body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('put', `${this.baseUrl}/v2/webhooks/${webhookId}`, body);
    }

    delete(webhookId: string): Observable<any> {
        return this._http.sendRequest('delete', `${this.baseUrl}/v2/webhooks/${webhookId}`);
    }

    test(url: string): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/webhooks/test`, { url });
    }
}
