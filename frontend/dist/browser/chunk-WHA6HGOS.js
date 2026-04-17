import {
  MatSnackBar
} from "./chunk-DXMIRT7Q.js";
import "./chunk-GMB4P7VL.js";
import {
  Router
} from "./chunk-LHOHCIQM.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-R4RYJRMO.js";
import {
  Injectable,
  NgZone,
  Observable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/projects/setup/setup-save.guard.ts
var SetupSaveGuard = class _SetupSaveGuard {
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
    const currentStepIndex = +currentRoute?.params?.["step"];
    const nextStepIndex = nextState ? this._getStepFromState(nextState) : null;
    const navigatingAway = nextStepIndex === null || isNaN(nextStepIndex);
    const navigatingBack = nextStepIndex !== null && nextStepIndex < currentStepIndex;
    const currentStepIsValid = component.isFormValidForStep(currentStepIndex);
    if (navigatingAway && !currentStepIsValid) {
      return new Observable((observer) => {
        const dialogRef = component.confirmNavigation();
        dialogRef.afterClosed().subscribe((action) => {
          if (action !== "confirmed") {
            observer.next(false);
            observer.complete();
            return;
          }
          observer.next(true);
          observer.complete();
        });
      });
    }
    if (navigatingBack) {
      return currentStepIsValid ? this._triggerSave(component, currentStepIndex, nextStepIndex) : true;
    }
    return currentStepIsValid ? this._triggerSave(component, currentStepIndex, nextStepIndex) : false;
  }
  _triggerSave(component, _currentStepIndex, nextStepIndex) {
    return new Observable((observer) => {
      component.saveProject().subscribe({
        next: (response) => {
          this._ngZone.run(() => {
            component.saving.set(false);
            if ((!component.projectId || component.projectId === "new") && response?.data?._id) {
              const newId = response.data._id;
              component.updateProjectId(newId);
              component.form?.markAsPristine();
              component.form?.updateValueAndValidity({ emitEvent: false });
              observer.next(false);
              observer.complete();
              if (nextStepIndex !== null && !isNaN(nextStepIndex)) {
                const isLast = nextStepIndex === component.steps.length - 1;
                if (isLast) {
                  this._router.navigate(["/smart-enroll/projects", newId]);
                } else {
                  this._router.navigate(["/smart-enroll/projects", newId, "setup", nextStepIndex]);
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
          const msg = error?.error?.message || error?.message || "smartEnrollProjects.setup.api_error";
          this._snack.open(msg, "Close", { duration: 3e3 });
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
    this.\u0275fac = function SetupSaveGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupSaveGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SetupSaveGuard, factory: _SetupSaveGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupSaveGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-enroll/projects/smart-enroll-projects.routes.ts
var smart_enroll_projects_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-N656N2KK.js").then((m) => m.ProjectListComponent)
  },
  {
    path: "new/setup/:step",
    loadComponent: () => import("./chunk-FKGQVQRU.js").then((m) => m.SetupHostComponent),
    canDeactivate: [SetupSaveGuard]
  },
  {
    path: "new/setup",
    loadComponent: () => import("./chunk-FKGQVQRU.js").then((m) => m.SetupHostComponent),
    canDeactivate: [SetupSaveGuard]
  },
  {
    path: ":projectId/records/:recordId",
    loadComponent: () => import("./chunk-2TPBJYJN.js").then((m) => m.ProjectRecordDetailComponent)
  },
  {
    path: ":projectId/records",
    loadComponent: () => import("./chunk-EEYVCJZT.js").then((m) => m.ProjectRecordsComponent)
  },
  {
    path: ":projectId/staff",
    loadComponent: () => import("./chunk-UGDHSU4T.js").then((m) => m.ProjectStaffComponent)
  },
  {
    path: ":projectId/setup/:step",
    loadComponent: () => import("./chunk-FKGQVQRU.js").then((m) => m.SetupHostComponent),
    canDeactivate: [SetupSaveGuard]
  },
  {
    path: ":projectId/setup",
    loadComponent: () => import("./chunk-FKGQVQRU.js").then((m) => m.SetupHostComponent),
    canDeactivate: [SetupSaveGuard]
  },
  {
    path: ":projectId",
    loadComponent: () => import("./chunk-W2Q2XP5N.js").then((m) => m.ProjectDetailComponent)
  }
];
export {
  smart_enroll_projects_routes_default as default
};
//# sourceMappingURL=chunk-WHA6HGOS.js.map
