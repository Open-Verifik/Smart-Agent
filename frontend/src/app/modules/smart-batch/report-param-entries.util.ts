export type ScalarParamEntry = { key: string; label: string; value: string };

const humanize = (key: string): string =>
    key
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/\./g, ' · ')
        .replace(/^./, (s) => s.toUpperCase())
        .trim();

const isScalar = (value: unknown): boolean =>
    value != null && typeof value !== 'object';

/**
 * Flatten an object into label/value pairs, skipping arrays and going at most
 * two object levels deep so the canvas stays usable.
 */
export const collectScalarParams = (
    value: unknown,
    options?: { hiddenKeys?: string[]; maxDepth?: number; maxItems?: number }
): ScalarParamEntry[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return [];

    const hidden = new Set(options?.hiddenKeys ?? []);
    const maxDepth = options?.maxDepth ?? 2;
    const maxItems = options?.maxItems ?? 80;
    const rows: ScalarParamEntry[] = [];

    const walk = (node: Record<string, unknown>, prefix: string, depth: number): void => {
        for (const [rawKey, entry] of Object.entries(node)) {
            if (rows.length >= maxItems) return;
            const key = prefix ? `${prefix}.${rawKey}` : rawKey;
            if (hidden.has(key)) continue;
            if (isScalar(entry)) {
                rows.push({ key, label: humanize(key), value: String(entry) });
                continue;
            }
            if (
                entry &&
                typeof entry === 'object' &&
                !Array.isArray(entry) &&
                depth < maxDepth
            ) {
                walk(entry as Record<string, unknown>, key, depth + 1);
            }
        }
    };

    walk(value as Record<string, unknown>, '', 1);
    return rows;
};
