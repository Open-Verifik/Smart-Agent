import { Injectable, inject } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

/**
 * Smart Access catalog and client subscription API (parity with Smart Enroll plans service).
 */
@Injectable({ providedIn: 'root' })
export class SmartAccessPlansService {
    private _http = inject(HttpWrapperService);

    private get baseUrl(): string {
        return environment.apiUrl;
    }

    getCatalogPlans(params: Record<string, string | string[]> = { sort: 'amount' }): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/smart-access-plans`, params);
    }

    getClientAccessPlans(
        params: Record<string, string | string[]> = {
            sort: 'startDate',
            where_status: 'active',
            populates: ['plan'],
        }
    ): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/client-smart-access-plans`, params);
    }

    postClientAccessPlan(body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/client-smart-access-plans`, body);
    }

    upgradeClientAccessPlan(body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/client-smart-access-plans/upgrade`, body);
    }

    getClientSettings(params: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/client-settings`, params);
    }
}
