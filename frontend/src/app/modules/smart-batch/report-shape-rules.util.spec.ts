import { describe, expect, it } from 'vitest';
import { effectiveTableCellText, resolveShapeRuleValue } from './report-shape-rules.util';
import type { ReportSection } from './smart-report.service';

const host: ReportSection = {
    id: 'block',
    type: 'keyValueGrid',
    order: 0,
    dataPath: 'results.1',
    keyOverrides: {
        estado: {
            rules: [
                { id: 'r1', operator: 'contains', value: 'vencid', color: '#b91c1c', text: 'Vencido' },
                { id: 'r2', operator: 'contains', value: 'vigent', color: '#15803d', text: 'Vigente' },
            ],
        },
    },
};

describe('effectiveTableCellText', () => {
    it('uses cell rule replacement text', () => {
        expect(effectiveTableCellText(host, 'estado', 'VENCIDO')).toBe('Vencido');
        expect(effectiveTableCellText(host, 'estado', 'VIGENTE')).toBe('Vigente');
    });
});

describe('resolveShapeRuleValue', () => {
    const shape: ReportSection = {
        id: 'icon',
        type: 'shape',
        order: 1,
        ruleField: 'results.1.rows',
        ruleColumnKey: 'estado',
        ruleRulesSectionId: 'block',
        ruleTableMode: 'all',
    };

    it('returns shared text when all rows match after column rules', () => {
        const data = {
            results: {
                1: {
                    rows: [{ estado: 'VENCIDO' }, { estado: 'VENCIDO' }],
                },
            },
        };
        expect(resolveShapeRuleValue(shape, data as Record<string, unknown>, [host, shape])).toBe('Vencido');
    });

    it('returns mixed token when rows differ', () => {
        const data = {
            results: {
                1: {
                    rows: [{ estado: 'VIGENTE' }, { estado: 'VENCIDO' }],
                },
            },
        };
        expect(resolveShapeRuleValue(shape, data as Record<string, unknown>, [host, shape])).toBe('__mixed__');
    });
});
