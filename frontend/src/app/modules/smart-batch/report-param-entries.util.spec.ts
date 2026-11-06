import { describe, expect, it } from 'vitest';
import {
    applySmartFormatToSection,
    applyVisibleKeyReorder,
    collectLayoutSheetItems,
    collectObjectTables,
    collectScalarParams,
    designedTableColumns,
    displayParamLabel,
    flattenSampleResultsForPdf,
    formatParamDisplayValue,
    formatReportCellValue,
    humanizeParamKey,
    IDENTITY_ECHO_KEYS,
    isIdentityEchoKey,
    isLongSpanParamEntry,
    isNotFoundPayload,
    isHiddenParamKey,
    layoutParamGroups,
    layoutTableRulesKey,
    layoutTableRowIndex,
    PARAM_FIELD_I18N_KEY,
    relativeLayoutItemKey,
    setHiddenParamKey,
    shouldAutoSpanFullRow,
    sortByKeyOrder,
    sortScalarParamEntries,
    tableDataName,
    translateParamField,
    valueAtDataPath,
} from './report-param-entries.util';

const nestedPayload = {
    data: { plate: 'ABC123', owner: { name: 'Ana' } },
    owners: [
        { name: 'Ana', id: 1 },
        { name: 'Luis', id: 2 },
    ],
};

describe('valueAtDataPath', () => {
    const runt = {
        informacionGeneral: { marca: 'KIA', cilidraje: '1600' },
        vin: 'VIN123',
    };

    it('reads nested results paths', () => {
        expect(valueAtDataPath({ results: { 2: runt } }, 'results.2.informacionGeneral.marca')).toBe('KIA');
    });

    it('unwraps a data envelope on the consult payload', () => {
        expect(
            valueAtDataPath({ results: { 2: { data: runt } } }, 'results.2.informacionGeneral.marca')
        ).toBe('KIA');
    });

    it('finds the consult when the cloned batch stored it at another sequence', () => {
        expect(
            valueAtDataPath({ results: { 1: runt } }, 'results.2.informacionGeneral.marca')
        ).toBe('KIA');
    });

    it('still finds the consult when the addressed slot has a partial payload', () => {
        expect(
            valueAtDataPath(
                {
                    results: {
                        1: runt,
                        2: { informacionGeneral: {} },
                    },
                },
                'results.2.informacionGeneral.marca'
            )
        ).toBe('KIA');
    });

    it('aliases cilidraje and cilindraje', () => {
        expect(
            valueAtDataPath({ results: { 1: { informacionGeneral: { cilindraje: '1400' } } } }, 'results.1.informacionGeneral.cilidraje')
        ).toBe('1400');
    });
});

describe('humanizeParamKey', () => {
    it('uses a Spanish label for tipoTarifa instead of the raw field name', () => {
        expect(humanizeParamKey('tipoTarifa')).toBe('Tipo de tarifa');
        expect(displayParamLabel('soat.tipoTarifa', 'Tipo tarifa')).toBe('Tipo de tarifa');
        expect(displayParamLabel('soat.tipoTarifa', 'Tarifa pactada')).toBe('Tarifa pactada');
        expect(displayParamLabel('item.nombre', 'Item · Nombre')).toBe('Nombre');
        expect(displayParamLabel('item.nombre')).toBe('Nombre');
    });
});

describe('layoutTableRulesKey', () => {
    it('strips row index from table cell store keys', () => {
        expect(layoutTableRulesKey('ownershipDuration#0')).toBe('ownershipDuration');
        expect(layoutTableRulesKey('owners.documentNumber#12')).toBe('owners.documentNumber');
        expect(layoutTableRulesKey('plate')).toBe('plate');
    });

    it('parses row index from store keys', () => {
        expect(layoutTableRowIndex('ownershipDuration#2')).toBe(2);
        expect(layoutTableRowIndex('plate')).toBeNull();
    });
});

describe('formatReportCellValue', () => {
    it('formats colombian vehicle ownership duration objects', () => {
        expect(formatReportCellValue({ years: 8, months: 6, days: 23 })).toBe('8 años, 6 meses, 23 días');
        expect(formatReportCellValue({ anios: 2, meses: 4, dias: 0 })).toBe('2 años, 4 meses');
    });
});

