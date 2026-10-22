// src/app/modules/smart-enroll/demos/demo-catalog.ts
var TRADITIONAL_STEP_ORDER = [
  "create-collection",
  "create-person",
  "create-person-with-liveness",
  "update-person",
  "delete-person",
  "search-person",
  "search-live-person",
  "search-active-user",
  "detect-face",
  "search-crops",
  "face-comparison",
  "face-comparison-liveness",
  "verify-face"
];
var TRADITIONAL_SECTIONS = [
  { id: "enroll", demoIds: ["create-collection", "create-person", "create-person-with-liveness"] },
  { id: "manage", demoIds: ["update-person", "delete-person"] },
  { id: "search", demoIds: ["search-person", "search-live-person", "search-active-user"] },
  { id: "detection", demoIds: ["detect-face", "search-crops"] },
  { id: "comparison", demoIds: ["face-comparison", "face-comparison-liveness", "verify-face"] }
];
var HUMAN_AUTHN_DEMO_IDS = [
  "liveness",
  "humanid-create",
  "humanid-create-qr",
  "humanid-decrypt",
  "humanid-preview"
];
var stepIndex = (id) => {
  const i = TRADITIONAL_STEP_ORDER.indexOf(id);
  return i >= 0 ? i + 1 : void 0;
};
var getDemoCatalogEntry = (id) => ({
  id,
  routeSlug: id,
  stepNumber: stepIndex(id)
});
var demoRoute = (id) => `/smart-enroll/demos/${id}`;
var LEGACY_DEMO_REDIRECTS = {
  "face-detection": "detect-face",
  "compare-live": "face-comparison-liveness"
};

export {
  TRADITIONAL_SECTIONS,
  HUMAN_AUTHN_DEMO_IDS,
  getDemoCatalogEntry,
  demoRoute,
  LEGACY_DEMO_REDIRECTS
};
//# sourceMappingURL=chunk-IUBY3Q2J.js.map
