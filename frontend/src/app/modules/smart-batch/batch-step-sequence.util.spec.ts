import { describe, expect, it } from 'vitest';
import {
    buildStepSequenceMap,
    ensureResultSlots,
    mergeConsultResults,
    mergeConsultSample,
    remapReportSectionPaths,
    remapResultsPath,
    remapResultsRecord,
} from './batch-step-sequence.util';
import type { BatchStep } from './smart-batch.service';

const step = (sequence: number, id: string): BatchStep => ({
    sequence,
    appFeature: id,
    enabled: true,
    parameterDefaults: {},
    inputFieldMapping: {},
    outputFieldsToKeep: [],
    maxRetries: 3,
    retryDelayBaseSeconds: 4,
    timeoutSeconds: 30,
});

describe('buildStepSequenceMap', () => {
    it('maps sequences when the same features are reordered', () => {
        const prev = [step(1, 'a'), step(2, 'b')];
        const next = [step(1, 'b'), step(2, 'a')];
        const map = buildStepSequenceMap(prev, next);
        expect(map.get(1)).toBe(2);
        expect(map.get(2)).toBe(1);
    });

    it('is empty when order is unchanged', () => {
        const prev = [step(1, 'a'), step(2, 'b')];
        const next = [step(1, 'a'), step(2, 'b'), step(3, 'c')];
        expect(buildStepSequenceMap(prev, next).size).toBe(0);
    });
});

describe('remapResultsPath', () => {
    it('rewrites results paths using the sequence map', () => {
        const map = new Map([[2, 4]]);
        expect(remapResultsPath('results.2.plate', map)).toBe('results.4.plate');
    });
});

describe('remapResultsRecord', () => {
    it('moves payloads to new sequence keys', () => {
        const map = new Map([[1, 3]]);
        expect(remapResultsRecord({ 1: { plate: 'ABC' }, 2: {} }, map)).toEqual({
            2: {},
            3: { plate: 'ABC' },
        });
    });
});

describe('ensureResultSlots', () => {
    it('adds empty slots without removing data', () => {
        const results = ensureResultSlots({ 1: { ok: true } }, [step(1, 'a'), step(2, 'b')]);
        expect(results[1]).toEqual({ ok: true });
        expect(results[2]).toEqual({});
    });
});

describe('mergeConsultResults', () => {
    it('keeps a previous payload when the later consult is empty', () => {
        const merged = mergeConsultResults({ 1: { plate: 'ABC' }, 2: { ok: true } }, { 1: {}, 2: { ok: false } });
        expect(merged[1]).toEqual({ plate: 'ABC' });
        expect(merged[2]).toEqual({ ok: false });
    });

    it('stores a first consult that actually returned data', () => {
        const merged = mergeConsultResults({ 1: {} }, { 1: { name: 'Ana' } });
        expect(merged[1]).toEqual({ name: 'Ana' });
    });
});

describe('mergeConsultSample', () => {
    it('does not let empty live input wipe stored consult fields', () => {
        const merged = mergeConsultSample(
            { inputData: { documentNumber: '1' }, results: { 1: { name: 'Ana' } } },
            { inputData: {}, results: { 1: {} } }
        );
        expect(merged.inputData).toEqual({ documentNumber: '1' });
        expect(merged.results?.[1]).toEqual({ name: 'Ana' });
    });
});

describe('remapReportSectionPaths', () => {
    it('updates block data paths', () => {
        const map = new Map([[1, 2]]);
        const out = remapReportSectionPaths(
            [{ id: 's1', type: 'field', order: 0, dataPath: 'results.1' }],
            map
        );
        expect(out[0].dataPath).toBe('results.2');
    });
});
