import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type { EnrollProject } from '../smart-enroll-projects.types';

export const PROJECT_SECURITY_DIALOG_PANEL_CLASS = 'project-security-dialog-panel';

export interface ProjectSecurityDialogData {
    project: EnrollProject;
}

@Component({
    selector: 'app-project-security-modal',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './project-security-modal.component.html',
    styleUrls: ['./project-security-modal.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectSecurityModalComponent implements OnInit {
    private _fb = inject(FormBuilder);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _dialogRef = inject(MatDialogRef<ProjectSecurityModalComponent>);

    form: FormGroup;
    isDemoModeEnabled = false;
    isUpdating = false;
    hasExistingOTP = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectSecurityDialogData) {
        this.form = this._fb.group({
            demoMode: [this.data.project?.demoMode ?? false],
            demoOTP: ['', [Validators.pattern(/^\d{6}$/)]],
        });
    }

    ngOnInit(): void {
        this.isDemoModeEnabled = this.data.project?.demoMode ?? false;
        this.hasExistingOTP = !!this.data.project?.demoOTP;

        setTimeout(() => {
            this.form.patchValue({
                demoMode: this.isDemoModeEnabled,
                demoOTP: this.hasExistingOTP ? '******' : '',
            });
            this._updateOTPState();
        }, 0);
    }

    onDemoModeToggle(): void {
        this.isDemoModeEnabled = this.form.get('demoMode')?.value;
        this._updateOTPState();

        if (!this.isDemoModeEnabled) {
            this.form.patchValue({ demoOTP: '' });
            this.hasExistingOTP = false;
        }
    }

    onOTPInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        const digitsOnly = input.value.replace(/\D/g, '').slice(0, 6);
        this.form.patchValue({ demoOTP: digitsOnly });

        if (this.hasExistingOTP && digitsOnly.length > 0 && digitsOnly !== '******') {
            this.hasExistingOTP = false;
        }
    }

    onOTPBlur(): void {
        const otpValue = this.form.get('demoOTP')?.value;
        if (!otpValue && this.data.project?.demoOTP) {
            this.form.patchValue({ demoOTP: '******' });
            this.hasExistingOTP = true;
        }
    }

    get otpPlaceholder(): string {
        return this.hasExistingOTP ? 'smartEnrollProjects.securitySettings.otpPlaceholderExisting' : 'smartEnrollProjects.securitySettings.otpPlaceholderNew';
    }

    get isFormValid(): boolean {
        if (!this.isDemoModeEnabled) return true;

        const otpValue = this.form.get('demoOTP')?.value;
        if (this.hasExistingOTP && otpValue === '******') return true;

        return otpValue?.length === 6 && /^\d{6}$/.test(otpValue);
    }

    get hasChanges(): boolean {
        const currentMode = this.form.get('demoMode')?.value;
        const previousMode = this.data.project?.demoMode ?? false;

        if (currentMode !== previousMode) return true;

        if (currentMode) {
            const currentOTP = this.form.get('demoOTP')?.value;
            if (this.hasExistingOTP && currentOTP === '******') return false;
            return currentOTP !== (this.data.project?.demoOTP ?? '');
        }

        return false;
    }

    onSave(): void {
        if (!this.isFormValid) return;

        this.isUpdating = true;
        const formData = this.form.value;

        const payload: Record<string, unknown> = {
            _id: this.data.project._id,
            name: this.data.project.name,
            demoMode: formData.demoMode,
            demoOTP:
                formData.demoMode && formData.demoOTP !== '******'
                    ? formData.demoOTP
                    : this.data.project.demoOTP,
        };

        this._projectsService.updateProject(this.data.project._id, payload).subscribe({
            next: (response) => {
                this.data.project = response.data;
                this.isUpdating = false;
                this._dialogRef.close(true);
            },
            error: () => {
                this.isUpdating = false;
            },
        });
    }

    onCancel(): void {
        this._dialogRef.close(false);
    }

    private _updateOTPState(): void {
        const otpControl = this.form.get('demoOTP');

        if (this.isDemoModeEnabled) {
            otpControl?.enable();
            otpControl?.setValidators([Validators.required, Validators.pattern(/^\d{6}$/)]);
        } else {
            otpControl?.disable();
            otpControl?.clearValidators();
        }
        otpControl?.updateValueAndValidity();
    }
}
