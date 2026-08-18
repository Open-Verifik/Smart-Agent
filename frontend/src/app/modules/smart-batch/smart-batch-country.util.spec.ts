import { describe, expect, it } from 'vitest';
import {
	countriesMatch,
	filterFeaturesForCountry,
	getCountryFlag,
	isFeatureForCountry,
	normalizeCountryName,
	resolveDropdownCountry,
} from './smart-batch-country.util';

const DROPDOWN_CODES = [
	'Colombia',
	'Peru',
	'Mexico',
	'Brazil',
	'Chile',
	'Argentina',
	'Ecuador',
	'Venezuela',
	'United States',
	'Spain',
];

describe('normalizeCountryName', () => {
	it('maps ISO and aliases onto the AppFeature display name', () => {
		expect(normalizeCountryName('CO')).toBe('Colombia');
		expect(normalizeCountryName('col')).toBe('Colombia');
		expect(normalizeCountryName('COLOMBIA')).toBe('Colombia');
		expect(normalizeCountryName('Colombia')).toBe('Colombia');
		expect(normalizeCountryName('MX')).toBe('Mexico');
	});
});

describe('filterFeaturesForCountry', () => {
	const features = [
		{ code: 'colombia_api_cedula', country: 'Colombia' },
		{ code: 'peru_api_dni', country: 'Peru' },
		{ code: 'email_validation', country: 'world' },
	];

	it('returns Colombia features plus world when the selected country is CO', () => {
		const filtered = filterFeaturesForCountry(features, 'CO');

		expect(filtered.map((feature) => feature.code)).toEqual(['colombia_api_cedula', 'email_validation']);
	});

	it('returns Colombia features plus world when the selected country is Colombia', () => {
		const filtered = filterFeaturesForCountry(features, 'Colombia');

		expect(filtered.map((feature) => feature.code)).toEqual(['colombia_api_cedula', 'email_validation']);
	});

	it('does not include other-country endpoints', () => {
		expect(isFeatureForCountry('Peru', 'CO')).toBe(false);
		expect(countriesMatch('CO', 'Colombia')).toBe(true);
	});
});

describe('resolveDropdownCountry', () => {
	it('maps preset/clone CO onto the Colombia dropdown code', () => {
		expect(resolveDropdownCountry('CO', DROPDOWN_CODES)).toBe('Colombia');
		expect(resolveDropdownCountry('COLOMBIA', DROPDOWN_CODES)).toBe('Colombia');
		expect(resolveDropdownCountry('Colombia', DROPDOWN_CODES)).toBe('Colombia');
	});
});

describe('getCountryFlag', () => {
	it('uses the same flag for CO and Colombia', () => {
		expect(getCountryFlag('CO')).toBe('🇨🇴');
		expect(getCountryFlag('Colombia')).toBe('🇨🇴');
		expect(getCountryFlag('MX')).toBe('🇲🇽');
	});
});
