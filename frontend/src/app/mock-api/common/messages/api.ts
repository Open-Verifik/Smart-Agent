import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { messages as messagesData } from 'app/mock-api/common/messages/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class MessagesMockApi {
    private _messages: any = messagesData;

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        this._fuseMockApiService
            .onGet('api/common/messages')
            .reply(() => [200, cloneDeep(this._messages)]);
    }
}
