import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import type { VerifyStyleId } from '../../../../smart-business.types';
import { BusinessSetupService } from '../../business-setup.service';
import { StyleOption } from '../../business-setup.types';

@Component({
    selector: 'business-user-interface',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './business-user-interface.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessUserInterfaceComponent implements OnInit, OnChanges, OnDestroy {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _setup: BusinessSetupService;
    private _transloco: TranslocoService;
    private _cdr: ChangeDetectorRef;
    private _destroy$ = new Subject<void>();

    readonly styles: StyleOption[];

    constructor(
        setup?: BusinessSetupService,
        transloco?: TranslocoService,
        cdr?: ChangeDetectorRef
    ) {
        if (setup) {
            this._setup = setup;
        } else {
            try {
                this._setup = inject(BusinessSetupService, { optional: true }) || new BusinessSetupService();
            } catch {
                this._setup = new BusinessSetupService();
            }
        }
        if (transloco) {
            this._transloco = transloco;
        } else {
            try {
                this._transloco = inject(TranslocoService, { optional: true }) || ({ getActiveLang: () => 'es' } as any);
            } catch {
                this._transloco = { getActiveLang: () => 'es' } as any;
            }
        }
        if (cdr) {
            this._cdr = cdr;
        } else {
            try {
                this._cdr = inject(ChangeDetectorRef, { optional: true }) || ({ markForCheck: () => {} } as any);
            } catch {
                this._cdr = { markForCheck: () => {} } as any;
            }
        }
        this.styles = this._setup.styles;
    }

    ngOnInit(): void {
        this._loadFonts();
        if (this.selectedStyleId && this.selectedStyleId !== 'a') {
            const currentBtn = this.brandingGroup?.get('buttonColor')?.value;
            if (!currentBtn || currentBtn === '#9fe870' || currentBtn === '#059669') {
                this._setup.applyStylePreset(this.selectedStyleId, this.brandingGroup);
            }
        }
        this._bindFormChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['form']) {
            this._bindFormChanges();
        }
        this._cdr.markForCheck();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    private _bindFormChanges(): void {
        this._destroy$.next();
        if (!this.form) return;
        this.form.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(() => {
            this._cdr.markForCheck();
        });
    }

    get brandingGroup(): FormGroup {
        return this.form.get('branding') as FormGroup;
    }

    get onboardingSettingsGroup(): FormGroup {
        return this.form.get('projectFlow.onboardingSettings') as FormGroup;
    }

    get selectedStyleId(): VerifyStyleId {
        return (this.onboardingSettingsGroup?.get('verifyStyle')?.value as VerifyStyleId) || 'a';
    }

    selectStyle(styleId: VerifyStyleId): void {
        this.onboardingSettingsGroup?.get('verifyStyle')?.setValue(styleId);
        this.onboardingSettingsGroup?.get('enrollmentClient')?.setValue('v2');
        this.onboardingSettingsGroup?.markAsDirty();

        this._setup.applyStylePreset(styleId, this.brandingGroup);
        this._cdr.markForCheck();
    }

    styleName(style: StyleOption): string {
        const lang = (this._transloco.getActiveLang() || 'es').toLowerCase();
        return lang.startsWith('en') ? style.nameEn : style.nameEs;
    }

    styleDesc(style: StyleOption): string {
        const lang = (this._transloco.getActiveLang() || 'es').toLowerCase();
        return lang.startsWith('en') ? style.descriptionEn : style.descriptionEs;
    }

    private _loadFonts(): void {
        if (typeof document === 'undefined') return;
        if (document.getElementById('business-verify-fonts')) return;

        const link = document.createElement('link');
        link.id = 'business-verify-fonts';
        link.rel = 'stylesheet';
        link.href =
            'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Inter+Tight:wght@400&family=Inter:wght@400;900&family=Outfit:wght@600&family=Roboto+Condensed:wght@900&family=Space+Grotesk:wght@600&display=swap';
        document.head.appendChild(link);
    }
}
