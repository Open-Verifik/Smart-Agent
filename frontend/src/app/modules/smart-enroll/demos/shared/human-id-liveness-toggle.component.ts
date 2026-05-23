import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type HumanIdLivenessStage = 'encrypt' | 'decrypt';

@Component({
    selector: 'app-human-id-liveness-toggle',
    standalone: true,
    imports: [NgClass],
    templateUrl: './human-id-liveness-toggle.component.html',
    styleUrl: '../styles/demos-theme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanIdLivenessToggleComponent {
    @Input({ required: true }) stage!: HumanIdLivenessStage;
    @Input({ required: true }) title = '';
    @Input({ required: true }) hint = '';
    @Input() stageLabel = '';
    @Input() enabled = false;
    @Input() showRecommended = false;
    @Input() recommendedLabel = 'Recommended';
    @Input() onLabel = 'On';
    @Input() offLabel = 'Off';

    @Output() enabledChange = new EventEmitter<boolean>();

    toggle(): void {
        this.enabledChange.emit(!this.enabled);
    }
}
