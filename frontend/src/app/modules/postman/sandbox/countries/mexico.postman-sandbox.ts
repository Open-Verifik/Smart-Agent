/**
 * Mexico Postman sandbox profiles.
 * Middleware requires CURP documentNumber (17–18 chars) — uses mapped CURP fixture IDs.
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';
import {
    appendVehiclePlateSandboxProfiles,
    SANDBOX_DEFAULT_PLATE,
} from '../vehicle-plate-profiles';

export const MEXICO_IDENTITY_ENDPOINT_CODE = 'mexico_identity_lookup';
export const MEXICO_RFC_ENDPOINT_CODE = 'mexico_api_rfc_lookup';
export const MEXICO_COMPANY_ENDPOINT_CODE = 'mexico_api_company';
export const MEXICO_VEHICLE_ENDPOINT_CODE = 'mexico_api_vehicle';
export const MEXICO_INE_VALIDATE_ENDPOINT_CODE = 'mexico_api_ine_validate';
export const MEXICO_INE_OCR_ENDPOINT_CODE = 'mexico_api_ine_ocr';
export const MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE = 'mexico_api_cedula_profesional';
export const MEXICO_HEALTH_WORKER_ENDPOINT_CODE = 'mexico_api_health_worker';
export const MEXICO_SIGED_CERTIFICATE_ENDPOINT_CODE = 'mexico_api_siged_certificado';

const MEXICO_CEDULA_CURP = 'LOPE900501HDFGRN01';
const MEXICO_CEDULA_CURP_NAME_FALLBACK = 'LOPE000003MDFRRN03';
const MEXICO_CEDULA_CURP_NO_LICENSE = 'LOPE000002MDFRRN02';
const MEXICO_CEDULA_LICENSE = '10000001';
const MEXICO_HEALTH_LICENSE = '10000002';
const MEXICO_SIGED_FOLIO = 'SIGED10000001';
const MEXICO_SIGED_FOLIO_NOT_FOUND = 'FOLIO90040401';

const MEXICO_INE_SANDBOX_CIC = '187639699';
const MEXICO_INE_SANDBOX_OCR = '0276031206745';
const MEXICO_INE_SANDBOX_ELECTOR_KEY = 'CSFTGV76061131H400';
const MEXICO_INE_ERROR_DOCUMENT = '900404019';

const MEXICO_COMPANY_DEMO_FME = 'N-2021007300';

const MEXICO_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: MEXICO_COMPANY_DEMO_FME,
        fullName: 'INNOVACION, DISEÑO Y CONSTRUCCION — OTUMBA',
        paramOverrides: {
            documentType: 'FME',
            documentNumber: MEXICO_COMPANY_DEMO_FME,
        },
    },
    ...Array.from({ length: 10 }, (_, index) => {
        const embedId = 10000001 + index;
        const fme = `N-${embedId}`;

        return {
            documentNumber: fme,
            fullName: `VERIFIK SANDBOX MEXICO ${String(index + 1).padStart(2, '0')} — FME`,
            paramOverrides: {
                documentType: 'FME',
                documentNumber: fme,
            },
        };
    }),
];

const MEXICO_COMPANY_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: 'N-90040401',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'FME',
        documentNumber: 'N-90040401',
    },
};

const MEXICO_ERROR_CURP = 'LOPE900404HDFNTF01';

const MEXICO_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: 'LOPE900501HDFGRN01', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { documentNumber: 'PERJ900502HDFRRD02', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { documentNumber: 'MARF900503HDFRNF03', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { documentNumber: 'GONL900504HDFNHR04', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { documentNumber: 'RAMA900505HDFMRT05', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { documentNumber: 'SILD900506HDFLMD06', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { documentNumber: 'CASV900507HDFSTR07', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { documentNumber: 'MORR900508HDFMLS08', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { documentNumber: 'DIAP900509HDFDRY09', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { documentNumber: 'ROJF900510HDFRJD10', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

const MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    profileKey: '409-invalid-documentType',
    documentNumber: '90040902',
    fullName: '409 — Invalid documentType',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { documentType: 'INVALID', documentNumber: 'LOPE900501HDFGRN01' },
};

const MEXICO_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: MEXICO_ERROR_CURP,
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
};

export const MEXICO_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [MEXICO_IDENTITY_ENDPOINT_CODE]: {
        profiles: [
            ...MEXICO_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE,
            MEXICO_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: 'LOPE900501HDFGRN01',
        documentTypeByCode: {
            [MEXICO_IDENTITY_ENDPOINT_CODE]: 'CURP',
        },
        showProfileMeta: false,
    },
    [MEXICO_RFC_ENDPOINT_CODE]: {
        profiles: [
            ...MEXICO_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE,
            MEXICO_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: 'LOPE900501HDFGRN01',
        documentTypeByCode: {
            [MEXICO_RFC_ENDPOINT_CODE]: 'CURP',
        },
        showProfileMeta: false,
    },
    [MEXICO_COMPANY_ENDPOINT_CODE]: {
        profiles: [
            ...MEXICO_COMPANY_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE,
            MEXICO_COMPANY_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: MEXICO_COMPANY_DEMO_FME,
        documentTypeByCode: {
            [MEXICO_COMPANY_ENDPOINT_CODE]: 'FME',
        },
        showProfileMeta: false,
    },
    [MEXICO_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [MEXICO_INE_VALIDATE_ENDPOINT_CODE]: {
        profiles: [
            {
                documentNumber: MEXICO_INE_SANDBOX_CIC,
                fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — CIC',
                paramOverrides: {
                    documentType: 'INE',
                    documentNumber: MEXICO_INE_SANDBOX_CIC,
                },
            },
            {
                documentNumber: MEXICO_INE_SANDBOX_OCR,
                fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — OCR',
                paramOverrides: {
                    documentType: 'INE',
                    documentNumber: MEXICO_INE_SANDBOX_OCR,
                },
            },
            {
                documentNumber: MEXICO_INE_SANDBOX_ELECTOR_KEY,
                fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — clave de elector',
                paramOverrides: {
                    documentType: 'INE',
                    documentNumber: MEXICO_INE_SANDBOX_ELECTOR_KEY,
                },
            },
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            {
                documentNumber: MEXICO_INE_ERROR_DOCUMENT,
                fullName: '404 — Record not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: {
                    documentType: 'INE',
                    documentNumber: MEXICO_INE_ERROR_DOCUMENT,
                },
            },
        ],
        defaultDocumentNumber: MEXICO_INE_SANDBOX_CIC,
        documentTypeByCode: {
            [MEXICO_INE_VALIDATE_ENDPOINT_CODE]: 'INE',
        },
        showProfileMeta: false,
    },
    [MEXICO_INE_OCR_ENDPOINT_CODE]: {
        profiles: [
            {
                documentNumber: 'ine-front.jpg',
                fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — OCR + validate one-shot',
                paramOverrides: {
                    front: 'https://example.com/ine-front.jpg',
                    back: 'https://example.com/ine-back.jpg',
                },
            },
            {
                documentNumber: '404',
                fullName: '404 — Record not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: {
                    front: 'https://example.com/ine-front-404.jpg',
                },
            },
        ],
        defaultDocumentNumber: 'ine-front.jpg',
        showProfileMeta: false,
    },
    [MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE]: {
        profiles: [
            {
                documentNumber: MEXICO_CEDULA_CURP,
                fullName: 'ANA LOPEZ RUIZ — CURP (direct match, 2 licenses)',
                paramOverrides: { documentType: 'CURP', documentNumber: MEXICO_CEDULA_CURP },
            },
            {
                documentNumber: MEXICO_CEDULA_CURP_NAME_FALLBACK,
                fullName: 'ANA LOPEZ RUIZ — CURP (name fallback)',
                paramOverrides: { documentType: 'CURP', documentNumber: MEXICO_CEDULA_CURP_NAME_FALLBACK },
            },
            {
                documentNumber: MEXICO_CEDULA_LICENSE,
                fullName: 'ANA LOPEZ RUIZ — license number',
                paramOverrides: { documentType: 'CEDULA', documentNumber: MEXICO_CEDULA_LICENSE },
            },
            {
                profileKey: 'name-search',
                documentNumber: 'name-search',
                fullName: 'ANA LOPEZ RUIZ — name search',
                paramOverrides: {
                    documentType: '',
                    documentNumber: '',
                    firstName: 'ANA',
                    lastName: 'LOPEZ RUIZ',
                },
            },
            {
                profileKey: 'name-ambiguous',
                documentNumber: 'name-ambiguous',
                fullName: 'ANA AMBIGUA — ambiguous name',
                paramOverrides: {
                    documentType: '',
                    documentNumber: '',
                    firstName: 'ANA',
                    lastName: 'AMBIGUA',
                },
            },
            {
                documentNumber: MEXICO_ERROR_CURP,
                fullName: '404 — Record not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: { documentType: 'CURP', documentNumber: MEXICO_ERROR_CURP },
            },
            {
                documentNumber: MEXICO_CEDULA_CURP_NO_LICENSE,
                fullName: '404 — Valid CURP, no license',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: { documentType: 'CURP', documentNumber: MEXICO_CEDULA_CURP_NO_LICENSE },
            },
            {
                documentNumber: '90040401',
                fullName: '404 — License not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: { documentType: 'CEDULA', documentNumber: '90040401' },
            },
            {
                profileKey: 'name-not-found',
                documentNumber: 'name-not-found',
                fullName: '404 — Name not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: {
                    documentType: '',
                    documentNumber: '',
                    firstName: 'ANA',
                    lastName: 'NOTFOUND',
                },
            },
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE,
        ],
        defaultDocumentNumber: MEXICO_CEDULA_CURP,
        documentTypeByCode: {
            [MEXICO_CEDULA_PROFESIONAL_ENDPOINT_CODE]: 'CURP',
        },
        showProfileMeta: false,
    },
    [MEXICO_HEALTH_WORKER_ENDPOINT_CODE]: {
        profiles: [
            {
                documentNumber: MEXICO_CEDULA_CURP,
                fullName: 'ANA LOPEZ RUIZ — CURP (one health license)',
                paramOverrides: { documentType: 'CURP', documentNumber: MEXICO_CEDULA_CURP },
            },
            {
                documentNumber: MEXICO_CEDULA_CURP_NAME_FALLBACK,
                fullName: 'ANA LOPEZ RUIZ — CURP (name fallback)',
                paramOverrides: { documentType: 'CURP', documentNumber: MEXICO_CEDULA_CURP_NAME_FALLBACK },
            },
            {
                documentNumber: MEXICO_HEALTH_LICENSE,
                fullName: 'ANA LOPEZ RUIZ — nursing license',
                paramOverrides: { documentType: 'CEDULA', documentNumber: MEXICO_HEALTH_LICENSE },
            },
            {
                documentNumber: MEXICO_CEDULA_LICENSE,
                fullName: '404 — No health license',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: { documentType: 'CEDULA', documentNumber: MEXICO_CEDULA_LICENSE },
            },
            {
                documentNumber: MEXICO_ERROR_CURP,
                fullName: '404 — Record not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: { documentType: 'CURP', documentNumber: MEXICO_ERROR_CURP },
            },
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE,
        ],
        defaultDocumentNumber: MEXICO_CEDULA_CURP,
        documentTypeByCode: {
            [MEXICO_HEALTH_WORKER_ENDPOINT_CODE]: 'CURP',
        },
        showProfileMeta: false,
    },
    [MEXICO_SIGED_CERTIFICATE_ENDPOINT_CODE]: {
        profiles: [
            {
                documentNumber: MEXICO_SIGED_FOLIO,
                folio: MEXICO_SIGED_FOLIO,
                fullName: 'ANA LOPEZ RUIZ — folio',
                paramOverrides: { folio: MEXICO_SIGED_FOLIO, fullName: '', curp: '' },
            },
            {
                profileKey: 'folio-name-match',
                documentNumber: MEXICO_SIGED_FOLIO,
                folio: MEXICO_SIGED_FOLIO,
                fullName: 'Ana Lopez Ruiz — folio and name',
                paramOverrides: { folio: MEXICO_SIGED_FOLIO, fullName: 'Ana Lopez Ruiz', curp: '' },
            },
            {
                profileKey: 'folio-name-mismatch',
                documentNumber: MEXICO_SIGED_FOLIO,
                folio: MEXICO_SIGED_FOLIO,
                fullName: '409 — name_mismatch',
                responseType: 'error',
                expectedStatus: 409,
                paramOverrides: { folio: MEXICO_SIGED_FOLIO, fullName: 'Maria Perez', curp: '' },
            },
            {
                documentNumber: MEXICO_SIGED_FOLIO_NOT_FOUND,
                folio: MEXICO_SIGED_FOLIO_NOT_FOUND,
                fullName: '404 — Record not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: { folio: MEXICO_SIGED_FOLIO_NOT_FOUND, fullName: '', curp: '' },
            },
            {
                profileKey: 'missing-folio',
                documentNumber: 'missing-folio',
                fullName: '409 — folio is required',
                responseType: 'error',
                expectedStatus: 409,
                paramOverrides: { folio: '', fullName: '', curp: '' },
            },
            {
                profileKey: 'curp-match',
                documentNumber: MEXICO_CEDULA_CURP,
                fullName: 'ANA LOPEZ RUIZ — CURP wins',
                paramOverrides: { folio: MEXICO_SIGED_FOLIO, fullName: 'Maria Perez', curp: MEXICO_CEDULA_CURP },
            },
            {
                profileKey: 'curp-not-found',
                documentNumber: MEXICO_ERROR_CURP,
                fullName: '404 — CURP not found',
                responseType: 'error',
                expectedStatus: 404,
                paramOverrides: { folio: MEXICO_SIGED_FOLIO, fullName: '', curp: MEXICO_ERROR_CURP },
            },
        ],
        defaultDocumentNumber: MEXICO_SIGED_FOLIO,
        defaultFolio: MEXICO_SIGED_FOLIO,
        showProfileMeta: false,
    },
};
