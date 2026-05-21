import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    input,
    OnInit,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    getVerifikDocsUrls,
    VerifikDocsUrls,
} from 'app/core/docs/verifik-docs-urls';

@Component({
    selector: 'layout-footer',
    templateUrl: './layout-footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TranslocoModule],
})
export class LayoutFooterComponent implements OnInit {
    private readonly _destroyRef = inject(DestroyRef);
    private readonly _transloco = inject(TranslocoService);

    compact = input(false);

    urls = signal<VerifikDocsUrls>(getVerifikDocsUrls('en'));

    get currentYear(): number {
        return new Date().getFullYear();
    }

    ngOnInit(): void {
        this._refreshUrls(this._transloco.getActiveLang());

        this._transloco.langChanges$
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((lang) => this._refreshUrls(lang));
    }

    private _refreshUrls(lang: string): void {
        this.urls.set(getVerifikDocsUrls(lang));
    }
}
