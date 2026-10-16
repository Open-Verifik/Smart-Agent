import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-enroll.routes.ts
var smart_enroll_routes_default = [
  { path: "", redirectTo: "smart-scan", pathMatch: "full" },
  {
    path: "smart-scan",
    loadChildren: () => import("./chunk-2RBOBIS6.js").then((m) => m.default)
  },
  {
    path: "plans",
    loadComponent: () => import("./chunk-2OG7J47C.js").then((m) => m.SmartEnrollPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-SJ4UKCRN.js").then((m) => m.default)
  },
  {
    path: "collections",
    loadComponent: () => import("./chunk-AZJON6I3.js").then((m) => m.CollectionsListComponent)
  },
  {
    path: "people",
    loadComponent: () => import("./chunk-NIUXKFUM.js").then((m) => m.PeopleListComponent)
  },
  {
    path: "api",
    loadComponent: () => import("./chunk-UFHL76IN.js").then((m) => m.BiometricsApiComponent)
  },
  {
    path: "usage-history",
    loadComponent: () => import("./chunk-O33OB45G.js").then((m) => m.SmartEnrollUsageHistoryComponent)
  },
  {
    path: "demos",
    loadChildren: () => import("./chunk-ZKTI4722.js").then((m) => m.default)
  }
];
export {
  smart_enroll_routes_default as default
};
//# sourceMappingURL=chunk-7ADP3DCD.js.map
