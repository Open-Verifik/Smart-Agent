import { describe, expect, it } from 'vitest';
import {
    cloneLayoutSectionDynamic,
    layoutItemSectionFromBlock,
    remappedItemOverrides,
} from './report-layout-copy.util';
import type { ReportSection } from './smart-report.service';

describe('cloneLayoutSectionDynamic', () => {
    it('keeps the data path and block chrome, and drops a typed-over value', () => {
        const source: ReportSection = {
            id: 'consulta-1',
            type: 'keyValueGrid',
            order: 0,
            dataPath: 'results.1',
            label: 'Cédula',
            pairLayout: 'inline',
            style: { fontSize: 12, color: '#111827', labelStyle: { fontWeight: 'bold' } },
            keyOverrides: {
                nombre: {
                    label: 'Nombre completo',
                    value: 'ANA PÉREZ',
                    backgroundColor: '#fffbeb',
                    valueStyle: { textAlign: 'center' },
                },
            },
        };
        const copy = cloneLayoutSectionDynamic(source);
        expect(copy.id).toBe('consulta-1');
        expect(copy.dataPath).toBe('results.1');
        expect(copy.pairLayout).toBe('inline');
        expect(copy.style?.labelStyle).toEqual({ fontWeight: 'bold' });
        expect(copy.keyOverrides?.nombre).toEqual({
            label: 'Nombre completo',
            backgroundColor: '#fffbeb',
            valueStyle: { textAlign: 'center' },
        });
        expect(copy.keyOverrides?.nombre).not.toHaveProperty('value');
    });

    it('does not snapshot a field value into staticContent', () => {
        const source: ReportSection = {
            id: 'campo-1',
            type: 'field',
            order: 0,
            dataPath: 'results.1.nombre',
            label: 'Nombre',
            staticContent: 'ANA PÉREZ',
        };
        const copy = cloneLayoutSectionDynamic(source);
        expect(copy.dataPath).toBe('results.1.nombre');
        expect(copy.staticContent).toBeUndefined();
        expect(copy.label).toBe('Nombre');
    });

    it('keeps placeholder copy on a title so it stays substitutable', () => {
        const source: ReportSection = {
            id: 'titulo-1',
            type: 'header',
            order: 0,
            staticContent: 'Consulta {consultedAt}',
            style: { fontSize: 22, fontWeight: 'bold' },
        };
        const copy = cloneLayoutSectionDynamic(source);
        expect(copy.staticContent).toBe('Consulta {consultedAt}');
        expect(copy.style?.fontWeight).toBe('bold');
    });
});

describe('layoutItemSectionFromBlock', () => {
    const block: ReportSection = {
        id: 'consulta-1',
        type: 'keyValueGrid',
        order: 0,
        dataPath: 'results.1',
        label: 'Cédula',
        pairLayout: 'stack',
        style: {
            fontSize: 13,
            fontFamily: 'Inter',
            color: '#4F46E5',
            labelStyle: { fontSize: 10 },
            valueStyle: { fontSize: 12 },
        },
        keyOverrides: {
            nombre: {
                label: 'Nombre',
                value: 'ANA PÉREZ',
                backgroundColor: '#ecfccb',
                labelStyle: { fontWeight: 'bold' },
                rules: [{ id: 'r1', operator: 'equals', value: 'x', color: '#111' }],
            },
            'vehiculos.placa': { valueStyle: { textAlign: 'center' }, value: 'ABC123' },
        },
        valueRules: [{ id: 'r2', operator: 'equals', value: 'y', color: '#222' }],
    };

    it('binds the item to the same path instead of the live text', () => {
        const field = layoutItemSectionFromBlock(block, 'nombre', {
            id: 'item-1',
            dataPath: 'results.1.nombre',
            isTable: false,
            label: 'Nombre',
            zIndex: 50,
        });
        expect(field.type).toBe('field');
        expect(field.dataPath).toBe('results.1.nombre');
        expect(field.staticContent).toBeUndefined();
        expect(field.label).toBe('Nombre');
        expect(field.pairLayout).toBe('stack');
        expect(field.style?.fontFamily).toBe('Inter');
        expect(field.style?.backgroundColor).toBe('#ecfccb');
        expect(field.style?.labelStyle).toEqual({ fontSize: 10, fontWeight: 'bold' });
        expect(field.style?.zIndex).toBe(50);
        expect(field.keyOverrides).toBeUndefined();
        expect(field).not.toHaveProperty('value');
        expect(field.valueRules).toEqual([{ id: 'r1', operator: 'equals', value: 'x', color: '#111' }]);
    });

    it('keeps nested table column chrome relative to the extracted table', () => {
        const nested = remappedItemOverrides(block.keyOverrides, 'vehiculos');
        expect(nested?.placa).toEqual({ valueStyle: { textAlign: 'center' } });
        expect(nested?.placa).not.toHaveProperty('value');
    });
});
