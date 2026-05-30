import type { ReportSection, SmartReportTemplate } from '../smart-report.service';

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
        id: 'header-vin',
        type: 'field',
        order: 1,
        label: 'VIN',
        dataPath: 'report.meta.vin',
    },
    {
        id: 'header-owner',
        type: 'field',
        order: 2,
        label: 'Documento',
        dataPath: 'inputData.documentNumber',
    },
    {
        id: 'summary-soat',
        type: 'field',
        order: 10,
        label: 'SOAT',
        dataPath: 'report.summary.soatVigente',
    },
    {
        id: 'summary-rtm',
        type: 'field',
        order: 11,
        label: 'RTM vigente',
        dataPath: 'report.summary.rtmVigente',
    },
    {
        id: 'summary-simit',
        type: 'field',
        order: 12,
        label: 'Total SIMIT',
        dataPath: 'report.summary.simitTotalGeneral',
    },
    {
        id: 'summary-paz-salvo',
        type: 'field',
        order: 13,
        label: 'Paz y salvo',
        dataPath: 'report.summary.pazSalvo',
    },
    {
        id: 'divider-runt',
        type: 'divider',
        order: 20,
    },
    {
        id: 'runt-marca',
        type: 'field',
        order: 21,
        label: 'Marca (RUNT)',
        dataPath: 'report.blocks.runt_vehicle_by_plate.data.informacionGeneral.marca',
    },
    {
        id: 'runt-modelo',
        type: 'field',
        order: 22,
        label: 'Modelo (RUNT)',
        dataPath: 'report.blocks.runt_vehicle_by_plate.data.informacionGeneral.modelo',
    },
    {
        id: 'runt-linea',
        type: 'field',
        order: 23,
        label: 'Línea (RUNT)',
        dataPath: 'report.blocks.runt_vehicle_by_plate.data.informacionGeneral.linea',
    },
    {
        id: 'fasecolda-marca',
        type: 'field',
        order: 30,
        label: 'Marca (Fasecolda)',
        dataPath: 'report.blocks.fasecolda_values.data.marke',
    },
    {
        id: 'fasecolda-bcpp',
        type: 'field',
        order: 31,
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
    pageSize: 'A4',
    orientation: 'portrait',
    showPageNumbers: true,
    pageNumberPosition: 'bottom-center',
    ...overrides,
});
