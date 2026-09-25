import { describe, expect, it } from 'vitest';
import { buildVisitaEndpointTooltip, visitaEndpointTooltipDetails } from './visita-guide-endpoint-tooltip.util';

const t = (key: string): string => key.replace('visitaGuide.', '');

describe('buildVisitaEndpointTooltip', () => {
    it('includes catalog copy, method, path, and typed params', () => {
        const text = buildVisitaEndpointTooltip(
            {
                _id: '1',
                code: 'colombia_api_cedula',
                name: 'Cédula',
                description: 'Provides reliable verification and validation services.',
                method: 'GET',
                url: '/v2/co/cedula',
                dependencies: [
                    { field: 'documentType', required: true, enum: ['CC', 'CE', 'PPT'] },
                    { field: 'documentNumber', required: true },
                ],
            },
            t,
            {
                title: 'Ciudadano Colombiano',
                description: 'Valida identidad colombiana por número de documento mediante GET /v2/co/cedula.',
            }
        );

        expect(text).toContain('Ciudadano Colombiano');
        expect(text).toContain('Valida identidad colombiana');
        expect(text).not.toContain('Provides reliable verification');
        expect(text).toContain('GET /v2/co/cedula');
        expect(text).toContain('colombia_api_cedula');
        expect(text).toContain('CC, CE, PPT');
    });

    it('picks an icon from the endpoint category', () => {
        const t = (key: string): string => key;
        expect(
            visitaEndpointTooltipDetails({ _id: '1', code: 'co_cedula', name: 'Cédula' }, t).icon
        ).toBe('person_search');
        expect(
            visitaEndpointTooltipDetails({ _id: '2', code: 'co_runt', name: 'RUNT vehículo' }, t).icon
        ).toBe('directions_car');
        expect(
            visitaEndpointTooltipDetails({ _id: '3', code: 'co_rues', name: 'RUES empresa' }, t).icon
        ).toBe('business');
    });
});
