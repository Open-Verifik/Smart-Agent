import { describe, expect, it } from 'vitest';
import { buildInputRow, inputFieldsFor } from './visita-guide.catalog';

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
});
