import {
    POSTMAN_INCLUDE_COST_KEY,
    ensurePostmanIncludeCostParam,
    getPostmanIncludeCostValue,
    isPostmanIncludeCostEnabled,
    removePostmanIncludeCostParam,
    resolvePostmanIncludeCostForSend,
    syncPostmanIncludeCostParam,
} from './postman-include-cost.util';
import { ApiEndpoint } from './postman.types';

const BASE: ApiEndpoint = {
    id: 'test',
    label: 'Test',
    method: 'GET',
    url: 'https://api.verifik.co/v2/test',
    params: [{ key: 'documentNumber', value: '123', type: 'string', required: true }],
};

describe('postman-include-cost.util', () => {
    describe('isPostmanIncludeCostEnabled', () => {
        it('returns true for boolean true', () => expect(isPostmanIncludeCostEnabled(true)).toBe(true));
        it('returns true for string "true"', () => expect(isPostmanIncludeCostEnabled('true')).toBe(true));
        it('returns false for "false"', () => expect(isPostmanIncludeCostEnabled('false')).toBe(false));
        it('returns false for null', () => expect(isPostmanIncludeCostEnabled(null)).toBe(false));
        it('returns false for undefined', () => expect(isPostmanIncludeCostEnabled(undefined)).toBe(false));
        it('returns false for empty string', () => expect(isPostmanIncludeCostEnabled('')).toBe(false));
    });

    describe('ensurePostmanIncludeCostParam', () => {
        it('appends includeCost row when absent', () => {
            const result = ensurePostmanIncludeCostParam(BASE);
            const row = result.params?.find((p) => p.key === POSTMAN_INCLUDE_COST_KEY);
            expect(row).toBeDefined();
            expect(row!.value).toBe('true');
            expect(row!.enum).toEqual(['true', 'false']);
            expect((row as any).system).toBe('includeCost');
            expect((row as any).readonlyKey).toBe(true);
        });

        it('does not duplicate the row when already present', () => {
            const once = ensurePostmanIncludeCostParam(BASE);
            const twice = ensurePostmanIncludeCostParam(once);
            const rows = twice.params?.filter((p) => p.key === POSTMAN_INCLUDE_COST_KEY) ?? [];
            expect(rows.length).toBe(1);
        });

        it('does not mutate the original endpoint', () => {
            const original = BASE.params!.length;
            ensurePostmanIncludeCostParam(BASE);
            expect(BASE.params!.length).toBe(original);
        });

        it('appends row after existing params', () => {
            const result = ensurePostmanIncludeCostParam(BASE);
            expect(result.params!.at(-1)!.key).toBe(POSTMAN_INCLUDE_COST_KEY);
        });

        it('handles endpoint with no params', () => {
            const empty = { ...BASE, params: undefined };
            const result = ensurePostmanIncludeCostParam(empty);
            expect(result.params).toHaveLength(1);
            expect(result.params![0].key).toBe(POSTMAN_INCLUDE_COST_KEY);
        });
    });

    describe('removePostmanIncludeCostParam', () => {
        it('removes the includeCost row', () => {
            const withRow = ensurePostmanIncludeCostParam(BASE);
            const result = removePostmanIncludeCostParam(withRow);
            expect(result.params?.find((p) => p.key === POSTMAN_INCLUDE_COST_KEY)).toBeUndefined();
        });

        it('is a no-op when row is absent', () => {
            const result = removePostmanIncludeCostParam(BASE);
            expect(result).toBe(BASE);
        });
    });

    describe('syncPostmanIncludeCostParam', () => {
        it('adds row for credits mode', () => {
            const result = syncPostmanIncludeCostParam(BASE, 'credits');
            expect(result.params?.some((p) => p.key === POSTMAN_INCLUDE_COST_KEY)).toBe(true);
        });

        it('removes row for x402 mode', () => {
            const withRow = ensurePostmanIncludeCostParam(BASE);
            const result = syncPostmanIncludeCostParam(withRow, 'x402');
            expect(result.params?.some((p) => p.key === POSTMAN_INCLUDE_COST_KEY)).toBe(false);
        });
    });

    describe('getPostmanIncludeCostValue', () => {
        it('returns the row value when present', () => {
            const ep = ensurePostmanIncludeCostParam(BASE);
            expect(getPostmanIncludeCostValue(ep)).toBe('true');
        });

        it('returns null when row is absent', () => {
            expect(getPostmanIncludeCostValue(BASE)).toBeNull();
        });

        it('returns "false" when user changed it', () => {
            const ep = ensurePostmanIncludeCostParam(BASE);
            const changed = {
                ...ep,
                params: ep.params!.map((p) =>
                    p.key === POSTMAN_INCLUDE_COST_KEY ? { ...p, value: 'false' } : p
                ),
            };
            expect(getPostmanIncludeCostValue(changed)).toBe('false');
        });
    });

    describe('resolvePostmanIncludeCostForSend', () => {
        it('returns query:"true" for GET with enabled row', () => {
            const ep = ensurePostmanIncludeCostParam(BASE);
            expect(resolvePostmanIncludeCostForSend(ep, 'GET')).toEqual({ query: 'true' });
        });

        it('returns query:"true" for DELETE', () => {
            const ep = ensurePostmanIncludeCostParam({ ...BASE, method: 'DELETE' });
            expect(resolvePostmanIncludeCostForSend(ep, 'DELETE')).toEqual({ query: 'true' });
        });

        it('returns body:true for POST', () => {
            const ep = ensurePostmanIncludeCostParam({ ...BASE, method: 'POST' });
            expect(resolvePostmanIncludeCostForSend(ep, 'POST')).toEqual({ body: true });
        });

        it('returns body:true for PUT', () => {
            const ep = ensurePostmanIncludeCostParam({ ...BASE, method: 'PUT' });
            expect(resolvePostmanIncludeCostForSend(ep, 'PUT')).toEqual({ body: true });
        });

        it('returns body:true for PATCH', () => {
            const ep = ensurePostmanIncludeCostParam({ ...BASE, method: 'PATCH' });
            expect(resolvePostmanIncludeCostForSend(ep, 'PATCH')).toEqual({ body: true });
        });

        it('returns {} when row is absent (deleted)', () => {
            expect(resolvePostmanIncludeCostForSend(BASE, 'GET')).toEqual({});
        });

        it('returns {} when value is "false"', () => {
            const ep = ensurePostmanIncludeCostParam(BASE);
            const disabled = {
                ...ep,
                params: ep.params!.map((p) =>
                    p.key === POSTMAN_INCLUDE_COST_KEY ? { ...p, value: 'false' } : p
                ),
            };
            expect(resolvePostmanIncludeCostForSend(disabled, 'GET')).toEqual({});
        });
    });
});
