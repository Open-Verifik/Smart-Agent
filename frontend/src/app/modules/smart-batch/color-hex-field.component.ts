import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { normalizeHexColor } from './color-hex.util';

export { normalizeHexColor } from './color-hex.util';

const alphaByte = (hex: string): number => (hex.length === 9 ? parseInt(hex.slice(7, 9), 16) : 255);

const withAlpha = (rgb: string, alpha: number): string => {
    const byte = Math.max(0, Math.min(255, Math.round(alpha)));
    if (byte >= 255) return rgb.slice(0, 7).toLowerCase();
    return `${rgb.slice(0, 7).toLowerCase()}${byte.toString(16).padStart(2, '0')}`;
};

@Component({
    selector: 'color-hex-field',
    standalone: true,
    imports: [TranslocoModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorHexFieldComponent),
            multi: true,
        },
    ],
    template: `
        <div class="flex min-w-0 flex-col gap-1.5">
            <div class="flex min-w-0 items-center gap-2">
                <span
                    class="relative h-8 w-10 shrink-0 overflow-hidden rounded-md border border-stone-200 dark:border-gray-700"
                    style="background-image: linear-gradient(45deg, #d6d3d1 25%, transparent 25%), linear-gradient(-45deg, #d6d3d1 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d6d3d1 75%), linear-gradient(-45deg, transparent 75%, #d6d3d1 75%); background-size: 8px 8px; background-position: 0 0, 0 4px, 4px -4px, -4px 0; background-color: #fff"
                >
                    <span class="absolute inset-0" [style.background-color]="value"></span>
                    <input
                        type="color"
                        class="absolute inset-0 cursor-pointer opacity-0"
                        [disabled]="disabled"
                        [value]="pickerValue"
                        (input)="commitFromPicker($event)"
                    />
                </span>
                <input
                    type="text"
                    class="min-w-0 flex-1 rounded-lg border border-stone-200 bg-white px-2 py-1.5 font-mono text-xs uppercase tracking-wide dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    maxlength="9"
                    spellcheck="false"
                    autocomplete="off"
                    [disabled]="disabled"
                    [value]="hexDraft"
                    [placeholder]="placeholder()"
                    [attr.aria-label]="ariaLabel()"
                    (focus)="onFocus()"
                    (input)="onDraft($event)"
                    (blur)="onBlur()"
                />
            </div>
            @if (showTransparency()) {
                <label class="flex items-center gap-2 text-[10px] text-stone-500 dark:text-stone-400">
                    <span class="w-[4.5rem] shrink-0">{{ 'visitaGuide.layoutColorTransparency' | transloco }}</span>
                    <input
                        type="range"
                        class="min-w-0 flex-1"
                        min="0"
                        max="100"
                        step="1"
                        [disabled]="disabled"
                        [value]="transparencyPercent"
                        [attr.aria-label]="'visitaGuide.layoutColorTransparency' | transloco"
                        (input)="commitTransparency($event)"
                    />
                    <span class="w-8 shrink-0 text-right tabular-nums">{{ transparencyPercent }}%</span>
                </label>
            }
        </div>
    `,
})
export class ColorHexFieldComponent implements ControlValueAccessor {
    placeholder = input('#RRGGBB');
    ariaLabel = input('Hex');
    /** When false, only the swatch and hex text field are shown (e.g. conditional rule colors). */
    showTransparency = input(true);

    /** Full color, including alpha when it is not opaque. */
    value = '#000000';
    /** Six-digit color for the native picker, which cannot edit alpha. */
    pickerValue = '#000000';
    hexDraft = '#000000';
    /** 100 = solid. The slider shows the inverse as transparency. */
    opacityPercent = 100;
    disabled = false;

    private editing = false;
    private onChange: (value: string) => void = () => undefined;
    private onTouched: () => void = () => undefined;

    get transparencyPercent(): number {
        return 100 - this.opacityPercent;
    }

    writeValue(value: string | null): void {
        const next = normalizeHexColor(value) ?? '#000000';
        if (next === this.value && this.editing) return;
        if (next === this.value && this.hexDraft.toLowerCase() === next) return;
        this.apply(next, false);
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    commitFromPicker(event: Event): void {
        const rgb = normalizeHexColor((event.target as HTMLInputElement).value);
        if (!rgb) return;
        this.apply(withAlpha(rgb, (this.opacityPercent / 100) * 255), true);
    }

    commitTransparency(event: Event): void {
        const transparency = Number((event.target as HTMLInputElement).value);
        if (!Number.isFinite(transparency)) return;
        const opacity = 100 - Math.max(0, Math.min(100, Math.round(transparency)));
        this.apply(withAlpha(this.pickerValue, (opacity / 100) * 255), true);
    }

    onFocus(): void {
        this.editing = true;
    }

    onDraft(event: Event): void {
        const raw = (event.target as HTMLInputElement).value;
        this.hexDraft = raw;
        const next = normalizeHexColor(raw, { allowShort: false });
        if (!next) return;
        this.commitNormalized(next);
    }

    onBlur(): void {
        this.editing = false;
        this.onTouched();
        const next = normalizeHexColor(this.hexDraft);
        if (next) {
            this.commitNormalized(next);
            return;
        }
        this.hexDraft = this.value.toUpperCase();
    }

    private commitNormalized(next: string): void {
        if (next.length === 7) {
            this.apply(withAlpha(next, (this.opacityPercent / 100) * 255), true);
            return;
        }
        this.apply(next, true);
    }

    private apply(normalized: string, emit: boolean): void {
        this.value = normalized;
        this.pickerValue = normalized.slice(0, 7);
        this.hexDraft = normalized.toUpperCase();
        this.opacityPercent = Math.round((alphaByte(normalized) / 255) * 100);
        if (emit) this.onChange(normalized);
    }
}
