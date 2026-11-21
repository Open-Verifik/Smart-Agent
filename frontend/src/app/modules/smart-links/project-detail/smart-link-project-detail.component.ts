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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import QRCode from 'qrcode';
import { forkJoin, map, of, switchMap } from 'rxjs';

import { SmartLinkProjectDeleteDialogComponent } from '../dialogs/smart-link-project-delete-dialog.component';
import { SmartLinkSessionDeleteDialogComponent } from '../dialogs/smart-link-session-delete-dialog.component';
import { SmartLinkSessionEditDialogComponent } from '../dialogs/smart-link-session-edit-dialog.component';
import { SmartLinkSessionResendDialogComponent } from '../dialogs/smart-link-session-resend-dialog.component';
import { SmartLinkLivePreviewComponent } from '../preview/smart-link-live-preview.component';
import {
    formatSessionDate,
    resolveSessionTargetLabel,
    sessionStatePillClass,
} from '../smart-link-session.util';
import { SMART_LINK_STYLE_DEFAULTS, SmartLinksService } from '../smart-links.service';
import type {
    DispatchBatchResult,
    MintedSmartLinkSession,
    SmartLinkAnalytics,
    SmartLinkBranding,
    SmartLinkCompletionMode,
    SmartLinkIdentifier,
    SmartLinkProject,
    SmartLinkResendResult,
    SmartLinkSessionFilters,
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
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
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
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _searchDebounce: ReturnType<typeof setTimeout> | null = null;

    projectId = signal('');
    project = signal<SmartLinkProject | null>(null);
    analytics = signal<SmartLinkAnalytics | null>(null);
    sessions = signal<SmartLinkSessionRecord[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);
    staticQrDataUrl = signal('');

    // Quick inline sessions filters
    sessionSearch = '';
    sessionStateFilter = 'all';
    sessionDocFilter: 'all' | 'true' | 'false' = 'all';

    activeTab = signal<'sessions' | 'dispatch' | 'kit'>('sessions');
    kitTab = signal<'prompt' | 'mcp' | 'embed' | 'curl'>('prompt');
    copiedKey = signal<string | null>(null);

    // Per-link generation form state
    mintEmail = '';
    mintPhone = '';
    mintFullName = '';
    mintRequireDocument = false;
    mintCompletion: SmartLinkCompletionMode = 'receipt';
    mintExternalRef = '';
    mintTtlMinutes = 60;
    mintSendImmediately = false;
    mintSendChannel: 'email' | 'sms' | 'whatsapp' = 'email';
    mintSendRecipient = '';
    mintSendCountryCode = '+1';
    private _mintSendRecipientEdited = false;
    mintBusy = signal(false);
    minted = signal<MintedSmartLinkSession | null>(null);
    mintDispatchResult = signal<SmartLinkResendResult['dispatch'] | null>(null);
    mintError = signal<string | null>(null);

    // Dispatch form state
    quickChannel: 'email' | 'sms' | 'whatsapp' = 'email';
    quickRecipient = '';
    quickName = '';
    campaignName = 'Onboarding Wave 1';
    csvContent = '';
    csvRequireDocument = false;
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

    allowedIdentifiers = computed<SmartLinkIdentifier[]>(() => {
        const ids = this.flow()?.routing?.allowedIdentifiers;
        return Array.isArray(ids) && ids.length ? ids : ['email', 'phone'];
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

    openDeleteHubDialog(): void {
        const proj = this.project();
        if (!proj?._id) return;
        const ref = this._dialog.open(SmartLinkProjectDeleteDialogComponent, {
            width: '460px',
            maxWidth: '95vw',
            data: { project: proj },
        });
        ref.afterClosed().subscribe((res) => {
            if (res?.deleted) {
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.deleteHubToast'),
                    undefined,
                    { duration: 2400 }
                );
                void this._router.navigate(['/smart-links/projects']);
            }
        });
    }

    isActiveFlow(): boolean {
        const st = this.flow()?.status;
        return st === 'active';
    }

    sessionIdentityLabel(session: SmartLinkSessionRecord): string {
        return resolveSessionTargetLabel(
            session,
            this._transloco.translate('smartLinks.detail.openLinkLabel') || 'Open link'
        );
    }

    statePillClass(state?: string): string {
        return sessionStatePillClass(state);
    }

    formatDate(date?: string): string {
        return formatSessionDate(date);
    }

    openAllSessions(state?: string): void {
        void this._router.navigate(['/smart-links/projects', this.projectId(), 'sessions'], {
            ...(state && state !== 'all' ? { queryParams: { state } } : {}),
        });
    }

    openSessionDetail(session: SmartLinkSessionRecord): void {
        void this._router.navigate(['/smart-links/projects', this.projectId(), 'sessions', session._id]);
    }

    onQuickSessionSearch(): void {
        if (this._searchDebounce) clearTimeout(this._searchDebounce);
        this._searchDebounce = setTimeout(() => {
            this._searchDebounce = null;
            this.refreshSessionsAndAnalytics();
        }, 350);
    }

    onQuickFilterChange(): void {
        this.refreshSessionsAndAnalytics();
    }

    openEditDialog(session: SmartLinkSessionRecord, event?: Event): void {
        event?.stopPropagation();
        const ref = this._dialog.open(SmartLinkSessionEditDialogComponent, {
            width: '580px',
            maxWidth: '95vw',
            data: { session },
        });
        ref.afterClosed().subscribe((updated) => {
            if (updated) {
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.updatedToast'),
                    undefined,
                    { duration: 2200 }
                );
                this.refreshSessionsAndAnalytics();
            }
        });
    }

    openResendDialog(session: SmartLinkSessionRecord, event?: Event): void {
        event?.stopPropagation();
        const ref = this._dialog.open(SmartLinkSessionResendDialogComponent, {
            width: '540px',
            maxWidth: '95vw',
            data: { session },
        });
        ref.afterClosed().subscribe((res) => {
            if (res) {
                this.refreshSessionsAndAnalytics();
            }
        });
    }

    openDeleteDialog(session: SmartLinkSessionRecord, event?: Event): void {
        event?.stopPropagation();
        if (session.state === 'COMPLETED') return;
        const ref = this._dialog.open(SmartLinkSessionDeleteDialogComponent, {
            width: '460px',
            maxWidth: '95vw',
            data: { mode: 'single', session },
        });
        ref.afterClosed().subscribe((res) => {
            if (res?.deleted) {
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.deletedToast'),
                    undefined,
                    { duration: 2200 }
                );
                this.refreshSessionsAndAnalytics();
            }
        });
    }

    onMintPrefillChanged(): void {
        if (this._mintSendRecipientEdited) return;
        this.mintSendRecipient =
            this.mintSendChannel === 'email' ? this.mintEmail.trim() : this.mintPhone.trim();
    }

    onMintSendToggleChanged(checked: boolean): void {
        this.mintSendImmediately = checked;
        this.mintError.set(null);
        if (checked && !this._mintSendRecipientEdited) {
            if (!this.mintEmail.trim() && this.mintPhone.trim()) {
                this.mintSendChannel = 'whatsapp';
                this.mintSendRecipient = this.mintPhone.trim();
            } else {
                this.mintSendChannel = 'email';
                this.mintSendRecipient = this.mintEmail.trim();
            }
        }
    }

    onMintSendChannelChanged(next: 'email' | 'sms' | 'whatsapp'): void {
        this.mintSendChannel = next;
        this.mintError.set(null);
        if (!this._mintSendRecipientEdited) {
            this.mintSendRecipient = next === 'email' ? this.mintEmail.trim() : this.mintPhone.trim();
        }
    }

    onMintSendRecipientInput(value: string): void {
        this.mintSendRecipient = value;
        this._mintSendRecipientEdited = Boolean(value.trim());
    }

    mintSession(): void {
        if (!this.projectId() || this.mintBusy()) return;

        const cleanRecipient = this.mintSendRecipient.trim();
        if (this.mintSendImmediately && !cleanRecipient) {
            this.mintError.set(this._transloco.translate('smartLinks.mintModal.sendRecipientRequired'));
            this._cdr.markForCheck();
            return;
        }

        this.mintBusy.set(true);
        this.mintError.set(null);
        this.mintDispatchResult.set(null);

        const email = this.mintEmail.trim() || undefined;
        const phone = this.mintPhone.trim() || undefined;
        const fullName = this.mintFullName.trim() || undefined;
        const cleanCountryCode =
            phone && !phone.startsWith('+') ? this.mintSendCountryCode.trim() || '+1' : undefined;

        this._service
            .createSession(this.projectId(), {
                email,
                phone,
                countryCode: cleanCountryCode,
                fullName,
                requireDocument: Boolean(this.mintRequireDocument),
                completionMode: this.mintCompletion,
                externalRefId: this.mintExternalRef.trim() || undefined,
                expiresInMinutes: Number(this.mintTtlMinutes) || 60,
                createdByChannel: 'portal',
            })
            .pipe(
                switchMap((created) => {
                    if (!this.mintSendImmediately) {
                        return of({ session: created, dispatch: null });
                    }
                    return this._service
                        .resendSession(created.sessionId, {
                            send: true,
                            channel: this.mintSendChannel,
                            recipient: cleanRecipient,
                            countryCode:
                                this.mintSendChannel === 'email'
                                    ? undefined
                                    : this.mintSendCountryCode.trim() || '+1',
                            recipientName: fullName,
                        })
                        .pipe(
                            map((resend) => ({
                                session: {
                                    ...created,
                                    url: resend.url || created.url,
                                    qrDataUrl: resend.qrDataUrl || created.qrDataUrl,
                                    expiresAt: resend.expiresAt || created.expiresAt,
                                    state: resend.state || created.state,
                                },
                                dispatch: resend.dispatch ?? null,
                            }))
                        );
                })
            )
            .subscribe({
                next: ({ session, dispatch }) => {
                    this.minted.set(session);
                    this.mintDispatchResult.set(dispatch);
                    this.mintBusy.set(false);
                    this.refreshSessionsAndAnalytics();
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.mintError.set(err?.error?.message || 'Failed to generate link');
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
        const parsedRecipients = this._service.parseDispatchCsv(this.csvContent, this.quickChannel);
        if (!parsedRecipients.length || this.dispatchBusy()) {
            this.dispatchError.set('No valid CSV rows found. Expect email or phone column.');
            return;
        }

        const batchRequireDocument = Boolean(this.csvRequireDocument);
        const recipients = batchRequireDocument
            ? parsedRecipients.map((r) => ({ ...r, requireDocument: true }))
            : parsedRecipients;

        this.dispatchBusy.set(true);
        this.dispatchError.set(null);
        this._service
            .dispatchBatch(this.projectId(), {
                campaignName: this.campaignName.trim() || 'CSV Batch',
                requireDocument: batchRequireDocument,
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
        const filters: SmartLinkSessionFilters = {
            search: this.sessionSearch.trim() || undefined,
            state: this.sessionStateFilter,
            requireDocument: this.sessionDocFilter,
        };
        forkJoin({
            analytics: this._service.getAnalytics(id),
            sessions: this._service.listSessions(id, 1, 25, filters),
        }).subscribe({
            next: ({ analytics, sessions }) => {
                this.analytics.set(analytics);
                this.sessions.set(sessions?.docs || []);
                this._cdr.markForCheck();
            },
        });
    }
}
