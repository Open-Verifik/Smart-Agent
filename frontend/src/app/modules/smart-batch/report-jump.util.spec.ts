import { reportJumpAnchorId, reportJumpHref } from './report-jump.util';

describe('report-jump', () => {
    it('builds a safe fragment id', () => {
        expect(reportJumpAnchorId('consulta-1')).toBe('rpt-consulta-1');
        expect(reportJumpAnchorId('fecha:consultedAt')).toBe('rpt-fecha-consultedAt');
        expect(reportJumpHref('consulta-1')).toBe('#rpt-consulta-1');
        expect(reportJumpHref('')).toBeNull();
    });
});
