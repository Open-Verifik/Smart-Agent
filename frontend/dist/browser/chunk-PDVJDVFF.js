import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-enroll.routes.ts
var smart_enroll_routes_default = [
  { path: "", redirectTo: "smart-scan", pathMatch: "full" },
  {
    path: "smart-scan",
    loadChildren: () => import("./chunk-RB3GBXFE.js").then((m) => m.default)
  },
  {
    path: "plans",
    loadComponent: () => import("./chunk-DRFHGDCX.js").then((m) => m.SmartEnrollPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-YAIXJ3ZP.js").then((m) => m.default)
  },
  {
    path: "collections",
    loadComponent: () => import("./chunk-4JXOHIFW.js").then((m) => m.CollectionsListComponent)
  },
  {
    path: "people",
    loadComponent: () => import("./chunk-3HOD4PJP.js").then((m) => m.PeopleListComponent)
  },
  {
    path: "api",
    loadComponent: () => import("./chunk-RUF2NUIT.js").then((m) => m.BiometricsApiComponent)
  },
  {
    path: "usage-history",
    loadComponent: () => import("./chunk-JKBVSJBC.js").then((m) => m.SmartEnrollUsageHistoryComponent)
  },
  {
    path: "demos",
    loadChildren: () => import("./chunk-BSGVJ5L3.js").then((m) => m.default)
  }
];
export {
  smart_enroll_routes_default as default
};
//# sourceMappingURL=chunk-PDVJDVFF.js.map
