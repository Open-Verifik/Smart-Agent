import { describe, expect, it } from 'vitest';
import runtFixture from './fixtures/lzo551-runt-vehicle-by-plate.json';
import simitFixture from './fixtures/lzo551-simit-plate.json';
import agreementsFixture from './fixtures/lzo551-simit-agreements-empty.json';
import sinisterFixture from './fixtures/lzo551-fasecolda-sinister-empty.json';
import valuesFixture from './fixtures/lzo551-fasecolda-values.json';
import inputFixture from './fixtures/lzo551-input.json';
import {
    COLOMBIA_VEHICLE_REPORT_STEPS,
    KYX455_BATCH_ROW,
} from './fixtures/kyx455-preview-data';
import { GMP82I_BATCH_ROW } from './fixtures/gmp82i-preview-data';
import { ZFG04E_BATCH_ROW } from './fixtures/zfg04e-preview-data';
import { DSV067_BATCH_ROW } from './fixtures/dsv067-preview-data';
import {
    ABC123_BATCH_ROW,
    FTR223_BATCH_ROW,
    HXR704_BATCH_ROW,
    ODG78E_BATCH_ROW,
    TAX121_BATCH_ROW,
} from './fixtures/batch-samples-preview';
import { buildColombiaVehicleReport } from './colombia-vehicle-report.composer';
import { humanizeColombiaVehicleError } from './colombia-vehicle-report.utils';
import { BATCH_INPUT_META_SKIPPED_STEPS_KEY } from '../batch-required-fields.util';
import type { BatchStep } from '../smart-batch.service';

