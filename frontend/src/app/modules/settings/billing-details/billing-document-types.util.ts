export type BillingPayerType = 'person' | 'business';

export interface BillingDocumentTypeOption {
    value: string;
    label: string;
}

const COUNTRY_ALIASES: Record<string, string> = {
    colombia: 'Colombia',
    co: 'Colombia',
    col: 'Colombia',
    peru: 'Peru',
    pe: 'Peru',
    per: 'Peru',
    chile: 'Chile',
    cl: 'Chile',
    mexico: 'Mexico',
    mx: 'Mexico',
    mex: 'Mexico',
    argentina: 'Argentina',
    ar: 'Argentina',
    arg: 'Argentina',
    brazil: 'Brazil',
    brasil: 'Brazil',
    br: 'Brazil',
    'costa rica': 'Costa Rica',
    cr: 'Costa Rica',
    ecuador: 'Ecuador',
    ec: 'Ecuador',
    panama: 'Panama',
    pa: 'Panama',
    uruguay: 'Uruguay',
    uy: 'Uruguay',
    venezuela: 'Venezuela',
    ve: 'Venezuela',
    bolivia: 'Bolivia',
    bo: 'Bolivia',
    paraguay: 'Paraguay',
    py: 'Paraguay',
    honduras: 'Honduras',
    hn: 'Honduras',
    spain: 'Spain',
    es: 'Spain',
    espana: 'Spain',
    'el salvador': 'El Salvador',
    sv: 'El Salvador',
    india: 'India',
    in: 'India',
};

const PERSON_DOCUMENT_TYPES: Record<string, string[]> = {
    Colombia: ['CC', 'CE', 'PPT', 'PA', 'PEP'],
    Peru: ['DNI'],
    Chile: ['RUN', 'RUT'],
    Mexico: ['CURP'],
    Argentina: ['DNIAR'],
    Brazil: ['CPF'],
    'Costa Rica': ['CCCR'],
    Ecuador: ['CCEC'],
    Panama: ['CCPA'],
    Uruguay: ['CCUY'],
    Venezuela: ['CCVE'],
    Bolivia: ['CI'],
    Paraguay: ['CIC'],
    Honduras: ['DNIHN'],
    Spain: ['DNIES', 'NIE'],
    'El Salvador': ['DUI'],
    India: ['EPIC'],
};

const BUSINESS_DOCUMENT_TYPES: Record<string, string[]> = {
    Colombia: ['NIT'],
    Peru: ['RUC'],
    Chile: ['RUT'],
};

const DEFAULT_PERSON_DOCUMENT_TYPES = ['DNI'];
const DEFAULT_BUSINESS_DOCUMENT_TYPES = ['INTERNATIONAL_TAX'];

const toDocumentTypeOption = (value: string): BillingDocumentTypeOption => ({
    value,
    label: `settings.billing.document_types.${value}`,
});

/**
 * Normalize a billing country value (name, ISO code, or autocomplete object) to a catalog key.
 */
export const canonicalizeBillingCountry = (value: unknown): string => {
    const raw =
        typeof value === 'object' && value
            ? `${(value as { name?: string; code?: string }).name || (value as { code?: string }).code || ''}`
            : `${value || ''}`;

    const normalized = raw
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    return COUNTRY_ALIASES[normalized] || raw.trim();
};

/**
 * Document types allowed for a billing country and payer type.
 */
export const getBillingDocumentTypeValues = (
    country: unknown,
    payerType: BillingPayerType
): string[] => {
    const key = canonicalizeBillingCountry(country);

    if (payerType === 'business') {
        return BUSINESS_DOCUMENT_TYPES[key]?.length
            ? BUSINESS_DOCUMENT_TYPES[key]
            : DEFAULT_BUSINESS_DOCUMENT_TYPES;
    }

    return PERSON_DOCUMENT_TYPES[key]?.length
        ? PERSON_DOCUMENT_TYPES[key]
        : DEFAULT_PERSON_DOCUMENT_TYPES;
};

/**
 * Autocomplete options for the billing document-type field.
 */
export const getBillingDocumentTypes = (
    country: unknown,
    payerType: BillingPayerType
): BillingDocumentTypeOption[] =>
    getBillingDocumentTypeValues(country, payerType).map(toDocumentTypeOption);

/**
 * Whether a document type is valid for the selected country and payer type.
 */
export const isBillingDocumentTypeAllowed = (
    country: unknown,
    documentType: string,
    payerType: BillingPayerType
): boolean => getBillingDocumentTypeValues(country, payerType).includes(documentType);

/**
 * Keep the full list when the field already holds a selected code (e.g. "CC").
 * Only filter when the user is typing a search string.
 */
export const filterBillingDocumentTypes = (
    source: BillingDocumentTypeOption[],
    value: unknown,
    translate: (key: string) => string
): BillingDocumentTypeOption[] => {
    const query = typeof value === 'string' ? value.trim().toLowerCase() : '';

    if (!query || source.some((option) => option.value.toLowerCase() === query)) {
        return source;
    }

    return source.filter((option) => {
        const label = translate(option.label).toLowerCase();

        return label.includes(query) || option.value.toLowerCase().includes(query);
    });
};
