import { describe, expect, it } from 'vitest';
import { buildConsultStats, consultStatsPath } from './report-consult-stats.util';

describe('buildConsultStats', () => {
    it('counts endpoints, success, found, failed and percents', () => {
        const stats = buildConsultStats(
            {
                results: {
                    1: { found: true, name: 'Ana' },
                    2: { data: { encontrado: false } },
                    3: { plate: 'ABC123' },
                },
                errors: [{ step: 4, message: 'timeout' }],
            },
            { steps: [{ sequence: 1 }, { sequence: 2 }, { sequence: 3 }, { sequence: 4 }, { sequence: 5 }] }
        );

        expect(stats.total).toBe(5);
        expect(stats.successful).toBe(3);
        expect(stats.found).toBe(2);
        expect(stats.failed).toBe(1);
        expect(stats.empty).toBe(1);
        expect(stats.successPercent).toBe('60%');
        expect(stats.foundPercent).toBe('40%');
        expect(stats.failedPercent).toBe('20%');
        expect(consultStatsPath('successful')).toBe('consultStats.successful');
    });

    it('treats skipped steps separately from failures', () => {
        const stats = buildConsultStats(
            {
                results: { 1: { ok: true } },
                inputData: { __batchSkippedSteps: [{ sequence: 2 }] },
            },
            { steps: [{ sequence: 1 }, { sequence: 2 }] }
        );

        expect(stats.total).toBe(2);
        expect(stats.successful).toBe(1);
        expect(stats.skipped).toBe(1);
        expect(stats.failed).toBe(0);
        expect(stats.successPercent).toBe('50%');
    });

    it('splits endpoint counts by category', () => {
        const stats = buildConsultStats(
            {
                results: {
                    1: { found: true },
                    2: { plate: 'ABC123' },
                    3: { nit: '900' },
                },
            },
            {
                steps: [
                    { sequence: 1, featureCode: 'co_cedula' },
                    { sequence: 2, featureCode: 'co_runt_vehicle' },
                    { sequence: 3, featureCode: 'co_rues_company' },
                ],
            }
        );

        expect(stats.citizen).toBe(1);
        expect(stats.vehicle).toBe(1);
        expect(stats.company).toBe(1);
        expect(stats.other).toBe(0);
        expect(consultStatsPath('citizen')).toBe('consultStats.citizen');
    });
});
