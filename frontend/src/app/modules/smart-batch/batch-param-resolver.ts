/**
 * Step params for the in-tab Sync runner. Mirrors FeatureRunner precedence:
 * dependency default → input name → parameterDefaults → inputFieldMapping.
 */

const TEMPLATE = /^\{\{\s*([^}]+?)\s*\}\}$/;

const isEmpty = (value: unknown): boolean =>
    value === null || value === undefined || (typeof value === 'string' && value.trim() === '');

const normalizeMapping = (mapping: unknown): Record<string, string> => {
    if (!mapping) return {};
    if (mapping instanceof Map) return Object.fromEntries(mapping.entries());
    if (typeof mapping === 'object') return { ...(mapping as Record<string, string>) };
    return {};
};

const getByPath = (source: unknown, path: string): unknown => {
    if (!path || source == null) return undefined;
    const segments = String(path)
        .replace(/\[(\d+)\]/g, '.$1')
        .split('.')
        .filter(Boolean);
    let current: unknown = source;
    for (const segment of segments) {
        if (current == null || typeof current !== 'object') return undefined;
        current = Array.isArray(current)
            ? current[Number(segment)]
            : (current as Record<string, unknown>)[segment];
    }
    return current;
};

const resolveTemplate = (value: unknown, context: Record<string, unknown>): unknown => {
    if (typeof value !== 'string') return value;
    const exact = value.match(TEMPLATE);
    if (!exact) return value;
    return getByPath(context, exact[1]);
};

export const resolveStepParams = (options: {
    step: { parameterDefaults?: Record<string, unknown>; inputFieldMapping?: unknown };
    dependencies?: { field?: string; default?: unknown }[];
    inputData?: Record<string, unknown>;
    results?: Record<string, unknown>;
}): Record<string, unknown> => {
    const inputData = options.inputData || {};
    const results = options.results || {};
    const context = { input: inputData, inputData, results, steps: results };
    const params: Record<string, unknown> = {};

    for (const dependency of options.dependencies || []) {
        if (!dependency.field || dependency.default == null) continue;
        params[dependency.field] = dependency.default;
    }

    for (const dependency of options.dependencies || []) {
        if (!dependency.field) continue;
        const raw = getByPath(inputData, dependency.field);
        if (!isEmpty(raw)) params[dependency.field] = raw;
    }

    for (const [key, value] of Object.entries(options.step.parameterDefaults || {})) {
        const resolved = resolveTemplate(value, context);
        if (!isEmpty(resolved)) params[key] = resolved;
    }

    for (const [inputColumn, apiParam] of Object.entries(normalizeMapping(options.step.inputFieldMapping))) {
        if (!apiParam) continue;
        const raw = TEMPLATE.test(inputColumn)
            ? resolveTemplate(inputColumn, context)
            : getByPath(inputData, inputColumn);
        if (!isEmpty(raw)) params[apiParam] = raw;
    }

    for (const key of Object.keys(params)) {
        if (isEmpty(params[key])) delete params[key];
        else if (typeof params[key] === 'string') params[key] = (params[key] as string).trim();
    }

    return params;
};
