import { Router } from '@angular/router';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';
import { NotificationCta } from 'app/core/notifications/app-notifications.models';

export interface NotificationCtaOpenDeps {
    router: Router;
    quickChat?: QuickChatService;
}

/**
 * True when the CTA only reopens Smart Agent home / the messages hub.
 */
export const isSelfReferentialSmartAgentCta = (
    url: string | null | undefined,
    currentOrigin = typeof window !== 'undefined' ? window.location.origin : ''
): boolean => {
    const raw = url?.trim();
    if (!raw) return false;

    try {
        const resolved = new URL(raw, currentOrigin || 'https://ai.verifik.co');
        if (currentOrigin && resolved.origin !== currentOrigin) {
            return false;
        }

        const path = resolved.pathname.replace(/\/+$/, '') || '/';
        if (path !== '/' && path !== '/home') {
            return false;
        }

        const keys = [...resolved.searchParams.keys()];
        if (keys.length === 0) return true;
        return keys.every((key) => key === 'openNotifications');
    } catch {
        return false;
    }
};

/**
 * Whether the CTA button should render for an inbox/banner/modal item.
 */
export const shouldShowNotificationCta = (
    cta: NotificationCta | null | undefined,
    currentOrigin = typeof window !== 'undefined' ? window.location.origin : ''
): boolean => {
    const url = cta?.url?.trim();
    if (!url) return false;
    return !isSelfReferentialSmartAgentCta(url, currentOrigin);
};

/**
 * Resolve an in-app path for same-origin or relative CTA URLs.
 */
export const resolveInAppCtaPath = (
    url: string,
    currentOrigin = typeof window !== 'undefined' ? window.location.origin : ''
): string | null => {
    const raw = url.trim();
    if (!raw) return null;

    if (raw.startsWith('/')) {
        return raw;
    }

    try {
        const resolved = new URL(raw);
        if (!currentOrigin || resolved.origin !== currentOrigin) {
            return null;
        }
        return `${resolved.pathname}${resolved.search}${resolved.hash}`;
    } catch {
        return null;
    }
};

/**
 * Open a notification CTA: in-app navigate for same-origin when not forced to a new tab;
 * open notifications hub for self-referential URLs; otherwise window.open.
 */
export const openNotificationCta = (
    cta: NotificationCta | null | undefined,
    deps: NotificationCtaOpenDeps,
    currentOrigin = typeof window !== 'undefined' ? window.location.origin : ''
): void => {
    const url = cta?.url?.trim();
    if (!url) return;

    if (isSelfReferentialSmartAgentCta(url, currentOrigin)) {
        deps.quickChat?.requestOpenPanel({ tab: 'notifications' });
        return;
    }

    const inAppPath = resolveInAppCtaPath(url, currentOrigin);
    const openInNewTab = cta?.openInNewTab !== false;

    if (inAppPath && !openInNewTab) {
        void deps.router.navigateByUrl(inAppPath);
        return;
    }

    if (inAppPath?.includes('openNotifications=1')) {
        deps.quickChat?.requestOpenPanel({ tab: 'notifications' });
        return;
    }

    const targetUrl = inAppPath
        ? `${currentOrigin}${inAppPath}`
        : url;
    window.open(targetUrl, openInNewTab ? '_blank' : '_self', 'noopener');
};
