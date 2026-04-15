import { Injectable, inject } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

/**
 * Smart Enroll catalog and client subscription API (parity with client-panel ProjectService).
 */
@Injectable({ providedIn: 'root' })
export class SmartEnrollPlansService {
    private _http = inject(HttpWrapperService);

    private get baseUrl(): string {
        return environment.apiUrl;
    }

    getCatalogPlans(params: Record<string, string | string[]> = { sort: 'amount' }): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/smart-enroll-plans`, params);
    }

    getClientEnrollPlans(
        params: Record<string, string | string[]> = {
            sort: 'startDate',
            where_status: 'active',
            populates: ['plan'],
        }
    ): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/client-smart-enroll-plans`, params);
    }

    postClientEnrollPlan(body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/client-smart-enroll-plans`, body);
    }

    upgradeClientEnrollPlan(body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/client-smart-enroll-plans/upgrade`, body);
    }

    getClientSettings(params: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/client-settings`, params);
    }
}