describe('collectScalarParams', () => {
    it('flattens nested objects into dotted keys', () => {
        const rows = collectScalarParams({
            data: { plate: 'ABC123', owner: { name: 'Ana' } },
        });
        expect(rows).toEqual(
            expect.arrayContaining([
                { key: 'data.plate', label: 'Data · Plate', value: 'ABC123' },
                { key: 'data.owner.name', label: 'Data · Owner · Name', value: 'Ana' },
            ])
        );
    });

    it('flattens arrays of objects instead of dropping them', () => {
        const rows = collectScalarParams({
            owners: [
                { name: 'Ana', id: 1 },
                { name: 'Luis', id: 2 },
            ],
        });
        expect(rows.map((row) => row.key)).toEqual([
            'owners.0.id',
            'owners.0.name',
            'owners.1.id',
            'owners.1.name',
        ]);
        expect(rows[0]).toMatchObject({ label: 'Owners · 1 · Id', value: '1' });
    });

    it('skips object arrays when they will be rendered as tables', () => {
        const rows = collectScalarParams(nestedPayload, { skipObjectArrays: true });
        expect(rows.map((row) => row.key)).toEqual(['data.owner.name', 'data.plate']);
    });

    it('honors hiddenKeys including nested prefixes', () => {
        const rows = collectScalarParams({ a: 1, b: 2 }, { hiddenKeys: ['b'] });
        expect(rows.map((row) => row.key)).toEqual(['a']);
        const nested = collectScalarParams(nestedPayload, { hiddenKeys: ['owners'] });
        expect(nested.some((row) => row.key.startsWith('owners'))).toBe(false);
    });
});

describe('collectObjectTables', () => {
    it('turns arrays of objects into tables', () => {
        const tables = collectObjectTables(nestedPayload);
        expect(tables).toHaveLength(1);
        expect(tables[0].key).toBe('owners');
        expect(tables[0].columns.map((column) => column.key)).toEqual(['name', 'id']);
        expect(tables[0].rows).toEqual([
            { name: 'Ana', id: '1' },
            { name: 'Luis', id: '2' },
        ]);
    });

    it('hides a whole table by prefix', () => {
        expect(collectObjectTables(nestedPayload, { hiddenKeys: ['owners'] })).toEqual([]);
    });
});

describe('layoutParamGroups', () => {
    it('groups tables separately from scalar fields', () => {
        const groups = layoutParamGroups(nestedPayload);
        expect(groups.find((group) => group.key === 'owners')).toMatchObject({
            kind: 'table',
            keys: ['owners'],
        });
        expect(groups.find((group) => group.key === 'data')).toMatchObject({
            kind: 'fields',
            keys: ['data.owner.name', 'data.plate'],
        });
    });
});

describe('relativeLayoutItemKey', () => {
    it('keeps the key when both blocks share a data path', () => {
        expect(relativeLayoutItemKey('results.1', 'results.1', 'owners')).toBe('owners');
    });

    it('re-nests a child field when dropping into a parent block', () => {
        expect(relativeLayoutItemKey('results.1.vehicle', 'results.1', 'plate')).toBe('vehicle.plate');
    });

    it('rejects a move into an unrelated payload', () => {
        expect(relativeLayoutItemKey('results.1', 'results.2', 'owners')).toBeNull();
    });
});

describe('collectLayoutSheetItems', () => {
    it('honors keyOrder across fields and tables', () => {
        const items = collectLayoutSheetItems(nestedPayload, {
            keyOrder: ['owners', 'data.owner.name', 'data.plate'],
        });
        expect(items.map((item) => item.key)).toEqual(['owners', 'data.owner.name', 'data.plate']);
        expect(items[0]).toMatchObject({ kind: 'table' });
    });

    it('lifts a nested array into its own table that grows with more rows', () => {
        const items = collectLayoutSheetItems({
            owners: [
                { name: 'Ana', cars: [{ plate: 'A' }] },
                { name: 'Luis', cars: [{ plate: 'B' }, { plate: 'C' }] },
            ],
        });
        const cars = items.find((item) => item.key === 'owners.cars');
        expect(cars?.kind).toBe('table');
        if (cars?.kind !== 'table') return;
        expect(cars.table.rows.map((row) => row.plate)).toEqual(['A', 'B', 'C']);
        expect(items.find((item) => item.key === 'owners' && item.kind === 'table')).toBeTruthy();
    });
});

