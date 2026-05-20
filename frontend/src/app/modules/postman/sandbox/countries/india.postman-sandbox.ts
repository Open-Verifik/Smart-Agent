/**
 * India Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/India/helpers/india-sandbox.helper.js
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const INDIA_EPIC_ENDPOINT_CODE = 'india_api_epic_lookup';
export const INDIA_EPIC_VOTING_ENDPOINT_CODE = 'india_api_epic_voting_lookup';

const INDIA_EPIC_NAMES = [
    'MARIA ELENA LOPEZ GARCIA',
    'JOSE ANTONIO PEREZ RODRIGUEZ',
    'CARLA ISABEL MARTINEZ FERNANDEZ',
    'LUIS ALBERTO GONZALEZ HERRERA',
    'ANA SOFIA RAMIREZ TORRES',
    'DIEGO ALEJANDRO SILVA MENDOZA',
    'VALENTINA ANDREA CASTRO VARGAS',
    'RICARDO JOSE MORALES SUAREZ',
    'PATRICIA CAROLINA DIAZ REYES',
    'FERNANDO MIGUEL ROJAS DELGADO',
];

const INDIA_EPIC_SANDBOX_PROFILES: PostmanSandboxProfile[] = Array.from({ length: 10 }, (_, index) => {
    const documentNumber = `VF${10000001 + index}`;

    return {
        documentNumber,
        fullName: `${INDIA_EPIC_NAMES[index]} — EPIC Valid`,
        paramOverrides: {
            documentType: 'EPIC',
            documentNumber,
        },
    };
});

const INDIA_EPIC_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: 'VF90040401',
    fullName: '404 — EPIC not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'EPIC',
        documentNumber: 'VF90040401',
    },
};

const INDIA_EPIC_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: 'VF10000001',
    },
};

export const INDIA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [INDIA_EPIC_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(INDIA_EPIC_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                INDIA_EPIC_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }).concat(INDIA_EPIC_ERROR_PROFILE_404),
        defaultDocumentNumber: 'VF10000001',
        documentTypeByCode: {
            [INDIA_EPIC_ENDPOINT_CODE]: 'EPIC',
        },
        showProfileMeta: false,
    },
    [INDIA_EPIC_VOTING_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(INDIA_EPIC_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER],
        }).concat(INDIA_EPIC_ERROR_PROFILE_404),
        defaultDocumentNumber: 'VF10000001',
        showProfileMeta: false,
    },
};
