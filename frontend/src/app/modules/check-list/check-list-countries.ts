import { POSTMAN_COUNTRY_ISO } from '../postman/postman-country.util';
import { ApiEndpoint } from '../postman/postman.types';

const isNamedCountry = (value: string | undefined): value is string => {
    const country = value?.trim();
    if (!country) return false;
    const normalized = country.toLowerCase();
    return normalized !== 'world' && normalized !== 'global';
};

export const listCheckListCountries = (endpoints: ApiEndpoint[]): string[] => {
    const names = new Set<string>();
    for (const endpoint of endpoints) {
        if (isNamedCountry(endpoint.country)) names.add(endpoint.country.trim());
    }
    for (const name of Object.keys(POSTMAN_COUNTRY_ISO)) {
        if (isNamedCountry(name)) names.add(name);
    }
    return [...names].sort((a, b) => a.localeCompare(b));
};
