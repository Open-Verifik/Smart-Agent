import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { finalize, map, startWith } from 'rxjs/operators';
import { ClientSettings, ProfileData, SettingsService, StaffMember, Workspace } from './settings.service';

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

interface CountryCodeOption {
  code: string;
  name: string;
}

interface DocumentTypeOption {
  value: string;
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
    MatDialogModule,
    MatMenuModule,
    TranslocoModule,
    ClipboardModule,
    RouterModule,
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

  // Billing state
  billingData: ClientSettings = null;
  payerForm: FormGroup;
  addressForm: FormGroup;
  billingLoaded = false;
  isSavingBilling = false;
  filteredDocumentTypes: Observable<DocumentTypeOption[]>;
  filteredBusinessCountryCodes: Observable<CountryCodeOption[]>;
  filteredPersonCountryCodes: Observable<CountryCodeOption[]>;

  billingCountryCodes: CountryCodeOption[] = [
    { code: '+1', name: 'United States' },
    { code: '+1', name: 'Canada' },
    { code: '+52', name: 'Mexico' },
    { code: '+57', name: 'Colombia' },
    { code: '+54', name: 'Argentina' },
    { code: '+56', name: 'Chile' },
    { code: '+55', name: 'Brazil' },
    { code: '+51', name: 'Peru' },
    { code: '+58', name: 'Venezuela' },
    { code: '+593', name: 'Ecuador' },
    { code: '+591', name: 'Bolivia' },
    { code: '+595', name: 'Paraguay' },
    { code: '+598', name: 'Uruguay' },
    { code: '+507', name: 'Panama' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+505', name: 'Nicaragua' },
    { code: '+504', name: 'Honduras' },
    { code: '+503', name: 'El Salvador' },
    { code: '+502', name: 'Guatemala' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+33', name: 'France' },
    { code: '+49', name: 'Germany' },
    { code: '+39', name: 'Italy' },
    { code: '+34', name: 'Spain' },
    { code: '+351', name: 'Portugal' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    { code: '+41', name: 'Switzerland' },
    { code: '+43', name: 'Austria' },
    { code: '+46', name: 'Sweden' },
    { code: '+47', name: 'Norway' },
    { code: '+45', name: 'Denmark' },
    { code: '+358', name: 'Finland' },
    { code: '+48', name: 'Poland' },
    { code: '+81', name: 'Japan' },
    { code: '+82', name: 'South Korea' },
    { code: '+86', name: 'China' },
    { code: '+91', name: 'India' },
    { code: '+61', name: 'Australia' },
    { code: '+64', name: 'New Zealand' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+972', name: 'Israel' },
    { code: '+90', name: 'Turkey' },
  ];

  personDocumentTypes: DocumentTypeOption[] = [];
  businessDocumentTypes: DocumentTypeOption[] = [];

  // Country dropdown state
  showBusinessCountryDropdown = false;
  showPersonCountryDropdown = false;

  // General Settings (Workspace) state
  workspace: Workspace = null;
  workspaceName = '';
  workspaceLogo: string = null;
  workspaceLoaded = false;
  isSavingWorkspace = false;
  isDeletingWorkspace = false;

  // Team Management state
  staffMembers: StaffMember[] = [];
  staffLoaded = false;
  isLoadingStaff = false;
  isSavingStaff = false;
  editingStaff: StaffMember = null;
  staffForm: FormGroup;
  showStaffCountryDropdown = false;

  // Subscription state for team limits
  selectedSubscription: any = null;
  staffLimit = 0;
  hasSubscription = false;

  @ViewChild('staffFormDialog') staffFormDialog: TemplateRef<any>;
  @ViewChild('deleteWorkspaceDialog') deleteWorkspaceDialog: TemplateRef<any>;
  staffDialogRef: any;

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
      id: 'workspace',
      title: 'settings.sections.workspace',
      panels: [
        {
          id: 'general',
          icon: 'heroicons_outline:cog-6-tooth',
          title: 'settings.panels.general',
          description: 'settings.panels.general_desc',
        },
        {
          id: 'team',
          icon: 'heroicons_outline:user-group',
          title: 'settings.panels.team',
          description: 'settings.panels.team_desc',
        },
      ],
    },
    {
      id: 'billing',
      title: 'settings.sections.billing',
      panels: [
        {
          id: 'billing_details',
          icon: 'heroicons_outline:credit-card',
          title: 'settings.panels.billing_details',
          description: 'settings.panels.billing_details_desc',
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

  // Panel ID to URL slug mapping
  private _panelToSlug: Record<string, string> = {
    profile: 'profile',
    security: 'security',
    general: 'general',
    team: 'team',
    billing_details: 'billing-details',
    api_key: 'api-key',
    webhooks: 'webhooks',
  };

  private _slugToPanel: Record<string, string> = {
    profile: 'profile',
    security: 'security',
    general: 'general',
    team: 'team',
    'billing-details': 'billing_details',
    'api-key': 'api_key',
    webhooks: 'webhooks',
  };

  constructor(
    private _cdr: ChangeDetectorRef,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _snackBar: MatSnackBar,
    private _translocoService: TranslocoService,
    private _settingsService: SettingsService,
    private _clipboard: Clipboard,
    private _formBuilder: FormBuilder,
    private _countryService: CountryService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog,
  ) {
    this.countryCodes = this._countryService.countryDialCodes;
    this._initProfileForm();
    this._initBillingForms();
    this._initDocumentTypes();
    this._initStaffForm();
    this._loadUserData();
  }

  ngOnInit(): void {
    this._observeMediaChanges();
    this._observeRouteChanges();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  selectPanel(panelId: string): void {
    const panel = this._findPanel(panelId);
    if (panel?.disabled) return;

    // Navigate to the new panel route
    const slug = this._panelToSlug[panelId] || panelId;
    this._router.navigate(['/settings', slug]);
  }

  private _onPanelChanged(panelId: string): void {
    this.selectedPanel = panelId;
    this._resetPanelStates();

    // Load billing data when billing panel is selected
    if (panelId === 'billing_details' && !this.billingLoaded) {
      this.loadBillingData();
    }

    // Load workspace data when general panel is selected
    if (panelId === 'general' && !this.workspaceLoaded) {
      this.loadWorkspaceData();
    }

    // Load staff data when team panel is selected
    if (panelId === 'team' && !this.staffLoaded) {
      this.loadStaffData();
    }

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

  private _initBillingForms(): void {
    this.payerForm = this._formBuilder.group({
      type: ['person'],
      // Business fields
      business_name: [''],
      business_documentType: [''],
      business_documentNumber: [''],
      business_countryCode: [''],
      business_country: [''],
      business_phone: [''],
      business_email: [''],
      business_legalRepresentative: [''],
      // Person fields
      person_name: [''],
      person_documentType: [''],
      person_documentNumber: [''],
      person_countryCode: [''],
      person_country: [''],
      person_phone: [''],
      person_email: [''],
    });

    this.addressForm = this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
    });

    this._setupBillingFilters();
  }

  private _initDocumentTypes(): void {
    this.personDocumentTypes = [
      { value: 'CC', label: this._translocoService.translate('settings.billing.document_types.CC') || 'Citizenship Card' },
      { value: 'CE', label: this._translocoService.translate('settings.billing.document_types.CE') || 'Foreign ID' },
      { value: 'TI', label: this._translocoService.translate('settings.billing.document_types.TI') || 'Identity Card' },
      { value: 'NIT', label: this._translocoService.translate('settings.billing.document_types.NIT') || 'Tax ID' },
      { value: 'PPT', label: this._translocoService.translate('settings.billing.document_types.PPT') || 'Passport' },
      { value: 'DNI', label: this._translocoService.translate('settings.billing.document_types.DNI') || 'National ID' },
      { value: 'RUC', label: this._translocoService.translate('settings.billing.document_types.RUC') || 'Tax Registry' },
      { value: 'CURP', label: this._translocoService.translate('settings.billing.document_types.CURP') || 'CURP' },
      { value: 'RUT', label: this._translocoService.translate('settings.billing.document_types.RUT') || 'Tax Role' },
    ];

    this.businessDocumentTypes = [
      { value: 'NO_TAX', label: this._translocoService.translate('settings.billing.document_types.NO_TAX') || 'No Tax ID' },
      { value: 'INTERNATIONAL_TAX', label: this._translocoService.translate('settings.billing.document_types.INTERNATIONAL_TAX') || 'International Tax ID' },
      { value: 'NIT', label: this._translocoService.translate('settings.billing.document_types.NIT') || 'Tax ID (NIT)' },
    ];
  }

  private _setupBillingFilters(): void {
    // Filter for document types
    const documentTypeControl = this.isABusiness()
      ? this.payerForm.get('business_documentType')
      : this.payerForm.get('person_documentType');

    this.filteredDocumentTypes = this.payerForm.valueChanges.pipe(
      startWith(''),
      map(() => {
        const source = this.isABusiness() ? this.businessDocumentTypes : this.personDocumentTypes;
        const control = this.isABusiness()
          ? this.payerForm.get('business_documentType')
          : this.payerForm.get('person_documentType');
        const value = control?.value;
        const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
        return filterValue
          ? source.filter((opt) => opt.label.toLowerCase().includes(filterValue))
          : source;
      }),
    );

    // Filter for business country codes
    this.filteredBusinessCountryCodes = this.payerForm.get('business_countryCode').valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCountryCodes(value)),
    );

    // Filter for person country codes
    this.filteredPersonCountryCodes = this.payerForm.get('person_countryCode').valueChanges.pipe(
      startWith(''),
      map((value) => this._filterCountryCodes(value)),
    );
  }

  private _filterCountryCodes(value: string | CountryCodeOption): CountryCodeOption[] {
    if (!value || (typeof value === 'string' && value.trim().length === 0)) {
      return this.billingCountryCodes;
    }

    const filterValue = typeof value === 'string'
      ? value.toLowerCase().trim()
      : `${value.code} ${value.name}`.toLowerCase();

    return this.billingCountryCodes.filter(
      (country) =>
        country.name.toLowerCase().includes(filterValue) ||
        country.code.toLowerCase().includes(filterValue) ||
        country.code.replace('+', '').includes(filterValue),
    );
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

  // ============================================
  // Billing Methods
  // ============================================

  loadBillingData(): void {
    if (!this.user?._id || this.billingLoaded) return;

    this._settingsService
      .getBillingConfig(this.user._id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response) => {
          if (response?.data) {
            this.billingData = response.data;
            this._populateBillingForms();
          } else {
            // Initialize default billing data
            this.billingData = this._getDefaultBillingData();
          }
          this.billingLoaded = true;
          this._cdr.markForCheck();
        },
        error: () => {
          // Initialize default billing data on error
          this.billingData = this._getDefaultBillingData();
          this.billingLoaded = true;
          this._cdr.markForCheck();
        },
      });
  }

  private _getDefaultBillingData(): ClientSettings {
    return {
      accountType: 'subscription',
      testAccount: false,
      invoiceSettings: {
        invoiceType: 'stripe',
        type: 'person',
        business: null,
        person: null,
        address: {
          address: '',
          city: '',
          province: '',
          country: '',
          postalCode: '',
        },
      },
      sendEmailNotifications: true,
      client: this.user?._id || '',
    };
  }

  private _populateBillingForms(): void {
    if (!this.billingData?.invoiceSettings) return;

    const { invoiceSettings } = this.billingData;

    // Set payer type
    this.payerForm.patchValue({
      type: invoiceSettings.type || 'person',
    });

    // Populate business fields
    if (invoiceSettings.business) {
      const business = invoiceSettings.business;
      this.payerForm.patchValue({
        business_name: business.business_name || '',
        business_documentType: business.business_documentType || '',
        business_documentNumber: business.business_documentNumber || '',
        business_countryCode: this._formatCountryCodeForDisplay(business.business_countryCode, business.business_country),
        business_country: business.business_country || '',
        business_phone: business.business_phone || '',
        business_email: business.business_email || '',
        business_legalRepresentative: business.business_legalRepresentative || '',
      });
    }

    // Populate person fields
    if (invoiceSettings.person) {
      const person = invoiceSettings.person;
      this.payerForm.patchValue({
        person_name: person.person_name || '',
        person_documentType: person.person_documentType || '',
        person_documentNumber: person.person_documentNumber || '',
        person_countryCode: this._formatCountryCodeForDisplay(person.person_countryCode, person.person_country),
        person_country: person.person_country || '',
        person_phone: person.person_phone || '',
        person_email: person.person_email || '',
      });
    }

    // Populate address
    if (invoiceSettings.address) {
      this.addressForm.patchValue({
        address: invoiceSettings.address.address || '',
        city: invoiceSettings.address.city || '',
        province: invoiceSettings.address.province || '',
        country: invoiceSettings.address.country || '',
        postalCode: invoiceSettings.address.postalCode || '',
      });
    }
  }

  private _formatCountryCodeForDisplay(code: string, name?: string): string {
    if (!code) return '';

    // If we have both code and name, format it
    if (name) {
      return `${code} ${name}`;
    }

    // Try to find the country name from the code
    const country = this.billingCountryCodes.find((c) => c.code === code);
    if (country) {
      return `${country.code} ${country.name}`;
    }

    return code;
  }

  isABusiness(): boolean {
    return this.payerForm?.value?.type === 'business';
  }

  isAPerson(): boolean {
    return this.payerForm?.value?.type === 'person';
  }

  displayCountryCodeFn(country: CountryCodeOption | string): string {
    if (!country) return '';
    if (typeof country === 'string') return country;
    return country.code && country.name ? `${country.code} ${country.name}` : '';
  }

  displayDocumentTypeFn(doc: DocumentTypeOption | string): string {
    if (!doc) return '';
    if (typeof doc === 'string') return doc;
    return doc.label || '';
  }

  onCountryCodeSelected(event: any, type: 'business' | 'person'): void {
    const selectedCountry = event.option?.value;
    if (selectedCountry?.code && selectedCountry?.name) {
      const countryCodeField = type === 'business' ? 'business_countryCode' : 'person_countryCode';
      const countryField = type === 'business' ? 'business_country' : 'person_country';

      this.payerForm.patchValue({
        [countryCodeField]: selectedCountry,
        [countryField]: selectedCountry.name,
      });
    }
  }

  selectCountryCode(country: CountryCodeOption, type: 'business' | 'person'): void {
    const countryCodeField = type === 'business' ? 'business_countryCode' : 'person_countryCode';
    const countryField = type === 'business' ? 'business_country' : 'person_country';

    this.payerForm.patchValue({
      [countryCodeField]: `${country.code} ${country.name}`,
      [countryField]: country.name,
    });

    if (type === 'business') {
      this.showBusinessCountryDropdown = false;
    } else {
      this.showPersonCountryDropdown = false;
    }
    this._cdr.markForCheck();
  }

  onCountryBlur(type: 'business' | 'person'): void {
    // Delay to allow click on option
    setTimeout(() => {
      if (type === 'business') {
        this.showBusinessCountryDropdown = false;
      } else {
        this.showPersonCountryDropdown = false;
      }
      this._cdr.markForCheck();
    }, 200);
  }

  getFilteredBusinessCountryCodes(): CountryCodeOption[] {
    const value = this.payerForm.get('business_countryCode')?.value || '';
    return this._filterCountryCodesForAutocomplete(value);
  }

  getFilteredPersonCountryCodes(): CountryCodeOption[] {
    const value = this.payerForm.get('person_countryCode')?.value || '';
    return this._filterCountryCodesForAutocomplete(value);
  }

  private _filterCountryCodesForAutocomplete(value: string): CountryCodeOption[] {
    if (!value || value.trim().length === 0) {
      return this.billingCountryCodes;
    }

    const filterValue = value.toLowerCase().trim();

    return this.billingCountryCodes.filter(
      (country) =>
        country.name.toLowerCase().includes(filterValue) ||
        country.code.toLowerCase().includes(filterValue) ||
        country.code.replace('+', '').includes(filterValue) ||
        `${country.code} ${country.name}`.toLowerCase().includes(filterValue),
    );
  }

  isBillingFormValid(): boolean {
    const {
      business_name,
      business_countryCode,
      business_phone,
      business_documentType,
      business_documentNumber,
      business_legalRepresentative,
      business_email,
      person_name,
      person_countryCode,
      person_phone,
      person_email,
      person_documentType,
      person_documentNumber,
    } = this.payerForm.value;

    let payerFormValid = false;

    // Helper to check if country code is valid (either object or string with code)
    const isValidCountryCode = (value: any): boolean => {
      if (!value) return false;
      if (typeof value === 'object' && value.code) return true;
      if (typeof value === 'string' && value.trim().length > 0) {
        // Check if it starts with + (has a valid code format)
        return value.startsWith('+') || this.billingCountryCodes.some(
          (c) => value.toLowerCase().includes(c.name.toLowerCase()),
        );
      }
      return false;
    };

    if (this.isABusiness()) {
      if (
        business_name &&
        isValidCountryCode(business_countryCode) &&
        business_phone &&
        business_documentType &&
        business_legalRepresentative &&
        business_email
      ) {
        // NO_TAX doesn't require document number
        if (business_documentType === 'NO_TAX' || business_documentNumber) {
          payerFormValid = true;
        }
      }
    } else if (this.isAPerson()) {
      if (
        person_name &&
        isValidCountryCode(person_countryCode) &&
        person_phone &&
        person_email &&
        person_documentType &&
        person_documentNumber
      ) {
        payerFormValid = true;
      }
    }

    return this.addressForm.valid && payerFormValid;
  }

  checkIfDocumentNumberIsNeeded(): boolean {
    return this.payerForm.value.business_documentType !== 'NO_TAX';
  }

  saveBillingDetails(): void {
    if (this.isSavingBilling || !this.isBillingFormValid()) return;

    this.isSavingBilling = true;
    this._cdr.markForCheck();

    const payload = this._createBillingPayload();

    this._settingsService
      .saveBillingConfig(payload)
      .pipe(
        finalize(() => {
          // Always reset the saving state, regardless of success or error
          // This runs when the observable completes or errors
          this.isSavingBilling = false;
          this._cdr.markForCheck();
        }),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe({
        next: (response) => {
          if (response?.data) {
            this.billingData = response.data;
          }
          const message = this._translocoService.translate('settings.billing.save_success');
          this._snackBar.open(message, null, { duration: 3000 });
          // Explicitly reset flag in next handler as backup
          this.isSavingBilling = false;
          this._cdr.markForCheck();
        },
        error: (error) => {
          let message = this._translocoService.translate('settings.billing.save_error');
          if (error?.error?.message === 'active_subscription_cant_change_gateway') {
            message = this._translocoService.translate('settings.billing.error_active_subscription');
          }
          this._snackBar.open(message, null, { duration: 3000 });
          // Explicitly reset flag in error handler as backup
          this.isSavingBilling = false;
          this._cdr.markForCheck();
        },
      });
  }

  private _createBillingPayload(): Partial<ClientSettings> {
    const {
      business_name,
      business_countryCode,
      business_country,
      business_phone,
      business_documentType,
      business_documentNumber,
      business_legalRepresentative,
      business_email,
      person_name,
      person_countryCode,
      person_country,
      person_phone,
      person_email,
      person_documentType,
      person_documentNumber,
    } = this.payerForm.value;

    const extractCountryCode = (value: CountryCodeOption | string): string => {
      if (!value) return '';
      if (typeof value === 'object' && value.code) return value.code;
      if (typeof value === 'string') {
        // Extract the code from format like "+1 United States"
        const match = value.match(/^(\+\d+)/);
        return match ? match[1] : value;
      }
      return '';
    };

    const extractCountryName = (
      countryField: string,
      countryCodeValue: CountryCodeOption | string,
    ): string => {
      if (countryField) return countryField;
      if (typeof countryCodeValue === 'object' && countryCodeValue?.name) {
        return countryCodeValue.name;
      }
      if (typeof countryCodeValue === 'string') {
        // Extract the name from format like "+1 United States"
        const match = countryCodeValue.match(/^\+\d+\s+(.+)$/);
        return match ? match[1] : '';
      }
      return '';
    };

    return {
      invoiceSettings: {
        type: this.isABusiness() ? 'business' : 'person',
        invoiceType: 'stripe',
        business: this.isABusiness()
          ? {
              business_name,
              business_countryCode: extractCountryCode(business_countryCode),
              business_country: extractCountryName(business_country, business_countryCode),
              business_phone,
              business_documentType:
                typeof business_documentType === 'object'
                  ? business_documentType.value
                  : business_documentType,
              business_documentNumber,
              business_legalRepresentative,
              business_email,
            }
          : null,
        person: this.isAPerson()
          ? {
              person_name,
              person_countryCode: extractCountryCode(person_countryCode),
              person_country: extractCountryName(person_country, person_countryCode),
              person_phone,
              person_email,
              person_documentType:
                typeof person_documentType === 'object'
                  ? person_documentType.value
                  : person_documentType,
              person_documentNumber,
            }
          : null,
        address: this.addressForm.value,
      },
      client: this.user._id,
    };
  }

  // ============================================
  // General Settings (Workspace) Methods
  // ============================================

  loadWorkspaceData(): void {
    if (!this.user?._id || this.workspaceLoaded) return;

    this._settingsService
      .getWorkspace(this.user._id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response) => {
          if (response?.data) {
            this.workspace = response.data;
            this.workspaceName = response.data.name || '';
            this.workspaceLogo = response.data.avatar || null;
          }
          this.workspaceLoaded = true;
          this._cdr.markForCheck();
        },
        error: () => {
          this.workspace = null;
          this.workspaceLoaded = true;
          this._cdr.markForCheck();
        },
      });
  }

  onWorkspaceLogoDropped(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this._processWorkspaceLogo(files[0]);
    }
  }

  onWorkspaceLogoBrowse(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this._processWorkspaceLogo(input.files[0]);
    }
  }

