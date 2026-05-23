import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
    ElementRef,
    inject,
} from '@angular/core';
import * as faceapi from '@vladmandic/face-api';
import { FaceCropService } from '../services/face-crop.service';
import {
    DEFAULT_FACE_GUIDE,
    DEFAULT_GUIDE_ASPECT_RATIO,
    evaluateGuidedFrame,
    getCenterAndRadius,
    type FaceGuideError,
} from '../services/face-guided-capture.service';

export type FaceGuidedCapturePayload = { dataUrl: string; base64: string };

const coverLayout = (containerW: number, containerH: number, intrinsicW: number, intrinsicH: number) => {
    const scale = Math.max(containerW / intrinsicW, containerH / intrinsicH);
    const ox = (containerW - intrinsicW * scale) / 2;
    const oy = (containerH - intrinsicH * scale) / 2;
    return { scale, ox, oy };
};

@Component({
    selector: 'app-face-guided-camera',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './face-guided-camera.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex min-h-0 w-full flex-col',
        '[class.flex-1]': 'fillFrame',
        '[class.h-full]': 'fillFrame',
    },
})
export class FaceGuidedCameraComponent implements OnInit, OnDestroy {
    @ViewChild('video') videoRef?: ElementRef<HTMLVideoElement>;
    @ViewChild('mask') maskRef?: ElementRef<HTMLCanvasElement>;
    @ViewChild('container') containerRef?: ElementRef<HTMLDivElement>;

    @Input() disabled = false;
    @Input() mirror = true;
    @Input() hideIdleExplainer = false;
    @Input() fillFrame = false;
    @Input() captureSuccessFeedbackMs = 700;
    @Input() successFrames = DEFAULT_FACE_GUIDE.successFramesRequired;
    @Input() tickMs = 160;

    @Output() captured = new EventEmitter<FaceGuidedCapturePayload>();
    @Output() captureError = new EventEmitter<string>();

    private _faceCrop = inject(FaceCropService);
    private _cdr = inject(ChangeDetectorRef);

    private stream: MediaStream | null = null;
    private tickInterval: ReturnType<typeof setInterval> | null = null;
    private rafRetryRef: number | null = null;
    private overlayRetryRef: number | null = null;
    private captureTimeoutRef: ReturnType<typeof setTimeout> | null = null;
    private resizeObserver: ResizeObserver | null = null;
    private streak = 0;
    private capturing = false;
    private overlayOk = false;
    private dimRetryCount = 0;
    private overlayRetryCount = 0;

    private readonly maxDimRetries = 90;
    private readonly maxOverlayRetries = 30;

    modelsReady = false;
    modelsError: string | null = null;
    cameraStarting = false;
    streamActive = false;
    guideError: FaceGuideError | null = null;
    statusOk = false;
    captureSuccess = false;

    ngOnInit(): void {
        void this._faceCrop.loadFaceModels().then(
            () => {
                this.modelsReady = true;
                this._cdr.markForCheck();
            },
            (e) => {
                this.modelsError = e instanceof Error ? e.message : 'Failed to load face models';
                this.captureError.emit(this.modelsError);
                this._cdr.markForCheck();
            }
        );
    }

    ngOnDestroy(): void {
        this.stopStream();
    }

    get viewfinderClass(): string {
        return this.fillFrame
            ? 'relative h-full w-full min-h-0 flex-1 overflow-hidden rounded-xl bg-black'
            : 'relative w-full overflow-hidden rounded-xl bg-black aspect-video max-h-[min(78vh,640px)]';
    }

