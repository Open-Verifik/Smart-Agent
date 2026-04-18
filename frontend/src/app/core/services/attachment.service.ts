import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

/** Source bucket for an uploaded attachment (mirrors backend enum). */
export type AttachmentSource = 'project' | 'support-ticket';

/** Minimal attachment shape returned by `POST /v2/attachments`. */
export interface Attachment {
    _id: string;
    name: string;
    url: string;
    size?: number;
    type?: string;
    source?: AttachmentSource;
    preview?: string;
    metadata?: Record<string, unknown>;
}

interface CreateAttachmentBody {
    file: string;
    name: string;
    size?: number;
    type?: string;
    source?: AttachmentSource;
    expirationDays?: number;
    metadata?: Record<string, unknown>;
}

/**
 * Thin client for the verifik backend `/v2/attachments` route.
 *
 * Mirrors the surface used by the client-panel `AttachmentService`
 * (file is uploaded as base64 and the response carries the CDN `url`).
 */
@Injectable({ providedIn: 'root' })
export class AttachmentService {
    private _http = inject(HttpClient);

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    /**
     * Upload a file to the backend; returns the persisted attachment record.
     *
     * The file is read as a base64 data URI and posted to
     * `POST /v2/attachments`. Use {@link deleteAttachment} to clean up later.
     */
    uploadAttachment(
        file: File,
        opts: { source: AttachmentSource; expirationDays?: number; metadata?: Record<string, unknown> } = { source: 'project' }
    ): Observable<{ data: Attachment }> {
        return new Observable((observer) => {
            const reader = new FileReader();
            reader.onload = () => {
                const body: CreateAttachmentBody = {
                    file: reader.result as string,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    source: opts.source,
                    expirationDays: opts.expirationDays,
                    metadata: { status: 'active', uploadedAt: new Date().toISOString(), ...(opts.metadata || {}) },
                };
                this._http
                    .post<{ data: Attachment }>(`${this.apiUrl}/v2/attachments`, body, { headers: this.authHeaders })
                    .pipe(catchError((err) => throwError(() => err)))
                    .subscribe({
                        next: (res) => observer.next(res),
                        error: (err) => observer.error(err),
                        complete: () => observer.complete(),
                    });
            };
            reader.onerror = () => observer.error(new Error('Failed to read file'));
            reader.readAsDataURL(file);
        });
    }

    /** Best-effort delete (the backend cleans up expired attachments anyway). */
    deleteAttachment(id?: string): Observable<unknown> {
        if (!id) return new Observable((o) => (o.next(null), o.complete()));
        return this._http
            .delete(`${this.apiUrl}/v2/attachments/${id}`, { headers: this.authHeaders })
            .pipe(catchError((err) => throwError(() => err)));
    }
}
