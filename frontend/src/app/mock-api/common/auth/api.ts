import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';

@Injectable({ providedIn: 'root' })
export class AuthMockApi {
    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Forgot password - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/auth/forgot-password', 1000)
            .reply(() => [200, true]);

        // -----------------------------------------------------------------------------------------------------
        // @ Reset password - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/auth/reset-password', 1000)
            .reply(() => [200, true]);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
}
