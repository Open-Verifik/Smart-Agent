import { normalizeCheckListDomains } from '../check-list/check-list-taxonomy';

export type FeatureGroupId = 'citizen' | 'vehicle' | 'company' | 'other';

const PEOPLE_CATEGORIES = new Set([
    'identity',
    'identity_validation',
    'background_check',
    'judicial',
    'health',
    'voting',
    'email',
    'covid',
    'military',
    'antispoofing',
    'faceverification',
    'ocr',
    'verification',
    'search',
    'look_ups',
    'messaging',
    'biometrics_apis',
    'authentication',
]);

const VEHICLE_CATEGORIES = new Set(['transit', 'autodata']);

const COMPANY_CATEGORIES = new Set([
    'business',
    'certificates',
    'solutions',
    'payments',
    'data_sheet',
]);

export type CatalogGroupFeature = {
    code?: string;
    name?: string;
    url?: string;
    description?: string;
    baseCategory?: string;
    checkListDomains?: unknown;
    group?: string;
};

const normalizeCategory = (value?: string): string =>
    String(value ?? '')
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, '_');

const groupFromCategory = (category: string): FeatureGroupId | null => {
    if (VEHICLE_CATEGORIES.has(category)) return 'vehicle';
    if (COMPANY_CATEGORIES.has(category)) return 'company';
    if (PEOPLE_CATEGORIES.has(category)) return 'citizen';
    return null;
};

/**
 * Explicit vehicle or business domains win over baseCategory (drivers stay under vehicles).
 * A people-only domain with no category stays unset: the API defaults uncategorized records to people.
 */
const groupFromExplicitDomains = (domains: string[]): FeatureGroupId | null => {
    const vehicles = domains.includes('vehicles');
    const businesses = domains.includes('businesses');
    if (vehicles && businesses) return 'other';
    if (vehicles) return 'vehicle';
    if (businesses) return 'company';
    return null;
};

/**
 * Bucket a catalog feature for Smart Batch. Uses baseCategory and checkListDomains.
 * Descriptions are ignored so words like "template" or "identity" cannot change the bucket.
 */
export const featureGroup = (feature: CatalogGroupFeature): FeatureGroupId => {
    const explicit = groupFromExplicitDomains(normalizeCheckListDomains(feature.checkListDomains));
    if (explicit) return explicit;

    const fromCategory = groupFromCategory(normalizeCategory(feature.baseCategory));
    if (fromCategory) return fromCategory;

    return 'other';
};

/** Smart Batch steps are lookup endpoints. Communication, OCR, and biometrics stay out of the picker. */
export const isSmartBatchCatalogFeature = (feature: { group?: string }): boolean =>
    feature.group === 'apiRequest';
