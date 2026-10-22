import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-tools/smart-tools.routes.ts
var smart_tools_routes_default = [
  { path: "", redirectTo: "smart-reduce", pathMatch: "full" },
  {
    path: "smart-reduce",
    loadComponent: () => import("./chunk-HIOEWB56.js").then((m) => m.SmartReduceComponent)
  },
  {
    path: "whatsapp-messages",
    loadComponent: () => import("./chunk-PX5ZNLVG.js").then((m) => m.MessagesListComponent),
    data: { phoneGateway: "whatsapp" }
  },
  {
    path: "whatsapp-messages/new",
    loadComponent: () => import("./chunk-3I5W6OLX.js").then((m) => m.MessageComposeComponent),
    data: { phoneGateway: "whatsapp" }
  },
  {
    path: "whatsapp-messages/:id",
    loadComponent: () => import("./chunk-3FFPWIGO.js").then((m) => m.MessageDetailComponent),
    data: { phoneGateway: "whatsapp" }
  },
  {
    path: "sms-messages",
    loadComponent: () => import("./chunk-PX5ZNLVG.js").then((m) => m.MessagesListComponent),
    data: { phoneGateway: "sms" }
  },
  {
    path: "sms-messages/new",
    loadComponent: () => import("./chunk-3I5W6OLX.js").then((m) => m.MessageComposeComponent),
    data: { phoneGateway: "sms" }
  },
  {
    path: "sms-messages/:id",
    loadComponent: () => import("./chunk-3FFPWIGO.js").then((m) => m.MessageDetailComponent),
    data: { phoneGateway: "sms" }
  }
];
export {
  smart_tools_routes_default as default
};
//# sourceMappingURL=chunk-TBLSXFAQ.js.map
