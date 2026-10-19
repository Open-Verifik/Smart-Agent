import { Component, ViewEncapsulation, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export type SmartAccessLeaveAction = 'save' | 'discard' | 'cancel';

type LeaveChoice = {
    id: SmartAccessLeaveAction;
    icon: string;
    recommended: boolean;
};

@Component({
    selector: 'smart-access-leave-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './smart-access-leave-dialog.component.html',
    styleUrl: './smart-access-leave-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class SmartAccessLeaveDialogComponent {
    private _dialogRef = inject(MatDialogRef<SmartAccessLeaveDialogComponent, SmartAccessLeaveAction>);
    private _data = inject(MAT_DIALOG_DATA, { optional: true }) as { i18nPrefix?: string } | null;

    /** Translation root. Smart Enroll passes its own prefix; Smart Access is the default. */
    readonly i18nPrefix = this._data?.i18nPrefix || 'smartAccessProjects.setup.leave';

    key(path: string): string {
        return `${this.i18nPrefix}.${path}`;
    }

    readonly choices: LeaveChoice[] = [
        { id: 'save', icon: 'save', recommended: true },
        { id: 'discard', icon: 'logout', recommended: false },
        { id: 'cancel', icon: 'undo', recommended: false },
    ];

    readonly selected = signal<SmartAccessLeaveAction>('save');

    select(id: SmartAccessLeaveAction): void {
        this.selected.set(id);
    }

    outcomeIcon(id: SmartAccessLeaveAction): string {
        if (id === 'save') return 'inventory_2';
        if (id === 'discard') return 'delete_outline';
        return 'edit';
    }

    confirm(): void {
        this._dialogRef.close(this.selected());
    }
}
