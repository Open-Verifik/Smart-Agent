import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { getVerifikDocsUrls } from 'app/core/docs/verifik-docs-urls';

@Component({
    selector: 'app-home-get-started',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink, TranslocoModule],
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.scss'],
})
export class HomeGetStartedComponent {
    private readonly _transloco = inject(TranslocoService);

    get docsHome(): string {
        return getVerifikDocsUrls(this._transloco.getActiveLang()).docsHome;
    }
}
