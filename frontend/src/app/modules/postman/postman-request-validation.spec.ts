import { describe, expect, it } from 'vitest';
import { getPostmanRequestValidationIssues, getPostmanXorParamLayout } from './postman-request-validation';
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

    it('treats firstName and lastName as a name mode when both groups exist', () => {
        const layout = getPostmanXorParamLayout(
            endpoint({
                code: 'mexico_api_cedula_profesional',
                dependencies: [
                    { field: 'documentType', dependencyGroup: '1' },
                    { field: 'documentNumber', dependencyGroup: '1' },
                    { field: 'firstName', dependencyGroup: '2' },
                    { field: 'lastName', dependencyGroup: '2' },
                ],
                params: [
                    { key: 'documentType', value: '', type: 'string', required: false, dependencyGroup: '1' },
                    { key: 'documentNumber', value: '', type: 'string', required: false, dependencyGroup: '1' },
                    { key: 'firstName', value: '', type: 'string', required: false, dependencyGroup: '2' },
                    { key: 'lastName', value: '', type: 'string', required: false, dependencyGroup: '2' },
                ],
            })
        );

        expect(layout.kind).toBe('xor');
        if (layout.kind !== 'xor') return;
        expect(layout.nameRows.map((row) => row.param.key)).toEqual(['firstName', 'lastName']);
        expect(layout.documentRows.map((row) => row.param.key)).toEqual(['documentType', 'documentNumber']);
    });

    it('keeps a single firstName and lastName pair flat when there is only one dependency group', () => {
        const layout = getPostmanXorParamLayout(
            endpoint({
                dependencies: [
                    { field: 'firstName', dependencyGroup: '1' },
                    { field: 'lastName', dependencyGroup: '1' },
                ],
                params: [
                    { key: 'firstName', value: 'ANA', type: 'string', required: true, dependencyGroup: '1' },
                    { key: 'lastName', value: 'LOPEZ', type: 'string', required: true, dependencyGroup: '1' },
                ],
            })
        );

        expect(layout.kind).toBe('flat');
    });
});

describe('getPostmanRequestValidationIssues name mode', () => {
    const cedula = (): ApiEndpoint =>
        endpoint({
            code: 'mexico_api_cedula_profesional',
            dependencies: [
                { field: 'documentType', dependencyGroup: '1' },
                { field: 'documentNumber', dependencyGroup: '1' },
                { field: 'firstName', dependencyGroup: '2' },
                { field: 'lastName', dependencyGroup: '2' },
            ],
            params: [
                { key: 'documentType', value: '', type: 'string', required: false, dependencyGroup: '1' },
                { key: 'documentNumber', value: '', type: 'string', required: false, dependencyGroup: '1' },
                { key: 'firstName', value: '', type: 'string', required: false, dependencyGroup: '2' },
                { key: 'lastName', value: '', type: 'string', required: false, dependencyGroup: '2' },
            ],
        });

    it('accepts document mode when both document fields are filled', () => {
        const ep = cedula();
        ep.params = ep.params.map((param) => {
            if (param.key === 'documentType') return { ...param, value: 'CURP' };
            if (param.key === 'documentNumber') return { ...param, value: 'LOPE900501HDFGRN01' };
            return param;
        });

        expect(getPostmanRequestValidationIssues(ep, null).map((issue) => issue.field)).toEqual([]);
    });

    it('accepts name mode when firstName and lastName are both filled', () => {
        const ep = cedula();
        ep.params = ep.params.map((param) => {
            if (param.key === 'firstName') return { ...param, value: 'ANA' };
            if (param.key === 'lastName') return { ...param, value: 'LOPEZ RUIZ' };
            return param;
        });

        expect(getPostmanRequestValidationIssues(ep, null).map((issue) => issue.field)).toEqual([]);
    });

    it('requires both name fields when name mode is active and one is empty', () => {
        const ep = cedula();
        ep.params = ep.params.map((param) => {
            if (param.key === 'firstName') return { ...param, value: 'ANA' };
            return param;
        });

        const fields = getPostmanRequestValidationIssues(ep, null).map((issue) => issue.field);
        expect(fields).toContain('lastName');
    });

    it('reports a leak when document and name modes are mixed', () => {
        const ep = cedula();
        ep.params = ep.params.map((param) => {
            if (param.key === 'documentType') return { ...param, value: 'CURP' };
            if (param.key === 'documentNumber') return { ...param, value: 'LOPE900501HDFGRN01' };
            if (param.key === 'firstName') return { ...param, value: 'ANA' };
            if (param.key === 'lastName') return { ...param, value: 'LOPEZ RUIZ' };
            return param;
        });

        const issues = getPostmanRequestValidationIssues(ep, null);
        expect(issues.map((issue) => issue.translationKey)).toContain('createBatch.validationXorBothModes');
    });

    it('requires a mode when document and name fields are all empty', () => {
        const issues = getPostmanRequestValidationIssues(cedula(), null);
        expect(issues.map((issue) => issue.translationKey)).toContain('createBatch.validationXorNeitherMode');
    });
});
