import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { PostmanService } from '../postman/postman.service';
import { postmanCountryFlagUi } from '../postman/postman-country.util';
import { listCheckListCountries } from './check-list-countries';
import { CheckListService } from './check-list.service';

@Component({
    selector: 'app-check-list-create',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, MatIconModule, TranslocoPipe],
    styleUrls: ['./check-list.styles.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="check-list-root">
            <div class="check-list-wrap">
                <a routerLink="/check-list" class="inline-flex items-center gap-2 text-sm font-medium text-[var(--cl-muted)]">
                    <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_back</mat-icon>
                    {{ 'checkList.back' | transloco }}
                </a>

                <header class="mt-6">
                    <p class="mb-2 text-sm text-[var(--cl-muted)]">
                        {{ 'checkList.workspaceKicker' | transloco }}
                    </p>
                    <h1 class="check-list-display text-2xl">
                        {{ 'checkList.createTitle' | transloco }}
                    </h1>
                    <p class="mt-2 max-w-2xl text-sm text-[var(--cl-muted)]">
                        {{ 'checkList.createSubtitle' | transloco }}
                    </p>
                </header>

                @if (error()) {
                    <p class="mt-4 text-sm text-rose-600">{{ error() | transloco }}</p>
                }

                <section class="mt-8">
                    <h2 class="text-base font-semibold">{{ 'checkList.countryQuestion' | transloco }}</h2>
                    <div class="mt-4 flex flex-wrap gap-2">
                        @for (country of countries(); track country) {
                            <button
                                type="button"
                                class="check-list-pill"
                                [class.is-on]="isCountrySelected(country)"
                                (click)="toggleCountry(country)"
                            >
                                @switch (flagUi(country).k) {
                                    @case ('img') {
                                        <img [src]="$any(flagUi(country)).src" alt="" class="h-4 w-4 rounded-full object-cover" />
                                    }
                                    @case ('globe') {
                                        <mat-icon class="!h-4 !w-4 !text-[16px]">public</mat-icon>
                                    }
                                }
                                {{ country }}
                            </button>
                        }
                    </div>
                </section>

                @if (selectedCountries().length) {
                    <section class="mt-8 max-w-xl">
                        <h2 class="text-base font-semibold">{{ 'checkList.nameStep' | transloco }}</h2>
                        <p class="mt-1 text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.nameHint' | transloco }}
                        </p>
                        <input
                            class="check-list-field mt-4"
                            [ngModel]="name()"
                            (ngModelChange)="name.set($event)"
                            [placeholder]="'checkList.namePlaceholder' | transloco"
                        />
                        <button
                            type="button"
                            class="check-list-cta check-list-pill mt-4"
                            [disabled]="!canSave()"
                            (click)="save()"
                        >
                            {{ saving() ? ('checkList.saving' | transloco) : ('checkList.createAction' | transloco) }}
                        </button>
                    </section>
                }
            </div>
        </div>
    `,
})
export class CheckListCreateComponent {
    private _lists = inject(CheckListService);
    private _postman = inject(PostmanService);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);

    name = signal('');
    selectedCountries = signal<string[]>([]);
    saving = this._lists.saving;
    error = this._lists.error;

    countries = computed(() => listCheckListCountries(this._postman.catalogCountries()));

    canSave = computed(
        () => this.selectedCountries().length > 0 && Boolean(this.name().trim()) && !this.saving()
    );

    isCountrySelected(country: string): boolean {
        return this.selectedCountries().some((item) => item.toLowerCase() === country.toLowerCase());
    }

    toggleCountry(country: string): void {
        const next = this.isCountrySelected(country)
            ? this.selectedCountries().filter((item) => item.toLowerCase() !== country.toLowerCase())
            : [...this.selectedCountries(), country];
        this.selectedCountries.set(next);
    }

    save(): void {
        if (!this.canSave()) return;
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                this._lists
                    .create({
                        name: this.name().trim(),
                        countries: this.selectedCountries(),
                        domains: [],
                        featureCodes: [],
                        status: 'draft',
                    })
                    .subscribe({
                        next: () => this._router.navigate(['/check-list']),
                    });
            },
            dialogData: {
                titleKey: 'checkList.authRequiredTitle',
                bodyKey: 'checkList.authRequiredBody',
            },
        });
    }

    flagUi(country: string) {
        return postmanCountryFlagUi(country);
    }
}
