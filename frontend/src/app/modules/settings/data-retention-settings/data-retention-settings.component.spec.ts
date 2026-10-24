import { describe, expect, it } from 'vitest';
import { CORE_TYPES, computeAllSameMode, computeIsCustomized, defaultRetentionPolicy, syncGlobalToGranular } from './data-retention-settings.utils';

describe('Data retention settings cascading logic', () => {
    it('cascades a global mode through the shared CORE_TYPES helper', () => {
        const updated = syncGlobalToGranular(defaultRetentionPolicy(), 'none');
        expect(updated.mode).toBe('none');
        for (const type of CORE_TYPES) {
            expect(updated.types[type].mode).toBe('none');
        }
        expect(computeIsCustomized(updated)).toBe(false);
        expect(computeAllSameMode(updated)).toBe('none');
    });
});
