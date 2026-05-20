/**
 * Spain Postman sandbox profiles.
 * Middleware requires expirationDate (DD/MM/YYYY) in addition to DNIES/NIE + documentNumber.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Spain/helpers/spaniard-sandbox.helper.js
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

import {
    appendVehiclePlateSandboxProfiles,
    SANDBOX_DEFAULT_PLATE,
} from '../vehicle-plate-profiles';

export const SPAIN_IDENTITY_ENDPOINT_CODE = 'spain_api_identity_lookup';
export const SPAIN_COMPANY_ENDPOINT_CODE = 'spain_api_company_lookup';
export const SPAIN_VEHICLE_ENDPOINT_CODE = 'spain_api_vehicle_lookup';

const SPAIN_DEFAULT_EXPIRATION_DATE = '17/07/2026';

const SPAIN_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
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

const SPAIN_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '10000001',
        expirationDate: SPAIN_DEFAULT_EXPIRATION_DATE,
    },
};

const SPAIN_CONFLICT_MISSING_EXPIRATION_DATE: PostmanSandboxProfile = {
    profileKey: '409-missing-expirationDate',
    documentNumber: '90040911',
    fullName: '409 — Missing expirationDate',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { expirationDate: '', documentNumber: '10000001' },
};

const SPAIN_CONFLICT_INVALID_EXPIRATION_DATE: PostmanSandboxProfile = {
    profileKey: '409-invalid-expirationDate',
    documentNumber: '90040912',
    fullName: '409 — Invalid expirationDate format',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { expirationDate: 'not-a-date', documentNumber: '10000001' },
};

const SPAIN_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = Array.from({ length: 10 }, (_, index) => {
    const nif = `B${String(10000001 + index).padStart(8, '0')}`;

    return {
        documentNumber: nif,
        fullName: `VERIFIK SANDBOX ESPANA ${String(index + 1).padStart(2, '0')} — NIF`,
        paramOverrides: {
            documentType: 'NIF',
            documentNumber: nif,
        },
    };
});

const SPAIN_COMPANY_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: 'B90040401',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'NIF',
        documentNumber: 'B90040401',
    },
};

const SPAIN_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: 'B10000001',
    },
};

export const SPAIN_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [SPAIN_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(SPAIN_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SPAIN_CONFLICT_INVALID_DOCUMENT_TYPE,
                SPAIN_CONFLICT_MISSING_EXPIRATION_DATE,
                SPAIN_CONFLICT_INVALID_EXPIRATION_DATE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultExpirationDate: SPAIN_DEFAULT_EXPIRATION_DATE,
        documentTypeByCode: {
            [SPAIN_IDENTITY_ENDPOINT_CODE]: 'DNIES',
        },
        showProfileMeta: false,
    },
    [SPAIN_COMPANY_ENDPOINT_CODE]: {
        profiles: [
            ...SPAIN_COMPANY_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            SPAIN_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE,
            SPAIN_COMPANY_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: 'B10000001',
        documentTypeByCode: {
            [SPAIN_COMPANY_ENDPOINT_CODE]: 'NIF',
        },
        showProfileMeta: false,
    },
    [SPAIN_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
};
