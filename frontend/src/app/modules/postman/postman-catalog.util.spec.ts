import { describe, expect, it } from 'vitest';
import {
    DEFAULT_POSTMAN_COUNTRY,
    catalogCountryScope,
    catalogCountryScopeForCountries,
    catalogNeedsDetailHydration,
    countryCacheKey,
    endpointMatchesCountryFilter,
    extractCountryRows,
    extractFeatureRows,
    isCatalogTransportFailure,
} from './postman-catalog.util';

describe('postman-catalog.util', () => {
    it('defaults the named country to Colombia', () => {
        expect(DEFAULT_POSTMAN_COUNTRY).toBe('Colombia');
    });

    it('scopes a named country with world', () => {
        expect(catalogCountryScope('Chile')).toEqual(['Chile', 'world']);
    });

    it('scopes a missing selection to Colombia plus world', () => {
        expect(catalogCountryScope(null)).toEqual(['Colombia', 'world']);
    });

    it('scopes world alone when world is selected', () => {
        expect(catalogCountryScope('world')).toEqual(['world']);
    });

    it('builds a stable cache key', () => {
        expect(countryCacheKey(['world', 'Colombia'])).toBe('Colombia|world');
    });

    it('extracts feature rows from { data: [] }', () => {
        expect(extractFeatureRows({ data: [{ code: 'a' }] })).toEqual([{ code: 'a' }]);
        expect(extractFeatureRows([])).toEqual([]);
    });

    it('extracts country index rows', () => {
        expect(extractCountryRows({ data: [{ country: 'Colombia', count: 69 }] })).toEqual([
            { country: 'Colombia', count: 69 },
        ]);
    });

    it('maps slim catalog rows that omit docs', () => {
        const rows = extractFeatureRows({
            data: [{ code: 'co_cedula', name: 'Cedula', country: 'Colombia' }],
        });
        expect(rows[0].docs).toBeUndefined();
        expect(catalogNeedsDetailHydration(rows[0])).toBe(true);
        expect(catalogNeedsDetailHydration({ docs: { en: { overview: 'hi' } } })).toBe(false);
    });

    it('scopes a checklist country list with world', () => {
        expect(catalogCountryScopeForCountries(['Mexico', 'Chile'])).toEqual([
            'Mexico',
            'Chile',
            'world',
        ]);
        expect(catalogCountryScopeForCountries([])).toEqual(['Colombia', 'world']);
    });

    it('keeps world endpoints when a named country is selected', () => {
        expect(endpointMatchesCountryFilter('world', 'Colombia')).toBe(true);
        expect(endpointMatchesCountryFilter('Chile', 'Colombia')).toBe(false);
        expect(endpointMatchesCountryFilter('world', 'world')).toBe(true);
    });

    it('treats HTTP status 0 as a catalog transport failure', () => {
        expect(isCatalogTransportFailure({ status: 0 })).toBe(true);
        expect(isCatalogTransportFailure({ status: 200 })).toBe(false);
    });
});
