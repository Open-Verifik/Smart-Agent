import { ReportHeaderLogo, ReportSection, ReportSheetImage } from '../smart-report.service';
import { GuideTemplateChoice } from './visita-guide-state.service';

const STORAGE_KEY = 'smart-batch.visita-guide.scratch-draft';

export type ScratchLayoutDraft = {
    sections: ReportSection[];
    reportTitle: string;
    primaryColor: string;
    identityColor: string;
    pageBackgroundColor: string;
    logoDataUrl: string | null;
    logoX: number;
    logoY: number;
    logoWidth: number;
    logoHeight: number;
    logoRotation: number;
    sheetImages: ReportSheetImage[];
    headerLogos?: ReportHeaderLogo[];
    legend: string;
    legendPosition?: 'left' | 'center' | 'right';
    termsAndConditions?: string;
    termsPosition?: 'left' | 'center' | 'right';
    watermarkEnabled: boolean;
    watermarkType: 'text' | 'logo';
    watermarkLogo?: string | null;
    watermarkText: string;
    watermarkOpacity: number;
    watermarkPattern: 'single' | 'repeated';
    watermarkX: number;
    watermarkY: number;
    watermarkWidth: number;
    watermarkHeight: number;
    watermarkRotation: number;
    showPageNumbers: boolean;
    pageNumberPosition?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right';
    pageSize?: 'A4' | 'Letter' | 'Legal';
    orientation?: 'portrait' | 'landscape';
    pdfEngine?: 'puppeteer' | 'pdfkit';
    securityEnabled?: boolean;
    securityPassword?: string;
    signatureEnabled?: boolean;
    signatureImage?: string | null;
    signatureX?: number;
    signatureY?: number;
    signatureWidth?: number;
    signatureHeight?: number;
    signaturePage?: number;
    /** Saved template this draft belongs to. Absent on a from-scratch layout. */
    templateId?: string | null;
    templateChoice?: GuideTemplateChoice | null;
};

/** Unsaved layout for one saved template, including shapes added since the last save. */
export const draftMatchesTemplate = (draft: ScratchLayoutDraft | null, templateId: string): boolean =>
    Boolean(draft?.templateId && draft.templateId === templateId && Array.isArray(draft.sections));

/** From-scratch layout, including drafts written before they were tagged with a choice. */
export const draftIsScratch = (draft: ScratchLayoutDraft | null): boolean =>
    Boolean(
        draft?.sections.length &&
            !draft.templateId &&
            draft.templateChoice !== 'mine' &&
            draft.templateChoice !== 'visita'
    );

const isDraft = (value: unknown): value is ScratchLayoutDraft =>
    Boolean(value && typeof value === 'object' && Array.isArray((value as ScratchLayoutDraft).sections));

export const readScratchDraft = (): ScratchLayoutDraft | null => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed: unknown = JSON.parse(raw);
        return isDraft(parsed) ? parsed : null;
    } catch {
        return null;
    }
};

export const writeScratchDraft = (draft: ScratchLayoutDraft): void => {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
        /* quota / private mode */
    }
};

export const clearScratchDraft = (): void => {
    try {
        sessionStorage.removeItem(STORAGE_KEY);
    } catch {
        /* ignore */
    }
};
