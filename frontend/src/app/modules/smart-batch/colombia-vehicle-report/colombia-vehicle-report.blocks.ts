import type { ReportBlockDefinition } from './colombia-vehicle-report.types';

export const COLOMBIA_VEHICLE_REPORT_BLOCKS: readonly ReportBlockDefinition[] = [
    {
        blockId: 'runt_vehicle_by_plate',
        featureCode: 'colombia_api_vehicle_complete_by_plate',
        endpoint: 'v2/co/runt/vehicle-by-plate',
        credits: 0.3,
        requiredInputFields: ['documentType', 'documentNumber', 'plate'],
        sections: [
            { id: 'identity', titleKey: 'colombiaVehicleReport.sections.runtIdentity', priority: 'high' },
            { id: 'compliance', titleKey: 'colombiaVehicleReport.sections.runtCompliance', priority: 'high' },
            { id: 'soat', titleKey: 'colombiaVehicleReport.sections.runtSoat', priority: 'high' },
            { id: 'rtm', titleKey: 'colombiaVehicleReport.sections.runtRtm', priority: 'high' },
            { id: 'liens', titleKey: 'colombiaVehicleReport.sections.runtLiens', priority: 'medium' },
            { id: 'procedures', titleKey: 'colombiaVehicleReport.sections.runtProcedures', priority: 'medium' },
        ],
    },
    {
        blockId: 'simit_fines_by_plate',
        featureCode: 'colombia_api_simit_plate',
        endpoint: 'v2/co/simit/consultar/placa',
        credits: 0.2,
        requiredInputFields: ['plate'],
        sections: [
            { id: 'summary', titleKey: 'colombiaVehicleReport.sections.simitSummary', priority: 'high' },
            { id: 'fines', titleKey: 'colombiaVehicleReport.sections.simitFines', priority: 'high' },
        ],
    },
    {
        blockId: 'simit_agreements',
        featureCode: 'colombia_api_simit_agreements',
        endpoint: 'v2/co/simit/acuerdos',
        credits: 0.2,
        requiredInputFields: ['documentType', 'documentNumber'],
        sections: [
            { id: 'agreements', titleKey: 'colombiaVehicleReport.sections.simitAgreements', priority: 'high' },
        ],
    },
    {
        blockId: 'fasecolda_sinister',
        featureCode: 'colombia_api_vehicle_sinister_fasecolda_by_plate',
        endpoint: 'v2/co/fasecolda/sinister',
        credits: 0.3,
        requiredInputFields: ['plate'],
        sections: [
            { id: 'claims', titleKey: 'colombiaVehicleReport.sections.fasecoldaClaims', priority: 'high' },
        ],
    },
    {
        blockId: 'fasecolda_values',
        featureCode: 'colombia_api_vehicle_valores_fasecolda_by_plate',
        endpoint: 'v2/co/fasecolda/values-by-plate',
        credits: 0.3,
        requiredInputFields: ['plate'],
        sections: [
            { id: 'catalog', titleKey: 'colombiaVehicleReport.sections.fasecoldaCatalog', priority: 'high' },
            { id: 'valuation', titleKey: 'colombiaVehicleReport.sections.fasecoldaValuation', priority: 'high' },
        ],
    },
] as const;

export const FEATURE_CODE_TO_BLOCK_ID = Object.fromEntries(
    COLOMBIA_VEHICLE_REPORT_BLOCKS.map((b) => [b.featureCode, b.blockId])
) as Record<string, ReportBlockDefinition['blockId']>;

export const getBlockDefinitionByFeatureCode = (
    featureCode: string
): ReportBlockDefinition | undefined =>
    COLOMBIA_VEHICLE_REPORT_BLOCKS.find((b) => b.featureCode === featureCode);
