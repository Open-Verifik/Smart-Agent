import { describe, expect, it } from 'vitest';
import {
    isValidEmail,
    isValidPersonName,
    isValidPhoneDigits,
    isValidPlate,
    nationalPhone,
    normalizePersonName,
    normalizePlate,
} from './plate-report.validation';

describe('plate report input', () => {
    it('normalizes a plate and accepts common Colombian shapes', () => {
        expect(normalizePlate(' abc-123 ')).toBe('ABC123');
        expect(isValidPlate('ABC123')).toBe(true);
        expect(isValidPlate('ABC12D')).toBe(true);
        expect(isValidPlate('123456')).toBe(false);
        expect(isValidPlate('AB')).toBe(false);
    });

    it('accepts a person name and rejects a blank one', () => {
        expect(normalizePersonName('  Ana   Pérez  ')).toBe('Ana Pérez');
        expect(isValidPersonName('Ana Pérez')).toBe(true);
        expect(isValidPersonName('A')).toBe(false);
        expect(isValidPersonName('12')).toBe(false);
    });

    it('checks email and phone the same way the login form does', () => {
        expect(isValidEmail('ana@verifik.co')).toBe(true);
        expect(isValidEmail('ana')).toBe(false);
        expect(isValidPhoneDigits('300 123 4567')).toBe(true);
        expect(isValidPhoneDigits('123')).toBe(false);
        expect(nationalPhone('573001234567', '+57')).toBe('3001234567');
    });
});
