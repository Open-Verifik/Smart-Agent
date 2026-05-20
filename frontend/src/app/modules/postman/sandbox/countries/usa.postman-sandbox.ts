/**
 * USA Postman sandbox profiles.
 * Source of truth: verifik-backend Repositories for company, SSN, driver license, and vehicle.
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';
import {
    appendVehiclePlateSandboxProfiles,
    appendVehicleVinSandboxProfiles,
    SANDBOX_DEFAULT_PLATE,
    SANDBOX_DEFAULT_VIN,
    SANDBOX_ERROR_PROFILE_PLATE_404,
    SANDBOX_VEHICLE_PLATE_PROFILES,
} from '../vehicle-plate-profiles';

export const USA_COMPANY_ENDPOINT_CODE = 'usa_api_company';
export const USA_SSN_ENDPOINT_CODE = 'usa_api_ssn';
export const USA_FLORIDA_DRIVER_LICENSE_ENDPOINT_CODE = 'usa_api_driver_license_lookup';
export const USA_KANSAS_DRIVER_LICENSE_ENDPOINT_CODE = 'usa_api_driver_license_lookup_kansas';
export const USA_VEHICLE_ENDPOINT_CODE = 'usa_api_vehicle';
export const USA_VEHICLE_BY_VIN_ENDPOINT_CODE = 'usa_api_vehicle_lookup_by_vin';

const USA_COMPANY_DEFAULT_BUSINESS = 'APPLE INC';
const USA_SSN_DEMO = '123-45-678';
const USA_KANSAS_DEFAULT_DATE_OF_BIRTH = '15/03/1990';
const USA_VEHICLE_DEFAULT_STATE = 'FL';

const USA_SSN_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: USA_SSN_DEMO,
        fullName: '123-45-678 — SSN demo Valid',
        paramOverrides: { documentNumber: USA_SSN_DEMO },
    },
    ...Array.from({ length: 10 }, (_, index) => {
        const documentNumber = String(10000001 + index);

        return {
            documentNumber,
            fullName: `SSN fixture ${String(index + 1).padStart(2, '0')} — Valid`,
            paramOverrides: { documentNumber },
        };
    }),
];

const USA_SSN_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '90040401',
    fullName: '404 — SSN not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { documentNumber: '90040401' },
};

const USA_COMPANY_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: '10000001',
        fullName: 'APPLE INC — SEC demo Valid',
        paramOverrides: { business: USA_COMPANY_DEFAULT_BUSINESS },
    },
];

const USA_COMPANY_ERROR_PROFILE_404: PostmanSandboxProfile = {
    profileKey: '404-usa-company',
    documentNumber: '90040401',
    fullName: '404 — Business not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { business: 'NOT FOUND 90040401 INC' },
};

const USA_FLORIDA_SANDBOX_PROFILES: PostmanSandboxProfile[] = Array.from({ length: 10 }, (_, index) => {
    const fixtureKey = 10000001 + index;
    const documentNumber = String(fixtureKey).padStart(13, '0');

    return {
        documentNumber,
        fullName: `Florida DL ${String(index + 1).padStart(2, '0')} — Valid`,
        paramOverrides: { documentNumber },
    };
});

const USA_FLORIDA_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: String(90040401).padStart(13, '0'),
    fullName: '404 — Florida license not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: { documentNumber: String(90040401).padStart(13, '0') },
};

const USA_KANSAS_FIRST_NAMES = [
    'MARIA ELENA',
    'JOSE ANTONIO',
    'CARLA ISABEL',
    'LUIS ALBERTO',
    'ANA SOFIA',
    'DIEGO ALEJANDRO',
    'VALENTINA ANDREA',
    'RICARDO JOSE',
    'PATRICIA CAROLINA',
    'FERNANDO MIGUEL',
];

const USA_KANSAS_LAST_NAMES = [
    'LOPEZ GARCIA',
    'PEREZ RODRIGUEZ',
    'MARTINEZ FERNANDEZ',
    'GONZALEZ HERRERA',
    'RAMIREZ TORRES',
    'SILVA MENDOZA',
    'CASTRO VARGAS',
    'MORALES SUAREZ',
    'DIAZ REYES',
    'ROJAS DELGADO',
];

const USA_KANSAS_SANDBOX_PROFILES: PostmanSandboxProfile[] = Array.from({ length: 10 }, (_, index) => {
    const documentNumber = `K${10000001 + index}`;

    return {
        documentNumber,
        fullName: `${USA_KANSAS_FIRST_NAMES[index]} ${USA_KANSAS_LAST_NAMES[index]} — Kansas Valid`,
        paramOverrides: {
            documentNumber,
            dateOfBirth: USA_KANSAS_DEFAULT_DATE_OF_BIRTH,
            firstName: USA_KANSAS_FIRST_NAMES[index],
            lastName: USA_KANSAS_LAST_NAMES[index],
        },
    };
});

const USA_KANSAS_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: 'K90040401',
    fullName: '404 — Kansas license not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentNumber: 'K90040401',
        dateOfBirth: USA_KANSAS_DEFAULT_DATE_OF_BIRTH,
        firstName: 'NOT FOUND',
        lastName: '90040401',
    },
};

const USA_VEHICLE_SANDBOX_PROFILES: PostmanSandboxProfile[] = SANDBOX_VEHICLE_PLATE_PROFILES.map((profile) => ({
    ...profile,
    paramOverrides: {
        plate: profile.plate ?? profile.documentNumber,
        state: USA_VEHICLE_DEFAULT_STATE,
    },
}));

const USA_VEHICLE_ERROR_PROFILE_404: PostmanSandboxProfile = {
    ...SANDBOX_ERROR_PROFILE_PLATE_404,
    paramOverrides: {
        plate: SANDBOX_ERROR_PROFILE_PLATE_404.plate ?? 'ERR40401',
        state: USA_VEHICLE_DEFAULT_STATE,
    },
};

export const USA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [USA_COMPANY_ENDPOINT_CODE]: {
        profiles: [...USA_COMPANY_SANDBOX_PROFILES, USA_COMPANY_ERROR_PROFILE_404],
        defaultDocumentNumber: '10000001',
        defaultBusiness: USA_COMPANY_DEFAULT_BUSINESS,
        showProfileMeta: false,
    },
    [USA_SSN_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(USA_SSN_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER],
        }).concat(USA_SSN_ERROR_PROFILE_404),
        defaultDocumentNumber: USA_SSN_DEMO,
        showProfileMeta: false,
    },
    [USA_FLORIDA_DRIVER_LICENSE_ENDPOINT_CODE]: {
        profiles: appendSandboxResponseProfiles(USA_FLORIDA_SANDBOX_PROFILES, {
            conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER],
        }).concat(USA_FLORIDA_ERROR_PROFILE_404),
        defaultDocumentNumber: String(10000001).padStart(13, '0'),
        showProfileMeta: false,
    },
    [USA_KANSAS_DRIVER_LICENSE_ENDPOINT_CODE]: {
        profiles: [
            ...USA_KANSAS_SANDBOX_PROFILES,
            SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
            USA_KANSAS_ERROR_PROFILE_404,
        ],
        defaultDocumentNumber: 'K10000001',
        defaultDateOfBirth: USA_KANSAS_DEFAULT_DATE_OF_BIRTH,
        showProfileMeta: false,
    },
    [USA_VEHICLE_ENDPOINT_CODE]: {
        profiles: [...USA_VEHICLE_SANDBOX_PROFILES, USA_VEHICLE_ERROR_PROFILE_404],
        defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
        defaultPlate: SANDBOX_DEFAULT_PLATE,
        defaultState: USA_VEHICLE_DEFAULT_STATE,
        showProfileMeta: false,
    },
    [USA_VEHICLE_BY_VIN_ENDPOINT_CODE]: {
        profiles: appendVehicleVinSandboxProfiles(),
        defaultDocumentNumber: SANDBOX_DEFAULT_VIN,
        defaultVin: SANDBOX_DEFAULT_VIN,
        showProfileMeta: false,
    },
};
