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
    loadComponent: () => import("./chunk-6LU2M2PY.js").then((m) => m.StatusCheckComponent)
  },
  {
    path: "incidents",
    loadComponent: () => import("./chunk-LWHOQ6T6.js").then((m) => m.IncidentsComponent)
  },
  {
    path: "incidents/:id",
    loadComponent: () => import("./chunk-KJRGKCUP.js").then((m) => m.IncidentDetailComponent)
  },
  {
    path: "webhooks",
    loadComponent: () => import("./chunk-L4NH3XET.js").then((m) => m.WebhooksListComponent)
  },
  {
    path: "webhooks/:id",
    loadComponent: () => import("./chunk-6AAOQMGK.js").then((m) => m.WebhookDetailComponent)
  }
];
export {
  smart_monitor_routes_default as default
};
//# sourceMappingURL=chunk-Z2J3Q6EL.js.map
