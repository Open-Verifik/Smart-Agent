import { DateTime } from 'luxon';

import type {
    SmartLinkInteractionEvent,
    SmartLinkSessionDetail,
    SmartLinkSessionRecord,
    SmartLinkSessionState,
} from './smart-links.types';

export function resolveSessionTargetLabel(session: SmartLinkSessionRecord, openLinkLabel = 'Open link'): string {
    const id = session.outcome?.identity;
    if (id?.fullName) return id.fullName;
    if (session.prefill?.fullName) return session.prefill.fullName;
    if (id?.email) return id.email;
    if (session.prefill?.email) return session.prefill.email;
    if (id?.phone) return id.phone;
    if (session.prefill?.phone) return session.prefill.phone;
    return openLinkLabel;
}

export function resolveSessionTargetSubLabel(session: SmartLinkSessionRecord): string {
    const id = session.outcome?.identity;
    const primary = resolveSessionTargetLabel(session, '');
    const email = id?.email || session.prefill?.email || '';
    const phone = id?.phone || session.prefill?.phone || '';
    if (email && email !== primary) return email;
    if (phone && phone !== primary) return phone;
    return session.externalRefId || '';
}

export function sessionStatePillClass(state?: SmartLinkSessionState | string): string {
    switch (state) {
        case 'COMPLETED':
            return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300';
        case 'OPENED':
        case 'ROUTED':
        case 'IN_PROGRESS':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-200';
        case 'FAILED':
            return 'bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300';
        case 'REVOKED':
        case 'EXPIRED':
            return 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200';
        case 'CREATED':
        default:
            return 'bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-300';
    }
}

export function interactionIcon(type: SmartLinkInteractionEvent['type']): string {
    switch (type) {
        case 'CREATED':
            return 'add_link';
        case 'DISPATCHED':
            return 'send';
        case 'OPENED':
            return 'visibility';
        case 'IDENTIFIER_SUBMITTED':
            return 'alternate_email';
        case 'ROUTED':
            return 'alt_route';
        case 'UPDATED':
            return 'edit';
        case 'REISSUED':
            return 'autorenew';
        case 'COMPLETED':
            return 'verified';
        case 'TOKEN_EXCHANGED':
            return 'key';
        case 'FAILED':
            return 'error_outline';
        case 'REVOKED':
            return 'block';
        case 'EXPIRED':
            return 'schedule';
        default:
            return 'radio_button_checked';
    }
}

export function interactionBadgeClass(type: SmartLinkInteractionEvent['type']): string {
    switch (type) {
        case 'COMPLETED':
        case 'TOKEN_EXCHANGED':
            return 'bg-emerald-600 text-white dark:bg-emerald-500';
        case 'OPENED':
        case 'ROUTED':
        case 'IDENTIFIER_SUBMITTED':
            return 'bg-blue-600 text-white dark:bg-blue-500';
        case 'FAILED':
            return 'bg-red-600 text-white dark:bg-red-500';
        case 'REVOKED':
        case 'EXPIRED':
            return 'bg-amber-600 text-white dark:bg-amber-500';
        case 'DISPATCHED':
        case 'UPDATED':
        case 'REISSUED':
        case 'CREATED':
        default:
            return 'bg-stone-900 text-white dark:bg-gray-700 dark:text-white';
    }
}

export function extractLinkedSelfieDataUrl(detail: SmartLinkSessionDetail | null): string {
    if (!detail) return '';
    const candidates = [
        detail.linkedRegistration?.face,
        detail.linkedRegistration?.biometricValidation?.face,
        detail.linkedLogin?.face,
        detail.linkedLogin?.biometricValidation?.face,
    ];
    for (const img of candidates) {
        if (!img) continue;
        if (img.base64) {
            return img.base64.startsWith('data:') ? img.base64 : `data:image/jpeg;base64,${img.base64}`;
        }
        if (img.url && /^https?:\/\//i.test(img.url)) {
            return img.url;
        }
    }
    return '';
}

export function isLinkedSelfieSuppressed(detail: SmartLinkSessionDetail | null): boolean {
    if (!detail || extractLinkedSelfieDataUrl(detail)) return false;
    const candidates = [
        detail.linkedRegistration?.face,
        detail.linkedRegistration?.biometricValidation?.face,
        detail.linkedRegistration?.documentValidation,
        detail.linkedLogin?.face,
        detail.linkedLogin?.biometricValidation?.face,
    ];
    return candidates.some((c) => c?.retention?.mode === 'none' || Boolean(c?.retention?.purgedAt));
}

export function formatSessionDate(date?: string, withSeconds = false): string {
    if (!date) return '-';
    const parsed = DateTime.fromISO(date);
    if (!parsed.isValid) return date;
    return parsed.toFormat(withSeconds ? 'MMM dd, yyyy HH:mm:ss' : 'MMM dd, yyyy HH:mm');
}

export function decodeJwtClaimsSafe(token?: string): Record<string, unknown> | null {
    if (!token || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length < 2) return null;
    try {
        const b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
        const json = decodeURIComponent(
            atob(b64)
                .split('')
                .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join('')
        );
        return JSON.parse(json) as Record<string, unknown>;
    } catch {
        return null;
    }
}
