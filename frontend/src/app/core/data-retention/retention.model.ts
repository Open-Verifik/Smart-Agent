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

/** Preset duration option for Store mode retention dropdown. */
export interface RetentionDurationPreset {
    value: number | null | 'custom';
    labelKey: string;
    hours: number | null;
}

/**
 * Human-friendly duration presets for Store mode:
 * 12h, 24h, 36h, 48h, 1w, 2w, 1m, 3m, 6m, 12m, 2y, 3y, 5y, 10y, Indefinite, Custom.
 */
export const RETENTION_DURATION_PRESETS: readonly RetentionDurationPreset[] = [
    { value: null, labelKey: 'settings.dataRetention.durationForever', hours: null },
    { value: 12, labelKey: 'settings.dataRetention.duration12h', hours: 12 },
    { value: 24, labelKey: 'settings.dataRetention.duration24h', hours: 24 },
    { value: 36, labelKey: 'settings.dataRetention.duration36h', hours: 36 },
    { value: 48, labelKey: 'settings.dataRetention.duration48h', hours: 48 },
    { value: 168, labelKey: 'settings.dataRetention.duration1w', hours: 168 },
    { value: 336, labelKey: 'settings.dataRetention.duration2w', hours: 336 },
    { value: 720, labelKey: 'settings.dataRetention.duration1m', hours: 720 },
    { value: 2160, labelKey: 'settings.dataRetention.duration3m', hours: 2160 },
    { value: 4320, labelKey: 'settings.dataRetention.duration6m', hours: 4320 },
    { value: 8760, labelKey: 'settings.dataRetention.duration12m', hours: 8760 },
    { value: 17520, labelKey: 'settings.dataRetention.duration2y', hours: 17520 },
    { value: 26280, labelKey: 'settings.dataRetention.duration3y', hours: 26280 },
    { value: 43800, labelKey: 'settings.dataRetention.duration5y', hours: 43800 },
    { value: 87600, labelKey: 'settings.dataRetention.duration10y', hours: 87600 },
    { value: 'custom', labelKey: 'settings.dataRetention.durationCustom', hours: null },
] as const;

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
