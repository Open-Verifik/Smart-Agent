import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/smart-enroll.routes.ts
var smart_enroll_routes_default = [
  { path: "", redirectTo: "smart-scan", pathMatch: "full" },
  {
    path: "smart-scan",
    loadChildren: () => import("./chunk-SMZA5OXE.js").then((m) => m.default)
  },
  {
    path: "plans",
    loadComponent: () => import("./chunk-KTCFWKGW.js").then((m) => m.SmartEnrollPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-4DSQZFPN.js").then((m) => m.default)
  }
];
export {
  smart_enroll_routes_default as default
};
//# sourceMappingURL=chunk-YMV4QHX7.js.map
