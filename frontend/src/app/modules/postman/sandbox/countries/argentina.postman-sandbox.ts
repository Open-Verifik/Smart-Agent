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
export const ARGENTINA_VEHICLE_V3_ENDPOINT_CODE = 'argentina_api_vehicle_v3';
export const ARGENTINA_TRAFFIC_INFRACTIONS_ENDPOINT_CODE =
    'argentina_api_buenos_aires_traffic_infractions';
export const ARGENTINA_TECHNICAL_INSPECTION_ENDPOINT_CODE =
    'argentina_api_buenos_aires_technical_inspection';
export const ARGENTINA_RTO_ENDPOINT_CODE = 'argentina_api_rto';
export const ARGENTINA_COMPANY_ENDPOINT_CODE = 'argentina_api_company_lookup';
export const ARGENTINA_CERTIFICATE_VERIFY_ENDPOINT_CODE = 'ar_certificate_verify';

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

const ARGENTINA_CERTIFICATE_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: '02118499487',
        fullName: 'MARIA ELENA LOPEZ — clean record',
        paramOverrides: { requestCode: '02118499487', securityCode: '371488F861' },
    },
    {
        documentNumber: '02118499488',
        fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — clean record',
        paramOverrides: { requestCode: '02118499488', securityCode: '371488F862' },
    },
    {
        documentNumber: '02118499489',
        fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — listed record',
        paramOverrides: { requestCode: '02118499489', securityCode: '371488F863' },
    },
    {
        documentNumber: '02118499490',
        fullName: 'LUIS ALBERTO GONZALEZ HERRERA — clean record',
        paramOverrides: { requestCode: '02118499490', securityCode: '371488F864' },
    },
    {
        documentNumber: '02118499491',
        fullName: 'ANA SOFIA RAMIREZ TORRES — clean record',
        paramOverrides: { requestCode: '02118499491', securityCode: '371488F865' },
    },
    {
        documentNumber: '02118499492',
        fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — listed record',
        paramOverrides: { requestCode: '02118499492', securityCode: '371488F866' },
    },
    {
        documentNumber: '02118499493',
        fullName: 'VALENTINA ANDREA CASTRO VARGAS — clean record',
        paramOverrides: { requestCode: '02118499493', securityCode: '371488F867' },
    },
    {
        documentNumber: '02118499494',
        fullName: 'RICARDO JOSE MORALES SUAREZ — clean record',
        paramOverrides: { requestCode: '02118499494', securityCode: '371488F868' },
    },
    {
        documentNumber: '02118499495',
        fullName: 'PATRICIA CAROLINA DIAZ REYES — listed record',
        paramOverrides: { requestCode: '02118499495', securityCode: '371488F869' },
    },
    {
        documentNumber: '02118499496',
        fullName: 'FERNANDO MIGUEL ROJAS DELGADO — clean record',
        paramOverrides: { requestCode: '02118499496', securityCode: '371488F870' },
    },
];

const ARGENTINA_CERTIFICATE_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-requestCode',
    documentNumber: '90040401',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { requestCode: '90040401', securityCode: '371488F861' },
};

const ARGENTINA_CERTIFICATE_CONFLICT_MISSING_REQUEST_CODE: PostmanSandboxProfile = {
    profileKey: '409-missing-requestCode',
    documentNumber: '90040901',
    fullName: '409 — Missing requestCode',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { requestCode: '', securityCode: '371488F861' },
};

const ARGENTINA_CERTIFICATE_CONFLICT_MISSING_SECURITY_CODE: PostmanSandboxProfile = {
    profileKey: '409-missing-securityCode',
    documentNumber: '90040902',
    fullName: '409 — Missing securityCode',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { requestCode: '02118499487', securityCode: '' },
};

const buildArgentinaVehicleServiceConfig = (): PostmanSandboxEndpointConfig => ({
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false,
});

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
    [ARGENTINA_VEHICLE_V3_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
    [ARGENTINA_TRAFFIC_INFRACTIONS_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
    [ARGENTINA_TECHNICAL_INSPECTION_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
    [ARGENTINA_RTO_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
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
    [ARGENTINA_CERTIFICATE_VERIFY_ENDPOINT_CODE]: {
        profiles: [
            ...ARGENTINA_CERTIFICATE_SANDBOX_PROFILES,
            ARGENTINA_CERTIFICATE_CONFLICT_MISSING_REQUEST_CODE,
            ARGENTINA_CERTIFICATE_CONFLICT_MISSING_SECURITY_CODE,
            ARGENTINA_CERTIFICATE_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: '02118499487',
        showProfileMeta: false,
    },
};
