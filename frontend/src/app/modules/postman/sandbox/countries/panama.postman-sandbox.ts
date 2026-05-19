/**
 * Panama Postman sandbox profiles.
 * Middleware requires dateOfBirth (DD/MM/YYYY) and valid cédula format (e.g. 8-1000-0001).
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Panama/helpers/panamanian-sandbox.helper.js
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const PANAMA_IDENTITY_ENDPOINT_CODE = 'panama_api_identity_lookup';

const PANAMA_DEFAULT_DATE_OF_BIRTH = '15/03/1990';
const PANAMA_ERROR_CEDULA_404 = '9-0040-401';

const PANAMA_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '8-1000-0001', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { documentNumber: '8-1000-0002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { documentNumber: '8-1000-0003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { documentNumber: '8-1000-0004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { documentNumber: '8-1000-0005', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { documentNumber: '8-1000-0006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { documentNumber: '8-1000-0007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { documentNumber: '8-1000-0008', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { documentNumber: '8-1000-0009', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { documentNumber: '8-1000-0010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

const PANAMA_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-not-found-cedula',
    documentNumber: PANAMA_ERROR_CEDULA_404,
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentNumber: PANAMA_ERROR_CEDULA_404,
        dateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH,
    },
};

const PANAMA_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '8-1000-0001',
        dateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH,
    },
};

const PANAMA_CONFLICT_INVALID_CEDULA: PostmanSandboxProfile = {
    profileKey: '409-invalid-cedula',
    documentNumber: '90040910',
    fullName: '409 — Invalid cédula format',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: {
        documentNumber: 'not-a-cedula',
        dateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH,
    },
};

const PANAMA_CONFLICT_MISSING_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-missing-dateOfBirth',
    documentNumber: '90040908',
    fullName: '409 — Missing dateOfBirth',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: '', documentNumber: '8-1000-0001' },
};

const PANAMA_CONFLICT_INVALID_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-invalid-dateOfBirth',
    documentNumber: '90040909',
    fullName: '409 — Invalid dateOfBirth format',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: 'not-a-date', documentNumber: '8-1000-0001' },
};

export const PANAMA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [PANAMA_IDENTITY_ENDPOINT_CODE]: {
        profiles: [
            ...PANAMA_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            PANAMA_CONFLICT_INVALID_DOCUMENT_TYPE,
            PANAMA_CONFLICT_INVALID_CEDULA,
            PANAMA_CONFLICT_MISSING_DATE_OF_BIRTH,
            PANAMA_CONFLICT_INVALID_DATE_OF_BIRTH,
            PANAMA_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: '8-1000-0001',
        defaultDateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH,
        documentTypeByCode: {
            [PANAMA_IDENTITY_ENDPOINT_CODE]: 'CCPA',
        },
        showProfileMeta: false,
    },
};
