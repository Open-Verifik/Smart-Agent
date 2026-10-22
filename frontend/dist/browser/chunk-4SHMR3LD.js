// src/app/core/client-settings/override-conditions.ts
var requiresSmartEnrollSubscription = (settings) => settings?.overrideConditions?.requiresSmartEnrollSubscription !== false;
var requiresSmartAccessSubscription = (settings) => settings?.overrideConditions?.requiresSmartAccessSubscription !== false;
var requiresHumanAuthnSubscription = (settings) => settings?.overrideConditions?.requiresHumanAuthnSubscription !== false;

export {
  requiresSmartEnrollSubscription,
  requiresSmartAccessSubscription,
  requiresHumanAuthnSubscription
};
//# sourceMappingURL=chunk-4SHMR3LD.js.map
