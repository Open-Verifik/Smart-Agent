import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-monitor/smart-monitor.routes.ts
var smart_monitor_routes_default = [
  {
    path: "",
    redirectTo: "status-check",
    pathMatch: "full"
  },
  {
    path: "status-check",
    loadComponent: () => import("./chunk-QMEMCOU2.js").then((m) => m.StatusCheckComponent)
  },
  {
    path: "incidents",
    loadComponent: () => import("./chunk-FGJWFGXC.js").then((m) => m.IncidentsComponent)
  },
  {
    path: "incidents/:id",
    loadComponent: () => import("./chunk-6UZ5K2TW.js").then((m) => m.IncidentDetailComponent)
  },
  {
    path: "webhooks",
    loadComponent: () => import("./chunk-BRDGRAGP.js").then((m) => m.WebhooksListComponent)
  },
  {
    path: "webhooks/:id",
    loadComponent: () => import("./chunk-XW54MLQJ.js").then((m) => m.WebhookDetailComponent)
  }
];
export {
  smart_monitor_routes_default as default
};
//# sourceMappingURL=chunk-Q3PCMSWY.js.map
