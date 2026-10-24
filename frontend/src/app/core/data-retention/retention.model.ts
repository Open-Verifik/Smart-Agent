/**
 * Data-retention shapes shared by account settings, SmartEnroll, and Human Auth.
 *
 * {@link CORE_TYPES} is the only type list written to the API. verifik-backend #531
 * (head 5134c7a5) rejects `livenessResults` and `apiResponseLogs` with 409
 * `unsupported_retention_type`, so those keys are never sent. `webhookPayloads`
 * is also omitted. `documentLiveness` none is enforced (the photo is not uploaded).
 * Manual erase is gated on `allowManualDelete`.
 */

/** How long a stored record is kept. */
export type RetentionMode = 'store' | 'ephemeral' | 'none';

/**
 * Types the backend accepts and enforces.
 * Keep this list as the single source for every mode cascade and every save.
 */
export const CORE_TYPES = ['documentImages', 'ocrExtraction', 'faceImages', 'documentLiveness'] as const;

/**
 * Keys the API rejects. A save must not include them even if an older document still has them.
 */
export const REJECTED_RETENTION_TYPES = ['livenessResults', 'apiResponseLogs'] as const;

/** One entry of {@link CORE_TYPES}. */
export type RetentionDataType = (typeof CORE_TYPES)[number];

/** Inclusive bounds for the webhook hold. The backend floors at 24 and the product cap is 72. */
export const WEBHOOK_HOLD_MIN = 24;
export const WEBHOOK_HOLD_MAX = 72;

/** Per-type rule. `retentionHours` applies only when `mode` is `store`. */
export interface RetentionTypeRule {
    mode: RetentionMode;
    /**
     * Hours to keep the data when `mode` is `store`.
     * `null` means keep it until the policy changes. Ignored for `ephemeral` and `none`.
     */
    retentionHours: number | null;
}

/** Account or project policy limited to enforced types. */
export interface RetentionPolicy {
    mode: RetentionMode;
    webhookHoldHours: number;
    /** When true, manual erase endpoints accept a request for this account or project. */
    allowManualDelete: boolean;
    types: Record<RetentionDataType, RetentionTypeRule>;
}

/** Body posted to `POST /v2/client-settings` for a retention save. */
export interface ClientRetentionSavePayload {
    client: string;
    data: RetentionPolicy;
}

/** Copy and icon for one enforced type row. */
export interface RetentionTypeMeta {
    type: RetentionDataType;
    titleKey: string;
    descriptionKey: string;
    icon: string;
}

/** Presentation for the enforced types, in {@link CORE_TYPES} order. */
export const RETENTION_TYPE_META: readonly RetentionTypeMeta[] = [
    {
        type: 'documentImages',
        titleKey: 'settings.dataRetention.typeDocumentImages',
        descriptionKey: 'settings.dataRetention.typeDocumentImagesDesc',
        icon: 'heroicons_outline:identification',
    },
    {
        type: 'ocrExtraction',
        titleKey: 'settings.dataRetention.typeOcrExtraction',
        descriptionKey: 'settings.dataRetention.typeOcrExtractionDesc',
        icon: 'heroicons_outline:document-text',
    },
    {
        type: 'faceImages',
        titleKey: 'settings.dataRetention.typeFaceImages',
        descriptionKey: 'settings.dataRetention.typeFaceImagesDesc',
        icon: 'heroicons_outline:user-circle',
    },
    {
        type: 'documentLiveness',
        titleKey: 'settings.dataRetention.typeDocumentLiveness',
        descriptionKey: 'settings.dataRetention.typeDocumentLivenessDesc',
        icon: 'heroicons_outline:shield-check',
    },
] as const;

/** Translation keys for the three modes. */
export const RETENTION_MODE_LABEL_KEYS: Record<RetentionMode, string> = {
    store: 'settings.dataRetention.modeStore',
    ephemeral: 'settings.dataRetention.modeEphemeral',
    none: 'settings.dataRetention.modeNone',
};
