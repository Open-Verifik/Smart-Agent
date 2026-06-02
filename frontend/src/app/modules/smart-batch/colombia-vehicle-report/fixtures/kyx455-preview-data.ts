import type { BatchStep } from '../../smart-batch.service';
import type { SampleReportData } from '../../smart-report.service';
import { buildColombiaVehicleReport } from '../colombia-vehicle-report.composer';
import kyx455Errors from './kyx455-errors.json';
import kyx455FasecoldaSinister from './kyx455-fasecolda-sinister-empty.json';
import kyx455FasecoldaValues from './kyx455-fasecolda-values.json';
import kyx455Input from './kyx455-input.json';
import kyx455SimitPlate from './kyx455-simit-plate.json';

/** Step wiring for the Colombia comprehensive vehicle batch (matches preset order). */
export const COLOMBIA_VEHICLE_REPORT_STEPS: BatchStep[] = [
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

/** Batch row shape for KYX455 — RUNT owner mismatch, clean SIMIT, skipped agreements (NIT), no Fasecolda claims. */
export const KYX455_BATCH_ROW = {
    rowIndex: 0,
    inputData: kyx455Input,
    results: {
        2: kyx455SimitPlate,
        4: kyx455FasecoldaSinister,
        5: kyx455FasecoldaValues,
    },
    errors: kyx455Errors as { step: number; message: string; code: string }[],
};

/**
 * Preview / PDF sample: owner document does not match RUNT for plate KYX455,
 * but plate-only sources (SIMIT, Fasecolda) still return useful data.
 */
export function buildKyx455OwnerMismatchPreviewData(): Record<string, unknown> {
    const report = buildColombiaVehicleReport(KYX455_BATCH_ROW, COLOMBIA_VEHICLE_REPORT_STEPS, {
        batchName: 'Colombia vehicle — owner mismatch (KYX455)',
    });

    return {
        batchName: 'Colombia vehicle — owner mismatch (KYX455)',
        rowIndex: 0,
        inputData: kyx455Input,
        results: KYX455_BATCH_ROW.results,
        errors: KYX455_BATCH_ROW.errors,
        report,
    };
}

export const KYX455_OWNER_MISMATCH_SAMPLE: SampleReportData = buildKyx455OwnerMismatchPreviewData();
