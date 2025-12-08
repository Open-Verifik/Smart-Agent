import { BooleanInput } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { AuthService } from 'app/core/auth/auth.service';
import { User } from 'app/core/user/user.types';
import { Subject, takeUntil } from 'rxjs';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { AgentWalletService } from '../../../modules/chat/services/agent-wallet.service';
import { WalletEncryptionService } from 'app/core/services/wallet-encryption.service';

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
    private _snackBar: MatSnackBar,
  ) {}

  walletAddress: string | null = null;
  avaxBalance: string | null = null;
  hasWeb2Auth: boolean = false; // Track if user has Web2 authentication

  /**
   * Check if user is authenticated via Web3 only (no Web2 account)
   */
  get isWeb3Only(): boolean {
    return !this.hasWeb2Auth && !!this.walletAddress;
  }

  async fetchWalletInfo() {
    this.walletAddress = this._walletService.getAddress();
    if (this.walletAddress) {
      this._walletService.refreshBalance();
    }
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
   */
  openAuthModal(): void {
    const dialogRef = this._matDialog.open(AuthModalComponent, {
      panelClass: 'auth-modal-dialog',
      width: '400px',
      maxWidth: '100vw',
    });
  }

  /**
   * Sign out or Reset Wallet
   * - Web3-only: Reset wallet (clear wallet data, keep Web2 credentials)
   * - Web2/Hybrid: Full sign out (clear everything)
   */
  signOut(): void {
    if (this.isWeb3Only) {
      // Web3-only: Just reset the wallet, keep Web2 credentials intact
      this.resetWallet();
    } else {
      // Web2 or Hybrid: Full sign out
      this.fullSignOut();
    }
  }

  /**
   * Reset wallet only (Web3-only users)
   * Clears wallet data but preserves Web2 credentials
   */
  private resetWallet(): void {
    // Clear only wallet credentials (encrypted and plain)
    // This will clear: x402_agent_pk_encrypted, x402_encryption_method,
    // x402_encryption_salt, x402_credential_id, x402_agent_pk, x402_agent_address
    this._encryptionService.clearEncryptionData();
    localStorage.removeItem('x402_agent_address');
    localStorage.removeItem('x402_wallet_type'); // Clear wallet type (metamask, etc.)

    // Clear user state
    this.user = null;
    this._changeDetectorRef.markForCheck();

    // Navigate to home
    this._router.navigate(['/']);
  }

  /**
   * Full sign out (Web2 or Hybrid users)
   * Clears both Web2 and Web3 credentials
   */
  private fullSignOut(): void {
    this._authService.signOut().subscribe(() => {
      this.user = null;
      this._userService.user = null as any;

      // Clear all agent wallet credentials (encrypted and plain)
      this._encryptionService.clearEncryptionData();
      localStorage.removeItem('x402_agent_address');

      this._changeDetectorRef.markForCheck();

      // Reload to ensure clean state and show login button
      location.reload();
    });
  }
}
