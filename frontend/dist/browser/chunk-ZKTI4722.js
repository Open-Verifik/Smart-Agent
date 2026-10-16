import {
  LEGACY_DEMO_REDIRECTS
} from "./chunk-IUBY3Q2J.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/demos.routes.ts
var demoRoutes = [
  { path: "", loadComponent: () => import("./chunk-BATEMAA3.js").then((m) => m.DemosHubComponent) },
  {
    path: "create-collection",
    loadComponent: () => import("./chunk-B27E62HD.js").then((m) => m.CreateCollectionDemoComponent)
  },
  {
    path: "create-person",
    loadComponent: () => import("./chunk-AHL6ORGO.js").then((m) => m.CreatePersonDemoComponent)
  },
  {
    path: "create-person-with-liveness",
    loadComponent: () => import("./chunk-ZZNKK4GY.js").then((m) => m.CreatePersonWithLivenessDemoComponent)
  },
  {
    path: "update-person",
    loadComponent: () => import("./chunk-LA6BFOA7.js").then((m) => m.UpdatePersonDemoComponent)
  },
  {
    path: "delete-person",
    loadComponent: () => import("./chunk-ZYS3Q4MR.js").then((m) => m.DeletePersonDemoComponent)
  },
  {
    path: "search-person",
    loadComponent: () => import("./chunk-472G3HFA.js").then((m) => m.SearchPersonDemoComponent)
  },
  {
    path: "search-live-person",
    loadComponent: () => import("./chunk-LEEWNZ42.js").then((m) => m.SearchLivePersonDemoComponent)
  },
  {
    path: "search-active-user",
    loadComponent: () => import("./chunk-AZG2TABM.js").then((m) => m.SearchActiveUserDemoComponent)
  },
  {
    path: "detect-face",
    loadComponent: () => import("./chunk-FXJDSGB5.js").then((m) => m.DetectFaceDemoComponent)
  },
  {
    path: "search-crops",
    loadComponent: () => import("./chunk-3W2H7AEN.js").then((m) => m.SearchCropsDemoComponent)
  },
  {
    path: "face-comparison",
    loadComponent: () => import("./chunk-BU4KJ5RI.js").then((m) => m.FaceComparisonDemoComponent)
  },
  {
    path: "face-comparison-liveness",
    loadComponent: () => import("./chunk-SOMON5O6.js").then((m) => m.FaceComparisonLivenessDemoComponent)
  },
  {
    path: "verify-face",
    loadComponent: () => import("./chunk-NCXRKG6K.js").then((m) => m.VerifyFaceDemoComponent)
  },
  {
    path: "liveness",
    loadComponent: () => import("./chunk-SUM2FKFF.js").then((m) => m.LivenessDemoComponent)
  },
  {
    path: "humanid-create",
    loadComponent: () => import("./chunk-ARQ47AJW.js").then((m) => m.HumanidCreateDemoComponent)
  },
  {
    path: "humanid-create-qr",
    loadComponent: () => import("./chunk-EHJKGDO4.js").then((m) => m.HumanidCreateQrDemoComponent)
  },
  {
    path: "humanid-decrypt",
    loadComponent: () => import("./chunk-GU5U67YG.js").then((m) => m.HumanidDecryptDemoComponent)
  },
  {
    path: "humanid-preview",
    loadComponent: () => import("./chunk-SWNPESF2.js").then((m) => m.HumanidPreviewDemoComponent)
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
//# sourceMappingURL=chunk-ZKTI4722.js.map