const steps: BatchStep[] = COLOMBIA_VEHICLE_REPORT_STEPS;

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

    it('builds KYX455 report when RUNT owner does not match (partial PDF case)', () => {
        const report = buildColombiaVehicleReport(KYX455_BATCH_ROW, steps, {
            batchName: 'KYX455 owner mismatch',
        });

        expect(report.meta.plate).toBe('KYX455');
        expect(report.meta.documentType).toBe('NIT');
        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('error');
        expect(report.blocks.runt_vehicle_by_plate?.errorMessage).toBe(
            humanizeColombiaVehicleError('current_owners_dont_match')
        );
        expect(report.blocks.simit_fines_by_plate?.status).toBe('ok');
        expect(report.blocks.simit_agreements?.status).toBe('skipped');
        expect(report.blocks.fasecolda_sinister?.status).toBe('empty');
        expect(report.blocks.fasecolda_values?.status).toBe('ok');
        expect(report.blocks.fasecolda_values?.displayRows?.some((r) => r.label === 'Marca')).toBe(true);
        expect(report.summary.simitTotalGeneral).toContain('$');
        expect(report.summary.sinisterCount).toBe(0);
        expect(report.summary.soatVigente).toBeUndefined();
    });

    it('builds GMP82I report when Fasecolda values are not found (partial PDF case)', () => {
        const report = buildColombiaVehicleReport(GMP82I_BATCH_ROW, steps, {
            batchName: 'GMP82I Fasecolda values not found',
        });

        expect(report.meta.plate).toBe('GMP82I');
        expect(report.meta.documentNumber).toBe('1001503915');
        expect(report.meta.vin).toBe('9G5JAW468VVTC4508');
        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('ok');
        expect(report.blocks.runt_vehicle_by_plate?.data?.informacionGeneral?.marca).toBe('HERO');
        expect(report.summary.soatVigente).toBe('VIGENTE');
        expect(report.blocks.simit_fines_by_plate?.status).toBe('ok');
        expect(report.blocks.simit_agreements?.status).toBe('empty');
        expect(report.blocks.fasecolda_sinister?.status).toBe('empty');
        expect(report.blocks.fasecolda_values?.status).toBe('error');
        expect(report.blocks.fasecolda_values?.errorMessage).toBe(
            humanizeColombiaVehicleError('Record not found.')
        );
        expect(report.summary.simitTotalGeneral).toContain('$');
        expect(report.summary.sinisterCount).toBe(0);
    });

    it('builds ZFG04E moto report — expired RTM, empty SIMIT, acuerdosPagos, values NotFound', () => {
        const report = buildColombiaVehicleReport(ZFG04E_BATCH_ROW, steps, {
            batchName: 'ZFG04E moto',
        });

        expect(report.meta.plate).toBe('ZFG04E');
        expect(report.meta.vin).toBe('9FMJA2593LF002583');
        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('ok');
        expect(report.blocks.runt_vehicle_by_plate?.displayRows?.some((r) => r.label === 'Clase')).toBe(
            true
        );
        expect(
            report.blocks.runt_vehicle_by_plate?.displayRows?.some(
                (r) => r.label === 'RTM — Vigente' && r.value.includes('No')
            )
        ).toBe(true);
        expect(report.summary.soatVigente).toBe('VIGENTE');
        expect(report.summary.rtmVigente).toBe('NO');

        expect(report.blocks.simit_fines_by_plate?.status).toBe('ok');
        expect(
            report.blocks.simit_fines_by_plate?.displayRows?.some((r) => r.label === 'Multas')
        ).toBe(true);
        expect(
            report.blocks.simit_fines_by_plate?.displayRows?.some((r) => r.label === 'Nota')
        ).toBe(true);

        expect(report.blocks.simit_agreements?.status).toBe('empty');
        expect(report.blocks.fasecolda_sinister?.status).toBe('empty');
        expect(report.blocks.fasecolda_values?.status).toBe('error');
        expect(report.blocks.fasecolda_values?.errorMessage).toBe(
            humanizeColombiaVehicleError('Record not found.')
        );
    });

    it('builds DSV067 Mazda CX-5 report — Fasecolda values ok, RUNT/SIMIT align with plate', () => {
        const report = buildColombiaVehicleReport(DSV067_BATCH_ROW, steps, {
            batchName: 'DSV067 Mazda',
        });

        expect(report.meta.plate).toBe('DSV067');
        expect(report.meta.vin).toBe('JM8KE2W72J0420517');
        expect(report.meta.documentNumber).toBe('22468888');
        const runtInfo = (
            report.blocks.runt_vehicle_by_plate?.data as Record<string, unknown> | undefined
        )?.informacionGeneral as Record<string, unknown> | undefined;
        expect(runtInfo?.marca).toBe('MAZDA');
        expect(runtInfo?.modelo).toBe('2018');

        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('ok');
        expect(report.summary.soatVigente).toBe('VIGENTE');
        expect(report.summary.rtmVigente).toBe('NO');

        expect(report.blocks.simit_fines_by_plate?.status).toBe('ok');
        expect(
            report.blocks.simit_fines_by_plate?.displayRows?.some((r) => r.label === 'Nota')
        ).toBe(true);
        expect(report.blocks.simit_agreements?.status).toBe('empty');
        expect(report.blocks.fasecolda_sinister?.status).toBe('empty');

        expect(report.blocks.fasecolda_values?.status).toBe('ok');
        expect(
            report.blocks.fasecolda_values?.displayRows?.some(
                (r) => r.label === 'BCPP' && String(r.value).includes('170')
            )
        ).toBe(true);
        expect(
            report.blocks.fasecolda_values?.displayRows?.some(
                (r) => r.label === 'Marca' && r.value === 'MAZDA'
            )
        ).toBe(true);
        expect(report.summary.sinisterCount).toBe(0);
    });

    it('builds TAX121 report with three SIMIT multas and full Fasecolda', () => {
        const report = buildColombiaVehicleReport(TAX121_BATCH_ROW, steps);

        expect(report.meta.plate).toBe('TAX121');
        expect(report.blocks.simit_fines_by_plate?.status).toBe('ok');
        expect(report.blocks.simit_fines_by_plate?.tables?.[0]?.rows.length).toBe(3);
        expect(report.blocks.fasecolda_values?.status).toBe('ok');
        expect(report.summary.sinisterCount).toBe(0);
    });

    it('builds ABC123 report with one sinister claim and heavy SIMIT consulta', () => {
        const report = buildColombiaVehicleReport(ABC123_BATCH_ROW, steps);

        expect(report.meta.plate).toBe('ABC123');
        expect(report.blocks.fasecolda_sinister?.status).toBe('ok');
        expect(report.summary.sinisterCount).toBe(1);
        expect(
            report.blocks.fasecolda_sinister?.displayRows?.some((r) => r.label === 'Total siniestros')
        ).toBe(true);
        expect(
            report.blocks.simit_fines_by_plate?.displayRows?.some(
                (r) => r.label === 'Multas en consulta' && r.value === '1051'
            )
        ).toBe(true);
    });

    it('builds HXR704 when RUNT is NotFound but plate-only steps succeed', () => {
        const report = buildColombiaVehicleReport(HXR704_BATCH_ROW, steps);

        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('error');
        expect(report.blocks.simit_fines_by_plate?.tables?.[0]?.rows.length).toBe(1);
        expect(report.blocks.fasecolda_values?.status).toBe('ok');
    });

    it('builds ODG78E when RUNT and Fasecolda values are NotFound', () => {
        const report = buildColombiaVehicleReport(ODG78E_BATCH_ROW, steps);

        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('error');
        expect(report.blocks.fasecolda_values?.status).toBe('error');
        expect(report.blocks.simit_fines_by_plate?.status).toBe('ok');
        expect(report.blocks.fasecolda_sinister?.status).toBe('empty');
    });

    it('builds FTR223 when Fasecolda values return InternalServerError', () => {
        const report = buildColombiaVehicleReport(FTR223_BATCH_ROW, steps);

        expect(report.blocks.runt_vehicle_by_plate?.status).toBe('ok');
        expect(report.blocks.fasecolda_values?.status).toBe('error');
        expect(report.blocks.fasecolda_values?.errorMessage).toBe(
            humanizeColombiaVehicleError('InternalServerError')
        );
    });
});
