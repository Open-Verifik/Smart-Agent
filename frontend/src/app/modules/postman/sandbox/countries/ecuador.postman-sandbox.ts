/**
 * Ecuador Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Ecuador/helpers/ecuadorian-sandbox.helper.js
 * (SANDBOX_FIXED_DOCUMENTS — keep in sync manually).
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

export const ECUADOR_IDENTITY_ENDPOINT_CODE = 'ecuador_api_identity_lookup';
export const ECUADOR_VEHICLE_ENDPOINT_CODE = 'ecuador_api_vehicle';
export const ECUADOR_VEHICLE_FINES_ENDPOINT_CODE = 'ecuador_api_vehicle_fines';
export const ECUADOR_COMPANY_ENDPOINT_CODE = 'ecuador_api_company_lookup';

const ECUADOR_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
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

const ECUADOR_COMPANY_DEMO_RUC = '1790008959001';

const ECUADOR_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: ECUADOR_COMPANY_DEMO_RUC,
        fullName: 'EMPRESA EJEMPLO SA — ACTIVO',
        paramOverrides: {
            documentType: 'RUCEC',
            documentNumber: ECUADOR_COMPANY_DEMO_RUC,
        },
    },
    ...ECUADOR_SANDBOX_PROFILES.map((profile, index) => ({
        documentNumber: `17900${String(10000001 + index).padStart(8, '0')}`,
        fullName: `${profile.fullName?.replace(' — valid', '')} — ACTIVO`,
        paramOverrides: {
            documentType: 'RUCEC',
            documentNumber: `17900${String(10000001 + index).padStart(8, '0')}`,
        },
    })),
];

const ECUADOR_COMPANY_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '1799004040101',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'RUCEC',
        documentNumber: '1799004040101',
    },
};

export const ECUADOR_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [ECUADOR_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(ECUADOR_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [ECUADOR_IDENTITY_ENDPOINT_CODE]: 'CCEC',
        },
        showProfileMeta: false,
    },
    [ECUADOR_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [ECUADOR_VEHICLE_FINES_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [ECUADOR_COMPANY_ENDPOINT_CODE]: {
        profiles: [
            ...ECUADOR_COMPANY_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ECUADOR_COMPANY_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: ECUADOR_COMPANY_DEMO_RUC,
        documentTypeByCode: {
            [ECUADOR_COMPANY_ENDPOINT_CODE]: 'RUCEC',
        },
        showProfileMeta: false,
    },
};
