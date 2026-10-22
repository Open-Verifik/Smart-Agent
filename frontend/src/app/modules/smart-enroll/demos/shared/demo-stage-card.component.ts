import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo-stage-card',
    standalone: true,
    templateUrl: './demo-stage-card.component.html',
    styles: [':host { display: block; }'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoStageCardComponent {
    @Input({ required: true }) number = '01';
    @Input({ required: true }) title = '';
    @Input() help = '';
}
