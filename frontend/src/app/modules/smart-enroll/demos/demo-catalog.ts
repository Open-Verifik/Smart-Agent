export type DemoId =
    | 'create-collection'
    | 'create-person'
    | 'create-person-with-liveness'
    | 'update-person'
    | 'delete-person'
    | 'search-person'
    | 'search-live-person'
    | 'search-active-user'
    | 'detect-face'
    | 'search-crops'
    | 'face-comparison'
    | 'face-comparison-liveness'
    | 'verify-face'
    | 'liveness'
    | 'humanid-create'
    | 'humanid-create-qr'
    | 'humanid-decrypt'
    | 'humanid-preview';

export type DemoSectionId = 'enroll' | 'manage' | 'search' | 'detection' | 'comparison' | 'humanAuthn';

export type DemoCatalogEntry = {
    id: DemoId;
    routeSlug: string;
    stepNumber?: number;
};

export type DemoSection = {
    id: DemoSectionId;
    demoIds: DemoId[];
};

const TRADITIONAL_STEP_ORDER: DemoId[] = [
    'liveness',
    'humanid-create',
    'humanid-create-qr',
    'humanid-decrypt',
    'humanid-preview',
    'face-comparison',
    'face-comparison-liveness',
    'detect-face',
];

export const TRADITIONAL_SECTIONS: DemoSection[] = [
    {
        id: 'humanAuthn',
        demoIds: [
            'liveness',
            'humanid-create',
            'humanid-create-qr',
            'humanid-decrypt',
            'humanid-preview',
        ],
    },
    {
        id: 'comparison',
        demoIds: ['face-comparison', 'face-comparison-liveness', 'detect-face'],
    },
];

export const HUMAN_AUTHN_DEMO_IDS: DemoId[] = [
    'liveness',
    'humanid-create',
    'humanid-create-qr',
    'humanid-decrypt',
    'humanid-preview',
];

const stepIndex = (id: DemoId): number | undefined => {
    const i = TRADITIONAL_STEP_ORDER.indexOf(id);
    return i >= 0 ? i + 1 : undefined;
};

export const getDemoCatalogEntry = (id: DemoId): DemoCatalogEntry => ({
    id,
    routeSlug: id,
    stepNumber: stepIndex(id),
});

export const getAllDemoEntries = (): DemoCatalogEntry[] =>
    TRADITIONAL_STEP_ORDER.map(getDemoCatalogEntry);

export const demoRoute = (id: DemoId): string => `/smart-enroll/demos/${id}`;

/** Legacy OpenCV & HumanAuthn slugs → canonical active demo ids */
export const LEGACY_DEMO_REDIRECTS: Record<string, string> = {
    'face-detection': 'detect-face',
    'compare-live': 'face-comparison-liveness',
    'create-collection': 'humanid-create',
    'create-person': 'humanid-create',
    'create-person-with-liveness': 'humanid-create',
    'update-person': 'humanid-preview',
    'delete-person': 'humanid-preview',
    'search-person': 'humanid-decrypt',
    'search-live-person': 'humanid-decrypt',
    'search-active-user': 'humanid-decrypt',
    'search-crops': 'detect-face',
    'verify-face': 'face-comparison',
};
