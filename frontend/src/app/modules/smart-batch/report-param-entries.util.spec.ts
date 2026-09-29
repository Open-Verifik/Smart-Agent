import { describe, expect, it } from 'vitest';
import {
    applyVisibleKeyReorder,
    collectLayoutSheetItems,
    collectObjectTables,
    collectScalarParams,
    flattenSampleResultsForPdf,
    isHiddenParamKey,
    layoutParamGroups,
    setHiddenParamKey,
    sortByKeyOrder,
} from './report-param-entries.util';

const nestedPayload = {
    data: { plate: 'ABC123', owner: { name: 'Ana' } },
    owners: [
        { name: 'Ana', id: 1 },
        { name: 'Luis', id: 2 },
    ],
};

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
        expect(groups.find((group) => group.key === 'owners')).toMatchObject({ kind: 'table' });
        expect(groups.find((group) => group.key === 'data')).toMatchObject({
            kind: 'fields',
            keys: ['data.plate', 'data.owner.name'],
        });
    });
});

describe('collectLayoutSheetItems', () => {
    it('honors keyOrder across fields and tables', () => {
        const items = collectLayoutSheetItems(nestedPayload, {
            keyOrder: ['owners', 'data.owner.name', 'data.plate'],
        });
        expect(items.map((item) => item.key)).toEqual(['owners', 'data.owner.name', 'data.plate']);
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

    it('keeps array-of-object fields as one table block so the last page does not grow', () => {
        const sample = flattenSampleResultsForPdf(
            { results: { 1: nestedPayload } },
            [{ id: 's1', type: 'keyValueGrid', order: 0, dataPath: 'results.1' }]
        );
        const result = sample.results?.['1'] as Record<string, string>;
        expect(result['data.plate']).toBe('ABC123');
        expect(result['data.owner.name']).toBe('Ana');
        expect(result['owners.0.name']).toBeUndefined();
        expect(result.owners).toContain('Ana');
        expect(result.owners).toContain('Luis');
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
                    keyOrder: ['owners', 'data.plate', 'data.owner.name'],
                },
            ]
        );
        expect(Object.keys(sample.results?.['1'] as object)).toEqual(['owners', 'data.plate', 'data.owner.name']);
    });
});
