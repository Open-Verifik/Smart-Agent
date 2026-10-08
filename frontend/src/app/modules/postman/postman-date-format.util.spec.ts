import { describe, expect, it } from 'vitest';
import {
    isPostmanDateParam,
    pickerValueToWireDate,
    wireDateToPickerValue,
} from './postman-date-format.util';

describe('postman-date-format.util', () => {
    it('detects date params from dateFormat metadata', () => {
        expect(isPostmanDateParam({ dateFormat: 'dd/MM/yyyy' })).toBe(true);
        expect(isPostmanDateParam({ dateFormat: '' })).toBe(false);
        expect(isPostmanDateParam({})).toBe(false);
    });

    it('round-trips dd/MM/yyyy wire format through the picker', () => {
        expect(wireDateToPickerValue('15/03/1990', 'dd/MM/yyyy')).toBe('1990-03-15');
        expect(pickerValueToWireDate('1990-03-15', 'dd/MM/yyyy')).toBe('15/03/1990');
    });

    it('round-trips yyyy-MM-dd wire format through the picker', () => {
        expect(wireDateToPickerValue('1990-03-15', 'yyyy-MM-dd')).toBe('1990-03-15');
        expect(pickerValueToWireDate('1990-03-15', 'yyyy-MM-dd')).toBe('1990-03-15');
    });

    it('returns empty picker value for invalid wire dates', () => {
        expect(wireDateToPickerValue('not-a-date', 'dd/MM/yyyy')).toBe('');
    });
});
