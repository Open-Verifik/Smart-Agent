import type { Collection, CollectionScopeType } from './collections.types';

const SCOPE_SORT_ORDER: Record<CollectionScopeType, number> = {
    smartEnroll: 0,
    other: 1,
    demo: 2,
};

export const getOnboardingCollectionCodes = (collections: Collection[]): Set<string> =>
    new Set(collections.map((collection) => collection.code).filter(Boolean));

export const classifyCollectionScope = (
    collection: Collection,
    onboardingCodes: Set<string>
): CollectionScopeType => {
    if (collection.isDemoCollection) return 'demo';
    if (onboardingCodes.has(collection.code)) return 'smartEnroll';
    return 'other';
};

export const classifyCollections = (
    collections: Collection[],
    onboardingCodes: Set<string>
): Collection[] =>
    collections.map((collection) => {
        const collectionScopeType = classifyCollectionScope(collection, onboardingCodes);
        return {
            ...collection,
            collectionScopeType,
            isSmartEnrollCollection: collectionScopeType === 'smartEnroll',
        };
    });

export const mergeAccountCollections = (
    allCollections: Collection[],
    onboardingCollections: Collection[],
    ensureCodes: string[] = [],
    extraCollections: Collection[] = []
): Collection[] => {
    const byCode = new Map<string, Collection>();

    const addCollection = (collection: Collection): void => {
        if (!collection?.code) return;
        byCode.set(collection.code, { ...byCode.get(collection.code), ...collection });
    };

    allCollections.forEach(addCollection);
    onboardingCollections.forEach(addCollection);
    extraCollections.forEach(addCollection);

    const onboardingCodes = getOnboardingCollectionCodes(onboardingCollections);

    ensureCodes.forEach((code) => {
        if (byCode.has(code)) return;
        byCode.set(code, {
            _id: code,
            code,
            name: code,
            description: '',
            project: '',
            createdAt: '',
            updatedAt: '',
        });
    });

    return sortCollectionsByScope(classifyCollections(Array.from(byCode.values()), onboardingCodes));
};

export const sortCollectionsByScope = (collections: Collection[]): Collection[] =>
    [...collections].sort((left, right) => {
        const leftOrder = SCOPE_SORT_ORDER[left.collectionScopeType ?? 'other'];
        const rightOrder = SCOPE_SORT_ORDER[right.collectionScopeType ?? 'other'];
        if (leftOrder !== rightOrder) return leftOrder - rightOrder;
        return left.name.localeCompare(right.name);
    });

export const getCollectionBadgeKey = (collection: Collection): string => {
    switch (collection.collectionScopeType) {
        case 'demo':
            return 'smartEnrollCollections.collectionBadgeDemo';
        case 'smartEnroll':
            return 'smartEnrollCollections.collectionBadgeSmartEnroll';
        default:
            return 'smartEnrollCollections.collectionBadgeOther';
    }
};
