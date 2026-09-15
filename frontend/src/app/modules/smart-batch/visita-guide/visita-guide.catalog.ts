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
    placeholderKey: string;
    required: boolean;
    defaults?: Record<string, string>;
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

export const inputFieldsFor = (entities: GuideEntity[], iso: string): GuideInputField[] => {
    if (iso.toLowerCase() !== 'co') return [];
    const selected = new Set(entities);
    const mixedCitizenCompany = selected.has('citizen') && selected.has('company');
    const fields: GuideInputField[] = [];

    if (selected.has('citizen')) {
        fields.push({
            key: mixedCitizenCompany ? 'citizenDocumentNumber' : 'documentNumber',
            labelKey: 'visitaGuide.idCedula',
            placeholderKey: 'visitaGuide.idCedulaPlaceholder',
            required: true,
            defaults: mixedCitizenCompany ? { citizenDocumentType: 'CC' } : { documentType: 'CC' },
        });
    }
    if (selected.has('company')) {
        fields.push({
            key: mixedCitizenCompany ? 'companyDocumentNumber' : 'documentNumber',
            labelKey: 'visitaGuide.idNit',
            placeholderKey: 'visitaGuide.idNitPlaceholder',
            required: true,
            defaults: mixedCitizenCompany ? { companyDocumentType: 'NIT' } : { documentType: 'NIT' },
        });
    }
    if (selected.has('vehicle')) {
        fields.push({
            key: 'plate',
            labelKey: 'visitaGuide.idPlate',
            placeholderKey: 'visitaGuide.idPlatePlaceholder',
            required: true,
        });
        if (!selected.has('citizen') && !selected.has('company')) {
            fields.push({
                key: 'documentNumber',
                labelKey: 'visitaGuide.idOwnerOptional',
                placeholderKey: 'visitaGuide.idOwnerPlaceholder',
                required: false,
                defaults: { documentType: 'CC' },
            });
        }
    }

    return fields;
};

export const buildInputRow = (
    entities: GuideEntity[],
    iso: string,
    values: Record<string, string>
): Record<string, string> => {
    const row: Record<string, string> = {};
    for (const field of inputFieldsFor(entities, iso)) {
        const value = (values[field.key] ?? '').trim();
        if (!value) continue;
        Object.assign(row, field.defaults ?? {});
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
    layout: 'visitaGuide.saveAndGenerate',
    include: 'visitaGuide.continue',
    template: 'visitaGuide.continue',
    customize: 'visitaGuide.continue',
    preview: 'visitaGuide.continue',
    generate: 'visitaGuide.downloadPdf',
};
