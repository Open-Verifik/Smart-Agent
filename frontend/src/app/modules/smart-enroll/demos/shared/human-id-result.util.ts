export const isPlainObject = (v: unknown): v is Record<string, unknown> =>
    v !== null && typeof v === 'object' && !Array.isArray(v);

export type CreditUsageInfo = {
    credits: Record<string, unknown> | null;
    charged: boolean;
    creditsCharged: number | null;
    featureCode: string | null;
};

const parseNumeric = (v: unknown): number | null => {
    if (typeof v === 'number' && Number.isFinite(v)) return v;
    if (typeof v === 'string' && v.trim() !== '') {
        const n = Number(v);
        return Number.isFinite(n) ? n : null;
    }
    return null;
};

/** Read credit charge fields from a demo/API envelope (`credits`, `creditsCharged`, `charged`). */
export const parseCreditUsage = (result: Record<string, unknown> | null | undefined): CreditUsageInfo | null => {
    if (!result) return null;

    const credits = isPlainObject(result['credits']) ? (result['credits'] as Record<string, unknown>) : null;
    const charged = result['charged'] === true;
    const featureCode = typeof result['featureCode'] === 'string' ? result['featureCode'] : null;

    const amountFromRecord = parseNumeric(credits?.['amount']);
    const creditsChargedExplicit = parseNumeric(result['creditsCharged']);
    const creditsCharged =
        creditsChargedExplicit != null && creditsChargedExplicit > 0
            ? creditsChargedExplicit
            : amountFromRecord != null && amountFromRecord !== 0
              ? Math.abs(amountFromRecord)
              : null;

    if (!credits && creditsCharged == null && !charged) return null;

    return {
        credits,
        charged: charged || creditsCharged != null,
        creditsCharged,
        featureCode: featureCode ?? (typeof credits?.['code'] === 'string' ? credits['code'] : null),
    };
};

export const formatCreditsAmount = (amount: number): string => {
    if (Number.isInteger(amount)) return String(amount);
    return amount.toFixed(2).replace(/\.?0+$/, '');
};

export const formatDisplayValue = (v: unknown, yes: string, no: string): string => {
    if (v === null || v === undefined) return '';
    if (typeof v === 'boolean') return v ? yes : no;
    if (typeof v === 'number') return Number.isFinite(v) ? String(v) : '';
    if (typeof v === 'string') return v;
    return JSON.stringify(v);
};

export const truncateMiddle = (s: string, head = 28, tail = 16): string => {
    if (s.length <= head + tail + 3) return s;
    return `${s.slice(0, head)}…${s.slice(-tail)}`;
};

export const faceCropToDataUrl = (base64: string): string => {
    const t = base64.trim();
    if (t.startsWith('data:')) return t;
    if (t.startsWith('/9j/') || t.startsWith('iVBOR')) {
        const mime = t.startsWith('/9j/') ? 'image/jpeg' : 'image/png';
        return `data:${mime};base64,${t}`;
    }
    return `data:image/jpeg;base64,${t}`;
};
