/**
 * Smart Enroll project model.
 * Ported from verifik-client-panel `smart-enroll-project.model.ts`,
 * with the prompt-template dependency relaxed to a string id (or any populated object)
 * so we can wire the local PromptTemplateService incrementally.
 */

export const isProject = (project: unknown): project is Project => {
    return !!project && typeof project === 'object' && '_id' in (project as Record<string, unknown>);
};

export type ProjectTarget = 'personal' | 'business' | '';

export interface DataProtection {
    address?: string;
    address2?: string;
    city?: string;
    country?: string;
    email?: string;
    name?: string;
    postalCode?: string;
}

export interface Branding {
    backgroundColor: string;
    buttonColor?: string;
    buttonTextColor?: string;
    image?: string | null;
    imageBackgroundColor?: string;
    logo?: string | null;
    textColor?: string;
    titleColor?: string;
}

export interface ProjectDocumentTemplate {
    promptTemplate: string | { _id: string; name?: string };
    required?: 'mandatory' | 'optional';
}

export interface PersonalDocumentConfiguration {
    active: boolean;
    documentCategory: 'government_id' | 'passport' | 'license';
    documentTemplates: ProjectDocumentTemplate[];
}

export interface PersonalDocumentType {
    configurations: PersonalDocumentConfiguration[];
    country: string;
}

export interface PersonalDocuments {
    attemptLimit: number;
    criminalHistoryVerification: boolean;
    criminalHistoryVerificationEndpoints?: string[];
    documentTypes: PersonalDocumentType[];
    informationVerification: boolean;
    screening: boolean;
    verificationMethods: string[];
}

export interface PersonalIntegrations {
    apiTestType?: 'email' | 'phone';
    apiTestValue?: string;
    apiUrl?: string;
    redirectUrl?: string;
    source?: 'API' | 'CSV' | 'NONE';
    strategy?: 'blacklist' | 'none';
    webhook?: string | null;
}

export interface PersonalLiveness {
    attemptLimit: number;
    minScore?: number;
    compareMinScore?: number;
    searchMinScore?: number;
    searchMode?: 'FAST' | 'ACCURATE';
    kycType?: 'traditional' | 'zero_knowledge';
}

export interface PersonalSignUpForm {
    additionalFields: string[];
    allowAdditionalFields: boolean;
    countryCode?: string;
    email: boolean;
    emailGateway: 'mailgun' | 'none';
    fullName: boolean;
    fullNameStyle: 'together' | 'separate';
    phone: boolean;
    phoneGateway: 'sms' | 'whatsapp' | 'both' | 'none';
    showPrivacyNotice: boolean;
    showTermsAndConditions: boolean;
}

export interface PersonalSteps {
    document: 'mandatory' | 'optional' | 'skip';
    liveness: 'mandatory' | 'optional' | 'skip';
}

export interface BusinessDocumentConfiguration {
    active: boolean;
    documentCategory: 'business_document' | 'tax_document' | 'proof_of_address' | 'bank_document';
    documentTemplates: ProjectDocumentTemplate[];
}

export interface BusinessDocumentType {
    configurations: BusinessDocumentConfiguration[];
    country: string;
}

export interface BusinessSettings {
    attemptLimit: number;
    criminalHistoryVerification: boolean;
    criminalHistoryVerificationEndpoints?: string[];
    documentTypes: BusinessDocumentType[];
    informationVerification: boolean;
    screening: boolean;
}

export interface BusinessSignUpForm {
    additionalFields: string[];
    address?: boolean;
    allowAdditionalFields: boolean;
    businessBasicInfo?: boolean;
    businessBasicInfoStyle?: 'name_number' | 'separate';
    countryCode?: string;
    email: boolean;
    emailGateway: 'mailgun' | 'none';
    fullName: boolean;
    fullNameStyle: 'together' | 'separate';
    phone: boolean;
    phoneGateway: 'sms' | 'whatsapp' | 'both' | 'none';
    showPrivacyNotice: boolean;
    showTermsAndConditions: boolean;
}

export interface BusinessIntegrations {
    apiTestType?: 'email' | 'phone';
    apiTestValue?: string;
    apiUrl?: string;
    redirectUrl?: string;
    source?: 'API' | 'CSV' | 'NONE';
    strategy?: 'blacklist' | 'none';
    webhook?: string | null;
}

export interface BusinessLiveness {
    attemptLimit: number;
    minScore?: number;
    compareMinScore?: number;
    searchMinScore?: number;
    searchMode?: 'FAST' | 'ACCURATE';
    kycType?: 'traditional' | 'zero_knowledge';
}

export interface BusinessRepresentatives {
    information: BusinessSignUpForm;
    documents: PersonalDocuments;
    liveness: BusinessLiveness;
    minRepresentatives?: number;
    maxRepresentatives?: number;
    notificationType?: 'whatsapp' | 'sms' | 'email';
}

export interface BusinessSteps {
    businessVerification: boolean;
    legalRepresentative: 'mandatory' | 'optional' | 'skip';
    liveness: 'mandatory' | 'optional' | 'skip';
}

export interface BaseProjectFlow {
    _id?: string;
    client?: string;
    createdAt?: string;
    project?: string;
    status: 'draft' | 'active' | 'paused';
    type: 'onboarding';
    updatedAt?: string;
    version: number;
}

export interface PersonalProjectFlow extends BaseProjectFlow {
    documents: PersonalDocuments;
    integrations: PersonalIntegrations;
    liveness: PersonalLiveness;
    signUpForm: PersonalSignUpForm;
    steps: PersonalSteps;
    target: 'personal';
}

export interface BusinessProjectFlow extends BaseProjectFlow {
    business: BusinessSettings;
    integrations: BusinessIntegrations;
    liveness: BusinessLiveness;
    representatives: BusinessRepresentatives;
    signUpForm: BusinessSignUpForm;
    steps: BusinessSteps;
    target: 'business';
}

export interface DefaultProjectFlow {
    target: '';
}

export type SmartEnrollProjectFlow = PersonalProjectFlow | BusinessProjectFlow;

export interface Project<T extends SmartEnrollProjectFlow = SmartEnrollProjectFlow> {
    _id?: string;
    allowedCountries?: string[];
    assignedCollection?: string;
    branding: Branding;
    client: string;
    collectionCode?: string;
    contactEmail?: string;
    createdAt?: string;
    currentStep: number;
    dataProtection: DataProtection;
    demoMode?: boolean;
    identifier?: string;
    lastStep: number;
    name: string;
    privacyUrl?: string;
    projectFlows?: T[];
    projectMembers?: string[];
    status: 'draft' | 'active' | 'paused';
    target: ProjectTarget;
    termsAndConditionsUrl?: string;
    updatedAt?: string;
    version?: number;
}

export interface PaginatedResponse<T> {
    data: T[] | T;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
