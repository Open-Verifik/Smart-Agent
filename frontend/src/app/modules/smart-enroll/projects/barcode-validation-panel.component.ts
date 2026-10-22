import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

export type CedulaBarcodeValidation = {
    attempts?: number;
    barcode?: {
        bloodType?: string;
        dateOfBirth?: string;
        documentNumber?: string;
        fullName?: string;
        gender?: string;
    } | null;
    decoded?: boolean;
    disagreements?: string[];
    verdict?: string;
};

@Component({
    selector: 'barcode-validation-panel',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './barcode-validation-panel.component.html',
})
export class BarcodeValidationPanelComponent {
    @Input() validation: CedulaBarcodeValidation | null = null;

    confirmedFields(): Array<{ key: string; value: string }> {
        const barcode = this.validation?.barcode;
        if (!barcode) return [];

        return [
            { key: 'fullName', value: barcode.fullName || '' },
            { key: 'documentNumber', value: barcode.documentNumber || '' },
            { key: 'dateOfBirth', value: barcode.dateOfBirth || '' },
            { key: 'gender', value: barcode.gender || '' },
            { key: 'bloodType', value: barcode.bloodType || '' },
        ].filter((field) => field.value);
    }

    verdictClass(): string {
        if (this.validation?.verdict === 'confirmed') {
            return 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200';
        }
        if (this.validation?.verdict === 'mismatch') {
            return 'bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200';
        }

        return 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200';
    }
}
