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
import { TranslocoModule } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { AuthService } from 'app/core/auth/auth.service';
import { User } from 'app/core/user/user.types';
import { Subject, takeUntil } from 'rxjs';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { AgentWalletService } from '../../../modules/chat/services/agent-wallet.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'user',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    TranslocoModule,
    MatDialogModule,
    CommonModule,
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
  ) {}

  walletAddress: string | null = null;
  avaxBalance: string | null = null;

  async fetchWalletInfo() {
    this.walletAddress = this._walletService.getAddress();
    if (this.walletAddress) {
      try {
        this.avaxBalance = await this._walletService.getBalance();
        this._changeDetectorRef.markForCheck();
      } catch (e) {
        console.error('Failed to fetch wallet balance', e);
      }
    }
  }

  copyWalletAddress() {
    if (this.walletAddress) {
      navigator.clipboard.writeText(this.walletAddress);
      // Optional: Show snackbar
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
        this._changeDetectorRef.markForCheck();
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
   * Sign out
   */
  signOut(): void {
    this._authService.signOut().subscribe(() => {
      this.user = null;
      // The service user setter is public, but accessing it to set null might be type restricted if it expects User
      // Looking at UserService: set user(value: User)
      // If strict null checks are on, it might complain if we pass null.
      // However, standard Angular templates usually allow resetting.
      // If it fails, I'll fix it. For now, try to set to null or verify auth service handles it.
      // AuthService.signOut() does NOT call userService.user = null in its implementation I saw.
      // So I will force it here.
      this._userService.user = null as any;

      this._changeDetectorRef.markForCheck();

      // Reload to ensure clean state and show login button
      location.reload();
    });
  }
}
