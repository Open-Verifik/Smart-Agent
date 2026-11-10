import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ColorHexFieldComponent } from '../color-hex-field.component';
import {
    FALLBACK_SCORE_PROFILES,
    resolveScoreProfileId,
    type ScoreProfileOption,
} from './report-score-api.adapter';
import {
    REPORT_THEME_IDS,
    THEME_BLOCK_KINDS,
    THEME_FONT_OPTIONS,
    type ReportThemeId,
    type ReportThemeTokens,
    type ScoreSettings,
    type ThemeBlockConfig,
    type ThemeBlockKind,
} from './report-theme.model';

const MAX_LOGO_BYTES = 400_000;

@Component({
    selector: 'report-theme-panel',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, ColorHexFieldComponent],
    templateUrl: './report-theme-panel.component.html',
    styles: [
        `
            :host {
                display: block;
                color-scheme: light;
            }
            :host-context(.dark) {
                color-scheme: dark;
            }
        `,
    ],
})
export class ReportThemePanelComponent {
    private _transloco = inject(TranslocoService);

    readonly selectedFormatClass = 'border-stone-950 bg-stone-950 text-white';
    readonly idleFormatClass =
        'border-stone-200 bg-white text-stone-800 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-100';
    readonly themes = REPORT_THEME_IDS;
    readonly fonts = THEME_FONT_OPTIONS;
    readonly blocks = THEME_BLOCK_KINDS;

    themeId = input.required<ReportThemeId>();
    tokens = input.required<ReportThemeTokens>();
    score = input.required<ScoreSettings>();
    blockConfig = input<ThemeBlockConfig | null>(null);
    /** API profiles, or the adapter fallback (`cabify_driver`) when that route is down. */
    profiles = input<ScoreProfileOption[]>(FALLBACK_SCORE_PROFILES);

    readonly profileChoices = computed(() => {
        const list = this.profiles();
        return list.length ? list : FALLBACK_SCORE_PROFILES;
    });

    readonly profileId = computed(() => resolveScoreProfileId(this.score().profile, this.profileChoices()));

    themeSelected = output<ReportThemeId>();
    starterRequested = output<ReportThemeId>();
    tokensChange = output<ReportThemeTokens>();
    scoreChange = output<ScoreSettings>();
    addBlock = output<ThemeBlockKind>();
    configChange = output<ThemeBlockConfig>();
    logoRejected = output<void>();

    patchTokens(patch: Partial<ReportThemeTokens>): void {
        this.tokensChange.emit({ ...this.tokens(), ...patch });
    }

    patchScore(patch: Partial<ScoreSettings>): void {
        const next = { ...this.score(), ...patch };
        if (next.enabled) next.profile = resolveScoreProfileId(next.profile, this.profileChoices());
        this.scoreChange.emit(next);
    }

    profileLabel(profile: ScoreProfileOption): string {
        if (profile.labelKey) return this._transloco.translate(profile.labelKey);
        return profile.label || profile.id;
    }

    patchConfig(patch: Partial<ThemeBlockConfig>): void {
        const current = this.blockConfig();
        if (!current) return;
        this.configChange.emit({ ...current, ...patch });
    }

    onLogo(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;
        if (file.size > MAX_LOGO_BYTES) {
            this.logoRejected.emit();
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            const logo = typeof reader.result === 'string' ? reader.result : '';
            if (logo) this.patchTokens({ logo });
        };
        reader.readAsDataURL(file);
    }
}
