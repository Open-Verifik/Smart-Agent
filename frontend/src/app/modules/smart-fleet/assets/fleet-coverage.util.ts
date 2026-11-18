import { FleetAsset, FleetAssetState } from '../smart-fleet.service';

/** Compliance chip tone: valid (clear), due (<=30d or active fines), expired (critical), or unknown. */
export type CoverageTone = 'valid' | 'due' | 'expired' | 'unknown';

export type CoverageCheckType = 'soat' | 'rtm' | 'comparendos' | 'driver_license' | 'driver_fines';

export interface CoverageChip {
    checkType: CoverageCheckType;
    tone: CoverageTone;
    days: number | null;
    count?: number | null;
    totalAmount?: number | null;
    status?: string | null;
}

export const COVERAGE_DUE_DAYS = 30;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const CRITICAL_STATUSES = new Set([
    'VENCIDO',
    'VENCIDA',
    'NO VIGENTE',
    'SUSPENDIDA',
    'CANCELADA',
    'INACTIVA',
    'RECHAZADA',
]);

export function coverageOf(expiresAt?: string | null): { tone: CoverageTone; days: number | null } {
    if (!expiresAt) return { tone: 'unknown', days: null };

    const timestamp = new Date(expiresAt).getTime();

    if (Number.isNaN(timestamp)) return { tone: 'unknown', days: null };

    const days = Math.floor((timestamp - Date.now()) / MS_PER_DAY);

    if (days < 0) return { tone: 'expired', days };
    if (days <= COVERAGE_DUE_DAYS) return { tone: 'due', days };

    return { tone: 'valid', days };
}

function thresholdChip(
    checkType: 'soat' | 'rtm' | 'driver_license',
    state: FleetAssetState | undefined
): CoverageChip {
    const expiresAt = typeof state?.expiresAt === 'string' ? state.expiresAt : null;
    const status = typeof state?.status === 'string' ? state.status.trim().toUpperCase() || null : null;
    const base = coverageOf(expiresAt);
    const tone: CoverageTone =
        status && CRITICAL_STATUSES.has(status) ? 'expired' : base.tone;

    return { checkType, tone, days: base.days, status };
}

function finesChip(
    checkType: 'comparendos' | 'driver_fines',
    state: FleetAssetState | undefined
): CoverageChip {
    if (
        !state ||
        (typeof state.count !== 'number' &&
            typeof state.checkedAt !== 'string' &&
            state['clear'] === undefined)
    ) {
        return { checkType, tone: 'unknown', days: null };
    }

    const count = typeof state.count === 'number' ? state.count : 0;
    const rawAmount = state['totalAmount'] ?? state.total;
    const totalAmount = typeof rawAmount === 'number' ? rawAmount : null;
    const tone: CoverageTone = count > 0 ? 'due' : 'valid';

    return { checkType, tone, days: null, count, totalAmount };
}

/**
 * Compliance chips for vehicles (`soat`, `rtm`, `comparendos`) or drivers (`driver_license`, `driver_fines`).
 * Assets with no evaluated checks get a single unknown chip (`-` fallback for missing fields).
 */
export function assetCoverages(asset: FleetAsset): CoverageChip[] {
    const state = asset.lastKnownState ?? {};

    if (asset.type === 'driver') {
        const chips = [
            thresholdChip('driver_license', state['driver_license']),
            finesChip('driver_fines', state['driver_fines']),
        ];
        const known = chips.filter((chip) => chip.tone !== 'unknown');

        return known.length ? known : [{ checkType: 'driver_license', tone: 'unknown', days: null }];
    }

    const chips = [
        thresholdChip('soat', state['soat']),
        thresholdChip('rtm', state['rtm']),
        finesChip('comparendos', state['comparendos']),
    ];
    const known = chips.filter((chip) => chip.tone !== 'unknown');

    return known.length ? known : [{ checkType: 'soat', tone: 'unknown', days: null }];
}

/** Semantic Tailwind classes for one coverage chip (emerald / amber / red / stone). */
export function coverageChipClasses(tone: CoverageTone): string {
    switch (tone) {
        case 'expired':
            return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
        case 'due':
            return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
        case 'valid':
            return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
        default:
            return 'bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-400';
    }
}

/** Safe display fallback using regular hyphen instead of em-dash. */
export function coverageFallback(value?: string | null): string {
    return value && value.trim() ? value.trim() : '-';
}
