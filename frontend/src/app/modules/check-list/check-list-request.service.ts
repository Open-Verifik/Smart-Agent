import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { AuthService } from 'app/core/auth/auth.service';
import { SessionService } from 'app/core/services/session.service';
import { catchError, of, tap } from 'rxjs';
import { ApiEndpoint } from '../postman/postman.types';
import { getPostmanRequestValidationIssues } from '../postman/postman-request-validation';
import {
    buildPostmanEffectiveUrl,
    getPostmanPathParamKeysForEndpoint,
} from '../postman/postman-url.util';
import {
    ensurePostmanIncludeCostParam,
    POSTMAN_INCLUDE_COST_KEY,
    resolvePostmanIncludeCostForSend,
} from '../postman/postman-include-cost.util';
import { mergeParamsFromDocs } from '../postman/postman-docs-params.util';
import { applyPostmanSandboxParamDefaults } from '../postman/sandbox';
import { normalizePostmanSexoValue } from '../postman/postman-sexo.util';

@Injectable({ providedIn: 'root' })
export class CheckListRequestService {
    private _http = inject(HttpClient);
    private _session = inject(SessionService);
    private _auth = inject(AuthService);
    private _accountEnv = inject(AccountEnvironmentService);

    endpoint = signal<ApiEndpoint | null>(null);
    response = signal<any>(null);
    responseTime = signal<number | null>(null);
    loading = signal(false);
    error = signal<any>(null);

    prepare(endpoint: ApiEndpoint): ApiEndpoint {
        const copy: ApiEndpoint = JSON.parse(JSON.stringify(endpoint));
        copy.headers?.forEach((header) => {
            if (header.key === 'Authorization' && header.value.includes('<token>')) {
                const token = localStorage.getItem('accessToken');
                if (token) header.value = header.value.replace('<token>', token);
            }
        });
        if (this._accountEnv.showSandboxStrip()) {
            applyPostmanSandboxParamDefaults(copy);
        }
        const prepared = ensurePostmanIncludeCostParam(mergeParamsFromDocs(copy));
        this.endpoint.set(prepared);
        this.response.set(null);
        this.error.set(null);
        this.responseTime.set(null);
        return prepared;
    }

    updateParam(key: string, value: string): void {
        this.endpoint.update((current) => {
            if (!current) return current;
            const next = { ...current, params: current.params?.map((param) => ({ ...param })) };
            const row = next.params?.find((param) => param.key === key);
            if (row) row.value = value;
            if (next.body && typeof next.body === 'object' && !Array.isArray(next.body)) {
                next.body = { ...next.body, [key]: value };
            }
            return next;
        });
    }

    send(): void {
        const endpoint = this.endpoint();
        if (!endpoint) return;

        const postDraft =
            endpoint.method === 'GET' || endpoint.method === 'DELETE'
                ? undefined
                : JSON.stringify(
                      endpoint.body && typeof endpoint.body === 'object' ? endpoint.body : {},
                      null,
                      2
                  );
        if (getPostmanRequestValidationIssues(endpoint, postDraft).length > 0) return;

        this.loading.set(true);
        this.response.set(null);
        this.error.set(null);

        const effectiveUrl = buildPostmanEffectiveUrl(endpoint);
        const pathParamKeys = getPostmanPathParamKeysForEndpoint(endpoint);
        const options: { headers: Record<string, string>; params: Record<string, string> } = {
            headers: {},
            params: {},
        };

        endpoint.headers?.forEach((header) => {
            let value = header.value;
            if (value?.includes('<token>')) {
                value = value.replace('<token>', localStorage.getItem('accessToken') || '');
            }
            options.headers[header.key] = value;
        });

        endpoint.params?.forEach((param) => {
            if (!param.value || pathParamKeys?.includes(param.key) || param.key === POSTMAN_INCLUDE_COST_KEY) {
                return;
            }
            options.params[param.key] =
                param.key === 'sexo' ? normalizePostmanSexoValue(param.value) : param.value;
        });

        let body: Record<string, unknown> | null = null;
        if (endpoint.method !== 'GET' && endpoint.method !== 'DELETE') {
            body =
                endpoint.body && typeof endpoint.body === 'object' ? { ...endpoint.body } : {};
            if (body && typeof body['sexo'] === 'string') {
                body['sexo'] = normalizePostmanSexoValue(String(body['sexo']));
            }
        }

        const costSend = resolvePostmanIncludeCostForSend(endpoint, endpoint.method);
        if (costSend.query) options.params.includeCost = costSend.query;
        if (costSend.body && body) body = { ...body, includeCost: true };

        const started = Date.now();
        this._http
            .request(endpoint.method, effectiveUrl, { ...options, body, observe: 'response' })
            .pipe(
                tap((res) => {
                    const proof = res.headers?.get('x-validation-proof');
                    if (res.body && typeof res.body === 'object') {
                        (res.body as Record<string, unknown>)['_proof'] =
                            proof || (res.body as Record<string, unknown>)['_proof'];
                    }
                    this.loading.set(false);
                    this.response.set(res);
                    this.responseTime.set(Date.now() - started);
                    this._refreshCredits(res.status);
                }),
                catchError((err) => {
                    this.loading.set(false);
                    this.error.set(err);
                    this._refreshCredits(err?.status);
                    return of(null);
                })
            )
            .subscribe();
    }

    clear(): void {
        this.endpoint.set(null);
        this.response.set(null);
        this.error.set(null);
        this.responseTime.set(null);
        this.loading.set(false);
    }

    private _refreshCredits(status: number | undefined): void {
        if (!status || status <= 0 || !this._session.isTokenValid()) return;
        this._auth.refreshSession().subscribe({ error: () => undefined });
    }
}
