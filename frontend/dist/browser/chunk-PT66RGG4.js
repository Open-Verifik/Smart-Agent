import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-enroll.routes.ts
var smart_enroll_routes_default = [
  { path: "", redirectTo: "smart-scan", pathMatch: "full" },
  {
    path: "smart-scan",
    loadChildren: () => import("./chunk-MVTLQPG6.js").then((m) => m.default)
  },
  {
    path: "plans",
    loadComponent: () => import("./chunk-Q4JDWVOJ.js").then((m) => m.SmartEnrollPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-KE5UPW4N.js").then((m) => m.default)
  },
  {
    path: "collections",
    loadComponent: () => import("./chunk-Q4I4T6ZY.js").then((m) => m.CollectionsListComponent)
  },
  {
    path: "people",
    loadComponent: () => import("./chunk-5OIJRPWP.js").then((m) => m.PeopleListComponent)
  },
  {
    path: "api",
    loadComponent: () => import("./chunk-2XXQALZ3.js").then((m) => m.BiometricsApiComponent)
  },
  {
    path: "usage-history",
    loadComponent: () => import("./chunk-HGHOQBI4.js").then((m) => m.SmartEnrollUsageHistoryComponent)
  },
  {
    path: "demos",
    loadChildren: () => import("./chunk-KA66DIBK.js").then((m) => m.default)
  }
];
export {
  smart_enroll_routes_default as default
};
//# sourceMappingURL=chunk-PT66RGG4.js.map
