import { canonicalChainField, canFeed, ChainProfile, sharedChainFields } from './endpoint-chain.util';
import { AppFeature } from './smart-batch.service';

export type FlowNodeKind = 'start' | 'endpoint' | 'merge' | 'result';

export interface FlowGraphNode {
    id: string;
    kind: FlowNodeKind;
    feature?: AppFeature;
    x: number;
    y: number;
}

export interface FlowGraphEdge {
    id: string;
    from: string;
    fromPort: string;
    to: string;
    toPort: string;
}

export interface FlowGraph {
    nodes: FlowGraphNode[];
    edges: FlowGraphEdge[];
    fixed: Record<string, Record<string, string>>;
}

export const FLOW_START_ID = 'flow-start';
export const FLOW_MERGE_ID = 'flow-merge';
export const FLOW_RESULT_ID = 'flow-result';

export const FLOW_NODE_WIDTH = 288;
export const FLOW_COMPACT_WIDTH = 220;
export const FLOW_HEADER_HEIGHT = 58;
export const FLOW_PORT_HEIGHT = 32;
export const FLOW_NODE_FOOTER = 28;
export const FLOW_COL_GAP = 40;
export const FLOW_ROW_GAP = 16;

export const emptyFlowGraph = (): FlowGraph => ({
    nodes: [
        { id: FLOW_START_ID, kind: 'start', x: 48, y: 160 },
        { id: FLOW_RESULT_ID, kind: 'result', x: 920, y: 200 },
    ],
    edges: [],
    fixed: {},
});

export const endpointNodes = (graph: FlowGraph): FlowGraphNode[] =>
    graph.nodes.filter((node) => node.kind === 'endpoint' && node.feature);

export const flattenFlowGraph = (graph: FlowGraph): AppFeature[] => {
    const nodes = endpointNodes(graph);
    const ids = new Set(nodes.map((node) => node.id));
    const incoming = new Map<string, number>();
    for (const node of nodes) incoming.set(node.id, 0);
    for (const edge of graph.edges) {
        if (!ids.has(edge.from) || !ids.has(edge.to)) continue;
        incoming.set(edge.to, (incoming.get(edge.to) ?? 0) + 1);
    }
    const ready = nodes.filter((node) => !incoming.get(node.id)).sort((a, b) => a.y - b.y || a.x - b.x);
    const out: AppFeature[] = [];
    const seen = new Set<string>();
    while (ready.length) {
        const current = ready.shift()!;
        if (seen.has(current.id) || !current.feature) continue;
        seen.add(current.id);
        out.push(current.feature);
        for (const edge of graph.edges) {
            if (edge.from !== current.id || !ids.has(edge.to)) continue;
            const nextCount = (incoming.get(edge.to) ?? 1) - 1;
            incoming.set(edge.to, nextCount);
            if (nextCount <= 0) {
                const next = nodes.find((node) => node.id === edge.to);
                if (next) ready.push(next);
            }
        }
    }
    for (const node of nodes) {
        if (!seen.has(node.id) && node.feature) out.push(node.feature);
    }
    return out;
};

export const usedFeatureIds = (graph: FlowGraph): string[] =>
    flattenFlowGraph(graph)
        .map((feature) => feature._id)
        .filter(Boolean);

export const incomingEdge = (graph: FlowGraph, nodeId: string, port: string): FlowGraphEdge | undefined =>
    graph.edges.find((edge) => edge.to === nodeId && edge.toPort === port);

export const incomingEdgeForField = (
    graph: FlowGraph,
    nodeId: string,
    field: string
): FlowGraphEdge | undefined => {
    const exact = incomingEdge(graph, nodeId, field);
    if (exact) return exact;
    const want = canonicalChainField(field);
    return graph.edges.find(
        (edge) => edge.to === nodeId && edge.toPort !== '*' && canonicalChainField(edge.toPort) === want
    );
};

export const outgoingEdges = (graph: FlowGraph, nodeId: string, port?: string): FlowGraphEdge[] =>
    graph.edges.filter((edge) => edge.from === nodeId && (port == null || edge.fromPort === port));

export const nodeById = (graph: FlowGraph, id: string): FlowGraphNode | undefined =>
    graph.nodes.find((node) => node.id === id);

export const fieldsLikelyCompatible = (fromPort: string, toPort: string): boolean =>
    canonicalChainField(fromPort) === canonicalChainField(toPort);

