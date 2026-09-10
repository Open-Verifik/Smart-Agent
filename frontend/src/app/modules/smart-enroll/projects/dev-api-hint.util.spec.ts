import { describe, expect, it } from 'vitest';
import { buildDevApiHintBody, type DevApiHintI18n } from './dev-api-hint.util';

const i18n: DevApiHintI18n = {
    headers: 'Headers:',
    populatesExplainer: 'Query params:',
    noDirectCompare: 'No GET-by-id for FaceVerification',
    compareFallback: 'Load it nested:',
    emptyList: 'No records',
    noId: 'No id',
    webhookNote: 'List webhook events',
    resumeNote: 'Mint a continuation URL; do not POST /app-registrations again.',
};

const opts = {
    recordId: '6a98727a47eb5690a7f0b68f',
    project: { _id: '6266193db77ccc8111730c90' },
    apiBase: 'https://api.verifik.co',
    populates: ['project', 'projectFlow'],
    i18n,
    moreUrlsLabel: (count: number) => `+ ${count} more`,
};

describe('buildDevApiHintBody', () => {
    it('includes GET populates and POST resend-link on the AppRegistration card', () => {
        const body = buildDevApiHintBody('record', {}, opts);

        expect(body).toContain('GET https://api.verifik.co/v2/app-registrations/6a98727a47eb5690a7f0b68f');
        expect(body).toContain('populates[]=project');
        expect(body).toContain('populates[]=projectFlow');
        expect(body).toContain(i18n.resumeNote);
        expect(body).toContain(
            'POST https://api.verifik.co/v2/app-registrations/6a98727a47eb5690a7f0b68f/resend-link',
        );
        expect(body).toContain('{ "sendEmail": false }');
        expect(body).toContain('Authorization: Bearer <accessToken>');
    });
});
