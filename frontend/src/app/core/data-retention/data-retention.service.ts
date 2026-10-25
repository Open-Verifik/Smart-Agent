import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { getBusinessUserClientId } from 'app/modules/settings/utils/settings-business-user.util';
import { SettingsService } from 'app/modules/settings/settings.service';
import { environment } from 'environments/environment';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import {
    appRegistrationDataUrl,
    documentValidationFilesUrl,
    resolveAllowManualDeleteFlag,
    type RetentionFlagSource,
} from './manual-erase.util';
import type { ClientRetentionSavePayload, RetentionPolicy } from './retention.model';
import { buildClientRetentionSavePayload, type StoredRetention } from './retention.util';

/**
 * Account retention saves, plus the manual-erase calls an administrator can make.
 *
 * Saves still post only `{ client, data }` to `POST /v2/client-settings`.
 * Erase calls:
 * - `DELETE /v2/document-validations/:id/files` removes stored images for one scan.
 * - `DELETE /v2/app-registrations/:id/data` removes stored data for one enrollee.
 * Neither route sends a body. The validation or registration row is left in place.
 *
 * `POST /v2/data-retention/erase` is not wrapped. The bulk body is defined in
 * verifik-backend #531's validator and is not available in this repo, so the
 * settings screen does not offer a bulk erase action.
 */
@Injectable({ providedIn: 'root' })
export class DataRetentionService {
    private readonly apiUrl = environment.apiUrl;
    private accountLookup$: Observable<RetentionFlagSource> | null = null;
    private readonly projectLookups = new Map<string, Observable<RetentionFlagSource>>();

    constructor(
        private _http: HttpWrapperService,
        private _settings: SettingsService
    ) {}

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
            tap(() => {
                this.accountLookup$ = null;
            }),
            catchError((error) => throwError(() => error))
        );
    }

    /**
     * Whether manual erase is allowed for a record.
     * A saved project `dataRetention` block wins. Otherwise the account setting is used.
     * The account lookup and each project lookup are cached, so opening another
     * scan or enrollee does not fetch settings again.
     *
     * Pass `projectRetentionLoaded` when the view already has the project document.
     * Returns null when the deciding level could not be loaded. The button stays
     * available in that case, and a 403 uses the same "turned off" message.
     * @param options.projectId - Project to read when the view does not already have it.
     * @param options.projectRetention - `Project.dataRetention` already on screen.
     * @param options.projectRetentionLoaded - True when `projectRetention` is authoritative, including null.
     */
    resolveAllowManualDelete(options: {
        projectId?: string | null;
        projectRetention?: StoredRetention | null;
        projectRetentionLoaded?: boolean;
    }): Observable<boolean | null> {
        const projectId = options.projectId?.trim() || null;
        const project$ = options.projectRetentionLoaded
            ? of<RetentionFlagSource>({ loaded: true, stored: options.projectRetention ?? null })
            : projectId
              ? this.projectRetention(projectId)
              : of<RetentionFlagSource>({ loaded: true, stored: null });

        return forkJoin({ project: project$, account: this.accountRetention() }).pipe(
            map(({ project, account }) => resolveAllowManualDeleteFlag(project, account))
        );
    }

    /**
     * Drops one cached project override. Call this after that project's retention save
     * so the next scan detail reads the new flag.
     * @param projectId - Project that was just saved.
     */
    forgetProjectRetention(projectId: string): void {
        const id = projectId.trim();
        if (id) this.projectLookups.delete(id);
    }

    /**
     * Erases stored images for one document scan.
     * `DELETE /v2/document-validations/:id/files`. The validation record stays.
     * The server returns 403 when manual erase is off for the account or project.
     * @param id - Document validation id.
     * @returns The API response. Callers should reload the scan afterward.
     * @throws Error when `id` is blank, before any request is sent.
     */
    eraseDocumentValidationFiles(id: string): Observable<unknown> {
        let url: string;
        try {
            url = documentValidationFilesUrl(this.apiUrl, id);
        } catch (error) {
            return throwError(() => error);
        }
        return this._http.sendRequest('delete', url).pipe(catchError((error) => throwError(() => error)));
    }

    /**
     * Erases stored data for one enrollee.
     * `DELETE /v2/app-registrations/:id/data`. The registration record stays.
     * The server returns 403 when manual erase is off for the account or project.
     * @param id - App registration id.
     * @returns The API response. Callers should reload the enrollee afterward.
     * @throws Error when `id` is blank, before any request is sent.
     */
    eraseAppRegistrationData(id: string): Observable<unknown> {
        let url: string;
        try {
            url = appRegistrationDataUrl(this.apiUrl, id);
        } catch (error) {
            return throwError(() => error);
        }
        return this._http.sendRequest('delete', url).pipe(catchError((error) => throwError(() => error)));
    }

    private accountRetention(): Observable<RetentionFlagSource> {
        if (!this.accountLookup$) {
            const clientId = getBusinessUserClientId();
            if (!clientId) {
                this.accountLookup$ = of({ loaded: false });
            } else {
                this.accountLookup$ = this._settings.getBillingConfig(clientId).pipe(
                    map((res) => ({
                        loaded: true,
                        stored: (res?.data as { data?: StoredRetention } | undefined)?.data ?? null,
                    })),
                    catchError(() => of<RetentionFlagSource>({ loaded: false })),
                    shareReplay({ bufferSize: 1, refCount: false })
                );
            }
        }
        return this.accountLookup$;
    }

    /**
     * Reads `Project.dataRetention` without a product-type filter, so a SmartEnroll
     * or Human Auth project both resolve. Cached by id.
     */
    private projectRetention(projectId: string): Observable<RetentionFlagSource> {
        const cached = this.projectLookups.get(projectId);
        if (cached) return cached;

        const request$ = this._http
            .sendRequest('get', `${this.apiUrl}/v2/projects/${encodeURIComponent(projectId)}`, {
                select: 'dataRetention',
            })
            .pipe(
                map((res) => readProjectRetention(res)),
                catchError(() => of<RetentionFlagSource>({ loaded: false })),
                shareReplay({ bufferSize: 1, refCount: false })
            );
        this.projectLookups.set(projectId, request$);
        return request$;
    }
}

function readProjectRetention(res: unknown): RetentionFlagSource {
    const root = res as { data?: unknown } | null;
    const data = root && typeof root === 'object' && 'data' in root ? root.data : null;
    if (!data || typeof data !== 'object') return { loaded: false };
    const record = data as { dataRetention?: StoredRetention | null };
    return { loaded: true, stored: record.dataRetention ?? null };
}
