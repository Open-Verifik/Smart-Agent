import "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/human-authn.routes.ts
var human_authn_routes_default = [
  { path: "", redirectTo: "demos", pathMatch: "full" },
  {
    path: "plans",
    loadComponent: () => import("./chunk-66IPMRVF.js").then((m) => m.HumanAuthnPlansComponent)
  },
  {
    path: "projects",
    loadChildren: () => import("./chunk-OKWKJJMB.js").then((m) => m.default)
  },
  {
    path: "demos",
    loadComponent: () => import("./chunk-OEG5VLRG.js").then((m) => m.HumanAuthnDemosHubComponent)
  },
  {
    path: "history",
    loadComponent: () => import("./chunk-KVT5INBG.js").then((m) => m.HumanAuthnHistoryComponent)
  }
];
export {
  human_authn_routes_default as default
};
//# sourceMappingURL=chunk-TNZJ6DSM.js.map
