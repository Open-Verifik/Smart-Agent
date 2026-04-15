export type ProjectMemberRole = 'viewer' | 'editor' | 'admin' | 'owner';

export interface EnrollProjectFlow {
    _id: string;
    name?: string;
    status?: string;
    version?: number;
    signUpForm?: unknown;
    documents?: unknown;
    onboardingSettings?: unknown;
}

export interface EnrollProjectBranding {
    logo?: string;
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
    emailValidation?: { email?: string };
    phoneValidation?: { phone?: string; countryCode?: string };
    biometricValidation?: { status?: string };
    informationValidation?: unknown;
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
