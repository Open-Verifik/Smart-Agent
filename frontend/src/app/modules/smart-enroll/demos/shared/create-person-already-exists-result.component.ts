import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { DemoRasterImageComponent } from './demo-raster-image.component';
import { DemoResultActionsComponent } from './demo-result-actions.component';

@Component({
    selector: 'app-create-person-already-exists-result',
    standalone: true,
    imports: [RouterLink, TranslocoModule, DemoRasterImageComponent, DemoResultActionsComponent],
    templateUrl: './create-person-already-exists-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePersonAlreadyExistsResultComponent {
    @Input({ required: true }) previews: string[] = [];
    @Output() editForm = new EventEmitter<void>();
    @Output() backToDemos = new EventEmitter<void>();
}
