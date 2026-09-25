export type FeatureGroupId = 'citizen' | 'vehicle' | 'company' | 'other';

export const FEATURE_GROUP_ICONS: Record<FeatureGroupId, string> = {
    citizen: 'person_search',
    vehicle: 'directions_car',
    company: 'business',
    other: 'hub',
};

export const featureGroupIcon = (feature: {
    code?: string;
    name?: string;
    url?: string;
    description?: string;
}): string => FEATURE_GROUP_ICONS[featureGroup(feature)];

export const featureGroup = (feature: {
    code?: string;
    name?: string;
    url?: string;
    description?: string;
}): FeatureGroupId => {
    const blob = `${feature.code ?? ''} ${feature.name ?? ''} ${feature.url ?? ''} ${feature.description ?? ''}`.toLowerCase();
    if (/vehicle|vehículo|placa|plate|runt|simit|fasecolda|soat|transit/.test(blob)) {
        return 'vehicle';
    }
    if (/rues|empresa|company|business|dian|nit|rut|camara|cámara|comercial/.test(blob)) {
        return 'company';
    }
    if (
        /cedula|cédula|citizen|persona|registrad|pep|antecedent|procurad|policia|policía|contralor|inpec|migrac/.test(
            blob
        )
    ) {
        return 'citizen';
    }
    return 'other';
};

export const isSmartBatchCatalogFeature = (feature: unknown): boolean => {
    const group = feature && typeof feature === 'object' && 'group' in feature ? feature.group : undefined;
    return !group || group === 'apiRequest';
};
