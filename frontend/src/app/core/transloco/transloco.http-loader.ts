import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private _httpClient = inject(HttpClient);
    private _cache = new Map<string, Observable<Translation>>();

    /**
     * Get translation
     *
     * @param lang
     */
    getTranslation(lang: string): Observable<Translation> {
        // Check if translation is already cached
        if (this._cache.has(lang)) {
            const cached = this._cache.get(lang)!;
            return cached;
        }

        // Create new request and cache it
        const translation$ = this._httpClient
            .get<Translation>(`./i18n/${lang}.json`, {
                responseType: 'json',
                observe: 'body',
            })
            .pipe(
                shareReplay(1),
                catchError((error: HttpErrorResponse) => {
                    // Remove from cache on error so it can be retried
                    this._cache.delete(lang);
                    return throwError(() => error);
                })
            );

        // Cache the observable
        this._cache.set(lang, translation$);
        return translation$;
    }
}
