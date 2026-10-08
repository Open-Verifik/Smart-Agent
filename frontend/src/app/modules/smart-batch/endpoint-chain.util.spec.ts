import { describe, expect, it } from 'vitest';
import {
    canAppendToChain,
    canFeed,
    canonicalChainField,
    chainProfileForFeature,
    outputKeysFromDocs,
    seedParamFieldsForFeatures,
    sharedChainFields,
} from './endpoint-chain.util';

describe('canonicalChainField', () => {
    it('maps chassis, BIN, VIN, and owner aliases', () => {
        expect(canonicalChainField('noVin')).toBe('vin');
        expect(canonicalChainField('bin')).toBe('vin');
        expect(canonicalChainField('chasisNumber')).toBe('vin');
        expect(canonicalChainField('plate')).toBe('plate');
        expect(canonicalChainField('propietario')).toBe('documentNumber');
        expect(canonicalChainField('owner')).toBe('documentNumber');
        expect(canonicalChainField('cedula')).toBe('documentNumber');
    });
});

describe('chainProfileForFeature', () => {
    it('uses Postman docs so a plate lookup can feed a VIN lookup', () => {
        const plate = chainProfileForFeature({
            code: 'colombia_api_vehicle_complete_by_plate',
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
                { field: 'plate', required: true },
            ],
        });
        const byVin = chainProfileForFeature({
            code: 'colombia_api_vehicle_complete_by_vin',
            dependencies: [{ field: 'vin', required: true }],
        });

        expect(plate.inputs).toEqual(expect.arrayContaining(['documentType', 'documentNumber', 'plate']));
        expect(plate.outputs).toEqual(expect.arrayContaining(['vin', 'plate']));
        expect(byVin.inputs).toContain('vin');
        expect(canFeed(plate, byVin)).toBe(true);
        expect(sharedChainFields(plate.outputs, byVin.inputs)).toContain('vin');
    });

    it('infers VIN from a plate vehicle lookup even when the sample omits it', () => {
        const plate = chainProfileForFeature({
            code: 'colombia_api_vehicle',
            name: 'Vehicle by plate',
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
                { field: 'plate', required: true },
            ],
        });
        const byVin = chainProfileForFeature({
            code: 'colombia_api_vehicle_complete_by_vin',
            dependencies: [{ field: 'vin', required: true }],
        });
        expect(plate.outputs).toContain('vin');
        expect(canAppendToChain([plate], byVin)).toBe(true);
    });

    it('links identity lookups that share document fields', () => {
        const cedula = chainProfileForFeature({ code: 'colombia_api_identity_lookup' });
        const rethus = chainProfileForFeature({ code: 'colombia_api_rethus' });
        expect(cedula.outputs).toEqual(expect.arrayContaining(['documentNumber', 'documentType', 'fullName']));
        expect(canFeed(cedula, rethus)).toBe(true);
        expect(canAppendToChain([cedula], rethus)).toBe(true);
    });

    it('rejects document-type enums that do not overlap', () => {
        const ceOnly = chainProfileForFeature({
            code: 'synthetic_ce_only',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CE'] },
                { field: 'documentNumber', required: true },
            ],
        });
        const ccOnly = chainProfileForFeature({
            code: 'synthetic_cc_only',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC'] },
                { field: 'documentNumber', required: true },
            ],
        });
        expect(ceOnly.inputEnums.documentType).toEqual(['CE']);
        expect(ccOnly.inputEnums.documentType).toEqual(['CC']);
        expect(canAppendToChain([ceOnly], ccOnly)).toBe(false);
    });

    it('allows document lookups when type enums overlap', () => {
        const mixed = chainProfileForFeature({
            code: 'synthetic_cc_ce',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC', 'CE'] },
                { field: 'documentNumber', required: true },
            ],
        });
        const ccOnly = chainProfileForFeature({
            code: 'synthetic_cc_only',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC'] },
                { field: 'documentNumber', required: true },
            ],
        });
        expect(canAppendToChain([mixed], ccOnly)).toBe(true);
    });

    it('lets a plate-only lookup feed VIN and then owner/cédula lookups', () => {
        const plateOnly = chainProfileForFeature({
            code: 'colombia_api_runt_vehicle_by_plate_only',
            name: 'RUNT vehicle by plate',
            dependencies: [{ field: 'plate', required: true }],
        });
        const byVin = chainProfileForFeature({
            code: 'colombia_api_vehicle_complete_by_vin',
            name: 'Vehicle by VIN',
            dependencies: [{ field: 'vin', required: true }],
        });
        const cedula = chainProfileForFeature({
            code: 'colombia_api_identity_lookup',
            name: 'Consultar cédula',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC', 'CE'] },
                { field: 'documentNumber', required: true },
            ],
        });
        const antecedentes = chainProfileForFeature({
            code: 'colombia_api_procuraduria',
            name: 'Antecedentes',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC'] },
                { field: 'documentNumber', required: true },
            ],
        });

        expect(plateOnly.outputs).toEqual(
            expect.arrayContaining(['plate', 'vin', 'documentNumber', 'documentType'])
        );
        expect(canAppendToChain([plateOnly], byVin)).toBe(true);
        expect(canAppendToChain([plateOnly], cedula)).toBe(true);
        expect(canAppendToChain([plateOnly, cedula], antecedentes)).toBe(true);
        expect(canAppendToChain([plateOnly, byVin], cedula)).toBe(true);
    });

    it('rejects a lookup whose inputs are not in the previous sequence', () => {
        const plateOnly = chainProfileForFeature({
            code: 'colombia_api_runt_vehicle_by_plate_only',
            name: 'RUNT vehicle by plate',
            dependencies: [{ field: 'plate', required: true }],
        });
        const lawsuit = chainProfileForFeature({
            code: 'synthetic_process_only',
            name: 'Consulta por radicado',
            dependencies: [{ field: 'processNumber', required: true }],
        });
        expect(canAppendToChain([plateOnly], lawsuit)).toBe(false);
        expect(canAppendToChain([], plateOnly)).toBe(true);
    });
});

