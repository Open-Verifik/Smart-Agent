/**
 * Costa Rica Postman sandbox profiles.
 * Middleware requires documentNumber min length 9 — success fixtures use 9-digit padded IDs (010000001–010000010).
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/CostaRica/helpers/costa-rican-sandbox.helper.js
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';
import {
    appendVehiclePlateSandboxProfiles,
    SANDBOX_DEFAULT_PLATE,
} from '../vehicle-plate-profiles';

export const COSTA_RICA_IDENTITY_ENDPOINT_CODE = 'costarica_api_identity_lookup';
export const COSTA_RICA_VEHICLE_ENDPOINT_CODE = 'costa_rica_api_vehicle';
export const COSTA_RICA_BUSINESS_ENDPOINT_CODE = 'costa_rica_api_business_lookup';

const COSTA_RICA_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '010000001', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { documentNumber: '010000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { documentNumber: '010000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { documentNumber: '010000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { documentNumber: '010000005', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { documentNumber: '010000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { documentNumber: '010000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { documentNumber: '010000008', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { documentNumber: '010000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { documentNumber: '010000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

const COSTA_RICA_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    profileKey: '409-invalid-documentType',
    documentNumber: '90040902',
    fullName: '409 — Invalid documentType',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { documentType: 'INVALID', documentNumber: '010000001' },
};

const COSTA_RICA_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '090040401',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
};

export const COSTA_RICA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [COSTA_RICA_IDENTITY_ENDPOINT_CODE]: {
        profiles: [
            ...COSTA_RICA_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            COSTA_RICA_CONFLICT_INVALID_DOCUMENT_TYPE,
            COSTA_RICA_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: '010000001',
        documentTypeByCode: {
            [COSTA_RICA_IDENTITY_ENDPOINT_CODE]: 'CCCR',
        },
        showProfileMeta: false,
    },
    [COSTA_RICA_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [COSTA_RICA_BUSINESS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(COSTA_RICA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                COSTA_RICA_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '010000001',
        documentTypeByCode: {
            [COSTA_RICA_BUSINESS_ENDPOINT_CODE]: 'NITE',
        },
        showProfileMeta: false,
    },
};
