import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from 'app/layout/common/quick-chat/quick-chat.types';
import {
    BehaviorSubject,
    map,
    Observable,
    of,
    Subject,
    switchMap,
    tap,
    throwError,
} from 'rxjs';

export type QuickChatTab = 'notifications' | 'tickets';

export interface QuickChatOpenRequest {
    tab?: QuickChatTab;
}

@Injectable({ providedIn: 'root' })
export class QuickChatService {
    private _chat: BehaviorSubject<Chat> = new BehaviorSubject(null);
    private _chats: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>(null);
    private readonly _openPanel$ = new Subject<QuickChatOpenRequest>();

    /** Emits when a feature requests the messages hub panel. */
    readonly openPanel$ = this._openPanel$.asObservable();

    constructor(private _httpClient: HttpClient) {}

    get chat$(): Observable<Chat> {
        return this._chat.asObservable();
    }

    get chats$(): Observable<Chat[]> {
        return this._chats.asObservable();
    }

    /** Open the messages hub (notifications and/or support tab). */
    requestOpenPanel(options?: QuickChatOpenRequest): void {
        this._openPanel$.next(options ?? {});
    }

    getChats(): Observable<any> {
        return of([]).pipe(
            tap((response: Chat[]) => {
                this._chats.next(response);
            })
        );
    }

    getChatById(id: string): Observable<any> {
        return of(null).pipe(
            map((chat) => {
                this._chat.next(chat);
                return chat;
            }),
            switchMap((chat) => {
                if (!chat) {
                    return throwError(
                        () => new Error('Could not found chat with id of ' + id + '!')
                    );
                }

                return of(chat);
            })
        );
    }
}