describe('designedTableColumns', () => {
    it('keeps extra RUNT columns like tipoTarifa out of a designed SOAT table', () => {
        const soat = {
            soat: [
                { noPoliza: '1', estado: 'VENCIDO', tipoTarifa: '221', fechaExpedicion: '01/01/2020' },
            ],
        };
        const tables = collectObjectTables(soat, {
            keyOrder: ['soat.noPoliza', 'soat.fechaExpedicion', 'soat.estado'],
        });
        expect(tables[0]?.columns.map((column) => column.key)).toEqual(['noPoliza', 'fechaExpedicion', 'estado']);
        expect(collectObjectTables(soat)[0]?.columns.map((column) => column.key)).not.toContain('tipoTarifa');
        expect(
            collectObjectTables(soat, {
                keyOrder: ['soat.noPoliza', 'soat.tipoTarifa', 'soat.estado'],
            })[0]?.columns.map((column) => column.key)
        ).toEqual(['noPoliza', 'estado', 'fechaExpedicion']);
        expect(designedTableColumns('soat', ['noPoliza', 'estado', 'tipoTarifa'], {
            keyOverrides: { 'soat.estado': { label: 'Estado' } },
        })).toBeNull();
        expect(collectObjectTables(soat, {
            keyOverrides: { 'soat.estado': { label: 'Estado' }, 'soat.fechaExpedicion': { labelStyle: { color: '#111' } } },
        })[0]?.columns.map((column) => column.key)).toEqual(['noPoliza', 'estado', 'fechaExpedicion']);
        expect(designedTableColumns('soat', ['noPoliza', 'estado', 'fechaExpedicion', 'tipoTarifa'], {
            keyOrder: ['soat.noPoliza', 'soat.estado'],
            keyOverrides: { 'soat.fechaExpedicion': { label: 'Fecha' } },
        })).toEqual(['noPoliza', 'estado']);
        expect(
            designedTableColumns('soat', ['noPoliza', 'estado', 'tipoTarifa'], {
                keyOrder: ['soat.noPoliza', 'soat.tipoTarifa', 'soat.estado'],
            })
        ).toEqual(['noPoliza', 'estado']);
    });
});

describe('sortByKeyOrder / applyVisibleKeyReorder', () => {
    it('keeps hidden keys in their slots while reordering visible ones', () => {
        expect(sortByKeyOrder(['a', 'b', 'c'], ['c', 'a'], (key) => key)).toEqual(['c', 'a', 'b']);
        expect(applyVisibleKeyReorder(['a', 'hidden', 'c'], ['c', 'a'])).toEqual(['c', 'hidden', 'a']);
    });
});

describe('isHiddenParamKey / setHiddenParamKey', () => {
    it('matches prefixes and collapses child hides', () => {
        expect(isHiddenParamKey('owners.0.name', ['owners'])).toBe(true);
        expect(setHiddenParamKey(['owners.0.name', 'owners.1.id'], 'owners', false)).toEqual(['owners']);
        expect(setHiddenParamKey(['owners'], 'owners', true)).toEqual([]);
    });
});

describe('flattenSampleResultsForPdf', () => {
    it('replaces nested step results with the preview scalar map', () => {
        const sample = flattenSampleResultsForPdf(
            {
                results: {
                    1: { data: { plate: 'XYZ99', extra: { city: 'Bogotá' } } },
                },
            },
            [{ id: 's1', type: 'keyValueGrid', order: 0, dataPath: 'results.1', hiddenKeys: ['data.extra.city'] }]
        );
        expect(sample.results?.['1']).toEqual({ 'data.plate': 'XYZ99' });
    });

    it('leaves arrays of objects out of the scalar map so they render as tables', () => {
        const sample = flattenSampleResultsForPdf(
            { results: { 1: nestedPayload } },
            [{ id: 's1', type: 'keyValueGrid', order: 0, dataPath: 'results.1' }]
        );
        const result = sample.results?.['1'] as Record<string, string>;
        expect(result['data.plate']).toBe('ABC123');
        expect(result['data.owner.name']).toBe('Ana');
        expect(result['owners.0.name']).toBeUndefined();
        expect(result.owners).toBeUndefined();
    });

    it('applies section keyOrder to the PDF scalar map', () => {
        const sample = flattenSampleResultsForPdf(
            { results: { 1: nestedPayload } },
            [
                {
                    id: 's1',
                    type: 'keyValueGrid',
                    order: 0,
                    dataPath: 'results.1',
                    keyOrder: ['data.owner.name', 'data.plate'],
                },
            ]
        );
        expect(Object.keys(sample.results?.['1'] as object)).toEqual(['data.owner.name', 'data.plate']);
    });
});

