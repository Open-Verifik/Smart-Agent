import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    HostListener,
    inject,
    signal,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { AuthApiService } from 'app/core/services/auth-api.service';
import { BiometricSecurityService } from 'app/core/services/biometric-security.service';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { PasskeyZelfService } from 'app/core/services/passkey-zelf.service';
import { SessionService } from 'app/core/services/session.service';
import { WalletEncryptionService } from 'app/core/services/wallet-encryption.service';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';

// Extend Window interface for MetaMask
declare global {
  interface Window {
    ethereum?: any;
  }
}

type AuthState =
  | 'CHOICE'
  | 'EMAIL_INPUT'
  | 'PHONE_INPUT'
  | 'WHATSAPP_INPUT'
  | 'OTP_VERIFY_EMAIL'
  | 'OTP_VERIFY_PHONE'
  | 'OTP_VERIFY_WHATSAPP'
  | 'PASSKEY_ENROLL'
  | 'WALLET_CONNECT'
  | 'WALLET_ENCRYPT_CHOICE'
  | 'WALLET_ENCRYPT_PIN';

@Component({
  selector: 'auth-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    TranslocoModule,
  ],
  templateUrl: './auth-modal.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthModalComponent {
  state = signal<AuthState>('CHOICE');
  isLoading = signal(false);

  // Inputs
  email = signal('');
  phone = signal('');
  otp = signal(''); // Array of 6 chars? Or just string for now.
  otpArray = signal<string[]>(new Array(6).fill(''));

  // Wallet encryption
  pin = signal('');
  pinArray = signal<string[]>(new Array(6).fill(''));
  tempWalletAddress = signal<string | null>(null);
  tempWalletPrivateKey = signal<string | null>(null);
  passkeySupported = signal(false);

  // Login passkey (ZelfKey / WebAuthn)
  passkeyExistsForContact = signal(false);
  lastPasskeyAttemptFound = signal(false);
  pendingPasskeyToken = signal<string | null>(null);
  private _passkeyDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  // Existing auth state
  connectedWalletAddress = signal<string | null>(null);
  hasWeb2Auth = signal(false); // Track if user already has Web2 authentication

  // Country selection
  selectedCountry = signal<CountryDialCode | null>(null);
  countrySearchTerm = signal('');
  filteredCountries = signal<CountryDialCode[]>([]);
  isCountryDropdownOpen = signal(false);
  dropdownPosition = signal<{ top: string; left: string } | null>(null);

  @ViewChild('countryButton', { static: false }) countryButtonRef?: ElementRef<HTMLButtonElement>;

  // Backend IDs
  validationId = signal<string | null>(null);

  // Phone gateway type (sms or whatsapp)
  phoneGateway = signal<'sms' | 'whatsapp'>('sms');

  private _authService = inject(AuthService);
  private _authApiService = inject(AuthApiService);
  private _dialogRef = inject(MatDialogRef<AuthModalComponent>);
  private _router = inject(Router);
  private _countryService = inject(CountryService);
  private _encryptionService = inject(WalletEncryptionService);
  private _biometricSecurity = inject(BiometricSecurityService);
  private _passkeyZelf = inject(PasskeyZelfService);
  private _sessionService = inject(SessionService);
  private _dialogData = inject<{ startWithWallet?: boolean }>(MAT_DIALOG_DATA, { optional: true });

  projectId = environment.projectId;
  projectFlowId = environment.loginProjectFlowId;

  get countryDialCodes(): CountryDialCode[] {
    return this._countryService.countryDialCodes;
  }

  constructor() {
    // Set default country to US
    const defaultCountry = this._countryService.countryDialCodes.find(
      (c) => c.countryCode === 'us',
    );
    if (defaultCountry) {
      this.selectedCountry.set(defaultCountry);
    }
    this.filteredCountries.set(this.countryDialCodes);

    // Check if wallet is already connected
    const existingAddress = localStorage.getItem('x402_agent_address');
    if (existingAddress) {
      this.connectedWalletAddress.set(existingAddress);
    }

    // Check if user already has Web2 authentication
    const storedUser = localStorage.getItem('verifik_account');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData && (userData.id || userData._id)) {
          this.hasWeb2Auth.set(true);
        }
      } catch (error) {
        console.warn('Failed to parse stored user data', error);
      }
    }

    // If dialog was opened with startWithWallet flag, go directly to wallet flow
    if (this._dialogData?.startWithWallet) {
      // Use setTimeout to ensure the component is fully initialized
      setTimeout(() => {
        this.startWalletFlow();
      }, 0);
    }
  }

  setState(newState: AuthState) {
    this.state.set(newState);
    this.otp.set('');
    this.otpArray.set(new Array(6).fill(''));
    this.error.set(null);
    this.errorKey.set(null);
    this.passkeyExistsForContact.set(false);
    if (newState === 'PHONE_INPUT' || newState === 'WHATSAPP_INPUT') {
      // Reset to default country when entering phone input
      const defaultCountry = this._countryService.countryDialCodes.find(
        (c) => c.countryCode === 'us',
      );
      if (defaultCountry) {
        this.selectedCountry.set(defaultCountry);
      }
      this.countrySearchTerm.set('');
      this.filteredCountries.set(this.countryDialCodes);
    }
  }

  onEmailChange(value: string): void {
    this.email.set(value);
    this._checkPasskeyAvailability(this.isValidEmail(value) ? value.trim() : '');
  }

  get showPasskeyButton(): boolean {
    return this.passkeyExistsForContact();
  }

  error = signal<string | null>(null);
  errorKey = signal<string | null>(null); // Translation key for error messages

  // --- Email Flow ---
  startEmailFlow() {
    this.setState('EMAIL_INPUT');
  }

  private isValidEmail(email: string): boolean {
    if (!email || !email.trim()) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  get isEmailValid(): boolean {
    return this.isValidEmail(this.email());
  }

  async sendEmailOtp() {
    const emailValue = this.email().trim();

    if (!emailValue) {
      this.error.set('Please enter your email address');
      return;
    }

    if (!this.isValidEmail(emailValue)) {
      this.error.set('Please enter a valid email address');
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    this._authApiService
      .sendEmailOtp({
        email: emailValue,
        project: this.projectId,
        type: 'login',
        validationMethod: 'verificationCode',
      })
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.data?._id) {
            this.validationId.set(res.data._id);
            this.setState('OTP_VERIFY_EMAIL');
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          this.setState('EMAIL_INPUT');
          this.setError(err.error?.message || 'Failed to send OTP');
        },
      });
  }

  async verifyEmailOtp() {
    const code = this.otpArray().join('');

    if (code.length !== 6 || !this.validationId()) return;

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    this._authApiService
      .validateEmailOtp({
        otp: code,
        email: this.email(),
        projectFlow: this.projectFlowId,
        project: this.projectId,
        type: 'login',
      })
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.handleSuccess(res);
        },
        error: (err) => {
          console.error(err);
          this.isLoading.set(false);
          this.error.set('Invalid Code');
        },
      });
  }

  // --- Phone Flow ---
  startPhoneFlow() {
    this.phoneGateway.set('sms');
    this.setState('PHONE_INPUT');
  }

  // --- WhatsApp Flow ---
  startWhatsAppFlow() {
    this.phoneGateway.set('whatsapp');
    this.setState('WHATSAPP_INPUT');
  }

  private isValidPhone(phone: string): boolean {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    // Phone should have at least 7 digits and at most 15 digits (E.164 standard)
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  }

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Only allow digits, spaces, dashes, and parentheses
    value = value.replace(/[^\d\s\-()]/g, '');

    this.phone.set(value);
    this._syncPhonePasskeyAvailability();
  }

  onCountrySearchChange(searchTerm: string) {
    this.countrySearchTerm.set(searchTerm);
    this.filteredCountries.set(
      this._countryService.filterCountryDialCodes(this.countryDialCodes, searchTerm),
    );
  }

  toggleCountryDropdown() {
    const isOpening = !this.isCountryDropdownOpen();
    this.isCountryDropdownOpen.set(isOpening);

    if (isOpening && this.countryButtonRef) {
      // Calculate position for fixed dropdown (fixed positioning is relative to viewport)
      const button = this.countryButtonRef.nativeElement;
      const rect = button.getBoundingClientRect();
      this.dropdownPosition.set({
        top: `${rect.bottom + 4}px`, // Fixed positioning doesn't need scrollY
        left: `${rect.left}px`, // Fixed positioning doesn't need scrollX
      });
    } else {
      this.dropdownPosition.set(null);
    }
  }

  selectCountry(country: CountryDialCode) {
    this.selectedCountry.set(country);
    this.countrySearchTerm.set('');
    this.filteredCountries.set(this.countryDialCodes);
    this.isCountryDropdownOpen.set(false);
    this.dropdownPosition.set(null);
    this._syncPhonePasskeyAvailability();
  }

  async sendPhoneOtp() {
    const phoneValue = this.phone().trim();
    const country = this.selectedCountry();

    if (!phoneValue) {
      this.error.set('Please enter your phone number');
      return;
    }

    if (!country) {
      this.error.set('Please select a country');
      return;
    }

    // Validate phone number
    const phoneDigits = phoneValue.replace(/\D/g, '');
    if (!this.isValidPhone(phoneDigits)) {
      this.error.set('Please enter a valid phone number');
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    // Format phone number: remove country code if it's already included
    let finalPhone = phoneDigits;
    const dialCodeDigits = country.dialCode.replace('+', '');

    // If phone starts with country code, remove it (we'll add it back)
    if (phoneDigits.startsWith(dialCodeDigits)) {
      finalPhone = phoneDigits.substring(dialCodeDigits.length);
    }

    const gateway = this.phoneGateway();
    this._authApiService
      .sendPhoneOtp({
        phone: finalPhone,
        countryCode: country.dialCode,
        project: this.projectId,
        type: 'login',
        validationMethod: 'verificationCode',
        phoneGateway: gateway,
      })
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.data?._id) {
            this.validationId.set(res.data._id);
            this.setState(gateway === 'whatsapp' ? 'OTP_VERIFY_WHATSAPP' : 'OTP_VERIFY_PHONE');
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          this.setState(gateway === 'whatsapp' ? 'WHATSAPP_INPUT' : 'PHONE_INPUT');
          this.setError(err.error?.message || 'Failed to send OTP');
        },
      });
  }

  async verifyPhoneOtp() {
    const code = this.otpArray().join('');
    if (code.length !== 6 || !this.validationId()) return;

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    const country = this.selectedCountry();
    if (!country) return;

    let finalPhone = this.phone().replace(/\D/g, '');
    const dialCodeDigits = country.dialCode.replace('+', '');

    if (finalPhone.startsWith(dialCodeDigits)) {
      finalPhone = finalPhone.substring(dialCodeDigits.length);
    }

    this._authApiService
      .validatePhoneOtp({
        otp: code,
        phoneValidation: this.validationId()!,
        project: this.projectId,
        type: 'login',
        phone: finalPhone,
        countryCode: country.dialCode,
      })
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.handleSuccess(res);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.error.set('Invalid Code');
        },
      });
  }

  async verifyWhatsAppOtp() {
    // WhatsApp uses the same validation as phone
    await this.verifyPhoneOtp();
  }

  // --- Wallet Flow ---
  startWalletFlow() {
    this.setState('WALLET_CONNECT');
  }

  /**
   * Handle back navigation from wallet connection
   * If user has Web2 auth, close modal instead of going back to CHOICE
   */
  handleWalletBack() {
    if (this.hasWeb2Auth()) {
      // User already has Web2 auth, just close the modal
      this._dialogRef.close();
    } else {
      // User doesn't have Web2 auth, go back to choice screen
      this.setState('CHOICE');
    }
  }

  async createAgentWallet() {
    this.isLoading.set(true);

    try {
      // Lazy load ethers to avoid large bundle payload if not used
      const { ethers } = await import('ethers');
      const wallet = ethers.Wallet.createRandom();

      console.log('Created Wallet:', wallet.address);

      // Store wallet temporarily (not in localStorage yet)
      this.tempWalletAddress.set(wallet.address);
      this.tempWalletPrivateKey.set(wallet.privateKey);

      // Store address immediately (not sensitive)
      localStorage.setItem('x402_agent_address', wallet.address);

      // Check if passkeys are supported
      const supported = await this._encryptionService.isPasskeysSupported();
      this.passkeySupported.set(supported);

      this.isLoading.set(false);

      // Move to encryption choice screen
      this.setState('WALLET_ENCRYPT_CHOICE');
    } catch (error) {
      console.error('Wallet creation failed:', error);
      this.error.set('Failed to create wallet');
      this.isLoading.set(false);
    }
  }

  /**
   * Connect to MetaMask wallet
   */
  async connectMetaMask() {
    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        this.error.set('MetaMask is not installed. Please install MetaMask extension.');
        this.isLoading.set(false);
        return;
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (!accounts || accounts.length === 0) {
        this.error.set('No accounts found in MetaMask');
        this.isLoading.set(false);
        return;
      }

      const address = accounts[0];
      console.log('Connected MetaMask:', address);

      // Request private key export (this will prompt user in MetaMask)
      // Note: MetaMask doesn't directly expose private keys for security
      // We'll need to ask user to export it manually or use a different approach

      // For now, we'll store the address and mark that this is a MetaMask wallet
      // The user will need to sign transactions through MetaMask
      localStorage.setItem('x402_agent_address', address);
      localStorage.setItem('x402_wallet_type', 'metamask'); // Track wallet type

      this.isLoading.set(false);

      // Close modal and reload safely
      this._dialogRef.close();
      this._sessionService.resetReloadTracking(); // Reset tracking after successful login
      this._sessionService.safeReload();
    } catch (error: any) {
      console.error('MetaMask connection failed:', error);
      if (error.code === 4001) {
        this.error.set('Connection rejected. Please approve the connection in MetaMask.');
      } else {
        this.error.set('Failed to connect to MetaMask');
      }
      this.isLoading.set(false);
    }
  }

  async encryptWithPasskey() {
    const privateKey = this.tempWalletPrivateKey();
    if (!privateKey) {
      this.error.set('No wallet to encrypt');
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    const success = await this._encryptionService.encryptWithPasskeys(privateKey);

    if (success) {
      // Set wallet type explicitly
      localStorage.setItem('x402_wallet_type', 'encrypted-model');

      // Clear temp data
      this.tempWalletPrivateKey.set(null);

      // Close modal and reload safely
      this._dialogRef.close(true);
      this._sessionService.resetReloadTracking(); // Reset tracking after successful wallet setup
      this._sessionService.safeReload();
    } else {
      this.isLoading.set(false);
      this.error.set('Passkey encryption failed. Please try PIN instead.');
    }
  }

  usePINInstead() {
    this.setState('WALLET_ENCRYPT_PIN');
  }

  async encryptWithPIN() {
    const privateKey = this.tempWalletPrivateKey();
    const pin = this.pinArray().join('');

    if (!privateKey) {
      this.error.set('No wallet to encrypt');
      return;
    }

    if (pin.length !== 6) {
      this.error.set('Please enter a 6-digit PIN');
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    const success = await this._encryptionService.encryptWithPIN(privateKey, pin);

    if (success) {
      // Set wallet type explicitly
      localStorage.setItem('x402_wallet_type', 'encrypted-model');

      // Clear temp data
      this.tempWalletPrivateKey.set(null);
      this.pinArray.set(new Array(6).fill(''));

      // Close modal and reload safely
      this._dialogRef.close(true);
      this._sessionService.resetReloadTracking(); // Reset tracking after successful wallet setup
      this._sessionService.safeReload();
    } else {
      this.isLoading.set(false);
      this.error.set('PIN encryption failed. Please try again.');
    }
  }

  // --- Helpers ---

  /**
   * Set error message with translation key mapping
   * Maps API error codes to translation keys, or uses the message directly if not mapped
   */
  setError(message: string) {
    // Map common error codes to translation keys
    const errorMap: { [key: string]: string } = {
      invalid_email: 'authModal.errors.invalidEmail',
      invalid_phone: 'authModal.errors.invalidPhone',
    };

    // Check if message matches an error code
    const errorKey = errorMap[message];
    if (errorKey) {
      this.errorKey.set(errorKey);
      this.error.set(null);
    } else {
      // For non-mapped errors, use the message directly
      this.error.set(message);
      this.errorKey.set(null);
    }
  }

  handleSuccess(res: any) {
    const data = res.data || res;
    // This is the temporary token from the validation endpoint
    const tempToken = data.token || data.accessToken;

    if (!tempToken) {
      console.warn('No temp token found in response', res);
      this._dialogRef.close(true);
      return;
    }

    void this._afterOtpSuccess(tempToken);
  }

  /**
   * After OTP: skip enroll if a passkey already exists; otherwise offer Faster login.
   */
  private async _afterOtpSuccess(tempToken: string): Promise<void> {
    this._authService.accessToken = tempToken;
    this.pendingPasskeyToken.set(tempToken);

    const contact = this._resolveContactForPasskey();

    try {
      const supported = await this._biometricSecurity.isPasskeySupported();
      if (supported && contact) {
        const existing = await this._listPasskeysForContact(contact, false);
        if (existing.length === 0) {
          this.isLoading.set(false);
          this.state.set('PASSKEY_ENROLL');
          return;
        }
        this.passkeyExistsForContact.set(true);
      }
    } catch (e) {
      console.warn('[Passkeys] Could not check existing passkeys before enroll offer', e);
    }

    this._completeWeb2Login(tempToken);
  }

  skipPasskeyEnroll(): void {
    const token = this.pendingPasskeyToken();
    if (!token) {
      this._dialogRef.close(true);
      return;
    }
    this.isLoading.set(true);
    this._completeWeb2Login(token);
  }

  async setupPasskeyEnroll(): Promise<void> {
    const token = this.pendingPasskeyToken();
    const contact = this._resolveContactForPasskey();
    if (!token || !contact || this.isLoading()) return;

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    try {
      await this._registerPasskey(token, contact);
      this._completeWeb2Login(this._authService.accessToken || token);
    } catch (error) {
      console.error('[Passkeys] Enrollment failed', error);
      this.isLoading.set(false);
      this.errorKey.set('authModal.passkey.failed');
      this.error.set(null);
    }
  }

  async signInWithPasskey(): Promise<void> {
    if (this.isLoading()) return;

    const contact = this._resolveContactForPasskey();
    if (!contact) {
      this.errorKey.set(
        this.state() === 'EMAIL_INPUT' ? 'authModal.errors.invalidEmail' : 'authModal.errors.invalidPhone'
      );
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);
    this.errorKey.set(null);

    const loggedIn = await this._checkAndLoginWithPasskey(contact);

    if (!loggedIn) {
      this.isLoading.set(false);
      this.errorKey.set(
        this.lastPasskeyAttemptFound() ? 'authModal.passkey.failed' : 'authModal.passkey.notFound'
      );
      this.error.set(null);
    }
  }

  private _completeWeb2Login(tempToken: string): void {
    this._authService.accessToken = tempToken;

    this._authApiService.projectLogin().subscribe({
      next: (loginRes: any) => {
        const realToken = loginRes.data?.accessToken || loginRes.accessToken;

        if (realToken) {
          this._authService.accessToken = realToken;
          localStorage.setItem('accessToken', realToken);

          this._authApiService.getSession().subscribe({
            next: (sessionRes: any) => {
              const userData = sessionRes.data?.user || sessionRes.user || sessionRes;
              localStorage.setItem('verifik_account', JSON.stringify(userData));

              this._dialogRef.close(true);
              this._sessionService.resetReloadTracking();
              this._sessionService.safeReload();
            },
            error: (err) => {
              console.error('Session fetch failed', err);
              this.error.set('Failed to fetch session');
              this.isLoading.set(false);
            },
          });
        } else {
          this.error.set('Failed to obtain access token');
          this.isLoading.set(false);
        }
      },
      error: (err) => {
        console.error('Project login failed', err);
        this.error.set('Login failed');
        this.isLoading.set(false);
      },
    });
  }

  private _completeSessionWithToken(token: string): void {
    this._authService.accessToken = token;
    localStorage.setItem('accessToken', token);

    this._authApiService.getSession().subscribe({
      next: (sessionRes: any) => {
        const userData = sessionRes.data?.user || sessionRes.user || sessionRes;
        localStorage.setItem('verifik_account', JSON.stringify(userData));

        this._dialogRef.close(true);
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      },
      error: (err) => {
        console.error('Session fetch failed', err);
        this.error.set('Failed to fetch session');
        this.isLoading.set(false);
      },
    });
  }

  private _resolveContactForPasskey(): string {
    if (this.isValidEmail(this.email())) return this.email().trim();
    return this._normalizedPhoneContact();
  }

  private _normalizedPhoneContact(): string {
    const country = this.selectedCountry();
    const phoneDigits = this.phone().replace(/\D/g, '');
    if (!country || !this.isValidPhone(phoneDigits)) return '';

    let finalPhone = phoneDigits;
    const dialCodeDigits = country.dialCode.replace('+', '');
    if (finalPhone.startsWith(dialCodeDigits)) {
      finalPhone = finalPhone.substring(dialCodeDigits.length);
    }

    return `${country.dialCode}${finalPhone}`;
  }

  private _syncPhonePasskeyAvailability(): void {
    this._checkPasskeyAvailability(this._normalizedPhoneContact());
  }

  private _checkPasskeyAvailability(contact: string): void {
    if (this._passkeyDebounceTimer) clearTimeout(this._passkeyDebounceTimer);

    this.passkeyExistsForContact.set(false);

    if (!contact) return;

    this._passkeyDebounceTimer = setTimeout(async () => {
      try {
        const matches = await this._listPasskeysForContact(contact, false);
        this.passkeyExistsForContact.set(matches.length > 0);
      } catch (e) {
        console.error('Failed to check passkey availability', e);
      }
    }, 500);
  }

  private async _listPasskeysForContact(contact: string, fetchEncryptedContent = false): Promise<any[]> {
    const isEmail = contact.includes('@');
    const response = await this._passkeyZelf.listPasskeys(
      isEmail ? { email: contact } : { phone: contact },
      fetchEncryptedContent
    );

    return (response?.data || []).filter((f: any) => {
      const type = f.publicData?.type;
      const category = f.publicData?.category;
      const isPasskey = type === 'passKeys' || `${category || ''}`.endsWith('_passKeys');
      return isPasskey && category === `${this.projectId}_passKeys`;
    });
  }

  private async _checkAndLoginWithPasskey(contact: string): Promise<boolean> {
    this.lastPasskeyAttemptFound.set(false);

    let matches: any[] = [];
    try {
      matches = await this._listPasskeysForContact(contact, true);
    } catch (e) {
      console.error('[Passkey Login] Failed to list passkeys', e);
      return false;
    }

    if (!matches.length) return false;

    this.lastPasskeyAttemptFound.set(true);

    try {
      const allowCredentials = matches
        .map((m) => m.publicData?.credentialId)
        .filter((id: unknown): id is string => Boolean(id));

      const { credentialId: usedCredentialId } =
        await this._biometricSecurity.authenticatePasskey(allowCredentials);

      const ordered = [
        ...matches.filter((m) => m.publicData?.credentialId === usedCredentialId),
        ...matches.filter((m) => m.publicData?.credentialId !== usedCredentialId),
      ];

      const clientId =
        `${ordered[0]?.publicData?.clientId || ''}`.trim() ||
        `${`${ordered[0]?.publicData?.identifier || ''}`.replace(/_passKey$/, '')}`.trim();

      if (!clientId) {
        throw new Error('Passkey record is missing client id');
      }

      const encryptionKey = await this._biometricSecurity.deriveEncryptionKey(clientId);
      const token = await this._decryptFirstAvailablePasskey(ordered, encryptionKey);

      if (!token) {
        throw new Error('Unable to decrypt any passkey record for this account');
      }

      this._completeSessionWithToken(token);
      return true;
    } catch (e) {
      console.error('[Passkey Login] Authentication failed', e);
      return false;
    }
  }

  private async _decryptFirstAvailablePasskey(passkeys: any[], encryptionKey: CryptoKey): Promise<string | null> {
    for (const passkey of passkeys) {
      try {
        let iv: string;
        let ciphertext: string;

        if (passkey.encryptedContent) {
          ({ iv, ciphertext } = passkey.encryptedContent);
        } else {
          const encryptedFile = await fetch(passkey.url).then((res) => res.json());
          const payloadString = encryptedFile.encryptedToken || encryptedFile;
          ({ iv, ciphertext } =
            typeof payloadString === 'string' ? JSON.parse(payloadString) : payloadString);
          passkey.encryptedContent = { iv, ciphertext };
        }

        if (!iv || !ciphertext) continue;

        return await this._biometricSecurity.decryptData(encryptionKey, ciphertext, iv);
      } catch (e) {
        console.warn('[Passkey Login] Could not decrypt a passkey record, trying the next one', e);
      }
    }

    return null;
  }

  private async _registerPasskey(token: string, contact: string): Promise<void> {
    localStorage.setItem('accessToken', token);
    this._authService.accessToken = token;

    let tokenForVault = token;
    try {
      const refreshResponse: any = await firstValueFrom(this._authApiService.projectLogin(12));
      const refreshed = refreshResponse?.data?.accessToken || refreshResponse?.accessToken;
      if (refreshed) {
        tokenForVault = refreshed;
        this._authService.accessToken = refreshed;
        localStorage.setItem('accessToken', refreshed);
        this.pendingPasskeyToken.set(refreshed);
      }
    } catch (e) {
      console.warn('[Passkey Registration] Failed to refresh token for long-lived passkey', e);
    }

    const clientId = this._resolveClientIdFromToken(tokenForVault) || this._resolveClientIdFromToken(token);
    if (!clientId) {
      throw new Error('Unable to resolve client id for passkey registration');
    }

    const userId = new TextEncoder().encode(contact);
    const { credentialId } = await this._biometricSecurity.registerPasskey(contact, userId);

    const encryptionKey = await this._biometricSecurity.deriveEncryptionKey(clientId);
    const { ciphertext, iv } = await this._biometricSecurity.encryptData(encryptionKey, tokenForVault);
    const payloadString = JSON.stringify({
      iv,
      ciphertext,
      tokenExp: this._getTokenExpiration(tokenForVault),
    });

    const identifier = `${clientId}_passKey`;
    const isEmail = contact.includes('@');

    await this._passkeyZelf.createPasskey({
      publicData: {
        identifier,
        clientId,
        project: this.projectId,
        category: `${this.projectId}_passKeys`,
        credentialId,
        expiresAt: this._getTokenExpiration(tokenForVault),
        email: isEmail ? contact : undefined,
        phone: !isEmail ? contact : undefined,
      },
      identifier,
      payload: payloadString,
    });
  }

  private _resolveClientIdFromToken(token: string): string {
    try {
      const decoded = AuthUtils.getJwtPayload(token) || {};
      return `${decoded['clientId'] || decoded['id'] || ''}`.trim();
    } catch {
      return '';
    }
  }

  private _getTokenExpiration(token: string): number {
    try {
      const payload = AuthUtils.getJwtPayload(token) || {};
      if (typeof payload['exp'] === 'number') return payload['exp'];

      const expiresAt = payload['expiresAt'];
      if (typeof expiresAt === 'number') {
        return expiresAt > 1e12 ? Math.floor(expiresAt / 1000) : expiresAt;
      }

      return 0;
    } catch {
      return 0;
    }
  }

  onOtpInput(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove any non-digit characters
    value = value.replace(/\D/g, '');

    // Handle paste - if multiple digits, distribute them across inputs starting from current index
    if (value.length > 1) {
      const currentOtp = [...this.otpArray()];
      const digits = value.split('').slice(0, 6 - index); // Only take digits that fit

      // Fill from current index onwards
      for (let i = 0; i < digits.length && index + i < 6; i++) {
        currentOtp[index + i] = digits[i];
        // Update each input element's value
        const inputElement = document.getElementById(`otp-${index + i}`) as HTMLInputElement;
        if (inputElement) {
          inputElement.value = digits[i];
        }
      }

      this.otpArray.set(currentOtp);

      // Clear the current input
      input.value = currentOtp[index] || '';

      // Focus the input after the last filled digit
      const nextIndex = Math.min(index + digits.length, 5);
      setTimeout(() => {
        const nextInput = document.getElementById(`otp-${nextIndex}`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        }
      }, 0);

      // Auto submit if all 6 digits are filled
      if (currentOtp.every((v) => v !== '') && currentOtp.length === 6) {
        setTimeout(() => {
          if (this.state() === 'OTP_VERIFY_EMAIL') this.verifyEmailOtp();
          if (this.state() === 'OTP_VERIFY_PHONE') this.verifyPhoneOtp();
          if (this.state() === 'OTP_VERIFY_WHATSAPP') this.verifyWhatsAppOtp();
        }, 100);
      }
      return;
    }

    // Handle single character input
    const currentOtp = [...this.otpArray()];

    if (value.length > 0) {
      // Take only the last digit entered
      const digit = value.slice(-1);
      currentOtp[index] = digit;
      this.otpArray.set(currentOtp);

      // Clear and set the input value to just the single digit
      input.value = digit;

      // Move to next input if not the last one
      if (index < 5) {
        setTimeout(() => {
          const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
          if (nextInput) {
            nextInput.focus();
            nextInput.select();
          }
        }, 0);
      }

      // Auto submit if all 6 digits are filled
      if (currentOtp.every((v) => v !== '') && currentOtp.length === 6) {
        setTimeout(() => {
          if (this.state() === 'OTP_VERIFY_EMAIL') this.verifyEmailOtp();
          if (this.state() === 'OTP_VERIFY_PHONE') this.verifyPhoneOtp();
          if (this.state() === 'OTP_VERIFY_WHATSAPP') this.verifyWhatsAppOtp();
        }, 100);
      }
    } else {
      // Handle deletion - clear current input
      currentOtp[index] = '';
      this.otpArray.set(currentOtp);
      input.value = '';
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otpArray()[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  }

  // PIN input handlers (similar to OTP)
  onPinInput(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove any non-digit characters
    value = value.replace(/\D/g, '');

    // Handle paste
    if (value.length > 1) {
      const currentPin = [...this.pinArray()];
      const digits = value.split('').slice(0, 6 - index);

      for (let i = 0; i < digits.length && index + i < 6; i++) {
        currentPin[index + i] = digits[i];
        const inputElement = document.getElementById(`pin-${index + i}`) as HTMLInputElement;
        if (inputElement) {
          inputElement.value = digits[i];
        }
      }

      this.pinArray.set(currentPin);
      input.value = currentPin[index] || '';

      const nextIndex = Math.min(index + digits.length, 5);
      setTimeout(() => {
        const nextInput = document.getElementById(`pin-${nextIndex}`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        }
      }, 0);

      return;
    }

    // Handle single character input
    const currentPin = [...this.pinArray()];

    if (value.length > 0) {
      const digit = value.slice(-1);
      currentPin[index] = digit;
      this.pinArray.set(currentPin);
      input.value = digit;

      if (index < 5) {
        setTimeout(() => {
          const nextInput = document.getElementById(`pin-${index + 1}`) as HTMLInputElement;
          if (nextInput) {
            nextInput.focus();
            nextInput.select();
          }
        }, 0);
      }
    } else {
      currentPin[index] = '';
      this.pinArray.set(currentPin);
      input.value = '';
    }
  }

  onPinKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.pinArray()[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Close dropdown if clicking outside the country selector
    if (this.isCountryDropdownOpen() && !target.closest('.country-selector-container')) {
      this.isCountryDropdownOpen.set(false);
      this.dropdownPosition.set(null);
    }
  }
}
