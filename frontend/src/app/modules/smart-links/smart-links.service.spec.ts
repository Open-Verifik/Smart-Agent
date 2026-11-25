// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { of } from 'rxjs';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { SmartLinksService } from './smart-links.service';

beforeAll(() => {
    try {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    } catch {
        // already initialized
    }
});

describe('SmartLinksService', () => {
    const createService = () => {
        const httpMock = {
            get: vi.fn(),
            post: vi.fn(),
            put: vi.fn(),
            patch: vi.fn(),
            delete: vi.fn(),
        };
        TestBed.configureTestingModule({
            providers: [
                SmartLinksService,
                { provide: HttpClient, useValue: httpMock },
            ],
        });
        return {
            service: TestBed.inject(SmartLinksService),
            httpMock,
        };
    };

    it('builds v3 SmartLink creation payload with projectFlowType=smartlink', () => {
        const { service, httpMock } = createService();
        const draft = service.createDefaultDraft();
        draft.name = 'Global SmartLink Hub';
        draft.projectFlows![0].slug = 'global-hub';

        httpMock.post.mockReturnValue(of({ data: { ...draft, _id: 'sl_proj_1' } }));

        let resultId = '';
        service.createSmartLinkProject(draft).subscribe((res) => {
            resultId = res._id || '';
        });

        expect(httpMock.post).toHaveBeenCalledTimes(1);
        const [url, body] = httpMock.post.mock.calls[0];
        expect(url).toMatch(/\/v3\/projects$/);
        expect(body.projectFlowType).toBe('smartlink');
        expect(body.target).toBe('personal');
        expect(body.projectFlow.type).toBe('smartlink');
        expect(body.projectFlow.slug).toBe('global-hub');
        expect(resultId).toBe('sl_proj_1');
    });

    it('parses CSV recipient batches across Email, WhatsApp, and SMS rows', () => {
        const { service } = createService();
        const csv = [
            'email,phone,countryCode,name,externalRefId',
            'alice@example.com,,,Alice,ord-1',
            ',3001234567,+57,Carlos,ord-2',
            'bad-empty-row,,,,',
        ].join('\n');

        const parsed = service.parseDispatchCsv(csv, 'whatsapp');
        expect(parsed).toHaveLength(2);
        expect(parsed[0]).toEqual({
            channel: 'email',
            email: 'alice@example.com',
            phone: undefined,
            countryCode: undefined,
            name: 'Alice',
            externalRefId: 'ord-1',
        });
        expect(parsed[1]).toEqual({
            channel: 'whatsapp',
            email: undefined,
            phone: '3001234567',
            countryCode: '+57',
            name: 'Carlos',
            externalRefId: 'ord-2',
        });
    });

    it('generates contextual AI prompt, MCP, embed, and cURL snippets for a SmartLink project', () => {
        const { service } = createService();
        const draft = service.createDefaultDraft();
        draft._id = 'proj_xyz_123';
        draft.name = 'Agent Onboarding Link';
        draft.projectFlows![0].slug = 'agent-onboard';

        const prompt = service.buildAiPromptKit(draft);
        const mcp = service.buildMcpSnippet(draft);
        const embed = service.buildEmbedSnippet(draft);
        const curl = service.buildCurlSnippet(draft);

        expect(prompt).toContain('/v3/smart-links/proj_xyz_123/sessions');
        expect(prompt).toContain('requireDocument');
        expect(mcp).toContain('"smart_link_create_session"');
        expect(mcp).toContain('"requireDocument": false');
        expect(mcp).toContain('proj_xyz_123');
        expect(embed).toContain('verifik:smartlink:completed');
        expect(curl).toContain('/v3/smart-links/sessions/exchange');
        expect(curl).toContain('"requireDocument":false');
    });

    it('calls /v3/smart-links/:id/sessions with email and per-link requireDocument when minting a session', () => {
        const { service, httpMock } = createService();
        httpMock.post.mockReturnValue(
            of({
                data: {
                    sessionId: 'sess_1',
                    shortCode: 'AbC1234567',
                    url: 'https://access.app/l/AbC1234567?t=sl_tok',
                    qrDataUrl: 'data:image/png;base64,AAA',
                    expiresAt: '2026-12-01T00:00:00Z',
                    state: 'CREATED',
                    requestedMode: 'personal',
                    requireDocument: true,
                    completionMode: 'receipt',
                },
            })
        );

        let shortCode = '';
        let requireDocument = false;
        service
            .createSession('proj_1', {
                email: 'john.doe@example.com',
                requireDocument: true,
            })
            .subscribe((res) => {
                shortCode = res.shortCode;
                requireDocument = Boolean(res.requireDocument);
            });

        expect(httpMock.post).toHaveBeenCalledTimes(1);
        expect(httpMock.post.mock.calls[0][0]).toMatch(/\/v3\/smart-links\/proj_1\/sessions$/);
        expect(httpMock.post.mock.calls[0][1]).toMatchObject({
            email: 'john.doe@example.com',
            requireDocument: true,
        });
        expect(shortCode).toBe('AbC1234567');
        expect(requireDocument).toBe(true);
    });

    it('fetches active webhooks via GET /v2/webhooks with fail-soft fallback', () => {
        const { service, httpMock } = createService();
        httpMock.get.mockReturnValue(of({ data: [{ _id: 'wh_1', name: 'Ops Webhook' }] }));

        let hooks: { _id: string; name?: string }[] = [];
        service.listWebhooks().subscribe((res) => {
            hooks = res;
        });

        expect(httpMock.get).toHaveBeenCalledTimes(1);
        expect(httpMock.get.mock.calls[0][0]).toMatch(/\/v2\/webhooks$/);
        expect(hooks).toEqual([{ _id: 'wh_1', name: 'Ops Webhook' }]);
    });

    it('handles non-array projectFlows returned by POST /v3/projects without throwing', () => {
        const { service } = createService();
        const postResponse = {
            _id: 'proj_created_1',
            name: 'My Hub',
            projectFlows: '69c999000000000000000001',
        } as any;

        expect(() => service.extractSmartLinkFlow(postResponse)).not.toThrow();
        expect(service.extractSmartLinkFlow(postResponse)).toBeNull();
        expect(service.extractSmartLinkFlowId(postResponse)).toBe('69c999000000000000000001');

        const singleObjResponse = {
            _id: 'proj_created_2',
            projectFlows: { _id: 'flow_obj_1', type: 'smartlink', slug: 'my-hub' },
        } as any;
        expect(service.extractSmartLinkFlow(singleObjResponse)?._id).toBe('flow_obj_1');
        expect(service.extractSmartLinkFlowId(singleObjResponse)).toBe('flow_obj_1');
    });

    it('lists sessions with filters and omits "all" sentinel params', () => {
        const { service, httpMock } = createService();
        const mockResponse = {
            docs: [{ _id: 'sess_1', shortCode: 'abc123', state: 'OPENED' }],
            total: 1,
            page: 2,
            limit: 10,
            pages: 1,
        };
        httpMock.get.mockReturnValue(of(mockResponse));

        let received: any;
        service
            .listSessions('proj_1', 2, 10, {
                search: ' jane@acme.com ',
                state: 'OPENED',
                requireDocument: 'all',
                channel: 'all',
                createdFrom: '2026-11-01T00:00:00.000Z',
                createdTo: '2026-11-20T23:59:59.999Z',
                sort: '-createdAt',
            })
            .subscribe((res) => {
                received = res;
            });

        expect(httpMock.get).toHaveBeenCalledTimes(1);
        const [url, options] = httpMock.get.mock.calls[0];
        expect(url).toMatch(/\/v3\/smart-links\/proj_1\/sessions$/);
        expect(options.params).toEqual({
            page: '2',
            limit: '10',
            search: 'jane@acme.com',
            state: 'OPENED',
            createdFrom: '2026-11-01T00:00:00.000Z',
            createdTo: '2026-11-20T23:59:59.999Z',
            sort: '-createdAt',
        });
        expect(received).toEqual(mockResponse);
    });

    it('fetches session detail via GET /v3/smart-links/sessions/:sessionId and unwraps data', () => {
        const { service, httpMock } = createService();
        const detail = { _id: 'sess_42', shortCode: 'Code42', interactions: [] };
        httpMock.get.mockReturnValue(of({ data: detail }));

        let received: any;
        service.getSessionDetail('sess/42').subscribe((res) => {
            received = res;
        });

        expect(httpMock.get).toHaveBeenCalledTimes(1);
        expect(httpMock.get.mock.calls[0][0]).toMatch(/\/v3\/smart-links\/sessions\/sess%2F42$/);
        expect(received).toEqual(detail);
    });

    it('updates a session via PATCH /v3/smart-links/sessions/:sessionId and unwraps data', () => {
        const { service, httpMock } = createService();
        const updated = { _id: 'sess_42', requireDocument: true, notes: 'VIP applicant' };
        httpMock.patch.mockReturnValue(of({ data: updated }));

        let received: any;
        service
            .updateSession('sess_42', { requireDocument: true, notes: 'VIP applicant' })
            .subscribe((res) => {
                received = res;
            });

        expect(httpMock.patch).toHaveBeenCalledTimes(1);
        const [url, body] = httpMock.patch.mock.calls[0];
        expect(url).toMatch(/\/v3\/smart-links\/sessions\/sess_42$/);
        expect(body).toEqual({ requireDocument: true, notes: 'VIP applicant' });
        expect(received).toEqual(updated);
    });

    it('resends and rotates a session via POST /v3/smart-links/sessions/:sessionId/resend', () => {
        const { service, httpMock } = createService();
        const resendResult = { session: { _id: 'sess_42' }, url: 'https://access.verifik.co/l/Code42?t=new' };
        httpMock.post.mockReturnValue(of({ data: resendResult }));

        let received: any;
        service.resendSession('sess_42', { channel: 'email', email: 'john@acme.com' }).subscribe((res) => {
            received = res;
        });

        expect(httpMock.post).toHaveBeenCalledTimes(1);
        const [url, body] = httpMock.post.mock.calls[0];
        expect(url).toMatch(/\/v3\/smart-links\/sessions\/sess_42\/resend$/);
        expect(body).toEqual({ channel: 'email', email: 'john@acme.com' });
        expect(received).toEqual(resendResult);
    });

    it('deletes a single session via DELETE /v3/smart-links/sessions/:sessionId', () => {
        const { service, httpMock } = createService();
        const deletedResult = { deleted: true, sessionId: 'sess_42', shortCode: 'Code42' };
        httpMock.delete.mockReturnValue(of({ data: deletedResult }));

        let received: any;
        service.deleteSession('sess_42').subscribe((res) => {
            received = res;
        });

        expect(httpMock.delete).toHaveBeenCalledTimes(1);
        expect(httpMock.delete.mock.calls[0][0]).toMatch(/\/v3\/smart-links\/sessions\/sess_42$/);
        expect(received).toEqual(deletedResult);
    });

    it('bulk deletes and bulk revokes sessions via project bulk endpoints', () => {
        const { service, httpMock } = createService();
        httpMock.post
            .mockReturnValueOnce(of({ data: { deletedCount: 2, skippedCompleted: 1 } }))
            .mockReturnValueOnce(of({ data: { revokedCount: 2, skippedCount: 0 } }));

        let bulkDelRes: any;
        let bulkRevRes: any;

        service.bulkDeleteSessions('proj_1', ['s1', 's2', 's3']).subscribe((res) => {
            bulkDelRes = res;
        });
        service.bulkRevokeSessions('proj_1', ['s1', 's2']).subscribe((res) => {
            bulkRevRes = res;
        });

        expect(httpMock.post).toHaveBeenCalledTimes(2);
        expect(httpMock.post.mock.calls[0][0]).toMatch(/\/v3\/smart-links\/proj_1\/sessions\/bulk-delete$/);
        expect(httpMock.post.mock.calls[0][1]).toEqual({ sessionIds: ['s1', 's2', 's3'] });
        expect(bulkDelRes).toEqual({ deletedCount: 2, skippedCompleted: 1 });

        expect(httpMock.post.mock.calls[1][0]).toMatch(/\/v3\/smart-links\/proj_1\/sessions\/bulk-revoke$/);
        expect(httpMock.post.mock.calls[1][1]).toEqual({ sessionIds: ['s1', 's2'] });
        expect(bulkRevRes).toEqual({ revokedCount: 2, skippedCount: 0 });
    });

    it('deletes a SmartLink hub via DELETE /v3/projects/:id', () => {
        const { service, httpMock } = createService();
        httpMock.delete.mockReturnValue(of({ data: { _id: 'proj_1' } }));

        let result: unknown;
        service.deleteSmartLinkProject('proj_1').subscribe((res) => {
            result = res;
        });

        expect(httpMock.delete).toHaveBeenCalledTimes(1);
        expect(httpMock.delete.mock.calls[0][0]).toMatch(/\/v3\/projects\/proj_1$/);
        expect(result).toEqual({ _id: 'proj_1' });
    });

    it('parses optional requireDocument CSV column values (true/1/yes and false/0/no)', () => {
        const { service } = createService();
        const csv = [
            'email,phone,countryCode,name,externalRefId,requireDocument',
            'doc1@example.com,,,Doc True,ref-1,true',
            'doc2@example.com,,,Doc One,ref-2,1',
            ',3001234567,+57,Doc Yes,ref-3,YES',
            'nodoc@example.com,,,No Doc,ref-4,no',
            'default@example.com,,,Default Row,ref-5,',
        ].join('\n');

        const parsed = service.parseDispatchCsv(csv, 'sms');
        expect(parsed).toHaveLength(5);
        expect(parsed[0].requireDocument).toBe(true);
        expect(parsed[1].requireDocument).toBe(true);
        expect(parsed[2]).toMatchObject({
            channel: 'sms',
            phone: '3001234567',
            countryCode: '+57',
            requireDocument: true,
        });
        expect(parsed[3].requireDocument).toBe(false);
        expect(parsed[4].requireDocument).toBeUndefined();
    });

    it('forwards batch-level and row-level requireDocument in dispatchBatch payload', () => {
        const { service, httpMock } = createService();
        const mockBatch = { total: 1, sent: 1, failed: 0, results: [] };
        httpMock.post.mockReturnValue(of({ data: mockBatch }));

        let received: unknown;
        service
            .dispatchBatch('proj_99', {
                campaignName: 'Strict KYC',
                requireDocument: true,
                recipients: [
                    {
                        channel: 'email',
                        email: 'user@example.com',
                        requireDocument: true,
                    },
                ],
            })
            .subscribe((res) => {
                received = res;
            });

        expect(httpMock.post).toHaveBeenCalledTimes(1);
        const [url, body] = httpMock.post.mock.calls[0];
        expect(url).toMatch(/\/v3\/smart-links\/proj_99\/dispatch$/);
        expect(body).toEqual({
            campaignName: 'Strict KYC',
            requireDocument: true,
            recipients: [
                {
                    channel: 'email',
                    email: 'user@example.com',
                    requireDocument: true,
                },
            ],
        });
        expect(received).toEqual(mockBatch);
    });
});
