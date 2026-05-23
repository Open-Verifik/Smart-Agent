import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
    selector: 'app-demo-or-divider',
    standalone: true,
    imports: [TranslocoModule],
    templateUrl: './demo-or-divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoOrDividerComponent {
    @Input() label = '';
    @Input() className = '';

    private _transloco = inject(TranslocoService);

    get resolvedLabel(): string {
        return this.label || this._transloco.translate('smartEnrollDemos.common.orDivider');
    }

    get ariaLabel(): string {
        return this._transloco.translate('smartEnrollDemos.common.orDividerAria');
    }
}
