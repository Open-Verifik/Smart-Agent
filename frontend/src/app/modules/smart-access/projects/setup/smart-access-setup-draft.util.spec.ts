import { describe, expect, it } from 'vitest';
import { flowStatusTranslationKey, isNumericStepValue } from './smart-access-setup-draft.util';

describe('smart-access-setup-draft.util display helpers', () => {
    it('maps known flow statuses to localized keys and leaves custom ones empty', () => {
        expect(flowStatusTranslationKey('active', 'smartEnrollProjects.list')).toBe('smartEnrollProjects.list.active');
        expect(flowStatusTranslationKey('ACTIVE', 'smartAccessProjects.list')).toBe('smartAccessProjects.list.active');
        expect(flowStatusTranslationKey('paused', 'smartEnrollProjects.list')).toBe('smartEnrollProjects.list.paused');
        expect(flowStatusTranslationKey(undefined, 'smartEnrollProjects.list')).toBe('smartEnrollProjects.list.draft');
        expect(flowStatusTranslationKey('archived', 'smartEnrollProjects.list')).toBe('');
    });

    it('detects legacy numeric funnel step values safely', () => {
        expect(isNumericStepValue('2')).toBe(true);
        expect(isNumericStepValue(' 4 ')).toBe(true);
        expect(isNumericStepValue('5')).toBe(true);
        expect(isNumericStepValue('document')).toBe(false);
        expect(isNumericStepValue('')).toBe(false);
        expect(isNumericStepValue(undefined)).toBe(false);
    });
});
