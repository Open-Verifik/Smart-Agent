import {
  flattenStepResultDisplay,
  presentColombiaFasecoldaSinister,
  presentColombiaFasecoldaValues,
  presentColombiaRuntVehicleByPlate,
  presentColombiaSimitAgreements,
  presentColombiaSimitPlate,
  stepDisplayLabelFromSegments
} from "./chunk-4SMGTRRJ.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/step-result-presenters/registry.ts
var isColombiaRuesLikeShape = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return false;
  const o = data;
  return Boolean(o.commercialRegistry && Array.isArray(o.economicActivities));
};
var formatEconomicActivityLine = (item) => {
  if (item === null || item === void 0)
    return "\u2014";
  if (typeof item !== "object" || Array.isArray(item))
    return String(item);
  const e = item;
  const code = e.code ?? e.codigo ?? e.activityCode ?? e.ciiu;
  const rawName = e.name;
  const nameIsCiiuSlot = typeof rawName === "string" && /^ciiu\d*$/i.test(rawName.trim());
  const desc = e.description ?? e.descripcion ?? e.activityDescription ?? e.text ?? (nameIsCiiuSlot ? void 0 : rawName);
  const c = code != null ? String(code).trim() : "";
  const d = desc != null ? String(desc).trim() : "";
  if (c && d)
    return `${c} \u2014 ${d}`;
  if (c || d)
    return c || d;
  if (nameIsCiiuSlot)
    return "\u2014";
  return "\u2014";
};
var presentColombiaRues = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return null;
  const o = data;
  const economicActivities = o.economicActivities;
  if (!Array.isArray(economicActivities) || economicActivities.length === 0)
    return null;
  const rest = __spreadValues({}, o);
  delete rest.economicActivities;
  const base = flattenStepResultDisplay(rest);
  const activityRows = economicActivities.map((ea, i) => ({
    label: stepDisplayLabelFromSegments(["economicActivities", String(i + 1)]),
    value: formatEconomicActivityLine(ea)
  }));
  return [...base, ...activityRows];
};
var PRESENTERS_BY_CODE = {
  colombia_api_rues: presentColombiaRues,
  colombia_api_rues_full: presentColombiaRues,
  colombia_api_rues_v3: presentColombiaRues,
  colombia_api_rues_full_v3: presentColombiaRues,
  colombia_api_vehicle_complete_by_plate: presentColombiaRuntVehicleByPlate,
  colombia_api_simit_plate: presentColombiaSimitPlate,
  colombia_api_simit_agreements: presentColombiaSimitAgreements,
  colombia_api_vehicle_sinister_fasecolda_by_plate: presentColombiaFasecoldaSinister,
  colombia_api_vehicle_valores_fasecolda_by_plate: presentColombiaFasecoldaValues
};
var getStepDisplayFields = (ctx, data) => {
  const code = ctx.featureCode?.trim() ?? "";
  let presented = null;
  if (code && PRESENTERS_BY_CODE[code]) {
    presented = PRESENTERS_BY_CODE[code](data);
  } else if (!code && isColombiaRuesLikeShape(data)) {
    presented = presentColombiaRues(data);
  }
  if (presented && presented.length > 0) {
    return presented;
  }
  return flattenStepResultDisplay(data);
};

export {
  getStepDisplayFields
};
//# sourceMappingURL=chunk-3VMX27KY.js.map
