// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';

import {
    buildSessionsCsv,
    decodeJwtClaimsSafe,
    escapeCsvCell,
    extractLinkedSelfieDataUrl,
    formatSessionDate,
    formatTimelineMetaEntries,
    interactionBadgeClass,
    interactionIcon,
    isActiveAutoRefreshState,
    isLinkedSelfieSuppressed,
    isTerminalSessionState,
    resolveSessionTargetLabel,
    resolveSessionTargetSubLabel,
    resolveTimelineSummaryDescriptor,
    sessionStatePillClass,
} from './smart-link-session.util';
import type { SmartLinkSessionDetail, SmartLinkSessionRecord } from './smart-links.types';

describe('smart-link-session.util', () => {
    it('resolves primary target label and secondary sub-label with fallback hierarchy', () => {
        const completed = {
            _id: 's1',
            shortCode: 'CODE1',
            state: 'COMPLETED',
            outcome: { identity: { fullName: 'Jane Doe', email: 'jane@acme.com', phone: '3001112233' } },
            prefill: { email: 'prefill@acme.com' },
            externalRefId: 'ref-1',
        } as unknown as SmartLinkSessionRecord;

        expect(resolveSessionTargetLabel(completed)).toBe('Jane Doe');
        expect(resolveSessionTargetSubLabel(completed)).toBe('jane@acme.com');

        const phoneOnly = {
            _id: 's2',
            shortCode: 'CODE2',
            state: 'CREATED',
            prefill: { phone: '+573001112233' },
            externalRefId: 'ref-2',
        } as unknown as SmartLinkSessionRecord;

        expect(resolveSessionTargetLabel(phoneOnly)).toBe('+573001112233');
        expect(resolveSessionTargetSubLabel(phoneOnly)).toBe('ref-2');

        const anonymous = {
            _id: 's3',
            shortCode: 'OPEN99',
            state: 'CREATED',
        } as unknown as SmartLinkSessionRecord;

        expect(resolveSessionTargetLabel(anonymous, 'Open link')).toBe('Open link');
        expect(resolveSessionTargetSubLabel(anonymous)).toBe('');
    });

    it('maps lifecycle states and interaction types to Tailwind classes and Material icons', () => {
        expect(sessionStatePillClass('COMPLETED')).toContain('emerald');
        expect(sessionStatePillClass('OPENED')).toContain('blue');
        expect(sessionStatePillClass('ROUTED')).toContain('blue');
        expect(sessionStatePillClass('FAILED')).toContain('red');
        expect(sessionStatePillClass('REVOKED')).toContain('amber');
        expect(sessionStatePillClass('EXPIRED')).toContain('amber');
        expect(sessionStatePillClass('CREATED')).toContain('stone');

        expect(interactionIcon('CREATED')).toBe('add_link');
        expect(interactionIcon('CHILD_SPAWNED')).toBe('call_split');
        expect(interactionIcon('OPENED')).toBe('visibility');
        expect(interactionIcon('OTP_SENT')).toBe('sms');
        expect(interactionIcon('OTP_VERIFIED')).toBe('mark_email_read');
        expect(interactionIcon('IN_PROGRESS')).toBe('hourglass_top');
        expect(interactionIcon('COMPLETED')).toBe('verified');
        expect(interactionIcon('TOKEN_EXCHANGED')).toBe('key');
        expect(interactionBadgeClass('COMPLETED')).toContain('emerald');
        expect(interactionBadgeClass('OTP_VERIFIED')).toContain('emerald');
        expect(interactionBadgeClass('CHILD_SPAWNED')).toContain('indigo');
        expect(interactionBadgeClass('OTP_SENT')).toContain('blue');
        expect(interactionBadgeClass('IN_PROGRESS')).toContain('blue');
        expect(interactionBadgeClass('FAILED')).toContain('red');
        expect(interactionBadgeClass('REVOKED')).toContain('amber');
    });

    it('extracts linked selfie data URLs and detects zero-retention suppression', () => {
        const rawBase64Detail = {
            _id: 'd1',
            linkedRegistration: {
                face: { base64: '/9j/4AAQSkZJRg==' },
            },
        } as unknown as SmartLinkSessionDetail;

        expect(extractLinkedSelfieDataUrl(rawBase64Detail)).toBe('data:image/jpeg;base64,/9j/4AAQSkZJRg==');
        expect(isLinkedSelfieSuppressed(rawBase64Detail)).toBe(false);

        const dataUriDetail = {
            _id: 'd2',
            linkedLogin: {
                biometricValidation: {
                    face: { base64: 'data:image/png;base64,iVBORw0KGgo=' },
                },
            },
        } as unknown as SmartLinkSessionDetail;

        expect(extractLinkedSelfieDataUrl(dataUriDetail)).toBe('data:image/png;base64,iVBORw0KGgo=');
        expect(isLinkedSelfieSuppressed(dataUriDetail)).toBe(false);

        const noStorageDetail = {
            _id: 'd3',
            linkedRegistration: {
                face: { retention: { mode: 'none' } },
            },
        } as unknown as SmartLinkSessionDetail;

        expect(extractLinkedSelfieDataUrl(noStorageDetail)).toBe('');
        expect(isLinkedSelfieSuppressed(noStorageDetail)).toBe(true);
    });

    it('formats ISO dates and safely decodes base64url JWT claims without throwing', () => {
        expect(formatSessionDate(undefined)).toBe('-');
        expect(formatSessionDate('not-a-date')).toBe('not-a-date');
        expect(formatSessionDate('2026-11-20T15:30:00.000Z')).toMatch(/Nov 20, 2026/);

        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const payloadJson = JSON.stringify({ sub: 'usr_1', name: 'José Pérez', verified: true });
        const payloadBytes = new TextEncoder().encode(payloadJson);
        let binary = '';
        payloadBytes.forEach((b) => {
            binary += String.fromCharCode(b);
        });
        const payload = btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

        const decoded = decodeJwtClaimsSafe(`${header}.${payload}.sig`);
        expect(decoded).toEqual({ sub: 'usr_1', name: 'José Pérez', verified: true });

        expect(decodeJwtClaimsSafe('')).toBeNull();
        expect(decodeJwtClaimsSafe('not.a-valid-json!')).toBeNull();
        expect(decodeJwtClaimsSafe('singlepart')).toBeNull();
    });

    it('detects active auto-refresh and terminal session states', () => {
        expect(isActiveAutoRefreshState('CREATED')).toBe(true);
        expect(isActiveAutoRefreshState('OPENED')).toBe(true);
        expect(isActiveAutoRefreshState('ROUTED')).toBe(true);
        expect(isActiveAutoRefreshState('IN_PROGRESS')).toBe(true);
        expect(isActiveAutoRefreshState('COMPLETED')).toBe(false);

        expect(isTerminalSessionState('COMPLETED')).toBe(true);
        expect(isTerminalSessionState('FAILED')).toBe(true);
        expect(isTerminalSessionState('EXPIRED')).toBe(true);
        expect(isTerminalSessionState('REVOKED')).toBe(true);
        expect(isTerminalSessionState('OPENED')).toBe(false);
    });

    it('escapes CSV formula injection prefixes (=, +, -, @) and builds filtered session CSV', () => {
        expect(escapeCsvCell('=cmd|calc')).toBe("'=cmd|calc");
        expect(escapeCsvCell('+573001234567')).toBe("'+573001234567");
        expect(escapeCsvCell('-danger')).toBe("'-danger");
        expect(escapeCsvCell('@SUM(A1)')).toBe("'@SUM(A1)");
        expect(escapeCsvCell('hello, "world"')).toBe('"hello, ""world"""');

        const sessions = [
            {
                _id: 's1',
                shortCode: 'CODE123',
                state: 'COMPLETED',
                requireDocument: true,
                createdByChannel: 'portal',
                useCount: 1,
                maxUses: 1,
                externalRefId: '=1+1',
                createdAt: '2026-11-20T10:00:00.000Z',
                completedAt: '2026-11-20T10:05:00.000Z',
                notes: '@admin check, urgent',
                outcome: {
                    identity: {
                        fullName: 'Alice Smith',
                        email: 'alice@example.com',
                        phone: '+573001112233',
                    },
                },
            },
        ] as unknown as SmartLinkSessionRecord[];

        const csv = buildSessionsCsv(sessions, 'Open link');
        const [header, row] = csv.split('\r\n');
        expect(header).toBe(
            'shortCode,state,target,email,phone,requireDocument,channel,uses,externalRefId,createdAt,completedAt,notes'
        );
        expect(row).toContain('CODE123,COMPLETED,Alice Smith,alice@example.com,\'+573001112233,true,portal,1/1,\'=1+1,2026-11-20T10:00:00.000Z,2026-11-20T10:05:00.000Z,"\'@admin check, urgent"');
    });

    it('formats interaction timeline metadata and summaries for human readability while hiding internal IDs', () => {
        const routed = formatTimelineMetaEntries({
            type: 'ROUTED',
            at: '2026-11-20T23:21:24.000Z',
            actor: 'system',
            summary: 'Routed to enroll',
            meta: {
                resolvedMode: 'personal',
                verificationAction: 'enroll',
                hasExistingAccount: false,
                requireDocument: false,
                targetProjectId: '6266193db77ccc8111730c90',
                targetRoute: '/verify/6266193db77ccc8111730c90',
            },
        });

        expect(routed.map((m) => m.key)).toEqual([
            'resolvedMode',
            'verificationAction',
            'hasExistingAccount',
            'requireDocument',
        ]);
        expect(routed[0].labelKey).toBe('smartLinks.timeline.metaLabels.resolvedMode');
        expect(routed[0].valueKey).toBe('smartLinks.timeline.metaValues.personal');
        expect(routed[2].valueKey).toBe('smartLinks.timeline.metaValues.false');

        const summary = resolveTimelineSummaryDescriptor({
            type: 'ROUTED',
            at: '2026-11-20T23:21:24.000Z',
            actor: 'system',
            summary: 'Routed to enroll',
            meta: { resolvedMode: 'personal', verificationAction: 'enroll' },
        });
        expect(summary.key).toBe('smartLinks.timeline.summaries.ROUTED_enroll');

        const reissued = formatTimelineMetaEntries({
            type: 'REISSUED',
            at: '2026-11-20T23:21:21.000Z',
            actor: 'portal',
            summary: 'Reissued signed verification link & QR',
            meta: { expiresAt: '2026-11-21T15:21:21.656Z' },
        });
        expect(reissued).toHaveLength(1);
        expect(reissued[0].rawValue).toMatch(/Nov 21, 2026/);

        const opened = resolveTimelineSummaryDescriptor({
            type: 'OPENED',
            at: '2026-11-20T23:21:23.000Z',
            actor: 'end_user',
            summary: 'Link opened (#1)',
            meta: { openCount: 1, via: 'signed_link' },
        });
        expect(opened).toEqual({
            key: 'smartLinks.timeline.summaries.OPENED_count',
            params: { count: 1 },
            fallback: 'Link opened (#1)',
        });
        expect(
            formatTimelineMetaEntries({
                type: 'OPENED',
                at: '2026-11-20T23:21:23.000Z',
                meta: { openCount: 1, via: 'signed_link' },
            }).map((m) => m.key)
        ).toEqual(['via']);
    });
});
