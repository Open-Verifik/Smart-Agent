import { describe, expect, it } from 'vitest';
import { chainProfileForFeature } from './endpoint-chain.util';
import { queryModesForFeature } from './query-modes.util';
import {
    addEndpointNode,
    applyQueryMode,
    autoConnect,
    chainStepFeedTemplatesFromGraph,
    compatibleInputWires,
    connectPorts,
    emptyFlowGraph,
    fieldsLikelyCompatible,
    flattenFlowGraph,
    FLOW_RESULT_ID,
    FLOW_START_ID,
    flowOptionalSeedFields,
    flowSeedFields,
    startOutputPorts,
    flowNodeHeight,
    flowNodeWidth,
    graphFromLinearChain,
    incomingEdge,
    layoutFlowGraph,
    FLOW_COL_GAP,
    FLOW_ROW_GAP,
    outgoingEdges,
    parseFlowGraph,
    planEndpointLink,
    pruneInvalidEndpointWires,
    restoreUnfedInputs,
    sameFlowLayout,
    FLOW_WIRE_COLORS,
    wireColorForIndex,
} from './endpoint-flow-graph.util';

const plate = {
    _id: 'p1',
    code: 'colombia_api_runt_vehicle_by_plate_only',
    name: 'RUNT vehicle by plate',
    dependencies: [{ field: 'plate', required: true }],
};
const byVin = {
    _id: 'v1',
    code: 'colombia_api_vehicle_complete_by_vin',
    name: 'Vehicle by VIN',
    dependencies: [{ field: 'vin', required: true }],
};
const owner = {
    _id: 'o1',
    name: 'Consultar propietario',
    dependencies: [{ field: 'plate', required: true }],
};

