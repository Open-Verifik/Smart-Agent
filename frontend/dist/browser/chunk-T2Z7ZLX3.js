import {
  progressForDraftLeave,
  progressForValidNavigation
} from "./chunk-XMUYQNJV.js";
import {
  MatSnackBar
} from "./chunk-N6A4QSA6.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import "./chunk-GX5GK4J6.js";
import {
  Router
} from "./chunk-QL64NPDU.js";
import {
  Injectable,
  NgZone,
  Observable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YWP2Y7QK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/projects/setup/smart-access-setup-save.guard.ts
var SmartAccessSetupSaveGuard = class _SmartAccessSetupSaveGuard {
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
    const currentStepIndex = this._resolveCurrentStepIndex(currentRoute, component.stepIndex);
    const nextStepIndex = nextState ? this._getStepFromState(nextState) : null;
    const navigatingAway = nextStepIndex === null || isNaN(nextStepIndex);
    const navigatingBack = nextStepIndex !== null && nextStepIndex < currentStepIndex;
    const currentStepIsValid = component.isFormValidForStep(currentStepIndex);
    if (navigatingAway && !currentStepIsValid) {
      return this._confirmLeave(component, currentStepIndex);
    }
    if (navigatingBack) {
      return currentStepIsValid ? this._triggerSave(component, currentStepIndex, nextStepIndex) : true;
    }
    return currentStepIsValid ? this._triggerSave(component, currentStepIndex, nextStepIndex) : false;
  }
  _confirmLeave(component, stepIndex) {
    return new Observable((observer) => {
      component.confirmNavigation().afterClosed().subscribe((action) => {
        if (action === "discard") {
          component.form?.markAsPristine();
          observer.next(true);
          observer.complete();
          return;
        }
        if (action !== "save") {
          observer.next(false);
          observer.complete();
          return;
        }
        this._saveDraftAndLeave(component, stepIndex, observer);
      });
    });
  }
  _saveDraftAndLeave(component, stepIndex, observer) {
    const progress = progressForDraftLeave(stepIndex, component.savedLastStep());
    let emitted = false;
    component.saveDraft(progress).subscribe({
      next: (response) => {
        emitted = true;
        this._ngZone.run(() => {
          component.saving.set(false);
          component.rememberWizardProgress(progress, "draft");
          if ((!component.projectId || component.projectId === "new") && response?.data?._id) {
            component.assignProjectAfterCreate(response.data._id, response?.data ?? null);
          }
          component.form?.markAsPristine();
          observer.next(true);
          observer.complete();
        });
      },
      error: (error) => {
        emitted = true;
        this._showSaveError(error);
        this._ngZone.run(() => {
          component.saving.set(false);
          observer.next(false);
          observer.complete();
        });
      },
      complete: () => {
        if (emitted)
          return;
        this._ngZone.run(() => {
          component.saving.set(false);
          observer.next(false);
          observer.complete();
        });
      }
    });
  }
  _triggerSave(component, currentStepIndex, nextStepIndex) {
    const progress = progressForValidNavigation(currentStepIndex, nextStepIndex, component.savedLastStep(), component.stepsLength);
    return new Observable((observer) => {
      let emitted = false;
      component.saveProject(progress).subscribe({
        next: (response) => {
          emitted = true;
          this._ngZone.run(() => {
            component.saving.set(false);
            component.rememberWizardProgress(progress);
            if ((!component.projectId || component.projectId === "new") && response?.data?._id) {
              const newId = response.data._id;
              component.assignProjectAfterCreate(newId, response?.data ?? null);
              component.form?.markAsPristine();
              observer.next(false);
              observer.complete();
              if (nextStepIndex !== null && !isNaN(nextStepIndex)) {
                const isLast = nextStepIndex === component.stepsLength - 1;
                if (isLast) {
                  this._router.navigate(["/smart-access/projects", newId]);
                } else {
                  this._router.navigate(["/smart-access/projects", newId, "setup", nextStepIndex]);
                }
              }
            } else {
              component.form?.markAsPristine();
              observer.next(true);
              observer.complete();
            }
          });
        },
        error: (error) => {
          emitted = true;
          this._showSaveError(error);
          this._ngZone.run(() => {
            component.saving.set(false);
            observer.next(false);
            observer.complete();
          });
        },
        complete: () => {
          if (emitted)
            return;
          this._ngZone.run(() => {
            component.saving.set(false);
            observer.next(false);
            observer.complete();
          });
        }
      });
    });
  }
  _showSaveError(error) {
    const msg = error?.error?.message || error?.message || "smartAccessProjects.setup.api_error";
    this._snack.open(msg, "Close", { duration: 3e3 });
  }
  _resolveCurrentStepIndex(route, fallbackStepIndex) {
    const stepParam = route.paramMap.get("step");
    const parsedStep = stepParam === null ? Number.NaN : Number(stepParam);
    if (Number.isFinite(parsedStep))
      return parsedStep;
    return Number.isFinite(fallbackStepIndex) ? fallbackStepIndex : 0;
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
    this.\u0275fac = function SmartAccessSetupSaveGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartAccessSetupSaveGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartAccessSetupSaveGuard, factory: _SmartAccessSetupSaveGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartAccessSetupSaveGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-access/projects/smart-access-projects.routes.ts
var smart_access_projects_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-3GQ4BTVP.js").then((m) => m.AccessProjectListComponent)
  },
  {
    path: "new/setup/:step",
    loadComponent: () => import("./chunk-YFWHMKWE.js").then((m) => m.SmartAccessSetupHostComponent),
    canDeactivate: [SmartAccessSetupSaveGuard]
  },
  {
    path: "new/setup",
    loadComponent: () => import("./chunk-YFWHMKWE.js").then((m) => m.SmartAccessSetupHostComponent),
    canDeactivate: [SmartAccessSetupSaveGuard]
  },
  {
    path: ":projectId/records/:loginId",
    loadComponent: () => import("./chunk-YTV2VO5D.js").then((m) => m.AccessLoginDetailComponent)
  },
  {
    path: ":projectId/records",
    loadComponent: () => import("./chunk-I75M2Z33.js").then((m) => m.AccessProjectRecordsComponent)
  },
  {
    path: ":projectId/staff",
    loadComponent: () => import("./chunk-TFM3TKXM.js").then((m) => m.AccessProjectStaffComponent)
  },
  {
    path: ":projectId/setup/:step",
    loadComponent: () => import("./chunk-YFWHMKWE.js").then((m) => m.SmartAccessSetupHostComponent),
    canDeactivate: [SmartAccessSetupSaveGuard]
  },
  {
    path: ":projectId/setup",
    loadComponent: () => import("./chunk-YFWHMKWE.js").then((m) => m.SmartAccessSetupHostComponent),
    canDeactivate: [SmartAccessSetupSaveGuard]
  },
  {
    path: ":projectId",
    loadComponent: () => import("./chunk-AKQFR5Q5.js").then((m) => m.AccessProjectDetailComponent)
  }
];
export {
  smart_access_projects_routes_default as default
};
//# sourceMappingURL=chunk-T2Z7ZLX3.js.map
