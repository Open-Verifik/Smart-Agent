import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import {
    HUMAN_AUTHN_DEMO_IDS,
    demoRoute,
    getDemoCatalogEntry,
    type DemoId,
} from '../../smart-enroll/demos/demo-catalog';

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
    imports: [CommonModule, RouterLink, TranslocoModule],
    templateUrl: './human-authn-demos-hub.component.html',
    styleUrl: '../../smart-enroll/demos/styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-auto min-w-0 w-full',
    },
})
export class HumanAuthnDemosHubComponent {
    readonly humanAuthnDemos = HUMAN_AUTHN_DEMO_IDS.map((id, index) =>
        this.demoCard(id, index + 1)
    );

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
}
