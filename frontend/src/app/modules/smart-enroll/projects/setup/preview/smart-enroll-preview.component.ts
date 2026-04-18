import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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

type DeviceType = 'desktop' | 'tablet' | 'mobile';

/**
 * Side-by-side mock of the customer-facing onboarding flow.
 *
 * Mounted in `setup-host` next to the wizard editor. Re-renders live as the
 * editor changes (form values + branding) and exposes a device-type toggle
 * (desktop/tablet/mobile) plus a fullscreen overlay. When the parent passes
 * more than one `view`, side chevrons cycle through them. Resets to `view[0]`
 * whenever the wizard step changes (driven by `SetupService.stepIndex$`).
 */
@Component({
    selector: 'smart-enroll-preview',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        TranslocoModule,
        PreviewSignUpComponent,
        PreviewDocumentScanComponent,
        PreviewDocumentUploadComponent,
        PreviewDocumentResultComponent,
        PreviewLivenessComponent,
        PreviewLivenessResultComponent,
    ],
    templateUrl: './smart-enroll-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartEnrollPreviewComponent implements OnInit, OnChanges {
    @Input() branding: Branding | null = null;
    @Input() form!: FormGroup;
    @Input() view: PreviewView[] = ['signup'];

    private _setup = inject(SetupService);
    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);

    currentView: PreviewView = 'signup';
    currentViewIndex = 0;
    deviceType: DeviceType = 'tablet';
    isFullscreen = false;
    stepIndex = 0;

    ngOnInit(): void {
        this.currentView = this.view[0] ?? 'signup';
        this._setup.stepIndex$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((step) => {
            this.stepIndex = step;
            this.currentViewIndex = 0;
            this.currentView = this.view[0] ?? this.currentView;
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
        this.isFullscreen = !this.isFullscreen;
        // Lock document scroll while in fullscreen.
        document.body.style.overflow = this.isFullscreen ? 'hidden' : '';
        this._cdr.markForCheck();
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
