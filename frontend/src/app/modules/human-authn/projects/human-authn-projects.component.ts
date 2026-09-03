import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { requiresHumanAuthnSubscription } from 'app/core/client-settings/override-conditions';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { forkJoin } from 'rxjs';
import {
    HumanAuthnProject,
    HumanAuthnProjectsService,
} from './human-authn-projects.service';

@Component({
    selector: 'app-human-authn-projects',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, RouterLink, TranslocoModule],
    templateUrl: './human-authn-projects.component.html',
    styleUrls: ['./human-authn-projects.component.scss'],
})
export class HumanAuthnProjectsComponent implements OnInit {
    private _projectsService = inject(HumanAuthnProjectsService);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);

    projects = signal<HumanAuthnProject[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);
    noActivePlan = signal(false);

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._loadAfterAuth(),
            panelClass: 'auth-required-dialog',
        });
    }

    private _loadAfterAuth(): void {
        const user = this._projectsService.parseStoredUser();
        if (user?.staff) {
            this._loadProjects();
            return;
        }

        forkJoin({
            plans: this._projectsService.getActiveHumanAuthnPlans(),
            settings: this._projectsService.getClientSettings(),
        }).subscribe({
            next: ({ plans, settings }) => {
                const rows = plans?.data ?? [];
                if (!rows.length && requiresHumanAuthnSubscription(settings?.data)) {
                    this.noActivePlan.set(true);
                    this.loading.set(false);
                    return;
                }
                this._loadProjects();
            },
            error: () => {
                this.error.set('humanAuthnProjects.plansLoadError');
                this.loading.set(false);
            },
        });
    }

    private _loadProjects(): void {
        this._projectsService.listProjects().subscribe({
            next: (rows) => {
                this.projects.set(rows);
                this.loading.set(false);
            },
            error: () => {
                this.error.set('humanAuthnProjects.loadError');
                this.loading.set(false);
            },
        });
    }

    isWorkspaceStaff(): boolean {
        return !!this._projectsService.parseStoredUser()?.staff;
    }

    goToPlans(): void {
        this._router.navigate(['/human-authn/plans']);
    }

    createProject(): void {
        this._router.navigate(['/human-authn/projects', 'new', 'setup', '0']);
    }

    openProject(project: HumanAuthnProject): void {
        this._router.navigate(['/human-authn/projects', project._id, 'setup', '0']);
    }
}
