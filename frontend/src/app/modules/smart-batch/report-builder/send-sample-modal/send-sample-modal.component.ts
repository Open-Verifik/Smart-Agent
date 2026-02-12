import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function emailsValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').trim();
    if (!value) return { required: true };

    const emails = value.split(',').map((v: string) => v.trim()).filter((v: string) => !!v);
    if (emails.length === 0) return { required: true };

    const invalid = emails.filter((e) => !EMAIL_REGEX.test(e));
    if (invalid.length > 0) return { invalidEmails: { value: invalid } };

    return null;
}

export interface SendSampleModalData {
    defaultSubject: string;
    /** When false, shows "Send Report" instead of "Send Sample Report" (Report Viewer sends real reports). */
    isSample?: boolean;
}

export interface SendSampleModalResult {
    recipients: string[];
    subject?: string;
}

@Component({
    selector: 'send-sample-modal',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        TranslocoModule,
    ],
    template: `
        <div class="flex flex-col w-full max-w-lg">
            <!-- Header -->
            <div class="px-6 pt-6 pb-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25"
                        >
                            <mat-icon class="!w-6 !h-6 text-white icon-size-6">send</mat-icon>
                        </div>
                        <div>
                            <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                                {{ (isSample ? 'smartReport.sendSampleReport' : 'smartReport.sendReport') | transloco }}
                            </h2>
                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                {{ 'smartReport.enterRecipientsAndSubject' | transloco }}
                            </p>
                        </div>
                    </div>
                    <button mat-icon-button (click)="onCancel()" class="!-mr-2">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </div>

            <!-- Form -->
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="px-6 pb-6 space-y-4">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'smartReport.recipientEmails' | transloco }}</mat-label>
                    <textarea
                        matInput
                        formControlName="recipients"
                        [placeholder]="'smartReport.recipientsPlaceholder' | transloco"
                        rows="3"
                    ></textarea>
                    <mat-hint>{{ 'smartReport.separateEmailsWithCommas' | transloco }}</mat-hint>
                    @if (form.get('recipients')?.hasError('required') && form.get('recipients')?.touched) {
                        <mat-error>{{ 'smartReport.atLeastOneRecipient' | transloco }}</mat-error>
                    }
                    @if (form.get('recipients')?.hasError('invalidEmails') && form.get('recipients')?.touched) {
                        <mat-error>{{ 'smartReport.enterValidEmails' | transloco }}</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'smartReport.subjectOptional' | transloco }}</mat-label>
                    <input matInput formControlName="subject" [placeholder]="subjectPlaceholder" />
                </mat-form-field>

                <div class="flex gap-3 pt-2 justify-end border-t border-slate-200 dark:border-slate-700">
                    <button mat-button type="button" (click)="onCancel()" class="!text-slate-600">
                        {{ 'smartReport.cancel' | transloco }}
                    </button>
                    <button
                        mat-flat-button
                        color="primary"
                        type="submit"
                        [disabled]="form.invalid || form.pending"
                        class="!rounded-xl !bg-indigo-600 !text-white"
                    >
                        <mat-icon class="!w-4 !h-4 mr-1">send</mat-icon>
                        {{ (isSample ? 'smartReport.sendSample' : 'smartReport.sendReport') | transloco }}
                    </button>
                </div>
            </form>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class SendSampleModalComponent {
    private _dialogRef = inject(MatDialogRef<SendSampleModalComponent>);
    private _fb = inject(FormBuilder);
    private _data = inject<SendSampleModalData>(MAT_DIALOG_DATA, { optional: true });
    private _transloco = inject(TranslocoService);

    form: FormGroup;

    get isSample(): boolean {
        return this._data?.isSample !== false;
    }

    get subjectPlaceholder(): string {
        return this.isSample
            ? this._transloco.translate('smartReport.subjectOptionalPlaceholder')
            : this._transloco.translate('smartReport.reportBatchPlaceholder');
    }

    constructor() {
        const defaultSubject =
            this._data?.defaultSubject ||
            (this._data?.isSample === false
                ? this._transloco.translate('smartReport.reportBatchPlaceholder')
                : this._transloco.translate('smartReport.subjectOptionalPlaceholder'));
        this.form = this._fb.group({
            recipients: ['', [emailsValidator]],
            subject: [defaultSubject, []],
        });
    }

    onCancel(): void {
        this._dialogRef.close();
    }

    onSubmit(): void {
        const recipientsControl = this.form.get('recipients');
        if (this.form.invalid || !recipientsControl) return;

        const recipientsRaw = (recipientsControl.value || '')
            .split(',')
            .map((v: string) => v.trim())
            .filter((v: string) => !!v);

        const validRecipients = recipientsRaw.filter((e) => EMAIL_REGEX.test(e));
        if (validRecipients.length === 0) {
            recipientsControl.setErrors(
                recipientsRaw.length === 0 ? { required: true } : { invalidEmails: { value: recipientsRaw } }
            );
            recipientsControl.markAsTouched();
            return;
        }

        const result: SendSampleModalResult = {
            recipients: validRecipients,
            subject: this.form.get('subject')?.value?.trim() || undefined,
        };

        this._dialogRef.close(result);
    }
}
