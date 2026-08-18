/**
 * AppFeature.country is a display name ("Colombia").
 * BatchConfiguration / system presets may store ISO ("CO") or an uppercased name.
 * The create-config dropdown uses title-case names. Treat all three as the same country.
 */

const ISO_TO_NAME: Record<string, string> = {
	co: 'Colombia',
	col: 'Colombia',
	pe: 'Peru',
	mx: 'Mexico',
	br: 'Brazil',
	cl: 'Chile',
	ar: 'Argentina',
	ec: 'Ecuador',
	ve: 'Venezuela',
	us: 'United States',
	usa: 'United States',
	es: 'Spain',
	pa: 'Panama',
	cr: 'Costa Rica',
	gt: 'Guatemala',
	hn: 'Honduras',
	sv: 'El Salvador',
	do: 'Dominican Republic',
	bo: 'Bolivia',
	uy: 'Uruguay',
	py: 'Paraguay',
	ca: 'Canada',
};

const NAME_ALIASES: Record<string, string> = {
	colombia: 'Colombia',
	peru: 'Peru',
	mexico: 'Mexico',
	brazil: 'Brazil',
	chile: 'Chile',
	argentina: 'Argentina',
	ecuador: 'Ecuador',
	venezuela: 'Venezuela',
	'united states': 'United States',
	spain: 'Spain',
	panama: 'Panama',
	'costa rica': 'Costa Rica',
	guatemala: 'Guatemala',
	honduras: 'Honduras',
	'el salvador': 'El Salvador',
	'dominican republic': 'Dominican Republic',
	'república dominicana': 'Dominican Republic',
	'republica dominicana': 'Dominican Republic',
	bolivia: 'Bolivia',
	uruguay: 'Uruguay',
	paraguay: 'Paraguay',
	canada: 'Canada',
};

const COUNTRY_FLAGS: Record<string, string> = {
	colombia: '🇨🇴',
	peru: '🇵🇪',
	mexico: '🇲🇽',
	brazil: '🇧🇷',
	chile: '🇨🇱',
	argentina: '🇦🇷',
	ecuador: '🇪🇨',
	venezuela: '🇻🇪',
	'united states': '🇺🇸',
	spain: '🇪🇸',
	panama: '🇵🇦',
	'costa rica': '🇨🇷',
	guatemala: '🇬🇹',
	honduras: '🇭🇳',
	'el salvador': '🇸🇻',
	'dominican republic': '🇩🇴',
	bolivia: '🇧🇴',
	uruguay: '🇺🇾',
	paraguay: '🇵🇾',
	canada: '🇨🇦',
	world: '🌐',
};

const tokenize = (country?: string): string => (country || '').trim().toLowerCase();

/**
 * Canonical display name used by the create-config dropdown and AppFeature.country.
 */
export const normalizeCountryName = (country?: string): string => {
	const key = tokenize(country);

	if (!key || key === 'world') return key;

	return ISO_TO_NAME[key] || NAME_ALIASES[key] || country!.trim();
};

export const isWorldCountry = (country?: string): boolean => tokenize(country) === 'world';

export const countriesMatch = (left?: string, right?: string): boolean => {
	if (isWorldCountry(left) || isWorldCountry(right)) return tokenize(left) === tokenize(right);

	const normalizedLeft = tokenize(normalizeCountryName(left));
	const normalizedRight = tokenize(normalizeCountryName(right));

	return Boolean(normalizedLeft) && normalizedLeft === normalizedRight;
};

export const isFeatureForCountry = (featureCountry?: string, selectedCountry?: string): boolean => {
	if (!selectedCountry) return false;
	if (isWorldCountry(featureCountry)) return true;

	return countriesMatch(featureCountry, selectedCountry);
};

export const filterFeaturesForCountry = <T extends { country?: string }>(
	features: T[],
	selectedCountry?: string
): T[] => {
	if (!selectedCountry) return [];

	return features.filter((feature) => isFeatureForCountry(feature.country, selectedCountry));
};

/**
 * Map API / preset values (`CO`, `COLOMBIA`) onto a dropdown `{ code: 'Colombia' }` entry.
 */
export const resolveDropdownCountry = (
	apiCountry: string | undefined,
	dropdownCodes: string[]
): string => {
	const raw = (apiCountry || '').trim();
	const canonical = normalizeCountryName(raw);

	const match = dropdownCodes.find(
		(code) => tokenize(code) === tokenize(canonical) || tokenize(code) === tokenize(raw)
	);

	return match || canonical || raw;
};

export const getCountryFlag = (country?: string): string => {
	const canonical = normalizeCountryName(country);
	const key = tokenize(canonical);

	return COUNTRY_FLAGS[key] ?? '🏳️';
};
