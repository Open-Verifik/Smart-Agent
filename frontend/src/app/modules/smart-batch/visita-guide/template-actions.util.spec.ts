import { describe, expect, it } from 'vitest';
import {
    buildDuplicateTemplateName,
    canDeleteReportTemplate,
    computeFallbackMenuPosition,
} from './template-actions.util';

describe('template-actions.util', () => {
    it('allows deleting only persisted non-System templates', () => {
        expect(canDeleteReportTemplate(null)).toBe(false);
        expect(canDeleteReportTemplate(undefined)).toBe(false);
        expect(canDeleteReportTemplate({ _id: '', type: 'client' })).toBe(false);
        expect(canDeleteReportTemplate({ _id: '6b00eeadd3cac67e1ed9cfa5', type: 'System' })).toBe(false);
        expect(canDeleteReportTemplate({ _id: '6b00eeadd3cac67e1ed9cfa5', type: 'client' })).toBe(true);
        expect(canDeleteReportTemplate({ _id: '6b00eeadd3cac67e1ed9cfa5' })).toBe(true);
    });

    it('generates clean duplicate names and increments existing copy numbers', () => {
        expect(buildDuplicateTemplateName('Validación de conductor', 'Copy', 'Untitled')).toBe(
            'Validación de conductor (Copy)'
        );
        expect(buildDuplicateTemplateName('Validación de conductor (Copy)', 'Copy', 'Untitled')).toBe(
            'Validación de conductor (Copy 2)'
        );
        expect(buildDuplicateTemplateName('Validación de conductor (Copy 2)', 'Copy', 'Untitled')).toBe(
            'Validación de conductor (Copy 3)'
        );
        expect(buildDuplicateTemplateName('   ', 'Copia', 'Plantilla')).toBe('Plantilla (Copia)');
    });

    it('aligns fallback menu right edge with trigger and flips above when near viewport bottom', () => {
        const below = computeFallbackMenuPosition(
            { top: 60, bottom: 96, left: 1100, right: 1136 },
            { width: 200, height: 110 },
            { width: 1280, height: 800 }
        );
        expect(below).toEqual({ left: 936, top: 102 });

        const flipped = computeFallbackMenuPosition(
            { top: 720, bottom: 756, left: 1100, right: 1136 },
            { width: 200, height: 120 },
            { width: 1280, height: 800 }
        );
        expect(flipped).toEqual({ left: 936, top: 594 });

        const clampedLeft = computeFallbackMenuPosition(
            { top: 60, bottom: 96, left: 10, right: 46 },
            { width: 200, height: 110 },
            { width: 375, height: 800 }
        );
        expect(clampedLeft).toEqual({ left: 8, top: 102 });
    });
});
