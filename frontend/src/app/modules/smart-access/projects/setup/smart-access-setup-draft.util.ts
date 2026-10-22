export type WizardProgress = {
    currentStep: number;
    lastStep: number;
};

const EMAIL_GATEWAYS = ['mailgun', 'none'];
const PHONE_GATEWAYS = ['sms', 'whatsapp', 'both', 'none'];
const SEARCH_MODES = ['FAST', 'ACCURATE'];
const SECURITY_SOURCES = ['API', 'CSV', 'NONE', 'SMART_ENROLL'];
const API_TEST_TYPES = ['email', 'phone'];

/**
 * Step stored when the user leaves an incomplete wizard.
 * `lastStep` stays ahead of zero so legacy projects (both fields at 0) are unchanged.
 */
export const progressForDraftLeave = (stepIndex: number, existingLastStep: number): WizardProgress => ({
    currentStep: stepIndex,
    lastStep: Math.max(existingLastStep || 0, stepIndex + 1),
});

/**
 * Progress written by a valid-step save.
 * Leaving the last step marks the wizard finished (`currentStep` past the last index).
 */
export const progressForValidNavigation = (
    stepIndex: number,
    nextStepIndex: number | null,
    existingLastStep: number,
    stepCount: number
): WizardProgress => {
    const existing = existingLastStep || 0;
    const leavingWizard = nextStepIndex === null || Number.isNaN(nextStepIndex);
    if (leavingWizard && stepIndex >= stepCount - 1) {
        return { currentStep: stepCount, lastStep: Math.max(existing, stepCount) };
    }
    if (!leavingWizard) {
        return {
            currentStep: nextStepIndex,
            lastStep: Math.max(existing, stepIndex + 1, nextStepIndex),
        };
    }
    return {
        currentStep: stepIndex,
        lastStep: Math.max(existing, stepIndex + 1),
    };
};

/** True when a saved wizard should reopen on `currentStep` instead of the detail page. */
export const isIncompleteSmartAccessWizard = (
    project: { currentStep?: number; lastStep?: number } | null | undefined,
    stepCount = 4
): boolean => {
    const lastStep = Number(project?.lastStep ?? 0);
    const currentStep = Number(project?.currentStep ?? 0);
    return lastStep > 0 && currentStep < stepCount;
};

/** Step index to reopen, clamped to the wizard. */
export const resumeStepIndex = (
    project: { currentStep?: number } | null | undefined,
    stepCount = 4
): number => {
    const step = Number(project?.currentStep ?? 0);
    if (!Number.isFinite(step) || step < 0) return 0;
    return Math.min(Math.floor(step), Math.max(stepCount - 1, 0));
};

/** Blank names cannot be stored. The suffix keeps the client+name index unique. */
export const draftProjectName = (name: unknown, fallbackLabel: string): string => {
    const trimmed = `${name ?? ''}`.trim();
    if (trimmed) return trimmed.slice(0, 60);
    return `${fallbackLabel} ${Date.now().toString(36)}`.slice(0, 60);
};

const isHttpUrl = (value: unknown): boolean => {
    const raw = `${value ?? ''}`.trim();
    if (!raw) return false;
    try {
        const url = new URL(raw);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
};

const asRecord = (value: unknown): Record<string, unknown> =>
    value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};

/** Login settings that pass the v3 flow schema, including an untouched step. */
export const safeLoginSettings = (raw: unknown): Record<string, unknown> => {
    const src = asRecord(raw);
    const emailGateway = EMAIL_GATEWAYS.includes(`${src['emailGateway']}`) ? src['emailGateway'] : 'none';
    const phoneGateway = PHONE_GATEWAYS.includes(`${src['phoneGateway']}`) ? src['phoneGateway'] : 'none';
    const searchMode = SEARCH_MODES.includes(`${src['searchMode']}`) ? src['searchMode'] : 'FAST';
    const settings: Record<string, unknown> = {
        allowPasskeys: !!src['allowPasskeys'],
        email: !!src['email'],
        emailGateway,
        faceLiveness: !!src['faceLiveness'],
        phone: !!src['phone'],
        phoneGateway,
        searchMode,
        showFaceLivenessRecommendation: !!src['showFaceLivenessRecommendation'],
    };
    const liveness = Number(src['livenessMinScore']);
    if (liveness >= 0.51 && liveness <= 0.9) settings['livenessMinScore'] = liveness;
    const search = Number(src['searchMinScore']);
    if (search >= 0.7 && search <= 0.95) settings['searchMinScore'] = search;
    return settings;
};

