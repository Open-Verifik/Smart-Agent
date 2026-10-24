import {
    CORE_TYPES,
    REJECTED_RETENTION_TYPES,
    RETENTION_MODE_LABEL_KEYS,
    WEBHOOK_HOLD_MAX,
    WEBHOOK_HOLD_MIN,
    type ClientRetentionSavePayload,
    type RetentionDataType,
    type RetentionMode,
    type RetentionPolicy,
    type RetentionTypeRule,
} from './retention.model';

/** Loose shape accepted from ClientSettings.data or Project.dataRetention. */
export interface StoredRetention {
    mode?: string | null;
    webhookHoldHours?: number | null;
    allowManualDelete?: boolean;
    types?: Partial<Record<string, { mode?: string | null; retentionHours?: number | null }>> | null;
    updatedAt?: string | Date;
}

const MODES: readonly RetentionMode[] = ['store', 'ephemeral', 'none'];

/**
 * Empty account policy: store every enforced type with no hour limit.
 * @returns A new policy object. Callers may mutate the copy.
 */
export function defaultRetentionPolicy(): RetentionPolicy {
    return {
        mode: 'store',
        webhookHoldHours: WEBHOOK_HOLD_MIN,
        allowManualDelete: true,
        types: mapTypes(null, () => ({ mode: 'store', retentionHours: null })),
    };
}

/**
 * Runs `fn` once per enforced type.
 * @param source - Policy whose current rule is passed through, or null to seed defaults.
 * @param fn - Maps one type to a value.
 * @returns A record keyed by {@link CORE_TYPES}.
 */
export function mapTypes<T>(
    source: RetentionPolicy | null,
    fn: (type: RetentionDataType, rule: RetentionTypeRule) => T
): Record<RetentionDataType, T> {
    const out = {} as Record<RetentionDataType, T>;
    for (const type of CORE_TYPES) {
        const rule = source?.types[type] ?? { mode: 'store' as const, retentionHours: null };
        out[type] = fn(type, rule);
    }
    return out;
}

/**
 * Clamps the webhook hold to 24–72. Non-numeric input becomes 24.
 * @param hours - Raw form or API value.
 */
export function clampWebhookHoldHours(hours: unknown): number {
    const parsed = Number(hours);
    if (!Number.isFinite(parsed)) return WEBHOOK_HOLD_MIN;
    return Math.max(WEBHOOK_HOLD_MIN, Math.min(WEBHOOK_HOLD_MAX, Math.round(parsed)));
}

/**
 * Keeps a positive hour count for `store`. Other modes drop hours, because the backend ignores them.
 * @param rule - Partial rule from a form or from storage.
 */
export function normalizeTypeRule(rule: { mode?: string | null; retentionHours?: number | null }): RetentionTypeRule {
    const mode = asMode(rule.mode) ?? 'store';
    if (mode !== 'store') return { mode, retentionHours: null };
    const hours = Number(rule.retentionHours);
    return {
        mode,
        retentionHours: Number.isFinite(hours) && hours > 0 ? Math.round(hours) : null,
    };
}

/**
 * Copies `mode` onto every enforced type and clears hours unless the mode is `store`.
 * @param policy - Current policy. Hours already set on a type are kept when the new mode is `store`.
 * @param mode - Baseline mode.
 */
export function syncGlobalToGranular(policy: RetentionPolicy, mode: RetentionMode): RetentionPolicy {
    return {
        ...policy,
        mode,
        types: mapTypes(policy, (_type, rule) => normalizeTypeRule({ mode, retentionHours: rule.retentionHours })),
    };
}

/**
 * True when any enforced type uses a mode other than the baseline.
 * @param policy - Policy to inspect.
 */
export function computeIsCustomized(policy: RetentionPolicy | null | undefined): boolean {
    if (!policy?.types) return false;
    const modes = CORE_TYPES.map((type) => policy.types[type]?.mode);
    return !modes.every((mode) => mode === policy.mode);
}

/**
 * The shared mode when every enforced type matches, otherwise null.
 * @param policy - Policy to inspect.
 */
export function computeAllSameMode(policy: RetentionPolicy | null | undefined): RetentionMode | null {
    if (!policy?.types) return null;
    const modes = CORE_TYPES.map((type) => policy.types[type]?.mode);
    const first = modes[0];
    if (first && modes.every((mode) => mode === first)) return first;
    return null;
}

/**
 * Updates one type, then lifts the baseline mode when every type agrees.
 * @param policy - Current policy.
 * @param type - Enforced type to change.
 * @param rule - Replacement rule. Hours are normalized.
 */
export function setTypeRule(
    policy: RetentionPolicy,
    type: RetentionDataType,
    rule: { mode?: string | null; retentionHours?: number | null }
): RetentionPolicy {
    const types = mapTypes(policy, (key, current) => (key === type ? normalizeTypeRule(rule) : current));
    const next: RetentionPolicy = { ...policy, types };
    const shared = computeAllSameMode(next);
    if (shared) next.mode = shared;
    return next;
}

