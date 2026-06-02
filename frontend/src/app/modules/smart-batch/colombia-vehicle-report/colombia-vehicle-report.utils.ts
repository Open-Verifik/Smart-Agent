export const formatCop = (value: unknown): string => {
    if (value == null || value === '') return '—';
    const n = typeof value === 'number' ? value : Number(String(value).replace(/[^\d.-]/g, ''));
    if (Number.isNaN(n)) return String(value);
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
    }).format(n);
};

export const formatYesNo = (value: unknown): string => {
    if (value == null || value === '') return '—';
    if (typeof value === 'boolean') return value ? 'Sí' : 'No';
    const s = String(value).trim().toUpperCase();
    if (s === 'SI' || s === 'SÍ' || s === 'YES' || s === 'TRUE') return 'Sí';
    if (s === 'NO' || s === 'FALSE') return 'No';
    return String(value);
};

export const pickVigenteSoat = <T extends { estado?: string | null }>(
    items: T[] | null | undefined
): T | undefined => {
    if (!items?.length) return undefined;
    return items.find((s) => String(s.estado ?? '').toUpperCase() === 'VIGENTE') ?? items[0];
};

export const pickVigenteRtm = <T extends { vigente?: string | null; estado?: string | null }>(
    items: T[] | null | undefined
): T | undefined => {
    if (!items?.length) return undefined;
    return items.find((r) => String(r.vigente ?? '').toUpperCase() === 'SI');
};

/** Most recent RTM row by fechaExpedicion when none are vigente (dd/MM/yyyy). */
export const pickLatestRtm = (
    items: Record<string, unknown>[] | null | undefined
): Record<string, unknown> | undefined => {
    if (!items?.length) return undefined;
    const parse = (raw: unknown): number => {
        const s = String(raw ?? '');
        const m = s.match(/(\d{2})\/(\d{2})\/(\d{4})/);
        if (!m) return 0;
        return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1])).getTime();
    };
    return [...items].sort((a, b) => parse(b.fechaExpedicion) - parse(a.fechaExpedicion))[0];
};

/** RTM row for reports: vigente first, else latest expired certificate. */
export const pickRtmForReport = (
    items: Record<string, unknown>[] | null | undefined
): { row: Record<string, unknown>; isVigente: boolean } | undefined => {
    const vigente = pickVigenteRtm(items);
    if (vigente) {
        return { row: vigente as Record<string, unknown>, isVigente: true };
    }
    const latest = pickLatestRtm(items);
    if (latest) {
        return { row: latest, isVigente: false };
    }
    return undefined;
};

/** SIMIT agreements API uses `acuerdosPago` or `acuerdosPagos` depending on endpoint version. */
export const getSimitAgreementsList = (data: unknown): unknown[] => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
    const o = data as Record<string, unknown>;
    const list = o.acuerdosPago ?? o.acuerdosPagos;
    return Array.isArray(list) ? list : [];
};

export const isBenignNoRecord = (data: unknown): boolean => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
    return (data as Record<string, unknown>).smartBatchInterpretation === 'no_record';
};

/** Prefer business message over generic HTTP code when both are present on batch row errors. */
export const colombiaVehicleStepErrorKey = (error?: {
    message?: string;
    code?: string;
}): string => {
    const message = error?.message?.trim() ?? '';
    const code = error?.code?.trim() ?? '';
    if (message === 'current_owners_dont_match') return message;
    if (code === 'InternalServerError') return code;
    if (message && !/^Request failed with status code/i.test(message)) return message;
    return code || message;
};

/** Human-readable copy for Colombia vehicle report block errors (PDF / preview). */
export const humanizeColombiaVehicleError = (message?: string): string => {
    if (!message?.trim()) return '—';
    const code = message.trim();
    if (code === 'current_owners_dont_match') {
        return 'The queried document does not match the registered owner for this plate in RUNT.';
    }
    if (code === 'NotFound' || code === '404') {
        return 'No record found for the supplied parameters.';
    }
    if (code === 'InternalServerError') {
        return 'The valuation service returned a temporary error. Retry later.';
    }
    if (/record not found/i.test(code)) {
        return 'No record found for the supplied parameters.';
    }
    return code;
};

export const filterValueModelByYear = (
    valueModel: unknown,
    year: unknown,
    window = 1
): Record<string, unknown>[] => {
    if (!Array.isArray(valueModel)) return [];
    const y = Number(year);
    if (Number.isNaN(y)) return valueModel as Record<string, unknown>[];
    return (valueModel as Record<string, unknown>[]).filter((row) => {
        const m = Number(row.modelo);
        return !Number.isNaN(m) && m >= y - window && m <= y + window;
    });
};

export const formatInfractorLine = (infractor: unknown): string => {
    if (!infractor || typeof infractor !== 'object' || Array.isArray(infractor)) return '—';
    const i = infractor as Record<string, unknown>;
    const parts = [i.nombre, i.apellido, i.tipoDocumento, i.numeroDocumento]
        .filter((p) => p != null && String(p).trim() !== '')
        .map((p) => String(p).trim());
    return parts.length > 0 ? parts.join(' · ') : '—';
};
