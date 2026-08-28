import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import {
    TRADITIONAL_SECTIONS,
    demoRoute,
    getDemoCatalogEntry,
    type DemoId,
    type DemoSectionId,
} from './demo-catalog';

interface DemoCard {
    id: DemoId;
    href: string;
    stepNumber?: number;
    badgeKey: string;
    titleKey: string;
    descriptionKey: string;
}

@Component({
    selector: 'app-demos-hub',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslocoModule],
    templateUrl: './demos-hub.component.html',
    styleUrl: './styles/_demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-auto min-w-0 w-full',
    },
})
export class DemosHubComponent {
    readonly traditionalSections = TRADITIONAL_SECTIONS.map((section) => ({
        id: section.id as DemoSectionId,
        labelKey: `smartEnrollDemos.hub.sections.${section.id}`,
        demos: section.demoIds.map((id) => this.demoCard(id)),
    }));

    private demoCard(id: DemoId): DemoCard {
        const slug = id;
        const entry = getDemoCatalogEntry(id);
        return {
            id,
            href: demoRoute(id),
            stepNumber: entry.stepNumber,
            badgeKey: `smartEnrollDemos.hub.demos.${slug}.badge`,
            titleKey: `smartEnrollDemos.hub.demos.${slug}.title`,
            descriptionKey: `smartEnrollDemos.hub.demos.${slug}.description`,
        };
    }
}