describe('translateParamField', () => {
    it('translates common background check and identity fields in Spanish by default', () => {
        expect(translateParamField('foundInFbi')).toBe('Hallazgo en FBI');
        expect(translateParamField('arrayName')).toBe('Nombres desglosados');
        expect(translateParamField('legend')).toBe('Nota legal');
        expect(translateParamField('details')).toBe('Resultado de la consulta');
        expect(translateParamField('foundInDea')).toBe('Hallazgo en DEA');
        expect(translateParamField('foundInInterpol')).toBe('Hallazgo en Interpol');
        expect(translateParamField('fullName')).toBe('Nombre completo');
        expect(translateParamField('records')).toBe('Registros asociados');
    });

    it('supports custom translate function and falls back to dictionary if key is untranslated', () => {
        const customTranslate = (key: string) => {
            if (key === 'visitaGuide.foundInFbi') return 'FBI Match';
            if (key === 'visitaGuide.arrayName') return 'Parsed Names';
            return key; // returns the key itself when not translated
        };
        expect(translateParamField('foundInFbi', customTranslate)).toBe('FBI Match');
        expect(translateParamField('arrayName', customTranslate)).toBe('Parsed Names');
        // Untranslated returns key -> should fall back to built-in dictionary
        expect(translateParamField('legend', customTranslate)).toBe('Nota legal');
        expect(translateParamField('details', customTranslate)).toBe('Resultado de la consulta');
    });

    it('handles nested dotted keys using the leaf property', () => {
        expect(translateParamField('results.1.foundInFbi')).toBe('Hallazgo en FBI');
        expect(translateParamField('data.records')).toBe('Registros asociados');
    });
});

describe('formatParamDisplayValue', () => {
    it('formats boolean match/finding fields appropriately in Spanish and English', () => {
        expect(formatParamDisplayValue('foundInFbi', false)).toBe('Sin hallazgos');
        expect(formatParamDisplayValue('foundInFbi', true)).toBe('Con hallazgos');
        expect(formatParamDisplayValue('foundInFbi', 'false')).toBe('Sin hallazgos');
        expect(formatParamDisplayValue('foundInFbi', 'true')).toBe('Con hallazgos');

        expect(formatParamDisplayValue('foundInFbi', false, { lang: 'en' })).toBe('No matches found');
        expect(formatParamDisplayValue('foundInFbi', true, { lang: 'en' })).toBe('Match found');

        expect(formatParamDisplayValue('hasRecords', false)).toBe('Sin hallazgos');
        expect(formatParamDisplayValue('hasRecords', true)).toBe('Con hallazgos');
        expect(formatParamDisplayValue('isPep', true)).toBe('Con hallazgos');
    });

    it('formats standard boolean fields as Sí/No or Yes/No', () => {
        expect(formatParamDisplayValue('active', true)).toBe('Sí');
        expect(formatParamDisplayValue('active', false)).toBe('No');
        expect(formatParamDisplayValue('active', true, { lang: 'en' })).toBe('Yes');
        expect(formatParamDisplayValue('active', false, { lang: 'en' })).toBe('No');
    });
});

