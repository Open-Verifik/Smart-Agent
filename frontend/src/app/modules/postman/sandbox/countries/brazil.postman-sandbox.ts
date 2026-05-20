/**
 * Brazil Postman sandbox profiles.
 * Middleware requires CPF documentNumber length 11 and dateOfBirth — uses 11-digit padded IDs.
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
} from '../sandbox-error-profiles';

import {
    appendVehiclePlateSandboxProfiles,
    SANDBOX_DEFAULT_PLATE,
} from '../vehicle-plate-profiles';

export const BRAZIL_IDENTITY_ENDPOINT_CODE = 'brasil_api_identity_lookup';
export const BRAZIL_VEHICLE_ENDPOINT_CODE = 'brasil_api_vehicle';
export const BRAZIL_COMPANY_ENDPOINT_CODE = 'brasil_api_company_lookup';
export const BRAZIL_CRIMINAL_HISTORY_ENDPOINT_CODE = 'brasil_api_criminal_history';

const BRAZIL_CRIMINAL_DEMO_CPF = '01234567801';
const BRAZIL_CRIMINAL_DEMO_DATE_OF_BIRTH = '17/02/2002';

const BRAZIL_COMPANY_DEFAULT_CNPJ = '09159197000180';

const BRAZIL_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ,
        fullName: 'EMPRESA EXEMPLO LTDA — ATIVA',
        paramOverrides: {
            documentType: 'CNPJ',
            documentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ,
        },
    },
];

const BRAZIL_COMPANY_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '90040401000180',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'CNPJ',
        documentNumber: '90040401000180',
    },
};

const BRAZIL_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ,
    },
};

const BRAZIL_DEFAULT_DATE_OF_BIRTH = '15/03/1990';

const BRAZIL_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '00010000001', fullName: 'MARIA ELENA LOPEZ GARCIA — valid' },
    { documentNumber: '00010000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — valid' },
    { documentNumber: '00010000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — valid' },
    { documentNumber: '00010000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — valid' },
    { documentNumber: '00010000005', fullName: 'ANA SOFIA RAMIREZ TORRES — valid' },
    { documentNumber: '00010000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — valid' },
    { documentNumber: '00010000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — valid' },
    { documentNumber: '00010000008', fullName: 'RICARDO JOSE MORALES SUAREZ — valid' },
    { documentNumber: '00010000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — valid' },
    { documentNumber: '00010000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — valid' },
];

const BRAZIL_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    profileKey: '409-invalid-documentType',
    documentNumber: '90040902',
    fullName: '409 — Invalid documentType',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '00010000001',
        dateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH,
    },
};

const BRAZIL_CONFLICT_MISSING_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-missing-dateOfBirth',
    documentNumber: '90040908',
    fullName: '409 — Missing dateOfBirth',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: '', documentNumber: '00010000001' },
};

const BRAZIL_CONFLICT_INVALID_DATE_OF_BIRTH: PostmanSandboxProfile = {
    profileKey: '409-invalid-dateOfBirth',
    documentNumber: '90040909',
    fullName: '409 — Invalid dateOfBirth format',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { dateOfBirth: 'not-a-date', documentNumber: '00010000001' },
};

const BRAZIL_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '00090040401',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
};

const BRAZIL_CRIMINAL_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: BRAZIL_CRIMINAL_DEMO_CPF,
        fullName: 'João Silva — criminal certificate demo',
        paramOverrides: {
            documentType: 'CPF',
            documentNumber: BRAZIL_CRIMINAL_DEMO_CPF,
            dateOfBirth: BRAZIL_CRIMINAL_DEMO_DATE_OF_BIRTH,
        },
    },
    ...BRAZIL_SANDBOX_PROFILES.map((profile) => ({
        ...profile,
        paramOverrides: {
            documentType: 'CPF',
            documentNumber: profile.documentNumber,
            dateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH,
        },
    })),
];

const BRAZIL_CRIMINAL_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '90040401001',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'CPF',
        documentNumber: '90040401001',
        dateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH,
    },
};

export const BRAZIL_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [BRAZIL_IDENTITY_ENDPOINT_CODE]: {
        profiles: [
            ...BRAZIL_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            BRAZIL_CONFLICT_INVALID_DOCUMENT_TYPE,
            BRAZIL_CONFLICT_MISSING_DATE_OF_BIRTH,
            BRAZIL_CONFLICT_INVALID_DATE_OF_BIRTH,
            BRAZIL_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: '00010000001',
        defaultDateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH,
        documentTypeByCode: {
            [BRAZIL_IDENTITY_ENDPOINT_CODE]: 'CPF',
        },
        showProfileMeta: false,
    },
    [BRAZIL_VEHICLE_ENDPOINT_CODE]: {
        profiles: appendVehiclePlateSandboxProfiles(),
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        showProfileMeta: false,
    },
    [BRAZIL_COMPANY_ENDPOINT_CODE]: {
        profiles: [
            ...BRAZIL_COMPANY_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            BRAZIL_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE,
            BRAZIL_COMPANY_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ,
        documentTypeByCode: {
            [BRAZIL_COMPANY_ENDPOINT_CODE]: 'CNPJ',
        },
        showProfileMeta: false,
    },
    [BRAZIL_CRIMINAL_HISTORY_ENDPOINT_CODE]: {
        profiles: [
            ...BRAZIL_CRIMINAL_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            BRAZIL_CONFLICT_INVALID_DOCUMENT_TYPE,
            BRAZIL_CONFLICT_MISSING_DATE_OF_BIRTH,
            BRAZIL_CONFLICT_INVALID_DATE_OF_BIRTH,
            BRAZIL_CRIMINAL_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: BRAZIL_CRIMINAL_DEMO_CPF,
        defaultDateOfBirth: BRAZIL_CRIMINAL_DEMO_DATE_OF_BIRTH,
        documentTypeByCode: {
            [BRAZIL_CRIMINAL_HISTORY_ENDPOINT_CODE]: 'CPF',
        },
        showProfileMeta: false,
    },
};
