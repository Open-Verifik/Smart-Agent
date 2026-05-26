import { coerceBooleanProperty } from '@angular/cdk/coercion';

import {
    ChangeDetectorRef,
    Component,
    inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FuseLoadingService } from '@fuse/services/loading';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'fuse-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs: 'fuseLoadingBar',
    imports: [MatProgressBarModule],
})
export class FuseLoadingBarComponent implements OnChanges, OnInit, OnDestroy {
    private readonly _fuseLoadingService = inject(FuseLoadingService);
    private readonly _cdr = inject(ChangeDetectorRef);

    @Input() autoMode: boolean = true;
    mode: 'determinate' | 'indeterminate' = 'indeterminate';
    progress = 0;
    show = false;
    private readonly _unsubscribeAll: Subject<void> = new Subject<void>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        // Auto mode
        if ('autoMode' in changes) {
            // Set the auto mode in the service
            this._fuseLoadingService.setAutoMode(
                coerceBooleanProperty(changes.autoMode.currentValue)
            );
        }
    }

    /**
     * On init
     */
    ngOnInit(): void {
        // Seed current values synchronously so the first render already has the
        // latest emission from the BehaviorSubjects. This prevents the dev-mode
        // ExpressionChangedAfterItHasBeenCheckedError when the subscriptions
        // fire immediately on subscribe (common with the Fuse loading bar).
        const modeSrc = this._fuseLoadingService['mode$'] as any;
        const progressSrc = this._fuseLoadingService['progress$'] as any;
        const showSrc = this._fuseLoadingService['show$'] as any;

        if (modeSrc?.source?.value) this.mode = modeSrc.source.value;
        const p = progressSrc?.source?.value;
        if (typeof p === 'number') this.progress = p < 0 || p > 100 ? 0 : p;
        if (typeof showSrc?.source?.value === 'boolean') this.show = showSrc.source.value;

        // Subscribe and mark for check after each update. The synchronous
        // initial emission + later updates from interceptors/resolvers/etc.
        // can otherwise trigger NG0100 in dev mode.
        this._fuseLoadingService.mode$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.mode = value;
                this._cdr.markForCheck();
            });

        this._fuseLoadingService.progress$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.progress = typeof value === 'number' && value >= 0 && value <= 100 ? value : 0;
                this._cdr.markForCheck();
            });

        this._fuseLoadingService.show$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.show = !!value;
                this._cdr.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
