import { describe, expect, it } from 'vitest';
import { formatCatalogPrice, mergeParamsFromDocs, sanitizeDisplayPayload } from './postman-docs-params.util';
import { ApiEndpoint } from './postman.types';

const endpoint = (overrides: Partial<ApiEndpoint> = {}): ApiEndpoint =>
    ({
        id: 'driver',
        label: 'RUNT Premium',
        code: 'colombia_api_driver',
        method: 'GET',
        url: '/v2/co/runt/conductor',
        params: [
            { key: 'documentType', value: 'CC', type: 'String', required: true },
            { key: 'documentNumber', value: '', type: 'String', required: true },
        ],
        docs: {
            en: {
                params: [
                    { field: 'documentType', description: 'Document type' },
                    { field: 'documentNumber', description: 'Document number' },
                    { field: 'primerApellido', description: 'First last name' },
                ],
            },
        },
        ...overrides,
    }) as ApiEndpoint;

describe('mergeParamsFromDocs', () => {
    it('adds documented optional params missing from dependencies', () => {
        const merged = mergeParamsFromDocs(endpoint());
        expect(merged.params?.map((param) => param.key)).toEqual([
            'documentType',
            'documentNumber',
            'primerApellido',
        ]);
        const lastName = merged.params?.find((param) => param.key === 'primerApellido');
        expect(lastName?.required).toBe(false);
        expect(lastName?.requiredWhen).toEqual({ field: 'documentType', in: ['PA'] });
    });

    it('adds primerApellido for colombia_api_driver even without docs', () => {
        const merged = mergeParamsFromDocs(
            endpoint({
                docs: undefined,
                params: [
                    { key: 'documentType', value: 'CC', type: 'String', required: true },
                    { key: 'documentNumber', value: '', type: 'String', required: true },
                ],
            })
        );
        expect(merged.params?.some((param) => param.key === 'primerApellido')).toBe(true);
    });

    it('does not duplicate existing params', () => {
        const once = mergeParamsFromDocs(endpoint());
        const twice = mergeParamsFromDocs(once);
        expect(twice.params?.filter((param) => param.key === 'primerApellido')).toHaveLength(1);
    });
});

describe('formatCatalogPrice', () => {
    it('rounds obvious float artifacts', () => {
        expect(formatCatalogPrice(0.099999999999998)).toBe('0.1');
        expect(formatCatalogPrice(0.30000000000000004)).toBe('0.3');
        expect(formatCatalogPrice(undefined)).toBe('0');
    });
});

describe('sanitizeDisplayPayload', () => {
    it('rounds nested credit floats without changing ids', () => {
        expect(
            sanitizeDisplayPayload({
                creditsCharged: 0.09999999999999998,
                documentNumber: 1826550277,
            })
        ).toEqual({
            creditsCharged: 0.1,
            documentNumber: 1826550277,
        });
    });
});
