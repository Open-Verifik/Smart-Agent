import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { ColorHexFieldComponent } from '../color-hex-field.component';
import {
    CABIFY_DRIVER_PROFILE,
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
})
export class ReportThemePanelComponent {
    readonly themes = REPORT_THEME_IDS;
    readonly fonts = THEME_FONT_OPTIONS;
    readonly blocks = THEME_BLOCK_KINDS;
    readonly cabifyProfile = CABIFY_DRIVER_PROFILE;

    themeId = input.required<ReportThemeId>();
    tokens = input.required<ReportThemeTokens>();
    score = input.required<ScoreSettings>();
    blockConfig = input<ThemeBlockConfig | null>(null);

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
        this.scoreChange.emit({ ...this.score(), ...patch });
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
