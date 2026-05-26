export const APP_NOTIFICATION_PRODUCT_SCOPE = 'smart_agent' as const;

export type NotificationCategory =
    | 'system'
    | 'maintenance'
    | 'billing'
    | 'legal'
    | 'product'
    | 'security';

export type NotificationPriority = 'low' | 'normal' | 'high' | 'critical';

export type InteractionMode =
    | 'informational'
    | 'seen_required'
    | 'acknowledge'
    | 'accept';

export type DisplaySurface = 'inbox' | 'banner' | 'modal';

export interface NotificationContent {
    title: string;
    body?: string;
    summary?: string;
    icon?: string | null;
}

export interface NotificationLegal {
    documentKey?: string;
    version?: string;
    url?: string;
}

export interface NotificationCta {
    label?: string;
    url?: string;
    openInNewTab?: boolean;
}

export interface ReceiptState {
    status: string;
    firstSeenAt?: string | null;
    lastSeenAt?: string | null;
    acknowledgedAt?: string | null;
    acceptedAt?: string | null;
    dismissedAt?: string | null;
    isBlocking?: boolean;
    isUnread?: boolean;
}

export interface InboxItem {
    notificationId: string;
    category: NotificationCategory;
    priority: NotificationPriority;
    interactionMode: InteractionMode;
    displaySurfaces: DisplaySurface[];
    content: NotificationContent;
    legal?: NotificationLegal;
    cta?: NotificationCta;
    publishedAt?: string;
    expiresAt?: string | null;
    receipt: ReceiptState;
}

export interface InboxPagination {
    page: number;
    perPage: number;
    total: number;
    pages: number;
}

export interface InboxListResponse {
    data: InboxItem[];
    pagination: InboxPagination;
    meta?: { unreadCount?: number };
}

export interface InboxSyncResult {
    synced: number;
    unreadCount: number;
}

export interface AcceptNotificationPayload {
    legalVersion: string;
    accepted: boolean;
}

export interface InboxQueryParams {
    productScope?: string;
    page?: number;
    perPage?: number;
    unreadOnly?: '0' | '1';
    includeUnreadCount?: '0' | '1';
    /** When set (e.g. `inbox`), limits list/count to that display surface. */
    surface?: string;
}
