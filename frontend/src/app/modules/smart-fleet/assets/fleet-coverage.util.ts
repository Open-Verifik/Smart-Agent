import { FleetAsset } from '../smart-fleet.service';

/** How close a SOAT or tecnomecánica date is. Due means it expires within 30 days. */
export type CoverageTone = 'valid' | 'due' | 'expired' | 'unknown';

export interface CoverageChip {
    checkType: 'soat' | 'rtm';
    tone: CoverageTone;
    days: number | null;
}

export const COVERAGE_DUE_DAYS = 30;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function coverageOf(expiresAt?: string | null): { tone: CoverageTone; days: number | null } {
    if (!expiresAt) return { tone: 'unknown', days: null };

    const timestamp = new Date(expiresAt).getTime();

    if (Number.isNaN(timestamp)) return { tone: 'unknown', days: null };

    const days = Math.floor((timestamp - Date.now()) / MS_PER_DAY);

    if (days < 0) return { tone: 'expired', days };
    if (days <= COVERAGE_DUE_DAYS) return { tone: 'due', days };

    return { tone: 'valid', days };
}

/** SOAT and tecnomecánica chips. Vehicles with no dates get a single unknown chip. */
export function assetCoverages(asset: FleetAsset): CoverageChip[] {
    const chips = (['soat', 'rtm'] as const).map((checkType) => {
        const expiresAt = asset.lastKnownState?.[checkType]?.expiresAt;

        return { checkType, ...coverageOf(typeof expiresAt === 'string' ? expiresAt : null) };
    });
    const known = chips.filter((chip) => chip.tone !== 'unknown');

    return known.length ? known : [{ checkType: 'soat', tone: 'unknown', days: null }];
}

/** Tailwind classes for one coverage chip. */
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
