import { describe, expect, it } from 'vitest';
import type { BatchConfiguration } from './smart-batch.service';
import {
    extractRequiredFieldsFromConfig,
    getStepCompatibilityViews,
    isStepInputCompatible,
    mergeEnumValues,
} from './batch-required-fields.util';

const colombiaVehicleConfig: BatchConfiguration = {
    name: 'Colombia Vehicle',
    country: 'Colombia',
    inputFormat: 'csv',
    outputFormat: 'csv',
    mergeStrategy: 'sequential',
    steps: [
        {
            sequence: 1,
            enabled: true,
            appFeature: {
                _id: '1',
                code: 'colombia_api_vehicle_complete_by_plate',
                name: 'Complete Vehicle Report',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE', 'PA', 'NIT'] },
                    { field: 'documentNumber', required: true },
                    { field: 'plate', required: true },
                ],
            },
        },
        {
            sequence: 2,
            enabled: true,
            appFeature: {
                _id: '2',
                code: 'colombia_api_simit_plate',
                name: 'SIMIT Fines by Plate',
                dependencies: [{ field: 'plate', required: true }],
            },
        },
        {
            sequence: 3,
            enabled: true,
            appFeature: {
                _id: '3',
                code: 'colombia_api_simit_agreements',
                name: 'SIMIT Payment Agreements',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE', 'PA', 'RC', 'TI'] },
                    { field: 'documentNumber', required: true },
                ],
            },
        },
    ],
};

describe('mergeEnumValues', () => {
    it('returns sorted unique union preserving first casing', () => {
        expect(mergeEnumValues(['CC', 'CE', 'PA', 'NIT'], ['CC', 'CE', 'PA', 'RC', 'TI'])).toEqual([
            'CC',
            'CE',
            'NIT',
            'PA',
            'RC',
            'TI',
        ]);
    });
});

describe('extractRequiredFieldsFromConfig', () => {
    it('unions documentType enums from all steps instead of last-wins', () => {
        const fields = extractRequiredFieldsFromConfig(colombiaVehicleConfig);
        const documentType = fields.find((f) => f.field === 'documentType');

        expect(documentType?.enumValues).toEqual(['CC', 'CE', 'NIT', 'PA', 'RC', 'TI']);
        expect(documentType?.enumValuesByStep).toHaveLength(2);
    });
});

describe('step compatibility', () => {
    const runtStep = colombiaVehicleConfig.steps[0];
    const agreementsStep = colombiaVehicleConfig.steps[2];

    it('marks NIT compatible with RUNT and incompatible with agreements', () => {
        const input = { documentType: 'NIT', documentNumber: '900123456', plate: 'ABC123' };

        expect(isStepInputCompatible(runtStep, input)).toBe(true);
        expect(isStepInputCompatible(agreementsStep, input)).toBe(false);
    });

    it('marks RC compatible with agreements and incompatible with RUNT', () => {
        const input = { documentType: 'RC', documentNumber: '12345', plate: 'ABC123' };

        expect(isStepInputCompatible(runtStep, input)).toBe(false);
        expect(isStepInputCompatible(agreementsStep, input)).toBe(true);
    });

    it('marks CC compatible with all document-dependent steps', () => {
        const input = { documentType: 'CC', documentNumber: '1032386359', plate: 'ABC123' };
        const views = getStepCompatibilityViews(colombiaVehicleConfig, input);

        expect(views.every((v) => v.compatible)).toBe(true);
    });

    it('returns skip reasons for incompatible steps', () => {
        const views = getStepCompatibilityViews(colombiaVehicleConfig, {
            documentType: 'NIT',
            documentNumber: '900123456',
            plate: 'ABC123',
        });

        const agreements = views.find((v) => v.stepCode === 'colombia_api_simit_agreements');
        expect(agreements?.compatible).toBe(false);
        expect(agreements?.skipReason?.field).toBe('documentType');
        expect(agreements?.skipReason?.value).toBe('NIT');
    });
});
