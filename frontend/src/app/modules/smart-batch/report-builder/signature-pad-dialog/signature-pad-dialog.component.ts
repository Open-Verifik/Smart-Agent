import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

type SignatureMode = 'draw' | 'type' | 'upload';

interface SignatureFont {
    id: string;
    family: string;
}

const SIGNATURE_FONTS: SignatureFont[] = [
    { id: 'great-vibes', family: '"Great Vibes", cursive' },
    { id: 'allura', family: '"Allura", cursive' },
    { id: 'sacramento', family: '"Sacramento", cursive' },
    { id: 'alex-brush', family: '"Alex Brush", cursive' },
    { id: 'dancing-script', family: '"Dancing Script", cursive' },
    { id: 'pinyon-script', family: '"Pinyon Script", cursive' },
];

const SIGNATURE_COLORS = [
    { id: 'black', value: '#111111', labelKey: 'smartReport.signatureColorBlack' },
    { id: 'blue', value: '#2563eb', labelKey: 'smartReport.signatureColorBlue' },
    { id: 'red', value: '#dc2626', labelKey: 'smartReport.signatureColorRed' },
] as const;

@Component({
    selector: 'signature-pad-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    template: `
        <div class="flex items-center justify-between px-5 pt-4">
            <h2 class="text-base font-medium text-stone-800 dark:text-stone-100">
                {{ 'smartReport.createSignature' | transloco }}
            </h2>
            <button type="button" mat-icon-button mat-dialog-close [attr.aria-label]="'smartReport.close' | transloco">
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <mat-dialog-content class="!pt-2">
            <div class="grid grid-cols-3 overflow-hidden rounded-md border border-stone-300 dark:border-gray-600">
                @for (tab of modes; track tab) {
                    <button
                        type="button"
                        class="py-2 text-sm font-semibold"
                        [ngClass]="
                            mode === tab
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-stone-700 dark:bg-gray-900 dark:text-stone-200'
                        "
                        (click)="mode = tab"
                    >
                        {{ tabLabel(tab) | transloco }}
                    </button>
                }
            </div>

            @if (mode === 'upload') {
                <div
                    class="mt-3 flex h-52 flex-col items-center justify-center rounded-lg border border-dashed border-stone-300 bg-slate-50 px-4 text-center dark:border-gray-600 dark:bg-gray-950"
                    [class.border-blue-400]="dragOver"
                    (dragover)="onDragOver($event)"
                    (dragleave)="dragOver = false"
                    (drop)="onDrop($event)"
                >
                    @if (uploadPreview) {
                        <img [src]="uploadPreview" alt="" class="max-h-32 max-w-full object-contain" />
                        <button type="button" class="mt-2 text-sm text-blue-600 hover:underline" (click)="clear()">
                            {{ 'smartReport.clear' | transloco }}
                        </button>
                    } @else {
                        <p class="text-sm text-stone-500">{{ 'smartReport.signatureDrop' | transloco }}</p>
                        <p class="my-2 text-xs text-stone-400">{{ 'smartReport.signatureOr' | transloco }}</p>
                        <button
                            type="button"
                            class="rounded-md border border-blue-500 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50"
                            (click)="fileInput.click()"
                        >
                            {{ 'smartReport.signatureChoose' | transloco }}
                        </button>
                    }
                </div>
                <input #fileInput type="file" accept="image/png,image/jpeg,image/webp" class="hidden" (change)="onFile($event)" />
            } @else {
                <div class="relative mt-3 h-52 overflow-hidden rounded-lg border border-stone-200 bg-slate-50 dark:border-gray-700 dark:bg-gray-950">
                    @if (mode === 'draw') {
                        <canvas
                            #pad
                            class="block h-full w-full cursor-crosshair touch-none"
                            (pointerdown)="startDrawing($event)"
                            (pointermove)="drawStroke($event)"
                            (pointerup)="stopDrawing($event)"
                            (pointercancel)="stopDrawing($event)"
                        ></canvas>
                    } @else if (typedName.trim()) {
                        <div
                            class="flex h-full items-center justify-center px-6 pb-6 text-5xl leading-none"
                            [style.fontFamily]="selectedFont.family"
                            [style.color]="penColor"
                        >
                            {{ typedName.trim() }}
                        </div>
                    }
                    <div class="pointer-events-none absolute inset-x-8 bottom-10 border-b border-stone-300 dark:border-gray-600"></div>
                    <div class="pointer-events-none absolute inset-x-3 bottom-2 flex items-center justify-between text-sm">
                        <span class="flex-1 text-center text-stone-400">
                            @if (mode === 'draw' && !hasDrawing) {
                                {{ 'smartReport.signatureDrawHint' | transloco }}
                            }
                            @if (mode === 'type' && !typedName.trim()) {
                                {{ 'smartReport.signatureTypeHint' | transloco }}
                            }
                        </span>
                        <button type="button" class="pointer-events-auto text-blue-600 hover:underline" (click)="clear()">
                            {{ 'smartReport.clear' | transloco }}
                        </button>
                    </div>
                </div>
            }

            @if (mode === 'type') {
                <input
                    type="text"
                    class="mt-3 w-full rounded-md border border-stone-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-950 dark:text-white"
                    [placeholder]="'smartReport.signatureName' | transloco"
                    [(ngModel)]="typedName"
                />
                <div class="mt-2 flex gap-2 overflow-x-auto pb-1">
                    @for (font of fonts; track font.id) {
                        <button
                            type="button"
                            class="shrink-0 rounded-lg border px-3 py-2 text-2xl leading-none"
                            [class.border-blue-600]="selectedFont.id === font.id"
                            [class.bg-blue-50]="selectedFont.id === font.id"
                            [class.border-stone-200]="selectedFont.id !== font.id"
                            [style.fontFamily]="font.family"
                            [style.color]="penColor"
                            (click)="selectedFont = font"
                        >
                            {{ previewName() }}
                        </button>
                    }
                </div>
            }

            <div class="mt-3 flex items-center gap-2">
                <span class="mx-1 h-5 w-px bg-stone-300 dark:bg-gray-600"></span>
                @for (color of colors; track color.id) {
                    <button
                        type="button"
                        class="h-6 w-6 rounded-full"
                        [style.background]="color.value"
                        [class.ring-2]="penColor === color.value"
                        [class.ring-offset-2]="penColor === color.value"
                        [class.ring-stone-700]="penColor === color.value"
                        [attr.aria-label]="color.labelKey | transloco"
                        (click)="setColor(color.value)"
                    ></button>
                }
            </div>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="!px-5 !pb-4">
            <button mat-flat-button color="primary" [disabled]="!canCreate()" (click)="save()">
                {{ 'smartReport.signatureCreate' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            canvas {
                touch-action: none;
            }
        `,
    ],
})
export class SignaturePadDialogComponent {
    private _dialogRef = inject(MatDialogRef<SignaturePadDialogComponent, string | undefined>);
    private _transloco = inject(TranslocoService);

    readonly modes: SignatureMode[] = ['draw', 'type', 'upload'];
    readonly fonts = SIGNATURE_FONTS;
    readonly colors = SIGNATURE_COLORS;

    mode: SignatureMode = 'draw';
    penColor: string = SIGNATURE_COLORS[0].value;
    typedName = '';
    selectedFont: SignatureFont = SIGNATURE_FONTS[0];
    hasDrawing = false;
    dragOver = false;
    uploadSource: string | null = null;
    uploadPreview: string | null = null;

    @ViewChild('pad')
    set padRef(ref: ElementRef<HTMLCanvasElement> | undefined) {
        this._canvas = ref?.nativeElement ?? null;
        if (!this._canvas) return;
        requestAnimationFrame(() => this._bindCanvas());
    }

    private _canvas: HTMLCanvasElement | null = null;
    private _ctx: CanvasRenderingContext2D | null = null;
    private _strokes: { x: number; y: number }[][] = [];
    private _current: { x: number; y: number }[] | null = null;

    tabLabel(tab: SignatureMode): string {
        if (tab === 'type') return 'smartReport.signatureTabType';
        if (tab === 'upload') return 'smartReport.signatureTabUpload';
        return 'smartReport.signatureTabDraw';
    }

    previewName(): string {
        const typed = this.typedName.trim();
        return typed || this._transloco.translate('smartReport.signatureSample');
    }

    setColor(value: string): void {
        this.penColor = value;
        if (this.mode === 'draw') this._redraw();
        if (this.uploadSource) void this._refreshUploadPreview();
    }

    clear(): void {
        if (this.mode === 'type') {
            this.typedName = '';
            return;
        }
        if (this.mode === 'upload') {
            this.uploadSource = null;
            this.uploadPreview = null;
            return;
        }
        this._strokes = [];
        this._current = null;
        this.hasDrawing = false;
        this._redraw();
    }

    canCreate(): boolean {
        if (this.mode === 'draw') return this.hasDrawing;
        if (this.mode === 'type') return this.typedName.trim().length > 0;
        return Boolean(this.uploadSource);
    }

    async save(): Promise<void> {
        if (!this.canCreate()) return;
        if (this.mode === 'draw' && this._canvas) {
            this._dialogRef.close(this._canvas.toDataURL('image/png'));
            return;
        }
        if (this.mode === 'type') {
            this._dialogRef.close(await this._renderTyped());
            return;
        }
        if (this.uploadSource) {
            this._dialogRef.close(await this._tintSignature(this.uploadSource, this.penColor));
        }
    }

    startDrawing(event: PointerEvent): void {
        if (!this._canvas) return;
        event.preventDefault();
        this._canvas.setPointerCapture(event.pointerId);
        this._current = [this._point(event)];
        this._strokes.push(this._current);
        this.hasDrawing = true;
        this._redraw();
    }

    drawStroke(event: PointerEvent): void {
        if (!this._current || !this._canvas) return;
        this._current.push(this._point(event));
        this._redraw();
    }

    stopDrawing(event: PointerEvent): void {
        if (this._canvas?.hasPointerCapture(event.pointerId)) {
            this._canvas.releasePointerCapture(event.pointerId);
        }
        this._current = null;
    }

    onDragOver(event: DragEvent): void {
        event.preventDefault();
        this.dragOver = true;
    }

    onDrop(event: DragEvent): void {
        event.preventDefault();
        this.dragOver = false;
        const file = event.dataTransfer?.files?.[0];
        if (file) void this._readFile(file);
    }

    onFile(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) void this._readFile(file);
        input.value = '';
    }

    private _point(event: PointerEvent): { x: number; y: number } {
        const rect = this._canvas!.getBoundingClientRect();
        return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    private _bindCanvas(): void {
        const canvas = this._canvas;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) return;
        const ratio = window.devicePixelRatio || 1;
        canvas.width = Math.round(rect.width * ratio);
        canvas.height = Math.round(rect.height * ratio);
        this._ctx = canvas.getContext('2d');
        this._redraw();
    }

    private _redraw(): void {
        const canvas = this._canvas;
        const ctx = this._ctx;
        if (!canvas || !ctx) return;
        const rect = canvas.getBoundingClientRect();
        const ratio = rect.width > 0 ? canvas.width / rect.width : 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2.6 * ratio;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.penColor;
        ctx.fillStyle = this.penColor;
        for (const stroke of this._strokes) {
            if (!stroke.length) continue;
            if (stroke.length === 1) {
                ctx.beginPath();
                ctx.arc(stroke[0].x * ratio, stroke[0].y * ratio, ctx.lineWidth / 2, 0, Math.PI * 2);
                ctx.fill();
                continue;
            }
            ctx.beginPath();
            ctx.moveTo(stroke[0].x * ratio, stroke[0].y * ratio);
            for (let index = 1; index < stroke.length; index++) {
                ctx.lineTo(stroke[index].x * ratio, stroke[index].y * ratio);
            }
            ctx.stroke();
        }
    }

    private async _renderTyped(): Promise<string> {
        const text = this.typedName.trim();
        const family = this.selectedFont.family;
        try {
            await document.fonts.load(`80px ${family}`);
        } catch {
            /* the fallback cursive still paints */
        }
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 420;
        const ctx = canvas.getContext('2d');
        if (!ctx) return '';
        ctx.fillStyle = this.penColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        let size = 160;
        ctx.font = `${size}px ${family}`;
        while (ctx.measureText(text).width > canvas.width - 80 && size > 42) {
            size -= 4;
            ctx.font = `${size}px ${family}`;
        }
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL('image/png');
    }

    private async _readFile(file: File): Promise<void> {
        if (!file.type.startsWith('image/') || file.size > 8 * 1024 * 1024) return;
        const source = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result || ''));
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
        this.uploadSource = source;
        await this._refreshUploadPreview();
    }

    private async _refreshUploadPreview(): Promise<void> {
        if (!this.uploadSource) return;
        this.uploadPreview = await this._tintSignature(this.uploadSource, this.penColor);
    }

    private async _tintSignature(src: string, color: string): Promise<string> {
        const image = await this._loadImage(src);
        const maxWidth = 1000;
        const maxHeight = 360;
        const scale = Math.min(maxWidth / image.width, maxHeight / image.height, 1);
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return src;
        ctx.drawImage(image, 0, 0, width, height);
        const frame = ctx.getImageData(0, 0, width, height);
        const rgb = this._hexRgb(color);
        const pixels = frame.data;
        for (let index = 0; index < pixels.length; index += 4) {
            const alpha = pixels[index + 3];
            const luminance = pixels[index] * 0.3 + pixels[index + 1] * 0.59 + pixels[index + 2] * 0.11;
            if (alpha < 16 || luminance > 245) {
                pixels[index + 3] = 0;
                continue;
            }
            pixels[index] = rgb[0];
            pixels[index + 1] = rgb[1];
            pixels[index + 2] = rgb[2];
        }
        ctx.putImageData(frame, 0, 0);
        return canvas.toDataURL('image/png');
    }

    private _hexRgb(hex: string): [number, number, number] {
        const value = hex.replace('#', '');
        return [
            parseInt(value.slice(0, 2), 16),
            parseInt(value.slice(2, 4), 16),
            parseInt(value.slice(4, 6), 16),
        ];
    }

    private _loadImage(src: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error('signature image'));
            image.src = src;
        });
    }
}
