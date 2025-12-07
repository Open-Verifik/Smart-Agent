import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { Observable, throwError, of } from 'rxjs';
import { catchError, shareReplay, switchMap, map } from 'rxjs/operators';

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

    // Load both main translation file and features file, then merge them
    const translation$ = this._httpClient
      .get<Translation>(`./i18n/${lang}.json`, {
        responseType: 'json',
        observe: 'body',
      })
      .pipe(
        // Load features file and merge
        switchMap((mainTranslations) => {
          return this._httpClient
            .get<Translation>(`./i18n/features-${lang}.json`, {
              responseType: 'json',
              observe: 'body',
            })
            .pipe(
              // Merge main translations with features
              map((featuresTranslations) => ({
                ...mainTranslations,
                ...featuresTranslations,
              })),
              // If features file fails, just return main translations
              catchError(() => of(mainTranslations)),
            );
        }),
        shareReplay(1),
        catchError((error: HttpErrorResponse) => {
          // Remove from cache on error so it can be retried
          this._cache.delete(lang);
          return throwError(() => error);
        }),
      );

    // Cache the observable
    this._cache.set(lang, translation$);
    return translation$;
  }
}
