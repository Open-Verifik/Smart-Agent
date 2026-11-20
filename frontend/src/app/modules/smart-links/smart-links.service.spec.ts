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
        expect(prompt).toContain('/l/agent-onboard');
        expect(mcp).toContain('"smart_link_create_session"');
        expect(mcp).toContain('proj_xyz_123');
        expect(embed).toContain('verifik:smartlink:completed');
        expect(curl).toContain('/v3/smart-links/sessions/exchange');
    });

    it('calls /v3/smart-links/:id/sessions when minting a session', () => {
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
                    completionMode: 'receipt',
                },
            })
        );

        let shortCode = '';
        service.createSession('proj_1', { requestedMode: 'personal' }).subscribe((res) => {
            shortCode = res.shortCode;
        });

        expect(httpMock.post).toHaveBeenCalledTimes(1);
        expect(httpMock.post.mock.calls[0][0]).toMatch(/\/v3\/smart-links\/proj_1\/sessions$/);
        expect(shortCode).toBe('AbC1234567');
    });
});
