/**
 * Bolivia Postman sandbox profiles.
 * Middleware requires dateOfBirth (DD/MM/YYYY) in addition to CI + documentNumber.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Bolivia/helpers/bolivian-sandbox.helper.js
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

export const BOLIVIA_IDENTITY_ENDPOINT_CODE = 'bolivia_api_identity_lookup';
export const BOLIVIA_VEHICLE_ENDPOINT_CODE = 'bolivia_api_vehicle';

const BOLIVIA_DEFAULT_DATE_OF_BIRTH = '15/03/1990';

const BOLIVIA_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
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

const BOLIVIA_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '10000001',
        dateOfBirth: BOLIVIA_DEFAULT_DATE_OF_BIRTH,
    },
};

const BOLIVIA_CONFLICT_MISSING_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-missing-dateOfBirth',
    documentNumber: '90040908',
    fullName: '409 — Missing dateOfBirth',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: '', documentNumber: '10000001' },
};

const BOLIVIA_CONFLICT_INVALID_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-invalid-dateOfBirth',
    documentNumber: '90040909',
    fullName: '409 — Invalid dateOfBirth format',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: 'not-a-date', documentNumber: '10000001' },
};

export const BOLIVIA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [BOLIVIA_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(BOLIVIA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                BOLIVIA_CONFLICT_INVALID_DOCUMENT_TYPE,
                BOLIVIA_CONFLICT_MISSING_DATE_OF_BIRTH,
                BOLIVIA_CONFLICT_INVALID_DATE_OF_BIRTH,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultDateOfBirth: BOLIVIA_DEFAULT_DATE_OF_BIRTH,
        documentTypeByCode: {
            [BOLIVIA_IDENTITY_ENDPOINT_CODE]: 'CI',
        },
        showProfileMeta: false,
    },
    [BOLIVIA_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
};
