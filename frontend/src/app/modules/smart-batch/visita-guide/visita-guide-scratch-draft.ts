import { ReportSection, ReportSheetImage } from '../smart-report.service';

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
    legend: string;
    legendPosition?: 'left' | 'center' | 'right';
    termsAndConditions?: string;
    termsPosition?: 'left' | 'center' | 'right';
    watermarkEnabled: boolean;
    watermarkType: 'text' | 'logo';
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
};

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
