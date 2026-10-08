import { AppFeature } from './smart-batch.service';

export interface EndpointTreeNode {
    id: string;
    feature: AppFeature;
    children: EndpointTreeNode[];
}

export const flattenEndpointTree = (nodes: EndpointTreeNode[]): AppFeature[] => {
    const out: AppFeature[] = [];
    const walk = (list: EndpointTreeNode[]) => {
        for (const node of list) {
            out.push(node.feature);
            walk(node.children);
        }
    };
    walk(nodes);
    return out;
};

export const endpointTreeIds = (nodes: EndpointTreeNode[]): string[] =>
    flattenEndpointTree(nodes)
        .map((feature) => feature._id)
        .filter(Boolean);

export const findEndpointNode = (nodes: EndpointTreeNode[], id: string): EndpointTreeNode | null => {
    for (const node of nodes) {
        if (node.id === id) return node;
        const nested = findEndpointNode(node.children, id);
        if (nested) return nested;
    }
    return null;
};

export const pathToEndpointNode = (nodes: EndpointTreeNode[], id: string): EndpointTreeNode[] => {
    for (const node of nodes) {
        if (node.id === id) return [node];
        const nested = pathToEndpointNode(node.children, id);
        if (nested.length) return [node, ...nested];
    }
    return [];
};

export const parentOfEndpointNode = (nodes: EndpointTreeNode[], id: string): EndpointTreeNode | null => {
    for (const node of nodes) {
        if (node.children.some((child) => child.id === id)) return node;
        const nested = parentOfEndpointNode(node.children, id);
        if (nested) return nested;
    }
    return null;
};

const withAddedChild = (
    node: EndpointTreeNode,
    parentId: string,
    child: EndpointTreeNode
): EndpointTreeNode => {
    if (node.id === parentId) {
        return { ...node, children: [...node.children, child] };
    }
    return {
        ...node,
        children: node.children.map((item) => withAddedChild(item, parentId, child)),
    };
};

export const addEndpointChild = (
    nodes: EndpointTreeNode[],
    parentId: string | null,
    feature: AppFeature
): EndpointTreeNode[] => {
    const next: EndpointTreeNode = { id: feature._id, feature, children: [] };
    return insertEndpointNode(nodes, parentId, next);
};

export const insertEndpointNode = (
    nodes: EndpointTreeNode[],
    parentId: string | null,
    child: EndpointTreeNode
): EndpointTreeNode[] => {
    if (!parentId) return [...nodes, child];
    return nodes.map((node) => withAddedChild(node, parentId, child));
};

/** True when `id` is `ancestorId` or sits under it. */
export const isInEndpointSubtree = (
    nodes: EndpointTreeNode[],
    ancestorId: string,
    id: string
): boolean => {
    if (ancestorId === id) return true;
    const ancestor = findEndpointNode(nodes, ancestorId);
    if (!ancestor) return false;
    return endpointTreeIds([ancestor]).includes(id);
};

export const extractEndpointNode = (
    nodes: EndpointTreeNode[],
    id: string
): { rest: EndpointTreeNode[]; node: EndpointTreeNode | null } => {
    const found = nodes.find((node) => node.id === id);
    if (found) return { rest: nodes.filter((node) => node.id !== id), node: found };
    let extracted: EndpointTreeNode | null = null;
    const rest = nodes.map((node) => {
        const child = extractEndpointNode(node.children, id);
        if (child.node) extracted = child.node;
        return { ...node, children: child.rest };
    });
    return { rest, node: extracted };
};

/** Moves a node and the sequence hanging off it. Rejects drops onto itself or its descendants. */
export const moveEndpointNode = (
    nodes: EndpointTreeNode[],
    id: string,
    parentId: string | null
): EndpointTreeNode[] | null => {
    if (!id || id === parentId) return null;
    if (parentId && isInEndpointSubtree(nodes, id, parentId)) return null;
    const currentParent = parentOfEndpointNode(nodes, id);
    if ((currentParent?.id ?? null) === parentId) return nodes;
    const { rest, node } = extractEndpointNode(nodes, id);
    if (!node) return null;
    return insertEndpointNode(rest, parentId, node);
};

export const removeEndpointNode = (nodes: EndpointTreeNode[], id: string): EndpointTreeNode[] =>
    nodes
        .filter((node) => node.id !== id)
        .map((node) => ({ ...node, children: removeEndpointNode(node.children, id) }));

/** One root, each next feature hanging off the previous (classic cascade). */
export const linearEndpointTree = (features: AppFeature[]): EndpointTreeNode[] => {
    const usable = features.filter((feature) => feature._id);
    if (!usable.length) return [];
    let child: EndpointTreeNode | null = null;
    for (let index = usable.length - 1; index >= 0; index--) {
        const feature = usable[index];
        child = { id: feature._id, feature, children: child ? [child] : [] };
    }
    return child ? [child] : [];
};

export const sameEndpointTreeFlat = (nodes: EndpointTreeNode[], features: AppFeature[]): boolean => {
    const left = endpointTreeIds(nodes);
    const right = features.map((feature) => feature._id).filter(Boolean);
    return left.length === right.length && left.every((id, index) => id === right[index]);
};

export interface EndpointTreeLayoutRow {
    node: EndpointTreeNode;
    depth: number;
    parentId: string | null;
    rootIndex: number;
}

export const layoutEndpointTree = (nodes: EndpointTreeNode[]): EndpointTreeLayoutRow[] => {
    const rows: EndpointTreeLayoutRow[] = [];
    const walk = (list: EndpointTreeNode[], depth: number, parentId: string | null, rootIndex: number) => {
        for (const node of list) {
            rows.push({ node, depth, parentId, rootIndex });
            walk(node.children, depth + 1, node.id, rootIndex);
        }
    };
    nodes.forEach((root, index) => walk([root], 0, null, index));
    return rows;
};
