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
