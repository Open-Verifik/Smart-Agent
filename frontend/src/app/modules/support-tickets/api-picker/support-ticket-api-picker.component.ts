import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    inject,
    OnDestroy,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { SupportTicketSmartCheckApi } from '../support-ticket-smartcheck-apis.constants';
import {
    SUPPORT_TICKET_API_TYPE_OPTIONS,
    SUPPORT_TICKET_SMARTCHECK_APIS,
} from '../support-ticket-smartcheck-apis.constants';
import {
    fallbackSmartCheckApiLabel,
    readAppFeatureTitleFromTranslations,
} from '../support-ticket-smartcheck-api-display';

@Component({
    selector: 'app-support-ticket-api-picker',
    standalone: true,
    imports: [CommonModule, FormsModule, MatIconModule, TranslocoModule],
    templateUrl: './support-ticket-api-picker.component.html',
    styleUrl: './support-ticket-api-picker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SupportTicketApiPickerComponent),
            multi: true,
        },
    ],
})
export class SupportTicketApiPickerComponent implements ControlValueAccessor, OnDestroy {
    private readonly _transloco = inject(TranslocoService);
    private readonly _cdr = inject(ChangeDetectorRef);
    private readonly _host = inject<ElementRef<HTMLElement>>(ElementRef);

    private _value: string | null = '';
    /** Bound for NgModel standalone search box */
    searchTerm = '';
    selectedTypes: string[] = [];
    menuOpen = false;
    filteredApis = [...SUPPORT_TICKET_SMARTCHECK_APIS];
    disabled = false;

    readonly apiTypes = SUPPORT_TICKET_API_TYPE_OPTIONS;
    readonly allApis = SUPPORT_TICKET_SMARTCHECK_APIS;

    private _onChange: (v: string | null) => void = () => {};
    private _onTouched: () => void = () => {};
    private _outsideClickCleanup: (() => void) | null = null;

    get selected(): SupportTicketSmartCheckApi | null {
        const v = this._value?.trim();
        if (!v) return null;
        return this.allApis.find((a) => a.value === v) ?? null;
    }

    ngOnDestroy(): void {
        this._clearOutsideClick();
    }

    writeValue(value: string | null): void {
        this._value = value ?? '';
        this.filteredApis = this._computeFiltered();
        this._cdr.markForCheck();
    }

    registerOnChange(fn: (value: string | null) => void): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        if (isDisabled) {
            this.menuOpen = false;
            this._clearOutsideClick();
        }
        this._cdr.markForCheck();
    }

    displayTitle(api: SupportTicketSmartCheckApi): string {
        const lang = this._transloco.getActiveLang();
        const tr = this._transloco.getTranslation(lang) as unknown as Record<string, unknown>;
        const fromBundle = readAppFeatureTitleFromTranslations(tr, api.value);
        if (fromBundle) return fromBundle;
        return fallbackSmartCheckApiLabel(api);
    }

    trackByApiValue(_index: number, api: SupportTicketSmartCheckApi): string {
        return api.value;
    }

    toggleMenu(): void {
        if (this.disabled) return;

        if (this.menuOpen) {
            this.closeMenu();
            return;
        }

        this.menuOpen = true;
        this.filteredApis = this._computeFiltered();
        this.searchTerm = '';
        this.selectedTypes = [];
        setTimeout(() => {
            this._clearOutsideClick();
            const handler = (ev: MouseEvent): void => {
                if (this._host.nativeElement.contains(ev.target as Node)) return;
                this.closeMenu();
                this._cdr.markForCheck();
            };
            document.addEventListener('click', handler, true);
            this._outsideClickCleanup = (): void => document.removeEventListener('click', handler, true);
        }, 0);
        this._cdr.markForCheck();
    }

    closeMenu(): void {
        this.menuOpen = false;
        this._clearOutsideClick();
        this._onTouched();
        this._cdr.markForCheck();
    }

    onSearchInput(term: string): void {
        this.searchTerm = term;
        this.filterApis();
    }

    filterApis(): void {
        this.filteredApis = this._computeFiltered();
        this._cdr.markForCheck();
    }

    toggleTypeFilter(typeValue: string): void {
        const ix = this.selectedTypes.indexOf(typeValue);
        if (ix === -1) {
            this.selectedTypes = [...this.selectedTypes, typeValue];
        } else {
            this.selectedTypes = this.selectedTypes.filter((t) => t !== typeValue);
        }
        this.filterApis();
    }

    selectApi(api: SupportTicketSmartCheckApi): void {
        this._value = api.value;
        this._onChange(this._value);
        this.closeMenu();
    }

    clearSearch(): void {
        this.searchTerm = '';
        this.filterApis();
    }

    badgeClass(type: string): string {
        return `badge-type-${type}`;
    }

    chipActive(typeValue: string): boolean {
        return this.selectedTypes.includes(typeValue);
    }

    endpointLine(api: SupportTicketSmartCheckApi): string | null {
        const e = api.endpoint?.trim();
        return e ?? null;
    }

    chipIconSvg(type: string): string {
        switch (type) {
            case 'identity':
                return 'heroicons_outline:user';
            case 'vehicle':
                return 'heroicons_outline:truck';
            case 'business':
                return 'heroicons_outline:building-office-2';
            default:
                return 'heroicons_outline:shield-check';
        }
    }

    private _computeFiltered(): SupportTicketSmartCheckApi[] {
        let list = this.allApis;
        const q = this.searchTerm.trim().toLowerCase();
        if (q) {
            list = list.filter(
                (a) =>
                    a.value.toLowerCase().includes(q) ||
                    String(a.label).toLowerCase().includes(q) ||
                    (a.country && a.country.toLowerCase().includes(q)) ||
                    (a.endpoint && a.endpoint.toLowerCase().includes(q)),
            );
        }

        if (this.selectedTypes.length > 0) {
            list = list.filter((a) => this.selectedTypes.includes(String(a.type)));
        }
        return list;
    }

    private _clearOutsideClick(): void {
        this._outsideClickCleanup?.();
        this._outsideClickCleanup = null;
    }
}
