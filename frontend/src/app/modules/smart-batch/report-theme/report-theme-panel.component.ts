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
    themeBlockToggleSupport,
    type ReportDensity,
    type ReportThemeId,
    type ReportThemeTokens,
    type ScoreSettings,
    type ThemeBlockConfig,
    type ThemeBlockKind,
} from './report-theme.model';

const MAX_LOGO_BYTES = 400_000;
const ALLOWED_LOGO_MIME_TYPES = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif']);

@Component({
    selector: 'report-theme-panel',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, ColorHexFieldComponent],
    templateUrl: './report-theme-panel.component.html',
    styleUrls: ['./report-theme-panel.component.scss'],
})
export class ReportThemePanelComponent {
    private _transloco = inject(TranslocoService);

    readonly selectedFormatClass =
        'border-indigo-600 bg-indigo-600 text-white shadow-xs dark:border-indigo-400 dark:bg-indigo-500/25 dark:text-indigo-100';
    readonly idleFormatClass =
        'border-stone-200 bg-white text-stone-700 hover:bg-stone-50 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-300 dark:hover:bg-gray-800';
    readonly themes = REPORT_THEME_IDS;
    readonly fonts = THEME_FONT_OPTIONS;
    readonly blocks = THEME_BLOCK_KINDS;
    readonly densities: ReportDensity[] = ['compact', 'balanced', 'full'];

    themeId = input.required<ReportThemeId>();
    tokens = input.required<ReportThemeTokens>();
    score = input.required<ScoreSettings>();
    blockConfig = input<ThemeBlockConfig | null>(null);
    blockKind = input<ThemeBlockKind | null>(null);
    canUngroup = input(false);
    /** API profiles, or the adapter fallback (`cabify_driver`) when that route is down. */
    profiles = input<ScoreProfileOption[]>(FALLBACK_SCORE_PROFILES);

    readonly profileChoices = computed(() => {
        const list = this.profiles();
        return list.length ? list : FALLBACK_SCORE_PROFILES;
    });

    readonly profileId = computed(() => resolveScoreProfileId(this.score().profile, this.profileChoices()));

    readonly selectedProfileLabel = computed(() => {
        const selectedProfileId = this.profileId();
        const match = this.profileChoices().find((item) => item.id === selectedProfileId);
        return match ? this.profileLabel(match) : selectedProfileId;
    });

    readonly visibilitySummaryCount = computed(() => {
        const current = this.tokens();
        return [
            current.showVerifiedBadge !== false,
            current.showWeights !== false,
            current.showDeductions !== false,
            current.showFields !== false,
            current.showHowItWorks !== false,
        ].filter(Boolean).length;
    });

    readonly blockToggleSupport = computed(() => themeBlockToggleSupport(this.blockKind()));
    readonly showBlockWeights = computed(() => this.blockToggleSupport().showWeights);
    readonly showBlockFields = computed(() => this.blockToggleSupport().showFields);
    readonly showBlockDeductions = computed(() => this.blockToggleSupport().showDeductions);
    readonly hasBlockToggleOverrides = computed(
        () => this.showBlockWeights() || this.showBlockFields() || this.showBlockDeductions()
    );

    themeSelected = output<ReportThemeId>();
    starterRequested = output<ReportThemeId>();
    ungroupRequested = output<void>();
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
        const fileInput = event.target as HTMLInputElement;
        const selectedFile = fileInput.files?.[0];
        fileInput.value = '';
        if (!selectedFile) return;
        if (selectedFile.size > MAX_LOGO_BYTES || !ALLOWED_LOGO_MIME_TYPES.has(selectedFile.type)) {
            this.logoRejected.emit();
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            const logo = typeof reader.result === 'string' ? reader.result : '';
            if (logo) this.patchTokens({ logo });
        };
        reader.readAsDataURL(selectedFile);
    }
}
