import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule } from '@jsverse/transloco';

import { STRICT_URL_PATTERN } from 'app/shared/validators/validation-patterns';
import { SetupService } from '../../setup.service';

/**
 * Step 4 — Integrations (redirect URL, denylist source, optional API test).
 * Mirrors verifik-client-panel `SmartEnrollIntegrationsComponent`.
 */
@Component({
    selector: 'setup-integrations',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
    templateUrl: './integrations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupIntegrationsComponent implements OnInit {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _setup = inject(SetupService);

    receivedResponse: any = {};
    refreshingWebhooks = false;
    sendingTestApi = false;
    webhooks: { _id: string; name?: string }[] = [];

    expectedResponse = {
        countryCode: '+57',
        name: 'Mark',
        phone: '1234567890',
    };

    ngOnInit(): void {
        this._requestWebhooks();
    }

    get exampleRedirectUrl(): string {
        return `${this.form?.get('projectFlow.integrations.redirectUrl')?.value || ''}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;
    }

    get integrationsFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.integrations') as FormGroup) || null;
    }

    get isFormReady(): boolean {
        return !this.loading && !!this.integrationsFormGroup;
    }

    private _requestWebhooks(): void {
        if (this.refreshingWebhooks) return;
        this.refreshingWebhooks = true;
        this.integrationsFormGroup?.get('webhook')?.disable();

        this._setup.listWebhooks().subscribe({
            next: (response) => {
                this.webhooks = response.data || [];
                this.refreshingWebhooks = false;
                if (this.webhooks.length) this.integrationsFormGroup?.get('webhook')?.enable();
                else this.integrationsFormGroup?.get('webhook')?.setValue(null);
                this._cdr.markForCheck();
            },
            error: () => {
                this.refreshingWebhooks = false;
                if (this.webhooks.length) this.integrationsFormGroup?.get('webhook')?.enable();
                else this.integrationsFormGroup?.get('webhook')?.setValue(null);
                this._cdr.markForCheck();
            },
        });
    }

    callTestApi(): void {
        if (this.sendingTestApi) return;
        const apiTestType = this.integrationsFormGroup?.get('apiTestType')?.value as string;
        const apiTestValue = this.integrationsFormGroup?.get('apiTestValue')?.value as string;
        const apiUrl = this.integrationsFormGroup?.get('apiUrl')?.value as string;

        if (!apiTestType || !apiTestValue) {
            this._snack.open('Please enter a test type and value', 'Close', { duration: 3000 });
            return;
        }
        if (!apiUrl || !STRICT_URL_PATTERN.test(apiUrl)) {
            this._snack.open('Please enter a valid test URL', 'Close', { duration: 3000 });
            return;
        }

        this.sendingTestApi = true;
        this.integrationsFormGroup?.get('apiTestType')?.disable();
        this.integrationsFormGroup?.get('apiTestValue')?.disable();
        this.integrationsFormGroup?.get('apiUrl')?.disable();

        this._setup.testApi(apiUrl, apiTestType, apiTestValue).subscribe({
            next: (response: any) => {
                this.receivedResponse = response?.data || response || {};
                this.sendingTestApi = false;
                this.integrationsFormGroup?.get('apiTestType')?.enable();
                this.integrationsFormGroup?.get('apiTestValue')?.enable();
                this.integrationsFormGroup?.get('apiUrl')?.enable();
                this._cdr.markForCheck();
            },
            error: (error) => {
                this.sendingTestApi = false;
                this.integrationsFormGroup?.get('apiTestType')?.enable();
                this.integrationsFormGroup?.get('apiTestValue')?.enable();
                this.integrationsFormGroup?.get('apiUrl')?.enable();
                this.receivedResponse = {
                    error: error?.error?.message,
                    name: error?.name || '',
                    ok: false,
                    status: error?.status || 0,
                    statusText: error?.statusText || '',
                };
                this._cdr.markForCheck();
            },
        });
    }

    refreshWebhooks(): void {
        this._requestWebhooks();
    }

    openWebhookSettings(): void {
        window.open('/smart-monitor/webhooks', '_blank');
    }
}
