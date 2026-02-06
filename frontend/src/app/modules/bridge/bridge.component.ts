import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { UserService } from 'app/core/user/user.service';

/**
 * Bridge Component
 *
 * This component handles SSO authentication from external apps (like verifik-client-panel).
 * It receives a JWT token via query parameters and stores it in localStorage,
 * then redirects the user to the main app.
 *
 * Usage:
 * - Development: http://localhost:4201/bridge?token=eyJ...
 * - Production: https://x402-agent.verifik.co/bridge?token=eyJ...
 *
 * Optional query params:
 * - token: The JWT access token (required)
 * - redirect: Path to redirect after auth (default: /chat)
 * - user: Base64 encoded user data (optional)
 */
@Component({
    selector: 'app-bridge',
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule],
    template: `
        <div
            class="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 relative overflow-hidden"
        >
            <!-- Background Decoration -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]"
                ></div>
                <div
                    class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]"
                ></div>
            </div>

            <!-- Main Card -->
            <div
                class="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 max-w-md w-full shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]"
            >
                <!-- Brand Section -->
                <div class="flex flex-col items-center mb-12" [@fadeInTop]>
                    <div class="group relative">
                        <div
                            class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                        ></div>
                        <div
                            class="relative w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl mb-6"
                        >
                            <mat-icon class="text-indigo-600 !text-3xl !w-auto !h-auto"
                                >bolt</mat-icon
                            >
                        </div>
                    </div>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tight mb-1">
                        SmartCheck
                    </h2>
                    <div class="flex items-center gap-2">
                        <span class="h-0.5 w-6 bg-indigo-500 rounded-full"></span>
                        <p class="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400">
                            Next Gen AI
                        </p>
                        <span class="h-0.5 w-6 bg-indigo-500 rounded-full"></span>
                    </div>
                </div>

                <!-- Loading State -->
                <div *ngIf="status() === 'loading'" class="text-center" [@fadeIn]>
                    <div class="relative w-20 h-20 mx-auto mb-8">
                        <div
                            class="absolute inset-0 rounded-2xl bg-indigo-50/50 animate-pulse"
                        ></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <mat-spinner diameter="32" strokeWidth="3"></mat-spinner>
                        </div>
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Connecting Account</h1>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Securing your session with Verifik services...
                    </p>
                </div>

                <!-- Success State -->
                <div *ngIf="status() === 'success'" class="text-center" [@fadeIn]>
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-50 flex items-center justify-center shadow-inner"
                    >
                        <mat-icon class="text-emerald-500 !text-4xl !w-auto !h-auto"
                            >check</mat-icon
                        >
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Welcome Back!</h1>
                    <p class="text-slate-500 text-sm mb-10 leading-relaxed">
                        Identity verified. Your workspace is ready.
                    </p>

                    <div
                        class="inline-flex items-center gap-3 px-6 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl"
                    >
                        <mat-spinner diameter="14" strokeWidth="2.5"></mat-spinner>
                        <span class="text-xs font-bold text-slate-600 uppercase tracking-widest"
                            >Entering in {{ countdown() }}s</span
                        >
                    </div>
                </div>

                <!-- Error State -->
                <div *ngIf="status() === 'error'" class="text-center" [@fadeIn]>
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-2xl bg-red-50 flex items-center justify-center"
                    >
                        <mat-icon class="text-red-500 !text-4xl !w-auto !h-auto"
                            >error_outline</mat-icon
                        >
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Auth Failed</h1>
                    <p class="text-slate-500 text-sm mb-10 leading-relaxed">{{ errorMessage() }}</p>

                    <button
                        mat-flat-button
                        (click)="goToLogin()"
                        class="w-full !rounded-2xl !py-7 !bg-slate-900 !text-white hover:!bg-slate-800 !shadow-xl !shadow-slate-200/50 transition-all !text-sm font-bold uppercase tracking-widest"
                    >
                        Go to Login
                    </button>
                </div>

                <!-- No Token State -->
                <div *ngIf="status() === 'no_token'" class="text-center" [@fadeIn]>
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-2xl bg-amber-50 flex items-center justify-center"
                    >
                        <mat-icon class="text-amber-500 !text-4xl !w-auto !h-auto"
                            >lock_person</mat-icon
                        >
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Access Required</h1>
                    <p class="text-slate-500 text-sm mb-10 leading-relaxed">
                        Please access SmartCheck through the Verifik platform.
                    </p>

                    <div class="space-y-4">
                        <a
                            href="https://app.verifik.co"
                            target="_blank"
                            class="block w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:shadow-lg hover:shadow-indigo-200/50 text-white font-bold rounded-2xl transition-all text-sm uppercase tracking-widest text-center shadow-md"
                        >
                            Open Verifik
                        </a>
                        <button
                            mat-button
                            (click)="continueWithoutAuth()"
                            class="w-full !rounded-2xl !py-4 !text-slate-400 hover:!bg-slate-50 !text-xs font-bold uppercase tracking-widest"
                        >
                            Continue as Guest
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="absolute bottom-12 left-0 right-0 text-center">
                <p
                    class="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase opacity-60"
                >
                    Trusted Security by Verifik
                </p>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    animations: [fuseAnimations],
})
export class BridgeComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _authService = inject(AuthService);
    private _userService = inject(UserService);

    status = signal<'loading' | 'success' | 'error' | 'no_token'>('loading');
    errorMessage = signal<string>('');
    countdown = signal<number>(3);

    ngOnInit() {
        this.processToken();
    }

    private processToken() {
        const token = this._route.snapshot.queryParamMap.get('token');
        const redirect = this._route.snapshot.queryParamMap.get('redirect') || '/chat';
        const userData = this._route.snapshot.queryParamMap.get('user');

        if (!token) {
            this.status.set('no_token');
            return;
        }

        try {
            // Validate token format (basic JWT check)
            if (!this.isValidJWT(token)) {
                throw new Error('Invalid token format');
            }

            // If a different token is already present, clear the previous session
            const currentToken = localStorage.getItem('accessToken');
            if (currentToken && currentToken !== token) {
                console.log('[Bridge] New token detected, switching user context');
                this._authService.signOut(true); // Clear memory and storage
            }

            // Store the new token
            localStorage.setItem('accessToken', token);
            this._authService.accessToken = token;

            // Store user data if provided (base64 encoded JSON)
            if (userData) {
                try {
                    const decodedUser = JSON.parse(atob(userData));
                    localStorage.setItem('verifik_account', JSON.stringify(decodedUser));
                    // Update the user service so the UI updates immediately
                    this._userService.user = decodedUser;
                } catch (e) {
                    console.warn('[Bridge] Could not parse user data:', e);
                }
            }

            // Success!
            this.status.set('success');

            // Countdown and redirect (shortened for better UX)
            const interval = setInterval(() => {
                this.countdown.update((v) => v - 1);
                if (this.countdown() <= 0) {
                    clearInterval(interval);
                    // Use navigateByUrl to ensure a fresh layout load if needed
                    this._router.navigateByUrl(redirect);
                }
            }, 800);
        } catch (error: any) {
            this.status.set('error');
            this.errorMessage.set(error.message || 'An unexpected error occurred');
        }
    }

    private isValidJWT(token: string): boolean {
        // Basic JWT structure validation
        const parts = token.split('.');
        if (parts.length !== 3) return false;

        try {
            // Try to decode the payload
            const payload = JSON.parse(atob(parts[1]));
            // Check if token is expired
            if (payload.exp && payload.exp * 1000 < Date.now()) {
                throw new Error('Token has expired');
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    goToLogin() {
        // Redirect to Verifik login
        window.location.href = 'https://app.verifik.co/auth/sign-in';
    }

    continueWithoutAuth() {
        this._router.navigate(['/chat']);
    }
}
