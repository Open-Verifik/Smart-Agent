import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { TranslocoModule } from '@jsverse/transloco';

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
const ACCEPTED_EXT = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
const DPI = 96;
const CM_PER_INCH = 2.54;

type SizeUnit = 'percent' | 'pixels' | 'cm' | 'inches';
type ResizeMode = 'stretch' | 'crop' | 'fit';
type OutputFormat = 'jpeg' | 'png' | 'gif';
type SmartReduceState = 'idle' | 'configuring' | 'processing' | 'done';

@Component({
    selector: 'smart-reduce',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
    ],
    templateUrl: './smart-reduce.component.html',
    styleUrls: ['./smart-reduce.component.scss'],
})
export class SmartReduceComponent implements OnDestroy {
    private _cdr = inject(ChangeDetectorRef);

    @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
    @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

    // State
    sourceFile: File | null = null;
    sourceUrl: string | null = null;
    sourceWidth = 0;
    sourceHeight = 0;
    sourceSizeKb = 0;

    targetWidth = 0;
    targetHeight = 0;
    sizeUnit: SizeUnit = 'pixels';
    aspectLocked = true;
    resizeMode: ResizeMode = 'fit';
    outputFormat: OutputFormat = 'jpeg';
    quality = 90;
    backgroundColor = '#ffffff';

    processedBlob: Blob | null = null;
    processedSizeKb = 0;
    isProcessing = false;
    isComplete = false;
    errorMessage: string | null = null;

    state: SmartReduceState = 'idle';

    readonly sizeUnits: { value: SizeUnit; label: string }[] = [
        { value: 'percent', label: 'smartReduce.unitPercent' },
        { value: 'pixels', label: 'smartReduce.unitPixels' },
        { value: 'cm', label: 'smartReduce.unitCm' },
        { value: 'inches', label: 'smartReduce.unitInches' },
    ];

    readonly resizeModes: { value: ResizeMode; label: string }[] = [
        { value: 'stretch', label: 'smartReduce.stretch' },
        { value: 'crop', label: 'smartReduce.crop' },
        { value: 'fit', label: 'smartReduce.fit' },
    ];

