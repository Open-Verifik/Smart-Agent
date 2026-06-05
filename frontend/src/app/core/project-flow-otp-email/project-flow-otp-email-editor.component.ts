import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import {
    OTP_EMAIL_TEMPLATE_LANGUAGES,
    OtpEmailTemplateBranding,
    OtpEmailTemplateForm,
    buildOtpEmailTemplatesForm,
} from 'app/core/project-flow-otp-email/otp-email-template.types';
import { ProjectFlowOtpEmailService } from 'app/core/project-flow-otp-email/project-flow-otp-email.service';

@Component({
    selector: 'project-flow-otp-email-editor',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, MatButtonModule, MatIconModule],
    templateUrl: './project-flow-otp-email-editor.component.html',
})
export class ProjectFlowOtpEmailEditorComponent implements OnInit, OnDestroy {
    @Input({ required: true }) flowId!: string;
    @Input({ required: true }) projectName!: string;
    @Input({ required: true }) branding!: OtpEmailTemplateBranding;
    @Input() emailTemplates?: Record<string, Partial<OtpEmailTemplateForm>>;
    @Output() closed = new EventEmitter<void>();
    @Output() saved = new EventEmitter<void>();

    readonly availableLanguages = OTP_EMAIL_TEMPLATE_LANGUAGES;

    private _otpEmailService = inject(ProjectFlowOtpEmailService);
    private _sanitizer = inject(DomSanitizer);
    private _destroy$ = new Subject<void>();
    private _previewRefresh$ = new Subject<void>();

    otpEmailTemplatesForm = signal<Record<string, OtpEmailTemplateForm>>({});
    selectedTemplateLang = signal<string>('en');
    previewHtml = signal<string>('');
    safePreviewHtml = signal<SafeHtml | null>(null);
    loadingPreview = signal(false);
    previewError = signal(false);
    savingOtpEmail = signal(false);
    testRecipientEmail = signal('');
    sendingTestEmail = signal(false);
    testEmailSuccess = signal(false);
    testEmailError = signal(false);

    ngOnInit(): void {
        this.otpEmailTemplatesForm.set(buildOtpEmailTemplatesForm(this.emailTemplates, this.branding));

        this._previewRefresh$
            .pipe(debounceTime(350), takeUntil(this._destroy$))
            .subscribe(() => this.loadServerPreview());

        this.loadServerPreview();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    close(): void {
        this.closed.emit();
    }

    selectTemplateLang(lang: string): void {
        this.selectedTemplateLang.set(lang);
        this.loadServerPreview();
    }

    updateOtpEmailField(field: keyof OtpEmailTemplateForm, value: unknown): void {
        const lang = this.selectedTemplateLang();
        this.otpEmailTemplatesForm.update((form) => ({
            ...form,
            [lang]: { ...form[lang], [field]: value },
        }));
        this._previewRefresh$.next();
    }

    saveOtpEmail(): void {
        if (!this.flowId) return;
        this.savingOtpEmail.set(true);
        this._otpEmailService
            .updateEmailTemplates(this.flowId, this.otpEmailTemplatesForm())
            .subscribe({
                next: () => {
                    this.savingOtpEmail.set(false);
                    this.saved.emit();
                    this.close();
                },
                error: () => this.savingOtpEmail.set(false),
            });
    }

    sendTestEmail(): void {
        const email = this.testRecipientEmail().trim();
        if (!this.flowId || !email) return;

        this.sendingTestEmail.set(true);
        this.testEmailSuccess.set(false);
        this.testEmailError.set(false);

        const lang = this.selectedTemplateLang();
        this._otpEmailService
            .sendTestEmail(this.flowId, {
                email,
                language: lang,
                emailTemplate: this.otpEmailTemplatesForm()[lang],
            })
            .subscribe({
                next: (res) => {
                    this.sendingTestEmail.set(false);
                    if (res?.data?.sent) {
                        this.testEmailSuccess.set(true);
                        setTimeout(() => this.testEmailSuccess.set(false), 5000);
                    } else {
                        this.testEmailError.set(true);
                    }
                },
                error: () => {
                    this.sendingTestEmail.set(false);
                    this.testEmailError.set(true);
                },
            });
    }

    private loadServerPreview(): void {
        if (!this.flowId) return;

        const lang = this.selectedTemplateLang();
        this.loadingPreview.set(true);
        this.previewError.set(false);

        this._otpEmailService
            .getPreview(this.flowId, lang, this.otpEmailTemplatesForm()[lang])
            .subscribe({
                next: (res) => {
                    const html = res?.data?.html ?? '';
                    this.previewHtml.set(html);
                    this.safePreviewHtml.set(this._sanitizer.bypassSecurityTrustHtml(html));
                    this.loadingPreview.set(false);
                },
                error: () => {
                    this.loadingPreview.set(false);
                    this.previewError.set(true);
                    this.previewHtml.set('');
                    this.safePreviewHtml.set(null);
                },
            });
    }
}
