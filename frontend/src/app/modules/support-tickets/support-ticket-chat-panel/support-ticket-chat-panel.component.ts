import { TextFieldModule } from '@angular/cdk/text-field';
import { DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    Component,
    OnDestroy,
    computed,
    inject,
    signal,
    SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AttachmentService, type Attachment } from 'app/core/services/attachment.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { SessionService } from 'app/core/services/session.service';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar';
import { AuthModalComponent } from 'app/layout/common/auth-modal/auth-modal.component';
import { FileDropZoneComponent } from 'app/shared/file-drop-zone/file-drop-zone.component';
import { Subject, takeUntil } from 'rxjs';
import { SupportTicketCreateDialogComponent } from '../create-dialog/support-ticket-create-dialog.component';
import { SupportTicketService } from '../support-ticket.service';
import {
    fallbackSmartCheckApiLabel,
    findSmartCheckApi,
    humanizeFeatureCode,
    readAppFeatureTitleFromTranslations,
} from '../support-ticket-smartcheck-api-display';
import type {
    SupportTicket,
    SupportTicketCategory,
    SupportTicketStatus,
    SupportTicketThread,
} from '../support-ticket.types';

/**
 * Support ticket rail + thread replies in Quick Chat (master-detail: full-width list OR detail).
 */
@Component({
    selector: 'app-support-ticket-chat-panel',
    standalone: true,
    imports: [
        FormsModule,
        NgClass,
        DatePipe,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        TextFieldModule,
        TranslocoModule,
        FuseScrollbarDirective,
        FileDropZoneComponent,
    ],
    templateUrl: './support-ticket-chat-panel.component.html',
    styleUrls: ['./support-ticket-chat-panel.component.scss'],
})
export class SupportTicketChatPanelComponent implements OnDestroy {
    private readonly _ticketsApi = inject(SupportTicketService);
    private readonly _session = inject(SessionService);
    private readonly _dialog = inject(MatDialog);
    private readonly _sanitizer = inject(DomSanitizer);
    private readonly _transloco = inject(TranslocoService);
    private readonly _attachments = inject(AttachmentService);
    private readonly _unsubscribeAll = new Subject<void>();

    /** User is logged in (Web2 or Web3). */
    readonly hasSession = computed(() => this._session.hasValidAuthentication());

    /** JWT supports Verifik workspace APIs (`clientId` / staff / superAdmin). */
    readonly canUseApi = signal(false);

    loadingList = signal(false);
    listError = signal<string | null>(null);
    tickets = signal<SupportTicket[]>([]);

    selectedTicket = signal<SupportTicket | null>(null);
    loadingDetail = signal(false);
    detailError = signal<string | null>(null);

    replyDraft = signal('');
    sendingReply = signal(false);

    replyUploadedAttachments = signal<Attachment[]>([]);
    replyAttachmentUploadBusy = signal(false);

    /** Matches client-panel support ticket attachment cap. */
    readonly replyMaxAttachments = 10;

    /** Threads for current ticket, oldest first. */
    readonly sortedThreadsList = computed(() => this.sortedThreads(this.selectedTicket()));

