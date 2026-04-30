import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.routes.ts
var smart_scan_routes_default = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    loadComponent: () => import("./chunk-WYNUF4ZT.js").then((m) => m.ScanListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-AIH22G7E.js").then((m) => m.ScanToolComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-IA74RLKP.js").then((m) => m.ScanDetailComponent)
  }
];
export {
  smart_scan_routes_default as default
};
//# sourceMappingURL=chunk-SMZA5OXE.js.map
