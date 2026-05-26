import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
    UseTemplateMode,
    UseTemplateModeDialogComponent,
    UseTemplateModeDialogData,
} from './use-template-mode-dialog.component';

@Injectable({ providedIn: 'root' })
export class SmartBatchInputModeService {
    private _dialog = inject(MatDialog);

    openModeDialog(data: UseTemplateModeDialogData): Observable<UseTemplateMode | undefined> {
        const dialogRef = this._dialog.open<
            UseTemplateModeDialogComponent,
            UseTemplateModeDialogData,
            UseTemplateMode
        >(UseTemplateModeDialogComponent, {
            width: '520px',
            maxWidth: '95vw',
            panelClass: 'smart-batch-mode-dialog',
            data,
        });

        return dialogRef.afterClosed().pipe(take(1));
    }
}

/**
 * Infer citizen / company / vehicle category from configuration or batch name.
 */
export const inferBatchCategory = (
    name?: string | null
): 'citizen' | 'company' | 'vehicle' | undefined => {
    const normalized = (name ?? '').toLowerCase();

    if (normalized.includes('vehicle') || normalized.includes('plate') || normalized.includes('vehículo')) {
        return 'vehicle';
    }

    if (
        normalized.includes('company') ||
        normalized.includes('business') ||
        normalized.includes('empresa') ||
        normalized.includes('nit')
    ) {
        return 'company';
    }

    if (
        normalized.includes('citizen') ||
        normalized.includes('ciudadano') ||
        normalized.includes('cedula') ||
        normalized.includes('cédula')
    ) {
        return 'citizen';
    }

    return undefined;
};
