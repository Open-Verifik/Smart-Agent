import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PostmanComponent } from 'app/modules/postman/postman.component';
import { PostmanService } from 'app/modules/postman/postman.service';
import { BIOMETRICS_API_CATEGORIES } from '../biometrics/biometrics.constants';

@Component({
    selector: 'app-biometrics-api',
    standalone: true,
    imports: [PostmanComponent],
    template: `<app-postman class="flex min-h-0 min-w-0 flex-1"></app-postman>`,
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
