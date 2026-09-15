import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { User } from 'app/core/user/user.types';
import { environment } from 'environments/environment';
import { map, Observable, ReplaySubject, take, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private _httpClient = inject(HttpClient);
    private _httpWrapper = inject(HttpWrapperService);
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User) {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Persists accessToken and user from a /v2/auth/session response.
     */
    applySessionResponse(response: unknown): User | null {
        if (!response || typeof response !== 'object') {
            return null;
        }

        const payload = response as {
            accessToken?: string;
            user?: User;
            data?: { accessToken?: string; user?: User };
        };

        const accessToken = payload.data?.accessToken ?? payload.accessToken;

        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
        }

        const user = payload.data?.user ?? payload.user ?? null;

        if (!user) return null;

        localStorage.setItem('verifik_account', JSON.stringify(user));

        this._user.next(user);

        return user;
    }

    /**
     * Get the current signed-in user data
     */
    get(): Observable<User> {
        return this._httpWrapper
            .sendRequest('post', environment.apiUrl + '/v2/auth/session', { origin: 'app' })
            .pipe(
                map((response) => {
                    const user = this.applySessionResponse(response);
                    return user ?? (response.data?.user || response.user || response);
                })
            );
    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any> {
        return this._httpClient.patch<User>(environment.baseUrl + 'api/common/user', { user }).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }

    /**
     * Patch the signed-in client. Applies only the requested fields so a raw
     * Client PUT body cannot overwrite session `credits` (credits + extraCredits).
     *
     * @param data - Fields to persist (e.g. language)
     */
    updateClient(data: Partial<User>): Observable<any> {
        return this._httpWrapper
            .sendRequest('put', environment.apiUrl + '/v2/clients/me', data)
            .pipe(
                tap(() => {
                    this._user.pipe(take(1)).subscribe((currentUser) => {
                        const nextUser = { ...currentUser, ...data, credits: currentUser?.credits };
                        localStorage.setItem('verifik_account', JSON.stringify(nextUser));
                        this._user.next(nextUser);
                    });
                })
            );
    }
}
