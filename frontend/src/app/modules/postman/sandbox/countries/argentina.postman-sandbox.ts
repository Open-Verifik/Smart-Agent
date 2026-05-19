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

export const ARGENTINA_IDENTITY_ENDPOINT_CODE = 'argentina_api_identity_lookup';

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
};
