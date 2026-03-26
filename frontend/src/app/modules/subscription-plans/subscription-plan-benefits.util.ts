import { ChangesInPrice, SubscriptionPlan } from './subscription-plan.types';

/**
 * apiRequest row with no discount and no positive price is not shown as a "benefit".
 */
export const isMeaningfulPriceChangeRow = (change: ChangesInPrice): boolean => {
    if (!(change.group || change.baseCategory)) {
        return true;
    }
    const key = change.group || change.baseCategory;
    if (key !== 'apiRequest') {
        return true;
    }
    const hasPositiveDiscount =
        change.discount != null && change.discount !== undefined && Number(change.discount) > 0;
    const hasPositivePrice = change.price != null && Number(change.price) > 0;
    return hasPositiveDiscount || hasPositivePrice;
};

/**
 * True if the plan has an apiRequest entry with a positive discount or fixed price benefit.
 */
export const planHasApiRequestDiscount = (plan: SubscriptionPlan | null | undefined): boolean => {
    if (!plan?.changesInPrices?.length) {
        return false;
    }
    return plan.changesInPrices.some(
        (c) =>
            c.group === 'apiRequest' &&
            ((c.discount != null && Number(c.discount) > 0) ||
                (c.price != null && Number(c.price) > 0))
    );
};

/**
 * Another visible plan (not the excluded id) offers API request pricing perks.
 */
export const hasOtherPlanWithApiDiscount = (
    allPlans: SubscriptionPlan[] | null | undefined,
    excludePlanId: string | undefined
): boolean => {
    if (!allPlans?.length || !excludePlanId) {
        return false;
    }
    return allPlans.some((p) => p._id && p._id !== excludePlanId && planHasApiRequestDiscount(p));
};

export type FormattedBenefitRow = {
    key: string;
    value: string | number | null;
};

/**
 * Maps changesInPrices to display rows; skips non-meaningful apiRequest rows.
 */
export const formatBenefitRowsFromChanges = (changes: ChangesInPrice[]): FormattedBenefitRow[] => {
    return (changes || [])
        .map((change): FormattedBenefitRow | null => {
            if (!isMeaningfulPriceChangeRow(change)) {
                return null;
            }
            if (change.group || change.baseCategory) {
                const key = change.group || change.baseCategory || '';
                let value: string | number | null = null;
                if (change.discount !== undefined && change.discount !== null) {
                    value =
                        change.type === 'amount'
                            ? `$${Number(change.discount).toFixed(2)} off`
                            : `${change.discount}% off`;
                } else if (change.price && change.price > 0) {
                    value = `$${change.price}`;
                }
                return { key, value };
            }
            if (change.addOn) {
                const value =
                    change.count !== undefined && change.count !== null
                        ? change.count
                        : change.active
                          ? 'Included'
                          : null;
                return {
                    key: change.addOn,
                    value,
                };
            }
            return null;
        })
        .filter((row): row is FormattedBenefitRow => Boolean(row));
};
