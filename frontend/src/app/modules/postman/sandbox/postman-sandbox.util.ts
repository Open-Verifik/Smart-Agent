import { POSTMAN_SANDBOX_BY_ENDPOINT_CODE } from './postman-sandbox.registry';
import { PostmanSandboxEndpointConfig, PostmanSandboxProfile } from './postman-sandbox.types';
import {
    getPostmanSandboxProfileKey,
    matchesPostmanSandboxProfile,
} from './sandbox-error-profiles';

export const DEFAULT_POSTMAN_SANDBOX_I18N_KEY = 'sandboxProfiles';

export const getPostmanSandboxConfig = (
    code?: string | null
): PostmanSandboxEndpointConfig | null => {
    if (!code) {
        return null;
    }

    return POSTMAN_SANDBOX_BY_ENDPOINT_CODE[code] ?? null;
};

export const isPostmanSandboxEndpoint = (code?: string | null): boolean =>
    !!getPostmanSandboxConfig(code);

export const getPostmanSandboxProfiles = (code?: string | null): PostmanSandboxProfile[] =>
    getPostmanSandboxConfig(code)?.profiles ?? [];

export const findMatchingPostmanSandboxProfile = (
    code: string | null | undefined,
    params: { key: string; value: string }[] | undefined
): PostmanSandboxProfile | null => {
    const profiles = getPostmanSandboxProfiles(code);
    return profiles.find((profile) => matchesPostmanSandboxProfile(profile, params)) ?? null;
};

export const getPostmanSandboxProfilePickerValue = (
    code: string | null | undefined,
    params: { key: string; value: string }[] | undefined
): string => {
    const profile = findMatchingPostmanSandboxProfile(code, params);
    return profile ? getPostmanSandboxProfileKey(profile) : '';
};

export const getPostmanSandboxI18nKey = (code?: string | null): string =>
    getPostmanSandboxConfig(code)?.i18nKey ?? DEFAULT_POSTMAN_SANDBOX_I18N_KEY;

export const getPostmanSandboxShowProfileMeta = (code?: string | null): boolean =>
    getPostmanSandboxConfig(code)?.showProfileMeta ?? true;

export const getPostmanSandboxDefaultDocumentType = (code?: string | null): string | null => {
    if (!code) {
        return null;
    }

    return getPostmanSandboxConfig(code)?.documentTypeByCode?.[code] ?? null;
};

const applySandboxParamValue = (
    params: { key: string; value: string }[],
    key: string,
    value?: string
): void => {
    if (!value) {
        return;
    }

    const param = params.find((p) => p.key === key);
    if (param && !param.value?.trim()) {
        param.value = value;
    }
};

/**
 * Applies sandbox param defaults when documentNumber is empty.
 */
export const applyPostmanSandboxParamDefaults = (
    endpoint: { code?: string; params?: { key: string; value: string }[] },
    documentNumber?: string
): void => {
    const config = getPostmanSandboxConfig(endpoint.code);
    if (!config?.profiles.length || !endpoint.params?.length) {
        return;
    }

    const docNumberParam = endpoint.params.find((p) => p.key === 'documentNumber');
    const processNumberParam = endpoint.params.find((p) => p.key === 'processNumber');
    const plateParam = endpoint.params.find((p) => p.key === 'plate');
    const vinParam = endpoint.params.find((p) => p.key === 'vin');

    if (vinParam && !docNumberParam && !processNumberParam && !plateParam) {
        if (vinParam.value?.trim()) {
            return;
        }

        const resolvedVin = documentNumber ?? config.defaultVin ?? config.defaultDocumentNumber;
        vinParam.value = resolvedVin;
        return;
    }

    if (plateParam && !docNumberParam && !processNumberParam) {
        if (plateParam.value?.trim()) {
            return;
        }

        const resolvedPlate = documentNumber ?? config.defaultPlate ?? config.defaultDocumentNumber;
        plateParam.value = resolvedPlate;
        return;
    }

    if (processNumberParam && !docNumberParam) {
        if (processNumberParam.value?.trim()) {
            return;
        }

        const resolvedProcessNumber =
            documentNumber ?? config.defaultProcessNumber ?? config.defaultDocumentNumber;
        processNumberParam.value = resolvedProcessNumber;
        return;
    }

    if (!docNumberParam || docNumberParam.value?.trim()) {
        return;
    }

    const resolvedDocumentNumber = documentNumber ?? config.defaultDocumentNumber;
    docNumberParam.value = resolvedDocumentNumber;

    const profile =
        config.profiles.find((p) => p.documentNumber === resolvedDocumentNumber) ??
        config.profiles[0];

    const defaultDocumentType = getPostmanSandboxDefaultDocumentType(endpoint.code);
    applySandboxParamValue(endpoint.params, 'documentType', defaultDocumentType ?? undefined);
    applySandboxParamValue(
        endpoint.params,
        'expeditionDate',
        profile?.expeditionDate ?? config.defaultExpeditionDate
    );
    applySandboxParamValue(endpoint.params, 'city', config.defaultCity);
    applySandboxParamValue(endpoint.params, 'quality', config.defaultQuality);
    applySandboxParamValue(endpoint.params, 'dateOfBirth', config.defaultDateOfBirth);
    applySandboxParamValue(endpoint.params, 'expirationDate', config.defaultExpirationDate);
    applySandboxParamValue(
        endpoint.params,
        'plate',
        profile?.plate ?? config.defaultPlate
    );
};
