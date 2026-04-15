import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { WebhooksService } from '../webhooks.service';

@Component({
    selector: 'new-webhook-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslocoModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './new-webhook-dialog.component.html',
    styleUrls: ['./new-webhook-dialog.component.scss'],
})
export class NewWebhookDialogComponent implements OnInit {
    private _fb = inject(FormBuilder);
    private _service = inject(WebhooksService);
    private _splash = inject(FuseSplashScreenService);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _dialogRef = inject(MatDialogRef<NewWebhookDialogComponent>);

    fieldsForm: FormGroup;
    urlError = false;
    testingWebhook = false;
    testResult: { status?: string; statusCode?: number; message?: string; body?: unknown } | null = null;

    constructor(@Inject(MAT_DIALOG_DATA) public data: Record<string, unknown> | null) {
        this.fieldsForm = this._fb.group({
            name: ['', [Validators.required, Validators.maxLength(40)]],
            url: ['', [Validators.required]],
            description: ['', [Validators.required, Validators.maxLength(400)]],
            isActive: [true],
        });
        if (this.data) {
            this.fieldsForm.patchValue(this.data);
        }
    }

    ngOnInit(): void {}

    private _toast(msg: string, isError: boolean): void {
        this._snack.open(msg, undefined, {
            duration: 3000,
            panelClass: isError ? ['bg-red-900', 'text-white'] : ['bg-gray-900', 'text-white'],
        });
    }

    create(): void {
        this.urlError = false;
        if (!this.validateLastURL(this.fieldsForm.value.url)) {
            this.urlError = true;
            return;
        }
        this._splash.show();
        const body = this.fieldsForm.value;
        this._service.create(body).subscribe({
            next: (response) => {
                this._splash.hide();
                this._toast(this._transloco.translate('webhooks.messages.saved'), false);
                this._dialogRef.close(response.data);
            },
            error: () => {
                this._splash.hide();
                this._toast(this._transloco.translate('webhooks.messages.request_failed'), true);
            },
        });
    }

    validateURL(ev: Event): void {
        const input = ev.target as HTMLInputElement;
        const url = input.value;
        if (!url?.length) {
            this.urlError = false;
            return;
        }
        this.urlError = !/^https?:\/\//.test(url);
    }

    validateLastURL(url: string): boolean {
        if (!url?.length) return false;
        return /^https?:\/\//.test(url);
    }

    update(): void {
        this._splash.show();
        const body = this.fieldsForm.value;
        const id = this.data?.['_id'] as string;
        this._service.update(id, body).subscribe({
            next: (response) => {
                this._splash.hide();
                this._dialogRef.close(response.data);
            },
            error: () => {
                this._splash.hide();
                this._toast(this._transloco.translate('webhooks.messages.request_failed'), true);
            },
        });
    }

    delete(): void {
        const id = this.data?.['_id'] as string;
        this._splash.show();
        this._service.delete(id).subscribe({
            next: () => {
                this._splash.hide();
                this._dialogRef.close({ deleted: true });
            },
            error: () => {
                this._splash.hide();
                this._toast(this._transloco.translate('webhooks.messages.request_failed'), true);
            },
        });
    }

    testWebhook(): void {
        const url = this.fieldsForm.get('url')?.value;
        if (!url) {
            this._toast(this._transloco.translate('webhooks.new.url_required_for_test'), true);
            return;
        }
        if (!this.validateLastURL(url)) {
            this.urlError = true;
            this._toast(this._transloco.translate('webhooks.new.invalid_url'), true);
            return;
        }
        this.testingWebhook = true;
        this.testResult = null;
        this._service.test(url).subscribe({
            next: (response) => {
                this.testingWebhook = false;
                this.testResult = response.data;
                if (response.data?.status === 'success') {
                    this._toast(this._transloco.translate('webhooks.new.test_success'), false);
                } else {
                    this._toast(this._transloco.translate('webhooks.new.test_failed'), true);
                }
            },
            error: (error) => {
                this.testingWebhook = false;
                this.testResult = {
                    status: 'fail',
                    message: error.error?.message || this._transloco.translate('webhooks.new.test_error'),
                };
                this._toast(this._transloco.translate('webhooks.new.test_error'), true);
            },
        });
    }
}
