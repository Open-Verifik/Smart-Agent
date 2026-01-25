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
     * Get the current signed-in user data
     */
    get(): Observable<User> {
        return this._httpWrapper
            .sendRequest('post', environment.apiUrl + '/v2/auth/session', { origin: 'app' })
            .pipe(
                map((response) => response.data?.user || response.user || response),
                tap((user) => {
                    this._user.next(user);
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
     * Update the client
     *
     * @param user
     */
    updateClient(data: Partial<User>): Observable<any> {
        return this._httpWrapper
            .sendRequest('put', environment.apiUrl + '/v2/clients/me', data)
            .pipe(
                tap((response) => {
                    // Determine the new user object
                    // If response returns the updated object, use it. Otherwise merge data.
                    // Assuming response is the updated client object based on backend patterns.
                    // If response has a .data property, handle that case.
                    const updatedUser = response.data || response;

                    // Merge with current user to ensure we don't lose other props if response is partial
                    this._user.pipe(take(1)).subscribe((currentUser) => {
                        this._user.next({
                            ...currentUser,
                            ...updatedUser,
                            ...data, // Ensure the data sent is applied
                        });
                    });
                })
            );
    }
}
