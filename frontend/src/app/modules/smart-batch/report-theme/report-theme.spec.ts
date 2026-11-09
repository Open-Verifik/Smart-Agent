import { describe, expect, it } from 'vitest';
import { decisionForScore, formatDeduction, formatScore } from './report-theme.format';
import { defaultScoreSettings, defaultThemeTokens } from './report-theme.model';
import { ensureVerificationSample, syntheticVerificationScore } from './report-theme.sample';
import { parseThemeStarters, verificationRequestFields } from './report-score-api.adapter';
import { starterFitsSheet, starterSections } from './report-theme.starters';

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
        for (const theme of ['premium_dark', 'smart_enroll_v2', 'editorial', 'dashboard'] as const) {
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
