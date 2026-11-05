import { describe, expect, it } from 'vitest';
import { resolveStepParams } from './batch-param-resolver';

describe('resolveStepParams', () => {
    it('fills VIN from a previous plate payload when the row only has plate', () => {
        const params = resolveStepParams({
            step: {},
            dependencies: [{ field: 'vin', required: true }],
            inputData: { plate: 'ABC123' },
            results: {
                1: { data: { noVin: 'WVWZZZ1JZXW000001', placa: 'ABC123' } },
            },
        });
        expect(params).toEqual({ vin: 'WVWZZZ1JZXW000001' });
    });

    it('fills owner document fields from a previous vehicle payload', () => {
        const params = resolveStepParams({
            step: {},
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
            ],
            inputData: { plate: 'ABC123' },
            results: {
                1: { propietario: '123456789', documentType: 'CC' },
            },
        });
        expect(params.documentNumber).toBe('123456789');
        expect(params.documentType).toBe('CC');
    });

    it('fills VIN from parameterDefaults chain templates', () => {
        const params = resolveStepParams({
            step: { parameterDefaults: { vin: '{{results.1.vin}}' } },
            dependencies: [{ field: 'vin', required: true }],
            inputData: { plate: 'ABC123' },
            results: {
                1: { vin: 'WVWZZZ1JZXW000001', plate: 'ABC123' },
            },
        });
        expect(params.vin).toBe('WVWZZZ1JZXW000001');
    });

    it('sends only the name when the FBI consult was configured by name', () => {
        const dependencies = [
            { field: 'fullName', dependencyGroup: '2' },
            { field: 'documentType', dependencyGroup: '1' },
            { field: 'documentNumber', dependencyGroup: '1' },
        ];
        const params = resolveStepParams({
            step: { queryMode: '2', parameterDefaults: { fullName: '{{results.1.fullName}}' } },
            dependencies,
            inputData: { documentType: 'CC', documentNumber: '1032386359' },
            results: { 1: { fullName: 'ANA PEREZ' } },
        });
        expect(params).toEqual({ fullName: 'ANA PEREZ' });
    });
});
