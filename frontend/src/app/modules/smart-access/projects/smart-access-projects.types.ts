import type { EnrollProject, EnrollProjectBranding, EnrollProjectMember } from '../../smart-enroll/projects/smart-enroll-projects.types';

export type AccessSource =
    | 'API'
    | 'CSV'
    | 'NONE'
    | 'SMART_ENROLL'
    | 'HUMAN_AUTHN'
    | 'VERIFIK_PROJECTS'
    | null;

export type SmartAccessLinkedProject = {
    project: string;
    flowType?: 'SMART_ENROLL' | 'HUMAN_AUTHN' | 'onboarding' | 'humanAuthn';
    target?: 'VERIFIK_PROJECT' | 'personal' | 'business';
    allowSignUpRedirect?: boolean;
};

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
    requireBiometricStepUp?: boolean;
    allowDirectHumanIdInput?: boolean;
};

export type SmartAccessSecurity = {
    apiTestType?: string;
    apiTestValue?: string;
    apiUrl?: string;
    source?: AccessSource;
    strategy?: string;
    linkedProjects?: SmartAccessLinkedProject[];
    primarySignUpProject?: string | null;
};

export type SmartAccessFlowIntegrations = {
    redirectUrl?: string;
    webhook?: string | null;
};

export interface LinkedProjectMeta {
    _id: string;
    name?: string;
    status?: string;
    flowType?: 'onboarding' | 'humanAuthn';
    target?: 'personal' | 'business';
    allowSignUpRedirect?: boolean;
    isPrimarySignUp?: boolean;
    hasFaceCollection?: boolean;
    humanAuthn?: {
        mode?: string;
        outputFormat?: string;
        storageProvider?: string;
    };
}

export interface AccessProjectFlow {
    _id: string;
    name?: string;
    status?: string;
    type?: string;
    version?: number;
    loginSettings?: SmartAccessLoginSettings;
    integrations?: SmartAccessFlowIntegrations;
    security?: SmartAccessSecurity;
    linkedProjectsMeta?: LinkedProjectMeta[];
    emailTemplates?: Record<string, Record<string, unknown>>;
    emailTemplateDesign?: 'standard' | 'custom' | 'tcc';
    isTccOtpEmailClient?: boolean;
}

/** Project list row with at least one `login` v3 flow. */
export interface AccessProject extends Omit<EnrollProject, 'projectFlows'> {
    projectFlows?: AccessProjectFlow[];
    status?: string;
    /** Wizard step to reopen. `4` means the setup wizard was finished. */
    currentStep?: number;
    /** Highest step reached. `0` means this project predates draft resume. */
    lastStep?: number;
}

export interface AppLoginRow {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    status?: string;
    name?: string;
    email?: string;
    phone?: string;
    type?: string;
    accessMode?: string;
    sourceType?: 'smartEnroll' | 'smartBusiness' | 'humanAuthn' | 'csvWhitelist' | 'apiWhitelist' | 'open' | 'legacy' | string;
    sourceProject?: string | { _id: string; name?: string; type?: string; target?: string };
    sourceProjectFlow?: string | { _id: string };
    appRegistration?: string | { _id: string; name?: string; status?: string };
    businessRegistration?: string | { _id: string; companyName?: string; status?: string };
}

export interface AppLoginListFilters {
    search?: string;
    status?: string;
    sort?: string;
    createdFrom?: string;
    createdTo?: string;
}
