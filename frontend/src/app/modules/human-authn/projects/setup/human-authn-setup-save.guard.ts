import { Injectable, NgZone, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    ActivatedRouteSnapshot,
    CanDeactivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import type { SmartAccessLeaveAction } from 'app/modules/smart-access/projects/setup/leave-dialog/smart-access-leave-dialog.component';
import { progressForDraftLeave, progressForValidNavigation } from 'app/modules/smart-access/projects/setup/smart-access-setup-draft.util';
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
            return this._confirmLeave(component, currentStepIndex);
        }

        if (navigatingBack) {
            return currentStepIsValid ? this._triggerSave(component, currentStepIndex, nextStepIndex) : true;
        }

        return currentStepIsValid ? this._triggerSave(component, currentStepIndex, nextStepIndex) : false;
    }

    private _confirmLeave(component: HumanAuthnSetupHostComponent, stepIndex: number): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            component.confirmNavigation().afterClosed().subscribe((action: SmartAccessLeaveAction | undefined) => {
                if (action === 'discard') {
                    component.form?.markAsPristine();
                    observer.next(true);
                    observer.complete();
                    return;
                }
                if (action !== 'save') {
                    observer.next(false);
                    observer.complete();
                    return;
                }
                this._saveDraftAndLeave(component, stepIndex, observer);
            });
        });
    }

    private _saveDraftAndLeave(
        component: HumanAuthnSetupHostComponent,
        stepIndex: number,
        observer: { next: (value: boolean) => void; complete: () => void }
    ): void {
        const progress = progressForDraftLeave(stepIndex, component.savedLastStep());
        let emitted = false;
        component.saveDraft(progress).subscribe({
            next: (response) => {
                emitted = true;
                this._ngZone.run(() => {
                    component.saving.set(false);
                    component.rememberWizardProgress(progress, 'draft');
                    if ((!component.projectId || component.projectId === 'new') && response?.data?._id) {
                        component.updateProjectId(response.data._id);
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
                if (emitted) return;
                this._ngZone.run(() => {
                    component.saving.set(false);
                    observer.next(false);
                    observer.complete();
                });
            },
        });
    }

    private _triggerSave(
        component: HumanAuthnSetupHostComponent,
        currentStepIndex: number,
        nextStepIndex: number | null
    ): Observable<boolean> {
        const progress = progressForValidNavigation(
            currentStepIndex,
            nextStepIndex,
            component.savedLastStep(),
            component.steps.length
        );
        return new Observable<boolean>((observer) => {
            let emitted = false;
            component.saveProject(progress).subscribe({
                next: (response) => {
                    emitted = true;
                    this._ngZone.run(() => {
                        component.saving.set(false);
                        component.rememberWizardProgress(progress);
                        if ((!component.projectId || component.projectId === 'new') && response?.data?._id) {
                            const newId = response.data._id;
                            component.updateProjectId(newId);
                            component.form?.markAsPristine();
                            observer.next(false);
                            observer.complete();
                            if (nextStepIndex !== null && !isNaN(nextStepIndex)) {
                                this._router.navigate(['/human-authn/projects', newId, 'setup', nextStepIndex]);
                            } else {
                                this._router.navigate(['/human-authn/projects']);
                            }
                            return;
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

    private _showSaveError(error: { error?: { message?: string }; message?: string }): void {
        this._snack.open(error?.error?.message || error?.message || 'Error', 'Close', { duration: 3000 });
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
