import { describe, expect, it } from 'vitest';
import {
    availableCountries,
    buildInputRow,
    countryNameForIso,
    countriesFromEndpointFeatures,
    guideCountriesFromFeatures,
    inputFieldsFor,
} from './visita-guide.catalog';

describe('inputFieldsFor', () => {
    it('asks for document type and number from selected endpoints', () => {
        const features = [
            {
                code: 'colombia_api_cedula',
                name: 'Cédula',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE'] },
                    { field: 'documentNumber', required: true },
                ],
            },
            {
                code: 'colombia_api_procuraduria',
                name: 'Procuraduría',
                requiredParams: ['documentType', 'documentNumber'],
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE', 'PPT'] },
                    { field: 'documentNumber', required: true },
                ],
            },
        ];

        const fields = inputFieldsFor(['citizen'], 'co', features);
        expect(fields.map((field) => field.key)).toEqual(['documentType', 'documentNumber']);
        expect(fields[0].options).toEqual(['CC', 'CE', 'PPT']);
        expect(fields[0].required).toBe(true);
        expect(fields[1].required).toBe(true);
    });

    it('does not inject a hidden document type into the consult row', () => {
        const features = [
            {
                name: 'Cédula',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC'] },
                    { field: 'documentNumber', required: true },
                ],
            },
        ];
        expect(
            buildInputRow(['citizen'], 'co', { documentNumber: '123' }, features)
        ).toEqual({ documentNumber: '123' });
        expect(
            buildInputRow(
                ['citizen'],
                'co',
                { documentType: 'CE', documentNumber: '123' },
                features
            )
        ).toEqual({ documentType: 'CE', documentNumber: '123' });
    });

    it('asks only for plate when later lookups are filled from that response', () => {
        const features = [
            {
                code: 'colombia_api_runt_vehicle_by_plate_only',
                name: 'RUNT vehicle by plate',
                dependencies: [{ field: 'plate', required: true }],
            },
            {
                code: 'colombia_api_vehicle_complete_by_vin',
                name: 'Vehicle by VIN',
                dependencies: [{ field: 'vin', required: true }],
            },
            {
                code: 'colombia_api_identity_lookup',
                name: 'Consultar cédula',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE'] },
                    { field: 'documentNumber', required: true },
                ],
            },
        ];
        expect(inputFieldsFor(['vehicle', 'citizen'], 'co', features).map((field) => field.key)).toEqual([
            'plate',
        ]);
        expect(buildInputRow(['vehicle', 'citizen'], 'co', { plate: 'ABC123', vin: 'WVW' }, features)).toEqual({
            plate: 'ABC123',
        });
    });
});

describe('countryNameForIso', () => {
    it('maps an iso code to the catalog display name', () => {
        expect(countryNameForIso('pe')).toBe('Peru');
        expect(countryNameForIso('pa')).toBe('Panama');
        expect(countryNameForIso('US')).toBe('United States');
        expect(countryNameForIso('')).toBe('');
    });
});

describe('guideCountriesFromFeatures', () => {
    it('includes every catalog country, including Panama', () => {
        const names = availableCountries().map((country) => country.name);
        expect(names).toContain('Panama');
        expect(names).toContain('Costa Rica');
        expect(names).toContain('Bolivia');
        expect(names).not.toContain('world');
    });

    it('adds a country that is on a feature but missing from the static list', () => {
        const names = guideCountriesFromFeatures([{ country: 'Nicaragua' }]).map((country) => country.name);
        expect(names).toContain('Nicaragua');
        expect(names).toContain('Panama');
    });
});

describe('countriesFromEndpointFeatures', () => {
    it('lists only countries that appear on endpoints and skips world', () => {
        const names = countriesFromEndpointFeatures([
            { country: 'Panama' },
            { country: 'world' },
            { country: 'PE' },
            { country: 'Panama' },
        ]).map((country) => country.name);
        expect(names).toEqual(['Panama', 'Peru']);
    });
});