describe('endpoint-flow-graph', () => {
    it('keeps plate as the only seed when VIN is wired from the plate lookup', () => {
        const profiles = {
            p1: chainProfileForFeature(plate),
            v1: chainProfileForFeature(byVin),
        };
        let graph = addEndpointNode(emptyFlowGraph(), plate as never, 0, 0);
        graph = addEndpointNode(graph, byVin as never, 400, 0);
        graph = autoConnect(graph, FLOW_START_ID, 'p1', profiles);
        graph = autoConnect(graph, 'p1', 'v1', profiles);
        expect(flowSeedFields(graph, profiles)).toEqual(['plate']);
        expect(startOutputPorts(graph, profiles)).toEqual(['plate']);
        expect(flattenFlowGraph(graph).map((feature) => feature._id)).toEqual(['p1', 'v1']);
    });

    it('places a linear list without data wires until the user connects ports', () => {
        const profiles = {
            p1: chainProfileForFeature(plate),
            v1: chainProfileForFeature(byVin),
            o1: chainProfileForFeature(owner),
        };
        const graph = graphFromLinearChain([plate, byVin, owner] as never, profiles);
        expect(graph.nodes.some((node) => node.kind === 'merge')).toBe(false);
        expect(
            graph.edges
                .filter((edge) => edge.to !== FLOW_RESULT_ID)
                .map((edge) => ({ from: edge.from, to: edge.to }))
        ).toEqual([]);
        expect(graph.edges.filter((edge) => edge.to === FLOW_RESULT_ID).map((edge) => edge.from).sort()).toEqual([
            'o1',
            'p1',
            'v1',
        ]);
        expect(flowSeedFields(graph, profiles)).toEqual(expect.arrayContaining(['plate', 'vin']));
        expect(fieldsLikelyCompatible('vin', 'vin')).toBe(true);
        expect(fieldsLikelyCompatible('marca', 'documentNumber')).toBe(false);
    });

    it('replaces a wired input with a later connection', () => {
        let graph = addEndpointNode(emptyFlowGraph(), byVin as never, 0, 0);
        graph = connectPorts(graph, FLOW_START_ID, 'vin', 'v1', 'vin');
        graph = connectPorts(graph, 'other', 'vin', 'v1', 'vin');
        const wired = graph.edges.find((edge) => edge.to === 'v1' && edge.toPort === 'vin');
        expect(wired?.from).toBe('other');
    });

    it('fans one start field to several blocks and lets a later block take a prior output', () => {
        const citizen = {
            _id: 'c1',
            name: 'Ciudadano',
            dependencies: [
                { field: 'documentNumber', required: true },
                { field: 'documentType', required: true },
            ],
        };
        const vote = {
            _id: 'v2',
            name: 'Votacion',
            dependencies: [{ field: 'documentNumber', required: true }],
        };
        let graph = addEndpointNode(emptyFlowGraph(), citizen as never, 300, 40);
        graph = addEndpointNode(graph, vote as never, 300, 280);
        graph = connectPorts(graph, FLOW_START_ID, 'documentNumber', 'c1', 'documentNumber');
        graph = connectPorts(graph, FLOW_START_ID, 'documentType', 'c1', 'documentType');
        graph = connectPorts(graph, FLOW_START_ID, 'documentNumber', 'v2', 'documentNumber');
        expect(outgoingEdges(graph, FLOW_START_ID, 'documentNumber')).toHaveLength(2);
        expect(incomingEdge(graph, 'v2', 'documentNumber')?.from).toBe(FLOW_START_ID);
        expect(chainStepFeedTemplatesFromGraph(graph, flattenFlowGraph(graph))).toEqual([{}, {}]);

        graph = connectPorts(graph, 'c1', 'documentNumber', 'v2', 'documentNumber');
        expect(incomingEdge(graph, 'v2', 'documentNumber')?.from).toBe('c1');
        expect(outgoingEdges(graph, FLOW_START_ID, 'documentNumber')).toHaveLength(1);
        expect(flattenFlowGraph(graph).map((feature) => feature._id)).toEqual(['c1', 'v2']);
        expect(chainStepFeedTemplatesFromGraph(graph, flattenFlowGraph(graph))).toEqual([
            {},
            { documentNumber: '{{results.1.documentNumber}}' },
        ]);
        graph = connectPorts(graph, 'c1', 'arrayName', 'v2', 'lastName', 2);
        graph = connectPorts(graph, 'c1', 'propietarios', 'v2', 'ownerDocument', 1, 'data.propietarios');
        expect(chainStepFeedTemplatesFromGraph(graph, flattenFlowGraph(graph))).toEqual([
            {},
            {
                documentNumber: '{{results.1.documentNumber}}',
                lastName: '{{results.1.arrayName.2}}',
                ownerDocument: '{{results.1.data.propietarios.1}}',
            },
        ]);
        const restored = parseFlowGraph(JSON.parse(JSON.stringify(graph)));
        expect(restored).not.toBeNull();
        expect(sameFlowLayout(restored!, graph)).toBe(true);
        expect(parseFlowGraph(null)).toBeNull();
        expect(parseFlowGraph({ nodes: [], edges: [] })).toBeNull();
    });

    it('keeps organized blocks aligned without stacking them on top of each other', () => {
        let graph = addEndpointNode(emptyFlowGraph(), plate as never, 0, 0);
        graph = addEndpointNode(graph, byVin as never, 12, 12);
        graph = addEndpointNode(graph, owner as never, 24, 24);
        graph = layoutFlowGraph(graph);
        const boxes = graph.nodes.map((node) => ({
            id: node.id,
            x: node.x,
            y: node.y,
            w: flowNodeWidth(node),
            h: flowNodeHeight(node, node.kind === 'endpoint' ? 4 : 3),
        }));
        for (let left = 0; left < boxes.length; left += 1) {
            for (let right = left + 1; right < boxes.length; right += 1) {
                const a = boxes[left];
                const b = boxes[right];
                const overlap = a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
                expect(overlap, `${a.id} overlaps ${b.id}`).toBe(false);
            }
        }
        const lookups = graph.nodes.filter((node) => node.kind === 'endpoint').sort((a, b) => a.y - b.y);
        expect(lookups[1].y - lookups[0].y).toBe(flowNodeHeight(lookups[0], 4) + FLOW_ROW_GAP);
        expect(lookups[0].x).toBe(lookups[1].x);
    });

    it('keeps a wide start card from covering the first lookup', () => {
        let graph = addEndpointNode(emptyFlowGraph(), plate as never, 0, 0);
        graph = addEndpointNode(graph, byVin as never, 20, 20);
        const sizeOf = (node: (typeof graph.nodes)[number]) =>
            node.kind === 'start'
                ? { width: 420, height: 340 }
                : node.kind === 'result'
                  ? { width: 320, height: 180 }
                  : { width: 288, height: 68 };
        graph = layoutFlowGraph(graph, undefined, sizeOf);
        const boxes = graph.nodes.map((node) => {
            const size = sizeOf(node);
            return { id: node.id, x: node.x, y: node.y, w: size.width, h: size.height };
        });
        for (let left = 0; left < boxes.length; left += 1) {
            for (let right = left + 1; right < boxes.length; right += 1) {
                const a = boxes[left];
                const b = boxes[right];
                const gapX = a.x + a.w <= b.x ? b.x - (a.x + a.w) : b.x + b.w <= a.x ? a.x - (b.x + b.w) : 0;
                const gapY = a.y + a.h <= b.y ? b.y - (a.y + a.h) : b.y + b.h <= a.y ? a.y - (b.y + b.h) : 0;
                const separated = gapX > 0 || gapY > 0;
                expect(separated, `${a.id} covers ${b.id}`).toBe(true);
                if (gapX > 0 && gapY === 0) expect(gapX).toBeGreaterThanOrEqual(FLOW_COL_GAP);
                if (gapY > 0 && gapX === 0) expect(gapY).toBeGreaterThanOrEqual(FLOW_ROW_GAP);
            }
        }
        const lookups = graph.nodes.filter((node) => node.kind === 'endpoint').sort((a, b) => a.y - b.y);
        expect(lookups[1].y - lookups[0].y).toBe(68 + FLOW_ROW_GAP);
    });

    it('gives each connection a different color until the palette runs out', () => {
        const seen = new Set<string>();
        for (let index = 0; index < FLOW_WIRE_COLORS.length; index += 1) {
            const color = wireColorForIndex(index);
            expect(seen.has(color)).toBe(false);
            seen.add(color);
        }
        expect(wireColorForIndex(FLOW_WIRE_COLORS.length)).toBe(FLOW_WIRE_COLORS[0]);
    });

    it('keeps only the selected query option in the flow seed', () => {
        const fbi = {
            _id: 'fbi',
            code: 'world_api_fbi',
            name: 'FBI',
            dependencies: [
                { field: 'fullName', required: false, dependencyGroup: '2' },
                { field: 'documentType', required: false, dependencyGroup: '1', enum: ['CC', 'CE'] },
                { field: 'documentNumber', required: false, dependencyGroup: '1' },
                {
                    field: 'dateOfBirth',
                    required: false,
                    dependencyGroup: '1',
                    requiredWhen: { field: 'documentType', in: ['CCPA'] },
                },
                {
                    field: 'expirationDate',
                    required: false,
                    dependencyGroup: '1',
                    requiredWhen: { field: 'documentType', in: ['CE'] },
                },
            ],
        };
        const modes = queryModesForFeature(fbi);
        const profiles = {
            fbi: { inputs: ['fullName', 'documentType', 'documentNumber', 'dateOfBirth', 'expirationDate'], outputs: [], inputEnums: {} },
        };
        let graph = addEndpointNode(emptyFlowGraph(), fbi as never, 0, 0);
        graph = applyQueryMode(graph, 'fbi', modes[0].id, modes);
        expect(flowSeedFields(graph, profiles)).toEqual(['fullName']);
        expect(flowOptionalSeedFields(graph, profiles)).toEqual([]);

        graph = applyQueryMode(graph, 'fbi', modes[1].id, modes);
        expect(flowSeedFields(graph, profiles)).toEqual(['documentType', 'documentNumber']);
        expect(flowOptionalSeedFields(graph, profiles)).toEqual(['dateOfBirth', 'expirationDate']);
    });

    it('drops the FBI name once a previous consult feeds it', () => {
        const citizen = {
            _id: 'citizen',
            code: 'colombia_api_name',
            name: 'Nombre',
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
            ],
        };
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
        const profiles = {
            citizen: { inputs: ['documentType', 'documentNumber'], outputs: ['fullName'], inputEnums: {} },
            fbi: { inputs: ['fullName', 'documentType', 'documentNumber'], outputs: [], inputEnums: {} },
        };
        const modes = queryModesForFeature(fbi);
        let graph = addEndpointNode(emptyFlowGraph(), citizen as never, 0, 0);
        graph = addEndpointNode(graph, fbi as never, 0, 200);
        graph = applyQueryMode(graph, 'fbi', modes[0].id, modes);
        expect(modes[0].id).toBe('2');
        expect(flowSeedFields(graph, profiles)).toEqual(['documentType', 'documentNumber', 'fullName']);

        graph = connectPorts(graph, 'citizen', 'fullName', 'fbi', 'fullName');
        expect(flowSeedFields(graph, profiles)).toEqual(['documentType', 'documentNumber']);
    });
});

