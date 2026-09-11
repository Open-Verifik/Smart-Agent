import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { docsPageUrl } from 'app/core/docs/verifik-docs-urls';
import { daysUntilReset } from './smart-enroll-usage.util';
import { UsageQuotaBarComponent } from './usage-quota-bar.component';
import { UsageQuotaGaugeComponent } from './usage-quota-gauge.component';

export interface EnrollUsagePlanPreview {
    backgroundCheckCount?: number;
    backgroundCheckLimit?: number;
    basicCount?: number;
    basicLimit?: number;
    biometricsCount?: number;
    biometricsLimit?: number;
    emailCount?: number;
    emailsLimit?: number;
    endDate?: string | Date;
    scanDocsCount?: number;
    scanDocsLimit?: number;
    validateNamesCount?: number;
    validateNamesLimit?: number;
}

@Component({
    selector: 'usage-quota-preview',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        TranslocoModule,
        UsageQuotaGaugeComponent,
        UsageQuotaBarComponent,
    ],
    templateUrl: './usage-quota-preview.component.html',
    styleUrls: ['./usage-quota-preview.component.scss'],
})
export class UsageQuotaPreviewComponent {
    private _transloco = inject(TranslocoService);

    @Input({ required: true }) plan!: EnrollUsagePlanPreview;
    @Input() demo = false;

    get usesBiometrics(): boolean {
        return (Number(this.plan?.biometricsLimit) || 0) > 0;
    }

    get enrollUsed(): number {
        return this.usesBiometrics
            ? Number(this.plan?.biometricsCount) || 0
            : Number(this.plan?.basicCount) || 0;
    }

    get enrollLimit(): number {
        return this.usesBiometrics
            ? Number(this.plan?.biometricsLimit) || 0
            : Number(this.plan?.basicLimit) || 0;
    }

    get enrollLabelKey(): string {
        return this.usesBiometrics
            ? 'smartenroll.plans.usage.biometrics'
            : 'smartenroll.plans.usage.basic';
    }

    get daysLeft(): number {
        return daysUntilReset(this.plan?.endDate);
    }

    get unlockCount(): number {
        return this.enrollLimit || 100;
    }

    get showBasicBar(): boolean {
        return this.usesBiometrics && (Number(this.plan?.basicLimit) || 0) > 0;
    }

    get docsUrl(): string {
        const path =
            this._transloco.getActiveLang() === 'es'
                ? '/verifik-es/services/smart-enroll'
                : '/services/smart-enroll';

        return docsPageUrl(path);
    }
}
