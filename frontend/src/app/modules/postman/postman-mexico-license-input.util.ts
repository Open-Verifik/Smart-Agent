import {
    ApiEndpoint,
    PostmanDependencyMeta,
    PostmanParamRowRef,
    PostmanXorParamLayout,
} from './postman.types';

export const MEXICO_LICENSE_TRIPLE_INPUT_ENDPOINT_CODES = new Set([
    'mexico_api_cedula_profesional',
    'mexico_api_health_worker',
]);

export const isMexicoLicenseTripleInputEndpoint = (code?: string | null): boolean =>
    !!code && MEXICO_LICENSE_TRIPLE_INPUT_ENDPOINT_CODES.has(code);

export type MexicoLicenseInputMode = 'curp' | 'cedula' | 'name' | 'none';

export type MexicoLicenseUiState = {
    curpDocumentNumber: string;
    cedulaDocumentNumber: string;
};

const DOCUMENT_TYPE_FIELD = 'documentType';
const DOCUMENT_NUMBER_FIELD = 'documentNumber';
const FIRST_NAME_FIELD = 'firstName';
const LAST_NAME_FIELD = 'lastName';

const PAIR_VALUE_PLACEHOLDERS = new Set(['-', 'n/a', 'na']);

const isEffectivelyEmpty = (value: unknown): boolean => {
    if (value === null || value === undefined) return true;
    const normalized = String(value).trim();
    if (!normalized) return true;
    return PAIR_VALUE_PLACEHOLDERS.has(normalized.toLowerCase());
};

const paramValue = (endpoint: ApiEndpoint | null | undefined, key: string): string => {
    const row = endpoint?.params?.find((p) => p.key === key);
    return String(row?.value ?? '').trim();
};

const normalizeDocumentType = (value: unknown): string =>
    String(value ?? '').trim().toUpperCase();

export const emptyMexicoLicenseUi = (): MexicoLicenseUiState => ({
    curpDocumentNumber: '',
    cedulaDocumentNumber: '',
});

export const resolveMexicoLicenseUi = (endpoint: ApiEndpoint): MexicoLicenseUiState => {
    if (endpoint.mexicoLicenseUi) {
        return {
            curpDocumentNumber: endpoint.mexicoLicenseUi.curpDocumentNumber ?? '',
            cedulaDocumentNumber: endpoint.mexicoLicenseUi.cedulaDocumentNumber ?? '',
        };
    }
    const documentType = normalizeDocumentType(paramValue(endpoint, DOCUMENT_TYPE_FIELD));
    const documentNumber = paramValue(endpoint, DOCUMENT_NUMBER_FIELD);
    if (documentType === 'CEDULA' && documentNumber) {
        return { curpDocumentNumber: '', cedulaDocumentNumber: documentNumber };
    }
    if (documentNumber) {
        return { curpDocumentNumber: documentNumber, cedulaDocumentNumber: '' };
    }
    return emptyMexicoLicenseUi();
};

const rowValue = (row: Record<string, unknown>, field: string): unknown => {
    const lower = field.toLowerCase();
    const key = Object.keys(row).find((k) => k.toLowerCase() === lower);
    return key ? row[key] : undefined;
};

/**
 * Canonical dependency metadata for Mexico professional / health-worker license lookups.
 * Used when the live catalog omits `dependencyGroup` (flat param list from production DB).
 */
export const MEXICO_LICENSE_TRIPLE_INPUT_DEPENDENCIES: PostmanDependencyMeta[] = [
    {
        field: DOCUMENT_TYPE_FIELD,
        type: 'String',
        required: false,
        dependencyGroup: '1',
        enum: ['CURP', 'CEDULA'],
        description: 'Document type for the active document group.',
    },
    {
        field: DOCUMENT_NUMBER_FIELD,
        type: 'String',
        required: false,
        dependencyGroup: '1',
        description: 'CURP or professional license number for the active document group.',
    },
    {
        field: FIRST_NAME_FIELD,
        type: 'String',
        required: false,
        dependencyGroup: '3',
        description: 'Given name. Required together with lastName.',
    },
    {
        field: LAST_NAME_FIELD,
        type: 'String',
        required: false,
        dependencyGroup: '3',
        description: 'Surnames. Required together with firstName.',
    },
];

