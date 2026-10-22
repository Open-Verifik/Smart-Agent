import { describe, expect, it } from 'vitest';
import {
    applyVisibleKeyReorder,
    collectLayoutSheetItems,
    collectObjectTables,
    collectScalarParams,
    designedTableColumns,
    displayParamLabel,
    flattenSampleResultsForPdf,
    formatReportCellValue,
    humanizeParamKey,
    isHiddenParamKey,
    layoutParamGroups,
    layoutTableRulesKey,
    layoutTableRowIndex,
    relativeLayoutItemKey,
    setHiddenParamKey,
    sortByKeyOrder,
    valueAtDataPath,
} from './report-param-entries.util';

const nestedPayload = {
    data: { plate: 'ABC123', owner: { name: 'Ana' } },
    owners: [
        { name: 'Ana', id: 1 },
        { name: 'Luis', id: 2 },
    ],
};

describe('valueAtDataPath', () => {
    const runt = {
        informacionGeneral: { marca: 'KIA', cilidraje: '1600' },
        vin: 'VIN123',
    };

    it('reads nested results paths', () => {
        expect(valueAtDataPath({ results: { 2: runt } }, 'results.2.informacionGeneral.marca')).toBe('KIA');
    });

    it('unwraps a data envelope on the consult payload', () => {
        expect(
            valueAtDataPath({ results: { 2: { data: runt } } }, 'results.2.informacionGeneral.marca')
        ).toBe('KIA');
    });

    it('finds the consult when the cloned batch stored it at another sequence', () => {
        expect(
            valueAtDataPath({ results: { 1: runt } }, 'results.2.informacionGeneral.marca')
        ).toBe('KIA');
    });

    it('still finds the consult when the addressed slot has a partial payload', () => {
        expect(
            valueAtDataPath(
                {
                    results: {
                        1: runt,
                        2: { informacionGeneral: {} },
                    },
                },
                'results.2.informacionGeneral.marca'
            )
        ).toBe('KIA');
    });

    it('aliases cilidraje and cilindraje', () => {
        expect(
            valueAtDataPath({ results: { 1: { informacionGeneral: { cilindraje: '1400' } } } }, 'results.1.informacionGeneral.cilidraje')
        ).toBe('1400');
    });
});

describe('humanizeParamKey', () => {
    it('uses a Spanish label for tipoTarifa instead of the raw field name', () => {
        expect(humanizeParamKey('tipoTarifa')).toBe('Tipo de tarifa');
        expect(displayParamLabel('soat.tipoTarifa', 'Tipo tarifa')).toBe('Tipo de tarifa');
        expect(displayParamLabel('soat.tipoTarifa', 'Tarifa pactada')).toBe('Tarifa pactada');
    });
});

describe('layoutTableRulesKey', () => {
    it('strips row index from table cell store keys', () => {
        expect(layoutTableRulesKey('ownershipDuration#0')).toBe('ownershipDuration');
        expect(layoutTableRulesKey('owners.documentNumber#12')).toBe('owners.documentNumber');
        expect(layoutTableRulesKey('plate')).toBe('plate');
    });

    it('parses row index from store keys', () => {
        expect(layoutTableRowIndex('ownershipDuration#2')).toBe(2);
        expect(layoutTableRowIndex('plate')).toBeNull();
    });
});

describe('formatReportCellValue', () => {
    it('formats colombian vehicle ownership duration objects', () => {
        expect(formatReportCellValue({ years: 8, months: 6, days: 23 })).toBe('8 años, 6 meses, 23 días');
        expect(formatReportCellValue({ anios: 2, meses: 4, dias: 0 })).toBe('2 años, 4 meses');
    });
});