  private _processWorkspaceLogo(file: File): void {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      const message = this._translocoService.translate('settings.profile.invalid_file_type');
      this._snackBar.open(message, null, { duration: 3000 });
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      const message = this._translocoService.translate('settings.profile.file_too_large');
      this._snackBar.open(message, null, { duration: 3000 });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.workspaceLogo = reader.result as string;
      this._cdr.markForCheck();
    };
  }

  removeWorkspaceLogo(): void {
    this.workspaceLogo = null;
    this._cdr.markForCheck();
  }

  saveWorkspace(): void {
    if (this.isSavingWorkspace || !this.workspaceName?.trim()) return;

    this.isSavingWorkspace = true;
    this._cdr.markForCheck();

    const payload = {
      name: this.workspaceName.trim(),
      avatar: this.workspaceLogo,
      client: this.user._id,
    };

    const saveOperation = this.workspace
      ? this._settingsService.updateWorkspace(this.workspace._id, payload)
      : this._settingsService.createWorkspace(payload);

    saveOperation
      .pipe(
        finalize(() => {
          this.isSavingWorkspace = false;
          this._cdr.markForCheck();
        }),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe({
        next: (response) => {
          if (response?.data) {
            this.workspace = response.data;
            this.user.workSpace = response.data;
            this._updateLocalStorage();
            const message = this._translocoService.translate('settings.general.save_success');
            this._snackBar.open(message, null, { duration: 3000 });
          }
        },
        error: () => {
          const message = this._translocoService.translate('settings.general.save_error');
          this._snackBar.open(message, null, { duration: 3000 });
        },
      });
  }

  openDeleteWorkspaceDialog(): void {
    if (!this.workspace) return;
    this._dialog.open(this.deleteWorkspaceDialog, {
      width: '500px',
      maxWidth: '90vw',
    });
  }

  confirmDeleteWorkspace(): void {
    if (this.isDeletingWorkspace || !this.workspace) return;

    this.isDeletingWorkspace = true;
    this._cdr.markForCheck();

    this._settingsService
      .deleteWorkspace(this.workspace._id)
      .pipe(
        finalize(() => {
          this.isDeletingWorkspace = false;
          this._cdr.markForCheck();
        }),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe({
        next: () => {
          this._dialog.closeAll();
          this.workspace = null;
          this.workspaceName = '';
          this.workspaceLogo = null;
          delete this.user.workSpace;
          this._updateLocalStorage();
          const message = this._translocoService.translate('settings.general.delete_success');
          this._snackBar.open(message, null, { duration: 3000 });
        },
        error: () => {
          const message = this._translocoService.translate('settings.general.delete_error');
          this._snackBar.open(message, null, { duration: 3000 });
        },
      });
  }

  private _updateLocalStorage(): void {
    const storageKey = localStorage.getItem('verifik_account') ? 'verifik_account' : 'user';
    localStorage.setItem(storageKey, JSON.stringify(this.user));
  }

  // ============================================
  // Team Management Methods
  // ============================================

  private _initStaffForm(): void {
    this.staffForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+1'],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
      role: ['empleado'],
    });
  }

  loadStaffData(): void {
    if (!this.user?._id) return;

    this.isLoadingStaff = true;
    this._cdr.markForCheck();

    // Load subscription first to get the staff limit
    this._loadSubscription();

    this._settingsService
      .getStaff()
      .pipe(
        finalize(() => {
          this.isLoadingStaff = false;
          this.staffLoaded = true;
          this._cdr.markForCheck();
        }),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe({
        next: (response) => {
          this.staffMembers = response?.data || [];
        },
        error: () => {
          this.staffMembers = [];
        },
      });
  }

  private _loadSubscription(): void {
    this._settingsService
      .getMySubscription(this.user._id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response) => {
          if (response?.data?.subscriptionPlan) {
            this.selectedSubscription = response.data.subscriptionPlan;
            this.hasSubscription = true;
            // Find the "chairs" addon to get the staff limit
            const chairsAddon = this.selectedSubscription.changesInPrices?.find(
              (addon: any) => addon?.addOn === 'chairs',
            );
            this.staffLimit = chairsAddon?.count || 0;
          } else {
            this.selectedSubscription = { name: 'PAYG' };
            this.hasSubscription = false;
            this.staffLimit = 0;
          }
          this._cdr.markForCheck();
        },
        error: () => {
          this.selectedSubscription = { name: 'PAYG' };
          this.hasSubscription = false;
          this.staffLimit = 0;
          this._cdr.markForCheck();
        },
      });
  }

  canAddMoreStaff(): boolean {
    // If no subscription or PAYG, check if limit is 0 (no staff allowed)
    if (!this.hasSubscription || this.staffLimit === 0) {
      return false;
    }
    // Check if current count is less than limit
    return this.staffMembers.length < this.staffLimit;
  }

  getStaffLimitMessage(): string {
    const planName = this.selectedSubscription?.name === 'PyG' ? 'PAYG' : (this.selectedSubscription?.name || 'PAYG');
    return this._translocoService.translate('settings.team.limit_info', {
      plan: planName,
      count: this.staffLimit,
    });
  }

  openStaffModal(staff?: StaffMember): void {
    this._resetStaffForm();
    if (staff) {
      this.editingStaff = staff;
      this.staffForm.patchValue({
        name: staff.name,
        email: staff.email,
        countryCode: staff.countryCode || '+1',
        phone: staff.phone,
        role: staff.role || 'empleado',
      });
    }

    this.staffDialogRef = this._dialog.open(this.staffFormDialog, {
      width: '500px',
      maxWidth: '90vw',
    });
  }

  closeStaffDialog(): void {
    if (this.staffDialogRef) {
      this.staffDialogRef.close();
    }
    this._resetStaffForm();
  }

  private _resetStaffForm(): void {
    this.editingStaff = null;
    this.staffForm.reset({
      name: '',
      email: '',
      countryCode: '+1',
      phone: '',
      role: 'empleado',
    });
  }

  saveStaff(): void {
    if (this.staffForm.invalid || this.isSavingStaff) return;

    // Check staff limit before creating (not when editing)
    if (!this.editingStaff && !this.canAddMoreStaff()) {
      const message = this._translocoService.translate('settings.team.limit_reached');
      this._snackBar.open(message, null, { duration: 4000 });
      return;
    }

    this.isSavingStaff = true;
    this._cdr.markForCheck();

    const formValue = this.staffForm.value;
    const payload: Partial<StaffMember> = {
      name: formValue.name,
      email: formValue.email,
      countryCode: formValue.countryCode,
      phone: String(formValue.phone),
      role: formValue.role,
      client: this.user._id,
    };

    const saveOperation = this.editingStaff
      ? this._settingsService.updateStaff(this.editingStaff._id, payload)
      : this._settingsService.createStaff(payload);

    saveOperation
      .pipe(
        finalize(() => {
          this.isSavingStaff = false;
          this._cdr.markForCheck();
        }),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe({
        next: () => {
          this.closeStaffDialog();
          this.loadStaffData();
          const message = this._translocoService.translate('settings.team.save_success');
          this._snackBar.open(message, null, { duration: 3000 });
        },
        error: (error) => {
          let message = this._translocoService.translate('settings.team.save_error');
          // Check for specific backend error about subscription
          if (error?.error?.message === 'cannot_create_staff' || error?.status === 412) {
            message = this._translocoService.translate('settings.team.no_plan_error');
          }
          this._snackBar.open(message, null, { duration: 4000 });
        },
      });
  }

  deleteStaff(staff: StaffMember): void {
    if (!staff?._id) return;

    this._settingsService
      .deleteStaff(staff._id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: () => {
          this.loadStaffData();
          const message = this._translocoService.translate('settings.team.delete_success');
          this._snackBar.open(message, null, { duration: 3000 });
        },
        error: () => {
          const message = this._translocoService.translate('settings.team.delete_error');
          this._snackBar.open(message, null, { duration: 3000 });
        },
      });
  }

  reinviteStaff(staff: StaffMember): void {
    if (!staff?._id) return;

    this._settingsService
      .reinviteStaff(staff)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: () => {
          const message = this._translocoService.translate('settings.team.reinvite_success');
          this._snackBar.open(message, null, { duration: 3000 });
        },
        error: () => {
          const message = this._translocoService.translate('settings.team.reinvite_error');
          this._snackBar.open(message, null, { duration: 3000 });
        },
      });
  }

  getStaffInitials(name: string): string {
    if (!name) return '';
    const words = name.trim().split(/\s+/);
    return words.slice(0, 2).map((w) => w[0]?.toUpperCase()).join('');
  }

  truncateEmail(email: string, maxLength = 25): string {
    if (!email || email.length <= maxLength) return email;
    return email.substring(0, maxLength) + '...';
  }

  getFilteredStaffCountryCodes(): CountryDialCode[] {
    const value = this.staffForm.get('countryCode')?.value || '';
    if (!value || value.trim().length === 0) {
      return this.countryCodes;
    }

    const filterValue = value.toLowerCase().trim();
    return this.countryCodes.filter(
      (country) =>
        country.name.toLowerCase().includes(filterValue) ||
        country.dialCode.toLowerCase().includes(filterValue),
    );
  }

  selectStaffCountryCode(country: CountryDialCode): void {
    this.staffForm.patchValue({ countryCode: country.dialCode });
    this.showStaffCountryDropdown = false;
    this._cdr.markForCheck();
  }

  onStaffCountryBlur(): void {
    setTimeout(() => {
      this.showStaffCountryDropdown = false;
      this._cdr.markForCheck();
    }, 200);
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

  private _observeRouteChanges(): void {
    // Get initial panel from route
    this._route.params.pipe(takeUntil(this._unsubscribeAll)).subscribe((params) => {
      const slug = params['panel'];
      if (slug) {
        const panelId = this._slugToPanel[slug] || slug;
        // Verify the panel exists and is not disabled
        const panel = this._findPanel(panelId);
        if (panel && !panel.disabled) {
          this._onPanelChanged(panelId);
        } else {
          // If panel doesn't exist or is disabled, redirect to profile
          this._router.navigate(['/settings', 'profile'], { replaceUrl: true });
        }
      }
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
