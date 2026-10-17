import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo-stage-hero',
    standalone: true,
    templateUrl: './demo-stage-hero.component.html',
    styles: [':host { display: block; }'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoStageHeroComponent {
    @Input({ required: true }) eyebrow = '';
    @Input({ required: true }) title = '';
    @Input({ required: true }) subtitle = '';
    @Input() chipLabel = '';
    @Input() chipValue = '';
}
