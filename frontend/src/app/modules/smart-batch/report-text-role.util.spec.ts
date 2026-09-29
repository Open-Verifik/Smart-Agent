import { describe, expect, it } from 'vitest';
import { ReportSection } from './smart-report.service';
import { resolveTextRole } from './report-text-role.util';

describe('resolveTextRole', () => {
    const section: ReportSection = {
        id: 'grid',
        type: 'keyValueGrid',
        order: 0,
        style: {
            labelStyle: { fontSize: 10, color: '#6B7280' },
            valueStyle: { fontSize: 12, color: '#111827' },
        },
        keyOverrides: {
            firstName: {
                labelStyle: { fontSize: 16, color: '#be123c' },
                valueStyle: { fontSize: 20, color: '#1d4ed8' },
            },
        },
    };

    it('keeps shared label/value sizes when no key is selected', () => {
        expect(resolveTextRole(section, 'label', '#0f172a').fontSize).toBe(10);
        expect(resolveTextRole(section, 'value', '#0f172a').fontSize).toBe(12);
    });

    it('applies per-parameter typography for the selected key only', () => {
        expect(resolveTextRole(section, 'label', '#0f172a', 'firstName').fontSize).toBe(16);
        expect(resolveTextRole(section, 'label', '#0f172a', 'firstName').color).toBe('#be123c');
        expect(resolveTextRole(section, 'value', '#0f172a', 'firstName').fontSize).toBe(20);
        expect(resolveTextRole(section, 'label', '#0f172a', 'lastName').fontSize).toBe(10);
    });
});