describe('collectScalarParams (smart response formatting)', () => {
    it('formats booleans for finding fields as Sin hallazgos / Con hallazgos', () => {
        const rows = collectScalarParams({
            foundInFbi: false,
            foundInDea: true,
        });
        const fbi = rows.find((r) => r.key === 'foundInFbi');
        const dea = rows.find((r) => r.key === 'foundInDea');
        expect(fbi).toMatchObject({ label: 'Hallazgo en FBI', value: 'Sin hallazgos' });
        expect(dea).toMatchObject({ label: 'Hallazgo en DEA', value: 'Con hallazgos' });
    });

    it('formats NotFound envelope cleanly without raw error jargon', () => {
        const notFoundPayload = {
            code: 'NotFound',
            message: 'Record not found.',
        };
        const rows = collectScalarParams(notFoundPayload);
        expect(rows).toEqual([
            { key: 'code', label: 'Estado', value: 'Sin registros' },
            { key: 'message', label: 'Detalle', value: 'No se encontraron registros en la fuente oficial.' },
        ]);
        expect(isNotFoundPayload(notFoundPayload)).toBe(true);
    });

    it('orders scalar params by semantic priority (findings first, identity next, footnotes/legend last)', () => {
        const payload = {
            legend: 'Esta es una leyenda legal muy extensa que contiene avisos de privacidad y uso de la información.',
            lastName: 'Gomez',
            foundInFbi: false,
            city: 'Medellin',
            firstName: 'Carlos',
            details: 'Consulta realizada sin novedades',
            records: '0',
        };
        const rows = collectScalarParams(payload);
        const keys = rows.map((r) => r.key);

        // Priority 1: findings (foundInFbi, details) must be before domain, identity, and legend
        expect(keys.indexOf('foundInFbi')).toBeLessThan(keys.indexOf('city'));
        expect(keys.indexOf('details')).toBeLessThan(keys.indexOf('city'));

        // Priority 2: domain (city) before identity
        expect(keys.indexOf('city')).toBeLessThan(keys.indexOf('firstName'));
        expect(keys.indexOf('city')).toBeLessThan(keys.indexOf('lastName'));

        // Priority 3: identity (firstName, lastName) before footnotes
        expect(keys.indexOf('firstName')).toBeLessThan(keys.indexOf('legend'));
        expect(keys.indexOf('lastName')).toBeLessThan(keys.indexOf('legend'));

        // Priority 4: legend and records at the end
        expect(keys.indexOf('legend')).toBe(keys.length - 1);
        expect(keys[0]).toBe('foundInFbi');
    });
});

describe('shouldAutoSpanFullRow & isLongSpanParamEntry', () => {
    it('identifies legend, details, and long text entries as full-width span candidates', () => {
        expect(shouldAutoSpanFullRow({ key: 'legend', value: 'Nota breve' }, 2)).toBe(true);
        expect(shouldAutoSpanFullRow({ key: 'results.0.legend', value: 'Nota breve' }, 2)).toBe(true);
        expect(shouldAutoSpanFullRow({ key: 'details', value: 'Detalle' }, 2)).toBe(true);
        expect(shouldAutoSpanFullRow({ key: 'observations', value: 'OK' }, 2)).toBe(true);

        const longValue = 'A'.repeat(70);
        expect(shouldAutoSpanFullRow({ key: 'customRemark', value: longValue }, 2)).toBe(true);
        expect(isLongSpanParamEntry({ key: 'customRemark', value: longValue })).toBe(true);

        expect(shouldAutoSpanFullRow({ key: 'city', value: 'Bogotá' }, 2)).toBe(false);
        expect(isLongSpanParamEntry({ key: 'city', value: 'Bogotá' })).toBe(false);

        // If gridCols is 1, auto-span is unnecessary
        expect(shouldAutoSpanFullRow({ key: 'legend', value: 'Nota breve' }, 1)).toBe(false);
    });
});

