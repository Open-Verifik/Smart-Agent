import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-demo-step-pills',
    standalone: true,
    imports: [NgClass, TranslocoModule],
    templateUrl: './demo-step-pills.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoStepPillsComponent {
    @Input({ required: true }) labels: readonly string[] = [];
    @Input({ required: true }) currentStep = 1;
    @Input() ariaLabel = 'Progress';
}
