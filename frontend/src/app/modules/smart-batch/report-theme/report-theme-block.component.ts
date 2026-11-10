import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { ReportSection } from '../smart-report.service';
import {
    categoryShare,
    formatDeduction,
    formatScaleMax,
    formatScore,
    formatWeight,
    radarLabelPoint,
    radarPoint,
    radarPolygon,
} from './report-theme.format';
import {
    fontStack,
    readThemeBlockConfig,
    themeBlockKindFromType,
    type ReportThemeId,
    type ReportThemeTokens,
    type ScoreDisplayFormat,
    type ScoreTone,
    type VerificationScoreModel,
} from './report-theme.model';

const SEGMENT_COLORS = ['#2457d6', '#7c5cff', '#14b8a6', '#f0a202', '#3b82f6', '#ec4899'];

@Component({
    selector: 'report-theme-block',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './report-theme-block.component.html',
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                min-height: 0;
                box-sizing: border-box;
            }
        `,
    ],
})
export class ReportThemeBlockComponent {
    private _transloco = inject(TranslocoService);

    section = input.required<ReportSection>();
    theme = input.required<ReportThemeId>();
    tokens = input.required<ReportThemeTokens>();
    score = input<VerificationScoreModel | null>(null);
    format = input<ScoreDisplayFormat>('percent');
    enabled = input(true);

    readonly kind = computed(() => themeBlockKindFromType(this.section().type));
    readonly config = computed(() => readThemeBlockConfig(this.section().config));
    readonly bodyFont = computed(() => fontStack(this.tokens().bodyFont));
    readonly displayFont = computed(() => fontStack(this.tokens().displayFont));
    readonly shown = computed(() => (this.enabled() ? this.score() : null));

    usesCustomEyebrow(): boolean {
        return this.config().eyebrow.trim().length > 0;
    }

    points(value: number): string {
        return formatScore(value, this.format());
    }

    scaleMax(): string {
        return formatScaleMax(this.format());
    }

    weight(value: number): string {
        return formatWeight(value);
    }

    deduction(value: number): string {
        return formatDeduction(value, this.format());
    }

    statusKey(status: string): string {
        if (status === 'clear') return 'reportTheme.sample.statusClear';
        if (status === 'fail') return 'reportTheme.sample.statusFail';
        return 'reportTheme.sample.statusReview';
    }

    categoryScores(score: VerificationScoreModel): number[] {
        return score.categories.map((category) => category.score);
    }

    enrollRows(score: VerificationScoreModel): { label: string; value: string; ok: boolean }[] {
        const driving = score.checks.find((check) => check.id === 'driving');
        const vehicle = score.checks.find((check) => check.id === 'vehicle');
        return [
            { label: this._transloco.translate('reportTheme.sample.person'), value: score.subjectName, ok: true },
            { label: score.documentLabel, value: score.documentMasked, ok: true },
            {
                label: this._transloco.translate('reportTheme.sample.license'),
                value: this._transloco.translate('reportTheme.sample.licenseShort', { klass: score.licenseClass }),
                ok: driving?.status === 'clear',
            },
            {
                label: this._transloco.translate('reportTheme.sample.vehicle'),
                value: score.plate,
                ok: vehicle?.status === 'clear',
            },
        ];
    }

    toneColor(tone: ScoreTone | 'clear' | 'fail' | 'approve' | 'review' | 'reject'): string {
        const tokens = this.tokens();
        if (tone === 'success' || tone === 'clear' || tone === 'approve') return tokens.success;
        if (tone === 'danger' || tone === 'fail' || tone === 'reject') return tokens.danger;
        if (tone === 'info') return tokens.accent;
        return tokens.warning;
    }

    decisionKey(decision: string): string {
        if (decision === 'approve') return 'reportTheme.sample.headlineApprove';
        if (decision === 'reject') return 'reportTheme.sample.headlineReject';
        return 'reportTheme.sample.headlineReview';
    }

    summaryKey(decision: string): string {
        return decision === 'approve' ? 'reportTheme.sample.summaryApprove' : 'reportTheme.sample.summaryReview';
    }

    semiDash(value: number): string {
        const length = Math.PI * 84;
        const filled = length * Math.max(0, Math.min(1, value));
        return `${filled} ${length}`;
    }

    ringDash(value: number, radius: number): string {
        const length = 2 * Math.PI * radius;
        const filled = length * Math.max(0, Math.min(1, value));
        return `${filled} ${length}`;
    }

    sharePercent(score: number, weight: number): number {
        return Math.round(categoryShare({ score, weight }) * 1000) / 10;
    }

    segmentColor(index: number): string {
        return SEGMENT_COLORS[index % SEGMENT_COLORS.length];
    }

    barHeight(score: number): number {
        return Math.max(8, Math.round(Math.max(0, Math.min(1, score)) * 100));
    }

    radarShape(scores: number[]): string {
        return radarPolygon(scores, 80, 78, 52);
    }

    radarRing(scale: number): string {
        return radarPolygon(scoresOf(scale), 80, 78, 52);
    }

    labelPoint(index: number, count: number): { x: number; y: number } {
        return radarLabelPoint(index, count, 80, 78, 68);
    }

    axisEnd(index: number, count: number): { x: number; y: number } {
        return radarPoint(index, count, 1, 80, 78, 52);
    }
}

const scoresOf = (scale: number): number[] => Array.from({ length: 6 }, () => scale);
