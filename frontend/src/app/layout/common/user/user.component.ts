import { BooleanInput } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { SessionService } from 'app/core/services/session.service';
import { WalletEncryptionService } from 'app/core/services/wallet-encryption.service';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { environment } from 'environments/environment';
import { Subject, takeUntil } from 'rxjs';
import { AgentWalletService } from '../../../modules/chat/services/agent-wallet.service';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
})
export class UserComponent implements OnInit, OnDestroy {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    user: any;
    tokenTicker = environment.tokenTicker || 'VKA';

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _userService: UserService,
        private _matDialog: MatDialog,
        private _authService: AuthService,
        private _walletService: AgentWalletService,
        private _encryptionService: WalletEncryptionService,
        private _sessionService: SessionService,
        private _snackBar: MatSnackBar
    ) {}

    walletAddress: string | null = null;
    avaxBalance: string | null = null;
    tokenBalance: string | null = null;
    hasWeb2Auth: boolean = false; // Track if user has Web2 authentication

    /**
     * Check if user is authenticated via Web3 only (no Web2 account)
     */
    get isWeb3Only(): boolean {
        return !this.hasWeb2Auth && !!this.walletAddress;
    }

    /**
     * Check if user is authenticated via Web2 only (has credits but no wallet)
     */
    get isWeb2Only(): boolean {
        return this.hasWeb2Auth && !this.walletAddress;
    }

    /**
     * Check if user has both Web2 and Web3 authentication (hybrid)
     */
    get isHybrid(): boolean {
        return this.hasWeb2Auth && !!this.walletAddress;
    }

    /**
     * Get total credits
     */
    get totalCredits(): number {
        if (!this.user) return 0;
        const credits = Number(this.user.credits) || 0;
        // Round to 2 decimal places to avoid floating point precision issues
        return Math.round(credits * 100) / 100;
    }

    async fetchWalletInfo() {
        this.walletAddress = this._walletService.getAddress();
        if (this.walletAddress) {
            this._walletService.refreshBalance();
        }
        // Mark for check to update UI state (isWeb2Only, etc.)
        this._changeDetectorRef.markForCheck();
    }

    copyWalletAddress() {
        if (this.walletAddress) {
            navigator.clipboard.writeText(this.walletAddress);

            this._snackBar.open('Address copied to clipboard', 'Close', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                panelClass: ['bg-slate-900', 'text-white'],
            });
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.fetchWalletInfo();

        // Load user from local storage as fallback before subscription emits
        try {
            const storedUser = localStorage.getItem('verifik_account');
            if (storedUser) {
                this.user = JSON.parse(storedUser);
                this.hasWeb2Auth = true; // User has Web2 authentication

                // Check if wallet also exists (hybrid auth)
                // Note: walletAddress is already fetched in fetchWalletInfo() above
                // This will be set by the time we check isWeb2Only

                this._changeDetectorRef.markForCheck();
            } else {
                this.hasWeb2Auth = false; // No Web2 authentication

                // Check if user is authenticated via agent wallet (Web3)
                const agentAddress = localStorage.getItem('x402_agent_address');
                const walletType = localStorage.getItem('x402_wallet_type');
                const isWalletEncrypted = this._encryptionService.isWalletEncrypted();
                const hasPlainTextPk = !!localStorage.getItem('x402_agent_pk');

                // Self-heal: If wallet is encrypted but type is missing, set it to 'encrypted-model'
                if (isWalletEncrypted && !walletType) {
                    localStorage.setItem('x402_wallet_type', 'encrypted-model');
                }

                // User is authenticated if they have an address AND one of:
                // 1. Encrypted wallet (agent wallet with passkey/PIN)
                // 2. Plain text pk (legacy, backwards compatibility)
                // 3. MetaMask wallet (external wallet)
                const isMetaMaskWallet = walletType === 'metamask';
                const hasValidWallet = isWalletEncrypted || hasPlainTextPk || isMetaMaskWallet;

                if (agentAddress && hasValidWallet) {
                    // Determine wallet display name
                    let walletName = 'Agent Wallet';
                    if (isMetaMaskWallet) {
                        walletName = 'MetaMask Wallet';
                    }

                    // Create a mock user object for Web3-only authentication
                    this.user = {
                        id: agentAddress,
                        name: walletName,
                        email: `${agentAddress.substring(0, 6)}...${agentAddress.substring(agentAddress.length - 4)}`,
                        credits: 0,
                        role: 'agent',
                    };
                    this._changeDetectorRef.markForCheck();
                }
            }
        } catch (error) {
            console.warn('[UserComponent] Failed to parse user from localStorage', error);
        }

        // Subscribe to user changes
        this._userService.user$.pipe(takeUntil(this._unsubscribeAll)).subscribe((user: User) => {
            this.user = user;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });

        // Subscribe to wallet balance updates
        this._walletService.balance$.pipe(takeUntil(this._unsubscribeAll)).subscribe((balance) => {
            this.avaxBalance = balance;
            this._changeDetectorRef.markForCheck();
        });

        // Subscribe to token balance updates
        this._walletService.tokenBalance$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((balance) => {
                this.tokenBalance = balance;
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open Auth Modal
     * @param startWithWallet - If true, opens directly to wallet connection flow
     */
    openAuthModal(startWithWallet: boolean = false): void {
        this._matDialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
            maxWidth: '100vw',
            data: { startWithWallet }, // Pass data to the modal component
        });
    }

    /**
     * Sign out Web2 account only
     * Clears Web2 credentials but preserves wallet
     */
    signOutWeb2(): void {
        // Clear only Web2-related localStorage items
        localStorage.removeItem('accessToken');
        localStorage.removeItem('verifik_account');
        // Note: We don't set accessToken via setter as it would store "null" string
        // The removeItem above properly removes it from localStorage

        // Clear Web2 user data
        this.user = null;
        this._userService.user = null as any;
        this.hasWeb2Auth = false;

        // If user has wallet, create a mock user object for Web3-only display
        const walletType = localStorage.getItem('x402_wallet_type');

        if (this.walletAddress) {
            let walletName = 'Agent Wallet';
            if (walletType === 'metamask') {
                walletName = 'MetaMask Wallet';
            }

            this.user = {
                id: this.walletAddress,
                name: walletName,
                email: `${this.walletAddress.substring(0, 6)}...${this.walletAddress.substring(this.walletAddress.length - 4)}`,
                credits: 0,
                role: 'agent',
            };
        }

        this._changeDetectorRef.markForCheck();

        // Reload to ensure clean state (using safe reload to prevent loops)
        this._sessionService.safeReload();
    }

    /**
     * Sign out Web3 wallet only
     * Clears wallet data but preserves Web2 credentials
     */
    signOutWeb3(): void {
        // Clear only wallet credentials (encrypted and plain)
        // This will clear: x402_agent_pk_encrypted, x402_encryption_method,
        // x402_encryption_salt, x402_credential_id, x402_agent_pk, x402_agent_address
        this._encryptionService.clearEncryptionData();
        localStorage.removeItem('x402_agent_address');
        localStorage.removeItem('x402_wallet_type'); // Clear wallet type (metamask, etc.)

        // Clear wallet-related state
        this.walletAddress = null;
        this.avaxBalance = null;

        // If user has Web2 auth, keep the user object
        // Otherwise, clear user state
        if (!this.hasWeb2Auth) {
            this.user = null;
            this._changeDetectorRef.markForCheck();
            // Navigate to home for Web3-only users
            this._router.navigate(['/']);
        } else {
            // For hybrid users, just refresh wallet info display
            this._changeDetectorRef.markForCheck();
            // Reload to refresh the UI (using safe reload to prevent loops)
            this._sessionService.safeReload();
        }
    }

    /**
     * Sign out or Reset Wallet (legacy method for single-button scenarios)
     * - Web3-only: Reset wallet
     * - Web2-only: Sign out Web2
     * - Hybrid: This shouldn't be called, use signOutWeb2() or signOutWeb3() instead
     */
    signOut(): void {
        if (this.isWeb3Only) {
            // Web3-only: Just reset the wallet
            this.signOutWeb3();
        } else if (this.isWeb2Only) {
            // Web2-only: Sign out Web2
            this.signOutWeb2();
        } else {
            // Hybrid: Default to Web2 sign out (safer)
            this.signOutWeb2();
        }
    }

    /**
     * Navigate to Settings page
     * Only available for Web2 accounts
     */
    navigateToSettings(): void {
        this._router.navigate(['/settings']);
    }
}
