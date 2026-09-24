export type FeatureGroupId = 'citizen' | 'vehicle' | 'company' | 'other';

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
