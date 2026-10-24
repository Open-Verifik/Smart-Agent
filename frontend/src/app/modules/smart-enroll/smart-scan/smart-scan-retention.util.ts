import type { DocumentValidationRetention } from './smart-scan.types';

export interface RetentionBadgeInfo {
    label: string;
    class: string;
    icon: string;
    tooltip: string;
}

export const isPurged = (retention?: DocumentValidationRetention | null): boolean => {
    return Boolean(retention?.purgedAt);
};

export const isNoStorage = (retention?: DocumentValidationRetention | null): boolean => {
    return retention?.mode === 'none' && !retention?.purgedAt;
};

export const isEphemeral = (retention?: DocumentValidationRetention | null): boolean => {
    return retention?.mode === 'ephemeral' && !retention?.purgedAt;
};

export const canDeleteFromStorage = (
    hasUrl: boolean,
    retention?: DocumentValidationRetention | null
): boolean => {
    return Boolean(hasUrl && !retention?.purgedAt);
};

export const getRetentionBadge = (
    retention?: DocumentValidationRetention | null
): RetentionBadgeInfo | null => {
    if (!retention) return null;

    if (isPurged(retention)) {
        return {
            label: 'smartScan.retentionPurged',
            class: 'bg-stone-200/90 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
            icon: 'heroicons_outline:shield-check',
            tooltip: 'smartScan.retentionPurgedTooltip',
        };
    }

    if (isNoStorage(retention)) {
        return {
            label: 'smartScan.retentionNoStorage',
            class: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
            icon: 'heroicons_outline:shield-exclamation',
            tooltip: 'smartScan.retentionNoStorageTooltip',
        };
    }

    if (isEphemeral(retention)) {
        return {
            label: 'smartScan.retentionEphemeral',
            class: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
            icon: 'heroicons_outline:clock',
            tooltip: 'smartScan.retentionEphemeralTooltip',
        };
    }

    return null;
};
