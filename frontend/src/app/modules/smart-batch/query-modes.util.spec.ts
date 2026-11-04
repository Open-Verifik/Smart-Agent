import { describe, expect, it } from 'vitest';
import { allowedQueryFields, queryModesForFeature } from './query-modes.util';

const fbi = {
    dependencies: [
        { field: 'fullName', required: false, dependencyGroup: '2', description: 'Full name' },
        {
            field: 'documentType',
            required: false,
            dependencyGroup: '1',
            enum: ['CC', 'CE'],
        },
        { field: 'documentNumber', required: false, dependencyGroup: '1' },
        {
            field: 'dateOfBirth',
            required: false,
            dependencyGroup: '1',
            requiredWhen: { field: 'documentType', in: ['CCPA', 'CI'] },
        },
        {
            field: 'expirationDate',
            required: false,
            dependencyGroup: '1',
            requiredWhen: { field: 'documentType', in: ['CE', 'PPT'] },
        },
        { field: 'force', required: false, dependencyGroup: '1' },
    ],
};

describe('queryModesForFeature', () => {
    it('orders name as option A and document as option B', () => {
        const modes = queryModesForFeature(fbi);
        expect(modes.map((mode) => mode.letter)).toEqual(['A', 'B']);
        expect(modes[0].id).toBe('2');
        expect(modes[0].fields.map((field) => field.field)).toEqual(['fullName']);
        expect(modes[1].fields.map((field) => field.field)).toEqual([
            'documentType',
            'documentNumber',
            'dateOfBirth',
            'expirationDate',
        ]);
        expect(modes[1].fields.find((field) => field.field === 'dateOfBirth')?.requiredWhen?.values).toEqual(['CCPA', 'CI']);
    });

    it('returns no options when the endpoint has a single way to query', () => {
        expect(
            queryModesForFeature({
                dependencies: [
                    { field: 'documentType', required: true, dependencyGroup: '1' },
                    { field: 'documentNumber', required: true, dependencyGroup: '1' },
                ],
            })
        ).toEqual([]);
        expect(queryModesForFeature({ dependencies: [{ field: 'plate', required: true }] })).toEqual([]);
    });

    it('limits the request to the selected option', () => {
        expect([...(allowedQueryFields(fbi, '2') ?? [])]).toEqual(['fullName']);
        expect(allowedQueryFields(fbi, '1')?.has('documentNumber')).toBe(true);
        expect(allowedQueryFields({ dependencies: [{ field: 'plate', required: true }] }, '1')).toBeNull();
    });
});
