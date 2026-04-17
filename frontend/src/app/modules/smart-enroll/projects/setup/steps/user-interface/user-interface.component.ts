import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

const MAX_LOGO_SIZE_BYTES = 1024 * 512; // 512KB

/**
 * Step 5 — User interface (branding colors and logo/image).
 * Mirrors verifik-client-panel `SmartEnrollUserInterfaceComponent`. File uploads are
 * stored as inline base64 strings into `branding.logo`/`branding.image`.
 */
@Component({
    selector: 'setup-user-interface',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        TranslocoModule,
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

    readonly colorFields: { control: string; labelKey: string }[] = [
        { control: 'backgroundColor', labelKey: 'smartEnrollProjects.setup.ui.colors.background' },
        { control: 'titleColor', labelKey: 'smartEnrollProjects.setup.ui.colors.title' },
        { control: 'textColor', labelKey: 'smartEnrollProjects.setup.ui.colors.text' },
        { control: 'buttonColor', labelKey: 'smartEnrollProjects.setup.ui.colors.button' },
        { control: 'buttonTextColor', labelKey: 'smartEnrollProjects.setup.ui.colors.buttonText' },
        { control: 'imageBackgroundColor', labelKey: 'smartEnrollProjects.setup.ui.colors.imageBackground' },
    ];

    readonly imageFields: { control: 'logo' | 'image'; labelKey: string; subtitleKey: string }[] = [
        {
            control: 'logo',
            labelKey: 'smartEnrollProjects.setup.ui.images.logo',
            subtitleKey: 'smartEnrollProjects.setup.ui.images.logoSubtitle',
        },
        {
            control: 'image',
            labelKey: 'smartEnrollProjects.setup.ui.images.banner',
            subtitleKey: 'smartEnrollProjects.setup.ui.images.bannerSubtitle',
        },
    ];

    get isFormReady(): boolean {
        return !this.loading && !!this.form && !!this.brandingFormGroup;
    }

    get brandingFormGroup(): FormGroup | null {
        return (this.form?.get('branding') as FormGroup) || null;
    }

    onFileChange(forControl: 'logo' | 'image', event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        if (file.size > MAX_LOGO_SIZE_BYTES) {
            this._snack.open(this._transloco.translate('smartEnrollProjects.setup.ui.images.tooLarge'), 'OK', {
                duration: 4000,
            });
            input.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const dataUri = reader.result as string;
            const ctrl = this.brandingFormGroup?.get(forControl);
            ctrl?.setValue(dataUri || '');
            ctrl?.markAsDirty();
            ctrl?.markAsTouched();
            ctrl?.updateValueAndValidity();
            this._cdr.markForCheck();
        };
        reader.onerror = () => {
            this._snack.open(this._transloco.translate('smartEnrollProjects.setup.ui.images.uploadFailed'), 'OK', {
                duration: 4000,
            });
        };
        reader.readAsDataURL(file);
    }

    clearImage(forControl: 'logo' | 'image'): void {
        const ctrl = this.brandingFormGroup?.get(forControl);
        ctrl?.setValue('');
        ctrl?.markAsDirty();
        ctrl?.updateValueAndValidity();
    }

    imageValue(forControl: 'logo' | 'image'): string | null {
        const v = this.brandingFormGroup?.get(forControl)?.value as string | null | undefined;
        return v || null;
    }
}
