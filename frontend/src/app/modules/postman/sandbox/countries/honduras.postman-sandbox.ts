/**
 * Honduras Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Honduras/helpers/
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const HONDURAS_IDENTITY_ENDPOINT_CODE = 'honduras_api_identity_lookup';
export const HONDURAS_VOTING_ENDPOINT_CODE = 'honduras_api_voting_location';

const HONDURAS_DNIHN_LENGTH = 13;

/** Voting sandbox accepts only 13-digit DNIHN values (see hn/votacion middleware). */
const padHondurasVotingDocumentNumber = (fixtureKey: number | string): string =>
    String(fixtureKey).padStart(HONDURAS_DNIHN_LENGTH, '0');

const toHondurasVotingProfile = (
    fixtureKey: number,
    fullName: string,
    options: Partial<PostmanSandboxProfile> = {}
): PostmanSandboxProfile => {
    const documentNumber = padHondurasVotingDocumentNumber(fixtureKey);

    return {
        documentNumber,
        fullName,
        paramOverrides: { documentNumber },
        ...options,
    };
};

const HONDURAS_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

const HONDURAS_VOTING_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    toHondurasVotingProfile(10000001, 'MARIA ELENA LOPEZ GARCIA — valid'),
    toHondurasVotingProfile(10000002, 'JOSE ANTONIO PEREZ RODRIGUEZ — valid'),
    toHondurasVotingProfile(10000003, 'CARLA ISABEL MARTINEZ FERNANDEZ — valid'),
    toHondurasVotingProfile(10000004, 'LUIS ALBERTO GONZALEZ HERRERA — valid'),
    toHondurasVotingProfile(10000005, 'ANA SOFIA RAMIREZ TORRES — valid'),
    toHondurasVotingProfile(10000006, 'DIEGO ALEJANDRO SILVA MENDOZA — valid'),
    toHondurasVotingProfile(10000007, 'VALENTINA ANDREA CASTRO VARGAS — valid'),
    toHondurasVotingProfile(10000008, 'RICARDO JOSE MORALES SUAREZ — valid'),
    toHondurasVotingProfile(10000009, 'PATRICIA CAROLINA DIAZ REYES — valid'),
    toHondurasVotingProfile(10000010, 'FERNANDO MIGUEL ROJAS DELGADO — valid'),
];

const HONDURAS_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: { documentType: 'INVALID', documentNumber: '10000001' },
};

const HONDURAS_VOTING_CONFLICT_MISSING_DOCUMENT_NUMBER: PostmanSandboxProfile = {
    profileKey: '409-missing-documentNumber-honduras-voting',
    documentNumber: padHondurasVotingDocumentNumber(90040901),
    fullName: '409 — Missing documentNumber',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { documentNumber: '' },
};

const HONDURAS_VOTING_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    profileKey: '409-invalid-documentType-honduras-voting',
    documentNumber: padHondurasVotingDocumentNumber(90040902),
    fullName: '409 — Invalid documentType',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: padHondurasVotingDocumentNumber(10000001),
    },
};

const HONDURAS_VOTING_ERROR_PROFILE_404: PostmanSandboxProfile = toHondurasVotingProfile(
    90040401,
    '404 — Voting record not found',
    {
        profileKey: '404-honduras-voting',
        responseType: 'error',
        expectedStatus: 404,
    }
);

export const HONDURAS_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [HONDURAS_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(HONDURAS_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                HONDURAS_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [HONDURAS_IDENTITY_ENDPOINT_CODE]: 'DNIHN',
        },
        showProfileMeta: false,
    },
    [HONDURAS_VOTING_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(HONDURAS_VOTING_SANDBOX_PROFILES, {
            include404: false,
            conflictProfiles: [
                HONDURAS_VOTING_CONFLICT_MISSING_DOCUMENT_NUMBER,
                HONDURAS_VOTING_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }).concat(HONDURAS_VOTING_ERROR_PROFILE_404),
        defaultDocumentNumber: padHondurasVotingDocumentNumber(10000001),
        documentTypeByCode: {
            [HONDURAS_VOTING_ENDPOINT_CODE]: 'DNIHN',
        },
        showProfileMeta: false,
    },
};
