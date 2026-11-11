import { describe, expect, it } from 'vitest';
import {
    areSamePostmanCountry,
    canonicalPostmanCountryName,
    countryNameToIso,
    expandPostmanCountryQueryVariants,
    formatPostmanCountryDisplayName,
    normalizeCountryToken,
    postmanCountryFlagUi,
    resolveCountryNameFromIso,
    stripCountryPrefixFromTitle,
} from './postman-country.util';

describe('postman-country.util', () => {
    describe('normalizeCountryToken', () => {
        it('strips accents and lowercases', () => {
            expect(normalizeCountryToken('Perú')).toBe('peru');
            expect(normalizeCountryToken('España')).toBe('espana');
        });
    });

    describe('postmanCountryFlagUi & ISO resolution', () => {
        it('resolves flags for new European, APAC, and Caribbean countries', () => {
            const newCountries: Array<[string, string]> = [
                ['Australia', 'au'],
                ['Belarus', 'by'],
                ['Belgium', 'be'],
                ['Cuba', 'cu'],
                ['Czech Republic', 'cz'],
                ['Czechia', 'cz'],
                ['Denmark', 'dk'],
                ['Dominican Republic', 'do'],
                ['República Dominicana', 'do'],
                ['Estonia', 'ee'],
                ['Finland', 'fi'],
                ['Germany', 'de'],
                ['Iceland', 'is'],
                ['Japan', 'jp'],
                ['Latvia', 'lv'],
                ['Lithuania', 'lt'],
                ['Netherlands', 'nl'],
                ['New Zealand', 'nz'],
                ['Norway', 'no'],
                ['Poland', 'pl'],
                ['Portugal', 'pt'],
                ['Puerto Rico', 'pr'],
                ['Romania', 'ro'],
                ['Singapore', 'sg'],
                ['Slovakia', 'sk'],
                ['South Africa', 'za'],
                ['Sweden', 'se'],
                ['Switzerland', 'ch'],
                ['Taiwan', 'tw'],
                ['Trinidad and Tobago', 'tt'],
            ];

            for (const [country, expectedIso] of newCountries) {
                const ui = postmanCountryFlagUi(country);
                expect(ui).toEqual({
                    k: 'img',
                    src: `https://flagcdn.com/w40/${expectedIso}.png`,
                });
                expect(countryNameToIso(country)).toBe(expectedIso);
            }
        });

        it('resolves flags when country is passed as a 2-letter ISO code', () => {
            expect(postmanCountryFlagUi('DE')).toEqual({
                k: 'img',
                src: 'https://flagcdn.com/w40/de.png',
            });
            expect(postmanCountryFlagUi('NO')).toEqual({
                k: 'img',
                src: 'https://flagcdn.com/w40/no.png',
            });
            expect(postmanCountryFlagUi('CO')).toEqual({
                k: 'img',
                src: 'https://flagcdn.com/w40/co.png',
            });
            expect(countryNameToIso('DE')).toBe('de');
            expect(resolveCountryNameFromIso('de', [])).toBe('Germany');
        });

        it('resolves globe icon for world and Global variants', () => {
            expect(postmanCountryFlagUi('world')).toEqual({ k: 'globe' });
            expect(postmanCountryFlagUi('World')).toEqual({ k: 'globe' });
            expect(countryNameToIso('World')).toBe('world');
            expect(resolveCountryNameFromIso('world', [])).toBe('world');
        });
    });

    describe('canonicalPostmanCountryName & areSamePostmanCountry', () => {
        it('canonicalizes ISO codes and localized variants to canonical English country names', () => {
            expect(canonicalPostmanCountryName('CO')).toBe('Colombia');
            expect(canonicalPostmanCountryName('DE')).toBe('Germany');
            expect(canonicalPostmanCountryName('República Dominicana')).toBe('Dominican Republic');
            expect(canonicalPostmanCountryName('Czechia')).toBe('Czech Republic');
            expect(canonicalPostmanCountryName('World')).toBe('world');
        });

        it('matches country aliases as the same country', () => {
            expect(areSamePostmanCountry('Dominican Republic', 'República Dominicana')).toBe(true);
            expect(areSamePostmanCountry('Colombia', 'CO')).toBe(true);
            expect(areSamePostmanCountry('world', 'World')).toBe(true);
            expect(areSamePostmanCountry('Germany', 'Poland')).toBe(false);
        });

        it('expands query variants to include canonical, ISO, and localized aliases', () => {
            const variants = expandPostmanCountryQueryVariants(['Dominican Republic']);
            expect(variants).toContain('Dominican Republic');
            expect(variants).toContain('República Dominicana');
            expect(variants).toContain('DO');
        });

        it('formats localized country display names', () => {
            expect(formatPostmanCountryDisplayName('world', 'en')).toBe('World');
            expect(formatPostmanCountryDisplayName('world', 'es', 'Global')).toBe('Global');
            expect(formatPostmanCountryDisplayName('Germany', 'en')).toBe('Germany');
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

        it('strips Belgium Asian and European locale prefixes', () => {
            expect(
                stripCountryPrefixFromTitle('ベルギー - Politically Exposed Persons (PEP)', 'Belgium')
            ).toBe('Politically Exposed Persons (PEP)');
            expect(
                stripCountryPrefixFromTitle('벨기에 - PEP 검사', 'Belgium')
            ).toBe('PEP 검사');
            expect(
                stripCountryPrefixFromTitle('比利时 - 政治公众人物', 'Belgium')
            ).toBe('政治公众人物');
            expect(
                stripCountryPrefixFromTitle('Bélgica - Personas Expuestas Políticamente', 'Belgium')
            ).toBe('Personas Expuestas Políticamente');
            expect(
                stripCountryPrefixFromTitle('Belgique - Personnes Politiquement Exposées', 'Belgium')
            ).toBe('Personnes Politiquement Exposées');
        });

        it('defensively strips undefined prefix even if country is missing or undefined', () => {
            expect(
                stripCountryPrefixFromTitle('undefined - Politically Exposed Persons (PEP)', undefined)
            ).toBe('Politically Exposed Persons (PEP)');
            expect(
                stripCountryPrefixFromTitle('undefined - Politically Exposed Persons (PEP)', 'Belgium')
            ).toBe('Politically Exposed Persons (PEP)');
        });

        it('resolves ISO and canonical name from Asian and European Belgium aliases', () => {
            expect(countryNameToIso('ベルギー')).toBe('be');
            expect(countryNameToIso('벨기에')).toBe('be');
            expect(countryNameToIso('比利时')).toBe('be');
            expect(countryNameToIso('Bélgica')).toBe('be');
            expect(canonicalPostmanCountryName('比利时')).toBe('Belgium');
            expect(canonicalPostmanCountryName('ベルギー')).toBe('Belgium');
            expect(canonicalPostmanCountryName('Bélgica')).toBe('Belgium');
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
