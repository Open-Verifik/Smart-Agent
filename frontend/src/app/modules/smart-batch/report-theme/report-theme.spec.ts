import { describe, expect, it } from 'vitest';
import { decisionForScore, formatDeduction, formatScore } from './report-theme.format';
import {
    defaultScoreSettings,
    defaultThemeTokens,
    extractReportThemeConfig,
    toBackendReportThemePayload,
} from './report-theme.model';
import { buildScoreModelFromSampleData, ensureVerificationSample, syntheticVerificationScore } from './report-theme.sample';
import { parseScoreProfiles, parseThemeStarters, resolveScoreProfileId, verificationRequestFields } from './report-score-api.adapter';
import { starterFitsSheet, starterSections } from './report-theme.starters';
import { ungroupThemeSections } from './report-theme-ungroup.util';
import { themeBlockKindFromType } from './report-theme.model';

describe('verification score API adapter', () => {
    it('sends nothing for an unthemed template with the score off', () => {
        expect(
            verificationRequestFields({
                scoreSettings: { ...defaultScoreSettings(), enabled: false },
            })
        ).toEqual({});
    });

    it('sends score, profile and display format when the toggle is on', () => {
        expect(
            verificationRequestFields({
                scoreSettings: { enabled: true, profile: 'cabify_driver', format: 'percent' },
            })
        ).toEqual({
            score: true,
            scoreProfile: 'cabify_driver',
            scoreScale: 'percent',
        });
    });

    it('sends reportTheme and scoreScale, and omits the profile when a themed report hides the score', () => {
        const fields = verificationRequestFields({
            theme: 'premium_dark',
            themeTokens: defaultThemeTokens('premium_dark'),
            scoreSettings: { enabled: true, profile: 'cabify_driver', format: 'unit' },
        });
        expect(fields['scoreScale']).toBe('unit');
        expect(fields['reportTheme']).toBe('premium_dark');

        const hidden = verificationRequestFields({
            theme: 'editorial',
            scoreSettings: { enabled: false, profile: 'cabify_driver', format: 'percent' },
        });
        expect(hidden['score']).toBe(false);
        expect(hidden['scoreProfile']).toBeUndefined();
        expect(hidden['scoreScale']).toBeUndefined();
        expect(hidden['reportTheme']).toBe('editorial');
    });
});

describe('score display', () => {
    const sample = syntheticVerificationScore('cabify_driver', 'es');

    it('keeps the canonical value on a 0–1 scale and formats both displays', () => {
        expect(sample.value).toBeCloseTo(0.89);
        expect(decisionForScore(sample.value)).toBe('review');
        expect(formatScore(sample.value, 'unit')).toBe('0.89');
        expect(formatScore(sample.value, 'percent')).toBe('89%');
        expect(formatScore(0.98, 'percent')).toBe('98%');
        expect(formatDeduction(0.03, 'percent')).toBe('−3%');
        expect(sample.categories.map((category) => category.id)).toEqual([
            'identity',
            'background',
            'driving',
            'vehicle',
            'lists',
            'companies',
        ]);
        expect(JSON.stringify(sample)).not.toMatch(/face|liveness|biometric/i);
    });

    it('does not replace a live score', () => {
        const live = { ...sample, value: 0.98 };
        const next = ensureVerificationSample({ verificationScore: live }, defaultScoreSettings(), 'en');
        expect(next.verificationScore?.value).toBe(0.98);
    });

    it('fills the synthetic sample only when the score is included', () => {
        const empty = ensureVerificationSample({ rowIndex: 0 }, { ...defaultScoreSettings(), enabled: false });
        expect(empty.verificationScore).toBeUndefined();
        const filled = ensureVerificationSample({ rowIndex: 0 }, defaultScoreSettings(), 'en');
        expect(filled.verificationScore?.profile).toBe('cabify_driver');
        expect(filled.verificationScore?.subjectName).toBe('Valentina Prueba Soto');
    });
});

