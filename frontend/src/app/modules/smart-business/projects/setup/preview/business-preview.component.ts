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
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import type { BusinessBranding, VerifyStyleId } from '../../../smart-business.types';
import { BUSINESS_VERIFY_STYLES, StyleOption } from '../business-setup.types';

export const VERIFY_FONT_HREF =
    'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:wght@400&family=Inter:wght@100;400;500;700;900&family=Outfit:wght@500;600&family=Roboto+Condensed:wght@900&family=Space+Grotesk:wght@500;600&display=swap';

@Component({
    selector: 'business-preview',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './business-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessPreviewComponent implements OnInit, OnChanges, OnDestroy {
    @Input() form!: FormGroup;
    @Input() activeStepIndex = 0;

    private _explicitStyleId: VerifyStyleId | null = null;
    @Input()
    set styleId(id: VerifyStyleId | null | undefined) {
        this._explicitStyleId = id || null;
        if (id) {
            this._syncPresetIfDefault(id);
        }
        this._cdr.markForCheck();
    }
    get styleId(): VerifyStyleId {
        if (this._explicitStyleId) return this._explicitStyleId;
        const formStyle = this.form?.get('projectFlow.onboardingSettings.verifyStyle')?.value;
        return (formStyle as VerifyStyleId) || 'a';
    }

    private _cdr: ChangeDetectorRef;
    private _destroy$ = new Subject<void>();

    activeScreen: 'company' | 'documents' | 'reps' | 'review' = 'company';

    constructor(cdr?: ChangeDetectorRef) {
        if (cdr) {
            this._cdr = cdr;
        } else {
            try {
                this._cdr = inject(ChangeDetectorRef, { optional: true }) || ({ markForCheck: () => {} } as any);
            } catch {
                this._cdr = { markForCheck: () => {} } as any;
            }
        }
    }

    ngOnInit(): void {
        this._loadFonts();
        this._syncPresetIfDefault();
        this._syncStepScreen(this.activeStepIndex);
        this._bindFormChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['form']) {
            this._syncPresetIfDefault();
            this._bindFormChanges();
        }
        if (changes['activeStepIndex']) {
            this._syncStepScreen(changes['activeStepIndex'].currentValue);
        }
        this._cdr.markForCheck();
    }

    private _syncStepScreen(step: number): void {
        if (step === 1) this.activeScreen = 'company';
        else if (step === 2) this.activeScreen = 'documents';
        else if (step === 3) this.activeScreen = 'reps';
        else if (step === 4) this.activeScreen = 'review';
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    private _syncPresetIfDefault(styleIdOverride?: VerifyStyleId): void {
        if (!this.form) return;
        const brandingGroup = this.form.get('branding') as FormGroup | null;
        if (!brandingGroup) return;

        const currentStyle = styleIdOverride || this.styleId;
        const style = BUSINESS_VERIFY_STYLES.find((s) => s.id === currentStyle) || this.activeStyle;
        const currentBtn = brandingGroup.get('buttonColor')?.value;

        const isDefaultA = !currentBtn || currentBtn === '#9fe870' || currentBtn === '#059669';
        const isPresetBtn = BUSINESS_VERIFY_STYLES.some((s) => s.buttonBg === currentBtn);
        if (currentStyle && (isDefaultA || isPresetBtn)) {
            brandingGroup.patchValue(
                {
                    backgroundColor: style.pageBg,
                    buttonColor: style.buttonBg,
                    buttonTextColor: style.buttonText,
                    textColor: style.ink,
                    titleColor: style.ink,
                },
                { emitEvent: false }
            );
        }
    }

    private _bindFormChanges(): void {
        this._destroy$.next();
        if (!this.form) return;

        this.form.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(() => {
            this._cdr.markForCheck();
        });

        this.form
            .get('projectFlow.onboardingSettings.verifyStyle')
            ?.valueChanges.pipe(takeUntil(this._destroy$))
            .subscribe((newStyleId) => {
                if (newStyleId) {
                    this._syncPresetIfDefault(newStyleId as VerifyStyleId);
                }
                this._cdr.markForCheck();
            });

        this.form
            .get('branding')
            ?.valueChanges.pipe(takeUntil(this._destroy$))
            .subscribe(() => {
                this._cdr.markForCheck();
            });
    }

    get branding(): BusinessBranding | null {
        return this.form?.get('branding')?.value || null;
    }

    get activeStyle(): StyleOption {
        return BUSINESS_VERIFY_STYLES.find((s) => s.id === this.styleId) || BUSINESS_VERIFY_STYLES[0];
    }

    get companyName(): string {
        return this.form?.get('name')?.value || 'Acme Logistics SAS';
    }

    get effectivePageBg(): string {
        return this.branding?.backgroundColor || this.activeStyle.pageBg;
    }

    get effectiveCardBg(): string {
        return this.activeStyle.cardBg;
    }

    get effectiveTitleColor(): string {
        return this.branding?.titleColor || this.activeStyle.ink;
    }

    get effectiveTextColor(): string {
        return this.branding?.textColor || this.activeStyle.subtleText || this.activeStyle.ink;
    }

    get effectiveButtonBg(): string {
        return this.branding?.buttonColor || this.activeStyle.buttonBg;
    }

    get effectiveButtonText(): string {
        return this.branding?.buttonTextColor || this.activeStyle.buttonText;
    }

    get configuredCountries(): string[] {
        const raw = this.form?.get('projectFlow.business.documentTypes')?.value;
        if (!Array.isArray(raw)) return [];
        return raw
            .map((dt: any) => (dt?.country || '').trim())
            .filter((c: string) => Boolean(c));
    }

    get previewDocumentSlots(): Array<{
        category: string;
        labelKey: string;
        templateCount: number;
        required: boolean;
    }> {
        const raw = this.form?.get('projectFlow.business.documentTypes')?.value;
        const labelMap: Record<string, string> = {
            business_document: 'smartEnrollProjects.setup.documents.category.business_document',
            tax_document: 'smartEnrollProjects.setup.documents.category.tax_document',
            bank_document: 'smartEnrollProjects.setup.documents.category.bank_document',
            proof_of_address: 'smartEnrollProjects.setup.documents.category.proof_of_address',
        };
        if (Array.isArray(raw) && raw.length > 0) {
            const firstCountry = raw.find((dt: any) => Array.isArray(dt?.configurations)) || raw[0];
            const activeConfigs = (firstCountry?.configurations || []).filter((c: any) => c?.active);
            if (activeConfigs.length > 0) {
                return activeConfigs.map((cfg: any) => {
                    const templates = Array.isArray(cfg.documentTemplates) ? cfg.documentTemplates : [];
                    const hasMandatory = templates.some((t: any) => t?.required === 'mandatory');
                    return {
                        category: cfg.documentCategory,
                        labelKey: labelMap[cfg.documentCategory] || cfg.documentCategory,
                        templateCount: templates.length,
                        required: hasMandatory || templates.length > 0,
                    };
                });
            }
        }
        return [
            {
                category: 'business_document',
                labelKey: 'smartEnrollProjects.setup.documents.category.business_document',
                templateCount: 1,
                required: true,
            },
            {
                category: 'tax_document',
                labelKey: 'smartEnrollProjects.setup.documents.category.tax_document',
                templateCount: 1,
                required: true,
            },
        ];
    }

    setScreen(screen: 'company' | 'documents' | 'reps' | 'review'): void {
        this.activeScreen = screen;
        this._cdr.markForCheck();
    }

    private _loadFonts(): void {
        if (typeof document === 'undefined') return;
        if (document.getElementById('business-verify-fonts-link')) return;

        const link = document.createElement('link');
        link.id = 'business-verify-fonts-link';
        link.rel = 'stylesheet';
        link.href = VERIFY_FONT_HREF;
        document.head.appendChild(link);
    }
}
