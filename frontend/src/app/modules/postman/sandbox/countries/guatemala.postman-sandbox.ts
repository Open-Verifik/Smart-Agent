/**
 * Guatemala Postman sandbox profiles.
 * Middleware requires dateOfBirth (DD/MM/YYYY) in addition to CUI + documentNumber.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Guatemala/helpers/guatemalan-sandbox.helper.js
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const GUATEMALA_IDENTITY_ENDPOINT_CODE = 'guatemala_api_identity_lookup';
export const GUATEMALA_IDENTITY_EXTRA_ENDPOINT_CODE = 'guatemala_api_identity_extra_lookup';

const GUATEMALA_DEFAULT_DATE_OF_BIRTH = '15/03/1990';

const GUATEMALA_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
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

const GUATEMALA_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '10000001',
        dateOfBirth: GUATEMALA_DEFAULT_DATE_OF_BIRTH,
    },
};

const GUATEMALA_CONFLICT_MISSING_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-missing-dateOfBirth',
    documentNumber: '90040908',
    fullName: '409 — Missing dateOfBirth',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: '', documentNumber: '10000001' },
};

const GUATEMALA_CONFLICT_INVALID_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-invalid-dateOfBirth',
    documentNumber: '90040909',
    fullName: '409 — Invalid dateOfBirth format',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: 'not-a-date', documentNumber: '10000001' },
};

export const GUATEMALA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [GUATEMALA_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(GUATEMALA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                GUATEMALA_CONFLICT_INVALID_DOCUMENT_TYPE,
                GUATEMALA_CONFLICT_MISSING_DATE_OF_BIRTH,
                GUATEMALA_CONFLICT_INVALID_DATE_OF_BIRTH,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultDateOfBirth: GUATEMALA_DEFAULT_DATE_OF_BIRTH,
        documentTypeByCode: {
            [GUATEMALA_IDENTITY_ENDPOINT_CODE]: 'CUI',
        },
        showProfileMeta: false,
    },
    [GUATEMALA_IDENTITY_EXTRA_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(GUATEMALA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                GUATEMALA_CONFLICT_INVALID_DOCUMENT_TYPE,
                GUATEMALA_CONFLICT_MISSING_DATE_OF_BIRTH,
                GUATEMALA_CONFLICT_INVALID_DATE_OF_BIRTH,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultDateOfBirth: GUATEMALA_DEFAULT_DATE_OF_BIRTH,
        documentTypeByCode: {
            [GUATEMALA_IDENTITY_EXTRA_ENDPOINT_CODE]: 'CUI',
        },
        showProfileMeta: false,
    },
};
