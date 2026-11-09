import type { ScoreDisplayFormat, ScoreDecision, VerificationCategory } from './report-theme.model';

/** 90–100 approve, 70–89 review, 0–69 reject. The value is always 0–1. */
export const decisionForScore = (value: number): ScoreDecision => {
    const points = value * 100;
    if (points >= 90) return 'approve';
    if (points >= 70) return 'review';
    return 'reject';
};

/**
 * Similarity or other ratio in `[0, 1]` as a whole-number percent.
 * `0.93` is a passing face match and becomes `93%`.
 * A value already on a 0–100 scale must not be passed here: it would be clamped to `100%`.
 * This is not a distance. Do not print `1 - ratio` (that would show a passing 0.93 match as 7%).
 */
export const formatRatioPercent = (ratio: number): string => {
    if (!Number.isFinite(ratio)) return '0%';
    const clamped = Math.max(0, Math.min(1, ratio));
    return `${Math.round(clamped * 100)}%`;
};

export const formatScore = (value: number, format: ScoreDisplayFormat): string => {
    if (!Number.isFinite(value)) return format === 'unit' ? '0.00' : '0';
    const clamped = Math.max(0, Math.min(1, value));
    if (format === 'unit') return clamped.toFixed(2);
    return `${Math.round(clamped * 100)}%`;
};

export const formatScaleMax = (format: ScoreDisplayFormat): string => (format === 'unit' ? '1' : '100');

export const formatWeight = (weight: number): string => `${Math.round(weight * 100)}%`;

export const formatDeduction = (deduction: number, format: ScoreDisplayFormat): string => {
    if (format === 'unit') return `−${deduction.toFixed(2)}`;
    const points = deduction * 100;
    const digits = Math.abs(points - Math.round(points)) < 0.05 ? String(Math.round(points)) : points.toFixed(1);
    return `−${digits}%`;
};

/** Category share of a 0–1 bar: score × weight. */
export const categoryShare = (category: Pick<VerificationCategory, 'score' | 'weight'>): number =>
    Math.max(0, category.score) * Math.max(0, category.weight);

export interface RadarPoint {
    x: number;
    y: number;
}

const axisAngle = (index: number, count: number): number => -Math.PI / 2 + (index * 2 * Math.PI) / count;

export const radarPoint = (index: number, count: number, score: number, cx: number, cy: number, radius: number): RadarPoint => {
    const angle = axisAngle(index, count);
    const reach = radius * Math.max(0, Math.min(1, score));
    return {
        x: cx + reach * Math.cos(angle),
        y: cy + reach * Math.sin(angle),
    };
};

export const radarPolygon = (scores: number[], cx: number, cy: number, radius: number): string =>
    scores
        .map((score, index) => {
            const point = radarPoint(index, scores.length, score, cx, cy, radius);
            return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
        })
        .join(' ');

export const radarLabelPoint = (index: number, count: number, cx: number, cy: number, radius: number): RadarPoint =>
    radarPoint(index, count, 1, cx, cy, radius);