export const getMexicoLicenseActiveMode = (endpoint: ApiEndpoint): MexicoLicenseInputMode => {
    const ui = resolveMexicoLicenseUi(endpoint);
    const firstName = paramValue(endpoint, FIRST_NAME_FIELD);
    const lastName = paramValue(endpoint, LAST_NAME_FIELD);
    const nameActive = !isEffectivelyEmpty(firstName) || !isEffectivelyEmpty(lastName);
    const curpActive = !isEffectivelyEmpty(ui.curpDocumentNumber);
    const cedulaActive = !isEffectivelyEmpty(ui.cedulaDocumentNumber);

    if (nameActive) return 'name';
    if (curpActive && cedulaActive) return 'none';
    if (curpActive) return 'curp';
    if (cedulaActive) return 'cedula';
    return 'none';
};

/** Sync staged group values onto wire params used for validation and HTTP send. */
export const prepareMexicoLicenseEndpoint = (endpoint: ApiEndpoint): ApiEndpoint => {
    if (!isMexicoLicenseTripleInputEndpoint(endpoint.code) || !endpoint.params?.length) {
        return endpoint;
    }

    const ui = resolveMexicoLicenseUi(endpoint);
    const mode = getMexicoLicenseActiveMode(endpoint);
    const params = endpoint.params.map((param) => ({ ...param }));

    const setValue = (key: string, value: string) => {
        const row = params.find((p) => p.key === key);
        if (row) row.value = value;
    };

    if (mode === 'name') {
        setValue(DOCUMENT_TYPE_FIELD, '');
        setValue(DOCUMENT_NUMBER_FIELD, '');
    } else if (mode === 'curp') {
        setValue(DOCUMENT_TYPE_FIELD, 'CURP');
        setValue(DOCUMENT_NUMBER_FIELD, ui.curpDocumentNumber);
    } else if (mode === 'cedula') {
        setValue(DOCUMENT_TYPE_FIELD, 'CEDULA');
        setValue(DOCUMENT_NUMBER_FIELD, ui.cedulaDocumentNumber);
    } else {
        setValue(DOCUMENT_TYPE_FIELD, '');
        setValue(DOCUMENT_NUMBER_FIELD, '');
    }

    return {
        ...endpoint,
        mexicoLicenseUi: ui,
        params,
    };
};

export const applyMexicoLicenseTripleInputToEndpoint = (endpoint: ApiEndpoint): ApiEndpoint => {
    if (!isMexicoLicenseTripleInputEndpoint(endpoint.code)) {
        return endpoint;
    }
    const dependencies = MEXICO_LICENSE_TRIPLE_INPUT_DEPENDENCIES;
    const params = endpoint.params?.length
        ? endpoint.params.map((param) => {
              const meta = dependencies.find((d) => d.field === param.key);
              if (!meta) return param;
              return {
                  ...param,
                  dependencyGroup: meta.dependencyGroup,
                  enum: meta.enum ?? param.enum,
                  description: param.description || meta.description,
              };
          })
        : [];
    const withMeta = {
        ...endpoint,
        dependencies,
        params,
        mexicoLicenseUi: endpoint.mexicoLicenseUi ?? resolveMexicoLicenseUi({ ...endpoint, params }),
    };
    return prepareMexicoLicenseEndpoint(withMeta);
};

export const detectMexicoLicenseInputMode = (
    row: Record<string, unknown>
): MexicoLicenseInputMode => {
    const firstName = rowValue(row, FIRST_NAME_FIELD);
    const lastName = rowValue(row, LAST_NAME_FIELD);
    const documentNumber = rowValue(row, DOCUMENT_NUMBER_FIELD);
    const documentType = normalizeDocumentType(rowValue(row, DOCUMENT_TYPE_FIELD));

    const nameActive =
        !isEffectivelyEmpty(firstName) || !isEffectivelyEmpty(lastName);
    const documentNumberActive = !isEffectivelyEmpty(documentNumber);

    if (nameActive) return 'name';
    if (!documentNumberActive) return 'none';
    if (documentType === 'CEDULA') return 'cedula';
    return 'curp';
};

