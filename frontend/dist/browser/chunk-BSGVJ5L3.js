import {
  LEGACY_DEMO_REDIRECTS
} from "./chunk-IUBY3Q2J.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/demos.routes.ts
var demoRoutes = [
  { path: "", loadComponent: () => import("./chunk-BATEMAA3.js").then((m) => m.DemosHubComponent) },
  {
    path: "create-collection",
    loadComponent: () => import("./chunk-2TVLZCK7.js").then((m) => m.CreateCollectionDemoComponent)
  },
  {
    path: "create-person",
    loadComponent: () => import("./chunk-DKB732UB.js").then((m) => m.CreatePersonDemoComponent)
  },
  {
    path: "create-person-with-liveness",
    loadComponent: () => import("./chunk-2GF3SZIC.js").then((m) => m.CreatePersonWithLivenessDemoComponent)
  },
  {
    path: "update-person",
    loadComponent: () => import("./chunk-T5JQDCEW.js").then((m) => m.UpdatePersonDemoComponent)
  },
  {
    path: "delete-person",
    loadComponent: () => import("./chunk-63QR723N.js").then((m) => m.DeletePersonDemoComponent)
  },
  {
    path: "search-person",
    loadComponent: () => import("./chunk-OR7WE6IK.js").then((m) => m.SearchPersonDemoComponent)
  },
  {
    path: "search-live-person",
    loadComponent: () => import("./chunk-F5CBCXAV.js").then((m) => m.SearchLivePersonDemoComponent)
  },
  {
    path: "search-active-user",
    loadComponent: () => import("./chunk-VS34IE6R.js").then((m) => m.SearchActiveUserDemoComponent)
  },
  {
    path: "detect-face",
    loadComponent: () => import("./chunk-M4TM7A5V.js").then((m) => m.DetectFaceDemoComponent)
  },
  {
    path: "search-crops",
    loadComponent: () => import("./chunk-KN6UU4EK.js").then((m) => m.SearchCropsDemoComponent)
  },
  {
    path: "face-comparison",
    loadComponent: () => import("./chunk-XGNIVRFM.js").then((m) => m.FaceComparisonDemoComponent)
  },
  {
    path: "face-comparison-liveness",
    loadComponent: () => import("./chunk-GMXDG5PZ.js").then((m) => m.FaceComparisonLivenessDemoComponent)
  },
  {
    path: "verify-face",
    loadComponent: () => import("./chunk-YDMANW2C.js").then((m) => m.VerifyFaceDemoComponent)
  },
  {
    path: "liveness",
    loadComponent: () => import("./chunk-UAI72DBG.js").then((m) => m.LivenessDemoComponent)
  },
  {
    path: "humanid-create",
    loadComponent: () => import("./chunk-E5LNWWK5.js").then((m) => m.HumanidCreateDemoComponent)
  },
  {
    path: "humanid-create-qr",
    loadComponent: () => import("./chunk-VLYAEZMK.js").then((m) => m.HumanidCreateQrDemoComponent)
  },
  {
    path: "humanid-decrypt",
    loadComponent: () => import("./chunk-2DXBCFDX.js").then((m) => m.HumanidDecryptDemoComponent)
  },
  {
    path: "humanid-preview",
    loadComponent: () => import("./chunk-4466G2ZN.js").then((m) => m.HumanidPreviewDemoComponent)
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
//# sourceMappingURL=chunk-BSGVJ5L3.js.map
