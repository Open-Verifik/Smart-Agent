import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import type { DemoRelatedDocItem } from './demo-related-docs-section.types';

@Component({
    selector: 'app-demo-related-docs-section',
    standalone: true,
    imports: [TranslocoModule],
    templateUrl: './demo-related-docs-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoRelatedDocsSectionComponent {
    @Input({ required: true }) items: DemoRelatedDocItem[] = [];
}
