export type SmartLinkMode = 'personal' | 'business' | 'humanId' | 'access';
export type SmartLinkDefaultMode = SmartLinkMode | 'prompt';
export type SmartLinkCompletionMode = 'redirect' | 'receipt' | 'postMessage';
export type SmartLinkVerifyStyle = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export interface SmartLinkLinkedProjects {
    smartEnrollProject: string | null;
    smartBusinessProject: string | null;
    humanAuthnProject: string | null;
    smartAccessProject: string | null;
}

export interface SmartLinkStepUpPolicy {
    enabled: boolean;
    reverifyFaceAfterDays: number | null;
    requireFreshDocOnExpiry: boolean;
    kybRecertifyAfterDays: number;
}

export interface SmartLinkLinkedProjectMeta {
    _id: string;
    name: string;
    status?: string;
    target?: string;
    flowType?: string;
    slot?: keyof SmartLinkLinkedProjects;
}

export interface SmartLinkProjectFlow {
    _id?: string;
    client?: string;
    project?: string;
    type: 'smartlink';
    target?: 'personal' | 'business';
    status: 'draft' | 'active' | 'paused';
    version: number;
    slug?: string;
    routing: {
        supportedModes: SmartLinkMode[];
        defaultMode: SmartLinkDefaultMode;
        linkedProjects: SmartLinkLinkedProjects;
        autoDetectExisting: boolean;
        allowPasskeys: boolean;
        stepUpPolicy: SmartLinkStepUpPolicy;
    };
    completion: {
        mode: SmartLinkCompletionMode;
        redirectUrl: string;
        allowedPostMessageOrigins: string[];
        receiptMessage: string;
        allowPdfDownload: boolean;
    };
    security: {
        allowedCountries: string[];
        defaultTokenTtlMinutes: number;
        defaultMaxUses: number;
        requireSignedSession: boolean;
    };
    dispatch?: {
        channels: ('whatsapp' | 'sms' | 'email')[];
        customSenderName?: string;
    };
    integrations?: {
        redirectUrl?: string;
        webhook?: string | null;
    };
    onboardingSettings: {
        enrollmentClient: 'v2' | 'legacy';
        verifyStyle: SmartLinkVerifyStyle;
        flowOrder: 'contact_first' | 'consent_first';
    };
    linkedProjectsMeta?: SmartLinkLinkedProjectMeta[];
}

export interface SmartLinkBranding {
    logo?: string;
    image?: string;
    buttonColor: string;
    buttonTextColor: string;
    titleColor: string;
    textColor: string;
    backgroundColor: string;
    imageBackgroundColor?: string;
}

export interface SmartLinkProject {
    _id?: string;
    name: string;
    client?: string | { _id: string; name?: string };
    target?: 'personal' | 'business';
    status?: string;
    version?: number;
    contactEmail: string;
    defaultLanguage: string;
    privacyUrl: string;
    termsAndConditionsUrl: string;
    allowedCountries: string[];
    dataProtection: {
        name: string;
        email: string;
        address: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
    };
    branding: SmartLinkBranding;
    projectFlows?: SmartLinkProjectFlow[];
    createdAt?: string;
    updatedAt?: string;
}

export interface EngineProjectOption {
    _id: string;
    name: string;
    status?: string;
    target?: string;
    category: 'smartEnroll' | 'smartBusiness' | 'humanAuthn' | 'smartAccess';
}

export interface SmartLinkSessionRecord {
    _id: string;
    shortCode: string;
    state: 'CREATED' | 'OPENED' | 'ROUTED' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'EXPIRED' | 'REVOKED';
    requestedMode: string;
    resolvedMode?: string;
    completionMode?: SmartLinkCompletionMode;
    externalRefId?: string;
    createdByChannel?: string;
    useCount?: number;
    maxUses?: number;
    expiresAt: string;
    openedAt?: string;
    completedAt?: string;
    createdAt: string;
    outcome?: {
        outcomeType?: string;
        confirmationCode?: string;
    };
}

export interface MintedSmartLinkSession {
    sessionId: string;
    shortCode: string;
    url: string;
    qrDataUrl: string;
    expiresAt: string;
    state: string;
    requestedMode: string;
    completionMode: SmartLinkCompletionMode;
}

export interface DispatchRecipientInput {
    channel: 'email' | 'sms' | 'whatsapp';
    email?: string;
    phone?: string;
    countryCode?: string;
    name?: string;
    externalRefId?: string;
    requestedMode?: SmartLinkDefaultMode;
}

export interface DispatchBatchResult {
    total: number;
    sent: number;
    failed: number;
    results: Array<{
        dispatchId?: string;
        sessionId?: string;
        shortCode?: string;
        url?: string;
        channel: string;
        recipient: string;
        status: 'sent' | 'failed';
        errorMessage?: string;
    }>;
}

export interface SmartLinkAnalytics {
    total: number;
    created: number;
    opened: number;
    routed: number;
    completed: number;
    expired: number;
    revoked: number;
    conversionRate: number;
    byMode: Record<string, number>;
    byChannel: Record<string, number>;
    recentDispatches: Array<{
        _id: string;
        channel: string;
        recipient: string;
        recipientName?: string;
        campaignName?: string;
        status: string;
        errorMessage?: string;
        createdAt: string;
    }>;
}
