/**
 * Mexico Postman sandbox profiles.
 * Middleware requires CURP documentNumber (17–18 chars) — uses mapped CURP fixture IDs.
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const MEXICO_IDENTITY_ENDPOINT_CODE = 'mexico_identity_lookup';

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
};