describe('compatibleInputWires', () => {
    const start = { id: FLOW_START_ID, kind: 'start' as const, x: 0, y: 0 };
    const affiliations = { id: 'aff', kind: 'endpoint' as const, x: 0, y: 0 };
    const needed = ['documentType', 'documentNumber', 'date'];
    const affiliationsProfile = {
        inputs: needed,
        outputs: ['eps', 'documentType', 'documentNumber'],
        inputEnums: { documentType: ['CC', 'CE', 'PA', 'PEP'] },
    };

    it('connects every typed field from input data, including date', () => {
        const wires = compatibleInputWires(start, affiliations, needed, undefined, affiliationsProfile);
        expect(wires.map((wire) => wire.toPort)).toEqual(needed);
    });

    it('connects the document fields a previous lookup returns and leaves date out', () => {
        const seguridad = { id: 'seg', kind: 'endpoint' as const, x: 0, y: 0 };
        const wires = compatibleInputWires(
            seguridad,
            affiliations,
            needed,
            {
                inputs: ['documentType', 'documentNumber'],
                outputs: ['documentType', 'documentNumber', 'fullName'],
                inputEnums: { documentType: ['CC', 'CE', 'PA'] },
            },
            affiliationsProfile
        );
        expect(wires.map((wire) => wire.toPort)).toEqual(['documentType', 'documentNumber']);
    });

    it('skips a document type whose allowed values do not overlap', () => {
        const nitLookup = { id: 'nit', kind: 'endpoint' as const, x: 0, y: 0 };
        const wires = compatibleInputWires(
            nitLookup,
            affiliations,
            needed,
            {
                inputs: ['documentType', 'documentNumber'],
                outputs: ['documentType', 'documentNumber'],
                inputEnums: { documentType: ['NIT'] },
            },
            affiliationsProfile
        );
        expect(wires.map((wire) => wire.toPort)).toEqual(['documentNumber']);
    });

    it('connects nothing when the previous lookup returns different fields', () => {
        const plate = { id: 'plate', kind: 'endpoint' as const, x: 0, y: 0 };
        const wires = compatibleInputWires(
            plate,
            affiliations,
            needed,
            { inputs: ['plate'], outputs: ['plate', 'vin'], inputEnums: {} },
            affiliationsProfile
        );
        expect(wires).toEqual([]);
    });
});

