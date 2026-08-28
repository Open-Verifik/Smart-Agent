/** AppFeature codes billed by HumanAuthn demos (liveness + HumanID). */
export const HUMAN_AUTHN_FEATURE_CODES = [
    'face_recognition_liveness',
    'zelf-proofs',
    'zelf-proof-liveness-active-user',
    'zelf-proof-encrypt-qr',
    'zelf-proof-decrypt',
    'zelf-proof-preview',
] as const;

export type HumanAuthnFeatureCode = (typeof HUMAN_AUTHN_FEATURE_CODES)[number];

export const isHumanAuthnFeatureCode = (code?: string | null): boolean =>
    !!code && (HUMAN_AUTHN_FEATURE_CODES as readonly string[]).includes(code);
