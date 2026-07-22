/**
 * Maps UI / natural-language sexo values to Registraduría SCCRC API values.
 */
const FEMALE_ALIASES = new Set(['F', 'FEMENINO', 'FEMALE', 'MUJER', 'FEMININO']);
const MALE_ALIASES = new Set(['M', 'MASCULINO', 'MALE', 'HOMBRE', 'MASCULINE']);

/**
 * @param value Raw param value from Postman UI or free text
 * @returns Canonical API value when recognized; otherwise the trimmed original
 */
export const normalizePostmanSexoValue = (value: unknown): string => {
    const trimmed = String(value ?? '').trim();
    if (!trimmed) {
        return '';
    }

    const upper = trimmed.toUpperCase();

    if (FEMALE_ALIASES.has(upper)) {
        return 'FEMENINO';
    }

    if (MALE_ALIASES.has(upper)) {
        return 'MASCULINO';
    }

    return trimmed;
};

/**
 * Whether a raw value is an accepted sexo alias for the given API enum list.
 */
export const isPostmanSexoEnumMatch = (raw: unknown, enums: string[]): boolean => {
    if (!enums?.length) {
        return false;
    }

    const canonical = normalizePostmanSexoValue(raw).toLowerCase();
    const valid = enums.map((v) => String(v).toLowerCase());

    if (valid.includes(canonical)) {
        return true;
    }

    // Allow short forms when the enum lists only long forms (or vice versa).
    if (canonical === 'femenino' && (valid.includes('f') || valid.includes('femenino'))) {
        return true;
    }

    if (canonical === 'masculino' && (valid.includes('m') || valid.includes('masculino'))) {
        return true;
    }

    return valid.includes(String(raw ?? '').trim().toLowerCase());
};

/**
 * Prefer long API values in the dropdown when both long and short forms exist.
 */
export const filterPostmanSexoEnumOptions = (enums: string[]): string[] => {
    const list = enums.map(String);
    const upper = new Set(list.map((v) => v.toUpperCase()));
    const hasLong = upper.has('FEMENINO') || upper.has('MASCULINO');

    if (!hasLong) {
        return [...list];
    }

    return list.filter((value) => {
        const key = value.toUpperCase();

        return key !== 'M' && key !== 'F';
    });
};

/**
 * i18n key for a sexo option label, or null to show the raw API value.
 */
export const getPostmanSexoLabelKey = (value: string): string | null => {
    const canonical = normalizePostmanSexoValue(value);

    if (canonical === 'FEMENINO') {
        return 'postman.requestEditor.params.sexoFemale';
    }

    if (canonical === 'MASCULINO') {
        return 'postman.requestEditor.params.sexoMale';
    }

    return null;
};