describe('collectScalarParams', () => {
    it('flattens nested objects into dotted keys', () => {
        const rows = collectScalarParams({
            data: { plate: 'ABC123', owner: { name: 'Ana' } },
        });
        expect(rows).toEqual(
            expect.arrayContaining([
                { key: 'data.plate', label: 'Data · Plate', value: 'ABC123' },
                { key: 'data.owner.name', label: 'Data · Owner · Name', value: 'Ana' },
            ])
        );
    });

    it('flattens arrays of objects instead of dropping them', () => {
        const rows = collectScalarParams({
            owners: [
                { name: 'Ana', id: 1 },
                { name: 'Luis', id: 2 },
            ],
        });
        expect(rows.map((row) => row.key)).toEqual([
            'owners.0.name',
            'owners.0.id',
            'owners.1.name',
            'owners.1.id',
        ]);
        expect(rows[0]).toMatchObject({ label: 'Owners · 1 · Name', value: 'Ana' });
    });

    it('skips object arrays when they will be rendered as tables', () => {
        const rows = collectScalarParams(nestedPayload, { skipObjectArrays: true });
        expect(rows.map((row) => row.key)).toEqual(['data.plate', 'data.owner.name']);
    });

    it('honors hiddenKeys including nested prefixes', () => {
        const rows = collectScalarParams({ a: 1, b: 2 }, { hiddenKeys: ['b'] });
        expect(rows.map((row) => row.key)).toEqual(['a']);
        const nested = collectScalarParams(nestedPayload, { hiddenKeys: ['owners'] });
        expect(nested.some((row) => row.key.startsWith('owners'))).toBe(false);
    });
});

describe('collectObjectTables', () => {
    it('turns arrays of objects into tables', () => {
        const tables = collectObjectTables(nestedPayload);
        expect(tables).toHaveLength(1);
        expect(tables[0].key).toBe('owners');
        expect(tables[0].columns.map((column) => column.key)).toEqual(['name', 'id']);
        expect(tables[0].rows).toEqual([
            { name: 'Ana', id: '1' },
            { name: 'Luis', id: '2' },
        ]);
    });

    it('hides a whole table by prefix', () => {
        expect(collectObjectTables(nestedPayload, { hiddenKeys: ['owners'] })).toEqual([]);
    });
});

describe('layoutParamGroups', () => {
    it('groups tables separately from scalar fields', () => {
        const groups = layoutParamGroups(nestedPayload);
        expect(groups.find((group) => group.key === 'owners')).toMatchObject({
            kind: 'table',
            keys: ['owners'],
        });
        expect(groups.find((group) => group.key === 'data')).toMatchObject({
            kind: 'fields',
            keys: ['data.plate', 'data.owner.name'],
        });
    });
});

describe('relativeLayoutItemKey', () => {
    it('keeps the key when both blocks share a data path', () => {
        expect(relativeLayoutItemKey('results.1', 'results.1', 'owners')).toBe('owners');
    });

    it('re-nests a child field when dropping into a parent block', () => {
        expect(relativeLayoutItemKey('results.1.vehicle', 'results.1', 'plate')).toBe('vehicle.plate');
    });

    it('rejects a move into an unrelated payload', () => {
        expect(relativeLayoutItemKey('results.1', 'results.2', 'owners')).toBeNull();
    });
});

describe('collectLayoutSheetItems', () => {
    it('honors keyOrder across fields and tables', () => {
        const items = collectLayoutSheetItems(nestedPayload, {
            keyOrder: ['owners', 'data.owner.name', 'data.plate'],
        });
        expect(items.map((item) => item.key)).toEqual(['owners', 'data.owner.name', 'data.plate']);
        expect(items[0]).toMatchObject({ kind: 'table' });
    });

    it('lifts a nested array into its own table that grows with more rows', () => {
        const items = collectLayoutSheetItems({
            owners: [
                { name: 'Ana', cars: [{ plate: 'A' }] },
                { name: 'Luis', cars: [{ plate: 'B' }, { plate: 'C' }] },
            ],
        });
        const cars = items.find((item) => item.key === 'owners.cars');
        expect(cars?.kind).toBe('table');
        if (cars?.kind !== 'table') return;
        expect(cars.table.rows.map((row) => row.plate)).toEqual(['A', 'B', 'C']);
        expect(items.find((item) => item.key === 'owners' && item.kind === 'table')).toBeTruthy();
    });
});

