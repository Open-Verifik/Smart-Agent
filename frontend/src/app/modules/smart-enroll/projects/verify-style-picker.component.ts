import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';

interface StylePreview {
    id: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
    page: string;
    card: string;
    ink: string;
    titleFont: string;
    titleWeight: string;
    titleTransform: string;
    titleTracking: string;
    button: string;
    buttonText: string;
    buttonRadius: string;
    buttonBorder: string;
}

const STYLES: StylePreview[] = [
    {
        id: 'a',
        page: '#e8ebe6',
        card: '#ffffff',
        ink: '#0e0f0c',
        titleFont: '"Inter", sans-serif',
        titleWeight: '900',
        titleTransform: 'none',
        titleTracking: '-0.04em',
        button: '#9fe870',
        buttonText: '#163300',
        buttonRadius: '999px',
        buttonBorder: '0',
    },
    {
        id: 'b',
        page: '#e5e5e5',
        card: '#ffffff',
        ink: '#000000',
        titleFont: '"Barlow Condensed", sans-serif',
        titleWeight: '700',
        titleTransform: 'uppercase',
        titleTracking: '-0.03em',
        button: '#000000',
        buttonText: '#ffffff',
        buttonRadius: '8px',
        buttonBorder: '0',
    },
    {
        id: 'c',
        page: '#ffffff',
        card: '#fafafa',
        ink: '#1e1e1e',
        titleFont: '"Outfit", sans-serif',
        titleWeight: '600',
        titleTransform: 'none',
        titleTracking: '-0.03em',
        button: '#0d111b',
        buttonText: '#ffffff',
        buttonRadius: '999px',
        buttonBorder: '0',
    },
    {
        id: 'd',
        page: '#000814',
        card: '#010d1e',
        ink: '#ffffff',
        titleFont: '"Space Grotesk", sans-serif',
        titleWeight: '600',
        titleTransform: 'none',
        titleTracking: '-0.02em',
        button: '#1c6cff',
        buttonText: '#ffffff',
        buttonRadius: '16px',
        buttonBorder: '0',
    },
    {
        id: 'e',
        page: '#f6f6fa',
        card: '#ffffff',
        ink: '#151581',
        titleFont: '"Inter Tight", "Inter", sans-serif',
        titleWeight: '400',
        titleTransform: 'none',
        titleTracking: '-0.03em',
        button: '#ffffff',
        buttonText: '#151581',
        buttonRadius: '48px',
        buttonBorder: '1px solid #a1a1cd',
    },
    {
        id: 'f',
        page: '#f2f2f2',
        card: '#ffffff',
        ink: '#000000',
        titleFont: '"Roboto Condensed", sans-serif',
        titleWeight: '900',
        titleTransform: 'none',
        titleTracking: '-0.033em',
        button: '#adff02',
        buttonText: '#000000',
        buttonRadius: '16px',
        buttonBorder: '1px solid #000000',
    },
];

const FONT_HREF =
    'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Inter+Tight:wght@400&family=Inter:wght@400;900&family=Outfit:wght@600&family=Roboto+Condensed:wght@900&family=Space+Grotesk:wght@600&display=swap';

@Component({
    selector: 'verify-style-picker',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './verify-style-picker.component.html',
    styleUrls: ['./verify-style-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyStylePickerComponent implements OnInit, OnDestroy {
    @Input() control: FormControl | null = null;

    readonly styles = STYLES;

    private _cdr = inject(ChangeDetectorRef);
    private _destroy$ = new Subject<void>();

    ngOnInit(): void {
        this._loadFonts();
        this.control?.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(() => this._cdr.markForCheck());
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    selected(): string {
        return String(this.control?.value || '');
    }

    choose(id: StylePreview['id']): void {
        if (!this.control) return;

        this.control.setValue(id);
        this.control.markAsDirty();
        this.control.markAsTouched();
    }

    private _loadFonts(): void {
        if (document.getElementById('verify-style-picker-fonts')) return;

        const sheet = document.createElement('link');

        sheet.id = 'verify-style-picker-fonts';
        sheet.rel = 'stylesheet';
        sheet.href = FONT_HREF;
        document.head.appendChild(sheet);
    }
}
