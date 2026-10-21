import "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/human-authn.routes.ts
var human_authn_routes_default = [
  { path: "", redirectTo: "demos", pathMatch: "full" },
  {
    path: "plans",
    loadComponent: () => import("./chunk-DB7ECL3I.js").then((m) => m.HumanAuthnPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-EQLDXSF5.js").then((m) => m.default)
  },
  {
    path: "demos",
    loadComponent: () => import("./chunk-PAJMWE63.js").then((m) => m.HumanAuthnDemosHubComponent)
  },
  {
    path: "history",
    loadComponent: () => import("./chunk-MZAMUR4G.js").then((m) => m.HumanAuthnHistoryComponent)
  }
];
export {
  human_authn_routes_default as default
};
//# sourceMappingURL=chunk-L2BW3LOW.js.map
