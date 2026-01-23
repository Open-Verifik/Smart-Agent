import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthApiService } from 'app/core/services/auth-api.service';
import { SessionService } from 'app/core/services/session.service';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  private _authService = inject(AuthService);
  private _authApiService = inject(AuthApiService);
  private _userService = inject(UserService);
  private _sessionService = inject(SessionService);

  /**
   * Constructor
   */
  constructor() {}

  ngOnInit(): void {
    // First, check if we're in a reload loop (SessionService handles this in constructor)
    // If reload loop was detected, the session was cleared and we should not proceed

    const token = localStorage.getItem('accessToken');

    // Check if token exists and is valid before making API call
    if (token && this._sessionService.isTokenValid()) {
      // Ensure auth service has the token
      this._authService.accessToken = token;

      // Refresh session data
      this._authApiService.getSession().subscribe({
        next: (res: any) => {
          const userData = res.data?.user || res.user || res;
          localStorage.setItem('verifik_account', JSON.stringify(userData));
          this._authService.accessToken = token; // Ensure token is set

          // Update UserService so all subscribers get the new data
          this._userService.user = userData;

          // Reset reload tracking on successful session restore
          this._sessionService.resetReloadTracking();
        },
        error: (err) => {
          console.error('[AppComponent] Failed to restore session on app init', err);

          // Check if this is an auth error (401/403)
          const isAuthError = err.status === 401 || err.status === 403;

          if (isAuthError) {
            console.warn('[AppComponent] Session invalid, cleaning up credentials');
            // Clear invalid token to prevent further failed attempts
            // Use silent mode to avoid navigation loops on app init
            this._sessionService.handleSessionExpired({
              clearWeb2Only: true,
              silent: true, // Don't navigate on init, let the app load normally
            });
          }
        },
      });
    } else if (token && !this._sessionService.isTokenValid()) {
      // Token exists but is expired - clean it up
      console.warn('[AppComponent] Token exists but is expired, cleaning up');
      this._sessionService.handleSessionExpired({
        clearWeb2Only: true,
        silent: true, // Don't navigate on init
      });
    }
    // If no token at all, that's fine - user is not logged in
  }
}
