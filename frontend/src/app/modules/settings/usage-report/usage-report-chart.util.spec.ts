import { describe, expect, it } from 'vitest';
import type { UsageReport } from 'app/core/usage/usage-api.service';
import { usageRowsToCsv } from './usage-report-chart.util';

const report = (keys: string[]): UsageReport => ({
    startDate: '2026-09-01T00:00:00.000Z',
    endDate: '2026-09-30T23:59:59.999Z',
    groupBy: 'costCenter',
    source: 'apiRequests',
    totals: { totalRequests: 0, ok: 0, failed: 0, timedOut: 0, costUSD: 0 },
    groups: keys.map((key) => ({ key, totalRequests: 3, ok: 2, failed: 1, timedOut: 0, costUSD: 0.5 })),
    page: 1,
    limit: 50,
    totalGroups: keys.length,
    pages: 1,
});

describe('usageRowsToCsv', () => {
    it('should write a header row and one row per group', () => {
        const csv = usageRowsToCsv(report(['SPAIN-OPS']), (group) => group.key ?? '');

        expect(csv.split('\n')).toEqual(['costCenter,totalRequests,ok,failed,timedOut,costUSD', 'SPAIN-OPS,3,2,1,0,0.5']);
    });

    it('should neutralize spreadsheet formulas in labels', () => {
        const csv = usageRowsToCsv(report(['=HYPERLINK("x")', '+1', '@SUM(A1)']), (group) => group.key ?? '');
        const labels = csv.split('\n').slice(1).map((line) => line.split(',')[0]);

        expect(labels).toEqual([`"'=HYPERLINK(""x"")"`, `'+1`, `'@SUM(A1)`]);
    });

    it('should quote labels containing commas', () => {
        const csv = usageRowsToCsv(report(['Ops, Spain']), (group) => group.key ?? '');

        expect(csv.split('\n')[1].startsWith('"Ops, Spain",')).toBe(true);
    });
});
