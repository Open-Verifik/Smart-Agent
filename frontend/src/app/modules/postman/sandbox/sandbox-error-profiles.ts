/**
 * Shared sandbox error profiles for Postman picker.
 * Source of truth for reserved IDs: verifik-backend/Core/sandbox-error-fixtures.helper.js
 */
import { PostmanSandboxProfile } from './postman-sandbox.types';

export const SANDBOX_ERROR_DOCUMENT_404 = '90040401';
export const SANDBOX_ERROR_DOCUMENT_500 = '90050001';

export const SANDBOX_ERROR_PROFILE_404: PostmanSandboxProfile = {
    documentNumber: SANDBOX_ERROR_DOCUMENT_404,
    processNumber: SANDBOX_ERROR_DOCUMENT_404,
    fullName: '404 — Record not found',
    responseType: 'error',
    expectedStatus: 404,
};

export const SANDBOX_ERROR_PROFILE_500: PostmanSandboxProfile = {
    documentNumber: SANDBOX_ERROR_DOCUMENT_500,
    fullName: '500 — Server error',
    responseType: 'error',
    expectedStatus: 500,
};

export const SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER: PostmanSandboxProfile = {
    profileKey: '409-missing-documentNumber',
    documentNumber: '90040901',
    fullName: '409 — Missing documentNumber',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { documentNumber: '' },
};

export const SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE: PostmanSandboxProfile = {
    profileKey: '409-invalid-documentType',
    documentNumber: '90040902',
    fullName: '409 — Invalid documentType',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { documentType: 'INVALID', documentNumber: '10000001' },
};

export const SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE: PostmanSandboxProfile = {
    profileKey: '409-missing-expeditionDate',
    documentNumber: '90040903',
    fullName: '409 — Missing expeditionDate',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { expeditionDate: '', documentNumber: '10000001' },
};

export const SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE: PostmanSandboxProfile = {
    profileKey: '409-invalid-expeditionDate',
    documentNumber: '90040904',
    fullName: '409 — Invalid expeditionDate format',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { expeditionDate: 'not-a-date', documentNumber: '10000001' },
};

export const SANDBOX_CONFLICT_MISSING_CITY: PostmanSandboxProfile = {
    profileKey: '409-missing-city',
    documentNumber: '90040905',
    fullName: '409 — Missing city',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { city: '', documentNumber: '10000001' },
};

export const SANDBOX_CONFLICT_MISSING_QUALITY: PostmanSandboxProfile = {
    profileKey: '409-missing-quality',
    documentNumber: '90040906',
    fullName: '409 — Missing quality',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { quality: '', documentNumber: '10000001' },
};

export const SANDBOX_CONFLICT_MISSING_PROCESS_NUMBER: PostmanSandboxProfile = {
    profileKey: '409-missing-processNumber',
    documentNumber: '90040907',
    processNumber: '90040907',
    fullName: '409 — Missing processNumber',
    responseType: 'error',
    expectedStatus: 409,
    paramOverrides: { processNumber: '' },
};

export const appendSandboxResponseProfiles = (
    successProfiles: PostmanSandboxProfile[],
    options: {
        include500?: boolean;
        conflictProfiles?: PostmanSandboxProfile[];
    } = {}
): PostmanSandboxProfile[] => [
    ...successProfiles,
    ...(options.conflictProfiles ?? []),
    SANDBOX_ERROR_PROFILE_404,
    ...(options.include500 ? [SANDBOX_ERROR_PROFILE_500] : []),
];

export const getPostmanSandboxProfileKey = (profile: PostmanSandboxProfile): string =>
    profile.profileKey ?? profile.vin ?? profile.plate ?? profile.processNumber ?? profile.documentNumber;

export const matchesPostmanSandboxProfile = (
    profile: PostmanSandboxProfile,
    params: { key: string; value: string }[] | undefined
): boolean => {
    if (!params?.length) {
        return false;
    }

    if (profile.paramOverrides) {
        return Object.entries(profile.paramOverrides).every(([key, value]) => {
            const param = params.find((p) => p.key === key);
            return (param?.value ?? '') === value;
        });
    }

    const documentNumber = params.find((p) => p.key === 'documentNumber')?.value?.trim() ?? '';
    const processNumber = params.find((p) => p.key === 'processNumber')?.value?.trim() ?? '';
    const plate = params.find((p) => p.key === 'plate')?.value?.trim() ?? '';
    const vin = params.find((p) => p.key === 'vin')?.value?.trim() ?? '';

    if (profile.vin && vin) {
        return vin === profile.vin;
    }

    if (profile.plate && plate) {
        return plate === profile.plate;
    }

    if (profile.processNumber && processNumber) {
        return processNumber === profile.processNumber;
    }

    return documentNumber === profile.documentNumber;
};

export const formatPostmanSandboxProfileLabel = (profile: PostmanSandboxProfile): string => {
    if (profile.responseType === 'error' && profile.expectedStatus) {
        return `${profile.documentNumber} — HTTP ${profile.expectedStatus} · ${profile.fullName.replace(/^\d{3}\s—\s/, '')}`;
    }

    return `${profile.vin ?? profile.plate ?? profile.processNumber ?? profile.documentNumber} — ${profile.fullName}`;
};
