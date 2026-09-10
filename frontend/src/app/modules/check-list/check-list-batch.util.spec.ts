import { describe, expect, it } from 'vitest';
import { readCheckListBatchPrefill } from './check-list-batch.util';

describe('readCheckListBatchPrefill', () => {
    it('reads checklist query params', () => {
        expect(
            readCheckListBatchPrefill({
                from: 'check-list',
                country: 'Colombia',
                codes: 'a,b',
                name: 'KYC',
            })
        ).toEqual({
            country: 'Colombia',
            codes: ['a', 'b'],
            name: 'KYC',
        });
    });

    it('ignores unrelated query strings', () => {
        expect(readCheckListBatchPrefill({ country: 'Colombia' })).toBeNull();
    });
});
