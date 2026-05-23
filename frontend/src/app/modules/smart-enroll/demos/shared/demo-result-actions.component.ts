import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-demo-result-actions',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './demo-result-actions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoResultActionsComponent {
    @Input() primaryLabel = '';
    @Input() primaryIcon = 'arrow_forward';
    /** When set, primary renders as router link; when null, renders button emitting `primary`. */
    @Input() primaryRouterLink: string | null = '/smart-enroll/demos';

    @Input() secondaryLabel = '';
    @Input() secondaryIcon = 'refresh';
    @Input() showSecondary = true;

    @Output() secondary = new EventEmitter<void>();
    @Output() primary = new EventEmitter<void>();
    /** @deprecated Use `secondary` */
    @Output() tryAgain = new EventEmitter<void>();

    /** @deprecated Use `secondaryLabel` */
    @Input()
    set tryAgainLabel(value: string) {
        this.secondaryLabel = value;
    }

    /** @deprecated Use `primaryLabel` */
    @Input()
    set backToDemosLabel(value: string) {
        this.primaryLabel = value;
    }

    /** @deprecated Use `primaryRouterLink` */
    @Input()
    set backToDemosLink(value: string | null) {
        this.primaryRouterLink = value;
    }

    /** @deprecated Use `secondaryIcon` */
    @Input()
    set tryAgainIcon(value: string) {
        this.secondaryIcon = value;
    }

    /** @deprecated Use `showSecondary` */
    @Input()
    set showTryAgain(value: boolean) {
        this.showSecondary = value;
    }

    onSecondaryClick(): void {
        this.secondary.emit();
        this.tryAgain.emit();
    }

    onPrimaryClick(): void {
        this.primary.emit();
    }
}
