import { GuideTemplateChoice } from './visita-guide-state.service';
import { GuideEntity, GuideIntent, GuideMode, GuideStepId } from './visita-guide.catalog';

export const GUIDE_STEPS = new Set<GuideStepId>([
    'intent',
    'entity',
    'country',
    'mode',
    'endpoints',
    'input',
    'consult',
    'results',
    'layout',
    'include',
    'template',
    'customize',
    'preview',
    'generate',
]);

const INTENTS = new Set<GuideIntent>(['report', 'person', 'vehicle', 'company', 'template', 'other']);
const ENTITIES = new Set<GuideEntity>(['citizen', 'vehicle', 'company']);
const MODES = new Set<GuideMode>(['single', 'batch']);
const TEMPLATE_CHOICES = new Set<GuideTemplateChoice>(['visita', 'mine', 'scratch']);

export type GuideUrlState = {
    step: GuideStepId | null;
    intent: GuideIntent | null;
    countries: string[];
    entities: GuideEntity[];
    mode: GuideMode | null;
    configId: string | null;
    batchId: string | null;
    templateId: string | null;
    templateChoice: GuideTemplateChoice | null;
    features: string[];
    fromLayout?: boolean;
};

const read = (params: { get(name: string): string | null }, key: string): string | null => {
    const value = params.get(key)?.trim();
    return value ? value : null;
};

export const parseGuideUrl = (params: { get(name: string): string | null }): GuideUrlState => {
    const stepRaw = read(params, 'step') ?? read(params, 'resume');
    const mappedStep: GuideStepId | null =
        stepRaw === 'preview' || stepRaw === 'customize' || stepRaw === 'include'
            ? 'layout'
            : stepRaw && GUIDE_STEPS.has(stepRaw as GuideStepId)
              ? (stepRaw as GuideStepId)
              : null;
    const start = read(params, 'start');
    const intentRaw = read(params, 'intent') ?? (start === 'report' ? 'report' : null);

    return {
        step: start === 'country' ? 'country' : start === 'report' && !mappedStep ? 'country' : mappedStep,
        intent: intentRaw && INTENTS.has(intentRaw as GuideIntent) ? (intentRaw as GuideIntent) : null,
        countries: (read(params, 'country') ?? '')
            .split(',')
            .map((item) => item.trim().toLowerCase())
            .filter(Boolean),
        entities: (read(params, 'entities') ?? '')
            .split(',')
            .map((item) => item.trim())
            .filter((item): item is GuideEntity => ENTITIES.has(item as GuideEntity)),
        mode: (() => {
            const value = read(params, 'mode');
            return value && MODES.has(value as GuideMode) ? (value as GuideMode) : null;
        })(),
        configId: read(params, 'configId'),
        batchId: read(params, 'batchId'),
        templateId: read(params, 'templateId'),
        templateChoice: (() => {
            const value = read(params, 'templateChoice');
            return value && TEMPLATE_CHOICES.has(value as GuideTemplateChoice)
                ? (value as GuideTemplateChoice)
                : null;
        })(),
        features: (read(params, 'features') ?? '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean),
        fromLayout: read(params, 'flow') === '1',
    };
};

/** Start screen lives at `/smart-batch`. Every later step has its own path. */
export const guideStepPath = (step: GuideStepId | null): string =>
    !step || step === 'intent' ? '/smart-batch' : `/smart-batch/guide/${step}`;

export const isGuideStep = (value: string | null): value is GuideStepId =>
    Boolean(value && GUIDE_STEPS.has(value as GuideStepId));

/** Earlier screens must not keep query fields that belong to a later step. */
const STEP_RANK: Record<GuideStepId, number> = {
    intent: 0,
    country: 1,
    entity: 2,
    endpoints: 3,
    mode: 4,
    input: 5,
    consult: 6,
    results: 7,
    include: 8,
    template: 9,
    customize: 10,
    preview: 11,
    layout: 12,
    generate: 13,
};

export const serializeGuideUrl = (state: GuideUrlState): Record<string, string | null> => {
    const rank = STEP_RANK[state.step ?? 'intent'] ?? 0;
    const reached = (step: GuideStepId): boolean => rank >= STEP_RANK[step];

    return {
        step: state.step,
        intent: reached('country') ? state.intent : null,
        country: reached('country') && state.countries.length ? state.countries.join(',') : null,
        entities: reached('entity') && state.entities.length ? state.entities.join(',') : null,
        features: reached('endpoints') && state.features.length ? state.features.join(',') : null,
        mode: reached('mode') ? state.mode : null,
        configId: reached('consult') ? state.configId : null,
        batchId: reached('consult') ? state.batchId : null,
        templateId: reached('template') && state.templateChoice !== 'scratch' ? state.templateId : null,
        templateChoice: reached('template') ? state.templateChoice : null,
        flow: state.fromLayout ? '1' : null,
        start: null,
        resume: null,
    };
};
