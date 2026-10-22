import type { PlateReportChannel } from './plate-report.validation';

const STORAGE_KEY = 'verifik.plateReport.draft';
const MAX_AGE_MS = 24 * 60 * 60 * 1000;

export interface PlateReportDraft {
    plate: string;
    name?: string;
    channel: PlateReportChannel;
    contact: string;
    phone?: string;
    countryCode?: string;
    configId?: string;
    batchId?: string;
    templateId?: string;
    paid?: boolean;
    /** Bold order reference while waiting for PSE / webhook settlement. */
    boldOrderId?: string;
    /** Set when the user left for the existing credits checkout. */
    resume?: 'after-payment';
    savedAt: number;
}

export const readPlateReportDraft = (): PlateReportDraft | null => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const draft = JSON.parse(raw) as PlateReportDraft;
        if (!draft?.plate || !draft.savedAt || Date.now() - draft.savedAt > MAX_AGE_MS) {
            sessionStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return draft;
    } catch {
        return null;
    }
};

export const hasPlateReportDraft = (): boolean => readPlateReportDraft() != null;

export const writePlateReportDraft = (draft: Omit<PlateReportDraft, 'savedAt'>): void => {
    const next: PlateReportDraft = { ...draft, savedAt: Date.now() };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
};

export const clearPlateReportDraft = (): void => {
    sessionStorage.removeItem(STORAGE_KEY);
};

const SAVED_KEY = 'verifik.plateReport.saved';
const SAVED_LIMIT = 20;

/** A report that was already generated (and paid) for a plate. */
export interface PlateReportSaved {
    plate: string;
    reportId: string;
    templateName?: string;
    rowIndex: number;
    createdAt: string;
}

const readSavedMap = (): Record<string, PlateReportSaved> => {
    try {
        const raw = localStorage.getItem(SAVED_KEY);
        const parsed = raw ? (JSON.parse(raw) as Record<string, PlateReportSaved>) : {};

        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        return {};
    }
};

/**
 * Local copy of the report reference. The account (vehicle metadata) is the source of truth;
 * this only covers the case where saving it on the account failed.
 */
export const readSavedPlateReport = (plate: string): PlateReportSaved | null => {
    const entry = readSavedMap()[plate];

    return entry?.reportId && typeof entry.rowIndex === 'number' ? entry : null;
};

export const writeSavedPlateReport = (entry: PlateReportSaved): void => {
    try {
        const next = { ...readSavedMap(), [entry.plate]: entry };
        const newest = Object.values(next)
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .slice(0, SAVED_LIMIT);

        localStorage.setItem(SAVED_KEY, JSON.stringify(Object.fromEntries(newest.map((item) => [item.plate, item]))));
    } catch {
        // Storage can be unavailable; the account copy still holds the report.
    }
};

export const clearSavedPlateReport = (plate: string): void => {
    try {
        const { [plate]: _removed, ...rest } = readSavedMap();

        localStorage.setItem(SAVED_KEY, JSON.stringify(rest));
    } catch {
        // Nothing to clean up when storage is unavailable.
    }
};
