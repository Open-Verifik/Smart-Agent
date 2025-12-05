import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authenticated: boolean = false;
    private _httpClient = inject(HttpClient);
    private _userService = inject(UserService);
    private baseUrl = environment.baseUrl;

    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post(
            this.baseUrl + 'api/auth/forgot-password',
            email
        );
    }

    resetPassword(password: string): Observable<any> {
        return this._httpClient.post(
            this.baseUrl + 'api/auth/reset-password',
            password
        );
    }

    signIn(credentials: { email: string; password: string }): Observable<any> {
        if (this._authenticated)
            return throwError(() => new Error('User is already logged in.'));

        return this._httpClient
            .post(this.baseUrl + 'api/auth/sign-in', credentials)
            .pipe(
                switchMap((response: any) => {
                    this._authenticated = true;
                    this._userService.user = response.user;

                    return of(response);
                })
            );
    }

    requestOTP(credentials: { phone: string }): Observable<any> {
        if (this._authenticated)
            return throwError(() => new Error('User is already logged in.'));

        return this._httpClient
            .post(this.baseUrl + 'v2/auth/super/request-otp', credentials)
            .pipe(switchMap((response: any) => of(response)));
    }

    confirmOTP(credentials: { phone: string; otp: string }): Observable<any> {
        if (this._authenticated)
            return throwError(() => new Error('User is already logged in.'));

        return this._httpClient
            .post(this.baseUrl + 'v2/auth/super/verify-otp', credentials)
            .pipe(
                switchMap((response: any) => {
                    if (!response.data) {
                        return;
                    }

                    localStorage.setItem(
                        'accessToken',
                        response.data.accessToken
                    );
                    localStorage.setItem(
                        'user',
                        JSON.stringify(response.data.user)
                    );

                    this._authenticated = true;

                    // Store the user on the user service
                    this._userService.user = response.data.user;

                    // Return a new observable with the response
                    return of(response.data);
                })
            );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Sign in using the token
        return this._httpClient
            .post(this.baseUrl + 'api/auth/sign-in-with-token', {
                accessToken: this.accessToken,
            })
            .pipe(
                catchError(() => of(false)),
                switchMap((response: any) => {
                    // Replace the access token with the new one if it's available on
                    // the response object.
                    //
                    // This is an added optional step for better security. Once you sign
                    // in using the token, you should generate a new one on the server
                    // side and attach it to the response object. Then the following
                    // piece of code can replace the token with the refreshed one.
                    if (response.accessToken) {
                        // this.accessToken = response.accessToken; // Removed fake JWT token storage
                    }

                    // Set the authenticated flag to true
                    this._authenticated = true;

                    // Store the user on the user service
                    this._userService.user = response.user;

                    // Return true
                    return of(true);
                })
            );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        // Clear all items from local storage
        localStorage.clear();

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: {
        name: string;
        email: string;
        password: string;
        company: string;
    }): Observable<any> {
        return this._httpClient.post(this.baseUrl + 'api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: {
        email: string;
        password: string;
    }): Observable<any> {
        return this._httpClient.post(
            this.baseUrl + 'api/auth/unlock-session',
            credentials
        );
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        // Check the access token expire date
        if (AuthUtils.isTokenExpired(this.accessToken)) {
            // Clear expired token
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
            this._authenticated = false;
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }

    /**
     * Simulate project login using app registration token (not session token)
     * This method uses HttpClient directly to use the app registration's token
     * @param appRegistrationToken - The token from the app registration record
     * @param projectType - The project type for the login
     */
    simulateProjectLogin(
        appRegistrationToken: string,
        projectType: string = 'onboarding'
    ): Observable<any> {
        const headers = {
            Authorization: `Bearer ${appRegistrationToken}`,
        };

        return this._httpClient.post(
            this.baseUrl + 'v2/auth/project-login',
            { projectType },
            { headers }
        );
    }
}
