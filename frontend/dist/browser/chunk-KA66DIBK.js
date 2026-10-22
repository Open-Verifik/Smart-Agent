import {
  LEGACY_DEMO_REDIRECTS
} from "./chunk-IUBY3Q2J.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/demos.routes.ts
var demoRoutes = [
  { path: "", loadComponent: () => import("./chunk-FORDP7YY.js").then((m) => m.DemosHubComponent) },
  {
    path: "create-collection",
    loadComponent: () => import("./chunk-4EM66XIU.js").then((m) => m.CreateCollectionDemoComponent)
  },
  {
    path: "create-person",
    loadComponent: () => import("./chunk-GJDGDP7S.js").then((m) => m.CreatePersonDemoComponent)
  },
  {
    path: "create-person-with-liveness",
    loadComponent: () => import("./chunk-WMIK3PH6.js").then((m) => m.CreatePersonWithLivenessDemoComponent)
  },
  {
    path: "update-person",
    loadComponent: () => import("./chunk-GQ4VLD6N.js").then((m) => m.UpdatePersonDemoComponent)
  },
  {
    path: "delete-person",
    loadComponent: () => import("./chunk-RLEV2RSW.js").then((m) => m.DeletePersonDemoComponent)
  },
  {
    path: "search-person",
    loadComponent: () => import("./chunk-N562VLPV.js").then((m) => m.SearchPersonDemoComponent)
  },
  {
    path: "search-live-person",
    loadComponent: () => import("./chunk-LMBBRK22.js").then((m) => m.SearchLivePersonDemoComponent)
  },
  {
    path: "search-active-user",
    loadComponent: () => import("./chunk-PHFANQX6.js").then((m) => m.SearchActiveUserDemoComponent)
  },
  {
    path: "detect-face",
    loadComponent: () => import("./chunk-4CF4TDQV.js").then((m) => m.DetectFaceDemoComponent)
  },
  {
    path: "search-crops",
    loadComponent: () => import("./chunk-5GPAQ2EL.js").then((m) => m.SearchCropsDemoComponent)
  },
  {
    path: "face-comparison",
    loadComponent: () => import("./chunk-IJSSNXMB.js").then((m) => m.FaceComparisonDemoComponent)
  },
  {
    path: "face-comparison-liveness",
    loadComponent: () => import("./chunk-RYW6XBRV.js").then((m) => m.FaceComparisonLivenessDemoComponent)
  },
  {
    path: "verify-face",
    loadComponent: () => import("./chunk-AIXGTVQD.js").then((m) => m.VerifyFaceDemoComponent)
  },
  {
    path: "liveness",
    loadComponent: () => import("./chunk-NP22OOKB.js").then((m) => m.LivenessDemoComponent)
  },
  {
    path: "humanid-create",
    loadComponent: () => import("./chunk-QEOCBS4V.js").then((m) => m.HumanidCreateDemoComponent)
  },
  {
    path: "humanid-create-qr",
    loadComponent: () => import("./chunk-UY4B4TBR.js").then((m) => m.HumanidCreateQrDemoComponent)
  },
  {
    path: "humanid-decrypt",
    loadComponent: () => import("./chunk-DHRJDUAD.js").then((m) => m.HumanidDecryptDemoComponent)
  },
  {
    path: "humanid-preview",
    loadComponent: () => import("./chunk-66AR4OGE.js").then((m) => m.HumanidPreviewDemoComponent)
  },
  ...Object.entries(LEGACY_DEMO_REDIRECTS).map(([legacy, canonical]) => ({
    path: legacy,
    redirectTo: canonical,
    pathMatch: "full"
  }))
];
var demos_routes_default = demoRoutes;
export {
  demos_routes_default as default
};
//# sourceMappingURL=chunk-KA66DIBK.js.map
