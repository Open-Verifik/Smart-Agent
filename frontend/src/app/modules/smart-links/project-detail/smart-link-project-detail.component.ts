import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import QRCode from 'qrcode';
import { forkJoin } from 'rxjs';

import { SmartLinkLivePreviewComponent } from '../preview/smart-link-live-preview.component';
import { SMART_LINK_STYLE_DEFAULTS, SmartLinksService } from '../smart-links.service';
import type {
    DispatchBatchResult,
    MintedSmartLinkSession,
    SmartLinkAnalytics,
    SmartLinkBranding,
    SmartLinkCompletionMode,
    SmartLinkDefaultMode,
    SmartLinkMode,
    SmartLinkProject,
    SmartLinkSessionRecord,
    SmartLinkVerifyStyle,
} from '../smart-links.types';

@Component({
    selector: 'smart-link-project-detail',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        TranslocoModule,
        SmartLinkLivePreviewComponent,
    ],
    templateUrl: './smart-link-project-detail.component.html',
    styleUrls: ['./smart-link-project-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkProjectDetailComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(SmartLinksService);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    projectId = signal('');
    project = signal<SmartLinkProject | null>(null);
    analytics = signal<SmartLinkAnalytics | null>(null);
    sessions = signal<SmartLinkSessionRecord[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);
    staticQrDataUrl = signal('');

    activeTab = signal<'sessions' | 'dispatch' | 'kit'>('sessions');
    kitTab = signal<'prompt' | 'mcp' | 'embed' | 'curl'>('prompt');
    copiedKey = signal<string | null>(null);

    // Mint form state
    mintMode: SmartLinkDefaultMode = 'prompt';
    mintCompletion: SmartLinkCompletionMode = 'receipt';
    mintEmail = '';
    mintPhone = '';
    mintTaxId = '';
    mintFullName = '';
    mintExternalRef = '';
    mintTtlMinutes = 60;
    mintBusy = signal(false);
    minted = signal<MintedSmartLinkSession | null>(null);
    mintError = signal<string | null>(null);

    // Dispatch form state
    quickChannel: 'email' | 'sms' | 'whatsapp' = 'email';
    quickRecipient = '';
    quickName = '';
    campaignName = 'Onboarding Wave 1';
    csvContent = '';
    dispatchBusy = signal(false);
    dispatchResult = signal<DispatchBatchResult | null>(null);
    dispatchError = signal<string | null>(null);

    flow = computed(() => this._service.extractSmartLinkFlow(this.project()));
    publicUrl = computed(() => (this.project() ? this._service.buildPublicLinkUrl(this.project()!) : ''));

    brandPreview = computed<SmartLinkBranding>(() => {
        const p = this.project();
        const f = this.flow();
        const styleId = (f?.onboardingSettings?.verifyStyle || 'a') as SmartLinkVerifyStyle;
        const styleDefaults = SMART_LINK_STYLE_DEFAULTS[styleId] || SMART_LINK_STYLE_DEFAULTS.a;
        return {
            logo: '',
            image: '',
            ...styleDefaults,
            ...(p?.branding || {}),
        } as SmartLinkBranding;
    });

    swatchEntries = computed(() => {
        const b = this.brandPreview();
        return [
            { label: 'Button', value: b.buttonColor },
            { label: 'Button text', value: b.buttonTextColor },
            { label: 'Canvas', value: b.backgroundColor },
            { label: 'Title', value: b.titleColor },
            { label: 'Text', value: b.textColor },
        ];
    });

    supportedModes = computed<SmartLinkMode[]>(() => {
        const modes = this.flow()?.routing?.supportedModes;
        return modes?.length ? modes : ['personal', 'business'];
    });

    activeKitText = computed(() => {
        const p = this.project();
        if (!p) return '';
        switch (this.kitTab()) {
            case 'prompt':
                return this._service.buildAiPromptKit(p);
            case 'mcp':
                return this._service.buildMcpSnippet(p);
            case 'embed':
                return this._service.buildEmbedSnippet(p);
            case 'curl':
                return this._service.buildCurlSnippet(p);
        }
    });

    ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
            const id = (params.get('projectId') || '').trim();
            if (!id) return;
            this.projectId.set(id);
            this.loadHub();
        });
    }

    loadHub(): void {
        const id = this.projectId();
        if (!id) return;
        this.loading.set(true);
        this.error.set(null);

        forkJoin({
            project: this._service.getSmartLinkProject(id),
            analytics: this._service.getAnalytics(id),
            sessions: this._service.listSessions(id, 1, 25),
        }).subscribe({
            next: ({ project, analytics, sessions }) => {
                this.project.set(project);
                this.analytics.set(analytics);
                this.sessions.set(sessions?.docs || []);
                if (project) {
                    const f = this._service.extractSmartLinkFlow(project);
                    if (f?.routing?.defaultMode) this.mintMode = f.routing.defaultMode;
                    if (f?.completion?.mode) this.mintCompletion = f.completion.mode;
                    const url = this._service.buildPublicLinkUrl(project);
                    if (url) {
                        void QRCode.toDataURL(url, { margin: 1, width: 200 }).then((qr) => {
                            this.staticQrDataUrl.set(qr);
                            this._cdr.markForCheck();
                        });
                    }
                }
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.error.set(err?.error?.message || 'Unable to load SmartLink hub');
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    goBack(): void {
        void this._router.navigate(['/smart-links/projects']);
    }

    editSetup(step = 0): void {
        void this._router.navigate(['/smart-links/projects', this.projectId(), 'setup', step]);
    }

    openLive(): void {
        const url = this.publicUrl();
        if (!url || typeof window === 'undefined') return;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    isActiveFlow(): boolean {
        const st = this.flow()?.status;
        return st === 'active';
    }

    mintSession(): void {
        if (!this.projectId() || this.mintBusy()) return;
        this.mintBusy.set(true);
        this.mintError.set(null);

        this._service
            .createSession(this.projectId(), {
                requestedMode: this.mintMode,
                completionMode: this.mintCompletion,
                externalRefId: this.mintExternalRef.trim() || undefined,
                expiresInMinutes: Number(this.mintTtlMinutes) || 60,
                createdByChannel: 'portal',
                prefill: {
                    email: this.mintEmail.trim() || undefined,
                    phone: this.mintPhone.trim() || undefined,
                    taxId: this.mintTaxId.trim() || undefined,
                    fullName: this.mintFullName.trim() || undefined,
                },
            })
            .subscribe({
                next: (res) => {
                    this.minted.set(res);
                    this.mintBusy.set(false);
                    this.refreshSessionsAndAnalytics();
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.mintError.set(err?.error?.message || 'Failed to mint session');
                    this.mintBusy.set(false);
                    this._cdr.markForCheck();
                },
            });
    }

    revoke(session: SmartLinkSessionRecord): void {
        this._service.revokeSession(session._id).subscribe({
            next: () => this.refreshSessionsAndAnalytics(),
        });
    }

    sendQuickDispatch(): void {
        const target = this.quickRecipient.trim();
        if (!target || this.dispatchBusy()) return;

        this.dispatchBusy.set(true);
        this.dispatchError.set(null);
        this._service
            .dispatchBatch(this.projectId(), {
                campaignName: this.campaignName.trim() || 'Quick Send',
                recipients: [
                    {
                        channel: this.quickChannel,
                        email: this.quickChannel === 'email' ? target : undefined,
                        phone: this.quickChannel !== 'email' ? target : undefined,
                        name: this.quickName.trim() || undefined,
                    },
                ],
            })
            .subscribe({
                next: (res) => {
                    this.dispatchResult.set(res);
                    this.dispatchBusy.set(false);
                    this.quickRecipient = '';
                    this.refreshSessionsAndAnalytics();
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.dispatchError.set(err?.error?.message || 'Dispatch failed');
                    this.dispatchBusy.set(false);
                    this._cdr.markForCheck();
                },
            });
    }

    onCsvFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement | null;
        const file = input?.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            this.csvContent = String(reader.result || '');
            this._cdr.markForCheck();
        };
        reader.readAsText(file);
    }

    sendCsvCampaign(): void {
        const recipients = this._service.parseDispatchCsv(this.csvContent, this.quickChannel);
        if (!recipients.length || this.dispatchBusy()) {
            this.dispatchError.set('No valid CSV rows found. Expect email or phone column.');
            return;
        }

        this.dispatchBusy.set(true);
        this.dispatchError.set(null);
        this._service
            .dispatchBatch(this.projectId(), {
                campaignName: this.campaignName.trim() || 'CSV Batch',
                recipients,
            })
            .subscribe({
                next: (res) => {
                    this.dispatchResult.set(res);
                    this.dispatchBusy.set(false);
                    this.refreshSessionsAndAnalytics();
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.dispatchError.set(err?.error?.message || 'CSV dispatch failed');
                    this.dispatchBusy.set(false);
                    this._cdr.markForCheck();
                },
            });
    }

    copyText(key: string, text: string): void {
        if (!text) return;
        this._clipboard.copy(text);
        this.copiedKey.set(key);
        this._snack.open(this._transloco.translate('smartLinks.actions.copied'), undefined, { duration: 1800 });
        setTimeout(() => {
            if (this.copiedKey() === key) {
                this.copiedKey.set(null);
                this._cdr.markForCheck();
            }
        }, 2000);
    }

    private refreshSessionsAndAnalytics(): void {
        const id = this.projectId();
        forkJoin({
            analytics: this._service.getAnalytics(id),
            sessions: this._service.listSessions(id, 1, 25),
        }).subscribe({
            next: ({ analytics, sessions }) => {
                this.analytics.set(analytics);
                this.sessions.set(sessions?.docs || []);
                this._cdr.markForCheck();
            },
        });
    }
}
