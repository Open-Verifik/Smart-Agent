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
};
