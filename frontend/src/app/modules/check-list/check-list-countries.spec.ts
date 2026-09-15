import { describe, expect, it } from 'vitest';
import { listCheckListCountries } from './check-list-countries';
import { ApiEndpoint } from '../postman/postman.types';

const endpoint = (country: string): ApiEndpoint =>
    ({
        id: country,
        label: country,
        method: 'GET',
        url: '/',
        country,
    }) as ApiEndpoint;

describe('listCheckListCountries', () => {
    it('keeps named countries and drops world/global', () => {
        const countries = listCheckListCountries([
            endpoint('Colombia'),
            endpoint('world'),
            endpoint('Global'),
        ]);
        expect(countries).toContain('Colombia');
        expect(countries).not.toContain('world');
        expect(countries).not.toContain('Global');
    });
});
