import "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/human-authn.routes.ts
var human_authn_routes_default = [
  { path: "", redirectTo: "demos", pathMatch: "full" },
  {
    path: "plans",
    loadComponent: () => import("./chunk-CU2KDGKW.js").then((m) => m.HumanAuthnPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-GADHE772.js").then((m) => m.default)
  },
  {
    path: "demos",
    loadComponent: () => import("./chunk-G7VFU7UC.js").then((m) => m.HumanAuthnDemosHubComponent)
  },
  {
    path: "history",
    loadComponent: () => import("./chunk-MR7YC2KU.js").then((m) => m.HumanAuthnHistoryComponent)
  }
];
export {
  human_authn_routes_default as default
};
//# sourceMappingURL=chunk-FBWNFKSA.js.map
