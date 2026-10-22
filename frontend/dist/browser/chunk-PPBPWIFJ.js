import {
  canonicalChainField,
  canonicalParamFilterId,
  collectRequiredParamFields,
  featureGroup,
  humanizeParamField,
  paramFieldLabelKey,
  seedParamFieldsForFeatures
} from "./chunk-N3CEHZSA.js";
import {
  isWorldCountry,
  normalizeCountryName
} from "./chunk-YR6ZLJHC.js";
import {
  mergeEnumValues
} from "./chunk-T3ZUDNVS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/visita-guide/visita-guide.catalog.ts
var GUIDE_COUNTRIES = [
  { iso: "ar", name: "Argentina", available: true },
  { iso: "bo", name: "Bolivia", available: true },
  { iso: "br", name: "Brazil", available: true },
  { iso: "ca", name: "Canada", available: true },
  { iso: "cl", name: "Chile", available: true },
  { iso: "co", name: "Colombia", available: true },
  { iso: "cr", name: "Costa Rica", available: true },
  { iso: "do", name: "Dominican Republic", available: true },
  { iso: "ec", name: "Ecuador", available: true },
  { iso: "sv", name: "El Salvador", available: true },
  { iso: "gt", name: "Guatemala", available: true },
  { iso: "hn", name: "Honduras", available: true },
  { iso: "in", name: "India", available: true },
  { iso: "mx", name: "Mexico", available: true },
  { iso: "pa", name: "Panama", available: true },
  { iso: "py", name: "Paraguay", available: true },
  { iso: "pe", name: "Peru", available: true },
  { iso: "es", name: "Spain", available: true },
  { iso: "us", name: "United States", available: true },
  { iso: "uy", name: "Uruguay", available: true },
  { iso: "ve", name: "Venezuela", available: true }
];
var countryNameForIso = (iso) => {
  const raw = (iso ?? "").trim();
  const key = raw.toLowerCase();
  if (!key)
    return "";
  return GUIDE_COUNTRIES.find((country) => country.iso === key)?.name ?? normalizeCountryName(raw);
};
var countriesFromEndpointFeatures = (features) => {
  const catalog = new Map(availableCountries().map((country) => [country.name.toLowerCase(), country]));
  const byName = /* @__PURE__ */ new Map();
  for (const feature of features) {
    if (isWorldCountry(feature.country))
      continue;
    const name = normalizeCountryName(feature.country);
    if (!name || isWorldCountry(name))
      continue;
    const key = name.toLowerCase();
    if (byName.has(key))
      continue;
    byName.set(key, catalog.get(key) ?? {
      iso: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name,
      available: true
    });
  }
  return [...byName.values()].sort((left, right) => left.name.localeCompare(right.name));
};
var GUIDE_INTENTS = [
  {
    id: "report",
    icon: "description",
    titleKey: "visitaGuide.intentReport",
    descKey: "visitaGuide.intentReportDesc"
  },
  {
    id: "person",
    icon: "person_search",
    titleKey: "visitaGuide.intentPerson",
    descKey: "visitaGuide.intentPersonDesc",
    entity: "citizen"
  },
  {
    id: "vehicle",
    icon: "directions_car",
    titleKey: "visitaGuide.intentVehicle",
    descKey: "visitaGuide.intentVehicleDesc",
    entity: "vehicle"
  },
  {
    id: "company",
    icon: "business",
    titleKey: "visitaGuide.intentCompany",
    descKey: "visitaGuide.intentCompanyDesc",
    entity: "company"
  },
  {
    id: "template",
    icon: "dashboard_customize",
    titleKey: "visitaGuide.intentTemplate",
    descKey: "visitaGuide.intentTemplateDesc"
  },
  {
    id: "other",
    icon: "tune",
    titleKey: "visitaGuide.intentOther",
    descKey: "visitaGuide.intentOtherDesc"
  }
];
var GUIDE_ENTITIES = [
  {
    id: "citizen",
    icon: "person_search",
    titleKey: "visitaGuide.entityPerson",
    descKey: "visitaGuide.entityPersonDesc"
  },
  {
    id: "vehicle",
    icon: "directions_car",
    titleKey: "visitaGuide.entityVehicle",
    descKey: "visitaGuide.entityVehicleDesc"
  },
  {
    id: "company",
    icon: "business",
    titleKey: "visitaGuide.entityCompany",
    descKey: "visitaGuide.entityCompanyDesc"
  }
];
var availableCountries = () => GUIDE_COUNTRIES.filter((country) => country.available);
var intentEntity = (intent) => {
  if (intent === "person")
    return "citizen";
  if (intent === "vehicle")
    return "vehicle";
  if (intent === "company")
    return "company";
  return null;
};
var defaultSystemKey = (entity, iso) => `${iso.toLowerCase()}.${entity}.comprehensive`;
var DEFAULT_DOCUMENT_TYPES = ["CC", "CE", "NIT", "PA", "PEP", "PPT", "RC", "TI"];
var FIELD_ORDER = [
  "documentType",
  "citizenDocumentType",
  "companyDocumentType",
  "documentNumber",
  "citizenDocumentNumber",
  "companyDocumentNumber",
  "plate",
  "dateOfBirth",
  "fechaExpedicion",
  "expirationDate",
  "fullName"
];
var rowKeyForParam = (canonical, feature, mixedCitizenCompany, entities) => {
  if (!mixedCitizenCompany || canonical !== "documentType" && canonical !== "documentNumber") {
    return canonical;
  }
  const group = featureGroup(feature);
  const useCompany = group === "company" || group === "vehicle" && !entities.includes("citizen") && entities.includes("company");
  if (useCompany) {
    return canonical === "documentType" ? "companyDocumentType" : "companyDocumentNumber";
  }
  return canonical === "documentType" ? "citizenDocumentType" : "citizenDocumentNumber";
};
var enumsForCanonical = (feature, canonical) => {
  const values = (feature.dependencies ?? []).filter((dep) => dep.field && canonicalParamFilterId(dep.field) === canonical).flatMap((dep) => dep.enum ?? []);
  return mergeEnumValues(void 0, values);
};
var labelForInputKey = (key, canonical) => {
  if (key === "citizenDocumentNumber")
    return { labelKey: "visitaGuide.idCedula" };
  if (key === "companyDocumentNumber")
    return { labelKey: "visitaGuide.idNit" };
  const labelKey = paramFieldLabelKey(canonical);
  if (labelKey === "visitaGuide.paramFieldOther") {
    return { labelKey, labelText: humanizeParamField(canonical) };
  }
  return { labelKey };
};
var toGuideInputField = (key, canonical, required, options) => {
  const { labelKey, labelText } = labelForInputKey(key, canonical);
  const select = canonical === "documentType" || Boolean(options?.length);
  let placeholderKey = "visitaGuide.inputValuePlaceholder";
  if (select)
    placeholderKey = "visitaGuide.paramFieldSelectPlaceholder";
  else if (canonical === "documentNumber")
    placeholderKey = "visitaGuide.idCedulaPlaceholder";
  else if (canonical === "plate")
    placeholderKey = "visitaGuide.idPlatePlaceholder";
  return {
    key,
    labelKey,
    labelText,
    placeholderKey,
    required,
    options: select ? options?.length ? options : DEFAULT_DOCUMENT_TYPES : void 0
  };
};
var inputFieldsFromFeatures = (entities, features, seedOverride) => {
  const mixedCitizenCompany = entities.includes("citizen") && entities.includes("company");
  const usingOverride = seedOverride !== void 0;
  const seedFields = usingOverride ? seedOverride : seedParamFieldsForFeatures(features);
  const byKey = /* @__PURE__ */ new Map();
  for (const canonical of seedFields) {
    const owners = features.filter((feature2) => collectRequiredParamFields([feature2]).some((field) => canonicalChainField(field) === canonical));
    const feature = owners[0] ?? features[0];
    const key = rowKeyForParam(canonical, feature, mixedCitizenCompany, entities);
    let options;
    for (const owner of owners.length ? owners : [feature]) {
      options = mergeEnumValues(options, enumsForCanonical(owner, canonical));
    }
    byKey.set(key, { canonical, required: true, options });
  }
  const fields = [...byKey.entries()].map(([key, meta]) => toGuideInputField(key, meta.canonical, meta.required, meta.options)).sort((left, right) => {
    const leftRank = FIELD_ORDER.indexOf(left.key);
    const rightRank = FIELD_ORDER.indexOf(right.key);
    if (leftRank === -1 && rightRank === -1)
      return left.key.localeCompare(right.key);
    if (leftRank === -1)
      return 1;
    if (rightRank === -1)
      return -1;
    return leftRank - rightRank;
  });
  return fields.length || usingOverride ? fields : inputFieldsFromEntities(entities);
};
var inputFieldsFromEntities = (entities) => {
  const selected = new Set(entities);
  const mixedCitizenCompany = selected.has("citizen") && selected.has("company");
  const fields = [];
  if (selected.has("citizen")) {
    const typeKey = mixedCitizenCompany ? "citizenDocumentType" : "documentType";
    const numberKey = mixedCitizenCompany ? "citizenDocumentNumber" : "documentNumber";
    fields.push(toGuideInputField(typeKey, "documentType", true, DEFAULT_DOCUMENT_TYPES));
    fields.push(__spreadProps(__spreadValues({}, toGuideInputField(numberKey, "documentNumber", true)), {
      labelKey: "visitaGuide.idCedula",
      placeholderKey: "visitaGuide.idCedulaPlaceholder"
    }));
  }
  if (selected.has("company")) {
    const typeKey = mixedCitizenCompany ? "companyDocumentType" : "documentType";
    const numberKey = mixedCitizenCompany ? "companyDocumentNumber" : "documentNumber";
    fields.push(toGuideInputField(typeKey, "documentType", true, DEFAULT_DOCUMENT_TYPES));
    fields.push(__spreadProps(__spreadValues({}, toGuideInputField(numberKey, "documentNumber", true)), {
      labelKey: "visitaGuide.idNit",
      placeholderKey: "visitaGuide.idNitPlaceholder"
    }));
  }
  if (selected.has("vehicle")) {
    fields.push(toGuideInputField("plate", "plate", true));
    if (!selected.has("citizen") && !selected.has("company")) {
      fields.push(toGuideInputField("documentType", "documentType", false, DEFAULT_DOCUMENT_TYPES));
      fields.push(__spreadProps(__spreadValues({}, toGuideInputField("documentNumber", "documentNumber", false)), {
        labelKey: "visitaGuide.idOwnerOptional",
        placeholderKey: "visitaGuide.idOwnerPlaceholder"
      }));
    }
  }
  return fields;
};
var inputFieldsFor = (entities, iso, features = [], seedOverride) => {
  if (iso.toLowerCase() !== "co")
    return [];
  if (features.length)
    return inputFieldsFromFeatures(entities, features, seedOverride);
  return inputFieldsFromEntities(entities);
};
var buildInputRow = (entities, iso, values, features = [], seedOverride) => {
  const row = {};
  for (const field of inputFieldsFor(entities, iso, features, seedOverride)) {
    const value = (values[field.key] ?? "").trim();
    if (!value)
      continue;
    row[field.key] = value;
  }
  return row;
};
var pipelineName = (entities) => {
  const labels = {
    citizen: "Persona",
    vehicle: "Veh\xEDculo",
    company: "Empresa"
  };
  return `VISITA \u2014 ${entities.map((entity) => labels[entity]).join(" + ")}`;
};
var STEP_TITLE_KEYS = {
  intent: "visitaGuide.stepIntent",
  entity: "visitaGuide.stepEntity",
  country: "visitaGuide.stepCountry",
  mode: "visitaGuide.stepMode",
  endpoints: "visitaGuide.stepEndpoints",
  input: "visitaGuide.stepInput",
  consult: "visitaGuide.stepConsult",
  results: "visitaGuide.stepResults",
  layout: "visitaGuide.stepLayout",
  include: "visitaGuide.stepInclude",
  template: "visitaGuide.stepTemplate",
  customize: "visitaGuide.stepCustomize",
  preview: "visitaGuide.stepPreview",
  generate: "visitaGuide.stepGenerate"
};

export {
  GUIDE_COUNTRIES,
  countryNameForIso,
  countriesFromEndpointFeatures,
  GUIDE_INTENTS,
  GUIDE_ENTITIES,
  availableCountries,
  intentEntity,
  defaultSystemKey,
  inputFieldsFor,
  buildInputRow,
  pipelineName,
  STEP_TITLE_KEYS
};
//# sourceMappingURL=chunk-PPBPWIFJ.js.map
