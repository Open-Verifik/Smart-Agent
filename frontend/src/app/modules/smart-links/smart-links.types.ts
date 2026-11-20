export type SmartLinkIdentifier = 'email' | 'phone';
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
        allowedIdentifiers?: SmartLinkIdentifier[];
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

export type SmartLinkSessionState =
    | 'CREATED'
    | 'OPENED'
    | 'ROUTED'
    | 'IN_PROGRESS'
    | 'COMPLETED'
    | 'FAILED'
    | 'EXPIRED'
    | 'REVOKED';

export interface SmartLinkInteractionEvent {
    type:
        | 'CREATED'
        | 'DISPATCHED'
        | 'OPENED'
        | 'IDENTIFIER_SUBMITTED'
        | 'ROUTED'
        | 'UPDATED'
        | 'REISSUED'
        | 'COMPLETED'
        | 'TOKEN_EXCHANGED'
        | 'FAILED'
        | 'REVOKED'
        | 'EXPIRED';
    at: string;
    actor?: string;
    summary?: string;
    ip?: string;
    userAgent?: string;
    meta?: Record<string, unknown>;
}

export interface SmartLinkDispatchRecord {
    _id: string;
    channel: 'whatsapp' | 'sms' | 'email';
    recipient: string;
    recipientName?: string;
    campaignName?: string;
    status: 'sent' | 'failed';
    errorMessage?: string;
    sentAt?: string;
    createdAt: string;
}

export interface SmartLinkLinkedRegistration {
    _id: string;
    project?: string;
    status?: string;
    name?: string;
    email?: string;
    phone?: string;
    countryCode?: string;
    currentStep?: string;
    createdAt?: string;
    updatedAt?: string;
    face?: {
        _id?: string;
        base64?: string;
        url?: string;
        retention?: { mode?: string; purgedAt?: string };
    } | null;
    documentFace?: {
        _id?: string;
        base64?: string;
        url?: string;
        retention?: { mode?: string; purgedAt?: string };
    } | null;
    biometricValidation?: {
        _id: string;
        status?: string;
        livenessScore?: number;
        url?: string;
        failedReason?: string;
        createdAt?: string;
        face?: {
            _id?: string;
            base64?: string;
            url?: string;
            retention?: { mode?: string; purgedAt?: string };
        } | null;
    } | null;
    documentValidation?: {
        _id: string;
        status?: string;
        documentType?: string;
        documentNumber?: string;
        country?: string;
        url?: string;
        frontUrl?: string;
        backUrl?: string;
        imageValidated?: boolean;
        namesMatch?: boolean;
        fullNameMatchPercentage?: number;
        OCRExtraction?: Record<string, unknown>;
        retention?: { mode?: string; purgedAt?: string };
        createdAt?: string;
    } | null;
}

export interface SmartLinkLinkedLogin {
    _id: string;
    project?: string;
    status?: string;
    type?: string;
    accessMode?: string;
    name?: string;
    createdAt?: string;
    face?: {
        _id?: string;
        base64?: string;
        url?: string;
        retention?: { mode?: string; purgedAt?: string };
    } | null;
    biometricValidation?: {
        _id: string;
        status?: string;
        livenessScore?: number;
        url?: string;
        failedReason?: string;
        createdAt?: string;
        face?: {
            _id?: string;
            base64?: string;
            url?: string;
            retention?: { mode?: string; purgedAt?: string };
        } | null;
    } | null;
}

export interface SmartLinkSessionRecord {
    _id: string;
    shortCode: string;
    project?: string;
    smartLinkFlow?: string;
    routedProject?: string;
    state: SmartLinkSessionState;
    requestedMode: string;
    resolvedMode?: string;
    requireDocument?: boolean;
    completionMode?: SmartLinkCompletionMode;
    redirectUrlOverride?: string;
    callbackWebhookUrl?: string;
    externalRefId?: string;
    notes?: string;
    createdByChannel?: string;
    useCount?: number;
    maxUses?: number;
    openCount?: number;
    lastOpenedAt?: string;
    expiresAt: string;
    openedAt?: string;
    routedAt?: string;
    completedAt?: string;
    sessionCodeConsumedAt?: string;
    createdAt: string;
    updatedAt?: string;
    metadata?: Record<string, unknown>;
    outcome?: {
        outcomeType?: string;
        confirmationCode?: string;
        verificationToken?: string;
        appRegistration?: string | null;
        businessRegistration?: string | null;
        appLogin?: string | null;
        humanId?: string;
        verifiedAt?: string;
        summary?: Record<string, unknown>;
        identity?: {
            appRegistrationId?: string;
            fullName?: string;
            email?: string;
            phone?: string;
            countryCode?: string;
            documentType?: string;
            documentNumber?: string;
        };
    };
    prefill?: {
        email?: string;
        phone?: string;
        countryCode?: string;
        taxId?: string;
        fullName?: string;
    };
}

export interface SmartLinkSessionDetail extends SmartLinkSessionRecord {
    verified?: boolean;
    token?: string;
    identity?: {
        appRegistrationId?: string;
        fullName?: string;
        email?: string;
        phone?: string;
        countryCode?: string;
        documentType?: string;
        documentNumber?: string;
    };
    interactions?: SmartLinkInteractionEvent[];
    dispatches?: SmartLinkDispatchRecord[];
    projectInfo?: { _id: string; name?: string; branding?: Partial<SmartLinkBranding> } | null;
    routedProjectInfo?: { _id: string; name?: string; target?: string } | null;
    linkedRegistration?: SmartLinkLinkedRegistration | null;
    linkedLogin?: SmartLinkLinkedLogin | null;
    requireSignedSession?: boolean;
    shareUrl?: string;
    canDelete?: boolean;
    canRevoke?: boolean;
}

export interface SmartLinkSessionFilters {
    search?: string;
    state?: string;
    requireDocument?: 'all' | 'true' | 'false';
    channel?: string;
    createdFrom?: string;
    createdTo?: string;
    sort?: string;
}

export interface SmartLinkUpdateSessionPayload {
    email?: string;
    phone?: string;
    countryCode?: string;
    fullName?: string;
    requireDocument?: boolean;
    completionMode?: SmartLinkCompletionMode;
    redirectUrlOverride?: string;
    callbackWebhookUrl?: string;
    externalRefId?: string;
    notes?: string;
    maxUses?: number;
    extendMinutes?: number;
    expiresAt?: string;
    state?: 'CREATED' | 'OPENED' | 'REVOKED';
    metadata?: Record<string, unknown>;
}

export interface SmartLinkResendPayload {
    channel?: 'email' | 'whatsapp' | 'sms';
    recipient?: string;
    countryCode?: string;
    recipientName?: string;
    extendMinutes?: number;
    rotateToken?: boolean;
    language?: string;
    send?: boolean;
}

export interface SmartLinkResendResult {
    sessionId: string;
    shortCode: string;
    url: string;
    qrDataUrl: string;
    expiresAt: string;
    state: string;
    dispatch?: {
        dispatchId?: string;
        channel: string;
        recipient: string;
        status: 'sent' | 'failed';
        errorMessage?: string;
    } | null;
}

export interface MintedSmartLinkSession {
    sessionId: string;
    shortCode: string;
    url: string;
    qrDataUrl: string;
    expiresAt: string;
    state: string;
    requireDocument?: boolean;
    prefill?: {
        email?: string;
        phone?: string;
        countryCode?: string;
        fullName?: string;
    };
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
