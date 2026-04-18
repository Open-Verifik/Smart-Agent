import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { Attachment } from 'app/core/services/attachment.service';
import { FileDropZoneComponent } from 'app/shared/file-drop-zone/file-drop-zone.component';
import { SwatchPickerComponent } from 'app/shared/swatch-picker/swatch-picker.component';

const HALF_MEGABYTE = 0.5 * 1024 * 1024;
const TWO_MEGABYTES = 2 * 1024 * 1024;

/**
 * Step 5 — User interface (branding logo, banner image, colors).
 *
 * Mirrors verifik-client-panel `SmartEnrollUserInterfaceComponent`:
 * - Logo + Image cards delegate uploads to {@link FileDropZoneComponent},
 *   which posts to `/v2/attachments` and returns a CDN URL stored in the form.
 * - Colors card renders preset palettes via {@link SwatchPickerComponent}.
 */
@Component({
    selector: 'setup-user-interface',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        TranslocoModule,
        FileDropZoneComponent,
        SwatchPickerComponent,
    ],
    templateUrl: './user-interface.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupUserInterfaceComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    readonly logoMaxSize = HALF_MEGABYTE;
    readonly imageMaxSize = TWO_MEGABYTES;
    readonly imageAccept = '.jpg,.jpeg,.png';

    /**
     * Per-field preset palettes (12 swatches each, ordered as a hue progression
     * so the two-row grid reads as a coordinated set rather than random colors).
     * Tailwind 600-tones for accents, 900-tones for body text, 50/100-tones for
     * surfaces and inverted text on filled buttons.
     */
    readonly titleColors = [
        '#2563eb', '#4f46e5', '#7c3aed', '#9333ea', '#c026d3', '#db2777',
        '#e11d48', '#dc2626', '#ea580c', '#d97706', '#16a34a', '#0891b2',
    ];
    readonly textColors = [
        '#0f172a', '#111827', '#1c1917', '#1e3a8a', '#3730a3', '#4c1d95',
        '#581c87', '#86198f', '#9d174d', '#7f1d1d', '#7c2d12', '#3f3f46',
    ];
    readonly buttonColors = [
        '#2563eb', '#1d4ed8', '#4f46e5', '#6d28d9', '#9333ea', '#db2777',
        '#e11d48', '#dc2626', '#ea580c', '#16a34a', '#0d9488', '#0f172a',
    ];
    readonly buttonTextColors = [
        '#ffffff', '#f8fafc', '#f1f5f9', '#e0e7ff', '#dbeafe', '#cffafe',
        '#dcfce7', '#fef3c7', '#ffedd5', '#ffe4e6', '#fae8ff', '#f5f5f4',
    ];
    readonly backgroundColors = [
        '#ffffff', '#fafafa', '#f8fafc', '#f0f9ff', '#eff6ff', '#eef2ff',
        '#faf5ff', '#fdf4ff', '#fdf2f8', '#fff1f2', '#fff7ed', '#f0fdf4',
    ];
    readonly imageBackgroundColors = [
        '#ffffff', '#f9fafb', '#f5f5f4', '#e7e5e4', '#f0f9ff', '#dbeafe',
        '#e0e7ff', '#ede9fe', '#fce7f3', '#dcfce7', '#fef3c7', '#ffedd5',
    ];

    get isFormReady(): boolean {
        return !this.loading && !!this.form && !!this.brandingFormGroup;
    }

    get brandingFormGroup(): FormGroup | null {
        return (this.form?.get('branding') as FormGroup) || null;
    }

    imageValue(forControl: 'logo' | 'image'): string | null {
        const v = this.brandingFormGroup?.get(forControl)?.value as string | null | undefined;
        return v || null;
    }

    onAttachmentUploaded(forControl: 'logo' | 'image', payload: { attachment: Attachment }): void {
        if (!this.brandingFormGroup) return;
        const ctrl = this.brandingFormGroup.get(forControl);
        ctrl?.setValue(payload?.attachment?.url || '');
        ctrl?.markAsTouched();
        ctrl?.markAsDirty();
        ctrl?.setErrors(null);
        ctrl?.updateValueAndValidity();

        const truncatedName =
            payload?.attachment?.name && payload.attachment.name.length > 50
                ? `${payload.attachment.name.slice(0, 47)}...`
                : payload?.attachment?.name || '';
        this._snack.open(
            this._transloco.translate('smartEnrollProjects.setup.ui.images.uploadedSuccessfully', { name: truncatedName }),
            this._transloco.translate('close'),
            { duration: 3000 }
        );
        this._cdr.markForCheck();
    }

    onUploadError(forControl: 'logo' | 'image', payload: { error: string }): void {
        if (!this.brandingFormGroup) return;
        const ctrl = this.brandingFormGroup.get(forControl);
        const message = payload?.error || this._transloco.translate('smartEnrollProjects.setup.ui.images.uploadFailed');
        ctrl?.setErrors({ uploadFailed: message });
        this._snack.open(message, this._transloco.translate('close'), { duration: 3000 });
        this._cdr.markForCheck();
    }

    onFileError(forControl: 'logo' | 'image', payload: { file: File; error: string }): void {
        // Inline error already rendered inside the drop zone; mirror as snack for visibility.
        this._snack.open(payload?.error || '', this._transloco.translate('close'), { duration: 3000 });
    }

    clearImage(forControl: 'logo' | 'image'): void {
        if (!this.brandingFormGroup) return;
        const ctrl = this.brandingFormGroup.get(forControl);
        ctrl?.setValue('');
        ctrl?.markAsDirty();
        ctrl?.markAsTouched();
        ctrl?.setErrors(null);
        ctrl?.updateValueAndValidity();
        this._cdr.markForCheck();
    }
}
