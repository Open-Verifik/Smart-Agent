import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { DateTime } from 'luxon';
import { SmartBusinessService } from '../../smart-business.service';
import { BusinessProject, BusinessProjectFlow } from '../../smart-business.types';
import { BUSINESS_VERIFY_STYLES } from '../setup/business-setup.types';
import { isIncompleteSmartAccessWizard, resumeStepIndex } from 'app/modules/smart-access/projects/setup/smart-access-setup-draft.util';

@Component({
    selector: 'business-project-list',
    standalone: true,
    imports: [
        ClipboardModule,
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
    templateUrl: './business-project-list.component.html',
    styleUrls: ['./business-project-list.component.scss'],
})
export class BusinessProjectListComponent implements OnInit {
    private _router: Router;
    private _businessService: SmartBusinessService;
    private _transloco: TranslocoService | null = null;
    private _clipboard: Clipboard;
    private _snackBar: MatSnackBar;

    constructor(
        router?: Router,
        businessService?: SmartBusinessService,
        transloco?: TranslocoService,
        clipboard?: Clipboard,
        snackBar?: MatSnackBar
    ) {
        this._router = router || (inject(Router, { optional: true }) as any);
        this._businessService = businessService || (inject(SmartBusinessService, { optional: true }) as any);
        try {
            this._transloco = transloco ?? inject(TranslocoService, { optional: true });
        } catch {
            this._transloco = null;
        }
        this._clipboard = clipboard || (inject(Clipboard, { optional: true }) as any);
        this._snackBar = snackBar || (inject(MatSnackBar, { optional: true }) as any);
    }

    projects = signal<BusinessProject[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);

    ngOnInit(): void {
        this._loadProjects();
    }

    private _loadProjects(): void {
        this.loading.set(true);
        this.error.set(null);
        this._businessService.listProjects().subscribe({
            next: (list) => {
                this.projects.set(list);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.error.set('smartBusiness.list.loadError');
            },
        });
    }

    createProject(): void {
        void this._router.navigate(['/smart-business/projects', 'new', 'setup', '0']);
    }

    openProject(p: BusinessProject, event?: Event): void {
        event?.stopPropagation();
        void this._router.navigate(['/smart-business/projects', p._id]);
    }

    openProjectOrResume(p: BusinessProject, event?: Event): void {
        event?.stopPropagation();
        if (isIncompleteSmartAccessWizard(p, 6)) {
            void this._router.navigate(['/smart-business/projects', p._id, 'setup', resumeStepIndex(p, 6)]);
            return;
        }
        this.openProject(p);
    }

    openSetup(p: BusinessProject, step = 0, event?: Event): void {
        event?.stopPropagation();
        void this._router.navigate(['/smart-business/projects', p._id, 'setup', step]);
    }

    openRecords(p: BusinessProject, event?: Event): void {
        event?.stopPropagation();
        void this._router.navigate(['/smart-business/projects', p._id, 'records']);
    }

    openSection(p: BusinessProject, section: string, event?: Event): void {
        event?.stopPropagation();
        void this._router.navigate(['/smart-business/projects', p._id], {
            queryParams: { section },
        });
    }

    currentFlow(p: BusinessProject): BusinessProjectFlow | undefined {
        const flows = p?.projectFlows;
        if (!flows?.length) return undefined;
        return flows.find((f) => f.status === 'active') ?? flows[0];
    }

    openLiveVerification(p: BusinessProject, event?: Event): void {
        event?.stopPropagation();
        const url = this.getLiveVerificationUrl(p);
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    copyLiveUrl(p: BusinessProject, event?: Event): void {
        event?.stopPropagation();
        const url = this.getLiveVerificationUrl(p);
        if (url) {
            this._clipboard.copy(url);
            const msg = this._transloco?.translate('smartBusiness.detail.linkCopied') || 'Copied';
            this._snackBar.open(msg, undefined, { duration: 2500 });
        }
    }

    getLiveVerificationUrl(p: BusinessProject): string {
        if (!p?._id) return '';
        const base = (environment.kycBaseUrl || 'https://access.verifik.co').replace(/\/+$/, '');
        return `${base}/verify-business/${p._id}`;
    }

    getStyleId(p: BusinessProject): string {
        const os = this.currentFlow(p)?.onboardingSettings as any;
        const raw = os?.verifyStyle || (typeof os?.style === 'string' ? os.style.replace(/^style_/i, '') : '') || 'a';
        return String(raw).toLowerCase();
    }

    getStyleName(p: BusinessProject): string {
        const styleId = this.getStyleId(p);
        const translated = this._transloco?.translate(`smartBusiness.styles.${styleId}_name`);
        if (translated && translated !== `smartBusiness.styles.${styleId}_name`) {
            return `${styleId.toUpperCase()} — ${translated}`;
        }
        const found = BUSINESS_VERIFY_STYLES.find((s) => s.id === styleId);
        if (!found) return styleId.toUpperCase();
        const lang = (this._transloco?.getActiveLang() || 'en').toLowerCase();
        const label = lang.startsWith('es') ? found.nameEs : found.nameEn;
        return `${found.id.toUpperCase()} — ${label}`;
    }

    formatUpdated(date?: string): string {
        if (!date) return '';
        try {
            const dt = DateTime.fromISO(date);
            if (!dt.isValid) return '';
            const lang = (this._transloco?.getActiveLang() || 'en').toLowerCase();
            return dt.setLocale(lang).toRelative() || dt.toFormat('yyyy-LL-dd');
        } catch {
            return '';
        }
    }

    onStatusToggle(event: MatSlideToggleChange, project: BusinessProject): void {
        const newStatus = event.checked ? 'active' : 'draft';
        const prevStatus = project.status;
        project.status = newStatus;

        const flow = this.currentFlow(project);
        if (flow) {
            flow.status = newStatus;
        }
        this.projects.update((list) => [...list]);

        if (flow?._id) {
            this._businessService.updateProjectFlow(flow._id, { status: newStatus }).subscribe({
                error: () => {},
            });
        }

        this._businessService.updateProject(project._id, { status: newStatus }).subscribe({
            next: (res) => {
                if (res?.data) {
                    this.projects.update((list) =>
                        list.map((item) => (item._id === project._id ? { ...item, ...res.data } : item))
                    );
                }
            },
            error: () => {
                if (event?.source) {
                    event.source.checked = prevStatus === 'active';
                }
                project.status = prevStatus;
                if (flow) flow.status = prevStatus;
                this.projects.update((list) => [...list]);
            },
        });
    }
}
