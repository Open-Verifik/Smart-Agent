import { environment } from 'environments/environment';

/** Supported locale keys for `AppFeature.docs`. */
export type EndpointDocLocale = 'en' | 'es' | 'fr' | 'pt' | 'ko' | 'ja' | 'zh';

export interface EndpointDocHeaderRow {
    name: string;
    value: string;
    description?: string;
}

export interface EndpointDocParamRow {
    field: string;
    description: string;
}

export interface EndpointDocRequestExample {
    /** Tab identifier from the source MDX (e.g. "node", "python", "curl"). */
    lang: string;
    /** Human-readable tab label (e.g. "Node.js"). */
    label: string;
    /** Highlight.js language tag (e.g. "javascript", "python", "bash"). */
    language?: string;
    code: string;
}

export interface EndpointDocResponse {
    /** HTTP status code as string ("200", "404", "409"). */
    status: string;
    label?: string;
    body: string;
}

export interface EndpointDocLang {
    overview?: string;
    headers?: EndpointDocHeaderRow[];
    params?: EndpointDocParamRow[];
    requestExamples?: EndpointDocRequestExample[];
    responses?: EndpointDocResponse[];
    notes?: string[];
}

export type EndpointDocs = Partial<Record<EndpointDocLocale, EndpointDocLang>>;

/** Lean folder row from GET /v2/postman/layout or /v2/postman/folders */
export interface PostmanFolderDto {
    _id: string;
    client?: string;
    parentFolder?: string | null;
    name: string;
    description?: string;
    sortOrder?: number;
    isSystem?: boolean;
}

/** Lean endpoint row from GET /v2/postman/layout or /v2/postman/endpoints */
export interface PostmanEndpointRowDto {
    _id: string;
    client?: string;
    folder?: string | null;
    appFeatureCode: string;
    displayName?: string;
    description?: string;
    isFavorite?: boolean;
    sortOrder?: number;
}

export interface PostmanLayoutData {
    workspace: unknown | null;
    folders: PostmanFolderDto[];
    endpoints: PostmanEndpointRowDto[];
}

export interface PostmanLayoutResponse {
    data: PostmanLayoutData;
}

/** Nested folder + endpoints for sidebar tree */
export interface SidebarFolderNode {
    folder: PostmanFolderDto;
    children: SidebarFolderNode[];
    endpoints: ApiEndpoint[];
}

export interface ApiEndpoint {
    id: string;
    label: string;
    code?: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    description?: string;
    headers?: { key: string; value: string }[];
    params?: {
        key: string;
        value: string;
        type: string;
        required: boolean;
        description?: string;
        /** Allowed values from app-features `dependencies[].enum` (GET query params). */
        enum?: string[];
    }[];
    body?: any;
    category?: string;
    country?: string;
    documentationUrl?: string;
    estimatedCost?: number;
    /** Persisted Postman endpoint id when layout row exists */
    postmanEndpointId?: string;
    /** Target folder _id string, or null for Library */
    postmanFolderId?: string | null;
    layoutSortOrder?: number;
    layoutDisplayName?: string;
    isFavorite?: boolean;
    /** Rich, localized documentation served by `AppFeature.docs` (seeded from Docusaurus MDX). */
    docs?: EndpointDocs;
}

export const API_ENDPOINTS: ApiEndpoint[] = [
    {
        id: 'auth-email',
        label: 'API Key Access via Email',
        code: 'feature_email_login',
        category: 'AUTHENTICATION',
        country: 'world',
        method: 'POST',
        url: `${environment.apiUrl}/v2/projects/email-login`,
        headers: [{ key: 'Accept', value: 'application/json' }],
        params: [
            {
                key: 'email',
                value: '',
                type: 'string',
                required: true,
                description: 'Client email to receive the OTP.',
            },
        ],
    },
    {
        id: 'biometrics-liveness',
        label: 'Liveness Detection',
        code: 'face_recognition_liveness',
        category: 'BIOMETRICS_APIS',
        country: 'world',
        method: 'POST',
        url: `${environment.apiUrl}/v2/face-recognition/liveness`,
        headers: [
            { key: 'Content-Type', value: 'application/json' },
            { key: 'Authorization', value: 'Bearer <token>' },
        ],
        body: {
            os: 'DESKTOP',
            image: '',
            liveness_min_score: 0.6,
        },
    },
    {
        id: 'identity-colombia',
        label: 'Colombian Citizen',
        code: 'colombia_api_identity_lookup',
        category: 'IDENTITY_VALIDATION',
        country: 'Colombia',
        method: 'GET',
        url: `${environment.apiUrl}/v2/co/cedula`,
        headers: [
            { key: 'Accept', value: 'application/json' },
            { key: 'Authorization', value: 'Bearer <token>' },
        ],
        params: [
            {
                key: 'documentType',
                value: 'CC',
                type: 'string',
                required: true,
                description: 'One of CC, NIT.',
                enum: ['CC', 'NIT'],
            },
            {
                key: 'documentNumber',
                value: '',
                type: 'string',
                required: true,
                description: 'Document number.',
            },
        ],
        documentationUrl: 'docs/identity-validation/colombia/colombian-citizen.md',
    },
];
