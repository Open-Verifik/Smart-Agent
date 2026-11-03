import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

import { PreviewView, SetupService } from '../setup.service';
import { Branding } from '../setup.types';

import { PreviewSignUpComponent } from './preview-sign-up/preview-sign-up.component';
import { PreviewDocumentScanComponent } from './preview-document-scan/preview-document-scan.component';
import { PreviewDocumentUploadComponent } from './preview-document-upload/preview-document-upload.component';
import { PreviewDocumentResultComponent } from './preview-document-result/preview-document-result.component';
import { PreviewLivenessComponent } from './preview-liveness/preview-liveness.component';
import { PreviewLivenessResultComponent } from './preview-liveness-result/preview-liveness-result.component';
import { PreviewVerifyShellComponent } from './preview-verify-shell/preview-verify-shell.component';
import { parseVerifyStyle, VerifyStyleId } from './preview-verify-shell/verify-style';

type DeviceType = 'desktop' | 'tablet' | 'mobile';
type PreviewVariant = 'auto' | 'verify' | 'legacy';

/**
 * Side-by-side mock of the customer-facing onboarding flow.
 *
 * Mounted in `setup-host` next to the wizard editor. Re-renders live as the
 * editor changes (form values + branding) and exposes a device-type toggle
 * (desktop/tablet/mobile) plus a large MatDialog modal preview. When the parent
 * passes more than one `view`, side chevrons cycle through them. Resets to
 * `view[0]` whenever the wizard step changes (driven by `SetupService.stepIndex$`).
 */