describe('applySmartFormatToSection', () => {
    it('hides arrayName, firstName, lastName, fullName on lookup blocks while preserving at least 1 meaningful result field and auto-spanning legend across 2 columns', () => {
        const rawSectionData = {
            arrayName: ['CARLOS', 'GOMEZ', 'PEREZ'],
            firstName: 'Carlos',
            lastName: 'Gomez Perez',
            fullName: 'Carlos Gomez Perez',
            foundInFbi: false,
            details: 'Sin antecedentes encontrados',
            legend: 'Esta es una leyenda legal de la fuente oficial que debe ocupar toda la fila del reporte.',
        };

        const section = {
            id: 'step-background-check',
            type: 'keyValueGrid',
            dataPath: 'results.1',
            label: 'Antecedentes FBI',
        };

        const formatted = applySmartFormatToSection(section, rawSectionData, { gridCols: 2 });

        // Identity echo fields must be hidden
        expect(formatted.keyOverrides?.['arrayName']?.hidden).toBe(true);
        expect(formatted.keyOverrides?.['firstName']?.hidden).toBe(true);
        expect(formatted.keyOverrides?.['lastName']?.hidden).toBe(true);
        expect(formatted.keyOverrides?.['fullName']?.hidden).toBe(true);

        // Meaningful result fields stay visible with translated labels
        expect(formatted.keyOverrides?.['foundInFbi']?.hidden).toBeFalsy();
        expect(formatted.keyOverrides?.['foundInFbi']?.label).toBe('Hallazgo en FBI');

        expect(formatted.keyOverrides?.['details']?.hidden).toBeFalsy();
        expect(formatted.keyOverrides?.['details']?.label).toBe('Resultado de la consulta');

        // Legend auto-spans across 2 columns
        expect(formatted.keyOverrides?.['legend']?.colSpan).toBe(2);
        expect(formatted.keyOverrides?.['legend']?.label).toBe('Nota legal');

        // Default status rules added
        expect(formatted.statusRules).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ id: 'smart-ok', value: 'Sin hallazgos', tone: 'success' }),
                expect.objectContaining({ id: 'smart-no-reg', value: 'No se encontraron registros', tone: 'neutral' }),
                expect.objectContaining({ id: 'smart-match', value: 'Con hallazgos', tone: 'danger' }),
            ])
        );
    });

    it('keeps fullName, documentType, documentNumber visible if ALL fields in the response were identity fields', () => {
        const rawSectionData = {
            arrayName: ['ANA', 'MARIA', 'LOPEZ'],
            firstName: 'Ana Maria',
            lastName: 'Lopez',
            fullName: 'Ana Maria Lopez',
            documentNumber: '98765432',
            documentType: 'CC',
        };

        const section = {
            id: 'step-identity-lookup',
            type: 'keyValueGrid',
            dataPath: 'results.2',
            label: 'Consulta Registraduria',
        };

        const formatted = applySmartFormatToSection(section, rawSectionData, { gridCols: 2 });

        // Redundant technical echoes are hidden
        expect(formatted.keyOverrides?.['arrayName']?.hidden).toBe(true);
        expect(formatted.keyOverrides?.['firstName']?.hidden).toBe(true);
        expect(formatted.keyOverrides?.['lastName']?.hidden).toBe(true);

        // Essential identity anchors remain visible
        expect(formatted.keyOverrides?.['fullName']?.hidden).toBeFalsy();
        expect(formatted.keyOverrides?.['fullName']?.label).toBe('Nombre completo');
        expect(formatted.keyOverrides?.['documentNumber']?.hidden).toBeFalsy();
        expect(formatted.keyOverrides?.['documentNumber']?.label).toBe('Número de documento');
        expect(formatted.keyOverrides?.['documentType']?.hidden).toBeFalsy();
        expect(formatted.keyOverrides?.['documentType']?.label).toBe('Tipo de documento');
    });

    it('does not hide identity fields in profile/input sections, but still hides arrayName', () => {
        const rawSectionData = {
            arrayName: ['ANA', 'MARIA', 'LOPEZ'],
            firstName: 'Ana Maria',
            lastName: 'Lopez',
            fullName: 'Ana Maria Lopez',
            documentNumber: '98765432',
            documentType: 'CC',
        };

        const profileSection = {
            id: 'profile-header',
            type: 'keyValueGrid',
            dataPath: 'inputData',
            label: 'Perfil del Ciudadano',
        };

        const formatted = applySmartFormatToSection(profileSection, rawSectionData);

        expect(formatted.keyOverrides?.['arrayName']?.hidden).toBe(true);
        expect(formatted.keyOverrides?.['fullName']?.hidden).toBeFalsy();
        expect(formatted.keyOverrides?.['firstName']?.hidden).toBeFalsy();
        expect(formatted.keyOverrides?.['lastName']?.hidden).toBeFalsy();
    });
});
