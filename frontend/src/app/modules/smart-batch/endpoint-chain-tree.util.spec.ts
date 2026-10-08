import { describe, expect, it } from 'vitest';
import {
    addEndpointChild,
    flattenEndpointTree,
    linearEndpointTree,
    moveEndpointNode,
    parentOfEndpointNode,
    pathToEndpointNode,
    removeEndpointNode,
} from './endpoint-chain-tree.util';
import { AppFeature } from './smart-batch.service';

const feature = (id: string, name = id): AppFeature =>
    ({ _id: id, code: id, name, url: '', dependencies: [] }) as AppFeature;

describe('endpoint tree', () => {
    it('fans several children off the same parent (parallel branches)', () => {
        let tree = addEndpointChild([], null, feature('plate', 'Placa'));
        tree = addEndpointChild(tree, 'plate', feature('vin', 'VIN'));
        tree = addEndpointChild(tree, 'plate', feature('soat', 'SOAT'));
        expect(tree[0].children.map((node) => node.id)).toEqual(['vin', 'soat']);
        expect(flattenEndpointTree(tree).map((item) => item._id)).toEqual(['plate', 'vin', 'soat']);
        expect(parentOfEndpointNode(tree, 'soat')?.id).toBe('plate');
    });

    it('starts a second independent root below the first', () => {
        let tree = addEndpointChild([], null, feature('plate', 'Placa'));
        tree = addEndpointChild(tree, 'plate', feature('vin', 'VIN'));
        tree = addEndpointChild(tree, null, feature('cedula', 'Cédula'));
        expect(tree.map((node) => node.id)).toEqual(['plate', 'cedula']);
        expect(flattenEndpointTree(tree).map((item) => item._id)).toEqual(['plate', 'vin', 'cedula']);
    });

    it('continues a cascade under one branch', () => {
        let tree = linearEndpointTree([feature('a'), feature('b')]);
        tree = addEndpointChild(tree, 'b', feature('c'));
        expect(pathToEndpointNode(tree, 'c').map((node) => node.id)).toEqual(['a', 'b', 'c']);
    });

    it('removes a node and its descendants', () => {
        let tree = addEndpointChild([], null, feature('a'));
        tree = addEndpointChild(tree, 'a', feature('b'));
        tree = addEndpointChild(tree, 'b', feature('c'));
        tree = removeEndpointNode(tree, 'b');
        expect(flattenEndpointTree(tree).map((item) => item._id)).toEqual(['a']);
    });

    it('moves a sequence to sit in parallel under another parent', () => {
        let tree = addEndpointChild([], null, feature('plate'));
        tree = addEndpointChild(tree, 'plate', feature('owner'));
        tree = addEndpointChild(tree, 'owner', feature('records'));
        tree = addEndpointChild(tree, 'plate', feature('tech'));
        const moved = moveEndpointNode(tree, 'owner', 'tech');
        expect(moved).toBeTruthy();
        expect(moved![0].children.map((node) => node.id)).toEqual(['tech']);
        expect(moved![0].children[0].children.map((node) => node.id)).toEqual(['owner']);
        expect(pathToEndpointNode(moved!, 'records').map((node) => node.id)).toEqual([
            'plate',
            'tech',
            'owner',
            'records',
        ]);
    });

    it('rejects dropping a node onto its own descendant', () => {
        let tree = addEndpointChild([], null, feature('a'));
        tree = addEndpointChild(tree, 'a', feature('b'));
        tree = addEndpointChild(tree, 'b', feature('c'));
        expect(moveEndpointNode(tree, 'a', 'c')).toBeNull();
    });
});
