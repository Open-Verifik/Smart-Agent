import type { BatchStep, SmartBatchRow } from '../smart-batch.service';
import { getBatchSkippedStepsFromInput } from '../batch-required-fields.util';
import {
    COLOMBIA_VEHICLE_REPORT_BLOCKS,
    FEATURE_CODE_TO_BLOCK_ID,
} from './colombia-vehicle-report.blocks';
import { presentBlockData, resolveBlockStatus } from './colombia-vehicle-report.presenters';
import type {
    ColombiaVehicleReportBlockState,
    ColombiaVehicleReportMeta,
    ColombiaVehicleReportModel,
    ColombiaVehicleReportSummary,
    ReportBlockId,
} from './colombia-vehicle-report.types';
import {
    formatCop,
    formatYesNo,
    colombiaVehicleStepErrorKey,
    humanizeColombiaVehicleError,
    isBenignNoRecord,
    pickRtmForReport,
    pickVigenteSoat,
} from './colombia-vehicle-report.utils';

const getFeatureCodeFromStep = (step: BatchStep): string | undefined => {
    const feature = step.appFeature;
    if (typeof feature === 'object' && feature != null && 'code' in feature) {
        return (feature as { code?: string }).code;
    }
    return undefined;
};

export const resolveResultsByFeatureCode = (
    row: Pick<SmartBatchRow, 'results'>,
    steps: BatchStep[]
): Map<string, { sequence: number; data: unknown }> => {
    const map = new Map<string, { sequence: number; data: unknown }>();
    for (const step of steps) {
        if (!step.enabled) continue;
        const code = getFeatureCodeFromStep(step);
        if (!code) continue;
        const data = row.results?.[step.sequence];
        if (data !== undefined && data !== null) {
            map.set(code, { sequence: step.sequence, data });
        }
    }
    return map;
};

const buildMeta = (
    row: Pick<SmartBatchRow, 'inputData' | 'rowIndex'>,
    resultsByCode: Map<string, { sequence: number; data: unknown }>,
    batchName?: string
): ColombiaVehicleReportMeta => {
    const input = (row.inputData ?? {}) as Record<string, unknown>;
    const runt = resultsByCode.get('colombia_api_vehicle_complete_by_plate')?.data as
        | Record<string, unknown>
        | undefined;
    const info = (runt?.informacionGeneral ?? {}) as Record<string, unknown>;

    return {
        plate: String(input.plate ?? runt?.plate ?? info.noPlaca ?? ''),
        documentType:
            input.documentType != null ? String(input.documentType) : String(runt?.documentType ?? ''),
        documentNumber:
            input.documentNumber != null
                ? String(input.documentNumber)
                : String(runt?.documentNumber ?? ''),
        vin: String(runt?.vin ?? info.noVin ?? ''),
        batchName,
        rowIndex: row.rowIndex,
    };
};

const buildSummary = (
    resultsByCode: Map<string, { sequence: number; data: unknown }>
): ColombiaVehicleReportSummary => {
    const summary: ColombiaVehicleReportSummary = {};
    const runt = resultsByCode.get('colombia_api_vehicle_complete_by_plate')?.data as
        | Record<string, unknown>
        | undefined;
    if (runt) {
        const info = (runt.informacionGeneral ?? {}) as Record<string, unknown>;
        const blindaje = (runt.informacionBlindaje ?? {}) as Record<string, unknown>;
        const soat = pickVigenteSoat(runt.soat as { estado?: string }[] | undefined);
        const rtmPick = pickRtmForReport(runt.tecnoMecanica as Record<string, unknown>[] | undefined);
        summary.soatVigente = soat?.estado != null ? String(soat.estado) : undefined;
        summary.rtmVigente = rtmPick
            ? rtmPick.isVigente
                ? 'SI'
                : 'NO'
            : undefined;
        summary.tieneGravamenes = formatYesNo(info.tieneGravamenes);
        summary.blindado = formatYesNo(blindaje.blindado);
    }

    const simit = resultsByCode.get('colombia_api_simit_plate')?.data as
        | Record<string, unknown>
        | undefined;
    if (simit) {
        summary.simitTotalGeneral = formatCop(simit.totalGeneral);
        summary.pazSalvo = formatYesNo(simit.pazSalvo);
    }

    const sinister = resultsByCode.get('colombia_api_vehicle_sinister_fasecolda_by_plate')?.data;
    if (sinister && typeof sinister === 'object' && !Array.isArray(sinister)) {
        if (isBenignNoRecord(sinister)) {
            summary.sinisterCount = 0;
        } else {
            const claims = (sinister as Record<string, unknown>).sinister;
            summary.sinisterCount = Array.isArray(claims) ? claims.length : 0;
        }
    }

    return summary;
};

