import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo-capture-option-heading',
    standalone: true,
    templateUrl: './demo-capture-option-heading.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCaptureOptionHeadingComponent {
    @Input({ required: true }) label!: 'A' | 'B';
    @Input({ required: true }) title = '';
    @Input({ required: true }) subtitle = '';
    @Input() id = '';
    @Input() className = '';
}
