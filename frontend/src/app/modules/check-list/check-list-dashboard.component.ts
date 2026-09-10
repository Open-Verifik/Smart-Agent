import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from 'app/core/user/user.service';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { postmanCountryFlagUi } from '../postman/postman-country.util';
import { CheckListService } from './check-list.service';
import { CheckListRecord, CheckListStatus } from './check-list.types';

@Component({
    selector: 'app-check-list-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatMenuModule, TranslocoPipe],
    styleUrls: ['./check-list.styles.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="check-list-root">
            <div class="check-list-wrap">
                <header class="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h1 class="check-list-display mb-2 text-2xl">
                            {{ 'checkList.hello' | transloco: { name: firstName() } }}
                        </h1>
                        <p class="max-w-2xl text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.dashboardSubtitle' | transloco }}
                        </p>
                    </div>
                    <button type="button" class="check-list-cta check-list-pill" (click)="startNew()">
                        {{ 'checkList.newChecklist' | transloco }}
                    </button>
                </header>

                <section class="grid gap-3 sm:grid-cols-3">
                    <article class="check-list-card p-5">
                        <p class="text-xs font-medium text-[var(--cl-muted)]">{{ 'checkList.stats.lists' | transloco }}</p>
                        <p class="check-list-display mt-2 text-3xl">{{ lists().length }}</p>
                    </article>
                    <article class="check-list-card p-5">
                        <p class="text-xs font-medium text-[var(--cl-muted)]">{{ 'checkList.stats.countries' | transloco }}</p>
                        <p class="check-list-display mt-2 text-3xl">{{ countryCount() }}</p>
                    </article>
                    <article class="check-list-card p-5">
                        <p class="text-xs font-medium text-[var(--cl-muted)]">{{ 'checkList.stats.services' | transloco }}</p>
                        <p class="check-list-display mt-2 text-3xl">{{ serviceCount() }}</p>
                    </article>
                </section>

                @if (error()) {
                    <p class="mt-6 text-sm text-rose-600">{{ error() | transloco }}</p>
                }

                <section class="mt-8">
                    <div class="mb-4 flex items-center justify-between">
                        <h2 class="text-base font-semibold">{{ 'checkList.yourLists' | transloco }}</h2>
                    </div>
                    @if (loading()) {
                        <div class="check-list-card p-6 text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.loading' | transloco }}
                        </div>
                    } @else if (!lists().length) {
                        <div class="check-list-card flex flex-col items-start gap-3 p-6">
                            <p class="check-list-display text-xl">{{ 'checkList.emptyTitle' | transloco }}</p>
                            <p class="max-w-lg text-sm text-[var(--cl-muted)]">{{ 'checkList.emptyBody' | transloco }}</p>
                            <button type="button" class="check-list-cta check-list-pill" (click)="startNew()">
                                {{ 'checkList.startFirst' | transloco }}
                            </button>
                        </div>
                    } @else {
                        <div class="grid gap-3 md:grid-cols-2">
                            @for (item of lists(); track item._id) {
                                <article class="check-list-card p-5">
                                    <div class="flex items-start justify-between gap-3">
                                        <a class="min-w-0 flex-1" [routerLink]="['/check-list', item._id]">
                                            <h3 class="text-base font-semibold">{{ item.name }}</h3>
                                            <p class="mt-1 text-sm text-[var(--cl-muted)]">
                                                {{ item.featureCodes.length }}
                                                {{ 'checkList.servicesSaved' | transloco }}
                                            </p>
                                        </a>
                                        <div class="flex shrink-0 items-center gap-1">
                                            <button
                                                type="button"
                                                class="check-list-pill"
                                                [class.is-on]="item.status === 'active'"
                                                [attr.aria-label]="
                                                    item.status === 'active'
                                                        ? ('checkList.markDraft' | transloco)
                                                        : ('checkList.markActive' | transloco)
                                                "
                                                (click)="toggleStatus(item); $event.preventDefault(); $event.stopPropagation()"
                                            >
                                                {{
                                                    (item.status === 'active'
                                                        ? 'checkList.status.active'
                                                        : 'checkList.status.draft'
                                                    ) | transloco
                                                }}
                                            </button>
                                            <button
                                                type="button"
                                                class="check-list-icon-btn"
                                                [matMenuTriggerFor]="listMenu"
                                                [attr.aria-label]="'checkList.moreActions' | transloco"
                                                (click)="$event.preventDefault(); $event.stopPropagation()"
                                            >
                                                <mat-icon class="!h-5 !w-5 !text-[20px]">more_vert</mat-icon>
                                            </button>
                                            <mat-menu #listMenu="matMenu">
                                                <button
                                                    mat-menu-item
                                                    type="button"
                                                    [disabled]="item.status === 'active'"
                                                    (click)="setStatus(item, 'active')"
                                                >
                                                    <mat-icon>check_circle</mat-icon>
                                                    <span>{{ 'checkList.markActive' | transloco }}</span>
                                                </button>
                                                <button
                                                    mat-menu-item
                                                    type="button"
                                                    [disabled]="item.status === 'draft'"
                                                    (click)="setStatus(item, 'draft')"
                                                >
                                                    <mat-icon>edit_note</mat-icon>
                                                    <span>{{ 'checkList.markDraft' | transloco }}</span>
                                                </button>
                                                <button mat-menu-item type="button" (click)="askDelete(item)">
                                                    <mat-icon>delete</mat-icon>
                                                    <span>{{ 'checkList.delete' | transloco }}</span>
                                                </button>
                                            </mat-menu>
                                        </div>
                                    </div>
                                    <a class="mt-4 flex items-center" [routerLink]="['/check-list', item._id]">
                                        @for (country of item.countries.slice(0, 4); track country; let i = $index) {
                                            <span
                                                class="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--cl-card)] bg-[var(--cl-card)]"
                                                [style.margin-left.px]="i ? -8 : 0"
                                                [style.z-index]="10 - i"
                                            >
                                                @switch (flagUi(country).k) {
                                                    @case ('img') {
                                                        <img [src]="$any(flagUi(country)).src" alt="" class="h-full w-full object-cover" />
                                                    }
                                                    @default {
                                                        <span class="text-[10px] font-bold">{{ country.slice(0, 2) }}</span>
                                                    }
                                                }
                                            </span>
                                        }
                                        <span class="ml-3 text-sm text-[var(--cl-muted)]">
                                            {{ item.countries.join(', ') || ('checkList.noCountries' | transloco) }}
                                        </span>
                                    </a>
                                </article>
                            }
                        </div>
                    }
                </section>
            </div>
        </div>
    `,
})
export class CheckListDashboardComponent implements OnInit {
    private _service = inject(CheckListService);
    private _user = inject(UserService);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);
    private _confirm = inject(FuseConfirmationService);
    private _transloco = inject(TranslocoService);

    lists = this._service.lists;
    loading = this._service.loading;
    error = this._service.error;
    user = toSignal(this._user.user$, { initialValue: null });

    firstName = computed(() => {
        const name = this.user()?.name?.trim();
        return name ? name.split(/\s+/)[0] : 'there';
    });

    countryCount = computed(() => {
        const countries = new Set<string>();
        for (const item of this.lists()) {
            item.countries.forEach((country) => countries.add(country));
        }
        return countries.size;
    });

    serviceCount = computed(() =>
        this.lists().reduce((sum, item) => sum + (item.featureCodes?.length || 0), 0)
    );

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._service.list().subscribe(),
            dialogData: {
                titleKey: 'checkList.authRequiredTitle',
                bodyKey: 'checkList.authRequiredBody',
            },
        });
    }

    startNew(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._router.navigate(['/check-list/new']),
            dialogData: {
                titleKey: 'checkList.authRequiredTitle',
                bodyKey: 'checkList.authRequiredBody',
            },
        });
    }

    toggleStatus(item: CheckListRecord): void {
        this.setStatus(item, item.status === 'active' ? 'draft' : 'active');
    }

    setStatus(item: CheckListRecord, status: CheckListStatus): void {
        if (item.status === status) return;
        this._service.update(item._id, { status }).subscribe({
            error: () => this._service.error.set('checkList.errors.saveFailed'),
        });
    }

    askDelete(item: CheckListRecord): void {
        this._confirm
            .open({
                title: this._transloco.translate('checkList.deleteTitle'),
                message: this._transloco.translate('checkList.deleteBody', { name: item.name }),
                actions: {
                    confirm: { label: this._transloco.translate('checkList.deleteConfirm') },
                    cancel: { label: this._transloco.translate('checkList.deleteCancel') },
                },
            })
            .afterClosed()
            .subscribe((result) => {
                if (result !== 'confirmed') return;
                this._service.destroy(item._id).subscribe({
                    error: () => this._service.error.set('checkList.errors.deleteFailed'),
                });
            });
    }

    flagUi(country: string) {
        return postmanCountryFlagUi(country);
    }
}
