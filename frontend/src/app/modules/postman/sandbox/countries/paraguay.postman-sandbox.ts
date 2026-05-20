/**
 * Paraguay Postman sandbox profiles.
 * documentNumber only — no documentType in query or 200 response.
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

export const PARAGUAY_IDENTITY_ENDPOINT_CODE = 'paraguay_api_identity_lookup';
export const PARAGUAY_VEHICLE_ENDPOINT_CODE = 'paraguay_api_vehicle';
export const PARAGUAY_BUSINESS_ENDPOINT_CODE = 'paraguay_api_business_lookup';

const PARAGUAY_COMPANY_DEMO_RUC = '80033331';

const PARAGUAY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
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

const PARAGUAY_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: PARAGUAY_COMPANY_DEMO_RUC,
        fullName: 'CONDOMINIO MANUEL ADOLFO FERREIRA — demo RUC',
        paramOverrides: {
            documentType: 'RUC',
            documentNumber: PARAGUAY_COMPANY_DEMO_RUC,
        },
    },
    ...PARAGUAY_SANDBOX_PROFILES.map((profile) => ({
        ...profile,
        fullName: `${profile.fullName?.replace(' — valid', '')} — empresa`,
        paramOverrides: {
            documentType: 'RUC',
            documentNumber: profile.documentNumber,
        },
    })),
];

export const PARAGUAY_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [PARAGUAY_IDENTITY_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(PARAGUAY_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER],
        }),
        defaultDocumentNumber: '10000001',
        showProfileMeta: false,
    },
    [PARAGUAY_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [PARAGUAY_BUSINESS_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(PARAGUAY_COMPANY_SANDBOX_PROFILES, {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }),
        defaultDocumentNumber: PARAGUAY_COMPANY_DEMO_RUC,
        documentTypeByCode: {
            [PARAGUAY_BUSINESS_ENDPOINT_CODE]: 'RUC',
        },
        showProfileMeta: false,
    },
};
