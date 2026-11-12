import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { Attachment } from 'app/core/services/attachment.service';
import { VerifyStylePickerComponent } from 'app/modules/smart-enroll/projects/verify-style-picker.component';
import { FileDropZoneComponent } from 'app/shared/file-drop-zone/file-drop-zone.component';
import { SwatchPickerComponent } from 'app/shared/swatch-picker/swatch-picker.component';
import type { VerifyStyleId } from '../../../../smart-business.types';
import { BusinessSetupService } from '../../business-setup.service';
import { StyleOption } from '../../business-setup.types';

const HALF_MEGABYTE = 0.5 * 1024 * 1024;
const TWO_MEGABYTES = 2 * 1024 * 1024;

@Component({
    selector: 'business-user-interface',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSnackBarModule,
        TranslocoModule,
        FileDropZoneComponent,
        SwatchPickerComponent,
        VerifyStylePickerComponent,
    ],
    templateUrl: './business-user-interface.component.html',
    styleUrl: '../_kyb-journey.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessUserInterfaceComponent implements OnInit, OnChanges, OnDestroy {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _setup: BusinessSetupService;
    private _transloco: TranslocoService;
    private _cdr: ChangeDetectorRef;
    private _snack: MatSnackBar | null = null;
    private _destroy$ = new Subject<void>();

    readonly styles: StyleOption[];
    readonly logoMaxSize = HALF_MEGABYTE;
    readonly imageMaxSize = TWO_MEGABYTES;
    readonly imageAccept = '.jpg,.jpeg,.png';

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

    constructor(
        setup?: BusinessSetupService,
        transloco?: TranslocoService,
        cdr?: ChangeDetectorRef
    ) {
        if (setup) {
            this._setup = setup;
        } else {
            try {
                this._setup = inject(BusinessSetupService, { optional: true }) || new BusinessSetupService();
            } catch {
                this._setup = new BusinessSetupService();
            }
        }
        if (transloco) {
            this._transloco = transloco;
        } else {
            try {
                this._transloco =
                    inject(TranslocoService, { optional: true }) ||
                    ({ getActiveLang: () => 'es', translate: (k: string) => k } as any);
            } catch {
                this._transloco = { getActiveLang: () => 'es', translate: (k: string) => k } as any;
            }
        }
        if (cdr) {
            this._cdr = cdr;
        } else {
            try {
                this._cdr = inject(ChangeDetectorRef, { optional: true }) || ({ markForCheck: () => {} } as any);
            } catch {
                this._cdr = { markForCheck: () => {} } as any;
            }
        }
        try {
            this._snack = inject(MatSnackBar, { optional: true });
        } catch {
            this._snack = null;
        }
        this.styles = this._setup.styles;
    }

    ngOnInit(): void {
        this._loadFonts();
        if (this.selectedStyleId && this.selectedStyleId !== 'a') {
            const currentBtn = this.brandingGroup?.get('buttonColor')?.value;
            if (!currentBtn || currentBtn === '#9fe870' || currentBtn === '#059669') {
                this._setup.applyStylePreset(this.selectedStyleId, this.brandingGroup);
            }
        }
        this._bindFormChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['form']) {
            this._bindFormChanges();
        }
        this._cdr.markForCheck();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    private _bindFormChanges(): void {
        this._destroy$.next();
        if (!this.form) return;
        this.verifyStyleControl?.valueChanges.pipe(takeUntil(this._destroy$)).subscribe((styleId) => {
            if (styleId && ['a', 'b', 'c', 'd', 'e', 'f'].includes(styleId)) {
                this.onboardingSettingsGroup?.get('enrollmentClient')?.setValue('v2', { emitEvent: false });
                this._setup.applyStylePreset(styleId as VerifyStyleId, this.brandingGroup);
                this._cdr.markForCheck();
            }
        });
        this.form.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(() => {
            this._cdr.markForCheck();
        });
    }

    get brandingGroup(): FormGroup {
        return this.form.get('branding') as FormGroup;
    }

    get onboardingSettingsGroup(): FormGroup {
        return this.form.get('projectFlow.onboardingSettings') as FormGroup;
    }

    get verifyStyleControl(): FormControl | null {
        return (this.onboardingSettingsGroup?.get('verifyStyle') as FormControl) || null;
    }

    get selectedStyleId(): VerifyStyleId {
        return (this.onboardingSettingsGroup?.get('verifyStyle')?.value as VerifyStyleId) || 'a';
    }

    selectStyle(styleId: VerifyStyleId): void {
        this.onboardingSettingsGroup?.get('verifyStyle')?.setValue(styleId, { emitEvent: false });
        this.onboardingSettingsGroup?.get('enrollmentClient')?.setValue('v2', { emitEvent: false });
        this.onboardingSettingsGroup?.markAsDirty();

        this._setup.applyStylePreset(styleId, this.brandingGroup);
        this._cdr.markForCheck();
    }

    styleName(style: StyleOption): string {
        const lang = (this._transloco.getActiveLang() || 'es').toLowerCase();
        return lang.startsWith('en') ? style.nameEn : style.nameEs;
    }

    styleDesc(style: StyleOption): string {
        const lang = (this._transloco.getActiveLang() || 'es').toLowerCase();
        return lang.startsWith('en') ? style.descriptionEn : style.descriptionEs;
    }

    imageValue(forControl: 'logo' | 'image'): string | null {
        const v = this.brandingGroup?.get(forControl)?.value as string | null | undefined;
        return v || null;
    }

    onAttachmentUploaded(forControl: 'logo' | 'image', payload: { attachment: Attachment }): void {
        if (!this.brandingGroup) return;
        const ctrl = this.brandingGroup.get(forControl);
        ctrl?.setValue(payload?.attachment?.url || '');
        ctrl?.markAsTouched();
        ctrl?.markAsDirty();
        ctrl?.setErrors(null);
        ctrl?.updateValueAndValidity();
        this._cdr.markForCheck();
    }

    onUploadError(forControl: 'logo' | 'image', payload: { error: string }): void {
        if (!this.brandingGroup) return;
        const ctrl = this.brandingGroup.get(forControl);
        const message = payload?.error || 'Could not upload the file.';
        ctrl?.setErrors({ uploadFailed: message });
        this._snack?.open(message, 'OK', { duration: 3000 });
        this._cdr.markForCheck();
    }

    onFileError(_forControl: 'logo' | 'image', payload: { file: File; error: string }): void {
        this._snack?.open(payload?.error || '', 'OK', { duration: 3000 });
    }

    clearImage(forControl: 'logo' | 'image'): void {
        if (!this.brandingGroup) return;
        const ctrl = this.brandingGroup.get(forControl);
        ctrl?.setValue('');
        ctrl?.markAsDirty();
        ctrl?.markAsTouched();
        ctrl?.setErrors(null);
        ctrl?.updateValueAndValidity();
        this._cdr.markForCheck();
    }

    private _loadFonts(): void {
        if (typeof document === 'undefined') return;
        if (document.getElementById('business-verify-fonts')) return;

        const link = document.createElement('link');
        link.id = 'business-verify-fonts';
        link.rel = 'stylesheet';
        link.href =
            'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Inter+Tight:wght@400&family=Inter:wght@400;900&family=Outfit:wght@600&family=Roboto+Condensed:wght@900&family=Space+Grotesk:wght@600&display=swap';
        document.head.appendChild(link);
    }
}
