import { Injectable } from '@angular/core';
import * as faceapi from '@vladmandic/face-api';

const MODEL_URI = '/demos/face-models';

type TfRuntime = {
    getBackend: () => string;
    setBackend: (backend: 'webgl' | 'cpu') => Promise<unknown>;
    ready: () => Promise<void>;
};

@Injectable({ providedIn: 'root' })
export class FaceModelsService {
    private _loadPromise: Promise<void> | null = null;
    private _tfReadyPromise: Promise<void> | null = null;

    ensureTfReady(): Promise<void> {
        if (typeof window === 'undefined') {
            return Promise.reject(new Error('TensorFlow can only initialize in the browser'));
        }
        if (!this._tfReadyPromise) {
            this._tfReadyPromise = (async () => {
                const tf = faceapi.tf as unknown as TfRuntime;
                if (!tf.getBackend()) {
                    try {
                        await tf.setBackend('webgl');
                    } catch {
                        await tf.setBackend('cpu');
                    }
                }
                await tf.ready();
            })().catch((err) => {
                this._tfReadyPromise = null;
                throw err;
            });
        }
        return this._tfReadyPromise;
    }

    loadFaceModels(): Promise<void> {
        if (typeof window === 'undefined') {
            return Promise.reject(new Error('Face models can only load in the browser'));
        }
        if (!this._loadPromise) {
            this._loadPromise = (async () => {
                await this.ensureTfReady();
                await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URI);
                await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URI);
                await this.ensureTfReady();
            })().catch((err) => {
                this._loadPromise = null;
                throw err;
            });
        }
        return this._loadPromise;
    }
}
