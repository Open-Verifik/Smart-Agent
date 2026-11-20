import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, map, of } from 'rxjs';

import {
    DispatchBatchResult,
    DispatchRecipientInput,
    EngineProjectOption,
    MintedSmartLinkSession,
    SmartLinkAnalytics,
    SmartLinkBranding,
    SmartLinkCompletionMode,
    SmartLinkDefaultMode,
    SmartLinkProject,
    SmartLinkProjectFlow,
    SmartLinkSessionRecord,
    SmartLinkVerifyStyle,
} from './smart-links.types';

export const SMART_LINK_STYLE_DEFAULTS: Record<SmartLinkVerifyStyle, SmartLinkBranding> = {
    a: {
        buttonColor: '#9fe870',
        buttonTextColor: '#163300',
        titleColor: '#0e0f0c',
        textColor: '#454745',
        backgroundColor: '#e8ebe6',
        imageBackgroundColor: '#e8ebe6',
    },
    b: {
        buttonColor: '#000000',
        buttonTextColor: '#ffffff',
        titleColor: '#000000',
        textColor: '#444444',
        backgroundColor: '#e5e5e5',
        imageBackgroundColor: '#e5e5e5',
    },
    c: {
        buttonColor: '#0d111b',
        buttonTextColor: '#ffffff',
        titleColor: '#1e1e1e',
        textColor: '#666666',
        backgroundColor: '#ffffff',
        imageBackgroundColor: '#ffffff',
    },
    d: {
        buttonColor: '#1c6cff',
        buttonTextColor: '#ffffff',
        titleColor: '#ffffff',
        textColor: '#ccced0',
        backgroundColor: '#000814',
        imageBackgroundColor: '#000814',
    },
    e: {
        buttonColor: '#151581',
        buttonTextColor: '#ffffff',
        titleColor: '#151581',
        textColor: '#292824',
        backgroundColor: '#f6f6fa',
        imageBackgroundColor: '#f6f6fa',
    },
    f: {
        buttonColor: '#adff02',
        buttonTextColor: '#000000',
        titleColor: '#000000',
        textColor: '#6e6e6e',
        backgroundColor: '#f2f2f2',
        imageBackgroundColor: '#f2f2f2',
    },
};

@Injectable({ providedIn: 'root' })
export class SmartLinksService {
    private _http = inject(HttpClient);

    get apiUrl(): string {
        return (environment.apiUrl || '').replace(/\/+$/, '');
    }

    get accessBaseUrl(): string {
        return (environment.kycBaseUrl || 'https://access.verifik.co').replace(/\/+$/, '');
    }

