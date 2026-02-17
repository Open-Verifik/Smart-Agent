import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'signature-pad-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
    template: `
        <h2 mat-dialog-title class="flex items-center justify-between">
            Draw Signature
            <button mat-icon-button mat-dialog-close>
                <mat-icon>close</mat-icon>
            </button>
        </h2>
        <mat-dialog-content>
            <div class="border border-gray-300 rounded-lg overflow-hidden bg-white touch-none">
                <canvas
                    #canvas
                    width="600"
                    height="300"
                    class="block w-full h-auto cursor-crosshair"
                    (mousedown)="startDrawing($event)"
                    (mousemove)="draw($event)"
                    (mouseup)="stopDrawing()"
                    (mouseleave)="stopDrawing()"
                    (touchstart)="startDrawingTouch($event)"
                    (touchmove)="drawTouch($event)"
                    (touchend)="stopDrawing()"
                ></canvas>
            </div>
            <p class="text-xs text-gray-500 mt-2 text-center">
                Use your mouse or finger to sign above.
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="gap-2">
            <button mat-button (click)="clearCanvas()">Clear</button>
            <button mat-flat-button color="primary" (click)="save()">Save Signature</button>
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
export class SignaturePadDialogComponent implements AfterViewInit {
    private _dialogRef = inject(MatDialogRef<SignaturePadDialogComponent>);

    @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
    private ctx!: CanvasRenderingContext2D;
    private isDrawing = false;
    private lastX = 0;
    private lastY = 0;
    // Scale factor for high DPI
    private scaleX = 1;
    private scaleY = 1;

    ngAfterViewInit(): void {
        const canvas = this.canvasRef.nativeElement;
        // Keep internal resolution but scale context?
        // Actually, simplest is just to use the 600x300 as logical size,
        // but if we want high res output, we might want higher internal size.
        // Let's stick to the element size for coordinate mapping.

        const rect = canvas.getBoundingClientRect();
        // Set canvas buffer size to match display size * pixel ratio
        /*
        canvas.width = rect.width;
        canvas.height = rect.height;
        */
        // Actually let's trust the default resolution for simplicity unless it's blurry.
        // But drawing coordinates rely on getBoundingClientRect offset.

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        this.ctx = ctx;

        // Match buffer size to CSS size for 1:1 mapping (or handle scaling)
        // If I leave width=600 height=300 attributes and CSS w-full,
        // the browser scales the 600px buffer to fit the container.
        // This means mouse coordinates (screen pixels) need to be scaled to canvas buffer coordinates.

        this.scaleX = canvas.width / rect.width;
        this.scaleY = canvas.height / rect.height;

        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#000000';
    }

    startDrawing(e: MouseEvent): void {
        this.isDrawing = true;
        const rect = this.canvasRef.nativeElement.getBoundingClientRect();
        this.scaleX = this.canvasRef.nativeElement.width / rect.width;
        this.scaleY = this.canvasRef.nativeElement.height / rect.height;
        this.lastX = (e.clientX - rect.left) * this.scaleX;
        this.lastY = (e.clientY - rect.top) * this.scaleY;
    }

    draw(e: MouseEvent): void {
        if (!this.isDrawing) return;
        const rect = this.canvasRef.nativeElement.getBoundingClientRect();
        // Recalculate scale on every move? Overkill but safe.
        // Actually startDrawing is enough usually, but let's stick to startDrawing for perf.
        const x = (e.clientX - rect.left) * this.scaleX;
        const y = (e.clientY - rect.top) * this.scaleY;

        this._drawLine(this.lastX, this.lastY, x, y);
        this.lastX = x;
        this.lastY = y;
    }

    startDrawingTouch(e: TouchEvent): void {
        if (e.cancelable) e.preventDefault();
        this.isDrawing = true;
        const rect = this.canvasRef.nativeElement.getBoundingClientRect();
        this.scaleX = this.canvasRef.nativeElement.width / rect.width;
        this.scaleY = this.canvasRef.nativeElement.height / rect.height;
        const touch = e.touches[0];
        this.lastX = (touch.clientX - rect.left) * this.scaleX;
        this.lastY = (touch.clientY - rect.top) * this.scaleY;
    }

    drawTouch(e: TouchEvent): void {
        if (e.cancelable) e.preventDefault();
        if (!this.isDrawing) return;
        const rect = this.canvasRef.nativeElement.getBoundingClientRect();
        const touch = e.touches[0];
        const x = (touch.clientX - rect.left) * this.scaleX;
        const y = (touch.clientY - rect.top) * this.scaleY;

        this._drawLine(this.lastX, this.lastY, x, y);
        this.lastX = x;
        this.lastY = y;
    }

    stopDrawing(): void {
        this.isDrawing = false;
    }

    clearCanvas(): void {
        const canvas = this.canvasRef.nativeElement;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    save(): void {
        const dataUrl = this.canvasRef.nativeElement.toDataURL('image/png');
        this._dialogRef.close(dataUrl);
    }

    private _drawLine(x1: number, y1: number, x2: number, y2: number): void {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
}
