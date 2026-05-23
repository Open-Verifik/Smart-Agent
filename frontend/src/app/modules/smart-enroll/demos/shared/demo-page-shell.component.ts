import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-demo-page-shell',
    standalone: true,
    imports: [RouterLink, TranslocoModule],
    templateUrl: './demo-page-shell.component.html',
    styleUrl: './demo-page-shell.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-auto min-w-0 w-full',
    },
})
export class DemoPageShellComponent {}
