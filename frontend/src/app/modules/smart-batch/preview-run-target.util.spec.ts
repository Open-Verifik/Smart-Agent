import { describe, expect, it } from 'vitest';
import {
    getSmartBatchRoutePrefix,
    resolvePreviewRunTarget,
    toEntityIdString,
} from './preview-run-target.util';
import type { BatchConfiguration } from './smart-batch.service';
import type { SmartReportTemplate } from './smart-report.service';

const makeConfig = (overrides: Partial<BatchConfiguration> = {}): BatchConfiguration => ({
    _id: 'cfg-1',
    name: 'Colombia Vehicle Flow',
    country: 'CO',
    steps: [
        { appFeature: 'feat-1', sequence: 1, enabled: true },
        { appFeature: 'feat-2', sequence: 2, enabled: true },
    ],
    inputFormat: 'csv',
    outputFormat: 'xlsx',
    mergeStrategy: 'sequential',
    ...overrides,
});

const makeTemplate = (overrides: Partial<SmartReportTemplate> = {}): SmartReportTemplate => ({
    _id: 'tpl-1',
    name: 'Vehicle Comprehensive',
    type: 'client',
    ...overrides,
});

describe('resolvePreviewRunTarget', () => {
    it('prefers sourceConfig when opened from an owned configuration card, even if template is System', () => {
        const ownedConfig = makeConfig({ _id: 'cfg-owned', name: 'My Fleet Check' });
        const systemTemplate = makeTemplate({
            _id: 'tpl-sys',
            type: 'System',
            systemKey: 'co.vehicle.comprehensive',
            presetSteps: [{ appFeatureCode: 'runt_plate', sequence: 1 }],
        });

        expect(
            resolvePreviewRunTarget({
                template: systemTemplate,
                sourceConfig: ownedConfig,
                configurations: [ownedConfig],
            })
        ).toEqual({
            kind: 'config',
            configId: 'cfg-owned',
            configName: 'My Fleet Check',
            stepCount: 2,
        });
    });

    it('returns systemPreset for an available system template', () => {
        const systemTemplate = makeTemplate({
            type: 'System',
            systemKey: 'co.vehicle.comprehensive',
            presetSteps: [
                { appFeatureCode: 'runt_plate', sequence: 1 },
                { appFeatureCode: 'simit_plate', sequence: 2 },
                { appFeatureCode: 'fasecolda_sinister', sequence: 3 },
            ],
        });

        expect(
            resolvePreviewRunTarget({
                template: systemTemplate,
                configurations: [],
            })
        ).toEqual({
            kind: 'systemPreset',
            systemKey: 'co.vehicle.comprehensive',
            stepCount: 3,
        });
    });

    it('returns comingSoon for a system template with no steps or no systemKey', () => {
        const unavailablePreset = makeTemplate({
            type: 'System',
            systemKey: 'mx.citizen.essential',
            presetSteps: [],
        });

        expect(
            resolvePreviewRunTarget({
                template: unavailablePreset,
                configurations: [],
            })
        ).toEqual({ kind: 'comingSoon' });
    });

    it('resolves a client template linked via string batchConfiguration id', () => {
        const config = makeConfig({ _id: 'cfg-linked', name: 'Driver Onboarding' });
        const clientTemplate = makeTemplate({
            _id: 'tpl-client',
            batchConfiguration: 'cfg-linked',
        });

        expect(
            resolvePreviewRunTarget({
                template: clientTemplate,
                configurations: [config],
            })
        ).toEqual({
            kind: 'config',
            configId: 'cfg-linked',
            configName: 'Driver Onboarding',
            stepCount: 2,
        });
    });

    it('resolves a client template linked via populated batchConfiguration object', () => {
        const clientTemplate = makeTemplate({
            _id: 'tpl-client-pop',
            batchConfiguration: { _id: 'cfg-pop', name: 'Populated Config' },
            presetSteps: [{ appFeatureCode: 'step_1', sequence: 1 }],
        });

        expect(
            resolvePreviewRunTarget({
                template: clientTemplate,
                configurations: [],
            })
        ).toEqual({
            kind: 'config',
            configId: 'cfg-pop',
            configName: 'Populated Config',
            stepCount: 1,
        });
    });

    it('falls back to a configuration whose preferredReportTemplate matches the client template', () => {
        const config = makeConfig({
            _id: 'cfg-pref',
            name: 'Preferred Link Config',
            preferredReportTemplate: { _id: 'tpl-pref' },
        });
        const clientTemplate = makeTemplate({
            _id: 'tpl-pref',
            batchConfiguration: undefined,
        });

        expect(
            resolvePreviewRunTarget({
                template: clientTemplate,
                configurations: [config],
            })
        ).toEqual({
            kind: 'config',
            configId: 'cfg-pref',
            configName: 'Preferred Link Config',
            stepCount: 2,
        });
    });

    it('returns unlinked for a standalone client template with no matching configuration', () => {
        const standalone = makeTemplate({
            _id: 'tpl-standalone',
            batchConfiguration: undefined,
        });

        expect(
            resolvePreviewRunTarget({
                template: standalone,
                configurations: [makeConfig()],
            })
        ).toEqual({ kind: 'unlinked' });
    });
});

describe('getSmartBatchRoutePrefix', () => {
    it('preserves /smart-reports when already under /smart-reports', () => {
        expect(getSmartBatchRoutePrefix('/smart-reports/batch')).toBe('/smart-reports');
        expect(getSmartBatchRoutePrefix('/smart-reports/templates?tab=templates')).toBe('/smart-reports');
    });

    it('defaults to /smart-batch otherwise', () => {
        expect(getSmartBatchRoutePrefix('/smart-batch/workspace')).toBe('/smart-batch');
    });
});

describe('toEntityIdString', () => {
    it('extracts ids from strings and nested objects safely', () => {
        expect(toEntityIdString(' abc ')).toBe('abc');
        expect(toEntityIdString({ _id: 'nested-1' })).toBe('nested-1');
        expect(toEntityIdString({ id: 'nested-2' })).toBe('nested-2');
        expect(toEntityIdString({})).toBeNull();
        expect(toEntityIdString(null)).toBeNull();
    });
});
