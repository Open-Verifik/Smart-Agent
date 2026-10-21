import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.routes.ts
var smart_scan_routes_default = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    loadComponent: () => import("./chunk-DCBAX2TO.js").then((m) => m.ScanListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-5UNOFT6F.js").then((m) => m.ScanToolComponent)
  },
  {
    path: "document-type/new",
    loadComponent: () => import("./chunk-PAMEU5O7.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: "document-type/:id",
    loadComponent: () => import("./chunk-PAMEU5O7.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-LQUX37O7.js").then((m) => m.ScanDetailComponent)
  }
];
export {
  smart_scan_routes_default as default
};
//# sourceMappingURL=chunk-RB3GBXFE.js.map
