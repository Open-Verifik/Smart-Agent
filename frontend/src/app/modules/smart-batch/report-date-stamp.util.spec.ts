import { describe, expect, it } from 'vitest';
import { formatReportStamp, reportDateStampForPath, substituteReportPlaceholders } from './report-date-stamp.util';

describe('report-date-stamp', () => {
    it('formats a consultation date from preview data', () => {
        const stamp = reportDateStampForPath('consultedAt', { consultedAt: '2026-10-29T16:23:00.000Z' }, 'en');
        expect(stamp).toMatch(/2026/);
        expect(stamp).toMatch(/29|Oct/);
    });

    it('uses now for generatedAt', () => {
        const stamp = reportDateStampForPath('generatedAt', {}, 'en');
        expect(stamp).toContain(String(new Date().getFullYear()));
    });

    it('keeps a stored generatedAt instead of moving to now', () => {
        const stamp = reportDateStampForPath('generatedAt', { generatedAt: '2026-01-15T12:00:00.000Z' }, 'en');
        expect(stamp).toMatch(/2026/);
        expect(stamp).toMatch(/15|Jan/);
    });

    it('replaces tokens in copy', () => {
        const html = substituteReportPlaceholders('Consulta: {consultedAt}', { consultedAt: '2026-01-15T12:00:00.000Z' }, 'en');
        expect(html.startsWith('Consulta: ')).toBe(true);
        expect(html).not.toContain('{consultedAt}');
        expect(formatReportStamp('2026-01-15T12:00:00.000Z', 'en')).toBeTruthy();
    });
});