describe('seedParamFieldsForFeatures', () => {
    it('keeps plate as the only typed field in a plate → VIN → cédula cascade', () => {
        expect(
            seedParamFieldsForFeatures([
                {
                    code: 'colombia_api_runt_vehicle_by_plate_only',
                    name: 'RUNT vehicle by plate',
                    dependencies: [{ field: 'plate', required: true }],
                },
                {
                    code: 'colombia_api_vehicle_complete_by_vin',
                    dependencies: [{ field: 'vin', required: true }],
                },
                {
                    code: 'colombia_api_identity_lookup',
                    dependencies: [
                        { field: 'documentType', required: true },
                        { field: 'documentNumber', required: true },
                    ],
                },
            ])
        ).toEqual(['plate']);
    });

    it('asks for document type and number when the cascade starts with cédula', () => {
        expect(
            seedParamFieldsForFeatures([
                {
                    code: 'colombia_api_identity_lookup',
                    dependencies: [
                        { field: 'documentType', required: true },
                        { field: 'documentNumber', required: true },
                    ],
                },
                {
                    code: 'colombia_api_procuraduria',
                    dependencies: [
                        { field: 'documentType', required: true },
                        { field: 'documentNumber', required: true },
                    ],
                },
            ])
        ).toEqual(['documentType', 'documentNumber']);
    });
});

describe('outputKeysFromDocs', () => {
    it('reads a parsed 200 body from AppFeature.docs', () => {
        const keys = outputKeysFromDocs({
            en: {
                responses: [
                    {
                        status: '200',
                        body: { data: { documentNumber: '1', noVin: 'ABC' } },
                    },
                ],
            },
        });
        expect(keys).toEqual(expect.arrayContaining(['documentNumber', 'vin']));
    });
});
