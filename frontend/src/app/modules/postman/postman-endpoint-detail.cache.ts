export const POSTMAN_ENDPOINT_DETAIL_CACHE_KEY = 'smartAgent_postmanEndpointDetails';
export const POSTMAN_ENDPOINT_DETAIL_CACHE_LIMIT = 20;
export const POSTMAN_ENDPOINT_DETAIL_CACHE_TTL_MS = 30 * 60 * 1000;

export type PostmanEndpointDetailCacheStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

type CacheEntry = {
    key: string;
    savedAt: number;
    feature: unknown;
};

type CachePayload = {
    v: 1;
    entries: CacheEntry[];
};

export type PostmanEndpointDetailCache = {
    get: (key: string) => unknown | null;
    set: (key: string, feature: unknown) => void;
    clear: () => void;
};

const memoryByStorage = new WeakMap<PostmanEndpointDetailCacheStorage, CacheEntry[]>();

const sessionStorageOrNull = (): PostmanEndpointDetailCacheStorage | null => {
    try {
        return typeof sessionStorage === 'undefined' ? null : sessionStorage;
    } catch {
        return null;
    }
};

const pruneExpired = (entries: CacheEntry[], now: number, ttlMs: number): CacheEntry[] =>
    entries.filter((entry) => now - entry.savedAt <= ttlMs);

const featureAliases = (key: string, feature: unknown): string[] => {
    const row = feature && typeof feature === 'object' ? (feature as { code?: unknown; _id?: unknown }) : {};
    return [...new Set([key, String(row.code || ''), String(row._id || '')].filter(Boolean))];
};

const entryMatchesKey = (entry: CacheEntry, key: string): boolean =>
    featureAliases(entry.key, entry.feature).includes(key);

const readPayload = (storage: PostmanEndpointDetailCacheStorage): CacheEntry[] => {
    const cached = memoryByStorage.get(storage);
    if (cached) return cached;
    try {
        const raw = storage.getItem(POSTMAN_ENDPOINT_DETAIL_CACHE_KEY);
        const parsed = raw ? (JSON.parse(raw) as CachePayload) : null;
        const entries = parsed?.v === 1 && Array.isArray(parsed.entries) ? parsed.entries : [];
        memoryByStorage.set(storage, entries);
        return entries;
    } catch {
        memoryByStorage.set(storage, []);
        return [];
    }
};

const persist = (storage: PostmanEndpointDetailCacheStorage, entries: CacheEntry[]): void => {
    memoryByStorage.set(storage, entries);
    try {
        storage.setItem(POSTMAN_ENDPOINT_DETAIL_CACHE_KEY, JSON.stringify({ v: 1, entries }));
    } catch {
        // Quota or private-mode writes should not break endpoint selection.
    }
};

export const createPostmanEndpointDetailCache = (options?: {
    storage?: PostmanEndpointDetailCacheStorage | null;
    now?: () => number;
    limit?: number;
    ttlMs?: number;
}): PostmanEndpointDetailCache => {
    const storage = options?.storage === undefined ? sessionStorageOrNull() : options.storage;
    const now = options?.now ?? Date.now;
    const limit = options?.limit ?? POSTMAN_ENDPOINT_DETAIL_CACHE_LIMIT;
    const ttlMs = options?.ttlMs ?? POSTMAN_ENDPOINT_DETAIL_CACHE_TTL_MS;

    return {
        get: (key: string) => {
            if (!storage || !key) return null;
            const fresh = pruneExpired(readPayload(storage), now(), ttlMs);
            const index = fresh.findIndex((entry) => entryMatchesKey(entry, key));
            if (index < 0) {
                persist(storage, fresh);
                return null;
            }
            const [entry] = fresh.splice(index, 1);
            fresh.unshift(entry);
            persist(storage, fresh);
            return entry.feature;
        },
        set: (key: string, feature: unknown) => {
            if (!storage || !key || feature == null) return;
            const aliases = featureAliases(key, feature);
            const fresh = pruneExpired(readPayload(storage), now(), ttlMs).filter(
                (entry) => !aliases.some((alias) => entryMatchesKey(entry, alias))
            );
            fresh.unshift({ key: aliases[0], savedAt: now(), feature });
            persist(storage, fresh.slice(0, limit));
        },
        clear: () => {
            if (!storage) return;
            memoryByStorage.delete(storage);
            try {
                storage.removeItem(POSTMAN_ENDPOINT_DETAIL_CACHE_KEY);
            } catch {
                // ignore
            }
        },
    };
};

export const postmanEndpointDetailCache = createPostmanEndpointDetailCache();
