/**
 * Normalizes `/v2/client-settings` payloads that may return a single doc, an array,
 * or `{ docs: [...] }` (mongoose-string-query list shape).
 *
 * @param response HTTP wrapper `{ data?: unknown }`
 * @returns One client-settings document or null
 */
export const extractClientSettingsPayload = (response: unknown): Record<string, unknown> | null => {
	const raw = (response as { data?: unknown })?.data;
	if (raw == null) return null;
	if (Array.isArray(raw)) return (raw[0] as Record<string, unknown>) ?? null;
	if (typeof raw === 'object' && raw !== null && 'docs' in raw) {
		const docs = (raw as { docs?: unknown[] }).docs;
		if (Array.isArray(docs)) return (docs[0] as Record<string, unknown>) ?? null;
	}
	return raw as Record<string, unknown>;
};

/**
 * Mirrors subscription-plans (2026): payer type + payer block(s) + address object present on `invoiceSettings`.
 */
export const invoiceBillingDetailsComplete = (invoiceSettings: unknown): boolean => {
	const inv = invoiceSettings as {
		type?: string;
		person?: unknown;
		business?: unknown;
		address?: unknown;
	};
	return !!(inv?.type && (inv.person || inv.business) && inv.address);
};
