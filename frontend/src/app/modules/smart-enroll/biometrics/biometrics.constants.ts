/** SmartEnroll project type for face-recognition project-type routes. */
export const SMART_ENROLL_PROJECT_TYPE = 'onboarding';

/** AppFeature codes for face recognition / biometrics API requests. */
export const FACE_RECOGNITION_CODES = [
    'face_recognition_compare',
    'face_recognition_compare_live',
    'face_recognition_liveness',
    'face_recognition_search_live_face',
    'face_recognition_verify',
    'face_recognition_detect',
    'face_recognition_search_crops',
    'face_recognition_search',
    'face_recognition_search_active_user',
    'face_recognition_detect_face',
    'face_recognition_compare_with_liveness',
] as const;

/** Postman sidebar categories for biometrics-only explorer. */
export const BIOMETRICS_API_CATEGORIES = ['BIOMETRICS', 'BIOMETRICS_APIS'] as const;

export const isFaceRecognitionCode = (code?: string | null): boolean =>
    !!code && (code.startsWith('face_recognition_') || (FACE_RECOGNITION_CODES as readonly string[]).includes(code));

export const isBiometricsEndpoint = (category?: string | null, code?: string | null): boolean =>
    (!!category && (BIOMETRICS_API_CATEGORIES as readonly string[]).includes(category)) ||
    isFaceRecognitionCode(code);
