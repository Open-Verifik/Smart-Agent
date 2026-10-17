import { EnrollProject, EnrollProjectFlow } from './smart-enroll-projects.types';

export type EnrollmentClient = 'legacy' | 'v2';

export type EnrollmentBlocker =
    | 'business'
    | 'extraFields'
    | 'backgroundCheck'
    | 'nameCheck'
    | 'screening'
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
    onboardingSettings?: { enrollmentClient?: string; requiresSignature?: boolean };
}

export const readEnrollmentClient = (flow: { onboardingSettings?: unknown } | null | undefined): EnrollmentClient => {
    const settings = flow?.onboardingSettings as { enrollmentClient?: string } | undefined;

    return settings?.enrollmentClient === 'v2' ? 'v2' : 'legacy';
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
    if (flow.documents?.criminalHistoryVerification || flow.business?.criminalHistoryVerification) blockers.push('backgroundCheck');
    if (flow.documents?.informationVerification || flow.business?.informationVerification) blockers.push('nameCheck');
    if (flow.documents?.screening || flow.business?.screening) blockers.push('screening');
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
