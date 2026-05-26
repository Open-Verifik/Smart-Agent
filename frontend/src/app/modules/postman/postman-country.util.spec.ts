import {
    normalizeCountryToken,
    stripCountryPrefixFromTitle,
} from './postman-country.util';

describe('postman-country.util', () => {
    describe('normalizeCountryToken', () => {
        it('strips accents and lowercases', () => {
            expect(normalizeCountryToken('Perú')).toBe('peru');
            expect(normalizeCountryToken('España')).toBe('espana');
        });
    });

    describe('stripCountryPrefixFromTitle', () => {
        it('strips hyphen prefix for Colombia', () => {
            expect(
                stripCountryPrefixFromTitle(
                    'Colombia - Certificado de Contraloría',
                    'Colombia'
                )
            ).toBe('Certificado de Contraloría');
        });

        it('strips em dash prefix for Venezuela', () => {
            expect(
                stripCountryPrefixFromTitle(
                    'Venezuela — Identidad nacional (CCVE)',
                    'Venezuela'
                )
            ).toBe('Identidad nacional (CCVE)');
        });

        it('strips Global prefix for world country', () => {
            expect(
                stripCountryPrefixFromTitle('Global - Verificación Sanciones OFAC', 'world')
            ).toBe('Verificación Sanciones OFAC');
        });

        it('strips USA prefix for United States', () => {
            expect(
                stripCountryPrefixFromTitle('USA - Vehicle Verification', 'United States')
            ).toBe('Vehicle Verification');
        });

        it('strips España prefix for Spain', () => {
            expect(
                stripCountryPrefixFromTitle('España - Verificación de Identidad', 'Spain')
            ).toBe('Verificación de Identidad');
        });

        it('returns title unchanged when prefix does not match country', () => {
            expect(
                stripCountryPrefixFromTitle('Perú - Verificación de Identidad', 'Colombia')
            ).toBe('Perú - Verificación de Identidad');
        });

        it('returns title unchanged when no separator present', () => {
            expect(stripCountryPrefixFromTitle('Custom Endpoint Name', 'Colombia')).toBe(
                'Custom Endpoint Name'
            );
        });
    });
});
