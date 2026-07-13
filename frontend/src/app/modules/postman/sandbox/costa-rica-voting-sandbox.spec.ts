import {
    COSTA_RICA_POSTMAN_SANDBOX_BY_CODE,
    COSTA_RICA_VOTING_ENDPOINT_CODE,
} from './countries/costarica.postman-sandbox';
import { getPostmanSandboxProfiles } from './postman-sandbox.util';
import { SANDBOX_ERROR_DOCUMENT_404 } from './sandbox-error-profiles';

describe('Costa Rica voting location sandbox', () => {
    it('uses only 9-digit documentNumber values for every voting profile', () => {
        const profiles = getPostmanSandboxProfiles(COSTA_RICA_VOTING_ENDPOINT_CODE);

        expect(profiles.length).toBeGreaterThan(0);

        for (const profile of profiles) {
            const requestDocumentNumber =
                profile.paramOverrides?.documentNumber ?? profile.documentNumber;

            if (requestDocumentNumber === '') {
                continue;
            }

            expect(requestDocumentNumber).toMatch(/^\d{9,13}$/);
            expect(requestDocumentNumber).not.toBe(SANDBOX_ERROR_DOCUMENT_404);
        }
    });

    it('uses a single padded 404 profile', () => {
        const profiles = getPostmanSandboxProfiles(COSTA_RICA_VOTING_ENDPOINT_CODE);
        const notFoundProfiles = profiles.filter((profile) => profile.expectedStatus === 404);

        expect(notFoundProfiles).toHaveLength(1);
        expect(notFoundProfiles[0].paramOverrides?.documentNumber).toBe('090040401');
    });

    it('registers the voting endpoint config with a padded default', () => {
        expect(COSTA_RICA_POSTMAN_SANDBOX_BY_CODE[COSTA_RICA_VOTING_ENDPOINT_CODE]).toBeDefined();
        expect(COSTA_RICA_POSTMAN_SANDBOX_BY_CODE[COSTA_RICA_VOTING_ENDPOINT_CODE].defaultDocumentNumber).toBe(
            '010000001'
        );
    });
});
