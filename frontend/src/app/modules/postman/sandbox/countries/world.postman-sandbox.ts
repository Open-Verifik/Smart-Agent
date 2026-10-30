/**
 * World sanctions Postman sandbox profiles (DEA, FBI, Europol, Interpol, OFAC, ONU).
 * Source of truth: verifik-backend/Repositories/ExtractionCriminals/helpers/*-sandbox.helper.js
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const WORLD_DEA_ENDPOINT_CODE = 'world_api_dea';
export const WORLD_FBI_ENDPOINT_CODE = 'world_api_fbi';
export const WORLD_EUROPOL_ENDPOINT_CODE = 'world_api_europol';
export const WORLD_INTERPOL_ENDPOINT_CODE = 'world_api_interpol';
export const WORLD_OFAC_ENDPOINT_CODE = 'world_api_ofac';
export const WORLD_ONU_ENDPOINT_CODE = 'world_api_onu';

export const WORLD_CSL_ENDPOINT_CODE = 'world_api_csl';
export const WORLD_DSS_MOST_WANTED_ENDPOINT_CODE = 'world_api_dss_most_wanted';
export const WORLD_US_TERRORISTS_ENDPOINT_CODE = 'world_api_us_terrorists';
export const WORLD_SECRET_SERVICE_ENDPOINT_CODE = 'world_api_secret_service';
export const WORLD_SEC_ENDPOINT_CODE = 'world_api_sec';
export const WORLD_HEALTH_EXCLUSIONS_ENDPOINT_CODE = 'world_api_health_exclusions';
export const WORLD_CIA_WORLD_LEADERS_ENDPOINT_CODE = 'world_api_cia_world_leaders';
export const WORLD_EU_TERRORISTS_ENDPOINT_CODE = 'world_api_eu_terrorists';
export const WORLD_EU_FSF_ENDPOINT_CODE = 'world_api_eu_fsf';
export const WORLD_OFSI_ENDPOINT_CODE = 'world_api_ofsi';
export const WORLD_WORLD_BANK_ENDPOINT_CODE = 'world_api_world_bank';
export const WORLD_IADB_ENDPOINT_CODE = 'world_api_iadb';
export const WORLD_OFFSHORE_LEAKS_ENDPOINT_CODE = 'world_api_offshore_leaks';

export const WORLD_SANDBOX_NAMES = [
    'MARIA ELENA LOPEZ GARCIA',
    'JOSE ANTONIO PEREZ RODRIGUEZ',
    'CARLA ISABEL MARTINEZ FERNANDEZ',
    'LUIS ALBERTO GONZALEZ HERRERA',
    'ANA SOFIA RAMIREZ TORRES',
    'DIEGO ALEJANDRO SILVA MENDOZA',
    'VALENTINA ANDREA CASTRO VARGAS',
    'RICARDO JOSE MORALES SUAREZ',
    'PATRICIA CAROLINA DIAZ REYES',
    'FERNANDO MIGUEL ROJAS DELGADO',
];

export const buildDocumentSearchProfiles = (label: string): PostmanSandboxProfile[] =>
    Array.from({ length: 10 }, (_, index) => {
        const documentNumber = String(10000001 + index);
        const foundLabel = index % 2 === 0 ? 'found' : 'clean';

        return {
            documentNumber,
            fullName: `${WORLD_SANDBOX_NAMES[index]} — ${label} ${foundLabel}`,
            responseType: 'success' as const,
            expectedStatus: 200,
            paramOverrides: {
                documentType: 'CC',
                documentNumber,
            },
        };
    });

const WORLD_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: '90040401',
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
    paramOverrides: {
        documentType: 'CC',
        documentNumber: '90040401',
    },
};

const WORLD_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    ...SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
    paramOverrides: {
        documentType: 'INVALID',
        documentNumber: '10000001',
    },
};

const DEA_NAME_DEMO: PostmanSandboxProfile = {
    profileKey: 'dea-name-demo',
    documentNumber: 'MATEO VERIFIK',
    fullName: 'MATEO VERIFIK — DEA demo found',
    paramOverrides: {
        fullName: 'MATEO VERIFIK',
        documentNumber: '',
        documentType: '',
    },
};

const FBI_NAME_DEMO: PostmanSandboxProfile = {
    profileKey: 'fbi-name-demo',
    documentNumber: 'WILVER VILLEGAS PALOMINO',
    fullName: 'WILVER VILLEGAS PALOMINO — FBI demo found',
    paramOverrides: {
        fullName: 'WILVER VILLEGAS PALOMINO',
        documentNumber: '',
        documentType: '',
    },
};

const buildWorldEndpointConfig = (
    label: string,
    extraProfiles: PostmanSandboxProfile[] = []
): PostmanSandboxEndpointConfig => ({
    profiles: appendSandboxResponseProfiles(
        [...extraProfiles, ...buildDocumentSearchProfiles(label)],
        {
            conflictProfiles: [
                SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
                WORLD_CONFLICT_INVALID_DOCUMENT_TYPE,
            ],
        }
    ).concat(WORLD_ERROR_PROFILE_404),
    defaultDocumentNumber: '10000001',
    documentTypeByCode: {},
    showProfileMeta: false,
});

export const WORLD_CONFLICT_MISSING_FULL_NAME: PostmanSandboxProfile = {
    profileKey: '409-missing-fullName',
    documentNumber: '90040901',
    fullName: '409 — Missing fullName',
    responseType: 'error' as const,
    expectedStatus: 409,
    paramOverrides: {
        fullName: '',
    },
};

export const WORLD_ERROR_PROFILE_404_NAME: PostmanSandboxProfile = {
    profileKey: '404-name-not-found',
    documentNumber: '90040401',
    fullName: '404 — Record not found',
    responseType: 'error' as const,
    expectedStatus: 404,
    paramOverrides: {
        fullName: '90040401',
    },
};

export const buildNameSearchProfiles = (label: string): PostmanSandboxProfile[] => {
    const successProfiles: PostmanSandboxProfile[] = WORLD_SANDBOX_NAMES.map((name, index) => {
        const foundLabel = index % 2 === 0 ? 'found' : 'clean';
        return {
            documentNumber: name,
            fullName: `${name} — ${label} ${foundLabel}`,
            responseType: 'success' as const,
            expectedStatus: 200,
            paramOverrides: {
                fullName: name,
            },
        };
    });

    return [
        ...successProfiles,
        WORLD_CONFLICT_MISSING_FULL_NAME,
        WORLD_ERROR_PROFILE_404_NAME,
    ];
};

export const buildWorldNameEndpointConfig = (label: string): PostmanSandboxEndpointConfig => ({
    profiles: buildNameSearchProfiles(label),
    defaultDocumentNumber: WORLD_SANDBOX_NAMES[0],
    documentTypeByCode: {},
    showProfileMeta: false,
});

export const buildWorldNameSearchDemos = (label: string): PostmanSandboxProfile[] => [
    {
        profileKey: `${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}-name-found`,
        documentNumber: WORLD_SANDBOX_NAMES[0],
        fullName: `${WORLD_SANDBOX_NAMES[0]} — ${label} (name search found)`,
        responseType: 'success' as const,
        expectedStatus: 200,
        paramOverrides: {
            fullName: WORLD_SANDBOX_NAMES[0],
            documentNumber: '',
            documentType: '',
        },
    },
    {
        profileKey: `${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}-name-clean`,
        documentNumber: WORLD_SANDBOX_NAMES[1],
        fullName: `${WORLD_SANDBOX_NAMES[1]} — ${label} (name search clean)`,
        responseType: 'success' as const,
        expectedStatus: 200,
        paramOverrides: {
            fullName: WORLD_SANDBOX_NAMES[1],
            documentNumber: '',
            documentType: '',
        },
    },
];

export const buildWorldDocAndNameEndpointConfig = (
    endpointCode: string,
    label: string
): PostmanSandboxEndpointConfig => {
    const nameDemos = buildWorldNameSearchDemos(label);
    const docProfiles = buildDocumentSearchProfiles(label);

    const name404Profile: PostmanSandboxProfile = {
        profileKey: `${endpointCode}-name-not-found`,
        documentNumber: '90040401',
        fullName: '404 — Record not found (name search)',
        responseType: 'error' as const,
        expectedStatus: 404,
        paramOverrides: {
            fullName: '90040401',
            documentNumber: '',
            documentType: '',
        },
    };

    const docMissingNumberConflict: PostmanSandboxProfile = {
        ...SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        paramOverrides: {
            documentType: 'CC',
            documentNumber: '',
            fullName: '',
        },
    };

    const missingParamsConflict: PostmanSandboxProfile = {
        profileKey: `${endpointCode}-missing-params`,
        documentNumber: '90040901',
        fullName: '409 — Missing required parameters',
        responseType: 'error' as const,
        expectedStatus: 409,
        paramOverrides: {
            documentNumber: '',
            fullName: '',
        },
    };

    return {
        profiles: [
            ...nameDemos,
            name404Profile,
            ...docProfiles,
            WORLD_ERROR_PROFILE_404,
            WORLD_CONFLICT_INVALID_DOCUMENT_TYPE,
            docMissingNumberConflict,
            missingParamsConflict,
        ],
        defaultDocumentNumber: '10000001',
        documentTypeByCode: { [endpointCode]: 'CC' },
        showProfileMeta: false,
    };
};

export const WORLD_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [WORLD_DEA_ENDPOINT_CODE]: {
        ...buildWorldEndpointConfig('DEA', [DEA_NAME_DEMO]),
        documentTypeByCode: { [WORLD_DEA_ENDPOINT_CODE]: 'CC' },
    },
    [WORLD_FBI_ENDPOINT_CODE]: {
        ...buildWorldEndpointConfig('FBI', [FBI_NAME_DEMO]),
        documentTypeByCode: { [WORLD_FBI_ENDPOINT_CODE]: 'CC' },
    },
    [WORLD_EUROPOL_ENDPOINT_CODE]: {
        ...buildWorldEndpointConfig('Europol'),
        documentTypeByCode: { [WORLD_EUROPOL_ENDPOINT_CODE]: 'CC' },
    },
    [WORLD_INTERPOL_ENDPOINT_CODE]: {
        ...buildWorldEndpointConfig('Interpol'),
        documentTypeByCode: { [WORLD_INTERPOL_ENDPOINT_CODE]: 'CC' },
    },
    [WORLD_OFAC_ENDPOINT_CODE]: {
        ...buildWorldEndpointConfig('OFAC'),
        documentTypeByCode: { [WORLD_OFAC_ENDPOINT_CODE]: 'CC' },
    },
    [WORLD_ONU_ENDPOINT_CODE]: {
        ...buildWorldEndpointConfig('ONU'),
        documentTypeByCode: { [WORLD_ONU_ENDPOINT_CODE]: 'CC' },
    },

    // 8 Document + Name watchlists
    [WORLD_CSL_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_CSL_ENDPOINT_CODE, 'CSL'),
    [WORLD_US_TERRORISTS_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_US_TERRORISTS_ENDPOINT_CODE, 'US Terrorists'),
    [WORLD_SEC_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_SEC_ENDPOINT_CODE, 'SEC'),
    [WORLD_HEALTH_EXCLUSIONS_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_HEALTH_EXCLUSIONS_ENDPOINT_CODE, 'Health Exclusions'),
    [WORLD_EU_TERRORISTS_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_EU_TERRORISTS_ENDPOINT_CODE, 'EU Terrorists'),
    [WORLD_EU_FSF_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_EU_FSF_ENDPOINT_CODE, 'EU Financial Sanctions'),
    [WORLD_OFSI_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_OFSI_ENDPOINT_CODE, 'OFSI'),
    [WORLD_IADB_ENDPOINT_CODE]: buildWorldDocAndNameEndpointConfig(WORLD_IADB_ENDPOINT_CODE, 'IADB'),

    // 5 Name-only watchlists
    [WORLD_DSS_MOST_WANTED_ENDPOINT_CODE]: buildWorldNameEndpointConfig('DSS Most Wanted'),
    [WORLD_SECRET_SERVICE_ENDPOINT_CODE]: buildWorldNameEndpointConfig('Secret Service'),
    [WORLD_CIA_WORLD_LEADERS_ENDPOINT_CODE]: buildWorldNameEndpointConfig('CIA World Leaders'),
    [WORLD_WORLD_BANK_ENDPOINT_CODE]: buildWorldNameEndpointConfig('World Bank'),
    [WORLD_OFFSHORE_LEAKS_ENDPOINT_CODE]: buildWorldNameEndpointConfig('Offshore Leaks'),
};
