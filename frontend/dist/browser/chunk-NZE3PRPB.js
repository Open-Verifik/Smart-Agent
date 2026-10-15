import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.routes.ts
var smart_scan_routes_default = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    loadComponent: () => import("./chunk-EGN637PW.js").then((m) => m.ScanListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-UNXDWHVI.js").then((m) => m.ScanToolComponent)
  },
  {
    path: "document-type/new",
    loadComponent: () => import("./chunk-LCJRV3IQ.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: "document-type/:id",
    loadComponent: () => import("./chunk-LCJRV3IQ.js").then((m) => m.DocumentTypeWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-V2BBXAJX.js").then((m) => m.ScanDetailComponent)
  }
];
export {
  smart_scan_routes_default as default
};
//# sourceMappingURL=chunk-NZE3PRPB.js.map
