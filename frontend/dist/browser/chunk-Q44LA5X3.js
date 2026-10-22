// src/app/modules/settings/utils/settings-business-user.util.ts
var getVerifikAccount = () => {
  try {
    const raw = localStorage.getItem("verifik_account");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};
var getBusinessUserClientId = (user) => {
  const verifikAccount = getVerifikAccount();
  if (verifikAccount?._id) {
    return verifikAccount._id;
  }
  const rec = user;
  return rec?.["_id"];
};
var getSettingsUser = (fallbackUser) => {
  const verifikAccount = getVerifikAccount();
  if (verifikAccount?._id) {
    return verifikAccount;
  }
  return fallbackUser ?? null;
};

// src/app/core/client-settings/staff-seat-limit.ts
var STAFF_BONUS_FOR_SMART_ACCESS_OR_ENROLL = 5;
var getPlanStaffSeatLimit = (client) => {
  const clientSub = client?.clientSubscriptionPlan;
  const subPlan = clientSub?.subscriptionPlan;
  const smartCheckEligible = Boolean(clientSub && subPlan && clientSub.active !== false);
  let chairCount = 0;
  if (smartCheckEligible && subPlan?.changesInPrices) {
    const chairs = subPlan.changesInPrices.find((change) => change.addOn === "chairs");
    chairCount = Number(chairs?.count) || 0;
  }
  const accessActive = client?.smartAccessPlan?.status === "active";
  const enrollActive = client?.smartEnrollPlan?.status === "active";
  const accessEnrollBonus = accessActive || enrollActive ? STAFF_BONUS_FOR_SMART_ACCESS_OR_ENROLL : 0;
  const eligible = smartCheckEligible || accessActive || enrollActive;
  const seatLimit = chairCount + accessEnrollBonus;
  return { eligible, seatLimit };
};
var parseStaffSeatLimitOverride = (settings) => {
  const rawValue = settings?.overrideConditions?.staffSeatLimit;
  if (rawValue === null || rawValue === void 0) {
    return null;
  }
  const parsedValue = Number(rawValue);
  if (!Number.isFinite(parsedValue) || parsedValue < 0) {
    return null;
  }
  return Math.floor(parsedValue);
};
var resolveStaffSeatLimit = (client, settings) => {
  const { eligible: planEligible, seatLimit: planLimit } = getPlanStaffSeatLimit(client);
  const overrideLimit = parseStaffSeatLimitOverride(settings);
  const seatLimit = Math.max(planLimit, overrideLimit ?? 0);
  const eligible = planEligible || overrideLimit !== null && overrideLimit > 0;
  return { eligible, seatLimit, planLimit, overrideLimit };
};

export {
  getVerifikAccount,
  getBusinessUserClientId,
  getSettingsUser,
  resolveStaffSeatLimit
};
//# sourceMappingURL=chunk-Q44LA5X3.js.map
