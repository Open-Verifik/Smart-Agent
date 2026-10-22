import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.routes.ts
var smart_scan_routes_default = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    loadComponent: () => import("./chunk-XALYXKVO.js").then((m) => m.ScanListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-67K4MGSR.js").then((m) => m.ScanToolComponent)
  },
  {
    path: "document-type/new",
    loadComponent: () => import("./chunk-5HELOBCN.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: "document-type/:id",
    loadComponent: () => import("./chunk-5HELOBCN.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-CO7ZF7O5.js").then((m) => m.ScanDetailComponent)
  }
];
export {
  smart_scan_routes_default as default
};
//# sourceMappingURL=chunk-MVTLQPG6.js.map
