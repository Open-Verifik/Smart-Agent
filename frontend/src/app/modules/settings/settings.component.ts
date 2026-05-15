import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { ApiKeySettingsComponent } from './api-key-settings/api-key-settings.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { StaffListComponent } from './staff-list';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { UsageHistoryComponent } from './usage-history/usage-history.component';
import { WorkspaceSettingsComponent } from './workspace-settings/workspace-settings.component';

interface SettingsPanel {
    id: string;
    icon: string;
    title: string;
    description?: string;
    disabled?: boolean;
    badge?: string;
}

interface SettingsSection {
    id: string;
    title: string;
    panels: SettingsPanel[];
}

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        TranslocoModule,
        RouterModule,
        StaffListComponent,
        BillingDetailsComponent,
        PaymentHistoryComponent,
        ApiKeySettingsComponent,
        ProfileSettingsComponent,
        WorkspaceSettingsComponent,
        NotificationSettingsComponent,
        UsageHistoryComponent,
    ],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {
    private _unsubscribeAll = new Subject<void>();

    drawerMode: 'over' | 'side' = 'side';
    drawerOpened = true;
    selectedPanel = 'profile';
    user: any;
    isWeb2User = false;

    sections: SettingsSection[] = [
        {
            id: 'account',
            title: 'settings.sections.account',
            panels: [
                {
                    id: 'profile',
                    icon: 'heroicons_outline:user-circle',
                    title: 'settings.panels.profile',
                    description: 'settings.panels.profile_desc',
                },
                {
                    id: 'security',
                    icon: 'heroicons_outline:lock-closed',
                    title: 'settings.panels.security',
                    description: 'settings.panels.security_desc',
                    badge: 'settings.coming_soon',
                    disabled: true,
                },
                {
                    id: 'notifications',
                    icon: 'heroicons_outline:bell',
                    title: 'settings.panels.notifications',
                    description: 'settings.panels.notifications_desc',
                },
            ],
        },
        {
            id: 'workspace',
            title: 'settings.sections.workspace',
            panels: [
                {
                    id: 'general',
                    icon: 'heroicons_outline:building-office',
                    title: 'settings.panels.general',
                    description: 'settings.panels.general_desc',
                },
                {
                    id: 'team',
                    icon: 'heroicons_outline:user-group',
                    title: 'settings.panels.team',
                    description: 'settings.panels.team_desc',
                },
            ],
        },
        {
            id: 'billing',
            title: 'settings.sections.billing',
            panels: [
                {
                    id: 'billing_details',
                    icon: 'heroicons_outline:credit-card',
                    title: 'settings.panels.billing_details',
                    description: 'settings.panels.billing_details_desc',
                },
                {
                    id: 'payment_history',
                    icon: 'heroicons_outline:document-text',
                    title: 'settings.panels.payment_history',
                    description: 'settings.panels.payment_history_desc',
                },
                {
                    id: 'usage_history',
                    icon: 'heroicons_outline:chart-bar',
                    title: 'settings.panels.usage_history',
                    description: 'settings.panels.usage_history_desc',
                },
            ],
        },
        {
            id: 'developers',
            title: 'settings.sections.developers',
            panels: [
                {
                    id: 'api_key',
                    icon: 'heroicons_outline:key',
                    title: 'settings.panels.api_key',
                    description: 'settings.panels.api_key_desc',
                },
            ],
        },
    ];

    private _panelToSlug: { [key: string]: string } = {
        profile: 'profile',
        security: 'security',
        notifications: 'notifications',
        general: 'general',
        team: 'team',
        billing_details: 'billing-details',
        payment_history: 'payment-history',
        usage_history: 'usage-history',
        api_key: 'api-key',
    };

    private _slugToPanel: { [key: string]: string } = {
        profile: 'profile',
        security: 'security',
        notifications: 'notifications',
        general: 'general',
        team: 'team',
        'billing-details': 'billing_details',
        'payment-history': 'payment_history',
        'usage-history': 'usage_history',
        'api-key': 'api_key',
    };

    constructor(
        private _cdr: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this._loadUserData();
    }

    ngOnInit(): void {
        this._observeMediaChanges();
        this._observeRouteChanges();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /**
     * Persists merged user emitted from profile/general panels and refreshes sidebar/footer bindings.
     */
    onUserChanged(nextUser: unknown): void {
        this.user = nextUser as typeof this.user;
        this._persistAccount();
        this._cdr.markForCheck();
    }

    selectPanel(panelId: string): void {
        const panel = this._findPanel(panelId);
        if (panel?.disabled) return;

        const slug = this._panelToSlug[panelId] || panelId;
        this._router.navigate(['/settings', slug]);
    }

    private _onPanelChanged(panelId: string): void {
        this.selectedPanel = panelId;
        if (this.drawerMode === 'over') {
            this.drawerOpened = false;
        }
        this._cdr.markForCheck();
    }

    isPanelSelected(panelId: string): boolean {
        return this.selectedPanel === panelId;
    }

    private _persistAccount(): void {
        const storageKey = localStorage.getItem('verifik_account') ? 'verifik_account' : 'user';

        localStorage.setItem(storageKey, JSON.stringify(this.user));
    }

    private _loadUserData(): void {
        const userStr = localStorage.getItem('verifik_account') || localStorage.getItem('user');
        this.user = userStr ? JSON.parse(userStr) : null;
        this.isWeb2User = !!this.user;
    }

    private _observeMediaChanges(): void {
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                if (matchingAliases.includes('lg')) {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                } else {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
                this._cdr.markForCheck();
            });
    }

    private _observeRouteChanges(): void {
        this._route.params.pipe(takeUntil(this._unsubscribeAll)).subscribe((params) => {
            const slug = params['panel'];
            if (!slug) return;

            const panelId = this._slugToPanel[slug] || slug;
            const panel = this._findPanel(panelId);
            if (panel && !panel.disabled) {
                this._onPanelChanged(panelId);
            } else {
                this._router.navigate(['/settings', 'profile'], { replaceUrl: true });
            }
        });
    }

    private _findPanel(panelId: string): SettingsPanel | undefined {
        for (const section of this.sections) {
            const panel = section.panels.find((p) => p.id === panelId);
            if (panel) return panel;
        }
        return undefined;
    }
}
