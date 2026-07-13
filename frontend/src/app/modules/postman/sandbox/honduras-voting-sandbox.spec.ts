import {
    HONDURAS_POSTMAN_SANDBOX_BY_CODE,
    HONDURAS_VOTING_ENDPOINT_CODE,
} from './countries/honduras.postman-sandbox';
import { getPostmanSandboxProfiles } from './postman-sandbox.util';
import { SANDBOX_ERROR_DOCUMENT_404 } from './sandbox-error-profiles';

const HONDURAS_DNIHN_LENGTH = 13;

describe('Honduras voting location sandbox', () => {
    it('uses only 13-digit documentNumber values for every voting profile', () => {
        const profiles = getPostmanSandboxProfiles(HONDURAS_VOTING_ENDPOINT_CODE);

        expect(profiles.length).toBeGreaterThan(0);

        for (const profile of profiles) {
            const requestDocumentNumber =
                profile.paramOverrides?.documentNumber ?? profile.documentNumber;

            if (requestDocumentNumber === '') {
                continue;
            }

            expect(requestDocumentNumber).toMatch(/^\d{13}$/);
            expect(requestDocumentNumber).not.toBe(SANDBOX_ERROR_DOCUMENT_404);
        }
    });

    it('uses a single padded 404 profile', () => {
        const profiles = getPostmanSandboxProfiles(HONDURAS_VOTING_ENDPOINT_CODE);
        const notFoundProfiles = profiles.filter((profile) => profile.expectedStatus === 404);

        expect(notFoundProfiles).toHaveLength(1);
        expect(notFoundProfiles[0].paramOverrides?.documentNumber).toBe('0000090040401');
    });

    it('registers the voting endpoint config with a padded default', () => {
        expect(HONDURAS_POSTMAN_SANDBOX_BY_CODE[HONDURAS_VOTING_ENDPOINT_CODE]).toBeDefined();
        expect(HONDURAS_POSTMAN_SANDBOX_BY_CODE[HONDURAS_VOTING_ENDPOINT_CODE].defaultDocumentNumber).toBe(
            '0000010000001'
        );
        expect(
            HONDURAS_POSTMAN_SANDBOX_BY_CODE[HONDURAS_VOTING_ENDPOINT_CODE].defaultDocumentNumber
        ).toHaveLength(HONDURAS_DNIHN_LENGTH);
    });
});
