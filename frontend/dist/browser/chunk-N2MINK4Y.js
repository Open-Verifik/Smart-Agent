import {
  LEGACY_DEMO_REDIRECTS
} from "./chunk-IUBY3Q2J.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/demos.routes.ts
var demoRoutes = [
  { path: "", loadComponent: () => import("./chunk-R36GXUMP.js").then((m) => m.DemosHubComponent) },
  {
    path: "create-collection",
    loadComponent: () => import("./chunk-IUR74ZTZ.js").then((m) => m.CreateCollectionDemoComponent)
  },
  {
    path: "create-person",
    loadComponent: () => import("./chunk-EO474BKD.js").then((m) => m.CreatePersonDemoComponent)
  },
  {
    path: "create-person-with-liveness",
    loadComponent: () => import("./chunk-SPS2EVC5.js").then((m) => m.CreatePersonWithLivenessDemoComponent)
  },
  {
    path: "update-person",
    loadComponent: () => import("./chunk-I5NEUDE3.js").then((m) => m.UpdatePersonDemoComponent)
  },
  {
    path: "delete-person",
    loadComponent: () => import("./chunk-NYA7X4BR.js").then((m) => m.DeletePersonDemoComponent)
  },
  {
    path: "search-person",
    loadComponent: () => import("./chunk-RAJ4L3DG.js").then((m) => m.SearchPersonDemoComponent)
  },
  {
    path: "search-live-person",
    loadComponent: () => import("./chunk-Z6HZW674.js").then((m) => m.SearchLivePersonDemoComponent)
  },
  {
    path: "search-active-user",
    loadComponent: () => import("./chunk-IPMCXZKJ.js").then((m) => m.SearchActiveUserDemoComponent)
  },
  {
    path: "detect-face",
    loadComponent: () => import("./chunk-KECZDUHJ.js").then((m) => m.DetectFaceDemoComponent)
  },
  {
    path: "search-crops",
    loadComponent: () => import("./chunk-Y7G3WZDT.js").then((m) => m.SearchCropsDemoComponent)
  },
  {
    path: "face-comparison",
    loadComponent: () => import("./chunk-4QJNTM2A.js").then((m) => m.FaceComparisonDemoComponent)
  },
  {
    path: "face-comparison-liveness",
    loadComponent: () => import("./chunk-5FSUR2YI.js").then((m) => m.FaceComparisonLivenessDemoComponent)
  },
  {
    path: "verify-face",
    loadComponent: () => import("./chunk-Z7DDM7SE.js").then((m) => m.VerifyFaceDemoComponent)
  },
  {
    path: "liveness",
    loadComponent: () => import("./chunk-7B3X6HKF.js").then((m) => m.LivenessDemoComponent)
  },
  {
    path: "humanid-create",
    loadComponent: () => import("./chunk-GQZUXHDE.js").then((m) => m.HumanidCreateDemoComponent)
  },
  {
    path: "humanid-create-qr",
    loadComponent: () => import("./chunk-ZOPMGROB.js").then((m) => m.HumanidCreateQrDemoComponent)
  },
  {
    path: "humanid-decrypt",
    loadComponent: () => import("./chunk-C3LYTJED.js").then((m) => m.HumanidDecryptDemoComponent)
  },
  {
    path: "humanid-preview",
    loadComponent: () => import("./chunk-DSA63F4W.js").then((m) => m.HumanidPreviewDemoComponent)
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
//# sourceMappingURL=chunk-N2MINK4Y.js.map
