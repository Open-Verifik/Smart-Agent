import {
  MatSnackBar
} from "./chunk-O4LKJP5L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import "./chunk-NBA3XD53.js";
import "./chunk-IXSC6NFZ.js";
import {
  Router
} from "./chunk-DM2XPT7T.js";
import {
  Injectable,
  NgZone,
  Observable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-I5BUD46C.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/projects/setup/human-authn-setup-save.guard.ts
var HumanAuthnSetupSaveGuard = class _HumanAuthnSetupSaveGuard {
  constructor() {
    this._router = inject(Router);
    this._ngZone = inject(NgZone);
    this._snack = inject(MatSnackBar);
  }
  canDeactivate(component, currentRoute, _currentState, nextState) {
    if (!component.form?.dirty)
      return true;
    if (component.saving())
      return false;
    const currentStepIndex = Number(currentRoute.paramMap.get("step") ?? component.stepIndex);
    const nextStepIndex = nextState ? this._getStepFromState(nextState) : null;
    const navigatingAway = nextStepIndex === null || isNaN(nextStepIndex);
    const navigatingBack = nextStepIndex !== null && nextStepIndex < currentStepIndex;
    const currentStepIsValid = component.isFormValidForStep(currentStepIndex);
    if (navigatingAway && !currentStepIsValid) {
      return new Observable((observer) => {
        component.confirmNavigation().afterClosed().subscribe((action) => {
          observer.next(action === "confirmed");
          observer.complete();
        });
      });
    }
    if (navigatingBack) {
      return currentStepIsValid ? this._triggerSave(component, nextStepIndex) : true;
    }
    return currentStepIsValid ? this._triggerSave(component, nextStepIndex) : false;
  }
  _triggerSave(component, nextStepIndex) {
    return new Observable((observer) => {
      component.saveProject().subscribe({
        next: (response) => {
          this._ngZone.run(() => {
            component.saving.set(false);
            if ((!component.projectId || component.projectId === "new") && response?.data?._id) {
              const newId = response.data._id;
              component.updateProjectId(newId);
              component.form?.markAsPristine();
              observer.next(false);
              observer.complete();
              if (nextStepIndex !== null && !isNaN(nextStepIndex)) {
                this._router.navigate(["/human-authn/projects", newId, "setup", nextStepIndex]);
              }
              return;
            }
            component.form?.markAsPristine();
            observer.next(true);
            observer.complete();
          });
        },
        error: (error) => {
          this._snack.open(error?.error?.message || error?.message || "Error", "Close", {
            duration: 3e3
          });
          this._ngZone.run(() => {
            component.saving.set(false);
            observer.next(false);
            observer.complete();
          });
        }
      });
    });
  }
  _getStepFromState(state) {
    let route = state.root;
    while (route.firstChild) {
      route = route.firstChild;
      if (route.params?.["step"])
        return +route.params["step"];
    }
    return null;
  }
  static {
    this.\u0275fac = function HumanAuthnSetupSaveGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnSetupSaveGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HumanAuthnSetupSaveGuard, factory: _HumanAuthnSetupSaveGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnSetupSaveGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/human-authn/projects/human-authn-projects.routes.ts
var human_authn_projects_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-6R6MXRCQ.js").then((m) => m.HumanAuthnProjectsComponent)
  },
  {
    path: "new/setup/:step",
    loadComponent: () => import("./chunk-E6SM7ZMC.js").then((m) => m.HumanAuthnSetupHostComponent),
    canDeactivate: [HumanAuthnSetupSaveGuard]
  },
  {
    path: "new/setup",
    loadComponent: () => import("./chunk-E6SM7ZMC.js").then((m) => m.HumanAuthnSetupHostComponent),
    canDeactivate: [HumanAuthnSetupSaveGuard]
  },
  {
    path: ":projectId/setup/:step",
    loadComponent: () => import("./chunk-E6SM7ZMC.js").then((m) => m.HumanAuthnSetupHostComponent),
    canDeactivate: [HumanAuthnSetupSaveGuard]
  },
  {
    path: ":projectId/setup",
    loadComponent: () => import("./chunk-E6SM7ZMC.js").then((m) => m.HumanAuthnSetupHostComponent),
    canDeactivate: [HumanAuthnSetupSaveGuard]
  }
];
export {
  human_authn_projects_routes_default as default
};
//# sourceMappingURL=chunk-ETFT7SDM.js.map