export const getMexicoLicenseTripleParamLayout = (
    endpoint: ApiEndpoint | null | undefined
): PostmanXorParamLayout => {
    const allRows: PostmanParamRowRef[] = (endpoint?.params ?? []).map((param, index) => ({
        index,
        param,
    }));

    const findRow = (key: string): PostmanParamRowRef | undefined =>
        allRows.find((row) => row.param.key === key);

    const firstNameRow = findRow(FIRST_NAME_FIELD);
    const lastNameRow = findRow(LAST_NAME_FIELD);

    const nameRows = [firstNameRow, lastNameRow].filter(
        (row): row is PostmanParamRowRef => !!row
    );
    const hiddenKeys = new Set([
        DOCUMENT_TYPE_FIELD,
        DOCUMENT_NUMBER_FIELD,
        FIRST_NAME_FIELD,
        LAST_NAME_FIELD,
    ]);
    const otherRows = allRows.filter((row) => !hiddenKeys.has(row.param.key));

    return {
        kind: 'mexicoLicenseTriple',
        curpRows: [],
        cedulaRows: [],
        nameRows,
        otherRows,
    };
};

export type MexicoLicenseValidationIssue = {
    field?: string;
    translationKey: string;
    translationParams?: Record<string, unknown>;
};

export const getMexicoLicenseTripleValidationIssues = (
    endpoint: ApiEndpoint,
    stepLabel: string
): MexicoLicenseValidationIssue[] => {
    const prepared = prepareMexicoLicenseEndpoint(endpoint);
    const ui = resolveMexicoLicenseUi(prepared);
    const row: Record<string, unknown> = {};
    for (const param of prepared.params ?? []) {
        if (param.key) row[param.key] = param.value;
    }

    const issues: MexicoLicenseValidationIssue[] = [];
    const curpFilled = !isEffectivelyEmpty(ui.curpDocumentNumber);
    const cedulaFilled = !isEffectivelyEmpty(ui.cedulaDocumentNumber);
    const firstName = rowValue(row, FIRST_NAME_FIELD);
    const lastName = rowValue(row, LAST_NAME_FIELD);
    const nameFilled =
        !isEffectivelyEmpty(firstName) || !isEffectivelyEmpty(lastName);

    if (curpFilled && cedulaFilled) {
        issues.push({
            field: DOCUMENT_NUMBER_FIELD,
            translationKey: 'createBatch.validationXorBothModes',
            translationParams: { step: stepLabel },
        });
        return issues;
    }

    if (nameFilled && (curpFilled || cedulaFilled)) {
        issues.push({
            field: DOCUMENT_NUMBER_FIELD,
            translationKey: 'createBatch.validationXorBothModes',
            translationParams: { step: stepLabel },
        });
        return issues;
    }

    const mode = detectMexicoLicenseInputMode(row);

    if (mode === 'none') {
        issues.push({
            field: FIRST_NAME_FIELD,
            translationKey: 'createBatch.validationXorNeitherMode',
            translationParams: { step: stepLabel },
        });
        return issues;
    }

    if (mode === 'name') {
        if (isEffectivelyEmpty(firstName)) {
            issues.push({
                field: FIRST_NAME_FIELD,
                translationKey: 'postman.requestEditor.validation.fieldRequired',
                translationParams: { field: FIRST_NAME_FIELD, step: stepLabel },
            });
        }
        if (isEffectivelyEmpty(lastName)) {
            issues.push({
                field: LAST_NAME_FIELD,
                translationKey: 'postman.requestEditor.validation.fieldRequired',
                translationParams: { field: LAST_NAME_FIELD, step: stepLabel },
            });
        }
        return issues;
    }

    if (mode === 'curp' || mode === 'cedula') {
        const documentNumber = rowValue(row, DOCUMENT_NUMBER_FIELD);
        if (isEffectivelyEmpty(documentNumber)) {
            issues.push({
                field: DOCUMENT_NUMBER_FIELD,
                translationKey: 'postman.requestEditor.validation.fieldRequired',
                translationParams: { field: DOCUMENT_NUMBER_FIELD, step: stepLabel },
            });
        }
    }

    return issues;
};

