import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import {
    FormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Attachment, AttachmentService } from 'app/core/services/attachment.service';
import { FileDropZoneComponent } from 'app/shared/file-drop-zone/file-drop-zone.component';
import { SupportTicketApiPickerComponent } from '../api-picker/support-ticket-api-picker.component';
import { SupportTicketService } from '../support-ticket.service';
import type { SupportTicketCategory, SupportTicketFormData } from '../support-ticket.types';

@Component({
    selector: 'app-support-ticket-create-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        SupportTicketApiPickerComponent,
        FileDropZoneComponent,
    ],
    templateUrl: './support-ticket-create-dialog.component.html',
})
export class SupportTicketCreateDialogComponent implements OnDestroy {
    private readonly _fb = inject(FormBuilder);
    private readonly _dialogRef = inject(MatDialogRef<SupportTicketCreateDialogComponent>);
    private readonly _supportTickets = inject(SupportTicketService);
    private readonly _attachments = inject(AttachmentService);

    private readonly _unsubscribeAll = new Subject<void>();

    saving = signal(false);
    uploadedAttachments = signal<Attachment[]>([]);
    attachmentUploadBusy = signal(false);

    /** Matches client-panel support ticket attachment cap. */
    readonly maxAttachments = 10;

    categoryOptions: { value: SupportTicketCategory; labelKey: string }[] = [
        { value: 'billing', labelKey: 'supportTickets.quickChat.categories.billing' },
        { value: 'integration', labelKey: 'supportTickets.quickChat.categories.integration' },
        { value: 'smartCheck', labelKey: 'supportTickets.quickChat.categories.smartCheck' },
        { value: 'smartScan', labelKey: 'supportTickets.quickChat.categories.smartScan' },
        { value: 'smartEnroll', labelKey: 'supportTickets.quickChat.categories.smartEnroll' },
        { value: 'smartAccess', labelKey: 'supportTickets.quickChat.categories.smartAccess' },
        { value: 'other', labelKey: 'supportTickets.quickChat.categories.other' },
    ];

    form = this._fb.nonNullable.group({
        title: ['', [Validators.required, Validators.maxLength(200)]],
        category: ['smartCheck' as SupportTicketCategory, Validators.required],
        subject: [''],
        api: [''],
        message: ['', [Validators.required, Validators.maxLength(20000)]],
    });

    constructor() {
        const cat = this.form.controls.category;

        cat.valueChanges.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => this._syncValidatorsForCategory());

        this._syncValidatorsForCategory();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    isSmartCheck(): boolean {
        return this.form.controls.category.getRawValue() === 'smartCheck';
    }

    cancel(): void {
        this._dialogRef.close();
    }

    onAttachmentUploaded(event: { attachment: Attachment }): void {
        this.uploadedAttachments.update((list) => [...list, event.attachment]);
    }

    onAttachmentUploadingChange(uploading: boolean): void {
        this.attachmentUploadBusy.set(uploading);
    }

    removeAttachment(id: string): void {
        this.uploadedAttachments.update((list) => list.filter((a) => a._id !== id));
        this._attachments.deleteAttachment(id).pipe(takeUntil(this._unsubscribeAll)).subscribe({
            error: () => {
                /* best-effort delete */
            },
        });
    }

    attachmentDropZoneDisabled(): boolean {
        return (
            this.saving() ||
            this.attachmentUploadBusy() ||
            this.uploadedAttachments().length >= this.maxAttachments
        );
    }

    submit(): void {
        if (this.saving() || this.attachmentUploadBusy()) return;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const v = this.form.getRawValue();
        const messageHtml = `<p>${this._escapeHtml(v.message).replace(/\n/g, '</p><p>')}</p>`;
        const attachmentIds = this.uploadedAttachments().map((a) => a._id);

        const payload: SupportTicketFormData = {
            title: v.title.trim(),
            category: v.category as SupportTicketCategory,
            threads: [{ message: messageHtml, ...(attachmentIds.length ? { attachments: attachmentIds } : {}) }],
            ...(this.isSmartCheck()
                ? {
                      subject: v.subject.trim(),
                      api: v.api.trim(),
                  }
                : {}),
        };

        this.saving.set(true);
        this._supportTickets
            .createSupportTicket(payload)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (res) => {
                    this.saving.set(false);
                    this._dialogRef.close(res.data);
                },
                error: () => {
                    this.saving.set(false);
                },
            });
    }

    private _syncValidatorsForCategory(): void {
        const cat = this.form.controls.category.getRawValue();
        const subjectCtl = this.form.controls.subject;
        const apiCtl = this.form.controls.api;

        if (cat === 'smartCheck') {
            subjectCtl.setValidators([Validators.required, Validators.maxLength(400)]);
            apiCtl.setValidators([Validators.required]);
        } else {
            subjectCtl.clearValidators();
            apiCtl.clearValidators();
            subjectCtl.setValue('', { emitEvent: false });
            apiCtl.setValue('', { emitEvent: false });
        }

        subjectCtl.updateValueAndValidity({ emitEvent: false });
        apiCtl.updateValueAndValidity({ emitEvent: false });
    }

    truncateFileLabel(name: string, maxLen = 48): string {
        if (!name || name.length <= maxLen) return name || '';
        return `${name.slice(0, maxLen - 1)}…`;
    }

    private _escapeHtml(text: string): string {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}
