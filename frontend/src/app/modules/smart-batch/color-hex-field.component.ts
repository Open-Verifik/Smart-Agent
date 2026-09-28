import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

/** `#rrggbb`, or `#rrggbbaa` when the color is not fully opaque. */
export const normalizeHexColor = (raw: string | null | undefined): string | null => {
    if (raw == null) return null;
    let value = raw.trim();
    if (!value) return null;
    if (value.startsWith('0x') || value.startsWith('0X')) value = value.slice(2);
    if (value[0] !== '#') value = `#${value}`;
    if (/^#([0-9a-f]{3})$/i.test(value)) {
        const short = value.slice(1);
        value = `#${short[0]}${short[0]}${short[1]}${short[1]}${short[2]}${short[2]}`;
    }
    if (/^#([0-9a-f]{4})$/i.test(value)) {
        const short = value.slice(1);
        value = `#${short[0]}${short[0]}${short[1]}${short[1]}${short[2]}${short[2]}${short[3]}${short[3]}`;
    }
    if (!/^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(value)) return null;
    value = value.toLowerCase();
    if (value.length === 9 && value.slice(7) === 'ff') return value.slice(0, 7);
    return value;
};

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
                    (input)="onDraft($event)"
                    (blur)="onBlur()"
                />
            </div>
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
        </div>
    `,
})
export class ColorHexFieldComponent implements ControlValueAccessor {
    placeholder = input('#RRGGBB');
    ariaLabel = input('Hex');

    /** Full color, including alpha when it is not opaque. */
    value = '#000000';
    /** Six-digit color for the native picker, which cannot edit alpha. */
    pickerValue = '#000000';
    hexDraft = '#000000';
    /** 100 = solid. The slider shows the inverse as transparency. */
    opacityPercent = 100;
    disabled = false;

    private onChange: (value: string) => void = () => undefined;
    private onTouched: () => void = () => undefined;

    get transparencyPercent(): number {
        return 100 - this.opacityPercent;
    }

    writeValue(value: string | null): void {
        const next = normalizeHexColor(value) ?? '#000000';
        if (next === this.value) return;
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

    onDraft(event: Event): void {
        const raw = (event.target as HTMLInputElement).value;
        this.hexDraft = raw;
        const next = normalizeHexColor(raw);
        if (!next) return;
        if (next.length === 7) {
            this.apply(withAlpha(next, (this.opacityPercent / 100) * 255), true);
            return;
        }
        this.apply(next, true);
    }

    onBlur(): void {
        this.onTouched();
        const next = normalizeHexColor(this.hexDraft);
        if (next) {
            if (next.length === 7) {
                this.apply(withAlpha(next, (this.opacityPercent / 100) * 255), true);
                return;
            }
            this.apply(next, true);
            return;
        }
        this.hexDraft = this.value.toUpperCase();
    }

    private apply(normalized: string, emit: boolean): void {
        this.value = normalized;
        this.pickerValue = normalized.slice(0, 7);
        this.hexDraft = normalized.toUpperCase();
        this.opacityPercent = Math.round((alphaByte(normalized) / 255) * 100);
        if (emit) this.onChange(normalized);
    }
}
