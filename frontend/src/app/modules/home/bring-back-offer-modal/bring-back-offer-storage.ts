/** Persist dismiss decisions for the invasive bring-back modal while an offer is active. */

export type BringBackModalDismissReason = 'maybe_later' | 'accepted' | 'view_plans';

/**
 * @param expiresAt Offer expiry from session
 * @returns ISO string suitable for a localStorage key segment
 */
export const normalizeBringBackExpiresAt = (expiresAt: string | Date): string => {
	const date = expiresAt instanceof Date ? expiresAt : new Date(expiresAt);

	if (!Number.isFinite(date.getTime())) {
		return String(expiresAt);
	}

	return date.toISOString();
};

/**
 * @param clientId Session user id
 * @param expiresAt Offer expiry
 */
export const bringBackModalDismissKey = (clientId: string, expiresAt: string | Date): string => {
	return `bringBackOfferDismissed:${clientId}:${normalizeBringBackExpiresAt(expiresAt)}`;
};

/**
 * @param clientId Session user id
 * @param expiresAt Offer expiry
 */
export const isBringBackModalDismissed = (clientId: string, expiresAt: string | Date): boolean => {
	if (!clientId || !expiresAt || typeof localStorage === 'undefined') {
		return false;
	}

	return Boolean(localStorage.getItem(bringBackModalDismissKey(clientId, expiresAt)));
};

/**
 * @param clientId Session user id
 * @param expiresAt Offer expiry
 * @param reason Why the modal was closed
 */
export const dismissBringBackModal = (
	clientId: string,
	expiresAt: string | Date,
	reason: BringBackModalDismissReason,
): void => {
	if (!clientId || !expiresAt || typeof localStorage === 'undefined') {
		return;
	}

	localStorage.setItem(bringBackModalDismissKey(clientId, expiresAt), reason);
};
