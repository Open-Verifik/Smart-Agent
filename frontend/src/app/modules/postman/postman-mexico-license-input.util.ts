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

const rowValue = (row: Record<string, unknown>, field: string): unknown => {
    const lower = field.toLowerCase();
    const key = Object.keys(row).find((k) => k.toLowerCase() === lower);
    return key ? row[key] : undefined;
};

const normalizeDocumentType = (value: unknown): string =>
    String(value ?? '').trim().toUpperCase();

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
        description: 'CURP or license number type. Set automatically when you use a document group.',
    },
    {
        field: DOCUMENT_NUMBER_FIELD,
        type: 'String',
        required: false,
        dependencyGroup: '1',
        description: 'CURP (18 characters) or professional license number.',
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
    return {
        ...endpoint,
        dependencies,
        params,
    };
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

    const documentNumberRow = findRow(DOCUMENT_NUMBER_FIELD);
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
        curpRows: documentNumberRow ? [documentNumberRow] : [],
        cedulaRows: documentNumberRow ? [documentNumberRow] : [],
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
    row: Record<string, unknown>,
    stepLabel: string
): MexicoLicenseValidationIssue[] => {
    const issues: MexicoLicenseValidationIssue[] = [];
    const firstName = rowValue(row, FIRST_NAME_FIELD);
    const lastName = rowValue(row, LAST_NAME_FIELD);
    const documentNumber = rowValue(row, DOCUMENT_NUMBER_FIELD);
    const documentType = normalizeDocumentType(rowValue(row, DOCUMENT_TYPE_FIELD));

    const nameFilled =
        !isEffectivelyEmpty(firstName) || !isEffectivelyEmpty(lastName);
    const documentFilled = !isEffectivelyEmpty(documentNumber);
    const typeFilled = !isEffectivelyEmpty(documentType);

    const mode = detectMexicoLicenseInputMode(row);

    if (nameFilled && documentFilled) {
        issues.push({
            field: DOCUMENT_NUMBER_FIELD,
            translationKey: 'createBatch.validationXorBothModes',
            translationParams: { step: stepLabel },
        });
        return issues;
    }

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
        if (typeFilled) {
            issues.push({
                field: DOCUMENT_TYPE_FIELD,
                translationKey: 'createBatch.validationLeakFullNameWhenDocument',
                translationParams: { step: stepLabel, field: DOCUMENT_TYPE_FIELD },
            });
        }
        return issues;
    }

    if (!documentFilled) {
        issues.push({
            field: DOCUMENT_NUMBER_FIELD,
            translationKey: 'postman.requestEditor.validation.fieldRequired',
            translationParams: { field: DOCUMENT_NUMBER_FIELD, step: stepLabel },
        });
        return issues;
    }

    if (mode === 'curp') {
        if (documentType && documentType !== 'CURP') {
            issues.push({
                field: DOCUMENT_TYPE_FIELD,
                translationKey: 'postman.requestEditor.validation.invalidEnum',
                translationParams: {
                    field: DOCUMENT_TYPE_FIELD,
                    value: documentType,
                    expected: 'CURP',
                },
            });
        }
        if (!isEffectivelyEmpty(firstName) || !isEffectivelyEmpty(lastName)) {
            issues.push({
                field: FIRST_NAME_FIELD,
                translationKey: 'createBatch.validationLeakFullNameWhenDocument',
                translationParams: { step: stepLabel, field: FIRST_NAME_FIELD },
            });
        }
        return issues;
    }

    if (mode === 'cedula') {
        if (documentType && documentType !== 'CEDULA') {
            issues.push({
                field: DOCUMENT_TYPE_FIELD,
                translationKey: 'postman.requestEditor.validation.invalidEnum',
                translationParams: {
                    field: DOCUMENT_TYPE_FIELD,
                    value: documentType,
                    expected: 'CEDULA',
                },
            });
        }
        if (!isEffectivelyEmpty(firstName) || !isEffectivelyEmpty(lastName)) {
            issues.push({
                field: FIRST_NAME_FIELD,
                translationKey: 'createBatch.validationLeakFullNameWhenDocument',
                translationParams: { step: stepLabel, field: FIRST_NAME_FIELD },
            });
        }
        return issues;
    }

    return issues;
};

export const ensureMexicoLicenseDocumentTypeForSend = (
    endpoint: ApiEndpoint
): ApiEndpoint => {
    if (!isMexicoLicenseTripleInputEndpoint(endpoint.code) || !endpoint.params?.length) {
        return endpoint;
    }
    const row: Record<string, unknown> = {};
    for (const param of endpoint.params) {
        if (param.key) row[param.key] = param.value;
    }
    const mode = detectMexicoLicenseInputMode(row);
    if (mode !== 'curp' && mode !== 'cedula') {
        return endpoint;
    }
    const expectedType = mode === 'cedula' ? 'CEDULA' : 'CURP';
    const params = endpoint.params.map((param) =>
        param.key === DOCUMENT_TYPE_FIELD ? { ...param, value: expectedType } : param
    );
    return { ...endpoint, params };
};

/** Apply documentType and clear opposing fields when the user edits a Mexico license param group. */
export const applyMexicoLicenseParamEdit = (
    endpoint: ApiEndpoint,
    fieldKey: string,
    mode: MexicoLicenseInputMode
): ApiEndpoint => {
    if (!endpoint.params?.length) return endpoint;

    const params = endpoint.params.map((param) => ({ ...param }));

    const setValue = (key: string, value: string) => {
        const row = params.find((p) => p.key === key);
        if (row) row.value = value;
    };

    if (mode === 'curp' && fieldKey === DOCUMENT_NUMBER_FIELD) {
        setValue(DOCUMENT_TYPE_FIELD, 'CURP');
        setValue(FIRST_NAME_FIELD, '');
        setValue(LAST_NAME_FIELD, '');
    } else if (mode === 'cedula' && fieldKey === DOCUMENT_NUMBER_FIELD) {
        setValue(DOCUMENT_TYPE_FIELD, 'CEDULA');
        setValue(FIRST_NAME_FIELD, '');
        setValue(LAST_NAME_FIELD, '');
    } else if (mode === 'name' && (fieldKey === FIRST_NAME_FIELD || fieldKey === LAST_NAME_FIELD)) {
        setValue(DOCUMENT_TYPE_FIELD, '');
        setValue(DOCUMENT_NUMBER_FIELD, '');
    }

    return { ...endpoint, params };
};

export const clearMexicoLicenseInputMode = (
    endpoint: ApiEndpoint,
    mode: MexicoLicenseInputMode
): ApiEndpoint => {
    if (!endpoint.params?.length) return endpoint;
    const params = endpoint.params.map((param) => {
        if (mode === 'curp' || mode === 'cedula') {
            if (param.key === DOCUMENT_NUMBER_FIELD || param.key === DOCUMENT_TYPE_FIELD) {
                return { ...param, value: '' };
            }
        }
        if (mode === 'name') {
            if (param.key === FIRST_NAME_FIELD || param.key === LAST_NAME_FIELD) {
                return { ...param, value: '' };
            }
        }
        return param;
    });
    return { ...endpoint, params };
};
