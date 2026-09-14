import { describe, expect, it } from 'vitest';
import {
    POSTMAN_ENDPOINT_DETAIL_CACHE_KEY,
    POSTMAN_ENDPOINT_DETAIL_CACHE_LIMIT,
    createPostmanEndpointDetailCache,
} from './postman-endpoint-detail.cache';

const memoryStorage = () => {
    const data = new Map<string, string>();
    return {
        getItem: (key: string) => data.get(key) ?? null,
        setItem: (key: string, value: string) => {
            data.set(key, value);
        },
        removeItem: (key: string) => {
            data.delete(key);
        },
    };
};

describe('postman-endpoint-detail.cache', () => {
    it('returns a cached feature and persists it in session storage', () => {
        const storage = memoryStorage();
        const cache = createPostmanEndpointDetailCache({ storage, now: () => 1_000 });
        cache.set('bolivia_api_vehicle', { code: 'bolivia_api_vehicle', docs: { en: {} } });

        expect(cache.get('bolivia_api_vehicle')).toEqual({
            code: 'bolivia_api_vehicle',
            docs: { en: {} },
        });
        expect(storage.getItem(POSTMAN_ENDPOINT_DETAIL_CACHE_KEY)).toContain('bolivia_api_vehicle');
    });

    it('keeps only the last 20 endpoints', () => {
        const storage = memoryStorage();
        const cache = createPostmanEndpointDetailCache({ storage, now: () => 1_000 });
        for (let index = 0; index < POSTMAN_ENDPOINT_DETAIL_CACHE_LIMIT + 5; index += 1) {
            cache.set(`code_${index}`, { code: `code_${index}` });
        }

        expect(cache.get('code_0')).toBeNull();
        expect(cache.get('code_5')).toEqual({ code: 'code_5' });
        expect(cache.get('code_24')).toEqual({ code: 'code_24' });
    });

    it('finds a feature by code or id without using two slots', () => {
        const cache = createPostmanEndpointDetailCache({ storage: memoryStorage(), now: () => 1_000 });
        cache.set('id-1', { _id: 'id-1', code: 'bolivia_api_vehicle', docs: { en: {} } });
        expect(cache.get('bolivia_api_vehicle')).toEqual({
            _id: 'id-1',
            code: 'bolivia_api_vehicle',
            docs: { en: {} },
        });
        cache.set('bolivia_api_vehicle', { _id: 'id-1', code: 'bolivia_api_vehicle', docs: { es: {} } });
        expect(cache.get('id-1')).toEqual({
            _id: 'id-1',
            code: 'bolivia_api_vehicle',
            docs: { es: {} },
        });
    });

    it('expires entries after the ttl', () => {
        let now = 0;
        const cache = createPostmanEndpointDetailCache({
            storage: memoryStorage(),
            now: () => now,
            ttlMs: 30_000,
        });
        cache.set('bolivia_api_vehicle', { code: 'bolivia_api_vehicle' });
        now = 30_001;
        expect(cache.get('bolivia_api_vehicle')).toBeNull();
    });
});
