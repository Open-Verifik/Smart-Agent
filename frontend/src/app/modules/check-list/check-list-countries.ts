import { POSTMAN_COUNTRY_ISO } from '../postman/postman-country.util';

const isNamedCountry = (value: string | undefined): value is string => {
    const country = value?.trim();
    if (!country) return false;
    const normalized = country.toLowerCase();
    return normalized !== 'world' && normalized !== 'global';
};

export const listCheckListCountries = (rows: Array<{ country?: string }>): string[] => {
    const names = new Set<string>();
    for (const row of rows) {
        if (isNamedCountry(row.country)) names.add(row.country.trim());
    }
    for (const name of Object.keys(POSTMAN_COUNTRY_ISO)) {
        if (isNamedCountry(name)) names.add(name);
    }
    return [...names].sort((a, b) => a.localeCompare(b));
};
