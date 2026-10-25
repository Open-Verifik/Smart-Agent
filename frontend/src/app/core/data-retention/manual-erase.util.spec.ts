import { describe, expect, it } from 'vitest';
import {
    appRegistrationDataUrl,
    documentValidationFilesUrl,
    isRetentionOverride,
    manualEraseErrorKey,
    projectIdFromRef,
    resolveAllowManualDeleteFlag,
} from './manual-erase.util';

describe('manual erase gating', () => {
    const accountOff = { loaded: true, stored: { mode: 'store', allowManualDelete: false } };
    const accountOn = { loaded: true, stored: { mode: 'store', allowManualDelete: true } };
    const noProject = { loaded: true, stored: null };

    it('uses a project override ahead of the account setting', () => {
        expect(
            resolveAllowManualDeleteFlag(
                { loaded: true, stored: { mode: 'none', allowManualDelete: false } },
                accountOn
            )
        ).toBe(false);
        expect(
            resolveAllowManualDeleteFlag(
                { loaded: true, stored: { mode: 'store', allowManualDelete: true } },
                accountOff
            )
        ).toBe(true);
    });

    it('uses the account setting when the project has no override', () => {
        expect(resolveAllowManualDeleteFlag(noProject, accountOff)).toBe(false);
        expect(resolveAllowManualDeleteFlag(noProject, { loaded: true, stored: null })).toBe(true);
        expect(resolveAllowManualDeleteFlag(noProject, { loaded: true, stored: { mode: 'store' } })).toBe(true);
    });

    it('stays unresolved when the deciding level failed to load', () => {
        expect(resolveAllowManualDeleteFlag({ loaded: false }, accountOff)).toBeNull();
        expect(resolveAllowManualDeleteFlag(noProject, { loaded: false })).toBeNull();
    });

    it('does not treat an empty object as an override', () => {
        expect(isRetentionOverride({})).toBe(false);
        expect(isRetentionOverride({ allowManualDelete: false })).toBe(true);
    });
});

describe('manual erase routes', () => {
    it('builds the document-validation files url and the app-registration data url', () => {
        expect(documentValidationFilesUrl('https://api.example/', ' abc123 ')).toBe(
            'https://api.example/v2/document-validations/abc123/files'
        );
        expect(appRegistrationDataUrl('https://api.example', 'reg/1')).toBe(
            'https://api.example/v2/app-registrations/reg%2F1/data'
        );
    });

    it('refuses a blank id', () => {
        expect(() => documentValidationFilesUrl('https://api.example', '  ')).toThrow(/document validation/);
        expect(() => appRegistrationDataUrl('https://api.example', '')).toThrow(/app registration/);
    });

    it('reads a project id from a string or a populated document', () => {
        expect(projectIdFromRef(' proj ')).toBe('proj');
        expect(projectIdFromRef({ _id: 'p1' })).toBe('p1');
        expect(projectIdFromRef(null)).toBeNull();
    });
});

describe('manual erase errors', () => {
    it('maps 403, 404, and 409 to readable keys', () => {
        expect(manualEraseErrorKey({ status: 403, error: { code: 'Forbidden' } })).toBe(
            'settings.dataRetention.eraseDisabled'
        );
        expect(manualEraseErrorKey({ status: 404, error: { message: 'not_found' } })).toBe(
            'settings.dataRetention.eraseNotFound'
        );
        expect(manualEraseErrorKey({ status: 409, error: { code: 'unsupported_retention_type' } })).toBe(
            'settings.dataRetention.eraseUnsupported'
        );
        expect(manualEraseErrorKey({ status: 500, error: { message: 'unsupported_retention_type' } })).toBe(
            'settings.dataRetention.eraseUnsupported'
        );
        expect(manualEraseErrorKey({ status: 500, error: { message: 'nope' } })).toBe(
            'settings.dataRetention.eraseFailed'
        );
    });
});
