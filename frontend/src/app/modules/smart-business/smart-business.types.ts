import type { StoredRetention } from 'app/core/data-retention/retention.util';

export type VerifyStyleId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export interface BusinessBranding {
    backgroundColor: string;
    buttonColor: string;
    buttonTextColor: string;
    image?: string | null;
    imageBackgroundColor?: string;
    logo?: string | null;
    textColor: string;
    titleColor?: string;
}

export interface BusinessDataProtection {
    address: string;
    address2?: string;
    city: string;
    country: string;
    email: string;
    name: string;
    postalCode: string;
}

export interface BusinessOnboardingSettings {
    enrollmentClient?: 'v2' | 'legacy';
    verifyStyle?: VerifyStyleId | string;
    flowOrder?: 'consent_first' | 'contact_first' | '';
    requiresSignature?: boolean;
}

export interface BusinessIntakeSettings {
    countryCode?: string;
    collectCommercialName?: boolean;
    collectAddress?: boolean;
    collectPhone?: boolean;
    phoneGateway?: 'whatsapp' | 'sms' | 'both' | 'none';
    collectEmail?: boolean;
    emailGateway?: 'mailgun' | 'none';
    allowedEntityTypes?: string[];
}

export interface CorporateDocumentConfig {
    category: 'business_document' | 'tax_document' | 'bank_document' | 'articles_of_incorporation';
    label: string;
    required: boolean;
    maxDaysOld?: number;
    ocrValidation: boolean;
}

export interface CorporateDocsSettings {
    attemptLimit: number;
    screening: boolean;
    officialRegistryChecks: {
        dian: boolean;
        rues: boolean;
        sat: boolean;
        sanctionsList: boolean;
    };
    requiredDocuments: CorporateDocumentConfig[];
}

export interface RepresentativesPolicySettings {
    minRepresentatives: number;
    maxRepresentatives: number;
    uboOwnershipThreshold: number; // e.g. 25
    requireLiveness: boolean;
    requireDocumentScan: boolean;
    notificationChannel: 'whatsapp' | 'email' | 'both';
    livenessMinScore: number;
    compareMinScore: number;
}

export interface BusinessIntegrationsSettings {
    redirectUrl: string;
    webhook?: string | null;
    apiUrl?: string;
    source?: 'NONE' | 'API' | 'DATABASE';
    strategy?: 'none' | 'blacklist' | 'whitelist';
}

export interface CorporateDocumentTemplateEntry {
    promptTemplate: string | { _id: string; name?: string; [key: string]: unknown } | null;
    required?: 'mandatory' | 'optional';
}

export interface CorporateDocumentCategoryConfig {
    active: boolean;
    documentCategory: 'business_document' | 'tax_document' | 'bank_document' | 'proof_of_address';
    documentTemplates: CorporateDocumentTemplateEntry[];
}

export interface CorporateCountryDocumentTypes {
    country: string;
    configurations: CorporateDocumentCategoryConfig[];
}

export interface CorporateBusinessSettings {
    attemptLimit: number;
    criminalHistoryVerification: boolean;
    criminalHistoryVerificationEndpoints?: string[];
    informationVerification: boolean;
    screening: boolean;
    documentTypes: CorporateCountryDocumentTypes[];
}

export interface BusinessProjectFlow {
    _id?: string;
    project?: string;
    client?: string;
    target: 'business';
    type: 'onboarding';
    status: 'draft' | 'active' | 'archived';
    version: number;
    business?: CorporateBusinessSettings;
    onboardingSettings?: BusinessOnboardingSettings;
    companyIntake?: BusinessIntakeSettings;
    corporateDocs?: CorporateDocsSettings;
    representativesPolicy?: RepresentativesPolicySettings;
    integrations?: BusinessIntegrationsSettings;
    createdAt?: string;
    updatedAt?: string;
}

export interface BusinessProject {
    _id: string;
    name: string;
    target: 'business';
    status: 'draft' | 'active' | 'archived';
    allowedCountries: string[];
    defaultLanguage: string;
    contactEmail: string;
    privacyUrl: string;
    termsAndConditionsUrl: string;
    dataProtection: BusinessDataProtection;
    dataRetention?: StoredRetention | null;
    branding: BusinessBranding;
    currentStep?: number;
    lastStep?: number;
    projectFlows?: BusinessProjectFlow[];
    createdAt?: string;
    updatedAt?: string;
}

export interface CorporateOcrFieldEntry {
    page?: number;
    mapKey: string;
    name: string;
    type: string;
    value?: string;
}

