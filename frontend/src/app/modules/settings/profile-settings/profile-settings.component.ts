import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { Subject, takeUntil } from 'rxjs';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';
import { ProfileData, SettingsService } from '../settings.service';

@Component({
    selector: 'app-profile-settings',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
    ],
    templateUrl: './profile-settings.component.html',
    styleUrl: './profile-settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSettingsComponent implements OnChanges, OnDestroy {
    private _destroy$ = new Subject<void>();

    @Input() user: unknown;
    @Output() readonly userChange = new EventEmitter<unknown>();

    profileForm: FormGroup;
    profileLoaded = false;
    isSavingProfile = false;
    avatar: string = null;
    countryCodes: CountryDialCode[] = [];

    constructor(
        private _cdr: ChangeDetectorRef,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService,
        private _settingsService: SettingsService,
        private _formBuilder: FormBuilder,
        private _countryService: CountryService
    ) {
        this.countryCodes = this._countryService.countryDialCodes;
        this._initProfileForm();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user']) {
            if (this.userClientId) {
                this._loadProfileData();
            } else {
                this.profileLoaded = false;
                this._cdr.markForCheck();
            }
        }
    }

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    onBusinessAccountLinked(account: unknown): void {
        this.user = account;
        this.userChange.emit(account);
        this._loadProfileData();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    saveProfile(): void {
        if (this.profileForm.invalid || !this.user) {
            return;
        }

        this.isSavingProfile = true;
        this._cdr.markForCheck();

        const userRecord = this.user as Record<string, unknown>;
        const formValue = this.profileForm.value;
        const profileData: Partial<ProfileData> = {
            name: formValue.name,
            email: formValue.email,
            countryCode: formValue.countryCode,
            company: formValue.company,
            address: formValue.address,
            avatar: this.avatar,
        };

        const userId = userRecord['_id'] as string;

        this._settingsService
            .updateProfile(userId, profileData)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (response) => {
                    if (response?.data) {
                        const merged = { ...(this.user as object), ...(response.data as object) };
                        this.user = merged as typeof this.user;
                        this.userChange.emit(merged);

                        const message = this._translocoService.translate(
                            'settings.profile.save_success'
                        );
                        this._snackBar.open(message, null, { duration: 3000 });
                    }
                    this.isSavingProfile = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    const message = this._translocoService.translate(
                        'settings.profile.save_error'
                    );
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
        const u = this.user as { name?: string } | undefined;
        return u?.name?.charAt(0)?.toUpperCase() || 'U';
    }

    private _processFile(file: File): void {
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
        if (!this.user || !this.userClientId) return;

        const u = this.user as {
            name?: string;
            email?: string;
            countryCode?: string;
            phone?: string;
            company?: string;
            address?: string;
            avatar?: string;
        };

        this.profileForm.patchValue({
            name: u.name || '',
            email: u.email || '',
            countryCode: u.countryCode || '+1',
            phone: u.phone || '',
            company: u.company || '',
            address: u.address || '',
        });

        this.avatar = u.avatar || null;
        this.profileLoaded = true;
        this._cdr.markForCheck();
    }
}
