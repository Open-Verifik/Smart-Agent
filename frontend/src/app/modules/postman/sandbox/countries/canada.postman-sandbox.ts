/**
 * Canada Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/ExtractionCompany/Canada and DriverLicense helpers.
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const CANADA_COMPANY_ENDPOINT_CODE = 'canada_api_company';
export const CANADA_ONTARIO_DRIVER_LICENSE_ENDPOINT_CODE = 'canada_api_driver_license_ontario';
export const CANADA_ONTARIO_PLATE_ENDPOINT_CODE = 'canada_api_ontario_plate';
export const CANADA_QUEBEC_DRIVER_LICENSE_ENDPOINT_CODE = 'canada_api_driver_license_quebec';
export const CANADA_BC_DRIVER_LICENSE_ENDPOINT_CODE = 'canada_api_driver_license_british-columbia';

const CANADA_COMPANY_DEFAULT_BUSINESS = 'BAI HENG PACKAGING SUPPLIES INC';
const CANADA_COMPANY_DEFAULT_PROVINCE = 'ON';

const CANADA_ONTARIO_PLATE_DEFAULT_PLATE = 'BKTR456';
const CANADA_ONTARIO_PLATE_DEFAULT_PERMIT = 'N9166001';

const CANADA_ONTARIO_PLATE_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: 'BKTR456',
        fullName: 'BKTR456 — Ontario plate expiry (valid)',
        plate: 'BKTR456',
        paramOverrides: { plate: 'BKTR456', permitNumber: 'N9166001' },
    },
    {
        documentNumber: 'CXKT789',
        fullName: 'CXKT789 — Ontario plate expiry (valid)',
        plate: 'CXKT789',
        paramOverrides: { plate: 'CXKT789', permitNumber: 'N9166002' },
    },
    {
        documentNumber: 'MNPL234',
        fullName: 'MNPL234 — Ontario plate expiry (expired)',
        plate: 'MNPL234',
        paramOverrides: { plate: 'MNPL234', permitNumber: 'N9166003' },
    },
];

const CANADA_ONTARIO_PLATE_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-ontario-plate',
    documentNumber: 'ERR40401',
    fullName: '404 — Ontario plate not found',
    responseType: 'error',
    expectedStatus: 404,
    plate: 'ERR40401',
    paramOverrides: { plate: 'ERR40401', permitNumber: 'N9166001' },
};

const CANADA_ONTARIO_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    { documentNumber: '10000001', fullName: 'MARIA ELENA LOPEZ GARCIA — Ontario Valid' },
    { documentNumber: '10000002', fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ — Ontario Valid' },
    { documentNumber: '10000003', fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ — Ontario Valid' },
    { documentNumber: '10000004', fullName: 'LUIS ALBERTO GONZALEZ HERRERA — Ontario Valid' },
    { documentNumber: '10000005', fullName: 'ANA SOFIA RAMIREZ TORRES — Ontario Valid' },
    { documentNumber: '10000006', fullName: 'DIEGO ALEJANDRO SILVA MENDOZA — Ontario Valid' },
    { documentNumber: '10000007', fullName: 'VALENTINA ANDREA CASTRO VARGAS — Ontario Valid' },
    { documentNumber: '10000008', fullName: 'RICARDO JOSE MORALES SUAREZ — Ontario Valid' },
    { documentNumber: '10000009', fullName: 'PATRICIA CAROLINA DIAZ REYES — Ontario Valid' },
    { documentNumber: '10000010', fullName: 'FERNANDO MIGUEL ROJAS DELGADO — Ontario Valid' },
];

const CANADA_QUEBEC_DEMO_LICENSE = 'L12345678901';

const CANADA_QUEBEC_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: CANADA_QUEBEC_DEMO_LICENSE,
        fullName: 'Quebec licence demo — Valid',
        paramOverrides: { documentNumber: CANADA_QUEBEC_DEMO_LICENSE },
    },
    ...CANADA_ONTARIO_SANDBOX_PROFILES.map((profile) => ({
        ...profile,
        fullName: profile.fullName.replace('Ontario', 'Quebec'),
    })),
];

const CANADA_BC_LAST_NAMES = [
    'MARTIN',
    'TREMBLAY',
    'GAGNON',
    'ROY',
    'COTE',
    'BOUCHARD',
    'GAUTHIER',
    'MORIN',
    'LAVOIE',
    'FORTIN',
];

const CANADA_BC_SANDBOX_PROFILES: PostmanSandboxProfile[] = Array.from({ length: 10 }, (_, index) => {
    const documentNumber = String(1000001 + index);

    return {
        documentNumber,
        fullName: `${CANADA_BC_LAST_NAMES[index]} — BC Valid`,
        paramOverrides: {
            documentNumber,
            lastName: CANADA_BC_LAST_NAMES[index],
        },
    };
});

const CANADA_BC_DEMO_PROFILE: PostmanSandboxProfile = {
    documentNumber: '1123456',
    fullName: 'HELLO — BC demo Valid',
    paramOverrides: {
        documentNumber: '1123456',
        lastName: 'HELLO',
    },
};

const CANADA_BC_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-bc-lastName',
    documentNumber: '90040401',
    fullName: '404 — BC licence not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentNumber: '1000001',
        lastName: 'NOT FOUND 90040401',
    },
};

const CANADA_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: '10000001',
        fullName: 'BAI HENG PACKAGING SUPPLIES INC — Active (ON)',
        paramOverrides: {
            business: CANADA_COMPANY_DEFAULT_BUSINESS,
            province: CANADA_COMPANY_DEFAULT_PROVINCE,
        },
    },
];

const CANADA_COMPANY_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-canada-company',
    documentNumber: '90040401',
    fullName: '404 — Business not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        business: 'NOT FOUND 90040401 CORP',
        province: CANADA_COMPANY_DEFAULT_PROVINCE,
    },
};

export const CANADA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [CANADA_COMPANY_ENDPOINT_CODE]: {
        profiles: [...CANADA_COMPANY_SANDBOX_PROFILES, CANADA_COMPANY_ERROR_PROFILE_404],
        defaultDocumentNumber: '10000001',
        defaultBusiness: CANADA_COMPANY_DEFAULT_BUSINESS,
        defaultProvince: CANADA_COMPANY_DEFAULT_PROVINCE,
        showProfileMeta: false,
    },
    [CANADA_ONTARIO_DRIVER_LICENSE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(CANADA_ONTARIO_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER],
        }),
        defaultDocumentNumber: '10000001',
        showProfileMeta: false,
    },
    [CANADA_ONTARIO_PLATE_ENDPOINT_CODE]: {
        profiles: [...CANADA_ONTARIO_PLATE_SANDBOX_PROFILES, CANADA_ONTARIO_PLATE_ERROR_PROFILE_404],
        defaultDocumentNumber: CANADA_ONTARIO_PLATE_DEFAULT_PLATE,
        defaultPlate: CANADA_ONTARIO_PLATE_DEFAULT_PLATE,
        defaultPermitNumber: CANADA_ONTARIO_PLATE_DEFAULT_PERMIT,
        showProfileMeta: false,
    },
    [CANADA_QUEBEC_DRIVER_LICENSE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(CANADA_QUEBEC_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER],
        }),
        defaultDocumentNumber: CANADA_QUEBEC_DEMO_LICENSE,
        showProfileMeta: false,
    },
    [CANADA_BC_DRIVER_LICENSE_ENDPOINT_CODE]: {
        profiles: [
            CANADA_BC_DEMO_PROFILE,
            ...CANADA_BC_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            CANADA_BC_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: '1123456',
        defaultLastName: 'HELLO',
        showProfileMeta: false,
    },
};