export interface CorporateOcrData {
    legalName?: string;
    taxId?: string;
    documentNumber?: string;
    documentType?: string;
    documentTypeName?: string;
    promptTemplateId?: string;
    checkDigit?: string;
    registrationNumber?: string;
    issuanceDate?: string;
    extractedAt?: string;
    pagesProcessed?: number;
    activityCode?: string;
    legalRepresentatives?: string[];
    confidenceScore?: number;
    fields?: CorporateOcrFieldEntry[];
    extraction?: Record<string, string>;
}

export interface CorporateDocumentRecord {
    _id: string;
    category:
        | 'business_document'
        | 'tax_document'
        | 'bank_document'
        | 'proof_of_address'
        | 'articles_of_incorporation';
    documentType?: string;
    documentTypeName?: string;
    filename: string;
    fileUrl: string;
    mimeType?: string;
    status: 'VERIFIED' | 'PENDING' | 'REJECTED';
    ocrData?: CorporateOcrData;
    uploadedAt: string;
}

export interface MemberDocumentClassification {
    requestedDocumentType?: string;
    detectedDocumentType?: string;
    detectedDocumentName?: string;
    isMatch?: boolean;
    confidence?: number;
    reason?: string;
}

export interface MemberOcrExtraction {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    documentNumber?: string;
    documentType?: string;
    dateOfBirth?: string;
    placeOfBirth?: string;
    dateOfExpedition?: string;
    expirationDate?: string;
    sex?: string;
    gender?: string;
    bloodType?: string;
    height?: string;
    nationality?: string;
    documentClassification?: MemberDocumentClassification;
    [key: string]: unknown;
}

export interface MemberDocumentValidationRecord {
    _id: string;
    status: string;
    documentType: string;
    documentNumber: string;
    country?: string;
    documentCategory?: string;
    url?: string | null;
    backUrl?: string | null;
    OCRExtraction?: MemberOcrExtraction;
    namesMatch?: boolean | null;
    fullNameMatchPercentage?: number | null;
    firstNameMatchPercentage?: number | null;
    lastNameMatchPercentage?: number | null;
    imageValidated?: boolean | null;
    scoreValidated?: boolean | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

export interface BusinessMemberKYCRecord {
    _id: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    role: string;
    isUBO: boolean;
    ownershipPercentage?: number;
    documentType: string;
    documentNumber: string;
    email: string;
    phone: string;
    kycStatus:
        | 'COMPLETED'
        | 'IN_PROGRESS'
        | 'NEEDS_MANUAL_VERIFICATION'
        | 'PENDING'
        | 'INVITED'
        | 'FAILED';
    kycAppRegistrationId?: string;
    currentStep?: string;
    kycCurrentStep?: string;
    documentUrl?: string;
    documentFrontUrl?: string;
    documentBackUrl?: string;
    documentFaceUrl?: string;
    selfieUrl?: string;
    livenessScore?: number;
    faceCompareScore?: number;
    biometricStatus?: string | null;
    documentValidation?: MemberDocumentValidationRecord | null;
    verifiedAt?: string;
    inviteSentAt?: string;
    inviteUrl?: string;
}

export interface OfficialRegistryScreeningResult {
    dianStatus?: 'ACTIVE' | 'INACTIVE' | 'NOT_FOUND' | null;
    ruesStatus?: 'ACTIVE' | 'CANCELLED' | 'NOT_FOUND' | null;
    satStatus?: 'ACTIVE' | 'INACTIVE' | 'NOT_FOUND' | null;
    sanctionsScreening?: {
        ofacMatches: number;
        pepMatches: number;
        interpolMatches: number;
        status: 'CLEAN' | 'FLAGGED';
    };
    checkedAt: string;
}

export interface BusinessRegistrationDossier {
    _id: string;
    projectId: string;
    status: 'COMPLETED' | 'IN_PROGRESS' | 'NEEDS_MANUAL_REVIEW' | 'REJECTED';
    company: {
        legalName: string;
        commercialName?: string;
        taxId: string;
        checkDigit?: string;
        country: string;
        entityType: string;
        address: string;
        city?: string;
        email: string;
        phone: string;
        website?: string;
        incorporationDate?: string;
    };
    documents: CorporateDocumentRecord[];
    representatives: BusinessMemberKYCRecord[];
    officialRegistryChecks: OfficialRegistryScreeningResult;
    riskAssessment?: {
        score: 'LOW' | 'MEDIUM' | 'HIGH';
        reasons?: string[];
    };
    notes?: string;
    createdAt: string;
    updatedAt: string;
}