export const suggestWires = (
    from: FlowGraphNode,
    to: FlowGraphNode,
    fromProfile: ChainProfile | undefined,
    toProfile: ChainProfile | undefined
): Omit<FlowGraphEdge, 'id'>[] => {
    if (to.kind !== 'endpoint') return [];
    const inputs = toProfile?.inputs ?? [];
    if (from.kind === 'start') {
        return inputs.map((field) => ({ from: from.id, fromPort: field, to: to.id, toPort: field }));
    }
    if (from.kind === 'endpoint' && fromProfile && toProfile && canFeed(fromProfile, toProfile)) {
        return sharedChainFields(fromProfile.outputs, toProfile.inputs).map((field) => ({
            from: from.id,
            fromPort: field,
            to: to.id,
            toPort: field,
        }));
    }
    return [];
};

export const nextEdgeId = (): string => `e-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const addEndpointNode = (
    graph: FlowGraph,
    feature: AppFeature,
    x: number,
    y: number
): FlowGraph => {
    if (!feature._id || usedFeatureIds(graph).includes(feature._id)) return graph;
    return ensureResultSinks({
        ...graph,
        nodes: [...graph.nodes, { id: feature._id, kind: 'endpoint', feature, x, y }],
    });
};

export const connectPorts = (
    graph: FlowGraph,
    from: string,
    fromPort: string,
    to: string,
    toPort: string
): FlowGraph => {
    if (from === to) return graph;
    const existing = graph.edges.find(
        (edge) => edge.from === from && edge.fromPort === fromPort && edge.to === to && edge.toPort === toPort
    );
    if (existing) return graph;
    const withoutTarget = graph.edges.filter((edge) => !(edge.to === to && edge.toPort === toPort));
    return {
        ...graph,
        edges: [
            ...withoutTarget,
            { id: nextEdgeId(), from, fromPort, to, toPort },
        ],
        fixed: {
            ...graph.fixed,
            [to]: Object.fromEntries(
                Object.entries(graph.fixed[to] ?? {}).filter(([field]) => field !== toPort)
            ),
        },
    };
};

export const autoConnect = (
    graph: FlowGraph,
    fromId: string,
    toId: string,
    profiles: Record<string, ChainProfile>
): FlowGraph => {
    const from = nodeById(graph, fromId);
    const to = nodeById(graph, toId);
    if (!from || !to) return graph;
    const wires = suggestWires(from, to, profiles[from.id], profiles[to.id]);
    return wires.reduce(
        (next, wire) => connectPorts(next, wire.from, wire.fromPort, wire.to, wire.toPort),
        graph
    );
};

export const removeFlowNode = (graph: FlowGraph, id: string): FlowGraph => {
    if (id === FLOW_START_ID || id === FLOW_RESULT_ID) return graph;
    const { [id]: _removed, ...fixed } = graph.fixed;
    return {
        nodes: graph.nodes.filter((node) => node.id !== id),
        edges: graph.edges.filter((edge) => edge.from !== id && edge.to !== id),
        fixed,
    };
};

export const removeFlowEdge = (graph: FlowGraph, id: string): FlowGraph => ({
    ...graph,
    edges: graph.edges.filter((edge) => edge.id !== id),
});

export const moveFlowNode = (graph: FlowGraph, id: string, x: number, y: number): FlowGraph => ({
    ...graph,
    nodes: graph.nodes.map((node) => (node.id === id ? { ...node, x, y } : node)),
});

export const setFixedValue = (graph: FlowGraph, nodeId: string, port: string, value: string): FlowGraph => {
    const nextFixed = { ...(graph.fixed[nodeId] ?? {}) };
    if (value.trim()) nextFixed[port] = value.trim();
    else delete nextFixed[port];
    const edges = graph.edges.filter((edge) => !(edge.to === nodeId && edge.toPort === port));
    return { ...graph, edges, fixed: { ...graph.fixed, [nodeId]: nextFixed } };
};

export const unboundInputs = (
    graph: FlowGraph,
    profiles: Record<string, ChainProfile>
): { nodeId: string; field: string }[] => {
    const out: { nodeId: string; field: string }[] = [];
    for (const node of endpointNodes(graph)) {
        for (const field of profiles[node.id]?.inputs ?? []) {
            if (incomingEdgeForField(graph, node.id, field)) continue;
            if ((graph.fixed[node.id]?.[field] ?? '').trim()) continue;
            out.push({ nodeId: node.id, field });
        }
    }
    return out;
};

export const flowSeedFields = (graph: FlowGraph, profiles: Record<string, ChainProfile>): string[] => {
    const seed: string[] = [];
    const seen = new Set<string>();
    for (const node of endpointNodes(graph)) {
        for (const field of profiles[node.id]?.inputs ?? []) {
            const canonical = canonicalChainField(field);
            if (seen.has(canonical)) continue;
            if ((graph.fixed[node.id]?.[field] ?? '').trim()) continue;
            const edge = incomingEdgeForField(graph, node.id, field);
            if (edge && edge.from !== FLOW_START_ID) continue;
            seen.add(canonical);
            seed.push(canonical);
        }
    }
    return seed;
};

export const startOutputPorts = (graph: FlowGraph, profiles: Record<string, ChainProfile>): string[] =>
    flowSeedFields(graph, profiles);

/** Every lookup finishes at Resultado final (the report). Drops the old merge block. */
export const ensureResultSinks = (graph: FlowGraph): FlowGraph => {
    let next: FlowGraph = {
        ...graph,
        nodes: graph.nodes.filter((node) => node.kind !== 'merge' && node.id !== FLOW_MERGE_ID),
        edges: graph.edges
            .filter((edge) => edge.from !== FLOW_MERGE_ID && edge.to !== FLOW_MERGE_ID)
            .map((edge) => edge),
    };
    if (!next.nodes.some((node) => node.id === FLOW_RESULT_ID && node.kind === 'result')) {
        next = {
            ...next,
            nodes: [...next.nodes, { id: FLOW_RESULT_ID, kind: 'result', x: 920, y: 200 }],
        };
    }
    for (const node of endpointNodes(next)) {
        if (outgoingEdges(next, node.id, '*').some((edge) => edge.to === FLOW_RESULT_ID)) continue;
        next = connectPorts(next, node.id, '*', FLOW_RESULT_ID, node.id);
    }
    return next;
};

export const flowNodeWidth = (node: FlowGraphNode): number =>
    node.kind === 'endpoint' ? FLOW_NODE_WIDTH : FLOW_COMPACT_WIDTH;

export const flowNodeHeight = (node: FlowGraphNode, rows: number): number => {
    const extra = node.kind === 'endpoint' ? FLOW_NODE_FOOTER : 16;
    return FLOW_HEADER_HEIGHT + Math.max(1, rows) * FLOW_PORT_HEIGHT + extra;
};

export const layoutFlowGraph = (
    graph: FlowGraph,
    rowsFor?: (node: FlowGraphNode) => number
): FlowGraph => {
    const endpoints = endpointNodes(graph);
    const depth = new Map<string, number>();
    const seen = new Set<string>();
    const walk = (id: string, value: number): void => {
        if (seen.has(id) && (depth.get(id) ?? 0) >= value) return;
        seen.add(id);
        depth.set(id, Math.max(depth.get(id) ?? 0, value));
        for (const edge of graph.edges) {
            if (edge.from !== id) continue;
            if (edge.to === FLOW_MERGE_ID || edge.to === FLOW_RESULT_ID) continue;
            walk(edge.to, value + 1);
        }
    };
    walk(FLOW_START_ID, 0);
    for (const node of endpoints) {
        if (!depth.has(node.id)) depth.set(node.id, 1);
    }
    const maxDepth = Math.max(1, ...depth.values());
    const columns = new Map<number, FlowGraphNode[]>();
    for (const node of endpoints) {
        const column = depth.get(node.id) ?? 1;
        columns.set(column, [...(columns.get(column) ?? []), node]);
    }
    for (const [column, siblings] of columns) {
        columns.set(
            column,
            [...siblings].sort((a, b) => a.y - b.y || a.x - b.x || a.id.localeCompare(b.id))
        );
    }

    const rowsOf = (node: FlowGraphNode): number => {
        if (rowsFor) return Math.max(1, rowsFor(node));
        if (node.kind === 'result') {
            return Math.max(1, graph.edges.filter((edge) => edge.to === FLOW_RESULT_ID).length);
        }
        if (node.kind === 'start') return 3;
        return 4;
    };
    const heightOf = (node: FlowGraphNode): number => flowNodeHeight(node, rowsOf(node));

    const columnX = (column: number): number => {
        let x = 40;
        for (let index = 0; index < column; index += 1) {
            const width = index === 0 ? FLOW_COMPACT_WIDTH : FLOW_NODE_WIDTH;
            x += width + FLOW_COL_GAP;
        }
        return x;
    };

    const originY = 48;
    const placedById = new Map<string, { x: number; y: number }>();
    let contentTop = originY;
    let contentBottom = originY;

    for (let column = 1; column <= maxDepth; column += 1) {
        const siblings = columns.get(column) ?? [];
        let y = originY;
        const x = columnX(column);
        for (const node of siblings) {
            placedById.set(node.id, { x, y });
            const bottom = y + heightOf(node);
            contentTop = Math.min(contentTop, y);
            contentBottom = Math.max(contentBottom, bottom);
            y = bottom + FLOW_ROW_GAP;
        }
    }
    if (!endpoints.length) contentBottom = originY + 120;

    const mid = (contentTop + contentBottom) / 2;
    const placeBand = (node: FlowGraphNode | undefined, column: number): void => {
        if (!node) return;
        const h = heightOf(node);
        placedById.set(node.id, {
            x: columnX(column),
            y: Math.max(originY, Math.round(mid - h / 2)),
        });
    };
    placeBand(
        graph.nodes.find((node) => node.kind === 'start'),
        0
    );
    placeBand(
        graph.nodes.find((node) => node.kind === 'result'),
        maxDepth + 1
    );

    const placed = graph.nodes
        .filter((node) => node.kind !== 'merge' && node.id !== FLOW_MERGE_ID)
        .map((node) => {
            const spot = placedById.get(node.id);
            return spot ? { ...node, x: spot.x, y: spot.y } : node;
        });
    return { ...graph, nodes: placed };
};

export const graphFromLinearChain = (
    features: AppFeature[],
    _profiles: Record<string, ChainProfile> = {}
): FlowGraph => {
    let graph = emptyFlowGraph();
    features.forEach((feature, index) => {
        graph = addEndpointNode(graph, feature, 80 + (index + 1) * 340, 160);
    });
    return layoutFlowGraph(graph);
};

export const sameFlowFeatures = (graph: FlowGraph, features: AppFeature[]): boolean => {
    const current = usedFeatureIds(graph);
    const next = features.map((feature) => feature._id).filter(Boolean);
    return current.length === next.length && current.every((id, index) => id === next[index]);
};

export const sameFlowFeatureSet = (graph: FlowGraph, features: AppFeature[]): boolean => {
    const current = new Set(usedFeatureIds(graph));
    const next = features.map((feature) => feature._id).filter(Boolean);
    return current.size === next.length && next.every((id) => current.has(id));
};

const layoutSnapshot = (graph: FlowGraph) => ({
    nodes: graph.nodes.map((node) => ({
        id: node.id,
        kind: node.kind,
        x: node.x,
        y: node.y,
        featureId: node.feature?._id ?? null,
    })),
    edges: graph.edges.map((edge) => ({
        from: edge.from,
        fromPort: edge.fromPort,
        to: edge.to,
        toPort: edge.toPort,
    })),
    fixed: Object.fromEntries(
        Object.entries(graph.fixed ?? {}).filter(([, fields]) => Object.keys(fields).length)
    ),
});

export const sameFlowLayout = (left: FlowGraph, right: FlowGraph): boolean =>
    JSON.stringify(layoutSnapshot(left)) === JSON.stringify(layoutSnapshot(right));

const isRecord = (value: unknown): value is Record<string, unknown> =>
    Boolean(value && typeof value === 'object' && !Array.isArray(value));

export const parseFlowGraph = (value: unknown): FlowGraph | null => {
    if (!isRecord(value) || !Array.isArray(value['nodes']) || !Array.isArray(value['edges'])) return null;
    const nodes: FlowGraphNode[] = [];
    for (const raw of value['nodes']) {
        if (!isRecord(raw) || typeof raw['id'] !== 'string' || typeof raw['kind'] !== 'string') return null;
        if (raw['kind'] === 'merge' || raw['id'] === FLOW_MERGE_ID) continue;
        if (raw['kind'] !== 'start' && raw['kind'] !== 'endpoint' && raw['kind'] !== 'result') {
            return null;
        }
        const x = Number(raw['x']);
        const y = Number(raw['y']);
        if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
        const feature = raw['feature'];
        nodes.push({
            id: raw['id'],
            kind: raw['kind'],
            x,
            y,
            ...(isRecord(feature) && typeof feature['_id'] === 'string'
                ? { feature: feature as unknown as AppFeature }
                : {}),
        });
    }
    if (!nodes.some((node) => node.id === FLOW_START_ID && node.kind === 'start')) return null;
    const edges: FlowGraphEdge[] = [];
    for (const raw of value['edges']) {
        if (!isRecord(raw)) return null;
        const id = typeof raw['id'] === 'string' ? raw['id'] : nextEdgeId();
        let from = raw['from'];
        let fromPort = raw['fromPort'];
        let to = raw['to'];
        let toPort = raw['toPort'];
        if (
            typeof from !== 'string' ||
            typeof fromPort !== 'string' ||
            typeof to !== 'string' ||
            typeof toPort !== 'string'
        ) {
            return null;
        }
        if (from === FLOW_MERGE_ID) continue;
        const dest = to === FLOW_MERGE_ID ? FLOW_RESULT_ID : to;
        const destPort = to === FLOW_MERGE_ID ? from : toPort;
        edges.push({ id, from, fromPort, to: dest, toPort: destPort });
    }
    const fixed: Record<string, Record<string, string>> = {};
    if (isRecord(value['fixed'])) {
        for (const [nodeId, fields] of Object.entries(value['fixed'])) {
            if (!isRecord(fields)) continue;
            const next: Record<string, string> = {};
            for (const [field, item] of Object.entries(fields)) {
                if (typeof item === 'string') next[field] = item;
            }
            if (Object.keys(next).length) fixed[nodeId] = next;
        }
    }
    return ensureResultSinks({ nodes, edges, fixed });
};

export const hydrateFlowGraph = (graph: FlowGraph, features: AppFeature[]): FlowGraph => {
    const byId = new Map(features.filter((feature) => feature._id).map((feature) => [feature._id, feature]));
    return ensureResultSinks({
        ...graph,
        nodes: graph.nodes.map((node) => {
            if (node.kind !== 'endpoint' || !node.feature?._id) return node;
            const fresh = byId.get(node.feature._id);
            return fresh ? { ...node, feature: fresh } : node;
        }),
    });
};

/** Feed later steps only from wires the user drew (not from a guessed cascade). */
export const chainStepFeedTemplatesFromGraph = (
    graph: FlowGraph,
    features: AppFeature[]
): Record<string, string>[] => {
    const ordered = flattenFlowGraph(graph);
    const seqById = new Map(ordered.map((feature, index) => [feature._id, index + 1]));
    const indexById = new Map(features.map((feature, index) => [feature._id, index]));
    const templates = features.map(() => ({} as Record<string, string>));
    for (const edge of graph.edges) {
        if (edge.from === FLOW_START_ID || edge.from === FLOW_MERGE_ID) continue;
        if (edge.to === FLOW_MERGE_ID || edge.to === FLOW_RESULT_ID) continue;
        if (edge.toPort === '*' || edge.fromPort === '*') continue;
        const fromSeq = seqById.get(edge.from);
        const toIndex = indexById.get(edge.to);
        if (!fromSeq || toIndex == null) continue;
        templates[toIndex][edge.toPort] = `{{results.${fromSeq}.${edge.fromPort}}}`;
    }
    return templates;
};

export const portCenter = (
    node: FlowGraphNode,
    side: 'in' | 'out',
    index: number,
    offsetRows = 0
): { x: number; y: number } => {
    const width = flowNodeWidth(node);
    const y = node.y + FLOW_HEADER_HEIGHT + (offsetRows + index) * FLOW_PORT_HEIGHT + FLOW_PORT_HEIGHT / 2;
    const x = side === 'in' ? node.x : node.x + width;
    return { x, y };
};

export const cubicWire = (from: { x: number; y: number }, to: { x: number; y: number }): string => {
    const dx = Math.max(48, Math.abs(to.x - from.x) / 2);
    return `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
};

/** Distinct strokes for each connection; wraps only after the palette is exhausted. */
export const FLOW_WIRE_COLORS = [
    '#0284c7',
    '#7c3aed',
    '#e11d48',
    '#d97706',
    '#059669',
    '#c026d3',
    '#0d9488',
    '#ea580c',
    '#4f46e5',
    '#65a30d',
    '#db2777',
    '#0891b2',
] as const;

export const wireColorForIndex = (index: number): string =>
    FLOW_WIRE_COLORS[((index % FLOW_WIRE_COLORS.length) + FLOW_WIRE_COLORS.length) % FLOW_WIRE_COLORS.length];
