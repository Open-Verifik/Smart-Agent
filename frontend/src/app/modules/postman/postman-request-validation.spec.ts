import { describe, expect, it } from 'vitest';
import { getPostmanXorParamLayout } from './postman-request-validation';
import { ApiEndpoint } from './postman.types';

const endpoint = (overrides: Partial<ApiEndpoint> = {}): ApiEndpoint =>
    ({
        id: 'cedula',
        label: 'Cedula',
        code: 'colombia_api_cedula',
        method: 'GET',
        url: '/v2/co/cedula',
        params: [
            { key: 'force', value: '1', type: 'string', required: false },
            { key: 'documentNumber', value: '', type: 'string', required: true },
            { key: '', value: '', type: 'string', required: false, description: '' },
        ],
        ...overrides,
    }) as ApiEndpoint;

describe('getPostmanXorParamLayout', () => {
    it('keeps a blank row and a user-added force row at their original indexes', () => {
        const layout = getPostmanXorParamLayout(endpoint());

        expect(layout.kind).toBe('flat');
        if (layout.kind !== 'flat') return;

        expect(layout.allRows.map((row) => ({ index: row.index, key: row.param.key }))).toEqual([
            { index: 0, key: 'force' },
            { index: 1, key: 'documentNumber' },
            { index: 2, key: '' },
        ]);
    });

    it('puts a blank added param in other rows when the endpoint uses search modes', () => {
        const layout = getPostmanXorParamLayout(
            endpoint({
                dependencies: [
                    { field: 'fullName', dependencyGroup: 'name' },
                    { field: 'documentNumber', dependencyGroup: 'document' },
                ],
                params: [
                    { key: 'force', value: '', type: 'string', required: false },
                    { key: 'fullName', value: '', type: 'string', required: false, dependencyGroup: 'name' },
                    { key: 'documentNumber', value: '', type: 'string', required: true, dependencyGroup: 'document' },
                    { key: '', value: '', type: 'string', required: false },
                ],
            })
        );

        expect(layout.kind).toBe('xor');
        if (layout.kind !== 'xor') return;

        expect(layout.otherRows.map((row) => ({ index: row.index, key: row.param.key }))).toEqual([
            { index: 0, key: 'force' },
            { index: 3, key: '' },
        ]);
        expect(layout.nameRows.map((row) => row.param.key)).toEqual(['fullName']);
        expect(layout.documentRows.map((row) => row.param.key)).toEqual(['documentNumber']);
    });
});
