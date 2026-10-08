import { buildColombiaVehicleReport } from 'app/modules/smart-batch/colombia-vehicle-report/colombia-vehicle-report.composer';
import { BatchStep } from 'app/modules/smart-batch/smart-batch.service';
import { SampleReportData } from 'app/modules/smart-batch/smart-report.service';
import { FleetAsset, FleetSnapshot } from '../smart-fleet.service';

/** VIN lookup uses another feature code, but the vehicle block of a report is the plate one. */
const REPORT_FEATURE_ALIAS: Record<string, string> = {
    colombia_api_vehicle_complete_by_vin: 'colombia_api_vehicle_complete_by_plate',
};

export function featureCodeOfStep(step: {
    featureCode?: string;
    appFeature?: BatchStep['appFeature'] | { code?: string };
}): string {
    if (step.featureCode) return step.featureCode;

    const feature = step.appFeature;

    if (feature && typeof feature === 'object' && 'code' in feature && feature.code) return feature.code;

    return '';
}

function snapshotError(snapshot: FleetSnapshot): { message: string; code: string } | null {
    if (snapshot.isSuccessful !== false) return null;

    const error = snapshot.error;

    if (!error) return { message: 'check_failed', code: 'check_failed' };

    if (typeof error === 'string') return { message: error, code: 'check_failed' };

    return {
        message: error.message || 'check_failed',
        code: error.code || 'check_failed',
    };
}

function latestByFeature(snapshots: FleetSnapshot[]): Map<string, FleetSnapshot> {
    const latest = new Map<string, FleetSnapshot>();

    for (const snapshot of snapshots) {
        const code = snapshot.featureCode;

        if (!code || latest.has(code)) continue;

        latest.set(code, snapshot);
        const alias = REPORT_FEATURE_ALIAS[code];

        if (alias && !latest.has(alias)) latest.set(alias, snapshot);
    }

    return latest;
}

function payloadOf(snapshot: FleetSnapshot): Record<string, unknown> | null {
    const raw = snapshot.raw;

    if (!raw || !Object.keys(raw).length) return null;

    return raw;
}

function uniqueSnapshots(byCode: Map<string, FleetSnapshot>): FleetSnapshot[] {
    const seen = new Set<FleetSnapshot>();
    const list: FleetSnapshot[] = [];

    for (const snapshot of byCode.values()) {
        if (seen.has(snapshot)) continue;

        seen.add(snapshot);
        list.push(snapshot);
    }

    return list;
}

function stepsFromSnapshots(snapshots: FleetSnapshot[]): BatchStep[] {
    return snapshots
        .filter((snapshot) => snapshot.featureCode)
        .map((snapshot, index) => ({
            sequence: index + 1,
            enabled: true,
            appFeature: {
                code: REPORT_FEATURE_ALIAS[snapshot.featureCode || ''] || snapshot.featureCode,
            } as BatchStep['appFeature'],
        }));
}

/**
 * Shape a vehicle the way a Smart Batch row feeds a template.
 * When the template belongs to a configuration, results stay on that configuration's step numbers.
 */
export function buildFleetVehicleSample(
    asset: FleetAsset,
    snapshots: FleetSnapshot[],
    configuredSteps: BatchStep[] = []
): SampleReportData {
    const byCode = latestByFeature(snapshots);
    const fromTemplate = configuredSteps.filter((step) => step.enabled !== false && featureCodeOfStep(step));
    const steps = fromTemplate.length ? fromTemplate : stepsFromSnapshots(uniqueSnapshots(byCode));
    const results: Record<number, unknown> = {};
    const errors: { step: number; message: string; code: string }[] = [];

    for (const step of steps) {
        const snapshot = byCode.get(featureCodeOfStep(step));

        if (!snapshot) continue;

        const failure = snapshotError(snapshot);

        if (failure) {
            errors.push({ step: step.sequence, ...failure });
            continue;
        }

        const payload = payloadOf(snapshot);

        if (payload) results[step.sequence] = payload;
    }

    const inputData = {
        plate: asset.plate || '',
        documentType: asset.ownerDocumentType || '',
        documentNumber: asset.ownerDocumentNumber || '',
        vin: asset.vin || '',
    };
    const batchName = asset.nickname || asset.plate || asset.vin || 'Vehículo';
    const composerSteps: BatchStep[] = steps.map((step) => ({
        sequence: step.sequence,
        enabled: true,
        appFeature: { code: featureCodeOfStep(step) } as BatchStep['appFeature'],
    }));
    const report = buildColombiaVehicleReport({ rowIndex: 0, inputData, results, errors }, composerSteps, {
        batchName,
    });

    return {
        batchName,
        rowIndex: 0,
        inputData,
        results,
        errors,
        report,
        steps: composerSteps.map((step) => ({
            sequence: step.sequence,
            enabled: true,
            featureCode: featureCodeOfStep(step),
            appFeature: { code: featureCodeOfStep(step) },
        })),
    };
}

export function fleetReportFileName(asset: FleetAsset, templateName?: string): string {
    const plate = (asset.plate || asset.vin || 'vehiculo').replace(/[^\w.-]+/g, '_');
    const template = (templateName || 'reporte').replace(/[^\w.-]+/g, '_');

    return `${template}_${plate}.pdf`;
}

/** True when the payload starts with the PDF magic bytes. */
export async function blobIsPdf(blob: Blob): Promise<boolean> {
    const bytes = new Uint8Array(await blob.slice(0, 5).arrayBuffer());

    return bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46;
}

/**
 * Some responses serialize the PDF buffer as a JSON map of byte indexes.
 * The Smart Batch viewer already recovers that shape.
 */
export async function pdfBlobFromResponse(blob: Blob): Promise<Blob | null> {
    if (await blobIsPdf(blob)) return blob;

    try {
        const parsed = JSON.parse(await blob.text()) as Record<string, unknown>;
        const keys = Object.keys(parsed).filter((key) => /^\d+$/.test(key));

        if (!keys.length) {
            if (typeof parsed.message === 'string' && parsed.message) throw new Error(parsed.message);

            return null;
        }

        keys.sort((left, right) => Number(left) - Number(right));
        const bytes = new Uint8Array(keys.length);

        keys.forEach((key, index) => {
            bytes[index] = Number(parsed[key]) & 0xff;
        });

        if (bytes[0] !== 0x25 || bytes[1] !== 0x50 || bytes[2] !== 0x44 || bytes[3] !== 0x46) return null;

        return new Blob([bytes], { type: 'application/pdf' });
    } catch {
        return null;
    }
}
