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
    loadComponent: () => import("./chunk-RY4TY2MJ.js").then((m) => m.StatusCheckComponent)
  },
  {
    path: "incidents",
    loadComponent: () => import("./chunk-3PDG77FR.js").then((m) => m.IncidentsComponent)
  },
  {
    path: "incidents/:id",
    loadComponent: () => import("./chunk-ZLCT2EGZ.js").then((m) => m.IncidentDetailComponent)
  },
  {
    path: "webhooks",
    loadComponent: () => import("./chunk-NZJOKE2V.js").then((m) => m.WebhooksListComponent)
  },
  {
    path: "webhooks/:id",
    loadComponent: () => import("./chunk-GYRF5JRB.js").then((m) => m.WebhookDetailComponent)
  }
];
export {
  smart_monitor_routes_default as default
};
//# sourceMappingURL=chunk-R3XWCA7V.js.map