    readonly outputFormats: { value: OutputFormat; label: string }[] = [
        { value: 'jpeg', label: 'JPG' },
        { value: 'png', label: 'PNG' },
        { value: 'gif', label: 'GIF' },
    ];

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) this.loadFile(file);
        input.value = '';
    }

    onDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer?.files?.[0];
        if (file) this.loadFile(file);
    }

    onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
    }

    loadFile(file: File): void {
        this.errorMessage = null;
        const ext = '.' + (file.name.split('.').pop()?.toLowerCase() ?? '');
        const validType = ACCEPTED_TYPES.includes(file.type);
        const validExt = ACCEPTED_EXT.includes(ext);

        if (!validType && !validExt) {
            this.errorMessage = 'smartReduce.unsupportedFormat';
            this._cdr.markForCheck();
            return;
        }

        this.revokeSourceUrl();
        this.sourceFile = file;
        this.sourceUrl = URL.createObjectURL(file);
        this.processedBlob = null;
        this.isComplete = false;
        this.state = 'configuring';

        const img = new Image();
        img.onload = () => {
            this.sourceWidth = img.naturalWidth;
            this.sourceHeight = img.naturalHeight;
            this.sourceSizeKb = Math.round(file.size / 1024);
            this.targetWidth = this.sourceWidth;
            this.targetHeight = this.sourceHeight;
            this._cdr.markForCheck();
        };
        img.onerror = () => {
            this.errorMessage = 'smartReduce.unsupportedFormat';
            this._cdr.markForCheck();
        };
        img.src = this.sourceUrl;
    }

    private revokeSourceUrl(): void {
        if (this.sourceUrl) {
            URL.revokeObjectURL(this.sourceUrl);
            this.sourceUrl = null;
        }
    }

    onWidthChange(): void {
        if (this.aspectLocked && this.sourceWidth > 0 && this.sourceHeight > 0) {
            const ratio = this.sourceHeight / this.sourceWidth;
            this.targetHeight = Math.round(this.targetWidth * ratio);
        }
    }

    onHeightChange(): void {
        if (this.aspectLocked && this.sourceWidth > 0 && this.sourceHeight > 0) {
            const ratio = this.sourceWidth / this.sourceHeight;
            this.targetWidth = Math.round(this.targetHeight * ratio);
        }
    }

    onUnitChange(): void {
        if (this.sizeUnit === 'percent') {
            this.targetWidth = 100;
            this.targetHeight = 100;
        } else if (this.sizeUnit === 'pixels') {
            this.targetWidth = this.sourceWidth;
            this.targetHeight = this.sourceHeight;
        } else {
            this.targetWidth = Math.round((this.sourceWidth / DPI) * CM_PER_INCH);
            this.targetHeight = Math.round((this.sourceHeight / DPI) * CM_PER_INCH);
        }
        this._cdr.markForCheck();
    }

    getTargetPixels(): { w: number; h: number } {
        if (this.sizeUnit === 'pixels') {
            return { w: this.targetWidth, h: this.targetHeight };
        }
        if (this.sizeUnit === 'percent') {
            return {
                w: Math.round((this.sourceWidth * this.targetWidth) / 100),
                h: Math.round((this.sourceHeight * this.targetHeight) / 100),
            };
        }
        const pxPerUnit = this.sizeUnit === 'inches' ? DPI : DPI / CM_PER_INCH;
        return {
            w: Math.round(this.targetWidth * pxPerUnit),
            h: Math.round(this.targetHeight * pxPerUnit),
        };
    }

    resize(): void {
        if (!this.sourceUrl || !this.sourceFile) return;

        this.isProcessing = true;
        this.state = 'processing';
        this.errorMessage = null;
        this._cdr.markForCheck();

        const img = new Image();
        img.onload = () => {
            try {
                const { w, h } = this.getTargetPixels();
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) throw new Error('Canvas not supported');

                let drawW = w;
                let drawH = h;
                let sx = 0;
                let sy = 0;
                let sWidth = img.naturalWidth;
                let sHeight = img.naturalHeight;

                if (this.resizeMode === 'fit') {
                    const scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
                    drawW = Math.round(img.naturalWidth * scale);
                    drawH = Math.round(img.naturalHeight * scale);
                } else if (this.resizeMode === 'crop') {
                    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
                    sWidth = Math.round(w / scale);
                    sHeight = Math.round(h / scale);
                    sx = (img.naturalWidth - sWidth) / 2;
                    sy = (img.naturalHeight - sHeight) / 2;
                }

                canvas.width = drawW;
                canvas.height = drawH;

                ctx.fillStyle = this.backgroundColor;
                ctx.fillRect(0, 0, drawW, drawH);

                if (this.resizeMode === 'crop') {
                    ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, drawW, drawH);
                } else {
                    ctx.drawImage(img, 0, 0, drawW, drawH);
                }

                const mime =
                    this.outputFormat === 'jpeg'
                        ? 'image/jpeg'
                        : this.outputFormat === 'png'
                          ? 'image/png'
                          : 'image/gif';
                const quality = this.outputFormat === 'jpeg' ? this.quality / 100 : undefined;

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            this.processedBlob = blob;
                            this.processedSizeKb = Math.round(blob.size / 1024);
                            this.isComplete = true;
                            this.state = 'done';
                        } else {
                            this.state = 'configuring';
                        }
                        this.isProcessing = false;
                        this._cdr.markForCheck();
                    },
                    mime,
                    quality
                );
            } catch (err) {
                this.errorMessage = 'Error processing image';
                this.isProcessing = false;
                this.state = 'configuring';
                this._cdr.markForCheck();
            }
        };
        img.onerror = () => {
            this.errorMessage = 'Error loading image';
            this.isProcessing = false;
            this.state = 'configuring';
            this._cdr.markForCheck();
        };
        img.src = this.sourceUrl;
    }

    download(): void {
        if (!this.processedBlob || !this.sourceFile) return;

        const ext = this.outputFormat === 'jpeg' ? '.jpg' : '.' + this.outputFormat;
        const baseName = this.sourceFile.name.replace(/\.[^.]+$/, '');
        const a = document.createElement('a');
        a.href = URL.createObjectURL(this.processedBlob);
        a.download = baseName + '_resized' + ext;
        a.click();
        URL.revokeObjectURL(a.href);
    }

    reset(): void {
        this.revokeSourceUrl();
        this.sourceFile = null;
        this.sourceUrl = null;
        this.sourceWidth = 0;
        this.sourceHeight = 0;
        this.sourceSizeKb = 0;
        this.targetWidth = 0;
        this.targetHeight = 0;
        this.processedBlob = null;
        this.processedSizeKb = 0;
        this.isProcessing = false;
        this.isComplete = false;
        this.state = 'idle';
        this.errorMessage = null;
        this._cdr.markForCheck();
    }

    resizeAgain(): void {
        this.processedBlob = null;
        this.processedSizeKb = 0;
        this.isComplete = false;
        this.state = 'configuring';
        this._cdr.markForCheck();
    }

    getCompressionRatio(): number {
        if (this.sourceSizeKb <= 0) return 0;
        return Math.round((1 - this.processedSizeKb / this.sourceSizeKb) * 100);
    }

    triggerFileInput(): void {
        this.fileInput?.nativeElement?.click();
    }

    formatQuality = (v: number): string => v + '%';

    ngOnDestroy(): void {
        this.revokeSourceUrl();
    }
}
