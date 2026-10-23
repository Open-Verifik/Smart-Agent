/**
 * Per-row credit charge for client history.
 *
 * `/v2/api-requests` stores the endpoint list price in `cost` even when
 * verifik-backend skips the credit deduction. Balances and usage totals come
 * from the credit ledger and are left alone. This helper is only for the
 * amount shown on a single row.
 *
 * The list payload does not include a charged flag today (the selected columns
 * are status, cost, and dynamic-pricing metadata such as `billingAdjustmentType`).
 * When a row or its stored response does include one (`charged`,
 * `credits.charged`, `creditsCharged`, or `billing.chargedCredits`), that value
 * wins over the endpoint list below.
 *
 * Otherwise a 2xx/3xx row was charged, a pending row was not, and any other
 * non-2xx row was not — except the endpoints that bill a not-found 404.
 */

export const CEDULA_CHARGE_ON_NOT_FOUND_PATHS = ['/v2/co/cedula'] as const;

/** Used only when the row has no endpoint path. */
export const CEDULA_CHARGE_ON_NOT_FOUND_CODES = ['colombia_api_identity_lookup'] as const;

/** Colombia RUNT routes that deduct credits on HTTP 404 with code NotFound. */
export const RUNT_CHARGE_ON_NOT_FOUND_PATHS = [
    '/v2/co/runt/conductor',
    '/v3/co/runt/conductor',
    '/v2/co/runt/vehiculo',
    '/v2/co/runt/vehiculo-completo',
    '/v2/co/runt/vehiculo-soat',
    '/v2/co/runt/vehicle-by-plate',
    '/v2/co/runt/vehicle-by-vin',
    '/v2/co/runt/vehicle-by-plate-simplified',
    '/v2/co/runt/vehicle-by-plate-only',
] as const;

export const RUNT_CHARGE_ON_NOT_FOUND_CODES = [
    'colombia_api_driver',
    'colombia_api_driver_basic',
    'colombia_api_vehicle',
    'colombia_api_vehicle_complete',
    'colombia_api_vehicle_soat',
    'colombia_api_vehicle_complete_by_plate',
    'colombia_api_vehicle_complete_by_vin',
    'colombia_api_vehicle_complete_by_plate_simplified',
    'colombia_api_runt_vehicle_by_plate_only',
] as const;

/** Any HTTP 404 on afiliaciones is billed, including a non-NotFound body. */
export const AFILIACIONES_CHARGE_ON_404_PATHS = ['/v2/co/afiliaciones'] as const;

export const AFILIACIONES_CHARGE_ON_404_CODES = ['colombia_api_affiliations'] as const;

export const SIBGA_CHARGE_ON_NOT_FOUND_PATHS = ['/v2/co/sibga/valuation'] as const;

export const SIBGA_CHARGE_ON_NOT_FOUND_CODES = ['colombia_api_vehicle_valuation_sibga'] as const;

export const HISTORY_NOT_CHARGED_PENDING_EXPLANATION_KEY = 'history.notChargedExplanation';
export const HISTORY_NOT_CHARGED_FAILED_EXPLANATION_KEY = 'history.notChargedFailedExplanation';

export interface HistoryChargeRow {
    historyStatus?: string | null;
    status?: string | null;
    statusCode?: number | string | null;
    endpoint?: string | null;
    code?: string | null;
    method?: string | null;
    charged?: boolean | null;
    creditsCharged?: number | string | null;
    credits?: { charged?: boolean | null; amount?: number | string | null } | null;
    billing?: { chargedCredits?: number | string | null } | null;
    apiResponse?: unknown;
    response?: unknown;
    paymentTx?: string | null;
    paymentAmount?: string | number | null;
}

type NotFoundKind = 'afiliaciones' | 'cedula' | 'runt' | 'sibga';

interface ErrorSignals {
    codes: string[];
    texts: string[];
}

const NOT_FOUND_CODES = new Set([
    'notfound',
    'not_found',
    'document_not_found',
    'record_not_found',
]);

/**
 * True when the client was not debited for this request.
 */
export const isHistoryRequestNotCharged = (row?: HistoryChargeRow | null): boolean =>
    !isHistoryRequestCharged(row);

/**
 * True when credits (or an on-chain payment) were taken for this request.
 */
