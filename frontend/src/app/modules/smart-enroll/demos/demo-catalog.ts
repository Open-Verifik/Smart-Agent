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
    'create-collection',
    'create-person',
    'create-person-with-liveness',
    'update-person',
    'delete-person',
    'search-person',
    'search-live-person',
    'search-active-user',
    'detect-face',
    'search-crops',
    'face-comparison',
    'face-comparison-liveness',
    'verify-face',
];

export const TRADITIONAL_SECTIONS: DemoSection[] = [
    { id: 'enroll', demoIds: ['create-collection', 'create-person', 'create-person-with-liveness'] },
    { id: 'manage', demoIds: ['update-person', 'delete-person'] },
    { id: 'search', demoIds: ['search-person', 'search-live-person', 'search-active-user'] },
    { id: 'detection', demoIds: ['detect-face', 'search-crops'] },
    { id: 'comparison', demoIds: ['face-comparison', 'face-comparison-liveness', 'verify-face'] },
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
    [...TRADITIONAL_STEP_ORDER, ...HUMAN_AUTHN_DEMO_IDS].map(getDemoCatalogEntry);

export const demoRoute = (id: DemoId): string => `/smart-enroll/demos/${id}`;

/** Legacy HumanAuthn slugs → canonical demo ids */
export const LEGACY_DEMO_REDIRECTS: Record<string, string> = {
    'face-detection': 'detect-face',
    'compare-live': 'face-comparison-liveness',
};
