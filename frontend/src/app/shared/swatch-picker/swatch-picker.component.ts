import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    Optional,
    Self,
    forwardRef,
    inject,
} from '@angular/core';
import { ControlValueAccessor, NgControl, AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

/**
 * Color swatch picker that implements `ControlValueAccessor` so it plugs into
 * Angular reactive forms via `formControlName` (mirrors the verifik-client-panel
 * `verifik-swatch-picker`).
 *
 * Renders a row of preset color chips plus an optional "custom" chip that opens
 * the native color picker for free choice. Selected state is reflected with a
 * dark ring; the custom chip carries an `edit` icon whose color contrasts with
 * the chosen background for legibility.
 */
@Component({
    selector: 'swatch-picker',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './swatch-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwatchPickerComponent implements OnInit, ControlValueAccessor {
    @Input() label = '';
    @Input() colors: string[] = ['#2563eb'];
    @Input() custom = true;
    @Input() required = false;
    @Input() disabled = false;

    private _cdr = inject(ChangeDetectorRef);

    selectedColor = '';
    customColor = '#ffffff';
    isCustomSelected = false;
    control?: AbstractControl;

    private _onChange: (value: string) => void = () => {};
    private _onTouched: () => void = () => {};

    constructor(@Optional() @Self() public ngControl: NgControl) {
        if (this.ngControl) this.ngControl.valueAccessor = this;
    }

    ngOnInit(): void {
        if (this.ngControl) this.control = this.ngControl.control || undefined;
    }

    onSwatchSelect(color: string): void {
        if (this.disabled) return;
        this.selectedColor = color;
        this.isCustomSelected = false;
        this._onChange(color);
        this._onTouched();
        this._cdr.markForCheck();
    }

    onCustomColorChange(value: string): void {
        if (this.disabled) return;
        const color = value || this.customColor;
        this.customColor = color;
        this.selectedColor = color;
        this.isCustomSelected = true;
        this._onChange(color);
        this._onTouched();
        this._cdr.markForCheck();
    }

    isSwatchSelected(color: string): boolean {
        return this.selectedColor === color && !this.isCustomSelected;
    }

    get hasError(): boolean {
        return !!(this.control && this.control.invalid && this.control.touched);
    }

    /** Compute icon color (white on dark backgrounds, dark on light). */
    iconContrastColor(hex: string): string {
        const value = (hex || '').replace('#', '');
        if (value.length !== 6) return '#1F2937';
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance < 0.5 ? '#FFFFFF' : '#1F2937';
    }

    writeValue(value: string): void {
        if (!value) {
            this.selectedColor = '';
            this.isCustomSelected = false;
        } else {
            this.selectedColor = value;
            if (this.colors.includes(value)) {
                this.isCustomSelected = false;
            } else {
                this.customColor = value;
                this.isCustomSelected = true;
            }
        }
        this._cdr.markForCheck();
    }

    registerOnChange(fn: (value: string) => void): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this._cdr.markForCheck();
    }
}
