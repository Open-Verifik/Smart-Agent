import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
    if (/^#([0-9a-f]{8})$/i.test(value)) value = value.slice(0, 7);
    if (!/^#[0-9a-f]{6}$/i.test(value)) return null;
    return value.toLowerCase();
};

@Component({
    selector: 'color-hex-field',
    standalone: true,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorHexFieldComponent),
            multi: true,
        },
    ],
    template: `
        <div class="flex min-w-0 items-center gap-2">
            <input
                type="color"
                class="h-8 w-10 shrink-0 cursor-pointer rounded-md border border-stone-200 bg-white p-0.5 dark:border-gray-700"
                [disabled]="disabled"
                [value]="pickerValue"
                (input)="commitFromPicker($event)"
            />
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
    `,
})
export class ColorHexFieldComponent implements ControlValueAccessor {
    placeholder = input('#RRGGBB');
    ariaLabel = input('Hex');

    pickerValue = '#000000';
    hexDraft = '#000000';
    disabled = false;

    private onChange: (value: string) => void = () => undefined;
    private onTouched: () => void = () => undefined;

    writeValue(value: string | null): void {
        const next = normalizeHexColor(value) ?? '#000000';
        if (next === this.pickerValue) return;
        this.pickerValue = next;
        this.hexDraft = next.toUpperCase();
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
        const next = normalizeHexColor((event.target as HTMLInputElement).value);
        if (!next) return;
        this.commit(next);
    }

    onDraft(event: Event): void {
        const raw = (event.target as HTMLInputElement).value;
        this.hexDraft = raw;
        const next = normalizeHexColor(raw);
        if (!next) return;
        this.commit(next);
    }

    onBlur(): void {
        this.onTouched();
        const next = normalizeHexColor(this.hexDraft);
        if (next) {
            this.commit(next);
            return;
        }
        this.hexDraft = this.pickerValue.toUpperCase();
    }

    private commit(normalized: string): void {
        this.pickerValue = normalized;
        this.hexDraft = normalized.toUpperCase();
        this.onChange(normalized);
    }
}
