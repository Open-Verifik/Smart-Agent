import { describe, expect, it } from 'vitest';
import {
    getPostmanRequestValidationIssues,
    getPostmanXorParamLayout,
    getRequiredFieldKeysForXorOption,
    isParamRequiredInPostmanUi,
} from './postman-request-validation';
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

    it('uses the Mexico triple layout for professional license endpoints', () => {
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

        expect(layout.kind).toBe('mexicoLicenseTriple');
        if (layout.kind !== 'mexicoLicenseTriple') return;
        expect(layout.nameRows.map((row) => row.param.key)).toEqual(['firstName', 'lastName']);
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

describe('getPostmanRequestValidationIssues colombia cedula barcode', () => {
    const barcodeEndpoint = (): ApiEndpoint =>
        ({
            id: 'co-barcode',
            label: 'Colombia cédula barcode',
            code: 'colombia_api_cedula_barcode',
            method: 'POST',
            url: '/v2/co/cedula/barcode',
            dependencies: [{ field: 'backImage', type: 'String', required: true }],
            body: { backImage: '' },
        }) as ApiEndpoint;

    it('requires backImage in the POST JSON body', () => {
        const issues = getPostmanRequestValidationIssues(barcodeEndpoint(), '{}');
        expect(issues.map((issue) => issue.field)).toContain('backImage');
    });

    it('accepts a body with backImage', () => {
        const body = JSON.stringify({ backImage: 'data:image/jpeg;base64,abc' });
        expect(getPostmanRequestValidationIssues(barcodeEndpoint(), body)).toEqual([]);
    });
});

describe('colombia_api_registraduria_matrimonio required indicators and validation', () => {
    const matrimonioEndpoint = (): ApiEndpoint =>
        ({
            id: 'matrimonio',
            label: 'Marriage civil registry (SCCRC)',
            code: 'colombia_api_registraduria_matrimonio',
            method: 'GET',
            url: '/v2/co/registraduria/matrimonio',
            dependencies: [
                { field: 'documentNumber', dependencyGroup: '1', required: false },
                { field: 'primerNombre', dependencyGroup: '2', required: false },
                { field: 'primerApellido', dependencyGroup: '2', required: false },
                { field: 'segundoNombre', dependencyGroup: '2', required: false },
                { field: 'segundoApellido', dependencyGroup: '2', required: false },
                { field: 'fecha', dependencyGroup: '2', dateFormat: 'dd/MM/yyyy', required: false },
                { field: 'serial', dependencyGroup: '3', required: false },
                { field: 'sexo', enum: ['MASCULINO', 'FEMENINO', 'M', 'F'], required: false },
            ],
            params: [
                { key: 'documentNumber', value: '', type: 'string', required: false, dependencyGroup: '1' },
                { key: 'primerNombre', value: '', type: 'string', required: false, dependencyGroup: '2' },
                { key: 'primerApellido', value: '', type: 'string', required: false, dependencyGroup: '2' },
                { key: 'segundoNombre', value: '', type: 'string', required: false, dependencyGroup: '2' },
                { key: 'segundoApellido', value: '', type: 'string', required: false, dependencyGroup: '2' },
                {
                    key: 'fecha',
                    value: '',
                    type: 'string',
                    required: false,
                    dependencyGroup: '2',
                    dateFormat: 'dd/MM/yyyy',
                },
                { key: 'serial', value: '', type: 'string', required: false, dependencyGroup: '3' },
                {
                    key: 'sexo',
                    value: '',
                    type: 'string',
                    required: false,
                    enum: ['MASCULINO', 'FEMENINO', 'M', 'F'],
                },
            ],
        }) as ApiEndpoint;

    it('marks primerNombre, primerApellido, sexo, and fecha required in Option A while leaving second names optional', () => {
        const ep = matrimonioEndpoint();
        const layout = getPostmanXorParamLayout(ep);
        expect(layout.kind).toBe('xor');
        if (layout.kind !== 'xor') return;

        expect(getRequiredFieldKeysForXorOption(ep, layout.nameRows, 'name')).toEqual([
            'primerNombre',
            'primerApellido',
            'sexo',
            'fecha',
        ]);
        expect(isParamRequiredInPostmanUi(ep, { key: 'segundoNombre', required: false }, 'name')).toBe(
            false
        );
        expect(
            isParamRequiredInPostmanUi(ep, { key: 'segundoApellido', required: false }, 'name')
        ).toBe(false);
        expect(getRequiredFieldKeysForXorOption(ep, layout.documentRows, 'document')).toEqual([
            'documentNumber',
            'sexo',
        ]);
        expect(getRequiredFieldKeysForXorOption(ep, layout.serialRows, 'serial')).toEqual([
            'serial',
        ]);
    });

    it('blocks Option A when sexo or fecha is missing', () => {
        const ep = matrimonioEndpoint();
        ep.params = ep.params!.map((p) => {
            if (p.key === 'primerNombre') return { ...p, value: 'MARIA' };
            if (p.key === 'primerApellido') return { ...p, value: 'LOPEZ' };
            return p;
        });

        const fields = getPostmanRequestValidationIssues(ep, null).map((issue) => issue.field);
        expect(fields).toContain('sexo');
        expect(fields).toContain('fecha');
    });

    it('blocks Option B when sexo is missing and allows Option C serial without sexo', () => {
        const docEp = matrimonioEndpoint();
        docEp.params = docEp.params!.map((p) =>
            p.key === 'documentNumber' ? { ...p, value: '10000001' } : p
        );
        expect(getPostmanRequestValidationIssues(docEp, null).map((i) => i.field)).toContain('sexo');

        const serialEp = matrimonioEndpoint();
        serialEp.params = serialEp.params!.map((p) =>
            p.key === 'serial' ? { ...p, value: '0042012345' } : p
        );
        expect(getPostmanRequestValidationIssues(serialEp, null)).toEqual([]);
    });
});

describe('company and citizen registry validation', () => {
    const company = (documentNumber = '', documentType = ''): ApiEndpoint =>
        ({
            id: 'au-company',
            label: 'Australia company',
            code: 'australia_api_company_lookup',
            method: 'GET',
            url: 'v2/au/company',
            country: 'Australia',
            category: 'BUSINESS',
            dependencies: [
                { field: 'documentNumber', type: 'String', required: true },
                { field: 'documentType', type: 'String', required: false },
                { field: 'force', type: 'Boolean', required: false },
            ],
            params: [
                { key: 'documentNumber', value: documentNumber, type: 'String', required: true },
                { key: 'documentType', value: documentType, type: 'String', required: false },
                { key: 'force', value: 'true', type: 'Boolean', required: false },
            ],
        }) as ApiEndpoint;

    it('requires documentNumber and allows an empty optional documentType', () => {
        expect(
            getPostmanRequestValidationIssues(company(), null).map((issue) => issue.field)
        ).toContain('documentNumber');
        expect(getPostmanRequestValidationIssues(company('51824753556'), null)).toEqual([]);
    });

    it('still requires documentType when it shares a dependency group with documentNumber', () => {
        const grouped = company('51824753556', '');
        grouped.dependencies = [
            { field: 'documentNumber', required: false, dependencyGroup: '1' },
            { field: 'documentType', required: false, dependencyGroup: '1' },
        ];
        expect(
            getPostmanRequestValidationIssues(grouped, null).map((issue) => issue.translationKey)
        ).toContain('createBatch.pairDocumentTypeRequiredWhenNumber');
    });
});
