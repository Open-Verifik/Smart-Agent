import { describe, expect, it, vi } from 'vitest';

vi.mock('environments/environment', () => ({
    environment: {
        documentationBaseUrl: 'https://docs.verifik.co',
    },
}));

import { getVerifikDocsUrls } from './verifik-docs-urls';

describe('getVerifikDocsUrls', () => {
    it('should point docsHome to each locale intro page', () => {
        expect(getVerifikDocsUrls('en').docsHome).toBe(
            'https://docs.verifik.co/intro/'
        );
        expect(getVerifikDocsUrls('es').docsHome).toBe(
            'https://docs.verifik.co/verifik-es/intro/'
        );
        expect(getVerifikDocsUrls('fr').docsHome).toBe(
            'https://docs.verifik.co/verifik-fr/intro/'
        );
        expect(getVerifikDocsUrls('pt').docsHome).toBe(
            'https://docs.verifik.co/verifik-pt/intro/'
        );
        expect(getVerifikDocsUrls('ko').docsHome).toBe(
            'https://docs.verifik.co/verifik-ko/intro/'
        );
        expect(getVerifikDocsUrls('ja').docsHome).toBe(
            'https://docs.verifik.co/verifik-ja/intro/'
        );
        expect(getVerifikDocsUrls('zh').docsHome).toBe(
            'https://docs.verifik.co/verifik-zh/intro/'
        );
    });

    it('should fall back to English docs home for unsupported locales', () => {
        expect(getVerifikDocsUrls('xx').docsHome).toBe(
            'https://docs.verifik.co/intro/'
        );
    });

    it('should keep Spanish legal URLs unchanged', () => {
        const urls = getVerifikDocsUrls('es');

        expect(urls.privacyPolicy).toBe(
            'https://docs.verifik.co/verifik-es/legal/politica-privacidad/'
        );
        expect(urls.termsAndConditions).toBe(
            'https://docs.verifik.co/verifik-es/terminos-y-condiciones/'
        );
        expect(urls.serviceLevelAgreement).toBe(
            'https://docs.verifik.co/verifik-es/acuerdo-de-niveles-de-servicio/'
        );
    });
});
