import type { SampleReportData } from '../../smart-report.service';
import { buildColombiaVehicleReport } from '../colombia-vehicle-report.composer';
import { COLOMBIA_VEHICLE_REPORT_STEPS } from './kyx455-preview-data';
import dsv067FasecoldaSinister from './dsv067-fasecolda-sinister-empty.json';
import dsv067FasecoldaValues from './dsv067-fasecolda-values.json';
import dsv067Input from './dsv067-input.json';
import dsv067Runt from './dsv067-runt-vehicle-by-plate.json';
import dsv067SimitAgreements from './dsv067-simit-agreements-empty.json';
import dsv067SimitPlate from './dsv067-simit-plate.json';

/**
 * DSV067 — Mazda CX-5 2018: full Fasecolda catalog match, SOAT vigente, RTM flag NO
 * (latest cert may still be within validity window), clean SIMIT by plate with pazSalvo false,
 * empty agreements/sinister.
 */
export const DSV067_BATCH_ROW = {
    rowIndex: 0,
    inputData: dsv067Input,
    results: {
        1: dsv067Runt,
        2: dsv067SimitPlate,
        3: dsv067SimitAgreements,
        4: dsv067FasecoldaSinister,
        5: dsv067FasecoldaValues,
    },
    errors: [],
};

export function buildDsv067PreviewData(): Record<string, unknown> {
    const report = buildColombiaVehicleReport(DSV067_BATCH_ROW, COLOMBIA_VEHICLE_REPORT_STEPS, {
        batchName: 'Colombia vehicle — DSV067 Mazda CX-5',
    });

    return {
        batchName: 'Colombia vehicle — DSV067 Mazda CX-5',
        rowIndex: 0,
        inputData: dsv067Input,
        results: DSV067_BATCH_ROW.results,
        errors: [],
        report,
    };
}

export const DSV067_SAMPLE: SampleReportData = buildDsv067PreviewData();
