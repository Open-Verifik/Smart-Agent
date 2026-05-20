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
export const MEXICO_COMPANY_ENDPOINT_CODE = 'mexico_api_company';
export const MEXICO_VEHICLE_ENDPOINT_CODE = 'mexico_api_vehicle';

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
};
