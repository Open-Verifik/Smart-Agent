import { EnrollProject, EnrollProjectFlow } from './smart-enroll-projects.types';

export type EnrollmentClient = 'legacy' | 'v2';

export type EnrollmentBlocker =
    | 'business'
    | 'extraFields'
    | 'zeroKnowledge'
    | 'taxInformation'
    | 'representatives'
    | 'signature';

interface FlowShape {
    target?: string;
    signUpForm?: {
        additionalFields?: unknown[];
        allowAdditionalFields?: boolean;
    };
    documents?: {
        criminalHistoryVerification?: boolean;
        informationVerification?: boolean;
        screening?: boolean;
        documentTypes?: Array<{ configurations?: Array<{ active?: boolean; documentCategory?: string }> }>;
    };
    business?: {
        criminalHistoryVerification?: boolean;
        informationVerification?: boolean;
        screening?: boolean;
        documentTypes?: Array<{ configurations?: Array<{ active?: boolean; documentCategory?: string }> }>;
    };
    liveness?: { kycType?: string };
    representatives?: unknown;
    steps?: { legalRepresentative?: string; form?: string };
    onboardingSettings?: { enrollmentClient?: string; verifyStyle?: string; requiresSignature?: boolean };
    verifyStyle?: string;
}

const VERIFY_STYLE_IDS = ['a', 'b', 'c', 'd', 'e', 'f'];

export const VERIFY_STYLE_LABELS: Record<string, { en: string; es: string }> = {
    a: { en: 'Forest', es: 'Bosque' },
    b: { en: 'Editorial', es: 'Editorial' },
    c: { en: 'Paper', es: 'Papel' },
    d: { en: 'Vault', es: 'Bóveda' },
    e: { en: 'Porcelain', es: 'Porcelana' },
    f: { en: 'Notebook', es: 'Cuaderno' },
};

/** Keeps a saved look. An empty or unknown value stays empty so nothing is written back. */
export const savedVerifyStyle = (value: unknown): string => {
    const id = String(value || '').trim().toLowerCase();

    return VERIFY_STYLE_IDS.includes(id) ? id : '';
};

export const readVerifyStyle = (
    flow: { onboardingSettings?: unknown; verifyStyle?: string } | null | undefined
): string => {
    const settings = flow?.onboardingSettings as
        | { verifyStyle?: unknown }
        | undefined;

    return savedVerifyStyle(settings?.verifyStyle || (flow as any)?.verifyStyle);
};

export const readEnrollmentClient = (
    flow: { onboardingSettings?: unknown; verifyStyle?: string } | null | undefined
): EnrollmentClient => {
    const settings = flow?.onboardingSettings as
        | { enrollmentClient?: string; verifyStyle?: string }
        | undefined;

    const style = savedVerifyStyle(settings?.verifyStyle || (flow as any)?.verifyStyle);

    if (settings?.enrollmentClient === 'v2' || Boolean(style)) return 'v2';

    return 'legacy';
};

export const enrollmentSegment = (client: EnrollmentClient): 'verify' | 'sign-up' => (client === 'v2' ? 'verify' : 'sign-up');

export const liveEnrollmentPath = (project: EnrollProject, flow: EnrollProjectFlow | null): string => {
    return `/${enrollmentSegment(readEnrollmentClient(flow))}/${project._id}`;
};

export const enrollmentBlockers = (flow: FlowShape | null | undefined): EnrollmentBlocker[] => {
    if (!flow) return [];

    const blockers: EnrollmentBlocker[] = [];
    const extra = flow.signUpForm?.additionalFields;

    if (flow.target === 'business') blockers.push('business');
    if (flow.signUpForm?.allowAdditionalFields || (Array.isArray(extra) && extra.length > 0)) blockers.push('extraFields');
    if (flow.liveness?.kycType === 'zero_knowledge') blockers.push('zeroKnowledge');
    if (hasCategory(flow.documents?.documentTypes, 'tax_document') || hasCategory(flow.business?.documentTypes, 'tax_document')) {
        blockers.push('taxInformation');
    }
    if (flow.steps?.legalRepresentative && flow.steps.legalRepresentative !== 'skip') blockers.push('representatives');
    if (flow.steps?.form && flow.steps.form !== 'skip') blockers.push('signature');
    if (flow.onboardingSettings?.requiresSignature) blockers.push('signature');

    return blockers;
};

const hasCategory = (
    types: Array<{ configurations?: Array<{ active?: boolean; documentCategory?: string }> }> | undefined,
    category: string
): boolean => {
    return (types || []).some((type) =>
        (type.configurations || []).some((config) => config.active !== false && config.documentCategory === category)
    );
};
