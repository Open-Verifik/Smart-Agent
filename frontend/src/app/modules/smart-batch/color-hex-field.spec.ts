import { describe, expect, it } from 'vitest';
import { normalizeHexColor } from './color-hex.util';

describe('normalizeHexColor', () => {
    it('accepts a six-digit hex with or without #', () => {
        expect(normalizeHexColor('#dc2626')).toBe('#dc2626');
        expect(normalizeHexColor('DC2626')).toBe('#dc2626');
    });

    it('does not expand a 3-digit prefix while typing a 6-digit color', () => {
        expect(normalizeHexColor('#ff0', { allowShort: false })).toBeNull();
        expect(normalizeHexColor('#ff00', { allowShort: false })).toBeNull();
        expect(normalizeHexColor('#ff000', { allowShort: false })).toBeNull();
        expect(normalizeHexColor('#ff0000', { allowShort: false })).toBe('#ff0000');
    });

    it('expands short hex only when allowed (blur)', () => {
        expect(normalizeHexColor('#f00')).toBe('#ff0000');
        expect(normalizeHexColor('#f00f')).toBe('#ff0000');
    });

    it('drops a fully opaque alpha suffix', () => {
        expect(normalizeHexColor('#dc2626ff')).toBe('#dc2626');
    });
});
