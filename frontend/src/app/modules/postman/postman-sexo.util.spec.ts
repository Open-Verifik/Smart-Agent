import {
    filterPostmanSexoEnumOptions,
    getPostmanSexoLabelKey,
    isPostmanSexoEnumMatch,
    normalizePostmanSexoValue,
} from './postman-sexo.util';

describe('postman-sexo.util', () => {
    describe('normalizePostmanSexoValue', () => {
        it('maps female aliases to FEMENINO', () => {
            expect(normalizePostmanSexoValue('Female')).toBe('FEMENINO');
            expect(normalizePostmanSexoValue('F')).toBe('FEMENINO');
            expect(normalizePostmanSexoValue('mujer')).toBe('FEMENINO');
            expect(normalizePostmanSexoValue('FEMENINO')).toBe('FEMENINO');
        });

        it('maps male aliases to MASCULINO', () => {
            expect(normalizePostmanSexoValue('Male')).toBe('MASCULINO');
            expect(normalizePostmanSexoValue('m')).toBe('MASCULINO');
            expect(normalizePostmanSexoValue('HOMBRE')).toBe('MASCULINO');
        });

        it('leaves unknown values trimmed', () => {
            expect(normalizePostmanSexoValue('  other  ')).toBe('other');
            expect(normalizePostmanSexoValue('')).toBe('');
        });
    });

    describe('isPostmanSexoEnumMatch', () => {
        const enums = ['MASCULINO', 'FEMENINO', 'M', 'F'];

        it('accepts Female against FEMENINO enum', () => {
            expect(isPostmanSexoEnumMatch('Female', enums)).toBe(true);
        });

        it('rejects unrelated values', () => {
            expect(isPostmanSexoEnumMatch('Unknown', enums)).toBe(false);
        });
    });

    describe('filterPostmanSexoEnumOptions', () => {
        it('drops short M/F when long forms exist', () => {
            expect(filterPostmanSexoEnumOptions(['MASCULINO', 'FEMENINO', 'M', 'F'])).toEqual([
                'MASCULINO',
                'FEMENINO',
            ]);
        });
    });

    describe('getPostmanSexoLabelKey', () => {
        it('returns i18n keys for canonical values', () => {
            expect(getPostmanSexoLabelKey('Female')).toBe('postman.requestEditor.params.sexoFemale');
            expect(getPostmanSexoLabelKey('M')).toBe('postman.requestEditor.params.sexoMale');
        });
    });
});
