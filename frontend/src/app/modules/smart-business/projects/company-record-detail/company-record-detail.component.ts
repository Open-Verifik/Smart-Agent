import { CommonModule, Location } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
    signal,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SubscriptionLike } from 'rxjs';
import { ProjectRecordDetailComponent } from '../../../smart-enroll/projects/project-record-detail.component';
import { SmartBusinessService } from '../../smart-business.service';
import type {
    BusinessMemberKYCRecord,
    BusinessRegistrationDossier,
    CorporateDocumentRecord,
} from '../../smart-business.types';

export interface PreviewModalItem {
    title: string;
    subtitle?: string;
    url: string;
    isPdf: boolean;
}

export type KybStepId = 'profile' | 'registries' | 'documents' | 'representatives' | 'verdict';

@Component({
    selector: 'company-record-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatChipsModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTabsModule,
        ClipboardModule,
        TranslocoModule,
        ProjectRecordDetailComponent,
    ],
    templateUrl: './company-record-detail.component.html',
    styleUrls: ['./company-record-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartBusinessCompanyRecordDetailComponent implements OnInit, OnDestroy {
    @ViewChild('docPreviewDialog') private _docPreviewDialogRef?: ElementRef<HTMLDialogElement>;

    private _route: ActivatedRoute;
    private _router: Router;
    private _businessService: SmartBusinessService;
    private _cdr: ChangeDetectorRef;
    private _snack: MatSnackBar;
    private _clipboard: Clipboard;
    private _location: Location | null = null;
    private _transloco: TranslocoService | null = null;
    private _sanitizer: DomSanitizer | null = null;
    private _locationSub?: SubscriptionLike;

    readonly kybSteps: { id: KybStepId; label: string }[] = [
        { id: 'profile', label: 'Corporate Profile' },
        { id: 'registries', label: 'Official Registries & Screening' },
        { id: 'documents', label: 'Corporate Documents & OCR' },
        { id: 'representatives', label: 'Legal Representatives & UBOs' },
        { id: 'verdict', label: 'KYB Verdict & Triage' },
    ];

    constructor(
        route?: ActivatedRoute,
        router?: Router,
        businessService?: SmartBusinessService,
        cdr?: ChangeDetectorRef,
        snack?: MatSnackBar,
        clipboard?: Clipboard
    ) {
        this._route = route || (inject(ActivatedRoute, { optional: true }) as any);
        this._router = router || (inject(Router, { optional: true }) as any);
        this._businessService = businessService || (inject(SmartBusinessService, { optional: true }) as any);
        this._cdr = cdr || (inject(ChangeDetectorRef, { optional: true }) as any);
        this._snack = snack || (inject(MatSnackBar, { optional: true }) as any);
        this._clipboard = clipboard || (inject(Clipboard, { optional: true }) as any);
        try {
            this._location = inject(Location, { optional: true });
        } catch {
            this._location = null;
        }
        try {
            this._transloco = inject(TranslocoService, { optional: true });
        } catch {
            this._transloco = null;
        }
        try {
            this._sanitizer = inject(DomSanitizer, { optional: true });
        } catch {
            this._sanitizer = null;
        }
    }

    projectId = '';
    recordId = '';

    loading = signal(true);
    dossier = signal<BusinessRegistrationDossier | null>(null);

    selectedDocument = signal<CorporateDocumentRecord | null>(null);
    selectedMember = signal<BusinessMemberKYCRecord | null>(null);
    activeAppRegistrationId = signal<string>('');
    activeTransitionMemberId = signal<string>('');
    previewModalItem = signal<PreviewModalItem | null>(null);
    activeKybStep = signal<KybStepId>('profile');
    devView = signal(false);

    private _safeUrlCache = new Map<string, SafeResourceUrl>();
    private _boundDialogs = new WeakSet<HTMLDialogElement>();

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            const nextProjectId = params['projectId'] || '';
            const nextRecordId = params['recordId'] || '';
            const nextAppRegId = params['appRegistrationId'] || this._extractAppRegIdFromUrl(this._location?.path() || '');

            const recordChanged = nextRecordId && nextRecordId !== this.recordId;
            this.projectId = nextProjectId;
            this.recordId = nextRecordId;
            this.activeAppRegistrationId.set(nextAppRegId || '');

            if (recordChanged) {
                this._loadDossier(this.recordId);
            } else if (this.dossier()) {
                this._syncSelectedMemberFromRoute(this.activeAppRegistrationId());
            }
        });

        if (this._location && typeof this._location.subscribe === 'function') {
            this._locationSub = this._location.subscribe((ev) => {
                const path = ev?.url || this._location?.path() || '';
                const nextAppRegId = this._extractAppRegIdFromUrl(path);
                const direction = nextAppRegId ? 'forward' : 'backward';
                this._runDirectionalViewTransition(
                    () => {
                        this.activeAppRegistrationId.set(nextAppRegId);
                        this._syncSelectedMemberFromRoute(nextAppRegId);
                    },
                    direction,
                    nextAppRegId ? 'rep-kyc-heading' : 'company-dossier-heading'
                );
            });
        }
    }

    ngOnDestroy(): void {
        this._locationSub?.unsubscribe?.();
    }

    toggleDevView(): void {
        this.devView.update((v) => !v);
    }

    devSections(): { key: string; value: unknown }[] {
        const d = this.dossier();
        if (!d) return [];
        return [
            {
                key: 'dossierMeta',
                value: {
                    _id: d._id,
                    projectId: d.projectId,
                    status: d.status,
                    createdAt: d.createdAt,
                    updatedAt: d.updatedAt,
                },
            },
            { key: 'company', value: d.company },
            { key: 'officialRegistryChecks', value: d.officialRegistryChecks },
            { key: 'riskAssessment', value: d.riskAssessment },
            { key: 'documents', value: d.documents },
            { key: 'representatives', value: d.representatives },
        ];
    }

    copyJson(value: unknown): void {
        this._clipboard.copy(JSON.stringify(value, null, 2));
        this._snack.open('JSON copied to clipboard', 'OK', { duration: 2000 });
    }

    scrollToKybStep(step: KybStepId): void {
        this.activeKybStep.set(step);
        if (typeof document !== 'undefined') {
            const el = document.getElementById(`step-kyb-${step}`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    kybStepState(step: KybStepId): 'ok' | 'warn' | 'error' | 'info' | 'pending' {
        const d = this.dossier();
        if (!d) return 'pending';
        switch (step) {
            case 'profile':
                return d.company?.legalName && d.company?.taxId ? 'ok' : 'warn';
            case 'registries':
                if (d.officialRegistryChecks?.sanctionsScreening?.status === 'FLAGGED') return 'error';
                return d.officialRegistryChecks?.dianStatus === 'ACTIVE' ? 'ok' : 'info';
            case 'documents':
                return d.documents?.length ? 'ok' : 'pending';
            case 'representatives': {
                const reps = d.representatives || [];
                if (!reps.length) return 'pending';
                if (reps.every((r) => r.kycStatus === 'COMPLETED')) return 'ok';
                if (reps.some((r) => r.kycStatus === 'FAILED')) return 'error';
                return 'info';
            }
            case 'verdict':
                if (d.status === 'COMPLETED') return 'ok';
                if (d.status === 'REJECTED') return 'error';
                if (d.status === 'NEEDS_MANUAL_REVIEW') return 'warn';
                return 'info';
        }
    }

    kybStepIcon(step: KybStepId): string {
        const state = this.kybStepState(step);
        if (state === 'ok') return 'check_circle';
        if (state === 'error') return 'cancel';
        if (state === 'warn') return 'warning';
        if (state === 'info') return 'pending';
        return 'radio_button_unchecked';
    }

    private _extractAppRegIdFromUrl(url: string): string {
        if (!url) return '';
        const match = url.match(/\/app-registration\/([^/?#]+)/i);
        return match?.[1] ? decodeURIComponent(match[1]) : '';
    }

    private _syncSelectedMemberFromRoute(appRegId: string): void {
        const currentDossier = this.dossier();
        if (!currentDossier || !appRegId) {
            this.selectedMember.set(null);
            this._cdr?.markForCheck();
            return;
        }
        const match = (currentDossier.representatives || []).find(
            (m) => m.kycAppRegistrationId === appRegId || m._id === appRegId
        );
        if (match) {
            this.selectedMember.set(match);
            this.activeTransitionMemberId.set(match._id);
        } else {
            this.selectedMember.set(null);
        }
        this._cdr?.markForCheck();
    }

    private _t(key: string, params?: Record<string, any>, fallback = ''): string {
        return this._transloco?.translate(key, params) || fallback;
    }

    private _loadDossier(id: string): void {
        this.loading.set(true);
        this._businessService.getCompanyRecord(id).subscribe({
            next: (data) => {
                this.dossier.set(data);
                if (data.documents?.length) {
                    this.selectedDocument.set(data.documents[0]);
                }
                const targetAppReg =
                    this.activeAppRegistrationId() || this._extractAppRegIdFromUrl(this._location?.path() || '');
                if (targetAppReg) {
                    this.activeAppRegistrationId.set(targetAppReg);
                    this._syncSelectedMemberFromRoute(targetAppReg);
                }
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this.loading.set(false);
                this._snack.open(
                    this._t('smartBusiness.dossier.loadError', undefined, 'Failed to load company dossier'),
                    'OK',
                    { duration: 3000 }
                );
                this._cdr.markForCheck();
            },
        });
    }

    selectDocument(doc: CorporateDocumentRecord): void {
        this.selectedDocument.set(doc);
        this._cdr?.markForCheck();
    }

    isPdfDocument(doc: CorporateDocumentRecord | null | undefined): boolean {
        if (!doc) return false;
        const mime = (doc.mimeType || '').toLowerCase();
        const name = (doc.filename || '').toLowerCase();
        const url = (doc.fileUrl || '').toLowerCase().split('?')[0];
        return mime.includes('pdf') || name.endsWith('.pdf') || url.endsWith('.pdf');
    }

    isImageDocument(doc: CorporateDocumentRecord | null | undefined): boolean {
        if (!doc) return false;
        const mime = (doc.mimeType || '').toLowerCase();
        const name = (doc.filename || '').toLowerCase();
        const url = (doc.fileUrl || '').toLowerCase().split('?')[0];
        return (
            mime.startsWith('image/') ||
            /\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(name) ||
            /\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(url)
        );
    }

    safeResourceUrl(rawUrl: string | null | undefined): SafeResourceUrl | null {
        const url = String(rawUrl || '').trim();
        if (!url) return null;
        if (!this._sanitizer) return url as unknown as SafeResourceUrl;
        let cached = this._safeUrlCache.get(url);
        if (!cached) {
            cached = this._sanitizer.bypassSecurityTrustResourceUrl(url);
            this._safeUrlCache.set(url, cached);
        }
        return cached;
    }

    fileBaseName(filename: string | null | undefined): string {
        const raw = String(filename || 'Document').trim();
        const idx = raw.lastIndexOf('.');
        return idx > 0 ? raw.slice(0, idx) : raw;
    }

    fileExtension(filename: string | null | undefined): string {
        const raw = String(filename || '').trim();
        const idx = raw.lastIndexOf('.');
        return idx > 0 ? raw.slice(idx) : '';
    }

    formatDocCategory(category: string | null | undefined): string {
        const c = String(category || '').toLowerCase();
        if (c === 'business_document' || c === 'certificate_of_incorporation') {
            return 'Business Registration / Chamber';
        }
        if (c === 'tax_document' || c === 'rut') {
            return 'Tax ID Certificate (RUT / TIN)';
        }
        if (c === 'bank_document') {
            return 'Bank Certificate';
        }
        if (c === 'articles_of_incorporation' || c === 'bylaws') {
            return 'Articles of Incorporation';
        }
        return category || 'Corporate Document';
    }

    formatMemberRole(role: string | null | undefined): string {
        const r = String(role || '').toLowerCase();
        if (r === 'legal_representative') return 'Legal Representative';
        if (r === 'beneficial_owner') return 'Beneficial Owner (UBO)';
        if (r === 'director') return 'Board Director';
        if (r === 'executive') return 'Executive Officer';
        if (r === 'signatory') return 'Authorized Signatory';
        return role || 'Legal Representative';
    }

    formatKycStep(step: string | null | undefined): string {
        const s = String(step || '').toLowerCase();
        if (s === 'completed' || s === 'end') return 'Completed';
        if (s === 'liveness' || s === 'biometrics') return 'Liveness Selfie';
        if (s === 'document' || s === 'documents') return 'Identity Document';
        if (s === 'instructions' || s === '1') return 'Invited / Ready';
        return step || 'In Progress';
    }

    memberOcrEntries(member: BusinessMemberKYCRecord | null | undefined): Array<{ label: string; value: string }> {
        const ocr = member?.documentValidation?.OCRExtraction;
        if (!ocr || typeof ocr !== 'object') return [];

        const rows: Array<{ label: string; value: string }> = [];
        const add = (label: string, rawVal: unknown) => {
            if (rawVal === null || rawVal === undefined || rawVal === '') return;
            if (typeof rawVal === 'object') return;
            const cleaned = String(rawVal).split('|')[0].trim();
            if (cleaned) rows.push({ label, value: cleaned });
        };

        add('First Name', ocr.firstName || ocr['First Name']);
        add('Last Name', ocr.lastName || ocr['Last Name']);
        add('Full Name', ocr.fullName || ocr['Full Name']);
        add('Document Type', ocr.documentType || member?.documentValidation?.documentType);
        add('Document Number', ocr.documentNumber || member?.documentValidation?.documentNumber);
        add('Date of Birth', ocr.dateOfBirth || ocr['Date of Birth']);
        add('Place of Birth', ocr.placeOfBirth || ocr['Place of Birth']);
        add('Date of Expedition', ocr.dateOfExpedition || ocr['Date of Issue']);
        add('Expiration Date', ocr.expirationDate || ocr['Expiration Date']);
        add('Sex / Gender', ocr.sex || ocr.gender);
        add('Blood Type', ocr.bloodType);
        add('Height', ocr.height);
        add('Nationality', ocr.nationality);

        return rows;
    }

    openDocumentPreview(doc: CorporateDocumentRecord, event?: Event): void {
        event?.stopPropagation();
        if (!doc?.fileUrl) return;
        this.previewModalItem.set({
            title: doc.filename,
            subtitle: this.formatDocCategory(doc.category),
            url: doc.fileUrl,
            isPdf: this.isPdfDocument(doc),
        });
        this._cdr?.markForCheck();
        setTimeout(() => {
            const dlg = this._docPreviewDialogRef?.nativeElement;
            if (dlg && typeof dlg.showModal === 'function' && !dlg.open) {
                this._attachLightDismissFallback(dlg);
                dlg.showModal();
            }
        }, 0);
    }

    openImagePreview(url: string | undefined | null, title: string, subtitle = ''): void {
        if (!url) return;
        this.previewModalItem.set({
            title,
            subtitle,
            url,
            isPdf: false,
        });
        this._cdr?.markForCheck();
        setTimeout(() => {
            const dlg = this._docPreviewDialogRef?.nativeElement;
            if (dlg && typeof dlg.showModal === 'function' && !dlg.open) {
                this._attachLightDismissFallback(dlg);
                dlg.showModal();
            }
        }, 0);
    }

    closeDocumentPreview(): void {
        const dlg = this._docPreviewDialogRef?.nativeElement;
        if (dlg?.open) {
            dlg.close();
        }
        this.previewModalItem.set(null);
        this._cdr?.markForCheck();
    }

    /**
     * Opens the in-screen Representative KYC view (rendering SmartEnroll's ProjectRecordDetailComponent)
     * and updates the browser URL to:
     * /smart-business/projects/:projectId/records/:recordId/app-registration/:appRegistrationId
     */
    selectMember(member: BusinessMemberKYCRecord, event?: Event): void {
        event?.stopPropagation();
        const targetAppRegId = member.kycAppRegistrationId || member._id;

        this.activeTransitionMemberId.set(member._id);
        this._cdr?.detectChanges?.();

        const targetUrl = `/smart-business/projects/${this.projectId}/records/${this.recordId}/app-registration/${targetAppRegId}`;
        if (this._location && typeof this._location.go === 'function') {
            this._location.go(targetUrl);
        }

        this._runDirectionalViewTransition(
            () => {
                this.activeAppRegistrationId.set(targetAppRegId);
                this.selectedMember.set(member);
            },
            'forward',
            'rep-kyc-heading'
        );
    }

    /**
     * Returns from the Representative KYC view back to the Company Dossier view:
     * /smart-business/projects/:projectId/records/:recordId
     */
    closeMemberDrawer(event?: Event): void {
        event?.stopPropagation();
        const targetUrl = `/smart-business/projects/${this.projectId}/records/${this.recordId}`;
        if (this._location && typeof this._location.go === 'function') {
            this._location.go(targetUrl);
        }

        this._runDirectionalViewTransition(
            () => {
                this.selectedMember.set(null);
                this.activeAppRegistrationId.set('');
            },
            'backward',
            'company-dossier-heading',
            () => {
                this.activeTransitionMemberId.set('');
                this._cdr?.markForCheck();
            }
        );
    }

    openFullKycRecord(member: BusinessMemberKYCRecord, event?: Event): void {
        event?.stopPropagation();
        if (!member?.kycAppRegistrationId || !this.projectId) return;
        void this._router.navigate(['/smart-enroll/projects', this.projectId, 'records', member.kycAppRegistrationId]);
    }

    private _runDirectionalViewTransition(
        updateFn: () => void,
        direction: 'forward' | 'backward',
        focusHeadingId: string,
        cleanupFn?: () => void
    ): void {
        const doc = typeof document !== 'undefined' ? (document as any) : null;
        const applyUpdate = () => {
            updateFn();
            this._cdr?.detectChanges?.();
            this._cdr?.markForCheck?.();
        };

        const focusHeading = () => {
            if (typeof document !== 'undefined') {
                document.getElementById(focusHeadingId)?.focus({ preventScroll: true });
            }
            cleanupFn?.();
        };

        if (!doc || typeof doc.startViewTransition !== 'function') {
            applyUpdate();
            focusHeading();
            return;
        }

        try {
            let transition: any;
            try {
                transition = doc.startViewTransition({
                    update: applyUpdate,
                    types: [direction],
                });
            } catch {
                transition = doc.startViewTransition(applyUpdate);
            }
            if (transition?.finished && typeof transition.finished.finally === 'function') {
                transition.finished.finally(() => focusHeading());
            } else {
                focusHeading();
            }
        } catch {
            applyUpdate();
            focusHeading();
        }
    }

    private _attachLightDismissFallback(dialog: HTMLDialogElement): void {
        if (this._boundDialogs.has(dialog)) return;
        this._boundDialogs.add(dialog);

        if (typeof HTMLDialogElement !== 'undefined' && !('closedBy' in HTMLDialogElement.prototype)) {
            const outside = (e: PointerEvent, dlg: HTMLDialogElement) => {
                const r = dlg.getBoundingClientRect();
                return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
            };
            let pressedOutside = false;
            dialog.addEventListener('pointerdown', (e: PointerEvent) => {
                pressedOutside = outside(e, dialog);
            });
            dialog.addEventListener('pointerup', (e: PointerEvent) => {
                if (pressedOutside && outside(e, dialog)) {
                    dialog.close();
                }
            });
        }
    }

    resendInvite(member: BusinessMemberKYCRecord): void {
        const d = this.dossier();
        if (!d) return;

        this._businessService.resendRepresentativeInvite(d._id, member._id).subscribe({
            next: () => {
                this._snack.open(
                    this._t(
                        'smartBusiness.dossier.inviteResent',
                        { name: `${member.firstName} ${member.lastName}` },
                        `Verification link resent to ${member.firstName} ${member.lastName}`
                    ),
                    'OK',
                    { duration: 3500 }
                );
            },
            error: () => {
                this._snack.open(
                    this._t(
                        'smartBusiness.dossier.inviteSentFallback',
                        { email: member.email },
                        `Link sent to ${member.email} via WhatsApp / Email`
                    ),
                    'OK',
                    { duration: 3500 }
                );
            },
        });
    }

    copyInviteUrl(member: BusinessMemberKYCRecord): void {
        const url = member.inviteUrl || `https://access.verifik.co/verify/${this.projectId}?rep=${member._id}`;
        this._clipboard.copy(url);
        this._snack.open(
            this._t('smartBusiness.dossier.inviteLinkCopied', undefined, 'Direct KYC verification link copied to clipboard'),
            'OK',
            { duration: 2500 }
        );
    }

    approveDossier(): void {
        const d = this.dossier();
        if (!d) return;

        this._businessService.updateCompanyRecordStatus(d._id, 'COMPLETED', 'Approved by compliance officer.').subscribe({
            next: () => {
                this.dossier.update((cur) => (cur ? { ...cur, status: 'COMPLETED' } : cur));
                this._snack.open(
                    this._t('smartBusiness.dossier.approvedSuccess', undefined, 'KYB dossier approved successfully'),
                    'OK',
                    { duration: 3000 }
                );
                this._cdr.markForCheck();
            },
        });
    }

    rejectDossier(): void {
        const d = this.dossier();
        if (!d) return;

        this._businessService.updateCompanyRecordStatus(d._id, 'REJECTED', 'Rejected due to document discrepancy.').subscribe({
            next: () => {
                this.dossier.update((cur) => (cur ? { ...cur, status: 'REJECTED' } : cur));
                this._snack.open(
                    this._t('smartBusiness.dossier.rejectedSuccess', undefined, 'Dossier marked as Rejected'),
                    'OK',
                    { duration: 3000 }
                );
                this._cdr.markForCheck();
            },
        });
    }

    requestResubmission(): void {
        const d = this.dossier();
        if (!d) return;

        this._businessService
            .updateCompanyRecordStatus(d._id, 'NEEDS_MANUAL_REVIEW', 'Resubmission of corporate certificate requested.')
            .subscribe({
                next: () => {
                    this.dossier.update((cur) => (cur ? { ...cur, status: 'NEEDS_MANUAL_REVIEW' } : cur));
                    this._snack.open(
                        this._t('smartBusiness.dossier.resubmissionSuccess', undefined, 'Resubmission request sent to company'),
                        'OK',
                        { duration: 3000 }
                    );
                    this._cdr.markForCheck();
                },
            });
    }

    returnToRecords(): void {
        void this._router.navigate(['/smart-business/projects', this.projectId, 'records']);
    }
}
