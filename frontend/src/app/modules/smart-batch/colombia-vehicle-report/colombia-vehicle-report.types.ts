import type { StepDisplayRow } from '../step-result-display.util';

export type ReportBlockId =
    | 'runt_vehicle_by_plate'
    | 'simit_fines_by_plate'
    | 'simit_agreements'
    | 'fasecolda_sinister'
    | 'fasecolda_values';

export type ReportBlockStatus = 'ok' | 'empty' | 'error' | 'skipped';

export interface ReportTableColumn {
    key: string;
    label: string;
}

export interface ReportTableModel {
    id: string;
    title: string;
    columns: ReportTableColumn[];
    rows: Record<string, string>[];
}

export interface ReportSectionDefinition {
    id: string;
    titleKey: string;
    priority: 'high' | 'medium' | 'low';
}

export interface ReportBlockDefinition {
    blockId: ReportBlockId;
    featureCode: string;
    endpoint: string;
    credits: number;
    requiredInputFields: readonly ('plate' | 'documentType' | 'documentNumber')[];
    sections: ReportSectionDefinition[];
}

export interface ColombiaVehicleReportBlockState {
    status: ReportBlockStatus;
    featureCode: string;
    sequence?: number;
    data?: unknown;
    displayRows?: StepDisplayRow[];
    tables?: ReportTableModel[];
    errorMessage?: string;
    skipMessage?: string;
}

export interface ColombiaVehicleReportMeta {
    plate: string;
    documentType?: string;
    documentNumber?: string;
    vin?: string;
    batchName?: string;
    rowIndex?: number;
}

export interface ColombiaVehicleReportSummary {
    soatVigente?: string;
    rtmVigente?: string;
    simitTotalGeneral?: string;
    pazSalvo?: string;
    tieneGravamenes?: string;
    blindado?: string;
    sinisterCount?: number;
}

export interface ColombiaVehicleReportModel {
    meta: ColombiaVehicleReportMeta;
    summary: ColombiaVehicleReportSummary;
    blocks: Partial<Record<ReportBlockId, ColombiaVehicleReportBlockState>>;
}
