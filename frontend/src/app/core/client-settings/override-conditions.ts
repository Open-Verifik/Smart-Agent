export interface OverrideConditionsSnapshot {
    requiresSmartEnrollSubscription?: boolean;
    requiresSmartAccessSubscription?: boolean;
}

export interface ClientSettingsOverrideSnapshot {
    overrideConditions?: OverrideConditionsSnapshot;
}

export const requiresSmartEnrollSubscription = (
    settings?: ClientSettingsOverrideSnapshot | null
): boolean => settings?.overrideConditions?.requiresSmartEnrollSubscription !== false;

export const requiresSmartAccessSubscription = (
    settings?: ClientSettingsOverrideSnapshot | null
): boolean => settings?.overrideConditions?.requiresSmartAccessSubscription !== false;
