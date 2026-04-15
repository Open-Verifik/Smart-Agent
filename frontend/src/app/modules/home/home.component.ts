import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthModalComponent } from '../../layout/common/auth-modal/auth-modal.component';
import { SessionService } from '../../core/services/session.service';
import { HomeService } from './home.service';
import { HomeTutorialModalComponent } from './tutorial-modal/tutorial-modal.component';

interface ShortcutItem {
    id: string;
    titleKey: string;
    subtitleKey: string;
    link: string;
    icon: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterLink,
        TranslocoModule,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    private _homeService = inject(HomeService);
    private _sessionService = inject(SessionService);
    private _matDialog = inject(MatDialog);
    private _transloco = inject(TranslocoService);

    isAuthenticated = signal(false);
    loading = this._homeService.loading;

    shortcuts: ShortcutItem[] = [
        { id: 'chat', titleKey: 'home.shortcuts.chat', subtitleKey: 'nav.ai_validation', link: '/chat', icon: 'chat_bubble' },
        { id: 'postman', titleKey: 'home.shortcuts.postman', subtitleKey: 'nav.api_testing', link: '/postman', icon: 'terminal' },
        { id: 'smart-batch', titleKey: 'home.shortcuts.smartBatch', subtitleKey: 'nav.batch_automation', link: '/smart-batch', icon: 'queue' },
        { id: 'history', titleKey: 'home.shortcuts.history', subtitleKey: 'nav.history_subtitle', link: '/history', icon: 'history' },
        { id: 'smart-scan', titleKey: 'home.shortcuts.smartScan', subtitleKey: 'nav.scan_documents', link: '/smart-enroll/smart-scan', icon: 'document_scanner' },
        { id: 'status-check', titleKey: 'home.shortcuts.statusCheck', subtitleKey: 'nav.system_health', link: '/smart-monitor/status-check', icon: 'monitor_heart' },
        { id: 'incidents', titleKey: 'home.shortcuts.incidents', subtitleKey: 'nav.active_incidents', link: '/smart-monitor/incidents', icon: 'warning' },
        { id: 'webhooks', titleKey: 'home.shortcuts.webhooks', subtitleKey: 'nav.webhooks_subtitle', link: '/smart-monitor/webhooks', icon: 'link' },
        { id: 'smart-reduce', titleKey: 'home.shortcuts.smartReduce', subtitleKey: 'nav.resize_compress_images', link: '/smart-tools/smart-reduce', icon: 'image' },
        { id: 'subscription-plans', titleKey: 'home.shortcuts.subscriptionPlans', subtitleKey: 'nav.manage_subscription', link: '/subscription-plans', icon: 'credit_card' },
        { id: 'add-credits', titleKey: 'home.shortcuts.addCredits', subtitleKey: 'nav.purchase_credits', link: '/add-credits', icon: 'add_circle' },
    ];

    ngOnInit(): void {
        this.isAuthenticated.set(this._sessionService.hasValidAuthentication());
        this._homeService.fetchStats();
    }

    getTotals(): { total: number; ok: number; failed: number; credits: number } {
        return this._homeService.getAggregatedTotals();
    }

    getTopApis() {
        const data = this._homeService.topSalesData();
        return (data ?? []).slice(0, 5);
    }

    /** Display name for API code - uses appFeatures translation or falls back to code */
    getApiDisplayName(code: string): string {
        const key = `appFeatures.${code}.title`;
        const translated = this._transloco.translate(key);
        return translated !== key ? translated : code;
    }

    openAuthModal(): void {
        this._matDialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
        });
    }

    openTutorial(): void {
        this._matDialog.open(HomeTutorialModalComponent, {
            panelClass: 'tutorial-modal-dialog',
            maxWidth: '500px',
        });
    }
}
