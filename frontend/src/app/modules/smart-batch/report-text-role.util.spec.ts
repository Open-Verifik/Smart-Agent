import { describe, expect, it } from 'vitest';
import { ReportSection } from './smart-report.service';
import { materializeSectionTypography, resolveTextRole } from './report-text-role.util';

describe('resolveTextRole', () => {
    const section: ReportSection = {
        id: 'grid',
        type: 'keyValueGrid',
        order: 0,
        style: {
            labelStyle: { fontSize: 10, color: '#6B7280' },
            valueStyle: { fontSize: 12, color: '#111827' },
        },
        keyOverrides: {
            firstName: {
                labelStyle: { fontSize: 16, color: '#be123c' },
                valueStyle: { fontSize: 20, color: '#1d4ed8' },
            },
        },
    };

    it('keeps shared label/value sizes when no key is selected', () => {
        expect(resolveTextRole(section, 'label', '#0f172a').fontSize).toBe(10);
        expect(resolveTextRole(section, 'value', '#0f172a').fontSize).toBe(12);
    });

    it('applies per-parameter typography for the selected key only', () => {
        expect(resolveTextRole(section, 'label', '#0f172a', 'firstName').fontSize).toBe(16);
        expect(resolveTextRole(section, 'label', '#0f172a', 'firstName').color).toBe('#be123c');
        expect(resolveTextRole(section, 'value', '#0f172a', 'firstName').fontSize).toBe(20);
        expect(resolveTextRole(section, 'label', '#0f172a', 'lastName').fontSize).toBe(10);
    });

    it('writes the default bold title into the template the PDF receives', () => {
        const block: ReportSection = {
            id: 'tabla',
            type: 'dataTable',
            order: 1,
            label: 'Propietario',
            style: { fontSize: 12 },
        };
        const saved = materializeSectionTypography(block, '#4F46E5');
        expect(saved.style?.titleStyle?.fontWeight).toBe('bold');
        expect(saved.style?.fontWeight).toBe('bold');
        expect(saved.style?.labelStyle?.fontWeight).toBe('normal');
        expect(saved.style?.valueStyle?.fontWeight).toBe('normal');
    });

    it('keeps a title the designer set to regular weight', () => {
        const block: ReportSection = {
            id: 'titulo',
            type: 'header',
            order: 0,
            style: { titleStyle: { fontWeight: 'normal' }, fontWeight: 'normal' },
        };
        const saved = materializeSectionTypography(block, '#4F46E5');
        expect(saved.style?.titleStyle?.fontWeight).toBe('normal');
        expect(saved.style?.fontWeight).toBe('normal');
    });

    it('writes the nested-table look the sheet uses before any edit', () => {
        const block: ReportSection = {
            id: 'bloque',
            type: 'keyValueGrid',
            order: 1,
            label: 'Dueño',
            dataPath: 'results.1',
        };
        const saved = materializeSectionTypography(block, '#4F46E5', {
            results: {
                1: {
                    nombre: 'Ana',
                    vehiculos: [{ placa: 'ABC', marca: 'Mazda' }],
                },
            },
        });
        const table = saved.keyOverrides?.vehiculos;
        expect(table?.backgroundColor).toBe('#fffbeb');
        expect(table?.borderWidth).toBe(1);
        expect(table?.borderColor).toBe('#9e9c92');
        expect(table?.borderRadius).toBe(8);
        expect(table?.showTableBadge).toBe(true);
        expect(saved.showRowLines).toBe(true);
        expect(saved.rowLineStyle).toBe('solid');
        expect(saved.rowLineColor).toBe('#d6d3d1');
        expect(saved.rowLineWidth).toBe(3);
        expect(saved.columnsPerRow).toBe(2);
        expect(saved.style?.fontSize).toBe(13);
        expect(saved.style?.fontWeight).toBe('bold');
        expect(saved.style?.color).toBe('#4F46E5');
        expect(saved.style?.labelStyle?.fontSize).toBe(10);
        expect(saved.style?.labelColor).toBe('#6B7280');
        expect(saved.style?.valueStyle?.fontSize).toBe(12);
        expect(saved.style?.valueColor).toBe('#111827');
    });

    it('keeps a nested table the designer already restyled', () => {
        const block: ReportSection = {
            id: 'bloque',
            type: 'keyValueGrid',
            order: 1,
            dataPath: 'owner',
            showRowLines: false,
            columnsPerRow: 3,
            keyOverrides: {
                vehiculos: {
                    backgroundColor: '#ffffff',
                    borderWidth: 2,
                    borderColor: '#111111',
                    borderRadius: 0,
                    showTableBadge: false,
                },
            },
        };
        const saved = materializeSectionTypography(block, '#4F46E5', {
            owner: { vehiculos: [{ placa: 'ABC' }] },
        });
        const table = saved.keyOverrides?.vehiculos;
        expect(table?.backgroundColor).toBe('#ffffff');
        expect(table?.borderWidth).toBe(2);
        expect(table?.borderColor).toBe('#111111');
        expect(table?.borderRadius).toBe(0);
        expect(table?.showTableBadge).toBe(false);
        expect(saved.showRowLines).toBe(false);
        expect(saved.columnsPerRow).toBe(3);
    });

    it('caps a data table at the six columns the sheet shows by default', () => {
        const block: ReportSection = {
            id: 'tabla',
            type: 'dataTable',
            order: 2,
            label: 'Filas',
        };
        const saved = materializeSectionTypography(block, '#111827');
        expect(saved.maxColumns).toBe(6);
        expect(saved.showRowLines).toBe(true);
        expect(saved.style?.labelStyle?.color).toBe('#6B7280');
        expect(saved.style?.valueStyle?.color).toBe('#111827');
    });
});
