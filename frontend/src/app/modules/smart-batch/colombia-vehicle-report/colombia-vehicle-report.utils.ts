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
    return (
        items.find((r) => String(r.vigente ?? '').toUpperCase() === 'SI') ??
        items.find((r) => String(r.estado ?? '').toUpperCase() === 'APROBADA') ??
        items[0]
    );
};

export const isBenignNoRecord = (data: unknown): boolean => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
    return (data as Record<string, unknown>).smartBatchInterpretation === 'no_record';
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