describe('score profiles', () => {
    it('reads an id list or named records and defaults a blank choice to cabify_driver', () => {
        expect(parseScoreProfiles({ data: ['cabify_driver'] }).map((item) => item.id)).toEqual(['cabify_driver']);
        expect(parseScoreProfiles({ data: { profiles: [{ id: 'cabify_driver', name: 'Cabify driver' }] } })[0].label).toBe(
            'Cabify driver'
        );
        expect(resolveScoreProfileId('', [])).toBe('cabify_driver');
        expect(resolveScoreProfileId('other', [{ id: 'cabify_driver' }, { id: 'other' }])).toBe('other');
    });
});

describe('theme starter catalog', () => {
    it('reads the list and the map returned by GET /v2/smart-report-templates/theme-starters', () => {
        const fromList = parseThemeStarters({
            data: [
                { reportTheme: 'premium_dark', name: 'Cabify', sections: [{ id: 'cover', type: 'coverPage' }] },
                { reportTheme: 'nope', sections: [{ id: 'x', type: 'text' }] },
            ],
        });
        expect(fromList.map((item) => item.reportTheme)).toEqual(['premium_dark']);

        const fromMap = parseThemeStarters({
            data: {
                editorial: { sections: [{ id: 'name', type: 'coverPage' }] },
                dashboard: { reportTheme: 'dashboard', sections: [{ type: 'scoreGauge' }] },
            },
        });
        expect(fromMap.map((item) => item.reportTheme).sort()).toEqual(['dashboard', 'editorial']);
    });
});

describe('theme starters', () => {
    it('gives every theme a cover, a score gauge and the rest of the blocks inside the sheet', () => {
        for (const theme of ['premium_dark', 'light_cards', 'editorial', 'dashboard'] as const) {
            expect(starterFitsSheet(theme)).toBe(true);
            const types = starterSections(theme).map((section) => section.type);
            expect(types).toEqual([
                'coverPage',
                'scoreGauge',
                'categoryBreakdown',
                'findings',
                'checkTable',
                'sources',
            ]);
        }
    });
});

