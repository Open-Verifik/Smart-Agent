import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, output, signal } from '@angular/core';
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

export type ThemeInlineField = 'logoText' | 'eyebrow' | 'coverTitle' | 'blockEyebrow' | 'headline' | 'legalNote';

export interface ThemeInlineEdit {
    sectionId: string;
    field: ThemeInlineField;
    value: string;
}

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
            .rt-editable {
                cursor: text;
                border-radius: 4px;
                transition: outline-color 120ms ease, background-color 120ms ease;
            }
            .rt-editable:hover {
                outline: 1px dashed rgba(129, 140, 248, 0.8);
                outline-offset: 2px;
            }
            .rt-inline-input {
                width: 100%;
                min-width: 80px;
                background: rgba(15, 23, 42, 0.85);
                color: #ffffff;
                border: 1px solid #818cf8;
                border-radius: 6px;
                padding: 2px 6px;
                font: inherit;
                line-height: inherit;
                letter-spacing: inherit;
                outline: none;
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
    editable = input(false);

    inlineEdit = output<ThemeInlineEdit>();

    editingField = signal<ThemeInlineField | null>(null);
    editingDraft = signal('');

    readonly kind = computed(() => themeBlockKindFromType(this.section().type));
    readonly config = computed(() => readThemeBlockConfig(this.section().config));
    readonly sectionStyle = computed(() => this.section().style ?? {});
    readonly bodyFont = computed(() => this.sectionStyle().fontFamily || fontStack(this.tokens().bodyFont));
    readonly displayFont = computed(() => this.sectionStyle().fontFamily || fontStack(this.tokens().displayFont));
    readonly effectiveInk = computed(() => this.sectionStyle().color || this.tokens().ink);
    readonly effectiveSurface = computed(() => {
        const bg = this.sectionStyle().backgroundColor;
        return bg && bg !== 'transparent' ? bg : this.tokens().surface;
    });
    readonly effectiveRadiusPx = computed(() => {
        const r = this.sectionStyle().borderRadius;
        return typeof r === 'number' && Number.isFinite(r) ? r : null;
    });
    readonly effectiveTextAlign = computed(() => this.sectionStyle().textAlign || null);
    readonly effectiveFontWeight = computed(() => this.sectionStyle().fontWeight || null);
    readonly effectiveFontStyle = computed(() => this.sectionStyle().fontStyle || null);
    readonly effectiveTextDecoration = computed(() => this.sectionStyle().textDecoration || null);
    readonly effectiveFontSizePx = computed(() => {
        const s = this.sectionStyle().fontSize;
        return typeof s === 'number' && Number.isFinite(s) && s > 0 ? s : null;
    });
    readonly shown = computed(() => (this.enabled() ? this.score() : null));

    translateOrCustom(custom: string | undefined, fallbackKey: string): string {
        return custom?.trim() || this._transloco.translate(fallbackKey);
    }

    startInlineEdit(field: ThemeInlineField, currentValue: string, event: Event): void {
        if (!this.editable()) return;
        event.stopPropagation();
        event.preventDefault();
        this.editingField.set(field);
        this.editingDraft.set(currentValue);
        queueMicrotask(() => {
            const el = document.querySelector<HTMLInputElement>('[data-rt-inline-input]');
            el?.focus();
            el?.select();
        });
    }

    onInlineInput(event: Event): void {
        const target = event.target as HTMLInputElement | null;
        this.editingDraft.set(target?.value ?? '');
    }

    commitInlineEdit(event?: Event): void {
        event?.stopPropagation();
        const field = this.editingField();
        if (!field) return;
        const value = this.editingDraft().trim();
        this.editingField.set(null);
        this.inlineEdit.emit({ sectionId: this.section().id, field, value });
    }

    cancelInlineEdit(event?: Event): void {
        event?.stopPropagation();
        this.editingField.set(null);
    }

    onInlineKeydown(event: KeyboardEvent): void {
        event.stopPropagation();
        if (event.key === 'Enter') {
            event.preventDefault();
            this.commitInlineEdit(event);
        } else if (event.key === 'Escape') {
            event.preventDefault();
            this.cancelInlineEdit(event);
        }
    }

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
        if (score.subjectRows?.length) return score.subjectRows;
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

    headlineLabel(score: VerificationScoreModel): string {
        const t = this.tokens();
        if (score.decision === 'approve' && t.headlineApprove?.trim()) return t.headlineApprove.trim();
        if (score.decision === 'review' && t.headlineReview?.trim()) return t.headlineReview.trim();
        if (score.decision === 'reject' && t.headlineReject?.trim()) return t.headlineReject.trim();
        if (score.headlineText?.trim()) return score.headlineText.trim();
        return this._transloco.translate(this.decisionKey(score.decision));
    }

    eyebrowLabel(score: VerificationScoreModel, fallbackKey: string): string {
        if (this.usesCustomEyebrow()) return this.config().eyebrow;
        if (this.tokens().eyebrow?.trim()) return this.tokens().eyebrow.trim();
        if (score.eyebrowText?.trim()) return score.eyebrowText.trim();
        return this._transloco.translate(fallbackKey);
    }

    coverHeadingLabel(score: VerificationScoreModel): string {
        if (this.usesCustomEyebrow()) return this.config().eyebrow;
        if (this.tokens().coverTitle?.trim()) return this.tokens().coverTitle.trim();
        if (score.coverTitleText?.trim()) return score.coverTitleText.trim();
        return this._transloco.translate('reportTheme.sample.titleDriver');
    }

    summaryLabel(score: VerificationScoreModel): string {
        if (score.summaryText?.trim()) return score.summaryText.trim();
        return this._transloco.translate(this.summaryKey(score.decision));
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

    shortVerdictLabel(decision: string): string {
        const isEn = (this._transloco.getActiveLang() || '').toLowerCase().startsWith('en');
        if (decision === 'approve') return isEn ? 'Approved' : 'Aprobado';
        if (decision === 'reject') return isEn ? 'Rejected' : 'Rechazado';
        return isEn ? 'Manual review' : 'Revisión manual';
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
