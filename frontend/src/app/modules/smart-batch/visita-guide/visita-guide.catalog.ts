import { mergeEnumValues } from '../batch-required-fields.util';
import {
    canonicalParamFilterId,
    collectRequiredParamFields,
    FeatureParamShape,
    humanizeParamField,
    paramFieldLabelKey,
} from '../endpoint-param-highlight.util';
import { featureGroup } from '../feature-group.util';

export type GuideIntent = 'report' | 'person' | 'vehicle' | 'company' | 'template' | 'other';
export type GuideEntity = 'citizen' | 'vehicle' | 'company';
export type GuideMode = 'single' | 'batch';
export type GuideStepId =
    | 'intent'
    | 'entity'
    | 'country'
    | 'mode'
    | 'endpoints'
    | 'input'
    | 'consult'
    | 'results'
    | 'layout'
    | 'include'
    | 'template'
    | 'customize'
    | 'preview'
    | 'generate';

export interface GuideCountryOption {
    iso: string;
    name: string;
    available: boolean;
}

export interface GuideInputField {
    key: string;
    labelKey: string;
    labelText?: string;
    placeholderKey: string;
    required: boolean;
    options?: string[];
}

export const GUIDE_COUNTRIES: GuideCountryOption[] = [
    { iso: 'co', name: 'Colombia', available: true },
];

export const GUIDE_INTENTS: {
    id: GuideIntent;
    icon: string;
    titleKey: string;
    descKey: string;
    entity?: GuideEntity;
}[] = [
    {
        id: 'report',
        icon: 'description',
        titleKey: 'visitaGuide.intentReport',
        descKey: 'visitaGuide.intentReportDesc',
    },
    {
        id: 'person',
        icon: 'person_search',
        titleKey: 'visitaGuide.intentPerson',
        descKey: 'visitaGuide.intentPersonDesc',
        entity: 'citizen',
    },
    {
        id: 'vehicle',
        icon: 'directions_car',
        titleKey: 'visitaGuide.intentVehicle',
        descKey: 'visitaGuide.intentVehicleDesc',
        entity: 'vehicle',
    },
    {
        id: 'company',
        icon: 'business',
        titleKey: 'visitaGuide.intentCompany',
        descKey: 'visitaGuide.intentCompanyDesc',
        entity: 'company',
    },
    {
        id: 'template',
        icon: 'dashboard_customize',
        titleKey: 'visitaGuide.intentTemplate',
        descKey: 'visitaGuide.intentTemplateDesc',
    },
    {
        id: 'other',
        icon: 'tune',
        titleKey: 'visitaGuide.intentOther',
        descKey: 'visitaGuide.intentOtherDesc',
    },
];

export const GUIDE_ENTITIES: { id: GuideEntity; icon: string; titleKey: string; descKey: string }[] = [
    {
        id: 'citizen',
        icon: 'person_search',
        titleKey: 'visitaGuide.entityPerson',
        descKey: 'visitaGuide.entityPersonDesc',
    },
    {
        id: 'vehicle',
        icon: 'directions_car',
        titleKey: 'visitaGuide.entityVehicle',
        descKey: 'visitaGuide.entityVehicleDesc',
    },
    {
        id: 'company',
        icon: 'business',
        titleKey: 'visitaGuide.entityCompany',
        descKey: 'visitaGuide.entityCompanyDesc',
    },
];

export const availableCountries = (): GuideCountryOption[] =>
    GUIDE_COUNTRIES.filter((country) => country.available);

export const intentEntity = (intent: GuideIntent | null): GuideEntity | null => {
    if (intent === 'person') return 'citizen';
    if (intent === 'vehicle') return 'vehicle';
    if (intent === 'company') return 'company';
    return null;
};

export const defaultSystemKey = (entity: GuideEntity, iso: string): string =>
    `${iso.toLowerCase()}.${entity}.comprehensive`;

const DEFAULT_DOCUMENT_TYPES = ['CC', 'CE', 'NIT', 'PA', 'PEP', 'PPT', 'RC', 'TI'];

const FIELD_ORDER = [
    'documentType',
    'citizenDocumentType',
    'companyDocumentType',
    'documentNumber',
    'citizenDocumentNumber',
    'companyDocumentNumber',
    'plate',
    'dateOfBirth',
    'fechaExpedicion',
    'expirationDate',
    'fullName',
];

