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
        case 'CHILD_SPAWNED':
            return 'call_split';
        case 'DISPATCHED':
            return 'send';
        case 'OPENED':
            return 'visibility';
        case 'OTP_SENT':
            return 'sms';
        case 'OTP_VERIFIED':
            return 'mark_email_read';
        case 'IDENTIFIER_SUBMITTED':
            return 'alternate_email';
        case 'ROUTED':
            return 'alt_route';
        case 'IN_PROGRESS':
            return 'hourglass_top';
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
        case 'OTP_VERIFIED':
            return 'bg-emerald-600 text-white dark:bg-emerald-500';
        case 'CHILD_SPAWNED':
            return 'bg-indigo-600 text-white dark:bg-indigo-500';
        case 'OPENED':
        case 'OTP_SENT':
        case 'ROUTED':
        case 'IN_PROGRESS':
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

export const ACTIVE_AUTO_REFRESH_STATES: ReadonlySet<string> = new Set([
    'CREATED',
    'OPENED',
    'ROUTED',
    'IN_PROGRESS',
]);

export const TERMINAL_SESSION_STATES: ReadonlySet<string> = new Set([
    'COMPLETED',
    'FAILED',
    'EXPIRED',
    'REVOKED',
]);

export function isActiveAutoRefreshState(state?: string): boolean {
    return Boolean(state && ACTIVE_AUTO_REFRESH_STATES.has(state));
}

export function isTerminalSessionState(state?: string): boolean {
    return Boolean(state && TERMINAL_SESSION_STATES.has(state));
}

/**
 * Escapes a single CSV cell per RFC 4180 and mitigates CSV formula injection
 * by prefixing leading `=`, `+`, `-`, `@` characters with a single quote.
 */
