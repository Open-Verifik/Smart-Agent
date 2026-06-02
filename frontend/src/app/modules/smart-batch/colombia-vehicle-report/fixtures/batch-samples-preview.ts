import type { SampleReportData } from '../../smart-report.service';
import { buildColombiaVehicleReport } from '../colombia-vehicle-report.composer';
import { COLOMBIA_VEHICLE_REPORT_STEPS } from './kyx455-preview-data';
import { buildBatchExportRow, type BatchExportSlug } from './batch-sample-loader';
import batchCatalog from './batch-6a1a20b6-catalog.json';

export { batchCatalog as BATCH_6A1A20B6_CATALOG };

const buildSample = (slug: BatchExportSlug, batchName: string): SampleReportData => {
    const row = buildBatchExportRow(slug);
    const report = buildColombiaVehicleReport(row, COLOMBIA_VEHICLE_REPORT_STEPS, { batchName });
    return {
        batchName,
        rowIndex: row.rowIndex,
        inputData: row.inputData,
        results: row.results,
        errors: row.errors,
        report,
    };
};

/** RUNT NotFound; SIMIT still returns 1 multa + Fasecolda values ok. */
export const HXR704_BATCH_ROW = buildBatchExportRow('hxr704');
export const HXR704_SAMPLE = buildSample('hxr704', 'Colombia vehicle — HXR704 (RUNT NotFound)');

/** Full completed row (alternate to DSV067). */
export const MKU606_BATCH_ROW = buildBatchExportRow('mku606');
export const MKU606_SAMPLE = buildSample('mku606', 'Colombia vehicle — MKU606 (all steps ok)');

/** RUNT + Fasecolda values NotFound; plate-only steps ok. */
export const ODG78E_BATCH_ROW = buildBatchExportRow('odg78e');
export const ODG78E_SAMPLE = buildSample('odg78e', 'Colombia vehicle — ODG78E (RUNT + values NF)');

/** 1051 multas in API; fixture keeps 2 sample rows. One Fasecolda claim. */
export const ABC123_BATCH_ROW = buildBatchExportRow('abc123');
export const ABC123_SAMPLE = buildSample('abc123', 'Colombia vehicle — ABC123 (sinister + heavy SIMIT)');

/** RUNT NotFound only; other blocks ok. */
export const NQU587_BATCH_ROW = buildBatchExportRow('nqu587');
export const NQU587_SAMPLE = buildSample('nqu587', 'Colombia vehicle — NQU587 (RUNT NotFound)');

/** Fasecolda values InternalServerError. */
export const FTR223_BATCH_ROW = buildBatchExportRow('ftr223');
export const FTR223_SAMPLE = buildSample('ftr223', 'Colombia vehicle — FTR223 (values error)');

/** Same pattern as HXR704 with different plate. */
export const WOL049_BATCH_ROW = buildBatchExportRow('wol049');
export const WOL049_SAMPLE = buildSample('wol049', 'Colombia vehicle — WOL049 (RUNT NotFound)');

/** Three multas + full Fasecolda (completed). */
export const TAX121_BATCH_ROW = buildBatchExportRow('tax121');
export const TAX121_SAMPLE = buildSample('tax121', 'Colombia vehicle — TAX121 (3 multas)');

export const BATCH_EXPORT_SAMPLES = {
    hxr704: HXR704_SAMPLE,
    mku606: MKU606_SAMPLE,
    odg78e: ODG78E_SAMPLE,
    abc123: ABC123_SAMPLE,
    nqu587: NQU587_SAMPLE,
    ftr223: FTR223_SAMPLE,
    wol049: WOL049_SAMPLE,
    tax121: TAX121_SAMPLE,
} as const;
