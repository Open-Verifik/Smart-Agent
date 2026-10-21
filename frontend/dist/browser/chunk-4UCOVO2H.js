import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/smart-access.routes.ts
var smart_access_routes_default = [
  { path: "", redirectTo: "projects", pathMatch: "full" },
  {
    path: "plans",
    loadComponent: () => import("./chunk-GFRAYKHY.js").then((m) => m.SmartAccessPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-CXJDIORA.js").then((m) => m.default)
  }
];
export {
  smart_access_routes_default as default
};
//# sourceMappingURL=chunk-4UCOVO2H.js.map
