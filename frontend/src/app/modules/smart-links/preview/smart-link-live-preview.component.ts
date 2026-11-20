import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

import {
    VERIFY_FONT_HREF,
    VERIFY_STYLES,
    VERIFY_STYLE_COLOR_DEFAULTS,
    VerifyStyleId,
    parseVerifyStyle,
} from 'app/modules/smart-enroll/projects/setup/preview/preview-verify-shell/verify-style';
import type {
    SmartLinkBranding,
    SmartLinkCompletionMode,
    SmartLinkMode,
    SmartLinkVerifyStyle,
} from '../smart-links.types';

@Component({
    selector: 'smart-link-live-preview',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    templateUrl: './smart-link-live-preview.component.html',
    styleUrls: ['./smart-link-live-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkLivePreviewComponent implements OnInit {
    @Input() projectName = 'Acme SmartLink';
    @Input() branding: Partial<SmartLinkBranding> | null = null;
    @Input() verifyStyle: SmartLinkVerifyStyle | string = 'a';
    @Input() supportedModes: SmartLinkMode[] = ['personal', 'business'];
    @Input() completionMode: SmartLinkCompletionMode = 'receipt';
    @Input() receiptMessage = '';
    @Input() slug = '';

    deviceType: 'desktop' | 'mobile' = 'desktop';
    previewScreen: 'mode' | 'lookup' | 'receipt' = 'mode';
    previewMode: SmartLinkMode = 'personal';

    ngOnInit(): void {
        if (typeof document !== 'undefined' && !document.getElementById('verify-style-fonts')) {
            const sheet = document.createElement('link');
            sheet.id = 'verify-style-fonts';
            sheet.rel = 'stylesheet';
            sheet.href = VERIFY_FONT_HREF;
            document.head.appendChild(sheet);
        }
    }

    get styleId(): VerifyStyleId {
        return parseVerifyStyle(this.verifyStyle) || 'a';
    }

    get effectiveModes(): SmartLinkMode[] {
        return this.supportedModes?.length ? this.supportedModes : ['personal', 'business'];
    }

    get styleVars(): Record<string, string> {
        const id = this.styleId;
        const base = { ...VERIFY_STYLES[id].variables };
        const defaults = VERIFY_STYLE_COLOR_DEFAULTS[id];
        const b = this.branding || {};

        base['--style-cta'] = b.buttonColor || defaults.buttonColor;
        base['--style-cta-text'] = b.buttonTextColor || defaults.buttonTextColor;
        base['--style-ink'] = b.titleColor || defaults.titleColor;
        base['--style-body'] = b.textColor || defaults.textColor;
        base['--style-page'] = b.backgroundColor || defaults.backgroundColor;
        base['--style-page-mobile'] = b.backgroundColor || defaults.backgroundColor;
        return base;
    }

    selectPreviewMode(mode: SmartLinkMode): void {
        this.previewMode = mode;
        this.previewScreen = 'lookup';
    }
}
