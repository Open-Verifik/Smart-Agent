/**
 * Venezuela Postman sandbox profiles.
 * Source of truth: verifik-backend/Repositories/Venezuela/helpers/venezuelan-sandbox.helper.js
 * (SANDBOX_FIXED_DOCUMENTS — keep in sync manually).
 */
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from '../postman-sandbox.types';
import {
    appendSandboxResponseProfiles,
    SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
} from '../sandbox-error-profiles';

export const VENEZUELA_CEDULA_ENDPOINT_CODE = 'venezuela_api_identity_lookup';

export const VENEZUELA_FOREIGNER_ENDPOINT_CODE = 'venezuela_foreigner_api';

const VENEZUELA_SANDBOX_PROFILES: PostmanSandboxProfile[] = [
    {
        documentNumber: '10000001',
        fullName: 'MARIA ELENA LOPEZ GARCIA',
        gender: 'F',
        birthDate: '1990-03-15',
    },
    {
        documentNumber: '10000002',
        fullName: 'JOSE ANTONIO PEREZ RODRIGUEZ',
        gender: 'M',
        birthDate: '1985-07-22',
    },
    {
        documentNumber: '10000003',
        fullName: 'CARLA ISABEL MARTINEZ FERNANDEZ',
        gender: 'F',
        birthDate: '1992-11-08',
    },
    {
        documentNumber: '10000004',
        fullName: 'LUIS ALBERTO GONZALEZ HERRERA',
        gender: 'M',
        birthDate: '1988-01-30',
    },
    {
        documentNumber: '10000005',
        fullName: 'ANA SOFIA RAMIREZ TORRES',
        gender: 'F',
        birthDate: '1995-05-12',
    },
    {
        documentNumber: '10000006',
        fullName: 'DIEGO ALEJANDRO SILVA MENDOZA',
        gender: 'M',
        birthDate: '1983-09-04',
    },
    {
        documentNumber: '10000007',
        fullName: 'VALENTINA ANDREA CASTRO VARGAS',
        gender: 'F',
        birthDate: '1998-12-19',
    },
    {
        documentNumber: '10000008',
        fullName: 'RICARDO JOSE MORALES SUAREZ',
        gender: 'M',
        birthDate: '1979-06-27',
    },
    {
        documentNumber: '10000009',
        fullName: 'PATRICIA CAROLINA DIAZ REYES',
        gender: 'F',
        birthDate: '1991-04-03',
    },
    {
        documentNumber: '10000010',
        fullName: 'FERNANDO MIGUEL ROJAS DELGADO',
        gender: 'M',
        birthDate: '1987-08-14',
    },
];

const buildVenezuelaConfig = (
    documentTypeByCode: Record<string, string>,
    showProfileMeta = true,
    options: { include500?: boolean; conflictProfiles?: PostmanSandboxProfile[] } = {}
): PostmanSandboxEndpointConfig => ({
    profiles: appendSandboxResponseProfiles(VENEZUELA_SANDBOX_PROFILES, {
        include500: options.include500,
        conflictProfiles: options.conflictProfiles,
    }),
    defaultDocumentNumber: '10000001',
    documentTypeByCode,
    showProfileMeta,
});

export const VENEZUELA_POSTMAN_SANDBOX_BY_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    [VENEZUELA_CEDULA_ENDPOINT_CODE]: buildVenezuelaConfig(
        {
            [VENEZUELA_CEDULA_ENDPOINT_CODE]: 'CCVE',
        },
        true,
        { include500: true, conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER] }
    ),
    [VENEZUELA_FOREIGNER_ENDPOINT_CODE]: buildVenezuelaConfig(
        {
            [VENEZUELA_FOREIGNER_ENDPOINT_CODE]: 'CEVE',
        },
        false,
        { conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER] }
    ),
};
