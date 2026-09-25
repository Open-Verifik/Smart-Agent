import { describe, expect, it } from 'vitest';
import { availableCountries, buildInputRow, countryNameForIso, guideCountriesFromFeatures, inputFieldsFor } from './visita-guide.catalog';

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

    it('builds input fields for countries other than Colombia', () => {
        const features = [
            {
                name: 'DNI',
                dependencies: [{ field: 'documentNumber', required: true }],
            },
        ];
        const fields = inputFieldsFor(['citizen'], 'pe', features);
        expect(fields.map((field) => field.key)).toEqual(['documentNumber']);
    });

    it('does not fall back to Colombian document types when the endpoint has no enum', () => {
        const fields = inputFieldsFor(
            ['citizen'],
            'pa',
            [{ name: 'Identity', dependencies: [{ field: 'documentType', required: true }, { field: 'documentNumber', required: true }] }]
        );
        const documentType = fields.find((field) => field.key === 'documentType');
        expect(documentType?.options).toBeUndefined();
        expect(fields.find((field) => field.key === 'documentNumber')?.labelKey).toBe(
            'visitaGuide.paramFieldDocumentNumber'
        );
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
