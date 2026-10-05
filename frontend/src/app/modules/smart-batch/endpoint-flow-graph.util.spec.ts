import { describe, expect, it } from 'vitest';
import { chainProfileForFeature } from './endpoint-chain.util';
import {
    addEndpointNode,
    autoConnect,
    chainStepFeedTemplatesFromGraph,
    connectPorts,
    emptyFlowGraph,
    fieldsLikelyCompatible,
    flattenFlowGraph,
    FLOW_RESULT_ID,
    FLOW_START_ID,
    flowSeedFields,
    graphFromLinearChain,
    incomingEdge,
    outgoingEdges,
    parseFlowGraph,
    sameFlowLayout,
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
        const restored = parseFlowGraph(JSON.parse(JSON.stringify(graph)));
        expect(restored).not.toBeNull();
        expect(sameFlowLayout(restored!, graph)).toBe(true);
        expect(parseFlowGraph(null)).toBeNull();
        expect(parseFlowGraph({ nodes: [], edges: [] })).toBeNull();
    });
});
