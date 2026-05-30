import type { StepDisplayRow } from '../step-result-display.util';
import {
    extractColombiaFasecoldaSinisterTables,
    presentColombiaFasecoldaSinister,
} from '../step-result-presenters/presenters/colombia-fasecolda-sinister';
import {
    extractColombiaFasecoldaValuesTables,
    presentColombiaFasecoldaValues,
} from '../step-result-presenters/presenters/colombia-fasecolda-values';
import {
    extractColombiaRuntTables,
    presentColombiaRuntVehicleByPlate,
} from '../step-result-presenters/presenters/colombia-runt-vehicle-by-plate';
import {
    extractColombiaSimitAgreementsTables,
    presentColombiaSimitAgreements,
} from '../step-result-presenters/presenters/colombia-simit-agreements';
import {
    extractColombiaSimitPlateTables,
    presentColombiaSimitPlate,
} from '../step-result-presenters/presenters/colombia-simit-plate';
import type { ReportBlockId, ReportTableModel } from './colombia-vehicle-report.types';
import { isBenignNoRecord } from './colombia-vehicle-report.utils';

type PresenterBundle = {
    displayRows: (data: unknown) => StepDisplayRow[] | null;
    tables: (data: unknown) => ReportTableModel[];
};

const PRESENTER_BUNDLES: Record<ReportBlockId, PresenterBundle> = {
    runt_vehicle_by_plate: {
        displayRows: presentColombiaRuntVehicleByPlate,
        tables: extractColombiaRuntTables,
    },
    simit_fines_by_plate: {
        displayRows: presentColombiaSimitPlate,
        tables: extractColombiaSimitPlateTables,
    },
    simit_agreements: {
        displayRows: presentColombiaSimitAgreements,
        tables: extractColombiaSimitAgreementsTables,
    },
    fasecolda_sinister: {
        displayRows: presentColombiaFasecoldaSinister,
        tables: extractColombiaFasecoldaSinisterTables,
    },
    fasecolda_values: {
        displayRows: presentColombiaFasecoldaValues,
        tables: extractColombiaFasecoldaValuesTables,
    },
};

export const presentBlockData = (
    blockId: ReportBlockId,
    data: unknown
): { displayRows: StepDisplayRow[]; tables: ReportTableModel[] } => {
    const bundle = PRESENTER_BUNDLES[blockId];
    const rows = bundle.displayRows(data);
    return {
        displayRows: rows && rows.length > 0 ? rows : [],
        tables: bundle.tables(data),
    };
};

export const resolveBlockStatus = (data: unknown): 'ok' | 'empty' => {
    if (data == null) return 'empty';
    if (isBenignNoRecord(data)) return 'empty';
    if (typeof data !== 'object' || Array.isArray(data)) return 'ok';
    const o = data as Record<string, unknown>;
    const sinister = o.sinister;
    if (Array.isArray(sinister) && sinister.length === 0) return 'empty';
    const acuerdos = o.acuerdosPago;
    if (Array.isArray(acuerdos) && acuerdos.length === 0 && o.totalAp === '0') return 'empty';
    return 'ok';
};
