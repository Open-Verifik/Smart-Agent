/**
 * Manual erase helpers for verifik-backend #531.
 *
 * Single-record routes take only the id in the path. There is no request body.
 * - DELETE /v2/document-validations/:id/files — stored images for one scan. The validation row stays.
 * - DELETE /v2/app-registrations/:id/data — stored data for one enrollee. The registration row stays.
 *
 * POST /v2/data-retention/erase is the bulk route. Its body lives in that PR's
 * validator, which this client cannot read, so nothing here calls it.
 *
 * The server returns 403 when allowManualDelete is off, 404 when the record
 * is missing, and 409 unsupported_retention_type when the record cannot be erased.
 */

/** One level of the allowManualDelete decision (account settings or a project override). */
export interface RetentionFlagSource {
    /** True when this level was read. False when the request failed or was skipped. */
    loaded: boolean;
    stored?: { allowManualDelete?: boolean; mode?: string | null; types?: unknown; webhookHoldHours?: number | null } | null;
}

const UNSUPPORTED_RETENTION_TYPE = 'unsupported_retention_type';

/**
 * True when a saved block should win over the account default.
 * An empty object is not an override.
 * @param stored - `Project.dataRetention` or `ClientSettings.data`.
 */
export function isRetentionOverride(stored: RetentionFlagSource['stored']): boolean {
    if (!stored || typeof stored !== 'object') return false;
    if (typeof stored.allowManualDelete === 'boolean') return true;
    if (stored.mode) return true;
    if (stored.webhookHoldHours != null) return true;
    return Boolean(stored.types && typeof stored.types === 'object' && Object.keys(stored.types).length > 0);
}

/**
 * Project override wins when one is saved. Otherwise the account flag is used.
 * A missing account block stays allowed, matching the settings form.
 * Returns null when the level that would decide could not be loaded.
 * @param project - Project `dataRetention`. `loaded` with an empty value means "no override".
 * @param account - Account `ClientSettings.data`.
 */
export function resolveAllowManualDeleteFlag(project: RetentionFlagSource, account: RetentionFlagSource): boolean | null {
    if (!project.loaded) return null;
    if (isRetentionOverride(project.stored)) return project.stored?.allowManualDelete !== false;
    if (!account.loaded) return null;
    if (!isRetentionOverride(account.stored)) return true;
    return account.stored?.allowManualDelete !== false;
}

/**
 * Project id from a scan or registration reference.
 * @param project - Raw id or a populated `{ _id }` document.
 */
export function projectIdFromRef(project: string | { _id?: string | null } | null | undefined): string | null {
    if (!project) return null;
    if (typeof project === 'string') {
        const id = project.trim();
        return id || null;
    }
    const id = project._id?.trim();
    return id || null;
}

/**
 * DELETE /v2/document-validations/:id/files
 * @param apiUrl - API origin, without a trailing slash.
 * @param id - Document validation id.
 * @throws Error when `id` is blank. No request should be sent.
 */
export function documentValidationFilesUrl(apiUrl: string, id: string): string {
    return `${trimApiUrl(apiUrl)}/v2/document-validations/${requiredId(id, 'document validation')}/files`;
}

/**
 * DELETE /v2/app-registrations/:id/data
 * @param apiUrl - API origin, without a trailing slash.
 * @param id - App registration id.
 * @throws Error when `id` is blank. No request should be sent.
 */
export function appRegistrationDataUrl(apiUrl: string, id: string): string {
    return `${trimApiUrl(apiUrl)}/v2/app-registrations/${requiredId(id, 'app registration')}/data`;
}

/** Translation keys for a failed erase. The 403 key is also the disabled-button tooltip. */
export type ManualEraseErrorKey =
    | 'settings.dataRetention.eraseDisabled'
    | 'settings.dataRetention.eraseNotFound'
    | 'settings.dataRetention.eraseUnsupported'
    | 'settings.dataRetention.eraseFailed';

/**
 * Maps a failed erase response to a client-facing translation key.
 * 403 uses the same copy as the disabled button. 409 and
 * `unsupported_retention_type` share one message.
 * @param error - HttpErrorResponse or a plain `{ status, error: { code, message } }`.
 */
export function manualEraseErrorKey(error: unknown): ManualEraseErrorKey {
    const { status, code, message } = readHttpError(error);
    if (status === 403) return 'settings.dataRetention.eraseDisabled';
    if (status === 404) return 'settings.dataRetention.eraseNotFound';
    if (status === 409 || code === UNSUPPORTED_RETENTION_TYPE || message === UNSUPPORTED_RETENTION_TYPE) {
        return 'settings.dataRetention.eraseUnsupported';
    }
    return 'settings.dataRetention.eraseFailed';
}

function trimApiUrl(apiUrl: string): string {
    return apiUrl.replace(/\/+$/, '');
}

function requiredId(id: string, label: string): string {
    const trimmed = id.trim();
    if (!trimmed) throw new Error(`A ${label} id is required.`);
    return encodeURIComponent(trimmed);
}

function readHttpError(error: unknown): { status?: number; code?: string; message?: string } {
    if (!error || typeof error !== 'object') return {};
    const record = error as { status?: unknown; error?: unknown; code?: unknown; message?: unknown };
    const status = typeof record.status === 'number' ? record.status : undefined;
    const body = record.error;
    if (typeof body === 'string') return { status, message: body };
    if (body && typeof body === 'object') {
        const nested = body as { code?: unknown; message?: unknown };
        return {
            status,
            code: typeof nested.code === 'string' ? nested.code : undefined,
            message: typeof nested.message === 'string' ? nested.message : undefined,
        };
    }
    return {
        status,
        code: typeof record.code === 'string' ? record.code : undefined,
        message: typeof record.message === 'string' ? record.message : undefined,
    };
}
