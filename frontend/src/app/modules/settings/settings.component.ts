import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { SettingsService, ProfileData } from './settings.service';
import { CountryService, CountryDialCode } from 'app/core/services/country.service';

interface SettingsPanel {
  id: string;
  icon: string;
  title: string;
  description?: string;
  disabled?: boolean;
  badge?: string;
}

interface SettingsSection {
  id: string;
  title: string;
  panels: SettingsPanel[];
}

interface TokenExpiration {
  value: number;
  label: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    TranslocoModule,
    ClipboardModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {
  private _unsubscribeAll = new Subject<void>();

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened = true;
  selectedPanel = 'profile';
  user: any;
  isWeb2User = false;

  // API Key state
  accessToken: string;
  hidePassword = true;
  isRenewing = false;
  isRevoking = false;
  showRenewPanel = false;
  showRevokeConfirm = false;
  selectedExpiration = 1;
  newlyGeneratedToken: string = null;
  showNewTokenAlert = false;

  expirationOptions: TokenExpiration[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 6, label: '6' },
    { value: 12, label: '12' },
    { value: 24, label: '24' },
    { value: 36, label: '36' },
  ];

  // Profile state
  profileForm: FormGroup;
  profileLoaded = false;
  isSavingProfile = false;
  avatar: string = null;
  countryCodes: CountryDialCode[] = [];

