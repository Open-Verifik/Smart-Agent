import type { ClientSettingsOverrideSnapshot } from './override-conditions';

const STAFF_BONUS_FOR_SMART_ACCESS_OR_ENROLL = 5;

export interface StaffSeatLimitSnapshot {
    eligible: boolean;
    seatLimit: number;
    planLimit: number;
    overrideLimit: number | null;
}

export interface StaffSeatLimitClientSnapshot {
    clientSubscriptionPlan?: {
        active?: boolean;
        subscriptionPlan?: {
            changesInPrices?: Array<{ addOn?: string; count?: number }>;
        };
    } | null;
    smartAccessPlan?: { status?: string } | null;
    smartEnrollPlan?: { status?: string } | null;
}

export const getPlanStaffSeatLimit = (
    client?: StaffSeatLimitClientSnapshot | null
): { eligible: boolean; seatLimit: number } => {
    const clientSub = client?.clientSubscriptionPlan;
    const subPlan = clientSub?.subscriptionPlan;
    const smartCheckEligible = Boolean(clientSub && subPlan && clientSub.active !== false);

    let chairCount = 0;

    if (smartCheckEligible && subPlan?.changesInPrices) {
        const chairs = subPlan.changesInPrices.find((change) => change.addOn === 'chairs');
        chairCount = Number(chairs?.count) || 0;
    }

    const accessActive = client?.smartAccessPlan?.status === 'active';
    const enrollActive = client?.smartEnrollPlan?.status === 'active';
    const accessEnrollBonus =
        accessActive || enrollActive ? STAFF_BONUS_FOR_SMART_ACCESS_OR_ENROLL : 0;

    const eligible = smartCheckEligible || accessActive || enrollActive;
    const seatLimit = chairCount + accessEnrollBonus;

    return { eligible, seatLimit };
};

export const parseStaffSeatLimitOverride = (
    settings?: ClientSettingsOverrideSnapshot | null
): number | null => {
    const rawValue = settings?.overrideConditions?.staffSeatLimit;

    if (rawValue === null || rawValue === undefined) {
        return null;
    }

    const parsedValue = Number(rawValue);

    if (!Number.isFinite(parsedValue) || parsedValue < 0) {
        return null;
    }

    return Math.floor(parsedValue);
};

export const resolveStaffSeatLimit = (
    client?: StaffSeatLimitClientSnapshot | null,
    settings?: ClientSettingsOverrideSnapshot | null
): StaffSeatLimitSnapshot => {
    const { eligible: planEligible, seatLimit: planLimit } = getPlanStaffSeatLimit(client);
    const overrideLimit = parseStaffSeatLimitOverride(settings);
    const seatLimit = Math.max(planLimit, overrideLimit ?? 0);
    const eligible = planEligible || (overrideLimit !== null && overrideLimit > 0);

    return { eligible, seatLimit, planLimit, overrideLimit };
};
