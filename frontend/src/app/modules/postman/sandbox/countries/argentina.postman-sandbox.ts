/**
 * Argentina Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCitizen/Argentina/helpers/argentinian-sandbox.helper.js
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

export const ARGENTINA_IDENTITY_ENDPOINT_CODE = 'argentina_api_identity_lookup';
export const ARGENTINA_VEHICLE_ENDPOINT_CODE = 'argentina_api_vehicle';
export const ARGENTINA_COMPANY_ENDPOINT_CODE = 'argentina_api_company_lookup';

const ARGENTINA_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO' },
];

const ARGENTINA_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = ARGENTINA_SANDBOX_PROFILES.map(
    (profile, index) => ({
        documentNumber: `201${String(10000001 + index).padStart(8, '0')}`,
        fullName: `${profile.fullName} — CUIT`,
        paramOverrides: {
            documentType: 'CUIT',
            documentNumber: `201${String(10000001 + index).padStart(8, '0')}`,
        },
    })
);

export const ARGENTINA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [ARGENTINA_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(ARGENTINA_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: '10000001',
        documentTypeByCode: {
            [ARGENTINA_IDENTITY_ENDPOINT_CODE]: 'DNIAR',
        },
        showProfileMeta: false,
    },
    [ARGENTINA_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [ARGENTINA_COMPANY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(ARGENTINA_COMPANY_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                {
                    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
                    paramOverrides: {
                        documentType: 'INVALID',
                        documentNumber: '20110000001',
                    },
                },
            ],
        }),
        defaultDocumentNumber: '20110000001',
        documentTypeByCode: {
            [ARGENTINA_COMPANY_ENDPOINT_CODE]: 'CUIT',
        },
        showProfileMeta: false,
    },
};
