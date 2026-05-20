/**
 * Utility Postman sandbox profiles (world / non-country).
 * Source of truth: verifik-backend/Repositories/IpLocation/helpers/iplookup-sandbox.helper.js
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import { SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER } from '../sandbox-error-profiles';

export const IP_LOOKUP_ENDPOINT_CODE = 'ip-lookup';

const IP_LOOKUP_DEMO = '8.8.8.8';

const IP_LOOKUP_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: IP_LOOKUP_DEMO,
        fullName: '8.8.8.8 — Google DNS demo (US)',
        paramOverrides: { ip: IP_LOOKUP_DEMO },
    },
    ...Array.from({ length: 10 }, (_, index) => {
        const ip = `192.168.100.${index + 1}`;

        return {
            documentNumber: ip,
            fullName: `192.168.100.${index + 1} — Colombia sandbox fixture ${String(index + 1).padStart(2, '0')}`,
            paramOverrides: { ip },
        };
    }),
];

const IP_LOOKUP_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '192.168.100.99',
    fullName: '404 — IP not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { ip: '192.168.100.99' },
};

export const UTILITIES_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [IP_LOOKUP_ENDPOINT_CODE]: {
        profiles: [...IP_LOOKUP_SANDBOX_PROFILES, IP_LOOKUP_ERROR_PROFILE_404],
        defaultDocumentNumber: IP_LOOKUP_DEMO,
        showProfileMeta: false,
    },
};