describe('designedTableColumns', () => {
    it('keeps extra RUNT columns like tipoTarifa out of a designed SOAT table', () => {
        const soat = {
            soat: [
                { noPoliza: '1', estado: 'VENCIDO', tipoTarifa: '221', fechaExpedicion: '01/01/2020' },
            ],
        };
        const tables = collectObjectTables(soat, {
            keyOrder: ['soat.noPoliza', 'soat.fechaExpedicion', 'soat.estado'],
        });
        expect(tables[0]?.columns.map((column) => column.key)).toEqual(['noPoliza', 'fechaExpedicion', 'estado']);
        expect(collectObjectTables(soat)[0]?.columns.map((column) => column.key)).not.toContain('tipoTarifa');
        expect(
            collectObjectTables(soat, {
                keyOrder: ['soat.noPoliza', 'soat.tipoTarifa', 'soat.estado'],
            })[0]?.columns.map((column) => column.key)
        ).toEqual(['noPoliza', 'estado']);
        expect(designedTableColumns('soat', ['noPoliza', 'estado', 'tipoTarifa'], {
            keyOverrides: { 'soat.estado': { label: 'Estado' } },
        })).toEqual(['estado']);
        expect(
            designedTableColumns('soat', ['noPoliza', 'estado', 'tipoTarifa'], {
                keyOrder: ['soat.noPoliza', 'soat.tipoTarifa', 'soat.estado'],
            })
        ).toEqual(['noPoliza', 'estado']);
    });
});

describe('sortByKeyOrder / applyVisibleKeyReorder', () => {
    it('keeps hidden keys in their slots while reordering visible ones', () => {
        expect(sortByKeyOrder(['a', 'b', 'c'], ['c', 'a'], (key) => key)).toEqual(['c', 'a', 'b']);
        expect(applyVisibleKeyReorder(['a', 'hidden', 'c'], ['c', 'a'])).toEqual(['c', 'hidden', 'a']);
    });
});

describe('isHiddenParamKey / setHiddenParamKey', () => {
    it('matches prefixes and collapses child hides', () => {
        expect(isHiddenParamKey('owners.0.name', ['owners'])).toBe(true);
        expect(setHiddenParamKey(['owners.0.name', 'owners.1.id'], 'owners', false)).toEqual(['owners']);
        expect(setHiddenParamKey(['owners'], 'owners', true)).toEqual([]);
    });
});

describe('flattenSampleResultsForPdf', () => {
    it('replaces nested step results with the preview scalar map', () => {
        const sample = flattenSampleResultsForPdf(
            {
                results: {
                    1: { data: { plate: 'XYZ99', extra: { city: 'Bogotá' } } },
                },
            },
            [{ id: 's1', type: 'keyValueGrid', order: 0, dataPath: 'results.1', hiddenKeys: ['data.extra.city'] }]
        );
        expect(sample.results?.['1']).toEqual({ 'data.plate': 'XYZ99' });
    });

    it('leaves arrays of objects out of the scalar map so they render as tables', () => {
        const sample = flattenSampleResultsForPdf(
            { results: { 1: nestedPayload } },
            [{ id: 's1', type: 'keyValueGrid', order: 0, dataPath: 'results.1' }]
        );
        const result = sample.results?.['1'] as Record<string, string>;
        expect(result['data.plate']).toBe('ABC123');
        expect(result['data.owner.name']).toBe('Ana');
        expect(result['owners.0.name']).toBeUndefined();
        expect(result.owners).toBeUndefined();
    });

    it('applies section keyOrder to the PDF scalar map', () => {
        const sample = flattenSampleResultsForPdf(
            { results: { 1: nestedPayload } },
            [
                {
                    id: 's1',
                    type: 'keyValueGrid',
                    order: 0,
                    dataPath: 'results.1',
                    keyOrder: ['data.owner.name', 'data.plate'],
                },
            ]
        );
        expect(Object.keys(sample.results?.['1'] as object)).toEqual(['data.owner.name', 'data.plate']);
    });
});
