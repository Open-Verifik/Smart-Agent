import { Injectable, NgZone, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import type { SmartAccessSetupHostComponent } from './smart-access-setup-host.component';

@Injectable({ providedIn: 'root' })
export class SmartAccessSetupSaveGuard implements CanDeactivate<SmartAccessSetupHostComponent> {
    private _router = inject(Router);
    private _ngZone = inject(NgZone);
    private _snack = inject(MatSnackBar);

    canDeactivate(
        component: SmartAccessSetupHostComponent,
        currentRoute: ActivatedRouteSnapshot,
        _currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (!component.form?.dirty) return true;
        if (component.saving()) return false;

        const currentStepIndex = this._resolveCurrentStepIndex(currentRoute, component.stepIndex);
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
        component: SmartAccessSetupHostComponent,
        _currentStepIndex: number,
        nextStepIndex: number | null
    ): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            let emitted = false;
            component.saveProject().subscribe({
                next: (response) => {
                    emitted = true;
                    this._ngZone.run(() => {
                        component.saving.set(false);

                        if ((!component.projectId || component.projectId === 'new') && response?.data?._id) {
                            const newId = response.data._id as string;
                            component.assignProjectAfterCreate(newId, response?.data ?? null);
                            component.form?.markAsPristine();
                            observer.next(false);
                            observer.complete();

                            if (nextStepIndex !== null && !isNaN(nextStepIndex)) {
                                const isLast = nextStepIndex === component.stepsLength - 1;
                                if (isLast) {
                                    this._router.navigate(['/smart-access/projects', newId]);
                                } else {
                                    this._router.navigate(['/smart-access/projects', newId, 'setup', nextStepIndex]);
                                }
                            }
                        } else {
                            component.form?.markAsPristine();
                            observer.next(true);
                            observer.complete();
                        }
                    });
                },
                error: (error: { error?: { message?: string }; message?: string }) => {
                    emitted = true;
                    const msg =
                        error?.error?.message || error?.message || 'smartAccessProjects.setup.api_error';
                    this._snack.open(msg, 'Close', { duration: 3000 });
                    this._ngZone.run(() => {
                        component.saving.set(false);
                        observer.next(false);
                        observer.complete();
                    });
                },
                complete: () => {
                    if (emitted) return;
                    this._ngZone.run(() => {
                        component.saving.set(false);
                        observer.next(false);
                        observer.complete();
                    });
                },
            });
        });
    }

    private _resolveCurrentStepIndex(route: ActivatedRouteSnapshot, fallbackStepIndex: number): number {
        const stepParam = route.paramMap.get('step');
        const parsedStep = stepParam === null ? Number.NaN : Number(stepParam);
        if (Number.isFinite(parsedStep)) return parsedStep;
        return Number.isFinite(fallbackStepIndex) ? fallbackStepIndex : 0;
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
