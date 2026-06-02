import type { SampleReportData } from '../../smart-report.service';
import { buildColombiaVehicleReport } from '../colombia-vehicle-report.composer';
import { COLOMBIA_VEHICLE_REPORT_STEPS } from './kyx455-preview-data';
import zfg04eErrors from './zfg04e-errors.json';
import zfg04eFasecoldaSinister from './zfg04e-fasecolda-sinister-empty.json';
import zfg04eInput from './zfg04e-input.json';
import zfg04eRunt from './zfg04e-runt-vehicle-by-plate.json';
import zfg04eSimitAgreements from './zfg04e-simit-agreements-empty.json';
import zfg04eSimitPlate from './zfg04e-simit-plate.json';

/**
 * ZFG04E — Honda CB125F moto: SOAT vigente, RTM vencida, sin multas SIMIT por placa
 * (paz y salvo false), acuerdosPagos vacío, Fasecolda sinister 404 benign, values NotFound.
 */
export const ZFG04E_BATCH_ROW = {
    rowIndex: 0,
    inputData: zfg04eInput,
    results: {
        1: zfg04eRunt,
        2: zfg04eSimitPlate,
        3: zfg04eSimitAgreements,
        4: zfg04eFasecoldaSinister,
    },
    errors: zfg04eErrors as { step: number; message: string; code: string }[],
};

export function buildZfg04ePreviewData(): Record<string, unknown> {
    const report = buildColombiaVehicleReport(ZFG04E_BATCH_ROW, COLOMBIA_VEHICLE_REPORT_STEPS, {
        batchName: 'Colombia vehicle — ZFG04E moto',
    });

    return {
        batchName: 'Colombia vehicle — ZFG04E moto',
        rowIndex: 0,
        inputData: zfg04eInput,
        results: ZFG04E_BATCH_ROW.results,
        errors: ZFG04E_BATCH_ROW.errors,
        report,
    };
}

export const ZFG04E_SAMPLE: SampleReportData = buildZfg04ePreviewData();
