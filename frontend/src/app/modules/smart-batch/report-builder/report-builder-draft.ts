import { ReportSection } from '../smart-report.service';

const STORAGE_KEY = 'smart-batch.report-builder.sections-draft';

type BuilderSectionsDraft = {
    templateId: string;
    sections: ReportSection[];
};

const isDraft = (value: unknown): value is BuilderSectionsDraft => {
    if (!value || typeof value !== 'object') return false;
    const draft = value as BuilderSectionsDraft;
    return typeof draft.templateId === 'string' && Array.isArray(draft.sections);
};

export const readBuilderSectionsDraft = (templateId: string): ReportSection[] | null => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed: unknown = JSON.parse(raw);
        if (!isDraft(parsed) || parsed.templateId !== templateId) return null;
        return parsed.sections;
    } catch {
        return null;
    }
};

export const writeBuilderSectionsDraft = (templateId: string, sections: ReportSection[]): void => {
    try {
        const payload: BuilderSectionsDraft = { templateId, sections };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
        /* quota / private mode */
    }
};

export const clearBuilderSectionsDraft = (): void => {
    try {
        sessionStorage.removeItem(STORAGE_KEY);
    } catch {
        /* ignore */
    }
};