describe('backend theme object & Colombia vehicle sample model', () => {
    it('hydrates and serializes rich object reportTheme payloads for Cabify and custom brands', () => {
        const parsed = extractReportThemeConfig({
            id: 'premium_dark',
            locale: 'es',
            density: 'balanced',
            scoreScale: 'percent',
            scoreEnabled: true,
            scoreProfile: 'fleet',
            eyebrow: 'Informe vehicular · Colombia',
            coverTitle: 'Verificación de vehículo',
            headlines: { approve: 'Vehículo aprobado' },
            legalNote: 'Uso interno autorizado',
            showVerifiedBadge: false,
            tokens: {
                logoText: 'cabify',
                accent: '#7145d6',
                colors: { cover: '#0b1730', mark: '#7145d6' },
            },
        });

        expect(parsed.themeId).toBe('premium_dark');
        expect(parsed.tokens.logoText).toBe('cabify');
        expect(parsed.tokens.showVerifiedBadge).toBe(false);
        expect(parsed.tokens.headlineApprove).toBe('Vehículo aprobado');
        expect(parsed.tokens.legalNote).toBe('Uso interno autorizado');
        expect(parsed.scoreSettings.profile).toBe('fleet');

        const serialized = toBackendReportThemePayload('premium_dark', parsed.tokens, parsed.scoreSettings);
        expect(serialized.id).toBe('premium_dark');
        expect(serialized.density).toBe('balanced');
        expect(serialized.scoreProfile).toBe('fleet');
        expect(serialized.showVerifiedBadge).toBe(false);
        expect(serialized.headlines?.approve).toBe('Vehículo aprobado');
        expect(serialized.tokens?.['logoText']).toBe('cabify');
    });

    it('derives live vehicle score models from sampleData instead of falling back to Valentina Prueba Soto', () => {
        const model = buildScoreModelFromSampleData(
            {
                reportId: 'SR-CO-VEH-0001',
                inputData: { plate: 'DSV067', documentType: 'CC', documentNumber: '22468888' },
                steps: [
                    { sequence: 1, featureCode: 'colombia_api_vehicle_complete_by_plate', name: 'Registro integral del vehículo' },
                    { sequence: 2, featureCode: 'colombia_api_simit_plate', name: 'Multas de tránsito por placa' },
                    { sequence: 3, featureCode: 'colombia_api_vehicle_valores_fasecolda_by_plate', name: 'Valoración comercial' },
                ],
                results: {
                    1: {
                        informacionGeneral: { noPlaca: 'DSV067', marca: 'MAZDA', linea: 'CX-5', modelo: '2018', estadoDelVehiculo: 'ACTIVO' },
                        soat: [{ estado: 'VIGENTE', fechaVencimiento: '20/06/2027' }],
                        tecnoMecanica: [{ vigente: 'SI', estado: 'APROBADA', fechaVencimiento: '15/05/2027' }],
                    },
                    2: { multas: [], cantMultasPagar: 0 },
                    3: { marke: 'MAZDA', line1: 'CX5 [FL]', valueModel: [{ modelo: '2018', valor: '83600' }] },
                },
            },
            { enabled: true, profile: 'fleet', format: 'percent' },
            'es'
        );

        expect(model.isVehicle).toBe(true);
        expect(model.plate).toBe('DSV067');
        expect(model.subjectName).toContain('DSV067');
        expect(model.subjectName).not.toContain('Valentina');
        expect(model.headlineText).toBe('Vehículo aprobado');
        expect(model.subjectRows?.some((row) => row.value.includes('COP'))).toBe(true);
    });

    it('populates driver checks, findings, and sources even when steps are omitted from sampleData', () => {
        const model = buildScoreModelFromSampleData(
            {
                batchName: 'Validación de conductor',
                inputData: { fullName: 'CAMILO PRUEBA RIOS', documentType: 'CC', documentNumber: '1000000001' },
                results: {
                    1: { fullName: 'CAMILO PRUEBA RIOS', documentNumber: '1000000001' },
                    2: { hasRecord: true },
                    3: { foundInOFAC: false },
                },
                errors: [{ step: 4, code: 'timeout', message: 'timeout' }],
            },
            { enabled: true, profile: 'background_check', format: 'percent' },
            'es'
        );

        expect(model.subjectName).toBe('CAMILO PRUEBA RIOS');
        expect(model.checkCount).toBe(3);
        expect(model.reviewCount).toBe(1);
        expect(model.sources.length).toBe(3);
        expect(model.findings.length).toBeGreaterThanOrEqual(2);
    });

    it('ungroups composite themed blocks into individually editable native sections preserving dark palette', () => {
        const tokens = defaultThemeTokens('premium_dark');
        const score = syntheticVerificationScore('cabify_driver', 'es');
        const grouped = starterSections('premium_dark');
        const ungrouped = ungroupThemeSections(grouped, 'premium_dark', tokens, score, 'percent', 'es');

        expect(ungrouped.length).toBeGreaterThan(grouped.length);
        expect(ungrouped.some((s) => themeBlockKindFromType(s.type) != null)).toBe(false);
        expect(ungrouped.some((s) => s.type === 'header' && s.staticContent === tokens.logoText)).toBe(true);
        expect(ungrouped.some((s) => s.type === 'field' && s.dataPath === 'verificationScore.scoreDisplay')).toBe(true);
        expect(ungrouped.some((s) => s.type === 'field' && s.dataPath === 'verificationScore.coverageDisplay')).toBe(true);
        expect(ungrouped.some((s) => s.type === 'field' && s.dataPath === 'verificationScore.checkCount')).toBe(true);
        expect(ungrouped.some((s) => s.type === 'dataTable' && s.dataPath === 'verificationScore.findings')).toBe(true);
        expect(ungrouped.some((s) => s.type === 'dataTable' && s.dataPath === 'verificationScore.checks')).toBe(true);
        expect(ungrouped.some((s) => s.type === 'dataTable' && s.dataPath === 'verificationScore.categories')).toBe(true);
        expect(ungrouped.some((s) => s.type === 'dataTable' && s.dataPath === 'verificationScore.sources')).toBe(true);
    });
});
