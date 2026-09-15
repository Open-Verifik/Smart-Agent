import { DateTime } from 'luxon';
import { describe, expect, it } from 'vitest';
import { createdAtRangeParams } from './usage-history-date-params.util';

describe('createdAtRangeParams', () => {
    it('sends inclusive local-day bounds as UTC ISO', () => {
        const day = DateTime.fromISO('2026-09-14T15:47:00', { zone: 'America/Bogota' });
        expect(createdAtRangeParams(day, day)).toEqual({
            whereGTE_createdAt: '2026-09-14T05:00:00.000Z',
            whereLTE_createdAt: '2026-09-15T04:59:59.999Z',
        });
    });
});