export const isHistoryRequestCharged = (row?: HistoryChargeRow | null): boolean => {
    if (!row) return false;

    const explicit = readExplicitCharge(row);
    if (explicit != null) return explicit;

    // x402 rows record a chain payment. Their amount is not the credit list price.
    if (hasOnChainPayment(row)) return true;

    const statusCode = parseStatusCode(row.statusCode);
    if (isPendingRow(row) && (statusCode == null || statusCode < 400)) return false;
    if (statusCode != null && statusCode >= 400) return isBillableNotFound(row, statusCode);
    if (statusCode != null && statusCode >= 200 && statusCode < 400) return true;
    if (isFailedRow(row)) return false;
    if (isSuccessRow(row)) return true;
    return false;
};

/**
 * Copy under the "Not charged" label. Pending keeps the stored-response wording;
 * a failed call uses the failure wording.
 */
export const historyNotChargedExplanationKey = (row?: HistoryChargeRow | null): string =>
    isPendingRow(row)
        ? HISTORY_NOT_CHARGED_PENDING_EXPLANATION_KEY
        : HISTORY_NOT_CHARGED_FAILED_EXPLANATION_KEY;

/**
 * Pathname used to match the charge-on-404 list. Accepts a full URL, a query
 * string, and a missing leading slash, then keeps the `/v2` or `/v3` suffix.
 */
export const canonicalHistoryEndpoint = (endpoint?: string | null): string => {
    if (!endpoint || typeof endpoint !== 'string') return '';
    let value = endpoint.trim();
    if (!value) return '';
    const queryAt = value.search(/[?#]/);
    if (queryAt >= 0) value = value.slice(0, queryAt);
    if (/^https?:\/\//i.test(value)) {
        try {
            value = new URL(value).pathname;
        } catch {
            // Keep the raw string when it is not a valid URL.
        }
    }
    value = value.replace(/\\/g, '/');
    if (!value.startsWith('/')) value = `/${value}`;
    value = value
        .replace(/\/{2,}/g, '/')
        .replace(/\/+$/, '')
        .toLowerCase();
    const versioned = value.match(/\/v[23]\/.+$/);
    return versioned ? versioned[0] : value;
};

const isBillableNotFound = (row: HistoryChargeRow, statusCode: number): boolean => {
    if (statusCode !== 404) return false;
    const kind = notFoundKind(row);
    if (!kind) return false;
    if (kind === 'afiliaciones') return true;

    const verdict = notFoundVerdict(readErrorSignals(row));
    // List rows omit the response body. A 404 on these routes is the billed
    // registry miss unless the stored body shows a different error.
    return verdict !== 'other';
};

const notFoundKind = (row: HistoryChargeRow): NotFoundKind | null => {
    const path = canonicalHistoryEndpoint(row.endpoint);
    if (path) {
        if (matchesPath(path, CEDULA_CHARGE_ON_NOT_FOUND_PATHS)) return 'cedula';
        if (matchesPath(path, RUNT_CHARGE_ON_NOT_FOUND_PATHS)) return 'runt';
        if (matchesPath(path, AFILIACIONES_CHARGE_ON_404_PATHS)) return 'afiliaciones';
        if (matchesPath(path, SIBGA_CHARGE_ON_NOT_FOUND_PATHS)) return 'sibga';
        return null;
    }

    const code = (row.code || '').trim().toLowerCase();
    if (!code) return null;
    if (CEDULA_CHARGE_ON_NOT_FOUND_CODES.some((item) => item === code)) return 'cedula';
    if (RUNT_CHARGE_ON_NOT_FOUND_CODES.some((item) => item === code)) return 'runt';
    if (AFILIACIONES_CHARGE_ON_404_CODES.some((item) => item === code)) return 'afiliaciones';
    if (SIBGA_CHARGE_ON_NOT_FOUND_CODES.some((item) => item === code)) return 'sibga';
    return null;
};

const matchesPath = (path: string, paths: readonly string[]): boolean =>
    paths.some((item) => item === path);

const notFoundVerdict = (signals: ErrorSignals | null): 'not-found' | 'other' | 'unknown' => {
    if (!signals) return 'unknown';
    if (signals.codes.some(isNotFoundCode)) return 'not-found';
    if (signals.texts.some((text) => isCedulaNoExisteText(text) || isRegistryNotFoundText(text)))
        return 'not-found';
    if (signals.codes.length > 0 || signals.texts.length > 0) return 'other';
    return 'unknown';
};

const readErrorSignals = (row: HistoryChargeRow): ErrorSignals | null => {
    const sources = [row.apiResponse, row.response];
    const codes: string[] = [];
    const texts: string[] = [];
    let saw = false;
    sources.forEach((source) => {
        const payload = parseMaybeJson(source);
        if (payload == null || payload === '') return;
        saw = true;
        collectErrorSignals(payload, codes, texts, 0);
    });
    return saw ? { codes, texts } : null;
};

const parseMaybeJson = (value: unknown): unknown => {
    if (typeof value !== 'string') return value;
    const trimmed = value.trim();
    if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) return value;
    try {
        return JSON.parse(trimmed);
    } catch {
        return value;
    }
};

const collectErrorSignals = (
    value: unknown,
    codes: string[],
    texts: string[],
    depth: number
): void => {
    if (depth > 4 || value == null) return;
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed) texts.push(trimmed);
        return;
    }
    if (typeof value !== 'object') return;
    if (Array.isArray(value)) {
        value.slice(0, 8).forEach((item) => collectErrorSignals(item, codes, texts, depth + 1));
        return;
    }

    const record = value as Record<string, unknown>;
    ['code', 'errorCode', 'error_code'].forEach((key) => {
        if (typeof record[key] === 'string' && record[key]) codes.push(record[key] as string);
    });
    ['message', 'documentStatus', 'errorMessage'].forEach((key) => {
        if (typeof record[key] === 'string' && record[key]) texts.push(record[key] as string);
    });
    ['data', 'error', 'body', 'response'].forEach((key) => {
        const nested = record[key];
        if (nested && typeof nested === 'object')
            collectErrorSignals(nested, codes, texts, depth + 1);
    });
};

