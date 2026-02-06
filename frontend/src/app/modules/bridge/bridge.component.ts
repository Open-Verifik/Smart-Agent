import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';

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
            class="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 relative overflow-hidden"
        >
            <!-- Background Decoration -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    class="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
                ></div>
                <div
                    class="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
                ></div>
            </div>

            <!-- Main Card -->
            <div
                class="relative bg-white border border-slate-100 rounded-[2.5rem] p-10 max-w-md w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
            >
                <!-- Logo/Brand Section -->
                <div class="flex items-center justify-center gap-3 mb-10">
                    <div
                        class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-100"
                    >
                        <mat-icon class="text-white">bolt</mat-icon>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-slate-900 leading-tight">SmartCheck</h2>
                        <p class="text-[10px] uppercase font-bold tracking-[0.1em] text-indigo-500">
                            AI-Powered Platform
                        </p>
                    </div>
                </div>

                <!-- Loading State -->
                <div *ngIf="status() === 'loading'" class="text-center">
                    <div class="relative w-24 h-24 mx-auto mb-8">
                        <div class="absolute inset-0 rounded-3xl bg-indigo-50 animate-pulse"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <mat-spinner diameter="40" strokeWidth="3"></mat-spinner>
                        </div>
                    </div>
                    <h1 class="text-2xl font-bold text-slate-900 mb-2">Authenticating</h1>
                    <p class="text-slate-500">Connecting your Verifik account securely...</p>
                </div>

                <!-- Success State -->
                <div *ngIf="status() === 'success'" class="text-center">
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-3xl bg-emerald-50 flex items-center justify-center animate-bounce-once"
                    >
                        <mat-icon class="text-emerald-600 text-4xl">check_circle</mat-icon>
                    </div>
                    <h1 class="text-2xl font-bold text-slate-900 mb-2">Authenticated!</h1>
                    <p class="text-slate-500 mb-8">
                        Welcome back. We're getting things ready for you.
                    </p>

                    <div class="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl">
                        <mat-spinner diameter="16" strokeWidth="2"></mat-spinner>
                        <span class="text-sm font-medium text-slate-600"
                            >Redirecting in {{ countdown() }}s</span
                        >
                    </div>
                </div>

                <!-- Error State -->
                <div *ngIf="status() === 'error'" class="text-center">
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-3xl bg-red-50 flex items-center justify-center"
                    >
                        <mat-icon class="text-red-500 text-4xl">warning_amber</mat-icon>
                    </div>
                    <h1 class="text-2xl font-bold text-slate-900 mb-2">Access Denied</h1>
                    <p class="text-slate-500 mb-10">{{ errorMessage() }}</p>

                    <button
                        mat-flat-button
                        (click)="goToLogin()"
                        class="w-full !rounded-2xl !py-4 !bg-slate-900 !text-white hover:!bg-slate-800 transition-all font-semibold"
                    >
                        Return to Login
                    </button>
                </div>

                <!-- No Token State -->
                <div *ngIf="status() === 'no_token'" class="text-center">
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-3xl bg-amber-50 flex items-center justify-center"
                    >
                        <mat-icon class="text-amber-500 text-4xl">vpn_key</mat-icon>
                    </div>
                    <h1 class="text-2xl font-bold text-slate-900 mb-2">Action Required</h1>
                    <p class="text-slate-500 mb-10">
                        Please start from your Verifik dashboard to access SmartCheck services.
                    </p>

                    <div class="space-y-4">
                        <a
                            href="https://app.verifik.co"
                            target="_blank"
                            class="block w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all text-center"
                        >
                            Open Verifik Panel
                        </a>
                        <button
                            mat-button
                            (click)="continueWithoutAuth()"
                            class="w-full !rounded-2xl !py-4 !text-slate-500 hover:!bg-slate-50 font-medium"
                        >
                            Continue as Guest
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="absolute bottom-8 left-0 right-0 text-center">
                <p class="text-slate-400 text-xs font-medium tracking-widest uppercase">
                    Verifik <span class="text-indigo-500 text-[10px] mx-1">●</span> SmartCheck
                </p>
            </div>
        </div>
    `,
    styles: [
        `
            @keyframes bounce-once {
                0%,
                100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.1);
                }
            }
            .animate-bounce-once {
                animation: bounce-once 0.5s ease-out;
            }
            .delay-1000 {
                animation-delay: 1s;
            }
        `,
    ],
})
export class BridgeComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

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

            // Store the token
            localStorage.setItem('accessToken', token);

            // Store user data if provided (base64 encoded JSON)
            if (userData) {
                try {
                    const decodedUser = JSON.parse(atob(userData));
                    localStorage.setItem('verifik_account', JSON.stringify(decodedUser));
                } catch (e) {
                    console.warn('[Bridge] Could not parse user data:', e);
                }
            }

            // Success!
            this.status.set('success');

            // Countdown and redirect
            const interval = setInterval(() => {
                this.countdown.update((v) => v - 1);
                if (this.countdown() <= 0) {
                    clearInterval(interval);
                    this._router.navigate([redirect]);
                }
            }, 1000);
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
