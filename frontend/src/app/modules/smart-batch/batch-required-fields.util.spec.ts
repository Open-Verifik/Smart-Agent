import { describe, expect, it } from 'vitest';
import type { BatchConfiguration } from './smart-batch.service';
import { addEndpointNode, applyQueryMode, connectPorts, emptyFlowGraph } from './endpoint-flow-graph.util';
import { queryModesForFeature } from './query-modes.util';
import {
    extractRequiredFieldsFromConfig,
    getStepCompatibilityViews,
    isStepInputCompatible,
    mergeEnumValues,
    prepareStepsForRun,
} from './batch-required-fields.util';

const colombiaVehicleConfig: BatchConfiguration = {
    name: 'Colombia Vehicle',
    country: 'Colombia',
    inputFormat: 'csv',
    outputFormat: 'csv',
    mergeStrategy: 'sequential',
    steps: [
        {
            sequence: 1,
            enabled: true,
            appFeature: {
                _id: '1',
                code: 'colombia_api_vehicle_complete_by_plate',
                name: 'Complete Vehicle Report',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE', 'PA', 'NIT'] },
                    { field: 'documentNumber', required: true },
                    { field: 'plate', required: true },
                ],
            },
        },
        {
            sequence: 2,
            enabled: true,
            appFeature: {
                _id: '2',
                code: 'colombia_api_simit_plate',
                name: 'SIMIT Fines by Plate',
                dependencies: [{ field: 'plate', required: true }],
            },
        },
        {
            sequence: 3,
            enabled: true,
            appFeature: {
                _id: '3',
                code: 'colombia_api_simit_agreements',
                name: 'SIMIT Payment Agreements',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE', 'PA', 'RC', 'TI'] },
                    { field: 'documentNumber', required: true },
                ],
            },
        },
    ],
};

describe('mergeEnumValues', () => {
    it('returns sorted unique union preserving first casing', () => {
        expect(mergeEnumValues(['CC', 'CE', 'PA', 'NIT'], ['CC', 'CE', 'PA', 'RC', 'TI'])).toEqual([
            'CC',
            'CE',
            'NIT',
            'PA',
            'RC',
            'TI',
        ]);
    });
});

describe('extractRequiredFieldsFromConfig', () => {
    it('unions documentType enums from all steps instead of last-wins', () => {
        const fields = extractRequiredFieldsFromConfig(colombiaVehicleConfig);
        const documentType = fields.find((f) => f.field === 'documentType');

        expect(documentType?.enumValues).toEqual(['CC', 'CE', 'NIT', 'PA', 'RC', 'TI']);
        expect(documentType?.enumValuesByStep).toHaveLength(2);
    });

    it('asks only for the flow start when the name is wired into an FBI name consult', () => {
        const citizen = {
            _id: 'citizen',
            code: 'colombia_api_name',
            name: 'Nombre',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC'] },
                { field: 'documentNumber', required: true },
            ],
        };
        const fbi = {
            _id: 'fbi',
            code: 'world_api_fbi',
            name: 'FBI',
            dependencies: [
                { field: 'fullName', required: false, dependencyGroup: '2' },
                { field: 'documentType', required: false, dependencyGroup: '1', enum: ['CC', 'CE'] },
                { field: 'documentNumber', required: false, dependencyGroup: '1' },
                { field: 'dateOfBirth', required: false, dependencyGroup: '1', requiredWhen: { field: 'documentType', in: ['CCPA'] } },
            ],
        };
        const modes = queryModesForFeature(fbi);
        let graph = addEndpointNode(emptyFlowGraph(), citizen as never, 0, 0);
        graph = addEndpointNode(graph, fbi as never, 0, 200);
        graph = applyQueryMode(graph, 'fbi', modes[0].id, modes);
        const steps = [
            { sequence: 1, enabled: true, appFeature: citizen },
            { sequence: 2, enabled: true, appFeature: fbi },
        ];
        const open = {
            name: 'Visita',
            country: 'Colombia',
            inputFormat: 'csv',
            outputFormat: 'xlsx',
            mergeStrategy: 'sequential',
            steps,
            visitaFlow: graph,
        } as BatchConfiguration;
        expect(extractRequiredFieldsFromConfig(open).map((field) => field.field)).toEqual([
            'documentNumber',
            'documentType',
            'fullName',
        ]);

        const wired = { ...open, visitaFlow: connectPorts(graph, 'citizen', 'fullName', 'fbi', 'fullName') };
        expect(extractRequiredFieldsFromConfig(wired).map((field) => field.field)).toEqual([
            'documentNumber',
            'documentType',
        ]);
        const planned = prepareStepsForRun(wired.steps ?? [], wired);
        expect(planned[1].queryMode).toBe('2');
        expect(planned[1].parameterDefaults).toMatchObject({ fullName: '{{results.1.fullName}}' });
    });

    it('keeps every FBI field when the consult is not inside a flow', () => {
        const fbi = {
            _id: 'fbi',
            code: 'world_api_fbi',
            name: 'FBI',
            dependencies: [
                { field: 'fullName', required: false, dependencyGroup: '2' },
                { field: 'documentType', required: false, dependencyGroup: '1' },
                { field: 'documentNumber', required: false, dependencyGroup: '1' },
            ],
        };
        const fields = extractRequiredFieldsFromConfig({
            name: 'Suelto',
            country: 'world',
            inputFormat: 'csv',
            outputFormat: 'xlsx',
            mergeStrategy: 'sequential',
            steps: [{ sequence: 1, enabled: true, appFeature: fbi }],
        } as BatchConfiguration);
        expect(fields.map((field) => field.field)).toEqual(['documentNumber', 'documentType', 'fullName']);
    });
});

