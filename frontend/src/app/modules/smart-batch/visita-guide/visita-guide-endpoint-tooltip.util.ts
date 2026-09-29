import { AppFeature } from '../smart-batch.service';
import {
    canonicalParamFilterId,
    declaredVisibleFields,
    humanizeParamField,
    paramFieldLabelKey,
} from '../endpoint-param-highlight.util';
import { GENERIC_APP_FEATURE_DESCRIPTIONS } from '../../postman/postman-endpoint-copy.util';

export type TooltipTranslate = (key: string, params?: Record<string, string>) => string;

const pickDescription = (...candidates: (string | undefined)[]): string | undefined => {
    for (const value of candidates) {
        const text = value?.trim();
        if (!text || GENERIC_APP_FEATURE_DESCRIPTIONS.has(text)) continue;
        return text;
    }
    return undefined;
};

const enumsForCanonical = (feature: AppFeature, canonical: string): string[] => {
    const values = (feature.dependencies ?? [])
        .filter((dep) => dep.field && canonicalParamFilterId(dep.field) === canonical)
        .flatMap((dep) => dep.enum ?? []);
    return [...new Set(values.map((item) => String(item).trim()).filter(Boolean))];
};

const isRequiredCanonical = (feature: AppFeature, canonical: string): boolean => {
    const deps = (feature.dependencies ?? []).filter(
        (dep) => dep.field && canonicalParamFilterId(dep.field) === canonical
    );
    if (!deps.length) return true;
    return deps.some((dep) => dep.required !== false);
};

export type VisitaEndpointTooltipDetails = {
    title: string;
    description?: string;
    request?: string;
    code?: string;
    params: string[];
};

export const visitaEndpointTooltipDetails = (
    feature: AppFeature,
    t: TooltipTranslate,
    catalog?: { title?: string; description?: string }
): VisitaEndpointTooltipDetails => {
    const title = catalog?.title?.trim() || feature.name?.trim() || feature.code;
    const description = pickDescription(catalog?.description, feature.description);
    const method = (feature.method || 'GET').toUpperCase();
    const path = (feature.url || feature.endpoint || '').trim();
    const params: string[] = [];
    const fields = declaredVisibleFields(feature);
    const seen = new Set<string>();
    for (const field of fields) {
        const canonical = canonicalParamFilterId(field);
        if (seen.has(canonical)) continue;
        seen.add(canonical);
        const label = t(paramFieldLabelKey(canonical), { field: humanizeParamField(canonical) });
        const enums = enumsForCanonical(feature, canonical);
        const optional = isRequiredCanonical(feature, canonical)
            ? ''
            : ` (${t('visitaGuide.endpointTooltipOptional')})`;
        const allowed = enums.length ? `: ${enums.join(', ')}` : '';
        params.push(`${label}${optional}${allowed}`);
    }

    return {
        title,
        description: description && description !== title ? description : undefined,
        request: path ? `${method} ${path}` : undefined,
        code: feature.code || undefined,
        params,
    };
};

export const buildVisitaEndpointTooltip = (
    feature: AppFeature,
    t: TooltipTranslate,
    catalog?: { title?: string; description?: string }
): string => {
    const details = visitaEndpointTooltipDetails(feature, t, catalog);
    const lines: string[] = [details.title];
    if (details.description) lines.push('', details.description);
    if (details.request) lines.push('', details.request);
    if (details.code) lines.push(`${t('visitaGuide.endpointTooltipCode')}: ${details.code}`);
    if (details.params.length) {
        lines.push('', t('visitaGuide.endpointTooltipParams'));
        for (const param of details.params) lines.push(`• ${param}`);
    }
    return lines.join('\n');
};
