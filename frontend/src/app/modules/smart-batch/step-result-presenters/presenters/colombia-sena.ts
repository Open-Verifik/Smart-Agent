import type { StepDisplayRow } from '../../step-result-display.util';
import type { StepResultPresenter } from '../registry';

const asList = (data: unknown): Record<string, unknown>[] => {
    if (Array.isArray(data)) {
        return data.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'));
    }
    if (!data || typeof data !== 'object') return [];
    const obj = data as Record<string, unknown>;
    for (const key of ['certificates', 'certificados', 'records', 'registros', 'data', 'items', 'results']) {
        const candidate = obj[key];
        if (Array.isArray(candidate)) {
            return candidate.filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'));
        }
    }
    return [];
};

const pickText = (entry: Record<string, unknown>, keys: string[]): string => {
    for (const key of keys) {
        const value = entry[key];
        if (typeof value === 'string' && value.trim()) return value.trim();
        if (typeof value === 'number') return String(value);
    }
    return '';
};

/**
 * Formats SENA certificate results for user-facing display, keeping course/title/dates
 * and downloadable links while omitting opaque internal record hashes.
 */
export const presentColombiaSena: StepResultPresenter = (data) => {
    const items = asList(data);
    if (items.length === 0) return null;

    const rows: StepDisplayRow[] = [];
    items.forEach((entry, index) => {
        const prefix = items.length > 1 ? `Certificado ${index + 1} · ` : '';
        const program = pickText(entry, ['program', 'programa', 'course', 'curso']);
        const title = pickText(entry, ['title', 'titulo', 'título']);
        const type = pickText(entry, ['type', 'tipo', 'certificateType']);
        const status = pickText(entry, ['status', 'estado']);
        const certificationDate = pickText(entry, ['certificationDate', 'fechaCertificacion', 'issueDate']);
        const signatureDate = pickText(entry, ['certificationSignature', 'signatureDate', 'fechaFirma']);
        const downloadUrl = pickText(entry, ['certificateDownload', 'downloadUrl', 'certificateUrl', 'url']);

        if (program) rows.push({ label: `${prefix}Programa`, value: program });
        if (title) rows.push({ label: `${prefix}Título`, value: title });
        if (type) rows.push({ label: `${prefix}Tipo`, value: type });
        if (status) rows.push({ label: `${prefix}Estado`, value: status });
        if (certificationDate) rows.push({ label: `${prefix}Fecha de certificación`, value: certificationDate });
        if (signatureDate) rows.push({ label: `${prefix}Fecha de firma`, value: signatureDate });
        if (downloadUrl) rows.push({ label: `${prefix}Certificado`, value: downloadUrl });
    });

    return rows.length ? rows : null;
};
