import { describe, expect, it } from 'vitest';
import type { BatchConfiguration } from './smart-batch.service';
import { addEndpointNode, applyQueryMode, connectPorts, emptyFlowGraph } from './endpoint-flow-graph.util';
import { queryModesForFeature } from './query-modes.util';
import {
    autoFilledFieldsForStep,
    extractRequiredFieldsFromConfig,
    getStepCompatibilityViews,
    isStepInputCompatible,
    mergeEnumValues,
    prepareStepsForRun,
    stripInlineMarkdown,
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

    it('asks only for documentNumber and documentType on chained driver preset steps', () => {
        const driverConfig: BatchConfiguration = {
            name: 'Validación de conductor (Colombia)',
            country: 'Colombia',
            inputFormat: 'csv',
            outputFormat: 'csv',
            mergeStrategy: 'sequential',
            steps: [
                {
                    sequence: 1,
                    enabled: true,
                    parameterDefaults: {},
                    appFeature: {
                        _id: 's1',
                        code: 'colombia_api_identity_lookup_premium',
                        name: 'Identity Premium',
                        dependencies: [{ field: 'documentNumber', required: true }],
                    },
                },
                {
                    sequence: 2,
                    enabled: true,
                    parameterDefaults: {},
                    appFeature: {
                        _id: 's2',
                        code: 'colombia_special_api_police_identity_lookup',
                        name: 'Police',
                        dependencies: [
                            { field: 'documentType', required: true, enum: ['CC', 'CE', 'PPT', 'PA', 'DP'] },
                            { field: 'documentNumber', required: true },
                        ],
                    },
                },
                {
                    sequence: 3,
                    enabled: true,
                    parameterDefaults: { date: '{{results.1.date}}' },
                    appFeature: {
                        _id: 's3',
                        code: 'colombia_api_registraduria_certificate',
                        name: 'Registraduría',
                        dependencies: [
                            { field: 'documentType', required: true, enum: ['CC'] },
                            { field: 'documentNumber', required: true },
                            { field: 'date', required: true },
                        ],
                    },
                },
                {
                    sequence: 4,
                    enabled: true,
                    parameterDefaults: { firstSurname: '{{results.1.firstSurname || results.2.firstSurname}}' },
                    appFeature: {
                        _id: 's4',
                        code: 'colombia_inpec_lookup',
                        name: 'INPEC',
                        dependencies: [
                            { field: 'documentType', required: true, enum: ['CC'] },
                            { field: 'documentNumber', required: true },
                            { field: 'firstSurname', required: true },
                        ],
                    },
                },
                {
                    sequence: 9,
                    enabled: true,
                    parameterDefaults: { city: 'bogota' },
                    appFeature: {
                        _id: 's9',
                        code: 'colombia_api_rama_jepms',
                        name: 'JEPMS',
                        dependencies: [
                            { field: 'documentType', required: false, enum: ['CC', 'CE', 'NIT'] },
                            { field: 'documentNumber', required: true },
                            { field: 'city', required: false },
                        ],
                    },
                },
                {
                    sequence: 12,
                    enabled: true,
                    queryMode: '2',
                    parameterDefaults: { fullName: '{{results.1.fullName || results.2.fullName}}' },
                    appFeature: {
                        _id: 's12',
                        code: 'world_api_ofac',
                        name: 'OFAC',
                        dependencies: [
                            { field: 'fullName', required: false, dependencyGroup: '2' },
                            { field: 'documentType', required: false, dependencyGroup: '1' },
                            { field: 'documentNumber', required: false, dependencyGroup: '1' },
                            { field: 'dateOfBirth', required: false, dependencyGroup: '1', requiredWhen: { field: 'documentType', in: ['CCPA'] } },
                            { field: 'expirationDate', required: false, dependencyGroup: '1', requiredWhen: { field: 'documentType', in: ['CE', 'PPT'] } },
                        ],
                    },
                },
            ],
        };

        const fields = extractRequiredFieldsFromConfig(driverConfig);
        expect(fields.map((field) => field.field)).toEqual(['documentNumber', 'documentType']);
        expect(fields.every((field) => field.required)).toBe(true);

        expect(autoFilledFieldsForStep(driverConfig.steps[2], driverConfig)).toEqual([
            { field: 'date', source: 'chain', fromSteps: [1] },
        ]);
        expect(autoFilledFieldsForStep(driverConfig.steps[3], driverConfig)).toEqual([
            { field: 'firstSurname', source: 'chain', fromSteps: [1, 2] },
        ]);
        expect(autoFilledFieldsForStep(driverConfig.steps[4], driverConfig)).toEqual([
            { field: 'city', source: 'default', defaultValue: 'bogota' },
        ]);
        expect(autoFilledFieldsForStep(driverConfig.steps[5], driverConfig)).toEqual([
            { field: 'fullName', source: 'chain', fromSteps: [1, 2] },
        ]);
        expect(stripInlineMarkdown('**Fecha de expedición** en **`DD/MM/AAAA`**.')).toBe(
            'Fecha de expedición en DD/MM/AAAA.'
        );
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
