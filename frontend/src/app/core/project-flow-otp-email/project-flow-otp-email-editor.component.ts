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
    OTP_CONTENT_HTML_VARIABLES,
    TCC_FULL_EMAIL_HTML,
    GENERIC_FULL_EMAIL_HTML,
    ContentHtmlVariable,
    HtmlEditableSlot,
    HtmlSlotStatus,
    OtpEmailTemplateBranding,
    OtpEmailTemplateForm,
    buildOtpEmailTemplatesForm,
    EmailTemplateDesign,
    EMPTY_OTP_EMAIL_TEMPLATE_FORM,
    normalizeEmailTemplateDesign,
} from 'app/core/project-flow-otp-email/otp-email-template.types';
import {
    ContentHtmlError,
    ProjectFlowOtpEmailService,
} from 'app/core/project-flow-otp-email/project-flow-otp-email.service';

type OtpEditorTab = 'copy' | 'html';

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
    @Input() emailTemplateDesign: EmailTemplateDesign = 'standard';
    @Input() isTccOtpEmailClient = false;
    @Output() closed = new EventEmitter<void>();
    @Output() saved = new EventEmitter<void>();

    readonly availableLanguages = OTP_EMAIL_TEMPLATE_LANGUAGES;
    readonly layoutOptions: EmailTemplateDesign[] = ['standard', 'custom'];

    private _otpEmailService = inject(ProjectFlowOtpEmailService);
    private _sanitizer = inject(DomSanitizer);
    private _destroy$ = new Subject<void>();
    private _previewRefresh$ = new Subject<void>();

    otpEmailTemplatesForm = signal<Record<string, OtpEmailTemplateForm>>({});
    selectedTemplateLang = signal<string>('en');
    selectedDesign = signal<EmailTemplateDesign>('standard');
    editorTab = signal<OtpEditorTab>('copy');
    htmlSlotStatus = signal<HtmlSlotStatus>({});
    htmlErrors = signal<ContentHtmlError[]>([]);
    previewHtml = signal<string>('');
    safePreviewHtml = signal<SafeHtml | null>(null);
    loadingPreview = signal(false);
    previewError = signal(false);
    savingOtpEmail = signal(false);
    saveError = signal(false);
    testRecipientEmail = signal('');
    sendingTestEmail = signal(false);
    testEmailSuccess = signal(false);
    testEmailError = signal(false);

    isCustomLayout(): boolean {
        return this.selectedDesign() === 'custom';
    }

    allowedVariables(): ContentHtmlVariable[] {
        return OTP_CONTENT_HTML_VARIABLES[this.selectedDesign()] ?? [];
    }

    hasContentHtml(): boolean {
        return Boolean(this.otpEmailTemplatesForm()[this.selectedTemplateLang()]?.contentHtml?.trim());
    }

    isSlotRemoved(slot: HtmlEditableSlot): boolean {
        return this.hasContentHtml() && this.htmlSlotStatus()[slot] === 'removed';
    }

    setEditorTab(tab: OtpEditorTab): void {
        this.editorTab.set(tab);
    }

    insertVariable(token: string): void {
        const lang = this.selectedTemplateLang();
        const current = this.otpEmailTemplatesForm()[lang]?.contentHtml ?? '';
        const snippet = `<%= ${token} %>`;

        this.updateOtpEmailField('contentHtml', current ? `${current}${snippet}` : snippet);
    }

    importTccDefault(): void {
        this.updateOtpEmailField('contentHtml', TCC_FULL_EMAIL_HTML);
    }

    importDefaultLayout(): void {
        this.updateOtpEmailField('contentHtml', GENERIC_FULL_EMAIL_HTML);
    }

    resetContentHtml(): void {
        this.htmlSlotStatus.set({});
        this.htmlErrors.set([]);
        this.updateOtpEmailField('contentHtml', '');
    }

    ngOnInit(): void {
        this.selectedDesign.set(normalizeEmailTemplateDesign(this.emailTemplateDesign));
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

    selectDesign(design: EmailTemplateDesign): void {
        if (this.selectedDesign() === design) return;

        this.selectedDesign.set(design);
        this._previewRefresh$.next();
    }

    resetLanguageToDefaults(): void {
        const lang = this.selectedTemplateLang();

        this.otpEmailTemplatesForm.update((form) => ({
            ...form,
            [lang]: {
                ...EMPTY_OTP_EMAIL_TEMPLATE_FORM,
                buttonColor: this.branding.buttonColor || '#4f46e5',
                buttonTxtColor: this.branding.buttonTextColor || '#FFFFFF',
            },
        }));
        this._previewRefresh$.next();
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
        if (!this.flowId || this.htmlErrors().length) return;
        this.savingOtpEmail.set(true);
        this.saveError.set(false);
        this._otpEmailService
            .updateEmailTemplateSettings(this.flowId, {
                emailTemplates: this.otpEmailTemplatesForm(),
                emailTemplateDesign: this.selectedDesign(),
            })
            .subscribe({
                next: () => {
                    this.savingOtpEmail.set(false);
                    this.saved.emit();
                    this.close();
                },
                error: () => {
                    this.savingOtpEmail.set(false);
                    this.saveError.set(true);
                },
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
                emailTemplateDesign: this.selectedDesign(),
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
            .getPreview(
                this.flowId,
                lang,
                this.otpEmailTemplatesForm()[lang],
                this.selectedDesign()
            )
            .subscribe({
                next: (res) => {
                    const html = res?.data?.html ?? '';
                    this.previewHtml.set(html);
                    this.safePreviewHtml.set(this._sanitizer.bypassSecurityTrustHtml(html));
                    this.htmlSlotStatus.set(res?.data?.htmlSlotStatus ?? {});
                    this.htmlErrors.set(res?.data?.htmlErrors ?? []);
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