export function escapeCsvCell(value: unknown): string {
    const raw = value === null || value === undefined ? '' : String(value);
    const safe = /^[=+\-@]/.test(raw) ? `'${raw}` : raw;
    if (/[",\r\n]/.test(safe)) {
        return `"${safe.replace(/"/g, '""')}"`;
    }
    return safe;
}

export function buildSessionsCsv(
    sessions: SmartLinkSessionRecord[],
    openLinkLabel = 'Open link'
): string {
    const headers = [
        'shortCode',
        'state',
        'target',
        'email',
        'phone',
        'requireDocument',
        'channel',
        'uses',
        'externalRefId',
        'createdAt',
        'completedAt',
        'notes',
    ];

    const lines = [headers.join(',')];
    for (const s of sessions || []) {
        const ident = s.outcome?.identity;
        const email = ident?.email || s.prefill?.email || '';
        const rawPhone = ident?.phone || s.prefill?.phone || '';
        const rawCountry = ident?.countryCode || s.prefill?.countryCode || '';
        const phone = rawPhone
            ? rawPhone.startsWith('+') || !rawCountry
                ? rawPhone
                : `${rawCountry}${rawPhone}`
            : '';
        const uses = `${s.useCount || 0}/${s.maxUses === 0 ? 'unlimited' : (s.maxUses ?? 1)}`;
        const rowValues = [
            s.shortCode || '',
            s.state || '',
            resolveSessionTargetLabel(s, openLinkLabel),
            email,
            phone,
            s.requireDocument ? 'true' : 'false',
            s.createdByChannel || 'api',
            uses,
            s.externalRefId || '',
            s.createdAt || '',
            s.completedAt || '',
            s.notes || '',
        ];
        lines.push(rowValues.map((v) => escapeCsvCell(v)).join(','));
    }

    return lines.join('\r\n');
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

export interface TimelineMetaItem {
    key: string;
    labelKey?: string;
    fallbackLabel: string;
    valueKey?: string;
    rawValue: string;
    isMono?: boolean;
}

export interface TimelineSummaryDescriptor {
    key: string;
    params?: Record<string, string | number>;
    fallback: string;
}

const HIDDEN_TIMELINE_META_KEYS: ReadonlySet<string> = new Set([
    'targetProjectId',
    'targetRoute',
    'appRegistrationId',
    'appLoginId',
    'businessRegistrationId',
    'parentSessionId',
    'childSessionId',
    'registrationToken',
    'statusToken',
]);

const KNOWN_TIMELINE_META_LABELS: ReadonlySet<string> = new Set([
    'resolvedMode',
    'verificationAction',
    'hasExistingAccount',
    'requireDocument',
    'via',
    'channel',
    'recipient',
    'status',
    'expiresAt',
    'outcomeType',
    'confirmationCode',
    'livenessScore',
    'compareScore',
    'code',
    'changedFields',
    'shortCode',
    'email',
    'phone',
    'identifier',
    'openCount',
    'errorMessage',
]);

const KNOWN_TIMELINE_META_VALUES: ReadonlySet<string> = new Set([
    'personal',
    'business',
    'humanId',
    'access',
    'enroll',
    'face_liveness',
    'reverify',
    'human_id',
    'smart_access',
    'signed_link',
    'public_slug',
    'email',
    'sms',
    'whatsapp',
    'sent',
    'failed',
    'kyc',
    'kyb',
    'true',
    'false',
]);

const MONO_TIMELINE_META_KEYS: ReadonlySet<string> = new Set([
    'confirmationCode',
    'shortCode',
    'code',
]);

function humanizeCamelKey(key: string): string {
    return key
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/^./, (c) => c.toUpperCase());
}

export function formatTimelineMetaEntries(ev: SmartLinkInteractionEvent): TimelineMetaItem[] {
    const meta = ev?.meta;
    if (!meta || typeof meta !== 'object') return [];

    const items: TimelineMetaItem[] = [];
    for (const [key, raw] of Object.entries(meta)) {
        if (raw === undefined || raw === null || raw === '') continue;
        if (HIDDEN_TIMELINE_META_KEYS.has(key)) continue;
        if (ev.type === 'IDENTIFIER_SUBMITTED' && key === 'identifier') continue;
        if (ev.type === 'OPENED' && key === 'openCount') continue;

        const labelKey = KNOWN_TIMELINE_META_LABELS.has(key)
            ? `smartLinks.timeline.metaLabels.${key}`
            : undefined;
        const fallbackLabel = humanizeCamelKey(key);

        if (key === 'expiresAt' && typeof raw === 'string') {
            items.push({
                key,
                labelKey,
                fallbackLabel,
                rawValue: formatSessionDate(raw),
            });
            continue;
        }

        if ((key === 'livenessScore' || key === 'compareScore') && typeof raw === 'number' && Number.isFinite(raw)) {
            const pct = raw <= 1 ? Math.round(raw * 100) : Math.round(raw);
            items.push({
                key,
                labelKey,
                fallbackLabel,
                rawValue: `${pct}%`,
            });
            continue;
        }

        if (key === 'changedFields' && Array.isArray(raw)) {
            items.push({
                key,
                labelKey,
                fallbackLabel,
                rawValue: raw.map((item) => humanizeCamelKey(String(item))).join(', '),
            });
            continue;
        }

        const strVal = typeof raw === 'object' ? JSON.stringify(raw) : String(raw);
        const valueKey = KNOWN_TIMELINE_META_VALUES.has(strVal)
            ? `smartLinks.timeline.metaValues.${strVal}`
            : undefined;

        items.push({
            key,
            labelKey,
            fallbackLabel,
            valueKey,
            rawValue: strVal,
            isMono: MONO_TIMELINE_META_KEYS.has(key),
        });
    }

    return items.slice(0, 8);
}

export function resolveTimelineSummaryDescriptor(ev: SmartLinkInteractionEvent): TimelineSummaryDescriptor {
    const meta = (ev?.meta || {}) as Record<string, unknown>;
    const fallback = ev?.summary || '';

    switch (ev.type) {
        case 'CREATED': {
            const code = typeof meta['shortCode'] === 'string' ? meta['shortCode'] : '';
            if (ev.actor === 'public_slug') {
                return { key: 'smartLinks.timeline.summaries.CREATED_public_slug', fallback };
            }
            return code
                ? { key: 'smartLinks.timeline.summaries.CREATED_code', params: { code }, fallback }
                : { key: 'smartLinks.timeline.summaries.CREATED', fallback };
        }
        case 'CHILD_SPAWNED':
            return { key: 'smartLinks.timeline.summaries.CHILD_SPAWNED', fallback };
        case 'REISSUED':
            return { key: 'smartLinks.timeline.summaries.REISSUED', fallback };
        case 'OPENED': {
            const count = Number(meta['openCount']);
            return Number.isFinite(count) && count > 0
                ? { key: 'smartLinks.timeline.summaries.OPENED_count', params: { count }, fallback }
                : { key: 'smartLinks.timeline.summaries.OPENED', fallback };
        }
        case 'OTP_SENT': {
            const channel = typeof meta['channel'] === 'string' ? meta['channel'] : '';
            return channel
                ? { key: 'smartLinks.timeline.summaries.OTP_SENT_channel', params: { channel }, fallback }
                : { key: 'smartLinks.timeline.summaries.OTP_SENT', fallback };
        }
        case 'OTP_VERIFIED':
            return { key: 'smartLinks.timeline.summaries.OTP_VERIFIED', fallback };
        case 'IDENTIFIER_SUBMITTED': {
            const identifier =
                typeof meta['identifier'] === 'string' && meta['identifier']
                    ? meta['identifier']
                    : fallback.match(/\(([^)]+)\)/)?.[1] || '';
            return identifier
                ? {
                      key: 'smartLinks.timeline.summaries.IDENTIFIER_SUBMITTED_value',
                      params: { identifier },
                      fallback,
                  }
                : { key: 'smartLinks.timeline.summaries.IDENTIFIER_SUBMITTED', fallback };
        }
        case 'ROUTED': {
            const action = String(meta['verificationAction'] || '').trim();
            const mode = String(meta['resolvedMode'] || '').trim();
            if (action === 'enroll') return { key: 'smartLinks.timeline.summaries.ROUTED_enroll', fallback };
            if (action === 'face_liveness') return { key: 'smartLinks.timeline.summaries.ROUTED_face_liveness', fallback };
            if (action === 'reverify') return { key: 'smartLinks.timeline.summaries.ROUTED_reverify', fallback };
            if (action === 'human_id' || mode === 'humanId') {
                return { key: 'smartLinks.timeline.summaries.ROUTED_human_id', fallback };
            }
            if (action === 'business' || mode === 'business') {
                return { key: 'smartLinks.timeline.summaries.ROUTED_business', fallback };
            }
            if (action === 'access' || mode === 'access') {
                return { key: 'smartLinks.timeline.summaries.ROUTED_access', fallback };
            }
            return { key: 'smartLinks.timeline.summaries.ROUTED', fallback };
        }
        case 'IN_PROGRESS':
            return { key: 'smartLinks.timeline.summaries.IN_PROGRESS', fallback };
        case 'DISPATCHED': {
            const recipient = typeof meta['recipient'] === 'string' ? meta['recipient'] : '';
            const channel = typeof meta['channel'] === 'string' ? meta['channel'] : '';
            return recipient && channel
                ? {
                      key: 'smartLinks.timeline.summaries.DISPATCHED_details',
                      params: { channel, recipient },
                      fallback,
                  }
                : { key: 'smartLinks.timeline.summaries.DISPATCHED', fallback };
        }
        case 'UPDATED':
            return { key: 'smartLinks.timeline.summaries.UPDATED', fallback };
        case 'COMPLETED': {
            const code = typeof meta['confirmationCode'] === 'string' ? meta['confirmationCode'] : '';
            return code
                ? { key: 'smartLinks.timeline.summaries.COMPLETED_code', params: { code }, fallback }
                : { key: 'smartLinks.timeline.summaries.COMPLETED', fallback };
        }
        case 'TOKEN_EXCHANGED':
            return { key: 'smartLinks.timeline.summaries.TOKEN_EXCHANGED', fallback };
        case 'FAILED': {
            const code = typeof meta['code'] === 'string' ? meta['code'] : '';
            return code
                ? { key: 'smartLinks.timeline.summaries.FAILED_code', params: { code }, fallback }
                : { key: 'smartLinks.timeline.summaries.FAILED', fallback };
        }
        case 'REVOKED':
            return { key: 'smartLinks.timeline.summaries.REVOKED', fallback };
        case 'EXPIRED':
            return { key: 'smartLinks.timeline.summaries.EXPIRED', fallback };
        default:
            return { key: '', fallback };
    }
}
