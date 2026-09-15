import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    HUMAN_AUTHN_DEMO_IDS,
    demoRoute,
    getDemoCatalogEntry,
    type DemoId,
} from '../../smart-enroll/demos/demo-catalog';
import { DemoRelatedDocsSectionComponent } from '../../smart-enroll/demos/shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../smart-enroll/demos/shared/demo-related-docs-section.types';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/biometrics/humanauthn`,
    `${DOCS_BASE}/biometrics/humanID-encrypt`,
    `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
    `${DOCS_BASE}/biometrics/humanID-decrypt`,
    `${DOCS_BASE}/biometrics/humanID-preview`,
    `${DOCS_BASE}/biometrics/liveness`,
] as const;

const RELATED_DOC_BADGE_MUTED = [false, false, false, false, false, false] as const;

interface DemoCard {
    id: DemoId;
    href: string;
    stepNumber?: number;
    badgeKey: string;
    titleKey: string;
    descriptionKey: string;
}

@Component({
    selector: 'app-human-authn-demos-hub',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslocoModule, DemoRelatedDocsSectionComponent],
    templateUrl: './human-authn-demos-hub.component.html',
    styleUrl: '../../smart-enroll/demos/styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-auto min-w-0 w-full',
    },
})
export class HumanAuthnDemosHubComponent implements OnInit {
    readonly humanAuthnDemos = HUMAN_AUTHN_DEMO_IDS.map((id, index) =>
        this.demoCard(id, index + 1)
    );

    relatedDocs: DemoRelatedDocItem[] = [];

    private _transloco = inject(TranslocoService);

    ngOnInit(): void {
        this.relatedDocs = this.buildRelatedDocs();
    }

    private demoCard(id: DemoId, humanAuthnStep?: number): DemoCard {
        const slug = id;
        const entry = getDemoCatalogEntry(id);
        return {
            id,
            href: demoRoute(id),
            stepNumber: humanAuthnStep ?? entry.stepNumber,
            badgeKey: `smartEnrollDemos.hub.demos.${slug}.badge`,
            titleKey: `smartEnrollDemos.hub.demos.${slug}.title`,
            descriptionKey: `smartEnrollDemos.hub.demos.${slug}.description`,
        };
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`humanAuthnDemos.hub.relatedDocs.${i}.title`),
            description: this._transloco.translate(`humanAuthnDemos.hub.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`humanAuthnDemos.hub.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
