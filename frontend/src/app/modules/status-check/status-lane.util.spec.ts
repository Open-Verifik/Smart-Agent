import { describe, expect, it } from 'vitest';
import { isMeasured, laneOf, measuredCount, uptimePercentage } from './status-lane.util';

describe('status-lane.util', () => {
    describe('laneOf', () => {
        it('reads a healthy response as up', () => {
            expect(laneOf('ok')).toBe('up');
        });

        it('reads "no record found" as up, because the endpoint answered', () => {
            /** A 404 on a lookup means the person is not in the registry, not that we are down. */
            expect(laneOf('noData')).toBe('up');
        });

        it('reads a slow but serving endpoint as degraded rather than down', () => {
            expect(laneOf('degraded')).toBe('degraded');
        });

        it('reads only genuine non-service as down', () => {
            expect(laneOf('failed')).toBe('down');
            expect(laneOf('timedOut')).toBe('down');
        });

        it('reads our own measurement failures as unmeasured, never as an outage', () => {
            expect(laneOf('configError')).toBe('unmeasured');
            expect(laneOf('billingBlocked')).toBe('unmeasured');
            expect(laneOf('authError')).toBe('unmeasured');
            expect(laneOf('inconclusive')).toBe('unmeasured');
        });

        it('distinguishes an unreported interval from one we failed to measure', () => {
            expect(laneOf('awaiting')).toBe('awaiting');
            expect(laneOf('')).toBe('awaiting');
            expect(laneOf(undefined as unknown as string)).toBe('awaiting');
        });

        it('treats a status added by a future backend as unmeasured, not as downtime', () => {
            expect(laneOf('somethingNew')).toBe('unmeasured');
        });
    });

    describe('isMeasured', () => {
        it('counts the serving and down lanes', () => {
            expect(isMeasured('ok')).toBe(true);
            expect(isMeasured('degraded')).toBe(true);
            expect(isMeasured('failed')).toBe(true);
        });

        it('excludes what we never measured', () => {
            expect(isMeasured('configError')).toBe(false);
            expect(isMeasured('awaiting')).toBe(false);
        });
    });

    describe('uptimePercentage', () => {
        it('scores a fully healthy series at 100', () => {
            expect(uptimePercentage([{ status: 'ok' }, { status: 'ok' }])).toBe(100);
        });

        it('does not penalise degraded or noData readings', () => {
            expect(uptimePercentage([{ status: 'degraded' }, { status: 'noData' }])).toBe(100);
        });

        it('counts only the down lane as downtime', () => {
            expect(uptimePercentage([{ status: 'ok' }, { status: 'ok' }, { status: 'ok' }, { status: 'failed' }])).toBe(75);
        });

        it('leaves unmeasured readings out of the denominator instead of scoring them', () => {
            /** Two measured points, one down: 50%. The three unknowns must not dilute it either way. */
            const points = [
                { status: 'ok' },
                { status: 'failed' },
                { status: 'configError' },
                { status: 'billingBlocked' },
                { status: 'awaiting' },
            ];

            expect(uptimePercentage(points)).toBe(50);
        });

        it('returns null rather than 100 when nothing was measurable', () => {
            expect(uptimePercentage([{ status: 'awaiting' }, { status: 'configError' }])).toBeNull();
        });

        it('returns null for an empty or missing series', () => {
            expect(uptimePercentage([])).toBeNull();
            expect(uptimePercentage(undefined as unknown as [])).toBeNull();
        });
    });

    describe('measuredCount', () => {
        it('reports how much evidence the percentage rests on', () => {
            expect(measuredCount([{ status: 'ok' }, { status: 'failed' }, { status: 'awaiting' }])).toBe(2);
        });
    });
});