/**
 * Sets the webhook hold, clamped to 24–72.
 * @param policy - Current policy.
 * @param hours - Raw input.
 */
export function setWebhookHold(policy: RetentionPolicy, hours: unknown): RetentionPolicy {
    return { ...policy, webhookHoldHours: clampWebhookHoldHours(hours) };
}

/**
 * Turns manual erase on or off. The backend gates
 * `DELETE /v2/document-validations/:id/files`, `DELETE /v2/app-registrations/:id/data`,
 * and `POST /v2/data-retention/erase` on this flag.
 * @param policy - Current policy.
 * @param allowed - Whether an administrator may erase one record's stored files.
 */
export function setAllowManualDelete(policy: RetentionPolicy, allowed: boolean): RetentionPolicy {
    return { ...policy, allowManualDelete: allowed };
}

/**
 * Reads a stored override. Rejected types are dropped and are never written back.
 * Returns null when nothing was saved, so the caller can inherit the account policy.
 * Face images are not forced to any mode. A missing `allowManualDelete` stays allowed.
 * @param stored - `ClientSettings.data` or `Project.dataRetention`.
 */
export function policyFromStored(stored: StoredRetention | null | undefined): RetentionPolicy | null {
    if (!stored || (!stored.mode && !stored.types)) return null;
    const baseline = asMode(stored.mode) ?? 'store';
    const seeded = syncGlobalToGranular(defaultRetentionPolicy(), baseline);
    const types = mapTypes(seeded, (type, rule) => {
        const saved = stored.types?.[type];
        if (!saved) return rule;
        return normalizeTypeRule({
            mode: saved.mode ?? rule.mode,
            retentionHours: saved.retentionHours,
        });
    });
    const next: RetentionPolicy = {
        mode: baseline,
        webhookHoldHours: clampWebhookHoldHours(stored.webhookHoldHours ?? WEBHOOK_HOLD_MIN),
        allowManualDelete: stored.allowManualDelete !== false,
        types,
    };
    const shared = computeAllSameMode(next);
    if (shared) next.mode = shared;
    return next;
}

/**
 * Project `dataRetention` body. Includes only enforced types and the manual-erase flag.
 * @param policy - Edited policy. Pass null to clear the project override.
 */
export function buildProjectRetentionOverride(policy: RetentionPolicy | null): StoredRetention | null {
    if (!policy) return null;
    const normalized = normalizePolicy(policy);
    return {
        mode: normalized.mode,
        webhookHoldHours: normalized.webhookHoldHours,
        allowManualDelete: normalized.allowManualDelete,
        types: mapTypes(normalized, (_type, rule) => ({ ...rule })),
        updatedAt: new Date().toISOString(),
    };
}

/**
 * Account save body. Keys are only `client` and `data`.
 * Billing, invoice, and sandbox fields are never copied from a ClientSettings snapshot.
 * @param clientId - Business client id.
 * @param policy - Edited account policy.
 * @throws Error when `clientId` is empty.
 */
export function buildClientRetentionSavePayload(clientId: string, policy: RetentionPolicy): ClientRetentionSavePayload {
    const client = clientId.trim();
    if (!client) {
        throw new Error('A client id is required to save data retention.');
    }
    return {
        client,
        data: normalizePolicy(policy),
    };
}

/**
 * Label for a mode. Unknown or empty values use the "inherited" key.
 * @param translate - Transloco `translate` function.
 * @param mode - Mode string from a policy or a record.
 * @param inheritedKey - Key used when no mode is set.
 */
export function getRetentionModeLabel(
    translate: (key: string) => string,
    mode?: string | null,
    inheritedKey = 'smartEnrollProjects.detail.retention.accountDefault'
): string {
    const known = asMode(mode);
    if (!known) return translate(inheritedKey);
    return translate(RETENTION_MODE_LABEL_KEYS[known]);
}

/**
 * True when face images are `none`. The selfie is kept until the webhook hold ends, so comparison can still run.
 * @param policy - Policy being edited or displayed.
 */
export function faceImagesHeldUntilHold(policy: RetentionPolicy | null | undefined): boolean {
    return policy?.types.faceImages?.mode === 'none';
}

function normalizePolicy(policy: RetentionPolicy): RetentionPolicy {
    const types = mapTypes(policy, (_type, rule) => normalizeTypeRule(rule));
    for (const rejected of REJECTED_RETENTION_TYPES) {
        delete (types as Record<string, unknown>)[rejected];
    }
    const next: RetentionPolicy = {
        mode: asMode(policy.mode) ?? 'store',
        webhookHoldHours: clampWebhookHoldHours(policy.webhookHoldHours),
        allowManualDelete: policy.allowManualDelete !== false,
        types,
    };
    const shared = computeAllSameMode(next);
    if (shared) next.mode = shared;
    return next;
}

function asMode(value: string | null | undefined): RetentionMode | null {
    return MODES.includes(value as RetentionMode) ? (value as RetentionMode) : null;
}
