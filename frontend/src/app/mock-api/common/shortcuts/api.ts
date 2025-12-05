import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { shortcuts as shortcutsData } from 'app/mock-api/common/shortcuts/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class ShortcutsMockApi {
    private _shortcuts: any = shortcutsData;

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        this._fuseMockApiService
            .onGet('api/common/shortcuts')
            .reply(() => [200, cloneDeep(this._shortcuts)]);
    }
}