const isNotFoundCode = (code: string): boolean => NOT_FOUND_CODES.has(normalizeCode(code));

const normalizeCode = (code: string): string =>
    code
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, '_');

const foldText = (value: string): string =>
    value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/** Registry phrase for a Colombian cédula that is not on file. */
const isCedulaNoExisteText = (value: string): boolean =>
    /cedula\s+no\s+existe/.test(foldText(value));

const isRegistryNotFoundText = (value: string): boolean => {
    const folded = foldText(value);
    return (
        folded.includes('record not found') ||
        folded.includes('document not found') ||
        folded.includes('documento no encontrado') ||
        folded.includes('registro no encontrado')
    );
};

const readExplicitCharge = (row: HistoryChargeRow): boolean | null => {
    const onRow = readChargeFields(row);
    if (onRow != null) return onRow;
    const response = parseMaybeJson(row.apiResponse);
    if (response && typeof response === 'object')
        return readChargeFields(response as HistoryChargeRow);
    return null;
};

const readChargeFields = (source: object): boolean | null => {
    const record = source as Record<string, unknown>;
    if (typeof record['charged'] === 'boolean') return record['charged'];

    const credits = record['credits'];
    if (
        credits &&
        typeof credits === 'object' &&
        typeof (credits as { charged?: unknown }).charged === 'boolean'
    ) {
        return (credits as { charged: boolean }).charged;
    }

    const creditsCharged = parseNumeric(record['creditsCharged']);
    if (creditsCharged != null) return creditsCharged > 0;

    const billing = record['billing'];
    if (billing && typeof billing === 'object') {
        const chargedCredits = parseNumeric(
            (billing as { chargedCredits?: unknown }).chargedCredits
        );
        if (chargedCredits != null) return chargedCredits > 0;
    }

    return null;
};

const hasOnChainPayment = (row: HistoryChargeRow): boolean => {
    if (typeof row.paymentTx === 'string' && row.paymentTx.trim()) return true;
    if (typeof row.paymentAmount === 'number') return Number.isFinite(row.paymentAmount);
    return typeof row.paymentAmount === 'string' && row.paymentAmount.trim() !== '';
};

const parseStatusCode = (value: number | string | null | undefined): number | null => {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string' && value.trim() !== '') {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
};

const parseNumeric = (value: unknown): number | null => {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string' && value.trim() !== '') {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
};

const isPendingRow = (row?: HistoryChargeRow | null): boolean => {
    if (!row) return true;
    if (row.historyStatus === 'pending' || row.status === 'queue') return true;
    if (row.historyStatus === 'failed' || row.historyStatus === 'success') return false;
    if (row.status === 'failed' || row.status === 'timed-out' || row.status === 'ok') return false;
    return parseStatusCode(row.statusCode) == null;
};

const isFailedRow = (row: HistoryChargeRow): boolean =>
    row.historyStatus === 'failed' || row.status === 'failed' || row.status === 'timed-out';

const isSuccessRow = (row: HistoryChargeRow): boolean =>
    row.historyStatus === 'success' || row.status === 'ok';
