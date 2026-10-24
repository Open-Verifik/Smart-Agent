import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import type { ClientRetentionSavePayload, RetentionPolicy } from './retention.model';
import { buildClientRetentionSavePayload } from './retention.util';

/**
 * Saves account data-retention settings.
 *
 * The request body is only `{ client, data }`. Posting a full ClientSettings
 * snapshot re-applies billing and invoice fields and can fail invoice validation.
 * There is no dedicated retention route on the backend yet; this still uses
 * `POST /v2/client-settings`, which the API treats as an update.
 */
@Injectable({ providedIn: 'root' })
export class DataRetentionService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private _http: HttpWrapperService) {}

    /**
     * Persists the account retention policy.
     * @param clientId - Business client id.
     * @param policy - Policy limited to enforced types.
     * @returns The client-settings response from the API.
     * @throws Error when `clientId` is empty, before any request is sent.
     */
    saveClientRetention(clientId: string, policy: RetentionPolicy): Observable<{ data?: unknown }> {
        let body: ClientRetentionSavePayload;
        try {
            body = buildClientRetentionSavePayload(clientId, policy);
        } catch (error) {
            return throwError(() => error);
        }

        return this._http.sendRequest('post', `${this.apiUrl}/v2/client-settings`, body).pipe(
            catchError((error) => throwError(() => error))
        );
    }
}
