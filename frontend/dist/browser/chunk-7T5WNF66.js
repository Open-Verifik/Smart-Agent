import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.routes.ts
var smart_scan_routes_default = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    loadComponent: () => import("./chunk-ZL27X5OQ.js").then((m) => m.ScanListComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-4W2TDXEO.js").then((m) => m.ScanToolComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-OPTW5WEQ.js").then((m) => m.ScanDetailComponent)
  }
];
export {
  smart_scan_routes_default as default
};
//# sourceMappingURL=chunk-7T5WNF66.js.map
