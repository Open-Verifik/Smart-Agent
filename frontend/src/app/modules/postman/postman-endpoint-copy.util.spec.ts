import {
    resolvePostmanEndpointCopy,
    overviewLeadParagraph,
    sanitizePostmanCopyText,
} from './postman-endpoint-copy.util';

describe('postman-endpoint-copy.util', () => {
    describe('overviewLeadParagraph', () => {
        it('returns first sentence from markdown overview', () => {
            const lead = overviewLeadParagraph(
                'Verifik returns **extended** data.\n\nSecond paragraph.'
            );
            expect(lead).toBe('Verifik returns extended data.');
        });
    });

    describe('resolvePostmanEndpointCopy', () => {
        it('prefers docs title over generic i18n catalog title', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'colombia_api_identity_lookup_extra',
                    country: 'Colombia',
                    label: 'Colombia - National ID Verification',
                    docs: {
                        es: {
                            title: 'Ciudadano Colombiano con Datos Extendidos',
                            description:
                                'Accede a información detallada sobre ciudadanos colombianos.',
                        },
                    },
                },
                catalogTitle: 'Colombia - Verificación de Identidad',
                catalogDescription:
                    'Proporciona servicios confiables de verificación y validación.',
                locale: 'es',
            });

            expect(result.title).toBe('Ciudadano Colombiano con Datos Extendidos');
            expect(result.description).toBe(
                'Accede a información detallada sobre ciudadanos colombianos.'
            );
        });

        it('ignores generic i18n description when docs description exists', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'test',
                    country: 'Colombia',
                    label: 'Test',
                    docs: {
                        en: {
                            description: 'Specific docs description.',
                        },
                    },
                },
                catalogTitle: 'Colombia - Test',
                catalogDescription: 'Provides reliable verification and validation services.',
                locale: 'en',
            });

            expect(result.description).toBe('Specific docs description.');
        });

        it('falls back to i18n when no docs', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'test',
                    country: 'Colombia',
                    label: 'Fallback Label',
                },
                catalogTitle: 'Colombia - Specific Title',
                catalogDescription: 'A specific catalog description.',
                locale: 'en',
            });

            expect(result.title).toBe('Specific Title');
            expect(result.description).toBe('A specific catalog description.');
        });

        it('strips country prefix from resolved title', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'test',
                    country: 'Colombia',
                    label: 'x',
                },
                catalogTitle: 'Colombia - Certificado de Contraloría',
                catalogDescription: 'Specific.',
                locale: 'es',
            });

            expect(result.title).toBe('Certificado de Contraloría');
        });

        it('uses layoutDisplayName when set', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'test',
                    country: 'Colombia',
                    label: 'Label',
                    layoutDisplayName: 'My Custom Name',
                    docs: { en: { title: 'Docs Title' } },
                },
                catalogTitle: 'Colombia - Catalog',
                catalogDescription: 'Desc',
                locale: 'en',
            });

            expect(result.title).toBe('My Custom Name');
        });

        it('prefers Spanish i18n over English docs when locale is es and docs.es is missing', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'colombia_api_simit_suspensions',
                    country: 'Colombia',
                    label: 'Colombia - SIMIT - License suspensions',
                    docs: {
                        en: {
                            title: 'SIMIT - License suspensions',
                            description:
                                'Query driver license suspension or cancellation records in Colombia’s SIMIT system by holder identification.',
                            overview:
                                'This service returns **SIMIT** information about **suspension or cancellation** of a **driver license**.',
                        },
                    },
                },
                catalogTitle: 'SIMIT — Suspensiones de licencia',
                catalogDescription:
                    'Consulta suspensiones o cancelaciones de licencia de conducción en SIMIT por documento del titular.',
                locale: 'es',
            });

            expect(result.title).toBe('SIMIT — Suspensiones de licencia');
            expect(result.description).toBe(
                'Consulta suspensiones o cancelaciones de licencia de conducción en SIMIT por documento del titular.'
            );
        });

        it('prefers Chinese i18n over English docs when locale is zh', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'ecuador_api_vehicle_fines',
                    country: 'Ecuador',
                    label: 'Ecuador - \\U0001F1EA\\U0001F1E8 Ecuador - Vehicle Fines',
                    docs: {
                        en: {
                            title: 'Ecuador - Vehicle Fines',
                            description:
                                'Ecuadorian vehicle validation service for retrieving vehicle fines.',
                        },
                    },
                },
                catalogTitle: '厄瓜多尔 - 车辆罚款',
                catalogDescription: '提供可靠的验证和验证服务。',
                locale: 'zh',
            });

            expect(result.title).toBe('车辆罚款');
            expect(result.description).toBe('提供可靠的验证和验证服务。');
        });

        it('strips literal unicode escape sequences from backend labels', () => {
            const result = resolvePostmanEndpointCopy({
                endpoint: {
                    code: 'bolivia_api_vehicle',
                    country: 'Bolivia',
                    label: 'Bolivia - \\U0001F1E7\\U0001F1F4 Bolivia - Vehicle Information',
                },
                catalogTitle: '玻利维亚 - 车辆信息',
                catalogDescription: '提供可靠的验证和验证服务。',
                locale: 'zh',
            });

            expect(result.title).toBe('车辆信息');
            expect(result.title).not.toContain('\\U0001');
        });
    });

    describe('sanitizePostmanCopyText', () => {
        it('removes unicode escape sequences and duplicate flag glyphs', () => {
            expect(
                sanitizePostmanCopyText(
                    'Ecuador - \\U0001F1EA\\U0001F1E8 Ecuador - Vehicle Fines'
                )
            ).toBe('Ecuador - Ecuador - Vehicle Fines');
        });
    });
});
