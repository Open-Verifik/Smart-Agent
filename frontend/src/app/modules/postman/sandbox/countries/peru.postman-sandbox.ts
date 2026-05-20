/**
 * Peru v3 Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Peru/helpers/peruvian-v3-sandbox.helper.js
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

export const PERU_V3_IDENTITY_ENDPOINT_CODE = 'peru_identity_lookup_v3';
export const PERU_SOAT_VEHICLE_ENDPOINT_CODE = 'peru_api_vehicle_soat';
export const PERU_VEHICLE_ENDPOINT_CODE = 'peru_api_vehicle';
export const PERU_COMPANY_V3_ENDPOINT_CODE = 'peru_api_company_lookup_v3';
export const PERU_CE_FOREIGNER_ENDPOINT_CODE = 'peru_api_identity_ce_foreigner_id';
export const PERU_IDENTITY_EXTRA_V3_ENDPOINT_CODE = 'peru_identity_extra_lookup_v3';

const PERU_COMPANY_DEMO_RUC = '20605980008';
const PERU_CE_DEFAULT_DATE_OF_BIRTH = '15/03/1990';

const PERU_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
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

const PERU_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '10000001',
    },
};

const PERU_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: PERU_COMPANY_DEMO_RUC,
        fullName: 'MERCADOLIBRE PERU S.R.L. — demo RUC',
        paramOverrides: {
            documentType: 'RUC',
            documentNumber: PERU_COMPANY_DEMO_RUC,
        },
    },
    ...PERU_SANDBOX_PROFILES.map((profile, index) => ({
        documentNumber: `206${String(10000001 + index).padStart(8, '0')}`,
        fullName: `${profile.fullName?.replace(' — valid', '')} — empresa`,
        paramOverrides: {
            documentType: 'RUC',
            documentNumber: `206${String(10000001 + index).padStart(8, '0')}`,
        },
    })),
];

const PERU_COMPANY_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '20690040401',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'RUC',
        documentNumber: '20690040401',
    },
};

const PERU_CE_SANDBOX_PROFILES: PostmanSandboxProfile[] = PERU_SANDBOX_PROFILES.map((profile) => ({
    ...profile,
    paramOverrides: {
        documentNumber: profile.documentNumber,
        dateOfBirth: PERU_CE_DEFAULT_DATE_OF_BIRTH,
    },
}));

const PERU_CE_CONFLICT_MISSING_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-missing-dateOfBirth',
    documentNumber: '90040908',
    fullName: '409 — Missing dateOfBirth',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: '', documentNumber: '10000001' },
};

export const PERU_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [PERU_V3_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(PERU_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER, PERU_CONFLICT_INVALID_DOCUMENT_TYPE],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [PERU_V3_IDENTITY_ENDPOINT_CODE]: 'DNI',
        },
        showProfileMeta: false,
    },
    [PERU_SOAT_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [PERU_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [PERU_COMPANY_V3_ENDPOINT_CODE]: {
        profiles: [
            ...PERU_COMPANY_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            PERU_CONFLICT_INVALID_DOCUMENT_TYPE,
            PERU_COMPANY_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: PERU_COMPANY_DEMO_RUC,
        documentTypeByCode: {
            [PERU_COMPANY_V3_ENDPOINT_CODE]: 'RUC',
        },
        showProfileMeta: false,
    },
    [PERU_CE_FOREIGNER_ENDPOINT_CODE]: {
        profiles: [
            ...PERU_CE_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            PERU_CE_CONFLICT_MISSING_DATE_OF_BIRTH,
        ],
        defaultDocumentNumber: '10000001',
        defaultDateOfBirth: PERU_CE_DEFAULT_DATE_OF_BIRTH,
        showProfileMeta: false,
    },
    [PERU_IDENTITY_EXTRA_V3_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(PERU_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER, PERU_CONFLICT_INVALID_DOCUMENT_TYPE],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [PERU_IDENTITY_EXTRA_V3_ENDPOINT_CODE]: 'DNI',
        },
        showProfileMeta: false,
    },
};
