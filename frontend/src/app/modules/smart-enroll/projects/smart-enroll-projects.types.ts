export type ProjectMemberRole = 'viewer' | 'editor' | 'admin' | 'owner';

export interface EnrollProjectFlow {
    _id: string;
    name?: string;
    status?: string;
    type?: string;
    version?: number;
    signUpForm?: unknown;
    documents?: unknown;
    onboardingSettings?: unknown;
    liveness?: Record<string, unknown>;
}

export interface EnrollProjectBranding {
    logo?: string;
    bgColor?: string;
    tabColor?: string;
    titleColor?: string;
    txtColor?: string;
    buttonColor?: string;
    buttonTxtColor?: string;
    secondaryButtonColor?: string;
    secondaryButtonTextColor?: string;
}

export interface EnrollStaffRef {
    _id: string;
    name?: string;
    email?: string;
    avatar?: string;
}

export interface EnrollProjectMember {
    _id: string;
    project: string;
    client?: string;
    staff?: EnrollStaffRef;
    role: ProjectMemberRole | string;
    status?: string;
    lastActive?: string;
    acceptedAt?: string | Date | null;
    bannedAt?: string | null;
    saving?: boolean;
    removing?: boolean;
}

export interface EnrollClientRef {
    _id: string;
    name?: string;
    email?: string;
    avatar?: string;
    updatedAt?: string;
}

export interface EnrollProject {
    _id: string;
    name?: string;
    version?: number;
    demoMode?: boolean;
    allowedCountries?: string[];
    contactEmail?: string;
    privacyUrl?: string;
    termsAndConditionsUrl?: string;
    branding?: EnrollProjectBranding;
    projectFlows?: EnrollProjectFlow[];
    projectMembers?: EnrollProjectMember[];
    client?: EnrollClientRef | string;
    createdAt?: string;
    updatedAt?: string;
    role?: string;
}

/** Minimal row when resolving project ids for a staff user */
export interface ProjectMemberLookupRow {
    project: string;
}

export interface AppRegistrationRow {
    _id: string;
    status?: string;
    createdAt?: string;
    /** Liveness selfie (`IdentityImage`) when populated */
    face?: { base64?: string; url?: string } | null;
    emailValidation?: { email?: string; status?: string; updatedAt?: string; createdAt?: string };
    phoneValidation?: { phone?: string; countryCode?: string; status?: string; updatedAt?: string; createdAt?: string };
    biometricValidation?: {
        status?: string;
        livenessScore?: number;
        updatedAt?: string;
        response?: unknown;
        face?: { base64?: string; url?: string } | null;
    };
    informationValidation?: Record<string, unknown> | null;
}

/** Full app registration as returned by GET /v2/app-registrations/:id with deep populates */
export interface AppRegistrationDetail extends AppRegistrationRow {
    updatedAt?: string;
    email?: string;
    phone?: string;
    client?: string;
    project?: string;
    projectFlow?: EnrollProjectFlow & {
        liveness?: Record<string, unknown>;
        documents?: Record<string, unknown>;
        onboardingSettings?: Record<string, unknown>;
    };
    documentValidation?: Record<string, unknown> | null;
    documentFace?: Record<string, unknown> | null;
    compareFaceVerification?: Record<string, unknown> | null;
    face?: Record<string, unknown> | null;
    person?: { livenessScore?: number } | null;
    failedDocumentValidations?: Record<string, unknown>[] | null;
    failedBiometricValidations?: Record<string, unknown>[] | null;
    zelfKey?: Record<string, unknown> | null;
}

export type AppRegistrationStatus =
    | 'STARTED'
    | 'ONGOING'
    | 'COMPLETED_WITHOUT_KYC'
    | 'COMPLETED'
    | 'FAILED'
    | 'NEEDS_MANUAL_VERIFICATION'
    | 'EXPIRED';

export interface AppRegistrationListFilters {
    /** Free-text term applied as OR across name/email/phone */
    search?: string;
    /** Single status enum value; 'all' or empty disables the filter */
    status?: AppRegistrationStatus | 'all' | string;
    /** ISO date-time inclusive lower bound for createdAt */
    createdFrom?: string;
    /** ISO date-time inclusive upper bound for createdAt */
    createdTo?: string;
    /** MongoORM sort string, e.g. '-createdAt' */
    sort?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total?: number;
    page?: number;
    pages?: number;
    limit?: number;
}

export interface StaffInviteRow extends EnrollStaffRef {
    role?: string;
    selected?: boolean;
    saving?: boolean;
}