  sections: SettingsSection[] = [
    {
      id: 'account',
      title: 'settings.sections.account',
      panels: [
        {
          id: 'profile',
          icon: 'heroicons_outline:user-circle',
          title: 'settings.panels.profile',
          description: 'settings.panels.profile_desc',
        },
        {
          id: 'security',
          icon: 'heroicons_outline:shield-check',
          title: 'settings.panels.security',
          description: 'settings.panels.security_desc',
          disabled: true,
          badge: 'settings.coming_soon',
        },
      ],
    },
    {
      id: 'developers',
      title: 'settings.sections.developers',
      panels: [
        {
          id: 'api_key',
          icon: 'heroicons_outline:key',
          title: 'settings.panels.api_key',
          description: 'settings.panels.api_key_desc',
        },
        {
          id: 'webhooks',
          icon: 'heroicons_outline:globe-alt',
          title: 'settings.panels.webhooks',
          description: 'settings.panels.webhooks_desc',
          disabled: true,
          badge: 'settings.coming_soon',
        },
      ],
    },
  ];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _snackBar: MatSnackBar,
    private _translocoService: TranslocoService,
    private _settingsService: SettingsService,
    private _clipboard: Clipboard,
    private _formBuilder: FormBuilder,
    private _countryService: CountryService,
  ) {
    this.countryCodes = this._countryService.countryDialCodes;
    this._initProfileForm();
    this._loadUserData();
  }

  ngOnInit(): void {
    this._observeMediaChanges();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  selectPanel(panelId: string): void {
    const panel = this._findPanel(panelId);
    if (panel?.disabled) return;

    this.selectedPanel = panelId;
    this._resetPanelStates();

    if (this.drawerMode === 'over') {
      this.drawerOpened = false;
    }
    this._cdr.markForCheck();
  }

  isPanelSelected(panelId: string): boolean {
    return this.selectedPanel === panelId;
  }

  // API Key Methods
  copyToken(): void {
    const tokenToCopy = this.newlyGeneratedToken || this.accessToken;
    if (!tokenToCopy) return;

    this._clipboard.copy(tokenToCopy);
    const message = this._translocoService.translate('settings.api_key.token_copied');
    this._snackBar.open(message, null, { duration: 2000 });
  }

  toggleRenewPanel(): void {
    this.showRenewPanel = !this.showRenewPanel;
    if (this.showRenewPanel) {
      this.showRevokeConfirm = false;
    }
    this._cdr.markForCheck();
  }

  toggleRevokeConfirm(): void {
    this.showRevokeConfirm = !this.showRevokeConfirm;
    if (this.showRevokeConfirm) {
      this.showRenewPanel = false;
    }
    this._cdr.markForCheck();
  }

  renewToken(): void {
    this.isRenewing = true;
    this._cdr.markForCheck();

    this._settingsService
      .renewToken(this.selectedExpiration)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response) => {
          if (response?.accessToken) {
            this.accessToken = response.accessToken;
            this.newlyGeneratedToken = response.accessToken;
            this.showNewTokenAlert = true;
            this.showRenewPanel = false;

            const message = this._translocoService.translate(
              'settings.api_key.token_renewed_success',
            );
            this._snackBar.open(message, null, { duration: 3000 });
          }
          this.isRenewing = false;
          this._cdr.markForCheck();
        },
        error: () => {
          const message = this._translocoService.translate('settings.api_key.token_renewal_failed');
          this._snackBar.open(message, null, { duration: 3000 });
          this.isRenewing = false;
          this._cdr.markForCheck();
        },
      });
  }

  revokeAndGenerateNew(): void {
    this.isRevoking = true;
    this._cdr.markForCheck();

    this._settingsService
      .revokeAndGenerateNew()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response) => {
          const newToken = response?.token || (response as any)?.accessToken;
          if (newToken) {
            this.accessToken = newToken;
            this.newlyGeneratedToken = newToken;
            this.showNewTokenAlert = true;
            this.showRevokeConfirm = false;

            const message = this._translocoService.translate(
              'settings.api_key.tokens_revoked_success',
            );
            this._snackBar.open(message, null, { duration: 3000 });
          }
          this.isRevoking = false;
          this._cdr.markForCheck();
        },
        error: () => {
          const message = this._translocoService.translate(
            'settings.api_key.token_revocation_failed',
          );
          this._snackBar.open(message, null, { duration: 3000 });
          this.isRevoking = false;
          this._cdr.markForCheck();
        },
      });
  }

  dismissNewTokenAlert(): void {
    this.showNewTokenAlert = false;
    this.newlyGeneratedToken = null;
    this._cdr.markForCheck();
  }

  getMaskedToken(): string {
    if (!this.accessToken) return '';
    const visibleChars = 12;
    if (this.accessToken.length <= visibleChars * 2) {
      return '•'.repeat(this.accessToken.length);
    }
    const start = this.accessToken.substring(0, visibleChars);
    const end = this.accessToken.substring(this.accessToken.length - visibleChars);
    const middleLength = this.accessToken.length - visibleChars * 2;
    return `${start}${'•'.repeat(Math.min(middleLength, 20))}${end}`;
  }

  // ============================================
  // Profile Methods
  // ============================================

  saveProfile(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.isSavingProfile = true;
    this._cdr.markForCheck();

    const formValue = this.profileForm.value;
    const profileData: Partial<ProfileData> = {
      name: formValue.name,
      email: formValue.email,
      countryCode: formValue.countryCode,
      company: formValue.company,
      address: formValue.address,
      avatar: this.avatar,
    };

    this._settingsService
      .updateProfile(this.user._id, profileData)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response) => {
          if (response?.data) {
            this.user = { ...this.user, ...response.data };
            const message = this._translocoService.translate('settings.profile.save_success');
            this._snackBar.open(message, null, { duration: 3000 });
          }
          this.isSavingProfile = false;
          this._cdr.markForCheck();
        },
        error: () => {
          const message = this._translocoService.translate('settings.profile.save_error');
          this._snackBar.open(message, null, { duration: 3000 });
          this.isSavingProfile = false;
          this._cdr.markForCheck();
        },
      });
  }

  onFileDropped(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this._processFile(files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onFileBrowse(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this._processFile(input.files[0]);
    }
  }

  removeAvatar(): void {
    this.avatar = null;
    this._cdr.markForCheck();
  }

  getUserInitial(): string {
    return this.user?.name?.charAt(0)?.toUpperCase() || 'U';
  }

  private _processFile(file: File): void {
    // Validate file type
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      const message = this._translocoService.translate('settings.profile.invalid_file_type');
      this._snackBar.open(message, null, { duration: 3000 });
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      const message = this._translocoService.translate('settings.profile.file_too_large');
      this._snackBar.open(message, null, { duration: 3000 });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.avatar = reader.result as string;
      this._cdr.markForCheck();
    };
  }

  private _initProfileForm(): void {
    this.profileForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: [''],
      phone: [{ value: '', disabled: true }],
      company: [''],
      address: [''],
    });
  }

  private _loadProfileData(): void {
    if (!this.user) return;

    this.profileForm.patchValue({
      name: this.user.name || '',
      email: this.user.email || '',
      countryCode: this.user.countryCode || '+1',
      phone: this.user.phone || '',
      company: this.user.company || '',
      address: this.user.address || '',
    });

    this.avatar = this.user.avatar || null;
    this.profileLoaded = true;
    this._cdr.markForCheck();
  }

  private _loadUserData(): void {
    // Try both 'verifik_account' (Smart-Agent) and 'user' (legacy) keys
    const userStr = localStorage.getItem('verifik_account') || localStorage.getItem('user');
    this.user = userStr ? JSON.parse(userStr) : null;
    this.accessToken = this._settingsService.accessToken;
    this.isWeb2User = !!this.user;

    // Load profile data if user exists
    if (this.user) {
      this._loadProfileData();
    }
  }

  private _observeMediaChanges(): void {
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {
        if (matchingAliases.includes('lg')) {
          this.drawerMode = 'side';
          this.drawerOpened = true;
        } else {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        }
        this._cdr.markForCheck();
      });
  }

  private _findPanel(panelId: string): SettingsPanel | undefined {
    for (const section of this.sections) {
      const panel = section.panels.find((p) => p.id === panelId);
      if (panel) return panel;
    }
    return undefined;
  }

  private _resetPanelStates(): void {
    this.showRenewPanel = false;
    this.showRevokeConfirm = false;
    this.showNewTokenAlert = false;
    this.newlyGeneratedToken = null;
  }
}
