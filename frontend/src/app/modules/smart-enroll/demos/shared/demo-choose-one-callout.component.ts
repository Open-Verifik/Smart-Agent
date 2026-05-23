import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
    selector: 'app-demo-choose-one-callout',
    standalone: true,
    imports: [TranslocoModule],
    templateUrl: './demo-choose-one-callout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoChooseOneCalloutComponent {
    @Input() title = '';
    @Input({ required: true }) description = '';
    @Input() className = '';

    private _transloco = inject(TranslocoService);

    get resolvedTitle(): string {
        return this.title || this._transloco.translate('smartEnrollDemos.common.chooseOneDefaultTitle');
    }
}
