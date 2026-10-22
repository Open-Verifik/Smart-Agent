// src/app/modules/smart-access/projects/setup/smart-access-setup-draft.util.ts
var EMAIL_GATEWAYS = ["mailgun", "none"];
var PHONE_GATEWAYS = ["sms", "whatsapp", "both", "none"];
var SEARCH_MODES = ["FAST", "ACCURATE"];
var SECURITY_SOURCES = ["API", "CSV", "NONE", "SMART_ENROLL"];
var API_TEST_TYPES = ["email", "phone"];
var progressForDraftLeave = (stepIndex, existingLastStep) => ({
  currentStep: stepIndex,
  lastStep: Math.max(existingLastStep || 0, stepIndex + 1)
});
var progressForValidNavigation = (stepIndex, nextStepIndex, existingLastStep, stepCount) => {
  const existing = existingLastStep || 0;
  const leavingWizard = nextStepIndex === null || Number.isNaN(nextStepIndex);
  if (leavingWizard && stepIndex >= stepCount - 1) {
    return { currentStep: stepCount, lastStep: Math.max(existing, stepCount) };
  }
  if (!leavingWizard) {
    return {
      currentStep: nextStepIndex,
      lastStep: Math.max(existing, stepIndex + 1, nextStepIndex)
    };
  }
  return {
    currentStep: stepIndex,
    lastStep: Math.max(existing, stepIndex + 1)
  };
};
var isIncompleteSmartAccessWizard = (project, stepCount = 4) => {
  const lastStep = Number(project?.lastStep ?? 0);
  const currentStep = Number(project?.currentStep ?? 0);
  return lastStep > 0 && currentStep < stepCount;
};
var resumeStepIndex = (project, stepCount = 4) => {
  const step = Number(project?.currentStep ?? 0);
  if (!Number.isFinite(step) || step < 0)
    return 0;
  return Math.min(Math.floor(step), Math.max(stepCount - 1, 0));
};
var draftProjectName = (name, fallbackLabel) => {
  const trimmed = `${name ?? ""}`.trim();
  if (trimmed)
    return trimmed.slice(0, 60);
  return `${fallbackLabel} ${Date.now().toString(36)}`.slice(0, 60);
};
var isHttpUrl = (value) => {
  const raw = `${value ?? ""}`.trim();
  if (!raw)
    return false;
  try {
    const url = new URL(raw);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};
var asRecord = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : {};
var safeLoginSettings = (raw) => {
  const src = asRecord(raw);
  const emailGateway = EMAIL_GATEWAYS.includes(`${src["emailGateway"]}`) ? src["emailGateway"] : "none";
  const phoneGateway = PHONE_GATEWAYS.includes(`${src["phoneGateway"]}`) ? src["phoneGateway"] : "none";
  const searchMode = SEARCH_MODES.includes(`${src["searchMode"]}`) ? src["searchMode"] : "FAST";
  const settings = {
    allowPasskeys: !!src["allowPasskeys"],
    email: !!src["email"],
    emailGateway,
    faceLiveness: !!src["faceLiveness"],
    phone: !!src["phone"],
    phoneGateway,
    searchMode,
    showFaceLivenessRecommendation: !!src["showFaceLivenessRecommendation"]
  };
  const liveness = Number(src["livenessMinScore"]);
  if (liveness >= 0.51 && liveness <= 0.9)
    settings["livenessMinScore"] = liveness;
  const search = Number(src["searchMinScore"]);
  if (search >= 0.7 && search <= 0.95)
    settings["searchMinScore"] = search;
  return settings;
};
var safeSecurity = (raw) => {
  const src = asRecord(raw);
  if (!Object.keys(src).length)
    return null;
  const sourceRaw = src["source"];
  const source = sourceRaw === null || sourceRaw === void 0 || sourceRaw === "" ? null : `${sourceRaw}`;
  if (source !== null && !SECURITY_SOURCES.includes(source))
    return null;
  const testType = API_TEST_TYPES.includes(`${src["apiTestType"]}`) ? src["apiTestType"] : "email";
  if (source === "API") {
    if (!isHttpUrl(src["apiUrl"]))
      return null;
    if (!`${src["apiTestValue"] ?? ""}`.trim())
      return null;
  }
  const apiUrl = `${src["apiUrl"] ?? ""}`.trim();
  return {
    apiTestType: testType,
    apiTestValue: `${src["apiTestValue"] ?? ""}`,
    apiUrl: source === "API" || !apiUrl || isHttpUrl(apiUrl) ? apiUrl : "",
    source,
    strategy: `${src["strategy"] ?? ""}` === "none" ? "none" : "whitelist"
  };
};
var safeIntegrations = (raw) => {
  const src = asRecord(raw);
  if (!Object.keys(src).length)
    return null;
  const redirect = `${src["redirectUrl"] ?? ""}`.trim();
  if (redirect && !isHttpUrl(redirect))
    return null;
  const webhook = src["webhook"];
  const webhookId = webhook && typeof webhook === "object" ? webhook._id ?? null : webhook ?? null;
  return { redirectUrl: redirect, webhook: webhookId || null };
};
var draftLoginFlow = (rawFlow) => {
  const pf = asRecord(rawFlow);
  const flow = {
    status: "draft",
    type: "login",
    version: Number(pf["version"]) || 3,
    loginSettings: safeLoginSettings(pf["loginSettings"])
  };
  const security = safeSecurity(pf["security"]);
  if (security)
    flow["security"] = security;
  const integrations = safeIntegrations(pf["integrations"]);
  if (integrations)
    flow["integrations"] = integrations;
  return flow;
};
var buildSmartAccessDraftPayload = (raw, progress, fallbackName) => ({
  allowedCountries: Array.isArray(raw["allowedCountries"]) ? raw["allowedCountries"] : [],
  branding: asRecord(raw["branding"]),
  contactEmail: `${raw["contactEmail"] ?? ""}`,
  currentStep: progress.currentStep,
  dataProtection: asRecord(raw["dataProtection"]),
  defaultLanguage: `${raw["defaultLanguage"] || "en"}`,
  lastStep: progress.lastStep,
  name: draftProjectName(raw["name"], fallbackName),
  privacyUrl: `${raw["privacyUrl"] ?? ""}`,
  projectFlow: draftLoginFlow(raw["projectFlow"]),
  projectFlowType: "login",
  status: "draft",
  target: "personal",
  termsAndConditionsUrl: `${raw["termsAndConditionsUrl"] ?? ""}`,
  version: 3
});

export {
  progressForDraftLeave,
  progressForValidNavigation,
  isIncompleteSmartAccessWizard,
  resumeStepIndex,
  draftProjectName,
  buildSmartAccessDraftPayload
};
//# sourceMappingURL=chunk-XMUYQNJV.js.map
