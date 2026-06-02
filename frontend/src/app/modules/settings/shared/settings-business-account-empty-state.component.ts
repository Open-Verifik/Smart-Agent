import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthModalComponent } from 'app/layout/common/auth-modal/auth-modal.component';
import { getVerifikAccount } from '../utils/settings-business-user.util';

@Component({
    selector: 'app-settings-business-account-empty-state',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './settings-business-account-empty-state.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsBusinessAccountEmptyStateComponent {
    @Input({ required: true }) hintKey!: string;
    @Output() userChange = new EventEmitter<unknown>();

    private _dialog = inject(MatDialog);
    private _cdr = inject(ChangeDetectorRef);

    openAuthModal(): void {
        this._dialog
            .open(AuthModalComponent, {
                panelClass: 'auth-modal-dialog',
                width: '400px',
                maxWidth: '100vw',
            })
            .afterClosed()
            .subscribe(() => {
                const linkedAccount = getVerifikAccount();
                if (linkedAccount?._id) {
                    this.userChange.emit(linkedAccount);
                }
                this._cdr.markForCheck();
            });
    }
}
