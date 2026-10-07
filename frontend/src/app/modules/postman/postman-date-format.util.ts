/**
 * Shared date wire-format helpers for Postman param pickers.
 * HTML date inputs always use yyyy-MM-dd; endpoints declare their wire format via `dateFormat`.
 */

const normalizeFormat = (format: string): string => format.replace(/\s+/g, '').toLowerCase();

const parseIsoPickerValue = (value: string): { y: string; mo: string; d: string } | null => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
    if (!m) return null;
    return { y: m[1], mo: m[2], d: m[3] };
};

const parseDdMmYyyyWireValue = (value: string): { y: string; mo: string; d: string } | null => {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value.trim());
    if (!m) return null;
    return {
        d: m[1].padStart(2, '0'),
        mo: m[2].padStart(2, '0'),
        y: m[3],
    };
};

export const isPostmanDateParam = (param: { dateFormat?: string | null }): boolean =>
    !!param.dateFormat?.trim();

/** Converts an endpoint wire value to yyyy-MM-dd for `<input type="date">`. */
export const wireDateToPickerValue = (wire: string, format: string): string => {
    const trimmed = (wire ?? '').trim();
    if (!trimmed) return '';

    const norm = normalizeFormat(format);
    if (norm === 'dd/mm/yyyy') {
        const parts = parseDdMmYyyyWireValue(trimmed);
        return parts ? `${parts.y}-${parts.mo}-${parts.d}` : '';
    }
    if (norm === 'yyyy-mm-dd') {
        return parseIsoPickerValue(trimmed) ? trimmed : '';
    }

    const iso = parseIsoPickerValue(trimmed);
    if (iso) return `${iso.y}-${iso.mo}-${iso.d}`;
    const ddmm = parseDdMmYyyyWireValue(trimmed);
    return ddmm ? `${ddmm.y}-${ddmm.mo}-${ddmm.d}` : '';
};

/** Converts a picker yyyy-MM-dd value into the endpoint's declared wire format. */
export const pickerValueToWireDate = (picker: string, format: string): string => {
    const trimmed = (picker ?? '').trim();
    if (!trimmed) return '';

    const iso = parseIsoPickerValue(trimmed);
    if (!iso) return trimmed;

    const norm = normalizeFormat(format);
    if (norm === 'dd/mm/yyyy') {
        return `${iso.d}/${iso.mo}/${iso.y}`;
    }
    if (norm === 'yyyy-mm-dd') {
        return `${iso.y}-${iso.mo}-${iso.d}`;
    }

    return trimmed;
};
