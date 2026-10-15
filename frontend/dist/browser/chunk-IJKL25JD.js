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
    loadComponent: () => import("./chunk-BHTNP2NT.js").then((m) => m.StatusCheckComponent)
  },
  {
    path: "incidents",
    loadComponent: () => import("./chunk-MUVIGWGE.js").then((m) => m.IncidentsComponent)
  },
  {
    path: "incidents/:id",
    loadComponent: () => import("./chunk-JBRGNTWD.js").then((m) => m.IncidentDetailComponent)
  },
  {
    path: "webhooks",
    loadComponent: () => import("./chunk-GA37K3NC.js").then((m) => m.WebhooksListComponent)
  },
  {
    path: "webhooks/:id",
    loadComponent: () => import("./chunk-EVNY7VQT.js").then((m) => m.WebhookDetailComponent)
  }
];
export {
  smart_monitor_routes_default as default
};
//# sourceMappingURL=chunk-IJKL25JD.js.map
