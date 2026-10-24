/**
 * Data-retention shapes shared by account settings, SmartEnroll, and Human Auth.
 *
 * Only types the backend purge job actually enforces are listed in {@link CORE_TYPES}.
 * documentLiveness, livenessResults, webhookPayloads, and apiResponseLogs are omitted
 * until verifik-backend #531 stores and purges them. Manual erase is omitted until
 * `DELETE /v2/document-validations/:id/files` and `DELETE /v2/app-registrations/:id/data` exist.
 */

/** How long a stored record is kept. */
export type RetentionMode = 'store' | 'ephemeral' | 'none';

/**
 * Types the purge job stamps and deletes today: document images, extracted fields, and face images.
 * Keep this list as the single source for every mode cascade.
 */
export const CORE_TYPES = ['documentImages', 'ocrExtraction', 'faceImages'] as const;

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

/** Presentation for the three enforced types, in {@link CORE_TYPES} order. */
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
] as const;

/** Translation keys for the three modes. */
export const RETENTION_MODE_LABEL_KEYS: Record<RetentionMode, string> = {
    store: 'settings.dataRetention.modeStore',
    ephemeral: 'settings.dataRetention.modeEphemeral',
    none: 'settings.dataRetention.modeNone',
};