describe('endpoint chaining', () => {
    const cedula = { id: 'cedula', kind: 'endpoint' as const, x: 0, y: 0 };
    const health = { id: 'health', kind: 'endpoint' as const, x: 400, y: 0 };
    const citizen = { id: 'citizen', kind: 'endpoint' as const, x: 0, y: 200 };
    const cedulaProfile = {
        inputs: ['documentNumber'],
        outputs: ['documentNumber', 'documentType', 'fullName', 'fechaExpedicion'],
        inputEnums: {},
    };
    const healthProfile = {
        inputs: ['documentNumber', 'date'],
        outputs: [],
        inputEnums: {},
    };

    const graphWith = (...features: { _id: string; name: string }[]) =>
        features.reduce((graph, feature) => addEndpointNode(graph, feature as never, 0, 0), emptyFlowGraph());

    it('lets a full match feed document number and issue date without asking again', () => {
        const graph = graphWith({ _id: 'cedula', name: 'Cédula' }, { _id: 'health', name: 'Afiliaciones' });
        const plan = planEndpointLink(graph, cedula, health, ['documentNumber', 'date'], cedulaProfile, healthProfile);
        expect(plan.status).toBe('full');
        expect(plan.pending).toEqual([]);
        expect(plan.wires).toEqual([
            { from: 'cedula', fromPort: 'documentNumber', to: 'health', toPort: 'documentNumber' },
            { from: 'cedula', fromPort: 'fechaExpedicion', to: 'health', toPort: 'date' },
        ]);
    });

    it('refuses the connection when the source is missing any required field', () => {
        const graph = graphWith({ _id: 'cedula', name: 'Cédula' }, { _id: 'health', name: 'Afiliaciones' });
        const plan = planEndpointLink(
            graph,
            cedula,
            health,
            ['documentNumber', 'date'],
            { ...cedulaProfile, outputs: ['documentNumber', 'fullName'] },
            healthProfile
        );
        expect(plan.status).toBe('none');
        expect(plan.wires).toEqual([]);
        expect(plan.pending).toEqual(['date']);
    });

    it('rejects a lookup that returns nothing the next one can use', () => {
        const graph = graphWith({ _id: 'cedula', name: 'Cédula' }, { _id: 'health', name: 'Afiliaciones' });
        const link = { id: 'link', kind: 'endpoint' as const, x: 0, y: 0 };
        const plan = planEndpointLink(
            graph,
            cedula,
            link,
            ['validationLink'],
            cedulaProfile,
            { inputs: ['validationLink'], outputs: [], inputEnums: {} }
        );
        expect(plan.status).toBe('none');
        expect(plan.wires).toEqual([]);
    });

    it('still feeds an independent lookup only from input data', () => {
        const graph = graphWith({ _id: 'citizen', name: 'Ciudadano' });
        const start = graph.nodes.find((node) => node.kind === 'start')!;
        const plan = planEndpointLink(
            graph,
            start,
            citizen,
            ['documentType', 'documentNumber'],
            undefined,
            { inputs: ['documentType', 'documentNumber'], outputs: [], inputEnums: {} }
        );
        expect(plan.status).toBe('full');
        expect(plan.wires.every((wire) => wire.from === FLOW_START_ID)).toBe(true);
    });

    it('runs a dependent lookup after its source and leaves independent lookups free', () => {
        let graph = graphWith(
            { _id: 'cedula', name: 'Cédula' },
            { _id: 'health', name: 'Afiliaciones' },
            { _id: 'citizen', name: 'Ciudadano' }
        );
        graph = connectPorts(graph, 'cedula', 'documentNumber', 'health', 'documentNumber');
        const order = flattenFlowGraph(graph).map((feature) => feature._id);
        expect(order.indexOf('cedula')).toBeLessThan(order.indexOf('health'));
        expect(order).toContain('citizen');
        expect(chainStepFeedTemplatesFromGraph(graph, flattenFlowGraph(graph))[order.indexOf('health')]).toEqual({
            documentNumber: '{{results.1.documentNumber}}',
        });
    });

    it('asks for a field again after its feeding wire is removed', () => {
        let graph = graphWith({ _id: 'cedula', name: 'Cédula' }, { _id: 'health', name: 'Afiliaciones' });
        graph = connectPorts(graph, 'cedula', 'documentNumber', 'health', 'documentNumber');
        graph = connectPorts(graph, FLOW_START_ID, 'date', 'health', 'date');
        graph = {
            ...graph,
            edges: graph.edges.filter((edge) => !(edge.from === 'cedula' && edge.to === 'health')),
        };
        graph = restoreUnfedInputs(graph, 'health', ['documentNumber', 'date']);
        expect(incomingEdge(graph, 'health', 'documentNumber')?.from).toBe(FLOW_START_ID);
        expect(incomingEdge(graph, 'health', 'date')?.from).toBe(FLOW_START_ID);
    });

    it('drops a wire when the response sample no longer has the property', () => {
        let graph = graphWith({ _id: 'cedula', name: 'Cédula' }, { _id: 'health', name: 'Afiliaciones' });
        graph = connectPorts(graph, 'cedula', 'fechaExpedicion', 'health', 'date');
        const pruned = pruneInvalidEndpointWires(graph, {
            cedula: { ...cedulaProfile, outputs: ['documentNumber', 'fullName'] },
            health: healthProfile,
        });
        expect(pruned.dropped).toEqual([{ from: 'cedula', to: 'health', field: 'date' }]);
        expect(pruned.graph.edges.some((edge) => edge.to === 'health' && edge.toPort === 'date')).toBe(false);
    });

    it('rejects a cycle', () => {
        let graph = graphWith({ _id: 'cedula', name: 'Cédula' }, { _id: 'health', name: 'Afiliaciones' });
        graph = connectPorts(graph, 'cedula', 'documentNumber', 'health', 'documentNumber');
        const plan = planEndpointLink(graph, health, cedula, ['documentNumber'], healthProfile, cedulaProfile);
        expect(plan.status).toBe('cycle');
        expect(plan.wires).toEqual([]);
    });

    it('keeps a mapped wire after the flow is saved and opened again', () => {
        let graph = graphWith({ _id: 'cedula', name: 'Cédula' }, { _id: 'health', name: 'Afiliaciones' });
        graph = connectPorts(graph, 'cedula', 'fechaExpedicion', 'health', 'date');
        const restored = parseFlowGraph(JSON.parse(JSON.stringify(graph)));
        const edge = restored?.edges.find((item) => item.to === 'health' && item.toPort === 'date');
        expect(edge?.from).toBe('cedula');
        expect(edge?.fromPort).toBe('fechaExpedicion');
    });
});
