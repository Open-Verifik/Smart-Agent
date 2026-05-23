export const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    value !== null && typeof value === 'object' && !Array.isArray(value);

export const thumbnailToDataUrl = (b64: string): string => {
    const trimmed = b64.trim();
    if (trimmed.startsWith('data:')) return trimmed;
    if (trimmed.startsWith('/9j/') || trimmed.startsWith('iVBOR')) {
        const mime = trimmed.startsWith('/9j/') ? 'image/jpeg' : 'image/png';
        return `data:${mime};base64,${trimmed}`;
    }
    return `data:image/jpeg;base64,${trimmed}`;
};

export const formatDate = (value: string): string => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
};

export const formatDob = (value: string): string => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString(undefined, { dateStyle: 'long' });
};

export const formatScore = (score: number | null, naLabel: string): string => {
    if (score === null || !Number.isFinite(score)) return naLabel;
    return `${(score * 100).toFixed(2)}%`;
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

export const truncateCode = (code: string, max = 14): string => {
    if (code.length <= max) return code;
    return `${code.slice(0, max)}…`;
};

export const truncateId = (id: string, max = 14): string => truncateCode(id, max);

export const redactThumbnailsForDebug = (value: unknown): unknown => {
    if (value === null || typeof value !== 'object') return value;
    if (Array.isArray(value)) return value.map(redactThumbnailsForDebug);
    const o = value as Record<string, unknown>;
    const next: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(o)) {
        if (k === 'thumbnail' && typeof v === 'string' && v.length > 64) {
            next[k] = `[base64 image, ${v.length} characters]`;
        } else {
            next[k] = redactThumbnailsForDebug(v) as unknown;
        }
    }
    return next;
};

export type ParsedCollectionEntry = {
    id: string;
    name: string;
    description: string;
    count: number | null;
};

export type SearchPersonMatch = {
    id: string;
    name: string;
    gender: string;
    dateOfBirth: string;
    nationality: string;
    notes: unknown;
    score: number | null;
    createDate: string;
    modifiedDate: string;
    thumbnails: ParsedThumbnail[];
    collections: ParsedCollectionEntry[];
};

export const parseCollectionEntries = (collectionsRaw: unknown[]): ParsedCollectionEntry[] =>
    collectionsRaw
        .map((entry) => {
            if (typeof entry === 'string') {
                return { id: entry, name: '', description: '', count: null };
            }
            if (!isPlainObject(entry)) return null;
            return {
                id: typeof entry.id === 'string' ? entry.id : '',
                name: typeof entry.name === 'string' ? entry.name : '',
                description: typeof entry.description === 'string' ? entry.description : '',
                count: typeof entry.count === 'number' ? entry.count : null,
            };
        })
        .filter((entry): entry is ParsedCollectionEntry => entry !== null);

export type ParsedThumbnail = { id: string; src: string };

export const parseThumbnails = (thumbnailsRaw: unknown[]): ParsedThumbnail[] =>
    thumbnailsRaw
        .filter(isPlainObject)
        .map((item) => {
            const id = typeof item.id === 'string' ? item.id : '';
            const thumbnail = typeof item.thumbnail === 'string' ? item.thumbnail : '';
            if (!thumbnail) return null;
            return { id, src: thumbnailToDataUrl(thumbnail) };
        })
        .filter((item): item is ParsedThumbnail => item !== null);