@Component({
    selector: 'smart-enroll-preview',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        TranslocoModule,
        PreviewSignUpComponent,
        PreviewDocumentScanComponent,
        PreviewDocumentUploadComponent,
        PreviewDocumentResultComponent,
        PreviewLivenessComponent,
        PreviewLivenessResultComponent,
        PreviewVerifyShellComponent,
    ],
    templateUrl: './smart-enroll-preview.component.html',
    styleUrl: './smart-enroll-preview.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartEnrollPreviewComponent implements OnInit, OnChanges, OnDestroy {
    @Input() branding: Branding | null = null;
    @Input() form!: FormGroup;
    @Input() view: PreviewView[] = ['signup'];

    @ViewChild('fullscreenDialog') fullscreenDialogTpl?: TemplateRef<unknown>;

    private _setup = inject(SetupService);
    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _dialog = inject(MatDialog);
    private _dialogRef: MatDialogRef<unknown> | null = null;

    currentView: PreviewView = 'signup';
    currentViewIndex = 0;
    deviceType: DeviceType = 'tablet';
    isFullscreen = false;
    previewVariant: PreviewVariant = 'auto';
    stepIndex = 0;

    ngOnInit(): void {
        this.currentView = this.view[0] ?? 'signup';
        this._setup.stepIndex$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((step) => {
            this.stepIndex = step;
            this.currentViewIndex = 0;
            this.currentView = this.view[0] ?? this.currentView;
            this._cdr.markForCheck();
        });
        this._bindFormListeners();
    }

    private _bindFormListeners(): void {
        if (!this.form) return;

        this.form.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
            this._cdr.markForCheck();
        });

        this.form
            .get('projectFlow.onboardingSettings.verifyStyle')
            ?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((styleVal) => {
                this.previewVariant = parseVerifyStyle(styleVal) ? 'verify' : 'auto';
                this._cdr.markForCheck();
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['view'];
        if (!change) return;

        const prev = (change.previousValue || []) as PreviewView[];
        const curr = (change.currentValue || []) as PreviewView[];

        // Parent calls previewViews() per change-detection tick, returning a fresh
        // array reference even when contents are identical. Only reset the index
        // when the actual sequence of views changes (e.g. switching wizard step).
        const sameContent =
            prev.length === curr.length && prev.every((v, i) => v === curr[i]);
        if (sameContent) return;

        this.currentViewIndex = 0;
        this.currentView = curr[0] ?? 'signup';
        this._cdr.markForCheck();
    }

    /** Effective branding object: caller value layered over service defaults. */
    get effectiveBranding(): Branding {
        return { ...this._setup.defaultBranding, ...(this.branding || {}) } as Branding;
    }

    /** Active SmartEnroll v2 style ('a'..'f') if selected or when enrollmentClient is 'v2'. */
    get activeVerifyStyle(): VerifyStyleId | null {
        const rawStyle = this.form?.get('projectFlow.onboardingSettings.verifyStyle')?.value;
        const parsed = parseVerifyStyle(rawStyle);
        if (parsed) return parsed;

        const client = this.form?.get('projectFlow.onboardingSettings.enrollmentClient')?.value;
        if (client === 'v2') return 'a';

        return null;
    }

    /** True when the pixel-by-pixel /verify shell preview should be displayed. */
    get showVerifyPreview(): boolean {
        if (this.previewVariant === 'legacy') return false;
        if (this.previewVariant === 'verify') return true;
        return this.activeVerifyStyle !== null;
    }

    /** Order A (contact first) is the default; B opens on the consent screen like Stripe Identity. */
    get effectiveFlowOrder(): 'contact_first' | 'consent_first' {
        return this.form?.get('projectFlow.onboardingSettings.flowOrder')?.value === 'consent_first' ? 'consent_first' : 'contact_first';
    }

    /** Style ID passed into `<preview-verify-shell>`. Defaults to `'a'` (Forest). */
    get effectiveVerifyStyle(): VerifyStyleId {
        return this.activeVerifyStyle ?? 'a';
    }

    setPreviewVariant(variant: PreviewVariant): void {
        this.previewVariant = variant;
        this._cdr.markForCheck();
    }

    /** FormGroup for the sub-view bound to the current step. */
    get subFormGroup(): FormGroup | null {
        switch (this.currentView) {
            case 'signup':
                return (this.stepIndex === 3
                    ? this.form?.get('projectFlow.representatives.information')
                    : this.form?.get('projectFlow.signUpForm')) as FormGroup | null;
            case 'document-scan':
            case 'document-upload':
            case 'document-result':
                return (this.stepIndex === 3
                    ? this.form?.get('projectFlow.representatives.documents')
                    : this.form?.get('projectFlow.documents')) as FormGroup | null;
            case 'liveness':
            case 'liveness-result':
                return (this.stepIndex === 3
                    ? this.form?.get('projectFlow.representatives.liveness')
                    : this.form?.get('projectFlow.liveness')) as FormGroup | null;
            default:
                return null;
        }
    }

    /** `personal` for representative sub-flow, otherwise the project's target. */
    get formType(): 'business' | 'personal' {
        if (this.stepIndex === 3) return 'personal';
        const t = this.form?.get('target')?.value as 'business' | 'personal' | undefined;
        return t === 'business' ? 'business' : 'personal';
    }

    nextView(): void {
        if (!this.view.length) return;
        this.currentViewIndex = (this.currentViewIndex + 1) % this.view.length;
        this.currentView = this.view[this.currentViewIndex];
        this._cdr.markForCheck();
    }

    previousView(): void {
        if (!this.view.length) return;
        this.currentViewIndex = (this.currentViewIndex - 1 + this.view.length) % this.view.length;
        this.currentView = this.view[this.currentViewIndex];
        this._cdr.markForCheck();
    }

    setDeviceType(device: DeviceType): void {
        this.deviceType = device;
        this._cdr.markForCheck();
    }

    toggleFullscreen(): void {
        if (this._dialogRef) {
            this.closeFullscreen();
            return;
        }
        if (!this.fullscreenDialogTpl) return;

        this.isFullscreen = true;
        this._dialogRef = this._dialog.open(this.fullscreenDialogTpl, {
            width: 'min(1240px, 94vw)',
            maxWidth: 'min(1240px, 94vw)',
            height: 'min(900px, 92vh)',
            maxHeight: 'min(900px, 92vh)',
            panelClass: 'smart-enroll-preview-dialog-panel',
            autoFocus: false,
            restoreFocus: false,
        });

        this._dialogRef
            .afterClosed()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => {
                this.isFullscreen = false;
                this._dialogRef = null;
                this._cdr.markForCheck();
            });

        this._cdr.markForCheck();
    }

    closeFullscreen(): void {
        this._dialogRef?.close();
    }

    ngOnDestroy(): void {
        this._dialogRef?.close();
    }

    /** Tailwind classes for the inner content's max-width based on the device toggle. */
    contentDeviceClasses(): string {
        switch (this.deviceType) {
            case 'mobile':
                return 'max-w-80 w-full mx-auto';
            case 'tablet':
                return 'max-w-160 w-full mx-auto';
            case 'desktop':
            default:
                return 'w-full';
        }
    }
}
