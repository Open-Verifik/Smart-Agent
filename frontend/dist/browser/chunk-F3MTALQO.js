import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-monitor/smart-monitor.routes.ts
var smart_monitor_routes_default = [
  {
    path: "",
    redirectTo: "status-check",
    pathMatch: "full"
  },
  {
    path: "status-check",
    loadComponent: () => import("./chunk-GOPMB36F.js").then((m) => m.StatusCheckComponent)
  },
  {
    path: "incidents",
    loadComponent: () => import("./chunk-4MDLFDPT.js").then((m) => m.IncidentsComponent)
  },
  {
    path: "incidents/:id",
    loadComponent: () => import("./chunk-LAW4O4MR.js").then((m) => m.IncidentDetailComponent)
  },
  {
    path: "webhooks",
    loadComponent: () => import("./chunk-3EWFENPZ.js").then((m) => m.WebhooksListComponent)
  },
  {
    path: "webhooks/:id",
    loadComponent: () => import("./chunk-7JWZKR6X.js").then((m) => m.WebhookDetailComponent)
  }
];
export {
  smart_monitor_routes_default as default
};
//# sourceMappingURL=chunk-F3MTALQO.js.map
