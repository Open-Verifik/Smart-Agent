/**
 * Chile Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Chile/helpers/chilean-sandbox.helper.js
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

export const CHILE_IDENTITY_ENDPOINT_CODE = 'chile_api_identity_lookup';
export const CHILE_VEHICLE_ENDPOINT_CODE = 'chile_api_vehicle';
export const CHILE_DRIVER_LICENSE_ENDPOINT_CODE = 'chile_api_driver_license';
export const CHILE_BUSINESS_ENDPOINT_CODE = 'chile_api_business_lookup';
export const CHILE_TAXPAYER_ENDPOINT_CODE = 'chile_api_taxpayer_lookup';
export const CHILE_VALIDATE_ENDPOINT_CODE = 'chile_api_validate';
export const CHILE_TRANSPORT_VEHICLE_ENDPOINT_CODE = 'chile_api_transport_vehicle';

const CHILE_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
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

export const CHILE_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [CHILE_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [CHILE_IDENTITY_ENDPOINT_CODE]: 'RUN',
        },
        showProfileMeta: false,
    },
    [CHILE_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [CHILE_DRIVER_LICENSE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [CHILE_DRIVER_LICENSE_ENDPOINT_CODE]: 'RUN',
        },
        showProfileMeta: false,
    },
    [CHILE_BUSINESS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [CHILE_BUSINESS_ENDPOINT_CODE]: 'RUT',
        },
        showProfileMeta: false,
    },
    [CHILE_TAXPAYER_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [CHILE_TAXPAYER_ENDPOINT_CODE]: 'RUT',
        },
        showProfileMeta: false,
    },
    [CHILE_VALIDATE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        defaultSerialNumber: '',
        documentTypeByCode: {
            [CHILE_VALIDATE_ENDPOINT_CODE]: 'RUN',
        },
        showProfileMeta: false,
    },
    [CHILE_TRANSPORT_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
};