    async startCamera(): Promise<void> {
        if (this.disabled || !this.modelsReady || this.capturing) return;
        this.cameraStarting = true;
        this.captureSuccess = false;
        this.guideError = null;
        this._cdr.markForCheck();

        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
                audio: false,
            });
            const video = this.videoRef?.nativeElement;
            if (!video) throw new Error('Camera preview unavailable');
            video.srcObject = this.stream;
            video.setAttribute('playsinline', 'true');
            await video.play();
            this.streamActive = true;
            this.streak = 0;

            const startLoop = () => {
                this.drawPlaceholderFromVideo();
                if (this.tickInterval) clearInterval(this.tickInterval);
                this.tickInterval = setInterval(() => void this.runTick(), this.tickMs);
                this.connectResizeObserver();
            };

            let started = false;
            const onReady = () => {
                if (started) return;
                started = true;
                startLoop();
            };

            if (video.videoWidth > 0 && video.videoHeight > 0) {
                onReady();
            } else {
                video.addEventListener('loadedmetadata', onReady, { once: true });
                video.addEventListener('playing', onReady, { once: true });
            }
        } catch {
            const msg = 'Camera access denied or unavailable';
            this.captureError.emit(msg);
            this.guideError = { kind: 'no_face', title: 'Camera blocked', subtitle: 'Allow camera access or use file upload' };
        } finally {
            this.cameraStarting = false;
            this._cdr.markForCheck();
        }
    }

    private stopStream(): void {
        if (this.tickInterval) {
            clearInterval(this.tickInterval);
            this.tickInterval = null;
        }
        if (this.rafRetryRef != null) {
            cancelAnimationFrame(this.rafRetryRef);
            this.rafRetryRef = null;
        }
        if (this.overlayRetryRef != null) {
            cancelAnimationFrame(this.overlayRetryRef);
            this.overlayRetryRef = null;
        }
        if (this.captureTimeoutRef) {
            clearTimeout(this.captureTimeoutRef);
            this.captureTimeoutRef = null;
        }
        this.disconnectResizeObserver();
        this.stream?.getTracks().forEach((t) => t.stop());
        this.stream = null;
        const video = this.videoRef?.nativeElement;
        if (video) video.srcObject = null;
        this.streamActive = false;
        this.streak = 0;
        this.capturing = false;
        this.captureSuccess = false;
        this.overlayOk = false;
        this.dimRetryCount = 0;
        this.overlayRetryCount = 0;
    }

    private drawPlaceholderFromVideo(): void {
        const video = this.videoRef?.nativeElement;
        if (!video) return;
        const w = video.videoWidth;
        const h = video.videoHeight;
        if (!w || !h) return;
        this.drawOverlay(w, h, false);
    }

    private connectResizeObserver(): void {
        const el = this.containerRef?.nativeElement;
        if (!el || typeof ResizeObserver === 'undefined') return;
        this.disconnectResizeObserver();
        this.resizeObserver = new ResizeObserver(() => {
            const video = this.videoRef?.nativeElement;
            if (!video?.videoWidth || !video.videoHeight) return;
            this.drawOverlay(video.videoWidth, video.videoHeight, this.overlayOk);
        });
        this.resizeObserver.observe(el);
    }

    private disconnectResizeObserver(): void {
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
    }

    private drawOverlay(intrinsicW: number, intrinsicH: number, ok: boolean): void {
        const canvas = this.maskRef?.nativeElement;
        const container = this.containerRef?.nativeElement;
        if (!canvas || !container) return;
        this.overlayOk = ok;
        const cw = container.clientWidth;
        const ch = container.clientHeight;
        if (!cw || !ch) {
            if (this.overlayRetryRef == null && this.overlayRetryCount < this.maxOverlayRetries) {
                this.overlayRetryCount += 1;
                this.overlayRetryRef = requestAnimationFrame(() => {
                    this.overlayRetryRef = null;
                    this.drawOverlay(intrinsicW, intrinsicH, ok);
                });
            }
            return;
        }
        this.overlayRetryCount = 0;
        canvas.width = cw;
        canvas.height = ch;
        const { scale, ox, oy } = coverLayout(cw, ch, intrinsicW, intrinsicH);
        const oval = getCenterAndRadius(intrinsicH, intrinsicW, DEFAULT_GUIDE_ASPECT_RATIO);
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const cx = ox + oval.center.x * scale;
        const cy = oy + oval.center.y * scale;
        const rx = oval.radius.x * scale;
        const ry = oval.radius.y * scale;
        ctx.clearRect(0, 0, cw, ch);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
        ctx.fillRect(0, 0, cw, ch);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.lineWidth = 4;
        ctx.strokeStyle = ok ? '#22c55e' : '#ef4444';
        ctx.stroke();
    }

    private async runTick(): Promise<void> {
        const video = this.videoRef?.nativeElement;
        if (!video || this.capturing || this.disabled) return;
        const w = video.videoWidth;
        const h = video.videoHeight;
        if (!w || !h) {
            if (this.dimRetryCount < this.maxDimRetries) {
                this.dimRetryCount += 1;
                this.rafRetryRef = requestAnimationFrame(() => {
                    this.rafRetryRef = null;
                    void this.runTick();
                });
            }
            return;
        }
        this.dimRetryCount = 0;

        const oval = getCenterAndRadius(h, w, DEFAULT_GUIDE_ASPECT_RATIO);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d')?.drawImage(video, 0, 0, w, h);

        try {
            await this._faceCrop.ensureTfReady();
            const detections = await faceapi
                .detectAllFaces(canvas, new faceapi.SsdMobilenetv1Options({ minConfidence: DEFAULT_FACE_GUIDE.ssdMinConfidence }))
                .withFaceLandmarks();

            if (!detections.length) {
                this.streak = 0;
                this.guideError = { kind: 'no_face', title: 'No face detected', subtitle: 'Position your face in the frame' };
                this.statusOk = false;
                this.drawOverlay(w, h, false);
                this._cdr.markForCheck();
                return;
            }

            const det = detections[0];
            const box = det.detection.box;
            const nose = det.landmarks.getNose()[3];
            const ev = evaluateGuidedFrame({
                imageWidth: w,
                imageHeight: h,
                oval,
                noseX: nose.x,
                noseY: nose.y,
                faceBoxWidth: box.width,
                faceBoxHeight: box.height,
            });

            if (ev.error) {
                this.streak = 0;
                this.guideError = ev.error;
                this.statusOk = false;
                this.drawOverlay(w, h, false);
                this._cdr.markForCheck();
                return;
            }

            this.streak += 1;
            this.guideError = null;
            this.statusOk = true;
            this.drawOverlay(w, h, true);

            if (this.streak >= this.successFrames) {
                this.capturing = true;
                this.captureSuccess = true;
                if (this.tickInterval) {
                    clearInterval(this.tickInterval);
                    this.tickInterval = null;
                }
                this._cdr.markForCheck();

                const finalize = () => {
                    const out = document.createElement('canvas');
                    out.width = w;
                    out.height = h;
                    out.getContext('2d')?.drawImage(video, 0, 0, w, h);
                    const dataUrl = out.toDataURL('image/jpeg', 0.92);
                    const comma = dataUrl.indexOf(',');
                    const base64 = comma === -1 ? '' : dataUrl.slice(comma + 1);
                    this.stopStream();
                    this.captured.emit({ dataUrl, base64 });
                    this._cdr.markForCheck();
                };

                if (this.captureSuccessFeedbackMs > 0) {
                    this.captureTimeoutRef = setTimeout(() => {
                        this.captureTimeoutRef = null;
                        finalize();
                    }, this.captureSuccessFeedbackMs);
                } else {
                    finalize();
                }
            }
            this._cdr.markForCheck();
        } catch (error) {
            this.streak = 0;
            this.statusOk = false;
            this.guideError = { kind: 'no_face', title: 'Face detection unavailable', subtitle: 'Reload the page or upload from gallery' };
            this.drawOverlay(w, h, false);
            this._cdr.markForCheck();
        }
    }
}
