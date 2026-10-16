import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.routes.ts
var smart_scan_routes_default = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    loadComponent: () => import("./chunk-PMSA5QMQ.js").then((m) => m.ScanListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-D32HETZ4.js").then((m) => m.ScanToolComponent)
  },
  {
    path: "document-type/new",
    loadComponent: () => import("./chunk-UTFZRNCQ.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: "document-type/:id",
    loadComponent: () => import("./chunk-UTFZRNCQ.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-I2WZJGIH.js").then((m) => m.ScanDetailComponent)
  }
];
export {
  smart_scan_routes_default as default
};
//# sourceMappingURL=chunk-2RBOBIS6.js.map
