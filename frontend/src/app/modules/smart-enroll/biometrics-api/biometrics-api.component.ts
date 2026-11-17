import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PostmanComponent } from 'app/modules/postman/postman.component';
import { PostmanService } from 'app/modules/postman/postman.service';
import { BIOMETRICS_API_CATEGORIES } from '../biometrics/biometrics.constants';

@Component({
    selector: 'app-biometrics-api',
    standalone: true,
    imports: [PostmanComponent, RouterLink, MatIconModule],
    template: `
        <div class="flex flex-col flex-1 min-h-0 min-w-0">
            <div class="border-b border-amber-200/90 bg-amber-50 px-4 py-2.5 text-xs text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200 flex items-center justify-between gap-3">
                <div class="flex items-center gap-2">
                    <span class="inline-flex rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900 dark:bg-amber-900 dark:text-amber-200">Deprecated</span>
                    <span>Legacy OpenCV biometric API routes are deprecated. Please upgrade to HumanID (HumanAuthn) and modernized biometrics endpoints.</span>
                </div>
                <a routerLink="/smart-enroll/demos/humanid-create" class="inline-flex items-center gap-1 font-semibold text-amber-800 underline hover:text-amber-950 dark:text-amber-300 dark:hover:text-amber-100 shrink-0">
                    <span>HumanID Enrollment</span>
                    <mat-icon class="!h-3.5 !w-3.5 !text-sm">arrow_forward</mat-icon>
                </a>
            </div>
            <app-postman class="flex min-h-0 min-w-0 flex-1"></app-postman>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex: 1 1 auto;
                width: 100%;
                min-width: 0;
                min-height: 0;
                height: 100%;
            }
        `,
    ],
})
export class BiometricsApiComponent implements OnInit, OnDestroy {
    private _postmanService = inject(PostmanService);

    ngOnInit(): void {
        this._postmanService.setCategoryFilter(BIOMETRICS_API_CATEGORIES);
    }

    ngOnDestroy(): void {
        this._postmanService.clearCategoryFilter();
    }
}
