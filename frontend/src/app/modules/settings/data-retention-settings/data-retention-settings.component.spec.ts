import { describe, expect, it } from 'vitest';
import { DEFAULT_CONFIG, syncGlobalToGranular, computeIsCustomized, computeAllSameMode } from './data-retention-settings.utils';

describe('Data Retention Settings cascading logic', () => {
    it('should cascade global mode to all granular rules when set', () => {
        const config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
        const updated = syncGlobalToGranular(config, 'store');
        expect(updated.mode).toBe('store');
        expect(updated.types.documentImages.mode).toBe('store');
        expect(updated.types.faceImages.mode).toBe('store');
        expect(updated.types.ocrExtraction.mode).toBe('store');
        expect(updated.types.documentLiveness.mode).toBe('store');
    });

    it('should cascade ephemeral mode to all granular rules', () => {
        const config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
        const updated = syncGlobalToGranular(config, 'ephemeral');
        expect(updated.mode).toBe('ephemeral');
        expect(updated.types.documentImages.mode).toBe('ephemeral');
        expect(updated.types.faceImages.mode).toBe('ephemeral');
        expect(updated.types.ocrExtraction.mode).toBe('ephemeral');
        expect(updated.types.documentLiveness.mode).toBe('ephemeral');
    });

    it('should cascade none mode to all granular rules', () => {
        const config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
        const updated = syncGlobalToGranular(config, 'none');
        expect(updated.mode).toBe('none');
        expect(updated.types.documentImages.mode).toBe('none');
        expect(updated.types.faceImages.mode).toBe('none');
        expect(updated.types.ocrExtraction.mode).toBe('none');
        expect(updated.types.documentLiveness.mode).toBe('none');
    });

    it('should identify when granular rules are customized vs synced', () => {
        const config = syncGlobalToGranular(JSON.parse(JSON.stringify(DEFAULT_CONFIG)), 'store');
        expect(computeIsCustomized(config)).toBe(false);

        // Customize one rule
        config.types.faceImages.mode = 'none';
        expect(computeIsCustomized(config)).toBe(true);

        // When all match again
        config.types.documentImages.mode = 'none';
        config.types.ocrExtraction.mode = 'none';
        config.types.documentLiveness.mode = 'none';
        expect(computeAllSameMode(config)).toBe('none');
    });
});
