import { describe, expect, it } from 'vitest';
import runtFixture from './fixtures/lzo551-runt-vehicle-by-plate.json';
import simitFixture from './fixtures/lzo551-simit-plate.json';
import agreementsFixture from './fixtures/lzo551-simit-agreements-empty.json';
import sinisterFixture from './fixtures/lzo551-fasecolda-sinister-empty.json';
import valuesFixture from './fixtures/lzo551-fasecolda-values.json';
import inputFixture from './fixtures/lzo551-input.json';
import { buildColombiaVehicleReport } from './colombia-vehicle-report.composer';
import { BATCH_INPUT_META_SKIPPED_STEPS_KEY } from '../batch-required-fields.util';
import type { BatchStep } from '../smart-batch.service';

const steps: BatchStep[] = [
    {
        sequence: 1,
        enabled: true,
        appFeature: { _id: '1', code: 'colombia_api_vehicle_complete_by_plate', name: 'RUNT' },
    },
    {
        sequence: 2,
        enabled: true,
        appFeature: { _id: '2', code: 'colombia_api_simit_plate', name: 'SIMIT' },
    },
    {
        sequence: 3,
        enabled: true,
        appFeature: { _id: '3', code: 'colombia_api_simit_agreements', name: 'Agreements' },
    },
    {
        sequence: 4,
        enabled: true,
        appFeature: {
            _id: '4',
            code: 'colombia_api_vehicle_sinister_fasecolda_by_plate',
            name: 'Sinister',
        },
    },
    {
        sequence: 5,
        enabled: true,
        appFeature: {
            _id: '5',
            code: 'colombia_api_vehicle_valores_fasecolda_by_plate',
            name: 'Values',
        },
    },
];

describe('buildColombiaVehicleReport', () => {
    it('resolves blocks by feature code regardless of step sequence order', () => {
        const reordered: BatchStep[] = [...steps].reverse().map((s, i) => ({
            ...s,
            sequence: i + 1,
        }));

        const row = {
            rowIndex: 0,
            inputData: inputFixture,
            results: {
                1: valuesFixture,
                2: sinisterFixture,
                3: agreementsFixture,
                4: simitFixture,
                5: runtFixture,
            },
            errors: [],
        };

        const report = buildColombiaVehicleReport(row, reordered, { batchName: 'LZO551 test' });

        expect(report.meta.plate).toBe('LZO551');
        expect(report.meta.vin).toBe('LVBV3JBB7RY003089');
        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('ok');
        expect(report.blocks.simit_fines_by_plate?.displayRows?.some((r) => r.label === 'Total general')).toBe(
            true
        );
        expect(report.blocks.fasecolda_sinister?.status).toBe('empty');
        expect(report.summary.simitTotalGeneral).toContain('$');
        expect(report.summary.sinisterCount).toBe(0);
    });

    it('builds full LZO551 report with ordered steps', () => {
        const row = {
            rowIndex: 0,
            inputData: inputFixture,
            results: {
                1: runtFixture,
                2: simitFixture,
                3: agreementsFixture,
                4: sinisterFixture,
                5: valuesFixture,
            },
            errors: [],
        };

        const report = buildColombiaVehicleReport(row, steps);

        expect(report.meta.documentNumber).toBe('53164689');
        expect(report.blocks.runt_vehicle_by_plate?.tables?.length).toBeGreaterThan(0);
        expect(report.blocks.simit_fines_by_plate?.tables?.[0]?.rows.length).toBe(1);
        expect(report.blocks.simit_agreements?.status).toBe('empty');
        expect(report.blocks.fasecolda_values?.displayRows?.some((r) => r.label === 'BCPP')).toBe(true);
    });

    it('surfaces skip reason when agreements step was skipped for documentType', () => {
        const row = {
            rowIndex: 0,
            inputData: {
                ...inputFixture,
                documentType: 'NIT',
                [BATCH_INPUT_META_SKIPPED_STEPS_KEY]: [
                    {
                        sequence: 3,
                        stepName: 'Agreements',
                        stepCode: 'colombia_api_simit_agreements',
                        field: 'documentType',
                        value: 'NIT',
                        allowedValues: ['CC', 'CE', 'PA', 'RC', 'TI'],
                    },
                ],
            },
            results: {
                1: runtFixture,
                2: simitFixture,
                4: sinisterFixture,
                5: valuesFixture,
            },
            errors: [],
        };

        const report = buildColombiaVehicleReport(row, steps);

        expect(report.blocks.simit_agreements?.status).toBe('skipped');
        expect(report.blocks.simit_agreements?.skipMessage).toContain('NIT');
    });
});