describe('step compatibility', () => {
    const runtStep = colombiaVehicleConfig.steps[0];
    const agreementsStep = colombiaVehicleConfig.steps[2];

    it('marks NIT compatible with RUNT and incompatible with agreements', () => {
        const input = { documentType: 'NIT', documentNumber: '900123456', plate: 'ABC123' };

        expect(isStepInputCompatible(runtStep, input)).toBe(true);
        expect(isStepInputCompatible(agreementsStep, input)).toBe(false);
    });

    it('marks RC compatible with agreements and incompatible with RUNT', () => {
        const input = { documentType: 'RC', documentNumber: '12345', plate: 'ABC123' };

        expect(isStepInputCompatible(runtStep, input)).toBe(false);
        expect(isStepInputCompatible(agreementsStep, input)).toBe(true);
    });

    it('marks CC compatible with all document-dependent steps', () => {
        const input = { documentType: 'CC', documentNumber: '1032386359', plate: 'ABC123' };
        const views = getStepCompatibilityViews(colombiaVehicleConfig, input);

        expect(views.every((v) => v.compatible)).toBe(true);
    });

    it('returns skip reasons for incompatible steps', () => {
        const views = getStepCompatibilityViews(colombiaVehicleConfig, {
            documentType: 'NIT',
            documentNumber: '900123456',
            plate: 'ABC123',
        });

        const agreements = views.find((v) => v.stepCode === 'colombia_api_simit_agreements');
        expect(agreements?.compatible).toBe(false);
        expect(agreements?.skipReason?.field).toBe('documentType');
        expect(agreements?.skipReason?.value).toBe('NIT');
    });

    it('does not omit a name consult when the row document type is outside that option', () => {
        const citizen = {
            _id: 'citizen',
            code: 'colombia_api_name',
            name: 'Nombre',
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC', 'TI', 'RC', 'PA'] },
                { field: 'documentNumber', required: true },
            ],
        };
        const fbi = {
            _id: 'fbi',
            code: 'world_api_fbi',
            name: 'FBI',
            dependencies: [
                { field: 'fullName', required: false, dependencyGroup: '2' },
                { field: 'documentType', required: false, dependencyGroup: '1', enum: ['CC', 'CE'] },
                { field: 'documentNumber', required: false, dependencyGroup: '1' },
            ],
        };
        const modes = queryModesForFeature(fbi);
        let graph = addEndpointNode(emptyFlowGraph(), citizen as never, 0, 0);
        graph = addEndpointNode(graph, fbi as never, 0, 200);
        graph = applyQueryMode(graph, 'fbi', modes[0].id, modes);
        graph = connectPorts(graph, 'citizen', 'fullName', 'fbi', 'fullName');
        const config = {
            name: 'Visita',
            country: 'Colombia',
            inputFormat: 'csv',
            outputFormat: 'xlsx',
            mergeStrategy: 'sequential',
            steps: [
                { sequence: 1, enabled: true, appFeature: citizen },
                { sequence: 2, enabled: true, appFeature: fbi },
            ],
            visitaFlow: graph,
        } as BatchConfiguration;
        const views = getStepCompatibilityViews(config, { documentType: 'TI', documentNumber: '123' });
        expect(views.find((view) => view.stepCode === 'world_api_fbi')?.compatible).toBe(true);
        expect(views.find((view) => view.stepCode === 'colombia_api_name')?.compatible).toBe(true);
    });
});
