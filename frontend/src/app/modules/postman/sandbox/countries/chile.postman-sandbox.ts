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
import {
    appendVehicleSoapSandboxProfiles,
    SANDBOX_DEFAULT_SOAP_PLATE,
} from '../vehicle-soap-profiles';

export const CHILE_IDENTITY_ENDPOINT_CODE = 'chile_api_identity_lookup';
export const CHILE_VEHICLE_ENDPOINT_CODE = 'chile_api_vehicle';
export const CHILE_VEHICLE_V3_ENDPOINT_CODE = 'chile_api_vehicle_v3';
export const CHILE_DRIVER_LICENSE_ENDPOINT_CODE = 'chile_api_driver_license';
export const CHILE_BUSINESS_ENDPOINT_CODE = 'chile_api_business_lookup';
export const CHILE_TAXPAYER_ENDPOINT_CODE = 'chile_api_taxpayer_lookup';
export const CHILE_VALIDATE_ENDPOINT_CODE = 'chile_api_validate';
export const CHILE_TRANSPORT_VEHICLE_ENDPOINT_CODE = 'chile_api_transport_vehicle';
export const CHILE_VEHICLE_SOAP_ENDPOINT_CODE = 'chile_api_vehicle_soap';
export const CHILE_CERTIFICATE_VERIFY_ENDPOINT_CODE = 'cl_certificate_verify';

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

const CHILE_CERTIFICATE_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: '50070080804',
        fullName: 'JUAN CARLOS PEREZ GONZALEZ — no annotations',
        paramOverrides: { folio: '50070080804', verificationCode: '2aacbb9a636a' },
    },
    {
        documentNumber: '50070080805',
        fullName: 'MARIA ELENA LOPEZ GARCIA — no annotations',
        paramOverrides: { folio: '50070080805', verificationCode: '2aacbb9a636b' },
    },
    {
        documentNumber: '50070080806',
        fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — general conviction',
        paramOverrides: { folio: '50070080806', verificationCode: '2aacbb9a636c' },
    },
    {
        documentNumber: '50070080807',
        fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — no annotations',
        paramOverrides: { folio: '50070080807', verificationCode: '2aacbb9a636d' },
    },
    {
        documentNumber: '50070080808',
        fullName: 'LUIS ALBERTO GONZALEZ HERRERA — both registers',
        paramOverrides: { folio: '50070080808', verificationCode: '2aacbb9a636e' },
    },
    {
        documentNumber: '50070080809',
        fullName: 'ANA SOFIA RAMIREZ TORRES — no annotations',
        paramOverrides: { folio: '50070080809', verificationCode: '2aacbb9a636f' },
    },
    {
        documentNumber: '50070080810',
        fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — no annotations',
        paramOverrides: { folio: '50070080810', verificationCode: '2aacbb9a6370' },
    },
    {
        documentNumber: '50070080811',
        fullName: 'VALENTINA ANDREA CASTRO VARGAS — general conviction',
        paramOverrides: { folio: '50070080811', verificationCode: '2aacbb9a6371' },
    },
    {
        documentNumber: '50070080812',
        fullName: 'RICARDO JOSE MORALES SUAREZ — no annotations',
        paramOverrides: { folio: '50070080812', verificationCode: '2aacbb9a6372' },
    },
    {
        documentNumber: '50070080813',
        fullName: 'PATRICIA CAROLINA DIAZ REYES — no annotations',
        paramOverrides: { folio: '50070080813', verificationCode: '2aacbb9a6373' },
    },
];

const CHILE_CERTIFICATE_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-folio',
    documentNumber: '9004040100001',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { folio: '9004040100001', verificationCode: '2aacbb9a636a' },
};

const CHILE_CERTIFICATE_CONFLICT_MISSING_FOLIO: PostmanSandboxProfile = {
    profileKey: '409-missing-folio',
    documentNumber: '90040901',
    fullName: '409 — Missing folio',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { folio: '', verificationCode: '2aacbb9a636a' },
};

const CHILE_CERTIFICATE_CONFLICT_MISSING_VERIFICATION_CODE: PostmanSandboxProfile = {
    profileKey: '409-missing-verificationCode',
    documentNumber: '90040902',
    fullName: '409 — Missing verificationCode',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { folio: '50070080804', verificationCode: '' },
};

const CHILE_CERTIFICATE_CONFLICT_INVALID_FOLIO_LENGTH: PostmanSandboxProfile = {
    profileKey: '409-invalid-folio',
    documentNumber: '90040903',
    fullName: '409 — Invalid folio length',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { folio: '123', verificationCode: '2aacbb9a636a' },
};

const CHILE_VEHICLE_V3_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        plate: 'XH6640',
        documentNumber: 'XH6640',
        fullName: 'PEUGEOT PARTNER TOLE 1.9 — technical review approved',
    },
    {
        plate: 'FHDJ31',
        documentNumber: 'FHDJ31',
        fullName: 'CHEVROLET SAIL — technical review approved',
    },
    {
        plate: 'DCCH18',
        documentNumber: 'DCCH18',
        fullName: 'HYUNDAI ACCENT GL 1.6 — technical review approved',
    },
    {
        profileKey: '409-invalid-v3-plate',
        plate: 'BB985',
        documentNumber: 'BB985',
        fullName: '409 — Invalid plate format',
        responseType: 'error',
        expectedStatus: 409,
    },
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
    [CHILE_VEHICLE_V3_ENDPOINT_CODE]: {
        profiles: CHILE_VEHICLE_V3_SANDBOX_PROFILES,
        defaultPlate: 'XH6640',
        defaultDocumentNumber: 'XH6640',
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
    [CHILE_VEHICLE_SOAP_ENDPOINT_CODE]: {
        profiles: appendVehicleSoapSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_SOAP_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_SOAP_PLATE,
        showProfileMeta: false,
    },
    [CHILE_CERTIFICATE_VERIFY_ENDPOINT_CODE]: {
        profiles: [
            ...CHILE_CERTIFICATE_SANDBOX_PROFILES,
            CHILE_CERTIFICATE_CONFLICT_MISSING_FOLIO,
            CHILE_CERTIFICATE_CONFLICT_MISSING_VERIFICATION_CODE,
            CHILE_CERTIFICATE_CONFLICT_INVALID_FOLIO_LENGTH,
            CHILE_CERTIFICATE_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: '50070080804',
        showProfileMeta: false,
    },
};
