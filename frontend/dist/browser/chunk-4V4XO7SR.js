import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/smart-enroll.routes.ts
var smart_enroll_routes_default = [
  { path: "", redirectTo: "smart-scan", pathMatch: "full" },
  {
    path: "smart-scan",
    loadChildren: () => import("./chunk-7T5WNF66.js").then((m) => m.default)
  },
  {
    path: "plans",
    loadComponent: () => import("./chunk-VZVG6YEH.js").then((m) => m.SmartEnrollPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-WHA6HGOS.js").then((m) => m.default)
  }
];
export {
  smart_enroll_routes_default as default
};
//# sourceMappingURL=chunk-4V4XO7SR.js.map
