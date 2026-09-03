import { Injectable, NgZone, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    ActivatedRouteSnapshot,
    CanDeactivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HumanAuthnSetupHostComponent } from './human-authn-setup-host.component';

@Injectable({ providedIn: 'root' })
export class HumanAuthnSetupSaveGuard implements CanDeactivate<HumanAuthnSetupHostComponent> {
    private _router = inject(Router);
    private _ngZone = inject(NgZone);
    private _snack = inject(MatSnackBar);

    canDeactivate(
        component: HumanAuthnSetupHostComponent,
        currentRoute: ActivatedRouteSnapshot,
        _currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (!component.form?.dirty) return true;
        if (component.saving()) return false;

        const currentStepIndex = Number(currentRoute.paramMap.get('step') ?? component.stepIndex);
        const nextStepIndex = nextState ? this._getStepFromState(nextState) : null;
        const navigatingAway = nextStepIndex === null || isNaN(nextStepIndex);
        const navigatingBack = nextStepIndex !== null && nextStepIndex < currentStepIndex;
        const currentStepIsValid = component.isFormValidForStep(currentStepIndex);

        if (navigatingAway && !currentStepIsValid) {
            return new Observable<boolean>((observer) => {
                component.confirmNavigation().afterClosed().subscribe((action) => {
                    observer.next(action === 'confirmed');
                    observer.complete();
                });
            });
        }

        if (navigatingBack) {
            return currentStepIsValid ? this._triggerSave(component, nextStepIndex) : true;
        }

        return currentStepIsValid ? this._triggerSave(component, nextStepIndex) : false;
    }

    private _triggerSave(
        component: HumanAuthnSetupHostComponent,
        nextStepIndex: number | null
    ): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            component.saveProject().subscribe({
                next: (response) => {
                    this._ngZone.run(() => {
                        component.saving.set(false);
                        if ((!component.projectId || component.projectId === 'new') && response?.data?._id) {
                            const newId = response.data._id;
                            component.updateProjectId(newId);
                            component.form?.markAsPristine();
                            observer.next(false);
                            observer.complete();
                            if (nextStepIndex !== null && !isNaN(nextStepIndex)) {
                                this._router.navigate(['/human-authn/projects', newId, 'setup', nextStepIndex]);
                            }
                            return;
                        }
                        component.form?.markAsPristine();
                        observer.next(true);
                        observer.complete();
                    });
                },
                error: (error) => {
                    this._snack.open(error?.error?.message || error?.message || 'Error', 'Close', {
                        duration: 3000,
                    });
                    this._ngZone.run(() => {
                        component.saving.set(false);
                        observer.next(false);
                        observer.complete();
                    });
                },
            });
        });
    }

    private _getStepFromState(state: RouterStateSnapshot): number | null {
        let route = state.root;
        while (route.firstChild) {
            route = route.firstChild;
            if (route.params?.['step']) return +route.params['step'];
        }
        return null;
    }
}
