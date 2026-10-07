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
	in: 'India',
	ind: 'India',
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
	india: 'India',
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
	india: '🇮🇳',
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

export const filterFeaturesForCountries = <T extends { country?: string }>(
	features: T[],
	selectedCountries?: string[]
): T[] => {
	const selected = (selectedCountries ?? []).map((country) => country.trim()).filter(Boolean);
	if (!selected.length) return [];

	const seen = new Set<T>();
	for (const country of selected) {
		for (const feature of filterFeaturesForCountry(features, country)) {
			seen.add(feature);
		}
	}
	return [...seen];
};

/**
 * Selected-country sources before world sources, then by name.
 * World stays last so a national registry is the first card in its category.
 */
export const compareFeaturesForSelectedCountry = <T extends { country?: string; name?: string }>(
	left: T,
	right: T
): number => {
	const rank = (feature: T): number => (isWorldCountry(feature.country) ? 1 : 0);
	const byCountry = rank(left) - rank(right);
	if (byCountry !== 0) return byCountry;

	return (left.name ?? '').localeCompare(right.name ?? '', undefined, { sensitivity: 'base' });
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

/** ISO 3166-1 alpha-2 for flag images (emoji flags often render as letters on Windows). */
export const countryIso2 = (country?: string): string | null => {
	const key = tokenize(country);
	if (!key || key === 'world') return null;
	if (key.length === 2 && ISO_TO_NAME[key]) return key;

	const name = tokenize(normalizeCountryName(country));
	const match = Object.entries(ISO_TO_NAME).find(
		([iso, display]) => iso.length === 2 && tokenize(display) === name
	);
	if (match) return match[0];
	return /^[a-z]{2}$/.test(key) ? key : null;
};

export const countryFlagImageUrl = (country?: string): string | null => {
	const iso = countryIso2(country);
	return iso ? `https://flagcdn.com/w40/${iso}.png` : null;
};
