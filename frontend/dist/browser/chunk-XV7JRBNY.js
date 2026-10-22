import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/postman/postman-billing.util.ts
var DYNAMIC_QUERY_PREMIUM = "dynamic_query_premium";
var COLOMBIA_CEDULA_CODE = "colombia_api_identity_lookup";
var COLOMBIA_CEDULA_PREMIUM_CODE = "colombia_api_identity_lookup_premium";
var COLOMBIA_CEDULA_SLA_URL = "https://docs.verifik.co/legal/service-level-agreement#viii-dynamic-query-for-smartcheck-service";
var parseNumeric = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};
var isColombiaCedulaEndpoint = (endpoint) => endpoint?.code === COLOMBIA_CEDULA_CODE;
var isDynamicQueryPremiumAdjustment = (request) => {
  if (!request) {
    return false;
  }
  if (request.billingAdjustmentType === DYNAMIC_QUERY_PREMIUM) {
    return true;
  }
  const standardCost = parseNumeric(request.billingStandardCost);
  const chargedCost = parseNumeric(request.cost);
  return request.code === COLOMBIA_CEDULA_PREMIUM_CODE && standardCost != null && chargedCost != null && chargedCost > standardCost;
};
var attachColombiaCedulaPremiumPricing = (endpoints, featureList) => {
  const premiumFeature = featureList.find((feature) => feature.code === COLOMBIA_CEDULA_PREMIUM_CODE);
  const premiumPrice = parseNumeric(premiumFeature?.price);
  if (premiumPrice == null) {
    return endpoints;
  }
  return endpoints.map((endpoint) => {
    if (endpoint.code !== COLOMBIA_CEDULA_CODE) {
      return endpoint;
    }
    return __spreadProps(__spreadValues({}, endpoint), {
      estimatedPremiumCost: premiumPrice,
      dynamicQueryPricing: { premiumFeatureCode: COLOMBIA_CEDULA_PREMIUM_CODE }
    });
  });
};
var hasDynamicQueryPriceRange = (endpoint) => {
  if (!isColombiaCedulaEndpoint(endpoint)) {
    return false;
  }
  const standard = parseNumeric(endpoint?.estimatedCost);
  const premium = parseNumeric(endpoint?.estimatedPremiumCost);
  return standard != null && premium != null && premium > standard;
};
var parseBillingFromResponse = (body) => {
  if (!body || typeof body !== "object") {
    return null;
  }
  const root = body;
  const billingRaw = root["billing"];
  const billing = billingRaw && typeof billingRaw === "object" ? billingRaw : null;
  const creditsCharged = parseNumeric(root["creditsCharged"]);
  const featureCode = typeof root["featureCode"] === "string" ? root["featureCode"] : null;
  if (!billing?.dynamicQueryApplied && creditsCharged == null && !featureCode) {
    return null;
  }
  return {
    billing,
    creditsCharged,
    featureCode
  };
};
var formatCreditsForDisplay = (value) => {
  const numeric = parseNumeric(value);
  if (numeric == null) {
    return "-";
  }
  if (Number.isInteger(numeric)) {
    return String(numeric);
  }
  return parseFloat(numeric.toFixed(6)).toString();
};
var formatHistoryCostCredits = (value) => {
  const numeric = parseNumeric(value);
  if (numeric == null) {
    return "-";
  }
  return numeric.toLocaleString(void 0, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  });
};
var getHistoryBillingTooltipParams = (request) => {
  if (!isDynamicQueryPremiumAdjustment(request)) {
    return null;
  }
  const standard = formatHistoryCostCredits(request.billingStandardCost);
  const charged = formatHistoryCostCredits(request.cost);
  return { standard, charged };
};

export {
  COLOMBIA_CEDULA_SLA_URL,
  isDynamicQueryPremiumAdjustment,
  attachColombiaCedulaPremiumPricing,
  hasDynamicQueryPriceRange,
  parseBillingFromResponse,
  formatCreditsForDisplay,
  formatHistoryCostCredits,
  getHistoryBillingTooltipParams
};
//# sourceMappingURL=chunk-XV7JRBNY.js.map
