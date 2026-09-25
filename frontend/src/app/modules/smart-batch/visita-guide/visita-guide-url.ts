import { GuideTemplateChoice } from './visita-guide-state.service';
import { GuideEntity, GuideIntent, GuideMode, GuideStepId } from './visita-guide.catalog';

const STEPS = new Set<GuideStepId>([
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
            : stepRaw && STEPS.has(stepRaw as GuideStepId)
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
    };
};

export const serializeGuideUrl = (state: GuideUrlState): Record<string, string | null> => ({
    step: state.step,
    intent: state.intent,
    country: state.countries.length ? state.countries.join(',') : null,
    entities: state.entities.length ? state.entities.join(',') : null,
    mode: state.mode,
    configId: state.configId,
    batchId: state.batchId,
    templateId: state.templateChoice === 'scratch' ? null : state.templateId,
    templateChoice: state.templateChoice,
    features: state.features.length ? state.features.join(',') : null,
    start: null,
    resume: null,
});
