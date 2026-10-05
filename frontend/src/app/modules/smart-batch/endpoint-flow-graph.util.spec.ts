import { describe, expect, it } from 'vitest';
import { chainProfileForFeature } from './endpoint-chain.util';
import {
    addEndpointNode,
    autoConnect,
    connectPorts,
    emptyFlowGraph,
    fieldsLikelyCompatible,
    flattenFlowGraph,
    FLOW_START_ID,
    flowSeedFields,
    graphFromLinearChain,
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

    it('fans the same plate out to VIN and owner lookups', () => {
        const profiles = {
            p1: chainProfileForFeature(plate),
            v1: chainProfileForFeature(byVin),
            o1: chainProfileForFeature(owner),
        };
        const graph = graphFromLinearChain([plate, byVin, owner] as never, profiles);
        expect(flowSeedFields(graph, profiles)).toEqual(['plate']);
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
});
