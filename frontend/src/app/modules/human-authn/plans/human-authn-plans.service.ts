import { Injectable, inject } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HumanAuthnPlansService {
    private _http = inject(HttpWrapperService);

    private get baseUrl(): string {
        return environment.apiUrl;
    }

    getCatalogPlans(params: Record<string, string | string[]> = { sort: 'price' }): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/human-authn-plans`, params);
    }

    getClientPlans(
        params: Record<string, string | string[]> = {
            sort: 'startDate',
            where_status: 'active',
            populates: ['plan'],
        }
    ): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/client-human-authn-plans`, params);
    }

    postClientPlan(body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/client-human-authn-plans`, body);
    }

    upgradeClientPlan(body: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('post', `${this.baseUrl}/v2/client-human-authn-plans/upgrade`, body);
    }

    getClientSettings(params: Record<string, unknown>): Observable<any> {
        return this._http.sendRequest('get', `${this.baseUrl}/v2/client-settings`, params);
    }
}
