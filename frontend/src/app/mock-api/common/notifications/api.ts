import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { notifications as notificationsData } from 'app/mock-api/common/notifications/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class NotificationsMockApi {
    private _notifications: any = notificationsData;

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        this._fuseMockApiService
            .onGet('api/common/notifications')
            .reply(() => [200, cloneDeep(this._notifications)]);
    }
}
