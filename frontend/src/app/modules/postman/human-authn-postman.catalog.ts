/** AppFeature codes that have a HumanAuthn visual demo. */
export const HUMAN_AUTHN_DEMO_ROUTES: Readonly<Record<string, string>> = {
    'zelf-proofs': '/smart-enroll/demos/humanid-create',
    'zelf-proof-liveness-active-user': '/smart-enroll/demos/humanid-create',
    'zelf-proof-encrypt-qr': '/smart-enroll/demos/humanid-create-qr',
    'zelf-proof-decrypt': '/smart-enroll/demos/humanid-decrypt',
    'zelf-proof-preview': '/smart-enroll/demos/humanid-preview',
    face_recognition_liveness: '/smart-enroll/demos/liveness',
};

export interface HumanAuthnOperationDependency {
    field: string;
    type: string;
    required: boolean;
    enum?: string[];
    default?: unknown;
    description?: string;
}

const ENCRYPT_DEPENDENCIES: HumanAuthnOperationDependency[] = [
    {
        field: 'publicData',
        type: 'Object',
        required: true,
        default: { name: 'Jane Doe', documentNumber: '12345678' },
        description: 'Public metadata stored with the HumanID (string key-value pairs)',
    },
    {
        field: 'metadata',
        type: 'Object',
        required: true,
        default: { secretKey: 'example-secret' },
        description: 'Private metadata encrypted into the HumanID (string key-value pairs)',
    },
    {
        field: 'faceBase64',
        type: 'String',
        required: true,
        description: 'Base64 encoded facial image',
    },
    {
        field: 'os',
        type: 'String',
        required: true,
        enum: ['DESKTOP', 'ANDROID', 'IOS'],
        default: 'DESKTOP',
        description: 'Client operating system',
    },
    {
        field: 'identifier',
        type: 'String',
        required: true,
        default: 'randomid',
        description: 'Alphanumeric identifier only (no spaces or special characters)',
    },
    {
        field: 'requireLiveness',
        type: 'Boolean',
        required: true,
        default: true,
        description: 'Require a live face when decrypting later',
    },
    {
        field: 'livenessDetectionPriorCreation',
        type: 'Boolean',
        required: false,
        default: false,
        description: 'Require a live face when creating the HumanID',
    },
    {
        field: 'tolerance',
        type: 'String',
        required: false,
        enum: ['SOFT', 'REGULAR', 'HARDENED', 'REGULAR_HARD', 'REGULAR_SOFT'],
        default: 'HARDENED',
        description: 'Liveness anti-spoof strictness (not forwarded as livenessLevel)',
    },
    {
        field: 'password',
        type: 'String',
        required: false,
        description: 'Optional password for additional security',
    },
    {
        field: 'referenceFaceBase64',
        type: 'String',
        required: false,
        description: 'Optional reference face image',
    },
    {
        field: 'verifierKey',
        type: 'String',
        required: false,
        description: 'Optional verifier key',
    },
];

const DECRYPT_DEPENDENCIES: HumanAuthnOperationDependency[] = [
    {
        field: 'faceBase64',
        type: 'String',
        required: true,
        description: 'Base64 encoded facial image of the HumanID owner',
    },
    {
        field: 'os',
        type: 'String',
        required: true,
        enum: ['DESKTOP', 'ANDROID', 'IOS'],
        default: 'DESKTOP',
        description: 'Client operating system',
    },
    {
        field: 'zelfProof',
        type: 'String',
        required: true,
        description: 'HumanID token returned by encrypt',
    },
    {
        field: 'password',
        type: 'String',
        required: false,
        description: 'Password if one was set at encrypt time',
    },
    {
        field: 'verifierKey',
        type: 'String',
        required: false,
        description: 'Optional verifier key',
    },
];

const PREVIEW_DEPENDENCIES: HumanAuthnOperationDependency[] = [
    {
        field: 'zelfProof',
        type: 'String',
        required: true,
        description: 'HumanID token returned by encrypt',
    },
    {
        field: 'verifierKey',
        type: 'String',
        required: false,
        description: 'Optional verifier key',
    },
];

/** Fallback Joi-shaped bodies when AppFeature.dependencies is empty. */
export const HUMAN_AUTHN_OPERATION_DEPENDENCIES: Readonly<
    Record<string, HumanAuthnOperationDependency[]>
> = {
    'zelf-proofs': ENCRYPT_DEPENDENCIES,
    'zelf-proof-liveness-active-user': ENCRYPT_DEPENDENCIES,
    'zelf-proof-encrypt-qr': ENCRYPT_DEPENDENCIES,
    'zelf-proof-decrypt': DECRYPT_DEPENDENCIES,
    'zelf-proof-preview': PREVIEW_DEPENDENCIES,
};

/**
 * Catalog dependencies when present; otherwise the HumanAuthn fallback for that code.
 */
export const resolveHumanAuthnDependencies = (
    code: string | undefined,
    catalogDeps: unknown
): HumanAuthnOperationDependency[] => {
    const raw = Array.isArray(catalogDeps) ? catalogDeps : [];
    const catalog = raw.filter(
        (dep): dep is HumanAuthnOperationDependency =>
            !!dep && typeof dep.field === 'string' && dep.field.length > 0
    );
    if (catalog.length) {
        return catalog;
    }
    return code ? HUMAN_AUTHN_OPERATION_DEPENDENCIES[code] ?? [] : [];
};

export const getHumanAuthnDemoRoute = (code?: string | null): string | null =>
    code ? HUMAN_AUTHN_DEMO_ROUTES[code] ?? null : null;

export const shouldListHumanAuthnParams = (code?: string | null): boolean =>
    !!code && code in HUMAN_AUTHN_DEMO_ROUTES;

/**
 * Default used for POST body JSON. Keeps objects/booleans (unlike `value || fallback`).
 */
export const defaultValueForDependency = (dep: HumanAuthnOperationDependency): unknown => {
    if (dep.default !== undefined && dep.default !== null) {
        return dep.default;
    }
    if (Array.isArray(dep.enum) && dep.enum.length) {
        return dep.enum[0];
    }
    if (dep.type === 'Object') {
        return {};
    }
    if (dep.type === 'Boolean') {
        return false;
    }
    return '';
};

export const paramValueForDependency = (dep: HumanAuthnOperationDependency): string => {
    const value = defaultValueForDependency(dep);
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    return value === undefined || value === null ? '' : String(value);
};
