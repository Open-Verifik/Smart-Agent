import { describe, expect, it } from 'vitest';
import { reportClickHref, reportJumpAnchorId, reportJumpHref, sanitizeReportLinkUrl } from './report-jump.util';

describe('report-jump', () => {
    it('builds a safe fragment id', () => {
        expect(reportJumpAnchorId('consulta-1')).toBe('rpt-consulta-1');
        expect(reportJumpAnchorId('fecha:consultedAt')).toBe('rpt-fecha-consultedAt');
        expect(reportJumpHref('consulta-1')).toBe('#rpt-consulta-1');
        expect(reportJumpHref('')).toBeNull();
    });

    it('keeps an external URL on the block without replacing the visible text', () => {
        expect(sanitizeReportLinkUrl('verifika.com/docs')).toBe('https://verifika.com/docs');
        expect(sanitizeReportLinkUrl('javascript:alert(1)')).toBeNull();
        expect(
            reportClickHref({
                linkToSectionId: 'consulta-1',
                linkUrl: 'https://verifika.com',
            })
        ).toBe('https://verifika.com');
        expect(reportClickHref({ linkToSectionId: 'consulta-1' })).toBe('#rpt-consulta-1');
    });
});
