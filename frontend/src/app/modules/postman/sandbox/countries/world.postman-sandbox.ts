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

const WORLD_SANDBOX_NAMES = [
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

const buildDocumentSearchProfiles = (label: string): PostmanSandboxProfile[] =>
    Array.from({ length: 10 }, (_, index) => {
        const documentNumber = String(10000001 + index);
        const foundLabel = index % 2 === 0 ? 'found' : 'clean';

        return {
            documentNumber,
            fullName: `${WORLD_SANDBOX_NAMES[index]} — ${label} ${foundLabel}`,
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
};