const rowKeyForParam = (
    canonical: string,
    feature: FeatureParamShape,
    mixedCitizenCompany: boolean,
    entities: GuideEntity[]
): string => {
    if (!mixedCitizenCompany || (canonical !== 'documentType' && canonical !== 'documentNumber')) {
        return canonical;
    }
    const group = featureGroup(feature);
    const useCompany =
        group === 'company' || (group === 'vehicle' && !entities.includes('citizen') && entities.includes('company'));
    if (useCompany) {
        return canonical === 'documentType' ? 'companyDocumentType' : 'companyDocumentNumber';
    }
    return canonical === 'documentType' ? 'citizenDocumentType' : 'citizenDocumentNumber';
};

const enumsForCanonical = (feature: FeatureParamShape, canonical: string): string[] | undefined => {
    const values = (feature.dependencies ?? [])
        .filter((dep) => dep.field && canonicalParamFilterId(dep.field) === canonical)
        .flatMap((dep) => dep.enum ?? []);
    return mergeEnumValues(undefined, values);
};

const labelForInputKey = (key: string, canonical: string): { labelKey: string; labelText?: string } => {
    if (key === 'citizenDocumentNumber') return { labelKey: 'visitaGuide.idCedula' };
    if (key === 'companyDocumentNumber') return { labelKey: 'visitaGuide.idNit' };
    const labelKey = paramFieldLabelKey(canonical);
    if (labelKey === 'visitaGuide.paramFieldOther') {
        return { labelKey, labelText: humanizeParamField(canonical) };
    }
    return { labelKey };
};

const toGuideInputField = (
    key: string,
    canonical: string,
    required: boolean,
    options?: string[]
): GuideInputField => {
    const { labelKey, labelText } = labelForInputKey(key, canonical);
    const select = canonical === 'documentType' || Boolean(options?.length);
    let placeholderKey = 'visitaGuide.inputValuePlaceholder';
    if (select) placeholderKey = 'visitaGuide.paramFieldSelectPlaceholder';
    else if (canonical === 'documentNumber') placeholderKey = 'visitaGuide.idCedulaPlaceholder';
    else if (canonical === 'plate') placeholderKey = 'visitaGuide.idPlatePlaceholder';
    return {
        key,
        labelKey,
        labelText,
        placeholderKey,
        required,
        options: select ? (options?.length ? options : DEFAULT_DOCUMENT_TYPES) : undefined,
    };
};

const inputFieldsFromFeatures = (
    entities: GuideEntity[],
    features: FeatureParamShape[]
): GuideInputField[] => {
    const mixedCitizenCompany = entities.includes('citizen') && entities.includes('company');
    const byKey = new Map<
        string,
        { canonical: string; required: boolean; options?: string[] }
    >();

    for (const feature of features) {
        for (const canonical of collectRequiredParamFields([feature])) {
            const key = rowKeyForParam(canonical, feature, mixedCitizenCompany, entities);
            const previous = byKey.get(key);
            byKey.set(key, {
                canonical,
                required: true,
                options: mergeEnumValues(previous?.options, enumsForCanonical(feature, canonical)),
            });
        }
    }

    const fields = [...byKey.entries()]
        .map(([key, meta]) => toGuideInputField(key, meta.canonical, meta.required, meta.options))
        .sort((left, right) => {
            const leftRank = FIELD_ORDER.indexOf(left.key);
            const rightRank = FIELD_ORDER.indexOf(right.key);
            if (leftRank === -1 && rightRank === -1) return left.key.localeCompare(right.key);
            if (leftRank === -1) return 1;
            if (rightRank === -1) return -1;
            return leftRank - rightRank;
        });

    return fields.length ? fields : inputFieldsFromEntities(entities);
};

