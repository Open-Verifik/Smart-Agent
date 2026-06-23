import type { EnrollProject, EnrollProjectBranding, EnrollProjectMember } from '../../smart-enroll/projects/smart-enroll-projects.types';

export type SmartAccessLoginSettings = {
    email?: boolean;
    emailGateway?: string;
    faceLiveness?: boolean;
    phone?: boolean;
    phoneGateway?: string;
    livenessMinScore?: number;
    searchMode?: string;
    searchMinScore?: number;
    showFaceLivenessRecommendation?: boolean;
    allowPasskeys?: boolean;
};

export type SmartAccessSecurity = {
    apiTestType?: string;
    apiTestValue?: string;
    apiUrl?: string;
    source?: 'API' | 'CSV' | 'NONE' | 'SMART_ENROLL' | null;
    strategy?: string;
};

export type SmartAccessFlowIntegrations = {
    redirectUrl?: string;
    webhook?: string | null;
};

export interface AccessProjectFlow {
    _id: string;
    name?: string;
    status?: string;
    type?: string;
    version?: number;
    loginSettings?: SmartAccessLoginSettings;
    integrations?: SmartAccessFlowIntegrations;
    security?: SmartAccessSecurity;
    emailTemplates?: Record<string, Record<string, unknown>>;
    emailTemplateDesign?: 'standard' | 'custom' | 'tcc';
    isTccOtpEmailClient?: boolean;
}

/** Project list row with at least one `login` v3 flow. */
export interface AccessProject extends Omit<EnrollProject, 'projectFlows'> {
    projectFlows?: AccessProjectFlow[];
}

export interface AppLoginRow {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    status?: string;
    name?: string;
    email?: string;
    phone?: string;
}

export interface AppLoginListFilters {
    search?: string;
    status?: string;
    sort?: string;
    createdFrom?: string;
    createdTo?: string;
}
