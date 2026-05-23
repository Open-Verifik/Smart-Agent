import { Injectable } from '@angular/core';
import * as faceapi from '@vladmandic/face-api';

const MODEL_URI = '/demos/face-models';
const MIN_CONFIDENCE = 0.1;
const PADDING = 0.3;

type TfRuntime = {
    getBackend: () => string;
    setBackend: (backend: 'webgl' | 'cpu') => Promise<unknown>;
    ready: () => Promise<void>;
};

@Injectable({ providedIn: 'root' })
export class FaceCropService {
    private loadPromise: Promise<void> | null = null;
    private tfReadyPromise: Promise<void> | null = null;

    ensureTfReady(): Promise<void> {
        if (typeof window === 'undefined') {
            return Promise.reject(new Error('TensorFlow can only initialize in the browser'));
        }
        if (!this.tfReadyPromise) {
            this.tfReadyPromise = (async () => {
                const tf = faceapi.tf as unknown as TfRuntime;
                if (!tf.getBackend()) {
                    try {
                        await tf.setBackend('webgl');
                    } catch {
                        await tf.setBackend('cpu');
                    }
                }
                await tf.ready();
            })().catch((error) => {
                this.tfReadyPromise = null;
                throw error;
            });
        }
        return this.tfReadyPromise;
    }

    loadFaceModels(): Promise<void> {
        if (typeof window === 'undefined') {
            return Promise.reject(new Error('Face models can only load in the browser'));
        }
        if (!this.loadPromise) {
            this.loadPromise = (async () => {
                await this.ensureTfReady();
                await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URI);
                await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URI);
                await this.ensureTfReady();
            })();
        }
        return this.loadPromise;
    }

    async cropLargestFaceBase64(rawBase64: string, mime = 'image/jpeg'): Promise<string> {
        await this.loadFaceModels();

        const dataUrl = rawBase64.startsWith('data:') ? rawBase64 : `data:${mime};base64,${rawBase64}`;
        const img = await faceapi.fetchImage(dataUrl);

        const detections = await faceapi.detectAllFaces(
            img,
            new faceapi.SsdMobilenetv1Options({ minConfidence: MIN_CONFIDENCE })
        );

        if (detections.length === 0) {
            throw new Error('No faces found in the image');
        }

        const largest = detections.reduce((best, cur) => {
            const a = best.box.width * best.box.height;
            const b = cur.box.width * cur.box.height;
            return b > a ? cur : best;
        });

        const { x, y, width, height } = largest.box;
        const paddedWidth = width * (1 + PADDING);
        const paddedHeight = height * (1 + PADDING);
        const paddedX = Math.max(0, x - (width * PADDING) / 2);
        const paddedY = Math.max(0, y - (height * PADDING) / 2);

        const maxX = img.width;
        const maxY = img.height;
        const clampedWidth = Math.min(paddedWidth, maxX - paddedX);
        const clampedHeight = Math.min(paddedHeight, maxY - paddedY);

        if (clampedWidth <= 0 || clampedHeight <= 0) {
            throw new Error('Invalid extract area after padding');
        }

        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(clampedWidth);
        canvas.height = Math.floor(clampedHeight);
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Could not get canvas context');

        ctx.drawImage(
            img,
            Math.floor(paddedX),
            Math.floor(paddedY),
            Math.floor(clampedWidth),
            Math.floor(clampedHeight),
            0,
            0,
            Math.floor(clampedWidth),
            Math.floor(clampedHeight)
        );

        const jpeg = canvas.toDataURL('image/jpeg', 0.92);
        const comma = jpeg.indexOf(',');
        if (comma === -1) throw new Error('Invalid data URL output');
        return jpeg.slice(comma + 1);
    }
}
