import { inject, Injectable } from '@angular/core';
import { MessagesMockApi } from 'app/mock-api/common/messages/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotificationsMockApi } from 'app/mock-api/common/notifications/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';

@Injectable({ providedIn: 'root' })
export class MockApiService {
    messagesMockApi = inject(MessagesMockApi);
    navigationMockApi = inject(NavigationMockApi);
    notificationsMockApi = inject(NotificationsMockApi);
    shortcutsMockApi = inject(ShortcutsMockApi);
}
