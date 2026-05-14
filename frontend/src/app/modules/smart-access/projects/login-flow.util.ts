import type { AccessProject, AccessProjectFlow } from './smart-access-projects.types';

/**
 * Resolves the active Smart Access (login-type) flow, matching client-panel ProjectV3 primaryFlowType `login`.
 */
export const smartAccessLoginFlow = (project: AccessProject | null | undefined): AccessProjectFlow | null => {
    const flows = project?.projectFlows;
    if (!flows?.length) return null;
    const loginFlows = flows.filter((f) => f.type === 'login');
    if (!loginFlows.length) return null;
    const active = loginFlows.find((f) => f.status && f.status !== 'draft');
    return active ?? loginFlows[0];
};

export const projectHasLoginFlow = (project: AccessProject): boolean =>
    !!(project.projectFlows ?? []).some((f) => f.type === 'login');
