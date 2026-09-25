import { describe, expect, it } from 'vitest';
import {
    classifyParamField,
    matchesParamHighlight,
    featureParamChips,
    matchesRequiredParamFilters,
    requiredVisibleFields,
} from './endpoint-param-highlight.util';

describe('classifyParamField', () => {
    it('maps identity, plate, and date fields', () => {
        expect(classifyParamField('documentNumber')).toBe('document');
        expect(classifyParamField('documentType')).toBe('document');
        expect(classifyParamField('plate')).toBe('plate');
        expect(classifyParamField('fechaExpedicion')).toBe('date');
        expect(classifyParamField('dateOfBirth')).toBe('date');
        expect(classifyParamField('expirationDate')).toBe('date');
    });
});

describe('matchesParamHighlight', () => {
    it('highlights citizen endpoints that only need cédula', () => {
        const feature = {
            code: 'colombia_api_cedula',
            name: 'Cédula',
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
                { field: 'force', required: true },
            ],
        };
        expect(matchesParamHighlight(feature, 'document-only')).toBe(true);
        expect(matchesParamHighlight(feature, 'plate-only')).toBe(false);
        expect(matchesParamHighlight(feature, 'nit-only')).toBe(false);
    });

    it('does not highlight when a date is also required', () => {
        const feature = {
            code: 'colombia_api_cedula',
            name: 'Cédula con fecha',
            dependencies: [
                { field: 'documentNumber', required: true },
                { field: 'fechaExpedicion', required: true },
            ],
        };
        expect(matchesParamHighlight(feature, 'document-only')).toBe(false);
    });

    it('ignores conditional dates for the solo-cédula highlight', () => {
        const feature = {
            code: 'colombia_api_identity',
            name: 'Persona',
            dependencies: [
                { field: 'documentNumber', required: true },
                { field: 'dateOfBirth', required: true, requiredWhen: { field: 'documentType', in: ['CE'] } },
            ],
        };
        expect(matchesParamHighlight(feature, 'document-only')).toBe(true);
    });

    it('highlights vehicle endpoints that only need plate', () => {
        const feature = {
            code: 'colombia_api_vehicle_complete_by_plate',
            name: 'RUNT por placa',
            dependencies: [{ field: 'plate', required: true }],
        };
        expect(matchesParamHighlight(feature, 'plate-only')).toBe(true);
        expect(matchesParamHighlight(feature, 'document-only')).toBe(false);
    });

    it('does not highlight plate endpoints that also need owner document', () => {
        const feature = {
            code: 'colombia_api_simit_agreements',
            name: 'SIMIT acuerdos',
            dependencies: [
                { field: 'plate', required: true },
                { field: 'documentNumber', required: true },
            ],
        };
        expect(matchesParamHighlight(feature, 'plate-only')).toBe(false);
    });

    it('highlights company endpoints that only need NIT', () => {
        const feature = {
            code: 'colombia_api_rues',
            name: 'RUES empresa',
            baseCategory: 'business',
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
            ],
        };
        expect(matchesParamHighlight(feature, 'nit-only')).toBe(true);
        expect(matchesParamHighlight(feature, 'document-only')).toBe(false);
    });

    it('lists required visible fields without hidden internals', () => {
        expect(
            requiredVisibleFields({
                dependencies: [
                    { field: 'documentNumber', required: true },
                    { field: 'force', required: true },
                    { field: 'plate', required: false },
                ],
            })
        ).toEqual(['documentNumber']);
    });
});

describe('matchesRequiredParamFilters', () => {
    it('keeps endpoints whose required params are exactly the selected filters', () => {
        const feature = {
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
            ],
        };
        expect(matchesRequiredParamFilters(feature, ['documentNumber'])).toBe(false);
        expect(matchesRequiredParamFilters(feature, ['documentType', 'documentNumber'])).toBe(true);
        expect(matchesRequiredParamFilters(feature, ['plate'])).toBe(false);
    });

    it('hides endpoints that also require a date when date is not selected', () => {
        const feature = {
            dependencies: [
                { field: 'documentType', required: true },
                { field: 'documentNumber', required: true },
                { field: 'dateOfBirth', required: true },
            ],
        };
        expect(matchesRequiredParamFilters(feature, ['documentType', 'documentNumber'])).toBe(false);
    });

    it('does not treat documentType and documentNumber as the same filter', () => {
        const feature = {
            dependencies: [{ field: 'documentNumber', required: true }],
        };
        expect(matchesRequiredParamFilters(feature, ['documentType'])).toBe(false);
        expect(matchesRequiredParamFilters(feature, ['documentNumber'])).toBe(true);
    });

    it('matches aliases so documentId counts as document number', () => {
        const feature = {
            dependencies: [
                { field: 'citizenDocumentType', required: true },
                { field: 'documentId', required: true },
            ],
        };
        expect(matchesRequiredParamFilters(feature, ['documentType', 'documentNumber'])).toBe(true);
    });
});

describe('featureParamChips', () => {
    it('marks required params and lists document type options', () => {
        const chips = featureParamChips({
            dependencies: [
                { field: 'documentType', required: true, enum: ['CC', 'CE', 'PPT'] },
                { field: 'documentNumber', required: true },
                { field: 'dateOfBirth', required: true, requiredWhen: { field: 'documentType', in: ['CE'] } },
            ],
        });
        expect(chips).toEqual([
            { field: 'documentType', required: true, enums: ['CC', 'CE', 'PPT'] },
            { field: 'documentNumber', required: true, enums: [] },
            { field: 'dateOfBirth', required: false, enums: [] },
        ]);
    });
});