/**
 * Security block, or null when the API source is incomplete so the save can still succeed.
 */
export const safeSecurity = (raw: unknown): Record<string, unknown> | null => {
    const src = asRecord(raw);
    if (!Object.keys(src).length) return null;
    const sourceRaw = src['source'];
    const source =
        sourceRaw === null || sourceRaw === undefined || sourceRaw === '' ? null : `${sourceRaw}`;
    if (source !== null && !SECURITY_SOURCES.includes(source)) return null;

    const testType = API_TEST_TYPES.includes(`${src['apiTestType']}`) ? src['apiTestType'] : 'email';
    if (source === 'API') {
        if (!isHttpUrl(src['apiUrl'])) return null;
        if (!`${src['apiTestValue'] ?? ''}`.trim()) return null;
    }

    const apiUrl = `${src['apiUrl'] ?? ''}`.trim();
    return {
        apiTestType: testType,
        apiTestValue: `${src['apiTestValue'] ?? ''}`,
        apiUrl: source === 'API' || !apiUrl || isHttpUrl(apiUrl) ? apiUrl : '',
        source,
        strategy: `${src['strategy'] ?? ''}` === 'none' ? 'none' : 'whitelist',
    };
};

/** Integrations block, or null when the redirect URL is present but not a URL. */
export const safeIntegrations = (raw: unknown): Record<string, unknown> | null => {
    const src = asRecord(raw);
    if (!Object.keys(src).length) return null;
    const redirect = `${src['redirectUrl'] ?? ''}`.trim();
    if (redirect && !isHttpUrl(redirect)) return null;
    const webhook = src['webhook'];
    const webhookId =
        webhook && typeof webhook === 'object'
            ? ((webhook as { _id?: string })._id ?? null)
            : (webhook ?? null);
    return { redirectUrl: redirect, webhook: webhookId || null };
};

const draftLoginFlow = (rawFlow: unknown): Record<string, unknown> => {
    const pf = asRecord(rawFlow);
    const flow: Record<string, unknown> = {
        status: 'draft',
        type: 'login',
        version: Number(pf['version']) || 3,
        loginSettings: safeLoginSettings(pf['loginSettings']),
    };
    const security = safeSecurity(pf['security']);
    if (security) flow['security'] = security;
    const integrations = safeIntegrations(pf['integrations']);
    if (integrations) flow['integrations'] = integrations;
    return flow;
};

/**
 * Full snapshot that can be stored before the current step is valid.
 * Project and login flow stay `draft`.
 */
export const buildSmartAccessDraftPayload = (
    raw: Record<string, unknown>,
    progress: WizardProgress,
    fallbackName: string
): Record<string, unknown> => ({
    allowedCountries: Array.isArray(raw['allowedCountries']) ? raw['allowedCountries'] : [],
    branding: asRecord(raw['branding']),
    contactEmail: `${raw['contactEmail'] ?? ''}`,
    currentStep: progress.currentStep,
    dataProtection: asRecord(raw['dataProtection']),
    defaultLanguage: `${raw['defaultLanguage'] || 'en'}`,
    lastStep: progress.lastStep,
    name: draftProjectName(raw['name'], fallbackName),
    privacyUrl: `${raw['privacyUrl'] ?? ''}`,
    projectFlow: draftLoginFlow(raw['projectFlow']),
    projectFlowType: 'login',
    status: 'draft',
    target: 'personal',
    termsAndConditionsUrl: `${raw['termsAndConditionsUrl'] ?? ''}`,
    version: 3,
});
