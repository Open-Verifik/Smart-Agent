import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export interface UsageProductOption {
    code: string;
    label: string;
    endpoint: string | null;
}

@Component({
    selector: 'app-usage-product-filter',
    standalone: true,
    imports: [CommonModule, FormsModule, MatCheckboxModule, MatIconModule, TranslocoModule],
    templateUrl: './usage-product-filter.component.html',
    styleUrl: './usage-product-filter.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageProductFilterComponent implements OnDestroy {
    private readonly _cdr = inject(ChangeDetectorRef);
    private readonly _host = inject<ElementRef<HTMLElement>>(ElementRef);

    @Input() options: UsageProductOption[] = [];
    @Input() selectedCodes: string[] = [];
    @Input() disabled = false;

    @Output() selectedCodesChange = new EventEmitter<string[]>();

    searchTerm = '';
    menuOpen = false;
    filteredOptions: UsageProductOption[] = [];

    private _outsideClickCleanup: (() => void) | null = null;

    ngOnDestroy(): void {
        this._clearOutsideClick();
    }

    get selectedCount(): number {
        return this.selectedCodes.length;
    }

    isSelected(code: string): boolean {
        return this.selectedCodes.includes(code);
    }

    toggleMenu(): void {
        if (this.disabled) return;

        if (this.menuOpen) {
            this.closeMenu();
            return;
        }

        this.menuOpen = true;
        this.searchTerm = '';
        this.filteredOptions = this._computeFiltered();
        setTimeout(() => {
            this._clearOutsideClick();
            const handler = (ev: MouseEvent): void => {
                if (this._host.nativeElement.contains(ev.target as Node)) return;
                this.closeMenu();
                this._cdr.markForCheck();
            };
            document.addEventListener('click', handler, true);
            this._outsideClickCleanup = (): void =>
                document.removeEventListener('click', handler, true);
        }, 0);
        this._cdr.markForCheck();
    }

    closeMenu(): void {
        this.menuOpen = false;
        this._clearOutsideClick();
        this._cdr.markForCheck();
    }

    onSearchInput(term: string): void {
        this.searchTerm = term;
        this.filteredOptions = this._computeFiltered();
        this._cdr.markForCheck();
    }

    clearSearch(): void {
        this.searchTerm = '';
        this.filteredOptions = this._computeFiltered();
        this._cdr.markForCheck();
    }

    toggleOption(code: string): void {
        const next = this.isSelected(code)
            ? this.selectedCodes.filter((c) => c !== code)
            : [...this.selectedCodes, code];
        this.selectedCodesChange.emit(next);
    }

    removeChip(code: string, event: MouseEvent): void {
        event.stopPropagation();
        if (this.disabled) return;
        this.selectedCodesChange.emit(this.selectedCodes.filter((c) => c !== code));
    }

    clearSelection(event?: MouseEvent): void {
        event?.stopPropagation();
        if (this.disabled) return;
        this.selectedCodesChange.emit([]);
    }

    labelForCode(code: string): string {
        return this.options.find((o) => o.code === code)?.label ?? code;
    }

    trackByCode(_index: number, option: UsageProductOption): string {
        return option.code;
    }

    private _computeFiltered(): UsageProductOption[] {
        const q = this.searchTerm.trim().toLowerCase();
        if (!q) return [...this.options];

        return this.options.filter((o) => {
            const label = o.label.toLowerCase();
            const code = o.code.toLowerCase();
            const endpoint = (o.endpoint || '').toLowerCase();
            return label.includes(q) || code.includes(q) || endpoint.includes(q);
        });
    }

    private _clearOutsideClick(): void {
        this._outsideClickCleanup?.();
        this._outsideClickCleanup = null;
    }
}
