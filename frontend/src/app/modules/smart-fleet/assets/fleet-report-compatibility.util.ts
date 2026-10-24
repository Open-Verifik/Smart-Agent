import { BatchStep } from 'app/modules/smart-batch/smart-batch.service';
import { FleetAsset } from '../smart-fleet.service';

/** What a template step asks for. Plate, plate plus owner document, or VIN. */
export type ReportInputKind = 'plate' | 'document' | 'vin';

const tokenOf = (field: string): string => field.replace(/[^a-z0-9]/gi, '').toLowerCase();

export function reportInputKind(field: string): ReportInputKind | null {
    const token = tokenOf(field);

    if (!token) return null;

    if (
        /^(vin|niv|bin|bim|chasis|chassis|bastidor)$/.test(token) ||
        token.includes('chasis') ||
        token.includes('chassis') ||
        token.includes('bastidor') ||
        token.endsWith('vin')
    ) {
        return 'vin';
    }

    if (/documenttype|tipodocumento|doctype|idtype|typedocument/.test(token)) return 'document';

    if (
        /documentnumber|documentid|idnumber|numerodocumento|nrodocumento|cedula|identificacion|identification/.test(
            token
        ) ||
        token === 'nit' ||
        token.endsWith('nit') ||
        token.includes('propietario')
    ) {
        return 'document';
    }

    if (/^(plate|placa|licenseplate|vehicleplate)$/.test(token) || token.includes('placa') || token.endsWith('plate')) {
        return 'plate';
    }

    return null;
}

function stepNeeds(step: BatchStep): Set<ReportInputKind> {
    const feature = typeof step.appFeature === 'object' ? step.appFeature : null;
    const dependencies = feature?.dependencies ?? [];
    const required = dependencies.filter((item) => item.required !== false && item.field);
    const source = required.length ? required : dependencies;
    const needs = new Set<ReportInputKind>();

    for (const item of source) {
        const kind = item.field ? reportInputKind(item.field) : null;

        if (kind) needs.add(kind);
    }

    return needs;
}

function vehicleCovers(asset: FleetAsset, needs: Set<ReportInputKind>): boolean {
    if (needs.has('plate') && !asset.plate?.trim()) return false;
    if (needs.has('document') && !(asset.ownerDocumentType?.trim() && asset.ownerDocumentNumber?.trim())) return false;
    if (needs.has('vin') && !asset.vin?.trim()) return false;

    return true;
}

/**
 * A vehicle fits when it can run at least one step of the template.
 * A plate-only template keeps VIN vehicles out. A template with plate, document
 * and VIN steps accepts every vehicle that has the data for one of those steps.
 */
export function assetMatchesTemplate(asset: FleetAsset, steps: BatchStep[]): boolean {
    const enabled = steps.filter((step) => step.enabled !== false);
    const described = enabled.map(stepNeeds).filter((needs) => needs.size > 0);

    if (!described.length) return Boolean(asset.plate?.trim() || asset.vin?.trim());

    return described.some((needs) => vehicleCovers(asset, needs));
}

/** Kinds the template can consult, in a stable order for the bulk panel. */
export function templateAcceptedKinds(steps: BatchStep[]): ReportInputKind[] {
    const kinds = new Set<ReportInputKind>();

    for (const step of steps.filter((item) => item.enabled !== false)) {
        for (const kind of stepNeeds(step)) kinds.add(kind);
    }

    return (['plate', 'document', 'vin'] as ReportInputKind[]).filter((kind) => kinds.has(kind));
}
