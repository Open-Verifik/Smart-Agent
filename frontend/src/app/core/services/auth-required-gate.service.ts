import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionService } from 'app/core/services/session.service';
import { AuthModalComponent } from 'app/layout/common/auth-modal/auth-modal.component';
import { AuthRequiredDialogComponent } from 'app/layout/common/auth-required-dialog/auth-required-dialog.component';
import type { AuthRequiredDialogData } from 'app/layout/common/auth-required-dialog/auth-required-dialog.types';
import { DEFAULT_AUTH_REQUIRED_DIALOG_DATA } from 'app/layout/common/auth-required-dialog/auth-required-dialog.types';

export interface RunWithAuthOrDialogOptions {
    onAuthenticated: () => void;
    dialogData?: Partial<AuthRequiredDialogData>;
    panelClass?: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthRequiredGateService {
    private _dialog = inject(MatDialog);
    private _router = inject(Router);
    private _sessionService = inject(SessionService);

    runWithAuthOrDialog(options: RunWithAuthOrDialogOptions): void {
        if (this._sessionService.hasValidAuthentication()) {
            options.onAuthenticated();
            return;
        }

        const data: AuthRequiredDialogData = {
            ...DEFAULT_AUTH_REQUIRED_DIALOG_DATA,
            ...options.dialogData,
        };

        this._dialog
            .open(AuthRequiredDialogComponent, {
                width: '400px',
                maxWidth: '100vw',
                panelClass: options.panelClass ?? 'auth-required-dialog',
                data,
            })
            .afterClosed()
            .subscribe((result) => {
                if (result === 'signIn') {
                    this._dialog
                        .open(AuthModalComponent, {
                            panelClass: 'auth-modal-dialog',
                            width: '400px',
                        })
                        .afterClosed()
                        .subscribe(() => {
                            if (this._sessionService.hasValidAuthentication()) {
                                options.onAuthenticated();
                            } else {
                                this._router.navigate(['/home']);
                            }
                        });
                    return;
                }

                if (result === 'home') {
                    this._router.navigate(['/home']);
                    return;
                }

                if (!this._sessionService.hasValidAuthentication()) {
                    this._router.navigate(['/home']);
                }
            });
    }
}
