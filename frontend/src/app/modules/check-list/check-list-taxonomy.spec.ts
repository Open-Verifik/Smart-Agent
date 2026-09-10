import { describe, expect, it } from 'vitest';
import {
    featureMatchesCheckListCatalog,
    featureMatchesCountries,
    isWorldBackgroundCheck,
    normalizeCheckListDomains,
    resolveCheckListDomains,
} from './check-list-taxonomy';

describe('check-list-taxonomy', () => {
    it('prefers explicit domains and maps transit to vehicles', () => {
        expect(
            resolveCheckListDomains({
                checkListDomains: ['vehicles'],
                category: 'IDENTITY',
            })
        ).toEqual(['vehicles']);
        expect(resolveCheckListDomains({ category: 'TRANSIT' })).toEqual(['vehicles']);
        expect(resolveCheckListDomains({ baseCategory: 'business' })).toEqual(['businesses']);
    });

    it('normalizes mixed domain values', () => {
        expect(normalizeCheckListDomains(['People', 'vehicles', 'nope'])).toEqual([
            'people',
            'vehicles',
        ]);
    });

    it('keeps country endpoints and drops unrelated world services', () => {
        expect(featureMatchesCountries('Chile', ['Colombia'])).toBe(false);
        expect(featureMatchesCountries('Colombia', ['Colombia', 'Chile'])).toBe(true);
        expect(featureMatchesCountries('world', ['Argentina'])).toBe(false);
        expect(
            isWorldBackgroundCheck({ country: 'world', category: 'BACKGROUND_CHECK' })
        ).toBe(true);
        expect(
            featureMatchesCheckListCatalog(
                { country: 'world', category: 'email' },
                ['Argentina']
            )
        ).toBe(false);
        expect(
            featureMatchesCheckListCatalog(
                { country: 'world', baseCategory: 'background_check' },
                ['Argentina']
            )
        ).toBe(true);
        expect(
            featureMatchesCheckListCatalog(
                { country: 'Argentina', category: 'identity' },
                ['Argentina']
            )
        ).toBe(true);
    });
});