    constructor() {
        this._refreshAuthSignals();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /** Called when the support tickets panel opens or auth may have changed. */
    refreshIfNeeded(): void {
        this._refreshAuthSignals();
        if (!this.canUseApi()) {
            this.tickets.set([]);
            this.selectedTicket.set(null);
            this.replyUploadedAttachments.set([]);
            this.replyAttachmentUploadBusy.set(false);
            return;
        }
        this.loadTickets();
    }

    openSignIn(): void {
        this._dialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
        });
    }

    openNewTicket(): void {
        const ref = this._dialog.open(SupportTicketCreateDialogComponent, {
            width: 'min(760px, calc(100vw - 32px))',
            maxWidth: '96vw',
            panelClass: 'support-ticket-create-dialog',
        });
        ref.afterClosed().pipe(takeUntil(this._unsubscribeAll)).subscribe((created: SupportTicket | undefined) => {
            if (created?._id) {
                this.loadTickets();
                this.selectTicketById(created._id);
            } else if (created) {
                this.loadTickets();
            }
        });
    }

    loadTickets(): void {
        if (!this.canUseApi()) return;

        this.loadingList.set(true);
        this.listError.set(null);

        this._ticketsApi
            .getSupportTickets({
                page: 1,
                limit: 50,
                sortBy: 'updatedAt',
                sortOrder: 'desc',
            })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (res) => {
                    this.loadingList.set(false);
                    this.tickets.set(res.data || []);
                },
                error: () => {
                    this.loadingList.set(false);
                    this.listError.set('supportTickets.quickChat.errors.loadList');
                },
            });
    }

    selectTicket(ticket: SupportTicket): void {
        this.detailError.set(null);
        this.replyUploadedAttachments.set([]);
        /** List API does not populate `threads`; avoid rendering ObjectId strings as messages. */
        this.selectedTicket.set({ ...ticket, threads: [] });
        this._loadTicketDetail(ticket._id);
    }

    selectTicketById(id: string): void {
        const t = this.tickets().find((x) => x._id === id);
        if (t) {
            this.selectTicket(t);
            return;
        }
        this.detailError.set(null);
        this.selectedTicket.set(null);
        this.replyUploadedAttachments.set([]);
        this._loadTicketDetail(id);
    }

    clearSelection(): void {
        this.selectedTicket.set(null);
        this.detailError.set(null);
        this.replyDraft.set('');
        this.replyUploadedAttachments.set([]);
    }

    onReplyAttachmentUploaded(event: { attachment: Attachment }): void {
        this.replyUploadedAttachments.update((list) => [...list, event.attachment]);
    }

    onReplyAttachmentUploadingChange(uploading: boolean): void {
        this.replyAttachmentUploadBusy.set(uploading);
    }

    removeReplyAttachment(id: string): void {
        this.replyUploadedAttachments.update((list) => list.filter((a) => a._id !== id));
        this._attachments.deleteAttachment(id).pipe(takeUntil(this._unsubscribeAll)).subscribe({
            error: () => {
                /* best-effort delete */
            },
        });
    }

    replyAttachmentDropZoneDisabled(): boolean {
        return (
            this.sendingReply() ||
            this.replyAttachmentUploadBusy() ||
            this.replyUploadedAttachments().length >= this.replyMaxAttachments
        );
    }

    truncateFileLabel(name: string, maxLen = 48): string {
        if (!name || name.length <= maxLen) return name || '';
        return `${name.slice(0, maxLen - 1)}…`;
    }

    sendReply(): void {
        const ticket = this.selectedTicket();
        const text = this.replyDraft().trim();
        if (!ticket || !text || this.sendingReply() || this.replyAttachmentUploadBusy()) return;

        const html = `<p>${this._escapeHtml(text).split('\n').join('</p><p>')}</p>`;
        const attachmentIds = this.replyUploadedAttachments().map((a) => a._id);

        this.sendingReply.set(true);
        this._ticketsApi
            .createThread(ticket._id, {
                message: html,
                ...(attachmentIds.length ? { attachments: attachmentIds } : {}),
            })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this.replyDraft.set('');
                    this.replyUploadedAttachments.set([]);
                    this.sendingReply.set(false);
                    this._loadTicketDetail(ticket._id);
                    this.loadTickets();
                },
                error: () => {
                    this.sendingReply.set(false);
                    this.detailError.set('supportTickets.quickChat.errors.sendReply');
                },
            });
    }

    sortedThreads(ticket: SupportTicket | null): SupportTicketThread[] {
        const raw = ticket?.threads;
        if (!raw?.length) return [];
        const populated = raw.filter((t): t is SupportTicketThread => this._isPopulatedSupportThread(t));
        if (!populated.length) return [];
        return populated.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    isSupportMessage(thread: SupportTicketThread): boolean {
        return !!this._populatedId(thread.superAdmin);
    }

    /** Full-width detail: ticket open, loading detail, or detail error with no stub ticket yet. */
    showDetailPane(): boolean {
        return Boolean(this.selectedTicket() || this.loadingDetail() || this.detailError());
    }

    /** Full-width list when detail is not shown. */
    showListPane(): boolean {
        return !this.showDetailPane();
    }

    statusBadgeClass(status: SupportTicketStatus): string {
        const map: Record<SupportTicketStatus, string> = {
            pending:
                'bg-amber-100 text-amber-950 ring-1 ring-amber-200/90 dark:bg-amber-950/35 dark:text-amber-100 dark:ring-amber-800/50',
            progress:
                'bg-sky-100 text-sky-950 ring-1 ring-sky-200/90 dark:bg-sky-950/35 dark:text-sky-100 dark:ring-sky-800/50',
            resolved:
                'bg-emerald-100 text-emerald-950 ring-1 ring-emerald-200/90 dark:bg-emerald-950/35 dark:text-emerald-100 dark:ring-emerald-800/50',
            cancelled:
                'bg-stone-200 text-stone-800 ring-1 ring-stone-300/90 dark:bg-stone-800 dark:text-stone-200 dark:ring-stone-600/50',
        };
        return map[status] ?? map.pending;
    }

    categoryLabelKey(cat: SupportTicketCategory): string {
        return `supportTickets.quickChat.categories.${cat}`;
    }

    ticketApiDisplayLabel(): string {
        return this.apiDisplayLabelForTicket(this.selectedTicket());
    }

    /** SmartCheck API / feature label for list rows or detail (same resolution as detail meta). */
    apiDisplayLabelForTicket(ticket: SupportTicket | null): string {
        const code = ticket?.api?.trim();
        if (!code) return '';

        const lang = this._transloco.getActiveLang();
        const tr = this._transloco.getTranslation(lang) as unknown as Record<string, unknown>;
        const meta = findSmartCheckApi(code);
        if (meta) {
            const title = readAppFeatureTitleFromTranslations(tr, meta.value);
            if (title) return title;
            return fallbackSmartCheckApiLabel(meta);
        }
        return humanizeFeatureCode(code);
    }

    /** Subject line for list when it adds detail beyond the title. */
    listRowSubject(t: SupportTicket): string | null {
        const s = t.subject?.trim();
        if (!s) return null;
        if (s === (t.title ?? '').trim()) return null;
        return s;
    }

    populatedThreadAttachments(thread: SupportTicketThread): Attachment[] {
        const raw = thread.attachments;
        if (!raw?.length) return [];
        return raw.filter((a): a is Attachment => this._isPopulatedAttachment(a));
    }

    formatBytes(bytes: number | undefined): string {
        if (bytes == null || Number.isNaN(bytes)) return '';
        const units = ['B', 'KB', 'MB', 'GB'];
        let v = bytes;
        let u = 0;
        while (v >= 1024 && u < units.length - 1) {
            v /= 1024;
            u++;
        }
        return `${v.toFixed(u === 0 ? 0 : 1)} ${units[u]}`;
    }

    async openThreadAttachment(att: Attachment): Promise<void> {
        try {
            await this._attachments.downloadAttachmentFromUrl(att);
        } catch {
            /* ignore */
        }
    }

    /** Same approach as verifik-client-panel support tickets: minimal DOM hygiene + bypass. */
    safeMessageHtml(html: string) {
        if (!html?.trim()) {
            return this._sanitizer.bypassSecurityTrustHtml('');
        }
        if (typeof document === 'undefined') {
            const cleaned = this._sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
            return this._sanitizer.bypassSecurityTrustHtml(cleaned);
        }
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        Array.from(tempDiv.querySelectorAll('script, style')).forEach((el) => el.remove());
        Array.from(tempDiv.querySelectorAll('*')).forEach((el) => {
            Array.from(el.attributes).forEach((attr) => {
                if (!/^on/i.test(attr.name)) return;
                el.removeAttribute(attr.name);
            });
        });
        Array.from(tempDiv.querySelectorAll('a')).forEach((link) => {
            const href = link.getAttribute('href');
            if (!href?.toLowerCase().startsWith('javascript:')) return;
            link.removeAttribute('href');
        });
        return this._sanitizer.bypassSecurityTrustHtml(tempDiv.innerHTML);
    }

    trackByThreadId(_i: number, t: SupportTicketThread): string {
        return t._id;
    }

    trackByTicketId(_i: number, t: SupportTicket): string {
        return t._id;
    }

    private _loadTicketDetail(id: string): void {
        this.loadingDetail.set(true);
        this._ticketsApi
            .getSupportTicket(id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (res) => {
                    this.loadingDetail.set(false);
                    this.selectedTicket.set(res.data);
                    this._maybeMarkSupportThreadsSeen(res.data);
                },
                error: () => {
                    this.loadingDetail.set(false);
                    this.detailError.set('supportTickets.quickChat.errors.loadDetail');
                },
            });
    }

    /**
     * List endpoints may return thread ObjectIds only; populated threads expose `_id` and `message` strings.
     */
    private _isPopulatedSupportThread(thread: unknown): thread is SupportTicketThread {
        if (!thread || typeof thread !== 'object' || Array.isArray(thread)) return false;
        const t = thread as Partial<SupportTicketThread>;
        return typeof t._id === 'string' && typeof t.message === 'string';
    }

    private _maybeMarkSupportThreadsSeen(ticket: SupportTicket): void {
        const ids =
            ticket.threads
                ?.filter(
                    (th): th is SupportTicketThread =>
                        this._isPopulatedSupportThread(th) &&
                        this.isSupportMessage(th) &&
                        !th.seenAt,
                )
                .map((th) => th._id) ?? [];
        if (!ids.length) return;

        this._ticketsApi
            .markThreadsAsSeen(ids)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => this.loadTickets(),
                error: () => {
                    /* non-blocking */
                },
            });
    }

    private _refreshAuthSignals(): void {
        const ok =
            this._session.isTokenValid() &&
            (() => {
                const payload = AuthUtils.getJwtPayload(localStorage.getItem('accessToken') || '');
                if (!payload) return false;
                return Boolean(
                    payload['clientId'] ?? payload['staffId'] ?? payload['superAdminId'],
                );
            })();
        this.canUseApi.set(ok);
    }

    private _populatedId(ref: unknown): string | null {
        if (!ref) return null;
        if (typeof ref === 'string') return ref;
        if (typeof ref === 'object' && ref !== null && '_id' in ref) {
            return String((ref as { _id: string })._id);
        }
        return null;
    }

    private _isPopulatedAttachment(a: unknown): a is Attachment {
        if (!a || typeof a !== 'object' || Array.isArray(a)) return false;
        const o = a as Partial<Attachment>;
        return typeof o._id === 'string' && typeof o.url === 'string';
    }

    private _escapeHtml(text: string): string {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}