    private get authHeaders(): Record<string, string> {
        const token = typeof localStorage !== 'undefined' ? localStorage.getItem('accessToken') : null;
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    extractSmartLinkFlow(project: SmartLinkProject | null | undefined): SmartLinkProjectFlow | null {
        const flows = project?.projectFlows || [];
        return flows.find((f) => f.type === 'smartlink') ?? null;
    }

    buildPublicLinkUrl(project: SmartLinkProject): string {
        const flow = this.extractSmartLinkFlow(project);
        const handle = (flow?.slug || project._id || '').trim();
        return handle ? `${this.accessBaseUrl}/l/${encodeURIComponent(handle)}` : '';
    }

    createDefaultDraft(): SmartLinkProject {
        return {
            name: '',
            target: 'personal',
            status: 'active',
            version: 3,
            contactEmail: 'compliance@company.com',
            defaultLanguage: 'en',
            privacyUrl: 'https://company.com/privacy',
            termsAndConditionsUrl: 'https://company.com/terms',
            allowedCountries: ['All'],
            dataProtection: {
                name: 'Compliance Team',
                email: 'privacy@company.com',
                address: '100 Main Street',
                address2: '',
                city: 'Miami',
                country: 'United States',
                postalCode: '33101',
            },
            branding: {
                logo: '',
                image: '',
                ...SMART_LINK_STYLE_DEFAULTS.a,
            },
            projectFlows: [
                {
                    type: 'smartlink',
                    target: 'personal',
                    status: 'active',
                    version: 3,
                    slug: '',
                    routing: {
                        supportedModes: ['personal', 'business'],
                        defaultMode: 'prompt',
                        linkedProjects: {
                            smartEnrollProject: null,
                            smartBusinessProject: null,
                            humanAuthnProject: null,
                            smartAccessProject: null,
                        },
                        autoDetectExisting: true,
                        allowPasskeys: true,
                        stepUpPolicy: {
                            enabled: false,
                            reverifyFaceAfterDays: 90,
                            requireFreshDocOnExpiry: true,
                            kybRecertifyAfterDays: 365,
                        },
                    },
                    completion: {
                        mode: 'receipt',
                        redirectUrl: '',
                        allowedPostMessageOrigins: [],
                        receiptMessage: 'Your identity verification is complete. You may safely return to your chat or assistant.',
                        allowPdfDownload: true,
                    },
                    security: {
                        allowedCountries: ['All'],
                        defaultTokenTtlMinutes: 60,
                        defaultMaxUses: 1,
                        requireSignedSession: false,
                    },
                    dispatch: {
                        channels: ['email', 'whatsapp', 'sms'],
                        customSenderName: '',
                    },
                    integrations: {
                        redirectUrl: '',
                        webhook: null,
                    },
                    onboardingSettings: {
                        enrollmentClient: 'v2',
                        verifyStyle: 'a',
                        flowOrder: 'contact_first',
                    },
                },
            ],
        };
    }

    listSmartLinkProjects(): Observable<SmartLinkProject[]> {
        return this._http
            .get<{ data?: SmartLinkProject[] | { docs?: SmartLinkProject[] } }>(`${this.apiUrl}/v3/projects`, {
                params: {
                    populates: 'projectFlows',
                    projectFlowType: 'smartlink',
                    sort: '-updatedAt',
                },
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => {
                    const payload = res?.data;
                    const rows = Array.isArray(payload) ? payload : payload?.docs ?? [];
                    return rows.filter((p) => (p.projectFlows || []).some((f) => f.type === 'smartlink'));
                })
            );
    }

    getSmartLinkProject(id: string): Observable<SmartLinkProject | null> {
        return this._http
            .get<{ data?: SmartLinkProject }>(`${this.apiUrl}/v3/projects/${id}`, {
                params: {
                    populates: 'projectFlows',
                    projectFlowType: 'smartlink',
                },
                headers: this.authHeaders,
            })
            .pipe(map((res) => res?.data ?? null));
    }

    createSmartLinkProject(payload: SmartLinkProject): Observable<SmartLinkProject> {
        const flow = this.extractSmartLinkFlow(payload);
        const body = {
            ...payload,
            target: 'personal',
            projectFlowType: 'smartlink',
            projectFlow: flow,
        };
        return this._http
            .post<{ data: SmartLinkProject }>(`${this.apiUrl}/v3/projects`, body, { headers: this.authHeaders })
            .pipe(map((res) => res.data));
    }

    updateSmartLinkProject(id: string, payload: SmartLinkProject): Observable<SmartLinkProject> {
        const flow = this.extractSmartLinkFlow(payload);
        const body = {
            ...payload,
            target: 'personal',
            projectFlowType: 'smartlink',
            projectFlow: flow,
        };
        return this._http
            .put<{ data: SmartLinkProject }>(`${this.apiUrl}/v3/projects/${id}`, body, { headers: this.authHeaders })
            .pipe(map((res) => res.data));
    }

    listCandidateEngineProjects(): Observable<Record<EngineProjectOption['category'], EngineProjectOption[]>> {
        return this._http
            .get<{ data?: any[] | { docs?: any[] } }>(`${this.apiUrl}/v3/projects`, {
                params: { populates: 'projectFlows', sort: '-updatedAt', perPage: '100' },
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => {
                    const raw = res?.data;
                    const rows = Array.isArray(raw) ? raw : raw?.docs ?? [];
                    const grouped: Record<EngineProjectOption['category'], EngineProjectOption[]> = {
                        smartEnroll: [],
                        smartBusiness: [],
                        humanAuthn: [],
                        smartAccess: [],
                    };

                    for (const proj of rows) {
                        const flows: any[] = proj.projectFlows || [];
                        if (flows.some((f) => f.type === 'smartlink')) continue;
                        if (flows.some((f) => f.type === 'humanAuthn') || proj.target === 'humanAuthn') {
                            grouped.humanAuthn.push({
                                _id: proj._id,
                                name: proj.name,
                                status: proj.status,
                                target: proj.target,
                                category: 'humanAuthn',
                            });
                        } else if (flows.some((f) => f.type === 'login')) {
                            grouped.smartAccess.push({
                                _id: proj._id,
                                name: proj.name,
                                status: proj.status,
                                target: proj.target,
                                category: 'smartAccess',
                            });
                        } else if (
                            flows.some((f) => f.type === 'onboarding' && f.target === 'business') ||
                            proj.target === 'business'
                        ) {
                            grouped.smartBusiness.push({
                                _id: proj._id,
                                name: proj.name,
                                status: proj.status,
                                target: proj.target,
                                category: 'smartBusiness',
                            });
                        } else if (flows.some((f) => f.type === 'onboarding')) {
                            grouped.smartEnroll.push({
                                _id: proj._id,
                                name: proj.name,
                                status: proj.status,
                                target: proj.target,
                                category: 'smartEnroll',
                            });
                        }
                    }

                    return grouped;
                }),
                catchError(() =>
                    of({
                        smartEnroll: [],
                        smartBusiness: [],
                        humanAuthn: [],
                        smartAccess: [],
                    })
                )
            );
    }

    createSession(
        projectId: string,
        payload: {
            requestedMode?: SmartLinkDefaultMode;
            completionMode?: SmartLinkCompletionMode;
            redirectUrlOverride?: string;
            callbackWebhookUrl?: string;
            externalRefId?: string;
            expiresInMinutes?: number;
            maxUses?: number;
            createdByChannel?: 'portal' | 'api' | 'mcp' | 'x402' | 'csv_campaign';
            prefill?: {
                email?: string;
                phone?: string;
                countryCode?: string;
                taxId?: string;
                fullName?: string;
            };
        }
    ): Observable<MintedSmartLinkSession> {
        return this._http
            .post<{ data: MintedSmartLinkSession }>(`${this.apiUrl}/v3/smart-links/${projectId}/sessions`, payload, {
                headers: this.authHeaders,
            })
            .pipe(map((res) => res.data));
    }

    listSessions(projectId: string, page = 1, limit = 25): Observable<{ docs: SmartLinkSessionRecord[]; total: number }> {
        return this._http.get<{ docs: SmartLinkSessionRecord[]; total: number }>(
            `${this.apiUrl}/v3/smart-links/${projectId}/sessions`,
            {
                params: { page: String(page), limit: String(limit) },
                headers: this.authHeaders,
            }
        );
    }

    revokeSession(sessionId: string): Observable<SmartLinkSessionRecord> {
        return this._http
            .post<{ data: SmartLinkSessionRecord }>(
                `${this.apiUrl}/v3/smart-links/sessions/${sessionId}/revoke`,
                {},
                { headers: this.authHeaders }
            )
            .pipe(map((res) => res.data));
    }

    dispatchBatch(
        projectId: string,
        payload: {
            campaignName?: string;
            completionMode?: SmartLinkCompletionMode;
            recipients: DispatchRecipientInput[];
        }
    ): Observable<DispatchBatchResult> {
        return this._http
            .post<{ data: DispatchBatchResult }>(`${this.apiUrl}/v3/smart-links/${projectId}/dispatch`, payload, {
                headers: this.authHeaders,
            })
            .pipe(map((res) => res.data));
    }

    getAnalytics(projectId: string): Observable<SmartLinkAnalytics> {
        return this._http
            .get<{ data: SmartLinkAnalytics }>(`${this.apiUrl}/v3/smart-links/${projectId}/analytics`, {
                headers: this.authHeaders,
            })
            .pipe(map((res) => res.data));
    }

    parseDispatchCsv(csvText: string, defaultChannel: 'email' | 'sms' | 'whatsapp' = 'email'): DispatchRecipientInput[] {
        const lines = String(csvText || '')
            .split(/\r?\n/)
            .map((l) => l.trim())
            .filter(Boolean);

        if (!lines.length) return [];

        const firstCols = lines[0].split(',').map((c) => c.trim().toLowerCase());
        const hasHeader = firstCols.some((c) => ['email', 'phone', 'name', 'channel', 'externalrefid'].includes(c));
        const headers = hasHeader ? firstCols : ['email', 'phone', 'countrycode', 'name', 'externalrefid'];
        const dataLines = hasHeader ? lines.slice(1) : lines;

        return dataLines
            .map((line): DispatchRecipientInput | null => {
                const cols = line.split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));
                const row: Record<string, string> = {};
                headers.forEach((h, i) => {
                    row[h] = cols[i] || '';
                });

                const rawEmail = row['email'] || '';
                const email = rawEmail.includes('@') ? rawEmail : '';
                const phone = row['phone'] || '';
                const ch = (row['channel'] || (email ? 'email' : phone ? defaultChannel : defaultChannel)).toLowerCase();
                const channel: 'email' | 'sms' | 'whatsapp' =
                    ch === 'sms' || ch === 'whatsapp' ? ch : 'email';

                if ((channel === 'email' && !email) || (channel !== 'email' && !phone)) {
                    return null;
                }

                return {
                    channel,
                    email: email || undefined,
                    phone: phone || undefined,
                    countryCode: row['countrycode'] || undefined,
                    name: row['name'] || row['fullname'] || undefined,
                    externalRefId: row['externalrefid'] || undefined,
                };
            })
            .filter((item): item is DispatchRecipientInput => item !== null);
    }

    buildAiPromptKit(project: SmartLinkProject): string {
        const projectId = project._id || '<SMARTLINK_PROJECT_ID>';
        const publicUrl = this.buildPublicLinkUrl(project) || 'https://access.verifik.co/l/<SLUG>';
        return [
            `Integrate Verifik SmartLink ("${project.name || 'Verification Hub'}") into my application:`,
            `1. Public static entry URL: ${publicUrl}`,
            `2. For dynamic signed sessions (prefill / WhatsApp / AI chat):`,
            `   POST ${this.apiUrl || 'https://api.verifik.co'}/v3/smart-links/${projectId}/sessions`,
            `   Header: Authorization: Bearer <VERIFIK_JWT>`,
            `   Body: { "requestedMode": "prompt", "completionMode": "receipt", "externalRefId": "<USER_OR_ORDER_ID>", "prefill": { "email": "..." } }`,
            `   Response returns { data: { sessionId, shortCode, url, qrDataUrl } }. Send data.url to the user.`,
            `3. When complete:`,
            `   - Redirect mode appends ?sessionCode=...&shortCode=... -> call POST /v3/smart-links/sessions/exchange { sessionCode } from your backend to claim the atomic verified proof.`,
            `   - Receipt mode shows a Return-to-Chat screen and triggers your webhook/poll GET /v3/smart-links/sessions/:sessionId.`,
            `   - Never expose VERIFIK_JWT in browser code; perform /sessions and /sessions/exchange on your backend or MCP server.`,
        ].join('\n');
    }

    buildMcpSnippet(project: SmartLinkProject): string {
        return JSON.stringify(
            {
                tool: 'smart_link_create_session',
                arguments: {
                    projectId: project._id || '<SMARTLINK_PROJECT_ID>',
                    requestedMode: 'prompt',
                    completionMode: this.extractSmartLinkFlow(project)?.completion?.mode || 'receipt',
                    externalRefId: 'order-12345',
                    createdByChannel: 'mcp',
                    prefill: {
                        email: 'user@example.com',
                    },
                },
            },
            null,
            2
        );
    }

    buildEmbedSnippet(project: SmartLinkProject): string {
        const publicUrl = this.buildPublicLinkUrl(project) || 'https://access.verifik.co/l/<SLUG>';
        return [
            `<!-- Open Verifik SmartLink in an iframe/popup modal and verify postMessage completion -->`,
            `<script>`,
            `  function openVerification(signedUrl) {`,
            `    const url = signedUrl || '${publicUrl}';`,
            `    window.open(url, 'verifikSmartLink', 'width=500,height=760');`,
            `  }`,
            `  window.addEventListener('message', async (event) => {`,
            `    if (event.origin !== '${this.accessBaseUrl}') return;`,
            `    if (event.data?.type === 'verifik:smartlink:completed') {`,
            `      // Send event.data.sessionCode to your backend to call POST /v3/smart-links/sessions/exchange`,
            `      console.log('Verified sessionCode:', event.data.sessionCode);`,
            `    }`,
            `  });`,
            `</script>`,
        ].join('\n');
    }

    buildCurlSnippet(project: SmartLinkProject): string {
        const projectId = project._id || '<SMARTLINK_PROJECT_ID>';
        const base = this.apiUrl || 'https://api.verifik.co';
        return [
            `# 1) Mint signed SmartLink session`,
            `curl -X POST "${base}/v3/smart-links/${projectId}/sessions" \\`,
            `  -H "Authorization: Bearer $VERIFIK_JWT" \\`,
            `  -H "Content-Type: application/json" \\`,
            `  -d '{"requestedMode":"prompt","completionMode":"redirect","externalRefId":"order-123"}'`,
            ``,
            `# 2) Atomic server-side exchange after redirect/postMessage/receipt`,
            `curl -X POST "${base}/v3/smart-links/sessions/exchange" \\`,
            `  -H "Authorization: Bearer $VERIFIK_JWT" \\`,
            `  -H "Content-Type: application/json" \\`,
            `  -d '{"sessionCode":"slc_..."}'`,
        ].join('\n');
    }
}
