import { describe, expect, it } from 'vitest';
import { barRects, buildChartSlices, chartNumeric, mixHex, pieArcs } from './report-chart.util';

describe('report chart', () => {
    it('reads percents and counts as numbers', () => {
        expect(chartNumeric('67%')).toBe(67);
        expect(chartNumeric(3)).toBe(3);
        expect(chartNumeric('')).toBe(0);
    });

    it('builds colorful outcome slices by default', () => {
        const slices = buildChartSlices({
            data: { successful: 2, failed: 1, skipped: 0, empty: 0, total: 3 },
            labels: { successful: 'Exitosas', failed: 'Fallidas', skipped: 'Omitidas', empty: 'Sin datos' },
        });
        expect(slices.map((slice) => slice.key)).toEqual(['successful', 'failed', 'skipped', 'empty']);
        expect(slices[0].color).toBe('#16a34a');
        expect(slices[1].color).toBe('#dc2626');
        expect(slices[0].value).toBe(2);
    });

    it('plots one slice per endpoint category when that breakdown is stored', () => {
        const slices = buildChartSlices({
            data: { citizen: 2, vehicle: 1, company: 0, other: 0, successful: 3 },
            breakdown: 'category',
            labels: { citizen: 'Persona', vehicle: 'Vehículo', company: 'Empresa', other: 'Otras' },
        });
        expect(slices.map((slice) => slice.key)).toEqual(['citizen', 'vehicle', 'company', 'other']);
        expect(slices[0].value).toBe(2);
        expect(slices[0].color).toBe('#2563eb');
        expect(slices[1].color).toBe('#0ea5e9');
    });

    it('lets a stored color override the palette', () => {
        const slices = buildChartSlices({
            data: { successful: 2, failed: 1, skipped: 0, empty: 0 },
            colors: { failed: '#7c3aed' },
        });
        expect(slices.find((slice) => slice.key === 'failed')?.color).toBe('#7c3aed');
        expect(slices.find((slice) => slice.key === 'successful')?.color).toBe('#16a34a');
    });

    it('tints a monochrome palette from the primary color', () => {
        const slices = buildChartSlices({
            data: { successful: 2, failed: 1, skipped: 1, empty: 0 },
            palette: 'mono',
            primaryColor: '#4F46E5',
        });
        expect(slices[0].color).toBe(mixHex('#4F46E5', '#ffffff', 0));
        expect(slices[0].color).not.toBe(slices[3].color);
        expect(slices.every((slice) => slice.color.startsWith('#'))).toBe(true);
    });

    it('covers a full pie for a single slice', () => {
        const arcs = pieArcs([{ key: 'a', label: 'A', value: 4, color: '#111' }], 50, 50, 40);
        expect(arcs[0].d).toContain('A ');
        expect(arcs[0].percent).toBe(100);
    });

    it('lays out bars inside the box', () => {
        const bars = barRects(
            [
                { key: 'a', label: 'A', value: 2, color: '#111' },
                { key: 'b', label: 'B', value: 1, color: '#222' },
            ],
            200,
            100
        );
        expect(bars).toHaveLength(2);
        expect(bars[0].height).toBeGreaterThan(bars[1].height);
        expect(bars[0].x).toBeLessThan(bars[1].x);
    });
});
