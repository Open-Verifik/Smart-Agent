export interface CheckListBatchPrefill {
    country: string;
    codes: string[];
    name: string;
}

export const readCheckListBatchPrefill = (
    query: Record<string, string | undefined> | { get(name: string): string | null }
): CheckListBatchPrefill | null => {
    const read = (key: string): string => {
        if (typeof (query as { get?: (name: string) => string | null }).get === 'function') {
            return (query as { get(name: string): string | null }).get(key) || '';
        }
        return (query as Record<string, string | undefined>)[key] || '';
    };

    if (read('from') !== 'check-list') return null;

    const codes = read('codes')
        .split(',')
        .map((code) => code.trim())
        .filter(Boolean);

    return {
        country: read('country').trim(),
        codes,
        name: read('name').trim(),
    };
};
