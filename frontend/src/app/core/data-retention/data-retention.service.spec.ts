import { describe, expect, it } from 'vitest';
import { defaultRetentionPolicy, syncGlobalToGranular, buildClientRetentionSavePayload } from './retention.util';

/**
 * Payload contract for DataRetentionService.saveClientRetention.
 * The service posts this object to POST /v2/client-settings and does not copy ClientSettings.
 */
describe('DataRetentionService save payload', () => {
    it('sends only client and data, with enforced types and a 24-72 hour hold', () => {
        const policy = syncGlobalToGranular(defaultRetentionPolicy(), 'store');
        policy.webhookHoldHours = 12;
        policy.allowManualDelete = false;
        policy.types.documentImages = { mode: 'store', retentionHours: 720 };
        policy.types.faceImages = { mode: 'none', retentionHours: 48 };
        policy.types.ocrExtraction = { mode: 'none', retentionHours: 10 };
        policy.types.documentLiveness = { mode: 'none', retentionHours: 12 };
        (policy.types as Record<string, unknown>)['livenessResults'] = { mode: 'none' };
        (policy.types as Record<string, unknown>)['apiResponseLogs'] = { mode: 'store' };

        const body = buildClientRetentionSavePayload(' client-1 ', policy);

        expect(Object.keys(body).sort()).toEqual(['client', 'data']);
        expect(body.client).toBe('client-1');
        expect(body).not.toHaveProperty('invoiceSettings');
        expect(body).not.toHaveProperty('accountType');
        expect(body).not.toHaveProperty('sandboxMode');
        expect(body.data.allowManualDelete).toBe(false);
        expect(body.data.types).not.toHaveProperty('livenessResults');
        expect(body.data.types).not.toHaveProperty('apiResponseLogs');
        expect(body.data.types).not.toHaveProperty('webhookPayloads');
        expect(body.data.webhookHoldHours).toBe(24);
        expect(body.data.types.documentImages).toEqual({ mode: 'store', retentionHours: 720 });
        expect(body.data.types.faceImages).toEqual({ mode: 'none', retentionHours: null });
        expect(body.data.types.documentLiveness).toEqual({ mode: 'none', retentionHours: null });
        expect(body.data.types.ocrExtraction).toEqual({ mode: 'none', retentionHours: null });
    });

    it('refuses to build a payload without a client id', () => {
        expect(() => buildClientRetentionSavePayload('  ', defaultRetentionPolicy())).toThrow(/client id/);
    });
});
