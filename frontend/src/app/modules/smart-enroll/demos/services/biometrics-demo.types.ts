export const DEFAULT_LIVENESS_STANDALONE_MIN_SCORE = 0.6;
export const DEFAULT_FACE_COMPARE_MIN_SCORE = 0.85;
export const DEFAULT_LIVENESS_MIN_SCORE = 0.65;
export const DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR = 0.6;

export interface ApiErrorResponse {
    error?: string;
    code?: string;
    message?: string;
    statusCode?: number;
}

export interface LivenessPayload {
    os: string;
    image: string;
    liveness_min_score?: number;
    collection_id?: string;
    includeCost?: boolean;
}

export interface FaceComparisonPayload {
    gallery: string[];
    probe: string[];
    compare_min_score?: number;
}

export interface FaceComparisonLivePayload {
    gallery: string[];
    probe: string;
    os: string;
    liveness_min_score: number;
    compare_min_score?: number;
}

export interface CompareWithLivenessPayload {
    probe: string;
    gallery: string[];
    liveness_min_score?: number;
    compare_min_score?: number;
    cropFace?: boolean;
}

export interface CreateCollectionPayload {
    name: string;
    description?: string;
}

export interface FaceCollectionListItem {
    _id: string;
    name: string;
    code: string;
    description?: string;
}

export interface CreatePersonPayload {
    name: string;
    images: string[];
    gender: 'M' | 'F';
    date_of_birth: string;
    collections: string[];
    nationality?: string;
    email?: string;
    phone?: string;
    notes?: string;
}

export interface CreatePersonWithLivenessPayload {
    name: string;
    images: string[];
    gender: 'M' | 'F';
    date_of_birth: string;
    collection_id: string;
    liveness_min_score: number;
    min_score: number;
    search_mode: 'FAST' | 'ACCURATE';
    nationality?: string;
}

export interface UpdatePersonPayload {
    name?: string;
    gender?: 'M' | 'F';
    date_of_birth?: string;
    nationality?: string;
    collections?: string[];
    notes?: string;
}

export interface PersonListItem {
    _id: string;
    name: string;
}

export type SearchMode = 'FAST' | 'ACCURATE';

export interface SearchPersonsPayload {
    images: string[];
    min_score: number;
    search_mode: SearchMode;
    collection_id?: string;
    max_results?: number;
}

export interface SearchLivePersonPayload {
    image: string;
    os: string;
    liveness_min_score: number;
    min_score: number;
    search_mode: SearchMode;
    collection_id?: string;
}

export interface SearchActiveUserPayload {
    image: string;
    os: string;
    liveness_min_score?: number;
    min_score: number;
    search_mode: SearchMode;
    collection_id?: string;
}

export interface DetectFacePayload {
    image: string;
    min_score: number;
    search_mode: SearchMode;
    collection_id?: string;
    max_results?: number;
}

export interface VerifyFacePayload {
    id: string;
    images: string[];
    min_score: number;
    search_mode: SearchMode;
    collection_id?: string;
}

export interface SearchCropsPayload {
    images: string[];
    min_score: number;
    search_mode: SearchMode;
    collection_id?: string;
    max_results?: number;
}

export interface CompareLivePayload {
    gallery: string[];
    probe: string;
    os: string;
    liveness_min_score: number;
    compare_min_score?: number;
}

export interface ZelfProofPublicData {
    [key: string]: string;
}

export interface CreateHumanIdPayload {
    publicData: ZelfProofPublicData;
    faceBase64: string;
    metadata: ZelfProofPublicData;
    os: 'DESKTOP' | 'IOS' | 'ANDROID';
    identifier: string;
    requireLiveness: boolean;
    livenessDetectionPriorCreation?: boolean;
    password?: string;
    referenceFaceBase64?: string;
    tolerance?: 'REGULAR' | 'REGULAR_HARD' | 'SOFT' | 'REGULAR_SOFT' | 'HARDENED';
    verifierKey?: string;
    includeCost?: boolean;
}

export interface DecryptHumanIdPayload {
    faceBase64: string;
    os: 'DESKTOP' | 'IOS' | 'ANDROID';
    zelfProof: string;
    password?: string;
    verifierKey?: string;
}

export interface PreviewHumanIdPayload {
    zelfProof: string;
    verifierKey?: string;
}

export interface PreviewZelfIdQrPayload {
    zelfProofQRCode: string;
    verifierKey?: string;
}

export interface FaceCompareLiveParsed {
    match: boolean;
    score: number;
    livenessScore: number | null;
    livenessPassed: boolean;
    livenessMinScore: number;
    message: string;
}

export interface LivenessParsed {
    passed: boolean;
    livenessScore: number | null;
    minScore: number;
    message: string;
    creditsCharged?: number | null;
}

export interface CompareWithLivenessParsed {
    match: boolean;
    score: number;
    livenessScore: number | null;
    livenessPassed: boolean;
    livenessMinScore: number;
    livenessSkipped: boolean;
    message: string;
}
