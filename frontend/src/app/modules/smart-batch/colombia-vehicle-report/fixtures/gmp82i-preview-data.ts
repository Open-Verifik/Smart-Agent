import type { SampleReportData } from '../../smart-report.service';
import { buildColombiaVehicleReport } from '../colombia-vehicle-report.composer';
import { COLOMBIA_VEHICLE_REPORT_STEPS } from './kyx455-preview-data';
import gmp82iErrors from './gmp82i-errors.json';
import gmp82iFasecoldaSinister from './gmp82i-fasecolda-sinister-empty.json';
import gmp82iInput from './gmp82i-input.json';
import gmp82iRunt from './gmp82i-runt-vehicle-by-plate.json';
import gmp82iSimitAgreements from './gmp82i-simit-agreements-empty.json';
import gmp82iSimitPlate from './gmp82i-simit-plate.json';

/**
 * Batch row for GMP82I — RUNT owner matches (HERO HUNK 125 R moto), clean SIMIT,
 * empty agreements/sinister, Fasecolda values NotFound (new plate, no Fasecolda catalog yet).
 */
export const GMP82I_BATCH_ROW = {
    rowIndex: 0,
    inputData: gmp82iInput,
    results: {
        1: gmp82iRunt,
        2: gmp82iSimitPlate,
        3: gmp82iSimitAgreements,
        4: gmp82iFasecoldaSinister,
    },
    errors: gmp82iErrors as { step: number; message: string; code: string }[],
};

/**
 * Preview / PDF sample: full RUNT motorcycle report but Fasecolda values step fails with NotFound.
 */
export function buildGmp82iFasecoldaValuesNotFoundPreviewData(): Record<string, unknown> {
    const report = buildColombiaVehicleReport(GMP82I_BATCH_ROW, COLOMBIA_VEHICLE_REPORT_STEPS, {
        batchName: 'Colombia vehicle — Fasecolda values not found (GMP82I)',
    });

    return {
        batchName: 'Colombia vehicle — Fasecolda values not found (GMP82I)',
        rowIndex: 0,
        inputData: gmp82iInput,
        results: GMP82I_BATCH_ROW.results,
        errors: GMP82I_BATCH_ROW.errors,
        report,
    };
}

export const GMP82I_FASECOLDA_VALUES_NOT_FOUND_SAMPLE: SampleReportData =
    buildGmp82iFasecoldaValuesNotFoundPreviewData();
