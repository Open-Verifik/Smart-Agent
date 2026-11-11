import type { EnrollProject, EnrollProjectFlow } from './smart-enroll-projects.types';

/**
 * True when the project is a personal SmartEnroll (`onboarding`) project and NOT a SmartBusiness (`business`) KYB project.
 * HumanAuthn, Smart Access, and SmartBusiness KYB projects share the projects collection and must stay out of this list.
 */
export const projectHasOnboardingFlow = (project: EnrollProject): boolean => {
    if (project.target === 'business') {
        return false;
    }
    const flows = project.projectFlows ?? [];
    if (flows.some((flow: EnrollProjectFlow) => flow.target === 'business')) {
        return false;
    }
    return flows.some((flow: EnrollProjectFlow) => flow.type === 'onboarding');
};
