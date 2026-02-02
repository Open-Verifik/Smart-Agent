import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StatusCheckService {
    private baseUrl = environment.baseUrl;

    constructor(private _httpWrapper: HttpWrapperService) {}

    getStatusRecord(data: any): Observable<any> {
        return this._httpWrapper.sendRequest('get', this.baseUrl + '/v2/api-status-records', data);
    }

    getIncidentsSubscriptions(data: any): Observable<any> {
        return this._httpWrapper.sendRequest(
            'get',
            this.baseUrl + '/v2/incident-subscriptions',
            data
        );
    }

    postIncidentsSubscriptions(data: any): Observable<any> {
        return this._httpWrapper.sendRequest(
            'post',
            this.baseUrl + '/v2/incident-subscriptions',
            data
        );
    }

    putIncidentsSubscriptions(data: any): Observable<any> {
        return this._httpWrapper.sendRequest(
            'put',
            this.baseUrl + '/v2/incident-subscriptions/' + data._id,
            data
        );
    }

    deleteIncidentsSubscriptions(data: any): Observable<any> {
        return this._httpWrapper.sendRequest(
            'delete',
            this.baseUrl + '/v2/incident-subscriptions/' + data._id,
            data
        );
    }

    getIncidents(data: any): Observable<any> {
        return this._httpWrapper.sendRequest('get', this.baseUrl + '/v2/incidents', data);
    }

    getIncidentLogs(data: any): Observable<any> {
        return this._httpWrapper.sendRequest('get', this.baseUrl + '/v2/incident-logs', data);
    }

    getAppFeatures(data: any): Observable<any> {
        return this._httpWrapper.sendRequest('get', this.baseUrl + '/v2/app-features', data);
    }
}