const buildBlockState = (
    blockId: ReportBlockId,
    featureCode: string,
    payload: { sequence: number; data: unknown } | undefined,
    rowErrors: SmartBatchRow['errors'],
    enabledSteps: BatchStep[],
    rowInputData: SmartBatchRow['inputData']
): ColombiaVehicleReportBlockState => {
    if (!payload) {
        const step = enabledSteps.find((s) => getFeatureCodeFromStep(s) === featureCode);
        const stepError = step ? rowErrors?.find((e) => e.step === step.sequence) : undefined;
        if (stepError) {
            return {
                status: 'error',
                featureCode,
                sequence: step?.sequence,
                errorMessage: humanizeColombiaVehicleError(colombiaVehicleStepErrorKey(stepError)),
            };
        }
        const skippedMeta = getBatchSkippedStepsFromInput(rowInputData).find(
            (entry) => entry.stepCode === featureCode || entry.sequence === step?.sequence
        );
        if (skippedMeta) {
            return {
                status: 'skipped',
                featureCode,
                sequence: skippedMeta.sequence,
                skipMessage: `${skippedMeta.value} (${skippedMeta.field}) is not supported for this step. Allowed: ${skippedMeta.allowedValues.join(', ')}.`,
            };
        }
        return { status: 'skipped', featureCode };
    }

    const stepError = rowErrors?.find((e) => e.step === payload.sequence);
    if (stepError) {
        return {
            status: 'error',
            featureCode,
            sequence: payload.sequence,
            errorMessage: humanizeColombiaVehicleError(colombiaVehicleStepErrorKey(stepError)),
        };
    }

    const status = resolveBlockStatus(blockId, payload.data);
    const { displayRows, tables } = presentBlockData(blockId, payload.data);

    return {
        status,
        featureCode,
        sequence: payload.sequence,
        data: payload.data,
        displayRows,
        tables,
    };
};

/**
 * Composes a normalized Colombia vehicle report from batch row results keyed by AppFeature code.
 */
export const buildColombiaVehicleReport = (
    row: Pick<SmartBatchRow, 'inputData' | 'results' | 'errors' | 'rowIndex'>,
    steps: BatchStep[],
    options?: { batchName?: string }
): ColombiaVehicleReportModel => {
    const enabledSteps = steps.filter((s) => s.enabled);
    const resultsByCode = resolveResultsByFeatureCode(row, enabledSteps);
    const meta = buildMeta(row, resultsByCode, options?.batchName);
    const summary = buildSummary(resultsByCode);

    const blocks: ColombiaVehicleReportModel['blocks'] = {};

    for (const blockDef of COLOMBIA_VEHICLE_REPORT_BLOCKS) {
        const configured = enabledSteps.some(
            (s) => getFeatureCodeFromStep(s) === blockDef.featureCode
        );
        if (!configured) continue;

        const payload = resultsByCode.get(blockDef.featureCode);
        blocks[blockDef.blockId] = buildBlockState(
            blockDef.blockId,
            blockDef.featureCode,
            payload,
            row.errors,
            enabledSteps,
            row.inputData
        );
    }

    for (const [featureCode, payload] of resultsByCode.entries()) {
        const blockId = FEATURE_CODE_TO_BLOCK_ID[featureCode];
        if (!blockId || blocks[blockId]) continue;
        blocks[blockId] = buildBlockState(
            blockId,
            featureCode,
            payload,
            row.errors,
            enabledSteps,
            row.inputData
        );
    }

    return { meta, summary, blocks };
};

export const hasColombiaVehicleReportSteps = (steps: BatchStep[]): boolean =>
    steps.some((s) => {
        const code = getFeatureCodeFromStep(s);
        return !!code && !!FEATURE_CODE_TO_BLOCK_ID[code];
    });
