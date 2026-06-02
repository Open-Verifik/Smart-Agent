import type { ReportSection, SmartReportTemplate } from '../smart-report.service';
import { KYX455_OWNER_MISMATCH_SAMPLE } from './fixtures/kyx455-preview-data';

/**
 * Default Smart Report template sections for Colombia vehicle batches.
 * Uses normalized `report.*` paths (see buildRowDataForResolution) so step order does not matter.
 */
export const COLOMBIA_VEHICLE_REPORT_TEMPLATE_SECTIONS: ReportSection[] = [
    {
        id: 'header-plate',
        type: 'field',
        order: 0,
        label: 'Placa',
        dataPath: 'report.meta.plate',
        style: { fontSize: 18, fontWeight: 'bold' },
    },
    {
        id: 'header-doc-type',
        type: 'field',
        order: 1,
        label: 'Tipo documento',
        dataPath: 'inputData.documentType',
    },
    {
        id: 'header-owner',
        type: 'field',
        order: 2,
        label: 'Documento consultado',
        dataPath: 'inputData.documentNumber',
    },
    {
        id: 'summary-simit',
        type: 'field',
        order: 10,
        label: 'Total SIMIT',
        dataPath: 'report.summary.simitTotalGeneral',
    },
    {
        id: 'summary-paz-salvo',
        type: 'field',
        order: 11,
        label: 'Paz y salvo',
        dataPath: 'report.summary.pazSalvo',
    },
    {
        id: 'summary-sinister-count',
        type: 'field',
        order: 12,
        label: 'Siniestros Fasecolda',
        dataPath: 'report.summary.sinisterCount',
    },
    {
        id: 'divider-runt',
        type: 'divider',
        order: 20,
    },
    {
        id: 'runt-owner-check',
        type: 'field',
        order: 21,
        label: 'RUNT — verificación del propietario',
        dataPath: 'report.blocks.runt_vehicle_by_plate.errorMessage',
        style: { fontSize: 12, fontWeight: 'bold', color: '#DC2626' },
    },
    {
        id: 'runt-marca',
        type: 'field',
        order: 22,
        label: 'Marca (RUNT)',
        dataPath: 'report.blocks.runt_vehicle_by_plate.data.informacionGeneral.marca',
    },
    {
        id: 'summary-soat',
        type: 'field',
        order: 23,
        label: 'SOAT (RUNT)',
        dataPath: 'report.summary.soatVigente',
    },
    {
        id: 'summary-rtm',
        type: 'field',
        order: 24,
        label: 'RTM vigente (RUNT)',
        dataPath: 'report.summary.rtmVigente',
    },
    {
        id: 'divider-simit',
        type: 'divider',
        order: 30,
    },
    {
        id: 'simit-agreements-note',
        type: 'field',
        order: 31,
        label: 'Acuerdos SIMIT',
        dataPath: 'report.blocks.simit_agreements.skipMessage',
    },
    {
        id: 'divider-fasecolda',
        type: 'divider',
        order: 40,
    },
    {
        id: 'fasecolda-values-error',
        type: 'field',
        order: 41,
        label: 'Fasecolda — valores comerciales',
        dataPath: 'report.blocks.fasecolda_values.errorMessage',
        style: { fontSize: 12, fontWeight: 'bold', color: '#DC2626' },
    },
    {
        id: 'fasecolda-marca',
        type: 'field',
        order: 42,
        label: 'Marca (Fasecolda)',
        dataPath: 'report.blocks.fasecolda_values.data.marke',
    },
    {
        id: 'fasecolda-linea',
        type: 'field',
        order: 43,
        label: 'Línea (Fasecolda)',
        dataPath: 'report.blocks.fasecolda_values.data.line1',
    },
    {
        id: 'fasecolda-year',
        type: 'field',
        order: 44,
        label: 'Modelo (Fasecolda)',
        dataPath: 'report.blocks.fasecolda_values.data.year',
    },
    {
        id: 'fasecolda-bcpp',
        type: 'field',
        order: 45,
        label: 'BCPP',
        dataPath: 'report.blocks.fasecolda_values.data.bcpp',
    },
];

export const createColombiaVehicleReportTemplate = (
    overrides?: Partial<SmartReportTemplate>
): Omit<SmartReportTemplate, '_id'> => ({
    name: 'Colombia — Informe vehículo',
    description: 'Informe combinado RUNT, SIMIT y Fasecolda por placa',
    type: 'System',
    systemKey: 'colombia.vehicle.comprehensive',
    country: 'Colombia',
    category: 'vehicle',
    tier: 'comprehensive',
    presetSteps: [
        { appFeatureCode: 'colombia_api_vehicle_complete_by_plate', sequence: 1 },
        { appFeatureCode: 'colombia_api_simit_plate', sequence: 2 },
        { appFeatureCode: 'colombia_api_simit_agreements', sequence: 3 },
        { appFeatureCode: 'colombia_api_vehicle_sinister_fasecolda_by_plate', sequence: 4 },
        { appFeatureCode: 'colombia_api_vehicle_valores_fasecolda_by_plate', sequence: 5 },
    ],
    sections: COLOMBIA_VEHICLE_REPORT_TEMPLATE_SECTIONS,
    sampleData: KYX455_OWNER_MISMATCH_SAMPLE,
    pageSize: 'A4',
    orientation: 'portrait',
    showPageNumbers: true,
    pageNumberPosition: 'bottom-center',
    ...overrides,
});