const inputFieldsFromEntities = (entities: GuideEntity[]): GuideInputField[] => {
    const selected = new Set(entities);
    const mixedCitizenCompany = selected.has('citizen') && selected.has('company');
    const fields: GuideInputField[] = [];

    if (selected.has('citizen')) {
        const typeKey = mixedCitizenCompany ? 'citizenDocumentType' : 'documentType';
        const numberKey = mixedCitizenCompany ? 'citizenDocumentNumber' : 'documentNumber';
        fields.push(toGuideInputField(typeKey, 'documentType', true, DEFAULT_DOCUMENT_TYPES));
        fields.push({
            ...toGuideInputField(numberKey, 'documentNumber', true),
            labelKey: 'visitaGuide.idCedula',
            placeholderKey: 'visitaGuide.idCedulaPlaceholder',
        });
    }
    if (selected.has('company')) {
        const typeKey = mixedCitizenCompany ? 'companyDocumentType' : 'documentType';
        const numberKey = mixedCitizenCompany ? 'companyDocumentNumber' : 'documentNumber';
        fields.push(toGuideInputField(typeKey, 'documentType', true, DEFAULT_DOCUMENT_TYPES));
        fields.push({
            ...toGuideInputField(numberKey, 'documentNumber', true),
            labelKey: 'visitaGuide.idNit',
            placeholderKey: 'visitaGuide.idNitPlaceholder',
        });
    }
    if (selected.has('vehicle')) {
        fields.push(toGuideInputField('plate', 'plate', true));
        if (!selected.has('citizen') && !selected.has('company')) {
            fields.push(toGuideInputField('documentType', 'documentType', false, DEFAULT_DOCUMENT_TYPES));
            fields.push({
                ...toGuideInputField('documentNumber', 'documentNumber', false),
                labelKey: 'visitaGuide.idOwnerOptional',
                placeholderKey: 'visitaGuide.idOwnerPlaceholder',
            });
        }
    }

    return fields;
};

export const inputFieldsFor = (
    entities: GuideEntity[],
    iso: string,
    features: FeatureParamShape[] = []
): GuideInputField[] => {
    if (iso.toLowerCase() !== 'co') return [];
    if (features.length) return inputFieldsFromFeatures(entities, features);
    return inputFieldsFromEntities(entities);
};

export const buildInputRow = (
    entities: GuideEntity[],
    iso: string,
    values: Record<string, string>,
    features: FeatureParamShape[] = []
): Record<string, string> => {
    const row: Record<string, string> = {};
    for (const field of inputFieldsFor(entities, iso, features)) {
        const value = (values[field.key] ?? '').trim();
        if (!value) continue;
        row[field.key] = value;
    }
    return row;
};

export const pipelineName = (entities: GuideEntity[]): string => {
    const labels: Record<GuideEntity, string> = {
        citizen: 'Persona',
        vehicle: 'Vehículo',
        company: 'Empresa',
    };
    return `VISITA — ${entities.map((entity) => labels[entity]).join(' + ')}`;
};

export const STEP_TITLE_KEYS: Record<GuideStepId, string> = {
    intent: 'visitaGuide.stepIntent',
    entity: 'visitaGuide.stepEntity',
    country: 'visitaGuide.stepCountry',
    mode: 'visitaGuide.stepMode',
    endpoints: 'visitaGuide.stepEndpoints',
    input: 'visitaGuide.stepInput',
    consult: 'visitaGuide.stepConsult',
    results: 'visitaGuide.stepResults',
    layout: 'visitaGuide.stepLayout',
    include: 'visitaGuide.stepInclude',
    template: 'visitaGuide.stepTemplate',
    customize: 'visitaGuide.stepCustomize',
    preview: 'visitaGuide.stepPreview',
    generate: 'visitaGuide.stepGenerate',
};

export const STEP_PRIMARY_KEYS: Record<GuideStepId, string> = {
    intent: 'visitaGuide.continue',
    entity: 'visitaGuide.continue',
    country: 'visitaGuide.continue',
    mode: 'visitaGuide.continue',
    endpoints: 'visitaGuide.continue',
    input: 'visitaGuide.searchAction',
    consult: 'visitaGuide.searching',
    results: 'visitaGuide.continueToReport',
    layout: 'visitaGuide.saveAndViewReport',
    include: 'visitaGuide.continue',
    template: 'visitaGuide.continue',
    customize: 'visitaGuide.continue',
    preview: 'visitaGuide.continue',
    generate: 'visitaGuide.downloadPdf',
};
