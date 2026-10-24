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
        policy.types.documentImages = { mode: 'store', retentionHours: 720 };
        policy.types.faceImages = { mode: 'ephemeral', retentionHours: 48 };
        policy.types.ocrExtraction = { mode: 'none', retentionHours: 10 };

        const body = buildClientRetentionSavePayload(' client-1 ', policy);

        expect(Object.keys(body).sort()).toEqual(['client', 'data']);
        expect(body.client).toBe('client-1');
        expect(body).not.toHaveProperty('invoiceSettings');
        expect(body).not.toHaveProperty('accountType');
        expect(body).not.toHaveProperty('sandboxMode');
        expect(body.data).not.toHaveProperty('allowManualDelete');
        expect(body.data.types).not.toHaveProperty('documentLiveness');
        expect(body.data.types).not.toHaveProperty('livenessResults');
        expect(body.data.types).not.toHaveProperty('webhookPayloads');
        expect(body.data.types).not.toHaveProperty('apiResponseLogs');
        expect(body.data.webhookHoldHours).toBe(24);
        expect(body.data.types.documentImages).toEqual({ mode: 'store', retentionHours: 720 });
        expect(body.data.types.faceImages).toEqual({ mode: 'ephemeral', retentionHours: null });
        expect(body.data.types.ocrExtraction).toEqual({ mode: 'none', retentionHours: null });
    });

    it('refuses to build a payload without a client id', () => {
        expect(() => buildClientRetentionSavePayload('  ', defaultRetentionPolicy())).toThrow(/client id/);
    });
});
