export const AUDIT_IMAGE_OMITTED_PLACEHOLDER = '[image omitted — see preview]';

const IMAGE_KEYS = new Set(['screenshotbase64', 'screenshot']);

/**
 * True when a JSON key is an audit / consultation screenshot payload.
 */
export const isAuditImageKey = (key: string): boolean => {
	const normalized = key.toLowerCase();

	return IMAGE_KEYS.has(normalized) || normalized.endsWith('screenshotbase64');
};

/**
 * True when a string looks like a PNG/JPEG/GIF/WebP payload (raw or data URL).
 */
export const looksLikeImageBase64 = (value: unknown): value is string => {
	if (typeof value !== 'string') return false;

	const trimmed = value.trim();

	if (!trimmed) return false;

	if (trimmed.toLowerCase().startsWith('data:image/')) return true;

	return /^(iVBOR|\/9j\/|R0lGOD|UklGR)/.test(trimmed);
};

/**
 * Normalize raw or data-URL image bytes into a browser-ready data URL.
 */
export const normalizeImageDataUrl = (raw: string): string => {
	const trimmed = raw.trim();

	if (trimmed.toLowerCase().startsWith('data:image/')) return trimmed;

	return `data:image/png;base64,${trimmed}`;
};

/**
 * Tiny sandbox placeholders (1×1 PNG) are not useful as a preview.
 */
export const isTinyAuditPlaceholder = (raw: string): boolean => {
	const payload = raw.includes('base64,') ? raw.slice(raw.indexOf('base64,') + 7) : raw;

	return payload.replace(/\s+/g, '').length < 200;
};

/**
 * Walk nested objects/arrays and return the first audit screenshot string.
 */
export const extractFirstAuditImageDeep = (value: unknown): string | null => {
	if (value === null || typeof value !== 'object') return null;

	if (Array.isArray(value)) {
		for (const item of value) {
			const found = extractFirstAuditImageDeep(item);

			if (found) return found;
		}

		return null;
	}

	const record = value as Record<string, unknown>;

	for (const key of Object.keys(record)) {
		const nested = record[key];

		if (typeof nested === 'string' && isAuditImageKey(key) && looksLikeImageBase64(nested)) {
			return nested;
		}

		if (nested !== null && typeof nested === 'object') {
			const found = extractFirstAuditImageDeep(nested);

			if (found) return found;
		}
	}

	return null;
};

/**
 * Replace screenshot payloads with a short placeholder for on-screen JSON.
 */
export const redactAuditImages = (value: unknown): unknown => {
	if (Array.isArray(value)) return value.map((item) => redactAuditImages(item));

	if (value === null || typeof value !== 'object') return value;

	const record = value as Record<string, unknown>;
	const next: Record<string, unknown> = {};

	for (const key of Object.keys(record)) {
		const nested = record[key];

		if (typeof nested === 'string' && isAuditImageKey(key) && looksLikeImageBase64(nested)) {
			next[key] = AUDIT_IMAGE_OMITTED_PLACEHOLDER;
			continue;
		}

		next[key] = redactAuditImages(nested);
	}

	return next;
};
