import type { EnrollProject, EnrollProjectFlow } from './smart-enroll-projects.types';

/**
 * True when the project has at least one SmartEnroll (`onboarding`) flow.
 * HumanAuthn and Smart Access projects share the projects collection and must stay out of this list.
 */
export const projectHasOnboardingFlow = (project: EnrollProject): boolean =>
    !!(project.projectFlows ?? []).some((flow: EnrollProjectFlow) => flow.type === 'onboarding');
