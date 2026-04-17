import { Injectable, NgZone, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SetupHostComponent } from './setup-host.component';

/**
 * Persists the wizard's current step before navigating away.
 *
 * Mirrors verifik-client-panel `SmartEnrollSaveGuard`:
 *  - clean form → allow navigation
 *  - dirty + invalid → ask the user to confirm exiting without saving
 *  - dirty + valid + going forward → save then navigate
 *  - dirty + valid + going back → save then navigate (or skip save if invalid)
 */
@Injectable({ providedIn: 'root' })
export class SetupSaveGuard implements CanDeactivate<SetupHostComponent> {
    private _router = inject(Router);
    private _ngZone = inject(NgZone);
    private _snack = inject(MatSnackBar);

    canDeactivate(
        component: SetupHostComponent,
        currentRoute: ActivatedRouteSnapshot,
        _currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (!component.form?.dirty) return true;
        if (component.saving()) return false;

        const currentStepIndex = +currentRoute?.params?.['step'];
        const nextStepIndex = nextState ? this._getStepFromState(nextState) : null;
        const navigatingAway = nextStepIndex === null || isNaN(nextStepIndex);
        const navigatingBack = nextStepIndex !== null && nextStepIndex < currentStepIndex;

        const currentStepIsValid = component.isFormValidForStep(currentStepIndex);

        if (navigatingAway && !currentStepIsValid) {
            return new Observable<boolean>((observer) => {
                const dialogRef = component.confirmNavigation();
                dialogRef.afterClosed().subscribe((action) => {
                    if (action !== 'confirmed') {
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

    private _triggerSave(
        component: SetupHostComponent,
        _currentStepIndex: number,
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
                            component.form?.updateValueAndValidity({ emitEvent: false });

                            observer.next(false);
                            observer.complete();

                            if (nextStepIndex !== null && !isNaN(nextStepIndex)) {
                                const isLast = nextStepIndex === component.steps.length - 1;
                                if (isLast) {
                                    this._router.navigate(['/smart-enroll/projects', newId]);
                                } else {
                                    this._router.navigate(['/smart-enroll/projects', newId, 'setup', nextStepIndex]);
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
                    const msg = error?.error?.message || error?.message || 'smartEnrollProjects.setup.api_error';
                    this._snack.open(msg, 'Close', { duration: 3000 });
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
