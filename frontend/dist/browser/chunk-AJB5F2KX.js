import "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/human-authn.routes.ts
var human_authn_routes_default = [
  { path: "", redirectTo: "demos", pathMatch: "full" },
  {
    path: "plans",
    loadComponent: () => import("./chunk-ZEMG7FEN.js").then((m) => m.HumanAuthnPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-ETFT7SDM.js").then((m) => m.default)
  },
  {
    path: "demos",
    loadComponent: () => import("./chunk-UE4TFEL2.js").then((m) => m.HumanAuthnDemosHubComponent)
  },
  {
    path: "history",
    loadComponent: () => import("./chunk-WBQHHVTL.js").then((m) => m.HumanAuthnHistoryComponent)
  }
];
export {
  human_authn_routes_default as default
};
//# sourceMappingURL=chunk-AJB5F2KX.js.map
