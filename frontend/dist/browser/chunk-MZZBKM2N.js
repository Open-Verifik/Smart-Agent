import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-enroll.routes.ts
var smart_enroll_routes_default = [
  { path: "", redirectTo: "smart-scan", pathMatch: "full" },
  {
    path: "smart-scan",
    loadChildren: () => import("./chunk-NZE3PRPB.js").then((m) => m.default)
  },
  {
    path: "plans",
    loadComponent: () => import("./chunk-TTPBJRGZ.js").then((m) => m.SmartEnrollPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-DCBRMVQD.js").then((m) => m.default)
  },
  {
    path: "collections",
    loadComponent: () => import("./chunk-HOKFKUMS.js").then((m) => m.CollectionsListComponent)
  },
  {
    path: "people",
    loadComponent: () => import("./chunk-JHFQN532.js").then((m) => m.PeopleListComponent)
  },
  {
    path: "api",
    loadComponent: () => import("./chunk-QCZU4KFS.js").then((m) => m.BiometricsApiComponent)
  },
  {
    path: "usage-history",
    loadComponent: () => import("./chunk-SSA5HAWO.js").then((m) => m.SmartEnrollUsageHistoryComponent)
  },
  {
    path: "demos",
    loadChildren: () => import("./chunk-N2MINK4Y.js").then((m) => m.default)
  }
];
export {
  smart_enroll_routes_default as default
};
//# sourceMappingURL=chunk-MZZBKM2N.js.map
