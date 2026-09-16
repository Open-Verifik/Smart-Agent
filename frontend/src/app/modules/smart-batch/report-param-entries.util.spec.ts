import { describe, expect, it } from 'vitest';
import {
    collectScalarParams,
    flattenSampleResultsForPdf,
} from './report-param-entries.util';

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
            owners: [{ name: 'Ana', id: 1 }, { name: 'Luis', id: 2 }],
        });
        expect(rows.map((row) => row.key)).toEqual([
            'owners.0.name',
            'owners.0.id',
            'owners.1.name',
            'owners.1.id',
        ]);
        expect(rows[0]).toMatchObject({ label: 'Owners · 1 · Name', value: 'Ana' });
    });

    it('honors hiddenKeys', () => {
        const rows = collectScalarParams({ a: 1, b: 2 }, { hiddenKeys: ['b'] });
        expect(rows.map((row) => row.key)).toEqual(['a']);
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
});