export const ensureMexicoLicenseDocumentTypeForSend = (endpoint: ApiEndpoint): ApiEndpoint =>
    prepareMexicoLicenseEndpoint(endpoint);

export const setMexicoLicenseCurpNumber = (
    endpoint: ApiEndpoint,
    value: string
): ApiEndpoint => {
    const ui: MexicoLicenseUiState = {
        curpDocumentNumber: value,
        cedulaDocumentNumber: '',
    };
    const params = (endpoint.params ?? []).map((param) => {
        if (param.key === FIRST_NAME_FIELD || param.key === LAST_NAME_FIELD) {
            return { ...param, value: '' };
        }
        return param;
    });
    return prepareMexicoLicenseEndpoint({ ...endpoint, params, mexicoLicenseUi: ui });
};

export const setMexicoLicenseCedulaNumber = (
    endpoint: ApiEndpoint,
    value: string
): ApiEndpoint => {
    const ui: MexicoLicenseUiState = {
        curpDocumentNumber: '',
        cedulaDocumentNumber: value,
    };
    const params = (endpoint.params ?? []).map((param) => {
        if (param.key === FIRST_NAME_FIELD || param.key === LAST_NAME_FIELD) {
            return { ...param, value: '' };
        }
        return param;
    });
    return prepareMexicoLicenseEndpoint({ ...endpoint, params, mexicoLicenseUi: ui });
};

/** @deprecated Use setMexicoLicenseCurpNumber / setMexicoLicenseCedulaNumber */
export const applyMexicoLicenseParamEdit = (
    endpoint: ApiEndpoint,
    fieldKey: string,
    mode: MexicoLicenseInputMode
): ApiEndpoint => {
    if (mode === 'curp' && fieldKey === DOCUMENT_NUMBER_FIELD) {
        return setMexicoLicenseCurpNumber(endpoint, paramValue(endpoint, DOCUMENT_NUMBER_FIELD));
    }
    if (mode === 'cedula' && fieldKey === DOCUMENT_NUMBER_FIELD) {
        return setMexicoLicenseCedulaNumber(endpoint, paramValue(endpoint, DOCUMENT_NUMBER_FIELD));
    }
    if (mode === 'name' && (fieldKey === FIRST_NAME_FIELD || fieldKey === LAST_NAME_FIELD)) {
        const params = (endpoint.params ?? []).map((param) => {
            if (param.key === DOCUMENT_TYPE_FIELD || param.key === DOCUMENT_NUMBER_FIELD) {
                return { ...param, value: '' };
            }
            return param;
        });
        return prepareMexicoLicenseEndpoint({
            ...endpoint,
            params,
            mexicoLicenseUi: emptyMexicoLicenseUi(),
        });
    }
    return endpoint;
};

export const clearMexicoLicenseInputMode = (
    endpoint: ApiEndpoint,
    mode: MexicoLicenseInputMode
): ApiEndpoint => {
    const ui = resolveMexicoLicenseUi(endpoint);
    if (mode === 'curp') {
        ui.curpDocumentNumber = '';
    } else if (mode === 'cedula') {
        ui.cedulaDocumentNumber = '';
    } else if (mode === 'name') {
        const params = (endpoint.params ?? []).map((param) => {
            if (param.key === FIRST_NAME_FIELD || param.key === LAST_NAME_FIELD) {
                return { ...param, value: '' };
            }
            return param;
        });
        return prepareMexicoLicenseEndpoint({ ...endpoint, params, mexicoLicenseUi: ui });
    }
    return prepareMexicoLicenseEndpoint({ ...endpoint, mexicoLicenseUi: ui });
};

export const mexicoLicenseGroupIsInactive = (
    endpoint: ApiEndpoint | null | undefined,
    group: MexicoLicenseInputMode
): boolean => {
    if (!endpoint || group === 'none') return false;
    const active = getMexicoLicenseActiveMode(endpoint);
    return active !== 'none' && active !== group;
};
